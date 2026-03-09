import { useState, useMemo, useRef, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import chapelsRaw from "./data/fsspx-chapels.json";

/* ═══════════════════ PALETTE ═══════════════════ */
const bg = "#FAFAF5";
const surface = "#FFFFFF";
const surfaceDim = "#F3EEE6";
const text = "#1A1612";
const textDim = "#6B6156";
const textMuted = "#9C9488";
const crimson = "#8B1A1A";
const gold = "#B8860B";
const olive = "#2D5016";
const navy = "#161412";
const border = "rgba(26, 22, 18, 0.08)";
const fontH = "'Space Grotesk', system-ui, sans-serif";
const fontB = "'Source Serif 4', Georgia, serif";
const fontM = "'JetBrains Mono', monospace";

/* ═══════════════════ DATA ═══════════════════ */
const chapels = chapelsRaw.filter(c => c.lat && c.lng);
const countries = [...new Set(chapels.map(c => c.country).filter(Boolean))].sort();
const countByCountry = {};
chapels.forEach(c => { if (c.country) countByCountry[c.country] = (countByCountry[c.country] || 0) + 1; });

/* ═══════════════════ UTILS ═══════════════════ */
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getBoundsForChapels(list) {
  if (!list.length) return null;
  let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;
  list.forEach(c => {
    if (c.lat < minLat) minLat = c.lat;
    if (c.lat > maxLat) maxLat = c.lat;
    if (c.lng < minLng) minLng = c.lng;
    if (c.lng > maxLng) maxLng = c.lng;
  });
  const pad = 0.5;
  return [[minLat - pad, minLng - pad], [maxLat + pad, maxLng + pad]];
}

/* ═══════════════════ DOT MARKER ═══════════════════ */
const chapelIcon = L.divIcon({
  className: "",
  html: `<div style="width:10px;height:10px;border-radius:50%;background:${olive};border:2px solid ${surface};box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [0, -8],
});

/* ═══════════════════ MAP COMPONENTS ═══════════════════ */
function MarkerClusterLayer({ chapels, t, onMarkerClick, activeIdx }) {
  const map = useMap();
  const clusterRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (clusterRef.current) map.removeLayer(clusterRef.current);

    const cluster = L.markerClusterGroup({
      maxClusterRadius: 45,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      iconCreateFunction: (c) => {
        const count = c.getChildCount();
        let size = 36, fontSize = 12;
        if (count > 50) { size = 48; fontSize = 14; }
        else if (count > 20) { size = 42; fontSize = 13; }
        return L.divIcon({
          html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${navy};border:2px solid ${gold};display:flex;align-items:center;justify-content:center;color:${gold};font-family:${fontM};font-size:${fontSize}px;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,0.3)">${count}</div>`,
          className: "",
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      },
    });

    const markers = [];
    chapels.forEach((c, idx) => {
      const marker = L.marker([c.lat, c.lng], { icon: chapelIcon });
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`;
      marker.bindPopup(`
        <div style="font-family:${fontB};min-width:200px;max-width:280px">
          <p style="font-family:${fontH};font-weight:700;font-size:14px;color:${text};margin:0 0 6px">${c.name}</p>
          <p style="font-size:13px;color:${textDim};line-height:1.4;margin:0">
            ${c.address}<br/>${c.postalCode ? c.postalCode + " " : ""}${c.city}<br/>${c.country}
          </p>
          ${c.phone ? `<p style="font-size:12px;color:${textDim};margin:6px 0 0"><a href="tel:${c.phone}" style="color:${olive};text-decoration:none">${c.phone}</a></p>` : ""}
          ${c.email ? `<p style="font-size:12px;margin:2px 0 0"><a href="mailto:${c.email}" style="color:${olive};text-decoration:none">${c.email}</a></p>` : ""}
          ${c.website ? `<p style="font-size:12px;margin:2px 0 0"><a href="${c.website}" target="_blank" rel="noopener" style="color:${olive};text-decoration:none">${t.map.visitWebsite}</a></p>` : ""}
          <a href="${directionsUrl}" target="_blank" rel="noopener" style="display:inline-block;margin-top:10px;padding:6px 12px;background:${navy};color:${gold};font-size:11px;font-family:${fontM};text-decoration:none;border-radius:2px;letter-spacing:0.04em">${t.map.directions} →</a>
          ${c.tags?.length ? `<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${c.tags.map(tag => `<span style="font-size:10px;font-family:${fontM};color:${olive};padding:2px 6px;background:rgba(45,80,22,0.08);border-radius:2px">${tag}</span>`).join("")}</div>` : ""}
        </div>
      `, { maxWidth: 300 });
      marker.on("click", () => onMarkerClick(idx));
      markers.push(marker);
      cluster.addLayer(marker);
    });

    markersRef.current = markers;
    map.addLayer(cluster);
    clusterRef.current = cluster;
    return () => { if (clusterRef.current) map.removeLayer(clusterRef.current); };
  }, [chapels, map, t, onMarkerClick]);

  // Open popup when sidebar item is clicked
  useEffect(() => {
    if (activeIdx >= 0 && markersRef.current[activeIdx] && clusterRef.current) {
      const marker = markersRef.current[activeIdx];
      // Zoom to marker to uncluster it, then open popup after a short delay
      clusterRef.current.zoomToShowLayer(marker, () => {
        marker.openPopup();
      });
    }
  }, [activeIdx]);

  return null;
}

function FlyTo({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom || 13, { duration: 1.2 });
  }, [center, zoom]);
  return null;
}

function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) map.fitBounds(bounds, { padding: [30, 30], duration: 1.2, maxZoom: 14 });
  }, [bounds]);
  return null;
}

function GeolocateControl({ t, onLocate }) {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handle = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        map.flyTo([latitude, longitude], 10, { duration: 1.5 });
        onLocate([latitude, longitude]);
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: false, timeout: 8000 }
    );
  };

  return (
    <button onClick={handle} title={t.map.nearMe} style={{
      position: "absolute", top: 12, right: 12, zIndex: 1000,
      width: 40, height: 40, borderRadius: "50%",
      background: navy, border: `2px solid ${gold}`,
      color: gold, fontSize: 18, cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      opacity: locating ? 0.5 : 1, transition: "opacity 0.2s",
    }}>◎</button>
  );
}

/* ═══════════════════ MAIN ═══════════════════ */
export default function MassMap({ t, lang, setLang, onBack }) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [flyTarget, setFlyTarget] = useState(null);
  const [flyZoom, setFlyZoom] = useState(13);
  const [fitBounds, setFitBounds] = useState(null);
  const [userLoc, setUserLoc] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const listRef = useRef(null);
  const itemRefs = useRef({});

  // Filter + distance sort
  const filtered = useMemo(() => {
    let result = chapels;
    if (selectedCountry) result = result.filter(c => c.country === selectedCountry);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        (c.country && c.country.toLowerCase().includes(q))
      );
    }
    if (userLoc) {
      result = result.map(c => ({ ...c, _dist: haversine(userLoc[0], userLoc[1], c.lat, c.lng) }));
      result.sort((a, b) => a._dist - b._dist);
    }
    return result;
  }, [search, selectedCountry, userLoc]);

  // Auto-zoom on country change
  useEffect(() => {
    if (selectedCountry && filtered.length > 0) {
      const bounds = getBoundsForChapels(filtered);
      if (bounds) {
        setFlyTarget(null);
        setFitBounds(bounds);
      }
    } else if (!selectedCountry) {
      setFitBounds(null);
    }
  }, [selectedCountry, filtered.length]);

  const handleLocate = (chapel, idx) => {
    setFlyTarget([chapel.lat, chapel.lng]);
    setFlyZoom(15);
    setActiveIdx(idx);
    setFitBounds(null);
  };

  const handleMarkerClick = (idx) => {
    setActiveIdx(idx);
    // Scroll sidebar to item
    const el = itemRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleGeolocate = (loc) => {
    setUserLoc(loc);
  };

  return (
    <div style={{ minHeight: "100vh", background: bg, color: text, position: "relative" }}>

      {/* ═══ DESKTOP SIDEBAR + MAP ═══ */}
      <div className="map-desktop" style={{
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        height: "100vh",
      }}>
        {/* SIDEBAR */}
        <div style={{
          background: surface,
          borderRight: `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Sidebar header */}
          <div style={{
            padding: "14px 16px",
            background: navy,
            borderBottom: `2px solid ${gold}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button onClick={onBack} style={{
                background: "transparent", border: `1px solid rgba(184,134,11,0.3)`,
                borderRadius: 2, color: gold, padding: "4px 10px", fontSize: 11,
                fontFamily: fontM, cursor: "pointer", fontWeight: 500,
              }}>←</button>
              <div>
                <h1 style={{
                  fontFamily: fontH, fontSize: 16, fontWeight: 700,
                  color: "#F0EBE0", lineHeight: 1.2,
                }}>
                  ☩ {t.map.title}
                </h1>
                <p style={{ color: textMuted, fontSize: 10, fontFamily: fontM, marginTop: 1 }}>
                  {chapels.length} {t.map.locations} · {countries.length} {t.map.countries}
                </p>
              </div>
            </div>
            <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{
              background: "transparent", border: `1px solid rgba(184,134,11,0.3)`,
              borderRadius: 2, color: gold, padding: "4px 10px", fontSize: 10,
              fontFamily: fontM, cursor: "pointer", fontWeight: 500,
            }}>
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Search + Filter */}
          <div style={{ padding: "12px 16px", borderBottom: `1px solid ${border}` }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t.map.searchPlaceholder}
                style={{
                  width: "100%", padding: "9px 32px 9px 12px", border: `1px solid ${border}`,
                  borderRadius: 2, fontSize: 13, fontFamily: fontB, color: text,
                  background: bg, outline: "none",
                }}
              />
              {search && (
                <button onClick={() => setSearch("")} style={{
                  position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", color: textMuted, fontSize: 16,
                  cursor: "pointer", padding: 0, lineHeight: 1,
                }}>×</button>
              )}
            </div>
            <select
              value={selectedCountry}
              onChange={e => { setSelectedCountry(e.target.value); setActiveIdx(-1); }}
              style={{
                width: "100%", padding: "7px 10px", marginTop: 6, border: `1px solid ${border}`,
                borderRadius: 2, fontSize: 11, fontFamily: fontM, color: textDim,
                background: bg, outline: "none", cursor: "pointer",
              }}
            >
              <option value="">{t.map.allCountries} ({chapels.length})</option>
              {countries.map(c => (
                <option key={c} value={c}>{c} ({countByCountry[c]})</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div style={{
            padding: "6px 16px", borderBottom: `1px solid ${border}`,
            background: surfaceDim,
          }}>
            <p style={{ fontSize: 10, fontFamily: fontM, color: textMuted }}>
              {filtered.length} {t.map.results}
              {userLoc && <span> · {t.map.nearMe}</span>}
            </p>
          </div>

          {/* Chapel list */}
          <div ref={listRef} style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            {filtered.length === 0 ? (
              <div style={{ padding: "40px 16px", textAlign: "center" }}>
                <p style={{ fontSize: 14, color: textDim, fontFamily: fontH, fontWeight: 600 }}>{t.map.noResults}</p>
                <p style={{ fontSize: 12, color: textMuted, marginTop: 4 }}>{t.map.noResultsSub}</p>
              </div>
            ) : filtered.map((c, i) => (
              <div
                key={i}
                ref={el => itemRefs.current[i] = el}
                onClick={() => handleLocate(c, i)}
                style={{
                  padding: "11px 16px",
                  borderBottom: `1px solid ${border}`,
                  cursor: "pointer",
                  transition: "background 0.15s",
                  background: activeIdx === i ? "rgba(45,80,22,0.06)" : "transparent",
                  borderLeft: activeIdx === i ? `3px solid ${olive}` : "3px solid transparent",
                }}
                onMouseEnter={e => { if (activeIdx !== i) e.currentTarget.style.background = surfaceDim; }}
                onMouseLeave={e => { if (activeIdx !== i) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{
                      fontSize: 13, fontWeight: 600, color: text, fontFamily: fontH,
                      lineHeight: 1.3, marginBottom: 2,
                    }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 11, color: textDim, lineHeight: 1.4 }}>
                      {c.city}{c.country ? `, ${c.country}` : ""}
                    </p>
                    {c.tags && c.tags.length > 0 && (
                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 4 }}>
                        {c.tags.slice(0, 2).map((tag, ti) => (
                          <span key={ti} style={{
                            fontSize: 9, fontFamily: fontM, color: olive, padding: "1px 5px",
                            background: "rgba(45,80,22,0.08)", borderRadius: 2,
                          }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  {c._dist != null && (
                    <span style={{
                      fontSize: 10, fontFamily: fontM, color: gold, fontWeight: 700,
                      whiteSpace: "nowrap", marginTop: 2,
                    }}>
                      {c._dist < 1 ? `${Math.round(c._dist * 1000)}m` : `${Math.round(c._dist)} ${t.map.km}`}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div style={{ position: "relative" }}>
          <MapContainer
            center={[25, 10]}
            zoom={3}
            minZoom={3}
            maxZoom={18}
            maxBounds={[[-60, -170], [75, 180]]}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              noWrap={true}
            />
            {flyTarget && <FlyTo center={flyTarget} zoom={flyZoom} />}
            {fitBounds && <FitBounds bounds={fitBounds} />}
            <MarkerClusterLayer chapels={filtered} t={t} onMarkerClick={handleMarkerClick} activeIdx={activeIdx} />
            <GeolocateControl t={t} onLocate={handleGeolocate} />
          </MapContainer>
        </div>
      </div>

      {/* ═══ MOBILE DRAWER ═══ */}
      <div className="map-mobile-drawer" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000,
        background: surface,
        borderTop: `2px solid ${gold}`,
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
        transform: drawerOpen ? "translateY(0)" : "translateY(calc(100% - 56px))",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        maxHeight: "70vh",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Drawer handle */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          style={{
            padding: "12px 16px", cursor: "pointer", background: "none", border: "none",
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, flexShrink: 0,
          }}
        >
          <div style={{ width: 32, height: 4, borderRadius: 2, background: textMuted, opacity: 0.4 }} />
        </button>

        {/* Drawer content */}
        <div style={{ padding: "0 16px 8px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <button onClick={onBack} style={{
              background: navy, border: "none", borderRadius: 2, color: gold,
              padding: "6px 10px", fontSize: 11, fontFamily: fontM, cursor: "pointer",
            }}>← {t.map.back}</button>
            <p style={{ fontSize: 11, fontFamily: fontM, color: textMuted, flex: 1 }}>
              {filtered.length} {t.map.results}
            </p>
            <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{
              background: "none", border: `1px solid ${border}`, borderRadius: 2,
              color: textDim, padding: "4px 8px", fontSize: 10, fontFamily: fontM, cursor: "pointer",
            }}>{lang === "es" ? "EN" : "ES"}</button>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder={t.map.searchPlaceholder}
              style={{
                width: "100%", padding: "8px 32px 8px 10px", border: `1px solid ${border}`,
                borderRadius: 2, fontSize: 13, fontFamily: fontB, color: text, background: bg, outline: "none",
              }}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{
                position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", color: textMuted, fontSize: 16, cursor: "pointer", padding: 0,
              }}>×</button>
            )}
          </div>
          <select value={selectedCountry} onChange={e => { setSelectedCountry(e.target.value); setActiveIdx(-1); }}
            style={{
              width: "100%", padding: "6px 8px", marginTop: 6, border: `1px solid ${border}`,
              borderRadius: 2, fontSize: 11, fontFamily: fontM, color: textDim, background: bg, outline: "none",
            }}>
            <option value="">{t.map.allCountries} ({chapels.length})</option>
            {countries.map(c => <option key={c} value={c}>{c} ({countByCountry[c]})</option>)}
          </select>
        </div>

        {/* Mobile chapel list */}
        <div style={{ flex: 1, overflowY: "auto", borderTop: `1px solid ${border}` }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "30px 16px", textAlign: "center" }}>
              <p style={{ fontSize: 14, color: textDim, fontFamily: fontH, fontWeight: 600 }}>{t.map.noResults}</p>
              <p style={{ fontSize: 12, color: textMuted, marginTop: 4 }}>{t.map.noResultsSub}</p>
            </div>
          ) : filtered.map((c, i) => (
            <div key={i} onClick={() => { handleLocate(c, i); setDrawerOpen(false); }}
              style={{
                padding: "10px 16px", borderBottom: `1px solid ${border}`, cursor: "pointer",
                background: activeIdx === i ? "rgba(45,80,22,0.06)" : "transparent",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: text, fontFamily: fontH, lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ fontSize: 11, color: textDim }}>{c.city}{c.country ? `, ${c.country}` : ""}</p>
                </div>
                {c._dist != null && (
                  <span style={{ fontSize: 10, fontFamily: fontM, color: gold, fontWeight: 700, whiteSpace: "nowrap" }}>
                    {c._dist < 1 ? `${Math.round(c._dist * 1000)}m` : `${Math.round(c._dist)} ${t.map.km}`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Desktop: show sidebar+map, hide drawer */
        .map-mobile-drawer { display: none !important; }

        @media (max-width: 768px) {
          .map-desktop {
            grid-template-columns: 1fr !important;
            height: 100vh !important;
          }
          .map-desktop > div:first-child {
            display: none !important;
          }
          .map-mobile-drawer {
            display: flex !important;
          }
        }

        .leaflet-popup-content-wrapper {
          border-radius: 4px !important;
          box-shadow: 0 4px 20px rgba(26,22,18,0.18) !important;
          padding: 0 !important;
          border: 1px solid rgba(26,22,18,0.08) !important;
          border-top: 3px solid ${gold} !important;
        }
        .leaflet-popup-content {
          margin: 16px 18px 14px !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
        }
        .leaflet-popup-close-button {
          color: ${textMuted} !important;
          font-size: 20px !important;
          padding: 6px 8px 0 0 !important;
        }
        .leaflet-popup-tip-container {
          display: none !important;
        }
        .marker-cluster-small,
        .marker-cluster-medium,
        .marker-cluster-large {
          background: transparent !important;
        }
        .marker-cluster-small div,
        .marker-cluster-medium div,
        .marker-cluster-large div {
          background: transparent !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
        }
        .leaflet-control-zoom a {
          background: ${navy} !important;
          color: ${gold} !important;
          border: none !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 18px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #2a2520 !important;
        }
        .leaflet-control-zoom-in {
          border-radius: 4px 4px 0 0 !important;
        }
        .leaflet-control-zoom-out {
          border-radius: 0 0 4px 4px !important;
        }
      `}</style>
    </div>
  );
}
