import { useState, useMemo, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import chapelsRaw from "./data/fsspx-chapels.json";

/* ═══════════════════ PALETTE (matches App) ═══════════════════ */
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

/* ═══════════════════ CUSTOM MARKER ═══════════════════ */
const chapelIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:12px;height:12px;border-radius:50%;
    background:${olive};border:2px solid ${surface};
    box-shadow:0 1px 4px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -8],
});

const chapelIconActive = L.divIcon({
  className: "",
  html: `<div style="
    width:16px;height:16px;border-radius:50%;
    background:${crimson};border:2px solid ${surface};
    box-shadow:0 2px 8px rgba(139,26,26,0.4);
  "></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -10],
});

/* ═══════════════════ FLY TO COMPONENT ═══════════════════ */
function FlyTo({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom || 12, { duration: 1.2 });
  }, [center, zoom]);
  return null;
}

/* ═══════════════════ COUNTRIES ═══════════════════ */
const chapels = chapelsRaw.filter(c => c.lat && c.lng);
const countries = [...new Set(chapels.map(c => c.country).filter(Boolean))].sort();

/* ═══════════════════ MASS MAP ═══════════════════ */
export default function MassMap({ t, lang, onBack }) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [flyTarget, setFlyTarget] = useState(null);
  const [flyZoom, setFlyZoom] = useState(12);
  const listRef = useRef(null);

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
    const map = {};
    chapels.forEach(c => {
      if (c.country) map[c.country] = (map[c.country] || 0) + 1;
    });
    return map;
  }, []);

  const handleLocate = (chapel) => {
    setFlyTarget([chapel.lat, chapel.lng]);
    setFlyZoom(14);
  };

  return (
    <div style={{ minHeight: "100vh", background: bg, color: text }}>
      {/* HEADER */}
      <header style={{
        padding: "20px 24px",
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
              {t.map.title}
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
      <div style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        height: "calc(100vh - 80px)",
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
            padding: "10px 16px", borderBottom: `1px solid ${border}`,
            background: surfaceDim,
          }}>
            <p style={{ fontSize: 11, fontFamily: fontM, color: textMuted }}>
              {filtered.length} {t.map.results}
            </p>
          </div>

          {/* Chapel list */}
          <div ref={listRef} style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            {filtered.map((c, i) => (
              <div
                key={i}
                onClick={() => handleLocate(c)}
                style={{
                  padding: "14px 16px",
                  borderBottom: `1px solid ${border}`,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = surfaceDim}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <p style={{
                  fontSize: 14, fontWeight: 600, color: text, fontFamily: fontH,
                  lineHeight: 1.3, marginBottom: 4,
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
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }}>
                    {c.tags.slice(0, 3).map((tag, ti) => (
                      <span key={ti} style={{
                        fontSize: 10, fontFamily: fontM, color: olive, padding: "2px 6px",
                        background: "rgba(45,80,22,0.08)", borderRadius: 2,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div style={{ position: "relative" }}>
          <MapContainer
            center={[30, 0]}
            zoom={2}
            minZoom={2}
            maxBounds={[[-85, -180], [85, 180]]}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {flyTarget && <FlyTo center={flyTarget} zoom={flyZoom} />}
            {filtered.map((c, i) => (
              <Marker key={`${c.lat}-${c.lng}-${i}`} position={[c.lat, c.lng]} icon={chapelIcon}>
                <Popup>
                  <div style={{ fontFamily: fontB, minWidth: 200, maxWidth: 280 }}>
                    <p style={{ fontFamily: fontH, fontWeight: 700, fontSize: 14, color: text, marginBottom: 6 }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 13, color: textDim, lineHeight: 1.4 }}>
                      {c.address}<br />
                      {c.postalCode && `${c.postalCode} `}{c.city}<br />
                      {c.country}
                    </p>
                    {c.phone && (
                      <p style={{ fontSize: 12, color: textDim, marginTop: 6 }}>
                        <a href={`tel:${c.phone}`} style={{ color: olive, textDecoration: "none" }}>{c.phone}</a>
                      </p>
                    )}
                    {c.email && (
                      <p style={{ fontSize: 12, marginTop: 2 }}>
                        <a href={`mailto:${c.email}`} style={{ color: olive, textDecoration: "none" }}>{c.email}</a>
                      </p>
                    )}
                    {c.website && (
                      <p style={{ fontSize: 12, marginTop: 2 }}>
                        <a href={c.website} target="_blank" rel="noopener" style={{ color: olive, textDecoration: "none" }}>{t.map.visitWebsite}</a>
                      </p>
                    )}
                    {c.tags && c.tags.length > 0 && (
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 8 }}>
                        {c.tags.map((tag, ti) => (
                          <span key={ti} style={{
                            fontSize: 10, fontFamily: fontM, color: olive, padding: "2px 6px",
                            background: "rgba(45,80,22,0.08)", borderRadius: 2,
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Mobile: responsive override */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 320px"] {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          div[style*="grid-template-columns: 320px"] > div:first-child {
            max-height: 50vh;
            order: 2;
          }
          div[style*="grid-template-columns: 320px"] > div:last-child {
            height: 50vh;
            order: 1;
          }
        }
        .leaflet-popup-content-wrapper {
          border-radius: 2px !important;
          box-shadow: 0 4px 12px rgba(26,22,18,0.12) !important;
        }
        .leaflet-popup-tip {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
