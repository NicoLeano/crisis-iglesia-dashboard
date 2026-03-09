import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Cell, ReferenceLine, Label } from "recharts";
import { i18n } from "./i18n";
import MassMap from "./MassMap";

/* ═══════════════════════ DATA ═══════════════════════ */
const priestsUSA=[{y:"1965",t:59426,a:56455},{y:"1970",t:59192,a:55000},{y:"1975",t:58909,a:52000},{y:"1980",t:58398,a:49000},{y:"1985",t:57317,a:46000},{y:"1990",t:52124,a:42000},{y:"1995",t:49054,a:38000},{y:"2000",t:45699,a:35500},{y:"2005",t:42839,a:32000},{y:"2010",t:39993,a:28000},{y:"2015",t:37578,a:25500},{y:"2018",t:36580,a:25254},{y:"2022",t:35000,a:24110}];
const priestsWorld=[{y:"1970",p:419728,c:653.6,r:1842},{y:"1980",p:413600,c:783.7,r:1895},{y:"1990",p:403173,c:928.5,r:2303},{y:"2000",p:405178,c:1045,r:2579},{y:"2010",p:412236,c:1196,r:2901},{y:"2017",p:414582,c:1313,r:3167},{y:"2023",p:406996,c:1405,r:3452}];
const nunsUSA=[{y:"1965",n:180000},{y:"1970",n:153645},{y:"1975",n:135225},{y:"1980",n:126517},{y:"1985",n:115386},{y:"1990",n:102504},{y:"1995",n:92107},{y:"2000",n:79814},{y:"2005",n:68634},{y:"2010",n:56000},{y:"2014",n:49883},{y:"2022",n:42000}];
const massAtt=[{y:"1955",cat:75,prot:43},{y:"1965",cat:67,prot:40},{y:"1975",cat:54,prot:40},{y:"1985",cat:48,prot:42},{y:"1995",cat:44,prot:43},{y:"2005",cat:45,prot:45},{y:"2017",cat:39,prot:45}];
const marriages=[{y:"1965",m:352000,c:45.6},{y:"1970",m:426309,c:54.1},{y:"1980",m:357000,c:50.4},{y:"1990",m:325000,c:55.7},{y:"2000",m:261626,c:59.9},{y:"2010",m:168400,c:65.6},{y:"2020",m:121000,c:72},{y:"2024",m:108865,c:77.2}];
const orders=[{o:"Jesuitas",p1:5277,s1:3559,p2:3172,s2:38},{o:"Franciscanos OFM",p1:2534,s1:2251,p2:1492,s2:60},{o:"Hermanos Cristianos",p1:2434,s1:912,p2:959,s2:7},{o:"Redentoristas",p1:1148,s1:1128,p2:349,s2:24}];
const regional=[{r:"Europa",v:-2486},{r:"Américas",v:-800},{r:"Oceanía",v:-44},{r:"Asia",v:1145},{r:"África",v:1451}];
const francePriests=[{y:"1965",p:41000},{y:"1975",p:35000},{y:"1985",p:28000},{y:"1995",p:22000},{y:"2010",p:15000},{y:"2025",p:11000}];
const sspxP=[{y:"1975",p:30},{y:"1980",p:100},{y:"1988",p:202},{y:"1995",p:350},{y:"2000",p:430},{y:"2008",p:491},{y:"2013",p:575},{y:"2016",p:612},{y:"2021",p:676},{y:"2022",p:707},{y:"2025",p:733}];
const sspxDetail=[{y:"1988",p:202,s:213,b:13,pr:60,ch:300},{y:"2008",p:491,s:215,b:117,pr:159,ch:725},{y:"2013",p:575,s:217,b:103,pr:105,ch:525},{y:"2017",p:612,s:204,b:116,pr:159,ch:760},{y:"2021",p:676,s:190,b:135,pr:159,ch:760},{y:"2025",p:733,s:200,b:140,pr:170,ch:800}];
const tradComp=[{n:"FSSPX",p:733,s:200,m:800,c:62},{n:"FSSP",p:387,s:162,m:251,c:40},{n:"ICKSP",p:80,s:40,m:90,c:12}];

/* ═══════════════════ PALETTE ═══════════════════ */
const bg = "#FAFAF5";
const surface = "#FFFFFF";
const surfaceDim = "#F3EEE6";
const text = "#1A1612";
const textDim = "#6B6156";
const textMuted = "#9C9488";
const crimson = "#8B1A1A";
const crimsonLight = "#A52828";
const gold = "#B8860B";
const goldDim = "rgba(184, 134, 11, 0.12)";
const olive = "#2D5016";
const navy = "#161412";
const border = "rgba(26, 22, 18, 0.08)";

const fontH = "'Space Grotesk', system-ui, sans-serif";
const fontB = "'Source Serif 4', Georgia, serif";
const fontM = "'JetBrains Mono', monospace";

/* ═══════════════════ COMPONENTS ═══════════════════ */
const TT = ({active,payload,label}) => {
  if(!active||!payload?.length) return null;
  return <div style={{background:surface,border:`1px solid ${border}`,borderRadius:2,padding:"12px 16px",fontSize:13,color:text,fontFamily:fontB,boxShadow:"0 4px 12px rgba(26,22,18,0.1)"}}>
    <p style={{fontWeight:700,marginBottom:6,fontFamily:fontH,fontSize:12,color:textDim,letterSpacing:"0.03em"}}>{label}</p>
    {payload.map((e,i)=><p key={i} style={{color:e.color,fontSize:14}}><span style={{fontFamily:fontM,fontSize:12}}>{e.name}:</span> {typeof e.value==="number"&&e.value>999?e.value.toLocaleString():e.value}</p>)}
  </div>;
};

