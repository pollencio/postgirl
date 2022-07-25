var Q=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&L(e,r,t[r]);if(y)for(var r of y(t))q.call(t,r)&&L(e,r,t[r]);return e},x=(e,t)=>F(e,G(t));var D=(e,t)=>{var r={};for(var o in e)T.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&y)for(var o of y(e))t.indexOf(o)<0&&q.call(e,o)&&(r[o]=e[o]);return r};import{j as v,R as C,r as g,a as k,p as Y,s as d,I as Z,P as J,b as S,n as A,C as $,T as O,h as _,d as w,c as ee,e as te,f as ne,G as re}from"./vendor.864f5248.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};oe();const ae=Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const r=`${{}.PUBLIC_URL}/service-worker.js`;ae?(ie(r,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):P(r,e)})}}function P(e,t){navigator.serviceWorker.register(e).then(r=>{r.onupdatefound=()=>{const o=r.installing;o!=null&&(o.onstatechange=()=>{o.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(r)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(r)))})}}).catch(r=>{console.error("Error during service worker registration:",r)})}function ie(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(r=>{const o=r.headers.get("content-type");r.status===404||o!=null&&o.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(a=>{a.unregister().then(()=>{window.location.reload()})}):P(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const n=v.exports.jsx,l=v.exports.jsxs,le=v.exports.Fragment,B={request:{},response:{},error:null,isLoading:!1},M=C.createContext([f({},B),()=>{}]),ce=e=>{const[t,r]=g.exports.useState(f({},B));return n(M.Provider,{value:[t,r],children:e.children})};k.interceptors.request.use(e=>(e.customData=e.customData||{},e.customData.startTime=new Date().getTime(),e));k.interceptors.response.use(V,e=>(console.log("INTERCEPTOR ERROR",e),Promise.reject(V(e.response))));function V(e){return e.customData=e.customData||{},e.customData.time=new Date().getTime()-e.config.customData.startTime,e}function m(){const[e,t]=g.exports.useContext(M);console.log("live changes to state!",e);const r=(s,c)=>{t(p=>x(f({},p),{[s]:c}))},o=(s,c)=>{r("request",x(f({},e.request),{[s]:c}))},a=()=>{console.log(`Attempting to make ${e.request.method} request to ${e.request.url}`),r("isLoading",!0),r("error",null),k(e.request).catch(s=>(r("isLoading",!1),s)).then(s=>{r("response",x(f({},s),{time:s.customData.time,size:Y(JSON.stringify(s.data).length+JSON.stringify(s.headers).length)})),r("isLoading",!1)})},i=()=>console.log("Attempting to cancel request");return{request:e.request,response:e.response,error:e.error,isLoading:e.isLoading,setRequestElement:o,sendRequest:a,cancelRequest:i}}function de({onSendRequest:e,isLoading:t}){const r=g.exports.useRef(),o=g.exports.useRef();return l(ue,{onSubmit:i=>{i.preventDefault(),e({method:r.current.value,url:o.current.value})},children:[l("select",{ref:r,children:[n("option",{value:"get",children:"GET"}),n("option",{value:"post",children:"POST"}),n("option",{value:"put",children:"PUT"}),n("option",{value:"patch",children:"PATCH"}),n("option",{value:"delete",children:"DELETE"})]}),n(Z,{ref:o,type:"url",placeholder:"Enter request URL"}),n(J,{color:"pink",type:"submit",modifiers:"small",loading:t,children:"Send"})]})}const ue=d.form`
  position: relative;
  display: flex;
  margin-bottom: 25px;
  button {
    position: absolute;
    right: 5px;
    top: 6px;
  }
  select {
    font-family: NunitoSans, Verdana;
    font-size: 1rem;
    background-color: #ffffff;
    color: #333333;
    padding: 9px 5px 9px 10px;
    border-radius: 30px 0 0 30px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    -webkit-transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    &:focus {
      outline: none;
      box-shadow: 2px 2px 15px rgb(68 140 255 / 30%);
      border-color: #8dd6ff;
    }
  }
  label {
    flex-grow: 2;
  }
  input {
    border-radius: 0 30px 30px 0;
    padding-left: 10px;
    padding-right: 75px;
    width: 100%;
  }
