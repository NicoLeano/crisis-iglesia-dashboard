import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from "recharts";
import { i18n } from "./i18n";

/* DATA */
const priestsUSA=[{y:"1965",t:59426,a:56455},{y:"1970",t:59192,a:55000},{y:"1975",t:58909,a:52000},{y:"1980",t:58398,a:49000},{y:"1985",t:57317,a:46000},{y:"1990",t:52124,a:42000},{y:"1995",t:49054,a:38000},{y:"2000",t:45699,a:35500},{y:"2005",t:42839,a:32000},{y:"2010",t:39993,a:28000},{y:"2015",t:37578,a:25500},{y:"2018",t:36580,a:25254},{y:"2022",t:35000,a:24110}];
const priestsWorld=[{y:"1970",p:419728,c:653.6,r:1842},{y:"1980",p:413600,c:783.7,r:1895},{y:"1990",p:403173,c:928.5,r:2303},{y:"2000",p:405178,c:1045,r:2579},{y:"2010",p:412236,c:1196,r:2901},{y:"2017",p:414582,c:1313,r:3167},{y:"2023",p:406996,c:1405,r:3452}];
const nunsUSA=[{y:"1965",n:180000},{y:"1970",n:153645},{y:"1975",n:135225},{y:"1980",n:126517},{y:"1985",n:115386},{y:"1990",n:102504},{y:"1995",n:92107},{y:"2000",n:79814},{y:"2005",n:68634},{y:"2010",n:56000},{y:"2014",n:49883},{y:"2022",n:42000}];
const massAtt=[{y:"1955",cat:75,prot:43},{y:"1965",cat:67,prot:40},{y:"1975",cat:54,prot:40},{y:"1985",cat:48,prot:42},{y:"1995",cat:44,prot:43},{y:"2005",cat:45,prot:45},{y:"2017",cat:39,prot:45}];
const marriages=[{y:"1965",m:352000,c:45.6},{y:"1970",m:426309,c:54.1},{y:"1980",m:357000,c:50.4},{y:"1990",m:325000,c:55.7},{y:"2000",m:261626,c:59.9},{y:"2010",m:168400,c:65.6},{y:"2020",m:121000,c:72},{y:"2024",m:108865,c:77.2}];
const orders=[{o:"Jesuitas",p1:5277,s1:3559,p2:3172,s2:38},{o:"Franciscanos OFM",p1:2534,s1:2251,p2:1492,s2:60},{o:"Hermanos Cristianos",p1:2434,s1:912,p2:959,s2:7},{o:"Redentoristas",p1:1148,s1:1128,p2:349,s2:24}];
const regional=[{r:"Europa",v:-2486},{r:"Americas",v:-800},{r:"Oceania",v:-44},{r:"Asia",v:1145},{r:"Africa",v:1451}];
const francePriests=[{y:"1965",p:41000},{y:"1975",p:35000},{y:"1985",p:28000},{y:"1995",p:22000},{y:"2010",p:15000},{y:"2025",p:11000}];
const sspxP=[{y:"1975",p:30},{y:"1980",p:100},{y:"1988",p:202},{y:"1995",p:350},{y:"2000",p:430},{y:"2008",p:491},{y:"2013",p:575},{y:"2016",p:612},{y:"2021",p:676},{y:"2022",p:707},{y:"2025",p:733}];
const sspxDetail=[{y:"1988",p:202,s:213,b:13,pr:60,ch:300},{y:"2008",p:491,s:215,b:117,pr:159,ch:725},{y:"2013",p:575,s:217,b:103,pr:105,ch:525},{y:"2017",p:612,s:204,b:116,pr:159,ch:760},{y:"2021",p:676,s:190,b:135,pr:159,ch:760},{y:"2025",p:733,s:200,b:140,pr:170,ch:800}];
const tradComp=[{n:"FSSPX",p:733,s:200,m:800,c:62},{n:"FSSP",p:387,s:162,m:251,c:40},{n:"ICKSP",p:80,s:40,m:90,c:12}];