const sourceLinks = {
  "Pew 2019": "https://www.pewresearch.org/religion/2019/08/05/beliefs-and-practices/",
  "CARA": "https://cara.georgetown.edu/frequently-requested-church-statistics/",
};
const linkifySub = (s) => {
  if (typeof s !== "string") return s;
  for (const [key, url] of Object.entries(sourceLinks)) {
    const idx = s.indexOf(`(${key})`);
    if (idx !== -1) {
      const before = s.slice(0, idx);
      const after = s.slice(idx + key.length + 2);
      return <>{before}(<a href={url} target="_blank" rel="noopener noreferrer" style={{color:textMuted,borderBottom:`1px solid ${border}`}}>{key}</a>){after}</>;
    }
  }
  return s;
};

const Stat = ({value,label,sub,period,color=crimson}) => (
  <div style={{borderTop:`2px solid ${gold}`,padding:"20px 16px 16px",textAlign:"left",background:surface}}>
    <p style={{fontSize:clamp(36,48),fontWeight:700,color,fontFamily:fontH,lineHeight:1,letterSpacing:"-0.02em"}}>{value}</p>
    <p style={{color:textDim,fontWeight:600,fontSize:12,marginTop:10,fontFamily:fontH,textTransform:"uppercase",letterSpacing:"0.06em"}}>{label}</p>
    {sub&&<p style={{color:textMuted,fontSize:12,marginTop:4,fontFamily:fontM}}>{linkifySub(sub)}</p>}
    {period&&<p style={{color:textMuted,fontSize:11,fontFamily:fontM}}>{period}</p>}
  </div>
);

const Card = ({children,style:s}) => <div style={{background:surface,borderRadius:2,padding:"32px 36px",boxShadow:"0 1px 3px rgba(26,22,18,0.05), 0 1px 2px rgba(26,22,18,0.03)",...s}}>{children}</div>;
const H2 = ({children,color=crimson}) => <h2 style={{fontFamily:fontH,fontWeight:700,fontSize:clamp(22,28),letterSpacing:"-0.01em",marginBottom:8,color,lineHeight:1.2}}>{children}</h2>;
const Sub = ({children}) => <p style={{color:textDim,fontSize:16,marginBottom:20,fontWeight:400,fontFamily:fontB,lineHeight:1.6}}>{children}</p>;

const Divider = () => (
  <div style={{display:"flex",alignItems:"center",gap:16,margin:"12px 0",opacity:0.35}}>
    <div style={{flex:1,height:"1px",background:`linear-gradient(90deg, transparent, ${gold})`}}/>
    <span style={{color:gold,fontSize:14,lineHeight:1}}>☩</span>
    <div style={{flex:1,height:"1px",background:`linear-gradient(90deg, ${gold}, transparent)`}}/>
  </div>
);

const Chart = ({children,h=340}) => (
  <div style={{background:surface,borderRadius:2,padding:"4px 0 0",marginTop:8}}>
    <ResponsiveContainer width="100%" height={h}>{children}</ResponsiveContainer>
  </div>
);

const Callout = ({color="crimson",children}) => {
  const borderColor = color==="crimson"?crimson:color==="gold"?gold:color==="green"?olive:color==="blue"?navy:textDim;
  return (
    <div style={{borderLeft:`3px solid ${borderColor}`,padding:"24px 28px",background:surface,boxShadow:"0 1px 3px rgba(26,22,18,0.05)"}}>
      {children}
    </div>
  );
};

const PullQuote = ({text:qt,cite}) => (
  <div style={{borderLeft:`3px solid ${gold}`,paddingLeft:28,margin:"8px 0"}}>
    <p style={{fontFamily:fontB,fontSize:20,fontWeight:600,fontStyle:"italic",color:text,lineHeight:1.5}}>{qt}</p>
    {cite&&<p style={{fontFamily:fontM,fontSize:11,color:textMuted,marginTop:10,letterSpacing:"0.03em"}}>{cite}</p>}
  </div>
);

const SectionLabel = ({children}) => (
  <p style={{fontFamily:fontM,fontSize:11,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:textMuted,marginBottom:4}}>{children}</p>
);

function clamp(min, max) {
  return `clamp(${min}px, ${min + (max-min)*0.5}px + 1vw, ${max}px)`;
}

/* ═══════════════════ CHART STYLES ═══════════════════ */
const axisStyle = { stroke: textMuted, fontSize: 12, fontFamily: fontM };
const gridStyle = { strokeDasharray: "3 8", stroke: border, strokeOpacity: 1 };

