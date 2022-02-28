var _=Object.defineProperty,G=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var C=(e,n,r)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))q.call(n,r)&&C(e,r,n[r]);if(y)for(var r of y(n))$.call(n,r)&&C(e,r,n[r]);return e},b=(e,n)=>G(e,J(n));var P=(e,n)=>{var r={};for(var a in e)q.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&y)for(var a of y(e))n.indexOf(a)<0&&$.call(e,a)&&(r[a]=e[a]);return r};import{j as R,R as A,r as m,a as w,p as V,s as c,I as W,P as Y,b as k,n as v,C as Q,T as D,h as X,d as S,c as Z,e as ee,f as te,G as ne}from"./vendor.eff736f2.js";const re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};re();const t=R.exports.jsx,l=R.exports.jsxs,ae=R.exports.Fragment,O={request:{},response:{},error:null,isLoading:!1},j=A.createContext([f({},O),()=>{}]),oe=e=>{const[n,r]=m.exports.useState(f({},O));return t(j.Provider,{value:[n,r],children:e.children})};w.interceptors.request.use(e=>(e.customData=e.customData||{},e.customData.startTime=new Date().getTime(),e));w.interceptors.response.use(L,e=>(console.log("INTERCEPTOR ERROR",e),Promise.reject(L(e.response))));function L(e){return e.customData=e.customData||{},e.customData.time=new Date().getTime()-e.config.customData.startTime,e}function g(){const[e,n]=m.exports.useContext(j);console.log("live changes to state!",e);const r=(s,d)=>{n(p=>b(f({},p),{[s]:d}))},a=(s,d)=>{r("request",b(f({},e.request),{[s]:d}))},o=()=>{console.log(`Attempting to make ${e.request.method} request to ${e.request.url}`),r("isLoading",!0),r("error",null),w(e.request).catch(s=>(r("isLoading",!1),s)).then(s=>{r("response",b(f({},s),{time:s.customData.time,size:V(JSON.stringify(s.data).length+JSON.stringify(s.headers).length)})),r("isLoading",!1)})},i=()=>console.log("Attempting to cancel request");return{request:e.request,response:e.response,error:e.error,isLoading:e.isLoading,setRequestElement:a,sendRequest:o,cancelRequest:i}}function se({onSendRequest:e,isLoading:n}){const r=m.exports.useRef(),a=m.exports.useRef();return l(ie,{onSubmit:i=>{i.preventDefault(),e({method:r.current.value,url:a.current.value})},children:[l("select",{ref:r,children:[t("option",{value:"get",children:"GET"}),t("option",{value:"post",children:"POST"}),t("option",{value:"put",children:"PUT"}),t("option",{value:"patch",children:"PATCH"}),t("option",{value:"delete",children:"DELETE"})]}),t(W,{ref:a,type:"url",placeholder:"Enter request URL"}),t(Y,{color:"pink",type:"submit",modifiers:"small",loading:n,children:"Send"})]})}const ie=c.form`
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
`;function T({icon:e,subtitle:n,text:r}){return l(le,{children:[e&&t(k,{icon:e,size:110}),n&&t("h4",{className:"subtitle",children:n}),r&&t("p",{children:r})]})}const le=c.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 15% auto;
  opacity: 50%;
