var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,o)=>{for(var i in o||(o={}))t.call(o,i)&&a(e,i,o[i]);if(n)for(var i of n(o))r.call(o,i)&&a(e,i,o[i]);return e};import{q as i,R as l,r as c,i as d,t as s,u as p,a as m,S as g,b as u,N as h,c as b,d as f,x}from"./vendor.e9f1466c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const l=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),a(c)},onload(){n(self[t].moduleMap[i]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const E=i.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 600px;
  max-height: 600px;
  background: linear-gradient(90deg, rgb(100, 71, 101) 0%, rgb(33, 74, 112) 100%);
  color: black;
  border-radius: 16px;
`,w=i.h1`
  font-family: "Exo 2";
  color: ${e=>e.reject?"#f3ba2e":e.accept?"#32cd32":"#FFFFFF"};
  font-weight: 800;
  font-size: ${e=>e.size?e.size:3}em;
  margin: 0;
  text-shadow: -5px 5px 0px rgba(0,0,0,.4);
  text-transform: uppercase;
  transition: color 300ms ease-in-out;
`,v=i.div`
  color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23${e=>e.reject?"f3ba2e":e.accept?"32cd32":"FF9DDB"}' stroke-width='4' stroke-dasharray='16%2c 16' stroke-dashoffset='4' stroke-linecap='round'/%3e%3c/svg%3e");
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  padding-top: 20%;
  z-index: 1;
  overflow: hidden;
  * {
    text-align: center;
    z-index: 1;
  }
  cursor: pointer;
`,y=i.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background: ${e=>e.reject?"#f3ba2e":e.accept?"#32cd32":"#FF9DDB"};
  z-index: 0;
  top: 70%;
  transform: rotate(-10deg);
  transition: background 300ms ease-in-out;
`,k=i(l)`
  width: ${e=>"vertical"===e.orientation?"25px":"100%"};
  height: ${e=>"vertical"===e.orientation?"100%":"25px"};
`,$=i.h4`
  margin: 0;
  margin-bottom: 8px;
  color: white;
  margin-left: ${e=>"vertical"===e.orientation?"-4px":"0px"};
`,j=(e,t)=>c.createElement("div",{style:{height:"vertical"===e.orientation?"100%":"auto"}},c.createElement($,o({},e),e.label),c.createElement(k,o({},e))),F=i.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  outline: none;
  border: 1px solid white;
`,R=(e,t)=>c.createElement(F,o({},e)),I=i.div`
  top: 0;
  bottom: 0;
  background: ${e=>2===e.index?"#f00":1===e.index?"#ddd":"#1fa1f1"};
  border-radius: 25px;
  width: ${e=>"vertical"===e.orientation?"100%":"auto"};
`,S=(e,t)=>c.createElement(I,o(o({},e),{index:t.index?t.index:e.index})),M=i.button`
  min-height: 32px;
  outline: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${e=>e.leftIcon?8:12}px;
  padding-right: ${e=>e.rightIcon?8:12}px;
  font-family: ${e=>e.outlined?"inherit":'"Exo 2"'};
  font-weight: ${e=>e.outlined?700:900};
  background: ${e=>e.outlined?"transparent":"linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)"};
  border: ${e=>e.outlined?"2px solid white":"none"};
  color: ${e=>(e.outlined,"white")};
  font-size: 18px;
  transition: all 300ms ease-in-out;
  margin-left: 4px;
  margin-right: 4px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: ${e=>e.disabled?.25:e.outlined?.7:1};
  &:hover {
    cursor: ${e=>e.disabled?"default":"pointer"};
    background: ${e=>e.outlined?e.disabled?"transparent":"linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)":(e.disabled,"linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)")};
    color: white;
    opacity: ${e=>e.disabled?.25:1};
  }
  &:active {
     background: ${e=>"linear-gradient(90deg, rgb(210, 166, 210) 0%, rgb(45, 197, 215) 100%)"};
  }