`;function N({icon:e,subtitle:t,text:r}){return l(pe,{children:[e&&n(S,{icon:e,size:110}),t&&n("h4",{className:"subtitle",children:t}),r&&n("p",{children:r})]})}const pe=d.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 15% auto;
  opacity: 50%;
`,he={key:"",value:"",isSelected:!0};function H({tableKey:e,onTableChange:t,buttonText:r,noDataMessage:o}){const[a,i]=g.exports.useState([]),s=u=>{i(u),t(j(u))},c=(u,h)=>{const{name:b,value:X,checked:W,type:z}=u.target;let E=[...a];E[h][b]=z==="checkbox"?W:X,s(E)},p=()=>{const u=[...a];u.push(f({},he)),s(u)},U=u=>{const h=[...a];h.splice(u,1),s(h),t(j(h))};return l(le,{children:[a.length===0?o:l(ge,{children:[n("thead",{children:l("tr",{children:[n("th",{}),n("th",{children:"KEY"}),n("th",{children:"VALUE"}),n("th",{})]})}),n("tbody",{children:a.map((u,h)=>l("tr",{children:[n("td",{children:n($,{name:"isSelected",checked:u.isSelected,onChange:b=>c(b,h)})}),n("td",{children:n("input",{name:"key",placeholder:"key",value:u.key,onChange:b=>c(b,h)})}),n("td",{children:n("input",{name:"value",placeholder:"value",value:u.value,onChange:b=>c(b,h)})}),n("td",{onClick:()=>U(h),children:n(S,{icon:"trash",weight:"bold"})})]},`${e}-table-row-${h}`))})]}),n("center",{children:n(O,{modifiers:"small",onClick:p,children:r})})]})}const j=e=>e.reduce((t,r)=>r.isSelected===!0?x(f({},t),{[r.key]:r.value}):t,{}),ge=d.table`
  border-collapse: collapse;
  margin-bottom: 30px;
  width: 100%;

  tr {
    height: 40px;
  }

  th:first-child,
  td:first-child {
    padding: 7px;
  }
  th:last-child,
  td:last-child {
    border: none;
    min-width: 20px;
  }
  th,
  td {
    border: 1px solid ${A[500]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 20px;
  }
`;function fe(){const{setRequestElement:e}=m();return l(me,{children:[n("p",{className:"heading",children:"Query Params"}),n(H,{tableKey:"request-params",buttonText:"Add a param",onTableChange:t=>e("params",t),noDataMessage:n(N,{icon:"circle-wavy-question"})})]})}const me=d.div`
  .heading {
    font-weight: bold;
  }
`;function be(){const{setRequestElement:e}=m();return l(xe,{children:[n("p",{className:"heading",children:"Headers"}),n(H,{tableKey:"request-headers",buttonText:"Add a header",onTableChange:t=>e("headers",t),noDataMessage:n(N,{icon:"align-top-simple"})})]})}const xe=d.div`
  .heading {
    font-weight: bold;
  }
`;function I(e){const t=g.exports.useRef(null),r=o=>{o&&!t.current&&(t.current=new _({target:o,props:e}))};return g.exports.useEffect(()=>{t.current&&t.current.updateProps(e)},[e]),g.exports.useEffect(()=>()=>{t.current&&(t.current.destroy(),t.current=null)},[]),n(ye,{ref:r})}const ye=d.div`
  height: 100%;
  width: 100%;
`;function Ae(){const{request:e,setRequestElement:t}=m();return n(I,{content:e.data||{},mainMenuBar:!1,navigationBar:!1,mode:"code",onChange:r=>t("data",r)})}function R({isPrimary:e,tabs:t,areas:r,selectedIndex:o,metadata:a}){const[i,s]=g.exports.useState(0);return g.exports.useEffect(()=>{o&&o!==null&&s(o)},[o]),l(we,{isPrimary:e,children:[n("div",{className:"tabs",children:t.map((c,p)=>n(ve,{text:c,isPrimary:e,"data-selected":i===p,onClick:()=>s(p)},`primary-tab-${p}`))}),a?n("div",{className:"metadata",children:a}):null,n("div",{className:"areas",children:r.map((c,p)=>n("div",{"data-selected":i===p,children:c},`primary-area-${p}`))})]})}const we=d.div`
  .tabs {
    display: flex;
    gap: 17px;
    ${e=>e.isPrimary===!0?`
        justify-content: center;
        margin-bottom: 20px;
        `:`
        justify-content: left;
        margin-bottom: 30px;
      `}
  }
  .metadata {
    margin-bottom: 13px;
  }
  .areas > * {
    display: none;
    &[data-selected='true'] {
      display: block;
    }
  }
`;function ve(o){var a=o,{isPrimary:e,text:t}=a,r=D(a,["isPrimary","text"]);return e?n(ke,x(f({className:"subtitle"},r),{children:t})):n(Se,x(f({},r),{children:t}))}const ke=d.h5`
  text-align: center;
  padding: 8px 0;
  width: 100px;
  opacity: 80%;
  margin: 0;
  &[data-selected='true'] {
    border-bottom: 2px solid ${w.textColor};
    opacity: 100%;
  }
`,Se=d.p`
  padding: 3px 0;
  opacity: 65%;
  margin: 0;
  font-weight: bold;
  &[data-selected='true'] {
    color: ${w.primaryColor};
    border-bottom: 2px solid ${w.primaryColor};
    opacity: 100%;
  }
`;function Ne(){const{request:{params:e,headers:t}}=m(),r=Object.keys(e||{}).length,o=Object.keys(t||{}).length;return n(R,{tabs:[`Params (${r})`,`Headers (${o})`,"Body"],areas:[n(fe,{}),n(be,{}),n(Ae,{})]})}function Re({error:e,isLoading:t,cancelRequest:r}){const o=e?"warning-circle":"butterfly",a=e?e.message:t?"Sending request ...":"Enter a URL and click send to get a response";return l(Ee,{error:e!==null,isLoading:t,children:[n("h4",{className:"subtitle",children:a}),t?n(O,{onClick:r,children:"Cancel"}):n(S,{icon:o,size:110})]})}const Ee=d.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 30% auto;

  ${({error:e})=>e?`color: ${ee[200]};`:""}
  ${({isLoading:e,error:t})=>!e&&!t?"opacity: 50%;":""}