`,de={key:"",value:"",isSelected:!0};function I({tableKey:e,onTableChange:n,buttonText:r,noDataMessage:a}){const[o,i]=m.exports.useState([]),s=u=>{i(u),n(B(u))},d=(u,h)=>{const{name:x,value:K,checked:F,type:U}=u.target;let N=[...o];N[h][x]=U==="checkbox"?F:K,s(N)},p=()=>{const u=[...o];u.push(f({},de)),s(u)},H=u=>{const h=[...o];h.splice(u,1),s(h),n(B(h))};return l(ae,{children:[o.length===0?a:l(ce,{children:[t("thead",{children:l("tr",{children:[t("th",{}),t("th",{children:"KEY"}),t("th",{children:"VALUE"}),t("th",{})]})}),t("tbody",{children:o.map((u,h)=>l("tr",{children:[t("td",{children:t(Q,{name:"isSelected",checked:u.isSelected,onChange:x=>d(x,h)})}),t("td",{children:t("input",{name:"key",placeholder:"key",value:u.key,onChange:x=>d(x,h)})}),t("td",{children:t("input",{name:"value",placeholder:"value",value:u.value,onChange:x=>d(x,h)})}),t("td",{onClick:()=>H(h),children:t(k,{icon:"trash",weight:"bold"})})]},`${e}-table-row-${h}`))})]}),t("center",{children:t(D,{modifiers:"small",onClick:p,children:r})})]})}const B=e=>e.reduce((n,r)=>r.isSelected===!0?b(f({},n),{[r.key]:r.value}):n,{}),ce=c.table`
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
    border: 1px solid ${v[500]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 20px;
  }
`;function ue(){const{setRequestElement:e}=g();return l(pe,{children:[t("p",{className:"heading",children:"Query Params"}),t(I,{tableKey:"request-params",buttonText:"Add a param",onTableChange:n=>e("params",n),noDataMessage:t(T,{icon:"circle-wavy-question"})})]})}const pe=c.div`
  .heading {
    font-weight: bold;
  }
`;function he(){const{setRequestElement:e}=g();return l(me,{children:[t("p",{className:"heading",children:"Headers"}),t(I,{tableKey:"request-headers",buttonText:"Add a header",onTableChange:n=>e("headers",n),noDataMessage:t(T,{icon:"align-top-simple"})})]})}const me=c.div`
  .heading {
    font-weight: bold;
  }
`;function M(e){const n=m.exports.useRef(null),r=a=>{a&&!n.current&&(n.current=new X({target:a,props:e}))};return m.exports.useEffect(()=>{n.current&&n.current.updateProps(e)},[e]),m.exports.useEffect(()=>()=>{n.current&&(n.current.destroy(),n.current=null)},[]),t(fe,{ref:r})}const fe=c.div`
  height: 100%;
  width: 100%;
`;function ge(){const{request:e,setRequestElement:n}=g();return t(M,{content:e.data||{},mainMenuBar:!1,navigationBar:!1,mode:"code",onChange:r=>n("data",r)})}function E({isPrimary:e,tabs:n,areas:r,selectedIndex:a,metadata:o}){const[i,s]=m.exports.useState(0);return m.exports.useEffect(()=>{a&&a!==null&&s(a)},[a]),l(xe,{isPrimary:e,children:[t("div",{className:"tabs",children:n.map((d,p)=>t(be,{text:d,isPrimary:e,"data-selected":i===p,onClick:()=>s(p)},`primary-tab-${p}`))}),o?t("div",{className:"metadata",children:o}):null,t("div",{className:"areas",children:r.map((d,p)=>t("div",{"data-selected":i===p,children:d},`primary-area-${p}`))})]})}const xe=c.div`
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
`;function be(a){var o=a,{isPrimary:e,text:n}=o,r=P(o,["isPrimary","text"]);return e?t(ye,b(f({className:"subtitle"},r),{children:n})):t(ve,b(f({},r),{children:n}))}const ye=c.h5`
  text-align: center;
  padding: 8px 0;
  width: 100px;
  opacity: 80%;
  margin: 0;
  &[data-selected='true'] {
    border-bottom: 2px solid ${S.textColor};
    opacity: 100%;
  }
`,ve=c.p`
  padding: 3px 0;
  opacity: 65%;
  margin: 0;
  font-weight: bold;
  &[data-selected='true'] {
    color: ${S.primaryColor};
    border-bottom: 2px solid ${S.primaryColor};
    opacity: 100%;
  }