/* STYLE CONSTANTS */
const bg = "#0f0e0b";
const cardBg = "#1a1814";
const borderC = "#3d3529";
const gold = "#c9a84c";
const goldLight = "#e8d48b";
const cream = "#f0e6d0";
const wine = "#8b1a1a";
const wineLight = "#b44040";
const parchment = "#2a2520";

const sty = {
  page: { minHeight:"100vh", background:bg, color:cream, fontFamily:"'Georgia','Times New Roman',serif" },
  card: { background:cardBg, border:`1px solid ${borderC}`, borderRadius:8, padding:"20px 24px", marginBottom:0 },
  alert: (c) => ({ background: c==="wine"?"rgba(139,26,26,0.15)":c==="gold"?"rgba(201,168,76,0.1)":c==="green"?"rgba(34,120,60,0.12)":c==="blue"?"rgba(60,90,140,0.12)":"rgba(100,70,40,0.12)", border:`1px solid ${c==="wine"?"#5c1a1a":c==="gold"?"#6b5a2a":c==="green"?"#2a5c30":c==="blue"?"#2a3a5c":"#4a3a25"}`, borderRadius:8, padding:"20px 24px" }),
  h2: { fontFamily:"'Georgia',serif", fontWeight:700, fontSize:20, letterSpacing:"0.02em", marginBottom:8 },
  sub: { color:"#a89a80", fontSize:13, marginBottom:16 },
  ornament: { textAlign:"center", color:gold, fontSize:14, letterSpacing:"0.3em", margin:"4px 0 8px" },
};

/* HELPER COMPONENTS */
const TT = ({active,payload,label}) => {
  if(!active||!payload?.length) return null;
  return <div style={{background:"#1a1814",border:`1px solid ${borderC}`,borderRadius:6,padding:"8px 12px",fontSize:11,color:cream,fontFamily:"Georgia,serif"}}>
    <p style={{fontWeight:700,marginBottom:3}}>{label}</p>
    {payload.map((e,i)=><p key={i} style={{color:e.color}}>{e.name}: {typeof e.value==="number"&&e.value>999?e.value.toLocaleString():e.value}</p>)}
  </div>;
};

const Stat = ({value,label,sub,period,color=wine}) => (
  <div style={{...sty.card,textAlign:"center",padding:"14px 10px"}}>
    <p style={{fontSize:26,fontWeight:900,color,fontFamily:"Georgia,serif",lineHeight:1}}>{value}</p>
    <p style={{color:cream,fontWeight:600,fontSize:11,marginTop:6}}>{label}</p>
    {sub&&<p style={{color:"#8a7d68",fontSize:10,marginTop:2}}>{sub}</p>}
    {period&&<p style={{color:"#6b6052",fontSize:10}}>{period}</p>}
  </div>
);

const Card = ({children,style:s}) => <div style={{...sty.card,...s}}>{children}</div>;
const H2 = ({children,color=gold}) => <h2 style={{...sty.h2,color}}>{children}</h2>;
const Sub = ({children}) => <p style={sty.sub}>{children}</p>;
const Orn = () => <p style={sty.ornament}>&#10022; &#10022; &#10022;</p>;
const Chart = ({children,h=320}) => <ResponsiveContainer width="100%" height={h}>{children}</ResponsiveContainer>;