`,D=e=>{const{leftIcon:t,rightIcon:n,children:r,outlined:a=!1,disabled:i=!1}=e;return c.createElement(M,o({leftIcon:t,rightIcon:n,outlined:a,disabled:i},e),t,r,n)},L=i.div`
  width: 100%;
  height: 100%;
  background-image: url("https://cdn.glitch.com/ec76fcf1-8987-412f-8a9a-e1b59470b0cb%2F21a1c069-9b26-4eab-8b5c-843c0a9b616d_BgRepeat.svg?v=1620655750781);
  background-repeat: repeat;
  overflow: hidden;
  border-radius: 16px;
`,C=({file:e,setFile:t})=>{const[n,r]=c.useState(5),[a,o]=c.useState(!1),[i,l]=c.useState(!1);return c.createElement(L,null,e&&c.createElement(c.Fragment,null,c.createElement("div",{style:{width:"100%",paddingTop:"100%",position:"relative"}},c.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,padding:16}},c.createElement("div",{id:"to-generate",style:{background:"transparent",width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box",background:"#FF9DDB",overflow:"hidden"}},c.createElement("img",{src:e.preview,style:{display:"block",width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%",clipPath:"circle("+(50-n)+"% at 50% 50%)"}})))),c.createElement("div",{style:{width:"100%",padding:16,backgroundColor:"rgba(0,0,0,.4)",position:"absolute",bottom:0,display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},!d&&c.createElement(D,{outlined:!0,onClick:()=>t(null)},"Reset"),c.createElement("div",{style:{position:"relative",bottom:0,flexGrow:1,minWidth:300,marginLeft:8,marginRight:8,transition:"opacity 300ms ease-in-out",cursor:"pointer",opacity:a||d?1:.5},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},c.createElement(j,{min:0,max:50,defaultValue:n,renderTrack:S,renderThumb:R,onChange:e=>r(e)})),!d&&c.createElement(D,{disabled:i,onClick:()=>{if(!i){l(!0);const e=document.getElementById("generator-canvas"),t=document.getElementById("to-generate").cloneNode(!0);e.innerHTML="",e.appendChild(t),s(t).then((function(e){let t=document.createElement("a");t.download="vaderified.png",t.href=e,t.click(),l(!1)}))}}},"Generate"))))},O=()=>{const[e,t]=c.useState(null),[n,r]=c.useState(!1),{getRootProps:a,getInputProps:i,isDragReject:l,isDragAccept:s}=p({maxFiles:1,maxSize:52428800,multiple:!1,accept:"image/jpeg, image/png, image/jpg",onDrop:e=>{if(e&&void 0!==e&&e.length>0){r(!0);let n=e[0];t(Object.assign(n,{preview:URL.createObjectURL(n)}))}}});return c.useEffect((()=>{e&&r(!1)}),[e]),c.createElement(m,{tiltAngleXInitial:0,tiltAngleYInitial:0,tiltEnable:!0,gyroscope:!0,tiltMaxAngleX:e?0:5,tiltMaxAngleY:e?0:5},c.createElement(E,null,!e&&c.createElement(v,o(o({},a()),{reject:l,accept:s}),c.createElement("input",o({},i())),c.createElement(w,{reject:l,accept:s},l?"Invalid file":"Drop an image here"),c.createElement("p",{style:{opacity:.7}},c.createElement("em",null,"Only *.jpeg and *.png images less than 5MB")),d&&c.createElement("div",{style:{position:"absolute",width:"100%",background:"#f3ba2e",bottom:"20%",display:"flex",padding:"24px 16px",color:"#222",fontSize:20}},c.createElement("strong",null,"Note: Image downloading is not reliable on mobile. Either use a desktop browser, or take a screenshot after editing")),n&&c.createElement("p",null,"Uploading..."),c.createElement(y,{reject:l,accept:s})),e&&c.createElement(C,{file:e,setFile:t})))};var z=()=>c.createElement(g,null,c.createElement(u,{path:"/",component:O}));const B=()=>window.location.hash.replace("#","")||"/",A=()=>{const[e,t]=c.useState(B());c.useEffect((()=>{const e=()=>t(B());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]);return[e,c.useCallback((e=>window.location.hash=e),[])]};var P="Vaderify Me!",U="Create your Vader Protocol avatar.",_="https://cdn.glitch.com/ec76fcf1-8987-412f-8a9a-e1b59470b0cb%2F21a1c069-9b26-4eab-8b5c-843c0a9b616d_Screen%20Shot%202021-05-08%20at%204.27.36%20PM.png?v=1620655748749";const T=()=>{const e=window.location.hostname;return c.createElement(h,null,c.createElement("title",null,P),c.createElement("meta",{name:"description",content:U}),c.createElement("meta",{name:"robots",content:"index,follow"}),c.createElement("link",{rel:"canonical",href:e}),c.createElement("meta",{property:"og:title",content:P}),c.createElement("meta",{property:"og:type",content:"article"}),c.createElement("meta",{property:"og:url",content:e}),c.createElement("meta",{property:"og:description",content:U}),c.createElement("meta",{property:"og:image",content:_}),c.createElement("meta",{name:"twitter:card",content:"summary"}))};function N(){return c.createElement(b,{hook:A},c.createElement(T,null),c.createElement("main",{role:"main",className:"wrapper"},c.createElement("div",{className:"content"},c.createElement(z,null),c.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:16,opacity:.4}},"Forked Glitch App by ",c.createElement("a",{href:"https://twitter.com/euthenics",target:"_blank"},"@euthenics"),c.createElement("br",null),c.createElement("span",{style:{fontSize:12,opacity:.5}},"⚡️ ETH: 0x581A91df7Fb87CD1a1D0B05D47ce1a2821bC2AC4")))))}f.render(c.createElement(c.StrictMode,null,c.createElement(x,null,c.createElement(N,null))),document.getElementById("root"));
