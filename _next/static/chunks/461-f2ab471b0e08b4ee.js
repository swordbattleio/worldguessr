"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{2461:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(5893),a=r(7294),o=r(4173),i={MIN_LOCATIONS:5,MAX_LOCATIONS:1e5,MAX_NAME_LENGTH:30,MIN_NAME_LENGTH:3,MAX_SHORT_DESCRIPTION_LENGTH:100,MIN_SHORT_DESCRIPTION_LENGTH:20,MAX_LONG_DESCRIPTION_LENGTH:1e3,MIN_LONG_DESCRIPTION_LENGTH:100},s=r(4295);function l(e){let{map:t,setMap:r,createMap:l}=e,[c,d]=(0,a.useState)({name:t.name,description_short:t.description_short,description_long:t.description_long,data:t.data||[]}),[p,h]=(0,a.useState)(!1),m=e=>{d({...c,[e.target.name]:e.target.value})},u=(e,t)=>{let r=[...c.data];r[e]=t,d({...c,data:r})},g=e=>{let t=c.data.filter((t,r)=>r!==e);d({...c,data:t})},x=e=>{if(e.preventDefault(),c.data.length<i.MIN_LOCATIONS){o.Am.error("Need at least ".concat(i.MIN_LOCATIONS," locations"));return}if(c.data.length>i.MAX_LOCATIONS){o.Am.error("Too many locations");return}if(!c.name||!c.description_short||!c.description_long){o.Am.error("Missing fields");return}r({...t,...c,progress:!0}),l(c)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"make-map-form",style:{gap:0},children:[(0,n.jsx)("h2",{children:"Rules"}),(0,n.jsx)("li",{children:"Use a descriptive name"}),(0,n.jsx)("li",{children:"Have helpful and informative descriptions"}),(0,n.jsxs)("li",{children:["Add at least ",i.MIN_LOCATIONS," locations"]}),(0,n.jsx)("li",{children:"You can make 1 map an hour"}),(0,n.jsx)("li",{children:"Keep all details in English (no NSFW)"}),(0,n.jsxs)("li",{style:{marginTop:"10px",fontSize:"1.4em",listStyleType:"none"},children:["Need help? ",(0,n.jsx)("a",{style:{color:"cyan"},href:"https://discord.gg/ubdJHjKtrC",target:"_blank",rel:"noreferrer",children:"Join our Discord"})]})]}),(0,n.jsxs)("form",{className:"make-map-form",onSubmit:x,children:[(0,n.jsx)("h2",{children:"Basic Info"}),(0,n.jsxs)("label",{children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Name ",(0,n.jsxs)("span",{style:{color:c.name.length<i.MIN_NAME_LENGTH?"red":"green",marginLeft:"8px"},children:["(",c.name.length," / ",i.MAX_NAME_LENGTH,")"]})]}),(0,n.jsx)("input",{type:"text",name:"name",value:c.name,onChange:m,maxLength:i.MAX_NAME_LENGTH,minLength:i.MIN_NAME_LENGTH,style:{display:"block",marginTop:"8px"}})]}),(0,n.jsxs)("label",{children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Short Description ",(0,n.jsxs)("span",{style:{color:c.description_short.length<i.MIN_SHORT_DESCRIPTION_LENGTH?"red":"green",marginLeft:"8px"},children:["(",c.description_short.length," / ",i.MAX_SHORT_DESCRIPTION_LENGTH,")"]})]}),(0,n.jsx)("input",{type:"text",name:"description_short",value:c.description_short,onChange:m,maxLength:i.MAX_SHORT_DESCRIPTION_LENGTH,minLength:i.MIN_SHORT_DESCRIPTION_LENGTH})]}),(0,n.jsxs)("label",{children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Long Description ",(0,n.jsxs)("span",{style:{color:c.description_long.length<i.MIN_LONG_DESCRIPTION_LENGTH?"red":"green",marginLeft:"8px"},children:["(",c.description_long.length," / ",i.MAX_LONG_DESCRIPTION_LENGTH,")"]})]}),(0,n.jsx)("textarea",{name:"description_long",value:c.description_long,onChange:m})]})]}),(0,n.jsxs)("div",{className:"make-map-form",style:{gap:0},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("h2",{style:{marginBottom:"10px"},children:"Locations"}),(0,n.jsx)("button",{type:"button",style:{padding:"3px",marginLeft:"10px"},onClick:()=>{if(0===c.data.length){o.Am.error("No locations to copy");return}navigator.clipboard.writeText(JSON.stringify(c.data)),o.Am.success("Copied entered locations to clipboard")},children:(0,n.jsx)(s.esY,{})}),c.data.length<i.MIN_LOCATIONS&&(0,n.jsxs)("span",{style:{color:"red",marginLeft:"8px"},children:["(",i.MIN_LOCATIONS-c.data.length," more needed)"]}),c.data.length>=i.MIN_LOCATIONS&&(0,n.jsxs)("span",{style:{color:"green",marginLeft:"8px"},children:["(",c.data.length," / ",i.MAX_LOCATIONS,")"]})]}),!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:"Either enter them Manually..."}),(0,n.jsxs)("span",{style:{marginBottom:"5px"},children:[(0,n.jsx)("li",{children:"Visit Google Maps on a desktop computer"}),(0,n.jsx)("li",{children:"Drag the orange figure onto the map to open a streetview"}),(0,n.jsx)("li",{children:"Copy the URL from the address bar of your browser into the textbox"}),(0,n.jsxs)("li",{children:["You can add also add JSON strings with ","{lat, lng, heading, pitch, zoom}"]})]}),c.data.map((e,t)=>(0,n.jsxs)("div",{className:"url-input-container",children:[(0,n.jsx)("input",{type:"text",name:"url-".concat(t),value:e,onChange:e=>u(t,e.target.value),className:"url-input"}),(0,n.jsx)("button",{type:"button",className:"delete-button",onClick:()=>g(t),children:"✖ "}),(0,n.jsx)("span",{className:"validation-icon"})]},t)),(0,n.jsx)("button",{type:"button",className:"add-button",onClick:()=>{d({...c,data:[...c.data,""]})},children:"+ Add URL"}),(0,n.jsx)("br",{})]}),(0,n.jsx)("h3",{children:p?"Bulk Uploaded":"...or Bulk Upload a file"}),!p&&(0,n.jsxs)("span",{children:["Supports JSON format from ",(0,n.jsx)("a",{style:{color:"cyan"},href:"https://map-generator.vercel.app/",target:"_blank",rel:"noreferrer",children:"map-generator.vercel.app"})]}),!p&&(0,n.jsxs)("label",{htmlFor:"file-upload",className:"add-button button",style:{cursor:"pointer",padding:"8px 16px"},children:[(0,n.jsx)("input",{type:"file",accept:".json",onChange:function(e){let t=e.target.files[0],r=new FileReader;r.onload=e=>{let t=e.target.result;try{let e=function(e){if(console.log("parse map data"),"string"==typeof e)try{e=JSON.parse(e),console.log("converted to json")}catch(e){return}let t=[];if(Array.isArray(e)&&(t=e,console.log("already is array")),0===t.length){for(let r in console.log("looking for array"),e)if(Array.isArray(e[r])){console.log("found array",e[r]),t=e[r];break}}if(0===t.length){console.log("no array found");return}let r=[];return 0===(r=(r=t.map(e=>{if(!e)return;if("string"==typeof e)try{e=JSON.parse(e)}catch(t){e=function(e){let t=e.match(/@(-?\d+\.\d+),(-?\d+\.\d+)(?:,3a,(\d+)y,(-?\d+)h,(\d+)t)?/);if(!t)return null;{let e=parseFloat(t[1]),r=parseFloat(t[2]),n=t[3]?parseInt(t[3],10):null,a=t[4]?parseInt(t[4],10):null,o=t[5]?parseInt(t[5],10)-90:null;return{lat:e,lng:r,heading:a,pitch:o,zoom:null!==n?Math.log2(180/n):null}}}(e)}let t={};try{for(let t of[["latitude"],["longitude","long","lon"]])for(let r of t)void 0!==e[r]&&(e[t[0]]=e[r],delete e[r])}catch(e){return}for(let r of["lat","lng","heading","pitch","zoom"])void 0!==e[r]&&(t[r]=e[r]);if(void 0!==t.lat&&void 0!==t.lng)return t})).filter(e=>e)).length?null:r}(t);if(!e){o.Am.error("Failed to parse file");return}if((e=e.map(e=>JSON.stringify(e))).length>i.MAX_LOCATIONS){o.Am.error("More than ".concat(i.MAX_LOCATIONS," locations in file"));return}o.Am.success("Parsed "+e.length+" locations"),h(!0),d({...c,data:e})}catch(e){o.Am.error("Invalid file format")}},r.readAsText(t)},style:{overflow:"hidden",width:0,height:0,opacity:0},id:"file-upload"}),"Upload File"]}),p&&(0,n.jsx)("button",{type:"button",className:"add-button",onClick:()=>{d({...c,data:[]}),h(!1)},children:"Clear Upload"})]}),(0,n.jsx)("div",{className:"make-map-form",style:{gap:0},children:(0,n.jsx)("button",{type:"submit",onClick:x,disabled:t.progress,children:t.progress?"Loading...":"Publish"})})]})}function c(e){let{onPencilClick:t,showEditControls:r,map:i,onHeart:l,onClick:c,country:d,searchTerm:p,canHeart:h,showReviewOptions:m,secret:u,refreshHome:g}=e,x=d?'url("https://flagcdn.com/h240/'.concat(null==d?void 0:d.toLowerCase(),'.png")'):"",v=(e,t)=>{if(!t||!e||"string"!=typeof t||t.length<3)return e;let r=RegExp("(".concat(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),")"),"gi");return e.split(r).map((e,r)=>(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())?(0,n.jsx)("span",{style:{backgroundColor:"darkOrange"},children:e},r):e)},y=(e,t,r)=>{e.stopPropagation();let n=null;(r||null!==(n=prompt("Please enter a reason for rejecting this map:")))&&fetch(window.cConfig.apiUrl+"/api/map/approveRejectMap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:u,mapId:t,action:r?"approve":"reject",rejectReason:n,resubmittable:j})}).then(e=>{e.json().then(r=>{e.ok?(o.Am.success(r.message),g({removeMap:t})):(o.Am.error(r.message),g())}).catch(e=>{console.error(e),o.Am.error("An error occurred while trying to review the map. Please try again later.")})}).catch(e=>{console.error(e),o.Am.error("An error occurred while trying to review the map. Please try again later.")})},f=(e,t)=>{e.stopPropagation(),confirm("Are you sure you want to delete this map?")&&fetch(window.cConfig.apiUrl+"/api/map/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:u,mapId:t})}).then(e=>{e.json().then(t=>{e.ok?(o.Am.success(t.message),g()):o.Am.error(t.message)}).catch(e=>{console.error(e),o.Am.error("An error occurred while trying to delete the map. Please try again later.")})}).catch(e=>{console.error(e);try{e.json().then(e=>{o.Am.error(e.message)})}catch(e){o.Am.error("An error occurred while trying to delete the map. Please try again later.")}})},[j,N]=(0,a.useState)(i.resubmittable);return(0,n.jsxs)("div",{className:"map-tile ".concat(d&&"country"),onClick:c,style:{backgroundImage:x,objectFit:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},children:[(0,n.jsxs)("div",{className:"map-tile__header ".concat(d&&"country"),children:[(0,n.jsxs)("div",{className:"map-tile__mapdetails",children:[(0,n.jsxs)("div",{className:"map-tile__name",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,n.jsx)("p",{children:v(i.name,p)}),!d&&(i.in_review||i.reject_reason)&&i.yours&&!i.accepted&&(0,n.jsxs)("div",{className:"map-tile__status ".concat(i.reject_reason?"rejected":"in-review"),children:[!i.accepted&&i.resubmittable&&i.reject_reason&&(0,n.jsx)("span",{children:"Rejected"}),!i.accepted&&!i.reject_reason&&(0,n.jsx)("span",{children:"In Review"}),m&&(0,n.jsxs)("div",{className:"map-tile__review-options",onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("button",{className:"accept",onClick:e=>y(e,i.id,!0),children:"Accept"}),(0,n.jsx)("button",{className:"reject",onClick:e=>y(e,i.id,!1),children:"Reject"}),"resubmittable?",(0,n.jsx)("input",{type:"checkbox",id:"resubmittable",name:"resubmittable",checked:j,onChange:e=>{e.stopPropagation(),N(!j)}})]})]})]}),!i.countryMap&&i.created_by_name&&(0,n.jsxs)("div",{className:"map-tile__author",children:["by ",v(i.created_by_name,p),i.accepted&&(0,n.jsxs)("span",{style:{color:"rgba(255, 255, 255, 0.5)"},children:["\xa0 \xb7 ",function(e,t){if(e<1e3)return e.toString();let r=Math.log10(e)/3|0,n=["K","M","B","T"][r-1],a=e/Math.pow(10,3*r),o=a.toFixed(3-Math.floor(Math.log10(a))-1);return o=o.replace(/\.?0+$/,""),"".concat(o).concat(n)}(i.locations,0)," locations"]})]}),i.locations&&(0,n.jsx)("div",{className:"map-tile__author",children:(0,n.jsx)("span",{style:{color:"rgba(255, 255, 255, 0.5)"}})})]}),!d&&i.created_by_name&&!i.in_review&&!i.reject_reason&&(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,n.jsxs)("button",{className:"map-tile__heart ".concat(h?"":"disabled"),onClick:e=>{e.stopPropagation(),h&&l()},disabled:!h,children:[i.hearts,"\xa0",(0,n.jsx)(s.$0H,{color:i.hearted?"red":"white",size:20})]}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexDirection:"column"},children:[r&&i.yours&&(0,n.jsx)("button",{className:"map-tile__delete",onClick:e=>f(e,i.id),children:(0,n.jsx)(s.Xm5,{color:"red",size:10})}),r&&i.yours&&(0,n.jsx)("button",{className:"map-tile__edit",onClick:e=>{e.stopPropagation(),fetch(window.cConfig.apiUrl+"/api/map/action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:u,action:"get",mapId:i.id})}).then(e=>{e.json().then(r=>{if(e.ok){let e=r.map;t({...i,data:e.data,description_long:e.description_long})}else o.Am.error(r.message)}).catch(e=>{console.error(e),o.Am.error("An error occurred while trying to retrieve the map data. Please try again later.")})}).catch(e=>{console.error(e),o.Am.error("An error occurred while trying to retrieve the map data. Please try again later.")})},children:(0,n.jsx)(s.dou,{color:"white",size:10})})]})]})]}),i.yours&&i.reject_reason&&(0,n.jsx)("div",{className:"map-tile__reject-reason",children:(0,n.jsxs)("p",{children:["Reject Reason: ",i.reject_reason]})})]})}var d=r(6794);r(9431);var p=r(5114);let h={open:!1,progress:!1,name:"",description_short:"",description_long:"",data:"",edit:!1,mapId:""};function m(e){var t,r,i,s;let m;let{inLegacy:u,gameOptions:g,setGameOptions:x,showOptions:v,close:y,session:f,text:j,onMapClick:N,chosenMap:_,showAllCountriesOption:C}=e,[b,k]=(0,a.useState)(h),[A,w]=(0,a.useState)({message:j("loading")+"..."}),[T,M]=(0,a.useState)(""),[S,O]=(0,a.useState)([]),[I,L]=(0,a.useState)("");function E(e){var t,r;if(console.log("refreshing home",e),e){w(t=>{let r={...t};return Object.keys(r).forEach(t=>{r[t]=r[t].filter(t=>t.id!==e.removeMap)}),r});return}window.cConfig=(0,p.Z)(),fetch(window.cConfig.apiUrl+"/api/map/mapHome",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((null==f?void 0:null===(t=f.token)||void 0===t?void 0:t.secret)?{secret:null==f?void 0:null===(r=f.token)||void 0===r?void 0:r.secret,inCG:window.inCrazyGames}:{})}).then(e=>e.json()).then(e=>{w(e)}).catch(()=>{w({message:"Failed to fetch"})})}(0,a.useEffect)(()=>{E()},[null==f?void 0:null===(t=f.token)||void 0===t?void 0:t.secret]);let R=(0,a.useCallback)((s=e=>{if(e.length>3){var t;fetch(window.cConfig.apiUrl+"/api/map/searchMap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,secret:null==f?void 0:null===(t=f.token)||void 0===t?void 0:t.secret})}).then(e=>e.json()).then(e=>{O(e)}).catch(()=>{o.Am.error("Failed to search maps")})}else O([])},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];clearTimeout(m),m=setTimeout(()=>s(...t),300)}),[]);(0,a.useEffect)(()=>{R(T)},[T,R]);let P=Object.keys(A).filter(e=>"message"!==e).some(e=>("recent"===e&&S.length>0?S:A[e].filter(e=>{var t,r,n;return(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(null==T?void 0:T.toLowerCase()))||(null===(r=e.description_short)||void 0===r?void 0:r.toLowerCase().includes(null==T?void 0:T.toLowerCase()))||(null===(n=e.created_by_name)||void 0===n?void 0:n.toLowerCase().includes(null==T?void 0:T.toLowerCase()))})).length>0);return(0,n.jsxs)("div",{className:"mapView",children:[(0,n.jsxs)("div",{className:"mapViewNavbar",children:[(0,n.jsx)("div",{className:"mapViewLeft",children:(0,n.jsx)("button",{onClick:()=>b.open?k({...b,open:!1}):y(),className:"mapViewClose",children:b.open?j("back"):j("close")})}),(0,n.jsx)("h1",{className:"mapViewTitle",children:b.open?(null==b?void 0:b.edit)?"Edit Map":"Make Map":j("maps")}),(0,n.jsx)("div",{className:"mapViewRight",children:!b.open&&(null==f?void 0:null===(r=f.token)||void 0===r?void 0:r.secret)&&(0,n.jsx)("button",{onClick:()=>{if(inCrazyGames){o.Am.error("Please play on WorldGuessr.com to use this feature");return}b.edit?k({...h,open:!0}):k({...b,open:!0})},className:"mapViewMake",children:"Make Map"})})]}),v&&(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"5px",marginTop:"5px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:j("nm")}),(0,n.jsx)("input",{type:"checkbox",checked:g.nm,onChange:e=>{x({...g,nm:e.target.checked})}})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:j("npz")}),(0,n.jsx)("input",{type:"checkbox",checked:g.npz,onChange:e=>{x({...g,npz:e.target.checked})}})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:j("showRoadName")}),(0,n.jsx)("input",{type:"checkbox",checked:g.showRoadName,onChange:e=>{x({...g,showRoadName:e.target.checked})}})]})]}),!b.open&&(0,n.jsx)("div",{className:"mapSearch",children:(0,n.jsx)("input",{type:"text",placeholder:j("searchForMaps"),className:"mapSearchInput",value:T,onChange:e=>M(e.target.value)})}),!b.open&&(0,n.jsxs)("div",{children:[(null==A?void 0:A.message)&&(0,n.jsx)("span",{className:"bigSpan",children:null==A?void 0:A.message}),(0,n.jsx)("center",{children:C&&(0===T.length||(null===(i=j("allCountries"))||void 0===i?void 0:i.toLowerCase().includes(null==T?void 0:T.toLowerCase())))&&(0,n.jsx)(c,{map:{name:j("allCountries"),slug:"all"},onClick:()=>N({name:j("allCountries"),slug:"all"}),searchTerm:T})}),P?Object.keys(A).filter(e=>"message"!==e).map((e,t)=>{let r="recent"===e&&S.length>0?S:A[e].filter(e=>{var t,r,n;return(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(T.toLowerCase()))||(null===(r=e.description_short)||void 0===r?void 0:r.toLowerCase().includes(T.toLowerCase()))||(null===(n=e.created_by_name)||void 0===n?void 0:n.toLowerCase().includes(null==T?void 0:T.toLowerCase()))});return r.length>0?(0,n.jsxs)("div",{className:"mapSection section-".concat(e),children:[(0,n.jsxs)("h2",{className:"mapSectionTitle",children:[j(e),["myMaps","likedMaps","reviewQueue"].includes(e)&&" (".concat(r.length,")")]}),(0,n.jsx)("div",{className:"mapSectionMaps",children:(0,n.jsx)(d.lS,{drag:!0,children:"countryMaps"===e?r.map((e,t)=>t%3==0?(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:r.slice(t,t+3).map((e,r)=>(0,n.jsx)(c,{map:e,onClick:()=>N(e),country:e.countryMap,searchTerm:T},t+r))},t):null):r.map((t,a)=>a%("popular"===e?3:1)==0?(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:r.slice(a,a+("popular"===e?3:1)).map((i,s)=>{var l,d,p,m;return(0,n.jsx)(c,{map:i,canHeart:(null==f?void 0:null===(l=f.token)||void 0===l?void 0:l.secret)&&I!==r[a+s].id,onClick:()=>N(i),country:i.countryMap,searchTerm:T,secret:null==f?void 0:null===(d=f.token)||void 0===d?void 0:d.secret,refreshHome:E,showEditControls:t.yours&&"myMaps"===e||(null==f?void 0:null===(p=f.token)||void 0===p?void 0:p.staff),showReviewOptions:(null==f?void 0:null===(m=f.token)||void 0===m?void 0:m.staff)&&"reviewQueue"===e,onPencilClick:e=>{k({...h,open:!0,edit:!0,mapId:e.id,name:e.name,description_short:e.description_short,description_long:e.description_long,data:e.data.map(e=>JSON.stringify(e))})},onHeart:()=>{!function(e){var t,r,n;if(!(null==f?void 0:null===(t=f.token)||void 0===t?void 0:t.secret)){o.Am.error("Not logged in");return}L(e.id),fetch((null===(r=window.cConfig)||void 0===r?void 0:r.apiUrl)+"/api/map/heartMap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secret:null==f?void 0:null===(n=f.token)||void 0===n?void 0:n.secret,mapId:e.id})}).then(async t=>{let r;L("");try{r=await t.json()}catch(e){o.Am.error("Unexpected Error hearting map - 1");return}if(t.ok&&r.success){(0,o.Am)(r.hearted?j("heartedMap"):j("unheartedMap"),{type:r.hearted?"success":"info"});let t=r.hearts;w(n=>{let a={...n};return Object.keys(a).forEach(n=>{a[n]=a[n].map(n=>(n.id===e.id&&(n.hearts=t,n.hearted=r.hearted),n)),"likedMaps"===n&&(r.hearted?a[n].push(e):a[n]=a[n].filter(t=>t.id!==e.id))}),a}),S.length>0&&O(n=>n.map(n=>(n.id===e.id&&(n.hearts=t,n.hearted=r.hearted),n)))}else o.Am.error(j(r.message||r.error||"unexpectedError"))}).catch(e=>{L(""),console.log(e),o.Am.error("Unexpected Error hearting map - 2")})}(r[a+s])}},a+s)})},a):null)})})]},t):null}):!(null==A?void 0:A.message)&&(0,n.jsx)("div",{className:"noResults",children:j("noResultsFound")})]}),b.open&&(0,n.jsx)(l,{map:b,setMap:k,createMap:function(e){var t,r,n;if(!(null==f?void 0:null===(t=f.token)||void 0===t?void 0:t.secret)){o.Am.error("Not logged in");return}fetch((null===(r=window.cConfig)||void 0===r?void 0:r.apiUrl)+"/api/map/action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:b.edit?"edit":"create",mapId:b.mapId,secret:null==f?void 0:null===(n=f.token)||void 0===n?void 0:n.secret,name:e.name,description_short:e.description_short,description_long:e.description_long,data:e.data})}).then(async e=>{let t;try{t=await e.json()}catch(e){o.Am.error("Max file limit 4mb"),k({...b,progress:!1});return}e.ok?(o.Am.success("Map "+(b.edit?"edited":"created")),k(h),E()):(k({...b,progress:!1}),o.Am.error(t.message))}).catch(()=>{k({...b,progress:!1}),o.Am.error("Unexpected Error creating map - 2")})}})]})}}}]);