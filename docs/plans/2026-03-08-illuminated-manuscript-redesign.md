# Illuminated Manuscript Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the dark neoclassical dashboard into a digital illuminated manuscript with sidebar chapter navigation, parchment palette, Cinzel/Cormorant Garamond typography, copper-engraving charts, and selective ornamentation.

**Architecture:** Single-file App.jsx rewrite. Replace all inline style constants with illuminated manuscript palette. Restructure layout from horizontal nav + centered content to sidebar + content area. Add CSS for fonts, responsive breakpoints, drop caps, and parchment texture in index.css. Update index.html for Google Fonts. Preserve ALL data arrays, i18n keys, and Recharts usage.

**Tech Stack:** React 18, Recharts, inline styles + index.css, Google Fonts (Cinzel, Cormorant Garamond), Vite, Netlify

---

### Task 1: Load Google Fonts + CSS Foundation

**Files:**
- Modify: `index.html` (add font links)
- Modify: `src/index.css` (replace tailwind with manuscript styles)

**Step 1: Add Google Fonts to index.html**

Add before the closing `</head>` tag, before the gtag script:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
```

**Step 2: Replace index.css with manuscript foundation**

Remove tailwind directives. Write CSS for:
- `*` box-sizing reset
- `body` with parchment background `#E8DCC8`, Cormorant Garamond font, ink color `#2A2118`
- Parchment texture via CSS (subtle radial gradient noise overlay)
- `.drop-cap::first-letter` — Cinzel, 3.2em, float left, gold color `#B8963E`, line-height 0.8, padding-right 8px, margin-top 4px
- `.drop-cap-mobile::first-letter` — same but 2.2em for mobile
- Sidebar styles: `.sidebar` fixed left, width 220px, background `#D4C4A8`, height 100vh, overflow-y auto, border-right
- `.sidebar-overlay` for mobile drawer: fixed inset, z-index 50, background rgba(0,0,0,0.4)
- `.content-area` margin-left 220px, max-width 720px, padding
- `@media (max-width: 768px)`: sidebar hidden, content-area margin-left 0, grid adjustments
- Scrollbar hiding for sidebar
- Filigree divider class
- Chart frame double-border class
- Smooth transitions for chapter switching

