import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Cell } from "recharts";
import { i18n } from "./i18n";

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
const parchment = "#F0E6D2";
const parchmentDark = "#E2D5BE";
const ultramarine = "#162C50";
const goldLeaf = "#C6930A";
const goldLight = "#DAA520";
const crimson = "#8B0000";
const crimsonLight = "#A52A2A";
const olive = "#2E5A1C";
const sepia = "#4A3728";
const ink = "#1A120B";
const sepiaLight = "#6B5B4B";
const borderC = "#B8A88A";

const sty = {
  page: { minHeight:"100vh", background:parchment, color:ink, fontFamily:"'Cormorant Garamond','Georgia',serif", fontWeight:500 },
  card: { background:parchmentDark, border:`1px solid ${borderC}`, borderRadius:3, padding:"24px 28px", marginBottom:0 },
  alert: (c) => ({
    background: c==="crimson"?"rgba(139,0,0,0.07)":c==="gold"?"rgba(198,147,10,0.09)":c==="green"?"rgba(46,90,28,0.08)":c==="blue"?"rgba(22,44,80,0.07)":"rgba(74,55,40,0.07)",
    border:`1px solid ${c==="crimson"?"rgba(139,0,0,0.35)":c==="gold"?"rgba(198,147,10,0.35)":c==="green"?"rgba(46,90,28,0.3)":c==="blue"?"rgba(22,44,80,0.25)":"rgba(74,55,40,0.25)"}`,
    borderRadius:3, padding:"20px 24px"
  }),
  h2: { fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:24, letterSpacing:"0.03em", marginBottom:10, color:ultramarine },
  sub: { color:sepia, fontSize:15, marginBottom:16, fontStyle:"italic", fontWeight:500 },
  ornament: { textAlign:"center", color:goldLeaf, fontSize:14, letterSpacing:"0.3em", margin:"8px 0 12px", opacity:0.7 },
};

/* ═══════════════════ COMPONENTS ═══════════════════ */
const TT = ({active,payload,label}) => {
  if(!active||!payload?.length) return null;
  return <div style={{background:parchment,border:`1px solid ${borderC}`,borderRadius:2,padding:"10px 14px",fontSize:12,color:ink,fontFamily:"'Cormorant Garamond',serif",boxShadow:"2px 2px 8px rgba(42,33,24,0.15)"}}>
    <p style={{fontWeight:700,marginBottom:4,fontFamily:"'Cinzel',serif",fontSize:11}}>{label}</p>
    {payload.map((e,i)=><p key={i} style={{color:e.color}}>{e.name}: {typeof e.value==="number"&&e.value>999?e.value.toLocaleString():e.value}</p>)}
  </div>;
};

const Stat = ({value,label,sub,period,color=crimson}) => (
  <div style={{background:parchmentDark,border:`1px solid ${borderC}`,borderRadius:3,padding:"18px 12px",textAlign:"center"}}>
    <p style={{fontSize:30,fontWeight:900,color,fontFamily:"'Cinzel',serif",lineHeight:1}}>{value}</p>
    <p style={{color:ink,fontWeight:700,fontSize:13,marginTop:8,fontFamily:"'Cormorant Garamond',serif"}}>{label}</p>
    {sub&&<p style={{color:sepia,fontSize:12,marginTop:3,fontWeight:500}}>{sub}</p>}
    {period&&<p style={{color:sepiaLight,fontSize:11}}>{period}</p>}
  </div>
);

const Card = ({children,style:s}) => <div style={{...sty.card,...s}}>{children}</div>;
const H2 = ({children,color=ultramarine}) => <h2 style={{...sty.h2,color}}>{children}</h2>;
const Sub = ({children}) => <p style={sty.sub}>{children}</p>;
const Orn = () => <div style={{textAlign:"center",margin:"12px 0",opacity:0.4}}><svg width="200" height="16" viewBox="0 0 200 16" style={{display:"inline-block"}}><line x1="0" y1="8" x2="85" y2="8" stroke={goldLeaf} strokeWidth="0.5"/><text x="100" y="12" textAnchor="middle" fill={goldLeaf} fontSize="12" fontFamily="Cinzel">&#10022;</text><line x1="115" y1="8" x2="200" y2="8" stroke={goldLeaf} strokeWidth="0.5"/></svg></div>;
const Chart = ({children,h=320}) => <div style={{border:`1px solid ${borderC}`,padding:3,borderRadius:1,background:parchment}}><div style={{border:`0.5px solid ${borderC}`,padding:"12px 8px 4px",background:"rgba(232,220,200,0.3)"}}><ResponsiveContainer width="100%" height={h}>{children}</ResponsiveContainer></div></div>;
const Filigree = () => (
  <div style={{textAlign:"center",margin:"20px 0",opacity:0.35}}>
    <svg width="280" height="20" viewBox="0 0 280 20" style={{display:"inline-block"}}>
      <line x1="0" y1="10" x2="120" y2="10" stroke={goldLeaf} strokeWidth="0.5"/>
      <circle cx="130" cy="10" r="1.5" fill={goldLeaf}/>
      <text x="140" y="14" textAnchor="middle" fill={goldLeaf} fontSize="14" fontFamily="Cinzel">&#10022;</text>
      <circle cx="150" cy="10" r="1.5" fill={goldLeaf}/>
      <line x1="160" y1="10" x2="280" y2="10" stroke={goldLeaf} strokeWidth="0.5"/>
    </svg>
  </div>
);

