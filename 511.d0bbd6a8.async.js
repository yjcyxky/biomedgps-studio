var cn=Object.prototype.hasOwnProperty;var lt=Object.getOwnPropertySymbols,ln=Object.prototype.propertyIsEnumerable;var Ue=(L,z)=>{var F={};for(var N in L)cn.call(L,N)&&z.indexOf(N)<0&&(F[N]=L[N]);if(L!=null&&lt)for(var N of lt(L))z.indexOf(N)<0&&ln.call(L,N)&&(F[N]=L[N]);return F};(self.webpackChunkbiomedgps_studio=self.webpackChunkbiomedgps_studio||[]).push([[511],{95093:function(L,z,F){"use strict";F.d(z,{Z:function(){return on}});function N(e,t){return function(){return e.apply(t,arguments)}}const{toString:me}=Object.prototype,{getPrototypeOf:X}=Object,H=(e=>t=>{const n=me.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>H(t)===e),J=e=>t=>typeof t===e,{isArray:I}=Array,v=J("undefined");function Z(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ne=P("ArrayBuffer");function ye(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ne(e.buffer),t}const Ee=J("string"),x=J("function"),re=J("number"),M=e=>e!==null&&typeof e=="object",se=e=>e===!0||e===!1,V=e=>{if(H(e)!=="object")return!1;const t=X(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ie=P("Date"),we=P("File"),q=P("Blob"),Y=P("FileList"),be=e=>M(e)&&x(e.pipe),Se=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=H(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},Re=P("URLSearchParams"),c=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function d(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function f(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const E=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),b=e=>!v(e)&&e!==E;function O(){const{caseless:e}=b(this)&&this||{},t={},n=(r,s)=>{const i=e&&f(t,s)||s;V(t[i])&&V(r)?t[i]=O(t[i],r):V(r)?t[i]=O({},r):I(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&d(arguments[r],n);return t}const _=(e,t,n,{allOwnKeys:r}={})=>(d(t,(s,i)=>{n&&x(s)?e[i]=N(s,n):e[i]=s},{allOwnKeys:r}),e),T=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Q=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},C=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&X(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},W=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Oe=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ee=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&X(Uint8Array)),Ae=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ge=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ut=P("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ke=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dt=P("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};d(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},ht=e=>{Ie(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return I(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),xe="abcdefghijklmnopqrstuvwxyz",je="0123456789",He={DIGIT:je,ALPHA:xe,ALPHA_DIGIT:xe+xe.toUpperCase()+je},Et=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function wt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bt=e=>{const t=new Array(10),n=(r,s)=>{if(M(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=I(r)?[]:{};return d(r,(o,u)=>{const m=n(o,s+1);!v(m)&&(i[u]=m)}),t[s]=void 0,i}}return r};return n(e,0)},St=P("AsyncFunction");var a={isArray:I,isArrayBuffer:ne,isBuffer:Z,isFormData:Se,isArrayBufferView:ye,isString:Ee,isNumber:re,isBoolean:se,isObject:M,isPlainObject:V,isUndefined:v,isDate:ie,isFile:we,isBlob:q,isRegExp:dt,isFunction:x,isStream:be,isURLSearchParams:Re,isTypedArray:ee,isFileList:Y,forEach:d,merge:O,extend:_,trim:c,stripBOM:T,inherits:Q,toFlatObject:C,kindOf:H,kindOfTest:P,endsWith:W,toArray:Oe,forEachEntry:Ae,matchAll:ge,isHTMLForm:ut,hasOwnProperty:ke,hasOwnProp:ke,reduceDescriptors:Ie,freezeMethods:ht,toObjectSet:pt,toCamelCase:ft,noop:mt,toFiniteNumber:yt,findKey:f,global:E,isContextDefined:b,ALPHABET:He,generateString:Et,isSpecCompliantForm:wt,toJSONObject:bt,isAsyncFn:St,isThenable:e=>e&&(M(e)||x(e))&&x(e.then)&&x(e.catch)};function K(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Me=K.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}}),Object.defineProperties(K,qe),Object.defineProperty(Me,"isAxiosError",{value:!0}),K.from=(e,t,n,r,s,i)=>{const o=Object.create(Me);return a.toFlatObject(e,o,function(m){return m!==Error.prototype},u=>u!=="isAxiosError"),K.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var S=K,ze=null,Rt=F(48764).Buffer;function Te(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ve(e,t,n){return e?e.concat(t).map(function(s,i){return s=Je(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Ot(e){return a.isArray(e)&&!e.some(Te)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function gt(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ze||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,k){return!a.isUndefined(k[w])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,m=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!m&&a.isBlob(p))throw new S("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?m&&typeof Blob=="function"?new Blob([p]):Rt.from(p):p}function h(p,w,k){let B=p;if(p&&!k&&typeof p=="object"){if(a.endsWith(w,"{}"))w=r?w:w.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Ot(p)||(a.isFileList(p)||a.endsWith(w,"[]"))&&(B=a.toArray(p)))return w=Je(w),B.forEach(function(pe,an){!(a.isUndefined(pe)||pe===null)&&t.append(o===!0?ve([w],an,i):o===null?w:w+"[]",l(pe))}),!1}return Te(p)?!0:(t.append(ve(k,w,i),l(p)),!1)}const y=[],g=Object.assign(At,{defaultVisitor:h,convertValue:l,isVisitable:Te});function R(p,w){if(!a.isUndefined(p)){if(y.indexOf(p)!==-1)throw Error("Circular reference detected in "+w.join("."));y.push(p),a.forEach(p,function(B,G){(!(a.isUndefined(B)||B===null)&&s.call(t,B,a.isString(G)?G.trim():G,w,g))===!0&&R(B,w?w.concat(G):[G])}),y.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}var oe=gt;function Ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function We(e,t){this._pairs=[],e&&oe(e,this,t)}const Ke=We.prototype;Ke.append=function(t,n){this._pairs.push([t,n])},Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Ve)}:Ve;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};var $e=We;function xt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ge(e,t,n){if(!t)return e;const r=n&&n.encode||xt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new $e(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Tt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Xe=Tt,Ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams!="undefined"?URLSearchParams:$e,Pt=typeof FormData!="undefined"?FormData:null,_t=typeof Blob!="undefined"?Blob:null;const Ct=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),Ft=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var D={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:_t},isStandardBrowserEnv:Ct,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function Bt(e,t){return oe(e,new D.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return D.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Dt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ut(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),m=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,m?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Lt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Dt(r),s,n,0)}),n}return null}var Ye=Ut;const kt={"Content-Type":void 0};function It(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ae={transitional:Ze,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ye(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return oe(u?{"files[]":t}:t,m&&new m,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),It(t)):t}],transformResponse:[function(t){const n=this.transitional||ae.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?S.from(u,S.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:D.classes.FormData,Blob:D.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){ae.headers[t]={}}),a.forEach(["post","put","patch"],function(t){ae.headers[t]=a.merge(kt)});var Ne=ae;const jt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ht=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Qe=Symbol("internals");function te(e){return e&&String(e).trim().toLowerCase()}function ce(e){return e===!1||e==null?e:a.isArray(e)?e.map(ce):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Pe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class le{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,m,l){const h=te(m);if(!h)throw new Error("header name must be a non-empty string");const y=a.findKey(s,h);(!y||s[y]===void 0||l===!0||l===void 0&&s[y]!==!1)&&(s[y||m]=ce(u))}const o=(u,m)=>a.forEach(u,(l,h)=>i(l,h,m));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!qt(t)?o(Ht(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=te(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Mt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=te(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Pe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=te(o),o){const u=a.findKey(r,o);u&&(!n||Pe(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Pe(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=ce(s),delete n[i];return}const u=t?zt(i):String(i).trim();u!==i&&delete n[i],n[u]=ce(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Qe]=this[Qe]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=te(o);r[u]||(Jt(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.freezeMethods(le.prototype),a.freezeMethods(le);var U=le;function _e(e,t){const n=this||Ne,r=t||n,s=U.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function et(e){return!!(e&&e.__CANCEL__)}function tt(e,t,n){S.call(this,e==null?"canceled":e,S.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(tt,S,{__CANCEL__:!0});var ue=tt;function vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new S("Request failed with status code "+n.status,[S.ERR_BAD_REQUEST,S.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Vt=D.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const m=[];m.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&m.push("expires="+new Date(s).toGMTString()),a.isString(i)&&m.push("path="+i),a.isString(o)&&m.push("domain="+o),u===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Wt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function nt(e,t){return e&&!Wt(t)?Kt(e,t):t}var $t=D.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(m){const l=Date.now(),h=r[i];o||(o=l),n[s]=m,r[s]=l;let y=i,g=0;for(;y!==s;)g+=n[y++],y=y%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const R=h&&l-h;return R?Math.round(g*1e3/R):void 0}}var Zt=Xt;function rt(e,t){let n=0;const r=Zt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,m=r(u),l=i<=o;n=i;const h={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:m||void 0,estimated:m&&o&&l?(o-i)/m:void 0,event:s};h[t?"download":"upload"]=!0,e(h)}}var Yt=typeof XMLHttpRequest!="undefined"&&function(e){return new Promise(function(n,r){let s=e.data;const i=U.from(e.headers).normalize(),o=e.responseType;let u;function m(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(D.isStandardBrowserEnv||D.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const R=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(R+":"+p))}const h=nt(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ge(h,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function y(){if(!l)return;const R=U.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:R,config:e,request:l};vt(function(B){n(B),m()},function(B){r(B),m()},w),l=null}if("onloadend"in l?l.onloadend=y:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(y)},l.onabort=function(){!l||(r(new S("Request aborted",S.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new S("Network Error",S.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Ze;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new S(p,w.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,e,l)),l=null},D.isStandardBrowserEnv){const R=(e.withCredentials||$t(h))&&e.xsrfCookieName&&Vt.read(e.xsrfCookieName);R&&i.set(e.xsrfHeaderName,R)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(p,w){l.setRequestHeader(w,p)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",rt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",rt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=R=>{!l||(r(!R||R.type?new ue(null,e,l):R),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=Gt(h);if(g&&D.protocols.indexOf(g)===-1){r(new S("Unsupported protocol "+g+":",S.ERR_BAD_REQUEST,e));return}l.send(s||null)})};const fe={http:ze,xhr:Yt};a.forEach(fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});var Qt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?fe[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new S(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(fe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:fe};function Ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ue(null,e)}function st(e){return Ce(e),e.headers=U.from(e.headers),e.data=_e.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qt.getAdapter(e.adapter||Ne.adapter)(e).then(function(r){return Ce(e),r.data=_e.call(e,e.transformResponse,r),r.headers=U.from(r.headers),r},function(r){return et(r)||(Ce(e),r&&r.response&&(r.response.data=_e.call(e,e.transformResponse,r.response),r.response.headers=U.from(r.response.headers))),Promise.reject(r)})}const it=e=>e instanceof U?e.toJSON():e;function $(e,t){t=t||{};const n={};function r(l,h,y){return a.isPlainObject(l)&&a.isPlainObject(h)?a.merge.call({caseless:y},l,h):a.isPlainObject(h)?a.merge({},h):a.isArray(h)?h.slice():h}function s(l,h,y){if(a.isUndefined(h)){if(!a.isUndefined(l))return r(void 0,l,y)}else return r(l,h,y)}function i(l,h){if(!a.isUndefined(h))return r(void 0,h)}function o(l,h){if(a.isUndefined(h)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function u(l,h,y){if(y in t)return r(l,h);if(y in e)return r(void 0,l)}const m={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(l,h)=>s(it(l),it(h),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(h){const y=m[h]||s,g=y(e[h],t[h],h);a.isUndefined(g)&&y!==u||(n[h]=g)}),n}const ot="1.4.0",Fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const at={};Fe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ot+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new S(s(o," has been removed"+(n?" in "+n:"")),S.ERR_DEPRECATED);return n&&!at[o]&&(at[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function en(e,t,n){if(typeof e!="object")throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],m=u===void 0||o(u,i,e);if(m!==!0)throw new S("option "+i+" must be "+m,S.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new S("Unknown option "+i,S.ERR_BAD_OPTION)}}var Be={assertOptions:en,validators:Fe};const j=Be.validators;class de{constructor(t){this.defaults=t,this.interceptors={request:new Xe,response:new Xe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=$(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Be.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Be.assertOptions(s,{encode:j.function,serialize:j.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=U.concat(o,i);const u=[];let m=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(m=m&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let h,y=0,g;if(!m){const p=[st.bind(this),void 0];for(p.unshift.apply(p,u),p.push.apply(p,l),g=p.length,h=Promise.resolve(n);y<g;)h=h.then(p[y++],p[y++]);return h}g=u.length;let R=n;for(y=0;y<g;){const p=u[y++],w=u[y++];try{R=p(R)}catch(k){w.call(this,k);break}}try{h=st.call(this,R)}catch(p){return Promise.reject(p)}for(y=0,g=l.length;y<g;)h=h.then(l[y++],l[y++]);return h}getUri(t){t=$(this.defaults,t);const n=nt(t.baseURL,t.url);return Ge(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){de.prototype[t]=function(n,r){return this.request($(r||{},{method:t,url:n,data:(r||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request($(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}de.prototype[t]=n(),de.prototype[t+"Form"]=n(!0)});var he=de;class De{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new ue(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new De(function(s){t=s}),cancel:t}}}var tn=De;function nn(e){return function(n){return e.apply(null,n)}}function rn(e){return a.isObject(e)&&e.isAxiosError===!0}const Le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Le).forEach(([e,t])=>{Le[t]=e});var sn=Le;function ct(e){const t=new he(e),n=N(he.prototype.request,t);return a.extend(n,he.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ct($(e,s))},n}const A=ct(Ne);A.Axios=he,A.CanceledError=ue,A.CancelToken=tn,A.isCancel=et,A.VERSION=ot,A.toFormData=oe,A.AxiosError=S,A.Cancel=A.CanceledError,A.all=function(t){return Promise.all(t)},A.spread=nn,A.isAxiosError=rn,A.mergeConfig=$,A.AxiosHeaders=U,A.formToJSON=e=>Ye(a.isHTMLForm(e)?new FormData(e):e),A.HttpStatusCode=sn,A.default=A;var on=A},22275:function(L,z,F){"use strict";F.d(z,{Z:function(){return Re}});var N=F(80829);const me={};function X(c,d){const f=d||me,E=typeof f.includeImageAlt=="boolean"?f.includeImageAlt:!0,b=typeof f.includeHtml=="boolean"?f.includeHtml:!0;return H(c,E,b)}function H(c,d,f){if(J(c)){if("value"in c)return c.type==="html"&&!f?"":c.value;if(d&&"alt"in c&&c.alt)return c.alt;if("children"in c)return P(c.children,d,f)}return Array.isArray(c)?P(c,d,f):""}function P(c,d,f){const E=[];let b=-1;for(;++b<c.length;)E[b]=H(c[b],d,f);return E.join("")}function J(c){return Boolean(c&&typeof c=="object")}var I=F(40036);const v=function c(d,f,E,b,O){const _=Z(f);if(E!=null&&(typeof E!="number"||E<0||E===Number.POSITIVE_INFINITY))throw new Error("Expected positive finite index");if(b!=null&&(!c(b)||!b.children))throw new Error("Expected parent node");if(b==null!=(E==null))throw new Error("Expected both parent and index");return d&&d.type&&typeof d.type=="string"?Boolean(_.call(O,d,E,b)):!1},Z=function(c){if(c==null)return re;if(typeof c=="string")return Ee(c);if(typeof c=="object")return Array.isArray(c)?ne(c):ye(c);if(typeof c=="function")return x(c);throw new Error("Expected function, string, or object as test")};function ne(c){const d=[];let f=-1;for(;++f<c.length;)d[f]=Z(c[f]);return x(E);function E(...b){let O=-1;for(;++O<d.length;)if(d[O].call(this,...b))return!0;return!1}}function ye(c){return x(d);function d(f){let E;for(E in c)if(f[E]!==c[E])return!1;return!0}}function Ee(c){return x(d);function d(f){return f&&f.type===c}}function x(c){return d;function d(f,...E){return Boolean(f&&typeof f=="object"&&"type"in f&&Boolean(c.call(this,f,...E)))}}function re(){return!0}function M(c){return new RegExp("^("+c+")$","i")}const se=new N.Z;function V(c,d,f){const E=f.skip?M(f.skip):void 0,b=Z(f.parents||(C=>C===c)),O=[];let _,T,Q;return se.reset(),(0,I.Vn)(c,"heading",(C,W,Oe)=>{const ee=X(C,{includeImageAlt:!1}),Ae=C.data&&C.data.hProperties&&C.data.hProperties.id,ge=se.slug(Ae||ee);if(!!b(Oe)){if(W!==null&&d&&!_&&d.test(ee)){_=W+1,Q=C;return}W!==null&&Q&&!T&&C.depth<=Q.depth&&(T=W),(T||!d)&&(!f.maxDepth||C.depth<=f.maxDepth)&&(!E||!E.test(ee))&&O.push({depth:C.depth,children:C.children,id:ge})}}),{index:_===void 0?-1:_,endIndex:_===void 0?-1:T||c.children.length,map:O}}var ie=F(94470);function we(c,d){const{ordered:f=!1,tight:E=!1,prefix:b=null}=d,O={type:"list",ordered:f,spread:!1,children:[]};let _=Number.POSITIVE_INFINITY,T=-1;for(;++T<c.length;)c[T].depth<_&&(_=c[T].depth);for(T=-1;++T<c.length;)c[T].depth-=_-1;for(T=-1;++T<c.length;)q(c[T],O,{ordered:f,tight:E,prefix:b});return O}function q(c,d,f){let E=-1;const b=d.children[d.children.length-1];if(d.type==="list")if(c.depth===1)d.children.push({type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#"+(f.prefix||"")+c.id,children:Y(c.children)}]}]});else if(d.children.length>0){const O=d.children[d.children.length-1];q(c,O,f)}else{const O={type:"listItem",spread:!1,children:[]};d.children.push(O),q(c,O,f)}else if(b&&b.type==="list")c.depth--,q(c,b,f);else{const O={type:"list",ordered:f.ordered,spread:!1,children:[]};d.children.push(O),c.depth--,q(c,O,f)}if(d.type==="list"&&!f.tight){for(d.spread=!1;++E<d.children.length;)if(d.children[E].children.length>1){d.spread=!0;break}}else d.spread=!f.tight}function Y(c){let d=[],f=-1;if(c)for(;++f<c.length;)d=d.concat(be(c[f]));return d}function be(c){if(c.type==="footnoteReference")return[];if(c.type==="link"||c.type==="linkReference"||c.type==="footnote")return Y(c.children);if("children"in c){const{children:E,position:b}=c,O=Ue(c,["children","position"]);return Object.assign(ie(!0,{},O),{children:Y(c.children)})}const{position:d}=c,f=Ue(c,["position"]);return ie(!0,{},f)}function Se(c,d){const f=d||{},E=f.heading?M(f.heading):void 0,b=V(c,E,f);return{index:E?b.index:null,endIndex:E?b.endIndex:null,map:b.map.length>0?we(b.map,f):null}}function Re(c={}){return d=>{const f=Se(d,Object.assign({},c,{heading:c.heading||"toc|table[ -]of[ -]contents?"}));f.endIndex===null||f.index===null||f.index===-1||!f.map||(d.children=[...d.children.slice(0,f.index),f.map,...d.children.slice(f.endIndex)])}}}}]);