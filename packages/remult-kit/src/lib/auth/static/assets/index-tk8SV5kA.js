const __vite__fileDeps=["assets/Page-D0sVlpL0.js","assets/Page-DWf6nG5c.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const me="modulepreload",pe=function(e){return"/api/static/"+e},F={},j=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=pe(l),l in F)return;F[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const g=r[p];if(g.href===l&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":me,u||(f.as="script",f.crossOrigin=""),f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function h(){}function _e(e,t){for(const n in t)e[n]=t[n];return e}function ge(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function C(e,t,n,o,s){e.__svelte_meta={loc:{file:t,line:n,column:o,char:s}}}function Y(e){return e()}function U(){return Object.create(null)}function x(e){e.forEach(Y)}function q(e){return typeof e=="function"}function be(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function He(e,t){return e!=e?t==t:e!==t}function ye(e){return Object.keys(e).length===0}function Je(e,t){if(e!=null&&typeof e.subscribe!="function")throw new Error(`'${t}' is not a store with a 'subscribe' method`)}function Z(e,...t){if(e==null){for(const o of t)o(void 0);return h}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Qe(e){let t;return Z(e,n=>t=n)(),t}function Ye(e,t,n){e.$$.on_destroy.push(Z(t,n))}function Ze(e,t,n,o){if(e){const s=ee(e,t,n,o);return e[0](s)}}function ee(e,t,n,o){return e[1]&&o?_e(n.ctx.slice(),e[1](o(t))):n.ctx}function et(e,t,n,o){if(e[2]&&o){const s=e[2](o(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const r=[],i=Math.max(t.dirty.length,s.length);for(let c=0;c<i;c+=1)r[c]=t.dirty[c]|s[c];return r}return t.dirty|s}return t.dirty}function tt(e,t,n,o,s,r){if(s){const i=ee(t,n,o,r);e.p(i,s)}}function nt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function ot(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function rt(e,t){const n={};t=new Set(t);for(const o in e)!t.has(o)&&o[0]!=="$"&&(n[o]=e[o]);return n}function st(e,t,n){return e.set(n),t}function ct(e){return e&&q(e.destroy)?e.destroy:h}const ve=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function we(e,t){e.appendChild(t)}function ke(e,t,n){e.insertBefore(t,n||null)}function te(e){e.parentNode&&e.parentNode.removeChild(e)}function $e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function Ee(){return ne(" ")}function Oe(){return ne("")}function De(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function it(e){return function(t){return t.preventDefault(),e.call(this,t)}}function oe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const Se=["width","height"];function ut(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)t[o]==null?e.removeAttribute(o):o==="style"?e.style.cssText=t[o]:o==="__value"?e.value=e[o]=t[o]:n[o]&&n[o].set&&Se.indexOf(o)===-1?e[o]=t[o]:oe(e,o,t[o])}function Ae(e){return Array.from(e.childNodes)}function lt(e,t){e.value=t??""}function at(e,t,n){e.classList.toggle(t,!!n)}function xe(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}let S;function _(e){S=e}function E(){if(!S)throw new Error("Function called outside component initialization");return S}function W(e){E().$$.on_mount.push(e)}function ft(e){E().$$.on_destroy.push(e)}function dt(e,t){return E().$$.context.set(e,t),t}function ht(e){return E().$$.context.get(e)}function mt(e){return E().$$.context.has(e)}function pt(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}const k=[],X=[];let $=[];const z=[],Re=Promise.resolve();let K=!1;function je(){K||(K=!0,Re.then(V))}function M(e){$.push(e)}const P=new Set;let w=0;function V(){if(w!==0)return;const e=S;do{try{for(;w<k.length;){const t=k[w];w++,_(t),Pe(t.$$)}}catch(t){throw k.length=0,w=0,t}for(_(null),k.length=0,w=0;X.length;)X.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];P.has(n)||(P.add(n),n())}$.length=0}while(k.length);for(;z.length;)z.pop()();K=!1,P.clear(),_(e)}function Pe(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function Ce(e){const t=[],n=[];$.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),$=t}const R=new Set;let b;function re(){b={r:0,c:[],p:b}}function se(){b.r||x(b.c),b=b.p}function y(e,t){e&&e.i&&(R.delete(e),e.i(t))}function A(e,t,n,o){if(e&&e.o){if(R.has(e))return;R.add(e),b.c.push(()=>{R.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function G(e,t){const n=t.token={};function o(s,r,i,c){if(t.token!==n)return;t.resolved=c;let l=t.ctx;i!==void 0&&(l=l.slice(),l[i]=c);const u=s&&(t.current=s)(l);let d=!1;t.block&&(t.blocks?t.blocks.forEach((a,f)=>{f!==r&&a&&(re(),A(a,1,1,()=>{t.blocks[f]===a&&(t.blocks[f]=null)}),se())}):t.block.d(1),u.c(),y(u,1),u.m(t.mount(),t.anchor),d=!0),t.block=u,t.blocks&&(t.blocks[r]=u),d&&V()}if(ge(e)){const s=E();if(e.then(r=>{_(s),o(t.then,1,t.value,r),_(null)},r=>{if(_(s),o(t.catch,2,t.error,r),_(null),!t.hasCatch)throw r}),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}}function Le(e,t,n){const o=t.slice(),{resolved:s}=e;e.current===e.then&&(o[e.value]=s),e.current===e.catch&&(o[e.error]=s),e.block.p(o,n)}function Ke(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Me(e){e&&e.c()}function ce(e,t,n){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),M(()=>{const r=e.$$.on_mount.map(Y).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...r):x(r),e.$$.on_mount=[]}),s.forEach(M)}function ie(e,t){const n=e.$$;n.fragment!==null&&(Ce(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(k.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ie(e,t,n,o,s,r,i=null,c=[-1]){const l=S;_(e);const u=e.$$={fragment:null,ctx:[],props:r,update:h,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:U(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(a,f,...p)=>{const g=p.length?p[0]:f;return u.ctx&&s(u.ctx[a],u.ctx[a]=g)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](g),d&&Be(e,a)),f}):[],u.update(),d=!0,x(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const a=Ae(t.target);u.fragment&&u.fragment.l(a),a.forEach(te)}else u.fragment&&u.fragment.c();t.intro&&y(e.$$.fragment),ce(e,t.target,t.anchor),V()}_(l)}class Ne{constructor(){v(this,"$$");v(this,"$$set")}$destroy(){ie(this,1),this.$destroy=h}$on(t,n){if(!q(n))return h;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="4.2.18",qe="4";function m(e,t){document.dispatchEvent(xe(e,{version:Te,...t},{bubbles:!0}))}function _t(e,t){m("SvelteDOMInsert",{target:e,node:t}),we(e,t)}function O(e,t,n){m("SvelteDOMInsert",{target:e,node:t,anchor:n}),ke(e,t,n)}function D(e){m("SvelteDOMRemove",{node:e}),te(e)}function Ve(e,t,n,o,s,r,i){const c=o===!0?["capture"]:o?Array.from(Object.keys(o)):[];s&&c.push("preventDefault"),r&&c.push("stopPropagation"),i&&c.push("stopImmediatePropagation"),m("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:c});const l=De(e,t,n,o);return()=>{m("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:c}),l()}}function ue(e,t,n){oe(e,t,n),n==null?m("SvelteDOMRemoveAttribute",{node:e,attribute:t}):m("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function gt(e,t){t=""+t,e.data!==t&&(m("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function H(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)&&!(typeof Symbol=="function"&&e&&Symbol.iterator in e))throw new Error("{#each} only works with iterable values.");return Ke(e)}function Fe(e,t,n){for(const o of Object.keys(t))~n.indexOf(o)||console.warn(`<${e}> received an unexpected slot "${o}".`)}class Ue extends Ne{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();v(this,"$$prop_def");v(this,"$$events_def");v(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);const{Object:We}=ve,B="src/App.svelte";function J(e,t,n){const o=e.slice();return o[5]=t[n],o}function Q(e){e[8]=e[9].default}function I(e){let t,n,o,s={ctx:e,current:null,token:null,hasCatch:!1,pending:fe,then:ae,catch:le,value:9,blocks:[,,,]};G(n=e[1],s);const r={c:function(){t=Oe(),s.block.c()},m:function(c,l){O(c,t,l),s.block.m(c,s.anchor=l),s.mount=()=>t.parentNode,s.anchor=t,o=!0},p:function(c,l){e=c,s.ctx=e,l&2&&n!==(n=e[1])&&G(n,s)||Le(s,e,l)},i:function(c){o||(y(s.block),o=!0)},o:function(c){for(let l=0;l<3;l+=1){const u=s.blocks[l];A(u)}o=!1},d:function(c){c&&D(t),s.block.d(c),s.token=null,s=null}};return m("SvelteRegisterBlock",{block:r,id:I.name,type:"if",source:"(18:2) {#if activeModuleRef}",ctx:e}),r}function le(e){const t={c:h,m:h,p:h,i:h,o:h,d:h};return m("SvelteRegisterBlock",{block:t,id:le.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:e}),t}function ae(e){Q(e);let t,n;t=new e[8]({props:{remultKitData:e[0]},$$inline:!0});const o={c:function(){Me(t.$$.fragment)},m:function(r,i){ce(t,r,i),n=!0},p:function(r,i){Q(r);const c={};i&1&&(c.remultKitData=r[0]),t.$set(c)},i:function(r){n||(y(t.$$.fragment,r),n=!0)},o:function(r){A(t.$$.fragment,r),n=!1},d:function(r){ie(t,r)}};return m("SvelteRegisterBlock",{block:o,id:ae.name,type:"then",source:"(19:62)        <ModuleComponent {remultKitData}",ctx:e}),o}function fe(e){const t={c:h,m:h,p:h,i:h,o:h,d:h};return m("SvelteRegisterBlock",{block:t,id:fe.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { onMount }',ctx:e}),t}function N(e){let t,n,o;function s(){return e[4](e[5])}const r={c:function(){t=L("button"),t.textContent=`Load ${e[5]}`,ue(t,"class","s-XsEmFtvddWTw"),C(t,B,38,4,652)},m:function(c,l){O(c,t,l),n||(o=Ve(t,"click",s,!1,!1,!1,!1),n=!0)},p:function(c,l){e=c},d:function(c){c&&D(t),n=!1,o()}};return m("SvelteRegisterBlock",{block:r,id:N.name,type:"each",source:"(26:2) {#each Object.keys(modules) as module}",ctx:e}),r}function T(e){let t,n,o,s,r=e[1]&&I(e),i=H(Object.keys(e[2])),c=[];for(let u=0;u<i.length;u+=1)c[u]=N(J(e,i,u));const l={c:function(){t=L("main"),r&&r.c(),n=Ee(),o=L("div");for(let d=0;d<c.length;d+=1)c[d].c();C(t,B,28,0,421),ue(o,"class","debug s-XsEmFtvddWTw"),C(o,B,36,0,587)},l:function(d){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(d,a){O(d,t,a),r&&r.m(t,null),O(d,n,a),O(d,o,a);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(o,null);s=!0},p:function(d,[a]){if(d[1]?r?(r.p(d,a),a&2&&y(r,1)):(r=I(d),r.c(),y(r,1),r.m(t,null)):r&&(re(),A(r,1,1,()=>{r=null}),se()),a&12){i=H(Object.keys(d[2]));let f;for(f=0;f<i.length;f+=1){const p=J(d,i,f);c[f]?c[f].p(p,a):(c[f]=N(p),c[f].c(),c[f].m(o,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=i.length}},i:function(d){s||(y(r),s=!0)},o:function(d){A(r),s=!1},d:function(d){d&&(D(t),D(n),D(o)),r&&r.d(),$e(c,d)}};return m("SvelteRegisterBlock",{block:l,id:T.name,type:"component",source:"",ctx:e}),l}function Xe(e,t,n){let{$$slots:o={},$$scope:s}=t;Fe("App",o,[]);let{remultKitData:r}=t;const i={auth:j(()=>import("./Page-D0sVlpL0.js"),__vite__mapDeps([0,1])),admin:j(()=>import("./Page-BvEVa5aU.js"),[]),storage:j(()=>import("./Page-Bd2Iyh4a.js"),[])};let c;function l(a){n(1,c=i[a])}W(()=>{l(r.module)}),e.$$.on_mount.push(function(){r===void 0&&!("remultKitData"in t||e.$$.bound[e.$$.props.remultKitData])&&console.warn("<App> was created without expected prop 'remultKitData'")});const u=["remultKitData"];We.keys(t).forEach(a=>{!~u.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<App> was created with unknown prop '${a}'`)});const d=a=>l(a);return e.$$set=a=>{"remultKitData"in a&&n(0,r=a.remultKitData)},e.$capture_state=()=>({onMount:W,remultKitData:r,modules:i,activeModuleRef:c,loadModule:l}),e.$inject_state=a=>{"remultKitData"in a&&n(0,r=a.remultKitData),"activeModuleRef"in a&&n(1,c=a.activeModuleRef)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[r,c,i,l,d]}class ze extends Ue{constructor(t){super(t),Ie(this,t,Xe,T,be,{remultKitData:0}),m("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:T.name})}get remultKitData(){throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set remultKitData(t){throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}new ze({target:document.getElementById("app"),props:{remultKitData}});export{tt as A,nt as B,et as C,_e as D,rt as E,ot as F,L as G,ut as H,C as I,ct as J,Ve as K,pt as L,Ee as M,ne as N,ue as O,_t as P,gt as Q,at as R,Ue as S,lt as T,it as U,Me as V,ce as W,ie as X,be as a,Ie as b,He as c,m as d,ve as e,Ye as f,Qe as g,Fe as h,q as i,mt as j,ht as k,dt as l,st as m,h as n,ft as o,Ze as p,Oe as q,x as r,Z as s,O as t,y as u,Je as v,re as w,A as x,se as y,D as z};
