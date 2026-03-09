import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
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

/* ═══════════════════ DOT MARKER ═══════════════════ */
const chapelIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:10px;height:10px;border-radius:50%;
    background:${olive};border:2px solid ${surface};
    box-shadow:0 1px 4px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [0, -8],
});

/* ═══════════════════ CLUSTER LAYER ═══════════════════ */
function MarkerClusterLayer({ chapels, t }) {
  const map = useMap();
  const clusterRef = useRef(null);

  useEffect(() => {
    if (clusterRef.current) {
      map.removeLayer(clusterRef.current);
    }

    const cluster = L.markerClusterGroup({
      maxClusterRadius: 45,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      iconCreateFunction: (c) => {
        const count = c.getChildCount();
        let size = 36;
        let fontSize = 12;
        if (count > 50) { size = 48; fontSize = 14; }
        else if (count > 20) { size = 42; fontSize = 13; }
        return L.divIcon({
          html: `<div style="
            width:${size}px;height:${size}px;border-radius:50%;
            background:${navy};border:2px solid ${gold};
            display:flex;align-items:center;justify-content:center;
            color:${gold};font-family:${fontM};font-size:${fontSize}px;font-weight:700;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
          ">${count}</div>`,
          className: "",
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      },
    });

    chapels.forEach((c) => {
      const marker = L.marker([c.lat, c.lng], { icon: chapelIcon });
      const popupHtml = `
        <div style="font-family:${fontB};min-width:200px;max-width:280px">
          <p style="font-family:${fontH};font-weight:700;font-size:14px;color:${text};margin:0 0 6px">
            ${c.name}
          </p>
          <p style="font-size:13px;color:${textDim};line-height:1.4;margin:0">
            ${c.address}<br/>
            ${c.postalCode ? c.postalCode + " " : ""}${c.city}<br/>
            ${c.country}
          </p>
          ${c.phone ? `<p style="font-size:12px;color:${textDim};margin:6px 0 0"><a href="tel:${c.phone}" style="color:${olive};text-decoration:none">${c.phone}</a></p>` : ""}
          ${c.email ? `<p style="font-size:12px;margin:2px 0 0"><a href="mailto:${c.email}" style="color:${olive};text-decoration:none">${c.email}</a></p>` : ""}
          ${c.website ? `<p style="font-size:12px;margin:2px 0 0"><a href="${c.website}" target="_blank" rel="noopener" style="color:${olive};text-decoration:none">${t.map.visitWebsite}</a></p>` : ""}
          ${c.tags && c.tags.length > 0 ? `
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">
              ${c.tags.map(tag => `<span style="font-size:10px;font-family:${fontM};color:${olive};padding:2px 6px;background:rgba(45,80,22,0.08);border-radius:2px">${tag}</span>`).join("")}
            </div>
          ` : ""}
        </div>
      `;
      marker.bindPopup(popupHtml, { maxWidth: 300 });
      cluster.addLayer(marker);
    });

    map.addLayer(cluster);
    clusterRef.current = cluster;

    return () => {
      if (clusterRef.current) map.removeLayer(clusterRef.current);
    };
  }, [chapels, map, t]);

  return null;
}

/* ═══════════════════ FLY TO ═══════════════════ */
function FlyTo({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom || 13, { duration: 1.2 });
  }, [center, zoom]);
  return null;
}

/* ═══════════════════ GEOLOCATION BUTTON ═══════════════════ */
function GeolocateButton({ t }) {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handleGeolocate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        map.flyTo([pos.coords.latitude, pos.coords.longitude], 10, { duration: 1.5 });
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: false, timeout: 8000 }
    );
  };

  return (
    <button
      onClick={handleGeolocate}
      title={t.map.nearMe}
      style={{
        position: "absolute", top: 12, right: 12, zIndex: 1000,
        width: 40, height: 40, borderRadius: "50%",
        background: navy, border: `2px solid ${gold}`,
        color: gold, fontSize: 18, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        opacity: locating ? 0.5 : 1,
        transition: "opacity 0.2s",
      }}
    >
      ◎
    </button>
  );
}

/* ═══════════════════ DATA ═══════════════════ */
const chapels = chapelsRaw.filter(c => c.lat && c.lng);
const countries = [...new Set(chapels.map(c => c.country).filter(Boolean))].sort();

