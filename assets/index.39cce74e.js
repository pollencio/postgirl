import{j as a,r as d,R as p,a as u}from"./vendor.668be2c0.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};f();var h="/postgirl/assets/iconx192.a25c0e5e.png";const t=a.exports.jsx,n=a.exports.jsxs;function m(){const[c,o]=d.exports.useState(0);return t("div",{className:"App",children:n("header",{className:"App-header",children:[t("img",{src:h,className:"App-logo",alt:"logo"}),t("p",{children:"Postgirl"}),t("p",{children:n("button",{type:"button",onClick:()=>o(s=>s+1),children:["count is: ",c]})}),n("p",{children:["Edit ",t("code",{children:"App.jsx"})," and save to test HMR updates."]}),n("p",{children:[t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})}p.render(t(u.StrictMode,{children:t(m,{})}),document.getElementById("root"));