/* ═══════════════════════ APP ═══════════════════════ */
export default function App(){
  const [sec,setSec]=useState("overview");
  const [lang, setLang] = useState("es");
  const t = i18n[lang];
  const grid=(cols,gap=12)=>({display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap});

  return(
  <div style={sty.page}>
    {/* HEADER */}
    <div style={{borderBottom:`2px solid ${goldLeaf}`,padding:"44px 20px 36px",textAlign:"center",background:`linear-gradient(180deg,${ultramarine} 0%,#0D1B2A 100%)`}}>
      <p style={{color:goldLeaf,fontSize:11,fontWeight:700,letterSpacing:"0.35em",textTransform:"uppercase",marginBottom:10}}>{t.header.subtitle}</p>
      <p style={{color:goldLeaf,fontSize:16,letterSpacing:"0.4em",marginBottom:8}}>☩</p>
      <h1 style={{fontFamily:"'Cinzel',serif",fontSize:34,fontWeight:900,color:"#F0E6D2",lineHeight:1.2,marginBottom:8}}>{t.header.title}</h1>
      <p style={{color:goldLeaf,fontSize:13,letterSpacing:"0.2em",opacity:0.8}}>{t.header.dateRange}</p>
      <p style={{color:"rgba(240,230,210,0.5)",fontSize:12,marginTop:6}}>{t.header.sources}</p>
      <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
        background:"rgba(198,147,10,0.2)", border:`1px solid ${goldLeaf}60`, borderRadius:3,
        color:goldLight, padding:"5px 14px", fontSize:12, fontFamily:"'Cinzel',serif",
        cursor:"pointer", letterSpacing:"0.1em", marginTop:10, fontWeight:600
      }}>
        {lang==="es"?"English":"Español"}
      </button>
    </div>

    {/* NAV PILLS */}
    <div className="nav-scroll" style={{position:"sticky",top:0,zIndex:20,background:ultramarine,borderBottom:`2px solid ${goldLeaf}`}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"8px 12px",display:"flex",overflowX:"auto",gap:4,alignItems:"center"}}>
        {t.nav.map(s=>(
          <button key={s.id} onClick={()=>setSec(s.id)} style={{
            padding:"7px 16px",borderRadius:3,fontSize:12,fontWeight:sec===s.id?800:600,fontFamily:"'Cinzel',serif",
            whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.2s",border:"none",
            background:sec===s.id?goldLeaf:"transparent",
            color:sec===s.id?ultramarine:"rgba(240,230,210,0.7)",
          }}>{s.label}</button>
        ))}
      </div>
    </div>

    <div style={{maxWidth:860,margin:"0 auto",padding:"32px 20px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:24}}>

      {/* ══════════ OVERVIEW ══════════ */}
      {sec==="overview"&&<>
        <Card><H2>{t.overview.h2}</H2><Filigree/>
          <p className="drop-cap" style={{color:ink,fontSize:17,lineHeight:1.8,fontWeight:500}}>{t.overview.paragraph}</p>
        </Card>
        <div className="stat-grid" style={grid(4)}>{t.overview.statsRow1.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p}/>)}</div>
        <div className="stat-grid" style={grid(4)}>{t.overview.statsRow2.map(([v,l,s,p,c],i)=><Stat key={i} value={v} label={l} sub={s} period={p} color={i===3?olive:crimson}/>)}</div>
        <div className="stat-grid-3" style={grid(3)}>{t.overview.statsRow3.map(([v,l,s,c],i)=><Stat key={i} value={v} label={l} sub={s} color={i===0?crimson:sepia}/>)}</div>

        <div style={sty.alert("crimson")}>
          <p style={{color:crimsonLight,fontWeight:700,fontSize:13,marginBottom:8}}>{t.overview.nberAlertTitle}</p>
          <p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>{t.overview.nberAlertText}</p>
          <div style={{display:"flex",gap:8,marginTop:12,flexWrap:"wrap"}}>
            <a href="https://www.nber.org/system/files/working_papers/w34060/w34060.pdf" target="_blank" rel="noopener" style={{background:"rgba(155,35,53,0.1)",color:crimson,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>PDF (NBER)</a>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5359609" target="_blank" rel="noopener" style={{background:"rgba(155,35,53,0.1)",color:crimson,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>SSRN</a>
            <a href="https://news.harvard.edu/gazette/story/2025/09/data-bolsters-theory-about-plunging-catholic-mass-attendance/" target="_blank" rel="noopener" style={{background:"rgba(155,35,53,0.1)",color:crimson,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>Harvard Gazette</a>
          </div>
        </div>

        <Card><p style={{color:ink,fontWeight:600,marginBottom:10}}>{t.overview.educationTitle}</p>
          <div className="stat-grid-3" style={grid(3)}>{t.overview.educationStats.map(([v,l,d],i)=><div key={i} style={{background:parchment,borderRadius:2,padding:10,textAlign:"center"}}><p style={{color:crimsonLight,fontWeight:800,fontSize:16}}>{v}</p><p style={{color:ink,fontSize:10,fontWeight:600}}>{l}</p><p style={{color:sepiaLight,fontSize:9}}>{d}</p></div>)}</div>
        </Card>

        <Card><p style={{color:ink,fontWeight:600,marginBottom:10}}>{t.overview.exodusTitle}</p>
          <div className="stat-grid-3" style={grid(3)}>{t.overview.exodusStats.map(([v,l,d],i)=><div key={i} style={{background:parchment,borderRadius:2,padding:10,textAlign:"center"}}><p style={{color:goldLeaf,fontWeight:800,fontSize:16}}>{v}</p><p style={{color:ink,fontSize:10,fontWeight:600}}>{l}</p><p style={{color:sepiaLight,fontSize:9}}>{d}</p></div>)}</div>
        </Card>
      </>}

      {/* ══════════ PRIESTS ══════════ */}
      {sec==="priests"&&<>
        <Card>
          <H2>{t.priests.h2_1}</H2>
          <Sub>{t.priests.sub_1}</Sub>
          <Chart>
            <ComposedChart data={priestsUSA}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis stroke={sepia} fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Area type="monotone" dataKey="t" name={t.priests.chartLegend1[0]} fill="rgba(155,35,53,0.08)" stroke={crimson} fillOpacity={0.08}/>
              <Line type="monotone" dataKey="a" name={t.priests.chartLegend1[1]} stroke={goldLeaf} strokeWidth={2} dot={{r:3}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Filigree/>
        <Card>
          <H2 color={goldLeaf}>{t.priests.h2_2}</H2>
          <Sub>{t.priests.sub_2}</Sub>
          <Chart>
            <ComposedChart data={priestsWorld}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis yAxisId="l" stroke={sepia} fontSize={10}/>
              <YAxis yAxisId="r" orientation="right" stroke={sepia} fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar yAxisId="l" dataKey="p" name={t.priests.chartLegend2[0]} fill={crimson} fillOpacity={0.7} radius={[2,2,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="r" name={t.priests.chartLegend2[1]} stroke={goldLeaf} strokeWidth={2} dot={{r:4}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Filigree/>
        <Card>
          <H2>{t.priests.h2_3}</H2>
          <Sub>{t.priests.sub_3}</Sub>
          <Chart h={260}>
            <BarChart data={francePriests}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis stroke={sepia} fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="p" name={t.priests.chartLegend3[0]} fill={crimson} fillOpacity={0.7} radius={[2,2,0,0]}/>
            </BarChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={goldLight}>{t.priests.additionalTitle}</H2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginTop:8}}>
            {t.priests.additionalData.map(([v,d],i)=>(
              <div key={i} style={{background:parchment,borderRadius:2,padding:"10px 14px"}}>
                <span style={{color:goldLeaf,fontWeight:700,fontSize:14}}>{v}</span>
                <span style={{color:sepia,fontSize:11,marginLeft:8}}>{d}</span>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ NUNS ══════════ */}
      {sec==="nuns"&&<>
        <Card><H2>{t.nuns.h2}</H2><Sub>{t.nuns.sub}</Sub>
          <Chart><ComposedChart data={nunsUSA}><CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/><XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/><YAxis stroke={sepia} fontSize={10}/><Tooltip content={<TT/>}/><Area type="monotone" dataKey="n" name={t.nuns.chartLegend[0]} fill="rgba(155,35,53,0.08)" stroke={crimson} fillOpacity={0.08}/></ComposedChart></Chart>
        </Card>
        <div style={sty.alert("crimson")}><p style={{color:crimsonLight,fontWeight:700,fontSize:12,marginBottom:8}}>{t.nuns.declineTitle}</p>
          <div className="stat-grid-6" style={grid(6)}>{t.nuns.intlDecline.map(([c,d],i)=><div key={i} style={{background:"rgba(155,35,53,0.06)",borderRadius:2,padding:8,textAlign:"center"}}><p style={{color:crimsonLight,fontWeight:800}}>{d}</p><p style={{color:sepiaLight,fontSize:10}}>{c}</p></div>)}</div>
        </div>
        <Card><p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}><span style={{color:ink,fontWeight:600}}>{t.nuns.worldDataLabel}</span> {t.nuns.worldDataText}</p></Card>
        <Card><p style={{color:ink,fontWeight:600,marginBottom:6}}>{t.nuns.educationImpactTitle}</p><p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>{t.nuns.educationImpactText}</p></Card>
      </>}

      {/* ══════════ MASS / FAITH ══════════ */}
      {sec==="mass"&&<>
        <Card>
          <H2>{t.mass.h2}</H2>
          <Sub>{t.mass.sub}</Sub>
          <Chart>
            <LineChart data={massAtt}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis stroke={sepia} fontSize={10} domain={[30,80]} unit="%"/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Line type="monotone" dataKey="cat" name={t.mass.chartLegends[0]} stroke={crimson} strokeWidth={3} dot={{r:5}}/>
              <Line type="monotone" dataKey="prot" name={t.mass.chartLegends[1]} stroke={ultramarine} strokeWidth={3} dot={{r:5}}/>
            </LineChart>
          </Chart>
        </Card>

        <Card>
          <p style={{color:ink,fontWeight:700,fontSize:14,marginBottom:10}}>{t.mass.europeanTitle}</p>
          <div className="stat-grid-3" style={grid(3)}>
            {[[t.mass.countries.france,"27%","4.5%","1965-2009"],[t.mass.countries.ireland,"~90%","~30%","1965-2020"],[t.mass.countries.netherlands,"~65%","<10%","1965-2010"]].map(([c,f,to,p],i)=>(
              <div key={i} style={{background:parchment,borderRadius:2,padding:12,textAlign:"center"}}>
                <p style={{color:ink,fontWeight:700,fontSize:13}}>{c}</p>
                <p style={{color:crimsonLight,fontSize:11}}>{f} → {to}</p>
                <p style={{color:sepiaLight,fontSize:10}}>{p}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={sty.alert("crimson")}>
          <p style={{color:crimsonLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.mass.transAlertTitle}</p>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500,marginBottom:12}}>{t.mass.transIntro}</p>
          <div style={grid(2)}>
            {t.mass.transStats.map(([v,l],i)=>(
              <div key={i} style={{background:"rgba(155,35,53,0.06)",borderRadius:2,padding:"10px 14px",textAlign:"center"}}>
                <p style={{fontSize:22,fontWeight:900,color:crimson,fontFamily:"'Cinzel',serif"}}>{v}</p>
                <p style={{color:sepia,fontSize:10,marginTop:4}}>{l}</p>
              </div>
            ))}
          </div>
          <p style={{color:sepiaLight,fontSize:11,marginTop:12,lineHeight:1.6}}>{t.mass.transDetail}</p>
        </div>

        <div style={sty.alert("gold")}>
          <p style={{color:goldLeaf,fontSize:12,fontStyle:"italic",lineHeight:1.6}}>{t.mass.barronQuote}</p>
        </div>

        <Card>
          <H2 color={goldLight}>{t.mass.liturgicalTitle}</H2>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.mass.liturgicalText}</p>
        </Card>
      </>}

      {/* ══════════ MARRIAGES ══════════ */}
      {sec==="marriages"&&<>
        <Card>
          <H2>{t.marriages.h2}</H2>
          <Sub>{t.marriages.sub}</Sub>
          <Chart>
            <ComposedChart data={marriages}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis yAxisId="l" stroke={sepia} fontSize={10}/>
              <YAxis yAxisId="r" orientation="right" stroke={sepia} fontSize={10} unit="M"/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar yAxisId="l" dataKey="m" name={t.marriages.chartLegends[0]} fill={crimson} fillOpacity={0.7} radius={[2,2,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="c" name={t.marriages.chartLegends[1]} stroke={ultramarine} strokeWidth={2} dot={{r:4}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Card>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.marriages.feedbackCycle}</p>
        </Card>
      </>}

      {/* ══════════ ORDERS ══════════ */}
      {sec==="orders"&&<>
        <Card>
          <H2>{t.orders.h2}</H2>
          <Sub>{t.orders.sub}</Sub>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {orders.map((o,i)=>{
              const pd=Math.round((1-o.p2/o.p1)*100), sd=Math.round((1-o.s2/o.s1)*100);
              return(
                <div key={i} style={{background:parchment,borderRadius:2,padding:14}}>
                  <p style={{color:ink,fontWeight:700,fontSize:14,marginBottom:8}}>{o.o}</p>
                  <div style={grid(2)}>
                    <div>
                      <p style={{color:sepiaLight,fontSize:10,marginBottom:4}}>{t.orders.labels[0]}</p>
                      <p style={{fontSize:12}}>
                        <span style={{color:sepia}}>{o.p1.toLocaleString()}</span>
                        <span style={{color:crimsonLight}}> → </span>
                        <span style={{color:crimsonLight,fontWeight:700}}>{o.p2.toLocaleString()}</span>
                        <span style={{color:crimson,fontSize:10,fontWeight:600,marginLeft:4}}>(-{pd}%)</span>
                      </p>
                    </div>
                    <div>
                      <p style={{color:sepiaLight,fontSize:10,marginBottom:4}}>{t.orders.labels[1]}</p>
                      <p style={{fontSize:12}}>
                        <span style={{color:sepia}}>{o.s1.toLocaleString()}</span>
                        <span style={{color:crimsonLight}}> → </span>
                        <span style={{color:crimsonLight,fontWeight:700}}>{o.s2}</span>
                        <span style={{color:crimson,fontSize:10,fontWeight:600,marginLeft:4}}>(-{sd}%)</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div style={sty.alert("crimson")}>
          <p style={{color:crimsonLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.orders.impactTitle}</p>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.orders.impactText}</p>
        </div>

        <Card>
          <H2 color={goldLight}>{t.orders.seminariesTitle}</H2>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.orders.seminariesText}</p>
        </Card>

        <div style={sty.alert("crimson")}>
          <p style={{color:crimsonLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.orders.caraAlert}</p>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.orders.caraDetail}</p>
        </div>
      </>}

      {/* ══════════ REGIONAL ══════════ */}
      {sec==="regional"&&<>
        <Card>
          <H2 color={goldLeaf}>{t.regional.h2}</H2>
          <Sub>{t.regional.sub}</Sub>
          <Chart h={260}>
            <BarChart data={regional} layout="vertical">
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis type="number" stroke={sepia} fontSize={10}/>
              <YAxis type="category" dataKey="r" stroke={sepia} fontSize={11} width={70} fontFamily="'Cormorant Garamond',serif"/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="v" name={t.regional.chartLegend[0]} radius={[0,2,2,0]}>
                {regional.map((e,i)=>(
                  <Cell key={i} fill={e.v>0?olive:crimsonLight}/>
                ))}
              </Bar>
            </BarChart>
          </Chart>
        </Card>

        <div style={grid(2)}>
          <div style={sty.alert("green")}>
            <p style={{color:olive,fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.growthTitle}</p>
            <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.regional.growthText}</p>
          </div>
          <div style={sty.alert("crimson")}>
            <p style={{color:crimsonLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.deathTitle}</p>
            <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.regional.deathText}</p>
          </div>
        </div>

        <Card>
          <p style={{color:ink,fontWeight:700,fontSize:14,marginBottom:6}}>{t.regional.mexicoTitle}</p>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.regional.mexicoText}</p>
        </Card>
      </>}

      {/* ══════════ SSPX ══════════ */}
      {sec==="sspx"&&<>
        <Card style={{background:`linear-gradient(135deg, rgba(74,92,58,0.08) 0%, ${parchmentDark} 100%)`,border:"1px solid rgba(74,92,58,0.3)"}}>
          <H2 color={olive}>{t.sspx.h2}</H2>
          <p className="drop-cap" style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>{t.sspx.intro}</p>
        </Card>

        <div className="stat-grid" style={grid(4)}>
          {t.sspx.stats.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color={olive}/>)}
        </div>

        <Card>
          <H2 color={olive}>{t.sspx.growthH2}</H2>
          <Sub>{t.sspx.growthSub}</Sub>
          <Chart>
            <ComposedChart data={sspxP}>
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis dataKey="y" stroke={sepia} fontSize={11} fontFamily="'Cormorant Garamond',serif"/>
              <YAxis stroke={sepia} fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Area type="monotone" dataKey="p" name={t.sspx.chartLegend[0]} fill="rgba(74,92,58,0.08)" stroke={olive} fillOpacity={0.08} strokeWidth={3}/>
            </ComposedChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={ink}>{t.sspx.tableH2}</H2>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",fontSize:11,borderCollapse:"collapse"}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${borderC}`}}>
                  {t.sspx.tableHeaders.map((h,i)=><th key={i} style={{textAlign:"left",padding:"8px 10px",color:sepiaLight,fontWeight:500}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {sspxDetail.map((r,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${borderC}`}}>
                    <td style={{padding:"6px 10px",color:ink,fontWeight:600}}>{r.y}</td>
                    <td style={{padding:"6px 10px",color:olive,fontWeight:700}}>{r.p}</td>
                    <td style={{padding:"6px 10px",color:sepia}}>{r.s}</td>
                    <td style={{padding:"6px 10px",color:sepia}}>{r.b}</td>
                    <td style={{padding:"6px 10px",color:sepia}}>{r.pr}</td>
                    <td style={{padding:"6px 10px",color:sepia}}>{r.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <H2 color={ink}>{t.sspx.comparisonH2}</H2>
          <Chart h={220}>
            <BarChart data={tradComp} layout="vertical">
              <CartesianGrid strokeDasharray="2 6" stroke={borderC} strokeOpacity={0.4}/>
              <XAxis type="number" stroke={sepia} fontSize={10}/>
              <YAxis type="category" dataKey="n" stroke={sepia} fontSize={11} width={50} fontFamily="'Cormorant Garamond',serif"/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar dataKey="p" name={t.sspx.comparisonLegends[0]} fill={olive} radius={[0,2,2,0]}/>
              <Bar dataKey="s" name={t.sspx.comparisonLegends[1]} fill="rgba(74,92,58,0.5)" radius={[0,2,2,0]}/>
            </BarChart>
          </Chart>
          <div className="stat-grid-3" style={grid(3,12)}>
            {tradComp.map((c,i)=>(
              <div key={i} style={{background:parchment,borderRadius:2,padding:10,textAlign:"center"}}>
                <p style={{color:ink,fontWeight:700,fontSize:13}}>{c.n}</p>
                <p style={{color:olive,fontSize:10}}>{c.p} {t.sspx.comparisonLabels[0]} - {c.m} {t.sspx.comparisonLabels[1]}</p>
                <p style={{color:sepiaLight,fontSize:10}}>{c.c} {t.sspx.comparisonLabels[2]}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={{background:`linear-gradient(90deg, rgba(155,35,53,0.06) 0%, rgba(74,92,58,0.06) 100%)`,borderRadius:2,padding:20,border:`1px solid ${borderC}`}}>
          <h3 style={{color:ink,fontWeight:700,fontSize:16,marginBottom:12}}>{t.sspx.contrastTitle}</h3>
          <div style={grid(2)}>
            <div>
              <p style={{color:crimsonLight,fontWeight:600,fontSize:12,marginBottom:6}}>Conciliar (2023)</p>
              {t.sspx.conciliarStats.map((s,i)=><p key={i} style={{color:sepia,fontSize:11,marginBottom:3}}>- {s}</p>)}
            </div>
            <div>
              <p style={{color:olive,fontWeight:600,fontSize:12,marginBottom:6}}>FSSPX</p>
              {t.sspx.fsspxStats.map((s,i)=><p key={i} style={{color:sepia,fontSize:11,marginBottom:3}}>- {s}</p>)}
            </div>
          </div>
        </div>
      </>}

      {/* ══════════ NOVUS ORDO ══════════ */}
      {sec==="novusordo"&&<>
        <Card style={{background:`linear-gradient(135deg, rgba(30,58,95,0.08) 0%, ${parchmentDark} 100%)`,border:"1px solid rgba(30,58,95,0.2)"}}>
          <H2 color={ultramarine}>{t.novusordo.h2}</H2>
          <p className="drop-cap" style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>{t.novusordo.intro}</p>
        </Card>

        <Card>
          <H2 color={ultramarine}>{t.novusordo.timelineH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginTop:12}}>
            {t.novusordo.timeline.map(([yr,ev,det],i)=>(
              <div key={i} style={{display:"flex",gap:12}}>
                <div style={{flexShrink:0,width:40,textAlign:"right"}}>
                  <span style={{color:ultramarine,fontWeight:700,fontSize:11}}>{yr}</span>
                </div>
                <div style={{flexShrink:0,width:1,background:"rgba(30,58,95,0.4)",position:"relative"}}>
                  <div style={{position:"absolute",top:4,left:-3,width:7,height:7,borderRadius:"50%",background:ultramarine}}/>
                </div>
                <div style={{paddingBottom:4}}>
                  <p style={{color:ink,fontWeight:600,fontSize:13}}>{ev}</p>
                  <p style={{color:sepia,fontSize:13,lineHeight:1.7,fontWeight:500}}>{det}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{color:ink,fontWeight:700,fontSize:18,marginBottom:4,fontFamily:"'Cinzel',serif"}}>{t.novusordo.offertoryTitle}</h3>
          <p style={{color:sepiaLight,fontSize:11,marginBottom:16}}>{t.novusordo.offertorySubtitle}</p>
          <div style={grid(2)}>
            <div style={{background:"rgba(184,150,62,0.08)",border:"1px solid rgba(184,150,62,0.3)",borderRadius:2,padding:16}}>
              <p style={{color:goldLeaf,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.traditionalTitle}</p>
              <p style={{color:sepia,fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.traditionalText}</p>
              <p style={{color:"rgba(184,150,62,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.traditionalNote}</p>
            </div>
            <div style={{background:"rgba(155,35,53,0.06)",border:"1px solid rgba(155,35,53,0.25)",borderRadius:2,padding:16}}>
              <p style={{color:crimsonLight,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.noTitle}</p>
              <p style={{color:sepia,fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.noText}</p>
              <p style={{color:"rgba(184,58,75,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.noNote}</p>
            </div>
          </div>
          <div style={{background:parchment,borderRadius:2,padding:12,marginTop:12}}>
            <p style={{color:sepia,fontSize:13,lineHeight:1.7,fontWeight:500}}>{t.novusordo.consiliumNote}</p>
          </div>
        </Card>

        <Card>
          <h3 style={{color:ink,fontWeight:700,fontSize:16,marginBottom:12,fontFamily:"'Cinzel',serif"}}>{t.novusordo.structuralTitle}</h3>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {t.novusordo.structuralRows.map(([a,tr,n],i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,fontSize:11,padding:"8px 0",borderBottom:i<t.novusordo.structuralRows.length-1?`1px solid ${borderC}`:"none"}}>
                <span style={{color:sepiaLight,fontWeight:500}}>{a}</span>
                <span style={{color:goldLeaf}}>{tr}</span>
                <span style={{color:crimsonLight}}>{n}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{color:ink,fontWeight:700,fontSize:16,marginBottom:12,fontFamily:"'Cinzel',serif"}}>{t.novusordo.testimoniesTitle}</h3>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {t.novusordo.testimonies.map(([who,quote],i)=>(
              <div key={i} style={{background:"rgba(30,58,95,0.06)",border:"1px solid rgba(30,58,95,0.15)",borderRadius:2,padding:12}}>
                <p style={{color:ultramarine,fontWeight:600,fontSize:11,marginBottom:4}}>{who}</p>
                <p style={{color:sepia,fontSize:11,fontStyle:"italic",lineHeight:1.6}}>{quote}</p>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ CONCLUSION ══════════ */}
      {sec==="conclusion"&&<>
        <Card><H2 color={ink}>{t.conclusion.h2}</H2><Filigree/>
          <div style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>
            <p className="drop-cap" style={{marginBottom:12}}>{t.conclusion.intro1}</p>
            <p style={{marginBottom:12}}>{t.conclusion.intro2}</p>
            <div style={{background:parchment,borderRadius:2,padding:14,margin:"14px 0"}}><p style={{color:ink,fontWeight:600,marginBottom:8}}>{t.conclusion.collapseSummaryTitle}</p>
              <div style={grid(2)}>{t.conclusion.collapseItems.map(([l,v],i)=><p key={i} style={{fontSize:11,marginBottom:2}}>• {l}: <span style={{color:crimsonLight}}>{v}</span></p>)}</div>
            </div>
            <div style={{...sty.alert("green"),margin:"14px 0"}}><p style={{color:olive,fontWeight:600,marginBottom:8}}>{t.conclusion.traditionTitle}</p>
              <div style={grid(2)}>{t.conclusion.traditionItems.map(([l,v],i)=><p key={i} style={{fontSize:11,marginBottom:2}}>• {l}: <span style={{color:olive}}>{v}</span></p>)}</div>
            </div>

            <div style={{borderTop:`1px solid ${borderC}`,borderBottom:`1px solid ${borderC}`,padding:"20px 0",margin:"20px 0"}}>
              <p style={{color:ink,fontWeight:700,fontSize:16,fontFamily:"'Cinzel',serif",marginBottom:12}}>{t.conclusion.stateTitle}</p>
              <p style={{marginBottom:12}}>{t.conclusion.stateIntro}</p>
              <p style={{marginBottom:12}}>{t.conclusion.stateQuestion}</p>
              <div style={{background:parchment,borderRadius:2,padding:14,margin:"14px 0"}}>
                <p style={{color:ink,fontWeight:600,fontSize:12,marginBottom:8}}>{t.conclusion.pastoralTitle}</p>
                {t.conclusion.pastoralPoints.map((pt,i)=>(
                  <p key={i} style={{fontSize:12,marginBottom:6}}>• <span style={{color:ink,fontWeight:600}}>{pt.bold}</span> {pt.text}</p>
                ))}
              </div>
              <p style={{marginBottom:12}}>{t.conclusion.lefebvreText}</p>
              <p style={{marginBottom:12}}>{t.conclusion.obedienceText}</p>
              <p style={{marginBottom:12}}>{t.conclusion.athanasiusText}</p>
              <div style={{...sty.alert("gold"),margin:"14px 0"}}>
                <p style={{color:goldLight,fontWeight:700,fontSize:13,marginBottom:8}}>{t.conclusion.verdictTitle}</p>
                <p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500}}>{t.conclusion.verdictText1}</p>
                <p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500,marginTop:8}}>{t.conclusion.verdictText2}</p>
                <p style={{color:sepia,fontSize:15,lineHeight:1.8,fontWeight:500,marginTop:8}}>{t.conclusion.verdictText3}</p>
              </div>
              <p>{t.conclusion.finalText}</p>
            </div>
          </div>
        </Card>
        <div style={{background:parchment,borderRadius:2,padding:12}}><p style={{color:sepiaLight,fontSize:10}}><span style={{color:sepia,fontWeight:600}}>{t.conclusion.sourcesLabel}</span> {t.conclusion.sourcesText}</p></div>
      </>}

      {/* ══════════ AI ANALYSIS ══════════ */}
      {sec==="ai"&&<>
        <div style={sty.alert("blue")}>
          <p style={{color:ultramarine,fontWeight:700,fontSize:13,marginBottom:6}}>{t.ai.transparencyTitle}</p>
          <p className="drop-cap" style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.ai.transparencyText}</p>
        </div>

        <Card>
          <H2 color={ultramarine}>{t.ai.analysisH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:8}}>
            {t.ai.analysisPoints.map((pt,i)=>(
              <div key={i}>
                <h3 style={{color:ink,fontWeight:600,fontSize:13,marginBottom:4}}>{pt.title}</h3>
                <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{pt.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={{background:`linear-gradient(135deg, rgba(30,58,95,0.06) 0%, ${parchmentDark} 100%)`,borderRadius:2,padding:24,border:"1px solid rgba(30,58,95,0.2)"}}>
          <h3 style={{color:ink,fontWeight:700,fontSize:18,marginBottom:12,fontFamily:"'Cinzel',serif"}}>{t.ai.soulTitle}</h3>
          <p style={{color:ultramarine,fontSize:12,fontStyle:"italic",lineHeight:1.7,marginBottom:12}}>{t.ai.soulQuestion}</p>
          <p style={{color:ink,fontWeight:600,fontSize:13,marginBottom:12}}>{t.ai.soulAnswer}{t.ai.soulAnswerHighlight && <span style={{color:goldLight,fontWeight:700}}> {t.ai.soulAnswerHighlight}</span>}</p>
          <div style={{background:"rgba(232,220,200,0.5)",borderRadius:2,padding:16,display:"flex",flexDirection:"column",gap:12}}>
            {t.ai.soulPoints.map((point,i)=>(
              <p key={i} style={{color:sepia,fontSize:12,lineHeight:1.6}}>
                <span style={{color:ultramarine,fontWeight:700}}>{i+1}.</span> {point}
              </p>
            ))}
          </div>
        </div>

        <Card>
          <p style={{color:sepia,fontSize:14,lineHeight:1.8,fontWeight:500}}>{t.ai.nuanceText}</p>
        </Card>

        <Card>
          <p style={{color:sepiaLight,fontSize:12,fontStyle:"italic",lineHeight:1.7}}>{t.ai.ironyText}</p>
        </Card>

        <div style={{background:parchment,borderRadius:2,padding:10,textAlign:"center"}}>
          <p style={{color:sepiaLight,fontSize:10}}>{t.ai.footerDisclaimer}</p>
        </div>
      </>}

      </div>
    </div>

    {/* FOOTER */}
    <div style={{borderTop:`2px solid ${goldLeaf}`,padding:"32px 16px",textAlign:"center",background:ultramarine}}>
      <p style={{color:goldLeaf,fontSize:16,letterSpacing:"0.3em"}}>☩</p>
      <p style={{color:"rgba(240,230,210,0.6)",fontSize:12,marginTop:8,fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{t.footer.text}</p>
    </div>
  </div>
  );
}