**Step 3: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`
Expected: Clean build, no errors

**Step 4: Commit**

```bash
git add index.html src/index.css
git commit -m "feat: add Google Fonts and CSS foundation for manuscript redesign"
```

---

### Task 2: Rewrite Color Constants + Theme + Helper Components

**Files:**
- Modify: `src/App.jsx` (lines 18-60, the style constants and helper components)

**Step 1: Replace all color constants (lines 18-27)**

Replace the dark theme colors with the illuminated manuscript palette:

```javascript
/* ═══════════════════ PALETTE ═══════════════════ */
const parchment = "#E8DCC8";
const parchmentDark = "#D4C4A8";
const ultramarine = "#1E3A5F";
const goldLeaf = "#B8963E";
const goldLight = "#D4B44E";
const crimson = "#9B2335";
const crimsonLight = "#B83A4B";
const olive = "#4A5C3A";
const sepia = "#6B5344";
const ink = "#2A2118";
const sepiaLight = "#8B7B6B";
const borderC = "#C4B49E";
```

**Step 2: Replace the `sty` object (lines 29-36)**

```javascript
const sty = {
  page: { minHeight:"100vh", background:parchment, color:ink, fontFamily:"'Cormorant Garamond','Georgia',serif" },
  card: { background:parchmentDark, border:`1px solid ${borderC}`, borderRadius:2, padding:"24px 28px", marginBottom:0 },
  alert: (c) => ({
    background: c==="crimson"?"rgba(155,35,53,0.06)":c==="gold"?"rgba(184,150,62,0.08)":c==="green"?"rgba(74,92,58,0.08)":c==="blue"?"rgba(30,58,95,0.06)":"rgba(107,83,68,0.06)",
    border:`1px solid ${c==="crimson"?"rgba(155,35,53,0.25)":c==="gold"?"rgba(184,150,62,0.3)":c==="green"?"rgba(74,92,58,0.25)":c==="blue"?"rgba(30,58,95,0.2)":"rgba(107,83,68,0.2)"}`,
    borderRadius:2, padding:"20px 24px"
  }),
  h2: { fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:22, letterSpacing:"0.04em", marginBottom:10, color:ultramarine },
  sub: { color:sepia, fontSize:14, marginBottom:16, fontStyle:"italic" },
  ornament: { textAlign:"center", color:goldLeaf, fontSize:14, letterSpacing:"0.3em", margin:"8px 0 12px", opacity:0.6 },
};
```

**Step 3: Update helper components**

Replace `TT` (Tooltip):
```javascript
const TT = ({active,payload,label}) => {
  if(!active||!payload?.length) return null;
  return <div style={{background:parchment,border:`1px solid ${borderC}`,borderRadius:2,padding:"10px 14px",fontSize:12,color:ink,fontFamily:"'Cormorant Garamond',serif",boxShadow:"2px 2px 8px rgba(42,33,24,0.15)"}}>
    <p style={{fontWeight:700,marginBottom:4,fontFamily:"'Cinzel',serif",fontSize:11}}>{label}</p>
    {payload.map((e,i)=><p key={i} style={{color:e.color}}>{e.name}: {typeof e.value==="number"&&e.value>999?e.value.toLocaleString():e.value}</p>)}
  </div>;
};
```

Replace `Stat`:
```javascript
const Stat = ({value,label,sub,period,color=crimson}) => (
  <div style={{background:parchmentDark,border:`1px solid ${borderC}`,borderRadius:2,padding:"16px 12px",textAlign:"center"}}>
    <p style={{fontSize:28,fontWeight:700,color,fontFamily:"'Cinzel',serif",lineHeight:1}}>{value}</p>
    <p style={{color:ink,fontWeight:600,fontSize:12,marginTop:8,fontFamily:"'Cormorant Garamond',serif"}}>{label}</p>
    {sub&&<p style={{color:sepia,fontSize:11,marginTop:3}}>{sub}</p>}
    {period&&<p style={{color:sepiaLight,fontSize:10}}>{period}</p>}
  </div>
);
```

Replace remaining helpers:
```javascript
const Card = ({children,style:s}) => <div style={{...sty.card,...s}}>{children}</div>;
const H2 = ({children,color=ultramarine}) => <h2 style={{...sty.h2,color}}>{children}</h2>;
const Sub = ({children}) => <p style={sty.sub}>{children}</p>;
const Orn = () => <div style={{textAlign:"center",margin:"12px 0",opacity:0.4}}><svg width="200" height="16" viewBox="0 0 200 16" style={{display:"inline-block"}}><line x1="0" y1="8" x2="85" y2="8" stroke={goldLeaf} strokeWidth="0.5"/><text x="100" y="12" textAnchor="middle" fill={goldLeaf} fontSize="12" fontFamily="Cinzel">✦</text><line x1="115" y1="8" x2="200" y2="8" stroke={goldLeaf} strokeWidth="0.5"/></svg></div>;
const Chart = ({children,h=320}) => <div style={{border:`1px solid ${borderC}`,borderRadius:2,padding:"12px 8px 4px",background:"rgba(232,220,200,0.5)"}}><ResponsiveContainer width="100%" height={h}>{children}</ResponsiveContainer></div>;
```

**Step 4: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 5: Commit**

```bash
git add src/App.jsx
git commit -m "feat: replace dark theme with illuminated manuscript palette and components"
```

---

### Task 3: Restructure Layout — Sidebar + Content Area

**Files:**
- Modify: `src/App.jsx` (the App component return JSX, lines 62-end)

This is the biggest task. Replace the header + horizontal nav + centered content with sidebar + content layout.

**Step 1: Add sidebar state and Roman numeral mapping**

After the existing state declarations (`sec`, `lang`, `t`, `grid`), add:

```javascript
const [sidebarOpen, setSidebarOpen] = useState(false);
const roman = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI"];
```

**Step 2: Replace the header + nav JSX with new layout structure**

The entire return JSX changes to this structure:

```jsx
return (
<div style={sty.page}>
  {/* MOBILE SIDEBAR OVERLAY */}
  {sidebarOpen && <div className="sidebar-overlay" onClick={()=>setSidebarOpen(false)} />}

  {/* SIDEBAR */}
  <nav className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`} style={{
    position:"fixed",left:0,top:0,width:220,height:"100vh",
    background:parchmentDark,borderRight:`1px solid ${borderC}`,
    zIndex:40,overflowY:"auto",padding:"32px 0",
    fontFamily:"'Cinzel',serif",
    transition:"transform 0.3s ease",
  }}>
    {/* Sidebar header */}
    <div style={{padding:"0 20px 24px",borderBottom:`1px solid ${borderC}`,marginBottom:16,textAlign:"center"}}>
      <p style={{color:goldLeaf,fontSize:16,letterSpacing:"0.3em",marginBottom:8}}>☩</p>
      <p style={{color:ink,fontSize:11,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase"}}>{lang==="es"?"ÍNDICE":"INDEX"}</p>
    </div>

    {/* Chapter list */}
    {t.nav.map((s,i)=>(
      <button key={s.id} onClick={()=>{setSec(s.id);setSidebarOpen(false);}} style={{
        display:"block",width:"100%",textAlign:"left",padding:"10px 20px",
        border:"none",cursor:"pointer",transition:"all 0.2s",
        borderLeft:sec===s.id?`3px solid ${goldLeaf}`:"3px solid transparent",
        background:sec===s.id?"rgba(184,150,62,0.1)":"transparent",
        color:sec===s.id?goldLeaf:sepia,
        fontFamily:"'Cormorant Garamond',serif",fontSize:13,fontWeight:sec===s.id?700:400,
      }}>
        <span style={{fontFamily:"'Cinzel',serif",fontSize:10,marginRight:8,color:sec===s.id?goldLeaf:sepiaLight}}>{roman[i]}</span>
        {s.label}
      </button>
    ))}

    {/* Language toggle at bottom */}
    <div style={{padding:"20px",marginTop:24,borderTop:`1px solid ${borderC}`}}>
      <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
        background:"transparent",border:`1px solid ${borderC}`,borderRadius:2,
        color:sepia,padding:"6px 14px",fontSize:11,fontFamily:"'Cinzel',serif",
        cursor:"pointer",letterSpacing:"0.1em",width:"100%",
      }}>
        {lang==="es"?"English":"Español"}
      </button>
    </div>
  </nav>

  {/* MOBILE HEADER */}
  <div className="mobile-header" style={{
    display:"none", /* shown via CSS @media */
    position:"fixed",top:0,left:0,right:0,zIndex:30,
    background:parchmentDark,borderBottom:`1px solid ${borderC}`,
    padding:"10px 16px",alignItems:"center",justifyContent:"space-between",
  }}>
    <button onClick={()=>setSidebarOpen(!sidebarOpen)} style={{
      background:"transparent",border:"none",cursor:"pointer",
      color:ink,fontSize:18,fontFamily:"'Cinzel',serif",padding:"4px 8px",
    }}>☩</button>
    <span style={{fontFamily:"'Cinzel',serif",fontSize:12,color:ink,fontWeight:700,letterSpacing:"0.08em"}}>
      {t.header.title.split(" ").slice(0,4).join(" ")}...
    </span>
    <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
      background:"transparent",border:`1px solid ${borderC}`,borderRadius:2,
      color:sepia,padding:"3px 8px",fontSize:10,fontFamily:"'Cinzel',serif",cursor:"pointer",
    }}>
      {lang==="es"?"EN":"ES"}
    </button>
  </div>

  {/* CONTENT AREA */}
  <div className="content-area" style={{marginLeft:220,maxWidth:720,padding:"40px 32px",margin:"0 auto 0 220px"}}>
    {/* Chapter title header for current section */}
    <div style={{marginBottom:32,paddingBottom:20,borderBottom:`1px solid ${borderC}`}}>
      <p style={{fontFamily:"'Cinzel',serif",fontSize:11,color:goldLeaf,letterSpacing:"0.2em",marginBottom:8}}>
        {lang==="es"?"CAPÍTULO":"CHAPTER"} {roman[t.nav.findIndex(n=>n.id===sec)]}
      </p>
      <h1 style={{fontFamily:"'Cinzel',serif",fontSize:28,fontWeight:700,color:ink,lineHeight:1.3}}>
        {t.nav.find(n=>n.id===sec)?.label}
      </h1>
    </div>

    <div style={{display:"flex",flexDirection:"column",gap:24}}>
      {/* ALL SECTION CONTENT GOES HERE — same as before but with updated styles */}
      {/* ... sec==="overview" && <> ... </> */}
      {/* ... sec==="priests" && <> ... </> */}
      {/* etc. */}
    </div>

    {/* FOOTER */}
    <div style={{borderTop:`1px solid ${borderC}`,padding:"32px 0 16px",textAlign:"center",marginTop:40}}>
      <p style={{color:goldLeaf,fontSize:14,letterSpacing:"0.3em"}}>☩</p>
      <p style={{color:sepia,fontSize:11,marginTop:8,fontFamily:"'Cormorant Garamond',serif"}}>{t.footer.text}</p>
    </div>
  </div>
</div>
);
```

**Step 3: Update index.css for sidebar responsive behavior**

Add to index.css:
```css
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.sidebar-open { transform: translateX(0); }
  .mobile-header { display: flex !important; }
  .content-area { margin-left: 0 !important; padding: 72px 16px 24px !important; }
}
@media (min-width: 769px) {
  .sidebar-overlay { display: none !important; }
}
```

**Step 4: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 5: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "feat: restructure layout with sidebar chapter navigation"
```

---

### Task 4: Restyle All Section Content — Overview through Regional

**Files:**
- Modify: `src/App.jsx` (overview, priests, nuns, mass, marriages, orders, regional sections)

**Step 1: Update ALL hardcoded colors throughout sections**

Global find-and-replace within the section JSX:
- `wine` → `crimson` (variable reference)
- `wineLight` → `crimsonLight`
- `gold` → `goldLeaf`
- `goldLight` → `goldLight` (keep)
- `"#c4b89a"` / `"#c4b896"` → `sepia`
- `"#8a7d68"` → `sepiaLight`
- `"#7a6e5a"` / `"#6b6052"` → `sepiaLight`
- `cream` → `ink` (for primary text on light bg)
- `"#c09040"` → `goldLeaf`
- `"#b07030"` → `sepia`

Also replace ALL Recharts color props:
- `stroke="#3d3529"` → `stroke="${borderC}"` (CartesianGrid)
- `stroke="#8a7d68"` → `stroke={sepia}` (axes)
- `fill="#5c1a1a"` → `fill="rgba(155,35,53,0.08)"` (area fills — very light wash)
- `stroke={wine}` → `stroke={crimson}`
- `stroke={gold}` → `stroke={goldLeaf}`
- `fill={wine}` → `fill={crimson}` (bar fills — but lighter, add fillOpacity={0.7})
- `"#4a9a5a"` / `"#2e7d32"` / `"#4caf50"` → `olive`
- `"#6aaa6a"` → `olive`
- `"#4a7090"` / `"#6b8cae"` / `"#4a6fa5"` → `ultramarine`

Add `fontFamily="'Cormorant Garamond',serif"` to all XAxis/YAxis components.

For the overview section, add the `drop-cap` className to the first paragraph:
```jsx
<p className="drop-cap" style={{color:ink,fontSize:15,lineHeight:1.8}}>{t.overview.paragraph}</p>
```

**Step 2: Update stat grid responsive columns**

Replace `grid(4)` with responsive approach:
```javascript
const grid = (cols, gap=12) => ({
  display:"grid",
  gridTemplateColumns:`repeat(${cols},1fr)`,
  gap,
});
// For mobile, CSS handles this:
// Add to index.css: .stat-grid { display:grid; gap:12px; }
// @media(max-width:768px) { .stat-grid { grid-template-columns: repeat(2,1fr) !important; } }
```

Wrap stat grids with className="stat-grid" for mobile override.

**Step 3: Update alert/callout colors**

Replace all `sty.alert("wine")` → `sty.alert("crimson")`
Replace all `sty.alert("gold")` → `sty.alert("gold")`
Replace all `sty.alert("green")` → `sty.alert("green")`

**Step 4: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 5: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "feat: restyle overview through regional sections with manuscript palette"
```

---

### Task 5: Restyle SSPX, Novus Ordo, Conclusion, AI Sections

**Files:**
- Modify: `src/App.jsx` (sspx, novusordo, conclusion, ai sections)

**Step 1: SSPX section**

Replace green gradient backgrounds:
- `"linear-gradient(135deg,#14261a,#1a1814)"` → `"linear-gradient(135deg,rgba(74,92,58,0.08),${parchmentDark})"`
- `borderColor:"#2a4a30"` → `borderColor:"rgba(74,92,58,0.3)"`
- All `"#4a9a5a"`, `"#2a6a3a"`, `"#4caf50"`, `"#2e7d32"`, `"#6aaa6a"` → `olive`
- Contrast section gradient: `"linear-gradient(90deg,rgba(155,35,53,0.06),rgba(74,92,58,0.06))"`

**Step 2: Novus Ordo section**

Replace purple with ultramarine:
- `"#9a7acc"` / `"#b388d9"` → `ultramarine`
- `"#4a3a5a"` / `"#6b4d8a"` → `"rgba(30,58,95,0.4)"`
- `"linear-gradient(135deg,#1a1428,#1a1814)"` → `"linear-gradient(135deg,rgba(30,58,95,0.08),${parchmentDark})"`
- `"rgba(100,50,120,0.08)"` / `"rgba(100,50,120,0.2)"` → `"rgba(30,58,95,0.06)"` / `"rgba(30,58,95,0.15)"`
- Timeline dots: `background:"#9a7acc"` → `background:ultramarine`

**Step 3: Conclusion section**

- All `wineLight` → `crimsonLight`
- `"#6aaa6a"` → `olive`
- Gold alert: keep `goldLeaf` references
- Background colors: replace dark parchment refs with light versions

**Step 4: AI section**

- `"#7aaacc"` / `"#6b8cae"` → `ultramarine`
- `"linear-gradient(135deg,#141a24,#1a1814)"` → `"linear-gradient(135deg,rgba(30,58,95,0.06),${parchmentDark})"`
- Robot emoji callout: replace dark blue with ultramarine references

**Step 5: Add drop-cap to major chapter openings**

Add `className="drop-cap"` to the first `<p>` in these sections:
- Overview (already done in Task 4)
- Conclusion intro1
- AI transparency text
- SSPX intro
- Novus Ordo intro

**Step 6: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 7: Commit**

```bash
git add src/App.jsx
git commit -m "feat: restyle SSPX, Novus Ordo, Conclusion, AI with manuscript theme"
```

---

### Task 6: Filigree Dividers + Chart Frames + Polish

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Step 1: Create SVG filigree divider component**

Add after the `Chart` component:

```jsx
const Filigree = () => (
  <div style={{textAlign:"center",margin:"20px 0",opacity:0.35}}>
    <svg width="280" height="20" viewBox="0 0 280 20" style={{display:"inline-block"}}>
      <line x1="0" y1="10" x2="120" y2="10" stroke={goldLeaf} strokeWidth="0.5"/>
      <circle cx="130" cy="10" r="1.5" fill={goldLeaf}/>
      <text x="140" y="14" textAnchor="middle" fill={goldLeaf} fontSize="14" fontFamily="Cinzel">✦</text>
      <circle cx="150" cy="10" r="1.5" fill={goldLeaf}/>
      <line x1="160" y1="10" x2="280" y2="10" stroke={goldLeaf} strokeWidth="0.5"/>
    </svg>
  </div>
);
```

Replace all `<Orn/>` with `<Filigree/>` throughout the JSX.

**Step 2: Update Chart component with double-border frame**

Already done in Task 2 with the single border. Enhance:
```jsx
const Chart = ({children,h=320}) => (
  <div style={{
    border:`1px solid ${borderC}`,
    padding:3,
    borderRadius:1,
    background:parchment,
  }}>
    <div style={{
      border:`0.5px solid ${borderC}`,
      padding:"12px 8px 4px",
      background:"rgba(232,220,200,0.3)",
    }}>
      <ResponsiveContainer width="100%" height={h}>{children}</ResponsiveContainer>
    </div>
  </div>
);
```

**Step 3: Add parchment texture to body via CSS**

In index.css, add to body:
```css
body {
  background-color: #E8DCC8;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(212,180,168,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(180,160,140,0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 80%, rgba(200,180,160,0.08) 0%, transparent 45%);
}
```

**Step 4: Add Recharts CartesianGrid dotted style**

Update ALL `<CartesianGrid>` components from:
```jsx
<CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
```
to:
```jsx
<CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
```

This creates the faint dotted lines matching copper engraving style.

**Step 5: Reduce all Area fill opacities**

All `fillOpacity` values in `<Area>` components should be 0.06-0.08 max (wash effect).

**Step 6: Verify build and visual check**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 7: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "feat: add filigree dividers, chart frames, parchment texture, polish"
```

---

### Task 7: Mobile Responsive Final Pass

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx` (minor)

**Step 1: Complete mobile CSS in index.css**

```css
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    box-shadow: none;
  }
  .sidebar.sidebar-open {
    transform: translateX(0);
    box-shadow: 4px 0 20px rgba(42,33,24,0.3);
  }
  .mobile-header {
    display: flex !important;
  }
  .content-area {
    margin-left: 0 !important;
    padding: 72px 16px 24px !important;
    max-width: 100% !important;
  }
  .stat-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .stat-grid-3 {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .stat-grid-6 {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  .drop-cap::first-letter {
    font-size: 2.2em !important;
  }
}

@media (max-width: 480px) {
  .stat-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .stat-grid-3 {
    grid-template-columns: 1fr !important;
  }
  .content-area {
    padding: 68px 12px 20px !important;
  }
}
```

**Step 2: Add className to all stat grids in App.jsx**

Tag all stat grid divs:
- 4-col grids: `className="stat-grid"`
- 3-col grids: `className="stat-grid-3"`
- 6-col grids: `className="stat-grid-6"`
- 2-col grids: leave as-is (already works on mobile)

**Step 3: Test mobile layout in dev**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run dev`
Open in browser, test at 375px, 768px, 1024px widths.

**Step 4: Verify build**

Run: `cd /Users/nico/projects/crisis-iglesia-dashboard && npm run build`

**Step 5: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "feat: complete mobile responsive layout"
```

---

### Task 8: Visual QA + Deploy

**Files:**
- Possibly minor tweaks to `src/App.jsx` and `src/index.css`

**Step 1: Run dev server and screenshot all sections**

Use Playwright or manual review to check every section in both desktop and mobile.

Check:
- [ ] Sidebar shows Roman numerals + chapter names
- [ ] Active chapter has gold left border
- [ ] Drop caps render on major chapters
- [ ] Charts have double-border frames
- [ ] Filigree dividers appear between sections
- [ ] Parchment texture visible but subtle
- [ ] All stat cards readable with new palette
- [ ] Mobile: sidebar drawer works
- [ ] Mobile: grids collapse to 2 cols
- [ ] ES/EN toggle works in both sidebar and mobile header
- [ ] All Recharts render correctly with new colors
- [ ] No color contrast issues (text readable on parchment)

**Step 2: Fix any issues found**

**Step 3: Final build + push**

```bash
cd /Users/nico/projects/crisis-iglesia-dashboard
npm run build
git add -A
git commit -m "feat: illuminated manuscript redesign complete"
git push
```

Netlify auto-deploys from main.