/* ═══════════════════════ APP ═══════════════════════ */
export default function App(){
  const [sec,setSec]=useState("overview");
  const [lang, setLang] = useState("es");
  const [page, setPage] = useState("dashboard");
  const t = i18n[lang];
  const grid=(cols,gap=2)=>({display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap});

  if (page === "map") return <MassMap t={t} lang={lang} setLang={setLang} onBack={() => setPage("dashboard")} />;

  return(
  <div style={{minHeight:"100vh",background:bg,color:text}}>
    {/* HEADER */}
    <header style={{padding:"48px 24px 40px",textAlign:"center",background:navy,borderBottom:`2px solid ${gold}`}}>
      <p style={{color:gold,fontSize:14,letterSpacing:"0.4em",marginBottom:16,opacity:0.5}}>☩</p>
      <p style={{color:textMuted,fontSize:11,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:14,fontFamily:fontM}}>{t.header.subtitle}</p>
      <h1 style={{fontFamily:fontH,fontSize:"clamp(28px, 5vw, 42px)",fontWeight:700,color:"#F0EBE0",lineHeight:1.15,marginBottom:12,letterSpacing:"-0.02em",maxWidth:700,margin:"0 auto 12px"}}>{t.header.title}</h1>
      <p style={{color:gold,fontSize:13,letterSpacing:"0.15em",fontFamily:fontM,opacity:0.6}}>{t.header.dateRange}</p>
      <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:14,flexWrap:"wrap"}}>
        <button onClick={()=>setPage("map")} style={{
          background:"rgba(45,80,22,0.15)",border:`1px solid rgba(45,80,22,0.4)`,borderRadius:2,
          color:"#8db87a",padding:"6px 16px",fontSize:12,fontFamily:fontM,
          cursor:"pointer",letterSpacing:"0.04em",fontWeight:500,
          transition:"all 0.2s"
        }}>
          ☩ {t.map.cta}
        </button>
        <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
          background:"transparent",border:`1px solid rgba(184,134,11,0.3)`,borderRadius:2,
          color:gold,padding:"6px 16px",fontSize:12,fontFamily:fontM,
          cursor:"pointer",letterSpacing:"0.06em",fontWeight:500,
          transition:"all 0.2s"
        }}>
          {lang==="es"?"English":"Español"}
        </button>
      </div>
    </header>

    {/* NAV */}
    <nav className="nav-scroll" style={{position:"sticky",top:0,zIndex:20,background:surface,borderBottom:`1px solid ${border}`,boxShadow:"0 1px 4px rgba(26,22,18,0.04)"}}>
      <div style={{maxWidth:920,margin:"0 auto",padding:"0 16px",display:"flex",overflowX:"auto",gap:0,alignItems:"stretch"}}>
        {t.nav.map(s=>(
          <button key={s.id} onClick={()=>setSec(s.id)} style={{
            padding:"14px 18px",fontSize:12,fontWeight:sec===s.id?700:500,fontFamily:fontH,
            whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.2s",border:"none",
            background:"transparent",
            color:sec===s.id?text:textMuted,
            borderBottom:sec===s.id?`2px solid ${gold}`:"2px solid transparent",
            letterSpacing:"0.02em",
          }}>{s.label}</button>
        ))}
      </div>
    </nav>

    <main style={{maxWidth:880,margin:"0 auto",padding:"40px 24px 60px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:28}}>

      {/* ══════════ OVERVIEW ══════════ */}
      {sec==="overview"&&<>
        <Card>
          <H2>{t.overview.h2}</H2>
          <Divider/>
          <p className="drop-cap" style={{color:text,fontSize:18,lineHeight:1.8,fontWeight:400,marginTop:16}}>{t.overview.paragraph}</p>
        </Card>

        {/* Hero stats — dramatic, left-aligned */}
        <div className="stat-grid" style={grid(4)}>
          {t.overview.statsRow1.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p}/>)}
        </div>
        <div className="stat-grid" style={grid(4)}>
          {t.overview.statsRow2.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p} color={i===3?olive:crimson}/>)}
        </div>
        <div className="stat-grid-3" style={grid(3)}>
          {t.overview.statsRow3.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color={crimson}/>)}
        </div>

        {/* Harvard callout */}
        <Callout color="crimson">
          <SectionLabel>{t.overview.nberAlertTitle}</SectionLabel>
          <p style={{fontFamily:fontB,fontSize:18,fontWeight:600,fontStyle:"italic",color:text,lineHeight:1.6,margin:"12px 0"}}>{t.overview.nberAlertText}</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <a href="https://www.nber.org/system/files/working_papers/w34060/w34060.pdf" target="_blank" rel="noopener" style={{color:crimson,fontSize:12,fontFamily:fontM,textDecoration:"none",borderBottom:`1px solid ${crimson}`,paddingBottom:1}}>PDF (NBER)</a>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5359609" target="_blank" rel="noopener" style={{color:crimson,fontSize:12,fontFamily:fontM,textDecoration:"none",borderBottom:`1px solid ${crimson}`,paddingBottom:1}}>SSRN</a>
            <a href="https://news.harvard.edu/gazette/story/2025/09/data-bolsters-theory-about-plunging-catholic-mass-attendance/" target="_blank" rel="noopener" style={{color:crimson,fontSize:12,fontFamily:fontM,textDecoration:"none",borderBottom:`1px solid ${crimson}`,paddingBottom:1}}>Harvard Gazette</a>
          </div>
        </Callout>

        {/* NBER key metrics */}
        <div style={grid(2,2)}>
          <Stat value={t.overview.nberDeclineRate} label={t.overview.nberDeclineRateLabel} sub={t.overview.nberDeclineRateSub} color={crimson}/>
          <Stat value={t.overview.nberAccumulated} label={t.overview.nberAccumulatedLabel} sub={t.overview.nberAccumulatedSub} color={crimson}/>
        </div>

        <PullQuote text={t.overview.wildeQuote} cite={t.overview.wildeCite}/>

        {/* Education section */}
        <Card>
          <H2 color={text}>{t.overview.educationTitle}</H2>
          <div className="stat-grid-3" style={{...grid(3),gap:1,marginTop:12}}>
            {t.overview.educationStats.map(([v,l,d],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px 14px",textAlign:"left"}}>
                <p style={{color:crimsonLight,fontWeight:700,fontSize:20,fontFamily:fontH}}>{v}</p>
                <p style={{color:text,fontSize:12,fontWeight:600,marginTop:4,fontFamily:fontH}}>{l}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:2}}>{d}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Exodus section */}
        <Card>
          <H2 color={text}>{t.overview.exodusTitle}</H2>
          <div className="stat-grid-3" style={{...grid(3),gap:1,marginTop:12}}>
            {t.overview.exodusStats.map(([v,l,d],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px 14px",textAlign:"left"}}>
                <p style={{color:gold,fontWeight:700,fontSize:20,fontFamily:fontH}}>{v}</p>
                <p style={{color:text,fontSize:12,fontWeight:600,marginTop:4,fontFamily:fontH}}>{l}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:2}}>{d}</p>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ PRIESTS ══════════ */}
      {sec==="priests"&&<>
        <Card>
          <H2>{t.priests.h2_1}</H2>
          <Sub>{t.priests.sub_1}</Sub>
          <Chart>
            <ComposedChart data={priestsUSA}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis {...axisStyle} tickLine={false} tickFormatter={v=>v.toLocaleString()}/>
              <Tooltip content={<TT/>}/>
              <Legend wrapperStyle={{fontFamily:fontH,fontSize:12}}/>
              <Area type="monotone" dataKey="t" name={t.priests.chartLegend1[0]} fill="rgba(139,26,26,0.06)" stroke={crimson} strokeWidth={2.5} fillOpacity={1}/>
              <Line type="monotone" dataKey="a" name={t.priests.chartLegend1[1]} stroke={gold} strokeWidth={2} dot={{r:3,fill:gold}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Divider/>
        <Card>
          <H2 color={gold}>{t.priests.h2_2}</H2>
          <Sub>{t.priests.sub_2}</Sub>
          <Chart>
            <ComposedChart data={priestsWorld}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis yAxisId="l" {...axisStyle} tickLine={false} tickFormatter={v=>v.toLocaleString()}/>
              <YAxis yAxisId="r" orientation="right" {...axisStyle} tickLine={false}/>
              <Tooltip content={<TT/>}/>
              <Legend wrapperStyle={{fontFamily:fontH,fontSize:12}}/>
              <Bar yAxisId="l" dataKey="p" name={t.priests.chartLegend2[0]} fill={crimson} fillOpacity={0.75} radius={[2,2,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="r" name={t.priests.chartLegend2[1]} stroke={gold} strokeWidth={2.5} dot={{r:4,fill:gold}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Divider/>
        <Card>
          <H2>{t.priests.h2_3}</H2>
          <Sub>{t.priests.sub_3}</Sub>
          <Chart h={280}>
            <BarChart data={francePriests}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis {...axisStyle} tickLine={false} tickFormatter={v=>v.toLocaleString()}/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="p" name={t.priests.chartLegend3[0]} fill={crimson} fillOpacity={0.75} radius={[2,2,0,0]}/>
            </BarChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={gold}>{t.priests.additionalTitle}</H2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:1,marginTop:12}}>
            {t.priests.additionalData.map(([v,d],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"14px 18px"}}>
                <p style={{color:gold,fontWeight:700,fontSize:18,fontFamily:fontH}}>{v}</p>
                <p style={{color:textDim,fontSize:13,marginTop:4,lineHeight:1.4}}>{d}</p>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ NUNS ══════════ */}
      {sec==="nuns"&&<>
        <Card>
          <H2>{t.nuns.h2}</H2>
          <Sub>{t.nuns.sub}</Sub>
          <Chart>
            <ComposedChart data={nunsUSA}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis {...axisStyle} tickLine={false} tickFormatter={v=>v.toLocaleString()}/>
              <Tooltip content={<TT/>}/>
              <Area type="monotone" dataKey="n" name={t.nuns.chartLegend[0]} fill="rgba(139,26,26,0.06)" stroke={crimson} strokeWidth={2.5} fillOpacity={1}/>
            </ComposedChart>
          </Chart>
        </Card>

        <Callout color="crimson">
          <SectionLabel>{t.nuns.declineTitle}</SectionLabel>
          <div className="stat-grid-6" style={{...grid(6),gap:8,marginTop:12}}>
            {t.nuns.intlDecline.map(([c,d],i)=>(
              <div key={i} style={{background:surfaceDim,borderRadius:2,padding:"10px 8px",textAlign:"center"}}>
                <p style={{color:crimsonLight,fontWeight:700,fontSize:15,fontFamily:fontH}}>{d}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM}}>{c}</p>
              </div>
            ))}
          </div>
        </Callout>

        <Card>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}><span style={{fontWeight:600}}>{t.nuns.worldDataLabel}</span> {t.nuns.worldDataText}</p>
        </Card>

        <Card>
          <H2 color={text}>{t.nuns.educationImpactTitle}</H2>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}>{t.nuns.educationImpactText}</p>
        </Card>
      </>}

      {/* ══════════ MASS / FAITH ══════════ */}
      {sec==="mass"&&<>
        <Card>
          <H2>{t.mass.h2}</H2>
          <Sub>{t.mass.sub}</Sub>
          <Chart>
            <LineChart data={massAtt}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis {...axisStyle} tickLine={false} domain={[30,80]} unit="%"/>
              <Tooltip content={<TT/>}/>
              <Legend wrapperStyle={{fontFamily:fontH,fontSize:12}}/>
              <Line type="monotone" dataKey="cat" name={t.mass.chartLegends[0]} stroke={crimson} strokeWidth={3} dot={{r:5,fill:crimson}}/>
              <Line type="monotone" dataKey="prot" name={t.mass.chartLegends[1]} stroke={textMuted} strokeWidth={2} dot={{r:4,fill:textMuted}} strokeDasharray="6 3"/>
            </LineChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={text}>{t.mass.europeanTitle}</H2>
          <div className="stat-grid-3" style={{...grid(3),gap:1,marginTop:8}}>
            {[[t.mass.countries.france,"27%","4.5%","1965-2009"],[t.mass.countries.ireland,"~90%","~30%","1965-2020"],[t.mass.countries.netherlands,"~65%","<10%","1965-2010"]].map(([c,f,to,p],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px 14px",textAlign:"left"}}>
                <p style={{color:text,fontWeight:700,fontSize:15,fontFamily:fontH}}>{c}</p>
                <p style={{color:crimsonLight,fontSize:14,fontFamily:fontM,marginTop:4}}>{f} → {to}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM}}>{p}</p>
              </div>
            ))}
          </div>
        </Card>

        <Callout color="crimson">
          <SectionLabel>{t.mass.transAlertTitle}</SectionLabel>
          <p style={{color:text,fontSize:16,lineHeight:1.7,margin:"12px 0 16px"}}>{t.mass.transIntro}</p>
          <div style={grid(2,1)}>
            {t.mass.transStats.map(([v,l],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px",textAlign:"center"}}>
                <p style={{fontSize:28,fontWeight:700,color:crimson,fontFamily:fontH}}>{v}</p>
                <p style={{color:textDim,fontSize:11,marginTop:4,fontFamily:fontM}}>{l}</p>
              </div>
            ))}
          </div>
          <p style={{color:textMuted,fontSize:14,marginTop:16,lineHeight:1.7}}>{t.mass.transDetail}</p>
        </Callout>

        <PullQuote text={t.mass.barronQuote} cite=""/>

        {/* NBER: Gender and generational gap */}
        <Card>
          <H2 color={text}>{t.mass.nberGenderTitle}</H2>
          <div className="stat-grid-3" style={{...grid(3),gap:1,marginTop:12}}>
            {t.mass.nberGenderStats.map(([v,l,d],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px 14px",textAlign:"left"}}>
                <p style={{color:crimsonLight,fontWeight:700,fontSize:20,fontFamily:fontH}}>{v}</p>
                <p style={{color:text,fontSize:12,fontWeight:600,marginTop:4,fontFamily:fontH}}>{l}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:2}}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{color:textDim,fontSize:14,lineHeight:1.7,marginTop:16,fontStyle:"italic"}}>{t.mass.nberGenderNote}</p>
        </Card>

        <Card>
          <H2 color={gold}>{t.mass.liturgicalTitle}</H2>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}>{t.mass.liturgicalText}</p>
        </Card>
      </>}

      {/* ══════════ MARRIAGES ══════════ */}
      {sec==="marriages"&&<>
        <Card>
          <H2>{t.marriages.h2}</H2>
          <Sub>{t.marriages.sub}</Sub>
          <Chart>
            <ComposedChart data={marriages}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis yAxisId="l" {...axisStyle} tickLine={false} tickFormatter={v=>v.toLocaleString()}/>
              <YAxis yAxisId="r" orientation="right" {...axisStyle} tickLine={false} unit="M"/>
              <Tooltip content={<TT/>}/>
              <Legend wrapperStyle={{fontFamily:fontH,fontSize:12}}/>
              <Bar yAxisId="l" dataKey="m" name={t.marriages.chartLegends[0]} fill={crimson} fillOpacity={0.75} radius={[2,2,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="c" name={t.marriages.chartLegends[1]} stroke={gold} strokeWidth={2.5} dot={{r:4,fill:gold}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Card>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}>{t.marriages.feedbackCycle}</p>
        </Card>
      </>}

      {/* ══════════ ORDERS ══════════ */}
      {sec==="orders"&&<>
        <Card>
          <H2>{t.orders.h2}</H2>
          <Sub>{t.orders.sub}</Sub>
          <div style={{display:"flex",flexDirection:"column",gap:1,marginTop:8}}>
            {orders.map((o,i)=>{
              const pd=Math.round((1-o.p2/o.p1)*100), sd=Math.round((1-o.s2/o.s1)*100);
              return(
                <div key={i} style={{background:surfaceDim,padding:"18px 20px"}}>
                  <p style={{color:text,fontWeight:700,fontSize:16,marginBottom:10,fontFamily:fontH}}>{o.o}</p>
                  <div style={grid(2,24)}>
                    <div>
                      <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginBottom:4}}>{t.orders.labels[0]}</p>
                      <p style={{fontSize:14}}>
                        <span style={{color:textDim}}>{o.p1.toLocaleString()}</span>
                        <span style={{color:textMuted}}> → </span>
                        <span style={{color:crimson,fontWeight:700}}>{o.p2.toLocaleString()}</span>
                        <span style={{color:crimson,fontSize:12,fontWeight:700,fontFamily:fontM,marginLeft:6}}>-{pd}%</span>
                      </p>
                    </div>
                    <div>
                      <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginBottom:4}}>{t.orders.labels[1]}</p>
                      <p style={{fontSize:14}}>
                        <span style={{color:textDim}}>{o.s1.toLocaleString()}</span>
                        <span style={{color:textMuted}}> → </span>
                        <span style={{color:crimson,fontWeight:700}}>{o.s2}</span>
                        <span style={{color:crimson,fontSize:12,fontWeight:700,fontFamily:fontM,marginLeft:6}}>-{sd}%</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Callout color="crimson">
          <SectionLabel>{t.orders.impactTitle}</SectionLabel>
          <p style={{color:text,fontSize:17,lineHeight:1.8,marginTop:8}}>{t.orders.impactText}</p>
        </Callout>

        <Card>
          <H2 color={gold}>{t.orders.seminariesTitle}</H2>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}>{t.orders.seminariesText}</p>
        </Card>

        <Callout color="crimson">
          <SectionLabel>{t.orders.caraAlert}</SectionLabel>
          <p style={{color:text,fontSize:17,lineHeight:1.8,marginTop:8}}>{t.orders.caraDetail}</p>
        </Callout>
      </>}

      {/* ══════════ REGIONAL ══════════ */}
      {sec==="regional"&&<>
        <Card>
          <H2 color={gold}>{t.regional.h2}</H2>
          <Sub>{t.regional.sub}</Sub>
          <Chart h={280}>
            <BarChart data={regional} layout="vertical">
              <CartesianGrid {...gridStyle}/>
              <XAxis type="number" {...axisStyle} tickLine={false}/>
              <YAxis type="category" dataKey="r" {...axisStyle} tickLine={false} width={70}/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="v" name={t.regional.chartLegend[0]} radius={[0,2,2,0]}>
                {regional.map((e,i)=>(
                  <Cell key={i} fill={e.v>0?olive:crimsonLight} fillOpacity={0.8}/>
                ))}
              </Bar>
            </BarChart>
          </Chart>
        </Card>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
          <Callout color="green">
            <SectionLabel>{t.regional.growthTitle}</SectionLabel>
            <p style={{color:text,fontSize:16,lineHeight:1.7,marginTop:8}}>{t.regional.growthText}</p>
          </Callout>
          <Callout color="crimson">
            <SectionLabel>{t.regional.deathTitle}</SectionLabel>
            <p style={{color:text,fontSize:16,lineHeight:1.7,marginTop:8}}>{t.regional.deathText}</p>
          </Callout>
        </div>

        <Card>
          <H2 color={text}>{t.regional.mexicoTitle}</H2>
          <p style={{color:text,fontSize:17,lineHeight:1.8}}>{t.regional.mexicoText}</p>
        </Card>
      </>}

      {/* ══════════ SSPX ══════════ */}
      {sec==="sspx"&&<>
        <Card style={{borderLeft:`3px solid ${olive}`}}>
          <H2 color={olive}>{t.sspx.h2}</H2>
          <p className="drop-cap" style={{color:text,fontSize:17,lineHeight:1.8,marginTop:12}}>{t.sspx.intro}</p>
        </Card>

        <div className="stat-grid" style={grid(4)}>
          {t.sspx.stats.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color={olive}/>)}
        </div>

        <Card>
          <H2 color={olive}>{t.sspx.growthH2}</H2>
          <Sub>{t.sspx.growthSub}</Sub>
          <Chart>
            <ComposedChart data={sspxP}>
              <CartesianGrid {...gridStyle}/>
              <XAxis dataKey="y" {...axisStyle} tickLine={false}/>
              <YAxis {...axisStyle} tickLine={false}/>
              <Tooltip content={<TT/>}/>
              <Area type="monotone" dataKey="p" name={t.sspx.chartLegend[0]} fill="rgba(45,80,22,0.06)" stroke={olive} fillOpacity={1} strokeWidth={2.5}/>
            </ComposedChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={text}>{t.sspx.tableH2}</H2>
          <div style={{overflowX:"auto",marginTop:12}}>
            <table style={{width:"100%",fontSize:13,borderCollapse:"collapse",fontFamily:fontM}}>
              <thead>
                <tr style={{borderBottom:`2px solid ${gold}`}}>
                  {t.sspx.tableHeaders.map((h,i)=><th key={i} style={{textAlign:"left",padding:"10px 12px",color:textMuted,fontWeight:500,fontSize:11,letterSpacing:"0.04em",textTransform:"uppercase"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {sspxDetail.map((r,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${border}`}}>
                    <td style={{padding:"10px 12px",color:text,fontWeight:700}}>{r.y}</td>
                    <td style={{padding:"10px 12px",color:olive,fontWeight:700}}>{r.p}</td>
                    <td style={{padding:"10px 12px",color:textDim}}>{r.s}</td>
                    <td style={{padding:"10px 12px",color:textDim}}>{r.b}</td>
                    <td style={{padding:"10px 12px",color:textDim}}>{r.pr}</td>
                    <td style={{padding:"10px 12px",color:textDim}}>{r.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <H2 color={text}>{t.sspx.comparisonH2}</H2>
          <Chart h={220}>
            <BarChart data={tradComp} layout="vertical">
              <CartesianGrid {...gridStyle}/>
              <XAxis type="number" {...axisStyle} tickLine={false}/>
              <YAxis type="category" dataKey="n" {...axisStyle} tickLine={false} width={50}/>
              <Tooltip content={<TT/>}/>
              <Legend wrapperStyle={{fontFamily:fontH,fontSize:12}}/>
              <Bar dataKey="p" name={t.sspx.comparisonLegends[0]} fill={olive} radius={[0,2,2,0]}/>
              <Bar dataKey="s" name={t.sspx.comparisonLegends[1]} fill="rgba(45,80,22,0.45)" radius={[0,2,2,0]}/>
            </BarChart>
          </Chart>
          <div className="stat-grid-3" style={{...grid(3),gap:1,marginTop:16}}>
            {tradComp.map((c,i)=>(
              <div key={i} style={{background:surfaceDim,padding:"14px",textAlign:"left"}}>
                <p style={{color:text,fontWeight:700,fontSize:15,fontFamily:fontH}}>{c.n}</p>
                <p style={{color:olive,fontSize:12,fontFamily:fontM,marginTop:4}}>{c.p} {t.sspx.comparisonLabels[0]} · {c.m} {t.sspx.comparisonLabels[1]}</p>
                <p style={{color:textMuted,fontSize:11,fontFamily:fontM}}>{c.c} {t.sspx.comparisonLabels[2]}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contrast side-by-side */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
          <Callout color="crimson">
            <SectionLabel>Conciliar (2023)</SectionLabel>
            <div style={{marginTop:8}}>
              {t.sspx.conciliarStats.map((s,i)=><p key={i} style={{color:textDim,fontSize:14,marginBottom:4,lineHeight:1.5}}>– {s}</p>)}
            </div>
          </Callout>
          <Callout color="green">
            <SectionLabel>FSSPX</SectionLabel>
            <div style={{marginTop:8}}>
              {t.sspx.fsspxStats.map((s,i)=><p key={i} style={{color:textDim,fontSize:14,marginBottom:4,lineHeight:1.5}}>– {s}</p>)}
            </div>
          </Callout>
        </div>
      </>}

      {/* ══════════ NOVUS ORDO ══════════ */}
      {sec==="novusordo"&&<>
        <Card style={{borderLeft:`3px solid ${navy}`}}>
          <H2 color={navy}>{t.novusordo.h2}</H2>
          <p className="drop-cap" style={{color:text,fontSize:17,lineHeight:1.8,marginTop:12}}>{t.novusordo.intro}</p>
        </Card>

        <Card>
          <H2 color={navy}>{t.novusordo.timelineH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:0,marginTop:16}}>
            {t.novusordo.timeline.map(([yr,ev,det],i)=>(
              <div key={i} style={{display:"flex",gap:16,paddingBottom:20,marginBottom:0}}>
                <div style={{flexShrink:0,width:48,textAlign:"right"}}>
                  <span style={{color:gold,fontWeight:700,fontSize:13,fontFamily:fontM}}>{yr}</span>
                </div>
                <div style={{flexShrink:0,width:1,background:border,position:"relative"}}>
                  <div style={{position:"absolute",top:4,left:-4,width:9,height:9,borderRadius:"50%",background:gold}}/>
                </div>
                <div style={{paddingLeft:8}}>
                  <p style={{color:text,fontWeight:700,fontSize:15,fontFamily:fontH}}>{ev}</p>
                  <p style={{color:textDim,fontSize:15,lineHeight:1.7,marginTop:4}}>{det}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* NBER: Immediate decline */}
        <Callout color="crimson">
          <SectionLabel>{t.novusordo.nberTimingTitle}</SectionLabel>
          <p style={{color:text,fontSize:16,lineHeight:1.7,marginTop:8}}>{t.novusordo.nberTimingText}</p>
        </Callout>

        <Card>
          <H2 color={text}>{t.novusordo.offertoryTitle}</H2>
          <p style={{color:textMuted,fontSize:12,fontFamily:fontM,marginBottom:20}}>{t.novusordo.offertorySubtitle}</p>
          <div style={grid(2,2)}>
            <div style={{background:surfaceDim,padding:20,borderLeft:`3px solid ${gold}`}}>
              <SectionLabel>{t.novusordo.traditionalTitle}</SectionLabel>
              <p style={{color:text,fontSize:14,lineHeight:1.7,fontStyle:"italic",marginTop:8}}>{t.novusordo.traditionalText}</p>
              <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:10}}>{t.novusordo.traditionalNote}</p>
            </div>
            <div style={{background:surfaceDim,padding:20,borderLeft:`3px solid ${crimson}`}}>
              <SectionLabel>{t.novusordo.noTitle}</SectionLabel>
              <p style={{color:text,fontSize:14,lineHeight:1.7,fontStyle:"italic",marginTop:8}}>{t.novusordo.noText}</p>
              <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:10}}>{t.novusordo.noNote}</p>
            </div>
          </div>
          <div style={{background:surfaceDim,padding:"16px 20px",marginTop:2}}>
            <p style={{color:text,fontSize:15,lineHeight:1.7}}>{t.novusordo.consiliumNote}</p>
          </div>
        </Card>

        {/* YouTube video */}
        <Card>
          <H2 color={navy}>{t.novusordo.videoTitle}</H2>
          <div style={{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",marginTop:12,borderRadius:2}}>
            <iframe
              src="https://www.youtube.com/embed/kXA-Nsd2VTI"
              title={t.novusordo.videoTitle}
              style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{color:textMuted,fontSize:11,fontFamily:fontM,marginTop:8}}>Mass of the Ages · 225K subscribers</p>
        </Card>

        <Card>
          <H2 color={text}>{t.novusordo.structuralTitle}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:0,marginTop:8}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0,fontSize:11,padding:"10px 0",borderBottom:`2px solid ${gold}`,fontFamily:fontM,textTransform:"uppercase",letterSpacing:"0.04em",color:textMuted}}>
              <span>Aspecto</span><span>Tridentina</span><span>Novus Ordo</span>
            </div>
            {t.novusordo.structuralRows.map(([a,tr,n],i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0,fontSize:14,padding:"12px 0",borderBottom:`1px solid ${border}`}}>
                <span style={{color:textMuted,fontWeight:500}}>{a}</span>
                <span style={{color:gold}}>{tr}</span>
                <span style={{color:crimsonLight}}>{n}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <H2 color={text}>{t.novusordo.testimoniesTitle}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:2,marginTop:12}}>
            {t.novusordo.testimonies.map(([who,quote],i)=>(
              <div key={i} style={{background:surfaceDim,padding:"16px 20px"}}>
                <p style={{color:gold,fontWeight:700,fontSize:12,marginBottom:6,fontFamily:fontM,letterSpacing:"0.03em"}}>{who}</p>
                <p style={{color:text,fontSize:15,fontStyle:"italic",lineHeight:1.6}}>{quote}</p>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ CONCLUSION ══════════ */}
      {sec==="conclusion"&&<>
        <Card>
          <H2 color={text}>{t.conclusion.h2}</H2>
          <Divider/>
          <div style={{color:text,fontSize:17,lineHeight:1.8,marginTop:16}}>
            <p className="drop-cap" style={{marginBottom:16}}>{t.conclusion.intro1}</p>
            <p style={{marginBottom:16}}>{t.conclusion.intro2}</p>

            {/* Collapse summary */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,margin:"24px 0"}}>
              <div style={{background:surfaceDim,padding:"20px 24px"}}>
                <SectionLabel>{t.conclusion.collapseSummaryTitle}</SectionLabel>
                <div style={{marginTop:8}}>
                  {t.conclusion.collapseItems.map(([l,v],i)=><p key={i} style={{fontSize:14,marginBottom:3}}>
                    <span style={{color:textDim}}>{l}:</span> <span style={{color:crimson,fontWeight:700,fontFamily:fontM,fontSize:13}}>{v}</span>
                  </p>)}
                </div>
              </div>
              <div style={{background:surfaceDim,padding:"20px 24px",borderLeft:`3px solid ${olive}`}}>
                <SectionLabel>{t.conclusion.traditionTitle}</SectionLabel>
                <div style={{marginTop:8}}>
                  {t.conclusion.traditionItems.map(([l,v],i)=><p key={i} style={{fontSize:14,marginBottom:3}}>
                    <span style={{color:textDim}}>{l}:</span> <span style={{color:olive,fontWeight:700,fontFamily:fontM,fontSize:13}}>{v}</span>
                  </p>)}
                </div>
              </div>
            </div>

            {/* State of necessity */}
            <h3 style={{fontFamily:fontH,fontWeight:700,fontSize:22,color:text,marginTop:32,marginBottom:16,letterSpacing:"-0.01em"}}>{t.conclusion.stateTitle}</h3>
            <p style={{marginBottom:16}}>{t.conclusion.stateIntro}</p>
            <p style={{marginBottom:16}}>{t.conclusion.stateQuestion}</p>

            {/* Pastoral points */}
            <Callout color="crimson">
              <SectionLabel>{t.conclusion.pastoralTitle}</SectionLabel>
              <div style={{marginTop:12}}>
                {t.conclusion.pastoralPoints.map((pt,i)=>(
                  <p key={i} style={{fontSize:15,marginBottom:10,lineHeight:1.7}}>
                    <span style={{color:text,fontWeight:700}}>{pt.bold}</span> {pt.text}
                  </p>
                ))}
              </div>
            </Callout>

            <p style={{marginTop:20,marginBottom:16}}>{t.conclusion.lefebvreText}</p>
            <p style={{marginBottom:16}}>{t.conclusion.obedienceText}</p>

            <PullQuote text={t.conclusion.athanasiusText}/>

            {/* Club good theory */}
            <Callout color="gold">
              <SectionLabel>{t.conclusion.clubGoodTitle}</SectionLabel>
              <p style={{color:text,fontSize:16,lineHeight:1.7,marginTop:8}}>{t.conclusion.clubGoodText}</p>
            </Callout>

            {/* Verdict */}
            <div style={{borderTop:`2px solid ${gold}`,borderBottom:`2px solid ${gold}`,padding:"28px 0",margin:"28px 0"}}>
              <SectionLabel>{t.conclusion.verdictTitle}</SectionLabel>
              <p style={{fontSize:18,fontWeight:600,fontStyle:"italic",lineHeight:1.7,marginTop:12}}>{t.conclusion.verdictText1}</p>
              <p style={{fontSize:17,lineHeight:1.8,marginTop:12}}>{t.conclusion.verdictText2}</p>
              <p style={{fontSize:17,lineHeight:1.8,marginTop:12}}>{t.conclusion.verdictText3}</p>
            </div>

            <p>{t.conclusion.finalText}</p>
          </div>
        </Card>
        <div style={{padding:"12px 0"}}>
          <p style={{color:textMuted,fontSize:11,fontFamily:fontM,lineHeight:1.6}}>
            <span style={{fontWeight:700}}>{t.conclusion.sourcesLabel}</span> {t.conclusion.sourcesText}
          </p>
        </div>
      </>}

      {/* ══════════ AI ANALYSIS ══════════ */}
      {sec==="ai"&&<>
        <Callout color="blue">
          <SectionLabel>{t.ai.transparencyTitle}</SectionLabel>
          <p className="drop-cap" style={{color:text,fontSize:16,lineHeight:1.8,marginTop:8}}>{t.ai.transparencyText}</p>
        </Callout>

        <Card>
          <H2 color={navy}>{t.ai.analysisH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:20,marginTop:12}}>
            {t.ai.analysisPoints.map((pt,i)=>(
              <div key={i}>
                <h3 style={{color:text,fontWeight:700,fontSize:15,fontFamily:fontH,marginBottom:6}}>{pt.title}</h3>
                <p style={{color:text,fontSize:16,lineHeight:1.8}}>{pt.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{borderLeft:`3px solid ${navy}`}}>
          <H2 color={navy}>{t.ai.soulTitle}</H2>
          <PullQuote text={t.ai.soulQuestion}/>
          <p style={{color:text,fontWeight:700,fontSize:16,margin:"16px 0"}}>
            {t.ai.soulAnswer}
            {t.ai.soulAnswerHighlight && <span style={{color:gold}}> {t.ai.soulAnswerHighlight}</span>}
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginTop:12}}>
            {t.ai.soulPoints.map((point,i)=>(
              <p key={i} style={{color:text,fontSize:15,lineHeight:1.7,paddingLeft:20,position:"relative"}}>
                <span style={{position:"absolute",left:0,color:gold,fontWeight:700,fontFamily:fontM,fontSize:13}}>{i+1}.</span>
                {point}
              </p>
            ))}
          </div>
        </Card>

        <Card>
          <p style={{color:textDim,fontSize:15,fontStyle:"italic",lineHeight:1.7}}>{t.ai.ironyText}</p>
        </Card>

        <div style={{padding:"8px 0",textAlign:"center"}}>
          <p style={{color:textMuted,fontSize:11,fontFamily:fontM}}>{t.ai.footerDisclaimer}</p>
        </div>
      </>}

      </div>
    </main>

    {/* FOOTER */}
    <footer style={{borderTop:`2px solid ${gold}`,padding:"36px 24px",textAlign:"center",background:navy}}>
      <p style={{color:gold,fontSize:14,opacity:0.4}}>☩</p>
      <p style={{color:"rgba(240,235,224,0.4)",fontSize:12,marginTop:10,fontFamily:fontM,lineHeight:1.8}}>
        {t.footer.label} ·{" "}
        {t.footer.sources.map((s, i) => (
          <span key={i}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{color:"rgba(184,134,11,0.5)",textDecoration:"none",borderBottom:"1px solid rgba(184,134,11,0.2)",transition:"color 0.2s"}}
              onMouseEnter={e => e.target.style.color = "rgba(184,134,11,0.8)"}
              onMouseLeave={e => e.target.style.color = "rgba(184,134,11,0.5)"}
            >{s.name}</a>
            {i < t.footer.sources.length - 1 ? " · " : ""}
          </span>
        ))}
        {" · "}{t.footer.year}
      </p>
    </footer>
  </div>
  );
}