`;function Se(){const{request:{params:e,headers:n}}=g(),r=Object.keys(e||{}).length,a=Object.keys(n||{}).length;return t(E,{tabs:[`Params (${r})`,`Headers (${a})`,"Body"],areas:[t(ue,{}),t(he,{}),t(ge,{})]})}function Re({error:e,isLoading:n,cancelRequest:r}){const a=e?"warning-circle":"butterfly",o=e?e.message:n?"Sending request ...":"Enter a URL and click send to get a response";return l(we,{error:e!==null,isLoading:n,children:[t("h4",{className:"subtitle",children:o}),n?t(D,{onClick:r,children:"Cancel"}):t(k,{icon:a,size:110})]})}const we=c.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 30% auto;

  ${({error:e})=>e?`color: ${Z[200]};`:""}
  ${({isLoading:e,error:n})=>!e&&!n?"opacity: 50%;":""}
`;function z({tableKey:e,data:n}){return t("div",{children:l(ke,{children:[t("thead",{children:l("tr",{children:[t("th",{children:"KEY"}),t("th",{children:"VALUE"})]})}),t("tbody",{children:n&&Object.keys(n).map((r,a)=>l("tr",{children:[t("td",{children:r}),t("td",{children:n[r]})]},`${e}-table-item-${a}`))})]})})}const ke=c.table`
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
    border: 1px solid ${v[500]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 20px;
  }
`;function Te(){const{response:{headers:e}}=g();return t(z,{tableKey:"response-headers",data:e})}function Ee(){const{response:{cookies:e}}=g();return e?t(z,{tableKey:"response-cookies",data:e}):t(T,{icon:"cookie",subtitle:"No cookies yet",text:"Find all your cookies and their associated domains here."})}function Ne(){const{response:e}=g();return t(qe,{children:t(M,{content:{json:e.data||{}},readOnly:!0,mainMenuBar:!1,navigationBar:!1,mode:"code"})})}const qe=c.div`
  height: 300px;
`;function $e(){const{response:e,error:n,isLoading:r,cancelRequest:a}=g();if(Object.keys(e||{}).length===0)return t(Re,{error:n,isLoading:r,cancelRequest:a});const{status:o,headers:i,time:s,size:d}=e,p=Object.keys(i||{}).length;return t(E,{tabs:["Body","Cookies",`Headers (${p})`],metadata:t(Ce,{status:o,time:s,size:d}),areas:[t(Ne,{}),t(Ee,{}),t(Te,{})]})}function Ce({status:e,time:n,size:r}){return l(Pe,{children:[l("div",{children:["Status: ",t("span",{className:"data",children:e||"-"})]}),l("div",{children:["Time: ",t("span",{className:"data",children:n?`${n} ms`:"-"})]}),l("div",{children:["Size: ",t("span",{className:"data",children:r||"-"})]})]})}const Pe=c.div`
  display: flex;
  gap: 13px;
  font-weight: bold;
  & > *:not(:last-child) {
    border-right: 1px solid ${v[400]};
    padding-right: 13px;
  }
  .data {
    color: ${ee[300]};
  }
`,Ae=({children:e})=>l(De,{children:[l("header",{children:[t("h2",{className:"logo",children:"Postgirl"}),t("img",{className:"profile",src:"/images/icons/iconx48.png",alt:"Foto de perfil"})]}),t("main",{children:e})]}),De=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: ${v[700]};

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
      ${S.backgroundColor} 69.08%,
      rgba(250, 250, 250, 0) 88.67%
    );
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;function Oe(){const[e,n]=m.exports.useState(null),{sendRequest:r,setRequestElement:a,isLoading:o}=g();return l(Ae,{children:[t(se,{onSendRequest:({method:s,url:d})=>{console.log("METHOD",s),a("method",s),a("url",d),r(),n(1)},isLoading:o}),t(E,{isPrimary:!0,tabs:["Details","Response"],areas:[t(Se,{}),t($e,{})],selectedIndex:e})]})}te.render(l(A.StrictMode,{children:[t(ne,{}),t(oe,{children:t(Oe,{})})]}),document.getElementById("root"));