`;function K({tableKey:e,data:t}){return n("div",{children:l(Te,{children:[n("thead",{children:l("tr",{children:[n("th",{children:"KEY"}),n("th",{children:"VALUE"})]})}),n("tbody",{children:t&&Object.keys(t).map((r,o)=>l("tr",{children:[n("td",{children:r}),n("td",{children:t[r]})]},`${e}-table-item-${o}`))})]})})}const Te=d.table`
  border-collapse: collapse;
  margin-bottom: 30px;
  width: 100%;

  tr {
    height: 40px;
  }

  th:first-child,
  td:first-child {
    padding: 7px;
  }
  th,
  td {
    border: 1px solid ${A[500]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 20px;
  }
`;function qe(){const{response:{headers:e}}=m();return n(K,{tableKey:"response-headers",data:e})}function Le(){const{response:{cookies:e}}=m();return e?n(K,{tableKey:"response-cookies",data:e}):n(N,{icon:"cookie",subtitle:"No cookies yet",text:"Find all your cookies and their associated domains here."})}function De(){const{response:e}=m();return n(Ce,{children:n(I,{content:{json:e.data||{}},readOnly:!0,mainMenuBar:!1,navigationBar:!1,mode:"code"})})}const Ce=d.div`
  height: 300px;
`;function Oe(){const{response:e,error:t,isLoading:r,cancelRequest:o}=m();if(Object.keys(e||{}).length===0)return n(Re,{error:t,isLoading:r,cancelRequest:o});const{status:a,headers:i,time:s,size:c}=e,p=Object.keys(i||{}).length;return n(R,{tabs:["Body","Cookies",`Headers (${p})`],metadata:n(Pe,{status:a,time:s,size:c}),areas:[n(De,{}),n(Le,{}),n(qe,{})]})}function Pe({status:e,time:t,size:r}){return l(Be,{children:[l("div",{children:["Status: ",n("span",{className:"data",children:e||"-"})]}),l("div",{children:["Time: ",n("span",{className:"data",children:t?`${t} ms`:"-"})]}),l("div",{children:["Size: ",n("span",{className:"data",children:r||"-"})]})]})}const Be=d.div`
  display: flex;
  gap: 13px;
  font-weight: bold;
  & > *:not(:last-child) {
    border-right: 1px solid ${A[400]};
    padding-right: 13px;
  }
  .data {
    color: ${te[300]};
  }
`;var Me="data:image/png;base64,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";const Ve=({children:e})=>l(He,{children:[l("header",{children:[n("h2",{className:"logo",children:"Postgirl"}),n("img",{className:"profile",src:Me,alt:"Foto de perfil"})]}),n("main",{children:e})]}),He=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: ${A[700]};

  & > header {
    width: 100%;
    padding: 10px 24px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafade;
    z-index: 2;
    .logo {
      margin: 0;
    }
    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #9c9c9c;
    }
  }

  & > main {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 20px 24px;
    margin: 60px 0 70px 0;
    max-width: 500px;
  }

  & > nav {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 28px 0 6px 0;
    width: 100%;
    background: linear-gradient(
      360deg,
      ${w.backgroundColor} 69.08%,
      rgba(250, 250, 250, 0) 88.67%
    );
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;function je(){const[e,t]=g.exports.useState(null),{sendRequest:r,setRequestElement:o,isLoading:a}=m();return l(Ve,{children:[n(de,{onSendRequest:({method:s,url:c})=>{console.log("METHOD",s),o("method",s),o("url",c),r(),t(1)},isLoading:a}),n(R,{isPrimary:!0,tabs:["Details","Response"],areas:[n(Ne,{}),n(Oe,{})],selectedIndex:e})]})}ne.render(l(C.StrictMode,{children:[n(re,{}),n(ce,{children:n(je,{})})]}),document.getElementById("root"));se();