/* ═══════════════════ MASS MAP ═══════════════════ */
export default function MassMap({ t, lang, onBack }) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [flyTarget, setFlyTarget] = useState(null);
  const [flyZoom, setFlyZoom] = useState(13);

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
    return result;
  }, [search, selectedCountry]);

  const countByCountry = useMemo(() => {
    const m = {};
    chapels.forEach(c => { if (c.country) m[c.country] = (m[c.country] || 0) + 1; });
    return m;
  }, []);

  const handleLocate = (chapel) => {
    setFlyTarget([chapel.lat, chapel.lng]);
    setFlyZoom(15);
  };

  return (
    <div style={{ minHeight: "100vh", background: bg, color: text }}>
      {/* HEADER */}
      <header style={{
        padding: "16px 24px",
        background: navy,
        borderBottom: `2px solid ${gold}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={{
            background: "transparent", border: `1px solid rgba(184,134,11,0.3)`,
            borderRadius: 2, color: gold, padding: "6px 14px", fontSize: 12,
            fontFamily: fontM, cursor: "pointer", letterSpacing: "0.06em", fontWeight: 500,
          }}>
            ← {t.map.back}
          </button>
          <div>
            <h1 style={{
              fontFamily: fontH, fontSize: "clamp(16px, 3vw, 22px)", fontWeight: 700,
              color: "#F0EBE0", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>
              ☩ {t.map.title}
            </h1>
            <p style={{ color: textMuted, fontSize: 11, fontFamily: fontM, marginTop: 2 }}>
              {chapels.length} {t.map.locations} · {countries.length} {t.map.countries}
            </p>
          </div>
        </div>
        <p style={{ color: gold, fontSize: 11, fontFamily: fontM, opacity: 0.6, letterSpacing: "0.06em" }}>
          FSSPX · {t.map.phase1}
        </p>
      </header>

      {/* MAIN LAYOUT */}
      <div className="map-layout" style={{
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        height: "calc(100vh - 64px)",
      }}>
        {/* SIDEBAR */}
        <div style={{
          background: surface,
          borderRight: `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Search + Filter */}
          <div style={{ padding: "16px", borderBottom: `1px solid ${border}` }}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.map.searchPlaceholder}
              style={{
                width: "100%", padding: "10px 14px", border: `1px solid ${border}`,
                borderRadius: 2, fontSize: 14, fontFamily: fontB, color: text,
                background: bg, outline: "none",
              }}
            />
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              style={{
                width: "100%", padding: "8px 12px", marginTop: 8, border: `1px solid ${border}`,
                borderRadius: 2, fontSize: 12, fontFamily: fontM, color: textDim,
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
            padding: "8px 16px", borderBottom: `1px solid ${border}`,
            background: surfaceDim,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <p style={{ fontSize: 11, fontFamily: fontM, color: textMuted }}>
              {filtered.length} {t.map.results}
            </p>
          </div>

          {/* Chapel list */}
          <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            {filtered.map((c, i) => (
              <div
                key={i}
                onClick={() => handleLocate(c)}
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${border}`,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = surfaceDim}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{
                    color: olive, fontSize: 14, lineHeight: 1, marginTop: 2, flexShrink: 0,
                  }}>☩</span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{
                      fontSize: 13, fontWeight: 600, color: text, fontFamily: fontH,
                      lineHeight: 1.3, marginBottom: 3,
                    }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 12, color: textDim, lineHeight: 1.4 }}>
                      {c.address}{c.postalCode ? `, ${c.postalCode}` : ""} {c.city}
                    </p>
                    <p style={{ fontSize: 11, color: textMuted, fontFamily: fontM, marginTop: 2 }}>
                      {c.country}
                    </p>
                    {c.tags && c.tags.length > 0 && (
                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 5 }}>
                        {c.tags.slice(0, 3).map((tag, ti) => (
                          <span key={ti} style={{
                            fontSize: 9, fontFamily: fontM, color: olive, padding: "1px 5px",
                            background: "rgba(45,80,22,0.08)", borderRadius: 2,
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
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
            <MarkerClusterLayer chapels={filtered} t={t} />
            <GeolocateButton t={t} />
          </MapContainer>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .map-layout {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .map-layout > div:first-child {
            max-height: 45vh;
            order: 2;
          }
          .map-layout > div:last-child {
            height: 55vh;
            order: 1;
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
        /* Override default cluster styles */
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