/* APP */
export default function App() {
  const [sec, setSec] = useState("overview");
  const [lang, setLang] = useState("es");
  const t = i18n[lang];

  return (
    <div style={sty.page}>
      {/* HEADER */}
      <div style={{background:`linear-gradient(180deg, rgba(139,26,26,0.18) 0%, ${bg} 100%)`, borderBottom:`1px solid ${borderC}`, padding:"48px 20px 36px", textAlign:"center"}}>
        <p style={{color:gold,fontSize:11,fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:12}}>{t.header.subtitle}</p>
        <h1 style={{fontSize:28,fontWeight:900,color:cream,lineHeight:1.25,marginBottom:8,fontFamily:"Georgia,serif"}}>{t.header.title}</h1>
        <p style={{color:"#6b6052",fontSize:13}}>{t.header.dateRange}</p>
        <p style={{color:"#5a5245",fontSize:11,marginTop:4}}>{t.header.sources}</p>
        <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
          background:"rgba(201,168,76,0.15)", border:`1px solid ${gold}40`, borderRadius:4,
          color:goldLight, padding:"4px 12px", fontSize:11, fontFamily:"Georgia,serif",
          cursor:"pointer", letterSpacing:"0.1em", marginTop:8
        }}>
          {lang==="es"?"English":"Espanol"}
        </button>
      </div>

      {/* NAV */}
      <div style={{position:"sticky",top:0,zIndex:20,background:`${bg}ee`,borderBottom:`1px solid ${borderC}`,backdropFilter:"blur(8px)"}}>
        <div style={{maxWidth:800,margin:"0 auto",padding:"8px 12px",display:"flex",overflowX:"auto",gap:4}}>
          {t.nav.map(s=>(
            <button key={s.id} onClick={()=>setSec(s.id)} style={{
              padding:"6px 14px",borderRadius:4,fontSize:11,fontWeight:600,whiteSpace:"nowrap",
              fontFamily:"Georgia,serif",cursor:"pointer",letterSpacing:"0.02em",
              border: sec===s.id ? `1px solid ${gold}60` : "1px solid transparent",
              background: sec===s.id ? "rgba(201,168,76,0.12)" : "transparent",
              color: sec===s.id ? goldLight : "#7a6f5f",
            }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:800,margin:"0 auto",padding:"32px 16px",display:"flex",flexDirection:"column",gap:20}}>

        {/* ==================== OVERVIEW ==================== */}
        {sec==="overview" && <>
          <Card>
            <H2>{t.overview.h2}</H2>
            <p style={{color:"#c4b896",fontSize:13,lineHeight:1.7}}>{t.overview.paragraph}</p>
          </Card>
          <Orn/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
            {t.overview.statsRow1.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p}/>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
            {t.overview.statsRow2.map(([v,l,s,p],i)=><Stat key={i} value={v} label={l} sub={s} period={p} color={i===3?"#2e7d32":gold}/>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
            {t.overview.statsRow3.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color={wineLight}/>)}
          </div>
          <Orn/>
          <div style={sty.alert("wine")}>
            <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.overview.nberAlertTitle}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.overview.nberAlertText}</p>
          </div>

          {/* Education */}
          <Card>
            <H2>{t.overview.educationTitle}</H2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:8}}>
              {t.overview.educationStats.map(([v,l,d],i)=>(
                <div key={i} style={{background:parchment,borderRadius:6,padding:"10px 12px",textAlign:"center"}}>
                  <p style={{fontSize:20,fontWeight:900,color:wine,fontFamily:"Georgia,serif"}}>{v}</p>
                  <p style={{color:cream,fontWeight:600,fontSize:10,marginTop:4}}>{l}</p>
                  <p style={{color:"#8a7d68",fontSize:9,marginTop:2}}>{d}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Exodus */}
          <Card>
            <H2>{t.overview.exodusTitle}</H2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:8}}>
              {t.overview.exodusStats.map(([v,l,d],i)=>(
                <div key={i} style={{background:parchment,borderRadius:6,padding:"10px 12px",textAlign:"center"}}>
                  <p style={{fontSize:20,fontWeight:900,color:wineLight,fontFamily:"Georgia,serif"}}>{v}</p>
                  <p style={{color:cream,fontWeight:600,fontSize:10,marginTop:4}}>{l}</p>
                  <p style={{color:"#8a7d68",fontSize:9,marginTop:2}}>{d}</p>
                </div>
              ))}
            </div>
          </Card>
        </>}

        {/* ==================== PRIESTS ==================== */}
        {sec==="priests" && <>
          <Card>
            <H2>{t.priests.h2_1}</H2>
            <Sub>{t.priests.sub_1}</Sub>
            <Chart>
              <ComposedChart data={priestsUSA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
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
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
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
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
                <YAxis stroke="#8a7d68" fontSize={10}/>
                <Tooltip content={<TT/>}/>
                <Bar dataKey="p" name={t.priests.chartLegend3[0]} fill="#5c1a1a" radius={[4,4,0,0]}/>
              </BarChart>
            </Chart>
          </Card>

          {/* Additional Data */}
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

        {/* ==================== NUNS ==================== */}
        {sec==="nuns" && <>
          <Card>
            <H2>{t.nuns.h2}</H2>
            <Sub>{t.nuns.sub}</Sub>
            <Chart>
              <ComposedChart data={nunsUSA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
                <YAxis stroke="#8a7d68" fontSize={10}/>
                <Tooltip content={<TT/>}/>
                <Area type="monotone" dataKey="n" name={t.nuns.chartLegend[0]} fill="#5c1a1a" stroke={wine} fillOpacity={0.4}/>
              </ComposedChart>
            </Chart>
          </Card>
          <div style={sty.alert("wine")}>
            <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.nuns.declineTitle}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.nuns.worldData}</p>
          </div>
          <Card>
            <H2 color={goldLight}>{t.nuns.educationImpactTitle}</H2>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.nuns.educationImpactText}</p>
          </Card>
        </>}

        {/* ==================== MASS / FAITH ==================== */}
        {sec==="mass" && <>
          <Card>
            <H2>{t.mass.h2}</H2>
            <Sub>{t.mass.sub}</Sub>
            <Chart>
              <LineChart data={massAtt}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
                <YAxis stroke="#8a7d68" fontSize={10} domain={[30,80]} unit="%"/>
                <Tooltip content={<TT/>}/>
                <Legend/>
                <Line type="monotone" dataKey="cat" name={t.mass.chartLegends[0]} stroke={wine} strokeWidth={3} dot={{r:5}}/>
                <Line type="monotone" dataKey="prot" name={t.mass.chartLegends[1]} stroke="#4a6fa5" strokeWidth={3} dot={{r:5}}/>
              </LineChart>
            </Chart>
          </Card>

          {/* European Data */}
          <Card>
            <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:10}}>{t.mass.europeanTitle}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
              {[[t.mass.countries.france,"27%","4.5%","1965-2009"],[t.mass.countries.ireland,"~90%","~30%","1965-2020"],[t.mass.countries.netherlands,"~65%","<10%","1965-2010"]].map(([c,f,to,p],i)=>(
                <div key={i} style={{background:parchment,borderRadius:6,padding:12,textAlign:"center"}}>
                  <p style={{color:cream,fontWeight:700,fontSize:13}}>{c}</p>
                  <p style={{color:wineLight,fontSize:11}}>{f} &#8594; {to}</p>
                  <p style={{color:"#6b6052",fontSize:10}}>{p}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Transubstantiation */}
          <div style={sty.alert("wine")}>
            <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.mass.transAlertTitle}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7,marginBottom:12}}>{t.mass.transIntro}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
              {t.mass.transStats.map(([v,l],i)=>(
                <div key={i} style={{background:"rgba(139,26,26,0.15)",borderRadius:6,padding:"10px 14px",textAlign:"center"}}>
                  <p style={{fontSize:22,fontWeight:900,color:wine,fontFamily:"Georgia,serif"}}>{v}</p>
                  <p style={{color:"#c4b896",fontSize:10,marginTop:4}}>{l}</p>
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
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.mass.liturgicalText}</p>
          </Card>
        </>}

        {/* ==================== MARRIAGES ==================== */}
        {sec==="marriages" && <>
          <Card>
            <H2>{t.marriages.h2}</H2>
            <Sub>{t.marriages.sub}</Sub>
            <Chart>
              <ComposedChart data={marriages}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
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
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.marriages.feedbackCycle}</p>
          </Card>
        </>}

        {/* ==================== ORDERS ==================== */}
        {sec==="orders" && <>
          <Card>
            <H2>{t.orders.h2}</H2>
            <Sub>{t.orders.sub}</Sub>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {orders.map((o,i)=>{
                const pd=Math.round((1-o.p2/o.p1)*100), sd=Math.round((1-o.s2/o.s1)*100);
                return(
                  <div key={i} style={{background:parchment,borderRadius:6,padding:14}}>
                    <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:8}}>{o.o}</p>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                      <div>
                        <p style={{color:"#8a7d68",fontSize:10,marginBottom:4}}>{t.orders.labels[0]}</p>
                        <p style={{fontSize:12}}>
                          <span style={{color:"#c4b896"}}>{o.p1.toLocaleString()}</span>
                          <span style={{color:wineLight}}> &#8594; </span>
                          <span style={{color:wineLight,fontWeight:700}}>{o.p2.toLocaleString()}</span>
                          <span style={{color:wine,fontSize:10,fontWeight:600,marginLeft:4}}>(-{pd}%)</span>
                        </p>
                      </div>
                      <div>
                        <p style={{color:"#8a7d68",fontSize:10,marginBottom:4}}>{t.orders.labels[1]}</p>
                        <p style={{fontSize:12}}>
                          <span style={{color:"#c4b896"}}>{o.s1.toLocaleString()}</span>
                          <span style={{color:wineLight}}> &#8594; </span>
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
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.orders.impactText}</p>
          </div>

          <Card>
            <H2 color={goldLight}>{t.orders.seminariesTitle}</H2>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.orders.seminariesText}</p>
          </Card>

          <div style={sty.alert("wine")}>
            <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.orders.caraAlert}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.orders.caraDetail}</p>
          </div>
        </>}

        {/* ==================== REGIONAL ==================== */}
        {sec==="regional" && <>
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
                    <rect key={i} fill={e.v>0?"#2e7d32":"#b44040"}/>
                  ))}
                </Bar>
              </BarChart>
            </Chart>
          </Card>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div style={sty.alert("green")}>
              <p style={{color:"#4caf50",fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.growthTitle}</p>
              <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.regional.growthText}</p>
            </div>
            <div style={sty.alert("wine")}>
              <p style={{color:wineLight,fontWeight:700,fontSize:13,marginBottom:6}}>{t.regional.deathTitle}</p>
              <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.regional.deathText}</p>
            </div>
          </div>

          <Card>
            <p style={{color:cream,fontWeight:700,fontSize:14,marginBottom:6}}>{t.regional.mexicoTitle}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.regional.mexicoText}</p>
          </Card>
        </>}

        {/* ==================== SSPX ==================== */}
        {sec==="sspx" && <>
          <Card style={{background:"linear-gradient(135deg, rgba(34,120,60,0.1) 0%, #1a1814 100%)",border:`1px solid rgba(34,120,60,0.3)`}}>
            <H2 color="#4caf50">{t.sspx.h2}</H2>
            <p style={{color:"#c4b896",fontSize:13,lineHeight:1.7}}>{t.sspx.intro}</p>
          </Card>

          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
            {t.sspx.stats.map(([v,l,s],i)=><Stat key={i} value={v} label={l} sub={s} color="#2e7d32"/>)}
          </div>

          <Card>
            <H2 color="#4caf50">{t.sspx.growthH2}</H2>
            <Sub>{t.sspx.growthSub}</Sub>
            <Chart>
              <ComposedChart data={sspxP}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3d3529"/>
                <XAxis dataKey="y" stroke="#8a7d68" fontSize={11}/>
                <YAxis stroke="#8a7d68" fontSize={10}/>
                <Tooltip content={<TT/>}/>
                <Area type="monotone" dataKey="p" name={t.sspx.chartLegend[0]} fill="rgba(34,120,60,0.2)" stroke="#4caf50" fillOpacity={0.4} strokeWidth={3}/>
              </ComposedChart>
            </Chart>
          </Card>

          {/* Detailed table */}
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
                      <td style={{padding:"6px 10px",color:"#c4b896"}}>{r.s}</td>
                      <td style={{padding:"6px 10px",color:"#c4b896"}}>{r.b}</td>
                      <td style={{padding:"6px 10px",color:"#c4b896"}}>{r.pr}</td>
                      <td style={{padding:"6px 10px",color:"#c4b896"}}>{r.ch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Comparison chart */}
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
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:12}}>
              {tradComp.map((c,i)=>(
                <div key={i} style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}>
                  <p style={{color:cream,fontWeight:700,fontSize:13}}>{c.n}</p>
                  <p style={{color:"#4caf50",fontSize:10}}>{c.p} {t.sspx.comparisonLabels[0]} - {c.m} {t.sspx.comparisonLabels[1]}</p>
                  <p style={{color:"#6b6052",fontSize:10}}>{c.c} {t.sspx.comparisonLabels[2]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contrast */}
          <div style={{background:"linear-gradient(90deg, rgba(139,26,26,0.1) 0%, rgba(34,120,60,0.1) 100%)",borderRadius:8,padding:20,border:`1px solid ${borderC}`}}>
            <h3 style={{color:cream,fontWeight:700,fontSize:16,marginBottom:12}}>{t.sspx.contrastTitle}</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <div>
                <p style={{color:wineLight,fontWeight:600,fontSize:12,marginBottom:6}}>Conciliar (2023)</p>
                {t.sspx.conciliarStats.map((s,i)=><p key={i} style={{color:"#c4b896",fontSize:11,marginBottom:3}}>- {s}</p>)}
              </div>
              <div>
                <p style={{color:"#4caf50",fontWeight:600,fontSize:12,marginBottom:6}}>FSSPX</p>
                {t.sspx.fsspxStats.map((s,i)=><p key={i} style={{color:"#c4b896",fontSize:11,marginBottom:3}}>- {s}</p>)}
              </div>
            </div>
          </div>
        </>}

        {/* ==================== NOVUS ORDO ==================== */}
        {sec==="novusordo" && <>
          <Card style={{background:"linear-gradient(135deg, rgba(100,50,120,0.1) 0%, #1a1814 100%)",border:"1px solid rgba(100,50,120,0.3)"}}>
            <H2 color="#b388d9">{t.novusordo.h2}</H2>
            <p style={{color:"#c4b896",fontSize:13,lineHeight:1.7}}>{t.novusordo.intro}</p>
          </Card>

          {/* Timeline */}
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

          {/* Offertory */}
          <Card>
            <h3 style={{color:cream,fontWeight:700,fontSize:18,marginBottom:4}}>{t.novusordo.offertoryTitle}</h3>
            <p style={{color:"#6b6052",fontSize:11,marginBottom:16}}>{t.novusordo.offertorySubtitle}</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <div style={{background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:8,padding:16}}>
                <p style={{color:gold,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.traditionalTitle}</p>
                <p style={{color:"#c4b896",fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.traditionalText}</p>
                <p style={{color:"rgba(201,168,76,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.traditionalNote}</p>
              </div>
              <div style={{background:"rgba(139,26,26,0.08)",border:"1px solid rgba(139,26,26,0.25)",borderRadius:8,padding:16}}>
                <p style={{color:wineLight,fontWeight:700,fontSize:12,marginBottom:8}}>{t.novusordo.noTitle}</p>
                <p style={{color:"#c4b896",fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>{t.novusordo.noText}</p>
                <p style={{color:"rgba(180,64,64,0.5)",fontSize:10,marginTop:8}}>{t.novusordo.noNote}</p>
              </div>
            </div>
            <div style={{background:parchment,borderRadius:6,padding:12,marginTop:12}}>
              <p style={{color:"#a89a80",fontSize:11,lineHeight:1.6}}>{t.novusordo.consiliumNote}</p>
            </div>
          </Card>

          {/* Structural Differences */}
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

          {/* Testimonies */}
          <Card>
            <h3 style={{color:cream,fontWeight:700,fontSize:16,marginBottom:12}}>{t.novusordo.testimoniesTitle}</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {t.novusordo.testimonies.map(([who,quote],i)=>(
                <div key={i} style={{background:"rgba(100,50,120,0.08)",border:"1px solid rgba(100,50,120,0.2)",borderRadius:6,padding:12}}>
                  <p style={{color:"#b388d9",fontWeight:600,fontSize:11,marginBottom:4}}>{who}</p>
                  <p style={{color:"#c4b896",fontSize:11,fontStyle:"italic",lineHeight:1.6}}>{quote}</p>
                </div>
              ))}
            </div>
          </Card>
        </>}

        {/* ==================== CONCLUSION ==================== */}
        {sec==="conclusion" && <>
          <Card>
            <H2 color={cream}>{t.conclusion.h2}</H2>
            <div style={{marginTop:12}}>
              <div style={{background:parchment,borderRadius:6,padding:16,marginBottom:12}}>
                <p style={{color:cream,fontWeight:600,fontSize:13,marginBottom:8}}>{t.conclusion.collapseSummaryTitle}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
                  {t.conclusion.collapseItems.map(([l,v],i)=>(
                    <p key={i} style={{fontSize:11,color:"#c4b896"}}>- {l}: <span style={{color:wineLight}}>{v}</span></p>
                  ))}
                </div>
              </div>
              <div style={{background:"rgba(34,120,60,0.08)",border:"1px solid rgba(34,120,60,0.2)",borderRadius:6,padding:16,marginBottom:12}}>
                <p style={{color:"#4caf50",fontWeight:600,fontSize:13,marginBottom:8}}>{t.conclusion.traditionTitle}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
                  {t.conclusion.traditionItems.map(([l,v],i)=>(
                    <p key={i} style={{fontSize:11,color:"#c4b896"}}>- {l}: <span style={{color:"#4caf50"}}>{v}</span></p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <div style={{background:parchment,borderRadius:6,padding:12}}>
            <p style={{color:"#6b6052",fontSize:10}}>
              <span style={{color:"#8a7d68",fontWeight:600}}>{t.conclusion.sourcesLabel}</span> {t.conclusion.sourcesText}
            </p>
          </div>
        </>}

        {/* ==================== AI ANALYSIS ==================== */}
        {sec==="ai" && <>
          <div style={sty.alert("blue")}>
            <p style={{color:"#6b8cae",fontWeight:700,fontSize:13,marginBottom:6}}>{t.ai.transparencyTitle}</p>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.ai.transparencyText}</p>
          </div>

          <Card>
            <H2 color="#6b8cae">{t.ai.analysisH2}</H2>
            <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:8}}>
              {t.ai.analysisPoints.map((pt,i)=>(
                <div key={i}>
                  <h3 style={{color:cream,fontWeight:600,fontSize:13,marginBottom:4}}>{pt.title}</h3>
                  <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{pt.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Soul */}
          <div style={{background:"linear-gradient(135deg, rgba(60,90,140,0.1) 0%, #1a1814 100%)",borderRadius:8,padding:24,border:"1px solid rgba(60,90,140,0.25)"}}>
            <h3 style={{color:cream,fontWeight:700,fontSize:18,marginBottom:12}}>{t.ai.soulTitle}</h3>
            <p style={{color:"#6b8cae",fontSize:12,fontStyle:"italic",lineHeight:1.7,marginBottom:12}}>{t.ai.soulQuestion}</p>
            <p style={{color:cream,fontWeight:600,fontSize:13,marginBottom:12}}>{t.ai.soulAnswer}</p>
            <div style={{background:"rgba(15,14,11,0.5)",borderRadius:6,padding:16,display:"flex",flexDirection:"column",gap:12}}>
              {t.ai.soulPoints.map((point,i)=>(
                <p key={i} style={{color:"#c4b896",fontSize:12,lineHeight:1.6}}>
                  <span style={{color:"#6b8cae",fontWeight:700}}>{i+1}.</span> {point}
                </p>
              ))}
            </div>
          </div>

          {/* Nuance */}
          <Card>
            <p style={{color:"#c4b896",fontSize:12,lineHeight:1.7}}>{t.ai.nuanceText}</p>
          </Card>

          {/* Irony */}
          <Card>
            <p style={{color:"#a89a80",fontSize:12,fontStyle:"italic",lineHeight:1.7}}>{t.ai.ironyText}</p>
          </Card>

          <div style={{background:parchment,borderRadius:6,padding:10,textAlign:"center"}}>
            <p style={{color:"#6b6052",fontSize:10}}>{t.ai.footerDisclaimer}</p>
          </div>
        </>}

      </div>

      {/* FOOTER */}
      <div style={{borderTop:`1px solid ${borderC}`,padding:"24px 16px",textAlign:"center"}}>
        <p style={{color:"#5a5245",fontSize:11}}>{t.footer.text}</p>
      </div>
    </div>
  );
}
