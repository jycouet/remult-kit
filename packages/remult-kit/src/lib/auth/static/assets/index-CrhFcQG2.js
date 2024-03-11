function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Page-BEIuvj__.js","assets/Page-BbuogWQ8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var le=Object.defineProperty;var ue=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(ue(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const ae="modulepreload",fe=function(e){return"/api/static/"+e},V={},D=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");r=Promise.all(n.map(i=>{if(i=fe(i),i in V)return;V[i]=!0;const s=i.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!o)for(let l=c.length-1;l>=0;l--){const d=c[l];if(d.href===i&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":ae,s||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),s)return new Promise((l,d)=>{a.addEventListener("load",l),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>t()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})};function h(){}function de(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function P(e,t,n,o,r){e.__svelte_meta={loc:{file:t,line:n,column:o,char:r}}}function J(e){return e()}function q(){return Object.create(null)}function R(e){e.forEach(J)}function Q(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}const pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _e(e,t){e.appendChild(t)}function ge(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function ve(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function A(e){return document.createElement(e)}function Z(e){return document.createTextNode(e)}function be(){return Z(" ")}function ye(){return Z("")}function we(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $e(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function Ee(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}let O;function p(e){O=e}function ee(){if(!O)throw new Error("Function called outside component initialization");return O}function F(e){ee().$$.on_mount.push(e)}const y=[],U=[];let w=[];const G=[],Oe=Promise.resolve();let L=!1;function Se(){L||(L=!0,Oe.then(K))}function C(e){w.push(e)}const j=new Set;let b=0;function K(){if(b!==0)return;const e=O;do{try{for(;b<y.length;){const t=y[b];b++,p(t),Re(t.$$)}}catch(t){throw y.length=0,b=0,t}for(p(null),y.length=0,b=0;U.length;)U.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];j.has(n)||(j.add(n),n())}w.length=0}while(y.length);for(;G.length;)G.pop()();L=!1,j.clear(),p(e)}function Re(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function Me(e){const t=[],n=[];w.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),w=t}const M=new Set;let _;function te(){_={r:0,c:[],p:_}}function ne(){_.r||R(_.c),_=_.p}function g(e,t){e&&e.i&&(M.delete(e),e.i(t))}function S(e,t,n,o){if(e&&e.o){if(M.has(e))return;M.add(e),_.c.push(()=>{M.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function W(e,t){const n=t.token={};function o(r,c,i,s){if(t.token!==n)return;t.resolved=s;let f=t.ctx;i!==void 0&&(f=f.slice(),f[i]=s);const u=r&&(t.current=r)(f);let a=!1;t.block&&(t.blocks?t.blocks.forEach((l,d)=>{d!==c&&l&&(te(),S(l,1,1,()=>{t.blocks[d]===l&&(t.blocks[d]=null)}),ne())}):t.block.d(1),u.c(),g(u,1),u.m(t.mount(),t.anchor),a=!0),t.block=u,t.blocks&&(t.blocks[c]=u),a&&K()}if(de(e)){const r=ee();if(e.then(c=>{p(r),o(t.then,1,t.value,c),p(null)},c=>{if(p(r),o(t.catch,2,t.error,c),p(null),!t.hasCatch)throw c}),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}}function De(e,t,n){const o=t.slice(),{resolved:r}=e;e.current===e.then&&(o[e.value]=r),e.current===e.catch&&(o[e.error]=r),e.block.p(o,n)}function je(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pe(e){e&&e.c()}function oe(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),C(()=>{const c=e.$$.on_mount.map(J).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...c):R(c),e.$$.on_mount=[]}),r.forEach(C)}function re(e,t){const n=e.$$;n.fragment!==null&&(Me(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(y.push(e),Se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,n,o,r,c,i=null,s=[-1]){const f=O;p(e);const u=e.$$={fragment:null,ctx:[],props:c,update:h,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:q(),dirty:s,skip_bound:!1,root:t.target||f.$$.root};i&&i(u.root);let a=!1;if(u.ctx=n?n(e,t.props||{},(l,d,...$)=>{const T=$.length?$[0]:d;return u.ctx&&r(u.ctx[l],u.ctx[l]=T)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](T),a&&Ae(e,l)),d}):[],u.update(),a=!0,R(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const l=ke(t.target);u.fragment&&u.fragment.l(l),l.forEach(Y)}else u.fragment&&u.fragment.c();t.intro&&g(e.$$.fragment),oe(e,t.target,t.anchor),K()}p(f)}class Ce{constructor(){v(this,"$$");v(this,"$$set")}$destroy(){re(this,1),this.$destroy=h}$on(t,n){if(!Q(n))return h;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4.2.12",xe="4";function m(e,t){document.dispatchEvent(Ee(e,{version:Be,...t},{bubbles:!0}))}function Ge(e,t){m("SvelteDOMInsert",{target:e,node:t}),_e(e,t)}function k(e,t,n){m("SvelteDOMInsert",{target:e,node:t,anchor:n}),ge(e,t,n)}function E(e){m("SvelteDOMRemove",{node:e}),Y(e)}function Ie(e,t,n,o,r,c,i){const s=o===!0?["capture"]:o?Array.from(Object.keys(o)):[];r&&s.push("preventDefault"),c&&s.push("stopPropagation"),i&&s.push("stopImmediatePropagation"),m("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:s});const f=we(e,t,n,o);return()=>{m("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:s}),f()}}function Ne(e,t,n){$e(e,t,n),n==null?m("SvelteDOMRemoveAttribute",{node:e,attribute:t}):m("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function z(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)&&!(typeof Symbol=="function"&&e&&Symbol.iterator in e))throw new Error("{#each} only works with iterable values.");return je(e)}function Ke(e,t,n){for(const o of Object.keys(t))~n.indexOf(o)||console.warn(`<${e}> received an unexpected slot "${o}".`)}function We(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const o=new e(t);if(!o.$$||!o.$set||!o.$on||!o.$destroy)throw new Error(n);return o}catch(o){const{message:r}=o;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):o}}class Te extends Ce{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();v(this,"$$prop_def");v(this,"$$events_def");v(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);const{Object:Ve}=pe,B="src/App.svelte";function H(e,t,n){const o=e.slice();return o[5]=t[n],o}function X(e){e[8]=e[9].default}function x(e){let t,n,o,r={ctx:e,current:null,token:null,hasCatch:!1,pending:ie,then:se,catch:ce,value:9,blocks:[,,,]};W(n=e[0],r);const c={c:function(){t=ye(),r.block.c()},m:function(s,f){k(s,t,f),r.block.m(s,r.anchor=f),r.mount=()=>t.parentNode,r.anchor=t,o=!0},p:function(s,f){e=s,r.ctx=e,f&1&&n!==(n=e[0])&&W(n,r)||De(r,e,f)},i:function(s){o||(g(r.block),o=!0)},o:function(s){for(let f=0;f<3;f+=1){const u=r.blocks[f];S(u)}o=!1},d:function(s){s&&E(t),r.block.d(s),r.token=null,r=null}};return m("SvelteRegisterBlock",{block:c,id:x.name,type:"if",source:"(20:2) {#if activeModuleRef}",ctx:e}),c}function ce(e){const t={c:h,m:h,p:h,i:h,o:h,d:h};return m("SvelteRegisterBlock",{block:t,id:ce.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:e}),t}function se(e){X(e);let t,n;t=new e[8]({props:{remultKitData},$$inline:!0});const o={c:function(){Pe(t.$$.fragment)},m:function(c,i){oe(t,c,i),n=!0},p:function(c,i){X(c)},i:function(c){n||(g(t.$$.fragment,c),n=!0)},o:function(c){S(t.$$.fragment,c),n=!1},d:function(c){re(t,c)}};return m("SvelteRegisterBlock",{block:o,id:se.name,type:"then",source:"(21:62)        <ModuleComponent remultKitData={remultKitData}",ctx:e}),o}function ie(e){const t={c:h,m:h,p:h,i:h,o:h,d:h};return m("SvelteRegisterBlock",{block:t,id:ie.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:e}),t}function I(e){let t,n,o;function r(){return e[3](e[5])}const c={c:function(){t=A("button"),t.textContent=`Load ${e[5]}`,P(t,B,36,4,708)},m:function(s,f){k(s,t,f),n||(o=Ie(t,"click",r,!1,!1,!1,!1),n=!0)},p:function(s,f){e=s},d:function(s){s&&E(t),n=!1,o()}};return m("SvelteRegisterBlock",{block:c,id:I.name,type:"each",source:"(29:2) {#each Object.keys(modules) as module}",ctx:e}),c}function N(e){let t,n,o,r,c=e[0]&&x(e),i=z(Object.keys(e[1])),s=[];for(let u=0;u<i.length;u+=1)s[u]=I(H(e,i,u));const f={c:function(){t=A("main"),c&&c.c(),n=be(),o=A("div");for(let a=0;a<s.length;a+=1)s[a].c();P(t,B,25,0,462),Ne(o,"class","debug s-XsEmFtvddWTw"),P(o,B,34,0,643)},l:function(a){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(a,l){k(a,t,l),c&&c.m(t,null),k(a,n,l),k(a,o,l);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(o,null);r=!0},p:function(a,[l]){if(a[0]?c?(c.p(a,l),l&1&&g(c,1)):(c=x(a),c.c(),g(c,1),c.m(t,null)):c&&(te(),S(c,1,1,()=>{c=null}),ne()),l&6){i=z(Object.keys(a[1]));let d;for(d=0;d<i.length;d+=1){const $=H(a,i,d);s[d]?s[d].p($,l):(s[d]=I($),s[d].c(),s[d].m(o,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=i.length}},i:function(a){r||(g(c),r=!0)},o:function(a){S(c),r=!1},d:function(a){a&&(E(t),E(n),E(o)),c&&c.d(),ve(s,a)}};return m("SvelteRegisterBlock",{block:f,id:N.name,type:"component",source:"",ctx:e}),f}function qe(e,t,n){let{$$slots:o={},$$scope:r}=t;Ke("App",o,[]);const c={auth:D(()=>import("./Page-BEIuvj__.js"),__vite__mapDeps([0,1])),admin:D(()=>import("./Page-MrbaZVFK.js"),__vite__mapDeps([])),files:D(()=>import("./Page-DOA3KJ8t.js"),__vite__mapDeps([]))};let i=remultKitData.module,s;function f(l){i=l,n(0,s=c[l])}F(()=>{f(remultKitData.module)});const u=[];Ve.keys(t).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<App> was created with unknown prop '${l}'`)});const a=l=>f(l);return e.$capture_state=()=>({onMount:F,modules:c,activeModule:i,activeModuleRef:s,loadModule:f}),e.$inject_state=l=>{"activeModule"in l&&(i=l.activeModule),"activeModuleRef"in l&&n(0,s=l.activeModuleRef)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[s,c,f,a]}class Fe extends Te{constructor(t){super(t),Le(this,t,qe,N,he,{}),m("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:N.name})}}typeof remultKitData>"u"&&(window.remultKitData={module:"auth",props:{strings:{"auth.login":"Login","auth.signUp":"Sign up","auth.email":"Email","auth.password":"Password","auth.confirmPassword":"Confirm password","auth.rememberMe":"Remember me","auth.forgotPassword":"Forgot password?"},providers:[{id:"github",name:"GitHub"},{id:"google",name:"Google"}]}});new Fe({target:document.getElementById("app"),props:{remultKitData}});export{Te as S,k as a,E as b,We as c,m as d,A as e,Pe as f,be as g,Ne as h,Le as i,P as j,Ge as k,Ie as l,oe as m,h as n,te as o,S as p,re as q,ne as r,he as s,Z as t,g as u,Ke as v};
