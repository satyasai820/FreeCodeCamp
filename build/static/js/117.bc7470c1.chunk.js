"use strict";(self.webpackChunkfreecodecamp=self.webpackChunkfreecodecamp||[]).push([[117],{1117:(n,o,e)=>{e.r(o),e.d(o,{default:()=>f});e(2791);var t=e(7689),r=e(1649),i=e(6181);var s=e(7898),a=e(2752),x=e(184);const c={Setdata:n=>({type:i.m,payload:n})},l=a.Z.connect((n=>({data:n.Reducer.data})),c)((n=>{let{data:o,Setdata:e}=n;a.Z.useEffect((()=>{t()}),[]);const t=async()=>{try{const n=await(0,s.G)();console.log("i am get data in firstcomponent",n),e(n)}catch(n){console.log("here Im getting error")}},r=a.Z.useParams().id;console.log("routename",r);const i=o;console.log("this is extrated data",o);const c=i.filter((n=>n.status===r));return console.log("i am matter",typeof c),(0,x.jsx)(a.Z.Grid,{container:!0,paddingTop:10,justifyContent:"center",children:c.map((n=>(0,x.jsxs)(a.Z.Grid,{sx:{width:{sm:"75%",md:"70%",lg:"60%",xl:"50%"},textAlign:"center"},children:[(0,x.jsx)(a.Z.Typography,{paddingTop:5,lineHeight:1,fontFamily:'"Hack-ZeroSlash",monospace',sx:{fontSize:{xs:"30px",sm:"45px",md:"50px",lg:"45px",xl:"35px"},fontWeight:600},children:n.title}),(0,x.jsx)(a.Z.Grid,{sx:{margin:"30px 0px 30px 0px"},children:(0,x.jsx)(a.Z.Icon,{icon:n.icon,width:"90",height:"90"})}),(0,x.jsx)(a.Z.Grid,{container:!0,justifyContent:"center",children:(0,x.jsxs)(a.Z.Grid,{sx:{width:{xs:"95%",sm:"95%",lg:"70%",xl:"75%"}},children:[(0,x.jsx)(a.Z.Typography,{sx:{textAlign:"start",color:"#1B1B32",fontSize:{xs:"17px",sm:"18px",xl:"16px"},marginBottom:"20px",fontFamily:'"Lato", sans-serif'},children:n.para1}),(0,x.jsx)(a.Z.Typography,{sx:{textAlign:"start",color:"#1B1B32",fontSize:{xs:"17px",sm:"18px",xl:"16px"},marginBottom:"20px",fontFamily:'"Lato", sans-serif'},children:n.para2}),(0,x.jsx)(a.Z.Typography,{sx:{textAlign:"start",color:"#1B1B32",fontSize:{xs:"17px",sm:"18px",xl:"16px"},marginBottom:"20px",fontFamily:'"Lato", sans-serif'},children:n.para3}),(0,x.jsx)(a.Z.Grid,{sx:{background:"#D9EDF7",textAlign:"left",marginBottom:"30px",padding:"10px"},children:(0,x.jsx)(a.Z.Typography,{variant:"p",sx:{fontFamily:'"Lato",sans-serif',color:"#317086",fontSize:"13px"},children:n.note})})]})})]})))})}));const d={SetData2:e(1192).z},m=a.Z.connect((n=>({data2:n.Reducer2.data2})),d)((n=>{let{data2:o,SetData2:e}=n;a.Z.useEffect((()=>{t()}),[]);const t=async()=>{try{const n=await a.Z.AccordionGetData();e(n),console.log("accordion data is here",n)}catch(n){console.log("Here Im getting error in Accordion Component...")}},r=[{num:"1"},{num:"2"},{num:"3"},{num:"4"},{num:"5"},{num:"6"},{num:"7"},{num:"8"},{num:"9"},{num:"10"},{num:"11"},{num:"12"},{num:"13"},{num:"14"},{num:"15"},{num:"16"},{num:"17"},{num:"18"},{num:"19"},{num:"20"},{num:"21"},{num:"22"},{num:"23"},{num:"24"},{num:"25"},{num:"26"},{num:"27"},{num:"28"},{num:"29"},{num:"30"},{num:"31"},{num:"32"},{num:"33"},{num:"34"},{num:"35"},{num:"36"},{num:"37"},{num:"38"},{num:"39"},{num:"40"},{num:"41"},{num:"42"},{num:"43"},{num:"44"},{num:"45"},{num:"46"},{num:"47"},{num:"48"},{num:"49"},{num:"50"}],i=a.Z.useParams().id;console.log("i am data2 in accordian",o);const s=o.filter((n=>n.status===i));return console.log("Im accordion component data",s),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z.Grid,{container:!0,justifyContent:"center",children:(0,x.jsxs)(a.Z.Grid,{sx:{width:{md:"80%"}},children:[s.map((n=>(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(a.Z.Accordion,{sx:{borderRadius:"0",marginBottom:"5px",boxShadow:"none",padding:1.5},children:[(0,x.jsxs)(a.Z.AccordionSummary,{expandIcon:(0,x.jsx)(a.Z.ExpandMoreIcon,{}),"aria-controls":"panel1-content",id:"panel1-header",sx:{fontFamily:'"Hack-ZeroSlash",monospace',fontWeight:"700",color:"#1B1B32",lineHeight:"1.5",fontSize:{xs:"20px",xl:"18px"},"&:hover":{backgroundColor:"#D0D0D5"}},children:[" ",(0,x.jsx)(a.Z.Typography,{sx:{marginRight:"8px",marginTop:"4px"},children:(0,x.jsx)(a.Z.Icon,{icon:"ph:circle-thin",width:"15",height:"15"})})," ",n.title," "]}),(0,x.jsxs)(a.Z.AccordionDetails,{children:["  ",n.para1," "]}),(0,x.jsxs)(a.Z.AccordionDetails,{children:[" ",n.para2," "]}),(0,x.jsx)(a.Z.Button,{sx:{marginBottom:"20px",fontFamily:'"Lato",sans-serif',textTransform:"none",border:"3px solid #1B1B32",borderRadius:"0px",backgroundColor:"#D0D0D5",color:"#1B1B32",marginLeft:"15px","&:hover":{backgroundColor:"#1B1B32",color:"#F5F6F7"}},children:"Start project"}),(0,x.jsx)(a.Z.Grid,{container:!0,marginTop:3,sx:{paddingLeft:{xs:"8vmin",sm:"0px"}},children:r.map((n=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z.Grid,{textAlign:"center",item:!0,xs:2,sm:1,xl:1,sx:{border:"1px dashed #D0D0D5",marginLeft:"15px",marginBottom:"12px","&:hover":{backgroundColor:"#D0D0D5"}},children:(0,x.jsx)(a.Z.Typography,{sx:{margin:"10px"},children:n.num})})})))})]})}))),(0,x.jsx)(a.Z.Accordion,{sx:{borderRadius:"0",marginBottom:"80px",boxShadow:"none"},children:(0,x.jsxs)(a.Z.Grid,{container:!0,children:[(0,x.jsxs)(a.Z.Grid,{sx:{marginLeft:"10px",paddingTop:"10px",width:{xs:"49vmin",sm:"28%",lg:"26%"}},children:[(0,x.jsx)(a.Z.Typography,{sx:{border:"1px solid #99C9FF",backgroundColor:"#99C9FF",fontFamily:'"Lato",sans-serif',paddingLeft:"5px"},children:"Certification Project"}),(0,x.jsx)(a.Z.Typography,{sx:{fontFamily:'"Hack-ZeroSlash",monospace',fontWeight:"700",color:"#1B1B32",lineHeight:"2.5",fontSize:{xs:"20px",xl:"18px"}},children:" Survey Form"})]}),(0,x.jsxs)(a.Z.Grid,{children:[(0,x.jsx)(a.Z.AccordionDetails,{sx:{fontSize:"18px"},children:" This is one of the required projects to earn your certification. "}),(0,x.jsx)(a.Z.AccordionDetails,{sx:{fontSize:"18px"},children:" For this project, you will build a survey form to collect data from your users. "})]})]})})]})})})})),p=()=>{const n=a.Z.useNavigate(),o=localStorage.getItem("accessToken");return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z.Box,{textAlign:"center",children:(0,x.jsx)(a.Z.Button,{onClick:()=>{n(o?"/home":"/signup")},sx:{color:"black",backgroundColor:"#FEAC32",width:{xs:"90vmin",sm:"450px",md:"450px",lg:"450px",xl:"400px"},border:"3px solid #f79205",borderRadius:"0",textAlign:"center",marginTop:"30px",marginBottom:"30px",boxShadow:"0px 4px 22px rgba(0, 0, 0, 0.1)","&:hover":{backgroundColor:"#FEAC32"}},children:(0,x.jsx)(a.Z.Typography,{sx:{textTransform:"none",fontFamily:'"Lato",sans-serif',fontSize:{xs:"20px",sm:"20px",md:"20px",lg:"20px",xl:"18px"},"& .nav-link":{textDecoration:"none",color:"inherit"}},children:" Sign in to Save your Process (it's free)"})})})})},g=()=>{const n=localStorage.getItem("accessToken");return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z.Grid,{container:!0,justifyContent:"center",marginTop:5,children:(0,x.jsxs)(a.Z.Grid,{sx:{width:{sm:"75%",md:"70%",lg:"60%",xl:"50%"},marginBottom:"20px"},children:[(0,x.jsx)(a.Z.Typography,{fontFamily:'"Hack-ZeroSlash",monospace',sx:{fontSize:{xs:"6vmin",sm:"35px",lg:"30px",xl:"30px"},fontWeight:"bold",textAlign:"center",marginBottom:"30px"},children:"Courses"}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(a.Z.Grid,{container:!0,justifyContent:"center",children:(0,x.jsx)(a.Z.Grid,{sx:{width:{xs:"95%",md:"80%"},justifyContent:"center"},children:n?(0,x.jsx)(a.Z.Typography,{sx:{border:"3px solid black",fontFamily:'"Lato",sans-serif',textAlign:"center",lineHeight:"25px",backgroundColor:"#D0D0D5","&:hover":{backgroundColor:"#0A0A23",color:"#D0D0D5"}},children:"Go to settings to claim your certification"}):(0,x.jsx)(p,{})})})]})})})};var h=e(4194),u=e(8859);const f=()=>{const n=(0,t.UO)().id;return console.log("routename",n),(0,x.jsxs)("div",{style:{backgroundColor:"#F5F6F7"},children:[(0,x.jsx)(r.Z,{}),(0,x.jsx)(l,{}),(0,x.jsx)(g,{}),(0,x.jsx)(h.Z,{width:"45%",marginLeft:"420px",fontFamily:'"Hack-ZeroSlash",monospace',fontSize:"25px",marginRight:"90px",display:"none"}),(0,x.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=117.bc7470c1.chunk.js.map