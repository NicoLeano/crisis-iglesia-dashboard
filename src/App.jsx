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

/* ═══════════════════ COMPONENTS ═══════════════════ */
const TT = ({active,payload,label}) => {
  if(!active||!payload?.length) return null;
  return <div style={{background:parchment,border:`1px solid ${borderC}`,borderRadius:2,padding:"10px 14px",fontSize:12,color:ink,fontFamily:"'Cormorant Garamond',serif",boxShadow:"2px 2px 8px rgba(42,33,24,0.15)"}}>
    <p style={{fontWeight:700,marginBottom:4,fontFamily:"'Cinzel',serif",fontSize:11}}>{label}</p>
    {payload.map((e,i)=><p key={i} style={{color:e.color}}>{e.name}: {typeof e.value==="number"&&e.value>999?e.value.toLocaleString():e.value}</p>)}
  </div>;
};

const Stat = ({value,label,sub,period,color=crimson}) => (
  <div style={{background:parchmentDark,border:`1px solid ${borderC}`,borderRadius:2,padding:"16px 12px",textAlign:"center"}}>
    <p style={{fontSize:28,fontWeight:700,color,fontFamily:"'Cinzel',serif",lineHeight:1}}>{value}</p>
    <p style={{color:ink,fontWeight:600,fontSize:12,marginTop:8,fontFamily:"'Cormorant Garamond',serif"}}>{label}</p>
    {sub&&<p style={{color:sepia,fontSize:11,marginTop:3}}>{sub}</p>}
    {period&&<p style={{color:sepiaLight,fontSize:10}}>{period}</p>}
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
    <div style={{borderBottom:`1px solid ${borderC}`,padding:"48px 20px 40px",textAlign:"center",background:`linear-gradient(180deg,#1a1510 0%,${bg} 100%)`}}>
      <p style={{color:gold,fontSize:10,fontWeight:700,letterSpacing:"0.35em",textTransform:"uppercase",marginBottom:12}}>{t.header.subtitle}</p>
      <p style={{color:gold,fontSize:14,letterSpacing:"0.4em",marginBottom:8}}>☩</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:32,fontWeight:700,color:cream,lineHeight:1.2,marginBottom:8}}>{t.header.title}</h1>
      <p style={sty.ornament}>{t.header.dateRange}</p>
      <p style={{color:"#8a7d68",fontSize:12,marginTop:4}}>{t.header.sources}</p>
      <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
        background:"rgba(201,168,76,0.15)", border:`1px solid ${gold}40`, borderRadius:4,
        color:goldLight, padding:"4px 12px", fontSize:11, fontFamily:"Georgia,serif",
        cursor:"pointer", letterSpacing:"0.1em", marginTop:8
      }}>
        {lang==="es"?"English":"Español"}
      </button>
    </div>

    {/* NAV */}
    <div style={{position:"sticky",top:0,zIndex:20,background:`${bg}ee`,backdropFilter:"blur(8px)",borderBottom:`1px solid ${borderC}`}}>
      <div style={{maxWidth:860,margin:"0 auto",padding:"8px 12px",display:"flex",overflowX:"auto",gap:4}}>
        {t.nav.map(s=>(
          <button key={s.id} onClick={()=>setSec(s.id)} style={{
            padding:"6px 14px",borderRadius:4,fontSize:11,fontWeight:600,fontFamily:"Georgia,serif",
            whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.2s",border:"none",
            background:sec===s.id?(s.id==="sspx"?"#1a3a25":s.id==="novusordo"?"#2a1a3a":s.id==="ai"?"#1a2a3a":"#3a2010"):"transparent",
            color:sec===s.id?goldLight:"#7a6e5a",
          }}>{s.label}</button>
        ))}
      </div>
    </div>

    <div style={{maxWidth:860,margin:"0 auto",padding:"32px 16px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:20}}>

      {/* ══════════ OVERVIEW ══════════ */}
      {sec==="overview"&&<>
        <Card><H2>{t.overview.h2}</H2><Orn/>
          <p style={{color:"#c4b89a",fontSize:14,lineHeight:1.7}}>{t.overview.paragraph}</p>
        </Card>
        <div style={grid(4)}>{t.overview.statsRow1.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p}/>)}</div>
        <div style={grid(4)}>{t.overview.statsRow2.map(([v,l,s,p,c],i)=><Stat key={i} value={v} label={l} sub={s} period={p} color={i===3?"#4a9a5a":wine}/>)}</div>
        <div style={grid(3)}>{t.overview.statsRow3.map(([v,l,s,c],i)=><Stat key={i} value={v} label={l} sub={s} color={i===0?wine:"#b07030"}/>)}</div>

        <div style={sty.alert("wine")}>
          <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:8}}>{t.overview.nberAlertTitle}</p>
          <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.7}}>{t.overview.nberAlertText}</p>
          <div style={{display:"flex",gap:8,marginTop:12,flexWrap:"wrap"}}>
            <a href="https://www.nber.org/system/files/working_papers/w34060/w34060.pdf" target="_blank" rel="noopener" style={{background:"rgba(139,26,26,0.3)",color:goldLight,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>📄 PDF (NBER)</a>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5359609" target="_blank" rel="noopener" style={{background:"rgba(139,26,26,0.3)",color:goldLight,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>📋 SSRN</a>
            <a href="https://news.harvard.edu/gazette/story/2025/09/data-bolsters-theory-about-plunging-catholic-mass-attendance/" target="_blank" rel="noopener" style={{background:"rgba(139,26,26,0.3)",color:goldLight,padding:"4px 12px",borderRadius:20,fontSize:10,textDecoration:"none"}}>🎓 Harvard Gazette</a>
          </div>
        </div>

        <Card><p style={{color:cream,fontWeight:600,marginBottom:10}}>{t.overview.educationTitle}</p>
          <div style={grid(3)}>{t.overview.educationStats.map(([v,l,d],i)=><div key={i} style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}><p style={{color:wineLight,fontWeight:800,fontSize:16}}>{v}</p><p style={{color:cream,fontSize:10,fontWeight:600}}>{l}</p><p style={{color:"#7a6e5a",fontSize:9}}>{d}</p></div>)}</div>
        </Card>

        <Card><p style={{color:cream,fontWeight:600,marginBottom:10}}>{t.overview.exodusTitle}</p>
          <div style={grid(3)}>{t.overview.exodusStats.map(([v,l,d],i)=><div key={i} style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}><p style={{color:"#c09040",fontWeight:800,fontSize:16}}>{v}</p><p style={{color:cream,fontSize:10,fontWeight:600}}>{l}</p><p style={{color:"#7a6e5a",fontSize:9}}>{d}</p></div>)}</div>
        </Card>
      </>}

      {/* ══════════ PRIESTS ══════════ */}
      {sec==="priests"&&<>
        <Card>
          <H2>{t.priests.h2_1}</H2>
          <Sub>{t.priests.sub_1}</Sub>
          <Chart>
            <ComposedChart data={priestsUSA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis stroke="#8a7d68" fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Area type="monotone" dataKey="t" name={t.priests.chartLegend1[0]} fill="#5c1a1a" stroke={wine} fillOpacity={0.3}/>
              <Line type="monotone" dataKey="a" name={t.priests.chartLegend1[1]} stroke={gold} strokeWidth={2} dot={{r:3}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Orn/>
        <Card>
          <H2 color={gold}>{t.priests.h2_2}</H2>
          <Sub>{t.priests.sub_2}</Sub>
          <Chart>
            <ComposedChart data={priestsWorld}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis yAxisId="l" stroke="#8a7d68" fontSize={10}/>
              <YAxis yAxisId="r" orientation="right" stroke="#8a7d68" fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar yAxisId="l" dataKey="p" name={t.priests.chartLegend2[0]} fill={wine} radius={[4,4,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="r" name={t.priests.chartLegend2[1]} stroke={gold} strokeWidth={2} dot={{r:4}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Orn/>
        <Card>
          <H2>{t.priests.h2_3}</H2>
          <Sub>{t.priests.sub_3}</Sub>
          <Chart h={260}>
            <BarChart data={francePriests}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis stroke="#8a7d68" fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="p" name={t.priests.chartLegend3[0]} fill="#5c1a1a" radius={[4,4,0,0]}/>
            </BarChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={goldLight}>{t.priests.additionalTitle}</H2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginTop:8}}>
            {t.priests.additionalData.map(([v,d],i)=>(
              <div key={i} style={{background:parchment,borderRadius:6,padding:"10px 14px"}}>
                <span style={{color:gold,fontWeight:700,fontSize:14}}>{v}</span>
                <span style={{color:"#a89a80",fontSize:11,marginLeft:8}}>{d}</span>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ NUNS ══════════ */}
      {sec==="nuns"&&<>
        <Card><H2>{t.nuns.h2}</H2><Sub>{t.nuns.sub}</Sub>
          <Chart><ComposedChart data={nunsUSA}><CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/><XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/><YAxis stroke="#8a7d68" fontSize={10}/><Tooltip content={<TT/>}/><Area type="monotone" dataKey="n" name={t.nuns.chartLegend[0]} fill="rgba(139,26,26,0.3)" stroke={wine} fillOpacity={0.4}/></ComposedChart></Chart>
        </Card>
        <div style={sty.alert("wine")}><p style={{color:wineLight,fontWeight:700,fontSize:12,marginBottom:8}}>{t.nuns.declineTitle}</p>
          <div style={grid(6)}>{t.nuns.intlDecline.map(([c,d],i)=><div key={i} style={{background:"rgba(139,26,26,0.15)",borderRadius:6,padding:8,textAlign:"center"}}><p style={{color:wineLight,fontWeight:800}}>{d}</p><p style={{color:"#8a7d68",fontSize:10}}>{c}</p></div>)}</div>
        </div>
        <Card><p style={{color:"#c4b89a",fontSize:13,lineHeight:1.7}}><span style={{color:cream,fontWeight:600}}>{t.nuns.worldDataLabel}</span> {t.nuns.worldDataText}</p></Card>
        <Card><p style={{color:cream,fontWeight:600,marginBottom:6}}>{t.nuns.educationImpactTitle}</p><p style={{color:"#c4b89a",fontSize:13,lineHeight:1.7}}>{t.nuns.educationImpactText}</p></Card>
      </>}

      {/* ══════════ MASS / FAITH ══════════ */}
      {sec==="mass"&&<>
        <Card>
          <H2>{t.mass.h2}</H2>
          <Sub>{t.mass.sub}</Sub>
          <Chart>
            <LineChart data={massAtt}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis stroke="#8a7d68" fontSize={10} domain={[30,80]} unit="%"/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Line type="monotone" dataKey="cat" name={t.mass.chartLegends[0]} stroke={wine} strokeWidth={3} dot={{r:5}}/>
              <Line type="monotone" dataKey="prot" name={t.mass.chartLegends[1]} stroke="#4a6fa5" strokeWidth={3} dot={{r:5}}/>
            </LineChart>
          </Chart>
        </Card>

        <Card>
          <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:10}}>{t.mass.europeanTitle}</p>
          <div style={grid(3)}>
            {[[t.mass.countries.france,"27%","4.5%","1965-2009"],[t.mass.countries.ireland,"~90%","~30%","1965-2020"],[t.mass.countries.netherlands,"~65%","<10%","1965-2010"]].map(([c,f,to,p],i)=>(
              <div key={i} style={{background:parchment,borderRadius:6,padding:12,textAlign:"center"}}>
                <p style={{color:cream,fontWeight:700,fontSize:13}}>{c}</p>
                <p style={{color:wineLight,fontSize:11}}>{f} → {to}</p>
                <p style={{color:"#6b6052",fontSize:10}}>{p}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={sty.alert("wine")}>
          <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.mass.transAlertTitle}</p>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7,marginBottom:12}}>{t.mass.transIntro}</p>
          <div style={grid(2)}>
            {t.mass.transStats.map(([v,l],i)=>(
              <div key={i} style={{background:"rgba(139,26,26,0.15)",borderRadius:6,padding:"10px 14px",textAlign:"center"}}>
                <p style={{fontSize:22,fontWeight:900,color:wine,fontFamily:"Georgia,serif"}}>{v}</p>
                <p style={{color:"#c4b89a",fontSize:10,marginTop:4}}>{l}</p>
              </div>
            ))}
          </div>
          <p style={{color:"#a89a80",fontSize:11,marginTop:12,lineHeight:1.6}}>{t.mass.transDetail}</p>
        </div>

        <div style={sty.alert("gold")}>
          <p style={{color:gold,fontSize:12,fontStyle:"italic",lineHeight:1.6}}>{t.mass.barronQuote}</p>
        </div>

        <Card>
          <H2 color={goldLight}>{t.mass.liturgicalTitle}</H2>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.mass.liturgicalText}</p>
        </Card>
      </>}

      {/* ══════════ MARRIAGES ══════════ */}
      {sec==="marriages"&&<>
        <Card>
          <H2>{t.marriages.h2}</H2>
          <Sub>{t.marriages.sub}</Sub>
          <Chart>
            <ComposedChart data={marriages}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis yAxisId="l" stroke="#8a7d68" fontSize={10}/>
              <YAxis yAxisId="r" orientation="right" stroke="#8a7d68" fontSize={10} unit="M"/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar yAxisId="l" dataKey="m" name={t.marriages.chartLegends[0]} fill={wine} radius={[4,4,0,0]}/>
              <Line yAxisId="r" type="monotone" dataKey="c" name={t.marriages.chartLegends[1]} stroke="#6b8cae" strokeWidth={2} dot={{r:4}}/>
            </ComposedChart>
          </Chart>
        </Card>
        <Card>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.marriages.feedbackCycle}</p>
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
                <div key={i} style={{background:parchment,borderRadius:6,padding:14}}>
                  <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:8}}>{o.o}</p>
                  <div style={grid(2)}>
                    <div>
                      <p style={{color:"#8a7d68",fontSize:10,marginBottom:4}}>{t.orders.labels[0]}</p>
                      <p style={{fontSize:12}}>
                        <span style={{color:"#c4b89a"}}>{o.p1.toLocaleString()}</span>
                        <span style={{color:wineLight}}> → </span>
                        <span style={{color:wineLight,fontWeight:700}}>{o.p2.toLocaleString()}</span>
                        <span style={{color:wine,fontSize:10,fontWeight:600,marginLeft:4}}>(-{pd}%)</span>
                      </p>
                    </div>
                    <div>
                      <p style={{color:"#8a7d68",fontSize:10,marginBottom:4}}>{t.orders.labels[1]}</p>
                      <p style={{fontSize:12}}>
                        <span style={{color:"#c4b89a"}}>{o.s1.toLocaleString()}</span>
                        <span style={{color:wineLight}}> → </span>
                        <span style={{color:wineLight,fontWeight:700}}>{o.s2}</span>
                        <span style={{color:wine,fontSize:10,fontWeight:600,marginLeft:4}}>(-{sd}%)</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div style={sty.alert("wine")}>
          <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.orders.impactTitle}</p>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.orders.impactText}</p>
        </div>

        <Card>
          <H2 color={goldLight}>{t.orders.seminariesTitle}</H2>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.orders.seminariesText}</p>
        </Card>

        <div style={sty.alert("wine")}>
          <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.orders.caraAlert}</p>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.orders.caraDetail}</p>
        </div>
      </>}

      {/* ══════════ REGIONAL ══════════ */}
      {sec==="regional"&&<>
        <Card>
          <H2 color={gold}>{t.regional.h2}</H2>
          <Sub>{t.regional.sub}</Sub>
          <Chart h={260}>
            <BarChart data={regional} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis type="number" stroke="#8a7d68" fontSize={10}/>
              <YAxis type="category" dataKey="r" stroke="#8a7d68" fontSize={11} width={70}/>
              <Tooltip content={<TT/>}/>
              <Bar dataKey="v" name={t.regional.chartLegend[0]} radius={[0,4,4,0]}>
                {regional.map((e,i)=>(
                  <Cell key={i} fill={e.v>0?"#2e7d32":"#b44040"}/>
                ))}
              </Bar>
            </BarChart>
          </Chart>
        </Card>

        <div style={grid(2)}>
          <div style={sty.alert("green")}>
            <p style={{color:"#4caf50",fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.growthTitle}</p>
            <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.regional.growthText}</p>
          </div>
          <div style={sty.alert("wine")}>
            <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.deathTitle}</p>
            <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.regional.deathText}</p>
          </div>
        </div>

        <Card>
          <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:6}}>{t.regional.mexicoTitle}</p>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.regional.mexicoText}</p>
        </Card>
      </>}

      {/* ══════════ SSPX ══════════ */}
      {sec==="sspx"&&<>
        <Card style={{background:"linear-gradient(135deg, rgba(34,120,60,0.1) 0%, #1a1814 100%)",border:"1px solid rgba(34,120,60,0.3)"}}>
          <H2 color="#4caf50">{t.sspx.h2}</H2>
          <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.7}}>{t.sspx.intro}</p>
        </Card>

        <div style={grid(4)}>
          {t.sspx.stats.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color="#2e7d32"/>)}
        </div>

        <Card>
          <H2 color="#4caf50">{t.sspx.growthH2}</H2>
          <Sub>{t.sspx.growthSub}</Sub>
          <Chart>
            <ComposedChart data={sspxP}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis dataKey="y" stroke="#8a7d68" fontSize={11} fontFamily="Georgia"/>
              <YAxis stroke="#8a7d68" fontSize={10}/>
              <Tooltip content={<TT/>}/>
              <Area type="monotone" dataKey="p" name={t.sspx.chartLegend[0]} fill="rgba(34,120,60,0.2)" stroke="#4caf50" fillOpacity={0.4} strokeWidth={3}/>
            </ComposedChart>
          </Chart>
        </Card>

        <Card>
          <H2 color={cream}>{t.sspx.tableH2}</H2>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",fontSize:11,borderCollapse:"collapse"}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${borderC}`}}>
                  {t.sspx.tableHeaders.map((h,i)=><th key={i} style={{textAlign:"left",padding:"8px 10px",color:"#8a7d68",fontWeight:500}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {sspxDetail.map((r,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid #2a2520`}}>
                    <td style={{padding:"6px 10px",color:cream,fontWeight:600}}>{r.y}</td>
                    <td style={{padding:"6px 10px",color:"#4caf50",fontWeight:700}}>{r.p}</td>
                    <td style={{padding:"6px 10px",color:"#c4b89a"}}>{r.s}</td>
                    <td style={{padding:"6px 10px",color:"#c4b89a"}}>{r.b}</td>
                    <td style={{padding:"6px 10px",color:"#c4b89a"}}>{r.pr}</td>
                    <td style={{padding:"6px 10px",color:"#c4b89a"}}>{r.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <H2 color={cream}>{t.sspx.comparisonH2}</H2>
          <Chart h={220}>
            <BarChart data={tradComp} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
              <XAxis type="number" stroke="#8a7d68" fontSize={10}/>
              <YAxis type="category" dataKey="n" stroke="#8a7d68" fontSize={11} width={50}/>
              <Tooltip content={<TT/>}/>
              <Legend/>
              <Bar dataKey="p" name={t.sspx.comparisonLegends[0]} fill="#4caf50" radius={[0,4,4,0]}/>
              <Bar dataKey="s" name={t.sspx.comparisonLegends[1]} fill="#2e7d32" radius={[0,4,4,0]}/>
            </BarChart>
          </Chart>
          <div style={grid(3,12)}>
            {tradComp.map((c,i)=>(
              <div key={i} style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}>
                <p style={{color:cream,fontWeight:700,fontSize:13}}>{c.n}</p>
                <p style={{color:"#4caf50",fontSize:10}}>{c.p} {t.sspx.comparisonLabels[0]} - {c.m} {t.sspx.comparisonLabels[1]}</p>
                <p style={{color:"#6b6052",fontSize:10}}>{c.c} {t.sspx.comparisonLabels[2]}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={{background:"linear-gradient(90deg, rgba(139,26,26,0.1) 0%, rgba(34,120,60,0.1) 100%)",borderRadius:8,padding:20,border:`1px solid ${borderC}`}}>
          <h3 style={{color:cream,fontWeight:700,fontSize:16,marginBottom:12}}>{t.sspx.contrastTitle}</h3>
          <div style={grid(2)}>
            <div>
              <p style={{color:wineLight,fontWeight:600,fontSize:12,marginBottom:6}}>Conciliar (2023)</p>
              {t.sspx.conciliarStats.map((s,i)=><p key={i} style={{color:"#c4b89a",fontSize:11,marginBottom:3}}>- {s}</p>)}
            </div>
            <div>
              <p style={{color:"#4caf50",fontWeight:600,fontSize:12,marginBottom:6}}>FSSPX</p>
              {t.sspx.fsspxStats.map((s,i)=><p key={i} style={{color:"#c4b89a",fontSize:11,marginBottom:3}}>- {s}</p>)}
            </div>
          </div>
        </div>
      </>}

      {/* ══════════ NOVUS ORDO ══════════ */}
      {sec==="novusordo"&&<>
        <Card style={{background:"linear-gradient(135deg, rgba(100,50,120,0.1) 0%, #1a1814 100%)",border:"1px solid rgba(100,50,120,0.3)"}}>
          <H2 color="#b388d9">{t.novusordo.h2}</H2>
          <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.7}}>{t.novusordo.intro}</p>
        </Card>

        <Card>
          <H2 color="#b388d9">{t.novusordo.timelineH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginTop:12}}>
            {t.novusordo.timeline.map(([yr,ev,det],i)=>(
              <div key={i} style={{display:"flex",gap:12}}>
                <div style={{flexShrink:0,width:40,textAlign:"right"}}>
                  <span style={{color:"#b388d9",fontWeight:700,fontSize:11}}>{yr}</span>
                </div>
                <div style={{flexShrink:0,width:1,background:"#6b4d8a",position:"relative"}}>
                  <div style={{position:"absolute",top:4,left:-3,width:7,height:7,borderRadius:"50%",background:"#b388d9"}}/>
                </div>
                <div style={{paddingBottom:4}}>
                  <p style={{color:cream,fontWeight:600,fontSize:13}}>{ev}</p>
                  <p style={{color:"#a89a80",fontSize:11,lineHeight:1.6}}>{det}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{color:cream,fontWeight:700,fontSize:18,marginBottom:4}}>{t.novusordo.offertoryTitle}</h3>
          <p style={{color:"#6b6052",fontSize:11,marginBottom:16}}>{t.novusordo.offertorySubtitle}</p>
          <div style={grid(2)}>
            <div style={{background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:8,padding:16}}>
              <p style={{color:gold,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.traditionalTitle}</p>
              <p style={{color:"#c4b89a",fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.traditionalText}</p>
              <p style={{color:"rgba(201,168,76,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.traditionalNote}</p>
            </div>
            <div style={{background:"rgba(139,26,26,0.08)",border:"1px solid rgba(139,26,26,0.25)",borderRadius:8,padding:16}}>
              <p style={{color:wineLight,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.noTitle}</p>
              <p style={{color:"#c4b89a",fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.noText}</p>
              <p style={{color:"rgba(180,64,64,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.noNote}</p>
            </div>
          </div>
          <div style={{background:parchment,borderRadius:6,padding:12,marginTop:12}}>
            <p style={{color:"#a89a80",fontSize:11,lineHeight:1.6}}>{t.novusordo.consiliumNote}</p>
          </div>
        </Card>

        <Card>
          <h3 style={{color:cream,fontWeight:700,fontSize:16,marginBottom:12}}>{t.novusordo.structuralTitle}</h3>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {t.novusordo.structuralRows.map(([a,tr,n],i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,fontSize:11,padding:"8px 0",borderBottom:i<t.novusordo.structuralRows.length-1?`1px solid ${parchment}`:"none"}}>
                <span style={{color:"#8a7d68",fontWeight:500}}>{a}</span>
                <span style={{color:"rgba(232,212,139,0.8)"}}>{tr}</span>
                <span style={{color:"rgba(180,64,64,0.8)"}}>{n}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{color:cream,fontWeight:700,fontSize:16,marginBottom:12}}>{t.novusordo.testimoniesTitle}</h3>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {t.novusordo.testimonies.map(([who,quote],i)=>(
              <div key={i} style={{background:"rgba(100,50,120,0.08)",border:"1px solid rgba(100,50,120,0.2)",borderRadius:6,padding:12}}>
                <p style={{color:"#b388d9",fontWeight:600,fontSize:11,marginBottom:4}}>{who}</p>
                <p style={{color:"#c4b89a",fontSize:11,fontStyle:"italic",lineHeight:1.6}}>{quote}</p>
              </div>
            ))}
          </div>
        </Card>
      </>}

      {/* ══════════ CONCLUSION ══════════ */}
      {sec==="conclusion"&&<>
        <Card><H2 color={cream}>{t.conclusion.h2}</H2><Orn/>
          <div style={{color:"#c4b89a",fontSize:13,lineHeight:1.8}}>
            <p style={{marginBottom:12}}>{t.conclusion.intro1}</p>
            <p style={{marginBottom:12}}>{t.conclusion.intro2}</p>
            <div style={{background:parchment,borderRadius:6,padding:14,margin:"14px 0"}}><p style={{color:cream,fontWeight:600,marginBottom:8}}>{t.conclusion.collapseSummaryTitle}</p>
              <div style={grid(2)}>{t.conclusion.collapseItems.map(([l,v],i)=><p key={i} style={{fontSize:11,marginBottom:2}}>• {l}: <span style={{color:wineLight}}>{v}</span></p>)}</div>
            </div>
            <div style={{...sty.alert("green"),margin:"14px 0"}}><p style={{color:"#6aaa6a",fontWeight:600,marginBottom:8}}>{t.conclusion.traditionTitle}</p>
              <div style={grid(2)}>{t.conclusion.traditionItems.map(([l,v],i)=><p key={i} style={{fontSize:11,marginBottom:2}}>• {l}: <span style={{color:"#6aaa6a"}}>{v}</span></p>)}</div>
            </div>

            <div style={{borderTop:`1px solid ${borderC}`,borderBottom:`1px solid ${borderC}`,padding:"20px 0",margin:"20px 0"}}>
              <p style={{color:cream,fontWeight:700,fontSize:16,fontFamily:"Georgia,serif",marginBottom:12}}>{t.conclusion.stateTitle}</p>
              <p style={{marginBottom:12}}>{t.conclusion.stateIntro}</p>
              <p style={{marginBottom:12}}>{t.conclusion.stateQuestion}</p>
              <div style={{background:parchment,borderRadius:6,padding:14,margin:"14px 0"}}>
                <p style={{color:cream,fontWeight:600,fontSize:12,marginBottom:8}}>{t.conclusion.pastoralTitle}</p>
                {t.conclusion.pastoralPoints.map((pt,i)=>(
                  <p key={i} style={{fontSize:12,marginBottom:6}}>• <span style={{color:cream,fontWeight:600}}>{pt.bold}</span> {pt.text}</p>
                ))}
              </div>
              <p style={{marginBottom:12}}>{t.conclusion.lefebvreText}</p>
              <p style={{marginBottom:12}}>{t.conclusion.obedienceText}</p>
              <p style={{marginBottom:12}}>{t.conclusion.athanasiusText}</p>
              <div style={{...sty.alert("gold"),margin:"14px 0"}}>
                <p style={{color:goldLight,fontWeight:700,fontSize:13,marginBottom:8}}>{t.conclusion.verdictTitle}</p>
                <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.8}}>{t.conclusion.verdictText1}</p>
                <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.8,marginTop:8}}>{t.conclusion.verdictText2}</p>
                <p style={{color:"#c4b89a",fontSize:13,lineHeight:1.8,marginTop:8}}>{t.conclusion.verdictText3}</p>
              </div>
              <p>{t.conclusion.finalText}</p>
            </div>
          </div>
        </Card>
        <div style={{background:parchment,borderRadius:6,padding:12}}><p style={{color:"#6b6052",fontSize:10}}><span style={{color:"#8a7d68",fontWeight:600}}>{t.conclusion.sourcesLabel}</span> {t.conclusion.sourcesText}</p></div>
      </>}

      {/* ══════════ AI ANALYSIS ══════════ */}
      {sec==="ai"&&<>
        <div style={sty.alert("blue")}>
          <p style={{color:"#6b8cae",fontWeight:700,fontSize:13,marginBottom:6}}>{t.ai.transparencyTitle}</p>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.ai.transparencyText}</p>
        </div>

        <Card>
          <H2 color="#6b8cae">{t.ai.analysisH2}</H2>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:8}}>
            {t.ai.analysisPoints.map((pt,i)=>(
              <div key={i}>
                <h3 style={{color:cream,fontWeight:600,fontSize:13,marginBottom:4}}>{pt.title}</h3>
                <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{pt.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div style={{background:"linear-gradient(135deg, rgba(60,90,140,0.1) 0%, #1a1814 100%)",borderRadius:8,padding:24,border:"1px solid rgba(60,90,140,0.25)"}}>
          <h3 style={{color:cream,fontWeight:700,fontSize:18,marginBottom:12}}>{t.ai.soulTitle}</h3>
          <p style={{color:"#6b8cae",fontSize:12,fontStyle:"italic",lineHeight:1.7,marginBottom:12}}>{t.ai.soulQuestion}</p>
          <p style={{color:cream,fontWeight:600,fontSize:13,marginBottom:12}}>{t.ai.soulAnswer}{t.ai.soulAnswerHighlight && <span style={{color:goldLight,fontWeight:700}}> {t.ai.soulAnswerHighlight}</span>}</p>
          <div style={{background:"rgba(15,14,11,0.5)",borderRadius:6,padding:16,display:"flex",flexDirection:"column",gap:12}}>
            {t.ai.soulPoints.map((point,i)=>(
              <p key={i} style={{color:"#c4b89a",fontSize:12,lineHeight:1.6}}>
                <span style={{color:"#6b8cae",fontWeight:700}}>{i+1}.</span> {point}
              </p>
            ))}
          </div>
        </div>

        <Card>
          <p style={{color:"#c4b89a",fontSize:12,lineHeight:1.7}}>{t.ai.nuanceText}</p>
        </Card>

        <Card>
          <p style={{color:"#a89a80",fontSize:12,fontStyle:"italic",lineHeight:1.7}}>{t.ai.ironyText}</p>
        </Card>

        <div style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}>
          <p style={{color:"#6b6052",fontSize:10}}>{t.ai.footerDisclaimer}</p>
        </div>
      </>}

      </div>
    </div>

    {/* FOOTER */}
    <div style={{borderTop:`1px solid ${borderC}`,padding:"32px 16px",textAlign:"center"}}>
      <p style={{color:gold,fontSize:12,letterSpacing:"0.3em"}}>☩</p>
      <p style={{color:"#5a5448",fontSize:10,marginTop:8}}>{t.footer.text}</p>
    </div>
  </div>
  );
}
