const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Demo-DlVZ_cSY.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Demo-ItZckBjn.css","assets/Demo-BtKcNBbv.js","assets/Demo-B3g-GvkY.css","assets/Demo-JR3q9Pan.js","assets/Demo-Cw1W-wl7.css","assets/Demo-BlfL3giD.js","assets/Demo-dcNytDtU.css","assets/Demo-C4fywzWP.js","assets/Demo-RMIndq_X.css","assets/Demo-CJ4jIUVb.js","assets/index-geiG-xwh.js","assets/Demo-B5aAOX16.js","assets/Demo-BhY8-bCb.js","assets/SectionPage-BytIbUjg.js","assets/NotFound.vue_vue_type_script_setup_true_lang-CbfYzPb6.js","assets/ExamplePage-C7ulGxz8.js","assets/NotFound-DPcILj-l.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Os(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},Wt=[],it=()=>{},ui=()=>!1,_o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),ge=Object.assign,Ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Za=Object.prototype.hasOwnProperty,re=(e,t)=>Za.call(e,t),j=Array.isArray,Dt=e=>fn(e)==="[object Map]",gt=e=>fn(e)==="[object Set]",rr=e=>fn(e)==="[object Date]",ec=e=>fn(e)==="[object RegExp]",K=e=>typeof e=="function",de=e=>typeof e=="string",Fe=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",pi=e=>(ne(e)||K(e))&&K(e.then)&&K(e.catch),fi=Object.prototype.toString,fn=e=>fi.call(e),tc=e=>fn(e).slice(8,-1),mi=e=>fn(e)==="[object Object]",ko=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},nc=/-\w/g,Ee=To(e=>e.replace(nc,t=>t.slice(1).toUpperCase())),oc=/\B([A-Z])/g,_t=To(e=>e.replace(oc,"-$1").toLowerCase()),Ro=To(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bo=To(e=>e?`on${Ro(e)}`:""),_e=(e,t)=>!Object.is(e,t),sn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},vi=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Co=e=>{const t=parseFloat(e);return isNaN(t)?e:t},sc=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let ir;const Po=()=>ir||(ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Is(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=de(o)?cc(o):Is(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(de(e)||ne(e))return e}const rc=/;(?![^(]*\))/g,ic=/:([^]+)/,ac=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function cc(e){const t={};return e.replace(ac,n=>n.startsWith("/*")?"":n).split(rc).forEach(n=>{if(n){const o=n.split(ic);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function An(e){let t="";if(de(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const o=An(e[n]);o&&(t+=o+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dc=Os(lc);function bi(e){return!!e||e===""}function uc(e,t,n){if(e.length!==t.length)return!1;let o=!0;for(let s=0;o&&s<e.length;s++)o=ht(e[s],t[s],n);return o}function ar(e,t,n){if(e.size!==t.size)return!1;const o=Array.from(t),s=new Uint8Array(o.length);for(const r of e){let i=-1;for(let a=0;a<o.length;a++)if(!s[a]&&ht(r,o[a],n)){i=a;break}if(i<0)return!1;s[i]=1}return!0}function pc(e,t,n){let o=Dt(e),s=Dt(t);if(o||s||(o=gt(e),s=gt(t),o||s))return o&&s?ar(e,t,n):!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const a in e){const c=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(c&&!l||!c&&l||!ht(e[a],t[a],n))return!1}return String(e)===String(t)}function cr(e,t,n,o){n||(n=[new Map,new Map]);const[s,r]=n;if(s.has(e)||r.has(t))return s.get(e)===t&&r.get(t)===e;s.set(e,t),r.set(t,e);const i=o(e,t,n);return s.delete(e),r.delete(t),i}function ht(e,t,n){if(e===t)return!0;let o=rr(e),s=rr(t);return o||s?o&&s?e.getTime()===t.getTime():!1:(o=Fe(e),s=Fe(t),o||s?e===t:(o=j(e),s=j(t),o||s?o&&s?cr(e,t,n,uc):!1:(o=ne(e),s=ne(t),o||s?!o||!s?!1:cr(e,t,n,pc):String(e)===String(t))))}function As(e,t){return e.findIndex(n=>ht(n,t))}const gi=e=>!!(e&&e.__v_isRef===!0),zt=e=>de(e)?e:e==null?"":j(e)||ne(e)&&(e.toString===fi||!K(e.toString))?gi(e)?zt(e.value):JSON.stringify(e,hi,2):String(e),hi=(e,t)=>gi(t)?hi(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],r)=>(n[zo(o,r)+" =>"]=s,n),{})}:gt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zo(n))}:Fe(t)?zo(t):ne(t)&&!j(t)&&!mi(t)?String(t):t,zo=(e,t="")=>{var n;return Fe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ye;class yi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ye&&(ye.active?(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const o=this.effects.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){++this._on===1&&(this.prevScope=ye,ye=this)}off(){if(this._on>0&&--this._on===0){if(ye===this)ye=this.prevScope;else{let t=ye;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,o=s.length;n<o;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xi(e){return new yi(e)}function wi(){return ye}function fc(e,t=!1){ye&&ye.cleanups.push(e)}let le;const qo=new WeakSet;class _i{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ye&&(ye.active?ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ki(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lr(this),Ti(this);const t=le,n=Ke;le=this,Ke=!0;try{return this.fn()}finally{Ri(this),le=t,Ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ls(t);this.deps=this.depsTail=void 0,lr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ls(this)&&this.run()}get dirty(){return ls(this)}}let Si=0,Tn,Rn;function ki(e,t=!1){if(e.flags|=8,t){e.next=Rn,Rn=e;return}e.next=Tn,Tn=e}function Ds(){Si++}function Vs(){if(--Si>0)return;if(Rn){let t=Rn;for(Rn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Tn;){let t=Tn;for(Tn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Ti(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ri(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Ls(o),mc(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function ls(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ci(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ci(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dn)||(e.globalVersion=Dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ls(e))))return;e.flags|=2;const t=e.dep,n=le,o=Ke;le=e,Ke=!0;try{Ti(e);const s=e.fn(e._value);(t.version===0||_e(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=n,Ke=o,Ri(e),e.flags&=-3}}function Ls(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ls(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function mc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ke=!0;const Pi=[];function yt(){Pi.push(Ke),Ke=!1}function xt(){const e=Pi.pop();Ke=e===void 0?!0:e}function lr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let Dn=0;class vc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!le||!Ke||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new vc(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Ei(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=o)}return n}trigger(t){this.version++,Dn++,this.notify(t)}notify(t){Ds();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vs()}}}function Ei(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Ei(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ro=new WeakMap,Jt=Symbol(""),ds=Symbol(""),Vn=Symbol("");function Re(e,t,n){if(Ke&&le){let o=ro.get(e);o||ro.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Eo),s.map=o,s.key=n),s.track()}}function ft(e,t,n,o,s,r){const i=ro.get(e);if(!i){Dn++;return}const a=c=>{c&&c.trigger()};if(Ds(),t==="clear")i.forEach(a);else{const c=j(e),l=c&&ko(n);if(c&&n==="length"){const d=Number(o);i.forEach((u,m)=>{(m==="length"||m===Vn||!Fe(m)&&m>=d)&&a(u)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),l&&a(i.get(Vn)),t){case"add":c?l&&a(i.get("length")):(a(i.get(Jt)),Dt(e)&&a(i.get(ds)));break;case"delete":c||(a(i.get(Jt)),Dt(e)&&a(i.get(ds)));break;case"set":Dt(e)&&a(i.get(Jt));break}}Vs()}function bc(e,t){const n=ro.get(e);return n&&n.get(t)}function en(e){const t=Y(e);return t===e||(Re(t,"iterate",Vn),Ue(e))?t:at(e)?We(e)?t.map(n=>Ut(ze(n))):t.map(Ut):t.map(ze)}function Oo(e){return Re(e=Y(e),"iterate",Vn),e}function ot(e,t){return at(e)?Ut(We(e)?ze(t):t):ze(t)}const gc={__proto__:null,[Symbol.iterator](){return Ko(this,Symbol.iterator,e=>ot(this,e))},concat(...e){return en(this).concat(...e.map(t=>j(t)?en(t):t))},entries(){return Ko(this,"entries",e=>(e[1]=ot(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(o=>ot(this,o)),arguments)},find(e,t){return lt(this,"find",e,t,n=>ot(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>ot(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Wo(this,"includes",e)},indexOf(...e){return Wo(this,"indexOf",e)},join(e){return en(this).join(e)},lastIndexOf(...e){return Wo(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return vn(this,"pop")},push(...e){return vn(this,"push",e)},reduce(e,...t){return dr(this,"reduce",e,t)},reduceRight(e,...t){return dr(this,"reduceRight",e,t)},shift(){return vn(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return vn(this,"splice",e)},toReversed(){return en(this).toReversed()},toSorted(e){return en(this).toSorted(e)},toSpliced(...e){return en(this).toSpliced(...e)},unshift(...e){return vn(this,"unshift",e)},values(){return Ko(this,"values",e=>ot(this,e))}};function Ko(e,t,n){const o=Oo(e),s=o[t]();return o!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const hc=Array.prototype;function lt(e,t,n,o,s,r){const i=Oo(e),a=i!==e&&!Ue(e),c=i[t];if(c!==hc[t]){const u=c.apply(e,r);return a?ze(u):u}let l=n;i!==e&&(a?l=function(u,m){return n.call(this,ot(e,u),m,e)}:n.length>2&&(l=function(u,m){return n.call(this,u,m,e)}));const d=c.call(i,l,o);return a&&s?s(d):d}function dr(e,t,n,o){const s=Oo(e),r=s!==e&&!Ue(e);let i=n,a=!1;s!==e&&(r?(a=o.length===0,i=function(l,d,u){return a&&(a=!1,l=ot(e,l)),n.call(this,l,ot(e,d),u,e)}):n.length>3&&(i=function(l,d,u){return n.call(this,l,d,u,e)}));const c=s[t](i,...o);return a?ot(e,c):c}function Wo(e,t,n){const o=Y(e);Re(o,"iterate",Vn);const s=o[t](...n);return(s===-1||s===!1)&&Ao(n[0])?(n[0]=Y(n[0]),o[t](...n)):s}function vn(e,t,n=[]){yt(),Ds();const o=Y(e)[t].apply(e,n);return Vs(),xt(),o}const yc=Os("__proto__,__v_isRef,__isVue"),Oi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fe));function xc(e){Fe(e)||(e=String(e));const t=Y(this);return Re(t,"has",e),t.hasOwnProperty(e)}class Mi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?$i:Li:r?Vi:Di).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=j(t);if(!s){let c;if(i&&(c=gc[n]))return c;if(n==="hasOwnProperty")return xc}const a=Reflect.get(t,n,me(t)?t:o);if((Fe(n)?Oi.has(n):yc(n))||(s||Re(t,"get",n),r))return a;if(me(a)){const c=i&&ko(n)?a:a.value;return s&&ne(c)?ps(c):c}return ne(a)?s?ps(a):Hn(a):a}}class Ii extends Mi{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];const i=j(t)&&ko(n);if(!this._isShallow){const l=at(r);if(!Ue(o)&&!at(o)&&(r=Y(r),o=Y(o)),!i&&me(r)&&!me(o))return l||(r.value=o),!0}const a=i?Number(n)<t.length:re(t,n),c=Reflect.set(t,n,o,me(t)?t:s);return t===Y(s)&&c&&(a?_e(o,r)&&ft(t,"set",n,o):ft(t,"add",n,o)),c}deleteProperty(t,n){const o=re(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&ft(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!Fe(n)||!Oi.has(n))&&Re(t,"has",n),o}ownKeys(t){return Re(t,"iterate",j(t)?"length":Jt),Reflect.ownKeys(t)}}class Ai extends Mi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const wc=new Ii,_c=new Ai,Sc=new Ii(!0),kc=new Ai(!0),us=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function Tc(e,t,n){return function(...o){const s=this.__v_raw,r=Y(s),i=Dt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=s[e](...o),d=n?us:t?Ut:ze;return!t&&Re(r,"iterate",c?ds:Jt),ge(Object.create(l),{next(){const{value:u,done:m}=l.next();return m?{value:u,done:m}:{value:a?[d(u[0]),d(u[1])]:d(u),done:m}}})}}function Jn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Rc(e,t){const n={get(s){const r=this.__v_raw,i=Y(r),a=Y(s);e||(_e(s,a)&&Re(i,"get",s),Re(i,"get",a));const{has:c}=Gn(i),l=t?us:e?Ut:ze;if(c.call(i,s))return l(r.get(s));if(c.call(i,a))return l(r.get(a));r!==i&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Re(Y(s),"iterate",Jt),s.size},has(s){const r=this.__v_raw,i=Y(r),a=Y(s);return e||(_e(s,a)&&Re(i,"has",s),Re(i,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const i=this,a=i.__v_raw,c=Y(a),l=t?us:e?Ut:ze;return!e&&Re(c,"iterate",Jt),a.forEach((d,u)=>s.call(r,l(d),l(u),i))}};return ge(n,e?{add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear")}:{add(s){const r=Y(this),i=Gn(r),a=Y(s),c=!t&&!Ue(s)&&!at(s)?a:s;return i.has.call(r,c)||_e(s,c)&&i.has.call(r,s)||_e(a,c)&&i.has.call(r,a)||(r.add(c),ft(r,"add",c,c)),this},set(s,r){!t&&!Ue(r)&&!at(r)&&(r=Y(r));const i=Y(this),{has:a,get:c}=Gn(i);let l=a.call(i,s);l||(s=Y(s),l=a.call(i,s));const d=c.call(i,s);return i.set(s,r),l?_e(r,d)&&ft(i,"set",s,r):ft(i,"add",s,r),this},delete(s){const r=Y(this),{has:i,get:a}=Gn(r);let c=i.call(r,s);c||(s=Y(s),c=i.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&ft(r,"delete",s,void 0),l},clear(){const s=Y(this),r=s.size!==0,i=s.clear();return r&&ft(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Tc(s,e,t)}),n}function Mo(e,t){const n=Rc(e,t);return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(re(n,s)&&s in o?n:o,s,r)}const Cc={get:Mo(!1,!1)},Pc={get:Mo(!1,!0)},Ec={get:Mo(!0,!1)},Oc={get:Mo(!0,!0)},Di=new WeakMap,Vi=new WeakMap,Li=new WeakMap,$i=new WeakMap;function Mc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hn(e){return at(e)?e:Io(e,!1,wc,Cc,Di)}function Ui(e){return Io(e,!1,Sc,Pc,Vi)}function ps(e){return Io(e,!0,_c,Ec,Li)}function Nb(e){return Io(e,!0,kc,Oc,$i)}function Io(e,t,n,o,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const i=Mc(tc(e));if(i===0)return e;const a=new Proxy(e,i===2?o:n);return s.set(e,a),a}function We(e){return at(e)?We(e.__v_raw):!!(e&&e.__v_isReactive)}function at(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function Ao(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function $s(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&vi(e,"__v_skip",!0),e}const ze=e=>ne(e)?Hn(e):e,Ut=e=>ne(e)?ps(e):e;function me(e){return e?e.__v_isRef===!0:!1}function vt(e){return Ni(e,!1)}function Fi(e){return Ni(e,!0)}function Ni(e,t){return me(e)?e:new Ic(e,t)}class Ic{constructor(t,n){this.dep=new Eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ue(t)||at(t);t=o?t:Y(t),_e(t,n)&&(this._rawValue=t,this._value=o?t:ze(t),this.dep.trigger())}}function jb(e){e.dep&&e.dep.trigger()}function Vt(e){return me(e)?e.value:e}function Hb(e){return K(e)?e():Vt(e)}const Ac={get:(e,t,n)=>t==="__v_raw"?e:Vt(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ji(e){return We(e)?e:new Proxy(e,Ac)}class Dc{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Eo,{get:o,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=o,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Vc(e){return new Dc(e)}function Lc(e){const t=j(e)?new Array(e.length):{};for(const n in e)t[n]=Hi(e,n);return t}class $c{constructor(t,n,o){this._object=t,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0,this._key=Fe(n)?n:String(n),this._raw=Y(t);let s=!0,r=t;if(!j(t)||Fe(this._key)||!ko(this._key))do s=!Ao(r)||Ue(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Vt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&me(this._raw[this._key])){const n=this._object[this._key];if(me(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return bc(this._raw,this._key)}}class Uc{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Fc(e,t,n){return me(e)?e:K(e)?new Uc(e):ne(e)&&arguments.length>1?Hi(e,t,n):vt(e)}function Hi(e,t,n){return new $c(e,t,n)}class Nc{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return ki(this,!0),!0}get value(){const t=this.dep.track();return Ci(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jc(e,t,n=!1){let o,s;return K(e)?o=e:(o=e.get,s=e.set),new Nc(o,s,n)}const Qn={},io=new WeakMap;let qt;function Hc(e,t=!1,n=qt){if(n){let o=io.get(n);o||io.set(n,o=[]),o.push(e)}}function Bc(e,t,n=te){const{immediate:o,deep:s,once:r,scheduler:i,augmentJob:a,call:c}=n,l=w=>s?w:Ue(w)||s===!1||s===0?mt(w,1):mt(w);let d,u,m,v,y=!1,h=!1;if(me(e)?(u=()=>e.value,y=Ue(e)):We(e)?(u=()=>l(e),y=!0):j(e)?(h=!0,y=e.some(w=>We(w)||Ue(w)),u=()=>e.map(w=>{if(me(w))return w.value;if(We(w))return l(w);if(K(w))return c?c(w,2):w()})):K(e)?t?u=c?()=>c(e,2):e:u=()=>{if(m){yt();try{m()}finally{xt()}}const w=qt;qt=d;try{return c?c(e,3,[v]):e(v)}finally{qt=w}}:u=it,t&&s){const w=u,M=s===!0?1/0:s;u=()=>mt(w(),M)}const P=wi(),I=()=>{d.stop(),P&&P.active&&Ms(P.effects,d)};if(r&&t){const w=t;t=(...M)=>{const G=w(...M);return I(),G}}let g=h?new Array(e.length).fill(Qn):Qn;const T=w=>{if(!(!(d.flags&1)||!d.dirty&&!w))if(t){const M=d.run();if(w||s||y||(h?M.some((G,L)=>_e(G,g[L])):_e(M,g))){m&&m();const G=qt;qt=d;try{const L=[M,g===Qn?void 0:h&&g[0]===Qn?[]:g,v];g=M,c?c(t,3,L):t(...L)}finally{qt=G}}}else d.run()};return a&&a(T),d=new _i(u),d.scheduler=i?()=>i(T,!1):T,v=w=>Hc(w,!1,d),m=d.onStop=()=>{const w=io.get(d);if(w){if(c)c(w,4);else for(const M of w)M();io.delete(d)}},t?o?T(!0):g=d.run():i?i(T.bind(null,!0),!0):d.run(),I.pause=d.pause.bind(d),I.resume=d.resume.bind(d),I.stop=I,I}function mt(e,t=1/0,n){if(t<=0||!ne(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,me(e))mt(e.value,t,n);else if(j(e))for(let o=0;o<e.length;o++)mt(e[o],t,n);else if(gt(e)||Dt(e))e.forEach(o=>{mt(o,t,n)});else if(mi(e)){for(const o in e)mt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&mt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(e,t,n,o){try{return o?e(...o):e()}catch(s){zn(s,t,n)}}function qe(e,t,n,o){if(K(e)){const s=Bn(e,t,n,o);return s&&pi(s)&&s.catch(r=>{zn(r,t,n)}),s}if(j(e)){const s=[];for(let r=0;r<e.length;r++)s.push(qe(e[r],t,n,o));return s}}function zn(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||te;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,c,l)===!1)return}a=a.parent}if(r){yt(),Bn(r,null,10,[e,c,l]),xt();return}}zc(e,n,s,o,i)}function zc(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const De=[];let tt=-1;const rn=[];let Ot=null,nn=0;const Bi=Promise.resolve();let ao=null;function Do(e){const t=ao||Bi;return e?t.then(this?e.bind(this):e):t}function qc(e){let t=tt+1,n=De.length;for(;t<n;){const o=t+n>>>1,s=De[o],r=Ln(s);r<e||r===e&&s.flags&2?t=o+1:n=o}return t}function Us(e){if(!(e.flags&1)){const t=Ln(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=Ln(n)?De.push(e):De.splice(qc(t),0,e),e.flags|=1,zi()}}function zi(){ao||(ao=Bi.then(Ki))}function Kc(e){if(!j(e))Ot&&e.id===-1?Ot.splice(nn+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);zi()}function ur(e,t,n=tt+1){for(;n<De.length;n++){const o=De[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;De.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function qi(e){if(rn.length){const t=[...new Set(rn)].sort((n,o)=>Ln(n)-Ln(o));if(rn.length=0,Ot){for(let n=0;n<t.length;n++)Ot.push(t[n]);return}for(Ot=t,nn=0;nn<Ot.length;nn++){const n=Ot[nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,nn=0}}const Ln=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ki(e){try{for(tt=0;tt<De.length;tt++){const t=De[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<De.length;tt++){const t=De[tt];t&&(t.flags&=-2)}tt=-1,De.length=0,qi(),ao=null,(De.length||rn.length)&&Ki()}}let Te=null,Wi=null;function co(e){const t=Te;return Te=e,Wi=e&&e.type.__scopeId||null,t}function Cn(e,t=Te,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&vo(-1);const r=co(t),i=bt.length;let a;try{a=e(...s)}finally{for(let c=bt.length;c>i;c--)Gs();co(r),o._d&&vo(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function Wc(e,t){if(Te===null)return e;const n=No(Te),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,i,a,c=te]=t[s];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&mt(i),o.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function jt(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];r&&(a.oldValue=r[i].value);let c=a.dir[o];c&&(yt(),qe(c,n,8,[e.el,a,e,t]),xt())}}function no(e,t){if(ke){let n=ke.provides;const o=ke.parent&&ke.parent.provides;o===n&&(n=ke.provides=Object.create(o)),n[e]=t}}function Ge(e,t,n=!1){const o=Xt();if(o||Qt){let s=Qt?Qt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(o&&o.proxy):t}}function Gc(){return!!(Xt()||Qt)}const Jc=Symbol.for("v-scx"),Qc=()=>Ge(Jc);function Bb(e,t){return Vo(e,null,t)}function Xc(e,t){return Vo(e,null,{flush:"sync"})}function Lt(e,t,n){return Vo(e,t,n)}function Vo(e,t,n=te){const{immediate:o,deep:s,flush:r,once:i}=n,a=ge({},n),c=t&&o||!t&&r!=="post";let l;if(cn){if(r==="sync"){const v=Qc();l=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=it,v.resume=it,v.pause=it,v}}const d=ke;a.call=(v,y,h)=>qe(v,d,y,h);let u=!1;r==="post"?a.scheduler=v=>{xe(v,d&&d.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(v,y)=>{y?v():Us(v)}),a.augmentJob=v=>{t&&(v.flags|=4),u&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=Bc(e,t,a);return cn&&(l?l.push(m):c&&m()),m}function Yc(e,t,n){const o=this.proxy,s=de(e)?e.includes(".")?Gi(o,e):()=>o[e]:e.bind(o,o);let r;K(t)?r=t:(r=t.handler,n=t);const i=Wn(this),a=Vo(s,r.bind(o),n);return i(),a}function Gi(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const Ct=new WeakMap,Ji=Symbol("_vte"),Lo=e=>e.__isTeleport,Kt=e=>e&&(e.disabled||e.disabled===""),Zc=e=>e&&(e.defer||e.defer===""),pr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,fr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,fs=(e,t)=>{const n=e&&e.to;return de(n)?t?t(n):null:n},el={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,r,i,a,c,l){const{mc:d,pc:u,pbc:m,o:{insert:v,querySelector:y,createText:h,createComment:P,parentNode:I}}=l,g=Kt(t.props);let{dynamicChildren:T}=t;const w=(L,N,C)=>{L.shapeFlag&16&&d(L.children,N,C,s,r,i,a,c)},M=(L=t)=>{const N=Kt(L.props),C=L.target=fs(L.props,y),H=ms(C,L,h,v);C&&(i!=="svg"&&pr(C)?i="svg":i!=="mathml"&&fr(C)&&(i="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(C),N||(w(L,C,H),xn(L,!1)))},G=L=>{const N=()=>{if(Ct.get(L)===N){if(Ct.delete(L),Kt(L.props)){const C=I(L.el)||n;w(L,C,L.anchor),xn(L,!0)}M(L)}};Ct.set(L,N),xe(N,r)};if(e==null){const L=t.el=h(""),N=t.anchor=h("");if(v(L,n,o),v(N,n,o),Zc(t.props)||r&&r.pendingBranch){G(t);return}g&&(w(t,n,N),xn(t,!0)),M()}else{t.el=e.el;const L=t.anchor=e.anchor,N=Ct.get(e);if(N){N.flags|=8,Ct.delete(e),G(t);return}t.targetStart=e.targetStart;const C=t.target=e.target,H=t.targetAnchor=e.targetAnchor,J=Kt(e.props),D=J?n:C,X=J?L:H;if(i==="svg"||pr(C)?i="svg":(i==="mathml"||fr(C))&&(i="mathml"),T?(m(e.dynamicChildren,T,D,s,r,i,a),Ws(e,t,!0)):c||u(e,t,D,X,s,r,i,a,!1),g)J?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Xn(t,n,L,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const pe=fs(t.props,y);pe&&(t.target=pe,Xn(t,pe,null,l,0))}else J&&Xn(t,C,H,l,1);xn(t,g)}},remove(e,t,n,{um:o,o:{remove:s}},r){const{shapeFlag:i,children:a,anchor:c,targetStart:l,targetAnchor:d,target:u,props:m}=e,v=Kt(m),y=r||!v,h=Ct.get(e);if(h&&(h.flags|=8,Ct.delete(e)),u&&(s(l),s(d)),r&&s(c),!h&&(v||u)&&i&16)for(let P=0;P<a.length;P++){const I=a[P];o(I,t,n,y,!!I.dynamicChildren)}},move:Xn,hydrate:tl};function Xn(e,t,n,{o:{insert:o},m:s},r=2){r===0&&o(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:l,props:d}=e,u=r===2;if(u&&o(i,t,n),!Ct.has(e)&&(!u||Kt(d))&&c&16)for(let m=0;m<l.length;m++)s(l[m],t,n,2);u&&o(a,t,n)}function tl(e,t,n,o,s,r,{o:{nextSibling:i,parentNode:a,querySelector:c,insert:l,createText:d}},u){function m(P,I){let g=I;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")t.targetStart=g;else if(g.data==="teleport anchor"){t.targetAnchor=g,P._lpa=t.targetAnchor&&i(t.targetAnchor);break}}g=i(g)}}function v(P,I){I.anchor=u(i(P),I,a(P),n,o,s,r)}const y=t.target=fs(t.props,c),h=Kt(t.props);if(y){const P=y._lpa||y.firstChild;t.shapeFlag&16&&(h?(v(e,t),m(y,P),t.targetAnchor||ms(y,t,d,l,a(e)===y?e:null)):(t.anchor=i(e),m(y,P),t.targetAnchor||ms(y,t,d,l),u(P&&i(P),t,y,n,o,s,r))),xn(t,h)}else h&&t.shapeFlag&16&&(v(e,t),t.targetStart=e,t.targetAnchor=i(e));return t.anchor&&i(t.anchor)}const zb=el;function xn(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function ms(e,t,n,o,s=null){const r=t.targetStart=n(""),i=t.targetAnchor=n("");return r[Ji]=i,e&&(o(r,e,s),o(i,e,s)),i}const Be=Symbol("_leaveCb"),bn=Symbol("_enterCb");function Qi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return js(()=>{e.isMounted=!0}),Bs(()=>{e.isUnmounting=!0}),e}const je=[Function,Array],Xi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},Yi=e=>{const t=e.subTree;return t.component?Yi(t.component):t},nl={name:"BaseTransition",props:Xi,setup(e,{slots:t}){const n=Xt(),o=Qi();return()=>{const s=t.default&&Fs(t.default(),!0),r=s&&s.length?Zi(s):n.subTree?bo():void 0;if(!r)return;const i=Y(e),{mode:a}=i;if(o.isLeaving)return Go(r);const c=lo(r);if(!c)return Go(r);let l=$n(c,i,o,n,u=>l=u);c.type!==Se&&Ft(c,l);let d=n.subTree&&lo(n.subTree);if(d&&d.type!==Se&&!It(d,c)&&Yi(n).type!==Se){let u=$n(d,i,o,n);if(Ft(d,u),a==="out-in"&&c.type!==Se)return o.isLeaving=!0,u.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete u.afterLeave,d=void 0},Go(r);a==="in-out"&&c.type!==Se?u.delayLeave=(m,v,y)=>{const h=ea(o,d);h[String(d.key)]=d,m[Be]=()=>{v(),m[Be]=void 0,delete l.delayedLeave,d=void 0},l.delayedLeave=()=>{y(),delete l.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Zi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Se){t=n;break}}return t}const ol=nl;function ea(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function $n(e,t,n,o,s){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:m,onLeave:v,onAfterLeave:y,onLeaveCancelled:h,onBeforeAppear:P,onAppear:I,onAfterAppear:g,onAppearCancelled:T}=t,w=String(e.key),M=ea(n,e),G=(C,H)=>{C&&qe(C,o,9,H)},L=(C,H)=>{const J=H[1];G(C,H),j(C)?C.every(D=>D.length<=1)&&J():C.length<=1&&J()},N={mode:i,persisted:a,beforeEnter(C){let H=c;if(!n.isMounted)if(r)H=P||c;else return;C[Be]&&C[Be](!0);const J=M[w];J&&It(e,J)&&J.el[Be]&&J.el[Be](),G(H,[C])},enter(C){if(M[w]===e)return;let H=l,J=d,D=u;if(!n.isMounted)if(r)H=I||l,J=g||d,D=T||u;else return;let X=!1;C[bn]=Oe=>{X||(X=!0,Oe?G(D,[C]):G(J,[C]),N.delayedLeave&&N.delayedLeave(),C[bn]=void 0)};const pe=C[bn].bind(null,!1);H?L(H,[C,pe]):pe()},leave(C,H){const J=String(e.key);if(C[bn]&&C[bn](!0),n.isUnmounting)return H();G(m,[C]);let D=!1;C[Be]=pe=>{D||(D=!0,H(),pe?G(h,[C]):G(y,[C]),C[Be]=void 0,M[J]===e&&delete M[J])};const X=C[Be].bind(null,!1);M[J]=e,v?L(v,[C,X]):X()},clone(C){const H=$n(C,t,n,o,s);return s&&s(H),H}};return N}function Go(e){if(Kn(e))return e=wt(e),e.children=null,e}function lo(e){if(!Kn(e))return Lo(e.type)&&e.children?Zi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Ft(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Ft(Lo(n.type)&&lo(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fs(e,t=!1,n){let o=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Ce?(i.patchFlag&128&&s++,o=o.concat(Fs(i.children,t,a))):(t||i.type!==Se)&&o.push(a!=null?wt(i,{key:a}):i)}if(s>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function qn(e,t){return K(e)?ge({name:e.name},t,{setup:e}):e}function Ns(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qb(e){const t=Xt(),n=Fi(null);if(t){const s=t.refs===te?t.refs={}:t.refs;Object.defineProperty(s,e,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function mr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const uo=new WeakMap;function Pn(e,t,n,o,s=!1){if(j(e)){e.forEach((h,P)=>Pn(h,t&&(j(t)?t[P]:t),n,o,s));return}if($t(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Pn(e,t,n,o.component.subTree);return}const r=o.shapeFlag&4?No(o.component):o.el,i=s?null:r,{i:a,r:c}=e,l=t&&t.r,d=a.refs===te?a.refs={}:a.refs,u=a.setupState,m=Y(u),v=u===te?ui:h=>mr(d,h)?!1:re(m,h),y=(h,P)=>!(P&&mr(d,P));if(l!=null&&l!==c){if(vr(t),de(l))d[l]=null,v(l)&&(u[l]=null);else if(me(l)){const h=t;y(l,h.k)&&(l.value=null),h.k&&(d[h.k]=null)}}if(K(c))Bn(c,a,12,[i,d]);else{const h=de(c),P=me(c);if(h||P){const I=()=>{if(e.f){const g=h?v(c)?u[c]:d[c]:y()||!e.k?c.value:d[e.k];if(s)j(g)&&Ms(g,r);else if(j(g))g.includes(r)||g.push(r);else if(h)d[c]=[r],v(c)&&(u[c]=d[c]);else{const T=[r];y(c,e.k)&&(c.value=T),e.k&&(d[e.k]=T)}}else h?(d[c]=i,v(c)&&(u[c]=i)):P&&(y(c,e.k)&&(c.value=i),e.k&&(d[e.k]=i))};if(i){const g=()=>{I(),uo.delete(e)};g.id=-1,uo.set(e,g),xe(g,n)}else vr(e),I()}}}function vr(e){const t=uo.get(e);t&&(t.flags|=8,uo.delete(e))}const br=e=>e.nodeType===8;Po().requestIdleCallback;Po().cancelIdleCallback;function sl(e,t){if(br(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(br(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const $t=e=>!!e.type.__asyncLoader;function rl(e){K(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:s=200,hydrate:r,timeout:i,suspensible:a=!0,onError:c}=e;let l=null,d,u=0;const m=()=>(u++,l=null,v()),v=()=>{let y;return l||(y=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),c)return new Promise((P,I)=>{c(h,()=>P(m()),()=>I(h),u+1)});throw h}).then(h=>y!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),d=h,h)))};return qn({name:"AsyncComponentWrapper",__asyncLoader:v,__asyncHydrate(y,h,P){const I=y.isConnected;let g=!1;(h.bu||(h.bu=[])).push(()=>g=!0);const T=()=>{g||!y.parentNode||I&&!y.isConnected||P()},w=r?()=>{const M=r(T,G=>sl(y,G));M&&(h.bum||(h.bum=[])).push(M)}:T;d?w():v().then(()=>!h.isUnmounted&&w())},get __asyncResolved(){return d},setup(){const y=ke;if(Ns(y),d)return()=>Yn(d,y);const h=M=>{l=null,zn(M,y,13,!o)};if(a&&y.suspense||cn)return v().then(M=>()=>Yn(M,y)).catch(M=>(h(M),()=>o?fe(o,{error:M}):null));const P=vt(!1),I=vt(),g=vt(!!s);let T,w;return zs(()=>{T!=null&&clearTimeout(T),w!=null&&clearTimeout(w)}),s&&(w=setTimeout(()=>{y.isUnmounted||(g.value=!1)},s)),i!=null&&(T=setTimeout(()=>{if(!y.isUnmounted&&!P.value&&!I.value){const M=new Error(`Async component timed out after ${i}ms.`);h(M),I.value=M}},i)),v().then(()=>{y.isUnmounted||(P.value=!0,y.parent&&Kn(y.parent.vnode)&&y.parent.update())}).catch(M=>{if(y.isUnmounted){l=null;return}h(M),I.value=M}),()=>{if(P.value&&d)return Yn(d,y);if(I.value&&o)return fe(o,{error:I.value});if(n&&!g.value)return Yn(n,y)}}})}function Yn(e,t){const{ref:n,props:o,children:s,ce:r}=t.vnode,i=fe(e,o,s);return i.ref=n,i.ce=r,delete t.vnode.ce,i}const Kn=e=>e.type.__isKeepAlive,il={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Xt(),o=n.ctx;if(!o.renderer)return()=>{const g=t.default&&t.default();return g&&g.length===1?g[0]:g};const s=new Map,r=new Set;let i=null;const a=n.suspense,{renderer:{p:c,m:l,um:d,o:{createElement:u}}}=o,m=u("div");o.activate=(g,T,w,M,G)=>{const L=g.component;l(g,T,w,0,a),c(L.vnode,g,T,w,L,a,M,g.slotScopeIds,G),xe(()=>{L.isDeactivated=!1,L.a&&sn(L.a);const N=g.props&&g.props.onVnodeMounted;N&&He(N,L.parent,g)},a)},o.deactivate=g=>{const T=g.component;fo(T.m),fo(T.a),l(g,m,null,1,a),xe(()=>{T.da&&sn(T.da);const w=g.props&&g.props.onVnodeUnmounted;w&&He(w,T.parent,g),T.isDeactivated=!0},a)};function v(g){Jo(g),d(g,n,a,!0)}function y(g){s.forEach((T,w)=>{const M=ws($t(T)?T.type.__asyncResolved||{}:T.type);M&&!g(M)&&h(w)})}function h(g){const T=s.get(g);T&&(!i||!It(T,i))?v(T):i&&Jo(i),s.delete(g),r.delete(g)}Lt(()=>[e.include,e.exclude],([g,T])=>{g&&y(w=>wn(g,w)),T&&y(w=>!wn(T,w))},{flush:"post",deep:!0});let P=null;const I=()=>{P!=null&&(mo(n.subTree.type)?xe(()=>{const g=Zn(n.subTree);g.component&&s.set(P,g)},n.subTree.suspense):s.set(P,Zn(n.subTree)))};return js(I),Hs(I),Bs(()=>{s.forEach(g=>{const{subTree:T,suspense:w}=n,M=Zn(T);if(g.type===M.type&&g.key===M.key){Jo(M);const G=M.component.da;G&&xe(G,w);return}v(g)})}),()=>{if(P=null,!t.default)return i=null;const g=t.default(),T=g[0];if(g.length>1)return i=null,g;if(!an(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return i=null,T;let w=Zn(T);if(w.type===Se)return i=null,w;const M=w.type,G=ws($t(w)?w.type.__asyncResolved||{}:M),{include:L,exclude:N,max:C}=e;if(L&&(!G||!wn(L,G))||N&&G&&wn(N,G))return w.shapeFlag&=-257,i=w,T;const H=w.key==null?M:w.key,J=s.get(H);return w.el&&(w=wt(w),T.shapeFlag&128&&(T.ssContent=w)),P=H,J?(w.el=J.el,w.component=J.component,w.transition&&Ft(w,w.transition),w.shapeFlag|=512,r.delete(H),r.add(H)):(r.add(H),C&&r.size>parseInt(C,10)&&h(r.values().next().value)),w.shapeFlag|=256,i=w,mo(T.type)?T:w}}},Kb=il;function wn(e,t){return j(e)?e.some(n=>wn(n,t)):de(e)?e.split(",").includes(t):ec(e)?(e.lastIndex=0,e.test(t)):!1}function al(e,t){ta(e,"a",t)}function cl(e,t){ta(e,"da",t)}function ta(e,t,n=ke){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if($o(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Kn(s.parent.vnode)&&ll(o,t,n,s),s=s.parent}}function ll(e,t,n,o){const s=$o(t,e,o,!0);zs(()=>{Ms(o[t],s)},n)}function Jo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Zn(e){return e.shapeFlag&128?e.ssContent:e}function $o(e,t,n=ke,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{yt();const a=Wn(n),c=qe(t,n,e,i);return a(),xt(),c});return o?s.unshift(r):s.push(r),r}}const St=e=>(t,n=ke)=>{(!cn||e==="sp")&&$o(e,(...o)=>t(...o),n)},dl=St("bm"),js=St("m"),ul=St("bu"),Hs=St("u"),Bs=St("bum"),zs=St("um"),pl=St("sp"),fl=St("rtg"),ml=St("rtc");function vl(e,t=ke){$o("ec",e,t)}const na="components";function vs(e,t){return sa(na,e,!0,t)||e}const oa=Symbol.for("v-ndc");function Wb(e){return de(e)?sa(na,e,!1)||e:e||oa}function sa(e,t,n=!0,o=!1){const s=Te||ke;if(s){const r=s.type;{const a=ws(r,!1);if(a&&(a===t||a===Ee(t)||a===Ro(Ee(t))))return r}const i=gr(s[e]||r[e],t)||gr(s.appContext[e],t);return!i&&o?r:i}}function gr(e,t){return e&&(e[t]||e[Ee(t)]||e[Ro(Ee(t))])}function hr(e,t,n,o){let s;const r=n,i=j(e);if(i||de(e)){const a=i&&We(e);let c=!1,l=!1;a&&(c=!Ue(e),l=at(e),e=Oo(e)),s=new Array(e.length);for(let d=0,u=e.length;d<u;d++)s[d]=t(c?l?Ut(ze(e[d])):ze(e[d]):e[d],d,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,r)}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const d=a[c];s[c]=t(e[d],d,c,r)}}else s=[];return s}function Gb(e,t,n,o,s,r){if(n==null&&(n={}),Te.ce||Te.parent&&$t(Te.parent)&&Te.parent.ce){const l=n,d=Object.keys(l).length>0;return t!=="default"&&(l.name=t),Le(),xs(Ce,null,[fe("slot",l,o&&o())],d?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const a=bt.length;Le();let c;try{const l=i&&ra(i(n)),d=n.key||r||l&&l.key;c=xs(Ce,{key:(d&&!Fe(d)?d:`_${t}`)+(!l&&o?"_fb":"")},l||(o?o():[]),l&&e._===1?64:-2)}catch(l){for(let d=bt.length;d>a;d--)Gs();throw l}finally{i&&i._c&&(i._d=!0)}return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function ra(e){return e.some(t=>an(t)?!(t.type===Se||t.type===Ce&&!ra(t.children)):!0)?e:null}const bs=e=>e?ka(e)?No(e):bs(e.parent):null,En=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bs(e.parent),$root:e=>bs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>aa(e),$forceUpdate:e=>e.f||(e.f=()=>{Us(e.update)}),$nextTick:e=>e.n||(e.n=Do.bind(e.proxy)),$watch:e=>Yc.bind(e)}),Qo=(e,t)=>e!==te&&!e.__isScriptSetup&&re(e,t),bl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Qo(o,t))return i[t]=1,o[t];if(s!==te&&re(s,t))return i[t]=2,s[t];if(re(r,t))return i[t]=3,r[t];if(n!==te&&re(n,t))return i[t]=4,n[t];gs&&(i[t]=0)}}const l=En[t];let d,u;if(l)return t==="$attrs"&&Re(e.attrs,"get",""),l(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==te&&re(n,t))return i[t]=4,n[t];if(u=c.config.globalProperties,re(u,t))return u[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return Qo(s,t)?(s[t]=n,!0):o!==te&&re(o,t)?(o[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:r,type:i}},a){let c;return!!(n[a]||e!==te&&a[0]!=="$"&&re(e,a)||Qo(t,a)||re(r,a)||re(o,a)||re(En,a)||re(s.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function yr(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let gs=!0;function gl(e){const t=aa(e),n=e.proxy,o=e.ctx;gs=!1,t.beforeCreate&&xr(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:a,provide:c,inject:l,created:d,beforeMount:u,mounted:m,beforeUpdate:v,updated:y,activated:h,deactivated:P,beforeDestroy:I,beforeUnmount:g,destroyed:T,unmounted:w,render:M,renderTracked:G,renderTriggered:L,errorCaptured:N,serverPrefetch:C,expose:H,inheritAttrs:J,components:D,directives:X,filters:pe}=t;if(l&&hl(l,o,null),i)for(const Q in i){const oe=i[Q];K(oe)&&(o[Q]=oe.bind(n))}if(s){const Q=s.call(n,n);ne(Q)&&(e.data=Hn(Q))}if(gs=!0,r)for(const Q in r){const oe=r[Q],ct=K(oe)?oe.bind(n,n):K(oe.get)?oe.get.bind(n,n):it,kt=!K(oe)&&K(oe.set)?oe.set.bind(n):it,Qe=Pe({get:ct,set:kt});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Me=>Qe.value=Me})}if(a)for(const Q in a)ia(a[Q],o,n,Q);if(c){const Q=K(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(oe=>{no(oe,Q[oe])})}d&&xr(d,e,"c");function ae(Q,oe){j(oe)?oe.forEach(ct=>Q(ct.bind(n))):oe&&Q(oe.bind(n))}if(ae(dl,u),ae(js,m),ae(ul,v),ae(Hs,y),ae(al,h),ae(cl,P),ae(vl,N),ae(ml,G),ae(fl,L),ae(Bs,g),ae(zs,w),ae(pl,C),j(H))if(H.length){const Q=e.exposed||(e.exposed={});H.forEach(oe=>{Object.defineProperty(Q,oe,{get:()=>n[oe],set:ct=>n[oe]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===it&&(e.render=M),J!=null&&(e.inheritAttrs=J),D&&(e.components=D),X&&(e.directives=X),C&&Ns(e)}function hl(e,t,n=it){j(e)&&(e=hs(e));for(const o in e){const s=e[o];let r;ne(s)?"default"in s?r=Ge(s.from||o,s.default,!0):r=Ge(s.from||o):r=Ge(s),me(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function xr(e,t,n){qe(j(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ia(e,t,n,o){let s=o.includes(".")?Gi(n,o):()=>n[o];if(de(e)){const r=t[e];K(r)&&Lt(s,r)}else if(K(e))Lt(s,e.bind(n));else if(ne(e))if(j(e))e.forEach(r=>ia(r,t,n,o));else{const r=K(e.handler)?e.handler.bind(n):t[e.handler];K(r)&&Lt(s,r,e)}}function aa(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(l=>po(c,l,i,!0)),po(c,t,i)),ne(t)&&r.set(t,c),c}function po(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&po(e,r,n,!0),s&&s.forEach(i=>po(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const a=yl[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const yl={data:wr,props:_r,emits:_r,methods:_n,computed:_n,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:_n,directives:_n,watch:wl,provide:wr,inject:xl};function wr(e,t){return t?e?function(){return ge(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function xl(e,t){return _n(hs(e),hs(t))}function hs(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function _n(e,t){return e?ge(Object.create(null),e,t):t}function _r(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ge(Object.create(null),yr(e),yr(t??{})):t}function wl(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const o in t)n[o]=Ie(e[o],t[o]);return n}function ca(){return{app:null,config:{isNativeTag:ui,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _l=0;function Sl(e,t){return function(o,s=null){K(o)||(o=ge({},o)),s!=null&&!ne(s)&&(s=null);const r=ca(),i=new WeakSet,a=[];let c=!1;const l=r.app={_uid:_l++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:Yl,get config(){return r.config},set config(d){},use(d,...u){return i.has(d)||(d&&K(d.install)?(i.add(d),d.install(l,...u)):K(d)&&(i.add(d),d(l,...u))),l},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),l},component(d,u){return u?(r.components[d]=u,l):r.components[d]},directive(d,u){return u?(r.directives[d]=u,l):r.directives[d]},mount(d,u,m){if(!c){const v=l._ceVNode||fe(o,s);return v.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(v,d,m),c=!0,l._container=d,d.__vue_app__=l,No(v.component)}},onUnmount(d){a.push(d)},unmount(){c&&(qe(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(d,u){return r.provides[d]=u,l},runWithContext(d){const u=Qt;Qt=l;try{return d()}finally{Qt=u}}};return l}}let Qt=null;function Jb(e,t,n=te){const o=Xt(),s=Ee(t),r=_t(t),i=la(e,s),a=Vc((c,l)=>{let d,u=te,m;return Xc(()=>{const v=e[s];_e(d,v)&&(d=v,l())}),{get(){return c(),n.get?n.get(d):d},set(v){const y=n.set?n.set(v):v;if(!_e(y,d)&&!(u!==te&&_e(v,u)))return;const h=o.vnode.props,P=!!(h&&(t in h||s in h||r in h)&&(`onUpdate:${t}`in h||`onUpdate:${s}`in h||`onUpdate:${r}`in h));P||(d=v,l()),o.emit(`update:${t}`,y),_e(v,u)&&(_e(v,y)&&!_e(y,m)||P&&u!==te&&!_e(y,d))&&l(),u=v,m=y}}});return a[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?i||te:a,done:!1}:{done:!0}}}},a}const la=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ee(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function kl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||te;let s=n;const r=t.startsWith("update:"),i=r&&la(o,t.slice(7));i&&(i.trim&&(s=n.map(d=>de(d)?d.trim():d)),i.number&&(s=s.map(Co)));let a,c=o[a=Bo(t)]||o[a=Bo(Ee(t))];!c&&r&&(c=o[a=Bo(_t(t))]),c&&qe(c,e,6,s);const l=o[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,qe(l,e,6,s)}}const Tl=new WeakMap;function da(e,t,n=!1){const o=n?Tl:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},a=!1;if(!K(e)){const c=l=>{const d=da(l,t,!0);d&&(a=!0,ge(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ne(e)&&o.set(e,null),null):(j(r)?r.forEach(c=>i[c]=null):ge(i,r),ne(e)&&o.set(e,i),i)}function Uo(e,t){return!e||!_o(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,_t(t))||re(e,t))}function Sr(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[r],slots:i,attrs:a,emit:c,render:l,renderCache:d,props:u,data:m,setupState:v,ctx:y,inheritAttrs:h}=e,P=co(e);let I,g;try{if(n.shapeFlag&4){const w=s||o,M=w;I=st(l.call(M,w,d,u,v,m,y)),g=a}else{const w=t;I=st(w.length>1?w(u,{attrs:a,slots:i,emit:c}):w(u,null)),g=t.props?a:Rl(a)}}catch(w){bt.length=0,zn(w,e,1),I=fe(Se)}let T=I;if(g&&h!==!1){const w=Object.keys(g),{shapeFlag:M}=T;w.length&&M&7&&(r&&w.some(So)&&(g=Cl(g,r)),T=wt(T,g,!1,!0))}if(n.dirs&&(T=wt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition){const w=Lo(T.type)&&lo(T)||T;Ft(w,n.transition)}return I=T,co(P),I}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||_o(n))&&((t||(t={}))[n]=e[n]);return t},Cl=(e,t)=>{const n={};for(const o in e)(!So(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Pl(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?kr(o,i,l):!!i;if(c&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const m=d[u];if(ua(i,o,m)&&!Uo(l,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?kr(o,i,l):!0:!!i;return!1}function kr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(ua(t,e,r)&&!Uo(n,r))return!0}return!1}function ua(e,t,n){const o=e[n],s=t[n];return n==="style"&&ne(o)&&ne(s)?!ht(o,s):o!==s}function El({vnode:e,parent:t,suspense:n},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=o,e=s),s===e)(e=t.vnode).el=o,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=o)}const pa={},fa=()=>Object.create(pa),ma=e=>Object.getPrototypeOf(e)===pa;function Ol(e,t,n,o=!1){const s={},r=fa();e.propsDefaults=Object.create(null),va(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:Ui(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ml(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let m=d[u];if(Uo(e.emitsOptions,m))continue;const v=t[m];if(c)if(re(r,m))v!==r[m]&&(r[m]=v,l=!0);else{const y=Ee(m);s[y]=ys(c,a,y,v,e,!1)}else v!==r[m]&&(r[m]=v,l=!0)}}}else{va(e,t,s,r)&&(l=!0);let d;for(const u in a)(!t||!re(t,u)&&((d=_t(u))===u||!re(t,d)))&&(c?n&&(n[u]!==void 0||n[d]!==void 0)&&(s[u]=ys(c,a,u,void 0,e,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!re(t,u))&&(delete r[u],l=!0)}l&&ft(e.attrs,"set","")}function va(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(kn(c))continue;const l=t[c];let d;s&&re(s,d=Ee(c))?!r||!r.includes(d)?n[d]=l:(a||(a={}))[d]=l:Uo(e.emitsOptions,c)||(!(c in o)||l!==o[c])&&(o[c]=l,i=!0)}if(r){const c=Y(n),l=a||te;for(let d=0;d<r.length;d++){const u=r[d];n[u]=ys(s,c,u,l[u],e,!re(l,u))}}return i}function ys(e,t,n,o,s,r){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&K(c)){const{propsDefaults:l}=s;if(n in l)o=l[n];else{const d=Wn(s);o=l[n]=c.call(null,t),d()}}else o=c;s.ce&&s.ce._setProp(n,o)}i[0]&&(r&&!a?o=!1:i[1]&&(o===""||o===_t(n))&&(o=!0))}return o}const Il=new WeakMap;function ba(e,t,n=!1){const o=n?Il:t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},a=[];let c=!1;if(!K(e)){const d=u=>{c=!0;const[m,v]=ba(u,t,!0);ge(i,m),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return ne(e)&&o.set(e,Wt),Wt;if(j(r))for(let d=0;d<r.length;d++){const u=Ee(r[d]);Tr(u)&&(i[u]=te)}else if(r)for(const d in r){const u=Ee(d);if(Tr(u)){const m=r[d],v=i[u]=j(m)||K(m)?{type:m}:ge({},m),y=v.type;let h=!1,P=!0;if(j(y))for(let I=0;I<y.length;++I){const g=y[I],T=K(g)&&g.name;if(T==="Boolean"){h=!0;break}else T==="String"&&(P=!1)}else h=K(y)&&y.name==="Boolean";v[0]=h,v[1]=P,(h||re(v,"default"))&&a.push(u)}}const l=[i,a];return ne(e)&&o.set(e,l),l}function Tr(e){return e[0]!=="$"&&!kn(e)}const qs=e=>e==="_"||e==="_ctx"||e==="$stable",Ks=e=>j(e)?e.map(st):[st(e)],Al=(e,t,n)=>{if(t._n)return t;const o=Cn((...s)=>Ks(t(...s)),n);return o._c=!1,o},ga=(e,t,n)=>{const o=e._ctx;for(const s in e){if(qs(s))continue;const r=e[s];if(K(r))t[s]=Al(s,r,o);else if(r!=null){const i=Ks(r);t[s]=()=>i}}},ha=(e,t)=>{const n=Ks(t);e.slots.default=()=>n},ya=(e,t,n)=>{for(const o in t)(n||!qs(o))&&(e[o]=t[o])},Dl=(e,t,n)=>{const o=e.slots=fa();if(e.vnode.shapeFlag&32){const s=t._;s?(ya(o,t,n),n&&vi(o,"_",s,!0)):ga(t,o)}else t&&ha(e,t)},Vl=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=te;if(o.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:ya(s,t,n):(r=!t.$stable,ga(t,s)),i=t}else t&&(ha(e,t),i={default:1});if(r)for(const a in s)!qs(a)&&i[a]==null&&delete s[a]},xe=Nl;function Ll(e){return $l(e)}function $l(e,t){const n=Po();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:a,createComment:c,setText:l,setElementText:d,parentNode:u,nextSibling:m,setScopeId:v=it,insertStaticContent:y}=e,h=(p,f,b,_=null,k=null,x=null,A=void 0,O=null,E=!!f.dynamicChildren)=>{if(p===f)return;p&&!It(p,f)&&(_=S(p),Me(p,k,x,!0),p=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null),f.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(f.dynamicChildren===Wt&&(f.dynamicChildren=[]),f.dynamicChildren.hasOnce=!0);const{type:R,ref:q,shapeFlag:$}=f;switch(R){case Fo:P(p,f,b,_);break;case Se:I(p,f,b,_);break;case Yo:p==null&&g(f,b,_,A);break;case Ce:D(p,f,b,_,k,x,A,O,E);break;default:$&1?M(p,f,b,_,k,x,A,O,E):$&6?X(p,f,b,_,k,x,A,O,E):($&64||$&128)&&R.process(p,f,b,_,k,x,A,O,E,B)}q!=null&&k?Pn(q,p&&p.ref,x,f||p,!f):q==null&&p&&p.ref!=null&&Pn(p.ref,null,x,p,!0)},P=(p,f,b,_)=>{if(p==null)o(f.el=a(f.children),b,_);else{const k=f.el=p.el;f.children!==p.children&&l(k,f.children)}},I=(p,f,b,_)=>{p==null?o(f.el=c(f.children||""),b,_):f.el=p.el},g=(p,f,b,_)=>{[p.el,p.anchor]=y(p.children,f,b,_,p.el,p.anchor)},T=({el:p,anchor:f},b,_)=>{let k;for(;p&&p!==f;)k=m(p),o(p,b,_),p=k;o(f,b,_)},w=({el:p,anchor:f})=>{let b;for(;p&&p!==f;)b=m(p),s(p),p=b;s(f)},M=(p,f,b,_,k,x,A,O,E)=>{if(f.type==="svg"?A="svg":f.type==="math"&&(A="mathml"),p==null)G(f,b,_,k,x,A,O,E);else{const R=p.el&&p.el._isVueCE?p.el:null;try{R&&R._beginPatch(),C(p,f,k,x,A,O,E)}finally{R&&R._endPatch()}}},G=(p,f,b,_,k,x,A,O)=>{let E,R;const{props:q,shapeFlag:$,transition:z,dirs:W}=p;if(E=p.el=i(p.type,x,q&&q.is,q),$&8?d(E,p.children):$&16&&N(p.children,E,null,_,k,Xo(p,x),A,O),W&&jt(p,null,_,"created"),L(E,p,p.scopeId,A,_),q){for(const ce in q)ce!=="value"&&!kn(ce)&&r(E,ce,null,q[ce],x,_);"value"in q&&r(E,"value",null,q.value,x),(R=q.onVnodeBeforeMount)&&He(R,_,p)}W&&jt(p,null,_,"beforeMount");const ee=Ul(k,z);ee&&z.beforeEnter(E),o(E,f,b),((R=q&&q.onVnodeMounted)||ee||W)&&xe(()=>{try{R&&He(R,_,p),ee&&z.enter(E),W&&jt(p,null,_,"mounted")}finally{}},k)},L=(p,f,b,_,k)=>{if(b&&v(p,b),_)for(let x=0;x<_.length;x++)v(p,_[x]);if(k){let x=k.subTree;if(f===x||mo(x.type)&&(x.ssContent===f||x.ssFallback===f)){const A=k.vnode;L(p,A,A.scopeId,A.slotScopeIds,k.parent)}}},N=(p,f,b,_,k,x,A,O,E=0)=>{for(let R=E;R<p.length;R++){const q=p[R]=O?pt(p[R]):st(p[R]);h(null,q,f,b,_,k,x,A,O)}},C=(p,f,b,_,k,x,A)=>{const O=f.el=p.el;let{patchFlag:E,dynamicChildren:R,dirs:q}=f;E|=p.patchFlag&16;const $=p.props||te,z=f.props||te;let W;if(b&&Ht(b,!1),(W=z.onVnodeBeforeUpdate)&&He(W,b,f,p),q&&jt(f,p,b,"beforeUpdate"),b&&Ht(b,!0),R&&(!p.dynamicChildren||p.dynamicChildren.length!==R.length)&&(E=0,A=!1,R=null),($.innerHTML&&z.innerHTML==null||$.textContent&&z.textContent==null)&&d(O,""),R?H(p.dynamicChildren,R,O,b,_,Xo(f,k),x):A||oe(p,f,O,null,b,_,Xo(f,k),x,!1),E>0){if(E&16)J(O,$,z,b,k);else if(E&2&&$.class!==z.class&&r(O,"class",null,z.class,k),E&4&&r(O,"style",$.style,z.style,k),E&8){const ee=f.dynamicProps;for(let ce=0;ce<ee.length;ce++){const ie=ee[ce],be=$[ie],we=z[ie];(we!==be||ie==="value")&&r(O,ie,be,we,k,b)}}E&1&&p.children!==f.children&&d(O,f.children)}else!A&&R==null&&J(O,$,z,b,k);((W=z.onVnodeUpdated)||q)&&xe(()=>{W&&He(W,b,f,p),q&&jt(f,p,b,"updated")},_)},H=(p,f,b,_,k,x,A)=>{for(let O=0;O<f.length;O++){const E=p[O],R=f[O],q=E.el&&(E.type===Ce||!It(E,R)||E.shapeFlag&198)?u(E.el):b;h(E,R,q,null,_,k,x,A,!0)}},J=(p,f,b,_,k)=>{if(f!==b){if(f!==te)for(const x in f)!kn(x)&&!(x in b)&&r(p,x,f[x],null,k,_);for(const x in b){if(kn(x))continue;const A=b[x],O=f[x];A!==O&&x!=="value"&&r(p,x,O,A,k,_)}"value"in b&&r(p,"value",f.value,b.value,k)}},D=(p,f,b,_,k,x,A,O,E)=>{const R=f.el=p?p.el:a(""),q=f.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:W}=f;W&&(O=O?O.concat(W):W),p==null?(o(R,b,_),o(q,b,_),N(f.children||[],b,q,k,x,A,O,E)):$>0&&$&64&&z&&p.dynamicChildren&&p.dynamicChildren.length===z.length?(H(p.dynamicChildren,z,b,k,x,A,O),(f.key!=null||k&&f===k.subTree)&&Ws(p,f,!0)):oe(p,f,b,q,k,x,A,O,E)},X=(p,f,b,_,k,x,A,O,E)=>{f.slotScopeIds=O,p==null?f.shapeFlag&512?k.ctx.activate(f,b,_,A,E):pe(f,b,_,k,x,A,E):Oe(p,f,E)},pe=(p,f,b,_,k,x,A)=>{const O=p.component=Kl(p,_,k);if(Kn(p)&&(O.ctx.renderer=B),Wl(O,!1,A),O.asyncDep){if(k&&k.registerDep(O,ae,A),!p.el){const E=O.subTree=fe(Se);I(null,E,f,b),p.placeholder=E.el}}else ae(O,p,f,b,k,x,A)},Oe=(p,f,b)=>{const _=f.component=p.component;if(Pl(p,f,b))if(_.asyncDep&&!_.asyncResolved){f.el=p.el,Q(_,f,b);return}else _.next=f,_.update();else f.el=p.el,_.vnode=f},ae=(p,f,b,_,k,x,A)=>{const O=()=>{if(p.isMounted){let{next:$,bu:z,u:W,parent:ee,vnode:ce}=p;{const Ye=xa(p);if(Ye){$&&($.el=ce.el,Q(p,$,A)),Ye.asyncDep.then(()=>{xe(()=>{p.isUnmounted||R()},k)});return}}let ie=$,be;Ht(p,!1),$?($.el=ce.el,Q(p,$,A)):$=ce,z&&sn(z),(be=$.props&&$.props.onVnodeBeforeUpdate)&&He(be,ee,$,ce),Ht(p,!0);const we=Sr(p),Xe=p.subTree;p.subTree=we,h(Xe,we,u(Xe.el),S(Xe),p,k,x),$.el=we.el,ie===null&&El(p,we.el),W&&xe(W,k),(be=$.props&&$.props.onVnodeUpdated)&&xe(()=>He(be,ee,$,ce),k)}else{let $;const{el:z,props:W}=f,{bm:ee,m:ce,parent:ie,root:be,type:we}=p,Xe=$t(f);Ht(p,!1),ee&&sn(ee),!Xe&&($=W&&W.onVnodeBeforeMount)&&He($,ie,f),Ht(p,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(we,p.parent?p.parent.type:void 0);const Ye=p.subTree=Sr(p);h(null,Ye,b,_,p,k,x),f.el=Ye.el}if(ce&&xe(ce,k),!Xe&&($=W&&W.onVnodeMounted)){const Ye=f;xe(()=>He($,ie,Ye),k)}(f.shapeFlag&256||ie&&$t(ie.vnode)&&ie.vnode.shapeFlag&256)&&p.a&&xe(p.a,k),p.isMounted=!0,f=b=_=null}};p.scope.on();const E=p.effect=new _i(O);p.scope.off();const R=p.update=E.run.bind(E),q=p.job=E.runIfDirty.bind(E);q.i=p,q.id=p.uid,E.scheduler=()=>Us(q),Ht(p,!0),R()},Q=(p,f,b)=>{f.component=p;const _=p.vnode.props;p.vnode=f,p.next=null,Ml(p,f.props,_,b),Vl(p,f.children,b),yt(),ur(p),xt()},oe=(p,f,b,_,k,x,A,O,E=!1)=>{const R=p&&p.children,q=p?p.shapeFlag:0,$=f.children,{patchFlag:z,shapeFlag:W}=f;if(z>0){if(z&128){kt(R,$,b,_,k,x,A,O,E);return}else if(z&256){ct(R,$,b,_,k,x,A,O,E);return}}W&8?(q&16&&Ne(R,k,x),$!==R&&d(b,$)):q&16?W&16?kt(R,$,b,_,k,x,A,O,E):Ne(R,k,x,!0):(q&8&&d(b,""),W&16&&N($,b,_,k,x,A,O,E))},ct=(p,f,b,_,k,x,A,O,E)=>{p=p||Wt,f=f||Wt;const R=p.length,q=f.length,$=Math.min(R,q);let z;for(z=0;z<$;z++){const W=f[z]=E?pt(f[z]):st(f[z]);h(p[z],W,b,null,k,x,A,O,E)}R>q?Ne(p,k,x,!0,!1,$):N(f,b,_,k,x,A,O,E,$)},kt=(p,f,b,_,k,x,A,O,E)=>{let R=0;const q=f.length;let $=p.length-1,z=q-1;for(;R<=$&&R<=z;){const W=p[R],ee=f[R]=E?pt(f[R]):st(f[R]);if(It(W,ee))h(W,ee,b,null,k,x,A,O,E);else break;R++}for(;R<=$&&R<=z;){const W=p[$],ee=f[z]=E?pt(f[z]):st(f[z]);if(It(W,ee))h(W,ee,b,null,k,x,A,O,E);else break;$--,z--}if(R>$){if(R<=z){const W=z+1,ee=W<q?f[W].el:_;for(;R<=z;)h(null,f[R]=E?pt(f[R]):st(f[R]),b,ee,k,x,A,O,E),R++}}else if(R>z)for(;R<=$;)Me(p[R],k,x,!0),R++;else{const W=R,ee=R,ce=new Map;for(R=ee;R<=z;R++){const Ve=f[R]=E?pt(f[R]):st(f[R]);Ve.key!=null&&ce.set(Ve.key,R)}let ie,be=0;const we=z-ee+1;let Xe=!1,Ye=0;const mn=new Array(we);for(R=0;R<we;R++)mn[R]=0;for(R=W;R<=$;R++){const Ve=p[R];if(be>=we){Me(Ve,k,x,!0);continue}let Ze;if(Ve.key!=null)Ze=ce.get(Ve.key);else for(ie=ee;ie<=z;ie++)if(mn[ie-ee]===0&&It(Ve,f[ie])){Ze=ie;break}Ze===void 0?Me(Ve,k,x,!0):(mn[Ze-ee]=R+1,Ze>=Ye?Ye=Ze:Xe=!0,h(Ve,f[Ze],b,null,k,x,A,O,E),be++)}const nr=Xe?Fl(mn):Wt;for(ie=nr.length-1,R=we-1;R>=0;R--){const Ve=ee+R,Ze=f[Ve],or=f[Ve+1],sr=Ve+1<q?or.el||wa(or):_;mn[R]===0?h(null,Ze,b,sr,k,x,A,O,E):Xe&&(ie<0||R!==nr[ie]?Qe(Ze,b,sr,2):ie--)}}},Qe=(p,f,b,_,k=null)=>{const{el:x,type:A,transition:O,children:E,shapeFlag:R}=p;if(R&6){Qe(p.component.subTree,f,b,_);return}if(R&128){p.suspense.move(f,b,_);return}if(R&64){A.move(p,f,b,B);return}if(A===Ce){o(x,f,b);for(let $=0;$<E.length;$++)Qe(E[$],f,b,_);o(p.anchor,f,b);return}if(A===Yo){T(p,f,b);return}if(_!==2&&R&1&&O)if(_===0)O.persisted&&!x[Be]?o(x,f,b):(O.beforeEnter(x),o(x,f,b),xe(()=>O.enter(x),k));else{const{leave:$,delayLeave:z,afterLeave:W}=O,ee=()=>{p.ctx.isUnmounted?s(x):o(x,f,b)},ce=()=>{const ie=x._isLeaving||!!x[Be];x._isLeaving&&x[Be](!0),O.persisted&&!ie?ee():$(x,()=>{ee(),W&&W()})};z?z(x,ee,ce):ce()}else o(x,f,b)},Me=(p,f,b,_=!1,k=!1)=>{const{type:x,props:A,ref:O,children:E,dynamicChildren:R,shapeFlag:q,patchFlag:$,dirs:z,cacheIndex:W,memo:ee}=p;if(($===-2||R&&R.hasOnce)&&(k=!1),O!=null&&(yt(),Pn(O,null,b,p,!0),xt()),W!=null&&(!p.ctx||p.ctx===f)&&(f.renderCache[W]=void 0),q&256){f.ctx.deactivate(p);return}const ce=q&1&&z,ie=!$t(p);let be;if(ie&&(be=A&&A.onVnodeBeforeUnmount)&&He(be,f,p),q&6)Nt(p.component,b,_);else{if(q&128){p.suspense.unmount(b,_);return}ce&&jt(p,null,f,"beforeUnmount"),q&64?p.type.remove(p,f,b,B,_):R&&!R.hasOnce&&(x!==Ce||$>0&&$&64)?Ne(R,f,b,!1,!0):(x===Ce&&$&384||!k&&q&16)&&Ne(E,f,b),_&&Yt(p)}const we=ee!=null&&W==null;(ie&&(be=A&&A.onVnodeUnmounted)||ce||we)&&xe(()=>{be&&He(be,f,p),ce&&jt(p,null,f,"unmounted"),we&&(p.el=null)},b)},Yt=p=>{const{type:f,el:b,anchor:_,transition:k}=p;if(f===Ce){Zt(b,_);return}if(f===Yo){w(p),k&&!k.persisted&&k.afterLeave&&k.afterLeave();return}const x=()=>{s(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:A,delayLeave:O}=k,E=()=>A(b,x);O?O(p.el,x,E):E()}else x()},Zt=(p,f)=>{let b;for(;p!==f;)b=m(p),s(p),p=b;s(f)},Nt=(p,f,b)=>{const{bum:_,scope:k,job:x,subTree:A,um:O,m:E,a:R}=p;fo(E),fo(R),_&&sn(_),k.stop(),x?(x.flags|=8,Me(A,p,f,b)):p.vnode.el&&A&&(A.transition=p.vnode.transition,Me(A,p,f,b)),O&&xe(O,f),xe(()=>{p.isUnmounted=!0},f)},Ne=(p,f,b,_=!1,k=!1,x=0)=>{for(let A=x;A<p.length;A++)Me(p[A],f,b,_,k)},S=p=>{if(p.shapeFlag&6)return S(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const f=m(p.anchor||p.el),b=f&&f[Ji];return b?m(b):f};let U=!1;const V=(p,f,b)=>{let _;p==null?f._vnode&&(Me(f._vnode,null,null,!0),_=f._vnode.component):h(f._vnode||null,p,f,null,null,null,b),f._vnode=p,U||(U=!0,ur(_),qi(),U=!1)},B={p:h,um:Me,m:Qe,r:Yt,mt:pe,mc:N,pc:oe,pbc:H,n:S,o:e};return{render:V,hydrate:void 0,createApp:Sl(V)}}function Xo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ws(e,t,n=!1){const o=e.children,s=t.children;if(j(o)&&j(s))for(let r=0;r<o.length;r++){const i=o[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=pt(s[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Ws(i,a)),a.type===Fo&&(a.patchFlag===-1&&(a=s[r]=pt(a)),a.el=i.el),a.type===Se&&!a.el&&(a.el=i.el)}}function Fl(e){const t=e.slice(),n=[0];let o,s,r,i,a;const c=e.length;for(o=0;o<c;o++){const l=e[o];if(l!==0){if(s=n[n.length-1],e[s]<l){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<l?r=a+1:i=a;l<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function xa(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xa(t)}function fo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function wa(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?wa(t.subTree):null}const mo=e=>e.__isSuspense;function Nl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Kc(e)}const Ce=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),bt=[];let $e=null;function Le(e=!1){bt.push($e=e?null:[])}function Gs(){bt.pop(),$e=bt[bt.length-1]||null}let Un=1;function vo(e,t=!1){Un+=e,e<0&&$e&&t&&($e.hasOnce=!0)}function _a(e){return e.dynamicChildren=Un>0?$e||Wt:null,Gs(),Un>0&&$e&&$e.push(e),e}function nt(e,t,n,o,s,r){return _a(ue(e,t,n,o,s,r,!0))}function xs(e,t,n,o,s){return _a(fe(e,t,n,o,s,!0))}function an(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const Sa=({key:e})=>e??null,oo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||me(e)||K(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function ue(e,t=null,n=null,o=0,s=null,r=e===Ce?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Sa(t),ref:t&&oo(t),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(go(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),Un>0&&!i&&$e&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$e.push(c),c}const fe=jl;function jl(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===oa)&&(e=Se),an(e)){const a=wt(e,t,!0);return n&&go(a,n),Un>0&&!r&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(Xl(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=An(a)),ne(c)&&(Ao(c)&&!j(c)&&(c=ge({},c)),t.style=Is(c))}const i=de(e)?1:mo(e)?128:Lo(e)?64:ne(e)?4:K(e)?2:0;return ue(e,t,n,o,s,i,r,!0)}function Hl(e){return e?Ao(e)||ma(e)?ge({},e):e:null}function wt(e,t,n=!1,o=!1){const{props:s,ref:r,patchFlag:i,children:a,transition:c}=e,l=t?Bl(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Sa(l),ref:t&&t.ref?n&&r?j(r)?r.concat(oo(t)):[r,oo(t)]:oo(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&o&&Ft(d,c.clone(d)),d}function On(e=" ",t=0){return fe(Fo,null,e,t)}function bo(e="",t=!1){return t?(Le(),xs(Se,null,e)):fe(Se,null,e)}function st(e){return e==null||typeof e=="boolean"?fe(Se):j(e)?fe(Ce,null,e.slice()):an(e)?pt(e):fe(Fo,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function go(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),go(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ma(t)?t._ctx=Te:s===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(K(t)){if(o&65){go(e,{default:t});return}t={default:t,_ctx:Te},n=32}else t=String(t),o&64?(n=16,t=[On(t)]):n=8;e.children=t,e.shapeFlag|=n}function Bl(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=An([t.class,o.class]));else if(s==="style")t.style=Is([t.style,o.style]);else if(_o(s)){const r=t[s],i=o[s];i&&r!==i&&!(j(r)&&r.includes(i))?t[s]=r?[].concat(r,i):i:i==null&&r==null&&!So(s)&&(t[s]=i)}else s!==""&&(t[s]=o[s])}return t}function He(e,t,n,o=null){qe(e,t,7,[n,o])}const zl=ca();let ql=0;function Kl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||zl,r={uid:ql++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(o,s),emitsOptions:da(o,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:o.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=kl.bind(null,r),e.ce&&e.ce(r),r}let ke=null;const Xt=()=>ke||Te;let ho,Fn;{const e=Po(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};ho=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Fn=t("__VUE_SSR_SETTERS__",n=>cn=n)}const Wn=e=>{const t=ke;return ho(e),e.scope.on(),()=>{e.scope.off(),ho(t)}},Rr=()=>{ke&&ke.scope.off(),ho(null)};function ka(e){return e.vnode.shapeFlag&4}let cn=!1;function Wl(e,t=!1,n=!1){t&&Fn(t);const{props:o,children:s}=e.vnode,r=ka(e);Ol(e,o,r,t),Dl(e,s,n||t);const i=r?Gl(e,t):void 0;return t&&Fn(!1),i}function Gl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bl);const{setup:o}=n;if(o){yt();const s=e.setupContext=o.length>1?Ql(e):null,r=Wn(e),i=Bn(o,e,0,[e.props,s]),a=pi(i);if(xt(),r(),(a||e.sp)&&!$t(e)&&Ns(e),a){if(i.then(Rr,Rr),t)return i.then(c=>{Fn(!0);try{Cr(e,c,t)}finally{Fn(!1)}}).catch(c=>{zn(c,e,0)});e.asyncDep=i}else Cr(e,i)}else Ta(e)}function Cr(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=ji(t)),Ta(e)}function Ta(e,t,n){const o=e.type;e.render||(e.render=o.render||it);{const s=Wn(e);yt();try{gl(e)}finally{xt(),s()}}}const Jl={get(e,t){return Re(e,"get",""),e[t]}};function Ql(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Jl),slots:e.slots,emit:e.emit,expose:t}}function No(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ji($s(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in En)return En[n](e)},has(t,n){return n in t||n in En}})):e.proxy}function ws(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Xl(e){return K(e)&&"__vccOpts"in e}const Pe=(e,t)=>jc(e,t,cn);function Js(e,t,n){try{vo(-1);const o=arguments.length;return o===2?ne(t)&&!j(t)?an(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&an(n)&&(n=[n]),fe(e,t,n))}finally{vo(1)}}const Yl="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _s;const Pr=typeof window<"u"&&window.trustedTypes;if(Pr)try{_s=Pr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ra=_s?e=>_s.createHTML(e):e=>e,Zl="http://www.w3.org/2000/svg",ed="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Er=ut&&ut.createElement("template"),td={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?ut.createElementNS(Zl,e):t==="mathml"?ut.createElementNS(ed,e):n?ut.createElement(e,{is:n}):ut.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Er.innerHTML=Ra(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=Er.content;if(o==="svg"||o==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tt="transition",gn="animation",ln=Symbol("_vtc"),Ca={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pa=ge({},Xi,Ca),nd=e=>(e.displayName="Transition",e.props=Pa,e),Qb=nd((e,{slots:t})=>Js(ol,Ea(e),t)),Bt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Or=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function Ea(e){const t={};for(const D in e)D in Ca||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=i,appearToClass:d=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,y=od(s),h=y&&y[0],P=y&&y[1],{onBeforeEnter:I,onEnter:g,onEnterCancelled:T,onLeave:w,onLeaveCancelled:M,onBeforeAppear:G=I,onAppear:L=g,onAppearCancelled:N=T}=t,C=(D,X,pe,Oe)=>{D._enterCancelled=Oe,Pt(D,X?d:a),Pt(D,X?l:i),pe&&pe()},H=(D,X)=>{D._isLeaving=!1,Pt(D,u),Pt(D,v),Pt(D,m),X&&X()},J=D=>(X,pe)=>{const Oe=D?L:g,ae=()=>C(X,D,pe);Bt(Oe,[X,ae]),Mr(()=>{Pt(X,D?c:r),et(X,D?d:a),Or(Oe)||Ir(X,o,h,ae)})};return ge(t,{onBeforeEnter(D){Bt(I,[D]),et(D,r),et(D,i)},onBeforeAppear(D){Bt(G,[D]),et(D,c),et(D,l)},onEnter:J(!1),onAppear:J(!0),onLeave(D,X){D._isLeaving=!0;const pe=()=>H(D,X);et(D,u),D._enterCancelled?(et(D,m),Ss(D)):(Ss(D),et(D,m)),Mr(()=>{D._isLeaving&&(Pt(D,u),et(D,v),Or(w)||Ir(D,o,P,pe))}),Bt(w,[D,pe])},onEnterCancelled(D){C(D,!1,void 0,!0),Bt(T,[D])},onAppearCancelled(D){C(D,!0,void 0,!0),Bt(N,[D])},onLeaveCancelled(D){H(D),Bt(M,[D])}})}function od(e){if(e==null)return null;if(ne(e))return[Zo(e.enter),Zo(e.leave)];{const t=Zo(e);return[t,t]}}function Zo(e){return sc(e)}function et(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ln]||(e[ln]=new Set)).add(t)}function Pt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[ln];n&&(n.delete(t),n.size||(e[ln]=void 0))}function Mr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let sd=0;function Ir(e,t,n,o){const s=e._endId=++sd,r=()=>{s===e._endId&&o()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=Oa(e,t);if(!i)return o();const l=i+"end";let d=0;const u=()=>{e.removeEventListener(l,m),r()},m=v=>{v.target===e&&++d>=c&&u()};setTimeout(()=>{d<c&&u()},a+1),e.addEventListener(l,m)}function Oa(e,t){const n=window.getComputedStyle(e),o=y=>(n[y]||"").split(", "),s=o(`${Tt}Delay`),r=o(`${Tt}Duration`),i=Ar(s,r),a=o(`${gn}Delay`),c=o(`${gn}Duration`),l=Ar(a,c);let d=null,u=0,m=0;t===Tt?i>0&&(d=Tt,u=i,m=r.length):t===gn?l>0&&(d=gn,u=l,m=c.length):(u=Math.max(i,l),d=u>0?i>l?Tt:gn:null,m=d?d===Tt?r.length:c.length:0);const v=d===Tt&&/\b(?:transform|all)(?:,|$)/.test(o(`${Tt}Property`).toString());return{type:d,timeout:u,propCount:m,hasTransform:v}}function Ar(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Dr(n)+Dr(e[o])))}function Dr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ss(e){return(e?e.ownerDocument:document).body.offsetHeight}function rd(e,t,n){const o=e[ln];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const yo=Symbol("_vod"),Qs=Symbol("_vsh"),Xb={name:"show",beforeMount(e,{value:t},{transition:n}){e[yo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):hn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),hn(e,!0),o.enter(e)):o.leave(e,()=>{hn(e,!1)}):hn(e,t))},beforeUnmount(e,{value:t}){hn(e,t)}};function hn(e,t){e.style.display=t?e[yo]:"none",e[Qs]=!t}const id=Symbol(""),ad=/(?:^|;)\s*display\s*:/;function cd(e,t,n){const o=e.style,s=de(n);let r=!1;if(n&&!s){if(t)if(de(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Sn(o,a,"")}else for(const i in t)n[i]==null&&Sn(o,i,"");for(const i in n){i==="display"&&(r=!0);const a=n[i];a!=null?dd(e,i,!de(t)&&t?t[i]:void 0,a)||Sn(o,i,a):Sn(o,i,"")}}else if(s){if(t!==n){const i=o[id];i&&(n+=";"+i),o.cssText=n,r=ad.test(n)}}else t&&e.removeAttribute("style");yo in e&&(e[yo]=r?o.display:"",e[Qs]&&(o.display="none"))}const eo=/\s*!important$/;function Sn(e,t,n){if(j(n))n.forEach(o=>Sn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))eo.test(n)?e.setProperty(t,n.replace(eo,""),"important"):e.setProperty(t,n);else{const o=ld(e,t);eo.test(n)?e.setProperty(_t(o),n.replace(eo,""),"important"):e[o]=n}}const Vr=["Webkit","Moz","ms"],es={};function ld(e,t){const n=es[t];if(n)return n;let o=Ee(t);if(o!=="filter"&&o in e)return es[t]=o;o=Ro(o);for(let s=0;s<Vr.length;s++){const r=Vr[s]+o;if(r in e)return es[t]=r}return t}function dd(e,t,n,o){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&de(o)&&n===o}const Lr="http://www.w3.org/1999/xlink";function $r(e,t,n,o,s,r=dc(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Lr,t.slice(6,t.length)):e.setAttributeNS(Lr,t,n):n==null||r&&!bi(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Fe(n)?String(n):n)}function Ur(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ra(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=bi(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function At(e,t,n,o){e.addEventListener(t,n,o)}function ud(e,t,n,o){e.removeEventListener(t,n,o)}const Fr=Symbol("_vei");function pd(e,t,n,o,s=null){const r=e[Fr]||(e[Fr]={}),i=r[t];if(o&&i)i.value=o;else{const[a,c]=vd(t);if(o){const l=r[t]=hd(o,s);At(e,a,l,c)}else i&&(ud(e,a,i,c),r[t]=void 0)}}const fd=/(Once|Passive|Capture)$/,md=/^on:?(?:Once|Passive|Capture)$/;function vd(e){let t,n;for(;(n=e.match(fd))&&!md.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let ts=0;const bd=Promise.resolve(),gd=()=>ts||(bd.then(()=>ts=0),ts=Date.now());function hd(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;const s=n.value;if(j(s)){const r=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{r.call(o),o._stopped=!0};const i=s.slice(),a=[o];for(let c=0;c<i.length&&!o._stopped;c++){const l=i[c];l&&qe(l,t,5,a)}}else qe(s,t,5,[o])};return n.value=e,n.attached=gd(),n}const Nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yd=(e,t,n,o,s,r)=>{const i=s==="svg";t==="class"?rd(e,o,i):t==="style"?cd(e,n,o):_o(t)?So(t)||pd(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xd(e,t,o,i))?(Ur(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&$r(e,t,o,i,r,t!=="value")):e._isVueCE&&(wd(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(o)))?Ur(e,Ee(t),o,r,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),$r(e,t,o,i))};function xd(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&Nr(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nr(t)&&de(n)?!1:t in e}function wd(e,t){const n=e._def.props;if(!n)return!1;const o=Ee(t);return Array.isArray(n)?n.some(s=>Ee(s)===o):Object.keys(n).some(s=>Ee(s)===o)}const Ma=new WeakMap,Ia=new WeakMap,xo=Symbol("_moveCb"),jr=Symbol("_enterCb"),_d=e=>(delete e.props.mode,e),Sd=_d({name:"TransitionGroup",props:ge({},Pa,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Xt(),o=Qi();let s,r;return Hs(()=>{if(!s.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Cd(s[0].el,n.vnode.el,i)){s=[];return}s.forEach(kd),s.forEach(Td);const a=s.filter(Rd);Ss(n.vnode.el),a.forEach(c=>{const l=c.el,d=l.style;et(l,i),d.transform=d.webkitTransform=d.transitionDuration="";const u=l[xo]=m=>{m&&m.target!==l||(!m||m.propertyName.endsWith("transform"))&&(l.removeEventListener("transitionend",u),l[xo]=null,Pt(l,i))};l.addEventListener("transitionend",u)}),s=[]}),()=>{const i=Y(e),a=Ea(i);let c=i.tag||Ce;if(s=[],r)for(let l=0;l<r.length;l++){const d=r[l];d.el&&d.el instanceof Element&&!d.el[Qs]&&(s.push(d),Ft(d,$n(d,a,o,n)),Ma.set(d,Aa(d.el)))}r=t.default?Fs(t.default()):[];for(let l=0;l<r.length;l++){const d=r[l];d.key!=null&&Ft(d,$n(d,a,o,n))}return fe(c,null,r)}}}),Yb=Sd;function kd(e){const t=e.el;t[xo]&&t[xo](),t[jr]&&t[jr]()}function Td(e){Ia.set(e,Aa(e.el))}function Rd(e){const t=Ma.get(e),n=Ia.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const r=e.el,i=r.style,a=r.getBoundingClientRect();let c=1,l=1;return r.offsetWidth&&(c=a.width/r.offsetWidth),r.offsetHeight&&(l=a.height/r.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(l)||l===0)&&(l=1),Math.abs(c-1)<.01&&(c=1),Math.abs(l-1)<.01&&(l=1),i.transform=i.webkitTransform=`translate(${o/c}px,${s/l}px)`,i.transitionDuration="0s",e}}function Aa(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Cd(e,t,n){const o=e.cloneNode(),s=e[ln];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(o);const{hasTransform:i}=Oa(o);return r.removeChild(o),i}const dn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>sn(t,n):t};function Pd(e){e.target.composing=!0}function Hr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rt=Symbol("_assign"),to=Symbol("_initialValue");function ns(e,t,n){return t&&(e=e.trim()),n&&(e=Co(e)),e}const Ed={created(e,{modifiers:{lazy:t,trim:n,number:o}},s){e.parentNode&&(e.type==="text"?e[to]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[to]=e.defaultValue.replace(/\r\n?/g,`
`))),e[rt]=dn(s);const r=o||s.props&&s.props.type==="number";At(e,t?"change":"input",i=>{i.target.composing||e[rt](ns(e.value,n,r))}),(n||r)&&At(e,"change",()=>{e.value=ns(e.value,n,r)}),t||(At(e,"compositionstart",Pd),At(e,"compositionend",Hr),At(e,"change",Hr))},mounted(e,{value:t,modifiers:{trim:n,number:o}}){const s=t??"",r=e[to];delete e[to],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[rt](ns(e.value,n,o)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:o,trim:s,number:r}},i){if(e[rt]=dn(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Co(e.value):e.value,c=t??"";if(a===c)return;const l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!=="range"&&(o&&t===n||s&&e.value.trim()===c)||(e.value=c)}},Zb={deep:!0,created(e,t,n){e[rt]=dn(n),At(e,"change",()=>{const o=e._modelValue,s=Nn(e),r=e.checked,i=e[rt];if(j(o)){const a=As(o,s),c=a!==-1;if(r&&!c)i(o.concat(s));else if(!r&&c){const l=[...o];l.splice(a,1),i(l)}}else if(gt(o)){const a=new Set(o);r?a.add(s):a.delete(s),i(a)}else i(Da(e,r))})},mounted:Br,beforeUpdate(e,t,n){e[rt]=dn(n),Br(e,t,n)}};function Br(e,{value:t,oldValue:n},o){e._modelValue=t;let s;if(j(t))s=As(t,o.props.value)>-1;else if(gt(t))s=t.has(o.props.value);else{if(t===n)return;s=ht(t,Da(e,!0))}e.checked!==s&&(e.checked=s)}const eg={deep:!0,created(e,{value:t,modifiers:{number:n}},o){e._modelValue=t,At(e,"change",()=>{const s=Array.prototype.filter.call(e.options,c=>c.selected).map(c=>n?Co(Nn(c)):Nn(c)),r=e.multiple,i=r?gt(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[r,r?j(i)?s.slice():s:i];try{e[rt](i)}finally{Do(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[rt]=dn(o)},mounted(e,{value:t}){zr(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[rt]=dn(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Od(t,n[1],n[0]))&&zr(e,t)}};function Od(e,t,n){if(!n||j(e))return ht(e,t);if(gt(e)){if(e.size!==t.length)return!1;for(const o of t)if(!e.has(o))return!1;return!0}return!1}function zr(e,t){const n=e.multiple,o=j(t);if(!(n&&!o&&!gt(t))){for(let s=0,r=e.options.length;s<r;s++){const i=e.options[s],a=Nn(i);if(n)if(o){const c=typeof a;c==="string"||c==="number"?i.selected=t.some(l=>String(l)===String(a)):i.selected=As(t,a)>-1}else i.selected=t.has(a);else if(ht(Nn(i),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function Da(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Md=["ctrl","shift","alt","meta"],Id={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Md.some(n=>e[`${n}Key`]&&!t.includes(n))},tg=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((s,...r)=>{for(let i=0;i<t.length;i++){const a=Id[t[i]];if(a&&a(s,t))return}return e(s,...r)}))},Ad={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ng=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=(s=>{if(!("key"in s))return;const r=_t(s.key);if(t.some(i=>i===r||Ad[i]===r))return e(s)}))},Dd=ge({patchProp:yd},td);let qr;function Vd(){return qr||(qr=Ll(Dd))}const Ld=((...e)=>{const t=Vd().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Ud(o);if(!s)return;const r=t._component;!K(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,$d(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t});function $d(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ud(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Va;const jo=e=>Va=e,La=Symbol();function ks(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Mn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Mn||(Mn={}));function Fd(){const e=xi(!0),t=e.run(()=>vt({}));let n=[],o=[];const s=$s({install(r){jo(s),s._a=r,r.provide(La,s),r.config.globalProperties.$pinia=s,o.forEach(i=>n.push(i)),o=[]},use(r){return this._a?n.push(r):o.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const $a=()=>{};function Kr(e,t,n,o=$a){e.add(t);const s=()=>{e.delete(t)&&o()};return!n&&wi()&&fc(s),s}function tn(e,...t){e.forEach(n=>{n(...t)})}const Nd=e=>e(),Wr=Symbol(),os=Symbol();function Ts(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,o)=>e.set(o,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],s=e[n];ks(s)&&ks(o)&&e.hasOwnProperty(n)&&!me(o)&&!We(o)?e[n]=Ts(s,o):e[n]=o}return e}const jd=Symbol();function Hd(e){return!ks(e)||!Object.prototype.hasOwnProperty.call(e,jd)}const{assign:Et}=Object;function Bd(e){return!!(me(e)&&e.effect)}function zd(e,t,n,o){const{state:s,actions:r,getters:i}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const d=Lc(n.state.value[e]);return Et(d,r,Object.keys(i||{}).reduce((u,m)=>(u[m]=$s(Pe(()=>{jo(n);const v=n._s.get(e);return i[m].call(v,v)})),u),{}))}return c=Ua(e,l,t,n,o,!0),c}function Ua(e,t,n={},o,s,r){let i;const a=Et({actions:{}},n),c={deep:!0};let l,d,u=new Set,m=new Set,v;const y=o.state.value[e];!r&&!y&&(o.state.value[e]={});let h;function P(N){let C;l=d=!1,typeof N=="function"?(N(o.state.value[e]),C={type:Mn.patchFunction,storeId:e,events:v}):(Ts(o.state.value[e],N),C={type:Mn.patchObject,payload:N,storeId:e,events:v});const H=h=Symbol();Do().then(()=>{h===H&&(l=!0)}),d=!0,tn(u,C,o.state.value[e])}const I=r?function(){const{state:C}=n,H=C?C():{};this.$patch(J=>{Et(J,H)})}:$a;function g(){i.stop(),u.clear(),m.clear(),o._s.delete(e)}const T=(N,C="")=>{if(Wr in N)return N[os]=C,N;const H=function(){jo(o);const J=Array.from(arguments),D=new Set,X=new Set;function pe(Q){D.add(Q)}function Oe(Q){X.add(Q)}tn(m,{args:J,name:H[os],store:M,after:pe,onError:Oe});let ae;try{ae=N.apply(this&&this.$id===e?this:M,J)}catch(Q){throw tn(X,Q),Q}return ae instanceof Promise?ae.then(Q=>(tn(D,Q),Q)).catch(Q=>(tn(X,Q),Promise.reject(Q))):(tn(D,ae),ae)};return H[Wr]=!0,H[os]=C,H},w={_p:o,$id:e,$onAction:Kr.bind(null,m),$patch:P,$reset:I,$subscribe(N,C={}){const H=Kr(u,N,C.detached,()=>J()),J=i.run(()=>Lt(()=>o.state.value[e],D=>{(C.flush==="sync"?d:l)&&N({storeId:e,type:Mn.direct,events:v},D)},Et({},c,C)));return H},$dispose:g},M=Hn(w);o._s.set(e,M);const L=(o._a&&o._a.runWithContext||Nd)(()=>o._e.run(()=>(i=xi()).run(()=>t({action:T}))));for(const N in L){const C=L[N];if(me(C)&&!Bd(C)||We(C))r||(y&&Hd(C)&&(me(C)?C.value=y[N]:Ts(C,y[N])),o.state.value[e][N]=C);else if(typeof C=="function"){const H=T(C,N);L[N]=H,a.actions[N]=C}}return Et(M,L),Et(Y(M),L),Object.defineProperty(M,"$state",{get:()=>o.state.value[e],set:N=>{P(C=>{Et(C,N)})}}),o._p.forEach(N=>{Et(M,i.run(()=>N({store:M,app:o._a,pinia:o,options:a})))}),y&&r&&n.hydrate&&n.hydrate(M.$state,y),l=!0,d=!0,M}/*! #__NO_SIDE_EFFECTS__ */function og(e,t,n){let o;const s=typeof t=="function";o=s?n:t;function r(i,a){const c=Gc();return i=i||(c?Ge(La,null):null),i&&jo(i),i=Va,i._s.has(e)||(s?Ua(e,t,o,i):zd(e,o,i)),i._s.get(e)}return r.$id=e,r}function sg(e){const t=Y(e),n={};for(const o in t){const s=t[o];s.effect?n[o]=Pe({get:()=>e[o],set(r){e[o]=r}}):(me(s)||We(s))&&(n[o]=Fc(e,o))}return n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const on=typeof document<"u";function Fa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Fa(e.default)}const se=Object.assign;function ss(e,t){const n={};for(const o in t){const s=t[o];n[o]=Je(s)?s.map(e):e(s)}return n}const In=()=>{},Je=Array.isArray;function Gr(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}const Na=/#/g,Kd=/&/g,Wd=/\//g,Gd=/=/g,Jd=/\?/g,ja=/\+/g,Qd=/%5B/g,Xd=/%5D/g,Ha=/%5E/g,Yd=/%60/g,Ba=/%7B/g,Zd=/%7C/g,za=/%7D/g,eu=/%20/g;function Xs(e){return e==null?"":encodeURI(""+e).replace(Zd,"|").replace(Qd,"[").replace(Xd,"]")}function tu(e){return Xs(e).replace(Ba,"{").replace(za,"}").replace(Ha,"^")}function Rs(e){return Xs(e).replace(ja,"%2B").replace(eu,"+").replace(Na,"%23").replace(Kd,"%26").replace(Yd,"`").replace(Ba,"{").replace(za,"}").replace(Ha,"^")}function nu(e){return Rs(e).replace(Gd,"%3D")}function ou(e){return Xs(e).replace(Na,"%23").replace(Jd,"%3F")}function su(e){return ou(e).replace(Wd,"%2F")}function jn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ru=/\/$/,iu=e=>e.replace(ru,"");function rs(e,t,n="/"){let o,s={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(o=t.slice(0,c),r=t.slice(c,a>0?a:t.length),s=e(r.slice(1))),a>=0&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=du(o??t,n),{fullPath:o+r+i,path:o,query:s,hash:jn(i)}}function au(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cu(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&un(t.matched[o],n.matched[s])&&qa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!lu(e[n],t[n]))return!1;return!0}function lu(e,t){return Je(e)?Qr(e,t):Je(t)?Qr(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Qr(e,t){return Je(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function du(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Cs=(function(e){return e.pop="pop",e.push="push",e})({}),is=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function uu(e){if(!e)if(on){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const pu=/^[^#]+#/;function fu(e,t){return e.replace(pu,"#")+t}function mu(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Ho=()=>({left:window.scrollX,top:window.scrollY});function vu(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mu(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Xr(e,t){return(history.state?history.state.position-t:-1)+e}const Ps=new Map;function bu(e,t){Ps.set(e,t)}function gu(e){const t=Ps.get(e);return Ps.delete(e),t}function hu(e){return typeof e=="string"||e&&typeof e=="object"}function Ka(e){return typeof e=="string"||typeof e=="symbol"}let ve=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Wa=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function pn(e,t){return se(new Error,{type:e,[Wa]:!0},t)}function dt(e,t){return e instanceof Error&&Wa in e&&(t==null||!!(e.type&t))}const yu=["params","query","hash"];function xu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of yu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function wu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(ja," "),r=s.indexOf("="),i=jn(r<0?s:s.slice(0,r)),a=r<0?null:jn(s.slice(r+1));if(i in t){let c=t[i];Je(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function Yr(e){let t="";for(let n in e){const o=e[n];if(n=nu(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Je(o)?o.map(s=>s&&Rs(s)):[o&&Rs(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function _u(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Je(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const Su=Symbol(""),Zr=Symbol(""),Ys=Symbol(""),Zs=Symbol(""),Es=Symbol("");function yn(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,o,s,r=i=>i()){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=m=>{m===!1?c(pn(ve.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):hu(m)?c(pn(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(i&&o.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},d=r(()=>e.call(o&&o.instances[s],t,n,l));let u=Promise.resolve(d);e.length<3&&(u=u.then(l)),u.catch(m=>c(m))})}function as(e,t,n,o,s=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Fa(c)){const l=(c.__vccOpts||c)[t];l&&r.push(Mt(l,n,o,i,a,s))}else{let l=c();r.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const u=qd(d)?d.default:d;i.mods[a]=d,i.components[a]=u;const m=(u.__vccOpts||u)[t];return m&&Mt(m,n,o,i,a,s)()}))}}return r}function ku(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(l=>un(l,a))?o.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(l=>un(l,c))||s.push(c))}return[n,o,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Tu=()=>location.protocol+"//"+location.host;function Ga(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let i=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Jr(a,"")}return Jr(n,e)+o+s}function Ru(e,t,n,o){let s=[],r=[],i=null;const a=({state:m})=>{const v=Ga(e,location),y=n.value,h=t.value;let P=0;if(m){if(n.value=v,t.value=m,i&&i===y){i=null;return}P=h?m.position-h.position:0}else o(v);s.forEach(I=>{I(n.value,y,{delta:P,type:Cs.pop,direction:P?P>0?is.forward:is.back:is.unknown})})};function c(){i=n.value}function l(m){s.push(m);const v=()=>{const y=s.indexOf(m);y>-1&&s.splice(y,1)};return r.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(se({},m.state,{scroll:Ho()}),"")}}function u(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:l,destroy:u}}function ei(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Ho():null}}function Cu(e){const{history:t,location:n}=window,o={value:Ga(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,d){const u=e.indexOf("#"),m=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:Tu()+e+c;try{t[d?"replaceState":"pushState"](l,"",m),s.value=l}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function i(c,l){r(c,se({},t.state,ei(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),o.value=c}function a(c,l){const d=se({},s.value,t.state,{forward:c,scroll:Ho()});r(d.current,d,!0),r(c,se({},ei(o.value,c,null),{position:d.position+1},l),!1),o.value=c}return{location:o,state:s,push:a,replace:i}}function Pu(e){e=uu(e);const t=Cu(e),n=Ru(e,t.state,t.location,t.replace);function o(r,i=!0){i||n.pauseListeners(),history.go(r)}const s=se({location:"",base:e,go:o,createHref:fu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Eu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Pu(e)}let Gt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var he=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(he||{});const Ou={type:Gt.Static,value:""},Mu=/[a-zA-Z0-9_]/;function Iu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=he.Static,o=n;const s=[];let r;function i(){r&&s.push(r),r=[]}let a=0,c,l="",d="";function u(){l&&(n===he.Static?r.push({type:Gt.Static,value:l}):n===he.Param||n===he.ParamRegExp||n===he.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Gt.Param,value:l,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function m(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==he.ParamRegExp){o=n,n=he.EscapeNext;continue}switch(n){case he.Static:c==="/"?(l&&u(),i()):c===":"?(u(),n=he.Param):m();break;case he.EscapeNext:m(),n=o;break;case he.Param:c==="("?n=he.ParamRegExp:Mu.test(c)?m():(u(),n=he.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case he.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=he.ParamRegExpEnd:d+=c;break;case he.ParamRegExpEnd:u(),n=he.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===he.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}const ti="[^/]+?",Au={sensitive:!1,strict:!1,start:!0,end:!0};var Ae=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ae||{});const Du=/[.+*?^${}()[\]/\\]/g;function Vu(e,t){const n=se({},Au,t),o=[];let s=n.start?"^":"";const r=[];for(const l of e){const d=l.length?[]:[Ae.Root];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const m=l[u];let v=Ae.Segment+(n.sensitive?Ae.BonusCaseSensitive:0);if(m.type===Gt.Static)u||(s+="/"),s+=m.value.replace(Du,"\\$&"),v+=Ae.Static;else if(m.type===Gt.Param){const{value:y,repeatable:h,optional:P,regexp:I}=m;r.push({name:y,repeatable:h,optional:P});const g=I||ti;if(g!==ti){v+=Ae.BonusCustomRegExp;try{`${g}`}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${g}): `+w.message)}}let T=h?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;u||(T=P&&l.length<2?`(?:/${T})`:"/"+T),P&&(T+="?"),s+=T,v+=Ae.Dynamic,P&&(v+=Ae.BonusOptional),h&&(v+=Ae.BonusRepeatable),g===".*"&&(v+=Ae.BonusWildcard)}d.push(v)}o.push(d)}if(n.strict&&n.end){const l=o.length-1;o[l][o[l].length-1]+=Ae.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(l){const d=l.match(i),u={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",y=r[m-1];u[y.name]=v&&y.repeatable?v.split("/"):v}return u}function c(l){let d="",u=!1;for(const m of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const v of m)if(v.type===Gt.Static)d+=v.value;else if(v.type===Gt.Param){const{value:y,repeatable:h,optional:P}=v,I=y in l?l[y]:"";if(Je(I)&&!h)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const g=Je(I)?I.join("/"):I;if(!g)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);d+=g}}return d||"/"}return{re:i,score:o,keys:r,parse:a,stringify:c}}function Lu(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===Ae.Static+Ae.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ae.Static+Ae.Segment?1:-1:0}function Ja(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=Lu(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(ni(o))return 1;if(ni(s))return-1}return s.length-o.length}function ni(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $u={strict:!1,end:!0,sensitive:!1};function Uu(e,t,n){const o=Vu(Iu(e.path),n),s=se(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Fu(e,t){const n=[],o=new Map;t=Gr($u,t);function s(u){return o.get(u)}function r(u,m,v){const y=!v,h=si(u);h.aliasOf=v&&v.record;const P=Gr(t,u),I=[h];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of w)I.push(si(se({},h,{components:v?v.record.components:h.components,path:M,aliasOf:v?v.record:h})))}let g,T;for(const w of I){const{path:M}=w;if(m&&M[0]!=="/"){const G=m.record.path,L=G[G.length-1]==="/"?"":"/";w.path=m.record.path+(M&&L+M)}if(g=Uu(w,m,P),v?v.alias.push(g):(T=T||g,T!==g&&T.alias.push(g),y&&u.name&&!ri(g)&&i(u.name)),Qa(g)&&c(g),h.children){const G=h.children;for(let L=0;L<G.length;L++)r(G[L],g,v&&v.children[L])}v=v||g}return T?()=>{i(T)}:In}function i(u){if(Ka(u)){const m=o.get(u);m&&(o.delete(u),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(u);m>-1&&(n.splice(m,1),u.record.name&&o.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function c(u){const m=Hu(u,n);n.splice(m,0,u),u.record.name&&!ri(u)&&o.set(u.record.name,u)}function l(u,m){let v,y={},h,P;if("name"in u&&u.name){if(v=o.get(u.name),!v)throw pn(ve.MATCHER_NOT_FOUND,{location:u});P=v.record.name,y=se(oi(m.params,v.keys.filter(T=>!T.optional).concat(v.parent?v.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),u.params&&oi(u.params,v.keys.map(T=>T.name))),h=v.stringify(y)}else if(u.path!=null)h=u.path,v=n.find(T=>T.re.test(h)),v&&(y=v.parse(h),P=v.record.name);else{if(v=m.name?o.get(m.name):n.find(T=>T.re.test(m.path)),!v)throw pn(ve.MATCHER_NOT_FOUND,{location:u,currentLocation:m});P=v.record.name,y=se({},m.params,u.params),h=v.stringify(y)}const I=[];let g=v;for(;g;)I.unshift(g.record),g=g.parent;return{name:P,path:h,params:y,matched:I,meta:ju(I)}}e.forEach(u=>r(u));function d(){n.length=0,o.clear()}return{addRoute:r,resolve:l,removeRoute:i,clearRoutes:d,getRoutes:a,getRecordMatcher:s}}function oi(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function si(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Nu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Nu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function ri(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ju(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Hu(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;Ja(e,t[r])<0?o=r:n=r+1}const s=Bu(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function Bu(e){let t=e;for(;t=t.parent;)if(Qa(t)&&Ja(e,t)===0)return t}function Qa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ii(e){const t=Ge(Ys),n=Ge(Zs),o=Pe(()=>{const c=Vt(e.to);return t.resolve(c)}),s=Pe(()=>{const{matched:c}=o.value,{length:l}=c,d=c[l-1],u=n.matched;if(!d||!u.length)return-1;const m=u.findIndex(un.bind(null,d));if(m>-1)return m;const v=ai(c[l-2]);return l>1&&ai(d)===v&&u[u.length-1].path!==v?u.findIndex(un.bind(null,c[l-2])):m}),r=Pe(()=>s.value>-1&&Gu(n.params,o.value.params)),i=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&qa(n.params,o.value.params));function a(c={}){if(Wu(c)){const l=t[Vt(e.replace)?"replace":"push"](Vt(e.to)).catch(In);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:o,href:Pe(()=>o.value.href),isActive:r,isExactActive:i,navigate:a}}function zu(e){return e.length===1?e[0]:e}const qu=qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ii,setup(e,{slots:t}){const n=Hn(ii(e)),{options:o}=Ge(Ys),s=Pe(()=>({[ci(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ci(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&zu(t.default(n));return e.custom?r:Js("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ku=qu;function Wu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gu(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Je(s)||s.length!==o.length||o.some((r,i)=>r.valueOf()!==s[i].valueOf()))return!1}return!0}function ai(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ci=(e,t,n)=>e??t??n,Ju=qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Ge(Es),s=Pe(()=>e.route||o.value),r=Ge(Zr,0),i=Pe(()=>{let l=Vt(r);const{matched:d}=s.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),a=Pe(()=>s.value.matched[i.value]);no(Zr,Pe(()=>i.value+1)),no(Su,a),no(Es,s);const c=vt();return Lt(()=>[c.value,a.value,e.name],([l,d,u],[m,v,y])=>{d&&(d.instances[u]=l,v&&v!==d&&l&&l===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),l&&d&&(!v||!un(d,v)||!m)&&(d.enterCallbacks[u]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=s.value,d=e.name,u=a.value,m=u&&u.components[d];if(!m)return li(n.default,{Component:m,route:l});const v=u.props[d],y=v?v===!0?l.params:typeof v=="function"?v(l):v:null,P=Js(m,se({},y,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(u.instances[d]=null)},ref:c}));return li(n.default,{Component:P,route:l})||P}}});function li(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qu=Ju;function Xu(e){const t=Fu(e.routes,e),n=e.parseQuery||wu,o=e.stringifyQuery||Yr,s=e.history,r=yn(),i=yn(),a=yn(),c=Fi(Rt);let l=Rt;on&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ss.bind(null,S=>""+S),u=ss.bind(null,su),m=ss.bind(null,jn);function v(S,U){let V,B;return Ka(S)?(V=t.getRecordMatcher(S),B=U):B=S,t.addRoute(B,V)}function y(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function h(){return t.getRoutes().map(S=>S.record)}function P(S){return!!t.getRecordMatcher(S)}function I(S,U){if(U=se({},U||c.value),typeof S=="string"){const b=rs(n,S,U.path),_=t.resolve({path:b.path},U),k=s.createHref(b.fullPath);return se(b,_,{params:m(_.params),hash:jn(b.hash),redirectedFrom:void 0,href:k})}let V;if(S.path!=null)V=se({},S,{path:rs(n,S.path,U.path).path});else{const b=se({},S.params);for(const _ in b)b[_]==null&&delete b[_];V=se({},S,{params:u(b)}),U.params=u(U.params)}const B=t.resolve(V,U),Z=S.hash||"";B.params=d(m(B.params));const p=au(o,se({},S,{hash:tu(Z),path:B.path})),f=s.createHref(p);return se({fullPath:p,hash:Z,query:o===Yr?_u(S.query):S.query||{}},B,{redirectedFrom:void 0,href:f})}function g(S){return typeof S=="string"?rs(n,S,c.value.path):se({},S)}function T(S,U){if(l!==S)return pn(ve.NAVIGATION_CANCELLED,{from:U,to:S})}function w(S){return L(S)}function M(S){return w(se(g(S),{replace:!0}))}function G(S,U){const V=S.matched[S.matched.length-1];if(V&&V.redirect){const{redirect:B}=V;let Z=typeof B=="function"?B(S,U):B;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=g(Z):{path:Z},Z.params={}),se({query:S.query,hash:S.hash,params:Z.path!=null?{}:S.params},Z)}}function L(S,U){const V=l=I(S),B=c.value,Z=S.state,p=S.force,f=S.replace===!0,b=G(V,B);if(b)return L(se(g(b),{state:typeof b=="object"?se({},Z,b.state):Z,force:p,replace:f}),U||V);const _=V;_.redirectedFrom=U;let k;return!p&&cu(o,B,V)&&(k=pn(ve.NAVIGATION_DUPLICATED,{to:_,from:B}),Qe(B,B,!0,!1)),(k?Promise.resolve(k):H(_,B)).catch(x=>dt(x)?dt(x,ve.NAVIGATION_GUARD_REDIRECT)?x:kt(x):oe(x,_,B)).then(x=>{if(x){if(dt(x,ve.NAVIGATION_GUARD_REDIRECT))return L(se({replace:f},g(x.to),{state:typeof x.to=="object"?se({},Z,x.to.state):Z,force:p}),U||_)}else x=D(_,B,!0,f,Z);return J(_,B,x),x})}function N(S,U){const V=T(S,U);return V?Promise.reject(V):Promise.resolve()}function C(S){const U=Zt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(S):S()}function H(S,U){let V;const[B,Z,p]=ku(S,U);V=as(B.reverse(),"beforeRouteLeave",S,U);for(const b of B)b.leaveGuards.forEach(_=>{V.push(Mt(_,S,U))});const f=N.bind(null,S,U);return V.push(f),Ne(V).then(()=>{V=[];for(const b of r.list())V.push(Mt(b,S,U));return V.push(f),Ne(V)}).then(()=>{V=as(Z,"beforeRouteUpdate",S,U);for(const b of Z)b.updateGuards.forEach(_=>{V.push(Mt(_,S,U))});return V.push(f),Ne(V)}).then(()=>{V=[];for(const b of p)if(b.beforeEnter)if(Je(b.beforeEnter))for(const _ of b.beforeEnter)V.push(Mt(_,S,U));else V.push(Mt(b.beforeEnter,S,U));return V.push(f),Ne(V)}).then(()=>(S.matched.forEach(b=>b.enterCallbacks={}),V=as(p,"beforeRouteEnter",S,U,C),V.push(f),Ne(V))).then(()=>{V=[];for(const b of i.list())V.push(Mt(b,S,U));return V.push(f),Ne(V)}).catch(b=>dt(b,ve.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function J(S,U,V){a.list().forEach(B=>C(()=>B(S,U,V)))}function D(S,U,V,B,Z){const p=T(S,U);if(p)return p;const f=U===Rt,b=on?history.state:{};V&&(B||f?s.replace(S.fullPath,se({scroll:f&&b&&b.scroll},Z)):s.push(S.fullPath,Z)),c.value=S,Qe(S,U,V,f),kt()}let X;function pe(){X||(X=s.listen((S,U,V)=>{if(!Nt.listening)return;const B=I(S),Z=G(B,Nt.currentRoute.value);if(Z){L(se(Z,{replace:!0,force:!0}),B).catch(In);return}l=B;const p=c.value;on&&bu(Xr(p.fullPath,V.delta),Ho()),H(B,p).catch(f=>dt(f,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?f:dt(f,ve.NAVIGATION_GUARD_REDIRECT)?(L(se(g(f.to),{force:!0}),B).then(b=>{dt(b,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===Cs.pop&&s.go(-1,!1)}).catch(In),Promise.reject()):(V.delta&&s.go(-V.delta,!1),oe(f,B,p))).then(f=>{f=f||D(B,p,!1),f&&(V.delta&&!dt(f,ve.NAVIGATION_CANCELLED)?s.go(-V.delta,!1):V.type===Cs.pop&&dt(f,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),J(B,p,f)}).catch(In)}))}let Oe=yn(),ae=yn(),Q;function oe(S,U,V){kt(S);const B=ae.list();return B.length?B.forEach(Z=>Z(S,U,V)):console.error(S),Promise.reject(S)}function ct(){return Q&&c.value!==Rt?Promise.resolve():new Promise((S,U)=>{Oe.add([S,U])})}function kt(S){return Q||(Q=!S,pe(),Oe.list().forEach(([U,V])=>S?V(S):U()),Oe.reset()),S}function Qe(S,U,V,B){const{scrollBehavior:Z}=e;if(!on||!Z)return Promise.resolve();const p=!V&&gu(Xr(S.fullPath,0))||(B||!V)&&history.state&&history.state.scroll||null;return Do().then(()=>Z(S,U,p)).then(f=>f&&vu(f)).catch(f=>oe(f,S,U))}const Me=S=>s.go(S);let Yt;const Zt=new Set,Nt={currentRoute:c,listening:!0,addRoute:v,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:h,resolve:I,options:e,push:w,replace:M,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ae.add,isReady:ct,install(S){S.component("RouterLink",Ku),S.component("RouterView",Qu),S.config.globalProperties.$router=Nt,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(c)}),on&&!Yt&&c.value===Rt&&(Yt=!0,w(s.location).catch(B=>{}));const U={};for(const B in Rt)Object.defineProperty(U,B,{get:()=>c.value[B],enumerable:!0});S.provide(Ys,Nt),S.provide(Zs,Ui(U)),S.provide(Es,c);const V=S.unmount;Zt.add(S),S.unmount=function(){Zt.delete(S),Zt.size<1&&(l=Rt,X&&X(),X=null,c.value=Rt,Yt=!1,Q=!1),V()}}};function Ne(S){return S.reduce((U,V)=>U.then(()=>C(V)),Promise.resolve())}return Nt}function Xa(e){return Ge(Zs)}const Yu="modulepreload",Zu=function(e){return"/"+e},di={},F=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){let i=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=i(n.map(l=>{if(l=Zu(l),l in di)return;di[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Yu,d||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((v,y)=>{m.addEventListener("load",v),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};const ep=`<script setup lang="ts">
import { ref, h, defineComponent, type Component, type PropType } from 'vue'

const TAGS = ['div', 'section', 'article'] as const

interface Item {
  id: number
  label: string
  done: boolean
}

const items = ref<Item[]>([
  { id: 1, label: 'спроектировать', done: true },
  { id: 2, label: 'реализовать', done: false },
  { id: 3, label: 'протестировать', done: false },
])

// Render-функция: полный контроль над vnode-деревом
// В SFC это редкость — но именно так работают .tsx и внутренности библиотек
const TodoRender: Component = defineComponent({
  props: { list: { type: Array as PropType<Item[]>, required: true } },
  setup(props) {
    return () =>
      h('ul', { class: 'stack', style: 'gap: 4px' },
        props.list.map(item =>
          h('li', { key: item.id, class: 'card', style: 'margin: 0' }, [
            h('span', {
              style: item.done ? 'text-decoration: line-through; opacity: .6' : '',
            }, item.label),
            h('span', {
              class: ['tag', item.done ? 'ok' : 'info'],
              style: 'margin-left: 8px',
            }, item.done ? 'done' : 'in progress'),
          ]),
        ),
      )
  },
})

// Полиморфный рендер: тег выбирается в рантайме
const asTag = ref<'div' | 'section' | 'article'>('div')
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="items[0].done = !items[0].done">toggle первый</button>
    </div>

    <TodoRender :list="items" />

    <div class="card">
      <b>Полиморфный тег (as-проп)</b>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="t in TAGS"
          :key="t"
          class="btn small"
          :class="{ primary: asTag === t }"
          @click="asTag = t"
        >
          &lt;{{ t }}&gt;
        </button>
      </div>
      <component :is="asTag" class="card" style="margin-top: 8px">
        Этот блок рендерится как <b>&lt;{{ asTag }}&gt;</b> — семантика меняется, стили те же.
      </component>
    </div>

    <p class="muted">
      h(type, props, children) — низкоуровневый «кирпич» шаблонов: компилятор SFC превращает ваш
      template ровно в такие вызовы. Ручные render-функции нужны для динамики, недостижимой в
      шаблоне: генерация произвольной вложенности, слоты-фабрики, высокопроизводительные списки.
    </p>
  </div>
</template>
`,tp=`// Полный пример: Table рендерит произвольные столбцы
import { h, defineComponent, type PropType } from 'vue'

interface Column<T> {
  key: keyof T
  header: string
  render?: (row: T) => ReturnType<typeof h>
}

export const DataTable = defineComponent({
  props: {
    columns: { type: Array as PropType<Column<any>[]>, required: true },
    rows: { type: Array as PropType<any[]>, required: true },
  },
  setup(props) {
    return () =>
      h('table', { class: 'table' }, [
        h('thead', [
          h('tr', props.columns.map(c => h('th', c.header))),
        ]),
        h('tbody', props.rows.map(row =>
          h('tr', { key: row.id }, props.columns.map(c =>
            h('td', c.render ? c.render(row) : String(row[c.key]))
          ))
        )),
      ])
  },
})

// JSX-версия того же (файл .tsx):
// setup(props) {
//   return () => (
//     <table class="table">
//       <thead><tr>{props.columns.map(c => <th>{c.header}</th>)}</tr></thead>
//       <tbody>
//         {props.rows.map(row => (
//           <tr key={row.id}>
//             {props.columns.map(c => <td>{c.render ? c.render(row) : String(row[c.key])}</td>)}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }`,np={title:"Render-функции, h() и JSX",summary:"Vnode-дерево вручную: h(type, props, children), когда шаблон тесен, JSX как альтернативный синтаксис.",demo:()=>F(()=>import("./Demo-ChNezP4K.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${ep}

// ============ DataTable через h() и через JSX ============
${tp}`,content:{intro:"Каждый шаблон компилируется в <b>render-функцию</b> — код, создающий vnode-дерево через <code>h(type, props, children)</code>. Обычно компилятор делает это за вас, но функцию можно написать и <b>вручную</b>: когда структура дерева заранее неизвестна (рекурсивные компоненты, динамические таблицы, слоты-фабрики) или нужна максимальная производительность. <b>JSX</b> — тот же h() с приятным синтаксисом (файлы .tsx). В демо — компонент на render-функции и полиморфный рендер с выбором тега в рантайме.",howItWorks:`h() создаёт <b>vnode</b> — JS-описание будущего DOM-узла: тип (тег/компонент), props, children. Render-функция компонента возвращает дерево vnode; Vue диффит его с предыдущим и патчит DOM. Ключи работают так же (key обязателен для списков). Пропсы в h() — объект; class и style поддерживают массивы/объекты; обработчики — префикс on (onClick). Children: строка, vnode, массив или объект слотов { default: () => ... } для компонентов. JSX — синтаксический сахар: <div class="a">{x}</div> компилируется в h('div', { class: 'a' }, x).`,mistakes:[{title:"Создавать vnode вне render-функции",text:"Vnode, созданный один раз в setup, «застывает»: дифф увидит то же дерево и не обновит DOM. Всё создание — внутри возвращаемой функции.",code:`setup() {
  const v = h('div', state.value) // ❌ создан один раз
  return () => v
}`,fix:`setup() {
  return () => h('div', state.value) // ✅ каждый рендер новый vnode
}`},{title:"Забывать key в списках vnode",text:"Как и в шаблоне: без ключей дифф работает по индексам — перестановки ломают состояние дочерних компонентов.",code:"items.map(i => h('li', i.label)) // ❌",fix:"items.map(i => h('li', { key: i.id }, i.label)) // ✅"},{title:"Использовать render-функции там, где шаблон проще",text:"Render-функции многословны: пропсы-объекты, ручные обработчики, нет v-model/v-if сахара. 95% UI — шаблон; h() — для особых случаев.",code:`// ❌ простая карточка через h():
() => h('div', { class: 'card' }, [h('b', title), h('p', text)])`,fix:'<div class="card"><b>{{ title }}</b><p>{{ text }}</p></div> <!-- ✅ -->'}],nuances:["Первый аргумент h() — строка (тег), объект компонента, или функция (функциональный компонент).","События: <code>onClick</code>, <code>onUpdate:modelValue</code> — camelCase после on.","Слоты компонента передаются третьим аргументом-объектом: <code>{ default: () =&gt; [...], header: () =&gt; ... }</code>.","Функциональные компоненты — просто функции без setup: <code>(props, { slots, emit }) =&gt; h(...)</code> — лёгкие обёртки без экземпляра.","props в h() для компонентов включает и attrs, и emits-обработчики — наследование $attrs управляется вручную.","Шаблонный компилятор использует <b>оптимизированные</b> вызовы (createVNode + patchFlags) — ручной h() чуть медленнее на больших деревьях."],bestPractices:["Пишите render-функции в <b>.tsx</b> — JSX читается и типизируется лучше вложенных h().","Выделяйте компонент-рендерер в отдельный файл с defineComponent и PropType-типами.","Динамические структуры (table с render-колонками, рекурсивные деревья) — естественная зона h().","Не забывайте key, и держите vnode-создание внутри render-функции.","Библиотеки UI почти целиком написаны на render-функциях — там стандартизация важнее краткости шаблона."],whenToUse:"<strong>h()/JSX</strong> нужен для: компонент-рендереров с произвольной конфигурацией (таблицы, деревья, диаграммы), рекурсивных структур, библиотечных компонентов, динамического выбора тега/компонента. Шаблон остаётся выбором по умолчанию для всего остального.",alternative:{title:"Dynamic components + слоты вместо рендер-функции",text:"Многих «динамик» шаблон достигает без h(): component :is для выбора, scoped slots для кастомизации ячеек.",code:`<DataTable :rows="rows" :columns="cols">
  <template #cell-price="{ row }">
    <b>{{ formatPrice(row.price) }}</b>
  </template>
</DataTable>
<!-- ячейки кастомизируются слотами — h() не понадобился -->`},advanced:{title:"Headless через render-функцию и слоты-фабрики",text:"Мощный паттерн: компонент предоставляет логику, а разметку строит вызывающий через scoped slot, получающий render-параметры. Так устроены TanStack Table / vue-virtual-scroller обёртки.",code:`// useListProvider возвращает фабрику vnode через слот
export const ListProvider = defineComponent({
  props: { items: Array as PropType<Item[]> },
  setup(props, { slots }) {
    const { hoveredId, setHovered } = useHover()
    return () => slots.default?.({
      items: props.items,
      hoveredId: hoveredId.value,
      setHovered,
    })
  },
})

// потребитель:
// <ListProvider :items="rows" v-slot="{ items, hoveredId, setHovered }">
//   <div v-for="i in items" @mouseenter="setHovered(i.id)">…</div>
// </ListProvider>`}}},op=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"})),sp=`<script setup lang="ts">
import { ref, computed, defineModel, useTemplateRef, onMounted } from 'vue'

// ================= defineModel: v-model внутри компонента =================
// Родитель пишет <FancyInput v-model="text"> — а здесь magic:
const model = defineModel<string>({ default: '' })
const cleaned = computed(() => \`символов: \${(model.value ?? '').length}\`)

// ================= useTemplateRef: типизированный доступ к DOM =================
const inputEl = useTemplateRef<HTMLInputElement>('input-el')
const dialogEl = useTemplateRef<HTMLElement>('dialog-el')

const chars = ref(0)

onMounted(() => {
  // DOM готов — можно измерять/фокусировать
  inputEl.value?.focus()
})

function focusInput() {
  inputEl.value?.focus()
  chars.value = inputEl.value?.value.length ?? 0
}

function scrollToDialog() {
  dialogEl.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>defineModel — v-model без пропс+эмит церемоний</b>
        <span class="tag ok">Vue 3.4+</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        В этом демо компонент сам является «дочерним» для страницы: родитель (страница) владеет
        значением, здесь только model.
      </p>
      <input v-model="model" class="input" style="margin-top: 8px" placeholder="печатайте…" />
      <p class="mono muted" style="margin: 6px 0 0">{{ cleaned }} · model = {{ JSON.stringify(model) }}</p>
    </div>

    <div class="card">
      <b>useTemplateRef — доступ к DOM без magic-string в ref()</b>
      <div class="row" style="margin-top: 8px">
        <input
          ref="input-el"
          v-model="model"
          class="input"
          style="max-width: 220px"
          placeholder="этот input имеет ref"
        />
        <button class="btn" @click="focusInput">focusInput()</button>
        <button class="btn" @click="scrollToDialog">scroll к блоку</button>
      </div>
      <p class="mono muted" style="margin: 8px 0 0">
        inputEl.value?.value.length = {{ chars }} (обновляется по кнопке)
      </p>
    </div>

    <div ref="dialog-el" class="card">
      <b>Этот блок — dialogEl</b>
      <p class="muted" style="margin: 6px 0 0">
        useTemplateRef('dialog-el') привязан к этому узлу: прокрутка к нему, измерения,
        focus-менеджмент.
      </p>
    </div>

    <p class="muted">
      Компиляторные макросы (defineModel, defineProps, defineEmits, defineExpose, useTemplateRef)
      доступны в &lt;script setup&gt; без импорта — компилятор превращает их в соответствующий код
      рантайма.
    </p>
  </div>
</template>
`,rp=`// ===== defineModel: двустороннее связывание (3.4+) =====
const title = defineModel<string>({ required: true })
const enabled = defineModel<boolean>('enabled', { default: false })
// на теге: <FancyInput v-model="t" v-model:enabled="e" />

// ===== useTemplateRef (3.5+): именованный template ref =====
const inputEl = useTemplateRef<HTMLInputElement>('my-input')
// <input ref="my-input" /> → inputEl.value — HTMLElement | null
// раньше: const inputEl = ref(null) + <input ref="inputEl"> — имя через переменную

// ===== defineExpose: что наружу через родительский ref =====
// Child.vue
const validate = () => true
defineExpose({ validate })
// родитель:
const child = useTemplateRef<typeof Child>('child')
child.value?.validate()

// ===== defineOptions: опции компонента в script setup =====
defineOptions({
  name: 'FancyInput',
  inheritAttrs: false,
})

// ===== defineProps/defineEmits — типизированные =====
const props = defineProps<{ user: User; size?: 'sm' | 'lg' }>()
const emit = defineEmits<{ save: [value: string]; cancel: [] }>()`,ip={title:"Компиляторные макросы: defineModel, useTemplateRef, defineExpose",summary:"Макросы <script setup>: v-model внутри компонента, типизированные template ref, публичный API через defineExpose.",demo:()=>F(()=>import("./Demo-DbThskXi.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${sp}

// ============ шпаргалка макросов ============
${rp}`,content:{intro:"<b>Компиляторные макросы</b> — специальные функции <code>&lt;script setup&gt;</code>, которые компилятор превращает в код рантайма: импортировать их не нужно. Главные: <code>defineModel</code> (двусторонняя связь одной строкой), <code>useTemplateRef</code> (доступ к DOM по имени ref-атрибута), <code>defineExpose</code> (публичный API компонента для родителя), <code>defineOptions</code> (name/inheritAttrs), <code>defineProps</code>/<code>defineEmits</code>. В демо — живой defineModel-инпут и useTemplateRef с фокусом и скроллом.",howItWorks:`defineModel компилируется в проп modelValue + emit update:modelValue (+ возвращает ref-подобный объект: чтение — из пропа, запись — emit). Именованные модели — <code>defineModel&lt;T&gt;('name')</code>. useTemplateRef('name') возвращает ref на элемент с <code>ref="name"</code> — надёжнее старого «ref-переменная совпадает с именем атрибута», особенно при переименованиях. defineExpose определяет, что увидит родитель через template ref (по умолчанию в script setup закрыто — в отличие от Options API). defineOptions задаёт обычные options-поля (name, inheritAttrs: false) — раньше требовался второй &lt;script&gt;-блок.`,mistakes:[{title:"defineModel без слушателя на родителе",text:"Запись в model эмитит update:modelValue. Если родитель не передал v-model, значение вернётся к дефолту/пропу после каждого ререндера — «ввод не сохраняется».",code:`<FancyInput /> <!-- ❌ без v-model -->
// внутри: model.value = 'x' — emit уходит в пустоту`,fix:'<FancyInput v-model="text" /> <!-- ✅ -->'},{title:"Обращаться к template ref до монтирования",text:"До mounted inputEl.value === null: измерения и focus в setup падают. Ждите onMounted (или используйте watch + flush: 'post').",code:`const el = useTemplateRef('x')
el.value?.focus() // ❌ null на этапе setup`,fix:"onMounted(() => el.value?.focus()) // ✅"},{title:"defineExpose всей внутренней кухни",text:"Раскрытый наружу API — обязательство: родители начнут дергать internals, рефакторинг сломает их. Экспонируйте только контрактные методы.",code:"defineExpose({ state, doStuff, internalCache, temp }) // ❌",fix:"defineExpose({ validate: () => true }) // ✅ минимальный API"}],nuances:["defineModel возвращает объект с .value — можно watch-ить, передавать дальше в v-model, мутировать (это emit).","Модификаторы v-model на компоненте приедут вторым элементом: <code>const [model, mods] = defineModel()</code>.","useTemplateRef типизируется генериком: <code>useTemplateRef&lt;HTMLInputElement&gt;('x')</code>.","Для v-for-refs (множество элементов) старый подход с массивом ref ещё актуален; useTemplateRef — для одиночных.","<code>defineOptions({ inheritAttrs: false })</code> + <code>useAttrs()</code> — база полиморфных/обёрточных компонентов.","defineExpose-объект типизируется автоматически: родительский ref знает о методах (через InstanceType)."],bestPractices:["defineModel вместо ручных props+emit для любых инпут-компонентов.",'useTemplateRef с осмысленными именами (ref="search-input") — рефакторобезопасно.',"defineExpose — минимально и только контрактом (validate, focus, reset).","Для родительского доступа к методам сначала подумайте: может, это emit/состояние, а не imperative-API?","Указывайте name через defineOptions у библиотечных компонентов — читаемость Devtools/KeepAlive-include."],whenToUse:"<strong>defineModel</strong> — все form-контролы и переключатели. <strong>useTemplateRef</strong> — фокус, скролл, измерения, интеграция с DOM-библиотеками. <strong>defineExpose</strong> — контракты «вызови у меня validate» для форм/мастеров. <strong>defineOptions</strong> — нейминг и inheritAttrs у обёрток.",alternative:{title:"Классические props + emits",text:"defineModel — сахар; явный контракт (defineProps + defineEmits + computed get/set) остаётся валидным и чуть более явным для сложных геттеров/сеттеров.",code:`const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
const value = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})`},advanced:{title:"Генерик-компонент с defineModel и слотами",text:"Макросы комбинируются с generic-компонентами: типобезопасный select/dropdown, где model типизирован по вариантам опций, а рендер опций отдаётся слоту.",code:`<!-- GenericSelect.vue -->
<script setup lang="ts" generic="T extends { id: string }">
const model = defineModel<T | null>({ required: true })
defineProps<{ options: T[] }>()
<\/script>

<template>
  <select :value="model?.id" @change="model = options.find(o => o.id === ($event.target as HTMLSelectElement).value) ?? null">
    <option v-for="o in options" :key="o.id" :value="o.id">
      <slot :option="o">{{ o.id }}</slot>
    </option>
  </select>
</template>

// родитель: model типизирован как User | null автоматически`}}},ap=Object.freeze(Object.defineProperty({__proto__:null,default:ip},Symbol.toStringTag,{value:"Module"})),cp=`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type Directive } from 'vue'

// ================= Кастомная директива v-highlight =================
interface HighlightBinding {
  color?: string
  pulse?: boolean
}

const vHighlight: Directive<HTMLElement, HighlightBinding | undefined> = {
  mounted(el, binding) {
    const { color = 'rgba(66, 184, 131, .25)', pulse = false } = binding.value ?? {}
    el.style.background = color
    if (pulse) {
      el.style.transition = 'box-shadow .3s'
      el.style.boxShadow = '0 0 0 2px rgba(66, 184, 131, .6)'
    }
  },
  updated(el, binding) {
    const { color = 'rgba(66, 184, 131, .25)' } = binding.value ?? {}
    el.style.background = color
  },
  unmounted(el) {
    el.style.background = ''
    el.style.boxShadow = ''
  },
}

// ================= Headless-паттерн: useToggleList =================
// Логика без разметки: возвращает состояние и методы, UI решает как рисовать
interface ToggleItem {
  id: string
  selected: boolean
}

function useToggleList(initial: string[]) {
  const selected = ref<Set<string>>(new Set(initial))

  function toggle(id: string) {
    const next = new Set(selected.value)
    next.has(id) ? next.delete(id) : next.add(id)
    selected.value = next
  }

  const count = computed(() => selected.value.size)
  return { selected, toggle, count }
}

const { selected, toggle, count } = useToggleList(['vue', 'router'])
const options = ['vue', 'router', 'pinia', 'vitest']

// ================= v-модификаторы через аргументы =================
const events = ref<string[]>([])
function addLog(msg: string) {
  events.value.unshift(msg)
  if (events.value.length > 5) events.value.pop()
}

onMounted(() => {
  // директивы уже инициализированы компилятором к этому моменту
  addLog('mounted: директивы инициализированы')
})
void onUnmounted // демонстрация cleanup-точки; здесь подписок нет
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <b>v-highlight — кастомная директива</b>
      <div class="row" style="margin-top: 8px">
        <p v-highlight="{ color: 'rgba(66,184,131,.25)', pulse: true }" style="margin: 0; padding: 8px">
          Абзац с подсветкой через v-highlight
        </p>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        Директива — DOM-функция: mounted/updated/unmounted хуки напрямую работают со стилями узла.
        Локальные директивы в script setup: имя vHighlight → использование v-highlight.
      </p>
    </div>

    <div class="card">
      <b>Headless: useToggleList (логика без UI)</b>
      <p class="muted" style="margin: 6px 0 0">
        Выбрано: {{ count }} — UI-реализация может быть любой (кнопки, чекбоксы, теги).
      </p>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="opt in options"
          :key="opt"
          class="btn small"
          :class="{ primary: selected.has(opt) }"
          @click="toggle(opt)"
        >
          {{ selected.has(opt) ? '✓' : '' }} {{ opt }}
        </button>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in events" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
`,lp=`// ===== Глобальная директива (plugins/directives.ts) =====
import type { Directive } from 'vue'

const vFocus: Directive<HTMLInputElement> = {
  mounted: (el) => el.focus(),
}

// v-lazy-scroll: директива с аргументом и модификатором
// <div v-lazy-scroll:300.threshold=".5">
const vLazyScroll: Directive = {
  mounted(el, binding) {
    // binding.arg → '300', binding.modifiers → { threshold: true },
    // binding.value → '.5'
  },
}

export default {
  install(app) {
    app.directive('focus', vFocus)
    app.directive('lazy-scroll', vLazyScroll)
  },
}

// main.ts: app.use(directives)
// использование: <input v-focus />`,dp=`// ===== Headless-компонент: логика в слоте-параметрах =====
<!-- MouseTracker.vue — сам НЕ рендерит разметку -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
function update(e: MouseEvent) { x.value = e.clientX; y.value = e.clientY }
onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
<\/script>

<template>
  <slot :x="x" :y="y" />
</template>

<!-- Потребитель решает, КАК показать -->
<MouseTracker v-slot="{ x, y }">
  <span class="badge">курсор: {{ x }}×{{ y }}</span>
</MouseTracker>

<!-- Headless vs composable: слот-версия даёт доступ к SSR-рендеру
     и реактивности внутри дерева; composable — просто функция -->`,up={title:"Кастомные директивы и headless-компоненты",summary:"Directive с хуками и binding, глобальная vs локальная регистрация; headless/renderless через scoped slots и композаблы.",demo:()=>F(()=>import("./Demo-JR_8IH_X.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${cp}

// ============ директивы ============
${lp}

// ============ headless-паттерны ============
${dp}`,content:{intro:"<b>Кастомная директива</b> — переиспользуемая логика низкоуровневого DOM-доступа: <code>v-focus</code> для фокуса, <code>v-tooltip</code>, <code>v-lazy</code>. Директива получает хуки жизненного цикла узла (mounted, updated, unmounted) и binding (value, arg, modifiers). <b>Headless/renderless-компоненты</b> — противоположный подход: вся логика есть, разметки нет — UI отдаётся через scoped-слоты. В демо: живая директива v-highlight и headless-паттерн useToggleList, где UI свободно меняется.",howItWorks:'Директива — объект с хуками: <code>created/beforeMount/mounted/beforeUpdate/updated/beforeUnmount/unmounted</code>. Каждый получает (el, binding, vnode, prevVnode); binding.value — значение после =, binding.arg — текст после :, binding.modifiers — объект модификаторов. В <code>&lt;script setup&gt;</code> локальная директива — переменная с именем vCamelCase (vHighlight → v-highlight). Headless-компонент рендерит только <code>&lt;slot :state="..." /&gt;</code>: потребитель получает реактивные параметры и строит любой UI. Гибрид — композабл: то же состояние без обёртки-компонента.',mistakes:[{title:"Директива вместо компонента",text:"Директива не рендерит — только манипулирует существующим узлом. Если нужен новый DOM (всплывающий тултип-элемент), это компонент или Teleport, не директива.",code:`// ❌ v-tooltip, создающий DOM внутри mounted
el.appendChild(tooltipEl) // ручной DOM вне системы Vue`,fix:`// ✅ <Tooltip text="...">компонент</Tooltip>
// или VueUse useFloating + компонент-обёртка`},{title:"Забыть updated-хук",text:'mounted сработает один раз; если binding.value реактивен, при его изменении DOM не обновится без хука updated. Классика: v-color="dynamicColor" «перестаёт работать».',code:"const vColor = { mounted(el, b) { el.style.color = b.value } } // ❌",fix:`const vColor = {
  mounted(el, b) { el.style.color = b.value },
  updated(el, b) { el.style.color = b.value }, // ✅
}`},{title:"Headless через provide/inject вместо слотов",text:"Скрытие состояния в inject уводит контракт «под капот»: незаметны зависимости и типы. Слоты делают параметры явными и типизированными.",code:"// ❌ provider с скрытым контекстом для простого hover",fix:'// ✅ v-slot="{ hovered, on }" — контракт виден в месте использования'}],nuances:["binding.value обновляется <b>до</b> updated — сравнение с prevVnode.props позволяет видеть старое значение.","Директивы не работают на <b>компонентах</b> (только на обычных элементах); на компоненте упадёт с warning.","SSR: на сервере выполняются только created/beforeMount-аналоги (getSSRProps) — DOM-хуки не сработают.","Модификаторы — не «сахар события», а просто флаги: их семантику определяет ваша директива.","Headless + композабл — два уровня одного паттерна: композабл для JS-контекста, headless-компонент для дерева Vue (SSR, transition-обёртки).","Глобальные директивы регистрируйте плагином и типизируйте через <code>declare module 'vue' { interface GlobalDirectives ... }</code>."],bestPractices:["Директива — для точечного DOM-вмешательства (focus, измерения, сторонние инстансы). Бизнес-логика — никогда.","Всегда пары mounted/updated для реактивных значений; cleanup в unmounted.","Headless-компоненты — когда нужен рендер-контекст; композаблы — когда достаточно функций.","Именуйте директивы по действию (v-focus, v-lazy), компоненты headless — по роли (MouseTracker, ListProvider).","Локальные директивы (script setup) по умолчанию; глобально — только действительно сквозные."],whenToUse:"<strong>Директивы</strong> — повторяющиеся DOM-манипуляции без UI: автофокус, ленивая загрузка изображений, маски ввода, drag-хендлы. <strong>Headless</strong> — библиотеки UI-логики: combobox-поведение, drag-n-drop, virtual scroller — когда дизайн-системы хотят полной свободы разметки. Для 90% остального — обычные компоненты с пропсами и слотами.",alternative:{title:"Композабл вместо директивы и headless",text:"Чаще всего достаточно композабла: useFocus() внутри onMounted, useHover для логики. Директива и headless-компонент нужны, когда абстракция должна жить в шаблоне.",code:`// вместо v-focus:
const el = useTemplateRef<HTMLInputElement>('x')
onMounted(() => el.value?.focus())

// вместо <MouseTracker>:
const { x, y } = useMouse()`},advanced:{title:"Директива с SSR-поддержкой (getSSRProps)",text:"Чтобы кастомная директива работала в Nuxt/SSR, определите getSSRProps: он возвращает атрибуты для серверного рендера узла — иначе Vite/Nuxt бросит ошибку о нём при SSR.",code:`const vLazyImage: Directive<HTMLImageElement, string> = {
  mounted(el, b) { el.src = b.value },
  getSSRProps(binding) {
    return { 'data-src': binding.value } // сервер: атрибут, клиент: подмена src
  },
}`}}},pp=Object.freeze(Object.defineProperty({__proto__:null,default:up},Symbol.toStringTag,{value:"Module"})),fp=`<script setup lang="ts">
import { ref, computed } from 'vue'

interface FolderNode {
  name: string
  type: 'folder' | 'file'
  children?: FolderNode[]
  note?: string
  depth?: number
}

// Две структуры одного приложения для сравнения
const byType: FolderNode = {
  name: 'src/',
  type: 'folder',
  children: [
    { name: 'components/', type: 'folder', note: '42 компонента вперемешку', children: [
      { name: 'TheHeader.vue', type: 'file' },
      { name: 'UserAvatar.vue', type: 'file' },
      { name: 'ProductCard.vue', type: 'file' },
      { name: 'CartButton.vue', type: 'file' },
      { name: '…ещё 38 файлов', type: 'file' },
    ]},
    { name: 'composables/', type: 'folder', children: [
      { name: 'useCart.ts', type: 'file' },
      { name: 'useProducts.ts', type: 'file' },
      { name: 'useCheckout.ts', type: 'file' },
    ]},
    { name: 'stores/', type: 'folder', children: [
      { name: 'cart.ts', type: 'file' },
      { name: 'products.ts', type: 'file' },
    ]},
    { name: 'api/', type: 'folder' },
    { name: 'views/', type: 'folder', children: [
      { name: 'CatalogPage.vue', type: 'file' },
      { name: 'CartPage.vue', type: 'file' },
    ]},
  ],
}

const byFeature: FolderNode = {
  name: 'src/',
  type: 'folder',
  children: [
    { name: 'features/', type: 'folder', note: 'всё о домене — вместе', children: [
      { name: 'catalog/', type: 'folder', children: [
        { name: 'components/ProductCard.vue', type: 'file' },
        { name: 'composables/useCatalogFilters.ts', type: 'file' },
        { name: 'api/catalog-api.ts', type: 'file' },
        { name: 'types.ts', type: 'file' },
        { name: 'index.ts', type: 'file', note: 'публичный API фичи' },
      ]},
      { name: 'cart/', type: 'folder', children: [
        { name: 'components/CartButton.vue', type: 'file' },
        { name: 'composables/useCart.ts', type: 'file' },
        { name: 'store/cart.ts', type: 'file' },
        { name: 'index.ts', type: 'file' },
      ]},
      { name: 'checkout/', type: 'folder', children: [
        { name: 'composables/useCheckout.ts', type: 'file' },
        { name: 'api/checkout-api.ts', type: 'file' },
        { name: 'index.ts', type: 'file' },
      ]},
    ]},
    { name: 'shared/', type: 'folder', note: 'переиспользуемое без домена', children: [
      { name: 'ui/ (Button, Input, Modal)', type: 'folder' },
      { name: 'composables/ (useTheme, useDebounce)', type: 'folder' },
      { name: 'lib/ (форматтеры, хелперы)', type: 'folder' },
    ]},
    { name: 'app/', type: 'folder', note: 'сборка и провайдеры', children: [
      { name: 'App.vue, router, layouts', type: 'file' },
    ]},
  ],
}

const selected = ref<'type' | 'feature'>('feature')
const current = computed(() => (selected.value === 'feature' ? byFeature : byType))

interface FlatNode {
  name: string
  type: 'folder' | 'file'
  depth: number
  note?: string
}

function flatten(node: FolderNode, depth = 0): FlatNode[] {
  const out: FlatNode[] = [{ name: node.name, type: node.type, depth, note: node.note }]
  for (const c of node.children ?? []) out.push(...flatten(c, depth + 1))
  return out
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: selected === 'type' }" @click="selected = 'type'">
        по типам (components/, stores/)
      </button>
      <button class="btn" :class="{ primary: selected === 'feature' }" @click="selected = 'feature'">
        по фичам (features/cart/)
      </button>
    </div>

    <div class="card">
      <b>Структура «{{ selected === 'feature' ? 'по фичам' : 'по типам' }}»</b>
      <div class="mono" style="margin-top: 8px; font-size: 13px">
        <div
          v-for="(line, i) in flatten(current)"
          :key="i"
          :style="{ paddingLeft: line.depth * 18 + 'px', opacity: line.depth === 0 ? 1 : 0.85 }"
        >
          <span :style="{ color: line.type === 'folder' ? 'var(--accent)' : 'inherit' }">
            {{ line.type === 'folder' ? '📁' : '📄' }} {{ line.name }}
          </span>
          <span v-if="line.note" class="muted"> ← {{ line.note }}</span>
        </div>
      </div>
    </div>

    <p class="muted">
      Фиче-подход держит всё о домене <b>рядом</b>: найти код корзины = открыть features/cart/.
      Правило зависимостей: features → shared, app → всё; <b>features между собой — только через
      публичный API (index.ts)</b>, не копаясь во внутренностях.
    </p>
  </div>
</template>
`,mp=`// features/cart/index.ts — публичный API фичи
export { useCart } from './composables/useCart'
export { CartButton } from './components/CartButton.vue'
export type { CartItem } from './types'
// внутренности НЕ экспортируются: components/CartIcon.vue,
// api/serializers.ts — приватны, их можно менять свободно

// Правило зависимостей:
//   app/       → может импортировать всё
//   features/a → shared + свой код + публичный API других features
//   shared     → ничего из проекта (только внешние пакеты)

// features/checkout/composables/useCheckout.ts:
import { useCart } from '@/features/cart'      // ✅ публичный API
import { useCartInternals } from '@/features/cart/composables/…' // ❌ запрещено

// Эффект: границы фич = границы рефакторинга.
// Внутри cart/ можно переименовать файлы целиком —
// снаружи сломается только если изменился index.ts.`,vp={title:"Feature-based архитектура",summary:"Группировка по домену вместо типов: features/*/ с компонентами, композаблами, api и публичным API через index.ts.",demo:()=>F(()=>import("./Demo-npFZvosm.js"),[]),code:`// ============ Demo.vue (обзор структур) ============
${fp}

// ============ фича и её границы ============
${mp}`,content:{intro:"Две классические организации кода: <b>по типам</b> (components/, composables/, stores/ — всё вперемешку) и <b>по фичам</b> (features/cart/ — всё о корзине в одном месте). Фиче-подход выигрывает с ростом проекта: изменение фичи не требует прыжков по пяти папкам, границы фич — естественные границы рефакторинга, а <b>публичный API через index.ts</b> защищает внутренности от чужих импортов. В демо — обе структуры одного и того же приложения рядом.",howItWorks:"Фича — вертикальный срез домена: свои компоненты, композаблы, api-клиент, типы. Три слоя: <b>app/</b> (сборка, роутер, провайдеры) → <b>features/</b> (домен) → <b>shared/</b> (UI-кит, утилиты без домена). Зависимости идут строго вниз; между фичами — только через <code>index.ts</code> (публичный контракт). Это даёт два эффекта: приватность внутренностей (меняй свободно) и явные точки связей (импорт чужого index.ts виден в diff-е).",mistakes:[{title:"Фичи лезут во внутренности друг друга",text:"Импорт features/cart/components/CartIcon.vue из checkout создаёт скрытую связность: переименование внутри cart ломает checkout.",code:"import { CartIcon } from '@/features/cart/components/CartIcon.vue' // ❌",fix:`import { CartButton } from '@/features/cart' // ✅ через публичный API
// или вынесите общий в shared/`},{title:"shared превращается в свалку",text:"Всё, что «пригодится всем», уезжает в shared — включая доменное. Правило: shared не знает о домене (никаких Cart, User); доменное — в features.",code:"shared/components/UserProfileCard.vue // ❌ домен в shared",fix:`features/user/components/ProfileCard.vue // ✅
// shared/ui — только Button/Input/Modal`},{title:"Фича-монолит без слоёв внутри",text:"Фича на 30 файлов с одной папкой components/ — та же проблема, что и по-типовая структура, но в миниатюре. Внутри большой фичи — те же слои.",code:"features/orders/ — 30 файлов в одной куче",fix:`features/orders/
  components/  composables/  api/  types.ts  index.ts`}],nuances:["Фичи не обязаны быть одинаковыми: маленькая — index.ts + один файл; большая — полный срез со слоями.","Циклические зависимости между фичами — сигнал ошибки проектирования: общее (типы, утилиты) уезжает вниз в shared.","Публичный API фичи — контракт: экспортируйте только то, что готов поддерживать.","Роутер можно собирать из фич: каждая фича экспортирует свои маршруты — app/ только собирает.","Стор фичи может жить внутри фичи (features/cart/store.ts) — Pinia не требует папки stores/.","Монорепо-дальше: фичи → пакеты; те же правила границ работают на уровне workspace."],bestPractices:["Начинайте с двух-трёх фич + shared: преждевременное дробление хуже плоской структуры.","Публичный API (index.ts) — обязателен с первого дня: это дёшево сейчас и бесценно потом.","ESLint-правило ограничения импортов (no-restricted-imports / boundaries-плагины) — автоматический контроль границ.","Домен — в фичи, переиспользуемое без домена — в shared, сборка — в app.","Именование фич — существительными домена (cart, checkout, catalog), не «модуль1»."],whenToUse:"<strong>Фиче-подход</strong> — от ~5+ экранов и команды 2+: окупается на первом же крупном рефакторинге. Для пет-проектов и лендингов плоская структура честнее — фичевые папки на 10 файлов создают шум. Миграция с по-типовой — постепенная: по одной фиче за раз.",alternative:{title:"Плоская структура для малых проектов",text:"До определённого масштаба components/ + composables/ + views/ — проще и быстрее: границы фич ещё не сформировались, а папки уже добавили церемоний.",code:`src/
  components/   composables/   stores/
  views/        router.ts     App.vue
// переход на фичи — когда появится второй-третий «домен»`},advanced:{title:"Слои внутри фичи: api → domain → ui",text:"Крупная фича разделяется на слои: api/ (сеть, типы ответов) → domain/ (чистая логика: валидация, расчёты — тестируется без Vue) → ui/ (компоненты). Зависимости — строго вниз.",code:`features/checkout/
  api/checkout-api.ts        // fetch, маппинг DTO
  domain/pricing.ts          // чистые функции расчёта ✅ юнит-тесты без Vue
  composables/useCheckout.ts // связка: state + api + domain
  components/CheckoutForm.vue
  index.ts

// правило: components → composables → { api, domain }
// domain/ не знает о Vue — переиспользуется где угодно`}}},bp=Object.freeze(Object.defineProperty({__proto__:null,default:vp},Symbol.toStringTag,{value:"Module"})),gp=`<script setup lang="ts">
import { ref, computed } from 'vue'

// Симуляция слоёного запроса: клик «отправить форму» → по слоям
interface Layer {
  name: string
  file: string
  responsibility: string
}

const layers: Layer[] = [
  { name: 'UI (компонент)', file: 'CheckoutForm.vue', responsibility: 'разметка, валидация отображения, вызов composable' },
  { name: 'Composable', file: 'useCheckout.ts', responsibility: 'состояние формы, оркестрация вызовов' },
  { name: 'Domain (чистая логика)', file: 'pricing.ts', responsibility: 'расчёты, правила — без Vue и fetch' },
  { name: 'API-клиент', file: 'checkout-api.ts', responsibility: 'HTTP, маппинг DTO → домен, ошибки сети' },
  { name: 'Server', file: 'POST /api/checkout', responsibility: 'авторизация, транзакции, реальная бизнес-логика' },
]

const phase = ref(-1) // -1: idle; 0..layers.length-1: активный слой
const log = ref<string[]>([])

const currentLayer = computed(() => (phase.value >= 0 ? layers[phase.value] : null))

const phaseLogs: Record<number, string[]> = {
  0: ['UI: пользователь нажал «Оформить»', 'UI: вызов checkout.submit(formData)'],
  1: ['Composable: валидация пройдена', 'Composable: price = calculateTotal(items) — domain-функция', 'Composable: await checkoutApi.send(order)'],
  2: ['Domain: calculateTotal(items, { discount: 10 }) → 53 991 ₽', 'Domain: чистая функция — тесты без Vue и моков сети'],
  3: ['API: POST /api/checkout { items, total }', 'API: маппинг ответа → OrderConfirmation', 'API: сеть упала? → TypedError в composable'],
  4: ['Server: авторизация ✓, транзакция ✓', 'Server: → 200 { orderId: "o-128" }'],
}

function nextPhase() {
  if (phase.value >= layers.length - 1) {
    phase.value = -1
    log.value = []
    return
  }
  phase.value++
  log.value = phaseLogs[phase.value]
}

function reset() {
  phase.value = -1
  log.value = []
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="nextPhase">
        {{ phase >= layers.length - 1 ? '↺ заново' : '▶ следующий слой' }}
      </button>
      <button class="btn" @click="reset">сброс</button>
      <span class="muted mono">
        {{ phase < 0 ? 'нажмите «следующий слой»' : \`слой \${phase + 1}/\${layers.length}\` }}
      </span>
    </div>

    <div class="stack" style="gap: 6px">
      <div
        v-for="(layer, i) in layers"
        :key="layer.name"
        class="card"
        :style="{
          margin: 0,
          opacity: phase < 0 ? 0.55 : i === phase ? 1 : i < phase ? 0.35 : 0.55,
          borderColor: i === phase ? 'var(--accent)' : undefined,
        }"
      >
        <div class="row row--between">
          <span><b>{{ layer.name }}</b> <span class="mono muted">· {{ layer.file }}</span></span>
          <span v-if="i === phase" class="tag ok">активен</span>
          <span v-else-if="i < phase" class="tag">готово ✓</span>
        </div>
        <p class="muted" style="margin: 4px 0 0">{{ layer.responsibility }}</p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Поток: <b>вниз по слоям — запрос, вверх — данные</b>. Компонент не знает про HTTP; API не
      знает про Vue; domain-логика не знает ни про то, ни про другое — и потому тестируется
      тривиально.
    </p>
  </div>
</template>
`,hp=`// ============ Слой API: DTO → домен ============
// api/checkout-api.ts — единственное место, знающее про HTTP
export async function sendOrder(dto: OrderDto): Promise<Order> {
  try {
    const res = await http.post('/api/checkout', dto)
    return mapOrder(res.data) // DTO → доменная модель
  } catch (e) {
    throw new CheckoutError(e) // типизированная ошибка домена
  }
}

// ============ Domain: чистые функции ============
// domain/pricing.ts — БЕЗ Vue, БЕЗ fetch: юнит-тесты мгновенны
export function calculateTotal(items: CartItem[], opts: { discount?: number }): number {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  return Math.round(subtotal * (1 - (opts.discount ?? 0) / 100))
}

// ============ Composable: оркестрация ============
export function useCheckout() {
  const submitting = ref(false)
  async function submit(form: CheckoutForm) {
    submitting.value = true
    try {
      const order = await sendOrder(toDto(form))
      return order
    } finally {
      submitting.value = false
    }
  }
  return { submitting, submit }
}

// ============ UI: только отображение ============
<!-- CheckoutForm.vue: разметка + вызов useCheckout, БЕЗ fetch и расчётов -->`,yp={title:"Слои: UI, composables, domain, API",summary:"Разделение ответственности: компоненты рендерят, композаблы оркестрируют, domain — чистые функции, api — HTTP; container/presentational.",demo:()=>F(()=>import("./Demo-3fgdQjrP.js"),[]),code:`// ============ Demo.vue (симуляция слоёв) ============
${gp}

// ============ слои в коде ============
${hp}`,content:{intro:"Слоёная архитектура раздаёт ответственности: <b>UI-компоненты</b> рендерят и собирают ввод; <b>композаблы</b> держат состояние и оркестрируют; <b>domain</b> — чистые функции правил (расчёты, валидация) без Vue и сети; <b>API-слой</b> — единственное место, знающее HTTP, с маппингом DTO → домен. Связка «container/presentational»: контейнер владеет логикой, презентационный — рисует по пропсам. В демо — пошаговый поток запроса по слоям.",howItWorks:"Поток запроса: UI вызывает метод композабла → композабл валидирует/агрегирует, зовёт domain-функции (чистые расчёты) и API-клиент → API-клиент маппит домен в DTO, выполняет HTTP, маппит ответ обратно, кидает типизированные ошибки → композабл обновляет state → UI перерендерился. Каждый слой заменяем: сервер мокается в api-слое, UI мокается в тестах композабла, domain тестируется вообще без моков. Container/presentational — то же разделение внутри дерева компонентов: контейнер (умный) подписан на сторы/API, презентационный (глупый) получает пропсы и эмитит события.",mistakes:[{title:"fetch и бизнес-правила в компонентах",text:"HTTP в шаблонном компоненте размазывает API-контракты по всему коду: смена бэкенда = правки в 20 файлах. Компонент должен знать «что показать», а не «откуда данные».",code:`// ❌ в ProductCard.vue
fetch('/api/products/' + id).then(r => r.json()).then(...)
const discount = price * 0.9 // правило в UI`,fix:`// ✅ api/products.ts: getProduct(id)
// ✅ domain/pricing.ts: applyDiscount(price, 10)
// ✅ composable: useProduct(id) — компонент только рендерит`},{title:"Domain-логика, зависящая от Vue",text:"Правила расчёта, написанные внутри композабла с ref-ами, нельзя переиспользовать и тестировать без Vue-контекста. Чистые функции принимают данные, возвращают данные.",code:`function usePricing() {
  return computed(() => items.value.reduce(...)) // логика в замыкании ❌
}`,fix:`// ✅ чистая функция + тонкий композабл-адаптер
export function calculateTotal(items: CartItem[]): number { ... }
const total = computed(() => calculateTotal(items.value))`},{title:"Контейнер-компоненты с разметкой",text:"«Умный» компонент, который и ходит в API, и рисует, невозможно переиспользовать в другом контексте данных. Разделите: контейнер (данные) → презентационный (разметка, пропсы).",code:"<!-- ❌ CartPage.vue: и fetch, и 300 строк разметки -->",fix:"<!-- ✅ CartContainer.vue (данные) → <CartView :items ... /> -->"}],nuances:["Композаблы — «сервисы» Vue-мира: inject-ются, тестируются с effectScope, не тянут DOM.","DTO ≠ домен: ответ API приводится к доменной модели в api-слое — фронтенд не зависит от формы бэкенда.","Типизированные ошибки слоя (CheckoutError) дают единый обработчик в UI вместо try/catch-лапши.","UI-кит (shared) не знает о домене — это делает возможной смену дизайн-системы без правки фич.","Контейнер/презентационный деление не догма: маленькие компоненты — оба в одном; главное — не смешивать в крупных.","Слои ≠ папки: слои — про направление зависимостей; физически domain может лежать внутри features/."],bestPractices:["Компонент — без fetch; composable — без разметки; domain — без Vue; api — без бизнес-правил.","Маппинг DTO → домен в api-слое: фронтенд живёт в своих типах.","Тестируйте: domain — юнит, композаблы — с мок-апи, UI — скриншоты/интеракции.","Папка api/ или services/ — единая точка HTTP: перехват ошибок, retry, авторизация.","При споре «компонент или composable»: переиспользуемая логика → composable; переиспользуемая разметка → компонент."],whenToUse:"<strong>Слои</strong> нужны от момента, когда появляются 2+ потребителя одной API-логики или нетривиальные доменные правила. Для CRUD-прототипов слоёность избыточна — прямые вызовы в композаблах быстрее. Контейнер/презентационный — для страниц, которые хочется переиспользовать с разными источниками данных.",alternative:{title:"Тонкие слои: api-функции прямо в композаблах",text:"Для малых проектов полный слой API избыточен: http-клиент с типами вызывается из композаблов напрямую; слой появится, когда API станет больше 5–10 endpoints.",code:`// композабл с прямыми вызовами — приемлемо для малого
export function useProducts() {
  const items = ref<Product[]>([])
  async function load() {
    items.value = await http.get('/api/products').then(r => r.data)
  }
  return { items, load }
}`},advanced:{title:"Порт-адаптер: замена API/стора без правки UI",text:"Продвинутая граница: композабл объявляет контракт (интерфейс), реализация внедряется (provide/фабрика) — тесты и storybook подставляют мок-реализации без правки потребителей.",code:`// контракт
export interface ProductsPort {
  getAll(): Promise<Product[]>
  getById(id: string): Promise<Product>
}

// реализация-адаптер
export const httpProducts: ProductsPort = {
  getAll: () => http.get('/api/products').then(r => r.data.map(mapProduct)),
  getById: (id) => http.get(\`/api/products/\${id}\`).then(r => mapProduct(r.data)),
}

// инъекция (main.ts / тесты):
provide(productsPortKey, isTest ? mockProducts : httpProducts)`}}},xp=Object.freeze(Object.defineProperty({__proto__:null,default:yp},Symbol.toStringTag,{value:"Module"})),wp={title:"Ловушки состояния и пропсов",summary:"Мутация props, потеря реактивности при деструктуризации, копии стейта, ref без .value — каталог ❌/✅.",code:"// Каталог намеренно без демо: каждый пункт — мини-кейс ❌ → ✅",content:{intro:"Каталог самых частых ловушек, связанных с состоянием: мутирование пропсов, потеря реактивности при деструктуризации, ручные копии источников истины, забытый .value. Каждая ловушка — <b>❌ проблемный код</b> → <b>✅ исправление</b> с объяснением, почему работает лучше. Это «раздел паники»: ищите симптом, получайте лечение.",howItWorks:"Все ловушки этого раздела — следствия одного правила: <b>однонаправленный поток данных</b> (props вниз, события вверх) и <b>одна обёртка реактивности на значение</b>. Нарушение первого (мутация props, копия пропа в ref) создаёт два источника истины. Нарушение второго (деструктуризация reactive, потеря .value) разрывает связь с системой реактивности.",mistakes:[{title:"Мутация props напрямую",text:"Пропс — read-only контракт: дочерний компонент не должен менять его. Мутация «работает» в dev, но ломает однонаправленность: родитель не узнает, данные рассинхронятся.",code:`// Child.vue ❌
props.user.name = 'новое'
props.count++`,fix:`// ✅ данные вниз — события вверх
emit('update', newValue)
// или двусторонняя связь:
const model = defineModel<number>()`,fixText:"Для вложенных объектов: изменение поля объекта-пропа технически работает (прокси общий), но это скрытый мутантный контракт — так же плохо."},{title:"Деструктуризация props/reactive",text:"const { count } = props снимает значение: связь с источником потеряна. Симптом: «данные изменились, а у меня нет».",code:"const { count, user } = props // ❌ снимки",fix:`// ✅ живой доступ
props.count
// или toRefs для деструктуризации с сохранением связи
const { count } = toRefs(props)`},{title:"Копия пропа в локальный ref",text:"ref(props.value) «замораживает» значение на момент монтирования. Дальше два источника идут врозь.",code:"const local = ref(props.value) // ❌ снимок",fix:`// ✅ если нужна локальная редактируемая копия —
// синхронизируйте явно или используйте defineModel
const model = defineModel<string>()`},{title:"Забытый .value в script",text:"В setup и обработчиках ref требует .value. Забыли — работаете с обёрткой: арифметика ломается, присвоение не триггерит.",code:`count + 1 // ❌ NaN или строка
count = 5 // ❌ переприсвоение переменной`,fix:"count.value++ // ✅"},{title:"Два источника истины (сторе + локальная копия)",text:"Данные стора скопированы в компонент и «синхронизируются» watch-ем. Рано или поздно рассинхрон.",code:`const local = ref(store.items)
watch(store.items, v => local.value = v) // ❌`,fix:`// ✅ один источник: либо читайте store.items напрямую,
// либо computed-производная
const visible = computed(() => store.items.filter(...))`},{title:"reactive-объект перезаписывают целиком",text:"let state = reactive(...) с последующим state = reactive(newObj) — старые подписчики остались на старом прокси.",code:`let state = reactive({ a: 1 })
state = reactive(fetchNew()) // ❌`,fix:`// ✅ мутируйте поля или храните в ref
Object.assign(state, fetchNew())
// или
const state = ref(initial)
state.value = fetchNew()`}],nuances:["Мутация вложенных полей пропса-объекта <b>не кидает ошибку</b> — прокси общий; это делает ловушку особенно коварной.","<code>toRefs(props)</code> безопасен: props — shallowReactive, каждое поле превращается в живой ref.","defineModel — единственный корректный «двусторонний пропс»: под капотом emit, мутаций нет.","«Работает в dev» ≠ правильно: многие ловушки проявляются только в пограничных сценариях (HMR, SSR, тесты).","Линтер (eslint-plugin-vue: no-mutating-props) ловит половину этих ошибок автоматически."],bestPractices:["Однонаправленный поток: props вниз, события вверх; v-model/defineModel для двусторонних контрактов.","Никогда не деструктурируйте без toRefs.","Один источник истины на каждое значение — производные через computed.","Включите eslint-plugin-vue с правилами no-mutating-props и require-valid-default-props."],whenToUse:"Используйте этот раздел как <b>чеклист при code review</b> и при дебаге: симптом «UI не обновляется» или «данные рассинхронились» почти всегда попадает в одну из этих ловушек.",alternative:{title:"Иммутабельный стиль как профилактика",text:"Замена значений (ref.value = newX, spread-копии) вместо мутаций делает большинство ловушек невозможными по построению — ценой чуть большего объёма кода.",code:`// всегда новые объекты вместо мутаций
items.value = [...items.value, newItem]
user.value = { ...user.value, name: 'x' }`},advanced:{title:"Снапшот-жизненный цикл стейта",text:"Продвинутая дисциплина для проблемных доменов: state меняется только через $patch/actions, исходное состояние собирает фабрика createInitialState(). Сброс и отладка становятся тривиальными: пересоздайте снапшот, а не вычищайте поля по одному.",code:`function createInitialState() {
  return { items: [] as string[], user: null as User | null }
}

store.$patch(createInitialState()) // сброс — одна операция
store.$patch((s) => { s.items.push('x') }) // трассируемая мутация
// в devtools каждое изменение — отдельная запись с diff`}}},_p=Object.freeze(Object.defineProperty({__proto__:null,default:wp},Symbol.toStringTag,{value:"Module"})),Sp={title:"Ловушки эффектов, watch и утечек",summary:"watch вместо computed, лишние watcher-ы, deep-watch, утечки слушателей, async cleanup, злоупотребление nextTick.",code:"// Каталог ❌ → ✅ по эффектам: watch, слушатели, таймеры, async",content:{intro:"Вторая группа ловушек — <b>эффекты и их время жизни</b>: watch там, где хватит computed, лишние watcher-ы, deep-обход больших деревьев, слушатели и таймеры без отписки, незакрытые async-операции, nextTick как средство синхронизации. Все они имеют один корень: эффект создан вручную там, где декларативный механизм справился бы сам, или не очищен там, где должен.",howItWorks:"computed — <b>значение</b> с кешем и авто-зависимостями; watch — <b>эффект</b> с ручными источниками; слушатели/таймеры — внешние ресурсы, живущие до явной отписки. Правила: производное значение → computed; реакция на изменение → watch (с узкими источниками); любой ресурс, созданный в mounted/эффекте, → симметричный cleanup. VueUse-композаблы закрывают большинство типовых сценариев с встроенным cleanup.",mistakes:[{title:"watch там, где хватит computed",text:"Производные данные через watch + ref = ручная синхронизация с рассинхроном и лишними прогонами.",code:`const fullName = ref('')
watch([first, last], () => {
  fullName.value = first.value + ' ' + last.value
}) // ❌`,fix:"const fullName = computed(() => `${first.value} ${last.value}`) // ✅"},{title:"watch без источника-вас-то-смотрит (объект целиком)",text:"watch(объект, cb) без deep не сработает на вложенные мутации; с deep — рекурсивный обход на каждый триггер. Дешевле точечный getter.",code:`watch(state, cb) // может не сработать как ждёте
watch(state, cb, { deep: true }) // ❌ дорого на больших деревьях`,fix:"watch(() => state.list.length, cb) // ✅ точечный источник"},{title:"Слушатели/таймеры без отписки",text:"addEventListener и setInterval переживают компонент: утечка памяти и призрачные обновления несуществующего UI.",code:`onMounted(() => {
  window.addEventListener('resize', onResize)
  setInterval(poll, 5000)
}) // ❌`,fix:`useEventListener(window, 'resize', onResize)
useIntervalFn(poll, 5000) // ✅ авто-cleanup`},{title:"Async без отмены: гонка запросов",text:"Медленный старый запрос приходит после быстрого нового — затирает свежие данные. AbortController в cleanup обязателен.",code:`watch(query, q => {
  fetch('/api?q=' + q).then(r => results.value = r) // ❌ гонка
})`,fix:`watch(query, async (q, old, onCleanup) => {
  const ctrl = new AbortController()
  onCleanup(() => ctrl.abort())
  const r = await fetch('/api?q=' + q, { signal: ctrl.signal })
  results.value = await r.json() // ✅ отменённый не перезапишет
})`},{title:"nextTick вместо нормального потока данных",text:"nextTick — мост к DOM, не инструмент бизнес-логики. Цепочки «сделай → подожди тик → сделай» рассыпаются при любом рефакторинге.",code:`save()
await nextTick()
updateBadge() // ❌ связь через тайминги рендера`,fix:`await save()
updateBadge() // ✅ связь через данные`},{title:"Глобальные подписки в композабле-синглтоне",text:"Модульный ref + window-слушатель на уровне модуля = подписка живёт вечно и никогда не чистится (не привязана к компоненту).",code:`// модуль:
window.addEventListener('online', sync) // ❌ никогда не снимется`,fix:`// ✅ подписка внутри scope: компонент или effectScope
export function useOnline() {
  const online = ref(navigator.onLine)
  useEventListener(window, 'online', () => (online.value = true))
  return online
}`}],nuances:["watch с <code>immediate: true</code> — частая замена «watch + ручной первый вызов»; watchEffect — immediate по природе.","Cleanup в watch/watchEffect (onCleanup) выполняется <b>перед</b> следующим прогоном — точка для abort/clearTimeout.","deep: true на массиве объектов — обход всего дерева при каждом триггере; для больших данных — shallowRef + явные замены.","Слушатели, добавленные <b>вне</b> компонента (модуль, плагин), не чистятся unmount-ом — для них нужен ручной effectScope.","Двойной прогон эффекта в dev-режиме (StrictMode-подобное поведение некоторых обёрток тестов) — не баг: эффекы должны быть идемпотентны.","Лишний watch часто скрывает пропущенный computed: если эффект только пишет данные — почти всегда нужен computed."],bestPractices:["Значение → computed; действие → watch; всё внешнее → VueUse/композаблы с cleanup.","Источники watch — максимально узкие getter-ы.","Каждый fetch в эффекте — с AbortController через onCleanup.","Ноль слушателей/таймеров вне scope-ов.","Код-ревью правило: увидел watch, который пишет в ref, — спроси «почему не computed?»"],whenToUse:"Возвращайтесь к каталогу, когда: эффект «срабатывает не тогда», память растёт со временем (утечки), данные «откатываются» старым ответом, логика разваливается на nextTick-цепочки. Каждому симптому соответствует пункт каталога.",alternative:{title:"VueUse как «правильные» эффекты по умолчанию",text:"Практически любой ручной эффект (события, таймеры, интервалы, наблюдатели) уже существует в VueUse с корректным cleanup и API управления.",code:`useEventListener, useIntervalFn, useTimeoutFn,
useResizeObserver, useIntersectionObserver,
useRafFn, useDebounceFn, useThrottleFn
// ручной addEventListener — последний вариант`},advanced:{title:"effectScope и tryOnScopeDispose для не-setup контекстов",text:"Если эффект создаётся вне setup (очередь задач, корень мини-приложения), берите владение явно: effectScope для групп и tryOnScopeDispose для graceful-деградации, когда композабл вызван без владеющего компонента.",code:`import { effectScope, tryOnScopeDispose } from 'vue'

const scope = effectScope()
scope.run(() => { watch(src, handler); listen(target, fn) })
scope.stop() // один вызов глушит всё внутри

// в композабле: явная деградация вместо утечки
tryOnScopeDispose(stopListening)`}}},kp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp},Symbol.toStringTag,{value:"Module"})),Tp={title:"Ловушки SSR, рендера и абстракций",summary:"Hydration mismatch, client-only логика, v-if/v-show выбор, лишние computed и чрезмерные абстракции.",code:"// Каталог ❌ → ✅: SSR-ловушки, условный рендер, architecture smells",content:{intro:"Третья группа: ловушки <b>серверного рендера</b> (hydration mismatch, client-only API в setup), выбор между <b>v-if и v-show</b>, «лишние» computed и <b>чрезмерные абстракции</b> — компоненты ради одного использования, преждевременные обобщения. Каждая ловушкаcheap на первый взгляд — и дорога при масштабировании команды.",howItWorks:"SSR-ловушки — из разницы сред: сервер не знает window/localStorage/время пользователя, а клиент при гидрации рендерит заново и сверяет разметку. v-if уничтожает узел (дорогое переключение, дешёвое простаивание), v-show прячет CSS-ом (дешёвое переключение, постоянная стоимость). Абстрактные ловушки — из экономии «на будущее»: обобщённый компонент без второго потребителя усложняет единственное место использования.",mistakes:[{title:"Client-only логика в setup",text:"window, document, localStorage на верхнем уровне setup падают на сервере (или дают mismatch, если обёрнуты в try). Место им — onMounted / ClientOnly.",code:"const width = window.innerWidth // ❌ сервер упадёт",fix:`const width = ref(0)
onMounted(() => { width.value = window.innerWidth }) // ✅`},{title:"Нестабильные значения в первом рендере",text:"Date.now(), Math.random(), localStorage-значения в шаблоне — сервер и клиент увидят разное → hydration mismatch → мигание контента.",code:"<span>id: {{ Math.random() }}</span> <!-- ❌ -->",fix:`// ✅ id из данных; случайное — после монтирования
const seed = ref<string | null>(null)
onMounted(() => (seed.value = crypto.randomUUID()))`},{title:"v-show для редко меняющегося тяжёлого дерева",text:"v-show рендерит и держит в DOM всегда. Тяжёлая скрытая вкладка тратит память и замедляет первый рендер. Для редких переключений — v-if.",code:'<HeavyPanel v-show="open" /> <!-- ❌ всегда в DOM -->',fix:'<HeavyPanel v-if="open" /> <!-- ✅ создаётся по требованию -->'},{title:"v-if для часто мигающих элементов",text:"Частые переключения через v-if — постоянные mount/unmount (destroy/create). Тултипы, дропдауны, аккордеоны — v-show дешевле.",code:'<Tooltip v-if="hovered" /> <!-- ❌ mount/unmount на каждый ховер -->',fix:'<Tooltip v-show="hovered" /> <!-- ✅ display toggle -->'},{title:"Лишний computed для статичного значения",text:"computed над не-реактивными данными — лишний слой: не кеширует полезно, усложняет чтение.",code:"const title = computed(() => 'Магазин') // ❌ константа",fix:"const title = 'Магазин' // ✅"},{title:"Компонент ради одного использования",text:"«На всякий случай вынесем» создаёт косвенность: чтобы понять страницу, надо прыгать по файлам с единственным импортом. Вынос — при втором потребителе или явной сложности.",code:"<!-- HeroSectionOnePage.vue используется один раз -->",fix:`<!-- ✅ оставьте разметку на странице; выносите
при переиспользовании или когда блок >~100 строк -->`},{title:"Преждевременная абстракция данных",text:"«Универсальный» API-слой с конфигами, фабриками и стратегиями для трёх одинаковых запросов. Обобщение — по факту повторения, не по прогнозу.",code:`// ❌ GenericResourceFactory<ResourceType, Kind, Variant>
//    для трёх fetch-ей`,fix:"// ✅ три явные функции; фабрика — когда паттерн повторился 4-5 раз"}],nuances:["v-if/v-show правило: <b>частое переключение → v-show</b>, редкое/тяжёлое → v-if; v-else — только с v-if.","Скрытая v-show-ветка всё равно исполняет свои watch/computed — «спрятано» ≠ «не работает».","На SSR-страницах первым рендером управляют только данные запроса; всё «браузерное» — после гидрации.","Абстракция оправдана тремя вещами: повторение, изоляция изменений, тестируемость — не «красивостью».","Правило правила трёх: обобщайте на третьем повторении паттерна, не раньше.","В Vue «лишняя» абстракция дороже, чем в обычном TS: компонент = граница ререндера, слоты, контекст инъекций."],bestPractices:["Любое обращение к браузерным API — через onMounted/ClientOnly/композаблы VueUse.","Первый рендер — из данных запроса; нестабильное — только после монтирования.","v-show для частых переключений лёгкого контента; v-if для остального.","Выносите код по факту: второй потребитель → компонент; третье повторение → абстракция.","Регулярно спрашивайте: «эта абстракция окупилась?» — нет: инлайн обратно."],whenToUse:"Каталог полезен при <b>ревью SSR-фич</b> (каждый новый компонент в Nuxt — проверка на client-only API), при оптимизации частых переключений UI и при сомнениях «выносить ли компонент».",alternative:{title:"Полный CSR для проблемных зон",text:"Если страница полна client-only логики и hydration-боли, route rule ssr: false честнее: нет серверного рендера — нет и этой категории багов.",code:`routeRules: {
  '/editor/**': { ssr: false },
}`},advanced:{title:"CSR-острова на серверной странице",text:"Продвинутый гибрид: проблемные зоны (canvas, интерактивные таблицы) оборачиваются в <ClientOnly>, остальная страница продолжает рендериться на сервере. Проблемные узлы изолированы точечно — SEO и первый рендер сохраняются.",code:`<template>
  <h1>{{ title }}</h1>            <!-- SSR -->
  <ClientOnly>
    <HeavyCanvasChart :data="data" />
    <template #fallback>Загрузка графика…</template>
  </ClientOnly>
</template>
<!-- грубее: routeRules { '/dash/**': { ssr: false } } на всю страницу -->`}}},Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Tp},Symbol.toStringTag,{value:"Module"})),Cp=`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * ✅ Хорошая композиция: чистая функция, без DOM-зависимостей,
 * возвращает ref-ы — потребитель сам решает, как их использовать.
 */
function useCounter(initial = 0) {
  const count = ref(initial)
  const double = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function reset() {
    count.value = initial
  }
  return { count, double, increment, reset }
}

/**
 * ✅ Композабл с DOM: подписка в onMounted, отписка в onUnmounted.
 * Имя по конвенции use*, состояние возвращается наружу.
 */
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}

const { count, double, increment, reset } = useCounter(5)
const { x, y } = useMouse()

// Два независимых счётчика из одного композабла — состояния изолированы
const counterA = useCounter(0)
const counterB = useCounter(100)
<\/script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="card">
        <b>useCounter (главный)</b>
        <div class="row" style="margin-top: 8px">
          <button class="btn primary" @click="increment">increment</button>
          <button class="btn" @click="reset">reset</button>
          <span class="stat">count={{ count }} · double={{ double }}</span>
        </div>
      </div>

      <div class="card">
        <b>useMouse (двигайте мышь по странице)</b>
        <p class="mono muted" style="margin: 8px 0 0">x={{ x }} · y={{ y }}</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>counterA = useCounter(0)</b>
        <p class="mono muted" style="margin: 6px 0 0">count={{ counterA.count }} — независимое состояние</p>
      </div>
      <div class="card">
        <b>counterB = useCounter(100)</b>
        <p class="mono muted" style="margin: 6px 0 0">count={{ counterB.count }} — тоже своё</p>
      </div>
    </div>

    <p class="muted">
      Композабл — функция, которая инкапсулирует реактивную логику. Каждый вызов создаёт
      <b>изолированный</b> экземпляр состояния. Это отличает его от модульного синглтона (про это —
      в теме «локальное vs разделяемое состояние»).
    </p>
  </div>
</template>
`,Pp={title:"Composables: дизайн и конвенции",summary:"use*-функции: изоляция состояния, реф-возврат, good vs bad примеры дизайна.",demo:()=>F(()=>import("./Demo-DivxkzQK.js"),[]),code:Cp,content:{intro:"<b>Composable</b> — функция, инкапсулирующая переиспользуемую реактивную логику: имя начинается с <code>use</code>, состояние возвращается наружу (обычно ref-ы и методы). Каждый вызов создаёт <b>изолированный</b> экземпляр — это главное отличие от модульного синглтона. В демо useCounter и useMouse: один чистый, второй с DOM-подпиской и правильным cleanup. Из одного useCounter созданы три независимых счётчика.",howItWorks:"Технически composable — обычная функция, вызывающая Vue-API (ref, computed, watch, onMounted). Магия в <b>контексте</b>: если хуки (onMounted и т.д.) вызываются синхронно внутри setup-цепочки, они привязываются к текущему компоненту — поэтому composable с onMounted работает без передачи экземпляра. Контракт хорошего композабла: вход — MaybeRefOrGetter-параметры, выход — объект с ref-ами (часто через toRefs) и функциями; никаких глобальных переменных; cleanup внутри (onUnmounted/onScopeDispose).",mistakes:[{title:"Глобальное состояние внутри композабла",text:"Если ref объявлен на уровне модуля (вне функции), все потребители делят один экземпляр — «composable» превращается в скрытый синглтон. Иногда это нужно (shared state), но должно быть явным решением, а не случайностью.",code:`// ❌ module-level: все компоненты делят один count
const count = ref(0)
export function useCounter() {
  return { count }
}`,fix:`// ✅ состояние внутри функции — изолировано
export function useCounter() {
  const count = ref(0)
  return { count }
}

// ✅ или ЯВНЫЙ shared-синглтон с пометкой в имени/доках`},{title:"Хуки вне синхронного контекста",text:"onMounted внутри setTimeout, Promise.then или условного блока не привяжется к компоненту (или упадёт с warning). Хуки регистрируются только синхронно в setup-цепочке.",code:`export function useThing() {
  setTimeout(() => {
    onMounted(() => {}) // ❌ слишком поздно, контекст потерян
  }, 100)
}`,fix:`export function useThing() {
  onMounted(() => {
    setTimeout(() => { /* работа с DOM */ }, 100) // ✅ хук снаружи
  })
}`},{title:"Возвращать сырые значения вместо ref-ов",text:"Возврат { count: count.value } отдаёт снимок: потребитель получает число, которое никогда не обновится. Возвращайте сами ref-ы.",code:`export function useCounter() {
  const count = ref(0)
  return { count: count.value } // ❌ число-снимок
}`,fix:`export function useCounter() {
  const count = ref(0)
  return { count } // ✅ Ref<number>
}`}],nuances:["Имя <code>use*</code> — конвенция экосистемы: линтеры, ревью и инструменты ожидают её.","Композаблы могут <b>вызывать друг друга</b> — это главный способ композиции логики (useUser вызывает useFetch, useAuth вызывает useUser).","Внутри композабла доступны все возможности: watch, provide/inject (если вызывается из setup), router, store.","<code>onScopeDispose(cleanup)</code> — универсальный вариант onUnmounted: работает и в компоненте, и в ручном effectScope.","Параметры-значения принимайте как <code>MaybeRefOrGetter&lt;T&gt;</code> + toValue — потребители смогут передавать и статику, и ref-ы.","Асинхронные композаблы (с await) ломают контекст хуков — либо не делайте setup-async, либо разделяйте «создание» и «запуск»."],bestPractices:["Один композабл = <b>одна забота</b>: useMouse, useFetch, useDebounce, а не useEverything.","Возвращайте плоский объект с ref-ами и методами; для сложных API группируйте через toRefs.","Документируйте контракт: что возвращается (Ref/Computed), есть ли side-effects, нужен ли cleanup.","Тестируйте композаблы без компонентов — в vitest с effectScope() это чистые функции.","Не тащите DOM/окно-зависимости без необходимости: SSR-безопасные композаблы проверяют import.meta.env или используют guard-ы."],whenToUse:"<strong>Composables</strong> — для повторно используемой логики с состоянием: позиция мыши, таймеры, fetch-обёртки, drag-n-drop, фокус-менеджмент. Если логика без состояния (форматирование, валидация одного значения) — обычные утилиты-функции; если состояние должно быть общим — store или явный синглтон-композабл.",alternative:{title:"Обычные утилиты без реактивности",text:"Не всё нужно делать композаблом: чистые функции форматирования/валидации проще тестировать и использовать без Vue-специфики.",code:`// utils/format.ts — просто функции, не композаблы
export function formatPrice(n: number): string {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(n)
}
export function isValidEmail(s: string): boolean {
  return /^[^@]+@[^@]+$/.test(s)
}`},advanced:{title:"Композабл с зависимостями: параметры MaybeRefOrGetter",text:"Продвинутый контракт: параметры могут быть реактивными, композабл сам отслеживает их изменения через watchEffect + toValue. Так устроены композаблы VueUse.",code:`import type { MaybeRefOrGetter } from 'vue'

export function useFetch(url: MaybeRefOrGetter<string>) {
  const data = ref<unknown>(null)
  const loading = ref(false)

  watchEffect(async () => {
    loading.value = true
    try {
      data.value = await fetch(toValue(url)).then(r => r.json())
    } finally {
      loading.value = false
    }
  })

  return { data, loading }
}

// url может быть строкой, ref или computed — всё работает`}}},Ep=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"})),Op=`<script setup lang="ts">
import { ref } from 'vue'

/**
 * ❌ ПЛОХО: модульный синглтон «по случайности».
 * Состояние объявлено вне функции — все компоненты делят один экземпляр.
 */
const sharedCount = ref(0)

function useBadCounter() {
  sharedCount.value++ // ❌ мутация общей переменной
  return { count: sharedCount }
}

/**
 * ✅ ХОРОШО: явный shared-стейт с документированной семантикой.
 * Тот же приём, но намеренный: имя use*Shared, комментарий-контракт.
 */
const globalTheme = ref('dark')

function useTheme() {
  function toggle() {
    globalTheme.value = globalTheme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme: globalTheme, toggle }
}

const badA = useBadCounter()
const badB = useBadCounter()
const { theme, toggle } = useTheme()
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>❌ useBadCounter: скрытый синглтон</b>
        <span class="tag bad">антипаттерн</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Два «независимых» экземпляра делят один счётчик: badA.count и badB.count —
        <b>одна и та же</b> переменная.
      </p>
      <div class="row" style="margin-top: 8px">
        <button class="btn danger" @click="sharedCount++">sharedCount++</button>
        <span class="mono muted">badA.count = {{ badA.count }} · badB.count = {{ badB.count }} (совпадают!)</span>
      </div>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>✅ useTheme: явный shared-стейт</b>
        <span class="tag ok">намеренный синглтон</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Тоже модульное состояние, но это <b>задокументированное решение</b>: тема глобальна по
        своей природе.
      </p>
      <div class="row" style="margin-top: 8px">
        <button class="btn primary" @click="toggle">
          theme = {{ theme }} (переключить)
        </button>
      </div>
    </div>

    <p class="muted">
      Разница не в коде, а в <b>намерении</b>: ref внутри функции = изоляция, ref на уровне модуля =
      разделение. Ошибочный вариант — когда разделение получилось случайно, и потребители об этом не
      знают.
    </p>
  </div>
</template>
`,Mp={title:"Локальное vs разделяемое состояние",summary:"ref в функции — изоляция; ref на уровне модуля — синглтон. Как не создать скрытый shared-стейт и когда он оправдан.",demo:()=>F(()=>import("./Demo-UhHLG4tS.js"),[]),code:Op,content:{intro:"Положение <code>ref</code> определяет семантику: <b>внутри функции</b> — каждый вызов даёт изолированный экземпляр; <b>на уровне модуля</b> — один экземпляр на всё приложение (синглтон). Оба варианта легальны, но опасен <b>случайный</b> синглтон: композабл выглядит локальным, а ведёт себя как глобальный. В демо useBadCounter «сломан» именно так — два экземпляра делят один счётчик, а useTheme показывает намеренный shared-стейт.",howItWorks:"Модуль в JS — синглтон по определению: его верхнеуровневые переменные живут столько же, сколько приложение, и общие для всех импортёров. ref на верхнем уровне — глобальное реактивное состояние. ref внутри тела функции создаётся заново при каждом вызове. Всё остальное — производные правила: композаблы с состоянием внутри функции, сторы (Pinia) — для явного глобального, provide/inject — для scoped-разделения в дереве компонентов.",mistakes:[{title:"Случайный синглтон в «локальном» композабле",text:"Пишут useCounter, переносят ref за скобки «для чистоты» — и все компоненты внезапно меняют один счётчик. Баг проявляется редко и выглядит как «призраки» в данных.",code:`// ❌ выглядело как локальный композабл
const items = ref([])
export function useItems() {
  items.value = [] // «сброс» ломает ДРУГИЕ компоненты
  return { items }
}`,fix:`// ✅ изоляция: состояние создаётся на вызов
export function useItems() {
  const items = ref<Item[]>([])
  function reset() { items.value = [] }
  return { items, reset }
}`},{title:"Глобальное состояние там, где нужен was local",text:"Обратная ошибка: черновик формы, фильтры таблицы, состояние модалки вынесены в модуль — и «зависают» между переходами, мешают двум вкладкам UI, не очищаются.",code:`// ❌ черновик глобален — «переживает» всё приложение
const draft = ref('')
export function useDraft() { return { draft } }`,fix:`// ✅ черновик живёт в компоненте или маршруте
// глобальным делают только доменные данные (user, cart, theme)`},{title:"Синхронизация двух «хозяев» одного состояния",text:"Когда состояние глобальное и его же копируют в локальный ref, начинается ручная синхронизация через watch — рассинхрон гарантирован. Один источник истины.",code:`const globalUser = ref(loadUser())
// в компоненте:
const localUser = ref(globalUser.value) // ❌ снапшот
watch(globalUser, v => localUser.value = v) // ❌ дублирование`,fix:`// ✅ используйте общий ref напрямую или computed-вид
const user = computed(() => globalUser.value)`}],nuances:["Модульные ref-ы переживают <b>HMR</b> не всегда: после правки модуля состояние может сброситься — не храните там критичное.","SSR: модульное состояние <b>общее между запросами</b> на сервере — утечка данных пользователя в чужую сессию. Для SSR — Pinia (создаётся per-request).","provide/inject — «scoped-синглтон»: один экземпляр на поддерево (на layout, на страницу) — золотая середина между локальным и глобальным.","Явный shared-композабл стоит называть понятно (useAuthStore, useTheme) и документировать: «глобальное состояние».","Тесты: изолированные композаблы тривиально тестируются; синглтоны требуют reset-функции между тестами.","Pinia-стор — тот же модульный синглтон, но с Devtools, SSR-поддержкой и структурой state/getters/actions."],bestPractices:["По умолчанию — <b>локальное</b> состояние; глобальное — по осознанной необходимости (user, theme, cart).","Сигнал к глобализации: данные нужны в 3+ несвязанных компонентах или переживают маршрут.","Сигнал к provide/inject: общие данные внутри поддерева (layout → все страницы внутри).","Если делаете модульный ref — документируйте синглтон-семантику в JSDoc.","Для SSR-проектов глобальное состояние — только через Pinia, никогда через модульные ref-ы."],whenToUse:"<strong>Локальное</strong> — состояние UI одного компонента (открыта ли модалка, текущая вкладка, черновик). <strong>Разделяемое через композабл-синглтон</strong> — небольшие кросс-компонентные вещи (тема, флаги глобального UI). <strong>Pinia</strong> — доменные данные (пользователь, корзина, настройки сессии), особенно в SSR. <strong>provide/inject</strong> — контекст поддерева (конфиг библиотеки, состояние layout).",alternative:{title:"Pinia как «правильный» глобальный стейт",text:"Когда shared-состояние разрастается, самодельный модульный синглтон замените стором: получаете Devtools, SSR-safety, плагины (persist) и понятные границы.",code:`export const useThemeStore = defineStore('theme', () => {
  const mode = ref<'dark' | 'light'>('dark')
  function toggle() { mode.value = mode.value === 'dark' ? 'light' : 'dark' }
  return { mode, toggle }
})`},advanced:{title:"Scoped-синглтоны через provide/inject",text:"Композабл, который создаёт состояние один раз на поддерево: провайдер создаёт и provide-ит, потребители inject-ят тот же экземпляр. Паттерн библиотек (config-провайдеры, table/form-контексты).",code:`// useTableContext.ts
export function provideTableContext() {
  const ctx = { rows: ref([]), selected: ref<string[]>([]) }
  provide(tableKey, ctx)
  return ctx
}

export function useTableContext() {
  return inject(tableKey)! // тот же экземпляр для всего поддерева
}`}}},Ip=Object.freeze(Object.defineProperty({__proto__:null,default:Mp},Symbol.toStringTag,{value:"Module"})),Ap=`<script setup lang="ts">
import { ref, onMounted, onUnmounted, onScopeDispose } from 'vue'

const ticks = ref(0)
const running = ref(false)
const events = ref<string[]>([])

let timer: ReturnType<typeof setInterval> | null = null

function log(msg: string) {
  events.value.unshift(\`[\${new Date().toLocaleTimeString()}] \${msg}\`)
  if (events.value.length > 8) events.value.pop()
}

function start() {
  if (timer) return
  timer = setInterval(() => {
    ticks.value++
  }, 500)
  running.value = true
  log('интервал запущен')
}

function stop() {
  if (!timer) return
  clearInterval(timer)
  timer = null
  running.value = false
  log('интервал остановлен вручную')
}

// Жизненный цикл: подписка при монтировании, симметричная развязка
onMounted(() => {
  log('onMounted: компонент в DOM')
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
    log('onUnmounted: интервал принудительно очищен ✅')
  }
})

// onScopeDispose сработает при unmount ИЛИ при остановке scope
onScopeDispose(() => {
  log('onScopeDispose: скоуп закрыт (unmount или scope.stop())')
})

// Символическое использование toggle: управление демонстрацией
function toggle() {
  running.value ? stop() : start()
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="start" :disabled="running">запустить интервал</button>
      <button class="btn" @click="stop" :disabled="!running">остановить</button>
      <button class="btn" @click="toggle">toggle</button>
      <span class="stat">ticks: <b>{{ ticks }}</b></span>
      <span class="tag" :class="running ? 'ok' : 'info'">{{ running ? 'работает' : 'остановлен' }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in events" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Запустите интервал и перейдите на другую тему — в логе появится запись onUnmounted:
      симметричная очистка сработала автоматически. Это и есть «cleanup» в Vue.
    </p>
  </div>
</template>
`,Dp={title:"Lifecycle в Composition API и cleanup",summary:"onMounted/onUnmounted/onBeforeUnmount, симметричная развязка, onScopeDispose как универсальный cleanup.",demo:()=>F(()=>import("./Demo-LlTDtF_H.js"),[]),code:Ap,content:{intro:"Composition API переосмысляет жизненный цикл: хуки — просто функции, которые можно вызывать <b>внутри composables</b>, привязывая их к текущему компоненту. Основная пара — <code>onMounted</code> (регистрация подписок, доступ к DOM) и <code>onUnmounted</code>/<code>onBeforeUnmount</code> (симметричная очистка). <b>onScopeDispose</b> — универсальный cleanup: срабатывает при unmount компонента И при остановке effectScope, поэтому работает даже вне компонентов. В демо — интервал с полной симметрией запуска/остановки.",howItWorks:"Каждый компонент владеет <b>effect scope</b> — контейнером всех своих эффектов (render, watch, computed). Хуки register колбэк в этом скоупе: onMounted — на событие монтирования, onUnmounted — на остановку скоупа. При удалении компонента Vue закрывает scope: останавливаются все эффекты и вызываются хуки cleanup. Отсюда правило «что подписал в mounted — отпиши в unmounted»: Vue не знает про ваши setInterval/addEventListener — их нужно чистить вручную. onScopeDispose ставит колбэк на закрытие scope независимо от того, кто владелец.",mistakes:[{title:"Подписка без симметричной отписки",text:"addEventListener, setInterval, WebSocket, подписки на Observable переживают компонент и продолжают работать в пустоту — утечка памяти и призрачные обновления.",code:`onMounted(() => {
  window.addEventListener('resize', onResize)
  setInterval(poll, 5000)
}) // ❌ ничего не очищается`,fix:`onMounted(() => {
  window.addEventListener('resize', onResize)
  timer = setInterval(poll, 5000)
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  clearInterval(timer)
}) // ✅ симметрия`},{title:"Хуки внутри асинхронного колбэка",text:"Регистрация хука после await теряет контекст компонента — колбэк не привяжется (dev warning «onMounted is called when there is no active component instance»).",code:`async function setup() {
  await fetchConfig()
  onMounted(init) // ❌ контекст уже потерян
}`,fix:`onMounted(async () => {
  const config = await fetchConfig() // ✅ async внутри хука
  init(config)
})`},{title:"Забывать, что KeepAlive меняет пару хуков",text:"Внутри KeepAlive onUnmounted не срабатывает при уходе вкладки — нужен onDeactivated. Логика «ушёл с экрана» не запускается.",code:"onUnmounted(() => stopPolling()) // ❌ в KeepAlive не вызовется",fix:`onDeactivated(() => stopPolling()) // ✅
onActivated(() => startPolling())`}],nuances:["Порядок при размонтировании: <b>onBeforeUnmount</b> (компонент ещё цел) → onUnmounted (DOM удалён). Отписки можно делать в любом, но beforeUnmount — последний шанс посмотреть на DOM.","onScopeDispose работает везде, где есть активный scope: компонент, effectScope в тесте, composable.","Хуки OPTIONS API (mounted) и COMPOSITION (onMounted) могут сосуществовать; не смешивайте без причины.","Vue <b>не</b> очищает за вас: setInterval, listeners, WebSocket, наблюдатели — только ваши подписки на Vue-API останавливаются автоматически.","Ошибки в хуках unmount не блокируют размонтирование, но ломают логику очистки — держите их маленькими.","Хуки принимают колбэк без аргументов; для «что изменилось» используйте watch, а не lifecycle."],bestPractices:["Пара «подписка/отписка» — <b>рядом</b> в коде (или в одном композабле), а не разнесены по файлу.","Делайте композаблы самоочищающимися: useEventListener из VueUse — эталон.","Для всего побочного в композаблах — onScopeDispose, а не onUnmounted: гибче для тестов и вне-компонентного использования.","Не выполняйте в unmounted тяжёлую логику — только освобождение ресурсов.","Проверяйте утечки: Vue Devtools → Components → смотрим, что висит после переходов."],whenToUse:"<strong>Lifecycle-хуки</strong> нужны для точечного взаимодействия с внешним миром: таймеры, слушатели, сторонние DOM-библиотеки, метрики. Если задача решается декларативно (computed, шаблонные ref) — хуки не нужны. <strong>onScopeDispose</strong> — по умолчанию внутри composables и утилит.",alternative:{title:"VueUse: композаблы с встроенным cleanup",text:"Готовые обёртки сами отписываются: useEventListener, useIntervalFn, useRafFn — cleanup уже внутри, ошибиться негде.",code:`import { useEventListener, useIntervalFn } from '@vueuse/core'

useEventListener(window, 'resize', onResize) // отписка автоматом
const { pause, resume } = useIntervalFn(poll, 5000) // управление без setInterval`},advanced:{title:"effectScope для управления группой эффектов",text:"Ручные scope позволяют запускать/останавливать пачки эффектов вне компонентов — основа для виджетов, тестов и «микро-приложений» внутри страницы.",code:`import { effectScope, watchEffect } from 'vue'

const scope = effectScope()
scope.run(() => {
  watchEffect(() => render(state.value))
  watch(query, doSearch)
})

// полное освобождение одним вызовом:
scope.stop()`}}},Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Dp},Symbol.toStringTag,{value:"Module"})),Lp=`<script setup lang="ts">
import { provide, ref, computed } from 'vue'
import { themeKey } from './themeKey'
import DeepChild from './DeepChild.vue'

const mode = ref<'dark' | 'light'>('dark')

// Паттерн «state + actions»: данные вниз только на чтение,
// мутации — через функции
provide(themeKey, {
  mode: computed(() => mode.value), // read-only вид: потребитель не сможет присвоить
  toggle: () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  },
})
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>Родитель: провайдер контекста темы</b>
        <span class="tag info">provide(themeKey, …)</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Контекст получат <b>все потомки</b> на любой глубине — без пропсов через промежуточные
        компоненты.
      </p>
    </div>

    <div class="card">
      <b>Промежуточный компонент (ничего не знает о теме)</b>
      <p class="muted" style="margin: 6px 0 0">Он просто рендерит слот — прокидывать пропсы не нужно.</p>
      <DeepChild>
        <template #default>
          <div class="card" style="margin-top: 8px">
            <p class="muted" style="margin: 0">…а внутри него — глубокий потомок, который inject-ит тему.</p>
          </div>
        </template>
      </DeepChild>
    </div>
  </div>
</template>
`,$p=`import type { InjectionKey, ComputedRef } from 'vue'

export interface ThemeContext {
  /** Read-only вид на тему: nested Ref в шаблоне НЕ распаковывается — нужен .value */
  mode: ComputedRef<'dark' | 'light'>
  toggle: () => void
}

export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')
`,Up=`<script setup lang="ts">
import { inject } from 'vue'
import { themeKey } from './themeKey'

// inject типизирован через InjectionKey — ThemeContext выводится автоматически
const theme = inject(themeKey)

if (!theme) {
  // ключ обязателен: если провайдера нет — явная ошибка контракта
  throw new Error('themeKey не найден: используйте внутри ThemeProvider')
}
<\/script>

<template>
  <div class="stack">
    <slot />
    <div class="row row--between">
      <span>
        Тема: <b>{{ theme.mode.value }}</b>
        <span class="tag" :class="theme.mode.value === 'dark' ? 'info' : 'warn'">injected</span>
      </span>
      <button class="btn primary" @click="theme.toggle()">переключить тему</button>
    </div>
  </div>
</template>
`,Fp=`// ============ Demo.vue (провайдер) ============
${Lp}

// ============ themeKey.ts (типизированный ключ) ============
${$p}

// ============ DeepChild.vue (глубокий потребитель) ============
${Up}`,Np={title:"provide / inject",summary:"Контекст для поддерева без пропс-дриллинга: типизированные ключи, паттерн state+actions, readonly-данные.",demo:()=>F(()=>import("./Demo-Csnp5UI_.js"),[]),code:Fp,content:{intro:"<b>provide</b> на предке и <b>inject</b> у любого потомка — способ передать данные через поддерево, не прокидывая пропсы через каждый промежуточный компонент (props drilling). В отличие от глобального стора, контекст <b>scoped</b>: живёт только в поддереве и создаётся на каждый экземпляр провайдера. Канонический контракт: вниз уходит <b>read-only</b> состояние, мутации — через переданные функции (state + actions). В демо тема предоставляется на верхнем уровне, а глубокий потомок inject-ит её через Symbol-ключ.",howItWorks:"provide(key, value) сохраняет значение в экземпляре компонента; inject(key) ищет его вверх по цепочке родителей до первого совпадения. Ключ — строка или <b>Symbol</b>; типизированный <code>InjectionKey&lt;T&gt;</code> связывает provide и inject на уровне типов — TypeScript знает, что вернётся ThemeContext. inject может принимать второй аргумент — значение по умолчанию (или фабрику через <code>inject(key, () => makeDefault(), true)</code>). Реактивность: если провайдить ref/reactive, потребитель получает живую связь; если передать сам объект — см. ошибку про потерю реактивности.",mistakes:[{title:"Потеря реактивности при provide обычного объекта",text:'provide("user", user.value) отдаёт снимок. provide-ить нужно сам ref/reactive или делать это через computed — иначе потребитель видит замороженное значение.',code:`// ❌ снимок на момент provide
provide('count', count.value)`,fix:`provide('count', count) // ✅ живой ref
// или read-only view:
provide('count', readonly(count))`},{title:"Строковые ключи без типов",text:"Строки «theme» легко дублируются между библиотеками и опечатками, типизация теряется. Symbol + InjectionKey — стандарт.",code:`provide('theme', ctx)
const theme = inject('theme') // ❌ any / неизвестно что`,fix:`export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')
provide(themeKey, ctx)
const theme = inject(themeKey) // ✅ ThemeContext | undefined`},{title:"inject в компоненте, где провайдер не гарантирован",text:"inject без дефолта вернёт undefined, и первый же вызов theme.mode упадёт. Либо дефолт, либо честная ошибка контракта — но не тихий undefined.",code:`const theme = inject(themeKey)
theme.mode // ❌ TypeError, если provider выше нет`,fix:`const theme = inject(themeKey, { mode: ref('dark'), toggle: () => {} })
// ✅ или: if (!theme) throw new Error('...') — явный контракт`}],nuances:["provide/inject работает только <b>вниз</b>: предок → потомки. События наверх — через emit или callback в контексте.","Контекст создаётся <b>на каждый экземпляр провайдера</b>: два ThemeProvider = два независимых поддерева с разными темами.","inject ищет ближайшего провайдера: вложенные провайдеры перекрывают внешних для своего поддерева.","В <code>&lt;script setup&gt;</code> provide/inject только на верхнем уровне setup (синхронный контекст).","Реактивность через контекст — та же система: ref в контексте реактивен, метод в контексте — просто функция.","В библиотеках UI так устроены контексты форм/таблиц/меню: FormGroup провайдит валидацию для всех полей внутри."],bestPractices:["Паттерн <b>state + actions</b>: вниз — readonly-данные, вверх — функции-мутаторы.","Ключи — Symbol + InjectionKey&lt;T&gt; в отдельном файле (контракт модуля).","Дефолт или throw для обязательного контекста — никогда не молчаливый undefined.","Не используйте provide/inject для данных, нужных «всему приложению» — это store; для одной пары компонентов — обычные пропсы.","Композаблы-обёртки: useTheme() прячет inject внутри — потребители не знают про ключи."],whenToUse:"<strong>provide/inject</strong> — для контекста поддерева: тема, локаль, конфиг, состояние layout, контексты библиотечных компонентов (form/table/menu). Идеален, когда «данные нужны глубоко, но только внутри этого блока». Для глобальных доменных данных — Pinia; для 1–2 уровней — обычные пропсы.",alternative:{title:"Пропсы через промежуточные компоненты",text:"Если глубина 2–3 и данных мало, явный пропс-дрILING читается прямолинейнее и типизируется проще.",code:`<ThemeProvider :theme="t">
  <Intermediate :theme="t">
    <DeepChild :theme="t" />
  </Intermediate>
</ThemeProvider>
<!-- при глубине 5+ это уже боль — время provide/inject -->`},advanced:{title:"Контекст через композабл-пару (provider/comsumer)",text:"Библиотечный паттерн: пара функций useCreateContext/useContext прячет provide/inject за API, ключи не утекают, дефолты и ошибки — в одном месте.",code:`// context.ts
export function useCreateTheme() {
  const mode = ref<'dark' | 'light'>('dark')
  const ctx = { mode: readonly(mode), toggle: () => { mode.value = mode.value === 'dark' ? 'light' : 'dark' } }
  provide(themeKey, ctx)
  return ctx
}

export function useTheme() {
  const ctx = inject(themeKey)
  if (!ctx) throw new Error('useTheme: оберните приложение в useCreateTheme')
  return ctx
}`}}},jp=Object.freeze(Object.defineProperty({__proto__:null,default:Np},Symbol.toStringTag,{value:"Module"})),Hp=`<script setup lang="ts">
import { ref, nextTick } from 'vue'
import HookBox from './HookBox.vue'

const show = ref(true)
const count = ref(0)
const log = ref<string[]>(['// покрутите кнопки — события живого цикла появятся здесь'])

function trace(message: string) {
  log.value.push(message)
}

function mutateOnce() {
  count.value++
  trace('пользователь: count++')
}

async function mutateTwice() {
  count.value++
  count.value++
  trace('пользователь: count++ дважды в одном tick')
  await nextTick()
  // Vue объединяет оба изменения в один ререндер — так и работает батчинг
  trace('Vue: batched → один рендер вместо двух')
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="show = !show">
        {{ show ? '💥 Размонтировать' : '♻️ Смонтировать' }} HookBox
      </button>
      <button class="btn" @click="mutateOnce">Изменить состояние</button>
      <button class="btn" @click="mutateTwice">Изменить дважды за tick</button>
      <span class="tag info">count = {{ count }}</span>
    </div>

    <div class="card">
      <HookBox v-if="show" :count="count" :trace="trace" />
      <p v-else class="muted">HookBox размонтирован — его onUnmounted уже отработал ↑</p>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i">{{ line }}</div>
    </div>
  </div>
</template>
`,Bp=`<script setup lang="ts">
import { watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    count: number
    trace: (message: string) => void
  }>(),
  {},
)

/** Обычная (не реактивная) переменная: писать в реактивный стейт
 *  из onUpdated — прямой путь к бесконечному циклу ререндеров. */
let updates = 0

onBeforeMount(() => props.trace('HookBox: onBeforeMount — идёт создание vdom, DOM ещё нет'))
onMounted(() => props.trace('HookBox: mounted — DOM доступен, можно трогать элементы'))
onBeforeUpdate(() => {
  updates++
})
onUpdated(() => {
  updates++
})
onBeforeUnmount(() => props.trace('HookBox: onBeforeUnmount — последний шанс на cleanup'))
onUnmounted(() => props.trace('HookBox: unmounted — слушатели и таймеры можно удалять'))

watch(
  () => props.count,
  async () => {
    // watch (flush: 'pre') срабатывает ДО рендера, nextTick ждёт завершения рендера
    await nextTick()
    props.trace(\`HookBox: ререндер завершён → onBeforeUpdate + onUpdated ×\${updates / 2}\`)
    updates = 0
  },
)
<\/script>

<template>
  <div class="row row--between">
    <span>Компонент жив: <b class="mono">count = {{ count }}</b></span>
    <span class="tag ok">mounted</span>
  </div>
</template>
`,zp=`// ============ Demo.vue ============
${Hp}

// ============ HookBox.vue ============
${Bp}`,qp={title:"Жизненный цикл Vue-приложения",summary:"createApp → setup → mounted → updated → unmounted: что и когда вызывается.",demo:()=>F(()=>import("./Demo-BixfPF0g.js"),[]),code:zp,content:{intro:"У каждого Vue-компонента есть предсказуемая последовательность хуков: приложение создаётся через <b>createApp().mount()</b>, каждый экземпляр проходит через <b>setup</b> → монтирование → обновления → размонтирование. Хуки — единственное законное место для работы с DOM, подписок, таймеров и cleanup. Нажмите кнопки в демо: слева видно, в каком порядке срабатывают хуки и как Vue объединяет два изменения состояния в один ререндер.",howItWorks:"Родитель <b>Demo.vue</b> владеет логом и решает, смонтирован ли <b>HookBox</b> через v-if. Дочерний компонент в своих хуках вызывает переданный через props колбэк trace() и пишет события в лог родителя — состояние живёт в одном месте, а события приходят из другого. Счётчик ререндеров updates намеренно сделан обычной переменной: onUpdated лишь инкрементирует её, а реактивной записи в лог Vue дожидается через <b>await nextTick()</b> внутри watch. Поэтому запись «ререндеров: N» появляется уже после завершения рендера, а не вызывает новый цикл обновлений.",mistakes:[{title:"Писать реактивное состояние прямо из onUpdated",text:"onUpdated вызывается после рендера. Если внутри него менять реактивные данные, Vue запланирует ещё один рендер, который снова вызовет onUpdated — и так до «Maximum recursive updates exceeded».",code:`onUpdated(() => {
  // ❌ каждый рендер порождает новый рендер
  count.value++
})`,fix:`let updates = 0
onUpdated(() => {
  updates++ // ✅ обычное число, не реактив
})

// реактивную запись делаем вне цикла обновления
await nextTick()
log.value.push(\`renders: \${renders}\`)`,fixText:"Сайд-эффекты из хуков лучше переносить наружу (nextTick, event loop) или хранить в не-реактивных переменных."},{title:"Забыть cleanup в onUnmounted",text:"addEventListener, setInterval, подписки на Store переживают компонент и продолжают работать после его удаления — это утечка памяти и «мёртвые» обновления состояния, на которое никто уже не смотрит.",code:`onMounted(() => {
  window.addEventListener('resize', onResize)
  setInterval(poll, 5000)
})
// ❌ размонтировались — слушатель и таймер остались`,fix:`onMounted(() => window.addEventListener('resize', onResize))
// ✅ симметричная развязка
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  clearInterval(timer)
})`,fixText:"Правило: всё, что подписался в mounted, отписывайся в unmounted."},{title:"Делать DOM-доступ до mounted",text:"В setup и onBeforeMount реального DOM ещё нет — template refs равны null. Поиск элементов работает только начиная с onMounted.",code:`setup() {
  const el = ref(null)
  onBeforeMount(() => {
    // ❌ el.value === null
    el.value.getBoundingClientRect()
  })
}`,fix:`const box = useTemplateRef('box')
onMounted(() => {
  box.value?.scrollIntoView() // ✅ DOM готов
})`}],nuances:["<b>setup выполняется до монтирования</b> — до onMounted не существует ни одного DOM-узла, но состояние и computed уже работают.","<b>Хуки OPTIONS API и COMPOSITION API вызываются в фиксированном порядке</b>: beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeDestroy/unmounted.","Во время <b>SSR</b> выполняются только хуки до mounted: beforeCreate, created, beforeServerPrefetch. onMounted, onUpdated и onUnmounted на сервере никогда не вызываются.","Хуки <b>onActivated / onDeactivated</b> работают только внутри &lt;KeepAlive&gt; и заменяют mounted/unmounted при переключении вкладок.","Порядок вызовов хуков <b>детерминирован</b>: сначала родительские beforeX, потом дочерние, а при размонтировании — наоборот."],bestPractices:["Всю логику и подписки объявляй в <b>&lt;script setup&gt;</b> на верхнем уровне — хуки видны рядом с состоянием, которое ими управляет.","Слушатели и таймеры региструй в <b>onMounted</b>, а не сразу в setup: SSR не имеет window/document.","Для cleanup чаще всего достаточно <b>onScopeDispose</b> — он работает и вне компонента (внутри async setup или эффекта).","Не создавай компонент ради «проживания» одного хука — сначала посмотри готовый composable (useEventListener сам отписывается)."],whenToUse:"<strong>Хуки жизненного цикла</strong> нужны, когда взаимодействие выходит за рамки декларативного шаблона: измерение элемента, подписка на внешние события, работа с WebSocket, фокус, интеграция с чужими библиотеками. 90% задач в шаблоне решаются без хуков — появился хук → убедись, что декларативного решения действительно нет.",alternative:{title:"Декларативные alternatives без хуков",text:"Типовые задачи lifecycle уже покрыты композаблами: подписка на события — useEventListener, таймеры — useIntervalFn / useTimeoutFn, размеры — useElementSize, доступность в DOM — v-if + шаблонные ref. Свой хук пиши только тогда, когда готовой обёртки нет или она не подходит.",code:`import { useEventListener, useIntervalFn } from '@vueuse/core'

useEventListener(window, 'resize', onResize) // сам отмонтируется
useIntervalFn(poll, 5000)                     // pause/play из коробки`},advanced:{title:"Единая точка cleanup через onScopeDispose",text:"Vue связывает хуки с «эффективным скоупом» (component instance или effect scope). Если выносишь подписку в отдельную функцию или composable, вызывай onScopeDispose — отписка сработает и для компонента, и для ручного scope из effectScope().",code:`import { effectScope, onScopeDispose } from 'vue'

function useConnection(url: string) {
  const socket = new WebSocket(url)
  onScopeDispose(() => socket.close())
  return socket
}

const scope = effectScope()
scope.run(() => useConnection('wss://…'))
scope.stop() // закроет сокет`}}},Kp=Object.freeze(Object.defineProperty({__proto__:null,default:qp},Symbol.toStringTag,{value:"Module"})),Wp=`<script setup lang="ts">
import { ref, reactive } from 'vue'

const html = ref('<b>Жирный</b> и <i>курсив</i> — это <u>v-html</u>')
const isActive = ref(true)
const theme = ref<'green' | 'indigo'>('green')
const frozen = ref('этот текст заморожен')
const attrs = ref<Record<string, string>>({ id: 'box', 'data-state': 'dynamic' })

const styleObj = reactive({ color: '#42b883', fontSize: '17px' })

function flipTheme() {
  theme.value = theme.value === 'green' ? 'indigo' : 'green'
  styleObj.color = theme.value === 'green' ? '#42b883' : '#6c7cff'
}
<\/script>

<template>
  <div class="stack">
    <label class="label">v-html / v-text — содержимое:</label>
    <input v-model="html" class="input" />
    <div class="card" v-html="html" />

    <div class="row">
      <button class="btn" @click="isActive = !isActive">
        :class="{ active }" → {{ isActive }}
      </button>
      <button class="btn" @click="flipTheme">:style → {{ theme }}</button>
      <button class="btn" @click="frozen = 'теперь здесь другой текст'">
        изменить v-once
      </button>
      <button class="btn" @click="attrs['data-state'] = 'clicked'">v-bind="obj"</button>
    </div>

    <div
      class="card dyn"
      :class="{ active: isActive, indigo: theme === 'indigo' }"
      :style="styleObj"
      v-bind="attrs"
    >
      Я реактивный узел: классы, стили и произвольные атрибуты обновляются независимо.
    </div>

    <div class="card">
      v-once: <b>{{ frozen }}</b>
      <span class="muted"> — больше не перерисовывается</span>
    </div>
  </div>
</template>

<style scoped>
.dyn {
  transition: all 0.2s;
  border-left: 3px solid transparent;
}
.active {
  border-left-color: #42b883;
  background: rgba(66, 184, 131, 0.08);
}
.indigo {
  border-left-color: #6c7cff;
  background: rgba(108, 124, 255, 0.08);
}
</style>
`,Gp={title:"Шаблоны и директивы",summary:"v-bind, v-on, v-html, v-once, :class / :style — декларативный слой Vue.",demo:()=>F(()=>import("./Demo-DlVZ_cSY.js"),__vite__mapDeps([0,1,2])),code:Wp,content:{intro:"Шаблон Vue — это HTML с реактивными расширениями. <b>Директива</b> — атрибут с префиксом <code>v-</code>, который Vue превращает в операцию: <code>v-bind</code> привязывает атрибут к данным, <code>v-on</code> подписывается на событие, <code>v-html</code> вставляет разметку, <code>v-once</code> замораживает узел. Всё в шаблоне декларативно: вы описываете <i>что</i> показать, а Vue сама синхронизирует DOM с состоянием.",howItWorks:'Интерполяция <code>{{ }}</code> и директивы привязок компилируются в render-функцию. <code>:class</code> и <code>:style</code> принимают объекты/массивы и объединяются с обычными атрибутами — Vue сама вычисляет итоговую строку. <code>v-bind="obj"</code> разворачивает объект в атрибуты поэлементно, поэтому его можно обновлять реактивно. <code>v-once</code> говорит компилятору сгенерировать узел с флагом «не обновлять» — Vue больше не будет сравнивать его с VDOM при ререндерах.',mistakes:[{title:"v-html для пользовательского контента",text:"v-html вставляет разметку как есть. Данные от пользователя (комментарии, ники, API) — это готовый XSS: злонамеренный <code>&lt;img onerror&gt;</code> выполнит скрипт в контексте вашего приложения.",code:'<div v-html="comment.body" /> <!-- ❌ XSS -->',fix:`<!-- ✅ текст экранируется автоматически -->
<div>{{ comment.body }}</div>

<!-- если нужна безопасная разметка — парси через DOMPurify -->
<div v-html="sanitize(comment.body)" />`,fixText:"v-html допустим только для данных, которым вы доверяете на 100% (например, Markdown, прогоняемый через sanitizer)."},{title:"Смешение v-if и v-for на одном элементе",text:"Директивы одного элемента: v-if вычисляется первым и не имеет доступа к переменной из v-for — Vue 3 выбросит предупреждение, а в Vue 2 это была логическая ошибка.",code:'<Item v-for="i in list" v-if="i.visible" /> <!-- ❌ -->',fix:`<!-- ✅ отфильтруй данные -->
<Item v-for="i in visibleList" :key="i.id" />

<!-- ✅ или оберни в template -->
<template v-for="i in list" :key="i.id">
  <Item v-if="i.visible" :item="i" />
</template>`}],nuances:["Директивы <b>выполняются в порядке их появления в DOM</b>, но v-if имеет приоритет над остальными на том же узле.",'<code>:style</code> с объектом <b>объединяется</b> с инлайн-стилем из класса, а <code>v-bind="obj"</code> перезаписывает одноимённые атрибуты.',"<code>v-html</code> и <code>v-text</code> нельзя комбинировать с интерполяцией на одном элементе — интерполяция игнорируется.","Vue <b>не санитизирует</b> содержимое v-html: санитизация — ответственность приложения.","<code>v-once</code> полезен для статичного контента в тяжёлых списках: узел исключается из последующих патчей VDOM."],bestPractices:["Предпочитай <code>{{ }}</code> любым другим способам вставки текста — это экранирование и статическая проверка шаблона.","Классы через <code>:class</code>, статичные классы — через <code>class</code>; никогда не собирай className строкой вручную.","Вычисляй производные значения в <code>computed</code>, а не внутри шаблона: шаблон должен быть «глупым».","Для сложных условий вводи вычисляемые переменные (<code>const isEmpty = computed(...)</code>) — шаблон читается как английский."],whenToUse:"<strong>Директивы</strong> — инструмент первого уровня: пока задача решается v-if/v-for/v-bind/v-on, код остаётся декларативным и оптимизируемым. Пользовательские директивы (<code>v-ripple</code>, <code>v-click-outside</code>) нужны, когда одна и та же DOM-манипуляция размазана по многим местам.",alternative:{title:"Когда директивы — не лучший выбор",text:"Если привязка содержит логику (условия, форматирование, вычисления) — вынеси её в computed или метод. Шаблон с кашей из тернарников внутри :class хуже читается, чем одноимённый computed с понятным именем.",code:`<!-- ❌ логика в шаблоне -->
<div :class="(a ? 'x' : '') + (b ? ' y' : '')">

<!-- ✅ -->
const classes = computed(() => ['x', b.value && 'y'])
<div :class="classes">`},advanced:{title:"Свои директивы через app.directive()",text:"Жизненный цикл директивы — хуки <code>created / beforeMount / mounted / beforeUpdate / updated / beforeUnmount / unmounted</code>. Хуки mounted/beforeMount получают элемент напрямую; обновления идут с <code>binding.instance</code>. Компонентная директива может использоваться и в шаблонах, и в render-функциях.",code:`app.directive('focus', {
  mounted(el) {
    el.focus()
  },
  updated(el, binding) {
    if (binding.value) el.focus()
  },
})

// использование: <input v-focus="shouldFocus" />`}}},Jp=Object.freeze(Object.defineProperty({__proto__:null,default:Gp},Symbol.toStringTag,{value:"Module"})),Qp=`<script setup lang="ts">
import { ref } from 'vue'
import ChildCounter from './ChildCounter.vue'

// Состояние живёт в родителе: данные вниз, события вверх
const count = ref(0)
const history = ref<number[]>([])

function onChange(next: number) {
  count.value = next
  history.value = [...history.value, next].slice(-6)
}
<\/script>

<template>
  <div class="stack">
    <div class="row row--between">
      <span class="label">Родитель Demo.vue</span>
      <span class="tag info">count = {{ count }}</span>
    </div>

    <!-- Данные вниз через props -->
    <ChildCounter :count="count" :step="2" label="Удвоенный счётчик" @change="onChange" />

    <div class="log">
      <div v-for="(v, i) in history" :key="i">история: {{ v }}</div>
      <div v-if="history.length === 0">// события от ребёнка появятся здесь</div>
    </div>
  </div>
</template>
`,Xp=`<script setup lang="ts">
defineProps<{
  label: string
  count: number
  step?: number
}>()

const emit = defineEmits<{
  change: [next: number]
}>()
<\/script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>{{ label }}</b>
      <span class="stat">{{ count }}</span>
    </div>
    <div class="row" style="margin-top: 10px">
      <button class="btn small" @click="emit('change', count - (step ?? 1))">−</button>
      <button class="btn small primary" @click="emit('change', count + (step ?? 1))">+</button>
      <span class="muted">props ↓ · emit ↑</span>
    </div>
  </div>
</template>
`,Yp=`// ============ Demo.vue (родитель) ============
${Qp}

// ============ ChildCounter.vue (ребёнок) ============
${Xp}`,Zp={title:"Компоненты",summary:"Разбиение интерфейса на изолированные переиспользуемые части.",demo:()=>F(()=>import("./Demo-DKcdCwdK.js"),[]),code:Yp,content:{intro:"Компонент — переиспользуемая Vue-единица с собственным шаблоном, логикой и состоянием. Родитель передаёт данные вниз через <b>props</b>, а получает реакции через <b>events</b> (emit). Такой поток «data down, events up» делает поток данных предсказуемым: у каждого компонента есть одна причина для ререндера — изменились его входы.",howItWorks:"Demo.vue владеет состоянием count и передаёт его в ChildCounter как props вместе с шагом и подписью. Ребёнок не мутирует props — он излучает событие change с новым значением, а родитель сам решает, как обновить state. Именно так ребёнок остаётся «глупым» и полностью тестируемым: меняются только входы, всё остальное вычисляется.",mistakes:[{title:"Мутация props внутри дочернего компонента",text:"props — это readonly-представление входа. Прямое присваивание ломает однонаправленный поток данных: родитель об этом не узнает, devtools показывают рассинхрон, а в mode строгости Vue выбросит warning.",code:`// ❌ ребёнок
const props = defineProps<{ count: number }>()
props.count = 5`,fix:`// ✅ ребёнок просит, родитель решает
const emit = defineEmits<{ change: [next: number] }>()
emit('change', props.count + 1)`,fixText:"Нарушение однонаправленности данных — корень большинства багов в UI."},{title:"«Пропс-дрilling» на 5+ уровней вниз",text:"Когда данные пробрасываются сквозь посредников, каждый промежуточный компонент знает о том, чего не должен знать, и любое изменение формы props ломает цепочку.",code:'<A :user="user"><B :user="user"><C :user="user">…',fix:`// ✅ provide/inject, composable или store
provide('user', user)
const user = inject('user')`}],nuances:["Одинаковые по шаблону компоненты — <b>разные экземпляры</b>: у каждого своё состояние, свой scope реактивности и свои хуки.","Props в шаблоне доступны по именам <b>без <code>props.</code></b> — в script setup это локальная переменная.","Все пропсы компонента <b>переиспользуются повторно</b> при повторном рендере — Vue знает их реактивность заранее и может пропускать лишние рендеры.","<b>Имена props в DOM-атрибутах кешируются</b>: после первого рендера изменение имени атрибута в шаблоне не подхватится — поэтому привязывай их динамически.","Дочерний компонент рендерится <b>только когда изменились его props</b> (Vue сравнивает входы), а не при каждом ререндере родителя."],bestPractices:["Компонент должен быть <b>одной ответственностью</b>: либо он рисует, либо решает — смешение превращает файл в «компонент-монолит».","Называй компоненты по роли в UI (<code>UserCard</code>, <code>PriceBadge</code>), а не по содержимому (<code>LeftBox</code>).","Держи состояние <b>настолько близко к месту использования, насколько возможно</b> — глобальное состояние вводится последним.","Публичный интерфейс (props/emits/slots) держи минимальным: широкий интерфейс = дорогое переиспользование."],whenToUse:"<strong>Выделяй компонент</strong>, когда фрагмент UI переиспользуется, имеет собственное состояние или логику, или когда файл становится длиннее ~200 строк и содержит несколько причин для изменения. Не выделяй ради «красивого дерева» — лишние компоненты добавляют overhead и сложность.",alternative:{title:"Простой вариант: вёрстка без компонента",text:"Если блок статичен, используется один раз и не имеет логики — оставь его разметкой. Компонент оправдан, когда появляются переиспользование, состояние или тест.",code:`<!-- этот блок не нуждается в компоненте -->
<section class="hero">
  <h1>Заголовок</h1>
</section>`},advanced:{title:"Функциональные и «безсостоятельные» компоненты",text:"Компонент без собственного состояния можно держать как чистую функцию от props к VNode — для таких частей Vue позволяет обойтись без экземпляра. Ещё дальше — headless-компоненты: логика в слоте/рендер-пропе, а разметка полностью у потребителя (см. раздел «Продвинутый Vue»).",code:`const Badge = (props) =>
  h('span', { class: 'badge' }, props.text)
// нет instance, нет реактивности — дёшево вызывать`}}},ef=Object.freeze(Object.defineProperty({__proto__:null,default:Zp},Symbol.toStringTag,{value:"Module"})),tf=`<script setup lang="ts">
import { ref } from 'vue'
import BadgeChild from './BadgeChild.vue'

const name = ref('Алиса')
const age = ref(28)
const role = ref<'admin' | 'user'>('admin')
const tags = ref(['vue', 'ts'])

// Неверный тип генерирует warning в консоли Vue — так работает runtime-проверка
const brokenType = ref(false)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="name" class="input" placeholder="name" style="flex: 1" />
      <input v-model.number="age" type="number" class="input" style="width: 110px" />
      <select v-model="role" class="select">
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>
    </div>

    <div class="row">
      <button class="btn" @click="brokenType = !brokenType">
        {{ brokenType ? '✅ вернуть корректный тип' : '💥 передать строку вместо числа' }}
      </button>
      <button class="btn" @click="tags = [...tags, 'pinia']">добавить tag</button>
    </div>

    <!-- runtime-валидация типов: смотрите консоль браузера -->
    <BadgeChild
      :name="name"
      :age="brokenType ? ('28' as unknown as number) : age"
      :role="role"
      :tags="tags"
    />

    <div class="log">
      <div>name: {{ name }} (string)</div>
      <div>age: {{ age }} (number) — v-model.number гарантирует тип</div>
      <div>role: {{ role }} (union) — нарушение = warning в консоли</div>
    </div>
  </div>
</template>
`,nf=`<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    age: number
    role?: 'admin' | 'user'
    tags?: string[]
  }>(),
  {
    role: 'user',
    tags: () => [],
  },
)
<\/script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>{{ props.name }}, {{ props.age }}</b>
      <span class="tag" :class="props.role === 'admin' ? 'bad' : 'ok'">{{ props.role }}</span>
    </div>
    <div class="row" style="margin-top: 8px">
      <span v-for="t in props.tags" :key="t" class="tag info">{{ t }}</span>
      <span v-if="!props.tags.length" class="muted">tags пуст (default = [])</span>
    </div>
  </div>
</template>
`,of=`// ============ Demo.vue (потребитель) ============
${tf}

// ============ BadgeChild.vue (получатель props) ============
${nf}`,sf={title:"Props",summary:"Типизация, дефолты, runtime-валидация и однонаправленный поток данных.",demo:()=>F(()=>import("./Demo-CfHXqrGt.js"),[]),code:of,content:{intro:"<b>Props</b> — единственный законный способ передать данные от родителя к ребёнку. В TypeScript-проекте props описываются типом в <code>defineProps&lt;{...}&gt;()</code>: получаете автодополнение, ошибки компиляции и runtime-проверку значений, приходящих извне (в HTML нельзя гарантировать тип). Пропсы <b>readonly</b>: ребёнок не может их изменить — он может только запросить изменение через emit.",howItWorks:'<code>withDefaults</code> задаёт значения по умолчанию прямо в типе — включая фабрики для объектов и массивов (<code>() =&gt; []</code>), чтобы дефолт не разделялся между экземплярами. Объектное литеральное значение в шаблоне (<code>role="admin"</code>) приходит как строка, поэтому типизированные union-поля передавайте через <code>:role="..."</code>. Неверный тип Vue ловит на этапе установки props и пишет warning в консоль — попробуйте кнопку с ошибкой.',mistakes:[{title:"Мутация props ребёнком",text:"props.length = 0 или props.user.name = … нарушает контракт: родитель не узнаёт об изменении, а в Vue 3 попытка присвоить в readonly-объект молча игнорируется или падает в dev-режиме.",code:"props.tags.push('new')  // ❌ мутирует вход ребёнка",fix:"emit('update:tags', [...props.tags, 'new'])  // ✅",fixText:"Ребёнок выражает намерение, родитель владеет данными."},{title:"Передавать объект/массив литералом в шаблоне",text:'Атрибуты без двоеточия — строки. <code>:config="{ a: 1 }"</code> создаёт новый объект при каждом рендере, что будит реактивные зависимости и ломает мемоизацию.',code:`<!-- ❌ новый объект каждый рендер -->
<Child :config="{ mode: 'dark' }" />`,fix:`// ✅ вынесено из render-цикла
const config = { mode: 'dark' }
<!-- или computed, если зависит от данных -->`},{title:"Пропс вместо события для «уведомления»",text:"Если родитель передаёт колбэк как проп — получается зацикливание и потеря реактивности на изменение самой функции. Для обратной связи есть emits.",code:`<!-- ❌ -->
<Child :onDone="() => close()" />`,fix:`<!-- ✅ -->
<Child @done="close" />`}],nuances:["Vue <b>разворачивает</b> необъявленные props в атрибуты корневого элемента, если компонент не наследует от атрибутов — см. <code>inheritAttrs</code>.","Пропсы извне (API, route) — <b>untrusted input</b>: тип в TypeScript не защищает в runtime, поэтому для критичных полей нужен рантайм-валидатор (Zod/Valibot) или Vue-валидаторы.",'Для boolean-пропсов существует спецификация HTML: <code>&lt;Badge disabled&gt;</code> передаёт <code>true</code>, а <code>disabled="false"</code> — тоже true (это presence-атрибут).','<code>readonly(toRef(props, "x"))</code> сохраняет реактивную ссылку на проп, но не даёт писать.',"Props <b>нельзя деструктурировать</b> в script setup без потери реактивности — см. раздел «Ловушки»."],bestPractices:["Описывай props типом <code>defineProps&lt;Props&gt;()</code> — одна аннотация даёт и типы, и runtime-проверку.","Держи интерфейс узким: предпочитай 3 осмысленных пропа вместо 10 «универсальных» (вариант — прокидывание атрибутов).","Всё, что передаётся извне, <b>валидируй на входе</b>, а не «на всякий случай» внутри логики.","Для списков и объектов всегда указывай фабричный дефолт (<code>() =&gt; []</code>), никогда не <code>= []</code>."],whenToUse:"<strong>Props</strong> — выбор по умолчанию для любого входа компонента: данные, конфигурация, обратные ссылки на DOM. Это максимально тестируемый и переиспользуемый контракт. Если данные нужны в 5 разных ветках дерева — сначала подними их к общему предку, а глобальный стейт (Pinia) вводи только после того, как подъём по дереву стал болью.",alternative:{title:"Проще: прокинуть атрибуты дальше",text:'Для «прозрачных» обёрток вместо копипасты 10 пропсов используйте <code>v-bind="$attrs"</code> — атрибуты и слушатели пройдут к корневому элементу автоматически.',code:`<MyButton v-bind="$attrs" class="btn">…</MyButton>

<!-- в script -->
defineOptions({ inheritAttrs: false })`},advanced:{title:"Реактивное извлечение пропса: toRef(props, key)",text:"Когда проп нужно передать в реактивный объект или composable, <code>toRef</code> сохраняет ссылку «на проп», а не копирует значение — обновления родителя продолжат течь вниз.",code:`const props = defineProps<{ size: number }>()
const sizeRef = toRef(props, 'size')
useSomething(sizeRef) // остаётся реактивным`}}},rf=Object.freeze(Object.defineProperty({__proto__:null,default:sf},Symbol.toStringTag,{value:"Module"})),af=`<script setup lang="ts">
import { ref } from 'vue'
import EmitChild from './EmitChild.vue'

const received = ref<string[]>([])

function on(event: string) {
  received.value = [event, ...received.value].slice(0, 8)
}
<\/script>

<template>
  <div class="stack">
    <div class="row row--between">
      <span class="label">Родитель слушает события ↓</span>
      <span class="tag info">{{ received.length }} событий</span>
    </div>

    <EmitChild @save="(p) => on(\`save { text: '\${p.text}' }\`)" @cancel="on('cancel')" />

    <div class="log">
      <div v-for="(e, i) in received" :key="i">{{ e }}</div>
      <div v-if="!received.length">// ребёнок ещё ничего не излучил</div>
    </div>
  </div>
</template>
`,cf=`<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

// Типизированные события: payload описан в виде кортежа
const emit = defineEmits<{
  save: [payload: { text: string; at: number }]
  cancel: []
}>()

function onSave() {
  const value = text.value.trim()
  if (!value) return
  emit('save', { text: value, at: Date.now() })
  text.value = ''
}
<\/script>

<template>
  <div class="card">
    <div class="row">
      <input
        v-model="text"
        class="input"
        placeholder="Сообщение для emit…"
        style="flex: 1"
        @keyup.enter="onSave"
      />
      <button class="btn primary" :disabled="!text.trim()" @click="onSave">
        emit('save')
      </button>
      <button class="btn" @click="emit('cancel')">emit('cancel')</button>
    </div>
    <p class="muted" style="margin: 10px 0 0">
      Ребёнок не знает, что произойдёт дальше, — только сообщает.
    </p>
  </div>
</template>
`,lf=`// ============ EmitChild.vue (излучатель) ============
${cf}

// ============ Demo.vue (слушатель) ============
${af}`,df={title:"Emits (события)",summary:"Как компонент сообщает миру о том, что произошло — с типизированным payload.",demo:()=>F(()=>import("./Demo-BsxRrzTT.js"),[]),code:lf,content:{intro:"<b>Emit</b> — обратный канал данных: ребёнок не меняет состояние сам, он излучает событие, а родитель решает, что с ним делать. Типизация <code>defineEmits&lt;{ name: [payload] }&gt;()</code> превращает события в кортежи: неправильное имя или payload ломают компиляцию, а в шаблоне автодополняются имена событий и типы колбэков.",howItWorks:"Ребёнок вызывает <code>emit('save', { text, at })</code> — Vue находит слушателя <code>@save</code> на его vnode и вызывает его с payload. Обработчик в родителе выполняется <b>синхронно в контексте родителя</b>, поэтому там безопасно трогать его состояние. Имена событий — часть публичного API: <code>@save</code> и <code>@save:payload</code> — уже разные контракты.",mistakes:[{title:"Мутация родительского состояния напрямую через проп-объект",text:"Передача объекта и его мутация ребёнком работают «случайно» (объект по ссылке), но ребёнок становится зависимым от внутренней структуры чужого стейта. При замене состояния ссылкой — например, при гидрации из API — мутации перестают работать.",code:`// ❌ ребёнок
props.cart.items.push(item)`,fix:`// ✅ событие
emit('add-to-cart', item)`},{title:"Событие-«глагол», которое делает всё",text:"<code>@change</code>, который и сохраняет, и закрывает, и логирует, превращает родителя в пассивного исполнителя чужой логики. События должны описывать факт, а не инструкцию.",code:"emit('do-everything')",fix:`emit('submit', payload)  // факт
emit('cancel')          // факт`},{title:"Забыть оповестить о валидации",text:"Если ребёнок молча игнорирует неверный ввод, родитель считает операцию успешной. Событие <code>invalid</code> или ошибочный payload делают контракт честным."}],nuances:["В Vue 3 имена событий <b>не нормализуются</b>: <code>@myEvent</code> и <code>emit('myEvent')</code> должны совпадать буквально.","Слушатель выполняется <b>до</b> того, как родитель перерисуется — после <code>emit</code> состояние уже обновлено, но DOM ещё нет (см. nextTick).","Если у события нет payload, объявляйте его пустым кортежем: <code>cancel: []</code> — тогда лишний аргумент станет ошибкой TS.","События, которые используются в <code>v-model</code>, получают канонические имена: <code>update:modelValue</code>, <code>update:title</code>.","<b>Runtime-валидатор</b> события задаётся объектным синтаксисом defineEmits — он выполняется в dev-режиме и ловит неверные payload до потребителя."],bestPractices:["Называйте события <b>глаголом в прошедшем/настоящем времени</b>: <code>save</code>, <code>remove</code>, <code>update:query</code> — по названию понятно, что уже произошло.","Передавайте в payload <b>всё, что нужно слушателю</b>, чтобы ему не приходилось доставать данные из чужого контекста.","Типизируйте события кортежем — это даёт автодополнение в шаблоне и ошибки в местах вызова.","Число публичных событий держите маленьким: события — это API, а API дорого менять."],whenToUse:"<strong>Emit</strong> нужен каждый раз, когда дочерний компонент узнаёт о чём-то, что важно родителю: форма отправлена, элемент удалён, пользователь выбрал значение. Для обратной передачи «значения» с флагом read-write используйте <code>v-model</code> (это тот же emit, но с каноническим именем).",alternative:{title:"Проще: callback-проп или v-model",text:"Для единственного обратного действия вместо самописного события можно использовать <code>defineModel</code> — одна строка вместо пары emits/update.",code:`// ✅ Vue 3.4+: одно v-model вместо пары событий
const model = defineModel<string>()
emit('update:modelValue', value) // делает компилятор`},advanced:{title:"События с дженерик-полезной нагрузкой и моделью",text:"Тип можно параметризовать: событие несёт дженерик-загрузку, а <code>defineModel&lt;T&gt;()</code> связывает тип модели с внешним <code>v-model</code>. Ещё дальше — использовать события как шину состояния (mitt) внутри feature-слоя, но это уже архитектурное решение.",code:`const emit = defineEmits<{
  update: [state: T]
}>()

const model = defineModel<Date | null>(null)`}}},uf=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"})),pf=`<script setup lang="ts">
import { ref } from 'vue'
import PanelLayout from './PanelLayout.vue'

const withHeader = ref(true)
const withFooter = ref(false)
const items = ref(['Vue', 'Router', 'Pinia'])
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="withHeader = !withHeader">
        header: {{ withHeader ? 'передан' : 'fallback' }}
      </button>
      <button class="btn" @click="withFooter = !withFooter">
        footer: {{ withFooter ? 'передан' : 'скрыт' }}
      </button>
    </div>

    <PanelLayout>
      <!-- Именованный слот header -->
      <template #header>
        <b v-if="withHeader">Панель управления</b>
        <b v-else>—</b>
      </template>

      <!-- Слот по умолчанию -->
      <div class="row">
        <span v-for="i in items" :key="i" class="tag info">{{ i }}</span>
      </div>

      <!-- Именованный слот footer -->
      <template #footer>
        <small v-if="withFooter" class="muted">footer передан потребителем</small>
      </template>
    </PanelLayout>

    <p class="muted">
      Уберите передачу header — сработает fallback-контент из объявления слота.
    </p>
  </div>
</template>
`,ff=`<script setup lang="ts">
// Слоты объявляются шаблоном: fallback виден, когда слот не передан
<\/script>

<template>
  <div class="card panel">
    <div class="panel__head">
      <slot name="header">Заголовок по умолчанию (слот не передан)</slot>
    </div>
    <div class="panel__body">
      <slot>Контент по умолчанию — родитель ничего не передал.</slot>
    </div>
    <div class="panel__foot">
      <slot name="footer" />
      <span class="muted" style="font-size: 12px">footer-слот объявлен, но пуст</span>
    </div>
  </div>
</template>

<style scoped>
.panel {
  border: 1px dashed var(--border-strong);
}
.panel__head {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 10px;
  color: var(--accent);
}
.panel__body {
  min-height: 46px;
}
.panel__foot {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--border);
}
</style>
`,mf=`// ============ PanelLayout.vue ============
${ff}

// ============ Demo.vue (потребитель) ============
${pf}`,vf={title:"Slots (слоты)",summary:"Именованные слоты, fallback-контент и композиция разметки.",demo:()=>F(()=>import("./Demo-BtKcNBbv.js"),__vite__mapDeps([3,1,4])),code:mf,content:{intro:"<b>Слоты</b> превращают компонент в «рамку»: он владеет структурой и поведением, а контент поставляет потребитель. Слот без содержимого показывает <b>fallback</b> — текст, объявленный прямо внутри <code>&lt;slot&gt;</code>. Именованные слоты (<code>#header</code>) задают зоны композиции: layout получает регионы, потребитель — свободу.",howItWorks:"Родитель передаёт разметку в слоты, но Vue <b>не копирует</b> её в ребёнка: слоты — это функции, возвращающие VNodes, которые ребёнок рендерит в своём контексте. Поэтому доступ к данным в слоте — у <i>родителя</i>, а к стилям/классам компонента — у <i>ребёнка</i>. Fallback рендерится только когда слот не был вызван (или вызван с пустым контентом).",mistakes:[{title:"Передавать в слот разметку, зависящую от внутренних данных ребёнка",text:"Слот компилируется в контексте потребителя — там нет переменных ребёнка. Пытаться обратиться к его локальному состоянию внутри слота нельзя.",code:`<!-- ❌ itemName не существует в scope родителя -->
<Panel>{{ itemName }}</Panel>`,fix:`<!-- ✅ используйте scoped slot (следующая тема) -->
<Panel v-slot="{ item }">{{ item.name }}</Panel>`},{title:"Делать слоты вместо props без нужды",text:"Когда ребёнку нужно только значение (а не разметка), слот избыточен: он добавляет scope, ломает типизацию и не поддаётся рантайм-валидации.",code:"<Badge><span>{{ text }}</span></Badge>  <!-- ❌ ради одного значения -->",fix:'<Badge :text="text" />  <!-- ✅ props для данных, слоты для разметки -->'},{title:"Fallback со сложной разметкой «на всякий случай»",text:"Если в компоненте лежит тяжёлый fallback, его рендерят даже ветки, где он не нужен. Держите fallback коротким или пустым."}],nuances:["Слоты по умолчанию доступны в шаблоне как <code>$slots.default</code> — вручную через <code>useSlots()</code>.","Именованный слот можно вызвать и без <code>&lt;template&gt;</code>: <code>&lt;div #header&gt;</code> — если содержимое одно.","<b>Динамические имена слотов</b> поддержаны: <code>&lt;template #[name]&gt;</code> — удобно для tab-панелей.","Vue <b>не валидирует</b> обязательность слотов: отсутствие <code>#footer</code> — это не ошибка, а пустой регион.","Слоты участвуют в <b>оптимизации ререндеров</b>: если содержимое слота изменилось, Vue перерисует и ребёнка, даже если его props те же."],bestPractices:["Слоты — для <b>структуры/разметки</b>, props — для <b>данных</b>. Перепутали — получили компонент, который невозможно типизировать.","Именуйте слоты по ролям (<code>header</code>, <code>actions</code>, <code>empty</code>), а не по содержимому (<code>left</code>, <code>block2</code>).","Давайте fallback осмысленный — тогда пример использования читается прямо из объявления компонента.","Для контента, который обязан быть (не опционален), проверяйте <code>$slots.x</code> в setup и ведите себя иначе."],whenToUse:"<strong>Слоты</strong> — выбор, когда компонент задаёт каркас (модалка, таблица, карточка, page-layout), а содержимое варьируется от вызывающего места. Если вы пишете компонент, который получает данные и сам их рисует — вам нужны props, а не слот.",alternative:{title:"Проще: render-prop или просто разметка",text:"Для одного региона контента вместо именованного слота можно вернуть разметку просто children. А когда слот нужен только ради данных — посмотрите в сторону <code>defineModel</code> или обычных props.",code:`<Badge>{{ text }}</Badge>
<!-- то же самое, если badge статичен: -->
<Badge :text="text" />`},advanced:{title:"Проверка и оборачивание слотов",text:"Внутри setup слоты доступны через <code>useSlots()</code> — можно программно проверить наличие, обернуть содержимое (например, добавить Transition) или построить render-функцию, которая дёргает слот с нужным scope.",code:`const slots = useSlots()
if (!slots.default) return h('div', 'пусто')

// обернуть каждый vnode слота
return h('div', { class: 'wrap' }, slots.default?.())`}}},bf=Object.freeze(Object.defineProperty({__proto__:null,default:vf},Symbol.toStringTag,{value:"Module"})),gf=`<script setup lang="ts">
import { ref, computed } from 'vue'
import UserTable from './UserTable.vue'

interface User {
  id: number
  name: string
  score: number
}

const users = ref<User[]>([
  { id: 3, name: 'Мария', score: 88 },
  { id: 1, name: 'Иван', score: 45 },
  { id: 2, name: 'Ольга', score: 71 },
])

const sortByScore = ref(false)

const sorted = computed(() =>
  sortByScore.value ? [...users.value].sort((a, b) => b.score - a.score) : users.value,
)

function inc(id: number) {
  const u = users.value.find((x) => x.id === id)
  if (u) u.score += 5
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="sortByScore = !sortByScore">
        сортировка: {{ sortByScore ? 'по score' : 'по исходному порядку' }}
      </button>
      <span class="muted">Scoped slot отдаёт строке данные — рисует её потребитель</span>
    </div>

    <div class="card">
      <UserTable :users="sorted" @inc="inc">
        <!-- Scoped slot: получаем item из дочерней таблицы и рендерим сами -->
        <template #row="{ item, index }">
          <div class="row row--between" style="padding: 6px 0">
            <span>#{{ index + 1 }} — <b>{{ item.name }}</b></span>
            <span class="row">
              <span class="tag" :class="item.score > 70 ? 'ok' : 'warn'">score: {{ item.score }}</span>
              <button class="btn small" @click="inc(item.id)">+5</button>
            </span>
          </div>
        </template>
      </UserTable>
    </div>
  </div>
</template>
`,hf=`<script setup lang="ts">
interface User {
  id: number
  name: string
  score: number
}

const props = defineProps<{
  users: User[]
}>()

// Скоуп слота — то, что таблица отдаёт наружу:
// #{row} получает { item, index } (см. Demo.vue)
<\/script>

<template>
  <div class="table-wrap">
    <div class="row row--between" style="padding-bottom: 8px; border-bottom: 1px solid var(--border)">
      <span class="label">UserTable (не знает, как рисовать строку)</span>
      <span class="label">{{ props.users.length }} rows</span>
    </div>

    <!-- Каждую строку рендерит потребитель, данные — из скоупа слота -->
    <div v-for="(item, index) in props.users" :key="item.id" class="row-item">
      <slot name="row" :item="item" :index="index">
        {{ index + 1 }}. {{ item.name }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.row-item {
  padding: 8px 0;
  border-bottom: 1px dashed var(--border);
}
.row-item:last-child {
  border-bottom: none;
}
</style>
`,yf=`// ============ UserTable.vue (владелец данных строки) ============
${hf}

// ============ Demo.vue (владелец отображения строки) ============
${gf}`,xf={title:"Scoped slots",summary:"Дочерний компонент отдаёт данные наружу — отрисовку выбирает потребитель.",demo:()=>F(()=>import("./Demo-JR3q9Pan.js"),__vite__mapDeps([5,1,6])),code:yf,content:{intro:"<b>Scoped slot</b> — слот, который <i>получает</i> данные от ребёнка. Ребёнок владеет логикой (список, строка, окно), а потребитель решает, как это выглядит. Это главный паттерн для переиспользуемых контейнеров: таблица, карусель, tree-view — данные и поведение свои, разметка — у каждого вызывающего.",howItWorks:'UserTable перебирает строки и вызывает слот <code>#row</code>, передавая <code>{ item, index }</code> — это и есть <b>скоуп</b>. В Demo.vue содержимое <code>&lt;template #row="{ item, index }"&gt;</code> деструктурируется, и код слота выполняется в контексте <i>родителя</i>: там доступны его методы (<code>inc</code>), его computed и его стили. Ребёнок не видит эту разметку — он видит только возвращённые VNodes.',mistakes:[{title:"Смешать контексты: пытаться вызвать метод ребёнка из слота",text:"Внутри слота нет переменных дочернего компонента — его методы, состояние и emit-функции недоступны. Слот — это всегда контекст потребителя.",code:`<!-- ❌ sort() живёт в UserTable -->
<template #row>{{ sort(item) }}</template>`,fix:`<!-- ✅ ребёнок отдаёт данные + событие -->
<UserTable :users="list" @sort="onSort">
  <template #row="{ item }">{{ item.name }}</template>`},{title:"Рендерить весь список внутри слота по одному элементу",text:"Если строка вызывается на каждый элемент, но внутри слота происходит перебор второго списка — получается O(n²) и ломается keying. Слот должен описывать один элемент.",code:'<template #row> <div v-for="u in all">…</div> </template>'},{title:"Передавать в слот больше данных, чем нужно",text:"Скоуп — это контракт. Передача целых объектов с лишними полями делает любое изменение модели болезненным для всех потребителей."}],nuances:["Scoped slot можно вызвать и <b>без явного <code>v-slot</code></b>: содержимое дочерних элементов становится дефолтным слотом со скопом — но тогда деструктурировать нечего.","Скоуп доступен <b>только внутри <code>&lt;template&gt;</code></b> с v-slot: пробросить его дальше обычным children нельзя.","<code>v-slot</code> ставится только на <code>&lt;template&gt;</code> или компонент, у которого один слот по умолчанию.","Переданные в слот значения <b>оборачиваются в функции-геттеры</b>: Vue отдаёт актуальное значение в момент вызова, а не копию на момент рендера.","Vue <b>не проверяет</b> имена ключей скоупа — опечатка молча даст undefined, поэтому для сложных скоупов вводите типы."],bestPractices:["Передавайте в скоуп <b>минимум данных + события</b>, необходимые для отрисовки одного элемента.","Деструктурируйте скоуп в шаблоне (<code>{ item, index }</code>) — код читается как объявление интерфейса слота.","Комбинируйте: контейнер рендерит каркас и события (загрузка, пагинация), scoped slot отдаёт только строку.","Для public-библиотечных компонентов описывайте скоуп типом и показывайте его в доках — это их настоящий API."],whenToUse:"<strong>Scoped slot</strong> — когда компонент делает «половину работы»: он владеет данными, состоянием, сортировкой или виртуализацией, но отдаёт вам право решать, как выглядит элемент. Если ребёнку нечего отдавать — обычный слот или props.",alternative:{title:"Проще: рендер-проп или обычные children",text:"Если потребитель отдаёт лишь статичную разметку — хватит обычного слота. Если наоборот, нужно только значение — props. Scoped slot появляется, когда есть и данные, и свобода отрисовки.",code:`<Badge>{{ text }}</Badge>        <!-- контент -->
<Badge :text="text" />          <!-- значение -->
<Table v-slot="{ row }">…</Table> <!-- данные + рендер -->`},advanced:{title:"Типизированный скоуп и dynamic slots",text:"Скоуп можно типизировать: дочерний компонент экспортирует интерфейс, потребитель деструктурирует его по типу. Динамические имена слотов (<code>#[name]</code>) позволяют строить generic-контейнеры вроде «любой renderer для любого поля».",code:`// тип скоупа — часть API
export interface CellScope<T> {
  row: T
  column: keyof T
  value: T[keyof T]
}

// потребитель
<DataTable :rows="rows" v-slot="scope">
  {{ scope.row[scope.column] }}
</DataTable>`}}},wf=Object.freeze(Object.defineProperty({__proto__:null,default:xf},Symbol.toStringTag,{value:"Module"})),_f=`<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterPanel from './FilterPanel.vue'

const query = ref('')
const selected = ref<string[]>([])

const allTags = ['vue', 'nuxt', 'pinia', 'router', 'vite']

const result = computed(() =>
  allTags.filter(
    (t) =>
      t.includes(query.value.toLowerCase()) &&
      (selected.value.length === 0 || selected.value.includes(t)),
  ),
)

function toggleTag(tag: string) {
  selected.value = selected.value.includes(tag)
    ? selected.value.filter((t) => t !== tag)
    : [...selected.value, tag]
}
<\/script>

<template>
  <div class="stack">
    <!-- Родитель: состояние + данные; ребёнок: только отображение и события -->
    <FilterPanel :query="query" :selected="selected" :tags="allTags" @update:query="query = $event" @toggle="toggleTag" @clear="selected = []" />

    <div class="card">
      <div class="label" style="margin-bottom: 8px">Результат (computed от state)</div>
      <div class="row">
        <span v-for="t in result" :key="t" class="tag ok">{{ t }}</span>
        <span v-if="!result.length" class="muted">ничего не найдено</span>
      </div>
    </div>
  </div>
</template>
`,Sf=`<script setup lang="ts">
// Presentational-компонент: только props и события, никакого состояния
defineProps<{
  query: string
  selected: string[]
  tags: string[]
}>()

const emit = defineEmits<{
  'update:query': [value: string]
  toggle: [tag: string]
  clear: []
}>()
<\/script>

<template>
  <div class="card">
    <div class="row">
      <input
        class="input"
        :value="query"
        placeholder="Поиск тега…"
        style="flex: 1"
        @input="emit('update:query', ($event.target as HTMLInputElement).value)"
      />
      <button class="btn small" @click="emit('clear')">сбросить</button>
    </div>
    <div class="row" style="margin-top: 10px">
      <button
        v-for="t in tags"
        :key="t"
        class="btn small"
        :class="{ primary: selected.includes(t) }"
        @click="emit('toggle', t)"
      >
        {{ t }}
      </button>
    </div>
  </div>
</template>
`,kf=`// ============ Demo.vue (container: state + logic) ============
${_f}

// ============ FilterPanel.vue (presentational: props + events only) ============
${Sf}`,Tf={title:"Композиция компонентов",summary:"Container/presentational: где держать состояние, а где только рисовать.",demo:()=>F(()=>import("./Demo-DdZjIzpp.js"),[]),code:kf,content:{intro:"Композиция — это сборка интерфейса из мелких компонентов с чёткими ролями. Классический расклад: <b>container</b> владеет состоянием, данными и логикой, а <b>presentational</b> получает props и события и только рисует. Такой ребёнок становится «чистой функцией от входа к картинке» — его легко тестировать, переиспользовать и менять без побочных эффектов.",howItWorks:"Demo.vue — контейнер: здесь живут query, selected и computed result. FilterPanel ничего не знает о фильтрации: он получает строку, теги и выделенное, а обратно шлёт события update:query/toggle/clear. Благодаря этому логика фильтрации существует в одном месте, а панель можно перенести в другой экран вместе с её разметкой, не унося с собой бизнес-правил.",mistakes:[{title:"Смешать состояние и отображение в одном файле",text:"Когда компонент и фильтрует, и рисует, и ходит в API, любое изменение UI требует трогать логику, а тест приходится писать через всю стопку.",code:`// ❌ один файл делает всё
const items = ref([])
async function load() { … }
function validate() { … }
function renderRow() { … }`,fix:`// ✅ слои разведены
useItems()        // данные
<ItemList />      // отображение
<FilterPanel />   // ввод`},{title:"Разбивать на компоненты «на будущее»",text:"Абстракция без второго использования стоит дорого: лишний слой props/events, лишний файл, лишний прыжок при чтении. Правило «три копии до рефакторинга» работает.",code:`// ❌ вынесен ради одного места использования
<Wrapper><Text>Привет</Text></Wrapper>`,fix:"<p>Привет</p> // ✅ до появления второго использования"},{title:"Тянуть контейнер вниз через props ради «универсальности»",text:"Когда presentational-компонент получает 8 пропсов, из которых 5 — внутренности контейнера, граница размыта настолько, что проще было бы оставить один файл."}],nuances:['<b>Наследование атрибутов</b>: у presentational-компонента корневой элемент поглощает class/style/$attrs — через <code>v-bind="$attrs"</code> можно сделать прозрачную обёртку.',"Дочерний компонент <b>не ререндерится</b>, если его props не изменились — мелкие presentational-компоненты почти бесплатны благодаря мемоизации vnode.","События типа <code>update:query</code> позволяют использовать дочерний ввод прямо в <code>v-model:query</code>.","Композиция не отменяет <b>общий state</b>: если двум контейнерам нужно одно и то же, поднимите состояние выше или вынесите в composable/store.","Разбиение по слоям (UI vs business) — про архитектуру приложения, а не про один файл: смотрите раздел «Архитектурные паттерны»."],bestPractices:["Сначала пиши «всё в одном», потом выделяй <b>по реальной боли</b>, а не по воображаемой.","Граница компонента = граница ответственности: если не можешь назвать его роль одной фразой — он ещё не готов к выделению.","Держи presentational-компоненты <b>без асинхронных запросов</b>: данные приходят через props, события уходят вверх.","Общий визуальный примитив (Button, Input) выноси в shared-слой, а feature-компоненты — в свои фичи."],whenToUse:"<strong>Container/presentational</strong> оправдан, когда UI переиспользуется (десктоп/мобиль, светлая/тёмная тема, админка vs клиент), когда над одним экраном работают несколько человек или когда логику нужно покрыть тестами без монтирования DOM.",alternative:{title:"Проще: всё в одном компоненте",text:"Для коротких экранов, которые нигде не используются, монолит из state + шаблона читается быстрее, чем пять файлов с тонкими контрактами. Композиция появляется вслед за повторением.",code:`<script setup>
const q = ref('')
const list = computed(() => items.value.filter(...))
<\/script>

<template>
  <input v-model="q" />
  <Item v-for="i in list" :key="i.id" v-bind="i" />
</template>`},advanced:{title:"Headless-компоненты как крайность композиции",text:"Ультимативный вариант разведения: библиотека отдаёт только поведение (состояние, обработчики, aria-атрибуты), а разметка целиком в слоте потребителя. Так делают Radix, Headless UI, TanStack Table.",code:`const { isOpen, toggle, panelProps } = useDisclosure()

<Dropdown v-slot="{ open }">
  <button v-bind="triggerProps" @click="toggle">Меню</button>
  <ul v-if="open" v-bind="panelProps">…</ul>
</Dropdown>`}}},Rf=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),Cf=`<script setup lang="ts">
import { ref } from 'vue'

type State = 'empty' | 'loading' | 'error' | 'ready'

const state = ref<State>('ready')
const toggleClicks = ref(0)
const demoInput = ref('')

// Состояние внутри элементов, скрытых через v-show, сохраняется:
// узел остаётся в DOM, меняется только display.
// Через v-if узел уничтожается — состояние теряется при показе заново.
function forceToggle() {
  toggleClicks.value++
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <select v-model="state" class="select">
        <option value="empty">empty</option>
        <option value="loading">loading</option>
        <option value="error">error</option>
        <option value="ready">ready</option>
      </select>
      <span class="muted">v-if / v-else-if / v-else-if / v-else</span>
    </div>

    <!-- Условный рендер через v-if: в DOM ровно одна ветка -->
    <div class="card">
      <p v-if="state === 'empty'" style="margin: 0">📭 Список пуст</p>
      <p v-else-if="state === 'loading'" style="margin: 0">⏳ Загрузка…</p>
      <p v-else-if="state === 'error'" style="margin: 0; color: var(--danger)">⚠️ Ошибка сети</p>
      <p v-else style="margin: 0">✅ Данные готовы</p>
    </div>

    <!-- v-show: узел всегда в DOM, меняется только display -->
    <div class="card">
      <div class="row row--between">
        <span>v-show узел:</span>
        <span class="tag" :class="toggleClicks % 2 ? 'ok' : 'warn'">
          переключений: {{ toggleClicks }}
        </span>
      </div>
      <input v-show="toggleClicks % 2 === 0" v-model="demoInput" class="input" placeholder="введённое сохраняется при v-show" style="margin-top: 8px" />
      <button class="btn small" style="margin-top: 8px" @click="forceToggle">
        переключить v-show
      </button>
      <p class="muted" style="margin: 8px 0 0">
        Введите текст, переключите несколько раз — текст остался: узел не уничтожался.
        Тот же тест с v-if стёр бы ввод.
      </p>
    </div>
  </div>
</template>
`,Pf={title:"Условный рендер: v-if / v-show",summary:"Когда узел существует в DOM, а когда уничтожается вместе со своим состоянием.",demo:()=>F(()=>import("./Demo-CJYlvbZs.js"),[]),code:Cf,content:{intro:"<b>v-if</b> физически добавляет или удаляет узел из DOM — вместе с ним умирают состояние, фокус, введённые данные и хуки компонента. <b>v-show</b> просто переключает <code>display: none</code>: узел остаётся в дереве. <b>v-else-if / v-else</b> идут сразу после v-if без пробелов и текста между ними.",howItWorks:"Компилятор превращает цепочку v-if/v-else-if в ветвление render-функции: на каждый рендер выполняется ровно одна ветка. v-show же всегда рендерит узел, а в patch обновляет свойство style.display. Поэтому переключение v-if дороже (создание/уничтожение поддерева + вызов хуков), а постоянное присутствие в DOM v-show даёт накладные расходы на layout и память при большом числе скрытых узлов.",mistakes:[{title:"Использовать v-if для элементов, которые часто переключаются",text:"Каждое скрытие через v-if размонтирует компонент: слушатели, таймеры, анимации, введённый текст — всё уходит, а при показе создается заново. При частых переключениях это ещё и заметная работа для VDOM.",code:'<div v-if="open">…</div>  // ❌ open мигает каждую секунду',fix:'<div v-show="open">…</div>  // ✅ узел жив, переключение дёшево'},{title:"Скрывать дорогую ветку через v-show",text:"Модалка на 500 строк, тяжёлая таблица или компонент с WebSocket-подпиской, оставленные в DOM «на всякий случай», продолжают есть память и участвовать в layout.",code:`<HeavyChart v-show="tab === 'chart'" /> <!-- ❌ всегда в DOM -->`,fix:`<HeavyChart v-if="tab === 'chart'" /> <!-- ✅ живёт только активная вкладка -->`},{title:"Забыть про else-if без v-if",text:"<code>v-else-if</code> без предыдущего <code>v-if</code> на соседнем элементе — ошибка компиляции («v-else/v-else-if has no adjacent v-if»).",code:'<p v-else-if="x">…</p> <!-- ❌ нет v-if перед ним -->'}],nuances:["<b>Ключ должен быть на элементе сразу после v-if/v-else</b>: <code>&lt;div v-if&gt;</code>, иначе Vue перепутает соседей при переключении.","v-if имеет <b>высший приоритет</b> среди директив одного узла — его нельзя «погасить» v-for на том же элементе.",'Компонент за <code>v-if="false"</code> <b>не создаётся вообще</b>: его setup не вызывается, lazy-импорт не загружается.',"<b>v-else-if и v-else не срабатывают</b>, если предыдущий v-if был на другом элементе дерева (даже соседнем) — они должны идти подряд.","<code>v-show</code> не работает с <code>&lt;template&gt;</code> и компонентами без корневого элемента — ему нужен конкретный узел."],bestPractices:["Часто переключаешь — <code>v-show</code>. Тяжёлое или редкое — <code>v-if</code>.","Для длинных цепочек состояний (empty/loading/error/ready) используй один <code>&lt;template v-if&gt;</code>-цепочку, чтобы не плодить вложенные div.","Выносите условия в переменные с говорящими именами: <code>isLoading</code>, <code>hasError</code> вместо <code>a &amp;&amp; !b</code> в шаблоне.","Для «ничего не найдено» используйте <code>v-if</code>, а не пустой <code>v-show</code> — пустой узел не нужен в DOM."],whenToUse:"<strong>v-if</strong> — по умолчанию для условного существования (компоненты, тяжёлые ветки, редкие состояния). <strong>v-show</strong> — когда переключение происходит часто и узел дешёвый в постоянном присутствии: табы, раскрывающиеся панели, фильтры.",alternative:{title:"Условный класс вместо условного узла",text:"Если меняется только оформление, а структура одна — не плодите ветки: <code>:class</code> или <code>:style</code> решают задачу без создания/уничтожения DOM.",code:'<div :class="{ muted: !active, danger: hasError }">…</div>'},advanced:{title:"Динамические компоненты и трюки со скрытием",text:"Когда за условием стоит целый компонент, используйте <code>&lt;component :is&gt;</code> в паре с <code>&lt;KeepAlive&gt;</code>: переключение вкладок становится дешёвым (состояние живёт), а ленивые компоненты подгружаются только при первом показе — детали в темах «Динамические компоненты» и «Async components».",code:`<KeepAlive>
  <component :is="activeTab" />
</KeepAlive>`}}},Ef=Object.freeze(Object.defineProperty({__proto__:null,default:Pf},Symbol.toStringTag,{value:"Module"})),Of=`<script setup lang="ts">
import { ref, computed } from 'vue'

interface Item {
  id: number
  label: string
  typed: string
}

let nextId = 4
const useIndexKey = ref(false)

const items = ref<Item[]>([
  { id: 1, label: 'Первый', typed: '' },
  { id: 2, label: 'Второй', typed: '' },
  { id: 3, label: 'Третий', typed: '' },
])

// key = id → Vue связывает vnode с конкретным элементом
// key = index → vnode связывается с позицией: при удалении сверху
// введённый текст «прилипает» к другой строке
const keys = computed(() =>
  items.value.map((it, i) => (useIndexKey.value ? String(i) : String(it.id))),
)

function addTop() {
  items.value = [
    { id: nextId++, label: \`Новый #\${nextId - 1}\`, typed: '' },
    ...items.value,
  ]
}

function removeTop() {
  items.value = items.value.slice(1)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="addTop">➕ добавить в начало</button>
      <button class="btn danger" @click="removeTop">➖ удалить первый</button>
      <button class="btn" :class="{ primary: useIndexKey }" @click="useIndexKey = !useIndexKey">
        key: {{ useIndexKey ? 'index (❌)' : 'id (✅)' }}
      </button>
    </div>

    <p class="muted">
      Введите что-нибудь в первые поля, затем добавьте/удалите элемент сверху.
      С ключом <b>index</b> текст «переезжает» на другую строку — Vue считает позицию тем же элементом.
    </p>

    <div class="stack" style="gap: 8px">
      <div v-for="(item, i) in items" :key="keys[i]" class="card">
        <div class="row row--between">
          <b>{{ item.label }}</b>
          <span class="tag" :class="useIndexKey ? 'bad' : 'ok'">
            key = {{ useIndexKey ? i : item.id }}
          </span>
        </div>
        <input v-model="item.typed" class="input" placeholder="введённый текст…" style="margin-top: 8px" />
      </div>
    </div>
  </div>
</template>
`,Mf={title:"Списки и ключи",summary:"v-for, :key, почему index в качестве ключа ломает состояние и как Vue сопоставляет элементы.",demo:()=>F(()=>import("./Demo-BDJCAK9X.js"),[]),code:Of,content:{intro:"Директива <b>v-for</b> рендерит массив данных, а атрибут <b>:key</b> сообщает Vue, какой vnode какой DOM-узел соответствует. Ключ — это не «оптимизация», а правило идентичности: если два элемента массива меняются местами, Vue по ключу переносит узел, а не пересоздаёт его. В демо введите текст в поля и нажмите «добавить в начало» — с ключом <b>id</b> текст остаётся у своей строки, а с ключом <b>index</b> «переезжает» на другую.",howItWorks:"Демо держит массив <b>items</b> с полями id, label и typed (введённый текст, живущий в состоянии, а не в DOM). Кнопки вставляют/удаляют элемент в начало массива, а переключатель меняет источник ключей: String(it.id) или String(i). Внутри патчинга Vue сравнивает детей списочного узла по типу и ключу: если vnode с таким ключом уже существует, узел переиспользуется (и <b>input</b> сохраняет значение), если нет — создаётся заново. При ключе-индексе первой позицией всегда «владеет» ключ «0», поэтому при вставке сверху старому элементу 0 приписывается новый объект, а его предыдущий владелец получает данные соседа — отсюда и «прыжок» текста между полями.",mistakes:[{title:"Использовать index как key для изменяемого списка",text:"При вставке/удалении/сортировке элементы смещаются, индексы «переезжают», и Vue переиспользует DOM и состояние не по назначению: фокус, введённый текст, checkbox и внутреннее состояние компонентов оказываются у чужих данных.",code:`<li v-for="(item, i) in todos" :key="i">{{ item.text }}</li>
<!-- ❌ вставка в начало или сортировка ломает соответствие -->`,fix:`<li v-for="item in todos" :key="item.id">{{ item.text }}</li>
<!-- ✅ ключ = стабильный id из данных -->`,fixText:"Индекс допустим только когда список статичен (не мутирует) или рендер без состояния, где порядок никогда не меняется."},{title:"Присвоить index в key после map/filter по объектам",text:"Преобразование массива с потерей исходного id заставляет вернуться к индексу. Сохраняйте объект целиком, чтобы id доехал до шаблона.",code:`const names = users.map(u => u.name)
// ❌ name — строка, идентичности больше нет
<li v-for="(name, i) in names" :key="i">`,fix:`const cards = computed(() =>
  users.value.map(u => ({ ...u, name: displayName(u) }))
)
<!-- ✅ id сохранён при трансформации -->
<li v-for="card in cards" :key="card.id">`},{title:"Дублирующиеся ключи",text:"Ключи должны быть уникальны среди «братьев». Дубликаты дают непредсказуемый патчинг и предупреждение в консоли.",code:`items = [{ id: 1 }, { id: 1 }]
<!-- ❌ оба vnode получают key=1 -->`,fix:`// ✅ составной ключ из нескольких полей
:key="item.id + '-' + item.variant"`}],nuances:["<b>key участвует в патчинге наравне с тегом</b>: два vnode считаются «одними и теми же» только если совпадают и тип, и ключ. Разный key = полная замена узла, включая пересоздание компонента.",'Для <b>компонентов</b> смена ключа означает уничтожение и монтирование заново: локальное состояние сбрасывается. Иногда это используют намеренно: <code>:key="resetCounter"</code> как «кнопка сброса» формы.',"<b>v-for по объекту</b> идёт в порядке Object.keys (числовые ключи — по возрастанию). Порядок объектов в JS не гарантирован концептуально — не стройте на нём логику.","Один v-for + v-if на том же элементе: <b>v-if в Vue 3 имеет больший приоритет</b>, поэтому item внутри условия недоступен (в Vue 2 было наоборот). Фильтруйте computed-ом.","<code>&lt;template v-for&gt;</code> нужен, когда на итерацию приходится несколько корневых узлов; ключ тогда вешается на сам template.","V-for умеет ходить по строке, числу (1..n) и Iterable; для Map/Set ключами станут значения в порядке итерации."],bestPractices:["Ключ — <b>стабильный идентификатор из данных</b> (id, uid, slug), а не производная позиция.","Никогда не используйте <b>Math.random()</b> или Date.now() в ключе: ключ меняется каждый рендер → узел пересоздаётся полностью, теряя состояние и убивая производительность.","Не полагайтесь на <b>побочный эффект</b> несоответствия ключей: если компоненту важно «пересоздаться при изменении», сделайте это явным ключом, а не случайным индексом.","Для больших списков выносите строку в <b>&lt;template v-for&gt;</b> и держите итерации «плоскими» — патчинг почти не отличается, а разметка читается легче.","Мутируйте массивы методами с реактивностью (push, splice, splice-присваивание элемента по индексу через items.value[i] = …) — в Vue 3 прокси отслеживает и индексы."],whenToUse:"<strong>Списки и ключи</strong> — базовый инструмент любого шаблона: каталоги, таблицы, чаты, меню, канбан-колонки. Правило простое: v-for всегда со стабильным ключом; без ключа Vue выдаёт предупреждение, а с индексом состояние «перескакивает» между элементами. Отдельный приём — смена ключа для принудительного пересоздания компонента (сброс локального состояния формы).",alternative:{title:"Фильтрация/сортировка через computed вместо v-if рядом с v-for",text:"Не смешивайте фильтрацию с рендером: вычисляемый список чище, кешируется и корректно типизирован.",code:`const visible = computed(() =>
  items.value.filter(i => i.active).sort((a, b) => a.order - b.order)
)
<!-- <li v-for="i in visible" :key="i.id"> -->`},advanced:{title:"Списки и TransitionGroup",text:"Для анимации перестановок в списках используйте <code>&lt;TransitionGroup&gt;</code> — он основан на тех же ключах и умеет FLIP-анимации перемещений (класс .move).",code:`<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</TransitionGroup>

<style>
.list-move { transition: transform .3s; }
</style>`}}},If=Object.freeze(Object.defineProperty({__proto__:null,default:Mf},Symbol.toStringTag,{value:"Module"})),Af=`<script setup lang="ts">
import { ref } from 'vue'

const log = ref<string[]>([])
const count = ref(0)
let stop = false

function add(entry: string) {
  log.value.unshift(\`[\${new Date().toLocaleTimeString()}] \${entry}\`)
  if (log.value.length > 8) log.value.pop()
}

function onClick(n: number, event: MouseEvent) {
  if (stop) return
  count.value += n
  add(\`click ×\${n} → count=\${count.value}\`)
}

function onKey(e: KeyboardEvent) {
  add(\`keydown «\${e.key}» → submit имитирован\`)
}

function onInnerClick(e: MouseEvent) {
  // .stop не даёт событию дойти до внешнего обработчика
  add(\`внутренний клик (stop) — внешнего вызова не было: \${e.clientX}\`)
}

function onFormClick() {
  add('внешний контейнер получил click — значит .stop не сработал')
}

function onceAction() {
  add('@click.once: обработчик удалён после первого вызова')
}

function submitLike() {
  add('.prevent: сабмит отменён, вызвана своя логика')
}

function toggleStop() {
  stop = !stop
  add(stop ? 'кнопка заблокирована (не через disabled, а проверкой)' : 'разблокирована')
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="onClick(1, $event)">+1</button>
      <button class="btn" @click="onClick(5, $event)">+5</button>
      <button class="btn" @click="count = 0; add('reset')">сброс</button>
      <button class="btn" @click.once="onceAction">once-кнопка</button>
      <button class="btn" @click="toggleStop">{{ stop ? 'разблокировать' : 'заблокировать' }}</button>
    </div>

    <div class="row">
      <input class="input" placeholder="нажмите Enter здесь…" @keydown.enter="onKey" />
      <button class="btn small" @click.prevent="submitLike">submit с .prevent</button>
    </div>

    <div
      class="card"
      style="cursor: pointer"
      @click="onFormClick"
    >
      <div class="row row--between">
        <b>Внешний контейнер (слушает click)</b>
        <button class="btn small danger" @click.stop="onInnerClick($event)">
          внутренняя кнопка (.stop)
        </button>
      </div>
      <p class="muted" style="margin: 6px 0 0">Клик по фону карточки логируется, клик по кнопке — нет.</p>
    </div>

    <div class="row row--between">
      <span class="stat">count: <b>{{ count }}</b></span>
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст — нажмите кнопки выше</div>
    </div>
  </div>
</template>
`,Df={title:"Обработка событий",summary:"@click, модификаторы (.stop/.prevent/.once), payload события и inline-выражения.",demo:()=>F(()=>import("./Demo-CqfMIT7E.js"),[]),code:Af,content:{intro:"Синтаксис <b>v-on</b> (короткая форма <b>@</b>) привязывает обработчики к DOM-событиям: <code>@click</code>, <code>@input</code>, <code>@keydown.enter</code>. Значением может быть метод, инлайн-выражение или несколько обработчиков массивом. Важная часть — <b>модификаторы</b>: <code>.stop</code>, <code>.prevent</code>, <code>.once</code>, <code>.self</code>, клавиатурные <code>.enter/.esc/.tab</code> и системные <code>.ctrl/.alt/.meta</code>. В демо видно, как payload (число, объект события) передаётся в метод и как <code>.stop</code> разрывает всплытие.",howItWorks:`Обработчик — обычная функция. Без аргументов Vue передаёт в неё само событие (<code>@click="onClick"</code>), поэтому при необходимости получить и данные, и событие используют специальную переменную <b>$event</b>: <code>@click="onClick(5, $event)"</code>. Инлайн-выражения (<code>@click="count = 0"</code>) компилируются в функцию, и в них доступны всё из <code>&lt;script setup&gt;</code>. Модификаторы — это сгенерированные обёртки: <code>.stop</code> превращается в <code>e.stopPropagation()</code>, <code>.prevent</code> — в <code>e.preventDefault()</code>, <code>.enter</code> — в проверку <code>e.key === 'Enter'</code>. <code>.once</code> после первого вызова снимает обработчик.`,mistakes:[{title:"Вызывать метод вместо передачи ссылки",text:'Скобки в @click="onClick(5)" создают вызов немедленно — метод исполнится один раз при рендере, а не по клику. Для передачи аргументов используйте стрелочный стиль или $event.',code:`<button @click="onClick(5)">   <!-- ❌ выполняется при рендере -->
<button @click="onClick">        <!-- ✅ передана функция -->
<button @click="() => onClick(5)"> <!-- ✅ аргумент + ленивость -->
<button @click="onClick(5, $event)"> <!-- ✅ аргумент + событие -->`},{title:"Путать $event в разных типах обработчиков",text:"В нативных обработчиках $event — это MouseEvent/KeyboardEvent. В кастомных событиях компонентов $event — первый аргумент emit. Подмена типов при копипасте приводит к обращению к несуществующим полям.",code:`<!-- ❌ тут $event — emit-полезная нагрузка, не MouseEvent -->
<MyInput @update:model-value="text = $event.target.value" />`,fix:`<!-- ✅ v-model сам разрулит update:modelValue -->
<MyInput v-model="text" />`},{title:"Класть сложную логику в инлайн-выражение",text:"Инлайн-обработчик сложно тестировать и невозможно переиспользовать; длинные выражения в шаблоне — признак логики, которую нужно вынести в методы или composable.",code:`@click="cart.push(item); total += item.price; toast('ok')" <!-- ❌ -->`,fix:'@click="addItem(item)" <!-- ✅ -->'}],nuances:["Порядок модификаторов важен: <code>@click.prevent.self</code> блокирует <b>все</b> клики внутри, а <code>@click.self.prevent</code> — только клики по самому элементу.","<code>.passive</code> сообщает браузеру, что preventDefault вызван не будет — критично для <code>scroll/touchmove</code>: слушатель не блокирует прокрутку.","Клавиатурные модификаторы работают через <code>KeyboardEvent.key</code> в kebab-case: <code>@keyup.page-down</code>, <code>@keydown.arrow-down</code>.","Системные модификаторы (.ctrl/.meta/.shift) в macOS сопоставляйте с учётом <code>metaKey</code> — у пользователей Mac Cmd вместо Ctrl.","Точное совпадение модификаторов даёт <code>.exact</code>: <code>@click.ctrl.exact</code> сработает только при одном Ctrl, без других зажатых клавиш.",'Несколько обработчиков: <code>@click="[first, second]"</code> — оба вызываются по порядку.'],bestPractices:["Именуйте методы по действию (<b>addToCart</b>, <b>submitForm</b>), а не по событию (<b>onClick</b>) — код читается как сценарий.","Пишите <code>.prevent</code> вместо <code>e.preventDefault()</code> в теле обработчика: интент виден в шаблоне.","Не злоупотребляйте <code>.stop</code>: всплытие — штатный механизм, глушить его стоит только для реальной изоляции (модалки, drag-области).","Для one-shot действий (диплой, оплата) используйте <code>.once</code> или флаг busy, чтобы исключить дубли."],whenToUse:"<strong>Обработка событий</strong> — glue между DOM и состоянием. Нативные события — через @-обработчики; события <em>компонентов</em> — через defineEmits и слушатели на теге компонента. Если обработчиков на элементе становится больше 2–3 и появляется логика — сигнал вынести её в метод или composable.",alternative:{title:"Сигнатурные события через defineEmits",text:"Для переиспользуемых компонентов не полагайтесь на нативные события DOM — объявляйте собственные семантические события (submit, change), и родитель подписывается так же, как на нативные.",code:`const emit = defineEmits<{ change: [value: number] }>()
emit('change', 42)

<!-- родитель: <MyControl @change="onChange" /> -->`},advanced:{title:"Пузырение кастомных событий и v-on-объект",text:'Объектный синтаксис <code>v-on="{ mousedown: onDown, mouseup: onUp }"</code> вешает пачку слушателей сразу — удобно в headless-компонентах и для передачи сквозь props. Плюс все нераспознанные @-атрибуты попадают в $attrs и автоматически «проваливаются» на корневой элемент дочернего компонента.',code:`<!-- DemoInput.vue: слушатели с родителя попадут на <input> -->
<input v-bind="$attrs" />

<!-- родитель получает и focus, и blur без явных emits -->
<DemoInput @focus="..." @blur="..." />`}}},Vf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),Lf=`<script setup lang="ts">
import { ref, computed } from 'vue'

const text = ref('привет')
const nickname = ref('')
const synced = ref('двусторонняя')
const country = ref('')
const tags = ref<string[]>([])
const range = ref(20)
const notify = ref(true)
const log = ref<string[]>([])

function push(msg: string) {
  log.value.unshift(msg)
  if (log.value.length > 6) log.value.pop()
}

const normalized = computed(() => nickname.value.trim().toLowerCase())

function showState() {
  push(\`text=\${JSON.stringify(text.value)} nick=\${JSON.stringify(nickname.value)} country=\${country.value || '—'} tags=[\${tags.value.join(',')}] range=\${range.value} notify=\${notify.value}\`)
}

push('состояние синхронизируется в обе стороны')
<\/script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="stack">
        <label class="label">Текст (v-model → ref)</label>
        <input v-model="text" class="input" />
        <p class="muted mono">← ref: {{ JSON.stringify(text) }}</p>

        <label class="label">Модификатор .trim + .lazy</label>
        <input v-model.trim.lazy="nickname" class="input" placeholder="синхронизируется по blur" />
        <p class="muted mono">normalized: {{ JSON.stringify(normalized) }}</p>

        <label class="label">Модификатор .number</label>
        <input v-model.number="range" type="range" min="0" max="100" style="width: 100%" />
        <p class="muted mono">range: {{ range }} (typeof {{ typeof range }})</p>
      </div>

      <div class="stack">
        <label class="label">Textarea</label>
        <textarea v-model="synced" class="input" rows="2" />

        <label class="label">Select</label>
        <select v-model="country" class="select">
          <option value="" disabled>выберите страну…</option>
          <option value="ru">Россия</option>
          <option value="kz">Казахстан</option>
          <option value="de">Германия</option>
        </select>

        <span class="label">Checkbox-группа (один ref на массив)</span>
        <div class="row" style="gap: 12px">
          <label><input v-model="tags" type="checkbox" value="vue" /> vue</label>
          <label><input v-model="tags" type="checkbox" value="ts" /> ts</label>
          <label><input v-model="tags" type="checkbox" value="vite" /> vite</label>
        </div>

        <label><input v-model="notify" type="checkbox" /> уведомления: {{ notify }}</label>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="showState">показать состояние</button>
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
`,$f={title:"Двустороннее связывание: v-model",summary:"v-model на input/select/textarea/checkbox — сахар над value + update-событием; модификаторы .lazy/.number/.trim.",demo:()=>F(()=>import("./Demo-B0-5bWyi.js"),[]),code:Lf,content:{intro:"<b>v-model</b> — синтаксический сахар для двусторонней связи: на нативном <code>&lt;input&gt;</code> он раскрывается в <code>:value</code> + <code>@input</code>, на <code>checkbox/radio</code> — в <code>:checked</code> + <code>@change</code>, на <code>select</code> — в <code>:value</code> + <code>@change</code>. Направление «из DOM в состояние» выполняет событие, «из состояния в DOM» — пропс. В демо — текст, textarea, select, checkbox-группа и три модификатора: <code>.lazy</code> (синхронизация по change, а не input), <code>.number</code> (приведение к числу) и <code>.trim</code> (обрезка пробелов).",howItWorks:'Компилятор видит <code>v-model="text"</code> и генерирует пару привязок: значение состояния передаётся в элемент, а в обработчике события записывается обратно. У <code>input type="text"</code> событие — <code>input</code> (каждый символ), поэтому модификатор <code>.lazy</code> переключает его на <code>change</code>. Checkbox-группа с одним массивом в состоянии: Vue сам добавляет/убирает значения из массива по <code>value</code> чекбокса. На компонентах v-model раскрывается в проп <b>modelValue</b> и событие <b>update:modelValue</b> — ровно та же механика, но её объявляет сам компонент.',mistakes:[{title:"Ожидать, что v-model работает с не-реактивным значением",text:"v-model мутирует то, что ему передано. Если передать обычную переменную (не ref/не поле reactive), запись «успешно» произойдёт, но реакции и ререндера не будет — значение как будто «не обновляется».",code:`let name = ''
<input v-model="name" /> <!-- ❌ name не реактивен -->`,fix:`const name = ref('')
<input v-model="name" /> <!-- ✅ -->`},{title:"v-model на пропсе внутри компонента",text:'Пропсы мутировать нельзя, поэтому <code>v-model="props.title"</code> внутри дочернего компонента не работает и считается антипаттерном «мутации пропа».',code:`<!-- ❌ внутри Child.vue -->
<input v-model="title" />
defineProps<{ title: string }>()`,fix:`const model = defineModel<string>({ default: '' })
<input v-model="model" /> <!-- ✅ proxy-обёртка над props+emit -->`,fixText:"defineModel (Vue 3.4+) — самый короткий корректный вариант; до него писали computed с get/set."},{title:"Дублировать .number с number-полем ввода",text:'<code>input type="number"</code> всё равно возвращает строку в value. Без .number состояние получает строку, и арифметика складывает строки («1» + 2 = «12»).',code:'<input v-model="age" type="number" /> <!-- ❌ age = "42" -->',fix:'<input v-model.number="age" type="number" /> <!-- ✅ age = 42 -->'}],nuances:["<b>IME-составление</b> (китайский/японский ввод): v-model не обновляет состояние, пока идёт композиция текста — это сделано намеренно, чтобы не ломать ввод.","Модификаторы можно комбинировать: <code>v-model.trim.lazy</code>. Порядок значения не имеет, применяются все.","На нативных элементах <code>v-model</code> игнорирует начальное <code>value</code>/<code>checked</code> из разметки — источник истины только состояние.","В <code>select multiple</code> v-model работает с массивом значений.",'Собственный v-model компонента можно переименовать: <code>v-model:title="t"</code> → проп <code>title</code>, событие <code>update:title</code>; модификаторы приедут в проп <code>titleModifiers</code>.'],bestPractices:["По умолчанию — обычный v-model; <code>.lazy</code> включайте для тяжёлой валидации/поиска, где не нужна реакция на каждый символ.","Для числовых полей всегда <code>.number</code> и проверка NaN при пустой строке.","Не стройте «третье направление» из watch на v-model — если нужно реагировать на изменения, используйте computed или событие input напрямую.",'Для форм из многих полей используйте один реактивный объект: <code>const form = reactive({ name: "", age: 0 })</code> и <code>v-model="form.name"</code>.'],whenToUse:"<strong>v-model</strong> — стандарт для любого ввода: текст, числа, выбор, чекбоксы, слайдеры, а также собственные инпут-компоненты (через defineModel). Он не подходит, когда нужно обрабатывать каждый ввод как событие с побочным эффектом (автосохранение, аналитика) — тогда явные <code>:value</code> + <code>@input</code> дают полный контроль.",alternative:{title:"Явные value + input",text:"Когда нужно «перехватить» ввод (валидация, маска, дебаунс), разворачивайте сахар обратно — так видно каждую операцию.",code:`<input :value="query" @input="onInput" />

const query = ref('')
function onInput(e: Event) {
  const v = (e.target as HTMLInputElement).value
  query.value = v.toLowerCase()
}`},advanced:{title:"Собственный v-model с модификаторами",text:"Компонент может поддерживать свои модификаторы (capitalize, trim), читая объект <code>modelModifiers</code> из props, и применять трансформацию при emit.",code:`const [model, modifiers] = defineModel<string>({
  set(value) {
    if (modifiers.capitalize) return value.charAt(0).toUpperCase() + value.slice(1)
    return value
  },
})

<!-- родитель: <MyInput v-model.capitalize="name" /> -->`}}},Uf=Object.freeze(Object.defineProperty({__proto__:null,default:$f},Symbol.toStringTag,{value:"Module"})),Ff=`<script setup lang="ts">
import { ref } from 'vue'

// Компонент с несколькими v-model: имя и цена редактируются родителем
const name = ref('Сертификат')
const price = ref(100)
const enabled = ref(true)

function reset() {
  name.value = 'Сертификат'
  price.value = 100
  enabled.value = true
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>Родитель владеет состоянием</b>
        <span class="tag info">v-model:name / v-model:price / v-model:enabled</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">
        Дочерний компонент не хранит копию — он читает пропсы и эмитит update-события.
      </p>
    </div>

    <div class="grid-2">
      <div class="stack">
        <label class="label">Название (v-model:name)</label>
        <input v-model="name" class="input" />

        <label class="label">Цена (v-model:price + .number)</label>
        <input v-model.number="price" class="input" type="number" min="0" />
      </div>

      <div class="stack">
        <label class="label">Предпросмотр карточки товара (дочерний компонент)</label>
        <div class="card">
          <div class="row row--between">
            <b>{{ name || 'без названия' }}</b>
            <span class="tag" :class="enabled ? 'ok' : 'bad'">{{ enabled ? 'в продаже' : 'скрыт' }}</span>
          </div>
          <p class="mono muted" style="margin: 8px 0 0">
            {{ price }} ₽ · переключите чекбокс ниже
          </p>
        </div>

        <label><input v-model="enabled" type="checkbox" /> показывать в каталоге</label>
      </div>
    </div>

    <div class="row">
      <button class="btn" @click="reset">сбросить всё</button>
    </div>
    <p class="muted mono">
      name={{ JSON.stringify(name) }} · price={{ price }} · enabled={{ enabled }}
    </p>
  </div>
</template>
`,Nf=`<script setup lang="ts">
import { computed } from 'vue'

// Пропсы + события: полный «сахар», который разворачивает v-model:name
const props = defineProps<{
  name: string
  price: number
  enabled: boolean
}>()

const emit = defineEmits<{
  'update:name': [value: string]
  'update:price': [value: number]
  'update:enabled': [value: boolean]
}>()

// defineModel был бы короче, но здесь показан явный контракт:
// каждый аргумент = пара (проп, событие update:arg)
const nameProxy = computed({
  get: () => props.name,
  set: (v: string) => emit('update:name', v),
})
const priceProxy = computed({
  get: () => props.price,
  set: (v: number) => emit('update:price', v),
})
const enabledProxy = computed({
  get: () => props.enabled,
  set: (v: boolean) => emit('update:enabled', v),
})
<\/script>

<template>
  <div class="card">
    <b>{{ nameProxy || 'без названия' }}</b>
    <p class="mono muted" style="margin: 8px 0 0">{{ priceProxy }} ₽</p>
    <label style="margin-top: 8px; display: block">
      <input v-model="enabledProxy" type="checkbox" /> в продаже
    </label>
  </div>
</template>
`,jf=`// ============ Demo.vue (родитель) ============
${Ff}

// ============ ChildCard.vue (компонент с тремя v-model) ============
${Nf}`,Hf={title:"Несколько v-model на компоненте",summary:"v-model:name, v-model:price: один компонент — несколько двусторонних связей; defineModel против явного пропс+эмит.",demo:()=>F(()=>import("./Demo-DY_s94rF.js"),[]),code:jf,content:{intro:'Начиная с Vue 3 компонент может принимать <b>несколько v-model</b>: <code>v-model:name="n"</code>, <code>v-model:price="p"</code>. Каждый аргумент — независимая пара «проп <code>name</code> + событие <code>update:name</code>». Это идеальный контракт для <em>презентационных</em> компонентов форм: инпут ничего не хранит, а транслирует ввод наружу. В демо родитель владеет всеми тремя значениями, а карточка товара (дочерний компонент) — «глухая» обёртка над пропсами и событиями.',howItWorks:"В дочернем ChildCard контракт прописан явно: три пропса и три события <code>update:*</code>, а в шаблоне — computed-прокси с get/set, где сеттер эмитит событие. Именно этот шаблон и разворачивает компилятор из <code>v-model:enabled</code> на теге компонента. Современный способ — <b>defineModel</b>: <code>const name = defineModel&lt;string&gt;()</code> возвращает ref-подобный объект, чтение идёт из пропа, запись — автоматически через emit. В демо <code>ChildCard.vue</code> намеренно показывает старый явный стиль, чтобы была видна механика.",mistakes:[{title:"Копировать проп в локальный ref «для удобства»",text:"Локальная копия отвязывается от родителя: родитель меняет проп — копия молчит. Получается два источника истины и рассинхрон.",code:`const props = defineProps<{ name: string }>()
const local = ref(props.name) // ❌ замороженное значение на момент монтирования`,fix:`const name = defineModel<string>('name') // ✅ живая двусторонняя связь
// или computed({ get: () => props.name, set: v => emit('update:name', v) })`},{title:"Эмитить update: без слушателя на родителе",text:"v-model:price на теге обязателен: событие <code>update:price</code> без пары <code>v-model:price</code> или <code>@update:price</code> просто улетает в пустоту — значение «не сохраняется».",code:'<ChildCard :price="p" @update:name="n => ..." /> <!-- ❌ update:price никто не слушает -->',fix:'<ChildCard v-model:price="p" /> <!-- ✅ -->'},{title:"Путать регистр аргумента",text:"Аргумент v-model в шаблоне — camelCase-имя пропа: <code>v-model:modelValue</code> и <code>v-model:first-name</code> (DOM-шаблоны) пишутся по-разному; в SFC используйте camelCase и не смешивайте kebab/camel в одном проекте.",code:`<!-- ❌ разнобой: -->
<ChildCard v-model:first-name="f" v-model:lastName="l" />`,fix:`<!-- ✅ единый camelCase в SFC -->
<ChildCard v-model:firstName="f" v-model:lastName="l" />`}],nuances:["Аргумент v-model может иметь <b>модификаторы</b>: <code>v-model:price.number</code> приедет в проп <code>priceModifiers</code> — компонент сам решает, как их применить.","<code>defineModel</code> возвращает <b>ref</b>: можно менять .value, передавать дальше в v-model, watch-ить — emit происходит под капотом.","Если родитель не передал значение, defineModel с <code>{ default: ... }</code> даёт локальный фолбэк без emit (в противном случае запись всегда уходит родителю).","Несколько v-model — это не «много modelValue»: безымянный <code>v-model</code> и именованные могут сосуществовать.","Каждая пара «проп+событие» независима: один может быть строкой, другой числом — типизируйте каждый отдельно."],bestPractices:["Формы-компоненты: <b>пропсы вниз, события вверх</b>, никакого локального дублирования состояния.","Для простого инпута — <code>defineModel</code>; для контракта из 3+ полей явные пропсы+эмит читаются лучше.","Именуйте аргументы v-model по домену (name, price, enabled), а не model1/model2.","Держите дочерний компонент чистым: валидацию и нормализацию значений делайте на родителе или в отдельном слое, а не внутри презентационного компонента."],whenToUse:"<strong>Несколько v-model</strong> — для переиспользуемых форм-компонентов: CustomInput, DateRangePicker, карта с v-model:lat/v-model:lng, диалог с v-model:open. Если компонент владеет бизнес-логикой и ему не нужна двусторонняя связь — обычные пропсы и семантические события (submit, change) уместнее.",alternative:{title:"Один объектный проп + update:object",text:"Вместо пяти v-model можно передавать один реактивный объект и эмитить его целиком. Меньше пропсов, но связь менее явная и мутировать поля объекта внутри ребёнка — нарушение однонаправленности.",code:`<!-- родитель -->
<FilterForm v-model="filter" />

<!-- ребёнок: defineModel<Filter>() и мутируемые поля -->
const filter = defineModel<Filter>()
filter.value.status = 'open' // мутируем объект родителя`},advanced:{title:"defineModel с трансформацией и валидацией",text:"defineModel принимает опции get/set: геттер может подставлять фолбэк, сеттер — нормализовать значение (trim, округление, каст) перед emit. Так компонент остаётся тонким, а логика преобразования — локализованной.",code:`const price = defineModel<number>('price', {
  set(v) {
    const n = Math.max(0, Math.round(Number(v) || 0))
    return n
  },
})`}}},Bf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"})),zf=`<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

interface Form {
  email: string
  password: string
  age: number | string
  bio: string
  plan: 'free' | 'pro'
  agree: boolean
  stack: string[]
}

const form = reactive<Form>({
  email: '',
  password: '',
  age: '',
  bio: '',
  plan: 'free',
  agree: false,
  stack: [],
})

const touched = reactive<Record<string, boolean>>({})

const errors = computed<Partial<Record<keyof Form, string>>>(() => {
  const e: Partial<Record<keyof Form, string>> = {}
  if (!form.email.includes('@')) e.email = 'нужен email с @'
  if (String(form.password).length < 6) e.password = 'минимум 6 символов'
  if (form.age !== '' && (Number(form.age) < 14 || Number(form.age) > 99)) e.age = 'от 14 до 99'
  if (form.bio.length > 120) e.bio = 'максимум 120 символов'
  if (!form.agree) e.agree = 'нужно согласие'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)
const submitted = ref(false)
const submittedPayload = ref('')

function touchAll() {
  for (const k of Object.keys(form)) touched[k] = true
}

function submit() {
  submitted.value = true
  touchAll()
  if (!isValid.value) return
  submittedPayload.value = JSON.stringify({ ...form }, null, 1)
}

function reset() {
  Object.assign(form, {
    email: '',
    password: '',
    age: '',
    bio: '',
    plan: 'free',
    agree: false,
    stack: [],
  })
  for (const k of Object.keys(touched)) touched[k] = false
  submitted.value = false
  submittedPayload.value = ''
}

const plans = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro — 10$/мес' },
] as const

const stackOptions = ['Vue', 'TypeScript', 'Vite', 'Pinia']
<\/script>

<template>
  <div class="stack">
    <div class="grid-2">
      <div class="stack">
        <label class="label">Email</label>
        <input v-model="form.email" class="input" :class="{ 'input--error': touched.email && errors.email }" placeholder="you@mail.dev" />
        <span v-if="touched.email && errors.email" class="tag bad">{{ errors.email }}</span>

        <label class="label">Пароль</label>
        <input v-model="form.password" class="input" type="password" placeholder="минимум 6 символов" />
        <span v-if="touched.password && errors.password" class="tag bad">{{ errors.password }}</span>

        <label class="label">Возраст (.number)</label>
        <input v-model.number="form.age" class="input" type="number" />
        <span v-if="touched.age && errors.age" class="tag bad">{{ errors.age }}</span>
      </div>

      <div class="stack">
        <label class="label">О себе (счётчик)</label>
        <textarea v-model="form.bio" class="input" rows="3" placeholder="до 120 символов" />
        <span class="muted mono">{{ form.bio.length }}/120 <span v-if="errors.bio" class="tag bad">{{ errors.bio }}</span></span>

        <label class="label">Тариф</label>
        <select v-model="form.plan" class="select">
          <option v-for="p in plans" :key="p.value" :value="p.value">{{ p.label }}</option>
        </select>

        <span class="label">Стек</span>
        <div class="row" style="gap: 12px; flex-wrap: wrap">
          <label v-for="opt in stackOptions" :key="opt"><input v-model="form.stack" type="checkbox" :value="opt" /> {{ opt }}</label>
        </div>

        <label><input v-model="form.agree" type="checkbox" /> согласен с условиями</label>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="submit">отправить</button>
      <button class="btn" @click="reset">сброс</button>
      <span class="tag" :class="isValid ? 'ok' : 'warn'">{{ isValid ? 'форма валидна' : 'есть ошибки' }}</span>
    </div>

    <div v-if="submitted && submittedPayload" class="card">
      <b>Отправленный payload</b>
      <pre class="mono" style="white-space: pre-wrap; margin: 8px 0 0">{{ submittedPayload }}</pre>
    </div>
  </div>
</template>
`,qf={title:"Формы",summary:"Реактивный объект формы, ошибки через computed, touched-поля, сабмит через @submit.prevent.",demo:()=>F(()=>import("./Demo-BZhwTVxK.js"),[]),code:zf,content:{intro:'Форма — классический случай, где коллекция полей удобнее набора отдельных ref: <code>const form = reactive({ … })</code> и <code>v-model="form.email"</code>. Ошибки собираются в <b>computed</b> — он сам пересчитывается при изменении любого поля и не требует watch. Ключевое UX-правило демо: не показывать ошибки сразу, а показывать их только для <b>touched</b>-полей (пользователь уже потрогал) или после сабмита.',howItWorks:"Состояние — один реактивный объект form; каждое поле связано v-model. <code>errors</code> — computed, возвращающий объект «поле → сообщение»; пустой объект означает валидность (isValid). При сабмите перехватываем <code>@submit.prevent</code> (native сабмит страницы отменяется), помечаем все поля тронутыми и показываем payload только если ошибок нет. Флаг touched хранится в отдельном reactive-объекте и включается либо по blur, либо при сабмите — так форма стартует «чистой».",mistakes:[{title:"Валидация через watch на каждое поле",text:"Флаг валидности — производная от состояния. watch дублирует то, что computed делает автоматически, и легко забывает зависимости (массив полей, cross-field правила).",code:`watch(() => form.email, v => { emailError.value = v.includes('@') ? '' : '...' })
// ❌ N полей = N вотчеров, plus cross-проверки`,fix:`const errors = computed(() => ({
  email: form.email.includes('@') ? undefined : 'нужен email',
})) // ✅ единый источник ошибок`},{title:"Сброс формы «по одному полю»",text:"Присваивать каждый ref заново — дублирование. Один реактивный объект сбрасывается Object.assign или пересозданием.",code:"email.value = ''; password.value = ''; age.value = 0 // ❌",fix:`Object.assign(form, initialForm) // ✅
// или: form = reactive(initialForm) если let`},{title:"Сабмит без .prevent",text:"Форма без перехвата нативно отправится и перезагрузит страницу — состояние потеряется.",code:'<form @submit="submit"> <!-- ❌ страница перезагрузится -->',fix:'<form @submit.prevent="submit"> <!-- ✅ -->'}],nuances:["Атрибуты валидации HTML (<code>required</code>, <code>maxlength</code>, <code>pattern</code>) можно и стоит оставлять: они бесплатны и работают до JS.","<code>maxlength</code> на textarea <b>режет</b> ввод молча; если нужен счётчик и сообщение — валидируйте сами, не ограничивая input.",'Событие <code>blur</code> — естественный момент пометки touched: <code>@blur="touched.email = true"</code>.',"Vue не навязывает библиотеку валидации: от правил в computed до zod/vuelidate/vee-validate — выбор по сложности формы.","Для редактирования сущности копию данных для формы делают через <code>{ ...props.user }</code> или structuredClone — чтобы отмена не «протекала» в исходник.","Submit-кнопка вне form работает через <code>form</code> атрибут; иначе просто вызывайте метод."],bestPractices:["Состояние формы — <b>локальное</b> (компонент), а не Pinia: форма — transient-состояние, его не нужно глобализовать.","Ошибки — производная (computed), а не аккумулируемый стейт: нет рассинхронизации.","Разделяйте схему формы (тип Form) и логику валидации — чистая функция <code>validate(form): Errors</code> тестируется без Vue.","Для сложных форм (динамические поля, шаги) выносите в composable useForm или библиотеку, не изобретая внутри компонента.","Дизейблите кнопку саббита через busy-флаг при отправке, а не через валидность — пользователь должен видеть, что запрос идёт."],whenToUse:"<strong>Формы</strong> через reactive-объект — выбор по умолчанию для форм из 3+ полей: логина, регистрации, настроек, CRUD-редакторов. Для одного-двух полей достаточно отдельных ref. Когда правил валидации много и они декларативные — берите schema-валидатор (zod + computed), когда форма гигантская и многошаговая — vee-validate/formkit.",alternative:{title:"Схемная валидация (zod + computed)",text:"Схема описывает правила один раз и переиспользуется и на клиенте, и на сервере (в Nuxt — на серверной стороне тоже).",code:`import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().min(14).max(99),
})

const errors = computed(() =>
  schema.safeParse({ ...form, age: Number(form.age) }).error?.flatten().fieldErrors
)`},advanced:{title:"Форма как composable",text:"Логика формы (состояние + touched + validate + submit) — переиспользуемый composable: компонент остаётся только разметкой.",code:`// composables/useForm.ts
export function useForm<T extends object>(initial: T, validate: (v: T) => Partial<Record<keyof T, string>>) {
  const form = reactive({ ...initial })
  const touched = reactive<Record<string, boolean>>({})
  const errors = computed(() => validate(form))
  const isValid = computed(() => !Object.keys(errors.value).length)
  function reset() { Object.assign(form, initial) }
  return { form, touched, errors, isValid, reset }
}`}}},Kf=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"})),Wf=`<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Три «страницы» с одинаковым интерфейсом, но разными компонентами
const StaticTab = {
  name: 'StaticTab',
  setup() {
    const views = ref(0)
    onMounted(() => { views.value++ })
    return { views }
  },
  template: \`
    <div class="card">
      <b>📊 Статистика</b>
      <p class="muted" style="margin: 6px 0 0">Локальное состояние: просмотров = {{ views }}.</p>
      <p class="muted" style="margin: 6px 0 0">При переключении вкладок компонент <b>уничтожается</b> — счётчик сбрасывается.</p>
    </div>
  \`,
}

const ProfileTab = {
  name: 'ProfileTab',
  setup() {
    const edits = ref(0)
    return { edits }
  },
  template: \`
    <div class="card">
      <b>👤 Профиль</b>
      <p class="muted" style="margin: 6px 0 0">Это другой компонент со своим состоянием (edits = {{ edits }}).</p>
    </div>
  \`,
}

const SettingsTab = {
  name: 'SettingsTab',
  setup() {
    const dark = ref(true)
    return { dark }
  },
  template: \`
    <div class="card">
      <b>⚙️ Настройки</b>
      <p class="muted" style="margin: 6px 0 0">Своё состояние: dark = {{ dark }} (кликните переключатель).</p>
      <label style="margin-top: 8px; display: block"><input type="checkbox" v-model="dark" /> тёмная тема</label>
    </div>
  \`,
}

const tabs = [
  { id: 'stats', label: 'Статистика', component: StaticTab },
  { id: 'profile', label: 'Профиль', component: ProfileTab },
  { id: 'settings', label: 'Настройки', component: SettingsTab },
]

const active = ref(tabs[0])
const switchCount = ref(0)

function pick(tab: (typeof tabs)[number]) {
  if (tab.id === active.value.id) return
  active.value = tab
  switchCount.value++
}

const note = computed(() =>
  switchCount.value === 0
    ? 'Состояние вкладок пока не сбрасывалось.'
    : \`Вкладок сменено: \${switchCount.value} — состояние каждой вкладки при этом терялось (кроме KeepAlive, о нём дальше).\`,
)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="btn"
        :class="{ primary: tab.id === active.id }"
        @click="pick(tab)"
      >
        {{ tab.label }}
      </button>
    </div>

    <component :is="active.component" />

    <p class="muted">{{ note }}</p>
    <p class="muted mono">Сейчас отрендерен: {{ active.component.name }}</p>
  </div>
</template>
`,Gf=`<!-- ❌ нельзя: <component :is="..."> — имя переменной, а не строка из бэкенда -->
<!-- но resolve можно построить честно: -->
const registry = {
  stats: defineAsyncComponent(() => import('./tabs/Stats.vue')),
  profile: defineAsyncComponent(() => import('./tabs/Profile.vue')),
} as const

type TabId = keyof typeof registry // ✅ закрытый набор, а не произвольная строка
const active = ref<TabId>('stats')

<component :is="registry[active]" />`,Jf={title:"Динамические компоненты",summary:"<component :is> для табов и виджетов, потеря состояния при переключении, безопасный реестр компонентов.",demo:()=>F(()=>import("./Demo-DROG_QAN.js"),[]),code:Wf,content:{intro:'Встроенный элемент <b>&lt;component :is="…"&gt;</b> рендерит то, что сейчас в выражении: имя компонента или сам компонент. Это основной инструмент табов, визардов, режимов редактора и любых «слотов на стероидах». В демо три вкладки-компонента: переключение заменяет один vnode другим, и <b>локальное состояние</b> каждого теряется — счётчик статистики обнуляется. Как сохранить его — показано в теме про KeepAlive.',howItWorks:`<code>:is</code> принимает: объект компонента (из import или локального определения), строковое имя для глобально зарегистрированного компонента, либо имя HTML-тега (<code>:is="'blockquote'"</code>). Vue монтирует новый компонент и размонтирует старый — с полным жизненным циклом. Переключение в демо меняет <code>active.component</code>; так как это разные объекты компонентов, Vue не «патчит» один в другой, а заменяет целиком. В <code>KeepAlive</code> внутри — вместо размонтирования происходит деактивация, и состояние выживает.`,mistakes:[{title:"Динамическая сборка имени компонента из пользовательских данных",text:"Строковое :is ищет компонент среди зарегистрированных. Имя, склеенное из ответа API, ломается в рантайме и открывает дыру до произвольных компонентов. Нужен закрытый реестр.",code:`<!-- ❌ имя приедет с сервера: "admin-panel" или что угодно -->
<component :is="tabName + '-tab'" />`,fix:Gf,fixText:"Реестр (Map/объект) из валидных ключей → компонентов: типобезопасно, чанкованно через defineAsyncComponent, без строковой магии."},{title:"Ожидать сохранения состояния при смене компонента",text:"По умолчанию переключение = уничтожение + создание. Локальные ref, введённый текст, скролл — всё сбрасывается. Это ожидаемое поведение, а не баг.",code:'<component :is="active" /> <!-- ❌ state потерян -->',fix:`<KeepAlive>
  <component :is="active" /> <!-- ✅ состояние переживает переключение -->
</KeepAlive>`},{title:"Использовать :is для условного рендера пары вариантов",text:"Когда вариантов два и они известны статически, v-if/v-else проще, типизированнее и без поиска в реестре.",code:`<component :is="isEdit ? 'EditForm' : 'DetailView'" /> <!-- ❌ строки -->`,fix:`<EditForm v-if="isEdit" v-bind="..." />
<DetailView v-else /> <!-- ✅ -->`}],nuances:["В SFC строковое <code>:is</code> работает только для <b>глобально</b> зарегистрированных компонентов; локально импортированные нужно передавать объектом.",'<code>:is</code> с HTML-тегом рендерит нативный элемент — так строят полиморфные компоненты (<code>as="section"</code>).',"Динамический компонент получает обычные пропсы/слоты/слушатели — они пробрасываются как на обычный тег.","<code>&lt;KeepAlive&gt;</code> кеширует по имени компонента; при нескольких вкладках в нём важно <code>include</code>.","Смена <code>:is</code> триггерит <b>полный</b> жизненный цикл нового компонента: onMounted, подписки, скролл — не путать с реактивным обновлением props.","Для «ленивых» вкладок реестр строят из <code>defineAsyncComponent(() => import(...))</code> — каждый таб отдельным чанком."],bestPractices:["Для табов держите <b>список вкладок как данные</b> (id, label, component) и рендерите кнопки v-for-ом — код не раздувается if-ами.","Стройте <b>закрытый реестр</b> компонентов с типом ключей (keyof typeof), а не произвольные строки из данных.","Оборачивайте переключаемые компоненты в KeepAlive, если состояние дорогое (форма, фильтры, скролл).","Не храните в переключаемых компонентах состояние, критичное для родителя — поднимайте его или используйте store."],whenToUse:"<strong>Динамические компоненты</strong> — для табов, мастеров-визардов (шаг 1 → шаг 2), переключаемых режимов отображения (таблица/канбан/график), виджет-панелей и plugin-подобных расширений. Для простого «показать A или B» используйте v-if — проще и без реестра.",alternative:{title:"v-if / v-else для статического набора",text:"Когда компоненты известны на этапе написания кода, явные ветки читаются и типизируются лучше всего.",code:`<template>
  <StatsPanel v-if="mode === 'stats'" />
  <ProfilePanel v-else-if="mode === 'profile'" />
  <SettingsPanel v-else />
</template>`},advanced:{title:"Полиморфный компонент через :is",text:"Компонент может принимать проп <code>as</code> и рендерить себя любым тегом или компонентом — база для дизайн-систем (Button, что может быть <code>a</code>, <code>button</code> или <code>RouterLink</code>).",code:`<!-- SmartLink.vue -->
<script setup lang="ts">
defineProps<{ to?: string }>()
const component = computed(() => (to ? RouterLink : 'a'))
<\/script>

<template>
  <component :is="component" :to="to" v-bind="$attrs">
    <slot />
  </component>
</template>`}}},Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"})),Xf=`<script setup lang="ts">
import { ref, computed, onActivated, onDeactivated, onMounted } from 'vue'

// Внутренний «вкладочный» компонент для демонстрации сохранения состояния
const CounterTab = {
  name: 'CounterTab',
  setup() {
    const count = ref(0)
    const activations = ref(0)
    onMounted(() => { activations.value++ })
    onActivated(() => { activations.value++ })
    return { count, activations }
  },
  template: \`
    <div class="card">
      <div class="row row--between">
        <b>🔢 Счётчик</b>
        <span class="tag ok">alive</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">count = {{ count }} — сохраняется при переключении вкладок.</p>
      <div class="row" style="margin-top: 8px">
        <button class="btn small primary" @click="count++">+1</button>
        <span class="muted mono">activate-событий: {{ activations }}</span>
      </div>
    </div>
  \`,
}

const FormTab = {
  name: 'FormTab',
  setup() {
    const text = ref('')
    return { text }
  },
  template: \`
    <div class="card">
      <b>📝 Черновик</b>
      <p class="muted" style="margin: 6px 0 0">Введите текст и переключите вкладку — он останется здесь.</p>
      <input v-model="text" class="input" style="margin-top: 8px" placeholder="черновик…" />
    </div>
  \`,
}

const EphemeralTab = {
  name: 'EphemeralTab',
  setup() {
    const stamp = ref(Date.now())
    return { stamp }
  },
  template: \`
    <div class="card">
      <b>⏱ Одноразовая</b>
      <p class="muted" style="margin: 6px 0 0">Этот компонент в exclude: каждое переключение пересоздаёт его.</p>
      <p class="muted mono" style="margin: 6px 0 0">создан: {{ new Date(stamp).toLocaleTimeString() }}</p>
    </div>
  \`,
}

const tabs = [CounterTab, FormTab, EphemeralTab]
const labels: Record<string, string> = {
  CounterTab: 'Счётчик',
  FormTab: 'Черновик',
  EphemeralTab: 'Одноразовая',
}

const active = ref(0)
const keepEphemeral = ref(false)

// include-список: какие имена KeepAlive кеширует
const includeList = computed(() =>
  keepEphemeral.value ? 'CounterTab,FormTab,EphemeralTab' : 'CounterTab,FormTab',
)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.name"
        class="btn"
        :class="{ primary: i === active }"
        @click="active = i"
      >
        {{ labels[tab.name] }}
      </button>
      <button class="btn" :class="{ primary: keepEphemeral }" @click="keepEphemeral = !keepEphemeral">
        include: {{ keepEphemeral ? 'все три' : 'без EphemeralTab' }}
      </button>
    </div>

    <KeepAlive :include="includeList">
      <component :is="tabs[active]" />
    </KeepAlive>

    <p class="muted">
      Счётчик и черновик сохраняются. «Одноразовая» вкладка пересоздаётся при каждом возвращении,
      пока она вне include — заметьте её метку времени.
    </p>
  </div>
</template>
`,Yf={title:"KeepAlive: кеширование компонентов",summary:"<KeepAlive> сохраняет состояние при переключении вкладок; include/exclude/max; хуки onActivated/onDeactivated.",demo:()=>F(()=>import("./Demo-CwdGoc6G.js"),[]),code:Xf,content:{intro:"<b>&lt;KeepAlive&gt;</b> — встроенный абстрактный компонент, который кеширует дочерние компоненты при переключении. Вместо размонтирования экземпляр <b>деактивируется</b> и прячется в кеш; возврат = активация без пересоздания. Состояние, введённый текст, скролл, подписки — всё переживает переключение. В демо счётчик и черновик выживают, а «Одноразовая» вкладка — нет, пока её имени нет в <code>include</code>.",howItWorks:"KeepAlive оборачивает динамический компонент и при замене вместо unmount кладёт vnode и его component instance в Map-кеш по ключу (имени компонента). На выходе — хуки <b>onActivated</b>/<b>onDeactivated</b> вместо onMounted/onUnmounted (но onMounted тоже сработает при первом показе). Управление кешем: <code>include</code> — список имён для кеширования, <code>exclude</code> — наоборот, <code>max</code> — LRU-лимит (старые записи вытесняются и размонтируются по-настоящему). С атрибутом <code>include</code> в демо «Одноразовая» вкладка не попадает в кеш и честно пересоздаётся.",mistakes:[{title:"Обернуть всё подряд в KeepAlive",text:"Кеш держит DOM и экземпляры в памяти. Десятки тяжёлых вкладок = растущий бюджет памяти и застывшие подписки. Кешируйте то, что дорого пересоздавать, остальное — честный unmount.",code:'<KeepAlive><component :is="anyPage" /></KeepAlive> <!-- ❌ кешируем всё -->',fix:`<KeepAlive :include="['DashboardTab', 'EditorTab']" :max="5">
  <component :is="anyPage" />
</KeepAlive> <!-- ✅ выборочно + LRU-лимит -->`},{title:"Делать подписки в onActivated без симметричной очистки",text:"onActivated срабатывает при каждом возврате вкладки. Если подписываться там без отписки в onDeactivated — накапливаются дубли слушателей.",code:`onActivated(() => {
  window.addEventListener('resize', onResize) // ❌ дубли при каждом возврате
})`,fix:`onActivated(() => window.addEventListener('resize', onResize))
onDeactivated(() => window.removeEventListener('resize', onResize)) // ✅`,fixText:"Либо подписывайтесь один раз в onMounted и используйте флаг «активен ли сейчас»."},{title:"Ждать onUnmounted внутри KeepAlive",text:"Пока компонент в кеше, unmounted не происходит — cleanup не выполняется. Логику «когда вкладка ушла с экрана» пишут в onDeactivated.",code:"onUnmounted(() => stopPolling()) // ❌ не вызовется при уходе в кеш",fix:`onDeactivated(() => stopPolling()) // ✅
onActivated(() => startPolling())`}],nuances:["KeepAlive работает только с <b>одним</b> дочерним vnode: обёртка над <code>&lt;component :is&gt;</code> или v-if-веткой.","Идентификация в кеше — по <code>name</code> компонента (или key). Безымянные компоненты кешируются по внутреннему ключу.","При <code>max</code> вытеснение — LRU: давно неактивированные компоненты размонтируются полностью.","Внутри KeepAlive порядок хуков при первом монтировании: onMounted → onActivated; при возврате — только onActivated.","KeepAlive не работает на <b>SSR</b> (на сервере рендерится просто дочерний компонент) — не закладывайте в него серверную логику.","Роутер-view + KeepAlive — штатная связка для кеширования страниц-списков при переходе «список → деталь → назад»."],bestPractices:["Всегда указывайте <code>include</code> или <code>max</code> — контролируйте память явно.","Логику «проснулся/уснул» выражайте парой <b>onActivated/onDeactivated</b>, а не угадыванием в onMounted.","Для страниц-списков в связке с роутером: refresh-логику данных вешайте на onActivated, а не только onMounted (кеш пропускает повторный mounted).","Кешируйте компоненты с <b>дорогим восстановлением</b> (большие формы, canvas, фильтры), а не с дешёвым."],whenToUse:"<strong>KeepAlive</strong> нужен для табов с черновиками, фильтров каталога при переходе в карточку товара, шагов мастера, где возврат не должен терять прогресс. Не нужен для «одноразовых» экранов (детальный просмотр) и для почти-статичных страниц, где пересоздание бесплатно.",alternative:{title:"Скрытие вместо кеширования: v-show",text:"Если вкладок мало (2–3) и они лёгкие, можно рендерить все и прятать display:none — состояние сохранится без KeepAlive, но DOM и подписки живут всегда.",code:`<Stats v-show="tab === 'stats'" />
<Profile v-show="tab === 'profile'" />`},advanced:{title:"Кеширование роутер-страниц с include по route.name",text:"В связке с Vue Router управляют кешем декларативно: имена кешируемых страниц задают в meta маршрутов, а include собирают динамически.",code:`<!-- AppLayout.vue -->
<RouterView v-slot="{ Component }">
  <KeepAlive :include="cachedViews">
    <component :is="Component" :key="$route.fullPath" />
  </KeepAlive>
</RouterView>

// cachedViews = routes.filter(r => r.meta.keepAlive).map(r => r.name)`}}},Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"})),em=`<script setup lang="ts">
import { ref } from 'vue'

const showInApp = ref(false)
const showToBody = ref(false)

const appBox = ref<HTMLElement | null>(null)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="showToBody = true">модалка → body</button>
      <button class="btn" @click="showInApp = true">модалка → .demo-root (disabled)</button>
    </div>

    <!-- 1. Классика: модалка уходит в body, минуя overflow/z-index родителя -->
    <Teleport to="body">
      <div
        v-if="showToBody"
        style="position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .55)"
        @click.self="showToBody = false"
      >
        <div class="card" style="min-width: 320px; max-width: 440px">
          <div class="row row--between">
            <b>Модальное окно (teleport to body)</b>
            <button class="btn small" @click="showToBody = false">✕</button>
          </div>
          <p class="muted" style="margin: 8px 0 0">
            DOM-узел живёт в конце &lt;body&gt;, а не внутри демо-панели:overflow:hidden и
            z-index предков больше не властны.
          </p>
        </div>
      </div>
    </Teleport>

    <!-- 2. disabled: тот же код рендерится на месте, внутри демо-панели -->
    <Teleport to=".demo-root" :disabled="true">
      <div
        v-if="showInApp"
        style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .4)"
        @click.self="showInApp = false"
      >
        <div class="card" style="min-width: 280px">
          <b>Оверлей внутри панели (disabled)</b>
          <p class="muted" style="margin: 6px 0 0">
            Teleport выключен — узел отрендерился прямо здесь.
          </p>
          <button class="btn small" style="margin-top: 8px" @click="showInApp = false">закрыть</button>
        </div>
      </div>
    </Teleport>

    <p class="muted">
      Откройте DevTools: узел модалки находится в конце &lt;body&gt;, вне корневого div приложения.
    </p>
  </div>
</template>
`,tm={title:"Teleport: рендер вне иерархии",summary:'<Teleport to="body"> для модалок, тултипов и нотификаций; атрибут disabled; SSR-нюансы.',demo:()=>F(()=>import("./Demo-Cp14oWp8.js"),[]),code:em,content:{intro:'<b>&lt;Teleport to="..."&gt;</b> переносит содержимое в другую часть DOM, не ломая логическую иерархию компонентов: пропсы, слоты и события продолжают работать как обычно. Главная проблема, которую решает Teleport — <b>контекст предков</b>: <code>overflow: hidden</code>, <code>transform</code> и z-index родителей обрезают или перекрывают модалки и тултипы, если те рендерятся «по месту». В демо модалка уходит в конец <code>&lt;body&gt;</code>, а переключатель <code>disabled</code> показывает, что тот же код может рендериться и на месте.',howItWorks:"Teleport принимает CSS-селектор или DOM-элемент в <code>to</code> и переносит отрендеренные узлы туда после монтирования. Реактивность не ломается: владелец состояния — тот же компонент, поэтому закрытие по клику работает, как будто узел на месте. Атрибут <code>disabled</code> (реактивный!) временно отключает перенос — узел рендерится в обычном месте в иерархии. Содержимое Teleport монтируется <b>лениво</b>: если цель недоступна на момент рендера, Vue подождёт (или потребует <code>defer</code>-обработки в порядке монтирования).",mistakes:[{title:"Цель Teleport отсутствует на момент монтирования",text:"Селектор <code>to</code> должен указывать на существующий элемент. Если цель рендерится позже (другой компонент, ленивый layout), бросится ошибка «Invalid Teleport target».",code:`<Teleport to="#sidebar-drawer">
  <!-- ❌ #sidebar-drawer появится только через 2 секунды -->`,fix:`<!-- ✅ переносим в гарантированно существующий body -->
<Teleport to="body">…</Teleport>
<!-- или мунтируйте компонент после монтирования layout -->`},{title:"Teleport поверх модалки = просят «стакан»",text:"Две модалки одновременно → обе в body. Без управления z-index и порядком они перекрываются непредсказуемо. Используйте фиксированные уровни (модалка 100, попап 110) или библиотеку слоёв.",code:`<Teleport to="body"><div style="z-index: 10">…</div></Teleport>
<Teleport to="body"><div style="z-index: 10">…</div></Teleport> <!-- ❌ гонка -->`,fix:`<!-- ✅ фикс-уровни из дизайн-токенов -->
<div style="z-index: var(--z-modal)">…</div>
<div style="z-index: var(--z-toast)">…</div>`},{title:"События «не доходят» из-за ожидания пузырьков DOM",text:"События в перенесённом узле всплывают по <b>новому</b> DOM-положению, а не по компонентной иерархии. Опора на DOM-пузырение от предка (например, глобальный click-catcher) перестаёт работать — слушайте события на самом компоненте.",code:`<!-- ❌ обёртка с @click больше не перехватит клики внутри телепорта -->
<div @click="closeAll">
  <Teleport to="body">…</Teleport>
</div>`,fix:`<!-- ✅ логика закрытия — на самой модалке -->
<Teleport to="body">
  <div @click.self="close">…</div>
</Teleport>`}],nuances:['<code>to</code> принимает и селектор, и реальный элемент: <code>:to="containerEl"</code>.',"<code>disabled</code> реактивен: можно телепортировать «условно» — например, на десктопе рендерить попап на месте, на мобиле — в body.","Порядок DOM-узлов при нескольких Teleport в одну цель = порядок монтирования. Для «стакана» лучше отдельная цель-контейнер (#overlays).","<b>SSR</b>: на сервере Teleport рендерит содержимое <b>на месте</b> и сериализует маркеры, чтобы клиент знал, куда переносить. Сложные серверные условия могут дать <b>hydration mismatch</b>.","Teleport внутри Teleport работает; вложенные цели обязаны существовать к моменту монтирования.","События Vue (emit) ходят по <b>компонентной</b> иерархии и телепортацию не замечают — ломается только DOM-пузырение."],bestPractices:["Для модалок и попапов — <b>один</b> контейнер в приложении (<code>#overlays</code>) и фиксированные z-index-слои.","Содержите закрытие (Esc, клик по фону) внутри самого модального компонента — не полагайтесь на внешних слушателей.","Не телепортируйте ради «попроще»: если узел неплохо живёт в иерархии, оставьте его там — меньше точек отказа в SSR и тестах.","Компонент модалки оборачивайте в <code>&lt;Teleport&gt;</code> сам, а не на каждом месте использования — контракт чище."],whenToUse:"<strong>Teleport</strong> — для всего, что визуально выходит за рамки родителя: модальные окна, дропдауны у края экрана, тултипы, тосты, полноэкранные загрузчики, диалоги подтверждения. Не нужен для обычного потока страницы, где ничего не обрезается.",alternative:{title:"Фиксированное позиционирование без переноса",text:"Если <code>position: fixed</code> решает задачу (нет обрезающих предков), Teleport избыточен — меньше перемещений DOM, проще SSR.",code:`<div v-if="open" class="overlay">
  <!-- position: fixed; inset: 0 -->
</div>`},advanced:{title:"Общий «стакан» оверлеев через provide/inject или стор",text:"В больших приложениях делают единый сервис-компонент: глобальный <code>&lt;OverlayHost&gt;</code> в App.vue, а компоненты вызывают <code>openModal(MyModal, props)</code> — Teleport остаётся внутри хоста, API вызова — обычная функция.",code:`// composables/useOverlay.ts
const stack = ref<{ component: Component; props: object }[]>([])
export function openModal(component: Component, props: object = {}) {
  stack.value.push({ component, props })
}

<!-- OverlayHost.vue -->
<Teleport to="#overlays">
  <component :is="item.component" v-for="(item, i) in stack" :key="i" v-bind="item.props" />
</Teleport>`}}},nm=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),om=`<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const mode = ref<'fade' | 'slide' | 'scale' | 'bounce'>('fade')
const swapCount = ref(0)

const messages = ['Первый экран', 'Второй экран', 'Третий экран']
const msgIndex = ref(0)

function nextMessage() {
  msgIndex.value = (msgIndex.value + 1) % messages.length
  swapCount.value++
}

function onEnter(el: Element, done: () => void) {
  // JS-хук: библиотека анимации сама управляет завершением
  const e = el as HTMLElement
  e.style.opacity = '0'
  requestAnimationFrame(() => {
    e.style.transition = 'opacity .4s'
    e.style.opacity = '1'
  })
  setTimeout(done, 420)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="visible = !visible">
        {{ visible ? 'спрятать' : 'показать' }}
      </button>
      <button class="btn" @click="nextMessage">сменить экран (key)</button>
      <select v-model="mode" class="select" style="width: auto">
        <option value="fade">fade</option>
        <option value="slide">slide</option>
        <option value="scale">scale</option>
        <option value="bounce">bounce</option>
      </select>
    </div>

    <!-- Одиночный элемент: enter/leave классы -->
    <Transition :name="mode" appear>
      <p v-if="visible" class="card" style="margin: 0">
        <b>Transition</b> — v-if-элемент. Сейчас: режим «{{ mode }}», appear включён.
      </p>
    </Transition>

    <!-- Смена содержимого через key: enter + leave по очереди (out-in) -->
    <Transition name="slide" mode="out-in">
      <p :key="msgIndex" class="card" style="margin: 0">
        {{ messages[msgIndex] }} <span class="muted mono">#{{ msgIndex + 1 }}</span>
      </p>
    </Transition>

    <!-- JS-хуки вместо CSS -->
    <Transition :css="false" @enter="onEnter">
      <p v-if="visible" class="tag info" style="display: inline-block; margin: 0">
        JS-хук @enter: анимируем без CSS-классов
      </p>
    </Transition>

    <div class="muted mono" style="margin-top: 4px">смен экрана: {{ swapCount }}</div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.25s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
`,sm={title:"Transition: анимации появления",summary:'<Transition> добавляет enter/leave классы; name, appear, mode="out-in", JS-хуки; key для смены содержимого.',demo:()=>F(()=>import("./Demo-BlfL3giD.js"),__vite__mapDeps([7,8])),code:om,content:{intro:'<b>&lt;Transition&gt;</b> — обёртка, которая во время входа/выхода элемента добавляет CSS-классы: <code>.v-enter-from</code> → <code>.v-enter-active</code> → <code>.v-enter-to</code> и зеркально для leave. Вы пишете только стили, Vue управляет моментами старта и конца. В демо четыре режима анимации на переключателе, смена «экранов» через <code>:key</code> + <code>mode="out-in"</code> и вариант с JS-хуками, когда CSS-классов мало (например, внутри GSAP).',howItWorks:'Transition следит за единственным корневым элементом внутри и ловит его появление/исчезновение (v-if, v-show, <code>:key</code>, динамический компонент). На кадр вставки он вешает <code>{name}-enter-from</code> и <code>{name}-enter-active</code>; в следующем кадре from убирается — CSS transition запускается; когда браузер сообщает об окончании, классы снимаются. <code>appear</code> запускает enter-анимацию и на первом рендере. <code>mode="out-in"</code> ставит leave перед enter, чтобы элементы не жили в DOM одновременно (для позиции — <code>out-in</code>, для FLIP-списков — TransitionGroup). <code>:css="false"</code> отключает авто-детект и передаёт управление JS-хукам, где <code>done()</code> объявляет конец.',mistakes:[{title:"Transition на нескольких детях или текстовом узле без условия",text:"Transition работает с <b>одним</b> элементом/компонентом. Два корневых узла или обычный текст без v-if/key не дают события входа/выхода — анимации нет.",code:`<Transition>
  <p>Один</p>
  <p>Два</p> <!-- ❌ два корневых узла -->
</Transition>`,fix:`<Transition>
  <p v-if="show">Один</p>
</Transition>
<!-- или режим two-way через key + mode="out-in" -->
<Transition mode="out-in">
  <p :key="page">…</p>
</Transition>`},{title:"Забыть v-if/v-show или key — «Transition не работает»",text:"Transition сам ничего не включает и не выключает: нужен источник смены (v-if, v-show, :key). Статичный элемент не анимируется никогда.",code:`<Transition name="fade">
  <div>всегда в DOM</div> <!-- ❌ нет события входа/выхода -->
</Transition>`,fix:`<Transition name="fade">
  <div v-if="show">…</div> <!-- ✅ -->
</Transition>`},{title:"Не указать длительность там, где Vue её не видит",text:"Vue определяет конец по transition/animation на корневом элементе. Если анимация на потомке или сделана в JS — укажите <code>duration</code> или вызовите done() явно, иначе DOM-узел «зависнет».",code:`<Transition name="fade">
  <div v-if="show" class="wrapper">
    <div class="inner-fade"></div> <!-- ❌ анимация на потомке -->
  </div>
</Transition>`,fix:`<Transition name="fade" :duration="{ enter: 300, leave: 200 }"> <!-- ✅ явная длительность -->
  <div v-if="show" class="wrapper">…</div>
</Transition>`}],nuances:["Полные классы: <code>{name}-enter-from/-enter-active/-enter-to</code> и <code>-leave-from/-leave-active/-leave-to</code>. Без атрибута <code>name</code> префикс — <code>v-</code>.",'<code>mode="out-in"</code> — старый уходит, потом новый входит; <code>in-out</code> — наоборот (редко нужен); без mode элементы анимируются одновременно.',"<code>appear</code> нужен, чтобы анимация сработала и при первом рендере, а не только при последующих переключениях.","Для v-show Transition вешает display:none в конце leave — удобно для тултипов, которые часто переключаются.","TransitionGroup (следующая тема) — отдельный компонент для списков с FLIP-анимациями перемещения; Transition для этого не годится.","На SSR Transition рендерит детей как есть — анимации начинаются уже на клиенте; appear + SSR может дать скачок контента."],bestPractices:["Именуйте анимации по эффекту (<b>fade</b>, <b>slide-up</b>) и держите их в общем CSS, а не в каждом компоненте.","Длительность 150–300 мс для UI-микровзаимодействий — дольше воспринимается как тормоз.","Для позиционных перестановок (сортировка, drag) используйте TransitionGroup, а не Transition + watch.","Не анимируйте layout-свойства (width/height/top) без нужды — transform/opacity композитятся на GPU.","Пользователям с <code>prefers-reduced-motion</code> отключайте анимации медиа-запросом."],whenToUse:"<strong>Transition</strong> — для появления/исчезновения одиночных элементов: модалки, дропдауны, тосты, разворачивающиеся панели, смена таба/экрана через key. Не нужен для статичного контента и для списков (там TransitionGroup).",alternative:{title:"CSS-анимация без Transition",text:"Если анимация не привязана к условному рендеру (бесконечный пульс, hover-эффект), обычный CSS с классами проще и без обёртки.",code:`<div class="pulse">…</div>

<style>
.pulse { animation: pulse 2s infinite; }
@keyframes pulse { 50% { opacity: .5; } }
</style>`},advanced:{title:"JS-хуки + библиотека анимации",text:'Хуки <code>@before-enter/@enter/@leave</code> с <code>:css="false"</code> отдают контроль GSAP/Anime.js: библиотека анимирует, done() сообщает Vue о завершении.',code:`import gsap from 'gsap'

function onEnter(el: Element, done: () => void) {
  gsap.fromTo(el, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.4, onComplete: done,
  })
}

<Transition :css="false" @enter="onEnter">
  <Modal v-if="open" />
</Transition>`}}},rm=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),im=`<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  label: string
  votes: number
}

let nextId = 5
const items = ref<Item[]>([
  { id: 1, label: 'Vue', votes: 0 },
  { id: 2, label: 'Vite', votes: 0 },
  { id: 3, label: 'Pinia', votes: 0 },
  { id: 4, label: 'Router', votes: 0 },
])

function vote(item: Item) {
  item.votes++
  // сортировка по голосам — FLIP-анимация перестановки
  items.value = [...items.value].sort((a, b) => b.votes - a.votes || a.id - b.id)
}

function addTop() {
  items.value = [{ id: nextId++, label: \`Голос #\${nextId - 1}\`, votes: 0 }, ...items.value]
}

function remove(id: number) {
  items.value = items.value.filter(i => i.id !== id)
}

function shuffle() {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="addTop">➕ добавить</button>
      <button class="btn" @click="shuffle">🔀 перемешать</button>
      <span class="muted mono">голосуйте — элементы переезжают плавно (FLIP)</span>
    </div>

    <TransitionGroup name="list" tag="div" class="stack" style="gap: 8px">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="row row--between">
          <span>
            <b>{{ item.label }}</b>
            <span class="muted mono" style="margin-left: 8px">id={{ item.id }}</span>
          </span>
          <span class="row" style="gap: 8px">
            <button class="btn small" @click="vote(item)">👍 {{ item.votes }}</button>
            <button class="btn small danger" @click="remove(item.id)">✕</button>
          </span>
        </div>
      </div>
    </TransitionGroup>

    <p class="muted">
      Удаление: элемент уходит с анимацией leave, остальные плавно «подтягиваются» (.list-move).
      Для корректного leave нужен абсолютный класс — он задан в стилях ниже.
    </p>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
/* Уходящий элемент перестаёт влиять на поток — остальные сдвигаются плавно */
.list-leave-active {
  position: absolute;
}
</style>
`,am={title:"TransitionGroup: анимации списков",summary:"FLIP-анимации перестановок в v-for: tag, .move-класс, leave-active + position:absolute, ключи обязательны.",demo:()=>F(()=>import("./Demo-C4fywzWP.js"),__vite__mapDeps([9,10])),code:im,content:{intro:"<b>&lt;TransitionGroup&gt;</b> анимирует списки: добавление (enter), удаление (leave) и — главное — <b>перемещение</b> элементов при сортировке/фильтрации через FLIP-технику (класс <code>.{name}-move</code>). В отличие от Transition он рендерит реальный контейнер (или невидимую обёртку) и работает с <b>множеством</b> детей с ключами. В демо голосование пересортирует список, и элементы плавно меняются местами.",howItWorks:"TransitionGroup отслеживает порядок детей по ключам. Когда элемент меняет позицию, Vue измеряет старую и новую позиции и запускает CSS transition по transform (это и есть FLIP: First-Last-Invert-Play) — класс <code>.list-move</code> задаёт параметры перехода. Enter/leave работают как в Transition: <code>.list-enter-from</code>, <code>.list-leave-to</code>. Ключевой трюк для корректного leave: <code>.list-leave-active { position: absolute }</code> — уходящий элемент перестаёт влиять на поток, и остальные сдвигаются плавно, а не прыжком.",mistakes:[{title:"Забыть ключи или использовать index",text:"TransitionGroup различает элементы <b>только по ключам</b>. Ключ-индекс делает «перемещение» неразличимым от «замены» — FLIP-анимация не сработает или сработает неверно.",code:`<TransitionGroup>
  <li v-for="(item, i) in items" :key="i">…</li> <!-- ❌ -->
</TransitionGroup>`,fix:`<TransitionGroup>
  <li v-for="item in items" :key="item.id">…</li> <!-- ✅ -->
</TransitionGroup>`},{title:"Не задать position:absolute для leave-active",text:"Уходящий элемент продолжает занимать место в потоке до конца анимации — остальные «ждут» его и прыгают после. Абсолютное позиционирование высвобождает место сразу.",code:".list-leave-active { transition: all .4s; } /* ❌ элемент держит место */",fix:`.list-leave-active {
  transition: all .4s;
  position: absolute; /* ✅ освободил поток — остальные поехали */
}`,fixText:"Внимание: абсолютный элемент позиционируется относительно ближайшего positioned-предка — дайте контейнеру position: relative."},{title:"Ожидать атрибут name-классов без name",text:"Без name классы называются <code>v-move</code>, <code>v-enter-from</code> и т.д. Стили с префиксом list- просто не применятся.",code:"<TransitionGroup> <!-- ❌ имя не задано -->",fix:'<TransitionGroup name="list"> <!-- ✅ классы .list-move, .list-enter-from… -->'}],nuances:['Атрибут <code>tag</code> задаёт реальный контейнер: <code>&lt;TransitionGroup tag="ul"&gt;</code> — без него рендерится span, что ломает семантику списка.',"<code>.{name}-move</code> — класс именно для FLIP-перемещений; enter/leave-классы дополняют его.","При leave с position:absolute элементу сохраняются его координаты — Vue сам выставляет left/top на момент старта.","TransitionGroup не имеет mode — enter и leave идут одновременно, это штатно для списков.","Внутри TransitionGroup нельзя обёртки-дети без ключей: <code>&lt;template v-for&gt;</code> с ключом на template работает.","Большие списки + FLIP = много измерений DOM; на сотнях элементов используйте виртуализацию вместо анимации всех перестановок."],bestPractices:["Всегда <code>tag</code> под семантику (ul/ol/tbody) и стабильные ключи из данных.","Триплет стилей для списков: transition на move+enter-active+leave-active, from/to-классы и absolute у leave-active.","Анимируйте transform/opacity — они дешёвые; height-перестановки вызывают layout-перерасчёт.","Для drag-n-drop сортировок TransitionGroup комбинируется с pointer-событиями или берётся готовая библиотека (sortablejs + vuedraggable)."],whenToUse:"<strong>TransitionGroup</strong> — для живых списков: чаты с новыми сообщениями, тосты, очереди задач, лидерборды, drag-n-drop канбан, результаты поиска с сортировкой. Не нужен для статичных списков и списков с полной перерисовкой по фильтрам (там важнее виртуализация).",alternative:{title:"Анимация только появления",text:"Если элементы только добавляются (новости, лог), достаточно CSS-анимации на самом элементе — без TransitionGroup и без измерений.",code:`<li v-for="item in items" :key="item.id" class="appear">…</li>

<style>
.appear { animation: appear .25s ease; }
@keyframes appear { from { opacity: 0; transform: translateY(-8px); } }
</style>`},advanced:{title:"FLIP вручную и Flip-плагины",text:"Понимание FLIP (First-Last-Invert-Play) открывает анимации между любыми состояниями DOM: от drag-n-drop до shared element transitions. Для сложных сценариев берите GSAP FlipPlugin.",code:`// Идея FLIP: зафиксировать позицию (First), применить изменение (Last),
// посчитать дельту (Invert) и проиграть через transform (Play).
const first = el.getBoundingClientRect()
// ...меняем DOM...
const last = el.getBoundingClientRect()
const dx = first.left - last.left
el.style.transform = \`translateX(\${dx}px)\`
requestAnimationFrame(() => {
  el.style.transition = 'transform .4s'
  el.style.transform = ''
})`}}},cm=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),lm=`<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Переключатель, чтобы «нагрузить» сеть и увидеть состояния
const delay = ref(0)

function importWithDelay() {
  return new Promise<{ default: unknown }>((resolve, reject) => {
    setTimeout(() => {
      if (delay.value === -1) {
        reject(new Error('network error'))
        return
      }
      // Динамический import отдельным чанком
      import('./HeavyChart.vue')
        .then(m => resolve(m))
        .catch(reject)
    }, delay.value)
  })
}

const HeavyChart = defineAsyncComponent({
  loader: importWithDelay,
  delay: 200, // не мигать спиннером на быстрых ответах
  timeout: 15000,
  // eslint-disable-next-line
  errorComponent: { template: \`<div class="tag bad">не удалось загрузить компонент — попробуйте снова</div>\` },
  loadingComponent: { template: \`<div class="tag info">загрузка чанка…</div>\` },
})

const retryKey = ref(0)
function recreate() {
  retryKey.value++ // смена key пересоздаёт async-компонент
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="delay = 0; recreate()">загрузить быстро</button>
      <button class="btn" @click="delay = 1200; recreate()">загрузить с задержкой 1.2s</button>
      <button class="btn danger" @click="delay = -1; recreate()">имитировать ошибку сети</button>
    </div>

    <div class="card">
      <b>График (тяжёлый компонент отдельным чанком)</b>
      <p class="muted" style="margin: 6px 0 0">
        Код HeavyChart.vue грузится только по клику: проверьте вкладку Network —
        появится новый js-чанк.
      </p>
      <div style="margin-top: 10px">
        <HeavyChart :key="retryKey" />
      </div>
    </div>
  </div>
</template>
`,dm=`<script setup lang="ts">
const points = 60
const bars = Array.from({ length: 24 }, (_, i) => 20 + Math.round(70 * Math.abs(Math.sin(i / 3))))
<\/script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>📈 HeavyChart</b>
      <span class="tag ok">чанк загружен</span>
    </div>
    <div class="row" style="gap: 4px; align-items: flex-end; height: 80px; margin-top: 8px">
      <div
        v-for="(h, i) in bars"
        :key="i"
        style="flex: 1; background: var(--accent); opacity: .7; border-radius: 3px"
        :style="{ height: h + '%' }"
      />
    </div>
    <p class="muted mono" style="margin: 6px 0 0">{{ points }} точек, {{ bars.length }} баров — «тяжёлый» для примера</p>
  </div>
</template>
`,um=`// ============ Demo.vue ============
${lm}

// ============ HeavyChart.vue (отдельный чанк) ============
${dm}`,pm={title:"Async-компоненты и code splitting",summary:"defineAsyncComponent: ленивая загрузка чанка, loadingComponent/errorComponent, delay и timeout.",demo:()=>F(()=>import("./Demo-CX0FdRJX.js"),[]),code:um,content:{intro:"<b>defineAsyncComponent</b> оборачивает динамический <code>import()</code> в компонент: код попадает в отдельный чанк и грузится только при первом рендере. Это базовый механизм code splitting на уровне компонентов. В демо три кнопки: быстрая загрузка, загрузка с задержкой (виден <code>loadingComponent</code>) и имитация сбоя сети (виден <code>errorComponent</code>). Параметр <code>delay</code> защищает от «мигания» спиннера на быстрых ответах.",howItWorks:'Фабрика <code>loader: () => import("./HeavyChart.vue")</code> возвращает промис с модулем; Vue монтирует компонент, когда промис resolves, и до этого показывает loadingComponent (после delay мс) или errorComponent (при reject или по timeout). Простейшая форма — <code>defineAsyncComponent(() => import(...))</code>; развёрнутая — объект с опциями. Каждый вызов import() Vite/webpack выносит в отдельный чанк; повторные вызовы берут модуль из кеша модулей. В demo реактивный :key="retryKey" пересоздаёт async-компонент, чтобы повторить любой сценарий.',mistakes:[{title:"Ошибка сети без errorComponent",text:"Если промис отклонился и обработчика ошибки нет, компонент никогда не отрендерится и не покажет проблему — тихий белый экран. Всегда предусматривайте errorComponent или обработку onError.",code:`const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))
<!-- ❌ сеть упала — пользователь видит пустоту -->`,fix:`const Heavy = defineAsyncComponent({
  loader: () => import('./Heavy.vue'),
  errorComponent: ErrorState,
  timeout: 10000,
  onError(error, retry, fail, attempts) {
    if (attempts <= 3) retry() // ✅ автоповтор
    else fail()
  },
})`},{title:"Спиннер «мигает» на быстрых соединениях",text:"delay по умолчанию 200 мс, но если loadingComponent тяжёлый, а чанк приходит за 30 мс, пользователь видит вспышку загрузчика. Увеличьте delay или откажитесь от индикатора для мелких компонентов.",code:"defineAsyncComponent({ loader, delay: 0 }) <!-- ❌ спиннер на каждый рендер -->",fix:"defineAsyncComponent({ loader, delay: 300 }) <!-- ✅ мигания нет -->"},{title:"Разбивать на чанки всё подряд",text:"Каждый чанк — отдельный HTTP-запрос и задержка. Дробление мелких компонентов даёт водопад запросов вместо быстрого рендера. Ленивый — тяжёлое и редко используемое.",code:`// ❌ 20 мелких чанков по 2 КБ
const A = defineAsyncComponent(() => import('./A.vue'))
const B = defineAsyncComponent(() => import('./B.vue'))
// ...и так все`,fix:`// ✅ чанки по маршрутам и «тяжёлым» фичам (редактор, графики, карта)
const Editor = defineAsyncComponent(() => import('./Editor.vue'))`}],nuances:["Роутер-маршруты с <code>component: () => import(...)</code> — это тот же механизм, но на уровне страниц; там он главный инструмент.","defineAsyncComponent можно комбинировать с <b>Suspense</b> и с KeepAlive — кешируется уже загруженный компонент.","<code>loadingComponent</code> показывается только после <code>delay</code> мс; если промис успел раньше — пользователь не увидит его вовсе.","Повторный рендер async-компонента берёт модуль из кеша — «ленивость» срабатывает один раз за сессию.",'Именованные чанки: <code>import(/* webpackChunkName: "chart" */ ...)</code> для webpack; в Vite — <code>vite-plugin-chunk</code> или manualChunks.',"SSR: на сервере async-компоненты резолвятся синхронно в Nuxt; в чистом Vue SSR это отдельная тема согласования с гидрацией."],bestPractices:["Ленивая загрузка для: маршрутов, модалок, тяжёлых виджетов (графики, редакторы, карты), компонентов под фолдом.","Всегда задавайте <b>errorComponent</b> и retry-логику для критичных чанков.","Держите баланс: чанк по странице/фиче, а не по мелкому компоненту.","Проверяйте сборку через <code>rollup-plugin-visualizer</code> или <code>npx vite build --mode=analyze</code>, чтобы видеть, что реально ушло в чанки."],whenToUse:"<strong>Async-компоненты</strong> — когда нужно держать initial-бандл тонким: лендинг без админки, каталог без heavy-графиков. Также для условий «показывается редко»: диалог настроек, платный виджет, devtools-панель. Не нужно для критичного above-the-fold контента — там ленивость вредит LCP.",alternative:{title:"Ленивые маршруты в Router",text:"Самый частый случай code splitting — уже встроен в Vue Router: каждая страница отдельным чанком без defineAsyncComponent.",code:`const routes = [
  { path: '/dashboard', component: () => import('./pages/Dashboard.vue') },
  { path: '/editor', component: () => import('./pages/Editor.vue') },
]`},advanced:{title:"Retry с экспоненциальной задержкой",text:"Для мобильных сетей делают автоматический retry: attempts растёт, между попытками пауза. onError даёт полный контроль над циклом.",code:`function loadWithRetry(load: () => Promise<{ default: Component }>, attempts = 0): Promise<{ default: Component }> {
  return load().catch(err => {
    if (attempts >= 3) throw err
    return new Promise(res => setTimeout(res, 2 ** attempts * 500)).then(() =>
      loadWithRetry(load, attempts + 1)
    )
  })
}

const Heavy = defineAsyncComponent({
  loader: () => loadWithRetry(() => import('./Heavy.vue')),
  errorComponent: ErrorState,
})`}}},fm=Object.freeze(Object.defineProperty({__proto__:null,default:pm},Symbol.toStringTag,{value:"Module"})),mm=`<script setup lang="ts">
import { ref, computed } from 'vue'

type Strategy = 'csr' | 'ssr' | 'ssg' | 'hybrid'

interface Step {
  label: string
  detail: string
  time: string
}

const strategies: Record<Strategy, { title: string; steps: Step[]; verdict: string; use: string }> = {
  csr: {
    title: 'CSR ( SPA ) — чистый клиент',
    steps: [
      { label: '1. Браузер → сервер', detail: 'сервер отдаёт почти пустой HTML + js-бандл', time: '~50 мс' },
      { label: '2. Загрузка и парсинг JS', detail: 'скачивается весь app-бандл', time: '500–2000 мс' },
      { label: '3. JS монтирует Vue', detail: 'создаётся DOM, появляется контент', time: '100–300 мс' },
      { label: '4. Данные', detail: 'API-запросы начинаются только сейчас', time: '+200–800 мс' },
    ],
    verdict: 'Пользователь долго смотрит на белый экран / спиннер. SEO страдает: crawler видит пустой div.',
    use: 'Админки, дашборды за логином, внутренние инструменты — где SEO не нужен, а интерактивность главнее.',
  },
  ssr: {
    title: 'SSR — сервер рендерит на каждый запрос',
    steps: [
      { label: '1. Браузер → сервер', detail: 'Nuxt запускает Vue на сервере', time: '~50 мс' },
      { label: '2. Сервер рендерит HTML', detail: 'с данными: fetch на сервере рядом с БД', time: '100–500 мс' },
      { label: '3. HTML показан сразу', detail: 'контент виден до загрузки JS (FCP/LCP быстрые)', time: 'итого ~150–600 мс' },
      { label: '4. Гидрация', detail: 'JS оживает: слушатели, интерактив', time: '+300–1000 мс' },
    ],
    verdict: 'Контент виден быстро и индексируется. Сервер работает на каждый запрос — нужны кеши и масштабирование.',
    use: 'Каталоги, маркетплейсы, контент с динамикой — где важно SEO и персонализация.',
  },
  ssg: {
    title: 'SSG — HTML собран при билде',
    steps: [
      { label: '1. Браузер → CDN', detail: 'статика отдаётся с edge-кеша', time: '~20–80 мс' },
      { label: '2. HTML готов заранее', detail: 'самый быстрый FCP из возможных', time: 'мгновенно' },
      { label: '3. Гидрация', detail: 'как SSR — страница оживает', time: '+300–1000 мс' },
      { label: '4. Данные', detail: 'заморожены на момент билда; свежесть — по ребилду', time: '—' },
    ],
    verdict: 'Максимальная скорость и дешёвый хостинг. Данные устаревают: нужен ISR/ребилд или client-fetch.',
    use: 'Блоги, документация, лендинги — контент меняется редко, скорость решает.',
  },
  hybrid: {
    title: 'Hybrid rendering — route rules выбирают стратегию',
    steps: [
      { label: '/', detail: 'prerender: лендинг собран при билде', time: 'мгновенно' },
      { label: '/catalog/**', detail: 'ssr: динамический каталог с SEO', time: 'на запрос' },
      { label: '/account/**', detail: 'ssr: false → csr: только клиент', time: 'после JS' },
      { label: '/blog/**', detail: 'isr: 3600 — регенерация раз в час', time: 'кеш + ребилд' },
    ],
    verdict: 'Каждый маршрут получает оптимальную стратегию. Требует понимания кешей и заголовков.',
    use: 'Реальные приложения: лендинг + каталог + аккаунт — всё в одном проекте.',
  },
}

const selected = ref<Strategy>('ssr')
const current = computed(() => strategies[selected.value])
const stepIndex = ref(4) // показывать все шаги по умолчанию

function pick(s: Strategy) {
  selected.value = s
  stepIndex.value = 4
}

function playStep() {
  if (stepIndex.value < current.value.steps.length) stepIndex.value++
  else stepIndex.value = 1
}

const visibleSteps = computed(() => current.value.steps.slice(0, stepIndex.value))
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="(s, key) in strategies"
        :key="key"
        class="btn"
        :class="{ primary: selected === key }"
        @click="pick(key as Strategy)"
      >
        {{ key.toUpperCase() }}
      </button>
      <button class="btn" @click="playStep">▶ проиграть по шагам</button>
    </div>

    <div class="card">
      <b>{{ current.title }}</b>
      <div class="stack" style="gap: 6px; margin-top: 10px">
        <div v-for="(step, i) in visibleSteps" :key="i" class="card" style="margin: 0">
          <div class="row row--between">
            <span><b>{{ step.label }}</b> — {{ step.detail }}</span>
            <span class="mono muted">{{ step.time }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="gap: 12px">
      <span class="tag warn">итог: {{ current.verdict }}</span>
    </div>
    <div class="row">
      <span class="tag ok">когда применять: {{ current.use }}</span>
    </div>

    <p class="muted">
      Гидрация (шаг 4 у SSR/SSG) — превращение статичного HTML в живое приложение. Пока JS не
      загрузился, страница выглядит готовой, но не отвечает: это и есть «окно неинтерактивности».
    </p>
  </div>
</template>
`,vm=`Запрос → Nuxt-сервер:
┌─────────────────────────────────────────────────────────┐
│ 1. Vue выполняется НА СЕРВЕРЕ                           │
│    setup() → ref/computed работают, DOM заменён строкой │
│    await useFetch('/api/...') — fetch без CORS:         │
│    сервер рядом с API/БД                                │
│                                                         │
│ 2. Результат — готовая HTML-строка                      │
│    <div>Товар «Ноутбук» — 59 990 ₽</div>               │
│                                                         │
│ 3. Браузер показывает HTML (JS ещё НЕ загружен)         │
│    → быстрый FCP/LCP, полный контент для поисковиков    │
│                                                         │
│ 4. Гидрация: JS загружен, Vue "оживляет" разметку       │
│    создаёт компоненты заново, но НЕ пересоздаёт DOM,    │
│    а привязывает слушатели и реактивность к существующему│
└─────────────────────────────────────────────────────────┘

route rules (nuxt.config.ts):
routeRules: {
  '/':            { prerender: true },   // SSG при билде
  '/catalog/**':  { isr: 3600 },         // кеш с регенерацией
  '/account/**':  { ssr: false },        // чистый CSR
}`,bm={title:"SSR, CSR, SSG и гибридный рендеринг",summary:"Четыре стратегии отдачи страницы: путь запроса до интерактивности, гидрация, route rules для смешивания.",demo:()=>F(()=>import("./Demo-BfCp0809.js"),[]),code:`// ============ Demo.vue (интерактивный симулятор) ============
${mm}

// ============ путь SSR-запроса ============
${vm}`,content:{intro:"Nuxt — это Vue с <b>серверной частью</b>: одна кодовая база умеет рендерить четыре способа. <b>CSR</b> (классический SPA): пустой HTML, всё строит JS. <b>SSR</b>: сервер исполняет Vue и отдаёт готовый HTML на каждый запрос. <b>SSG</b>: HTML собран при билде, отдаётся с CDN. <b>Hybrid</b>: <code>routeRules</code> выбирает стратегию для каждого пути. В демо — симулятор: переключайте стратегии и смотрите путь запроса по шагам. Ключевой термин — <b>гидрация</b>: привязка Vue-логики к серверному HTML на клиенте.",howItWorks:"При SSR Nuxt запускает приложение в Node: создаётся <code>createSSRApp</code>, setup и computed работают, вместо DOM — сериализация в строку (renderToString). Async-данные собираются через <code>useFetch</code>/<code>useAsyncData</code>, которые умеют выполниться на сервере и передать результат клиенту в сериализованном payload. Клиент получает HTML (сразу видимый) + JS; при гидрации Vue создаёт компоненты заново и <b>сопоставляет</b> с существующим DOM, навешивая слушатели — DOM не пересоздаётся. SSG — тот же SSR, но один раз при билде; hybrid — роутинг между стратегиями через routeRules.",mistakes:[{title:"Думать, что SSR ускоряет интерактивность",text:"SSR ускоряет <b>отображение</b> (FCP/LCP), но клики заработают только после гидрации. Тяжёлый JS-бандл «съедает» преимущество — TTI может быть даже хуже, чем у лёгкого CSR.",code:`// ❌ миф: «SSR = мгновенно кликабельно»
// HTML виден сразу, но до гидрации кнопки мертвы`,fix:`// ✅ держите бандл тонким, критичный контент — без клиентских данных,
// а интерактивные острова — маленькими`},{title:"SSR-код, трогающий window/document",text:"На сервере нет window, document, localStorage. Обращение в setup или на верхнем уровне модуля падает с «window is not defined». Защита: проверка process.client / import.meta.client или вынос в onMounted.",code:"const width = window.innerWidth // ❌ на сервере упадёт",fix:`onMounted(() => {
  width.value = window.innerWidth // ✅ клиентский хук
})
// или: if (import.meta.client) { ... }`},{title:"Выбирать стратегию «одну на всё приложение»",text:"Глобальный SSR тормозит аккаунт-зоны (персональное нельзя кешировать), глобальный CSR лишает SEO каталога. Nuxt силён именно hybrid: каждая зона — своя стратегия.",code:"ssr: true // ❌ одно на всё",fix:`routeRules: {
  '/': { prerender: true },
  '/catalog/**': { isr: 3600 },
  '/account/**': { ssr: false },
} // ✅`}],nuances:["Гидрация по умолчанию <b>строгая</b>: DOM сервера и клиента должен совпасть, иначе hydration mismatch (своя тема).","SSR-запросы идут <b>без CORS</b>: сервер «рядом» с API — быстрее и безопаснее (секреты не покидают Node).","Payload: результаты useAsyncData сериализуются в HTML — клиент не повторяет запрос при гидрации.","CSR-зоны (<code>ssr: false</code>) рендерят на сервере только оболочку (layout), данные — чисто клиентские.","SSG-страницы с <code>prerender: true</code> краулятся при билде: все ссылки на странице тоже собираются.","ISR (isr) — компромисс: кешированный HTML с периодической регенерацией без полного ребилда."],bestPractices:["Дефолт для контентных сайтов — SSR/ISR; для админок — CSR; лендинги — prerender.","Начинайте с hybrid-конфига: главный путь — быстрый, аккаунт — клиентский.","Серверный fetch предпочитает внутренние вызовы напрямую (функции/$fetch), а не через свой же HTTP.","Мониторьте TTFB и время гидрации — SSR с тяжёлым JS проигрывает лёгкому CSR.","Для SEO-страниц проверяйте «view source»: контент должен быть в HTML, а не догружаться."],whenToUse:"<strong>SSR</strong> — публичные страницы с динамическими данными и SEO. <strong>SSG/prerender</strong> — лендинги, доки, блоги. <strong>CSR</strong> — личные кабинеты и всё за логином. <strong>Hybrid</strong> — почти любое реальное приложение. Чистый SPA (CSR) остаётся правильным выбором для инструментов без SEO-требований.",alternative:{title:"Простой SPA + prerender-хостинг",text:"Если проект маленький и SEO не критичен, Nuxt — лишний слой: обычный Vite-SPA (как этот справочник) проще в сборке и хостинге.",code:`# этот справочник — Vite-SPA с hash-роутером:
npm run build → dist/ → любой статический хостинг
# без сервера, без гидрации, без hydration mismatches`},advanced:{title:"Острова и лазы: гидрация по требованию",text:"Продвинутый подход — гидрировать не всё сразу: критичный HTML остаётся статикой, интерактивные зоны гидрируются при появлении в вьюпорте или по действию (lazy hydration).",code:`<!-- Nuxt 3: отложенная гидрация компонентов -->
<LazyHeavyChart hydrate-on-visible />
<LazyComments hydrate-on-idle />

<!-- Результат: интерактив приходит по мере нужды,
     TTI стремится к FCP -->`}}},gm=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),hm=`<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация трёх способов получения данных в Nuxt
type Mode = 'useFetch' | 'useAsyncData' | 'fetch'

const mode = ref<Mode>('useFetch')
const phase = ref<'server' | 'hydration' | 'client'>('server')
const log = ref<string[]>([])

const serverRan = computed(() => phase.value !== 'client' || mode.value === 'fetch')
const clientReruns = computed(() => (mode.value === 'fetch' ? 'да — второй запрос!' : 'нет — payload перенесён'))

function setMode(m: Mode) {
  mode.value = m
  phase.value = 'server'
  log.value = []
  if (m === 'useFetch') {
    log.value.push('сервер: await useFetch("/api/todos") — данные получены')
    log.value.push('сервер: данные сериализованы в payload HTML-страницы')
  } else if (m === 'useAsyncData') {
    log.value.push('сервер: await useAsyncData("todos", () => $fetch("/api/todos"))')
    log.value.push('сервер: результат под ключом "todos" ушёл в payload')
  } else {
    log.value.push('сервер: НИЧЕГО — onMounted ещё не наступал')
    log.value.push('клиент (после гидрации): fetch выполнится только здесь')
  }
}

function toHydration() {
  phase.value = 'hydration'
  if (mode.value === 'fetch') {
    log.value.push('гидрация: компонент смонтирован, но данных ещё нет')
  } else {
    log.value.push('гидрация: Vue сопоставил DOM, данные уже на клиенте из payload')
  }
}

function toClient() {
  phase.value = 'client'
  if (mode.value === 'fetch') {
    log.value.push('клиент: onMounted → fetch → спиннер → данные. Два запроса суммарно!')
  } else {
    log.value.push('клиент: повторного запроса нет — payload использован')
  }
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: mode === 'useFetch' }" @click="setMode('useFetch')">useFetch</button>
      <button class="btn" :class="{ primary: mode === 'useAsyncData' }" @click="setMode('useAsyncData')">useAsyncData</button>
      <button class="btn" :class="{ primary: mode === 'fetch' }" @click="setMode('fetch')">$fetch / onMounted</button>
    </div>

    <div class="row">
      <button class="btn" @click="phase = 'server'; log = []">1 · сервер</button>
      <button class="btn" @click="toHydration">2 · гидрация</button>
      <button class="btn" @click="toClient">3 · клиент после гидрации</button>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>Что происходит ({{ mode }})</b>
        <span class="tag" :class="mode === 'fetch' ? 'bad' : 'ok'">
          повторный запрос на клиенте: {{ clientReruns }}
        </span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
        <div v-if="!log.length" class="muted">выберите режим → пройдите шаги 1→2→3</div>
      </div>
    </div>

    <p class="muted">
      Главное правило Nuxt: данные, нужные при первом рендере, получают через <b>useFetch /
      useAsyncData</b> — они выполняются на сервере и переносятся в payload. Чистый $fetch /
      onMounted откладывает данные на клиент: двойная работа и задержка.
    </p>
  </div>
</template>
`,ym=`// useFetch — обёртка useAsyncData над $fetch (самый частый)
const { data: todos, pending, error, refresh } = await useFetch('/api/todos')

// useAsyncData — когда нужен свой fetcher / комбинирование
const { data: page } = await useAsyncData('page', async () => {
  const [user, posts] = await Promise.all([
    $fetch('/api/me'),
    $fetch('/api/posts'),
  ])
  return { user, posts }
})

// $fetch — просто ofetch-запрос БЕЗ SSR-переноса
const res = await $fetch('/api/track', { method: 'POST', body: {...} })

// lazy-вариант: не блокирует навигацию
const { data } = await useLazyFetch('/api/comments') // pending в шаблоне

// refresh / реактивные ключи
const page = ref(1)
const { data: list } = await useFetch('/api/list', {
  query: { page },
  watch: [page], // перезапрос при смене
})`,xm={title:"useFetch, useAsyncData и $fetch",summary:"SSR-перенос данных в payload, дедупликация по ключу, lazy-варианты, когда обычный $fetch правильнее.",demo:()=>F(()=>import("./Demo-qKNdy26v.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${hm}

// ============ API получения данных ============
${ym}`,content:{intro:"В Nuxt три способа получить данные, и разница между ними — <b>где и сколько раз</b> выполнится запрос. <code>useFetch</code>/<code>useAsyncData</code> — SSR-композаблы: на сервере запрос выполняется, а его результат <b>сериализуется в payload</b> страницы — на клиенте повторного запроса нет. <code>$fetch</code> — обычный HTTP-клиент (ofetch): в setup на сервере выполнится «в никуда» — результат не перенесётся, и клиент запросит ещё раз. В демо видно, как запрос проходит фазы сервер → гидрация → клиент для каждого способа.",howItWorks:"useAsyncData(key, handler) исполняет handler на сервере, сохраняет результат под ключом в <code>nuxtApp.payload.data</code> и возвращает ref-ы data/pending/error. При гидрации клиентский экземпляр находит значение по ключу — handler не выполняется. useFetch(url, opts) — сахар над useAsyncData с $fetch и автоматическим ключом из URL+параметров. Опция <code>lazy</code> (или useLazyFetch) не блокирует навигацию: сервер отдаёт страницу с pending, данные догружаются на клиенте. Реактивные query/params пересматриваются и вызывают рефетч.",mistakes:[{title:"useFetch без await",text:"Без await в SSR-ветке данные не успеют доехать до payload: сервер отдаст pending-страницу, клиент догрузит на гидрации. Для SSR-данных await обязателен (в setup — топ-левел await внутри <script setup>).",code:"const { data } = useFetch('/api/todos') // ❌ сервер не дождётся",fix:"const { data } = await useFetch('/api/todos') // ✅"},{title:"$fetch для первичных данных страницы",text:"$fetch в setup даёт двойной запрос (сервер мимо, клиент заново) и задержку контента. Он для событий: отправка формы, трекинг, удаление — запросы «по действию».",code:`// в setup
const data = await $fetch('/api/todos') // ❌ не попадёт в payload`,fix:`const { data } = await useFetch('/api/todos') // ✅ SSR-перенос
// $fetch оставьте для onSubmit:
await $fetch('/api/todos', { method: 'POST', body })`},{title:"Дублирующиеся ключи useAsyncData",text:'Одинаковый ключ = одна запись кеша: два компонента с key "todos" разделят данные/ошибки. Ключ должен быть уникальным и отражать запрос.',code:`// компонент A и B:
useAsyncData('todos', ...) // ❌ коллизия`,fix:"useAsyncData(`todos-${page.value}`, ...) // ✅ ключ с параметрами"}],nuances:["<code>useFetch</code> ключ генерируется автоматически из URL и опций — явный key нужен при ручных useAsyncData.","Дедупликация: несколько компонентов с одинаковым useFetch в одном запросе выполнят <b>один</b> вызов (кеширование по ключу).","<code>refresh()</code> перезапускает handler; <code>clear()</code> (Nuxt 3.8+) сбрасывает data/pending/error.","Опции <code>server: false</code> — выполнить только на клиенте; <code>lazy</code> — не блокировать навигацию.","Параллельность: несколько await подряд — водопад; независимые запросы — Promise.all или <code>lazy: true</code>.","Типизация выводится из $fetch: <code>data</code> автоматически получает тип ответа API (наследуется и в useAsyncData)."],bestPractices:["Первичные данные страницы — <b>await useFetch/useAsyncData</b>; действия пользователя — $fetch.","Ключи включают параметры запроса — дедупликация работает на вашу пользу.","Независимые запросы — параллельно: Promise.all внутри useAsyncData.","Для списков с фильтрами — реактивный query + watch; для детальных страниц — ключ из params.","Ошибки API обрабатывайте через error, а не try/catch вокруг await — Nuxt даёт единый паттерн."],whenToUse:"<strong>useFetch</strong> — 90% случаев простых GET-запросов. <strong>useAsyncData</strong> — комбинирование источников, трансформация, свой кеш-ключ. <strong>$fetch</strong> — мутации, отправка форм, запросы в обработчиках событий и в server routes. <strong>lazy-варианты</strong> — некритичный контент (комментарии, рекомендации), когда страница не должна ждать.",alternative:{title:"TanStack Query в Nuxt",text:"Для сложного клиентского кеша (инвалидация, мутации, оптимистичные обновления) Query-библиотека поверх Nuxt — законный паттерн; useFetch остаётся для SSR-первичных данных.",code:`// SSR: первичные данные
const { data: initial } = await useFetch('/api/posts')

// клиент: динамический кеш с мутациями
const queryCache = useQueryCache()
// invalidateQueries, optimistic updates и т.д.`},advanced:{title:"callOnce и кеширование вне компонентов",text:"Для данных «один раз на приложение» (конфиг, справочники) useAsyncData с ключом кеширует и на сервере (per-request), и на клиенте — без лишних вызовов.",code:`// composables/useAppConfig.ts
export const useAppConfigData = () => useAsyncData(
  'app-config',
  () => $fetch('/api/config'),
  { dedupe: 'defer' } // повторные вызовы ждут первый
)

// любой компонент:
const { data: config } = useAppConfigData() // ключ общий — 1 запрос`}}},wm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),_m=`<script setup lang="ts">
import { ref, computed } from 'vue'

// Дерево страниц pages/ → маршруты
interface FileNode {
  path: string
  file: string
  note?: string
}

const pages: FileNode[] = [
  { path: '/', file: 'pages/index.vue', note: 'главная' },
  { path: '/about', file: 'pages/about.vue' },
  { path: '/users', file: 'pages/users/index.vue' },
  { path: '/users/:id', file: 'pages/users/[id].vue', note: 'динамический сегмент' },
  { path: '/files/**', file: 'pages/files/[...slug].vue', note: 'catch-all' },
  { path: '/posts/new', file: 'pages/posts/new.vue', note: 'статичный выше динамики' },
  { path: '/posts/:id', file: 'pages/posts/[id].vue' },
]

// Имитация middleware-цепочки
type Phase = 'idle' | 'middleware' | 'page' | 'done'
const phase = ref<Phase>('idle')
const target = ref(pages[3])
const log = ref<string[]>([])

const isAuthed = ref(false)
const needsAuth = computed(() => target.value.path.startsWith('/users'))

function runNavigation() {
  log.value = []
  phase.value = 'middleware'

  const steps: string[] = []
  steps.push(\`navigateTo('\${target.value.path}')\`)

  if (target.value.path === '/files/**') {
    steps.push('middleware: (нет) → страница сразу')
  } else if (needsAuth.value && !isAuthed.value) {
    steps.push('middleware/auth.ts: token не найден → navigateTo("/login?redirect=...")')
    steps.push('страница НЕ отрендерилась — переход прерван')
    log.value = steps
    phase.value = 'done'
    return
  } else {
    if (needsAuth.value) steps.push('middleware/auth.ts: token есть → пропускаем')
    steps.push('маршрутизация: файл → ' + target.value.file)
  }

  steps.push('страница рендерится (SSR или клиент)')
  log.value = steps
  phase.value = 'done'
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <b>Файловый роутинг: pages/ → маршруты</b>
      <div class="table" style="margin-top: 8px">
        <div v-for="p in pages" :key="p.file" class="row row--between" style="padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,.06)">
          <span class="mono">{{ p.file }}</span>
          <span class="mono muted">{{ p.path }} <span v-if="p.note" class="tag info"> {{ p.note }}</span></span>
        </div>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        [id].vue — динамический, [...slug].vue — catch-all, index.vue — корень папки. Вложенность
        папок = вложенные маршруты.
      </p>
    </div>

    <div class="card">
      <b>Middleware-цепочка (имитация)</b>
      <div class="row" style="margin-top: 8px">
        <button
          v-for="p in pages.slice(3)"
          :key="p.file"
          class="btn small"
          :class="{ primary: target.path === p.path }"
          @click="target = p"
        >
          {{ p.path }}
        </button>
        <button class="btn small" :class="{ primary: isAuthed }" @click="isAuthed = !isAuthed">
          auth: {{ isAuthed ? '✅ залогинен' : '❌ гость' }}
        </button>
      </div>
      <button class="btn primary" style="margin-top: 8px" @click="runNavigation">▶ перейти</button>

      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
        <div v-if="!log.length" class="muted">выберите маршрут и нажмите «перейти»</div>
      </div>
    </div>
  </div>
</template>
`,Sm=`pages/
├── index.vue              →  /
├── about.vue              →  /about
├── users/
│   ├── index.vue          →  /users
│   └── [id].vue           →  /users/:id
├── posts/
│   ├── new.vue            →  /posts/new      (статичный ПЕРЕД [id])
│   └── [id].vue           →  /posts/:id
└── files/
    └── [...slug].vue      →  /files/**       (catch-all)

layouts/default.vue   →  <slot /> обёртка для всех страниц
pages/users/[id].vue  →  defineProps<{ id: string }>() — params как пропс`,km=`// middleware/auth.ts (route middleware)
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore() // или useCookie('token')
  if (!auth.isLoggedIn) {
    return navigateTo('/login', { redirectCode: 302, replace: true })
      // + query redirect для возврата
  }
})

// подключение: в definePageMeta страницы
<script setup>
definePageMeta({ middleware: 'auth' })
<\/script>

// или глобально: middleware/auth.global.ts — на каждый переход

// server middleware (server/middleware/) — другая сущность:
// выполняется на СЕРВЕРЕ для всех запросов, до маршрутизации
// (логи, добавление заголовков, SSR-контекст)`,Tm={title:"Файловый роутинг и middleware",summary:"pages/ → маршруты, [id] и [...slug], layouts, definePageMeta, route middleware vs server middleware.",demo:()=>F(()=>import("./Demo-CIK0c9R7.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${_m}

// ============ структура pages/ ============
${Sm}

// ============ middleware ============
${km}`,content:{intro:"Nuxt генерирует маршруты из <b>файловой структуры</b> папки <code>pages/</code>: файл — страница, <code>[id].vue</code> — динамический сегмент, <code>[...slug].vue</code> — catch-all, <code>index.vue</code> — корень. <b>Middleware</b> — функции между переходами: route middleware (аналог guards) объявляется в <code>definePageMeta</code> или глобально (<code>.global.ts</code>). В демо — интерактивное дерево маршрутов и цепочка middleware с проверкой auth.",howItWorks:"Nuxt сканирует pages/ при сборке и строит таблицу маршрутов (vue-router под капотом). Приоритет: статичный сегмент > динамический ([id]) > catch-all ([...slug]) — поэтому /posts/new выигрывает у /posts/:id. Параметры приходят в страницу пропсами (defineProps). Route middleware работает как guard: возвращает navigateTo/abortNavigation или ничего. Отличать от <b>server middleware</b>: тот живёт в server/middleware/ и выполняется до SSR-маршрутизации для всех запросов (заголовки, логи, контекст).",mistakes:[{title:"Динамический сегмент «съедает» статичный",text:'Если [id].vue объявлен, а new.vue создан позже/не туда — /posts/new открывает страницу с id="new". Статика должна существовать на том уровне, приоритет она получит автоматически.',code:`pages/posts/[id].vue   → /posts/new рендерит [id] с id="new" ❌
// забыли создать pages/posts/new.vue`,fix:"pages/posts/new.vue  ← ✅ статичный файл переопределяет динамику"},{title:"Смешивать route middleware и server middleware",text:"Это разные слои: route middleware — клиентский/SSR-переход между страницами; server middleware — HTTP-слой до Nuxt-роутинга. Auth-проверка cookie может быть и там, и там — но назначение разное.",code:`// server/middleware/auth.ts
export default defineEventHandler((event) => {
  // ❌ здесь нет navigateTo — это HTTP-слой
  navigateTo('/login')
})`,fix:`// ✅ сервер: 401/редирект на уровне HTTP
setResponseStatus(event, 401)
// ✅ страницы: route middleware с navigateTo`},{title:"Тяжёлая логика в global middleware",text:".global.ts выполняется на <b>каждый</b> переход — включая первый SSR-рендер. Дорогие проверки (запросы разрешений) замедлят всё приложение.",code:`// auth.global.ts
const perms = await $fetch('/api/permissions') // ❌ на каждый переход`,fix:`// ✅ точечное подключение через definePageMeta
// + кеширование разрешений в стор/cookie`}],nuances:["Папки без файла не создают маршрут: <code>users/index.vue</code> обязателен для /users.","<code>definePageMeta</code> — метаданные страницы (layout, middleware, keepalive) — компилируется, не попадает в рантайм-бандл.","Layouts: <code>definePageMeta({ layout: 'admin' })</code> переключает обёртку; layout может быть у групп страниц.","Переходы с shared-компонентом: Nuxt поддерживает Transition/KeepAlive через definePageMeta.","<code>navigateTo</code> — универсальный редирект (работает и на сервере, и на клиенте); на сервере отдаёт правильные HTTP-редиректы.","Вложенные маршруты: <code>pages/parent.vue</code> + <code>pages/parent/child.vue</code> — в parent нужен <code>&lt;NuxtPage /&gt;</code>."],bestPractices:["Группируйте страницы по разделам папками; имена файлов — по маршруту, а не «Page2.vue».","auth-проверка — route middleware + серверная проверка на API (не доверяйте только фронтовому middleware).","global middleware держите минимальным (1-2 штуки), остальное — через definePageMeta.","Параметры страниц принимайте defineProps — типизация и независимость от route-объекта.","Для «только для этой страницы» логики — definePageMeta + page-specific middleware, а не глобальные if-ы."],whenToUse:"Файловый роутинг — стандарт Nuxt: экономит таблицу маршрутов и даёт конвенцию. <strong>Route middleware</strong> — auth, роли, A/B-редиректы, аналитика переходов. <strong>Server middleware</strong> — сквозная серверная логика: заголовки безопасности, логирование, SSR-контекст.",alternative:{title:"Ручная таблица маршрутов",text:"pages/ можно отключить (pages: false) и описать маршруты в vue-router-стиле — иногда проще для небольших разделов или библиотек компонентов.",code:`// nuxt.config.ts
export default defineNuxtConfig({ pages: false })
// + свои RouterLink/RouterView — контроль, но без конвенций`},advanced:{title:"Route rules + middleware для кеширования",text:"Комбинация декларативного кеширования (route rules) и middleware даёт полный контроль: что кешировать решает конфиг, «свежесть» и персонализацию — middleware.",code:`// nuxt.config.ts
routeRules: {
  '/catalog/**': { isr: 600, headers: { 'x-segment': 'dynamic' } },
}

// middleware/cache-bypass.ts
export default defineNuxtRouteMiddleware((to) => {
  if (to.query.preview) {
    // персональный предпросмотр — минуем кеш на уровне заголовка
    to.meta.bypassCache = true
  }
})`}}},Rm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Cm=`<script setup lang="ts">
import { ref } from 'vue'

// Имитация: сервер и клиент рендерят независимо — совпадёт ли разметка?
interface CaseItem {
  id: string
  title: string
  serverRender: () => string
  clientRender: () => string
  fix: string
  broken: boolean
}

const now = () => new Date().toLocaleTimeString()
const randomItem = () => ['alpha', 'beta', 'gamma'][Math.floor(Math.random() * 3)]

const cases: CaseItem[] = [
  {
    id: 'time',
    title: 'Дата/время в setup',
    broken: true,
    serverRender: () => \`«сгенерировано в 14:02:11» (серверное время)\`,
    clientRender: () => \`«сгенерировано в \${now()}» (клиентское время — другое!)\`,
    fix: 'время рендерите на клиенте (onMounted / <ClientOnly>) или сериализуйте с сервера',
  },
  {
    id: 'random',
    title: 'Math.random() / id-генерация в setup',
    broken: true,
    serverRender: () => \`id="card-\${randomItem()}" (сервер: alpha)\`,
    clientRender: () => \`id="card-\${randomItem()}" (клиент: gamma)\`,
    fix: 'стабильные значения из данных (item.id), не из рандома',
  },
  {
    id: 'locale',
    title: 'Чтение localStorage / языка браузера',
    broken: true,
    serverRender: () => 'тема: dark (сервер не знает localStorage — дефолт)',
    clientRender: () => 'тема: light (клиент прочитал localStorage)',
    fix: 'тема применяется после монтирования (useDark так и делает) или через cookie',
  },
  {
    id: 'pure',
    title: 'Чистый рендер из пропсов/стейта',
    broken: false,
    serverRender: () => '«Ноутбук — 59 990 ₽»',
    clientRender: () => '«Ноутбук — 59 990 ₽» (совпало ✓)',
    fix: '—',
  },
]

const selected = ref(cases[0])
const step = ref<'server' | 'compare'>('server')

function compare(c: CaseItem) {
  selected.value = c
  step.value = 'compare'
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button
        v-for="c in cases"
        :key="c.id"
        class="btn"
        :class="{ primary: selected.id === c.id }"
        @click="compare(c)"
      >
        {{ c.title }}
      </button>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="row row--between">
          <b>🖥️ Сервер отрендерил</b>
        </div>
        <p class="mono muted" style="margin: 8px 0 0">{{ selected.serverRender() }}</p>
      </div>
      <div class="card">
        <div class="row row--between">
          <b>🌐 Клиент гидрирует</b>
          <span class="tag" :class="selected.broken ? 'bad' : 'ok'">
            {{ selected.broken ? 'MISMATCH' : 'совпало' }}
          </span>
        </div>
        <p class="mono muted" style="margin: 8px 0 0">{{ selected.clientRender() }}</p>
      </div>
    </div>

    <div v-if="selected.broken" class="card">
      <div class="row row--between">
        <b>Что видит пользователь</b>
        <span class="tag warn">dev: warning в консоли</span>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        В dev — предупреждение «Hydration node mismatch». В <b>prod</b> Vue отбрасывает серверный
        узел и рендерит заново: <b>мигание контента</b>, потеря фокуса, иногда дубли узлов.
      </p>
    </div>

    <div class="row">
      <span class="tag ok">как исправить: {{ selected.fix }}</span>
    </div>

    <p class="muted">
      Правило: разметка первого рендера должна зависеть только от данных, <b>одинаково доступных</b>
      серверу и клиенту. Всё клиентское (время, локаль, localStorage, рандом) — после монтирования
      или в &lt;ClientOnly&gt;.
    </p>
  </div>
</template>
`,Pm=`<!-- 1) ClientOnly: блок только на клиенте (сервер рендерит fallback) -->
<ClientOnly>
  <Timestamp :value="item.createdAt" />
  <template #fallback>
    <span class="skeleton" />
  </template>
</ClientOnly>

// 2) Клиентский рендер после монтирования
const now = ref<string | null>(null)
onMounted(() => { now.value = new Date().toLocaleTimeString() })
<!-- сервер: null → пусто; клиент: время. Mismatch нет: null → контент
     не «замена текста», а отсутствие узла -->

// 3) Синхронизация через cookie (SSR-безопасная тема)
const theme = useCookie('theme', { default: () => 'dark' })
// сервер видит cookie запроса → рендерит ту же тему, что увидит клиент

// 4) Стабильные id из данных, не из рандома
<li v-for="item in items" :key="item.id"> <!-- ✅ item.id -->
<li v-for="item in items" :key="\`k-\${Math.random()}\`"> <!-- ❌ -->`,Em={title:"Гидрация и hydration mismatches",summary:"Почему DOM сервера и клиента расходится: время, рандом, localStorage; <ClientOnly>, cookie-синхронизация, последствия в prod.",demo:()=>F(()=>import("./Demo-BkX2_BI2.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${Cm}

// ============ приёмы исправления ============
${Pm}`,content:{intro:"<b>Гидрация</b> — сопоставление клиентского Vue с готовым HTML от сервера. <b>Mismatch</b> возникает, когда разметка первого клиентского рендера отличается от серверной: Vue не может «прикрепиться» к узлу. Причины всегда одинаковые: <b>нестабильные данные</b> (время, random, id), <b>клиентские источники</b> (localStorage, язык, размер окна), <b>ошибки сервера</b> (упал fetch, вернулся error-экран). В демо — сравнение «сервер vs клиент» для четырёх типовых случаев: три ломаются, один чист.",howItWorks:"Vue при гидрации идёт по vnode-дереву и ожидает то же DOM-содержимое, что сгенерировал сервер. Текстовый узел не совпал — warning (dev) и замена содержимого; структура не совпала — весь поддерево рендерится заново. В prod предупреждений нет: пользователь видит <b>мигание</b> (контент «перерисовался» после гидрации), а в тяжёлых случаях — потерю состояния фокуса и дублей. Клиентские данные вводятся только после монтирования (onMounted ref-ы стартуют null) или изолируются в <code>&lt;ClientOnly&gt;</code> с fallback-скелетоном.",mistakes:[{title:"Время/даты напрямую в шаблоне",text:"new Date() на сервере и на клиенте — разные значения (и разные таймзоны). Самая частая причина mismatch в реальных проектах.",code:"<span>Обновлено: {{ new Date().toLocaleTimeString() }}</span> <!-- ❌ -->",fix:`<ClientOnly><span>Обновлено: {{ formatted }}</span></ClientOnly>
// formatted = ref(null) → onMounted(new Date())`},{title:"localStorage в setup",text:"На сервере localStorage нет — код упадёт; с try/catch сервер возьмёт дефолт, клиент — сохранённое значение → mismatch.",code:"const theme = localStorage.getItem('theme') ?? 'dark' // ❌",fix:`// ✅ SSR-безопасный источник истины — cookie
const theme = useCookie('theme')
// или клиентское применение после монтирования (useDark)`},{title:"Игнорировать prod-последствия",text:"«В консоли warning, но работает» — в prod мигание контента и прыжки layout. Особенно опасно для SEO-страниц: пользователь успевает увидеть старый текст.",code:'// dev: "[Vue warn]: Hydration node mismatch" — и молчок в prod',fix:`// ✅ находите причину сразу: mismatch — всегда баг рендера,
// а не «особенность»`}],nuances:["<code>&lt;ClientOnly&gt;</code> прячет содержимое от сервера: fallback (#fallback слот) рендерится вместо него — используйте скелетоны, чтобы не прыгало.","Mismatch-предупреждение показывает diff узлов в dev — читайте, там точное место.","useDark/useColorMode спроектированы SSR-безопасно: применяют класс после гидрации (мгновенное «мигание темы» лечится cookie + инлайн-скриптом).","Куки — единственный способ дать серверу «клиентские» знания (локаль, тема): они приходят с запросом.","Ошибка SSR-данных (500) тоже даёт mismatch: сервер отдал error-страницу, клиент рендерит нормальную — обрабатывайте error в useAsyncData одинаково на обеих сторонах.","Для списков важна стабильность порядка: сортировка «на лету» по нестабильному ключу ломает гидрацию списков."],bestPractices:["Первый рендер зависит <b>только от данных запроса</b>: params, cookie, payload API.","Всё нестабильное — в ClientOnly с осмысленным fallback (скелетон тех же размеров).","Тема/локаль — через cookie, если важно избежать мигания.","Проверяйте prod-сборку: dev-предупреждения не живут в проде, а проблемы — да.","Тест на двух сторонах: интеграционные тесты должны рендерить страницу и на сервере, и на клиенте."],whenToUse:"Тема обязательна для <strong>любого SSR/SSG-проекта</strong>: понимание hydration экономит часы на «мигающих» страницах. Типовые зоны риска: футеры с копирайт-годом, даты, аватары из localStorage, счётчики корзины, виджеты с window-логикой.",alternative:{title:"Полный CSR для проблемных страниц",text:"Если страница сплошь клиентская (дашборд, редактор) — route rule <code>ssr: false</code> убирает класс проблем целиком: нет серверного HTML — нет и mismatch.",code:`routeRules: {
  '/admin/**': { ssr: false }, // CSR: гидрации нет вообще
}`},advanced:{title:"Инлайн-скрипт темы: ноль мигания",text:"Продвинутый приём: до гидрации, прямо в <head>, синхронный скрипт читает cookie/localStorage и ставит класс — первый кадр уже с правильной темой, Vue гидрируется поверх без конфликтов.",code:`<!-- nuxt.config.ts → app.head.script -->
{
  innerHTML: \`(function(){try{var t=localStorage.getItem('theme');
    if(t==='dark') document.documentElement.classList.add('dark')
  }catch(e){}})()\`,
  tagPosition: 'head',
}
/* класс ставится ДО первого рендера → CSS не мигает,
   Vue гидрирует на уже правильном классе */`}}},Om=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),Mm=`<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация useHead / useSeoMeta
interface SeoState {
  title: string
  description: string
  ogTitle: string
  ogImage: string
  robots: string
}

const seo = ref<SeoState>({
  title: 'Каталог — Мой магазин',
  description: '',
  ogTitle: '',
  ogImage: '',
  robots: 'noindex',
})

const warnings = computed(() => {
  const w: string[] = []
  if (!seo.value.description) w.push('description пустой — Google возьмёт случайный текст со страницы')
  if (!seo.value.ogTitle) w.push('og:title отсутствует — соцсети покажут только URL')
  if (!seo.value.ogImage) w.push('og:image отсутствует — ссылки без превью')
  if (seo.value.robots === 'noindex' && !seo.value.title.includes('Каталог')) w.push('noindex на публичной странице — страница выпадет из поиска')
  if (seo.value.robots === 'noindex') w.push('robots: noindex — страница закрыта от индексации')
  return w
})

function setGoodSeo() {
  seo.value = {
    title: 'Ноутбуки — Мой магазин',
    description: 'Каталог ноутбуков: 120 моделей, цены от 30 000 ₽, доставка завтра.',
    ogTitle: 'Ноутбуки — Мой магазин',
    ogImage: 'https://example.com/og/laptops.jpg',
    robots: 'index, follow',
  }
}

function setBadSeo() {
  seo.value = {
    title: 'Мой магазин',
    description: '',
    ogTitle: '',
    ogImage: '',
    robots: 'noindex',
  }
}

// Серверные маршруты: структура server/
const serverRoutes = [
  { file: 'server/api/todos.get.ts', method: 'GET', path: '/api/todos', note: 'возвращает данные' },
  { file: 'server/api/todos.post.ts', method: 'POST', path: '/api/todos', note: 'создаёт' },
  { file: 'server/routes/sitemap.xml.get.ts', method: 'GET', path: '/sitemap.xml', note: 'сырой маршрут (без /api)' },
  { file: 'server/middleware/log.ts', method: '—', path: 'все запросы', note: 'до маршрутизации' },
]

// Автоимпорты: что доступно без import
const autoImports = [
  { name: 'ref, computed, watch', from: 'vue' },
  { name: 'useRoute, useRouter, navigateTo', from: 'vue-router / nuxt' },
  { name: 'useFetch, useAsyncData, $fetch', from: 'nuxt' },
  { name: 'useState, useCookie, useHead, useSeoMeta', from: 'nuxt' },
  { name: 'компоненты из components/', from: 'ваша папка' },
  { name: 'composables/ use*-функции', from: 'ваша папка' },
]
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>useSeoMeta — мета-теги страницы (имитация)</b>
        <button class="btn small" @click="setGoodSeo">заполнить правильно</button>
        <button class="btn small danger" @click="setBadSeo">испортить</button>
      </div>

      <div class="stack" style="gap: 6px; margin-top: 10px">
        <div class="row">
          <span class="label" style="width: 120px">title</span>
          <input v-model="seo.title" class="input" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">description</span>
          <input v-model="seo.description" class="input" placeholder="до 160 символов…" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">og:title</span>
          <input v-model="seo.ogTitle" class="input" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">og:image</span>
          <input v-model="seo.ogImage" class="input" placeholder="https://…" />
        </div>
        <div class="row">
          <span class="label" style="width: 120px">robots</span>
          <select v-model="seo.robots" class="select">
            <option value="index, follow">index, follow</option>
            <option value="noindex">noindex</option>
          </select>
        </div>
      </div>

      <div class="stack" style="gap: 4px; margin-top: 10px">
        <span v-for="w in warnings" :key="w" class="tag warn">{{ w }}</span>
        <span v-if="!warnings.length" class="tag ok">мета-теги в порядке ✓</span>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>server/ — серверная часть Nuxt</b>
        <div class="table" style="margin-top: 8px">
          <div v-for="r in serverRoutes" :key="r.file" style="padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,.06)">
            <div class="row row--between">
              <span class="mono">{{ r.file }}</span>
              <span class="tag info">{{ r.method }}</span>
            </div>
            <span class="mono muted">{{ r.path }} · {{ r.note }}</span>
          </div>
        </div>
      </div>

      <div class="card">
        <b>Автоимпорты (без import …)</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li v-for="a in autoImports" :key="a.name">{{ a.name }} <span class="tag">← {{ a.from }}</span></li>
        </ul>
        <p class="muted" style="margin: 8px 0 0">
          Явные импорты тоже работают; автоимпорты — конвенция и tree-shaking по использованию.
        </p>
      </div>
    </div>

    <p class="muted">
      useSeoMeta — реактивный: title зависит от данных страницы (<code>title: () =&gt; product.value.name</code>).
      Серверные маршруты живут рядом с фронтендом — идеальны для BFF-слоя и проксирования внешних API.
    </p>
  </div>
</template>
`,Im=`// useSeoMeta — типизированные мета-теги (все поля с автодополнением)
useSeoMeta({
  title: () => product.value ? \`\${product.value.name} — Магазин\` : 'Магазин',
  description: () => product.value?.summary ?? 'Каталог товаров',
  ogTitle: () => \`\${product.value?.name} — Магазин\`,
  ogImage: () => product.value?.image,
  robots: 'index, follow',
})

// useHead — низкоуровневый аналог: любые теги/атрибуты/скрипты
useHead({
  link: [{ rel: 'canonical', href: () => \`https://shop.dev\${route.path}\` }],
  script: [{ src: 'https://...', defer: true }],
})

// app.head в nuxt.config — глобальные дефолты (favicon, базовые meta)`,Am=`// server/api/todos.get.ts — GET /api/todos
export default defineEventHandler(async (event) => {
  const query = getQuery(event)              // ?page=2
  const body = await readBody(event)         // POST-тело (в .post.ts)
  setHeader(event, 'cache-control', 'max-age=60')
  return db.todos.list(query.page)           // объект → JSON ответ
})

// server/routes/sitemap.xml.get.ts — «сырой» маршрут
export default defineEventHandler(() => {
  setHeader(event, 'content-type', 'application/xml')
  return generateSitemap()                    // строка, не JSON
})

// server/utils/db.ts — серверные утилиты (автоимпорт на сервере)
// .server.ts / .client.ts суффиксы — код только для одной стороны`,Dm={title:"SEO, useHead, server routes и auto-imports",summary:"Мета-теги через useSeoMeta, SSR-SEO, server/api и server/routes, server middleware, автоимпорты и модули.",demo:()=>F(()=>import("./Demo-Dady00ZJ.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${Mm}

// ============ SEO-композаблы ============
${Im}

// ============ server/ структура ============
${Am}`,content:{intro:"SSR-приложение без SEO-тегов теряет главное преимущество. <code>useSeoMeta</code> задаёт <b>типизированные</b> мета-теги (title, description, OG-протокол) — реактивно, на каждую страницу. Серверная часть живёт в <code>server/</code>: <code>api/*.get.ts</code> — REST-эндпоинты, <code>routes/</code> — сырые маршруты (sitemap, robots.txt), <code>middleware/</code> — сквозная серверная логика. <b>Автоимпорты</b> избавляют от import-шума: vue-API, Nuxt-композаблы, ваши components/ и composables/ доступны напрямую. В демо — SEO-тренажёр с валидацией и карта server/-структуры.",howItWorks:"useSeoMeta/useHead строятся на Unhead: реактивные значения (функции/ref) пересчитываются и патчат <code>&lt;head&gt;</code> — на сервере при SSR-рендере (теги попадают в HTML, это и видит краулер), на клиенте при переходах. server/api файлы — H3-эндпоинты: суффикс метода (.get/.post) выбирает обработчик, getQuery/readBody читают запрос, возвращаемый объект сериализуется. Автоимпорты реализованы на этапе компиляции: компилятор видит использование <code>ref</code> и добавляет импорт — tree-shaking работает, «глобальных» переменных нет.",mistakes:[{title:"SEO-теги только в index.html",text:"Статичный head из шаблона одинаков для всех страниц: соцсети и поисковики видят один title на каталог, карточку и аккаунт. Уникальные теги — через useSeoMeta на страницах.",code:'<!-- nuxt.config app.head.title: "Магазин" — для ВСЕХ страниц -->',fix:"// pages/products/[id].vue\nuseSeoMeta({ title: () => `${product.value.name} — Магазин` })"},{title:"Секреты в клиентском коде вместо runtimeConfig",text:"PUBLIC_-переменные попадают в бандл. Секреты (ключи API) живут в runtimeConfig.server-части и читаются только на сервере.",code:"const key = import.meta.env.VITE_API_SECRET // ❌ утечёт в браузер",fix:`// nuxt.config: runtimeConfig: { apiSecret: '', public: { apiBase: '' } }
const config = useRuntimeConfig()
config.apiSecret // ✅ доступен ТОЛЬКО на сервере
config.public.apiBase // и на сервере, и на клиенте`},{title:"Использовать server/api как полноценный бэкенд",text:"Server routes идеальны для BFF/прокси/мелких эндпоинтов, но не заменяют настоящий бэкенд: нет фоновых задач, очередей, сложной доменной логики. Не выращивайте там монолит.",code:"// ❌ в server/api: авторизация с БД, очереди, платежи, рассылки",fix:`// ✅ server/api: прокси внешнему API, агрегация, кеш-слой
// тяжёлая логика — в выделенном бэкенде/микросервисе`}],nuances:["useSeoMeta покрывает <b>весь</b> OG/Twitter-протокол с автодополнением — опечатка в поле невозможна.","Реактивный title через функцию: <code>title: () =&gt; ...</code> — обновляется при смене данных без перезагрузки.","<code>server/api</code> с тем же файлом и разными суффиксами — разные обработчики (todos.get / todos.post / todos.delete).","Автоимпорт ваших утилит: папка <code>utils/</code> — для клиентов, <code>server/utils/</code> — для сервера.","Nuxt <b>модули</b> (@nuxt/image, @nuxtjs/tailwindcss) — плагины сборки: добавляют композаблы, компоненты и конфиги одной строкой в modules: [].","<code>.server.ts</code>/<code>.client.ts</code> суффиксы и <code>&lt;ClientOnly&gt;</code> — тонкое управление стороной исполнения."],bestPractices:["Каждая публичная страница — уникальные title/description через useSeoMeta.","OG-теги обязательны для любых «шарящихся» страниц: карточки, посты, статьи.","runtimeConfig: public-ключи отдельно от секретов; секреты никогда не в PUBLIC_.","server/api — тонкий слой (прокси/агрегация), бизнес-логика — в выделенном бэкенде.","Модули Nuxt вместо ручной настройки: экосистема решает 80% интеграций декларативно."],whenToUse:"<strong>useSeoMeta</strong> — на всех публичных страницах. <strong>server/api</strong> — BFF: скрытие ключей, агрегация нескольких API, кеширование, вебхуки с простыми проверками. <strong>Модули</strong> — стандартные интеграции (изображения, шрифты, CSS-фреймворки, sitemap) вместо ручной сборки.",alternative:{title:"Внешний бэкенд + прокси",text:"Когда логика велика, server/api не растёт: фронтенд обращается к выделенному бэкенду, а Nuxt остаётся рендер-слоем. server/api используют как тонкий прокси для cookies/секретов.",code:`// server/api/products.get.ts — только прокси:
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  return $fetch(\`\${config.privateApiBase}/products\`, {
    headers: { authorization: \`Bearer \${config.apiKey}\` },
    query: getQuery(event),
  })
})`},advanced:{title:"Свой Nuxt-модуль",text:"Модуль — функция, расширяющая Nuxt при сборке: добавляет композаблы, компоненты, server-хендлеры, ловит хуки сборки. Так устроена вся экосистема Nuxt.",code:`// modules/analytics.ts
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: { name: 'analytics' },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))
    addImports([{ name: 'useTrack', from: resolve('./runtime/composables') }])
    nuxt.hook('nitro:config', (cfg) => { /* серверные расширения */ })
  },
})`}}},Vm=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),Lm=`<script setup lang="ts">
import { ref, computed } from 'vue'

interface Row {
  id: number
  name: string
  score: number
}

// ================= ПРОБЛЕМНЫЙ вариант: всё в одном компоненте =================
const rows = ref<Row[]>(
  Array.from({ length: 40 }, (_, i) => ({ id: i + 1, name: \`элемент \${i + 1}\`, score: Math.round(Math.random() * 100) })),
)

const search = ref('')
const renderCount = ref(0)
const lastDiffMs = ref(0)

// Счётчик рендеров всего списка: любая печать в поиске рендерит ВСЕ 40 карточек
const filtered = computed(() =>
  rows.value.filter(r => r.name.includes(search.value.trim())),
)

// ================= ОПТИМИЗИРОВАННЫЙ: изолированные компоненты =================
// Счётчик для «оптимизированной» половины: карточки-детки не перерендериваются
const optimizedRenders = ref(0)

const heavyMs = ref(0)
function runHeavyFilter() {
  const start = performance.now()
  // имитация дорогого вычисления
  let acc = 0
  for (let i = 0; i < 5_000_000; i++) acc += i % 7
  heavyMs.value = Math.round(performance.now() - start)
  void acc
}

// computed кеширует — повторные вызовы не пересчитывают
const cachedMs = ref(0)
const heavyComputed = computed(() => {
  const start = performance.now()
  let acc = 0
  for (let i = 0; i < 5_000_000; i++) acc += i % 7
  return Math.round(performance.now() - start) + acc * 0
})
function readCached() {
  const t0 = performance.now()
  void heavyComputed.value // чтение кеша
  cachedMs.value = Math.round((performance.now() - t0) * 1000) / 1000
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <b>1. Изоляция ререндеров</b>
      <p class="muted" style="margin: 6px 0 0">
        Печатайте в поиске: фильтруется список, но <b>обновляются только видимые карточки</b>.
        Vue-компонент ререндерится целиком, но мелкая нарезка + стабильные ключи делают дифф
        дешёвым.
      </p>
      <input v-model="search" class="input" style="max-width: 280px; margin-top: 8px" placeholder="поиск: «элемент»…" />
      <div class="row" style="margin-top: 8px">
        <span class="stat">показано: <b>{{ filtered.length }}</b> из {{ rows.length }}</span>
        <button class="btn small" @click="renderCount++">симуляция: рендер № {{ renderCount }}</button>
      </div>
      <div class="stack" style="gap: 4px; margin-top: 8px; max-height: 180px; overflow: auto">
        <div v-for="r in filtered" :key="r.id" class="row row--between card" style="margin: 0; padding: 6px 10px">
          <span>{{ r.name }}</span>
          <span class="mono muted">score={{ r.score }}</span>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>2. Дорогой фильтр: функция vs computed</b>
        <button class="btn small" style="margin-top: 8px" @click="runHeavyFilter">
          вызвать функцию (каждый раз заново)
        </button>
        <p class="mono muted" style="margin: 6px 0 0">
          функция: {{ heavyMs || '—' }} мс (каждый вызов пересчитывает)
        </p>
        <button class="btn small primary" style="margin-top: 8px" @click="readCached">
          прочитать computed
        </button>
        <p class="mono muted" style="margin: 6px 0 0">
          computed-чтение: {{ cachedMs || '—' }} мс (после первого раза — кеш)
        </p>
        <p class="muted" style="margin: 6px 0 0">
          Нажмите «прочитать computed» несколько раз: время близко к 0 — пересчёта нет.
        </p>
      </div>

      <div class="card">
        <b>3. Практические правила</b>
        <ul class="muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>мелкая нарезка: ререндер затрагивает только изменившееся поддерево</li>
          <li>стабильные :key — дифф по id, а не по индексам</li>
          <li>computed вместо методов — кеш бесплатно</li>
          <li>v-once/v-memo — для статичных и «замороженных» участков</li>
          <li>shallowRef для больших массивов с заменой целиком</li>
        </ul>
        <p class="mono muted" style="margin: 8px 0 0">оптимизированных рендеров: {{ optimizedRenders }}</p>
      </div>
    </div>
  </div>
</template>
`,$m=`// ❌ ПРОБЛЕМА: метод в шаблоне + один гигантский компонент
<li v-for="row in expensiveFilter(rows)" :key="row.id">
  {{ row.name }}
</li>
// expensiveFilter() вызывается на КАЖДЫЙ ререндер компонента —
// ввод символа в поиске = пересчёт фильтра по всем строкам + полный дифф списка

// ✅ ОПТИМИЗАЦИЯ 1: computed кеширует
const filtered = computed(() => rows.value.filter(r => match(r, query.value)))
// пересчёт только при смене rows или query

// ✅ ОПТИМИЗАЦИЯ 2: вынос строки в отдельный компонент
<!-- RowCard.vue получает props, ререндерится только при изменении СВОИХ пропсов -->
<RowCard v-for="row in filtered" :key="row.id" :row="row" />

// ✅ ОПТИМИЗАЦИЯ 3: v-memo для «замороженных» ячеек
<div v-for="row in rows" :key="row.id" v-memo="[row.id === selected]">
  <!-- пересматривается только при смене условия -->
  <HeavyStatic :row="row" />
</div>`,Um={title:"Лишние ререндеры и кеш computed",summary:"Откуда берётся лишняя работа: методы в шаблоне, гигантские компоненты; оптимизации: computed, нарезка, v-memo.",demo:()=>F(()=>import("./Demo-Do9vZqRh.js"),[]),code:`// ============ Demo.vue (интерактив с измерениями) ============
${Lm}

// ============ проблема → оптимизация ============
${$m}`,content:{intro:"Vue рендерит эффективно, но <b>объём работы на ререндер</b> зависит от структуры кода. Три главных источника лишней работы: <b>методы в шаблоне</b> (выполняются на каждый рендер без кеша), <b>гигантские компоненты</b> (печать в поиске перерендеривает всю страницу) и <b>нестабильные пропсы/ключи</b> (дифф по индексам). В демо — живые измерения: дорогой фильтр как функция против того же в computed (кеш), и список, обновляющийся при печати точечно.",howItWorks:"Рендер-функция компонента выполняется целиком при каждой смене его зависимостей. Метод, вызванный в шаблоне, — часть этой функции: перерасход очевиден. computed вне render-функции: пересчёт только при инвалидации зависимостей, чтение — из кеша. Мелкая нарезка компонентов сужает <b>область ререндера</b>: изменение search.value перерендеривает только компонент с полем ввода и список, но не соседние блоки. v-memo добавляет ручной кеш поддерева: vnode-ы переиспользуются, пока зависимости в массиве не изменились.",mistakes:[{title:"Дорогие методы в шаблоне",text:"Функции в выражениях шаблона выполняются на каждый рендер: сортировка/фильтрация тысяч элементов по несколько раз за секунду при взаимодействии.",code:'<tr v-for="row in sortRows(filterRows(rows))"> <!-- ❌ ×каждый рендер -->',fix:`const visible = computed(() => sortRows(filterRows(rows.value))) // ✅
<tr v-for="row in visible">`},{title:"Держать страницу одним компонентом",text:"Всё в одном SFC = любое изменение состояния ререндерит всё. Нарезка на компоненты — не только читаемость, но и границы ререндера.",code:"<!-- 2000-строчный App.vue: инпут перерендеривает и шапку, и таблицу, и графики -->",fix:`<!-- ❌ → ✅: SearchBox, DataTable, Charts — отдельные компоненты,
каждый перерендеривается только от своих зависимостей -->`},{title:"v-memo без понимания зависимостей",text:"v-memo замораживает поддерево до смены перечисленных значений. Забытая зависимость = «застрявший» UI: данные изменились, а блок нет.",code:'<div v-memo="[row.id]"> {{ row.name }} </div> <!-- ❌ name не в memo -->',fix:'<div v-memo="[row.id, row.name]"> {{ row.name }} </div> <!-- ✅ -->'}],nuances:["Vue <b>уже</b> делает дифф-патчинг: «ререндер» не означает пересоздание DOM. Оптимизации сокращают объём vnode-сравнения, а не «убирают рендер».","Компонент перерендеривается при смене <b>любого</b> прочитанного им реактивного значения — включая route и сторы.","v-memo требует и key, и полного перечня зависимостей — инструмент точечный, не «магия быстрее».","Дифф по ключам O(n) со смарт-алгоритмом; перестановки списков дешевле пересоздания.","Профилирование: Vue Devtools → Inspector → Flamegraph показывает, что именно перерендерилось и сколько это заняло.","В 90% случаев «тормозит Vue» = дорогой computed или огромный список в DOM — лечится виртуализацией (своя тема)."],bestPractices:["Всё производное — computed; в шаблоне — только чтение значений и простые выражения.","Нарезайте по «единице обновления»: если блок обновляется независимо — он компонент.","Ключи — стабильные id; никаких индексов для изменяемых списков.","v-memo/v-once — точечно, с комментарием зачем; не раскидывайте без профилирования.","Мерьте перед оптимизацией: Devtools Flamegraph, performance.now() на подозрительных computed."],whenToUse:"Оптимизации нужны, когда измерения показывают проблему: лаги при вводе, длинные таски рендера, jank при скролле. Профилактика бесплатна и всегда уместна: computed, нарезка, ключи. Тяжёлая артиллерия (v-memo, virtualization, shallowRef) — по профилю, а не «на всякий случай».",alternative:{title:"v-once для полностью статичного контента",text:"Чисто статичные блоки (шапки, лицензионные тексты) можно отрендерить один раз: v-once исключает их из последующих диффов целиком.",code:`<footer v-once>
  <p>© 2026 Компания. Все права защищены.</p>
  <p>Статичный текст не участвует в диффах.</p>
</footer>`},advanced:{title:"Профилирование рендеров во Vue Devtools",text:"Flamegraph показывает компоненты с временем рендера; component render tracking подсвечивает перерендеры в реальном времени. Это первый шаг любой оптимизации — измерить, а не угадывать.",code:`// Vue Devtools → Inspector → Component events / Flamegraph
// 1. Включите «Highlight updates» — увидите, что перерендеривается
// 2. Запишите сессию во Flamegraph при воспроизведении лага
// 3. Ищите широкие полосы: какой компонент съедает время
// 4. Проверьте его зависимости: что триггерит ререндер`}}},Fm=Object.freeze(Object.defineProperty({__proto__:null,default:Um},Symbol.toStringTag,{value:"Module"})),Nm=`<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'

interface BigRow {
  id: number
  name: string
  value: number
}

// Генерация «большого» набора
const COUNT = 5000
const allRows: BigRow[] = Array.from({ length: COUNT }, (_, i) => ({
  id: i + 1,
  name: \`row-\${i + 1}\`,
  value: Math.round(Math.random() * 1000),
}))

// ================= 1. Обычный рендер vs «виртуальный» =================
const renderMode = ref<'full' | 'virtual'>('virtual')
const scrollTop = ref(0)
const ROW_H = 32
const VIEW_H = 200

const startIndex = computed(() =>
  renderMode.value === 'virtual' ? Math.floor(scrollTop.value / ROW_H) : 0,
)
const visibleCount = Math.ceil(VIEW_H / ROW_H) + 2
const visibleRows = computed(() =>
  renderMode.value === 'virtual'
    ? allRows.slice(startIndex.value, startIndex.value + visibleCount)
    : allRows,
)

function onScroll(e: Event) {
  scrollTop.value = (e.target as HTMLElement).scrollTop
}

// ================= 2. Code splitting: ленивая загрузка =================
const HeavyWidget = defineAsyncComponent(() => import('./HeavyWidget.vue'))
const widgetLoaded = ref(false)
const mainBundleKb = ref(42) // условный размер «основного» чанка
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <div class="row row--between">
        <b>1. Список {{ COUNT.toLocaleString('ru') }} строк</b>
        <div class="row" style="gap: 6px">
          <button class="btn small" :class="{ primary: renderMode === 'full' }" @click="renderMode = 'full'">
            все в DOM
          </button>
          <button class="btn small" :class="{ primary: renderMode === 'virtual' }" @click="renderMode = 'virtual'">
            виртуализация
          </button>
        </div>
      </div>

      <div
        class="mono"
        style="overflow: auto; height: 200px; margin-top: 8px; border: 1px solid rgba(255,255,255,.08); border-radius: 6px"
        @scroll="onScroll"
      >
        <div
          v-if="renderMode === 'virtual'"
          :style="{ height: \`\${COUNT * ROW_H}px\`, position: 'relative' }"
        >
          <div
            class="row row--between"
            :style="{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              transform: \`translateY(\${startIndex * ROW_H}px)\`,
            }"
          >
            <div v-for="r in visibleRows" :key="r.id" class="row row--between" :style="{ height: ROW_H + 'px', width: '100%' }">
              <span>{{ r.name }}</span>
              <span class="muted">{{ r.value }}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <div v-for="r in visibleRows" :key="r.id" class="row row--between" :style="{ height: ROW_H + 'px' }">
            <span>{{ r.name }}</span>
            <span class="muted">{{ r.value }}</span>
          </div>
          <p class="muted" style="padding: 8px">
            ⚠️ Все {{ COUNT.toLocaleString('ru') }} узлов в DOM: скролл подтормаживает на слабых
            машинах, память растёт.
          </p>
        </div>
      </div>

      <p class="mono muted" style="margin: 8px 0 0">
        в DOM: {{ visibleRows.length }} узлов (режим: {{ renderMode }})
      </p>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>2. Code splitting</b>
        <span class="mono muted">main-бандл: {{ mainBundleKb }} КБ{{ widgetLoaded ? ' + widget-чанк' : '' }}</span>
      </div>
      <p class="muted" style="margin: 8px 0 0">
        Тяжёлый виджет не входит в main-чанк — грузится по требованию (defineAsyncComponent /
        ленивый маршрут). Проверьте Network: при клике появится отдельный js-файл.
      </p>
      <button class="btn primary" style="margin-top: 8px" @click="widgetLoaded = true">
        загрузить виджет лениво
      </button>
      <div v-if="widgetLoaded" style="margin-top: 8px">
        <HeavyWidget />
      </div>
    </div>
  </div>
</template>
`,jm=`<script setup lang="ts">
// Имитация тяжёлой зависимости: графическая библиотека, редактор и т.п.
const bars = Array.from({ length: 36 }, (_, i) => 30 + Math.round(60 * Math.abs(Math.sin(i / 4))))
<\/script>

<template>
  <div class="card">
    <div class="row row--between">
      <b>📦 HeavyWidget</b>
      <span class="tag ok">отдельный чанк</span>
    </div>
    <div class="row" style="gap: 3px; align-items: flex-end; height: 60px; margin-top: 8px">
      <div
        v-for="(h, i) in bars"
        :key="i"
        style="flex: 1; background: var(--accent); opacity: .75; border-radius: 2px"
        :style="{ height: h + '%' }"
      />
    </div>
    <p class="muted mono" style="margin: 6px 0 0">
      Этот компонент + его зависимости жили бы в main-бандле без code splitting.
    </p>
  </div>
</template>
`,Hm=`// Виртуализация вручную (суть паттерна):
const ROW_H = 32
const scrollTop = ref(0)

const startIndex = computed(() => Math.floor(scrollTop.value / ROW_H))
const visibleCount = Math.ceil(viewportHeight / ROW_H) + 2 // буфер

const visibleRows = computed(() =>
  rows.value.slice(startIndex.value, startIndex.value + visibleCount)
)

<!-- контейнер с полной высотой: скроллбар «настоящий» -->
<div style="height: 400px; overflow: auto" @scroll="onScroll">
  <div :style="{ height: rows.length * ROW_H + 'px', position: 'relative' }">
    <div :style="{ transform: \`translateY(\${startIndex * ROW_H}px)\` }">
      <Row v-for="r in visibleRows" :key="r.id" :row="r" />
    </div>
  </div>
</div>

// Продакшен: vue-virtual-scroller / @tanstack/vue-virtual —
// добавляют переменную высоту, горизонталь, сетки`,Bm=`// 1) Ленивые маршруты — главный инструмент
{ path: '/editor', component: () => import('./pages/Editor.vue') }

// 2) Тяжёлые компоненты — по требованию
const Editor = defineAsyncComponent(() => import('./Editor.vue'))

// 3) Библиотеки: импортируйте точечно
import { format } from 'date-fns'           // ✅ tree-shakable
import _ from 'lodash'                       // ❌ весь lodash в бандл
import { debounce } from 'lodash-es'         // ✅

// 4) Vite: анализ и ручные чанки
// npx vite build --mode=production
import { visualizer } from 'rollup-plugin-visualizer'
export default { plugins: [visualizer({ open: true })] }
// build.rollupOptions.output.manualChunks: { vendor: ['vue', 'vue-router'] }`,zm={title:"Большие списки и bundle splitting",summary:"Виртуализация 5000 строк, ленивые чанки для виджетов и маршрутов, tree-shaking библиотек, анализ бандла.",demo:()=>F(()=>import("./Demo-Di8qIlKy.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${Nm}

// ============ HeavyWidget.vue (ленивый чанк) ============
${jm}

// ============ виртуализация ============
${Hm}

// ============ code splitting ============
${Bm}`,content:{intro:"Два «пожирателя производительности» SPA: <b>огромные списки</b> в DOM и <b>толстые бандлы</b>. Виртуализация рендерит только видимое окно (20 узлов вместо 5000) — скролл остаётся плавным при любом размере данных. Code splitting выносит редкий код в отдельные чанки: маршруты и тяжёлые виджеты грузятся по требованию. В демо — переключатель «все в DOM / виртуализация» на 5000 строках и ленивая загрузка виджета.",howItWorks:"Виртуализация: контейнер со <b>скроллом полной высоты</b> (height = rows × rowHeight), внутри — абсолютное позиционирование видимого окна. По scrollTop вычисляется startIndex, рендерятся только rows.slice(start, start+count) (+буфер для плавности). Браузер работает с 20 узлами, хотя «прокручивает» 5000. Code splitting: динамический <code>import()</code> делит код на чанки; Vite/webpack выносят его при сборке; клиент грузит чанк при первом обращении. Tree-shaking отбрасывает неиспользуемые экспорты — работает только с ESM и без side-effect-ов.",mistakes:[{title:"Рендерить тысячи узлов «просто потому что данные есть»",text:"Каждый узел — память, vnode-ы при диффе, layout-расчёт браузера. 5000 строк тормозят не Vue, а DOM.",code:'<tr v-for="row in 5000rows"> <!-- ❌ 5000+ узлов, сотни КБ DOM -->',fix:`// ✅ виртуализация: в DOM всегда ~20 видимых строк
// или пагинация/«показать ещё», если виртуализация избыточна`},{title:"Импорт библиотеки целиком ради одной функции",text:"import _ from 'lodash' тянет весь пакет (~70КБ gzip). moment.js без локалей, целиком antd/element-plus — типовые раздуватели бандла.",code:`import _ from 'lodash'
_.debounce(fn, 300) // ❌ 70КБ ради одной функции`,fix:`import { debounce } from 'lodash-es' // ✅ 2КБ
// или своя реализация (10 строк)`},{title:"Виртуализировать всё подряд",text:"Виртуализация осложняет: поиск по DOM (Ctrl+F), доступность, SSR, якорные ссылки. До ~200 строк она не нужна — браузер справляется.",code:"// ❌ виртуальный список из 30 строк",fix:"// ✅ порог: сотни-тысячи строк; иначе обычный v-for"}],nuances:["Буфер (лишние 2–5 строк сверху/снизу) обязателен: без него при быстром скролле видны «дырки».","Переменная высота строк усложняет математику — берите готовую библиотеку или фиксируйте высоту.","Ленивый чанк = отдельный HTTP-запрос: микрочанки по 2КБ хуже одного файла (водопад запросов).","manualChunks группирует вендора: vendor-чанк кешируется между деплоями (код приложения меняется — vendor нет).","Виртуализация + KeepAlive конфликтуют: при возврате скролл восстановится, но окно нужно пересчитать.","Vue Devtools и Chrome Performance покажут, что тормозит: рендер Vue, layout браузера или сеть."],bestPractices:["Ленивые маршруты по умолчанию; главный чанк — каркас приложения.","Виртуализация для списков 500+ строк; пагинация — приемлемый бюджетный вариант.","Импорт библиотек точечно (ESM), следите за бандл-аналитикой после добавления зависимостей.","Фиксируйте высоту строк в виртуализованных списках — самый быстрый вариант.","Проверяйте размер чанков в CI: порог 200–250КБ на чанк — разумный лимит."],whenToUse:"<strong>Виртуализация</strong> — ленты, логи, таблицы с большим числом строк. <strong>Code splitting</strong> — всегда: маршруты ленивы по умолчанию, тяжёлые виджеты (графики, редакторы) — по требованию. <strong>Анализ бандла</strong> — после каждого добавления крупной библиотеки.",alternative:{title:"Пагинация и «показать ещё»",text:"Классическое решение: клиент держит только страницу данных. Проще виртуализации, дружелюбнее к SEO (ссылки-страницы), но UX уступает бесконечному скроллу.",code:`const { data: page } = await useFetch('/api/rows', { query: { page, size: 50 } })
<!-- 50 строк в DOM — виртуализация не нужна -->`},advanced:{title:"Динамический импорт с предзагрузкой по hover",text:"Ленивость без потери скорости: чанк предзагружается при наведении на ссылку — к моменту клика код уже в кеше. Виртуальный список + предзагрузка следующей страницы данных — тот же принцип.",code:`const prefetched = new Set()
function prefetchChunk(loader: () => Promise<unknown>) {
  const id = loader.toString().slice(0, 50)
  if (!prefetched.has(id)) { prefetched.add(id); loader() }
}

<RouterLink :to="url" @mouseenter="prefetchChunk(routeLoader)">`}}},qm=Object.freeze(Object.defineProperty({__proto__:null,default:zm},Symbol.toStringTag,{value:"Module"})),Km=`<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './counter-store'

const store = useCounterStore()

// storeToRefs: сохраняет реактивность при деструктуризации state/getters
// (actions деструктурируются напрямую — это просто функции)
const { count, double, isPositive, history } = storeToRefs(store)
const { increment, reset } = store
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="increment">increment()</button>
      <button class="btn" @click="reset">reset()</button>
      <span class="stat">count: <b>{{ count }}</b></span>
      <span class="stat">double: <b>{{ double }}</b></span>
      <span class="tag" :class="isPositive ? 'ok' : 'info'">{{ isPositive ? 'положительный' : 'нулевой' }}</span>
    </div>

    <div class="card">
      <b>history (state-массив)</b>
      <div class="log" style="margin-top: 8px">
        <div v-for="(h, i) in history" :key="i" class="mono">шаг {{ i + 1 }}: count = {{ h }}</div>
        <div v-if="!history.length" class="muted">пусто</div>
      </div>
    </div>

    <p class="muted">
      Этот стор используют <b>три независимые панели</b> на этой странице (см. код ниже) — и они
      всегда показывают одно и то же: стор — синглтон. Это и есть «разделяемое состояние» в Pinia.
    </p>
  </div>
</template>
`,Wm=`import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Setup-стор: та же система ref/computed, что в компонентах.
 * state = ref, getters = computed, actions = функции.
 */
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const history = ref<number[]>([])

  // getters
  const double = computed(() => count.value * 2)
  const isPositive = computed(() => count.value > 0)

  // actions
  function increment() {
    count.value++
    history.value.push(count.value)
  }

  function reset() {
    count.value = 0
    history.value = []
  }

  return { count, history, double, isPositive, increment, reset }
})
`,Gm=`<!-- Ещё один компонент в другом конце страницы -->
<script setup lang="ts">
import { useCounterStore } from './counter-store'
const store = useCounterStore()
<\/script>
<template>
  <!-- тот же стор, то же значение -->
  <span>другая панель: {{ store.count }}</span>
</template>`,Jm=`// ============ counter-store.ts (setup-стор) ============
${Wm}

// ============ Demo.vue (потребитель) ============
${Km}

// ============ вторая панель ============
${Gm}`,Qm={title:"Stores: state, getters, actions",summary:"Setup-стор на ref/computed/функциях, storeToRefs для деструктуризации, стор как синглтон.",demo:()=>F(()=>import("./Demo-UwtxPwiz.js"),[]),code:Jm,content:{intro:"<b>Pinia</b> — официальный стейт-менеджер Vue: стор — это реактивное состояние, живущее <b>вне компонентов</b> и доступное всем. Setup-стиль (рекомендуемый) выглядит как обычный композабл: <code>ref</code> = state, <code>computed</code> = getters, функции = actions. Главное отличие от модульного композабла: стор — <b>синглтон с Devtools</b>, SSR-безопасностью и экосистемой плагинов. В демо три панели страницы делят один counter-store — изменения видны везде мгновенно.",howItWorks:"<code>defineStore('counter', setupFn)</code> создаёт фабрику стора; первый вызов <code>useCounterStore()</code> исполняет setupFn и кеширует экземпляр — все последующие вызовы возвращают тот же объект. Внутри — обычная система реактивности Vue. <code>storeToRefs(store)</code> превращает state/getters в ref-ы (для безопасной деструктуризации), actions — обычные функции, их деструктурируют напрямую. В Vue Devtools стор виден как отдельная вкладка с state и историей мутаций; в отличие от Vuex нет mutations и нет строковых типов.",mistakes:[{title:"Деструктуризация стора без storeToRefs",text:"Стор — reactive-объект: деструктуризация снимает значения и рвёт реактивность. Классический симптом: «счётчик не обновляется в моей панели».",code:"const { count } = useCounterStore() // ❌ count — число-снимок",fix:`import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count } = storeToRefs(store) // ✅ Ref<number>
const { increment } = store // ✅ функции можно напрямую`},{title:"Присваивать стор целиком",text:"<code>store = useStore()</code> с последующим переприсваиванием не работает: ссылка на стор одна, мутировать нужно поля.",code:"store = { ...store, count: 5 } // ❌ теряется реактивная связь",fix:`store.count = 5 // ✅ или через $patch
store.$patch({ count: 5 })`},{title:"Создавать стор вне setup без активного Pinia",text:"useStore() требует установленного Pinia. Вызов вне компонента (утилита, роутер-гард до установки) без передачи pinia-инстанса падает.",code:`// в router guard до app.use(pinia)
const store = useCounterStore() // ❌ getActivePinia was called with no active Pinia`,fix:`// ✅ передавайте инстанс явно в вне-setup контексте
const store = useCounterStore(pinia)
// или используйте сторы после app.use(pinia)`}],nuances:["Setup-стиль позволяет <b>любые</b> композаблы внутри стора: useLocalStorage, watch, даже роутер.","Стор можно смотреть через <code>store.$subscribe</code> (аналог watch на весь стор) и <code>store.$onAction</code> (перехват actions — логирование, аналитика).","<code>$patch</code> группирует несколько мутаций в одну запись Devtools.","<code>$reset()</code> восстанавливает начальный state — работает в option-сторах из коробки, в setup-сторах требует реализации вручную.","Сторы могут <b>использовать друг друга</b> (storeToRefs внутри другого стора) — но следите за циклическими зависимостями.","devtools-имя стора = первый аргумент defineStore — называйте осмысленно."],bestPractices:["Setup-стиль по умолчанию: гибче и совпадает с остальным кодом на Composition API.","Деструктурируйте только через storeToRefs (state/getters) и напрямую (actions).","Один стор = одна доменная область (cart, user, ui), а не «гигантский appStore».","Не храните в сторе transient-состояние одного компонента (открыта ли модалка) — это локальный стейт.","Именуйте: useXxxStore, файлы stores/cart.ts, stores/user.ts — по домену."],whenToUse:"<strong>Pinia</strong> — для доменных данных, разделяемых между страницами и несвязанными компонентами: пользователь/сессия, корзина, кеш сущностей, глобальные настройки. Не нужен для чисто локального UI-состояния и для родитель↔потомок-связи (пропсы и события решают это точнее).",alternative:{title:"Модульный композабл-синглтон",text:"Для маленьких приложений без SSR самописный модульный ref-синглтон покрывает потребности без зависимости.",code:`// stores/theme.ts
const mode = ref<'dark' | 'light'>('dark')
export function useTheme() {
  return { mode, toggle: () => (mode.value = mode.value === 'dark' ? 'light' : 'dark') }
}
// минусы против Pinia: нет Devtools-интеграции, SSR-безопасности и $reset`},advanced:{title:"$onAction и $subscribe для перехвата",text:"Плагины и middleware строятся на двух хуках стора: $onAction перехватывает вызовы actions (логи, аналитика, undo), $subscribe следит за изменениями state (персистентность, sync).",code:`const store = useCounterStore()

store.$onAction(({ name, args, after, onError }) => {
  const start = Date.now()
  after((result) => {
    console.log(\`\${name}(\${args}) занял \${Date.now() - start}мс\`, result)
  })
  onError((err) => console.error(name, err))
})

store.$subscribe((mutation, state) => {
  localStorage.setItem('counter', JSON.stringify(state))
})`}}},Xm=Object.freeze(Object.defineProperty({__proto__:null,default:Qm},Symbol.toStringTag,{value:"Module"})),Ym=`<script setup lang="ts">
import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

// ========== OPTION-стор: state/getters/actions как поля объекта ==========
const useTodoOption = defineStore('todoOption', {
  state: () => ({
    items: ['выучить Pinia', 'попробовать setup-стор'] as string[],
    filter: 'all' as 'all' | 'done' | 'active',
  }),
  getters: {
    total: (state) => state.items.length,
    // доступ к другим getters через this
    summary(): string {
      return \`\${this.total} задач, фильтр: \${this.filter}\`
    },
  },
  actions: {
    add(text: string) {
      this.items.push(text)
    },
    clear() {
      this.items = []
    },
  },
})

// ========== SETUP-стор: та же логика в другом стиле ==========
const useTodoSetup = defineStore('todoSetup', () => {
  const items = ref<string[]>([])
  const filter = ref<'all' | 'done' | 'active'>('all')
  const total = computed(() => items.value.length)
  function add(text: string) {
    items.value.push(text)
  }
  function clear() {
    items.value = []
  }
  return { items, filter, total, add, clear }
})

const option = useTodoOption()
const setup = useTodoSetup()
const oRefs = storeToRefs(option)
const sRefs = storeToRefs(setup)

function seedBoth() {
  option.add('задача A')
  setup.add('задача A')
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="seedBoth">добавить задачу в оба стора</button>
      <button class="btn" @click="option.clear(); setup.clear()">очистить оба</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="row row--between">
          <b>Option-стор</b>
          <span class="tag info">state/getters/actions</span>
        </div>
        <p class="mono muted" style="margin: 6px 0 0">
          {{ oRefs.items.value.length }} задач · «{{ option.summary }}»
        </p>
        <div class="log" style="margin-top: 6px">
          <div v-for="(t, i) in oRefs.items.value" :key="i" class="mono">{{ t }}</div>
        </div>
      </div>

      <div class="card">
        <div class="row row--between">
          <b>Setup-стор</b>
          <span class="tag ok">ref/computed/fn</span>
        </div>
        <p class="mono muted" style="margin: 6px 0 0">{{ sRefs.items.value.length }} задач</p>
        <div class="log" style="margin-top: 6px">
          <div v-for="(t, i) in sRefs.items.value" :key="i" class="mono">{{ t }}</div>
        </div>
      </div>
    </div>

    <p class="muted">
      Оба стора полностью эквивалентны. Option — декларативная структура, удобна для $reset и
      простых CRUD. Setup — вся мощь Composition API: watch, композаблы, приватные переменные.
    </p>
  </div>
</template>
`,Zm=`// Option-стор: классическая структура
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((s, i) => s + i.price * i.qty, 0),
    count(): number {
      return this.items.length // this для доступа к другим getters
    },
  },
  actions: {
    add(item: CartItem) {
      this.items.push(item)
    },
    async checkout() {
      await api.post('/checkout', this.items)
      this.$reset() // опция-стор умеет reset из коробки
    },
  },
})`,ev={title:"Option-стор vs setup-стор",summary:"Два стиля одного стора: декларативный объект (state/getters/actions) против Composition API; $reset и когда что выбирать.",demo:()=>F(()=>import("./Demo-1AJmIWB0.js"),[]),code:`// ============ option-стор (полный пример) ============
${Zm}

// ============ Demo.vue (оба стиля рядом) ============
${Ym}`,content:{intro:"Pinia поддерживает <b>два стиля</b> описания стора. <b>Option-стор</b> — объект из <code>state</code> (фабрика), <code>getters</code> (вычисляемые) и <code>actions</code> (методы) — визуально похож на data/computed/methods из Options API. <b>Setup-стор</b> — функция на ref/computed — то же, что и любой композабл. Они полностью взаимозаменяемы: в демо обе версии живут рядом и ведут себя одинаково. Выбор — командный стиль и потребность в фичах ($reset, приватное состояние).",howItWorks:"В option-сторе state обязан быть <b>фабрикой</b> (<code>() =&gt; ({...})</code>), чтобы каждый экземпляр (в SSR — каждый запрос) получал свежий объект. Getters получают state первым аргументом; доступ через <code>this</code> включает остальные getters (тогда типизация результата ручная). Actions — обычные методы, мутирующие this. $reset работает автоматически: пересоздаёт state из фабрики. В setup-сторе фабрикой является сама функция, «actions» — замыкания, а для $reset нужно написать его руками (или вернуть собственный reset).",mistakes:[{title:"state без фабрики",text:"state: { items: [] } разделяет один массив между всеми экземплярами стора — в SSR это утечка данных между запросами, в SPA — призраки после HMR.",code:"state: { items: [] } // ❌ общий объект",fix:"state: () => ({ items: [] }) // ✅ фабрика"},{title:"Ожидать $reset в setup-сторе",text:"Setup-стор не имеет автоматического $reset — вызов упадёт или warning в dev. Возвращайте собственную reset-функцию.",code:`const store = useSetupStore()
store.$reset() // ❌ нет дефолтной реализации`,fix:`const useSetupStore = defineStore('s', () => {
  const initial = () => ({ count: 0 })
  const state = reactive(initial())
  function $reset() { Object.assign(state, initial()) }
  return { ...toRefs(state), $reset }
}) // ✅`},{title:"Геттер с this без явного типа возврата",text:"В option-сторах getter через this без аннотации типа возвращает unknown и ломает вывод типов у потребителей.",code:"getters: {\n  summary() { return `${this.total} шт` } // ❌ implicit any в сложных случаях\n}",fix:"getters: {\n  summary(): string { return `${this.total} шт` } // ✅ аннотация\n}"}],nuances:["Option-стор чуть <b>упрощает Devtools-таймлайн</b>: мутации state группируются по полям.","В option-сторе можно вернуть объект из actions — после() в $onAction получит результат.","Setup-стор может иметь <b>приватные</b> переменные: просто не возвращайте их — снаружи не видно (в option всё «публично»).","В setup-сторе доступен весь Composition API: watchEffect, useLocalStorage, инъекции — option-стор ограничен своим каркасом.","Смешивать стили в одном проекте можно, но лучше выбрать один и задокументировать.","Для тестов option-сторы проще мокать через testing-pinia; setup-сторы мокаются как обычные функции."],bestPractices:["Новый код — <b>setup-стор</b>: единый стиль с остальными композаблами, приватное состояние, гибкость.","Option-стор выбирайте, когда важен из коробки $reset и команда привыкла к Options-структуре.","В option-сторах всегда аннотируйте типы getters, использующих this.","Никогда не забывайте фабрику в state — линт-правило или code review.","Сложные сторы дробите: setup-стор может собираться из нескольких внутренних композаблов."],whenToUse:"Оба стиля подходят для любых задач управления состоянием. <strong>Setup</strong> — по умолчанию в новых проектах на Composition API. <strong>Option</strong> — при миграции с Vuex (структура близка) и для простых CRUD-сторов с $reset. Не смешивайте в одном модуле без причины.",alternative:{title:"Композабл-синглтон вместо стора",text:"Мини-сторы (одна-две переменные) можно не оформлять в Pinia — модульный композабл решает ту же задачу.",code:`// достаточно для темы/флага
const mode = ref<'dark' | 'light'>('dark')
export function useTheme() { return { mode } }

// Pinia нужен при: SSR, Devtools-требованиях, росте логики`},advanced:{title:"Гибрид: setup-стор с $reset через фабрику состояния",text:"Комбинируйте преимущества: setup-стор, но state собирается фабрикой и $reset реализован явно — контракт сохраняется для потребителей.",code:`export const useUserStore = defineStore('user', () => {
  const createInitialState = () => ({
    profile: null as Profile | null,
    roles: [] as string[],
  })
  const state = reactive(createInitialState())

  function $reset() {
    Object.assign(state, createInitialState())
  }

  async function login(credentials: Credentials) {
    state.profile = await api.login(credentials)
    state.roles = await api.roles(state.profile.id)
  }

  return { ...toRefs(state), $reset, login }
})`}}},tv=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),nv=`<script setup lang="ts">
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

interface Note {
  id: number
  text: string
}

// Стор с async-action и ручной персистентностью через $subscribe
const useNotesStore = defineStore('notesDemo', () => {
  const notes = ref<Note[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // async action: loading/error — часть контракта стора
  async function fetchNotes() {
    loading.value = true
    error.value = null
    try {
      // имитация сети
      await new Promise(r => setTimeout(r, 700))
      if (Math.random() < 0.15) throw new Error('network glitch (имитация)')
      notes.value = [
        { id: 1, text: 'заметка с «сервера» #1' },
        { id: 2, text: 'заметка с «сервера» #2' },
      ]
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'unknown'
    } finally {
      loading.value = false
    }
  }

  function add(text: string) {
    notes.value.push({ id: Date.now(), text })
  }

  function clear() {
    notes.value = []
  }

  return { notes, loading, error, fetchNotes, add, clear }
})

const store = useNotesStore()
const { notes, loading, error } = storeToRefs(store)

// Персистентность: $subscribe на изменения state → localStorage
const STORAGE_KEY = 'pinia-notes-demo'
store.$subscribe((_, state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes))
  persistCount.value++
})

const persistCount = ref(0)

// Восстановление при старте (в реальном коде — в самом сторе)
try {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const parsed = JSON.parse(saved) as Note[]
    if (Array.isArray(parsed) && parsed.length) notes.value = parsed
  }
} catch {
  // битый JSON — игнорируем
}

const draft = ref('')
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="store.fetchNotes()" :disabled="loading">
        {{ loading ? 'загрузка…' : 'fetchNotes() (async action)' }}
      </button>
      <input v-model="draft" class="input" style="max-width: 220px" placeholder="текст заметки…" @keyup.enter="store.add(draft); draft = ''" />
      <button class="btn" @click="store.add(draft); draft = ''">add()</button>
      <button class="btn danger" @click="store.clear()">clear()</button>
    </div>

    <span v-if="error" class="tag bad">ошибка: {{ error }}</span>

    <div class="card">
      <div class="row row--between">
        <b>notes ({{ notes.length }})</b>
        <span class="tag info">$subscribe → localStorage: {{ persistCount }} записей</span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="n in notes" :key="n.id" class="mono">{{ n.text }}</div>
        <div v-if="!notes.length" class="muted">пусто — загрузите или добавьте</div>
      </div>
    </div>

    <p class="muted">
      Добавьте заметки и <b>перезагрузите страницу</b> — они восстановятся из localStorage
      ($subscribe сохранял каждый change). Кнопка fetch показывает асинхронный action с
      loading/error — состояние сети живёт в сторе, а не в компонентах.
    </p>
  </div>
</template>
`,ov=`// Вариант 1: ручная персистентность в самом сторе
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(loadFromStorage()) // восстановление

  watch(items, (v) => {
    localStorage.setItem('cart', JSON.stringify(v)) // сохранение
  }, { deep: true })

  return { items }
})

// Вариант 2: официальный плагин pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

createApp(App).use(createPinia().use(piniaPluginPersistedstate))

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  persist: true, // всё состояние → localStorage по id стора
  // persist: { paths: ['items'], storage: sessionStorage },
})`,sv={title:"Async actions и персистентность",summary:"Асинхронные actions с loading/error, $subscribe для сохранения, плагин persistedstate, SSR-осторожность.",demo:()=>F(()=>import("./Demo-C8lLjCz3.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${nv}

// ============ персистентность (2 варианта) ============
${ov}`,content:{intro:"Реальные сторы общаются с API: <b>async action</b> инкапсулирует запрос, а состояния <code>loading</code>/<code>error</code> становятся частью стора — все компоненты видят единый статус сети. Вторая половина темы — <b>персистентность</b>: сохранение состояния между сессиями через localStorage. В демо $subscribe пишет каждое изменение в localStorage (перезагрузите страницу — заметки вернутся), а async action имитирует сеть с редким сбоем.",howItWorks:"Async action — обычная async-функция внутри стора: до await — мутации loading, после — запись данных, в catch — error. Компоненты просто вызывают action и читают состояние, не зная о fetch. Персистентность через <code>$subscribe</code>: колбэк получает (mutation, state) после каждой мутации — сериализуем и пишем. Восстановление — при создании стора: читаем storage и присваиваем state. Плагин <code>pinia-plugin-persistedstate</code> делает то же самое декларативно: <code>persist: true</code>, с опциями путей и storage.",mistakes:[{title:"Хранить loading/error в каждом компоненте",text:"Если запрос в компоненте, а состояние сети — тоже в компоненте, другие потребители данных не знают о статусе. Сетевое состояние того же ресурса — в сторе рядом с данными.",code:`// компонент A грузит, компонент B показывает список —
// B не знает, что A уже грузит → дубли запросов`,fix:`// ✅ единый action + флаги в сторе
async function fetch() {
  this.loading = true
  try { this.items = await api.get() }
  finally { this.loading = false }
}`},{title:"Персистировать всё подряд",text:"Сохранение всего стора тащит в localStorage transient-поля (loading, ошибки, открытые модалки) и может утечь sensitive-данные. Персистируйте явно выбранные пути.",code:"persist: true // ❌ вместе с token попали loading/error/секреты",fix:`persist: { paths: ['items'] } // ✅ только доменные данные
// секреты — в httpOnly cookie, не в localStorage`},{title:"Доверять данным из storage без валидации",text:"localStorage может содержать устаревшую схему или битый JSON. Валидируйте при восстановлении, иначе стор получит мусор и упадёт где-то в рендере.",code:"const saved = JSON.parse(localStorage.getItem('cart') ?? '[]') // ❌",fix:`const parsed = cartSchema.safeParse(JSON.parse(raw))
if (parsed.success) this.items = parsed.data // ✅ zod-валидация
else localStorage.removeItem('cart')`}],nuances:["$subscribe по умолчанию срабатывает <b>после</b> мутации; третий аргумент { detached: true } отвязывает от компонента.","Сериализация reactive-Proxy через JSON.stringify работает честно (Proxy прозрачен), но Map/Set/Date теряются — используйте replacer.","В SSR на сервере localStorage нет: персистентность — только на клиенте (плагин сам guard-ит) или в cookies.","Асинхронные actions не «ждутся» автоматически: <code>await store.fetch()</code> — только если fetch возвращает Promise (async-функция возвращает его всегда).","Два вызова одного async-action параллельно = гонка; добавляйте abort/idempotency-защиту для критичных запросов.","pinia-plugin-persistedstate поддерживает sessionStorage, пути, сериализаторы и multiple storages."],bestPractices:["Сетевое состояние ресурса (loading/error/lastFetched) — в том же сторе, что и данные.","Персистируйте минимально: только то, что реально нужно восстановить.","Валидируйте восстановленные данные (zod) и версионируйте ключ (cart-v2).","Для идемпотентных загрузок — guard от параллельных вызовов (if (this.loading) return).","Аналитику и логирование действий вешайте через $onAction, не мутируя actions."],whenToUse:"<strong>Async actions</strong> — любые данные с сервера, разделяемые компонентами: профиль, каталог, настройки. <strong>Персистентность</strong> — корзина, черновики, фильтры, тема — то, что пользователь ожидает найти после перезагрузки. Не персистируйте сессионные/чувствительные данные и transient-UI-состояние.",alternative:{title:"Загрузка на уровне компонента (TanStack Query / useFetch)",text:"Для серверного кеша с дедупликацией, рефетчем и инвалидацией специализированные библиотеки часто лучше самописного стора: они решают именно проблему «клиентского кеша серверных данных».",code:`import { useQuery } from '@tanstack/vue-query'

const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: () => api.getTodos(),
})
// кеш, дедуп, рефетч — из коробки; Pinia остаётся для клиентского стейта`},advanced:{title:"Undo/Redo на $subscribe + стек снапшотов",text:"Подписка на мутации даёт дешёвый undo: каждый change пушим в стек, при undo — восстанавливаем прошлый снапшот через $patch.",code:`const history: string[] = []
let pointer = -1

store.$subscribe((_, state) => {
  history.splice(pointer + 1)
  history.push(JSON.stringify(state.notes))
  pointer++
})

function undo() {
  if (pointer > 0) {
    pointer--
    store.$patch({ notes: JSON.parse(history[pointer]) })
  }
}`}}},rv=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),iv=`// ❌ АНТИПАТТЕРН: стор как свалка
export const useAppStore = defineStore('app', () => {
  // доменные данные (норм)
  const user = ref<User | null>(null)

  // ❌ transient UI-состояние — не место в глобальном сторе
  const isModalOpen = ref(false)
  const activeTab = ref('main')
  const draftText = ref('')

  // ❌ дублирование роутера
  const currentRoute = ref('')

  // ❌ серверный кеш, смешанный с клиентским
  const products = ref<Product[]>([])
  const cart = ref<CartItem[]>([])
})`,av=`// ✅ РАЗДЕЛЕНИЕ: домен / серверный кеш / локальный UI

// stores/user.ts — сессия и профиль (глобально по природе)
export const useUserStore = defineStore('user', () => {
  const profile = ref<Profile | null>(null)
  const isLoggedIn = computed(() => !!profile.value)
  async function login(c: Credentials) { profile.value = await api.login(c) }
  return { profile, isLoggedIn, login }
})

// stores/cart.ts — доменные данные с мутациями из многих мест
export const useCartStore = defineStore('cart', () => { /* items, add, remove */ })

// компонент: локальный UI-стейт НЕ в сторе
const isModalOpen = ref(false)          // живёт и умирает с компонентом
const draft = ref('')                   // черновик — локальный
const filter = reactive({ q: '', page: 1 }) // фильтры таблицы — локальные (или в URL!)

// фильтры, которыми делятся ссылкой — в query-параметрах:
router.push({ query: { q: filter.q, page: filter.page } })`,cv=`// Шпаргалка «где жить состоянию»
//
// 1. Используется только внутри одного компонента?
//    → локальный ref/reactive. Никакого стора.
//
// 2. Родитель ↔ потомок?
//    → props вниз, emit вверх. Не стор.
//
// 3. Поддерево (layout → страницы)?
//    → provide/inject.
//
// 4. URL-выражаемое состояние (фильтры, пагинация)?
//    → route.query — можно поделиться ссылкой.
//
// 5. Доменные данные многих несвязанных компонентов
//    (user, cart, настройки)?
//    → Pinia-стор.
//
// 6. Серверные данные с кешем/рефетчем?
//    → стор или TanStack Query — по сложности.`,lv={title:"Когда Pinia не нужна: архитектура стейта",summary:"Решение «где жить состоянию»: локальный UI, props, provide/inject, URL, стор; антипаттерн «стора-свалки».",demo:()=>F(()=>import("./Demo-DoTYfJgn.js"),[]),code:`// ============ ❌ антипаттерн ============
${iv}

// ============ ✅ разделение ============
${av}

// ============ шпаргалка ============
${cv}`,content:{intro:"Самая дорогая ошибка управления состоянием — не неправильный стор, а <b>неправильное место</b> состояния. Глобальный стор-«свалка» (модалки, черновики, фильтры, кеши — всё в одном) превращается в неуправляемое болото: любое поле может быть изменено откуда угодно. Правило простое: состояние живёт на <b>самом узком</b> уровне, где оно нужно. В демо — интерактивная шпаргалка: выберите тип состояния и получите рекомендацию.",howItWorks:"Иерархия уровней: <b>локальный ref</b> (один компонент) → <b>props/emit</b> (два соседа) → <b>provide/inject</b> (поддерево) → <b>URL/query</b> (состояние, которым делятся ссылкой) → <b>Pinia</b> (доменные данные многих несвязанных частей) → <b>серверный кеш</b> (TanStack Query, если рефетч/инвалидация критичны). Подъём состояния на уровень выше необходимого — источник «глобальных призраков»: модалка, которая «зависла открытой», черновик, переживший переход, фильтр, применяющийся к чужой таблице.",mistakes:[{title:"UI-состояние в глобальном сторе",text:"isModalOpen в Pinia означает: два экземпляра компонента делят одну модалку, состояние переживает unmount, тесты ломаются. Локальное должно оставаться локальным.",code:`// ❌ в сторе
const isSidebarOpen = ref(false)
const hoveredCardId = ref<string | null>(null)`,fix:`// ✅ в компоненте
const isSidebarOpen = ref(false)
// hoveredCardId — через локальный ref или useTemplateRef`},{title:"Дублировать роутер/серверное состояние в сторе",text:"Копия route.path или fetched-списка в сторе создаёт второй источник истины: рассинхрон при первом же переходе/рефетче. URL и запросы уже являются состоянием.",code:`const currentRoute = ref('')
watch(() => route.path, p => currentRoute.value = p) // ❌`,fix:`// ✅ читайте route напрямую там, где нужно
const route = useRoute()
route.path // всегда актуально`},{title:"Стор «на всякий случай глобальный»",text:"«Вдруг понадобится в другом месте» — не аргумент: поднять состояние в стор потом легко, а вот убрать из глобального доступа — больно. Начинайте локально.",code:`// ❌ «а вдруг»
useFilterStore() в компоненте, чьи фильтры никому больше не нужны`,fix:`// ✅ локально, пока не появилось реальное второе место
// потребность «поднять» — рефакторинг на 10 минут`}],nuances:["Состояние в <b>URL</b> — недооценённый уровень: фильтры/пагинация в query дают шаринг ссылок, работу кнопки «назад» и SSR-дружелюбность.","provide/inject — «стстор поддерева»: контекст формы/таблицы часто не заслуживает глобального стора.","Серверный кеш и клиентский стейт — <b>разные сущности</b>: кеш валиден до инвалидации, стейт — истина сама по себе.","Единый appStore из «монолита» разбивается по домену (user, cart, ui) — с ростом приложения это спасает.","UI-кит (тема, язык) — законный глобальный стейт: по природе приложения он один.","Тесты выигрывают от узких состояний: локальный ref не требует reset-ов между тестами."],bestPractices:["Прогоняйте каждое новое поле через шпаргалку «где жить» — и поднимайте только при реальной нужде.","Стор — по домену, не по технике: user/cart/ui, а не data1/data2/common.","URL-состояние для всего, чем можно поделиться ссылкой.","Запрещайте мутации стора из шаблонов — только actions.","Раз в квартал ревизия сторов: «что здесь делает это поле?» — вычищать transient-мусор."],whenToUse:"<strong>Pinia</strong> нужен, когда данные реально разделяются между несвязанными компонентами или переживают маршруты: сессия, корзина, глобальные настройки. Это тема-<strong>фильтр</strong>: перед созданием стора пройдите по уровням и убедитесь, что стор — самое узкое подходящее место.",alternative:{title:"TanStack Query для серверного кеша",text:"Если 80% сторов — обёртки над fetch с loading/error/рефетчем, специальная библиотека убирает этот слой: остаётся чистый клиентский стейт.",code:`// вместо ручного items/loading/error/fetch в Pinia:
const { data, isFetching, refetch } = useQuery({
  queryKey: ['products', filter],
  queryFn: () => api.products(filter),
})
// Pinia остаётся только для корзины и сессии`},advanced:{title:"Нормализованные сущности: ids + карта вместо массивов",text:"Для больших коллекций держите в сторе нормализованную форму: Record<id, T> плюс массив порядка, а списки и выборки выводите геттерами. Обновление по id — O(1), исчезает класс багов «патч попал не в тот индекс».",code:`const entities = ref<Record<number, Product>>({})
const order = ref<number[]>([])

const list = computed(() => order.value.map((id) => entities.value[id]!))

function upsert(p: Product) {
  if (!entities.value[p.id]) order.value.push(p.id)
  entities.value[p.id] = p // O(1), без поиска индекса
}`}}},dv=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),uv=`<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const double = ref(0) // заполняется вручную — только чтобы показать .value
const history = ref<number[]>([])

function increment() {
  count.value += 1
  double.value = count.value * 2
  history.value.push(count.value)
}

function reset() {
  count.value = 0
  double.value = 0
  history.value = []
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="increment">+1</button>
      <button class="btn" @click="reset">сброс</button>
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">count: <b>{{ count }}</b></div>
      <div class="stat">double: <b>{{ double }}</b></div>
      <div class="stat">history: <b>{{ history.length }}</b></div>
    </div>

    <div class="log">
      <div v-for="(h, i) in history" :key="i" class="mono">клик #{{ h }} → count={{ h }}, double={{ h * 2 }}</div>
      <div v-if="!history.length" class="muted">нажмите +1</div>
    </div>

    <p class="muted mono">
      В script: count.value += 1 — без .value ничего не произойдёт. В шаблоне: <span v-pre>{{ count }}</span> — .value не нужен.
    </p>
  </div>
</template>
`,pv={title:"ref — реактивная ссылка",summary:"ref() оборачивает значение в объект с .value; авто-распаковка в шаблоне, потеря реактивности при деструктуризации.",demo:()=>F(()=>import("./Demo-nIrGPD6m.js"),[]),code:uv,content:{intro:"<b>ref()</b> — базовый примитив реактивности Vue 3. Он принимает любое значение (число, строку, объект, DOM-элемент) и возвращает объект-обёртку с единственным полем <code>.value</code>. Присвоение <code>count.value = 5</code> уведомляет всех подписчиков и вызывает ререндер. В шаблоне верхнеуровневые ref распаковываются автоматически — писать <code>.value</code> не нужно. В демо: счётчик, ручной double и массив-история — три независимых источника состояния.",howItWorks:"ref возвращает объект класса RefImpl: <code>get value()</code> регистрирует текущий активный эффект (компонентный рендер, computed, watch) как зависимость, <code>set value()</code> — уведомляет эффекты. Для <b>объектных</b> значений ref вызывает внутри reactive() — поэтому <code>ref({ x: 1 }).value.x = 2</code> тоже реактивно. Именно обёртка решает главную проблему JS: в JS примитивы передаются по значению, и обычная переменная не может «уведомить» о своей смене — обёртка может. В шаблоне компилятор добавляет <code>.value</code> сам; в <code>&lt;script setup&gt;</code> верхнеуровневые ref доступны в шаблоне как значения.",mistakes:[{title:"Забыть .value в script",text:"Присвоение обычной переменной не обновляет ничего: «count = 5» просто переназначает локальную переменную, ref молчит, ререндера нет.",code:`const count = ref(0)
function inc() {
  count++ // ❌ инкремент локальной переменной, ref не тронут
}`,fix:`const count = ref(0)
function inc() {
  count.value++ // ✅
}`,fixText:"TypeScript даже не предупредит: count — это Ref<number>, а не number."},{title:".value в шаблоне или наоборот",text:"В шаблоне верхнеуровневые ref распаковываются: {{ count }} — уже число. Написав {{ count.value }}, вы получите «[object Object]» (или undefined для примитивов). Внутри вложенных объектов (reactive) распаковки нет — там .value нужно.",code:"<p>{{ count.value }}</p> <!-- ❌ в шаблоне уже распаковано -->",fix:`<p>{{ count }}</p> <!-- ✅ -->
<!-- но: state.count.value, если state — reactive-объект с ref внутри -->`},{title:"Деструктуризация ref из composable",text:"Деструктуризация снимает обёртку: вы получаете обычное значение-снимок, не связанное с источником. Реактивность теряется.",code:`function useCounter() {
  const count = ref(0)
  return { count }
}
const { count } = useCounter() // ❌ count теперь просто число 0`,fix:`const { count } = useCounter()
// ✅ либо не деструктурируйте, либо используйте toRefs:
const { count } = toRefs(useCounter())`}],nuances:["<b>ref(объект)</b> внутри делает reactive() над значением: глубоко реактивно. <code>shallowRef</code> отменяет это.","Замена <code>list.value = [...list.value]</code> уведомляет даже при не-глубоких изменениях — надёжный способ «дёрнуть» shallowRef.","<b>Шаблонная распаковка</b> работает только для верхнеуровневых свойств рендер-контекста; в массивах и вложенных объектах ref не распаковывается.","<code>isRef(x)</code> / <code>unref(x)</code> — утилиты для функций, принимающих «ref или значение».","В <code>&lt;script setup&gt;</code> можно включить <b>Reactivity Transform</b>-подобное поведение через <code>$ref</code>... нет — убрано из Vue; стандарт — явный .value.","ref от DOM-элемента: <code>const el = ref&lt;HTMLElement | null&gt;(null)</code> — тип обязателен, иначе TS скажет «не существует value.getBoundingClientRect»."],bestPractices:["Для состояния уровня компонента по умолчанию — <b>ref</b> (даже для объектов): единообразно, работает с .value, не теряет реактивность при передаче.","Называйте ref-состояние существительными (count, users), вычисляемое — с префиксом (filteredUsers, totalPrice).","Группируйте связанные ref в один reactive-объект, когда полей становится много (form, filter).","В composables возвращайте объект с ref, а не распакованные значения — потребитель сам решит, распаковывать ли (toRefs).","Не смешивайте ref и reactive в одном модуле без причины — выбирайте один стиль на проект."],whenToUse:"<strong>ref</strong> — выбор по умолчанию для любого локального состояния: счётчики, флаги, строки ввода, массивы, DOM-ссылки. Это «атомарное состояние» Vue. Для вычисляемых из других значений используйте computed, для группировки связанных полей — reactive, для глобального состояния — store (Pinia).",alternative:{title:"reactive для группы полей",text:"Когда полей много и они логически связаны, reactive-объект избавляет от десятков .value.",code:`const form = reactive({
  email: '',
  password: '',
  remember: false,
})
form.email = 'a@b.c' // без .value`},advanced:{title:"Кастомные ref: customRef",text:"<code>customRef</code> даёт контроль над track и trigger — так пишут ref с debounce: значение обновляется не мгновенно, а после паузы.",code:`import { customRef } from 'vue'

function debouncedRef(initial: string, ms = 300) {
  let value = initial
  let timer: ReturnType<typeof setTimeout>
  return customRef((track, trigger) => ({
    get() { track(); return value },
    set(v: string) {
      clearTimeout(timer)
      timer = setTimeout(() => { value = v; trigger() }, ms)
    },
  }))
}

const query = debouncedRef('', 400)`}}},fv=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),mv=`<script setup lang="ts">
import { reactive, isReactive, markRaw } from 'vue'

const state = reactive({
  user: { name: 'Ада', role: 'admin' },
  tags: ['vue', 'ts'],
  visits: 0,
})

// «Сырое» состояние нельзя сравнивать с реактивным по ===
const raw = { x: 1 }
const reactiveRaw = reactive(raw)

const config = markRaw({ apiKey: 'static-not-reactive' })

function visit() {
  state.visits++
}

function rename() {
  state.user.name = state.user.name === 'Ада' ? 'Грейс' : 'Ада'
}

function addTag() {
  state.tags.push(\`tag-\${state.tags.length + 1}\`)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="visit">+1 визит</button>
      <button class="btn" @click="rename">переименовать</button>
      <button class="btn" @click="addTag">добавить тег</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>state (reactive)</b>
        <p class="mono muted" style="margin: 8px 0 0">
          visits={{ state.visits }}<br />
          user={{ JSON.stringify(state.user) }}<br />
          tags={{ JSON.stringify(state.tags) }}
        </p>
      </div>

      <div class="card">
        <b>Проверки</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>isReactive(state): {{ isReactive(state) }}</li>
          <li>isReactive(raw): {{ isReactive(raw) }}</li>
          <li>reactive(raw) === raw: {{ reactiveRaw === raw }}</li>
          <li>config реактивен: {{ config.apiKey === 'static-not-reactive' ? 'нет (markRaw)' : 'да' }}</li>
        </ul>
      </div>
    </div>

    <p class="muted">
      Мутации вложенных полей (state.user.name) и методов массива (push) полностью реактивны —
      Proxy перехватывает и get, и set, и вызовы методов.
    </p>
  </div>
</template>
`,vv={title:"reactive — реактивный объект",summary:"Proxy-объект с глубокой реактивностью: вложенные мутации, ограничения (не замена, не деструктуризация), ref vs reactive.",demo:()=>F(()=>import("./Demo-KBzBvJM4.js"),[]),code:mv,content:{intro:"<b>reactive()</b> превращает обычный объект в реактивный через ES Proxy: чтение регистрирует зависимости, запись и вызовы методов массива — уведомляют. Реактивность <b>глубокая</b>: вложенные объекты тоже становятся прокси при первом обращении. В демо видно, что state.user.name и state.tags.push() работают без всяких .value, а также проверки isReactive и то, что reactive(raw) !== raw — это <b>новый</b> объект-прокси.",howItWorks:"Proxy перехватывает операции: <code>get</code> (чтение свойства) регистрирует текущий активный эффект как зависимость этого свойства; <code>set</code> (запись) уведомляет все эффекты, читавшие это свойство. Вложенные объекты проксируются лениво — при первом обращении. Массивы работают через те же ловушки (Vue умеет перехватывать методы вроде push через special handling). Важно: reactive работает <b>только с объектами</b> — число или строку обернуть нельзя (для этого ref). <code>markRaw()</code> исключает объект из проксирования — полезно для больших неизменяемых структур или сторонних инстансов.",mistakes:[{title:"Деструктуризация reactive-объекта",text:"Разрушает связь с прокси: вы получаете статические значения. Реактивность теряется молча — одна из главных ловушек Vue.",code:`const state = reactive({ count: 0, name: 'x' })
let { count } = state // ❌ count — обычное число 0
count++ // ререндера не будет`,fix:`const state = reactive({ count: 0 })
state.count++ // ✅ всегда через объект
// или: const { count } = toRefs(state)`},{title:"Перезаписать реактивный объект целиком",text:"Присвоение нового значения state = ... заменяет ссылку — потребители, уже держащие старый прокси, не узнают. reactive нельзя «переназначить», только мутировать поля или использовать ref.",code:`let state = reactive({ list: [1] })
state = reactive({ list: [2] }) // ❌ компоненты видят старый объект`,fix:`// ✅ вариант 1: мутируем
state.list = [2]
// ✅ вариант 2: если нужна замена целиком — ref
const list = ref([1])
list.value = [2]`},{title:"Ожидать reactive от примитива",text:'reactive(0), reactive("hi") вернут исходное значение без реактивности (и в dev-режиме — warning). Для примитивов только ref.',code:"const n = reactive(0) // ❌ вернёт 0, реакции нет",fix:"const n = ref(0) // ✅"}],nuances:["reactive возвращает <b>новый</b> Proxy-объект: <code>reactive(raw) !== raw</code>, а вот <code>reactive(raw) === reactive(raw)</code> — тот же прокси из кеша.","Сравнение с raw-объектом всегда false: храните и передавайте только прокси, не смешивайте оригинал и обёртку.","<b>Map/Set</b> поддерживаются: reactive(new Map()) отслеживает set/get/delete.","<code>markRaw()</code> для сторонних инстансов (карты, диаграммы, класс-инстансы) — Proxy над ними может ломать поведение и замедлять.","<code>shallowReactive()</code> — реактивность только первого уровня: вложенные объекты остаются сырыми.","В отличие от Vue 2, добавление <b>нового свойства</b> реактивно — Proxy перехватывает и его."],bestPractices:["Для объектов/форм/настроек reactive удобен; для всего остального — ref. В одном компоненте выбирайте <b>один стиль</b>.","Никогда не деструктурируйте reactive без toRefs — это баг-фабрика.","Не храните в reactive большие неизменяемые данные (конфиги, справочники) — markRaw или отдельный модуль-константа.","API-ответы после мутаций проксируйте через reactive осознанно: если данные read-only — не нужно.","Именуйте reactive-объекты по домену (form, filter, cart), а не state1/state2."],whenToUse:"<strong>reactive</strong> идеален для групп связанного состояния: объект формы, фильтры, настройки UI, состояние drag-n-drop. Он же — основа Pinia-сторов. Не подходит для примитивов, для значений, которые нужно заменять целиком (там ref), и для случаев, где объект будет деструктурирован или передан как argument в第三方 библиотеки.",alternative:{title:"ref(объект) вместо reactive",text:"ref({ ... }) даёт те же глубокие мутации, но допускает замену всего объекта через .value — гибче для списков и «перезагружаемых» данных.",code:`const user = ref({ name: 'Ада', tags: [] })
user.value.name = 'Грейс'  // глубоко реактивно
user.value = fetchedUser    // замена целиком — тоже реактивно`},advanced:{title:"toRefs: мост между reactive и деструктуризацией",text:"toRefs превращает каждое свойство reactive-объекта в ref, сохраняя связь с источником. Композаблы возвращают reactive и потребитель спокойно деструктурирует.",code:`function useMouse() {
  const pos = reactive({ x: 0, y: 0 })
  // ...слушатели обновляют pos.x/pos.y
  return toRefs(pos) // { x: Ref<number>, y: Ref<number> }
}

const { x, y } = useMouse() // ✅ x и y — живые ref`}}},bv=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),gv=`<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref(100)
const qty = ref(2)
const discountPercent = ref(10)

// Вычисляемое: кешируется, пересчитывается только при изменении зависимостей
const subtotal = computed(() => price.value * qty.value)
const total = computed(() => Math.round(subtotal.value * (1 - discountPercent.value / 100)))
const formatted = computed(() => \`\${total.value} ₽\`)

// Кеширование: обращение к computed НЕ пересчитывает, если зависимости не менялись
let evalCount = 0
const tracked = computed(() => {
  evalCount++
  return subtotal.value
})

// Записываемый computed: get + set
const couponInput = ref('')
const coupon = computed<string>({
  get: () => couponInput.value,
  set: (v: string) => {
    couponInput.value = v.toUpperCase().trim()
  },
})

const reads = ref(0)
function readTracked() {
  reads.value++
  void tracked.value
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <label class="label">цена</label>
      <input v-model.number="price" class="input" type="number" style="width: 100px" />
      <label class="label">кол-во</label>
      <input v-model.number="qty" class="input" type="number" style="width: 80px" />
      <label class="label">скидка %</label>
      <input v-model.number="discountPercent" class="input" type="number" style="width: 80px" />
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">subtotal: <b>{{ subtotal }}</b></div>
      <div class="stat">total: <b>{{ formatted }}</b></div>
    </div>

    <div class="row">
      <label class="label">промокод (writable computed: сам upper-case)</label>
      <input v-model="coupon" class="input" placeholder="SUMMER" style="width: 200px" />
      <button class="btn" @click="readTracked">прочитать tracked</button>
      <span class="muted mono">пересчётов tracked: {{ evalCount }}, чтений: {{ reads }}</span>
    </div>

    <p class="muted">
      Меняйте цену — subtotal и total пересчитаются. Нажмите «прочитать tracked» несколько раз
      <b>без изменения</b> цены: счётчик evalCount не растёт — значение закешировано.
    </p>
  </div>
</template>
`,hv={title:"computed — вычисляемые значения",summary:"Кешируемые производные значения: get/set, почему лучше методов, dirty-флаг и инвалидация.",demo:()=>F(()=>import("./Demo-A52xKLvG.js"),[]),code:gv,content:{intro:"<b>computed</b> создаёт значение, вычисляемое из других реактивных источников, и <b>кеширует</b> его: пересчёт только когда изменилась хотя бы одна зависимость. Это главное отличие от обычной функции в шаблоне, которая выполняется на каждый ререндер. В демо subtotal и total — цепочка computed; «прочитать tracked» показывает кеш в действии: счётчик пересчётов растёт только при изменении цены или количества.",howItWorks:"computed — это special effect с флагом <b>dirty</b>. При изменении зависимости computed не пересчитывается сразу, а лишь помечается «грязным». Пересчёт происходит лениво — когда значение кто-то читает (шаблон, другой computed, watch). Если зависимости не менялись, чтение возвращает закешированное значение — именно поэтому счётчик evalCount в демо не растёт. Записываемый computed имеет и <b>set</b>: запись туда прокидывается в вашу логику (в демо — uppercase + trim промокода). Цепочки computed строят граф зависимостей: total зависит от subtotal, subtotal — от price и qty.",mistakes:[{title:"Побочные эффекты в computed",text:"computed должен быть чистой функцией: никаких запросов, DOM-мутаций, записи в другие ref. Vue может пересчитать его больше раз, чем вы ожидаете (или вообще не пересчитать, если значение не читается).",code:"const fullName = computed(() => {\n  saveToServer(first.value, last.value) // ❌ сайд-эффект\n  return `${first.value} ${last.value}`\n})",fix:"const fullName = computed(() => `${first.value} ${last.value}`)\n\n// ✅ эффект — отдельным watch:\nwatch(fullName, (v) => saveToServer(v))"},{title:"Метод вместо computed для «дорогих» вычислений",text:"Функция в шаблоне вызывается на <b>каждый</b> ререндер (и для каждого элемента списка). computed — один раз на изменение зависимостей.",code:`function filtered() { return items.value.filter(isExpensive) } // ❌ на каждый рендер
<li v-for="i in filtered()">`,fix:`const filtered = computed(() => items.value.filter(isExpensive)) // ✅ кеш
<li v-for="i in filtered" :key="i.id">`},{title:"Возвращать из computed не-реактивные значения",text:"computed обязан читать реактивные источники. Если внутри обратились к обычной переменной — зависимостей нет, значение «застынет» и не будет обновляться.",code:`let external = 1
const derived = computed(() => external * 2) // ❌ external не реактивен
external = 5 // derived не изменится`,fix:`const external = ref(1)
const derived = computed(() => external.value * 2) // ✅`}],nuances:["Кеш computed <b>глубокий по умолчанию</b>: возврат нового объекта каждый раз ломает равенство (сравнивается ссылка) — для таких случаев есть опции <code>{ get: ..., set: ... }</code> и shallow-варианты.","computed от <b>set-состояния</b> (writable) — двухсторонний мост: часто используется для v-model поверх пропса.","Если computed зависит от большого числа источников — это нормально; граф зависимостей обрабатывается автоматически.","<code>computed(() => ...)</code> синхронный; для асинхронных значений — watchEffect + ref или useAsyncState из VueUse.","Чтение computed вне эффектного контекста не регистрирует зависимости (значение всё равно закешируется).","computed может зависеть и от другого computed — цепочка рассинхронизируется только по leaf-узлу."],bestPractices:["Любое «производное значение» в шаблоне — <b>computed</b>, а не метод: кеш + декларативность.","Держите computed чистыми: только вычисления; эффекты — в watch/watchEffect.","Сложные вычисления разбивайте на цепочку мелких computed — читается и отлаживается проще.","Именуйте по результату (total, filteredUsers), а не по процессу (calculateTotal).","Для вычислений над списками фильтруйте/сортируйте в computed, а не v-for + v-if."],whenToUse:"<strong>computed</strong> — для всего, что выводится из состояния: форматирование, агрегации, фильтрация, сортировка, валидационные флаги, производные props. Он же — правильный способ «адаптировать» значение в шаблоне, вместо вызова метода на каждый рендер.",alternative:{title:"Простое выражение в шаблоне",text:"Для тривиальных одношаговых выражений computed избыточен — инлайн-выражение читается короче.",code:`<!-- для простых случаев этого достаточно -->
<span>{{ count * 2 }}</span>
<span>{{ name.trim().toUpperCase() }}</span>`},advanced:{title:"Writable computed как контроллер",text:"Записываемый computed — не только v-model-мост: через set можно писать в store, нормализовать, агрегировать несколько источников в один.",code:`const fullName = computed<string>({
  get: () => \`\${user.value.first} \${user.value.last}\`,
  set: (v: string) => {
    const [first, ...rest] = v.split(' ')
    user.value.first = first
    user.value.last = rest.join(' ')
  },
})`}}},yv=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),xv=`<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const count = ref(0)
const obj = reactive({ nested: { deep: 0 } })
const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 10) log.value.pop()
}

// 1. Один источник
watch(count, (val, old) => add(\`count: \${old} → \${val}\`))

// 2. Глубокий: изменение вложенного поля
watch(obj, (val) => add(\`obj changed (deep): deep=\${val.nested.deep}\`), { deep: true })

// 3. Множественный источник — массив
watch([count, () => obj.nested.deep], ([c, d], [pc, pd]) => {
  add(\`мульти: count \${pc}→\${c}, deep \${pd}→\${d}\`)
})

// 4. immediate: сработать сразу при создании
watch(count, (val) => add(\`immediate-обработчик: current=\${val}\`), { immediate: true })
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="count++">count++</button>
      <button class="btn" @click="obj.nested.deep++">obj.nested.deep++</button>
    </div>

    <div class="row" style="gap: 16px">
      <div class="stat">count: <b>{{ count }}</b></div>
      <div class="stat">deep: <b>{{ obj.nested.deep }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Заметьте: immediate-обработчик сработал сразу при создании. Deep-watch срабатывает на любое
      вложенное изменение, но срабатывает <b>один раз</b> за «пакет» мутаций.
    </p>
  </div>
</template>
`,wv={title:"watch — реакция на изменения",summary:"Один/много источников, deep, immediate, old/new значения, flush-варианты; когда watch не нужен.",demo:()=>F(()=>import("./Demo-DMIB7q_T.js"),[]),code:xv,content:{intro:"<b>watch</b> запускает колбэк, когда меняется источник: ref, reactive-объект, getter-функция или их массив. В отличие от computed он не возвращает значение — он выполняет <b>эффект</b>: запрос, сохранение, аналитику, синхронизацию. В демо четыре подписки на два источника: одиночный (с old/new), глубокий на reactive, множественный (массив источников) и immediate — срабатывающий сразу при создании.",howItWorks:"watch создаёт effect, который читает источник и подписывается на его зависимости. Источник-объект без опции <code>deep</code> срабатывает только при <b>замене</b> объекта (ref.value = newObj); с <code>deep: true</code> — на любое вложенное изменение (рекурсивный обход — дорого на больших структурах). Колбэк получает <code>(newValue, oldValue, onCleanup)</code>; третий аргумент регистрирует cleanup, который выполнится перед следующим запуском и при остановке. Возврат функции из <code>watchEffect</code>-подобного колбэка (в Vue 3.5+) — тоже cleanup. Опция <code>immediate: true</code> вызывает колбэк сразу при создании. watch возвращает функцию <code>stop()</code> для ручной остановки.",mistakes:[{title:"Смотреть reactive-объект без deep или на getter",text:"watch(obj, cb) без deep сработает только при замене самого объекта — вложенные мутации пропустит. Для реактивного источника-объекта deep включается автоматически, но только если передан сам объект, а не результат операции над ним.",code:`const state = reactive({ list: [] })
watch(() => state, cb)      // ❌ getter возвращает один и тот же объект — не сработает
watch(state.list, cb)        // ❌ то же самое для массива внутри reactive`,fix:`watch(state, cb)                 // ✅ deep автоматически
watch(state.list, cb, { deep: true })
watch(() => state.list.length, cb) // ✅ точный источник`},{title:"Дублировать производные данные через watch",text:"Если значение можно вывести — это computed. watch + ref = ручная синхронизация с рассинхроном при ошибках.",code:"const fullName = ref('')\nwatch([first, last], () => {\n  fullName.value = `${first.value} ${last.value}`\n}) // ❌",fix:"const fullName = computed(() => `${first.value} ${last.value}`) // ✅"},{title:"Забывать stop для условных подписок",text:"watch живёт пока живёт scope компонента. Если подписка создаётся динамически (по клику, внутри колбэка) — её нужно останавливать вручную.",code:`function onSomeEvent() {
  watch(query, doSearch) // ❌ накапливается с каждым кликом
}`,fix:`let stop: (() => void) | null = null
function onSomeEvent() {
  stop?.()
  stop = watch(query, doSearch)
}
onUnmounted(() => stop?.()) // ✅`}],nuances:["По умолчанию колбэк выполняется <b>после</b> рендера компонента (flush: 'post') — DOM уже обновлён. <code>flush: 'pre'</code> — до рендера, <code>'sync'</code> — синхронно (редко).","Массив источников: колбэк получает массив значений; в TS кортеж сохраняет типы.","<code>watch(() => obj.x.y)</code> — точечный источник дешевле deep-обхода; ставьте его первым кандидатом.","С Vue 3.5 из колбэка можно вернуть cleanup-функцию, как в watchEffect.","Первый вызов с immediate получает oldValue = undefined — учитывайте тип.","watch над массивом срабатывает <b>один раз</b> на батч изменений, даже если изменились два источника сразу.","deep watch на большом дереве — рекурсивный обход при каждом триггере: дорогая операция, избегайте."],bestPractices:["Источники — максимально <b>узкие</b>: не весь объект, а конкретное поле или getter.","Запросы и debounce — через onCleanup: отменяйте предыдущий fetch при новом вводе.","Не используйте watch для производных значений — computed.","Одна подписка = одна ответственность; несколько источников в одном watch — только если они логически атомарны.","Динамические подписки всегда сохраняйте stop и отключайте в onUnmounted."],whenToUse:"<strong>watch</strong> — для эффектов на изменение: сохранение в localStorage, вызов API, аналитика, синхронизация с внешним стейтом, debounce. Он не нужен для вычисления значений (computed) и для реакций на каждое изменение без источников (watchEffect). Если эффект «смотрит» те же данные, что и рендер — скорее всего, это нужно делать в самом рендере или в computed.",alternative:{title:"watchEffect — автоматические зависимости",text:"Если вам не важно oldValue, а просто «на любое изменение X сделать Y» — watchEffect короче: не требует перечисления источников, читает всё, что используется.",code:`watchEffect(() => {
  const q = query.value
  if (q) fetchResults(q) // зависимости собраны автоматически
})`},advanced:{title:"watch + flush: отложенный запуск",text:"flush: 'pre' даёт раннюю реакцию до DOM-обновления (удобно для анимаций «до»), flush: 'post' — после (измерение DOM), 'sync' — мгновенно (для особых случаев, например, с WebGL).",code:`watch(source, async (val) => {
  // flush: 'post' по умолчанию — DOM уже обновлён
  await nextTick()
  // ...гарантированно после рендера
}, { flush: 'post' })`}}},_v=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),Sv=`<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const query = ref('')
const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

// Зависимости собираются автоматически: всё, что прочитано в колбэке
watchEffect((onCleanup) => {
  const q = query.value // ← это чтение становится зависимостью
  if (!q) {
    add('watchEffect: пустой запрос — ждём ввод')
    return
  }
  add(\`эффект: запрос «\${q}» (имитация fetch)\`)
  // Cleanup сработает перед следующим запуском и при остановке
  const timer = setTimeout(() => add(\`fetch «\${q}» завершён\`), 800)
  onCleanup(() => {
    clearTimeout(timer)
    add(\`cleanup: предыдущий fetch «\${q}» отменён\`)
  })
})

// Возвращает stop()
const stop = watchEffect(() => {
  void query.value.length
})
setTimeout(stop, 5000)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="query" class="input" placeholder="введите запрос…" style="max-width: 320px" />
    </div>
    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
    <p class="muted">
      Вводите текст: эффект срабатывает на каждое изменение. Заметьте cleanup перед каждым новым
      запуском — так отменяют прошлые запросы.
    </p>
  </div>
</template>
`,kv={title:"watchEffect — эффект без источников",summary:"Автоматический сбор зависимостей, immediate по умолчанию, onCleanup; watchEffect vs watch.",demo:()=>F(()=>import("./Demo-C6EquTJs.js"),[]),code:Sv,content:{intro:"<b>watchEffect</b> запускает функцию немедленно и автоматически отслеживает <b>все</b> реактивные значения, которые она читает: любое изменение любого из них повторяет эффект. Это «трекинг без перечисления источников» — удобно, когда источников много или их набор заранее неизвестен. Колбэк получает <code>onCleanup</code> для отмены предыдущего запуска. watchEffect срабатывает <b>до</b> первого рендера (в отличие от watch, который ждёт изменения).",howItWorks:"Механика та же, что у рендера: функция выполняется в контексте эффекта, каждое чтение .value/поля reactive регистрирует зависимость. После изменения зависимости эффект помечается и ставится в очередь микрозадач (батчинг — несколько изменений = один запуск). В отличие от watch, старое значение недоступно — есть только текущее. Асинхронные части после первого await уже <b>не</b> трекаются — зависимости собираются только в синхронной части до первого await.",mistakes:[{title:"Асинхронный колбэк теряет зависимости после await",text:"Зависимости собираются синхронно, до первого await. Всё, что читается после, не отслеживается — эффект не сработает на их изменение.",code:`watchEffect(async () => {
  const id = idRef.value // ✅ отслеживается
  const data = await fetch(url)
  const extra = other.value // ❌ после await — не отслеживается
})`,fix:`watchEffect(async () => {
  const id = idRef.value // все чтения до await
  const { data } = await useFetch(url(id))
})
// или используйте watch([idRef], ...) с явными источниками`},{title:"Скрытое чтение внутри функций",text:"Не-реактивные чтения (localStorage, Date.now(), Math.random()) делают эффект «слепым» или наоборот — вызывают его в неожиданные моменты, если случайно читается реактивная переменная.",code:`watchEffect(() => {
  localStorage.setItem('last', query.value) // ок
  console.log(Date.now()) // ок, но бессмысленно в эффекте
  const random = Math.random() // ❌ не реактивно — эффект не сработает на него
})`,fix:`// держите эффекты чистыми: только реактивные зависимости
watchEffect(() => {
  localStorage.setItem('last', query.value)
})`},{title:"watchEffect вместо computed",text:"Если результат — значение для шаблона, используйте computed: он кешируется и отдаёт значение. watchEffect выполняет эффект без результата.",code:`let result: number
watchEffect(() => { result = a.value * b.value }) // ❌ хак`,fix:"const result = computed(() => a.value * b.value) // ✅"}],nuances:["watchEffect выполняется <b>сразу</b> при создании (immediate встроен) и затем на изменение зависимостей.","Трекинг происходит только в синхронной части — после первого await чтения не регистрируются.","Батчинг: несколько одновременных изменений = <b>один</b> запуск эффекта (микротаска-очередь).","Для контроля flush есть варианты: <code>watchPostEffect</code> (после рендера), <code>watchSyncEffect</code> (синхронно).","Функция <code>stop()</code> из возврата watchEffect останавливает эффект; в компоненте это происходит автоматически при unmount.","onCleanup в аргументе колбэка срабатывает перед следующим запуском и при остановке — место для AbortController, clearInterval."],bestPractices:["watchEffect — для эффектов без значения (fetch, сохранение, подписка); для производных значений — computed.","Если нужно oldValue или выборочное срабатывание — watch с явными источниками.","Держите синхронную часть короткой: только сбор зависимостей; тяжёлое — после await или в onCleanup.","Для запросов всегда cleanup: AbortController.abort() в onCleanup.","В компонентах watchEffect на верхнем уровне setup — не внутри условий/циклов."],whenToUse:"<strong>watchEffect</strong> хорош для «связанных эффектов»: синхронизация query → fetch, сохранение состояния формы в localStorage, обновление заголовка документа. Когда источников известно немного и нужны old-значения или пропуск первого запуска — берите watch.",alternative:{title:"watch с явными источниками",text:"Когда список источников известен и важен контроль (oldValue, точечные зависимости) — watch читается и ведёт себя предсказуемее.",code:`watch([query, page], ([q, p], [pq, pp]) => {
  fetchResults(q, p)
}, { immediate: true })`},advanced:{title:"scopeStop и ручной effectScope",text:"Вне компонента эффекты живут в effectScope: ручной скоуп позволяет запускать/останавливать пачки эффектов (например, для тестов или виджетов вне Vue-приложения).",code:`import { effectScope } from 'vue'

const scope = effectScope()
scope.run(() => {
  watchEffect(() => render(query.value))
  watch(prefs, applyPrefs)
})
// позже:
scope.stop() // остановит ВСЕ эффекты внутри`}}},Tv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),Rv=`<script setup lang="ts">
import { ref, shallowRef, shallowReactive, triggerRef, isReactive } from 'vue'

// deep ref: объект внутри полностью реактивен
const deep = ref({ nested: { count: 0 } })

// shallowRef: реактивна только замена .value целиком
const shallow = shallowRef({ nested: { count: 0 } })

// shallowReactive: реактивность только первого уровня
const sReactive = shallowReactive({ top: 0, nested: { inner: 0 } })

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

function mutateDeep() {
  deep.value.nested.count++
  add(\`deep.value.nested.count → \${deep.value.nested.count} (реактивно ✅)\`)
}

function mutateShallowWrong() {
  shallow.value.nested.count++ // мутируем, но уведомления не будет
  add(\`shallow.value.nested.count → \${shallow.value.nested.count} (внутри данных изменилось, но UI не обновится ❌)\`)
}

function replaceShallow() {
  shallow.value = { nested: { count: shallow.value.nested.count + 100 } }
  add(\`shallow.value = новый объект → UI обновился ✅\`)
}

function forceTrigger() {
  triggerRef(shallow) // ручное уведомление без замены
  add(\`triggerRef(shallow) → UI дёрнулся ✅\`)
}

function mutateSReactive() {
  sReactive.top++ // первый уровень — реактивен
  sReactive.nested.inner++ // вложенный — не проксирован
  add(\`top=\${sReactive.top} (обновится), nested.inner=\${sReactive.nested.inner} (нет)\`)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="mutateDeep">deep мутация</button>
      <button class="btn danger" @click="mutateShallowWrong">shallow мутация (❌)</button>
      <button class="btn" @click="replaceShallow">shallow замена .value</button>
      <button class="btn" @click="forceTrigger">triggerRef</button>
      <button class="btn" @click="mutateSReactive">shallowReactive: top++ / inner++</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>deep (ref)</b>
        <p class="mono muted" style="margin: 6px 0 0">nested.count = {{ deep.nested.count }}</p>
      </div>
      <div class="card">
        <b>shallow (shallowRef)</b>
        <p class="mono muted" style="margin: 6px 0 0">
          nested.count = {{ shallow.nested.count }} <span class="tag" :class="shallow.nested.count % 2 ? 'warn' : 'info'">что показывает UI</span>
        </p>
      </div>
      <div class="card">
        <b>shallowReactive</b>
        <p class="mono muted" style="margin: 6px 0 0">top={{ sReactive.top }} · nested.inner={{ sReactive.nested.inner }}</p>
      </div>
      <div class="card">
        <b>Проверка</b>
        <p class="mono muted" style="margin: 6px 0 0">isReactive(shallow.nested): {{ isReactive(shallow.nested) }}</p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Нажмите «shallow мутация»: число в данных растёт, но отображение не меняется — пока не нажмёте
      «замена .value» или «triggerRef». Это и есть семантика shallow: отслеживается только ссылка.
    </p>
  </div>
</template>
`,Cv={title:"shallowRef, shallowReactive и triggerRef",summary:"Поверхностная реактивность: отслеживается только ссылка; когда глубокая — избыточна; triggerRef для ручного пинка.",demo:()=>F(()=>import("./Demo-ClqLsuOd.js"),[]),code:Rv,content:{intro:"Глубокая реактивность не бесплатна: Vue проксирует <b>каждый</b> вложенный объект при первом обращении. Для больших массивов записей, неизменяемых структур или внешних библиотек это лишняя работа. <b>shallowRef</b> и <b>shallowReactive</b> отслеживают только верхний уровень: замена <code>.value</code> / полей первого уровня уведомляет, мутации вглубь — нет. <b>triggerRef</b> позволяет уведомить вручную, не меняя ссылку. В демо разница видна наглядно: мутация внутри shallowRef не обновляет UI.",howItWorks:"shallowRef — обычный ref, но без внутреннего reactive() для значения: <code>get/set value</code> работают как у ref, а вот проксирования объекта не происходит. Уведомление срабатывает только на запись <code>.value</code>. shallowReactive проксирует только поля первого уровня; вложенные объекты остаются «сырыми» и не регистрируют зависимости. triggerRef(shallow) принудительно запускает эффекты, подписанные на ref — спасает, когда объект мутируется кем-то ещё (например, библиотекой) и заменить ссылку нельзя.",mistakes:[{title:"Мутировать shallowRef вглубь и ждать обновления",text:"Изменение вложенного поля проходит «мимо» системы реактивности: данные меняются, UI — нет. Классическая ловушка при переходе с ref на shallowRef ради оптимизации.",code:`const state = shallowRef({ list: [] })
state.value.list.push(item) // ❌ UI не обновится`,fix:`state.value = { list: [...state.value.list, item] } // ✅ замена ссылки
// или triggerRef(state) после мутации`},{title:"shallowReactive + ожидание глубокой валидации",text:"Поля первого уровня реактивны, вложенные — нет. Для форм/стейта с вложенностью shallowReactive не подходит.",code:`const form = shallowReactive({ address: { city: '' } })
form.address.city = 'Москва' // ❌ не обновит`,fix:`const form = reactive({ address: { city: '' } }) // ✅ глубокая
// или сделайте каждый уровень shallowReactive вручную`},{title:"Использовать shallow «на всякий случай»",text:"Оптимизация без измерения: на типичных объёмах данных (сотни элементов) глубокая реактивность не является узким местом. Сначала профилируйте.",code:"const count = shallowRef(0) // ❌ бессмысленно: примитив и так shallow",fix:`// shallow имеет смысл для: больших массивов, immutable-структур,
// инстансов классов, данных из внешних библиотек
const rows = shallowRef<Row[]>(fetchedRows)`}],nuances:["<code>shallowRef</code> для примитивов ведёт себя как обычный ref (им и является по сути).","Мутация внутри shallowRef не «сломана» — данные меняются; ломается только уведомление. Поэтому баги от неё коварны: UI просто «отстаёт».","triggerRef не меняет значение — только дёргает эффекты; полезно после внешних мутаций (быстрая перерисовка canvas-обёртки).","<code>isReactive(shallowRef({}).value)</code> → false: вложенность действительно не проксирована.","С Vue 3.5 <code>onTriggerRef</code>-подобные утилиты для отладки — удобно видеть, кто и когда дернул ref.","Комбинация <code>shallowRef + вычисляемые производные через computed</code> — частый паттерн: хранить сырые данные shallow, агрегировать computed-ом."],bestPractices:["shallowRef — для <b>больших списков</b> данных, где обновление идёт заменой массива (immutable-style).","Для инстансов сторонних библиотек (map, chart, editor) — shallowRef или markRaw: не проксируем чужие объекты.","Правило команды: если shallowRef — то всегда замена .value, никогда мутации; зафиксируйте в code style.","triggerRef — деликатный инструмент: используйте, когда нельзя поменять ссылку, и документируйте почему."],whenToUse:"<strong>shallow-варианты</strong> нужны при проблемах производительности с глубоким проксированием (тысячи записей), при интеграции с внешними state-менеджерами/классами и при immutable-подходе, где данные всегда заменяются целиком. В обычных формах и небольших списках они не нужны.",alternative:{title:"Обычный ref + замена значения",text:"Даже без shallow можно работать в immutable-стиле: заменять .value новым объектом. Тогда shallowRef — лишь микро-оптимизация поверх уже корректного кода.",code:`const rows = ref<Row[]>([])
function update(id: string, patch: Partial<Row>) {
  rows.value = rows.value.map(r => (r.id === id ? { ...r, ...patch } : r))
}`},advanced:{title:"shallowRef для дерева с точечным triggerRef",text:"Для больших деревьев (редактор, ФС) хранят корень в shallowRef, мутируют узлы напрямую, а после операции дергают triggerRef — один пинок на пакет изменений вместо проксирования тысяч узлов.",code:`const tree = shallowRef<TreeNode>(initialTree)

function renameNode(id: string, name: string) {
  findNode(tree.value, id).name = name // мутируем напрямую — дешёво
  triggerRef(tree) // одно уведомление на весь пакет
}`}}},Pv=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),Ev=`<script setup lang="ts">
import { ref, reactive, toRef, toRefs, toValue, unref, isRef } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

const state = reactive({ count: 0, name: 'Ада' })

// toRef: один ref, связанный с полем реактивного источника
const countRef = toRef(state, 'count')

// toRefs: все поля сразу
const refs = toRefs(state)

// unref: значение или .value
function show(label: string, v: MaybeRefOrGetter<number>) {
  add(\`\${label}: unref → \${unref(v)}\`)
}

// toValue: то же + поддержка getter-функций
const asGetter = () => 42
const asValue = 7
const asRef = ref(13)

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 10) log.value.pop()
}

function incrementAll() {
  state.count++ // меняем источник
}

function normalize(input: MaybeRefOrGetter<number>) {
  // toValue: единый способ получить значение из ref | getter | value
  return toValue(input)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="incrementAll">state.count++</button>
      <button class="btn" @click="show('countRef', countRef)">прочитать toRef</button>
      <button class="btn" @click="show('toValue(getter)', normalize(asGetter))">toValue(getter)</button>
      <button class="btn" @click="show('toValue(7)', normalize(asValue))">toValue(число)</button>
      <button class="btn" @click="show('toValue(ref13)', normalize(asRef))">toValue(ref)</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>toRef(state, 'count')</b>
        <p class="mono muted" style="margin: 6px 0 0">
          countRef.value = {{ countRef }} — живая связь с state
        </p>
        <p class="mono muted" style="margin: 4px 0 0">запись через countRef тоже обновит state</p>
      </div>

      <div class="card">
        <b>toRefs(state) — деструктуризация без потери</b>
        <p class="mono muted" style="margin: 6px 0 0">
          refs.count.value = {{ refs.count.value }}<br />
          refs.name.value = {{ refs.name.value }}<br />
          isRef(refs.count): {{ isRef(refs.count) }}
        </p>
      </div>
    </div>

    <div class="row">
      <button class="btn" @click="refs.count.value++; state.name = refs.count.value % 2 ? 'Грейс' : 'Ада'">
        запись через refs.count.value++
      </button>
      <span class="muted mono">state.count={{ state.count }}, name={{ state.name }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      toRef/toRefs создают <b>связанные</b> ref — не копии. Изменение через любой путь синхронно
      отражается в источнике. toValue/unref — утилиты «снять обёртку», для функций принимающих ref|value|getter.
    </p>
  </div>
</template>
`,Ov={title:"toRef, toRefs, toValue, unref",summary:"Мосты между reactive и ref: связанные ref-ы, безопасная деструктуризация, утилиты снятия обёртки.",demo:()=>F(()=>import("./Demo-LzD275ja.js"),[]),code:Ev,content:{intro:"Эти четыре утилиты решают одну проблему: <b>reactive нельзя деструктурировать</b>, а функции хотят принимать «ref или значение». <code>toRef(state, 'count')</code> делает ref, <b>связанный</b> с полем источника; <code>toRefs(state)</code> — сразу все поля. <code>unref(x)</code> возвращает значение из ref или само значение; <code>toValue(x)</code> — расширенная версия, понимающая ещё и getter-функции. В демо видно двустороннюю связь: изменение через state, toRef или toRefs синхронно везде.",howItWorks:"toRef создаёт ObjectRefImpl — тонкую обёртку с get/set, перенаправляющими к <code>source[prop]</code>: чтение регистрирует зависимость поля, запись уведомляет. toRefs проходит по всем ключам и возвращает объект таких ref. Это не копии — все ссылки ведут на один источник. unref — это просто <code>isRef(v) ? v.value : v</code>. toValue добавляет случай getter: <code>isFunction(v) ? v() : unref(v)</code> — благодаря этому API composables может принимать «значение, ref или функцию» — гибкий контракт без перегрузок.",mistakes:[{title:"Думать, что toRef копирует значение",text:"toRef не делает снимок — это живая ссылка на поле источника. Если источник отсутствует в момент создания, ref вернёт undefined, но останется «привязанным» к пути.",code:`const s = reactive({ count: 0 })
const c = toRef(s, 'count')
c.value = 5 // ✅ s.count тоже 5 — это НЕ копия`,fix:`// нужна именно независимая копия?
const copy = ref(s.count) // снимок, связи нет`},{title:"toRefs на обычном (не реактивном) объекте",text:"toRefs работает с reactive-источниками. На plain-объекте ref-ы получатся, но зависимостей у них не будет — «живой» связи не возникнет.",code:`const plain = { count: 0 }
const refs = toRefs(plain) // ❌ ref-ы не реактивны к plain`,fix:`const state = reactive({ count: 0 })
const refs = toRefs(state) // ✅`},{title:"Путать unref и toValue на getter-ах",text:"unref(функция) вернёт саму функцию, а не её результат. Для API, принимающих «ref | value | getter», нужен именно toValue.",code:`function useThing(src: MaybeRefOrGetter<number>) {
  const v = unref(src) // ❌ если src — () => 42, получим функцию
}`,fix:`function useThing(src: MaybeRefOrGetter<number>) {
  const v = toValue(src) // ✅ 42
}
// src может быть: 42 | ref(42) | () => 42`}],nuances:["toRefs полезен ровно в одном месте — <b>возврат из composable</b>: потребитель деструктурирует без потери реактивности.","toRef для несуществующего поля не падает: вернёт undefined и привяжется к пути (полезно для опциональных структур).","<code>toValue</code> появился в Vue 3.3; до него писали <code>isRef(v) ? v.value : isFunction(v) ? v() : v</code>.","Тип <code>MaybeRefOrGetter&lt;T&gt;</code> из vue — стандартный контракт для «параметра-значения» composables.","toRefs деструктуризация сохраняет <b>связь</b>, но не делает поля shallow-независимыми: вложенные объекты остаются общими.","В шаблоне refs из toRefs распаковываются автоматически — <code>{{ refs.count }}</code> покажет число."],bestPractices:["Composables: возвращайте <code>toRefs(reactiveState)</code>, а не сам reactive — API гибче для потребителей.","Параметры composables принимайте как <code>MaybeRefOrGetter&lt;T&gt;</code> и читайте через <code>toValue</code> — поддержка всех вариантов без перегрузок.","Не создавайте toRef/toRefs «на всякий случай»: если деструктуризации не будет, они не нужны.","Помните: связанные ref — это алиасы; документируйте, кто источник истины."],whenToUse:"<strong>toRef/toRefs</strong> — на границе reactive ↔ ref: возврат из composables, проброс поля стора в компонент, адаптация API. <strong>toValue/unref</strong> — внутри универсальных composables, принимающих параметры в любом виде. В обычном коде компонентов они почти не нужны.",alternative:{title:"Просто не деструктурировать",text:"Часто самый простой вариант — оставить доступ через объект: state.count вместо деструктуризации. Меньше утилит, меньше путаницы.",code:`const state = reactive({ count: 0 })
// в шаблоне: {{ state.count }}
// в script: state.count++ — реактивно, без toRefs`},advanced:{title:"Тип MaybeRefOrGetter для публичных composables",text:"Стандартная сигнатура библиотечных composables: вход — MaybeRefOrGetter, выход — Ref. Так работает сам VueUse: каждый параметр может быть реактивным или статическим.",code:`import type { MaybeRefOrGetter } from 'vue'

export function useTitle(
  title: MaybeRefOrGetter<string>,
) {
  watchEffect(() => {
    document.title = toValue(title)
  })
}

// вызовы: useTitle('x') | useTitle(titleRef) | useTitle(() => computed.value)`}}},Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Iv=`<script setup lang="ts">
import { ref, reactive, readonly, shallowReadonly, isReadonly } from 'vue'

const state = reactive({ count: 0, user: { name: 'Ада' } })

// readonly-обёртка: та же структура, но записи запрещены
const frozen = readonly(state)

// shallowReadonly: только первый уровень
const shallowFrozen = shallowReadonly({ config: 'a', nested: { editable: true } })

const log = ref<string[]>([])

function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 6) log.value.pop()
}

function tryWriteFrozen() {
  try {
    ;(frozen as { count: number }).count = 999
    add('запись в readonly прошла?! (не должно)')
  } catch {
    add('❌ запись в readonly: ошибка (dev-режим)')
  }
  // В production записи молча игнорируются
  add(\`frozen.count = \${frozen.count} — значение не изменилось\`)
}

function writeSource() {
  state.count++
  add(\`источник state.count++ → frozen.count тоже \${frozen.count} (readonly — это вид)\`)
}

function writeNestedThroughSource() {
  state.user.name = state.user.name === 'Ада' ? 'Грейс' : 'Ада'
  add(\`state.user.name = \${state.user.name} → frozen.user.name тоже изменился\`)
}

function tryWriteShallowNested() {
  shallowFrozen.nested.editable = false // вложенный уровень НЕ readonly
  add(\`shallowFrozen.nested.editable = \${shallowFrozen.nested.editable} (вложенный остался writable)\`)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn primary" @click="writeSource">state.count++ (через источник)</button>
      <button class="btn danger" @click="tryWriteFrozen">попытка писать в readonly</button>
      <button class="btn" @click="writeNestedThroughSource">изменить вложенное поле</button>
      <button class="btn" @click="tryWriteShallowNested">писать в shallowReadonly.nested</button>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>readonly(state)</b>
        <p class="mono muted" style="margin: 6px 0 0">
          count={{ frozen.count }} · user.name={{ frozen.user.name }}<br />
          isReadonly: {{ isReadonly(frozen) }}
        </p>
      </div>
      <div class="card">
        <b>shallowReadonly</b>
        <p class="mono muted" style="margin: 6px 0 0">
          config={{ shallowFrozen.config }} · nested.editable={{ shallowFrozen.nested.editable }}<br />
          isReadonly(shallowFrozen): {{ isReadonly(shallowFrozen) }}
        </p>
      </div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      readonly — это <b>вид</b> на источник, а не копия: изменения источника видны, записи —
      блокируются (в dev с ошибкой, в prod молча).
    </p>
  </div>
</template>
`,Av={title:"readonly и shallowReadonly",summary:"Readonly-вид на реактивное состояние: записи блокируются, источник остаётся mutable; provide/inject-контракты.",demo:()=>F(()=>import("./Demo-BYm3NLK2.js"),[]),code:Iv,content:{intro:"<b>readonly()</b> принимает reactive-объект (или ref) и возвращает <b>read-only прокси</b>: чтение работает как у оригинала и остаётся реактивным, а записи блокируются — в dev-режиме с ошибкой в консоли, в production молча. Это не копия: изменение источника видно через readonly-вид. <b>shallowReadonly</b> защищает только первый уровень. Главное применение — передача состояния вниз без права мутации: provide/inject, глобальный контекст, пропсы-объекты.",howItWorks:"readonly строит Proxy с ловушкой set/deleteProperty, которая в dev кидает предупреждение, а в prod просто возвращает false (запись игнорируется). Вложенные объекты при чтении тоже оборачиваются в readonly — защита глубокая, поэтому shallowReadonly существует как «мягкий» вариант: первый уровень защищён, вложенные структуры остаются обычными (и реактивными, если были таковыми). Важно: readonly — <b>тот же источник</b>, но другой прокси; сравнение с оригиналом по === даст false.",mistakes:[{title:"Думать, что readonly копирует",text:"readonly — это вид, а не снапшот: изменился источник — изменился и readonly. Если нужна неизменяемая копия, делайте глубокий клон или используйте immutable-библиотеки.",code:`const frozen = readonly(state)
state.count++
console.log(frozen.count) // ❌ тоже вырос — это тот же объект`,fix:`// нужна независимая неизменяемая копия:
const snapshot = readonly(structuredClone(toRaw(state)))
// или просто const snapshot = JSON.parse(JSON.stringify(state))`},{title:"Пытаться мутировать readonly в production-коде",text:"В dev вы увидите ошибку, но в prod запись молча игнорируется — баг станет «тихим»: логика думает, что записала, а данные не изменились.",code:"props.user.name = 'new' // ❌ props readonly; в prod — молча",fix:`// общайтесь событиями или v-model, а не мутацией
emit('update:name', 'new')
// или defineModel()`},{title:"readonly на_plain-объекте без реактивности",text:"readonly(plainObj) вернёт прокси без реактивности — защиты будет, а живых обновлений нет. Источник должен быть реактивным.",code:"const frozen = readonly({ count: 0 }) // ❌ не реактивно",fix:"const frozen = readonly(reactive({ count: 0 })) // ✅"}],nuances:["isReadonly(frozen) → true; isProxy работает и для readonly, и для reactive.","readonly <b>глубокий</b>: вложенные объекты тоже защищены; shallowReadonly — только первый уровень.","Внутри Vue props组件 уже приходят shallowReadonly — потому «мутация пропа» в dev кидает ошибку.","readonly + reactive = та же система: isReactive(readonly(state)) → true.","Для Pinia-сторов есть <code>$subscribe</code> и storeToRefs — readonly-подход там встроен в API.","toRaw() снимает любые прокси (reactive/readonly/shallow) — путь к оригинальному объекту."],bestPractices:["Пробрасывайте состояние вниз как <code>readonly(state)</code> — контракт «только читать» зашит в API, а не в комментарии.","Для provide/inject передавайте readonly-вид + отдельные функции-мутаторы (actions) — паттерн из доков Vue.","Не применяйте readonly к данным, которые должны редактироваться формами — это создаст ложный барьер.","В dev-тестах проверяйте, что попытки мутации действительно кидают ошибки."],whenToUse:"<strong>readonly</strong> — для защиты контрактов: глобальный конфиг приложения, provide/inject-состояние, объект-пропсы внутри библиотечных компонентов, отображение данных, которые редактируются только через actions. Не нужен там, где вы и так контролируете мутации (локальный компонент).",alternative:{title:"TypeScript readonly-модификаторы",text:"На уровне типов <code>Readonly&lt;T&gt;</code> запрещает записи compile-time — без рантайм-обёртки. Часто достаточно, когда источник контролируете вы.",code:`interface Config {
  readonly apiBase: string
  readonly version: string
}
const config: Config = { apiBase: '/api', version: '1.0' }
// config.apiBase = 'x' // ❌ TS error`},advanced:{title:"Контракт «state + actions» через provide/inject",text:"Канонический паттерн из документации Vue: вниз уходит readonly-состояние и методы-мутаторы. Потребитель не может сломать инварианты.",code:`// provider
const state = reactive({ items: [] })
provide('store', {
  list: readonly(state).items, // читается, не мутируется
  addItem: (item: Item) => state.items.push(item),
})

// consumer
const { list, addItem } = inject('store')!
// list.push(...) // ❌ TypeError: нельзя мутировать
addItem({ id: 1 }) // ✅`}}},Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),Vv=`<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const a = ref(1)
const b = ref(2)
const c = ref(10)

const ab = computed(() => a.value + b.value) // зависит от a, b
const abc = computed(() => ab.value * c.value) // зависит от ab, c

const log = ref<string[]>([])
const renders = ref(0)

watch(abc, () => {
  renders.value++
  log.value.unshift(\`эффект перезапущен: abc=\${abc.value}\`)
  if (log.value.length > 8) log.value.pop()
})

log.value.push('abc = (a + b) * c — измените a или b: ab и abc пересчитаются')

// Диаграмма вынесена в script: внутри шаблона {{ }} конфликтует с интерполяцией
const diagram = [
  '  a ─┐',
  '     ├─▶ ab ─┐',
  '  b ─┘       ├─▶ abc ──▶ [эффект: watch/рендер]',
  '  c ─────────┘',
].join('\\n')

function bump(which: 'a' | 'b' | 'c') {
  if (which === 'a') a.value++
  if (which === 'b') b.value++
  if (which === 'c') c.value++
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="bump('a')">a++</button>
      <button class="btn" @click="bump('b')">b++</button>
      <button class="btn" @click="bump('c')">c++</button>
    </div>

    <div class="row" style="gap: 10px; flex-wrap: wrap">
      <span class="tag info">a={{ a }}</span>
      <span class="tag info">b={{ b }}</span>
      <span class="tag info">c={{ c }}</span>
      <span class="tag warn">ab = a+b = {{ ab }}</span>
      <span class="tag ok">abc = ab*c = {{ abc }}</span>
      <span class="tag bad">эффектов: {{ renders }}</span>
    </div>

    <div class="card">
      <b>Граф зависимостей</b>
      <pre class="mono muted" style="margin: 8px 0 0; white-space: pre-wrap">{{ diagram }}</pre>
      <p class="muted" style="margin: 8px 0 0">
        Нажмите a++ или b++: пересчитываются ab и abc, эффект запускается. Нажмите c++: ab НЕ
        пересчитывается (его зависимости не менялись), но abc — да. Так работает зависимость-трекинг:
        каждый computed знает ровно то, от чего зависит.
      </p>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>
  </div>
</template>
`,Lv={title:"Как работает реактивность: концепция",summary:"Граф зависимостей, инвалидация computed, когда компонент ререндерится; ref vs reactive на пальцах.",demo:()=>F(()=>import("./Demo-DQoGl3nt.js"),[]),code:Vv,content:{intro:"Сердце Vue 3 — <b>система реактивности на Proxy</b>. Ментальная модель: каждая реактивная переменная знает список «подписчиков» (эффектов); при записи подписчики уведомляются. <b>computed</b> — это и подписчик, и источник одновременно, поэтому строится граф зависимостей. <b>Рендер компонента — тоже эффект</b>: он читает значения (становясь их подписчиком) и перезапускается, когда они меняются. В демо — живой граф: a и b питают ab, ab и c питают abc, abc дёргает watch-эффект.",howItWorks:"1) Чтение: когда эффект (рендер, computed, watch) читает реактивное значение, Proxy-ловушка <code>get</code> регистрирует «активный эффект» как подписчика этого значения. 2) Запись: ловушка <code>set</code> уведомляет подписчиков — они помечаются «грязными» и ставятся в очередь. 3) Батчинг: уведомления не синхронны — очередь разгребается в микрозадачах, поэтому N изменений = один ререндер. 4) computed добавляет <b>инвалидацию</b>: он не пересчитывается при уведомлении, а лишь помечается dirty; пересчёт — лениво, при следующем чтении. Именно поэтому c++ в демо не трогает ab, но запускает abc.",mistakes:[{title:"Думать, что ререндер компонента = перерисовка всего",text:"Ререндер — это повторное выполнение render-функции и <b>диффинг</b> с прошлым vnode-деревом; реальные DOM-изменения минимальны. Но лишние ререндеры всё равно тратят время — для их сокращения существуют v-memo, мелкая нарезка компонентов, shallowRef.",code:`// ❌ миф: «изменилось одно поле — перестроится вся страница»
// ✅ реальность: перезапускается только render-эффект,
// patch обновит diff-нутые узлы`},{title:"Ручная инвалидация «на всякий случай»",text:"Некоторые пишут watch + ref + forceUpdate-паттерны. Система сама отслеживает зависимости — вручную уведомлять не нужно (исключение: shallowRef + triggerRef после внешних мутаций).",code:"watch(a, () => { forceUpdate() }) // ❌ ненужно",fix:"// ✅ просто читайте a в шаблоне/computed — Vue сам подписан"},{title:"Не-реактивное чтение в эффекте",text:"Зависимости собираются только при чтении реактивных значений. Чтение из обычной переменной, localStorage, DOM — источник не подписан: эффект не сработает на его изменение.",code:`let externalCount = 0
const derived = computed(() => externalCount * 2) // ❌ не реактивно`,fix:"const externalCount = ref(0) // ✅ источник реактивен"}],nuances:["<b>ref vs reactive</b>: ref — универсальный (примитивы + объекты, замена .value); reactive — только объекты, мутации, но без деструктуризации. Стиль проекта обычно: ref по умолчанию, reactive для групп.","<b>Глубокая реактивность</b> ленивая: вложенный объект проксируется при первом обращении, не сразу.","Компонентный рендер подписан на всё, что прочитал за последний прогон: изменилось условие v-if — подписки пересоберутся.","Эффекты батчатся через очередь с приоритетами: компоненты обновляются родитель → потомок, watchers — после рендера.","Одна и та же реактивная система работает везде: ref в шаблоне, computed в store, watch в composable — единый граф.","Proxy не поддерживается в IE11 — Vue 3 требует современных браузеров (легаси — Vue 2 с defineProperty)."],bestPractices:["Думайте в терминах «источник → производное → эффект», а не «когда вызвать обновление».","Минимизируйте область рендера: делите большой компонент на мелкие — ререндерится только то, что читало изменённое.","Для крупных структур данных применяйте shallowRef и immutable-обновления.","Доверьтесь системе: не эмулируйте реактивность руками (watch + ref + nextTick-хаки).","Проверяйте производительность по графику рендеров (Vue Devtools: highlight updates), а не по ощущениям."],whenToUse:"Это <strong>концептуальная тема</strong>: понимание графа зависимостей объясняет 80% вопросов «почему не обновляется» и «почему лишний ререндер». Возвращайтесь к ней, когда ловите баги рассинхрона, планируете оптимизацию или проектируете composables — модель «подписка/уведомление» предупредит почти все ошибки.",alternative:{title:"Событийная модель без реактивности",text:"Без реактивности UI строится на ручных подписках (event emitter) и ручных обновлениях DOM. Реактивность — автоматизация именно этого: сравните объём кода.",code:`// без реактивности:
store.on('change', () => {
  el.textContent = store.count.toString()
  otherEl.textContent = (store.count * 2).toString()
})
// с реактивностью:
const doubled = computed(() => store.count * 2)`},advanced:{title:"effectScope и отладка реактивности",text:"Все эффекты компонента живут в effectScope — при unmount он останавливается, освобождая подписки. Для отладки в dev есть onEffectCleanup и утилиты Vue Devtools (timeline), показывающие события реактивности в реальном времени.",code:`import { effectScope, onScopeDispose } from 'vue'

const scope = effectScope()
scope.run(() => {
  watch(a, cb) // эффект внутри скоупа
})

scope.stop() // остановлены все эффекты — как при unmount

// отладка: Vue Devtools → Timeline → Component events
// покажет «trigger» события и кто подписан`}}},$v=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),Uv=`<script setup lang="ts">
import { ref, reactive } from 'vue'

const list = reactive([1, 2, 3])
const obj = reactive({ a: 1 })
const snapshotObj = ref({ items: [1, 2, 3] })
const state = reactive({ count: 1, inner: ref(100) })

const log = ref<string[]>([])
function add(entry: string) {
  log.value.unshift(entry)
  if (log.value.length > 8) log.value.pop()
}

function indexMutation() {
  list[0] = list[0] + 10
  add(\`list[0] += 10 → UI обновился ✅ (Vue 3 Proxy ловит индексы)\`)
}

function newProp() {
  ;(obj as Record<string, number>).b = 2
  add(\`obj.b = 2 → UI обновился ✅ (новые свойства реактивны в Vue 3)\`)
}

function wholeReplacement() {
  snapshotObj.value = { items: [9, 9, 9] }
  add(\`ref.value = новый объект → обновился ✅\`)
}

function destructureTrap() {
  const { count } = state // ❌ сняли значение
  const fake = count + 1
  add(\`деструктуризация: локально \${fake}, но state.count=\${state.count} — связи нет ❌\`)
}

function refInReactive() {
  state.count++
  add(\`state.count++ → {{ state.count }} в шаблоне показывает число (ref распакован)\`)
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="indexMutation">list[0] += 10</button>
      <button class="btn" @click="newProp">obj.b = 2</button>
      <button class="btn" @click="wholeReplacement">ref.value = новый</button>
      <button class="btn danger" @click="destructureTrap">деструктуризация (❌)</button>
      <button class="btn" @click="refInReactive">state.count++</button>
    </div>

    <div class="row" style="gap: 12px">
      <div class="stat">list: <b>{{ list.join(', ') }}</b></div>
      <div class="stat">obj: <b>{{ JSON.stringify(obj) }}</b></div>
      <div class="stat">items: <b>{{ snapshotObj.items.join(', ') }}</b></div>
      <div class="stat">state.count: <b>{{ state.count }}</b></div>
      <div class="stat">state.inner: <b>{{ state.inner }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Все «страшилки» из Vue 2 (индексы, новые свойства) в Vue 3 <b>исправлены</b> Proxy-ом.
      Главные ловушки теперь другие: деструктуризация и потеря .value.
    </p>
  </div>
</template>
`,Fv={title:"Ловушки реактивности",summary:"Мифы Vue 2 (индексы, новые поля) против реальных ловушек Vue 3: деструктуризация, потеря .value, ref внутри reactive.",demo:()=>F(()=>import("./Demo-BAD26YQy.js"),[]),code:Uv,content:{intro:"Многие «страшилки» про реактивность устарели: в Vue 3 <b>Proxy</b> ловит мутации по индексу и добавление новых свойств — то, что не умел Vue 2. Настоящие ловушки теперь другие: <b>деструктуризация</b> reactive-объекта, <b>потеря .value</b>, неожиданное поведение ref внутри reactive. В демо каждая кнопка проверяет один сценарий — большинство работает как ожидается, ловушка ровно одна.",howItWorks:"Proxy-ловушки <code>get/set/deleteProperty</code> + <code>ownKeys</code> покрывают <b>все</b> операции над объектом и массивом: list[0] = x, obj.b = 2, push/splice, delete obj.a — всё уведомляет подписчиков. Но Proxy защищает <b>объект</b>, а не переменную: присвоение новой локальной переменной из поля (деструктуризация) уходит мимо прокси. Ref внутри reactive автоматически распаковывается при чтении (state.count — число, а не Ref), поэтому в шаблоне .value не нужен — а в массивах ref-ы не распаковываются.",mistakes:[{title:"Деструктуризация props или reactive",text:"Классика: const { count } = props — и «реактивность пропала». Значение снято как обычное свойство, подписки нет.",code:`const { count } = props // ❌ снимок
const { user } = route.params // ❌ для params тоже`,fix:`// ✅ оставайтесь на объекте или используйте toRefs
props.count
const { count } = toRefs(props) // Ref<number>`},{title:"Смешивать ref и reactive без понимания",text:"ref внутри reactive распаковывается (state.count — число), но в массивах и Map — нет (list[0] остаётся Ref). Половина кода пишет .value, половина — нет, и ошибки неизбежны.",code:`const state = reactive({ count: ref(1) })
state.count++ // ✅ распаковано — без .value
state.arr.push(ref(5))
state.arr[0].value++ // ❌ нужен .value — в массиве не распаковано`,fix:`// ✅ единый стиль: ref-ы снаружи, reactive — для plain-объектов
const count = ref(1)
const arr = ref([1, 2])
arr.value[0]++ // всегда .value у контейнера`},{title:"Ожидать реактивности от localStorage/DOM",text:"Внешние источники не отслеживаются: прочитали localStorage в setup — и значение «замерло». Мосты строятся вручную (watch + запись) или VueUse (useLocalStorage).",code:"const theme = localStorage.getItem('theme') // ❌ строка, не реактивна",fix:`import { useLocalStorage } from '@vueuse/core'
const theme = useLocalStorage('theme', 'dark') // ✅ живой ref`}],nuances:["<code>list[0] = x</code> и <code>list.length = 0</code> реактивны в Vue 3 — Proxy покрывает индексные записи и length.","Новые свойства (<code>obj.b = 2</code>) тоже реактивны — Vue 2-ловушка «Vue.set» не нужна.","<b>ref внутри reactive распаковывается</b> только при доступе через объект; в массивах/Map/Set — нет.","Присвоение reactive-объекта в ref тоже распакует: <code>ref(reactiveObj)</code> хранит прокси.","Деструктуризация в <b>props</b> (defineProps&lt;{...}&gt;()) с компилятором Vue 3.5+ сохраняет реактивность для дефолтов, но общее правило — не деструктурировать.","structuredClone/toRaw не сохраняют реактивность — клон всегда «мёртвый» до повторного оборачивания."],bestPractices:["Правило номер один: <b>не деструктурируйте</b> reactive/props без toRefs.","Выберите один стиль (ref-везде или reactive-группы) и следуйте ему по всему проекту.","Не кладите ref внутрь массивов/Map: либо распаковывайте контейнер в ref, либо храните значения напрямую.","Тестируйте «обновляется ли UI» отдельно от «обновились ли данные» — это разные сбои при ошибках реактивности.","Держите источник истины один: синхронизация двух реактивных объектов через watch — источник багов."],whenToUse:"Тема-<strong>справочник</strong>: возвращайтесь, когда «данные изменились, а UI нет» или наоборот. Диагностика по шагам: 1) потеряна ли обёртка (деструктуризация/копия); 2) тот ли объект мутируется (raw vs proxy); 3) не shallow ли контейнер; 4) читается ли значение в эффекте вообще (иначе Vue не подписан).",alternative:{title:"VueUse для внешних источников",text:"Практически любой внешний источник (localStorage, URL, медиа, интервал) уже обёрнут в composable с живым ref — не стройте мосты вручную.",code:`import { useLocalStorage, useUrlSearchParams } from '@vueuse/core'

const theme = useLocalStorage('theme', 'dark')
const params = useUrlSearchParams('history') // ?page=2 → params.page`},advanced:{title:"Отладка через onTriggerRef / devtools",text:"Найти «кто дернул» и «кто подписан» помогают devtools-инструменты: Vue Devtools (Inspector → Timeline) показывает trigger-события; в коде — customRef с логированием в get/set.",code:`import { customRef } from 'vue'

function debugRef(initial: number, name: string) {
  return customRef((track, trigger) => ({
    get() { console.log(\`📖 read \${name}\`); track(); return initial },
    set(v) { console.log(\`✍️ write \${name} =\`, v); initial = v; trigger() },
  }))
}

// в консоли видно каждое чтение/запись — легко найти пропущенный триггер`}}},Nv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),jv=`<script setup lang="ts">
import { ref, computed, h, type Component } from 'vue'

// Мини-маршрутизация внутри демо: тот же принцип, что у vue-router —
// текущий путь → какой «компонент» рендерится в <component :is>
const route = ref<'home' | 'users' | 'user-profile'>('home')
const selectedUser = ref('ada')

const pages: Record<string, Component> = {
  home: {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', '🏠 Главная'),
          h('p', { class: 'muted', style: 'margin:6px 0 0' }, 'Текущий «маршрут»: /home'),
        ])
    },
  },
  users: {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', '👥 Список пользователей'),
          h(
            'p',
            { class: 'muted', style: 'margin:6px 0 0' },
            'Отсюда обычно переходят на /users/:id — динамический маршрут',
          ),
        ])
    },
  },
  'user-profile': {
    setup() {
      return () =>
        h('div', { class: 'card' }, [
          h('b', \`👤 Профиль: \${selectedUser.value}\`),
          h('p', { class: 'muted', style: 'margin:6px 0 0' }, 'Маршрут: /users/:id с параметром'),
        ])
    },
  },
}

const active = computed(() => pages[route.value])

function nav(target: 'home' | 'users' | 'user-profile') {
  route.value = target
  // В реальном приложении это router.push({ name: 'user', params: { id } })
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: route === 'home' }" @click="nav('home')">/home</button>
      <button class="btn" :class="{ primary: route === 'users' }" @click="nav('users')">/users</button>
      <button
        class="btn"
        :class="{ primary: route === 'user-profile' }"
        @click="route = 'user-profile'"
      >
        /users/:id
      </button>
    </div>

    <div class="row">
      <select v-model="selectedUser" class="select" style="width: auto">
        <option value="ada">ada</option>
        <option value="grace">grace</option>
      </select>
      <span class="muted mono">параметр маршрута: id = {{ selectedUser }}</span>
    </div>

    <!-- В реальном приложении это <RouterView /> -->
    <component :is="active" />

    <p class="muted">
      Демо повторяет принцип vue-router: таблица маршрутов + текущий путь + одна точка рендера
      (RouterView). Сам справочник, который вы читаете, живёт на hash-роутере —
      <code>/#/router/basics</code> — так сборка открывается без серверных rewrite-правил.
    </p>
  </div>
</template>
`,Hv=`// router.ts — полная настройка маршрутизации
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  // createWebHashHistory() — hash-режим (/#/path): работает без серверных правил
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/users', name: 'users', component: UsersPage },
    // динамический сегмент: :id доступен в route.params.id
    { path: '/users/:id', name: 'user', component: UserPage, props: true },
    // 404 — catch-all
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})

// main.ts
createApp(App).use(router).mount('#app')`,Bv=`<!-- App.vue: две сущности всей навигации -->
<nav>
  <!-- RouterLink: рендерит <a>, добавляет .router-link-active -->
  <RouterLink to="/">Главная</RouterLink>
  <RouterLink :to="{ name: 'user', params: { id: 'ada' } }">Ада</RouterLink>
</nav>

<!-- RouterView: сюда рендерится matched-компонент -->
<RouterView />`,zv={title:"Маршруты и RouterView",summary:"Таблица маршрутов, RouterLink vs RouterView, динамические сегменты, catch-all 404, hash vs history.",demo:()=>F(()=>import("./Demo-Cwaja6Bj.js"),[]),code:`// ============ router.ts ============
${Hv}

// ============ App.vue ============
${Bv}

// ============ Demo.vue (интерактив) ============
${jv}`,content:{intro:"Vue Router связывает URL и дерево компонентов: <b>таблица маршрутов</b> описывает соответствие «путь → компонент», <code>&lt;RouterLink&gt;</code> создаёт ссылки (рендерит <code>&lt;a&gt;</code> с активными классами), <code>&lt;RouterView&gt;</code> — точка, куда рендерится совпавший компонент. В демо — микророутер на <code>&lt;component :is&gt;</code>: тот же принцип «текущий путь → компонент». Сам справочник использует <b>hash-историю</b> (<code>/#/router/basics</code>), чтобы собранная статика открывалась без серверных rewrite-правил.",howItWorks:"createRouter создаёт инстанс с историей (createWebHistory — History API с rewrite на сервере; createWebHashHistory — фрагмент после #, работает везде) и таблицей маршрутов. При навигации роутер ищет <b>matched</b>-маршруты, извлекает параметры (<code>:id</code> → <code>params.id</code>) и обновляет reactive-объект route; RouterView следит за ним и рендерит нужный компонент. RouterLink перехватывает клик (preventDefault) и вызывает <code>router.push()</code> — без перезагрузки страницы. Параметры передаются в компонент через props (<code>props: true</code>) — компонент остаётся чистым и тестируемым.",mistakes:[{title:"Путать route и router",text:"<code>route</code> — текущее состояние (reactive, read-only: params, query, path); <code>router</code> — API навигации (push, replace, back). Смешение ведёт к попыткам «мутировать» route.",code:"route.path = '/users' // ❌ route только для чтения",fix:`router.push('/users') // ✅ навигация через router
const { id } = route.params // ✅ чтение через route`},{title:"Не пометить 404 catch-all",text:"Без catch-all маршрута неизвестный URL рендерит пустоту и молчит в консоль. Явная NotFound-страница — обязательный последний маршрут.",code:"routes: [{ path: '/' }, { path: '/users' }] // ❌ /xyz → пустой RouterView",fix:"{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound } // ✅"},{title:"Ожидать перезагрузку данных при смене параметров",text:"При переходе /users/1 → /users/2 <b>компонент тот же</b>: он не пересоздаётся, mounted не сработает. Следите за params через watch или onBeforeRouteUpdate.",code:`// ❌ mounted сработал один раз для /users/1
onMounted(() => loadUser(props.id))`,fix:`watch(() => props.id, loadUser, { immediate: true }) // ✅
// или onBeforeRouteUpdate((to) => loadUser(to.params.id))`}],nuances:["Именованные маршруты (<code>name</code>) — источник истины: <code>router.push({ name: 'user', params: { id } })</code> не ломается при смене путей.","Сегменты: <code>:id</code> — обязательный, <code>:id?</code> — опциональный, <code>*:pathMatch(.*)*</code> — повторяемый catch-all.","<code>props: true</code> передаёт params как пропсы — развязывает компонент и роутер; можно функцией или объектом.","Активные классы RouterLink: <code>router-link-active</code> и <code>router-link-exact-active</code>; настраиваются через <code>activeClass</code>.","<code>router-view</code> со слотом даёт доступ к Component для KeepAlive/Transition-обёрток.","hash-история не требует сервера, но URL с # не индексируется так, как history-режим; для SEO-приложений — history + серверные fallback."],bestPractices:["Именуйте все маршруты и навигируйте по name — рефакторинг путей не ломает код.","Всегда добавляйте catch-all 404.","Используйте <code>props: true</code> вместо обращения к route.params внутри компонента.","Группируйте маршруты в константы/фабрики — большие приложения дробят таблицу на модули (router/routes/…).","Для SPA-навигации всегда RouterLink/router.push, никогда <code>&lt;a href&gt;</code> — иначе полная перезагрузка."],whenToUse:"<strong>Маршрутизация</strong> нужна любому многостраничному SPA: разделы, детальные страницы, вложенные layout-ы. Для 1–2 экранов-«диалогов» роутер избыточен — состояния переключений достаточно. Hash-режим — для статики без сервера (как этот справочник); history — для продакшен-приложений с сервером.",alternative:{title:"Табы на состоянии вместо роутера",text:"Для локальной навигации внутри виджета (табы, шаги) достаточно ref + component :is — URL не нужен, роутер добавил бы шум в историю браузера.",code:`const tab = ref<'a' | 'b'>('a')
<component :is="tab === 'a' ? TabA : TabB" />
<!-- роутер подключают, когда URL должен отражать состояние -->`},advanced:{title:"Вложенные маршруты и named views",text:"RouterView вкладывается: дочерние маршруты рендерятся в RouterView родителя. Named views позволяют нескольким RouterView получить разные компоненты одного маршрута (layout с sidebar + main + header).",code:`{
  path: '/settings',
  component: SettingsLayout,
  children: [
    { path: 'profile', component: ProfileSettings }, // /settings/profile
    { path: 'billing', component: BillingSettings }, // /settings/billing
  ],
}

{
  path: '/dashboard',
  components: {
    default: DashboardMain,
    sidebar: DashboardSidebar, // <RouterView name="sidebar" />
  },
}`}}},qv=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),Kv=`<script setup lang="ts">
import { ref, computed } from 'vue'

// Имитация route-объекта vue-router
interface FakeRoute {
  path: string
  params: Record<string, string>
  query: Record<string, string>
}

const current = ref<FakeRoute>({
  path: '/catalog/vue/3',
  params: {},
  query: {},
})

const log = ref<string[]>([])
function add(msg: string) {
  log.value.unshift(msg)
  if (log.value.length > 6) log.value.pop()
}

function nav(category: string, page: number) {
  // router.push({ name: 'category', params: { category }, query: { page: String(page) } })
  const path = \`/catalog/\${category}\`
  current.value = {
    path,
    params: { category },
    query: { page: String(page) },
  }
  add(\`push → \${path}?page=\${page}: params.category=\${category}, query.page=\${page}\`)
}

const page = computed(() => Number(current.value.query.page || 1))
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" :class="{ primary: current.params.category === 'vue' }" @click="nav('vue', page)">
        /catalog/vue
      </button>
      <button class="btn" :class="{ primary: current.params.category === 'nuxt' }" @click="nav('nuxt', page)">
        /catalog/nuxt
      </button>
      <button class="btn" @click="nav(current.params.category || 'vue', page + 1)">
        page++ (query)
      </button>
    </div>

    <div class="card">
      <b>route-объект (имитация)</b>
      <pre class="mono muted" style="margin: 8px 0 0; white-space: pre-wrap">{{ JSON.stringify(current, null, 1) }}</pre>
    </div>

    <div class="row" style="gap: 12px">
      <div class="stat">params.category: <b>{{ current.params.category || '—' }}</b></div>
      <div class="stat">query.page: <b>{{ page }}</b></div>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
    </div>

    <p class="muted">
      Параметры (<code>:category</code>) — часть пути, обязательные и влияют на «какой ресурс».
      Query (<code>?page=2</code>) — опциональные фильтры состояния: их смена обычно не меняет
      matched-компонент.
    </p>
  </div>
</template>
`,Wv=`// === Глобальные хуки ===
router.beforeEach((to) => {
  // meta: обязательное поле auth из таблицы маршрутов
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  // динамический заголовок через meta
  document.title = to.meta.title ?? 'Приложение'
})

// === Хук внутри компонента ===
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  // смена params внутри того же компонента (/users/1 → /users/2)
  if (to.params.id !== from.params.id) loadUser(to.params.id as string)
})

onBeforeRouteLeave(() => {
  if (hasUnsavedChanges.value) {
    return window.confirm('Есть несохранённые изменения. Уйти?')
  }
})`,Gv={title:"Params, query и navigation guards",summary:"Динамические сегменты, query-строка, beforeEach/resolve/afterEach, meta-поля и guards внутри компонента.",demo:()=>F(()=>import("./Demo-Coc0xgdJ.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${Kv}

// ============ guards.ts ============
${Wv}`,content:{intro:"URL несёт два вида данных: <b>params</b> — обязательные сегменты пути (<code>/users/:id</code>) и <b>query</b> — опциональные пары после <code>?</code> (<code>?page=2&sort=asc</code>). Навигационные хуки (<b>guards</b>) перехватывают переходы: проверка авторизации, подмена адреса, подтверждение ухода. <b>meta</b> — произвольные поля маршрута (<code>meta: { requiresAuth: true, title: ... }</code>), через которые guards получают декларативные правила.",howItWorks:"Router парсит путь: динамические сегменты попадают в <code>route.params</code>, всё после <code>?</code> — в <code>route.query</code>. Объект route — reactive и read-only. Guards — цепочка async-функций: <code>beforeEach</code> (глобально перед каждым переходом), <code>beforeResolve</code> (после resolve всех ленивых компонентов), <code>afterEach</code> (после навигации — аналитика, title). Guard может вернуть <code>false</code> (отмена), путь/объект локации (редирект) или undefined (пропуск). Внутри компонента — <code>onBeforeRouteUpdate</code> (смена params при живом компоненте) и <code>onBeforeRouteLeave</code> (уход с маршрута).",mistakes:[{title:"Проверять auth в компонентах, а не в guards",text:"Разбросанные по компонентам проверки пропускают прямые URL-переходы и глубокие ссылки. Авторизация — ответственность guards на маршруте.",code:"onMounted(() => { if (!user) router.push('/login') }) // ❌ дыра",fix:`{ path: '/admin', meta: { requiresAuth: true }, ... }
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthed()) return { name: 'login' }
}) // ✅`},{title:"Считать, что query всегда строка",text:"query-значения — строки (или массивы). <code>Number(query.page)</code> нужен перед арифметикой; отсутствие параметра — undefined.",code:'route.query.page + 1 // ❌ "2" + 1 = "21"',fix:"Number(route.query.page || 1) + 1 // ✅"},{title:"Терять redirect после логина",text:"Классика: guard отправляет на /login?redirect=/admin, а после логина пользователь попадает «куда-то». Сохраняйте redirect из query и восстанавливайте его.",code:`await login()
router.push('/') // ❌ пользователь потерял путь`,fix:"router.push((route.query.redirect as string) ?? '/') // ✅"}],nuances:["Guards <b>не блокируют рендер</b> уже открытого компонента: они управляют навигацией. Для «страница ждёт данные» — async setup + Suspense или loading-стейт.","Асинхронные guards: возвращайте Promise — навигация подождёт (setTimeout в guard реально тормозит переход).","meta доступна через <code>to.meta</code> (merged с родительскими meta) — удобно для каскадных флагов (layout.requiresAuth у родителя).","afterEach — единственное место без отмены: аналитика и document.title живут там.","onBeforeRouteLeave с confirm-возвратом — штатный «несохранённые изменения».","params не участвуют в истории браузера при push с name+params; query — участвует (в URL)."],bestPractices:["Правила доступа — <b>декларативно в meta</b>, исполняются единым beforeEach.","Типизируйте meta через <code>declare module 'vue-router' { interface RouteMeta { requiresAuth?: boolean } }</code>.","Query — для состояния, которым можно поделиться ссылкой (фильтры, страница, таб).","Сложные проверки (роли) выносите в отдельные guard-фабрики и композируйте.","Не делайте guards «тяжёлыми»: каждый переход ждёт их завершения."],whenToUse:"<strong>Params</strong> — идентификация ресурса (/users/42, /posts/slug). <strong>Query</strong> — фильтры, пагинация, сортировка, табы — всё, что должно жить в ссылке. <strong>Guards</strong> — auth/role-правила, редиректы, аналитика, защита от ухода с несохранённой формой. <strong>meta</strong> — любые маршруто-специфичные флаги и данные (title, layout, breadcrumbs).",alternative:{title:"Middleware-подобная проверка в layout",text:"Для групп страниц иногда проще проверять в layout-компоненте (например, AdminLayout сам редиректит) — когда правила простые, а guards не хочется плодить.",code:`// AdminLayout.vue
watchEffect(() => {
  if (!store.user?.isAdmin) router.replace({ name: 'not-found' })
})`},advanced:{title:"Типизированный meta и guard-фабрики",text:"RouteMeta-интерфейс делает meta безопасным контрактом; фабрики guards возвращают замыкания с зависимостями (store, permissions) и композируются в цепочку.",code:`declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    roles?: string[]
    title?: string
  }
}

const requireRoles = (roles: string[]) => (to: RouteLocationNormalized) => {
  if (to.meta.roles && !roles.some(r => to.meta.roles!.includes(r))) {
    return { name: 'forbidden' }
  }
}

router.beforeEach(requireRoles(['admin']))`}}},Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),Qv=`<script setup lang="ts">
import { ref, h, defineAsyncComponent, type Component } from 'vue'

// Имитация ленивой страницы: компонент грузится отдельным чанком
function fakePageLoader(name: string, ms: number, fail = false): () => Promise<{ default: Component }> {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) {
          reject(new Error('chunk load failed'))
          return
        }
        resolve({
          default: {
            props: {},
            setup() {
              return () =>
                h('div', { class: 'card' }, [
                  h('div', { class: 'row row--between' }, [
                    h('b', \`📄 \${name}\`),
                    h('span', { class: 'tag ok' }, 'чанк загружен'),
                  ]),
                  h('p', { class: 'muted', style: 'margin:6px 0 0' },
                    \`Компонент был в отдельном чанке и загрузился за \${ms} мс\`),
                ])
            },
          },
        })
      }, ms)
    })
}

const current = ref<Component | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const dataState = ref<'idle' | 'loading' | 'done' | 'error'>('idle')

// Паттерн «загрузка данных на навигации»: данные тянем при переходе,
// показываем прогресс, ошибки обрабатываем отдельно от чанка
async function navigate(page: 'dashboard' | 'reports' | 'broken') {
  current.value = null
  error.value = null
  loading.value = true
  dataState.value = 'loading'

  try {
    // 1) ленивый чанк компонента
    const loader =
      page === 'dashboard' ? fakePageLoader('Dashboard', 400)
      : page === 'reports' ? fakePageLoader('Reports', 700)
      : fakePageLoader('Broken', 300, true)

    const mod = await loader()
    current.value = mod.default

    // 2) данные страницы (в реальном коде — до монтажа, через guards/prefetch)
    await new Promise(r => setTimeout(r, 300))
    dataState.value = 'done'
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'unknown'
    dataState.value = 'error'
  } finally {
    loading.value = false
  }
}
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <button class="btn" @click="navigate('dashboard')">/dashboard (ленивая)</button>
      <button class="btn" @click="navigate('reports')">/reports (медленный чанк)</button>
      <button class="btn danger" @click="navigate('broken')">/broken (сбой сети)</button>
    </div>

    <div class="card">
      <div class="row row--between">
        <b>RouterView (имитация)</b>
        <span v-if="loading" class="tag warn">загрузка чанка…</span>
        <span v-else-if="error" class="tag bad">ошибка: {{ error }}</span>
        <span v-else-if="current" class="tag ok">готово</span>
      </div>
      <div style="margin-top: 10px; min-height: 60px">
        <component v-if="current" :is="current" />
        <p v-else-if="loading" class="muted">⏳ чанк грузится — RouterView пустой или показывает fallback…</p>
        <p v-else class="muted">нажмите кнопку маршрута</p>
      </div>
    </div>

    <div class="row">
      <span class="tag" :class="dataState === 'done' ? 'ok' : dataState === 'error' ? 'bad' : 'info'">
        данные: {{ dataState }}
      </span>
      <span class="muted mono">
        в реальном приложении: component: () => import('./pages/Dashboard.vue')
      </span>
    </div>
  </div>
</template>
`,Xv=`// Ленивые маршруты: каждая страница — отдельный чанк
const routes = [
  { path: '/', component: Home }, // статический — в основном бандле
  { path: '/dashboard', component: () => import('./pages/Dashboard.vue') },
  { path: '/admin', component: () => import('./pages/Admin.vue') },
]

// Группировка чанков (webpack); в Vite — manualChunks или /* @vite-ignore */
{ path: '/admin', component: () => import(/* webpackChunkName: "admin" */ './pages/Admin.vue') }`,Yv=`// Паттерн 1: данные в onMounted/loading-стейт (самый частый)
// Dashboard.vue
const { data, loading, error } = useFetch('/api/stats')

// Паттерн 2: загрузка до входа через guard (данные готовы к монтированию)
router.beforeEach(async (to) => {
  if (to.name === 'user') {
    to.meta.user = await api.getUser(to.params.id) // блокирует переход
  }
})

// Паттерн 3: resolve в async setup + Suspense
<script setup lang="ts">
const { data, pending, error } = await useFetch(\`/api/user/\${props.id}\`) // топ-левел await
<\/script>
<!-- родитель оборачивает RouterView в <Suspense> -->`,Zv={title:"Ленивые маршруты и загрузка данных",summary:"Code splitting по страницам, паттерны data loading: mounted / guards / async setup, состояния загрузки и ошибки чанка.",demo:()=>F(()=>import("./Demo-Drie0SQl.js"),[]),code:`// ============ Demo.vue (интерактив) ============
${Qv}

// ============ ленивые маршруты ============
${Xv}

// ============ паттерны загрузки данных ============
${Yv}`,content:{intro:"Два механизма делают SPA быстрым: <b>ленивые маршруты</b> (код страницы грузится только при первом переходе — <code>component: () =&gt; import(...)</code>) и <b>паттерны загрузки данных</b> (когда и как страница получает свои данные). Демо показывает оба состояния: задержку чанка и его сбой, плюс отдельный трекинг «данных страницы». В продакшен-приложении основной бандл держат тонким: на нём — только каркас и главная.",howItWorks:"Динамический import() на уровне маршрута Vite/webpack выносит в отдельный чанк; роутер резолвит его при совпадении пути (beforeResolve ждёт все ленивые компоненты). Загрузка данных бывает в трёх вариантах: 1) <b>после монтирования</b> — onMounted/сразу в setup: страница появляется мгновенно, данные догружаются с loading-состоянием; 2) <b>до входа</b> — guard или prefetch: переход блокируется, но страница рендерится с готовыми данными; 3) <b>async setup + Suspense</b>: топ-левел await, родитель управляет fallback. Выбор — компромисс между скоростью первого рендера и «прыжками» контента (CLS).",mistakes:[{title:"Ждать данные, не показывая состояние",text:"Пустой экран без спиннера/скелетона выглядит как зависание. У каждого ленивого перехода должно быть видимое промежуточное состояние.",code:`onMounted(async () => {
  data.value = await api.get() // ❌ 2 секунды пустоты
})`,fix:`const { data, loading } = useFetch()
<!-- <Spinner v-if="loading" /> / <Skeleton /> -->
<!-- ✅ пользователь понимает, что происходит -->`},{title:"Не обрабатывать сбой загрузки чанка",text:"Обновление приложения, плохая сеть, удалённый деплой — import() отклоняется. Без обработки пользователь застревает с пустой страницей; лечится errorComponent и retry с перезагрузкой.",code:"{ path: '/p', component: () => import('./P.vue') } // ❌ упал чанк → белая страница",fix:`{ path: '/p', component: () => import('./P.vue'),
  // + глобально:
  router.onError((error, to) => {
    if (error.message.includes('Failed to fetch dynamically imported module')) {
      window.location = to.fullPath // полная перезагрузка — новый деплой
    }
  }) }`},{title:"Блокировать навигацию тяжёлыми guards",text:"Данные «до входа» удваивают ожидание (guard + рендер). Для большинства страниц loading-стейт после монтирования быстрее по воспринимаемой производительности.",code:`router.beforeEach(async (to) => {
  to.meta.data = await heavyFetch() // ❌ каждая навигация ждёт
})`,fix:`// ✅ блокирующая загрузка — только для критичных данных (auth, разрешения)
// остальное — параллельно с рендером через loading-стейт`}],nuances:["Ленивость маршрутов — главный источник code splitting: main-чанк держит только layout и критичный код.","beforeResolve срабатывает после резолва <b>всех</b> ленивых компонентов — там можно ждать данных, зная что код уже есть.","<code>router.onError</code> — глобальная точка обработки сбоев чанков; перезагрузка — штатное решение после нового деплоя.","Suspense даёт один fallback на всё дерево async-setup-компонентов; вложенные Suspense — отдельные fallback-зоны.","Prefetch по hover: <code>&lt;RouterLink :to&gt;</code> + слушатель mouseenter → preload чанка — ускоряет частые переходы.","В Nuxt большая часть этого встроена: страницы ленивы по умолчанию, useFetch/useAsyncData решают data loading с дедупликацией."],bestPractices:["Все маршруты, кроме главной — ленивые; критический путь минимален.","Единый компонент загрузки (спиннер/скелетон) на уровне RouterView-обёртки — единообразие UX.","Критичные данные (auth, разрешения) — до входа; контентные — после монтирования с loading.","Настройте retry/перезагрузку при сбое чанка — обязательно для долго живущих SPA.","Группируйте чанки по фичам, а не по страницам, если страницы делят тяжёлые зависимости."],whenToUse:"<strong>Ленивые маршруты</strong> — всегда, кроме главной страницы. <strong>Загрузка после монтирования</strong> — для контентных страниц (списки, дашборды). <strong>Загрузка до входа</strong> — когда без данных рендер бессмысленен или нужны гарантии (роль, существование ресурса). <strong>Suspense</strong> — когда хочется декларативности и единого fallback.",alternative:{title:"Prefetch по hover вместо полной ленивости",text:"Компромисс: чанки остаются ленивыми, но предзагружаются при наведении на ссылку — переход почти мгновенный, основной бандл не растёт.",code:`function prefetch(to: string) {
  // из таблицы маршрутов берём loader и вызываем заранее
  router.resolve(to).matched.forEach(m => m.components?.default?.())
}

<RouterLink :to="url" @mouseenter="prefetch(url)">`},advanced:{title:"Прогрессивная загрузка: preload при idle",text:"requestIdleCallback предзагружает вероятные следующие страницы в свободное время браузера: ленивость сохраняется, но переходы становятся мгновенными.",code:`const preloadRoutes = ['/dashboard', '/settings']

requestIdleCallback(() => {
  preloadRoutes.forEach(p => router.resolve(p).matched.forEach(m => {
    Object.values(m.components ?? {}).forEach(c => 'load' in c && c.load?.())
  }))
})`}}},eb=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),tb=`<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  name: string
  role: 'admin' | 'member'
}

const users = ref<User[]>([
  { id: 1, name: 'Ада', role: 'admin' },
  { id: 2, name: 'Грейс', role: 'member' },
  { id: 3, name: 'Линус', role: 'member' },
])

const selected = ref<User | null>(null)
const query = ref('')
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <input v-model="query" class="input" style="max-width: 220px" placeholder="фильтр имени…" />
      <span class="muted mono">selected: {{ selected?.name ?? 'null' }} (тип User | null)</span>
    </div>

    <!-- Generic-компонент: T выводится из пропса users -->
    <TypeList
      :items="users"
      :filter="(u: User) => u.name.toLowerCase().includes(query.toLowerCase())"
      @select="selected = $event"
    >
      <!-- слот типизирован: item: User, index: number -->
      <template #item="{ item, index }">
        <span class="row row--between" style="width: 100%">
          <span><b>{{ item.name }}</b> · {{ index }}</span>
          <span class="tag" :class="item.role === 'admin' ? 'ok' : 'info'">{{ item.role }}</span>
        </span>
      </template>
    </TypeList>

    <p class="muted">
      Попробуйте обратиться к несуществующему полю в слоте — TypeScript подсветит ошибку прямо в
      шаблоне: <code>item.unknownField</code> не скомпилируется. Generic T выводится из массива.
    </p>
  </div>
</template>
`,nb=`<script setup lang="ts" generic="T extends { id: number }">
import { computed } from 'vue'

// generic="T" — типовой параметр компонента (Vue 3.3+)
const props = defineProps<{
  items: T[]
  filter?: (item: T) => boolean
}>()

const emit = defineEmits<{
  select: [item: T]
}>()

const filteredItems = computed(() =>
  props.filter ? props.items.filter(props.filter) : props.items,
)
<\/script>

<template>
  <div class="stack" style="gap: 4px">
    <button
      v-for="(item, index) in filteredItems"
      :key="item.id"
      class="card"
      style="margin: 0; text-align: left; cursor: pointer; padding: 8px 12px"
      @click="emit('select', item)"
    >
      <slot name="item" :item="item" :index="index">
        {{ String(item) }}
      </slot>
    </button>
    <p v-if="!filteredItems.length" class="muted">ничего не найдено</p>
  </div>
</template>
`,ob=`// ===== Типизированные props (type-only объявление) =====
const props = defineProps<{
  user: User
  size?: 'sm' | 'md' | 'lg'
  items: Product[]
  onUpdate?: (v: string) => void
}>()
// + withDefaults (или дефолты через реактивный объект в 3.5+):
const props = withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })

// ===== Типизированные emits (кортежи аргументов) =====
const emit = defineEmits<{
  save: [value: string, meta: SaveMeta]
  cancel: []
}>()
emit('save', 'x', { at: Date.now() }) // ✅ проверено
emit('save', 42)                       // ❌ TS error

// ===== Типизированный template ref =====
const input = useTemplateRef<HTMLInputElement>('search')
input.value?.focus() // ✅ known type

// ===== Component ref: тип экземпляра =====
const form = useTemplateRef<InstanceType<typeof MyForm>>('form')
form.value?.validate()`,sb={title:"Типизированные props, emits, slots и generics",summary:"Type-only объявление пропсов и событий, типизированные слоты, generic-компоненты, InstanceType для ref-ов.",demo:()=>F(()=>import("./Demo-CsxID4xl.js"),[]),code:`// ============ Demo.vue (потребитель) ============
${tb}

// ============ TypeList.vue (generic-компонент) ============
${nb}

// ============ шпаргалка типизации ============
${ob}`,content:{intro:'TypeScript в Vue работает на всех уровнях: <b>props</b> (type-only объявление <code>defineProps&lt;{...}&gt;()</code>), <b>emits</b> (кортежи аргументов), <b>slots</b> (типы слот-параметров выводятся из пропсов), <b>template refs</b> (<code>useTemplateRef&lt;HTMLInputElement&gt;</code>). Вершина — <b>generic-компоненты</b>: <code>&lt;script setup generic="T"&gt;</code> делает компонент типо-параметричным, как функцию. В демо TypeList&lt;T&gt; выводит T из массива users, и слот знает о поле item.name — опечатка подсветится в шаблоне.',howItWorks:'Компилятор SFC разбирает type-only defineProps в рантайм-пропсы (имена + required + дефолты через withDefaults), сохраняя точные TS-типы. defineEmits&lt;{ event: [args] }&gt; возвращает типизированный emit: вызов с неверными аргументами — ошибка компиляции. Типы слотов выводятся из <code>&lt;template #item="{ item }"&gt;</code>: item получает тип T элемента списка. generic="T extends {id: number}" объявляет параметр, доступный во всех макросах и вычислениях; на теге компонента T выводится из переданного массива (inference работает в оба конца).',mistakes:[{title:"Runtime-объявление вместо type-only",text:"Object-синтаксис ({ type: String, required: true }) слабее: any-совместимый, без union-типов и generics. Type-only строго и кратко.",code:"defineProps({ user: { type: Object as PropType<User>, required: true } }) // старый стиль",fix:"defineProps<{ user: User }>() // ✅ короче и строже"},{title:"Слабые типы emits",text:"defineEmits(['change']) или { change: (v: any) => true } теряют проверку payload. Всегда кортежи.",code:`const emit = defineEmits(['change'])
emit('change', 1, 2, 3) // ❌ всё разрешено`,fix:`const emit = defineEmits<{ change: [value: number] }>()
emit('change', 1, 2) // ❌ ошибка — только 1 аргумент`},{title:"as any в шаблоне вместо исправления типов",text:"Каждый «any ради скорости» отключает проверку целого поддерева. Правильные типы в API-слое и props-контрактах убирают желание кастовать.",code:"{{ (item as any).weirdField }} <!-- ❌ отключает проверки -->",fix:"// ✅ опишите item правильно: type Item = { weirdField?: string }"}],nuances:["Типы props в шаблоне и родителе проверяются <b>на обеих сторонах</b>: потребитель увидит ошибку передачи.","withDefaults или деструктуризация с дефолтами (3.5+) — два способа значений по умолчанию.",'generic-компоненты поддерживают ограничения (<code>generic="T extends Identifiable"</code>) и несколько параметров.',"<code>InstanceType&lt;typeof Comp&gt;</code> даёт тип экземпляра — доступен только то, что expose-нуто через defineExpose.","Slot-типы выводятся автоматически; для библиотек — Slot тип из vue (VNode[]-фабрики).","vue-tsc обязателен: обычный tsc не понимает .vue файлы и пропустит ошибки шаблонов."],bestPractices:["Type-only defineProps/defineEmits — по умолчанию; PropType-касты только для сложных runtime-валидаций.","Типы API-ответов — единый источник (api/types.ts), переиспользуемые в props/store/slots.","Никаких any в контрактах компонентов: unknown + narrowing, если форма данных неясна.","Generic-компоненты для списков/таблиц/select-ов — типизация «едет» от данных к слотам.","CI с vue-tsc --noEmit — единственный способ поймать ошибки шаблонов."],whenToUse:"<strong>Полная типизация</strong> — любой новый код: стоимость контракта минимальна, а выигрыш в рефакторинге огромен. <strong>Generic-компоненты</strong> — переиспользуемые списки, таблицы, формы, select-ы. Ослабление типов — только на границах с第三方 (unknown + валидация).",alternative:{title:"JSDoc-типы для JS-проектов",text:"Без миграции на TS часть безопасности даёт JSDoc: @props-аннотации и checkJs — компромисс для легаси.",code:`// @ts-check
/**
 * @props {{ user: { id: number, name: string } }}
 */`},advanced:{title:"Типизация defineModel и storeToRefs",text:"defineModel выводит тип из generic; storeToRefs сохраняет точные Ref-типы state/getters — вместе они дают end-to-end типобезопасность от стора до слота.",code:`// model типизирован автоматически
const price = defineModel<number>('price', { default: 0 })

// Pinia: state → Ref<T>, getters → ComputedRef<T> без аннотаций
const cart = useCartStore()
const { items, totalPrice } = storeToRefs(cart)
// items: Ref<CartItem[]>, totalPrice: ComputedRef<number>

// тип события компонента выводится в родителе:
// <MyInput @update:model-value="(v: string) => ..."> ✅`}}},rb=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),ib=`<script setup lang="ts">import { ref, computed, watch, reactive, toRaw, isReactive } from 'vue'
// ================= living visualization of dependency tracking =================
interface DepEvent {
  time: string
  type: 'track' | 'trigger' | 'run'
  source: string
  detail: string
}

const a = ref(1)
const b = ref(2)
const sum = computed(() => a.value + b.value)
const product = computed(() => sum.value * 10)

const events = ref<DepEvent[]>([])
const flushes = ref(0)

function addEvent(type: DepEvent['type'], source: string, detail: string) {
  events.value.unshift({ time: new Date().toLocaleTimeString(), type, source, detail })
  if (events.value.length > 12) events.value.pop()
}

// watch = «эффект»: его запуск — сигнал, что граф дёрнулся
watch(product, (val, old) => {
  flushes.value++
  addEvent('run', 'watch(product)', \`пересчёт \${old} → \${val} (батчинг: один прогон)\`)
})

function bump(ref: 'a' | 'b') {
  if (ref === 'a') {
    a.value++
    addEvent('trigger', 'a.value', 'set → подписчики a помечены: sum')
  } else {
    b.value++
    addEvent('trigger', 'b.value', 'set → подписчики b помечены: sum')
  }
  // sum и product — computed: они «dirty», но пересчитаются лениво при чтении
  addEvent('track', 'sum (computed)', 'инвалидация: dirty=true (пересчёт отложен)')
}

// ================= Proxy: что видит система =================
const rawObj = reactive({ x: 1, nested: { y: 2 } })
const proxyInfo = ref<string[]>([])

function inspectProxy() {
  proxyInfo.value = [
    \`rawObj === toRaw(rawObj) → \${rawObj === toRaw(rawObj)} (rawObj сам является прокси)\`,
    \`isReactive(rawObj) → \${isReactive(rawObj)}\`,
    \`nested тоже прокси: isReactive(rawObj.nested) → \${isReactive(rawObj.nested)} (ленивая вложенность)\`,
  ]
}

// ================= Scheduler: батчинг =================
const batchedCount = ref(0)
const flushLog = ref<string[]>([])

watch(batchedCount, (v) => {
  flushLog.value.unshift(\`flush #\${v}: оба изменения пришли в ОДНОМ прогоне эффекта\`)
})

function doubleBump() {
  // два изменения синхронно — эффект (рендер) запустится ОДИН раз
  batchedCount.value += 2
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <b>Граф зависимостей: a, b → sum → product → watch</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn" @click="bump('a')">a++ ({{ a }})</button>
        <button class="btn" @click="bump('b')">b++ ({{ b }})</button>
        <span class="stat">sum = {{ sum }} · product = {{ product }}</span>
        <span class="tag bad">запусков watch: {{ flushes }}</span>
      </div>
      <div class="log" style="margin-top: 8px">
        <div v-for="(e, i) in events" :key="i" class="mono">
          [{{ e.time }}] {{ e.type === 'trigger' ? '⚡' : e.type === 'track' ? '🔗' : '▶' }} {{ e.source }}: {{ e.detail }}
        </div>
        <div v-if="!events.length" class="muted">нажмите a++ или b++ — смотрите цепочку событий</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>Proxy-инспекция</b>
        <button class="btn small" style="margin-top: 8px" @click="inspectProxy">проверить</button>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li v-for="(line, i) in proxyInfo" :key="i">{{ line }}</li>
          <li v-if="!proxyInfo.length">—</li>
        </ul>
      </div>

      <div class="card">
        <b>Scheduler: батчинг изменений</b>
        <button class="btn small primary" style="margin-top: 8px" @click="doubleBump">
          batchedCount += 2 (два изменения разом)
        </button>
        <div class="log" style="margin-top: 8px">
          <div v-for="(line, i) in flushLog" :key="i" class="mono">{{ line }}</div>
          <div v-if="!flushLog.length" class="muted">—</div>
        </div>
      </div>
    </div>

    <p class="muted">
      Чтение ref-а внутри эффекта <b>регистрирует</b> зависимость (track); запись <b>уведомляет</b>
      подписчиков (trigger). Computed — узел-посредник: лениво пересчитывается только при чтении.
      Scheduler группирует несколько изменений в один прогон эффекта.
    </p>
  </div>
</template>
`,ab=`// Упрощённая модель реактивного движка Vue 3 (без деталей)
let activeEffect: Effect | null = null
const targetMap = new WeakMap<object, Map<string, Set<Effect>>>()

function track(target: object, key: string) {
  if (!activeEffect) return
  let deps = targetMap.get(target)
  if (!deps) targetMap.set(target, (deps = new Map()))
  let dep = deps.get(key)
  if (!dep) deps.set(key, (dep = new Set()))
  dep.add(activeEffect) // активный эффект подписался на это свойство
}

function trigger(target: object, key: string) {
  const dep = targetMap.get(target)?.get(key)
  if (!dep) return
  // Scheduler: не запускаем синхронно — ставим в очередь микрозадач
  dep.forEach(effect => queueJob(effect))
}

function ref(value) {
  return {
    get value() { track(this, 'value'); return value },
    set value(v) { value = v; trigger(this, 'value') },
  }
}

// Рендер компонента — тоже эффект:
// MountComponent → effect(() => { vnode = render() }, { scheduler: queueJob })`,cb={title:"Реактивность внутри: track, trigger, Proxy",summary:"Как ref/computed работают физически: targetMap подписок, ленивые computed, очередь эффектов и батчинг.",demo:()=>F(()=>import("./Demo-BKOxbAOg.js"),[]),code:`// ============ Demo.vue (живая визуализация) ============
${ib}

// ============ упрощённая модель движка ============
${ab}`,content:{intro:"Реактивность Vue 3 строится на трёх механизмах: <b>track</b> (чтение реактивного значения регистрирует активный эффект как подписчика), <b>trigger</b> (запись уведомляет подписчиков через очередь) и <b>Proxy</b> (перехват get/set/удалений). <b>Рендер компонента — такой же эффект</b>, как watch: он читает значения (подписываясь на них) и перезапускается при их изменении. В демо — живой лог этих событий: нажмите a++ и смотрите цепочку trigger → инвалидация computed → прогон эффекта.",howItWorks:"Глобальная переменная <code>activeEffect</code> указывает на исполняемый сейчас эффект (рендер, watch-колбэк, вычисление computed). Proxy-ловушка get вызывает track: «текущий эффект зависит от этого свойства» — связь сохраняется в WeakMap target → key → Set(эффектов). Ловушка set вызывает trigger: эффекты свойства ставятся в <b>очередь job-ов</b> (не запускаются мгновенно!) — очередь разгребается в микрозадачах, отсюда батчинг: 10 мутаций = 1 прогон. computed — эффект с флагом dirty: триггер лишь помечает его, пересчёт — при следующем чтении (ленивость).",mistakes:[{title:"Думать, что мутация синхронно обновляет DOM",text:"Между count.value++ и изменением DOM стоит очередь микрозадач. Синхронное чтение DOM сразу после мутации даст старое значение — нужен nextTick.",code:`count.value = 5
console.log(el.textContent) // ❌ ещё старое значение`,fix:`count.value = 5
await nextTick()
console.log(el.textContent) // ✅ после флаша очереди`},{title:"Ждать триггера от не-реактивного источника",text:"Только операции, прошедшие через Proxy (reactive) или set value (ref), вызывают trigger. Мутация сырого объекта, вытащенного через toRaw(), — невидима.",code:`const raw = toRaw(state)
raw.count = 5 // ❌ trigger не вызван: UI не обновится`,fix:"state.count = 5 // ✅ через прокси"},{title:"Полагаться на порядок триггеров",text:"Порядок выполнения эффектов в очереди определяется Vue (родитель→потомок, pre/post), а не порядком мутаций. Логика, зависящая от «какой watch сработал первым», — хрупка.",code:"// ❌ «этот watch сработает раньше того»",fix:`// ✅ явная координация: computed-цепочки,
// flush: 'post' / nextTick / явные функции`}],nuances:["WeakMap в targetMap — ключи собираются GC-ом вместе с объектами: утечек подписок на удалённые объекты нет.","Одно свойство — <b>множество</b> эффектов; один эффект — подписки на множество свойств (граф, а не список).","Дубликаты в Set не дают двойных прогонов: одно свойство, прочитанное дважды, подпишет эффект один раз.","Новые свойства и индексы работают, потому что Proxy перехватывает ownKeys и set на любом ключе.","В ветке v-if читаются только её значения: зависимости рендера пересобираются каждый прогон.","effectScope группирует эффекты компонента — unmount останавливает все разом."],bestPractices:["Думайте «кто что читает» — граф зависимостей строится из чтений, а не из ваших намерений.","Не мутации важны, а чтения: если эффект ничего не прочитал, он никогда не сработает.","nextTick — мост между «изменил состояние» и «DOM готов».","Не выдёргивайте toRaw для мутаций «в обход» — это путь к рассинхрону.","Изучите движок один раз — он объясняет 90% странного поведения реактивности."],whenToUse:"Это <strong>фундаментальная тема</strong>: возвращайтесь при отладке «почему не обновилось», при проектировании composables (вам нужен контроль подписок), при оптимизациях (понимание очереди объясняет батчинг и nextTick). Практика: лог событий в демо — точная модель того, что происходит в любом Vue-приложении.",alternative:{title:"Событийная модель (manual subscriptions)",text:"Без реактивности разработчик сам вызывает store.subscribe(...) и обновляет UI. Реактивность автоматизирует именно это: подписки строятся из чтений автоматически.",code:`// вручную: явные подписки
store.on('change:count', v => el.textContent = String(v))
// с Vue: подписка возникает из чтения в шаблоне
<p>{{ count }}</p>`},advanced:{title:"Dirty-флаги и ветвление зависимостей",text:"computed не пересчитывается «волнами» — каждый узел решает сам: dirty-флаг сбрасывается при чтении. Условные ветки в эффектах дают <b>динамические</b> зависимости: что не прочитано в этом прогоне — отвалилось.",code:`const showA = ref(true)
const a = ref(1)
const b = ref(2)

watchEffect(() => {
  // showA=true: подписка на a
  showA.value ? console.log(a.value) : console.log(b.value)
})

showA.value = false
// след. прогон: подписка на b, подписка на a СБРОШЕНА
// a.value++ больше не запускает эффект`}}},lb=Object.freeze(Object.defineProperty({__proto__:null,default:cb},Symbol.toStringTag,{value:"Module"})),db=`<script setup lang="ts">
import { ref, nextTick } from 'vue'

// ================= VDOM diff: keyed reconciliation =================
interface Node {
  id: number
  label: string
  color: string
}

let nextId = 1
const palette = ['#42b883', '#64b5f6', '#ffb74d', '#e57373', '#ba68c8']

const nodes = ref<Node[]>([])
const patchLog = ref<string[]>([])

function log(msg: string) {
  patchLog.value.unshift(msg)
  if (patchLog.value.length > 8) patchLog.value.pop()
}

function addNode() {
  const node: Node = {
    id: nextId++,
    label: \`node-\${nextId - 1}\`,
    color: palette[nextId % palette.length],
  }
  nodes.value.push(node)
  log(\`Mount: создан узел #\${node.id} (новый vnode → новый DOM)\`)
}

function shuffleNodes() {
  nodes.value = [...nodes.value].sort(() => Math.random() - 0.5)
  log('Patch (keyed): порядок vnode изменился → DOM-узлы ПЕРЕСТАВИЛИСЬ (move), не пересоздались')
}

function changeFirst() {
  if (nodes.value[0]) {
    nodes.value[0] = { ...nodes.value[0], label: nodes.value[0].label + '*' }
    log(\`Patch (props): у первого узла сменился label → обновился ТОЛЬКО текст\`)
  }
}

function removeFirst() {
  if (nodes.value[0]) {
    const id = nodes.value[0].id
    nodes.value = nodes.value.slice(1)
    log(\`Unmount: узел #\${id} удалён из vnode-дерева → DOM-узел снят\`)
  }
}

function resetAll() {
  nodes.value = []
  patchLog.value = []
  nextId = 1
}

// ================= nextTick: очередь и флаш =================
const counter = ref(0)
const domValue = ref('(прочитайте после nextTick)')
const el = ref<HTMLElement | null>(null)

async function showTiming() {
  counter.value++
  // синхронное чтение — DOM ещё старый (эффект в очереди)
  const before = el.value?.textContent
  await nextTick()
  const after = el.value?.textContent
  domValue.value = \`синхронно: «\${before}» → после nextTick: «\${after}»\`
}
<\/script>

<template>
  <div class="stack">
    <div class="card">
      <b>VDOM: vnode-дерево и reconciliation</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn" @click="addNode">+ mount</button>
        <button class="btn" @click="shuffleNodes">🔀 переставить (keyed move)</button>
        <button class="btn" @click="changeFirst">поменять props первого</button>
        <button class="btn danger" @click="removeFirst">− unmount первого</button>
        <button class="btn small" @click="resetAll">сброс</button>
      </div>

      <div class="row" style="gap: 8px; margin-top: 12px; flex-wrap: wrap">
        <span
          v-for="n in nodes"
          :key="n.id"
          class="tag"
          style="padding: 6px 12px; border-radius: 6px; color: #0b0e14"
          :style="{ background: n.color }"
        >
          #{{ n.id }} {{ n.label }}
        </span>
        <span v-if="!nodes.length" class="muted">дерево пусто — добавьте узлы</span>
      </div>

      <div class="log" style="margin-top: 8px">
        <div v-for="(line, i) in patchLog" :key="i" class="mono">{{ line }}</div>
      </div>
    </div>

    <div class="card">
      <b>Scheduler и nextTick</b>
      <div class="row" style="margin-top: 8px">
        <button class="btn primary" @click="showTiming">counter++ и прочитать DOM</button>
        <span class="mono muted">{{ domValue }}</span>
      </div>
      <p class="mono muted" style="margin: 8px 0 0">
        counter = {{ counter }} · DOM-текст: <span ref="el">{{ counter }}</span>
      </p>
      <p class="muted" style="margin: 8px 0 0">
        Изменение ref-а ставит рендер-эффект в очередь микрозадач; nextTick возвращает promise,
        резолвящийся после флаша очереди. Это и есть «когда DOM обновился».
      </p>
    </div>
  </div>
</template>
`,ub=`// Упрощённая модель patch-алгоритма
function patch(oldVnode, newVnode, container) {
  if (oldVnode.type !== newVnode.type) {
    // разные типы → заменить узел целиком
    unmount(oldVnode); mount(newVnode, container)
    return
  }
  if (oldVnode.key !== newVnode.key) {
    // разные ключи → это «другой» узел, даже если тег тот же
    unmount(oldVnode); mount(newVnode, container)
    return
  }
  // тот же узел: сравнить props
  patchProps(oldVnode.props, newVnode.props)
  // сравнить детей: keyed matching
  patchChildren(oldVnode.children, newVnode.children)
}

// Ключи позволяют ПЕРЕСТАВЛЯТЬ, а не пересоздавать:
// [a, b, c] → [c, a, b]: Vue находит совпадения по ключу,
// делает DOM moveChild-ы, пропсы не трогает`,pb=`// Очередь job-ов: батчинг и приоритеты
const queue = new Set<Job>()
let isFlushing = false

function queueJob(job: Job) {
  queue.add(job) // Set — дедупликация: одно изменение = один job
  if (!isFlushing) {
    isFlushing = true
    Promise.resolve().then(flushJobs) // микрозадача!
  }
}

function flushJobs() {
  // сортировка: родитель раньше потомка, pre-watcher до рендера
  queue.sort((a, b) => a.id - b.id)
  for (const job of queue) job()
  queue.clear()
  isFlushing = false
}

// nextTick = «после текущего flushJobs»
export function nextTick(): Promise<void> {
  return isFlushing ? currentFlushPromise : Promise.resolve()
}

// Поэтому: count++ ×3 синхронно = ОДИН рендер
// И поэтому: DOM читайте после await nextTick()`,fb={title:"VDOM diffing и scheduler: nextTick",summary:"Как Vue сравнивает vnode-деревья (keyed reconciliation), очередь job-ов, батчинг мутаций и nextTick.",demo:()=>F(()=>import("./Demo-DiWhO4nb.js"),[]),code:`// ============ Demo.vue (живая визуализация) ============
${db}

// ============ модель patch-алгоритма ============
${ub}

// ============ модель scheduler ============
${pb}`,content:{intro:"Рендер Vue — двухфазный: сначала компоненты создают <b>vnode-деревья</b> (JS-описания DOM), затем <b>patch</b> сравнивает новое дерево со старым и вносит минимальные DOM-изменения. Ключи (<code>key</code>) — язык сопоставления: узлы с совпадающим ключом <b>переставляются</b>, а не пересоздаются. <b>Scheduler</b> — очередь job-ов между этими фазами: мутации ставят эффекты в Set, который флашится в микрозадаче — отсюда батчинг и <code>nextTick</code>. В демо — живой лог mount/move/props/unmount и измерение тайминга nextTick.",howItWorks:"patch(oldVnode, newVnode): разный type/key → unmount+mount (полная замена); совпали → сравнение props (обновились только изменённые) и рекурсия в детей. Дети сравниваются алгоритмом с <b>keyed matching</b>: Vue ищет совпадения по ключам с двух концов и в середине, минимизируя перемещения. Scheduler: очередь — Set (авто-дедупликация), флаш через <code>Promise.resolve().then()</code> (микрозадача), с сортировкой по id (родители раньше потомков, pre-watcher-ы до рендера, post — после). nextTick резолвится после флаша — мост «состояние изменено» → «DOM готов».",mistakes:[{title:"Читать DOM сразу после мутации состояния",text:"Рендер ещё в очереди: прочтёте старое значение. Лечится nextTick — но сначала спросите себя, зачем вы читаете DOM из Vue: чаще это симптом.",code:`count.value++
measureElement() // ❌ старые размеры`,fix:`count.value++
await nextTick()
measureElement() // ✅`},{title:"nextTick как «костыль синхронизации»",text:"Если логика требует nextTick, чтобы «дождаться» другой логики — это признак запутанного потока данных. Реактивные цепочки (computed/watch) синхронизируются сами.",code:`save()
await nextTick()
reload() // ❌ синхронизация через тайминги рендера`,fix:`// ✅ цепочка на уровне данных:
await save()
await reload() // не зависит от рендера`},{title:"Ключи-индексы при перестановках",text:"С индексами diff считает «узел 0 всё ещё узел 0» — пропсы не меняются там, где должны. Пересоздание узлов и потеря состояния (фокус, введённый текст).",code:`[a, b, c] → [c, a, b]:
key=0,1,2: Vue думает «поменялись данные у тех же узлов» ❌`,fix:"key=a.id,b.id,c.id: Vue видит перестановку → move-операции ✅"}],nuances:["patch сравнивает <b>type + key</b>: одинаковый тег с разными ключами — разные узлы (часто используют для «сброса» компонента).","Дедупликация в Set: три мутации одного ref-а в одном тике = один прогон рендера.","Порядок флаша: pre-watcher-ы → рендеры (родитель → потомок) → post-watcher-ы. Поэтому watch по умолчанию видит обновлённый DOM.","<code>flush: 'sync'</code> у watch — обход очереди: срабатывает немедленно (редко нужно).","Статичные vnode-ы хостируются (hoisting) при компиляции: повторный рендер переиспользует их без пересоздания.","Компилятор ставит patchFlags на динамические места — узлы со статичными props-ами диффятся дешевле."],bestPractices:["Доверяйте scheduler: не «дёргайте» DOM вручную синхронно после мутаций.","nextTick — для DOM-измерений/интеграций, не для бизнес-логики.","Стабильные ключи — обязательны для анимаций и сохранения состояния списков.","Пишите шаблоны, дружелюбные к компилятору: статичные атрибуты без привязок — они хостятся и диффятся бесплатно.","Изучите таблицу приоритетов flush — это снимает 90% вопросов «почему watch сработал до/после рендера»."],whenToUse:"Понимание <strong>VDOM/scheduler</strong> нужно при: отладке таймингов (nextTick vs computed), оптимизации больших деревьев (hoisting, patchFlags), работе с анимациями (измерения после флаша). Это карта внутренностей Vue — редкий код трогает её напрямую, но каждый рендер проходит через неё.",alternative:{title:"Fine-grained реактивность без VDOM (Solid-стиль)",text:"Альтернативные фреймворки (Solid, Vue Vapor) связывают реактивность с DOM-узлами напрямую, минуя diff: обновление точечное без vnode-сравнения. Vue движется туда режимом Vapor.",code:`// Solid: сигналы обновляют конкретные узлы
const [count, setCount] = createSignal(0)
<p>{count()}</p> // узел подписан напрямую — diff не нужен

// Vue Vapor (экспериментально): шаблон без VDOM
// ref-ы связываются с узлами при компиляции`},advanced:{title:"Compiler-informed Virtual DOM",text:"Vue 3 уникален: компилятор знает шаблон заранее и ставит patchFlags (CLASS, PROPS, TEXT) и hoists статические узлы. Дифф смотрит только на отмеченные места — это гибрид VDOM и fine-grained.",code:`// Компилятор генерирует:
const _hoisted_1 = createStaticVNode("...статичный блок...") // hoisted

createVNode("div", { class: unref(cls) }, [
  createTextVNode(toDisplayString(msg), 1 /* TEXT */) // флаг: менять только текст
])

// Дифф не ходит по детям: флаг говорит «только текст изменился»
// На статичных сайтах разница — до 50% меньше работы на рендер`}}},mb=Object.freeze(Object.defineProperty({__proto__:null,default:fb},Symbol.toStringTag,{value:"Module"})),vb=`<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener, useElementSize, useIntersectionObserver, useClipboard } from '@vueuse/core'

// 1) useEventListener: авто-отписка при unmount
const lastKey = ref('—')
useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  lastKey.value = e.key
})

// 2) useElementSize: реактивные размеры контейнера
const box = ref<HTMLElement | null>(null)
const { width, height } = useElementSize(box)

// 3) useIntersectionObserver: появился ли блок в вьюпорте
const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const { stop } = useIntersectionObserver(target, ([entry]) => {
  isVisible.value = !!entry?.isIntersecting
})

// 4) useClipboard: копирование с индикатором
const { copied, copy } = useClipboard()
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <span class="stat">последняя клавиша: <b>{{ lastKey }}</b> (нажмите любую)</span>
    </div>

    <div
      ref="box"
      class="card"
      style="resize: horizontal; overflow: auto; min-width: 200px; max-width: 100%"
    >
      <b>Потяните за угол этого блока (resize)</b>
      <p class="mono muted" style="margin: 6px 0 0">
        useElementSize: width={{ Math.round(width) }} · height={{ Math.round(height) }}
      </p>
    </div>

    <div ref="target" class="card">
      <div class="row row--between">
        <b>useIntersectionObserver</b>
        <span class="tag" :class="isVisible ? 'ok' : 'info'">{{ isVisible ? 'виден' : 'не в вьюпорте' }}</span>
      </div>
      <p class="muted" style="margin: 6px 0 0">Прокрутите так, чтобы блок ушёл из экрана — тег изменится.</p>
    </div>

    <div class="row">
      <button class="btn primary" @click="copy('VueUse useClipboard — работает!')">
        скопировать текст
      </button>
      <span class="tag" :class="copied ? 'ok' : 'info'">{{ copied ? 'скопировано ✓' : 'в буфере ничего' }}</span>
    </div>

    <p class="muted">
      Ни одной ручной подписки и ни одного cleanup: useEventListener/useElementSize сами
      регистрируются и отписываются. Это главный выигрыш VueUse.
    </p>
  </div>
</template>
`,bb={title:"DOM и события: useEventListener, useElementSize, useIntersectionObserver",summary:"Авто-cleanup подписки, реактивные размеры элемента, видимость в вьюпорте, буфер обмена.",demo:()=>F(()=>import("./Demo-CJ4jIUVb.js"),__vite__mapDeps([11,12])),code:vb,content:{intro:"Самая частая рутина — подписки на DOM и события — в VueUse решается композаблами со <b>встроенным cleanup</b>: <code>useEventListener</code> (события window/element), <code>useElementSize</code> (реактивные размеры через ResizeObserver), <code>useIntersectionObserver</code> (видимость в вьюпорте), <code>useClipboard</code> (буфер обмена с индикатором copied). В демо все четыре живут одновременно, и ни одна подписка не требует ручной отписки.",howItWorks:"Все композаблы построены на одной схеме: подписка в <code>onMounted</code>/<code>watchEffect</code>, отписка через <code>onScopeDispose</code>/<code>tryOnUnmounted</code>. Параметры принимаются как <code>MaybeRefOrGetter</code>: можно передать статическое имя события или реактивный ref-элемент — композабл переподписывается сам при смене. useElementSize держит ResizeObserver на элементе и обновляет ref-ы width/height; useIntersectionObserver — IntersectionObserver с опциями threshold/rootMargin.",mistakes:[{title:"Дублировать вручную то, что уже есть в VueUse",text:"Самописный useEventListener с ошибкой в отписке, забытый ResizeObserver disconnect — типичные утечки. Готовый композабл отлажен на тысячах проектов.",code:`onMounted(() => window.addEventListener('resize', onResize))
// ❌ забыли onUnmounted — утечка`,fix:`import { useEventListener } from '@vueuse/core'
useEventListener(window, 'resize', onResize) // ✅`},{title:"Забыть, что ref-элемент должен быть привязан в шаблоне",text:'useElementSize(null) молча вернёт нули, если забыть ref="box" в шаблоне. Всегда проверяйте связку ref ↔ композабл.',code:`const { width } = useElementSize(box)
<!-- в шаблоне забыли: <div ref="box"> -->`,fix:'<div ref="box">…</div> <!-- ✅ композабл подхватит элемент -->'},{title:"stop() для «постоянных» наблюдателей вызывают зря",text:"Композаблы останавливаются сами при unmount. Ручной stop нужен только для управления жизненным циклом: «слушать, пока открыта панель».",code:`const { stop } = useIntersectionObserver(...)
onUnmounted(stop) // ❌ избыточно: само остановится`,fix:`// ✅ stop для КАЧЕСТВЕННОГО управления:
// панель закрыта → stop(), открыта → resume()`}],nuances:["Первый аргумент useEventListener — <b>цель</b>: window, элемент (ref), или массив целей.","useElementSize даёт и <code>stop()</code>; наблюдатель включается только когда элемент смонтирован.","useClipboard на не-HTTPS не работает (Clipboard API) — есть fallback <code>legacy: true</code> через document.execCommand.","useIntersectionObserver возвращает массив entries — берите [entry] и проверяйте isIntersecting.","Все композаблы SSR-безопасны: на сервере подписки не создаются, ref-ы получают дефолты.","Опции (threshold, immediate, deep) — вторым аргументом; почти у всех есть immediate/once-поведение."],bestPractices:["По умолчанию берите VueUse для стандартных DOM-задач; самописный композабл — только если готовый не подходит.","Реактивные параметры: передавайте ref-ы вместо пересоздания подписок в watch.","Для «ленивых» секций (загрузка при видимости) связка useIntersectionObserver + флаг — базовый паттерн.","Не забывайте про cleanup собственных композаблов — равняйтесь на API VueUse (возврат stop/pause/resume)."],whenToUse:"<strong>DOM-композаблы</strong> нужны почти в каждом приложении: клавиатурные шорткаты, адаптивные размеры, infinite scroll (intersection), копирование, фокус-менеджмент. Если задача — «подписаться на что-то в DOM и отреагировать», сначала смотрите VueUse.",alternative:{title:"Чистый useEventListener внутри своего композабла",text:"Когда нужна одна специфичная подписка, VueUse можно не тянуть целиком: useEventListener из @vueuse/core — точечный импорт, tree-shaking оставит только его.",code:`import { useEventListener } from '@vueuse/core'
// точечный импорт: в бандл попадёт только этот композабл (~1КБ)`},advanced:{title:"Комбинирование: lazy-изображения с intersection + размеры",text:"Продвинутый паттерн: элемент подгружает контент при появлении в вьюпорте и подстраивается под контейнер — ленивые галереи, виртуальные панели.",code:`const { width } = useElementSize(container)
const isVisible = ref(false)
useIntersectionObserver(container, ([e]) => (isVisible.value = !!e?.isIntersecting))

const cols = computed(() => Math.max(1, Math.floor(width.value / 220)))
const shouldLoad = computed(() => isVisible.value && cols.value > 0)`}}},gb=Object.freeze(Object.defineProperty({__proto__:null,default:bb},Symbol.toStringTag,{value:"Module"})),hb=`<script setup lang="ts">
import { useLocalStorage, useMediaQuery, useBreakpoints, useDark, useToggle } from '@vueuse/core'

// 1) useLocalStorage: живой ref, синхронизированный с хранилищем
const nickname = useLocalStorage('demo-nickname', 'гость')

// 2) useMediaQuery: реактивный media query
const isWide = useMediaQuery('(min-width: 900px)')
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

// 3) useBreakpoints: именованные брейкпоинты
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 })
const active = breakpoints.active // текущее имя брейкпоинта (computed)

// 4) useDark: тема из box (или media), переключатель через useToggle
const isDark = useDark()
const toggleDark = useToggle(isDark)
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <label class="label">useLocalStorage:</label>
      <input v-model="nickname" class="input" style="max-width: 200px" />
      <span class="muted mono">localStorage[‘demo-nickname’] = {{ JSON.stringify(nickname) }}</span>
    </div>

    <div class="grid-2">
      <div class="card">
        <b>useMediaQuery</b>
        <ul class="mono muted" style="margin: 8px 0 0; padding-left: 18px">
          <li>min-width: 900px → {{ isWide }}</li>
          <li>prefers-reduced-motion → {{ prefersReducedMotion }}</li>
        </ul>
      </div>

      <div class="card">
        <b>useBreakpoints</b>
        <p class="mono muted" style="margin: 8px 0 0">
          активный брейкпоинт: <b>{{ active }}</b>
          <br />greaterOrEqual('md'): {{ breakpoints.greaterOrEqual('md') }}
        </p>
      </div>
    </div>

    <div class="row">
      <button class="btn primary" @click="toggleDark()">
        useDark: сейчас {{ isDark ? 'dark' : 'light' }} — переключить
      </button>
    </div>

    <p class="muted">
      Введите ник и <b>перезагрузите страницу</b> — значение вернётся из localStorage. Изменяйте
      размер окна: media-запросы и брейкпоинты обновляются реактивно, без слушателей resize в коде.
    </p>
  </div>
</template>
`,yb={title:"Хранилища и медиа: useLocalStorage, useMediaQuery, useBreakpoints, useDark",summary:"Живой ref ↔ localStorage, реактивные media-запросы, именованные брейкпоинты, тёмная тема.",demo:()=>F(()=>import("./Demo-B5aAOX16.js"),__vite__mapDeps([13,12])),code:hb,content:{intro:"<code>useLocalStorage(key, default)</code> возвращает <b>живой ref</b>: запись обновляет хранилище, внешние изменения (другая вкладка) — ref. <code>useMediaQuery(query)</code> превращает CSS-медиа-условие в реактивный boolean. <code>useBreakpoints(config)</code> — словарь именованных брейкпоинтов с хелперами (greater, between, active). <code>useDark</code> — готовая тёмная тема: класс на html + синхронизация с системной настройкой. В демо всё это работает одновременно.",howItWorks:"useLocalStorage оборачивает чтение/запись в customRef с сериализацией (JSON по умолчанию) и слушателем <code>storage</code> события для синхронизации вкладок. useMediaQuery создаёт <code>matchMedia(query)</code> и подписывается на его change-событие, возвращая read-only ref. useBreakpoints — надстройка: набор useMediaQuery с границами и комбинаторы (greater/between/smaller). useDark комбинирует useLocalStorage + usePreferredDark + watch и вешает класс <code>dark</code> на <code>&lt;html&gt;</code>.",mistakes:[{title:"Хранить в useLocalStorage не-сериализуемое",text:"Map, Set, Date, классы не переживают JSON.stringify/parse: восстановится ломаная структура. Храните plain-данные или задавайте свой serializer.",code:"const state = useLocalStorage('s', new Map()) // ❌ восстановится как {}",fix:`const state = useLocalStorage('s', initial, {
  serializer: {
    read: (v) => new Map(JSON.parse(v)),
    write: (m) => JSON.stringify([...m]),
  },
}) // ✅`},{title:"Дублировать CSS-брейкпоинты и JS-константы",text:"Если Tailwind-классы ломаются на 768px, а JS-логика на 900px — рассинхрон. Выносите границы в общий конфиг (CSS custom properties ↔ useBreakpoints config).",code:"const bp = useBreakpoints({ md: 900 }) // ❌ а в CSS — 768px",fix:`// ✅ единый источник: один конфиг и для CSS (переменные), и для JS
const bp = useBreakpoints(themeConfig.breakpoints)`},{title:"useDark без стилей под класс .dark",text:"useDark только вешает класс/атрибут — сама тема это CSS-переменные. Без <code>.dark { --bg: ... }</code> переключатель ничего не визуально не меняет.",code:"const isDark = useDark() // и… ничего не происходит",fix:`/* ✅ стили реагируют на класс */
.dark { --bg: #0d1117; --text: #e6edf3; }`}],nuances:["useLocalStorage пишет <b>лениво</b>: без flush-опций запись в момент мутации; для高频 обновлений есть опция <code>flush</code>.","Синхронизация между вкладками — штатно (событие storage); для «одного таба» есть <code>useSessionStorage</code>.","useMediaQuery SSR-безопасен: на сервере возвращается <code>false</code> без гидрационного скачка (проверяйте свой UI).","<code>breakpoints.active()</code> — getter, вызывайте как функцию в шаблоне; там же доступны greater/smaller/between.","useDark умеет <code>valueAuto</code> и хранит выбор в localStorage (ключ <code>vueuse-color-scheme</code>).","Для «системная тема + ручной оверрайд» есть <code>useColorMode</code> с режимами auto/light/dark."],bestPractices:["Персистентные настройки пользователя (тема, язык, размер шрифта) — через useLocalStorage: одна строка вместо watch+serialize.","Брейкпоинты держите в одном конфиге с CSS — никаких магических чисел в двух местах.","Для доступности проверяйте prefers-reduced-motion и prefers-contrast как обычные media-флаги.","useDark/useColorMode + CSS-переменные — минимальная тема без UI-библиотек."],whenToUse:"<strong>useLocalStorage</strong> — любые настройки, черновики, «последний визит». <strong>useMediaQuery/useBreakpoints</strong> — когда поведение (а не только вид) зависит от экрана: сворачивать ли сайдбар, включать ли virtualization. <strong>useDark</strong> — тёмная тема из коробки. Всё это почти всегда лучше самописных композаблов.",alternative:{title:"CSS-first: только медиа-запросы",text:"Если JS-логика не зависит от экрана, адаптивность решается чистым CSS — без композаблов и без JS-оверлея на layout.",code:`/* без useMediaQuery: сетка перестраивается сама */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }`},advanced:{title:"useColorMode: трёхуровневая тема",text:"useColorMode добавляет режим auto (следовать системе) с явным оверрайдом пользователя — стандартный UX современных приложений.",code:`import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  modes: { light: '', dark: 'theme-dark', dim: 'theme-dim' },
  attribute: 'data-theme',
})
// mode.value = 'auto' | 'light' | 'dark' | 'dim'
// useToggle(mode) для переключения по циклу`}}},xb=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),wb=`<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn, useThrottleFn, useIntervalFn, useTimeoutFn, useAsyncState } from '@vueuse/core'

const log = ref<string[]>([])
function add(msg: string) {
  log.value.unshift(\`\${new Date().toLocaleTimeString()} · \${msg}\`)
  if (log.value.length > 8) log.value.pop()
}

// 1) useDebounceFn: вызов через 400мс после ПОСЛЕДНЕГО события
const debounced = useDebounceFn((v: string) => add(\`debounce: «\${v}» (вызван один раз)\`), 400)

// 2) useThrottleFn: не чаще раза в 1000мс
const throttled = useThrottleFn(() => add('throttle: событие пропущено сквозь окно'), 1000)

// 3) useIntervalFn: с pause/resume
const ticks = ref(0)
const { pause, resume, isActive } = useIntervalFn(() => ticks.value++, 1000, { immediate: false })

// 4) useTimeoutFn: отложенный запуск с отменой
const { start: delayedStart, stop: delayedStop } = useTimeoutFn(
  () => add('timeout: сработал через 2с'),
  2000,
  { immediate: false },
)

// 5) useAsyncState: состояние async-операции из коробки
const fakeFetch = () => new Promise<string>(r => setTimeout(() => r('данные загружены'), 800))
const { state, isLoading, execute } = useAsyncState(fakeFetch, 'пока ничего', {
  delay: 300,
  onSuccess: () => void 0,
})
<\/script>

<template>
  <div class="stack">
    <div class="row">
      <input
        class="input"
        style="max-width: 240px"
        placeholder="печатайте — debounce 400мс…"
        @input="debounced(($event.target as HTMLInputElement).value)"
      />
      <button class="btn" @click="throttled">throttle-клик (не чаще 1с)</button>
    </div>

    <div class="row">
      <button class="btn" @click="isActive ? pause() : resume()">
        {{ isActive ? 'pause() интервала' : 'resume() интервала' }}
      </button>
      <span class="stat">ticks: <b>{{ ticks }}</b></span>
      <button class="btn" @click="delayedStart()">start timeout 2с</button>
      <button class="btn danger" @click="delayedStop()">stop timeout</button>
    </div>

    <div class="row">
      <button class="btn primary" @click="execute()">useAsyncState: execute()</button>
      <span class="tag" :class="isLoading ? 'warn' : 'ok'">{{ isLoading ? 'загрузка…' : state }}</span>
    </div>

    <div class="log">
      <div v-for="(line, i) in log" :key="i" class="mono">{{ line }}</div>
      <div v-if="!log.length" class="muted">лог пуст</div>
    </div>

    <p class="muted">
      Печатайте быстро: debounce подождёт паузы и вызовется <b>один</b> раз. Жмите throttle-кнопку
      часто: реальных вызовов меньше, чем кликов.
    </p>
  </div>
</template>
`,_b={title:"Тайминг и async: useDebounceFn, useThrottleFn, useIntervalFn, useAsyncState",summary:"Дебаунс/троттл с авто-cleanup, управляемые интервалы и таймауты, состояние async-операции.",demo:()=>F(()=>import("./Demo-BhY8-bCb.js"),__vite__mapDeps([14,12])),code:wb,content:{intro:"Таймеры и частые события — второй по частоте источник утечек после слушателей. VueUse даёт управляемые обёртки: <code>useDebounceFn</code> (вызов после паузы), <code>useThrottleFn</code> (не чаще N мс), <code>useIntervalFn</code>/<code>useTimeoutFn</code> (с pause/resume/stop и авто-очисткой при unmount), <code>useAsyncState</code> (данные + isLoading из одного вызова). В демо все паттерны видны в живом логе.",howItWorks:"useDebounceFn/useThrottleFn возвращают <b>обёрнутую функцию</b>: вызовы проходят через окно debounce/throttle внутри. useIntervalFn/useTimeoutFn стартуют по immediate-опции и возвращают pause/resume/stop; при unmount компонента таймеры очищаются автоматически (onScopeDispose). useAsyncState исполняет промис и раздаёт <code>state</code>, <code>isLoading</code>, <code>error</code>, <code>execute</code> для повторного запуска — типовой шаблон «данные + статус» без ручных ref-ов.",mistakes:[{title:"Дебаунс там, где нужен троттл (и наоборот)",text:"Debounce ждёт паузу: для скролла/драга пользователь получит ответ только когда остановится — UX «залипает». Throttle даёт регулярные обновления. Поиск — debounce; скролл/resize/mousemove — throttle.",code:"const onScroll = useDebounceFn(handle, 300) // ❌ логи «догоняют» после остановки",fix:"const onScroll = useThrottleFn(handle, 100) // ✅ плавные обновления"},{title:"setInterval без очистки",text:"Голый setInterval в компоненте переживает unmount и продолжает тикать «в пустоту», накапливаясь с каждым монтированием страницы.",code:"onMounted(() => setInterval(poll, 5000)) // ❌",fix:`import { useIntervalFn } from '@vueuse/core'
const { pause, resume } = useIntervalFn(poll, 5000) // ✅ само очистится`},{title:"Гонка async-состояния при быстрых повторных вызовах",text:"execute() дважды — два промиса; отработавший последним «побеждает» даже если он был запущен раньше. Для отменяемых запросов используйте AbortController внутри.",code:"execute(); execute() // ❌ два параллельных запроса",fix:`// ✅ guard внутри fetchFn:
let ctrl: AbortController | null = null
const fetchFn = (url: string) => {
  ctrl?.abort()
  ctrl = new AbortController()
  return fetch(url, { signal: ctrl.signal })
}`}],nuances:["Обе обёртки возвращают функцию с методом <code>.cancel()</code> (в VueUse 10+) — принудительная отмена отложенного вызова.","useIntervalFn опция <code>immediateCallback</code> вызывает обработчик сразу при resume, не дожидаясь первого тика.","useAsyncState: <code>immediate: false</code> откладывает первый запуск — вызывайте execute() сами (по кнопке, по условию).","Дебаунс с <code>{ maxWait }</code> не даст отложенному вызову «застрять» при непрерывном потоке событий.","useTimeoutFn/useIntervalFn принимают reactive-интервал: смените ref — период обновится.","Все таймерные композаблы SSR-безопасны: на сервере не запускаются."],bestPractices:["Поиск/автосохранение/валидация — <b>debounce</b>; анимации/скролл/resize/mousemove — <b>throttle</b>.","Поллинг — только useIntervalFn: pause при document.hidden (useDocumentVisibility) — тривиально.","useAsyncState для простых сценариев; сложные кеши — TanStack Query.","Не debounce-ите действия пользователя с финансовыми последствиями (клики оплаты) — там явные busy-флаги."],whenToUse:"<strong>Тайминг-композаблы</strong> нужны везде, где есть частые события или фоновая периодика: поиск, бесконечные ленты, поллинг статусов, автосейв, «долго не активен — разлогинить». Используйте их вместо голых setTimeout/setInterval всегда — cleanup бесплатен.",alternative:{title:"watchDebounced / watchThrottled из VueUse",text:"Если источник — реактивное состояние, а не DOM-событие, проще следить за ref с встроенным debounce/throttle, чем оборачивать обработчик.",code:`import { watchDebounced } from '@vueuse/core'

watchDebounced(query, (q) => search(q), { debounce: 400 })
// вместо ручного useDebounceFn внутри watch`},advanced:{title:"Поллинг с паузой на скрытой вкладке",text:"Комбинация useIntervalFn + useDocumentVisibility: фоновая вкладка не тратит запросы, при возврате — мгновенное обновление. Стандарт для дашбордов и мессенджеров.",code:`import { useIntervalFn, useDocumentVisibility } from '@vueuse/core'

const visibility = useDocumentVisibility()
const { pause, resume } = useIntervalFn(poll, 5000)

watch(visibility, (v) => {
  v === 'visible' ? (poll(), resume()) : pause()
})`}}},Sb=Object.freeze(Object.defineProperty({__proto__:null,default:_b},Symbol.toStringTag,{value:"Module"})),er=[{id:"fundamentals",title:"Основы Vue",icon:"🧱",description:"Компоненты, шаблоны, события, слоты, v-model и всё, на чём строится каждый проект."},{id:"reactivity",title:"Реактивность",icon:"⚡",description:"ref, reactive, computed, watch и устройство системы реактивности Vue."},{id:"composition",title:"Composition API и Composables",icon:"🧩",description:"Как организовывать логику: composables, жизненный цикл, cleanup, provide/inject."},{id:"router",title:"Vue Router",icon:"🧭",description:"Маршруты, вложенные роуты, guards, meta, ленивые страницы и паттерны загрузки данных."},{id:"pinia",title:"Pinia",icon:"🗃️",description:"Stores, state, getters, actions, персистентность и когда глобальный стейт не нужен."},{id:"vueuse",title:"VueUse",icon:"🧰",description:"Готовые composables для DOM, событий, тайминга, хранилищ и медиа-запросов."},{id:"nuxt",title:"Nuxt",icon:"🏔️",description:"SSR, гидрация, файловый роутинг, server routes, SEO и рендеринг-стратегии."},{id:"advanced",title:"Продвинутый Vue",icon:"🚀",description:"Render-функции, h(), JSX, плагины, директивы, headless- и renderless-компоненты."},{id:"performance",title:"Производительность",icon:"🏎️",description:"Лишние ререндеры, большие списки, виртуализация, code splitting и кеширование."},{id:"typescript",title:"TypeScript в Vue",icon:"🔷",description:"Типизация props, emits, слотов, generics, stores и API-ответов."},{id:"under-the-hood",title:"Как это работает внутри",icon:"🔬",description:"Реактивность, прокси, VDOM, scheduler, батчинг, nextTick и гидрация."},{id:"common-traps",title:"Ловушки и антипаттерны",icon:"🪤",description:"Намеренно ошибочные примеры: ❌ что сломается → ✅ как надо."},{id:"architecture",title:"Архитектурные паттерны",icon:"🏛️",description:"Feature-based структура, слой API, UI vs business компоненты, границы абстракций."}],kb=new Map(er.map(e=>[e.id,e])),Tb=Object.assign({"./advanced/01-render-functions.example.ts":op,"./advanced/02-compiler-macros.example.ts":ap,"./advanced/03-directives-headless.example.ts":pp,"./architecture/01-feature-based.example.ts":bp,"./architecture/02-layers.example.ts":xp,"./common-traps/01-state-traps.example.ts":_p,"./common-traps/02-effect-traps.example.ts":kp,"./common-traps/03-ssr-traps.example.ts":Rp,"./composition/01-composables.example.ts":Ep,"./composition/02-shared-state.example.ts":Ip,"./composition/03-lifecycle-cleanup.example.ts":Vp,"./composition/04-provide-inject.example.ts":jp,"./fundamentals/01-app-lifecycle.example.ts":Kp,"./fundamentals/02-templates-directives.example.ts":Jp,"./fundamentals/03-components.example.ts":ef,"./fundamentals/04-props.example.ts":rf,"./fundamentals/05-emits.example.ts":uf,"./fundamentals/06-slots.example.ts":bf,"./fundamentals/07-scoped-slots.example.ts":wf,"./fundamentals/08-composition.example.ts":Rf,"./fundamentals/09-conditional-rendering.example.ts":Ef,"./fundamentals/10-lists-keys.example.ts":If,"./fundamentals/11-events.example.ts":Vf,"./fundamentals/12-v-model.example.ts":Uf,"./fundamentals/13-multiple-v-model.example.ts":Bf,"./fundamentals/14-forms.example.ts":Kf,"./fundamentals/15-dynamic-components.example.ts":Qf,"./fundamentals/16-keep-alive.example.ts":Zf,"./fundamentals/17-teleport.example.ts":nm,"./fundamentals/18-transition.example.ts":rm,"./fundamentals/19-transition-group.example.ts":cm,"./fundamentals/20-async-components.example.ts":fm,"./nuxt/01-rendering-models.example.ts":gm,"./nuxt/02-data-fetching.example.ts":wm,"./nuxt/03-routing-middleware.example.ts":Rm,"./nuxt/04-hydration-mismatches.example.ts":Om,"./nuxt/05-seo-server-modules.example.ts":Vm,"./performance/01-render-waste.example.ts":Fm,"./performance/02-lists-bundles.example.ts":qm,"./pinia/01-stores.example.ts":Xm,"./pinia/02-option-store.example.ts":tv,"./pinia/03-async-actions-persist.example.ts":rv,"./pinia/04-state-architecture.example.ts":dv,"./reactivity/01-ref.example.ts":fv,"./reactivity/02-reactive.example.ts":bv,"./reactivity/03-computed.example.ts":yv,"./reactivity/04-watch.example.ts":_v,"./reactivity/05-watch-effect.example.ts":Tv,"./reactivity/06-shallow.example.ts":Pv,"./reactivity/07-to-ref-to-value.example.ts":Mv,"./reactivity/08-readonly.example.ts":Dv,"./reactivity/09-concept.example.ts":$v,"./reactivity/10-pitfalls.example.ts":Nv,"./router/01-basics.example.ts":qv,"./router/02-params-query-guards.example.ts":Jv,"./router/03-lazy-data-loading.example.ts":eb,"./typescript/01-typed-components.example.ts":rb,"./under-the-hood/01-reactivity-engine.example.ts":lb,"./under-the-hood/02-vdom-scheduler.example.ts":mb,"./vueuse/01-dom-events.example.ts":gb,"./vueuse/02-storage-media.example.ts":xb,"./vueuse/03-timing-fetch.example.ts":Sb});function Rb(e){const t=/\.\/([^/]+)\/([^/]+)\.example\.ts$/.exec(e);if(!t)throw new Error(`Некорректный путь примера: ${e}`);const[,n,o]=t;if(!kb.has(n))throw new Error(`Неизвестный раздел "${n}" для ${e}. Добавьте его в src/examples/sections.ts`);return{section:n,sortKey:o,id:o.replace(/^\d+-/,"")}}const Ya=Object.entries(Tb).map(([e,t])=>{const{section:n,sortKey:o,id:s}=Rb(e);return{sortKey:o,entry:{...t.default,id:s,section:n,key:`${n}/${o}`}}}).sort((e,t)=>e.sortKey.localeCompare(t.sortKey,"en")).map(({entry:e})=>e),so=[],wo=new Map;for(const e of er){const t=Ya.filter(n=>n.section===e.id);if(t.length!==0){wo.set(e.id,t);for(const n of t)so.push(n)}}so.forEach((e,t)=>{e.prev=so[t-1],e.next=so[t+1]});const cs=new Map;function rg(e,t){const n=`${e}/${t}`;if(cs.has(n))return cs.get(n);const o=Ya.find(s=>s.section===e&&s.id===t);return o&&cs.set(n,o),o}function ig(e){return wo.get(e)??[]}function ag(e){return e.demo?rl(e.demo):null}const Cb={class:"sidebar__search"},Pb=["onClick"],Eb={class:"icon"},Ob={class:"count"},Mb={key:0,class:"nav-section__list"},Ib={key:0,class:"sidebar__empty"},Ab={class:"sidebar__footer"},Db=qn({__name:"NavSidebar",props:{open:{type:Boolean}},setup(e){const t=Xa(),n=vt(""),o=vt(new Set);function s(c){const l=new Set(o.value);l.has(c)?l.delete(c):l.add(c),o.value=l}Lt(()=>t.params.section,c=>{if(typeof c=="string"){const l=new Set(o.value);l.add(c),o.value=l}},{immediate:!0});const r=Pe(()=>n.value.trim().toLowerCase()),i=Pe(()=>{const c=r.value;return er.map(l=>{const d=wo.get(l.id)??[];if(!c)return{section:l,list:d};const u=d.filter(m=>m.title.toLowerCase().includes(c)||m.summary.toLowerCase().includes(c)||l.title.toLowerCase().includes(c));return u.length>0?{section:l,list:u}:null}).filter(l=>l!==null)}),a=Pe(()=>{let c=0;for(const l of wo.values())c+=l.length;return c});return(c,l)=>{const d=vs("RouterLink");return Le(),nt("aside",{class:An(["sidebar",{open:e.open}])},[fe(d,{to:"/",class:"sidebar__brand"},{default:Cn(()=>[...l[1]||(l[1]=[ue("svg",{class:"sidebar__logo",viewBox:"0 0 32 32","aria-hidden":"true"},[ue("path",{fill:"#42b883",d:"M16 4 2 30h8.5L16 17.5 21.5 30H30z"}),ue("path",{fill:"#35495e",d:"M16 4l-5.5 9.5h11z"})],-1),ue("span",null,[On(" Vue Cookbook "),ue("small",null,"интерактивный справочник")],-1)])]),_:1}),ue("div",Cb,[l[2]||(l[2]=ue("svg",{viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round"},[ue("circle",{cx:"11",cy:"11",r:"7"}),ue("path",{d:"m20 20-3.5-3.5"})],-1)),Wc(ue("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"search",placeholder:"Поиск по темам…","aria-label":"Поиск"},null,512),[[Ed,n.value]])]),fe(d,{to:"/",class:"sidebar__home"},{default:Cn(()=>[...l[3]||(l[3]=[On("🏠 Главная страница",-1)])]),_:1}),ue("nav",null,[(Le(!0),nt(Ce,null,hr(i.value,({section:u,list:m})=>(Le(),nt("div",{key:u.id,class:"nav-section"},[ue("button",{class:"nav-section__head",type:"button",onClick:v=>s(u.id)},[ue("span",Eb,zt(u.icon),1),ue("span",null,zt(u.title),1),ue("span",Ob,zt(m.length),1),(Le(),nt("svg",{class:An(["chev",{open:o.value.has(u.id)}]),viewBox:"0 0 24 24",fill:"none","stroke-width":"2.4","stroke-linecap":"round"},[...l[4]||(l[4]=[ue("path",{d:"m9 6 6 6-6 6"},null,-1)])],2))],8,Pb),o.value.has(u.id)||r.value?(Le(),nt("ul",Mb,[(Le(!0),nt(Ce,null,hr(m,v=>(Le(),nt("li",{key:v.key},[fe(d,{to:`/${v.section}/${v.id}`},{default:Cn(()=>[On(zt(v.title),1)]),_:2},1032,["to"])]))),128))])):bo("",!0)]))),128)),i.value.length===0?(Le(),nt("p",Ib," Ничего не найдено по запросу «"+zt(n.value)+"». ",1)):bo("",!0)]),ue("div",Ab,zt(a.value)+" тем · Vue 3 · TypeScript · локальный запуск ",1)],2)}}}),Vb={class:"app"},Lb={class:"topbar"},$b={class:"content"},Ub=qn({__name:"App",setup(e){const t=Xa(),n=vt(!1);return Lt(()=>t.path,()=>{n.value=!1}),(o,s)=>{const r=vs("RouterLink"),i=vs("RouterView");return Le(),nt("div",Vb,[ue("header",Lb,[ue("button",{class:"topbar__burger",type:"button","aria-label":"Открыть навигацию",onClick:s[0]||(s[0]=a=>n.value=!n.value)},[...s[2]||(s[2]=[ue("span",null,null,-1),ue("span",null,null,-1),ue("span",null,null,-1)])]),fe(r,{to:"/",class:"topbar__brand"},{default:Cn(()=>[...s[3]||(s[3]=[On("Vue Ecosystem Cookbook",-1)])]),_:1})]),n.value?(Le(),nt("div",{key:0,class:"app__overlay",onClick:s[1]||(s[1]=a=>n.value=!1)})):bo("",!0),fe(Db,{open:n.value},null,8,["open"]),ue("main",$b,[fe(i)])])}}}),Fb=Xu({history:Eu(),routes:[{path:"/",name:"home",component:()=>F(()=>import("./HomePage-KOlJNT06.js"),[])},{path:"/:section",name:"section",component:()=>F(()=>import("./SectionPage-BytIbUjg.js"),__vite__mapDeps([15,16])),props:!0},{path:"/:section/:slug",name:"example",component:()=>F(()=>import("./ExamplePage-C7ulGxz8.js"),__vite__mapDeps([17,16])),props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>F(()=>import("./NotFound-DPcILj-l.js"),__vite__mapDeps([18,16]))}],scrollBehavior(e,t,n){return n||(e.path===t.path?!1:{top:0})}}),tr=Ld(Ub);tr.use(Fd());tr.use(Fb);tr.mount("#app");export{Yb as $,Wc as A,Ed as B,qb as C,Is as D,zs as E,Ce as F,fc as G,Gb as H,Ge as I,no as J,dl as K,ul as L,Hs as M,Bs as N,Lt as O,Do as P,Bl as Q,Hn as R,eg as S,ng as T,Xb as U,tg as V,Zb as W,Kb as X,al as Y,zb as Z,Qb as _,ue as a,rl as a0,F as a1,og as a2,sg as a3,$s as a4,We as a5,Bb as a6,Fi as a7,jb as a8,Ui as a9,me as aa,Fc as ab,Hb as ac,Lc as ad,at as ae,ps as af,Nb as ag,Y as ah,wi as ai,Xt as aj,Vc as ak,Gc as al,hr as b,nt as c,qn as d,wo as e,xs as f,On as g,fe as h,Pe as i,kb as j,ig as k,vt as l,Wb as m,bo as n,Le as o,An as p,rg as q,vs as r,er as s,zt as t,Vt as u,ag as v,Cn as w,Js as x,Jb as y,js as z};
