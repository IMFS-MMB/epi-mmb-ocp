var Nt=Object.defineProperty,Jt=Object.defineProperties;var Ut=Object.getOwnPropertyDescriptors;var gt=Object.getOwnPropertySymbols;var Gt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var jt=(o,s,e)=>s in o?Nt(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,B=(o,s)=>{for(var e in s||(s={}))Gt.call(s,e)&&jt(o,e,s[e]);if(gt)for(var e of gt(s))qt.call(s,e)&&jt(o,e,s[e]);return o},N=(o,s)=>Jt(o,Ut(s));import{r as g,c as y,a as Xt,w as zt,s as bt,d as T,o as a,b as f,t as E,e as L,f as _,g as r,h as i,u as n,i as Yt,k as Wt,j as X,v as Qt,l as C,m as A,n as Q,F as w,L as Zt,p as te,q as F,x as J,y as P,z as Ot,A as K,B as $t,C as ee,D as se,E as Ct,G as oe,H as ie,I as ne,J as le,K as st,T as Y,M as re,N as q,O as Lt,P as xt,Q as wt,R as ot,S as it,U as nt,V as lt,W as ue,X as ae,Y as _e,Z as ce,_ as pe,$ as de,a0 as fe,a1 as me}from"./vendor.70030db6.js";const Ie=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=e(u);fetch(u.href,d)}};Ie();const he="https://www.epi-mmb.com/",ve=async()=>(await fetch(he+"ocp-data")).json(),Ee="modulepreload",Tt={},ge="/",t=function(s,e){return!e||e.length===0?s():Promise.all(e.map(l=>{if(l=`${ge}${l}`,l in Tt)return;Tt[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Ee,u||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),u)return new Promise((m,v)=>{c.addEventListener("load",m),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>s())},At={"../results/AAL_20-High Initial Infections.output.json":()=>t(()=>import("./AAL_20-High Initial Infections.output.ec97770b.js"),[]),"../results/AAL_20-Low Initial Infections.output.json":()=>t(()=>import("./AAL_20-Low Initial Infections.output.9f890dce.js"),[]),"../results/AAL_20-Medium Initial Infections.output.json":()=>t(()=>import("./AAL_20-Medium Initial Infections.output.19665eee.js"),[]),"../results/AAL_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./AAL_20-Model-specific Initial Infections.output.3abdca74.js"),[]),"../results/ACS_21-High Initial Infections.output.json":()=>t(()=>import("./ACS_21-High Initial Infections.output.b66aa39e.js"),[]),"../results/ACS_21-Low Initial Infections.output.json":()=>t(()=>import("./ACS_21-Low Initial Infections.output.17e96e34.js"),[]),"../results/ACS_21-Medium Initial Infections.output.json":()=>t(()=>import("./ACS_21-Medium Initial Infections.output.ce9c1751.js"),[]),"../results/ACS_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./ACS_21-Model-specific Initial Infections.output.734669b6.js"),[]),"../results/AJRT_20-High Initial Infections.output.json":()=>t(()=>import("./AJRT_20-High Initial Infections.output.a96a75ba.js"),[]),"../results/AJRT_20-Low Initial Infections.output.json":()=>t(()=>import("./AJRT_20-Low Initial Infections.output.43f919bb.js"),[]),"../results/AJRT_20-Medium Initial Infections.output.json":()=>t(()=>import("./AJRT_20-Medium Initial Infections.output.68300b98.js"),[]),"../results/AJRT_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./AJRT_20-Model-specific Initial Infections.output.3c82b872.js"),[]),"../results/ALS_20-High Initial Infections.output.json":()=>t(()=>import("./ALS_20-High Initial Infections.output.55aa0c49.js"),[]),"../results/ALS_20-Low Initial Infections.output.json":()=>t(()=>import("./ALS_20-Low Initial Infections.output.8d5300d4.js"),[]),"../results/ALS_20-Medium Initial Infections.output.json":()=>t(()=>import("./ALS_20-Medium Initial Infections.output.e5a0d4c2.js"),[]),"../results/ALS_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./ALS_20-Model-specific Initial Infections.output.5062d81e.js"),[]),"../results/A_20-High Initial Infections.output.json":()=>t(()=>import("./A_20-High Initial Infections.output.672423db.js"),[]),"../results/A_20-Low Initial Infections.output.json":()=>t(()=>import("./A_20-Low Initial Infections.output.0d0d324f.js"),[]),"../results/A_20-Medium Initial Infections.output.json":()=>t(()=>import("./A_20-Medium Initial Infections.output.cd6e1685.js"),[]),"../results/A_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./A_20-Model-specific Initial Infections.output.d2c9841f.js"),[]),"../results/BCG_21-High Initial Infections.output.json":()=>t(()=>import("./BCG_21-High Initial Infections.output.9316d304.js"),[]),"../results/BCG_21-Low Initial Infections.output.json":()=>t(()=>import("./BCG_21-Low Initial Infections.output.89be344c.js"),[]),"../results/BCG_21-Medium Initial Infections.output.json":()=>t(()=>import("./BCG_21-Medium Initial Infections.output.6d71b1d7.js"),[]),"../results/BCG_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./BCG_21-Model-specific Initial Infections.output.e93c007d.js"),[]),"../results/BKST_21-High Initial Infections.output.json":()=>t(()=>import("./BKST_21-High Initial Infections.output.bd038ed0.js"),[]),"../results/BKST_21-Low Initial Infections.output.json":()=>t(()=>import("./BKST_21-Low Initial Infections.output.078607dc.js"),[]),"../results/BKST_21-Medium Initial Infections.output.json":()=>t(()=>import("./BKST_21-Medium Initial Infections.output.88a717b6.js"),[]),"../results/BKST_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./BKST_21-Model-specific Initial Infections.output.dc6660e8.js"),[]),"../results/CDL_21-High Initial Infections.output.json":()=>t(()=>import("./CDL_21-High Initial Infections.output.291cae3f.js"),[]),"../results/CDL_21-Low Initial Infections.output.json":()=>t(()=>import("./CDL_21-Low Initial Infections.output.01d6bda4.js"),[]),"../results/CDL_21-Medium Initial Infections.output.json":()=>t(()=>import("./CDL_21-Medium Initial Infections.output.5543dd88.js"),[]),"../results/CDL_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./CDL_21-Model-specific Initial Infections.output.88fb9b0c.js"),[]),"../results/CF_20-High Initial Infections.output.json":()=>t(()=>import("./CF_20-High Initial Infections.output.71619d44.js"),[]),"../results/CF_20-Low Initial Infections.output.json":()=>t(()=>import("./CF_20-Low Initial Infections.output.a1258dbb.js"),[]),"../results/CF_20-Medium Initial Infections.output.json":()=>t(()=>import("./CF_20-Medium Initial Infections.output.053c557b.js"),[]),"../results/CF_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./CF_20-Model-specific Initial Infections.output.19ecd57f.js"),[]),"../results/ERT_21-High Initial Infections.output.json":()=>t(()=>import("./ERT_21-High Initial Infections.output.959291c8.js"),[]),"../results/ERT_21-Low Initial Infections.output.json":()=>t(()=>import("./ERT_21-Low Initial Infections.output.751db9f4.js"),[]),"../results/ERT_21-Medium Initial Infections.output.json":()=>t(()=>import("./ERT_21-Medium Initial Infections.output.5fa389e0.js"),[]),"../results/ERT_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./ERT_21-Model-specific Initial Infections.output.83494c0b.js"),[]),"../results/ERT_21_Epi-High Initial Infections.output.json":()=>t(()=>import("./ERT_21_Epi-High Initial Infections.output.e5e1637e.js"),[]),"../results/ERT_21_Epi-Low Initial Infections.output.json":()=>t(()=>import("./ERT_21_Epi-Low Initial Infections.output.6dfd8398.js"),[]),"../results/ERT_21_Epi-Medium Initial Infections.output.json":()=>t(()=>import("./ERT_21_Epi-Medium Initial Infections.output.eb2b7902.js"),[]),"../results/ERT_21_Epi-Model-specific Initial Infections.output.json":()=>t(()=>import("./ERT_21_Epi-Model-specific Initial Infections.output.a810862e.js"),[]),"../results/ERT_21_Ineq-High Initial Infections.output.json":()=>t(()=>import("./ERT_21_Ineq-High Initial Infections.output.7b747682.js"),[]),"../results/ERT_21_Ineq-Low Initial Infections.output.json":()=>t(()=>import("./ERT_21_Ineq-Low Initial Infections.output.b10946a8.js"),[]),"../results/ERT_21_Ineq-Medium Initial Infections.output.json":()=>t(()=>import("./ERT_21_Ineq-Medium Initial Infections.output.16b6bf37.js"),[]),"../results/ERT_21_Ineq-Model-specific Initial Infections.output.json":()=>t(()=>import("./ERT_21_Ineq-Model-specific Initial Infections.output.036e8991.js"),[]),"../results/ERT_21_NK-High Initial Infections.output.json":()=>t(()=>import("./ERT_21_NK-High Initial Infections.output.de01706b.js"),[]),"../results/ERT_21_NK-Low Initial Infections.output.json":()=>t(()=>import("./ERT_21_NK-Low Initial Infections.output.c52ece65.js"),[]),"../results/ERT_21_NK-Medium Initial Infections.output.json":()=>t(()=>import("./ERT_21_NK-Medium Initial Infections.output.92f889bf.js"),[]),"../results/ERT_21_NK-Model-specific Initial Infections.output.json":()=>t(()=>import("./ERT_21_NK-Model-specific Initial Infections.output.3ab46d97.js"),[]),"../results/ERT_21_Test-High Initial Infections.output.json":()=>t(()=>import("./ERT_21_Test-High Initial Infections.output.f86feff5.js"),[]),"../results/ERT_21_Test-Low Initial Infections.output.json":()=>t(()=>import("./ERT_21_Test-Low Initial Infections.output.7a81184e.js"),[]),"../results/ERT_21_Test-Medium Initial Infections.output.json":()=>t(()=>import("./ERT_21_Test-Medium Initial Infections.output.bfc54e8d.js"),[]),"../results/ERT_21_Test-Model-specific Initial Infections.output.json":()=>t(()=>import("./ERT_21_Test-Model-specific Initial Infections.output.f8cd6202.js"),[]),"../results/F_21-High Initial Infections.output.json":()=>t(()=>import("./F_21-High Initial Infections.output.bb95ce34.js"),[]),"../results/F_21-Low Initial Infections.output.json":()=>t(()=>import("./F_21-Low Initial Infections.output.65481400.js"),[]),"../results/F_21-Medium Initial Infections.output.json":()=>t(()=>import("./F_21-Medium Initial Infections.output.d1e2556e.js"),[]),"../results/F_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./F_21-Model-specific Initial Infections.output.351246f6.js"),[]),"../results/GP_20-High Initial Infections.output.json":()=>t(()=>import("./GP_20-High Initial Infections.output.8366f660.js"),[]),"../results/GP_20-Low Initial Infections.output.json":()=>t(()=>import("./GP_20-Low Initial Infections.output.3ca97fa9.js"),[]),"../results/GP_20-Medium Initial Infections.output.json":()=>t(()=>import("./GP_20-Medium Initial Infections.output.4aa8d3ce.js"),[]),"../results/GP_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./GP_20-Model-specific Initial Infections.output.eb055ec2.js"),[]),"../results/HHK_20-High Initial Infections.output.json":()=>t(()=>import("./HHK_20-High Initial Infections.output.3d099f27.js"),[]),"../results/HHK_20-Low Initial Infections.output.json":()=>t(()=>import("./HHK_20-Low Initial Infections.output.56814d28.js"),[]),"../results/HHK_20-Medium Initial Infections.output.json":()=>t(()=>import("./HHK_20-Medium Initial Infections.output.b241fd94.js"),[]),"../results/HHK_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./HHK_20-Model-specific Initial Infections.output.daebe845.js"),[]),"../results/HKK_20-High Initial Infections.output.json":()=>t(()=>import("./HKK_20-High Initial Infections.output.dbb47aed.js"),[]),"../results/HKK_20-Low Initial Infections.output.json":()=>t(()=>import("./HKK_20-Low Initial Infections.output.aad10373.js"),[]),"../results/HKK_20-Medium Initial Infections.output.json":()=>t(()=>import("./HKK_20-Medium Initial Infections.output.bbc03c2c.js"),[]),"../results/HKK_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./HKK_20-Model-specific Initial Infections.output.14ef9ab4.js"),[]),"../results/JPV_21-High Initial Infections.output.json":()=>t(()=>import("./JPV_21-High Initial Infections.output.aafa21c4.js"),[]),"../results/JPV_21-Low Initial Infections.output.json":()=>t(()=>import("./JPV_21-Low Initial Infections.output.48fbf9ed.js"),[]),"../results/JPV_21-Medium Initial Infections.output.json":()=>t(()=>import("./JPV_21-Medium Initial Infections.output.6a0daa5d.js"),[]),"../results/JPV_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./JPV_21-Model-specific Initial Infections.output.2896fe42.js"),[]),"../results/KUX_20-High Initial Infections.output.json":()=>t(()=>import("./KUX_20-High Initial Infections.output.6c0095e4.js"),[]),"../results/KUX_20-Low Initial Infections.output.json":()=>t(()=>import("./KUX_20-Low Initial Infections.output.56df93a0.js"),[]),"../results/KUX_20-Medium Initial Infections.output.json":()=>t(()=>import("./KUX_20-Medium Initial Infections.output.4187c1d0.js"),[]),"../results/KUX_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./KUX_20-Model-specific Initial Infections.output.7d5f5f05.js"),[]),"../results/LFA_21-High Initial Infections.output.json":()=>t(()=>import("./LFA_21-High Initial Infections.output.ee250c91.js"),[]),"../results/LFA_21-Low Initial Infections.output.json":()=>t(()=>import("./LFA_21-Low Initial Infections.output.6f5561f9.js"),[]),"../results/LFA_21-Medium Initial Infections.output.json":()=>t(()=>import("./LFA_21-Medium Initial Infections.output.4f5c9a4a.js"),[]),"../results/LFA_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./LFA_21-Model-specific Initial Infections.output.052fb68a.js"),[]),"../results/LFA_22-High Initial Infections.output.json":()=>t(()=>import("./LFA_22-High Initial Infections.output.f336385d.js"),[]),"../results/LFA_22-Low Initial Infections.output.json":()=>t(()=>import("./LFA_22-Low Initial Infections.output.5f6c4ddb.js"),[]),"../results/LFA_22-Medium Initial Infections.output.json":()=>t(()=>import("./LFA_22-Medium Initial Infections.output.b4a9fe3d.js"),[]),"../results/LFA_22-Model-specific Initial Infections.output.json":()=>t(()=>import("./LFA_22-Model-specific Initial Infections.output.8325cc3d.js"),[]),"../results/MY_21-High Initial Infections.output.json":()=>t(()=>import("./MY_21-High Initial Infections.output.0242ba9e.js"),[]),"../results/MY_21-Low Initial Infections.output.json":()=>t(()=>import("./MY_21-Low Initial Infections.output.85fee6b3.js"),[]),"../results/MY_21-Medium Initial Infections.output.json":()=>t(()=>import("./MY_21-Medium Initial Infections.output.94a792b3.js"),[]),"../results/MY_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./MY_21-Model-specific Initial Infections.output.4d2964eb.js"),[]),"../results/R_20-High Initial Infections.output.json":()=>t(()=>import("./R_20-High Initial Infections.output.c7a8c231.js"),[]),"../results/R_20-Low Initial Infections.output.json":()=>t(()=>import("./R_20-Low Initial Infections.output.326e293b.js"),[]),"../results/R_20-Medium Initial Infections.output.json":()=>t(()=>import("./R_20-Medium Initial Infections.output.de7a4128.js"),[]),"../results/R_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./R_20-Model-specific Initial Infections.output.e0a1674d.js"),[]),"../results/VDS_21-High Initial Infections.output.json":()=>t(()=>import("./VDS_21-High Initial Infections.output.d5ce51a1.js"),[]),"../results/VDS_21-Low Initial Infections.output.json":()=>t(()=>import("./VDS_21-Low Initial Infections.output.6784271a.js"),[]),"../results/VDS_21-Medium Initial Infections.output.json":()=>t(()=>import("./VDS_21-Medium Initial Infections.output.c5c0f1aa.js"),[]),"../results/VDS_21-Model-specific Initial Infections.output.json":()=>t(()=>import("./VDS_21-Model-specific Initial Infections.output.6f181794.js"),[]),"../results/V_20-High Initial Infections.output.json":()=>t(()=>import("./V_20-High Initial Infections.output.ed037783.js"),[]),"../results/V_20-Low Initial Infections.output.json":()=>t(()=>import("./V_20-Low Initial Infections.output.1e33343c.js"),[]),"../results/V_20-Medium Initial Infections.output.json":()=>t(()=>import("./V_20-Medium Initial Infections.output.e216478f.js"),[]),"../results/V_20-Model-specific Initial Infections.output.json":()=>t(()=>import("./V_20-Model-specific Initial Infections.output.e3486d38.js"),[])},je=async(o,s)=>{const e=`../results/${o.trim()}-${s}.output.json`;if(At[e]){const{data:l}=await At[e]();return l}else return console.warn(`Results file ${e} not found`),null},St=g(""),Ht=g([]),_t=g([]),W=g([]),ct=g([]),pt=g([]);var z=(o=>(o[o.Variable=0]="Variable",o[o.Model=1]="Model",o))(z||{}),rt=(o=>(o[o.Short=0]="Short",o[o.Reference=1]="Reference",o))(rt||{});const dt=g([]),ft=g(""),be=()=>{dt.value=[],ft.value=""},Z=g([]),kt=y(()=>{const o=ft.value.toLowerCase(),s=dt.value;return W.value.filter(e=>!o||e.name.toLowerCase().includes(o)).filter(e=>!s.length||s.every(l=>e.features.includes(l)))}),Le=y(()=>_t.value.reduce((o,s)=>N(B({},o),{[s]:kt.value.filter(e=>e.type===s)}),{})),mt=g([]),xe=y(()=>ct.value),It=g([]),we=y(()=>pt.value),Te=y(()=>!!(It.value.length&&Z.value.length&&mt.value.length)),Ft=g(1),Ae=g(0),Re=g(4),ut=g(!0),ye=async()=>{try{ut.value=!0;const o=await ve();St.value=o.content,W.value=o.models,ct.value=o.shocks,pt.value=o.variables,_t.value=o.modelTypes,Ht.value=W.value.flatMap(s=>s.features).filter((s,e,l)=>e===l.indexOf(s)).sort((s,e)=>s.localeCompare(e))}catch(o){throw console.error(o),o}finally{ut.value=!1}},$=Xt({});zt(async()=>{var e;const o=Z.value,s=mt.value;for(const l of o)for(const u of s)((e=$==null?void 0:$[l.name])==null?void 0:e[u.name])===void 0&&je(l.name,u.name).then(d=>{var c,m,v,p,I;d&&((m=$[c=l.name])!=null||($[c]={}),(I=(v=$[l.name])[p=u.name])!=null||(v[p]=d))})});const Ve=(o,s,e)=>{var l,u,d;return(d=(u=(l=$[o])==null?void 0:l[s])==null?void 0:u[e])!=null?d:null},Me=y(()=>Ft.value===0?o=>o.name:o=>`${o.authors} (${o.year})`),De=y(()=>{const o=bt(Z.value,"name");return bt(It.value,"name").map(e=>({variable:e.name,models:o.filter(l=>l.adjusted.includes(e.name)).map(l=>l.name)})).filter(e=>!!e.models.length)}),Pe=g(!1);function R(){return{getData:Ve,getModelTitle:Me,maxColumns:Re,grouping:Ae,heading:Ft,textFilter:ft,featureFilter:dt,clearFilters:be,load:ye,loading:ut,content:St,models:W,modelTypes:_t,modelFeatures:Ht,visibleModels:kt,selectedModels:Z,visibleModelsByType:Le,variables:pt,visibleVariables:we,selectedVariables:It,adjustedVariables:De,shocks:ct,visibleShocks:xe,selectedShocks:mt,hasSelection:Te,slideOverVisible:Pe}}const ht=T({props:{all:null,selected:null},setup(o){return(s,e)=>(a(),f("span",null,"("+E(o.selected.length)+"/"+E(o.all.length)+")",1))}});var O=(o,s)=>{const e=o.__vccOpts||o;for(const[l,u]of s)e[l]=u;return e};const Oe={},$e={class:"text-xs cursor-pointer hover:underline"};function Ce(o,s){return a(),f("span",$e,"Clear")}var tt=O(Oe,[["render",Ce]]);const Se=i("span",{class:"text-xs"},"Filter",-1),He={class:"flex flex-row gap-4 items-center"},ke=F("Clear"),Fe={class:"flex flex-col overflow-hidden"},Ke={class:"feature list-item"},Be=["id","value"],Ne=T({setup(o){const{textFilter:s,featureFilter:e,clearFilters:l,modelFeatures:u}=R(),d=()=>{setTimeout(()=>{var c;try{(c=document.getElementById("filter-text"))==null||c.focus()}catch{}})};return(c,m)=>(a(),L(n(te),{class:"relative"},{default:_(()=>[r(n(Wt),null,{default:_(()=>[i("button",{type:"button",class:"inline-flex gap-1 items-center p-2 border border-transparent rounded text-gray-700 bg-white hover:bg-ocp-500 hover:text-white focus:ring-transparent",onClick:d},[Se,r(n(Yt),{class:"h-5 w-5","aria-hidden":"true"})])]),_:1}),r(n(Zt),{class:"absolute z-10 w-64 -top-4 -right-4 p-4 bg-white shadow space-y-4"},{default:_(({close:v})=>[i("div",He,[X(i("input",{id:"filter-text",type:"text",class:"flex-grow shadow-sm block w-full sm:text-sm border-gray-300 rounded focus:ring-ocp-500 focus:ring-offset-0 focus:border-ocp-500",placeholder:"Filter models...","onUpdate:modelValue":m[0]||(m[0]=p=>C(s)?s.value=p:null)},null,512),[[Qt,n(s)]]),r(tt,{onClick:n(l)},{default:_(()=>[ke]),_:1},8,["onClick"])]),i("div",Fe,[(a(!0),f(w,null,A(n(u),p=>(a(),f("label",Ke,[X(i("input",{class:"text-ocp-500 focus:ring-ocp-500",type:"checkbox","onUpdate:modelValue":m[1]||(m[1]=I=>C(e)?e.value=I:null),id:"feature-"+p,value:p},null,8,Be),[[Q,n(e)]]),i("span",null,E(p),1)]))),256))])]),_:1})]),_:1}))}}),Je={},Ue={class:"overflow-auto h-full flex flex-col"},Ge={class:"mb-2"},qe={class:"border-y border-gray-300 overflow-auto overflow-x-hidden flex-grow flex flex-col scrolling-shadows"};function Xe(o,s){return a(),f("div",Ue,[i("div",Ge,[J(o.$slots,"title")]),i("div",qe,[J(o.$slots,"default")])])}var vt=O(Je,[["render",Xe]]);const ze={class:"flex justify-between items-baseline"},Ye={class:"space-x-2"},We=i("span",null,"Models",-1),Qe={class:"grid gap-8 overflow-auto"},Ze={key:0,class:"text-gray-400 text-sm text-center p-1"},ts={class:"model list-item"},es=["id","value"],ss={class:"space-y-2 bg-white shadow-lg rounded-lg m-4 p-4 border border-1 border-gray-50 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl"},os={class:"mb-4"},is={class:"italic"},ns=["innerHTML"],Rt=T({setup(o){const{selectedModels:s,models:e,visibleModelsByType:l,getModelTitle:u}=R();return(d,c)=>(a(),f(w,null,[i("div",ze,[i("div",Ye,[We,r(ht,{all:n(e),selected:n(s)},null,8,["all","selected"]),r(tt,{onClick:c[0]||(c[0]=m=>s.value=[])})]),r(Ne)]),i("div",Qe,[(a(!0),f(w,null,A(n(l),(m,v)=>(a(),L(vt,{class:"model-list flex flex-col"},{title:_(()=>[F(E(v),1)]),default:_(()=>[m.length?P("",!0):(a(),f("div",Ze," None of the models in this group match your filters ")),(a(!0),f(w,null,A(m,p=>(a(),L(n(Ot),{key:p.name,placement:"bottom",hover:!0,openDelay:1e3,offsetDistance:"0"},{content:_(()=>[i("div",ss,[i("div",os,[F(E(p.authors||"unknown author")+" ("+E(p.year||"unknown year")+"), "+E(p.title)+", ",1),i("span",is,E(p.journal||"unknown journal"),1)]),i("div",{innerHTML:p.teaser},null,8,ns)])]),default:_(()=>[i("label",ts,[X(i("input",{class:"text-ocp-500 focus:ring-ocp-500",id:"model-"+p.id,type:"checkbox",value:p,"onUpdate:modelValue":c[1]||(c[1]=I=>C(s)?s.value=I:null)},null,8,es),[[Q,n(s)]]),i("span",null,E(n(u)(p)),1)])]),_:2},1024))),128))]),_:2},1024))),256))])],64))}}),ls={},rs={class:"text-xs cursor-pointer hover:underline whitespace-nowrap"};function us(o,s){return a(),f("span",rs,"Select all")}var Kt=O(ls,[["render",us]]);const as={class:"flex flex-wrap items-baseline gap-2"},_s=i("span",null,"Variables",-1),cs={class:"flex flex-wrap items-baseline gap-2"},ps=["value"],yt=T({setup(o){const{variables:s,selectedVariables:e,visibleVariables:l}=R();return(u,d)=>(a(),L(vt,{class:"variable-list"},{title:_(()=>[i("div",as,[_s,r(ht,{all:n(s),selected:n(e)},null,8,["all","selected"]),i("div",cs,[r(Kt,{onClick:d[0]||(d[0]=c=>e.value=n(s))}),r(tt,{onClick:d[1]||(d[1]=c=>e.value=[])})])])]),default:_(()=>[(a(!0),f(w,null,A(n(l),c=>(a(),f("label",{class:"variable list-item",key:c.name},[X(i("input",{class:"text-ocp-500 focus:ring-ocp-500",type:"checkbox",value:c,"onUpdate:modelValue":d[2]||(d[2]=m=>C(e)?e.value=m:null)},null,8,ps),[[Q,n(e)]]),i("span",null,E(c.name),1)]))),128))]),_:1}))}}),ds={class:"flex flex-wrap items-baseline gap-2"},fs=i("span",null,"Shocks",-1),ms={class:"flex flex-wrap items-baseline gap-2"},Is={class:"shock list-item"},hs=["value"],vs={class:"space-y-2 bg-white shadow-lg rounded-lg m-4 p-4 border border-1 border-gray-50 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl"},Vt=T({setup(o){const{shocks:s,selectedShocks:e,visibleShocks:l}=R(),u={"Low Initial Infections":".05%","Medium Initial Infections":".1%","High Initial Infections":".25%"};return(d,c)=>(a(),L(vt,{class:"shock-list"},{title:_(()=>[i("div",ds,[fs,r(ht,{all:n(s),selected:n(e)},null,8,["all","selected"]),i("div",ms,[r(Kt,{onClick:c[0]||(c[0]=m=>e.value=n(s))}),r(tt,{onClick:c[1]||(c[1]=m=>e.value=[])})])])]),default:_(()=>[(a(!0),f(w,null,A(n(l),m=>(a(),L(n(Ot),{key:m.name,placement:"bottom",hover:!0,openDelay:1e3,offsetDistance:"0",disabled:!u[m.name]},{content:_(()=>[i("div",vs,E(u[m.name])+" of the population are infected initially. ",1)]),default:_(()=>[i("label",Is,[X(i("input",{class:"text-ocp-500 focus:ring-ocp-500",type:"checkbox",value:m,"onUpdate:modelValue":c[2]||(c[2]=v=>C(e)?e.value=v:null)},null,8,hs),[[Q,n(e)]]),i("span",null,E(m.name),1)])]),_:2},1032,["disabled"]))),128))]),_:1}))}}),Es={},gs={class:"bg-white p-4 2xl:p-8 rounded-lg shadow-lg flex flex-col"};function js(o,s){return a(),f("div",gs,[J(o.$slots,"default")])}var G=O(Es,[["render",js]]);const bs=T({props:{cols:{type:Number,required:!0},maxCols:{type:Number,required:!0}},setup(o){const s=o,e=y(()=>Math.min(s.cols,s.maxCols));return(l,u)=>(a(),f("div",{class:K(["grid",{"grid-cols-1":n(e)===1,"grid-cols-2":n(e)===2,"grid-cols-3":n(e)===3,"grid-cols-4":n(e)===4,"grid-cols-5":n(e)===5,"grid-cols-6":n(e)===6,"grid-cols-7":n(e)===7,"grid-cols-8":n(e)===8}])},[J(l.$slots,"default")],2))}}),Ls={},xs={type:"button",class:"inline-flex items-center p-2 border border-transparent rounded-full text-gray-700 bg-white hover:bg-ocp-500 hover:text-white focus:ring-transparent"};function ws(o,s){return a(),f("button",xs,[J(o.$slots,"default")])}var at=O(Ls,[["render",ws]]);const Ts=T({props:{element:{type:HTMLElement,required:!0}},setup(o){const s=o;$t(()=>{document.addEventListener("fullscreenchange",l)}),ee(()=>document.removeEventListener("fullscreenchange",l));const e=g(!1),l=()=>{e.value=document.fullscreenElement===s.element},u=()=>{try{s.element.requestFullscreen()}catch(c){console.warn(c)}},d=()=>{try{document.exitFullscreen()}catch(c){console.warn(c)}};return(c,m)=>(a(),f(w,null,[e.value?P("",!0):(a(),L(at,{key:0,onClick:u},{default:_(()=>[r(n(se),{class:"w-6 h-6"})]),_:1})),e.value?(a(),L(at,{key:1,onClick:d},{default:_(()=>[r(n(Ct),{class:"w-6 h-6"})]),_:1})):P("",!0)],64))}});const As={class:"py-1"},Rs=T({setup(o){const{selectedModels:s,selectedShocks:e,selectedVariables:l,getData:u}=R(),d=(p,I=null)=>new Array(p).fill(I),c=()=>{var h;const I=[["model","shock","variable",...d(101).map((V,S)=>S)]];for(const{name:V}of s.value)for(const{name:S}of e.value)for(const{name:U}of l.value)I.push([V,S,U,...(h=u(V,S,U))!=null?h:d(101)]);return I},m=async p=>{const I=await t(()=>import("./xlsx.89ea120e.js"),[]),h=I.utils.book_new(),V=I.utils.aoa_to_sheet(c());I.utils.book_append_sheet(h,V,"Epi-MMB"),I.writeFile(h,`epi-mmb-results-${new Date().toISOString()}.${p}`)},v=async()=>{const{saveAs:p}=await t(()=>import("./FileSaver.min.fba61859.js").then(function(V){return V.F}),["assets/FileSaver.min.fba61859.js","assets/vendor.70030db6.js"]),I=JSON.stringify(c());var h=new Blob([I],{type:"application/json;charset=utf-8"});p(h,`epi-mmb-results-${new Date().toISOString()}.json`)};return(p,I)=>(a(),L(n(re),{as:"div",class:"relative inline-block text-left"},{default:_(()=>[i("div",null,[r(n(ne),null,{default:_(()=>[r(at,null,{default:_(()=>[r(n(oe),{class:"w-6 h-6"}),r(n(ie),{class:"h-5 w-5","aria-hidden":"true"})]),_:1})]),_:1})]),r(Y,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:_(()=>[r(n(le),{class:"origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:_(()=>[i("div",As,[r(n(st),{onClick:I[0]||(I[0]=h=>m("csv"))},{default:_(({active:h})=>[i("span",{class:K(["menu-item",{active:h}])},"CSV",2)]),_:1}),r(n(st),{onClick:I[1]||(I[1]=h=>m("xlsx"))},{default:_(({active:h})=>[i("span",{class:K(["menu-item",{active:h}])},"XLSX",2)]),_:1}),r(n(st),{onClick:I[2]||(I[2]=h=>v())},{default:_(({active:h})=>[i("span",{class:K(["menu-item",{active:h}])},"JSON",2)]),_:1})])]),_:1})]),_:1})]),_:1}))}});var ys=O(Rs,[["__scopeId","data-v-08dc54aa"]]);const Vs={key:0,class:"px-4 pl-24 sticky rounded-lg top-0 z-10 flex gap-2 items-start"},Ms={key:1,class:"mx-6 mt-2 mb-4 p-4 bg-yellow-100 rounded border border-yellow-200 text-sm"},Ds=F(" The Epi-MMB team adjusted some calculations to standardize variable definitions: "),Ps={class:"flex flex-col mt-2"},Os={class:"flex-1 overflow-auto pl-6 pr-3 mx-1 space-y-8 scrolling-shadows pb-8"},$s={class:"text-lg"},Cs=i("hr",{class:"mb-4"},null,-1),Ss=i("div",{class:"grid grid-cols-4",style:{"grid-template-columns":"repeat(auto-fit, minmax(350px, 1fr))"}},null,-1),Hs=T({setup(o){q.setOptions({chart:{backgroundColor:"transparent",height:300,marginLeft:70,marginRight:20},xAxis:{title:{text:"Time",style:{fontSize:"10px"}}},pane:{background:[{backgroundColor:"transparent"}]},plotOptions:{series:{lineWidth:4,animation:!1,marker:{enabled:!1}}},credits:{enabled:!1},legend:{enabled:!1},exporting:{libURL:"/vendor/",buttons:{contextButton:{menuItems:["downloadPNG","downloadJPEG","downloadPDF","downloadSVG"]}},chartOptions:{legend:{enabled:!0},credits:{enabled:!0,text:"Source: Epi-MMB"}}}});const{getData:s,grouping:e,getModelTitle:l,selectedVariables:u,selectedModels:d,selectedShocks:c,maxColumns:m,adjustedVariables:v}=R(),p=x=>{const j={reserveSpace:!0,style:{fontSize:"10px",whiteSpace:"nowrap"},margin:12},b="% deviation from Steady State",M="% of population";switch(e.value){case z.Variable:return u.value.map(D=>{const H=["Consumption","Labour","Output"].includes(D.name)?b:M;return{yAxis:[{title:N(B({},j),{text:H})}],title:{text:D.name},series:d.value.map((k,Bt)=>({yAxis:0,type:"spline",colorIndex:Bt,name:l.value(k),data:s(k.name,x.name,D.name)}))}});case z.Model:return d.value.map(D=>({yAxis:[{title:N(B({},j),{text:b})},{title:N(B({},j),{text:M}),opposite:!0}],title:{text:l.value(D)},series:u.value.map((H,k)=>({yAxis:0,type:"spline",colorIndex:k,name:H.name,data:s(D.name,x.name,H.name)}))}));default:throw new Error(`Unknown grouping: ${e.value}`)}},I=()=>c.value.map(x=>{const j=x.name,b=p(x);return{title:j,charts:b}}),h=y(()=>I()),V=x=>{q.charts.flatMap(j=>{var b;return(b=j==null?void 0:j.series)!=null?b:[]}).forEach(j=>{j.name===x&&(j.visible?j.hide():j.show())})},S=y(()=>{var b,M,D,H;const x=(D=(M=(b=h==null?void 0:h.value)==null?void 0:b[0])==null?void 0:M.charts)==null?void 0:D[0];return x?{series:(H=x.series)==null?void 0:H.map(k=>N(B({},k),{data:[],events:{legendItemClick:()=>(V(k.name),!1)}})),credits:{enabled:!1},chart:{height:50},exporting:{enabled:!1},title:{floating:!0,text:""},yAxis:{visible:!1},xAxis:{visible:!1},legend:{margin:0,padding:0,verticalAlign:"middle",align:"center",enabled:!0}}:null}),U=()=>q.charts.forEach(x=>x==null?void 0:x.reflow());Lt(h,()=>xt(U)),Lt(m,()=>xt(U));const et=g();return(x,j)=>(a(),f("div",{ref_key:"container",ref:et,class:"flex-grow relative overflow-auto flex flex-col pt-4 bg-white rounded-lg"},[n(S)?(a(),f("div",Vs,[r(n(wt.exports.Chart),{class:"flex-grow",options:n(S)},null,8,["options"]),r(ys),et.value?(a(),L(Ts,{key:0,element:et.value},null,8,["element"])):P("",!0)])):P("",!0),n(v).length?(a(),f("div",Ms,[Ds,i("div",Ps,[(a(!0),f(w,null,A(n(v),({variable:b,models:M})=>(a(),f("span",null,E(b)+": "+E(M.join(", ")),1))),256))])])):P("",!0),i("div",Os,[(a(!0),f(w,null,A(n(h),b=>(a(),f("div",null,[i("div",$s,E(b.title),1),Cs,Ss,r(bs,{class:"gap-x-4",cols:b.charts.length,maxCols:n(m)},{default:_(()=>[(a(!0),f(w,null,A(b.charts,M=>(a(),L(n(wt.exports.Chart),{options:M},null,8,["options"]))),256))]),_:2},1032,["cols","maxCols"])]))),256))])],512))}});var ks="/logo.svg";const Fs={class:"welcome flex-grow self-stretch relative box-border"},Ks=i("div",{class:"absolute w-full h-full flex justify-center items-center box-border select-none"},[i("img",{src:ks,class:"w-1/2 opacity-50"})],-1),Bs=["innerHTML"],Ns=T({setup(o){const{content:s}=R();return(e,l)=>(a(),f("div",Fs,[Ks,i("div",{class:"bg-transparent relative z-1 prose !max-w-full",innerHTML:n(s)},null,8,Bs)]))}}),Js={class:"overflow-auto h-full flex flex-col"},Us=i("div",{class:"pb-2"},"Settings",-1),Gs={class:"overflow-auto p-2 space-y-2 border-t border-b border-gray-300 flex-grow scrolling-shadows"},qs=i("div",{class:"flex items-center justify-between"},[i("h2",{class:"text-sm text-gray-900"},"Name models by")],-1),Xs={class:"grid grid-cols-3 gap-3 sm:grid-cols-2"},zs=i("div",{class:"flex items-center justify-between"},[i("h2",{class:"text-sm text-gray-900"},"Group by")],-1),Ys={class:"grid grid-cols-3 gap-3 sm:grid-cols-2"},Ws=i("div",{class:"flex items-center justify-between"},[i("h2",{class:"text-sm text-gray-900"},"Charts per row")],-1),Qs={class:"grid gap-3 grid-cols-6"},Mt=T({setup(o){const{grouping:s,heading:e,maxColumns:l}=R(),u=[{name:"Short Name",value:rt.Short},{name:"Reference",value:rt.Reference}],d=[{name:"Variable",value:z.Variable},{name:"Model",value:z.Model}],c=[{name:1,value:1},{name:2,value:2},{name:3,value:3},{name:4,value:4},{name:6,value:6},{name:8,value:8}];return(m,v)=>(a(),f("div",Js,[Us,i("div",Gs,[i("div",null,[qs,r(n(nt),{modelValue:n(e),"onUpdate:modelValue":v[0]||(v[0]=p=>C(e)?e.value=p:null),class:"mt-2"},{default:_(()=>[i("div",Xs,[(a(),f(w,null,A(u,p=>r(n(ot),{as:"template",key:p.name,value:p.value},{default:_(({active:I,checked:h})=>[i("div",{class:K([h?"bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500":"bg-white border-gray-200 text-gray-900 hover:bg-gray-50","border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer"])},[r(n(it),{as:"p",class:"select-none whitespace-nowrap"},{default:_(()=>[F(E(p.name),1)]),_:2},1024)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),i("div",null,[zs,r(n(nt),{modelValue:n(s),"onUpdate:modelValue":v[1]||(v[1]=p=>C(s)?s.value=p:null),class:"mt-2"},{default:_(()=>[i("div",Ys,[(a(),f(w,null,A(d,p=>r(n(ot),{as:"template",key:p.name,value:p.value},{default:_(({active:I,checked:h})=>[i("div",{class:K([h?"bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500":"bg-white border-gray-200 text-gray-900 hover:bg-gray-50","border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer"])},[r(n(it),{as:"p",class:"select-none"},{default:_(()=>[F(E(p.name),1)]),_:2},1024)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),i("div",null,[Ws,r(n(nt),{modelValue:n(l),"onUpdate:modelValue":v[2]||(v[2]=p=>C(l)?l.value=p:null),class:"mt-2"},{default:_(()=>[i("div",Qs,[(a(),f(w,null,A(c,p=>r(n(ot),{as:"template",key:p.name,value:p.value},{default:_(({active:I,checked:h})=>[i("div",{class:K(["",h?"bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500":"bg-white border-gray-200 text-gray-900 hover:bg-gray-50","border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer"])},[r(n(it),{as:"p",class:"select-none"},{default:_(()=>[F(E(p.name),1)]),_:2},1024)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])])])]))}}),Zs=i("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),to={class:"fixed inset-0 overflow-hidden"},eo={class:"absolute inset-0 overflow-hidden"},so={class:"pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10"},oo={class:"absolute top-8 right-0 -mr-8 flex 2xl:pt-4 pl-2 sm:-mr-10 sm:pl-4"},io=i("span",{class:"sr-only"},"Close panel",-1),no={setup(o){const{slideOverVisible:s}=R();return(e,l)=>(a(),L(n(_e),{as:"template",show:n(s)},{default:_(()=>[r(n(ae),{as:"div",class:"relative z-10",onClose:l[1]||(l[1]=u=>s.value=!1)},{default:_(()=>[r(n(lt),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[Zs]),_:1}),i("div",to,[i("div",eo,[i("div",so,[r(n(lt),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:_(()=>[r(n(ue),{class:"pointer-events-auto relative"},{default:_(()=>[J(e.$slots,"default"),r(n(lt),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[i("div",oo,[i("button",{type:"button",class:"rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:l[0]||(l[0]=u=>s.value=!1)},[io,r(n(Ct),{class:"h-6 w-6","aria-hidden":"true"})])])]),_:1})]),_:3})]),_:3})])])])]),_:3})]),_:3},8,["show"]))}};const lo={class:"h-full py-4 2xl:py-8"},ro={class:"h-full py-4 pr-3 bg-white rounded-r-lg shadow-lg"},uo={class:"h-full overflow-y-auto pl-6 pr-4 space-y-4"},ao={class:"h-screen overflow-hidden p-4 2xl:p-8 flex gap-4 2xl:gap-8"},_o={class:"hidden landscape:xl:grid grid-cols-1 gap-4 2xl:gap-8 min-w-min",style:{"min-width":"250px"}},co=T({setup(o){const{hasSelection:s,slideOverVisible:e}=R();return(l,u)=>(a(),f(w,null,[r(no,null,{default:_(()=>[i("div",lo,[i("div",ro,[i("div",uo,[i("div",null,[r(Rt)]),i("div",null,[r(Vt)]),i("div",null,[r(yt)]),i("div",null,[r(Mt)])])])])]),_:1}),i("div",ao,[i("div",{class:"flex landscape:xl:hidden justify-center items-center rounded-r-lg shadow-lg bg-white hover:bg-gray-100 select-none cursor-pointer -ml-4 2xl:-ml-8",onClick:u[0]||(u[0]=d=>e.value=!0)},[r(n(ce),{class:"h-4 w-4 m-2"})]),r(G,{class:"hidden landscape:xl:flex",style:{"min-width":"250px"}},{default:_(()=>[r(Rt,{class:"min-h-0"})]),_:1}),i("div",_o,[r(G,{class:"min-h-0"},{default:_(()=>[r(Vt)]),_:1}),r(G,{class:"min-h-0"},{default:_(()=>[r(yt)]),_:1}),r(G,{class:"min-h-0"},{default:_(()=>[r(Mt)]),_:1})]),r(G,{class:"flex-grow min-h-0 col-span-2 !p-0 overflow-hidden"},{default:_(()=>[r(Y,null,{default:_(()=>[n(s)?(a(),L(Hs,{key:0})):P("",!0)]),_:1}),r(Y,null,{default:_(()=>[n(s)?P("",!0):(a(),L(Ns,{key:0,class:"self-center p-4 2xl:p-8"}))]),_:1})]),_:1})])],64))}});var po=O(co,[["__scopeId","data-v-0996c91c"]]);const Et={props:{color:{default:"#ffffff"}}},Dt=()=>{pe(o=>({"43f9161a":o.color}))},Pt=Et.setup;Et.setup=Pt?(o,s)=>(Dt(),Pt(o,s)):Dt;const fo=Et,mo={class:"loader"};function Io(o,s,e,l,u,d){return a(),f("div",mo,"Loading...")}var ho=O(fo,[["render",Io],["__scopeId","data-v-7c23711d"]]);const vo={key:0,class:"fixed w-screen h-screen flex justify-center items-center",style:{"padding-bottom":"30vh"}},Eo=T({setup(o){const{load:s,loading:e}=R();return $t(()=>{s()}),(l,u)=>(a(),L(Y,null,{default:_(()=>[n(e)?(a(),f("div",vo,[r(ho,{class:"w-1/2 h-1/2",color:"#5b8c8c"})])):n(e)?P("",!0):(a(),L(po,{key:1}))]),_:1}))}});var go=O(Eo,[["__scopeId","data-v-6e865fd2"]]);de(q);fe(q);me(go).mount("#app");