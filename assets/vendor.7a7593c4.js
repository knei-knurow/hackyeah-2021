var rp=Object.defineProperty;var Tu=Object.getOwnPropertySymbols;var op=Object.prototype.hasOwnProperty,ap=Object.prototype.propertyIsEnumerable;var Su=(t,e,n)=>e in t?rp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,We=(t,e)=>{for(var n in e||(e={}))op.call(e,n)&&Su(t,n,e[n]);if(Tu)for(var n of Tu(e))ap.call(e,n)&&Su(t,n,e[n]);return t};function Nt(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function lp(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Cu(t){return t()}function Lu(){return Object.create(null)}function Xe(t){t.forEach(Cu)}function Ue(t){return typeof t=="function"}function Oe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function up(t){return Object.keys(t).length===0}function cp(t,...e){if(t==null)return Nt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function si(t,e,n){t.$$.on_destroy.push(cp(e,n))}function de(t,e,n,i){if(t){const s=Ou(t,e,n,i);return t[0](s)}}function Ou(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function fe(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function he(t,e,n,i,s,r){if(s){const a=Ou(e,n,i,r);t.p(a,s)}}function me(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Re(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Q(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function wu(t){const e={};for(const n in t)e[n]=!0;return e}function Un(t,e,n){return t.set(n),e}function $(t){return t&&Ue(t.destroy)?t.destroy:Nt}function Qe(t,e){t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function kT(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ye(t){return document.createElement(t)}function lr(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fn(t){return document.createTextNode(t)}function Je(){return fn(" ")}function kt(){return fn("")}function Te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function dp(t){return function(e){return e.preventDefault(),t.call(this,e)}}function fp(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:rt(t,i,e[i])}function Ru(t,e){for(const n in e)rt(t,n,e[n])}function hp(t){return Array.from(t.childNodes)}function Cn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ku(t,e){t.value=e==null?"":e}function DT(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}let ur;function Vn(t){ur=t}function Se(){if(!ur)throw new Error("Function called outside component initialization");return ur}function Bt(t){Se().$$.on_mount.push(t)}function hn(t){Se().$$.on_destroy.push(t)}function et(t,e){Se().$$.context.set(t,e)}function gt(t){return Se().$$.context.get(t)}function ri(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ds=[],ie=[],cr=[],da=[],Du=Promise.resolve();let fa=!1;function Mu(){fa||(fa=!0,Du.then(ga))}function mp(){return Mu(),Du}function ha(t){cr.push(t)}function vn(t){da.push(t)}let ma=!1;const pa=new Set;function ga(){if(!ma){ma=!0;do{for(let t=0;t<ds.length;t+=1){const e=ds[t];Vn(e),pp(e.$$)}for(Vn(null),ds.length=0;ie.length;)ie.pop()();for(let t=0;t<cr.length;t+=1){const e=cr[t];pa.has(e)||(pa.add(e),e())}cr.length=0}while(ds.length);for(;da.length;)da.pop()();fa=!1,ma=!1,pa.clear()}}function pp(t){if(t.fragment!==null){t.update(),Xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ha)}}const dr=new Set;let oi;function ft(){oi={r:0,c:[],p:oi}}function ht(){oi.r||Xe(oi.c),oi=oi.p}function w(t,e){t&&t.i&&(dr.delete(t),t.i(e))}function N(t,e,n,i){if(t&&t.o){if(dr.has(t))return;dr.add(t),oi.c.push(()=>{dr.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function MT(t,e){const n=e.token={};function i(s,r,a,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=s&&(e.current=s)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((d,f)=>{f!==r&&d&&(ft(),N(d,1,1,()=>{e.blocks[f]===d&&(e.blocks[f]=null)}),ht())}):e.block.d(1),c.c(),w(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&ga()}if(lp(t)){const s=Se();if(t.then(r=>{Vn(s),i(e.then,1,e.value,r),Vn(null)},r=>{if(Vn(s),i(e.catch,2,e.error,r),Vn(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function NT(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const _a=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function PT(t,e){N(t,1,1,()=>{e.delete(t.key)})}function FT(t,e,n,i,s,r,a,o,l,c,u,d){let f=t.length,h=r.length,m=f;const g={};for(;m--;)g[t[m].key]=m;const p=[],E=new Map,b=new Map;for(m=h;m--;){const k=d(s,r,m),y=n(k);let T=a.get(y);T?i&&T.p(k,e):(T=c(y,k),T.c()),E.set(y,p[m]=T),y in g&&b.set(y,Math.abs(m-g[y]))}const S=new Set,O=new Set;function R(k){w(k,1),k.m(o,u),a.set(k.key,k),u=k.first,h--}for(;f&&h;){const k=p[h-1],y=t[f-1],T=k.key,M=y.key;k===y?(u=k.first,f--,h--):E.has(M)?!a.has(T)||S.has(T)?R(k):O.has(M)?f--:b.get(T)>b.get(M)?(O.add(T),R(k)):(S.add(M),f--):(l(y,a),f--)}for(;f--;){const k=t[f];E.has(k.key)||l(k,a)}for(;h;)R(p[h-1]);return p}function ae(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const a=t[r],o=e[r];if(o){for(const l in a)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[r]=o}else for(const l in a)s[l]=1}for(const a in i)a in n||(n[a]=void 0);return n}function ze(t){return typeof t=="object"&&t!==null?t:{}}function In(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ge(t){t&&t.c()}function Ve(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:o}=t.$$;s&&s.m(e,n),i||ha(()=>{const l=r.map(Cu).filter(Ue);a?a.push(...l):Xe(l),t.$$.on_mount=[]}),o.forEach(ha)}function Be(t,e){const n=t.$$;n.fragment!==null&&(Xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gp(t,e){t.$$.dirty[0]===-1&&(ds.push(t),Mu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,s,r,a,o=[-1]){const l=ur;Vn(t);const c=t.$$={fragment:null,ctx:null,props:r,update:Nt,not_equal:s,bound:Lu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Lu(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,f,...h)=>{const m=h.length?h[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=m)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](m),u&&gp(t,d)),f}):[],c.update(),u=!0,Xe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=hp(e.target);c.fragment&&c.fragment.l(d),d.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&w(t.$$.fragment),Ve(t,e.target,e.anchor,e.customElement),ga()}Vn(l)}class De{$destroy(){Be(this,1),this.$destroy=Nt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!up(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Di=[];function _p(t,e){return{subscribe:Mi(t,e).subscribe}}function Mi(t,e=Nt){let n;const i=new Set;function s(o){if(Oe(t,o)&&(t=o,n)){const l=!Di.length;for(const c of i)c[1](),Di.push(c,t);if(l){for(let c=0;c<Di.length;c+=2)Di[c][0](Di[c+1]);Di.length=0}}}function r(o){s(o(t))}function a(o,l=Nt){const c=[o,l];return i.add(c),i.size===1&&(n=e(s)||Nt),o(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:a}}try{self["workbox:window:6.4.1"]&&_()}catch{}function Nu(t,e){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[i.port2])})}function yp(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function vp(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,r){if(s){if(typeof s=="string")return Pu(s,r);var a=Object.prototype.toString.call(s).slice(8,-1);return a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set"?Array.from(s):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Pu(s,r):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.4.1"]&&_()}catch{}var ya=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function va(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var fs=function(t,e){this.type=t,Object.assign(this,e)};function fr(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Ip(){}var Ep={type:"SKIP_WAITING"};function Fu(t,e){if(!e)return t&&t.then?t.then(Ip):Promise.resolve()}var UT=function(t){var e,n;function i(o,l){var c,u;return l===void 0&&(l={}),(c=t.call(this)||this).nn={},c.tn=0,c.rn=new ya,c.en=new ya,c.on=new ya,c.un=0,c.an=new Set,c.cn=function(){var d=c.fn,f=d.installing;c.tn>0||!va(f.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=f,d.removeEventListener("updatefound",c.cn)):(c.hn=f,c.an.add(f),c.rn.resolve(f)),++c.tn,f.addEventListener("statechange",c.ln)},c.ln=function(d){var f=c.fn,h=d.target,m=h.state,g=h===c.vn,p={sw:h,isExternal:g,originalEvent:d};!g&&c.mn&&(p.isUpdate=!0),c.dispatchEvent(new fs(m,p)),m==="installed"?c.wn=self.setTimeout(function(){m==="installed"&&f.waiting===h&&c.dispatchEvent(new fs("waiting",p))},200):m==="activating"&&(clearTimeout(c.wn),g||c.en.resolve(h))},c.dn=function(d){var f=c.hn,h=f!==navigator.serviceWorker.controller;c.dispatchEvent(new fs("controlling",{isExternal:h,originalEvent:d,sw:f,isUpdate:c.mn})),h||c.on.resolve(f)},c.gn=(u=function(d){var f=d.data,h=d.ports,m=d.source;return fr(c.getSW(),function(){c.an.has(m)&&c.dispatchEvent(new fs("message",{data:f,originalEvent:d,ports:h,sw:m}))})},function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];try{return Promise.resolve(u.apply(this,d))}catch(h){return Promise.reject(h)}}),c.sn=o,c.nn=l,navigator.serviceWorker.addEventListener("message",c.gn),c}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,r,a=i.prototype;return a.register=function(o){var l=(o===void 0?{}:o).immediate,c=l!==void 0&&l;try{var u=this;return function(d,f){var h=d();return h&&h.then?h.then(f):f(h)}(function(){if(!c&&document.readyState!=="complete")return Fu(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),fr(u.bn(),function(d){u.fn=d,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var f=u.fn.waiting;return f&&va(f.scriptURL,u.sn.toString())&&(u.hn=f,Promise.resolve().then(function(){u.dispatchEvent(new fs("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(d){return Promise.reject(d)}},a.update=function(){try{return this.fn?Fu(this.fn.update()):void 0}catch(o){return Promise.reject(o)}},a.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},a.messageSW=function(o){try{return fr(this.getSW(),function(l){return Nu(l,o)})}catch(l){return Promise.reject(l)}},a.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Nu(this.fn.waiting,Ep)},a.pn=function(){var o=navigator.serviceWorker.controller;return o&&va(o.scriptURL,this.sn.toString())?o:void 0},a.bn=function(){try{var o=this;return function(l,c){try{var u=l()}catch(d){return c(d)}return u&&u.then?u.then(void 0,c):u}(function(){return fr(navigator.serviceWorker.register(o.sn,o.nn),function(l){return o.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},s=i,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&yp(s.prototype,r),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,i){this.Sn(n).add(i)},e.removeEventListener=function(n,i){this.Sn(n).delete(i)},e.dispatchEvent=function(n){n.target=this;for(var i,s=vp(this.Sn(n.type));!(i=s()).done;)(0,i.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ia=function(t,e){return Ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Ia(t,e)};function Dt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ia(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var nt=function(){return nt=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nt.apply(this,arguments)};function Ea(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ln(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qt=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ba="mdc-dom-focus-sentinel",bp=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+ba)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(ba)&&!s,a=!1;if(r){var o=getComputedStyle(i);a=o.display==="none"||o.visibility==="hidden"}return r&&!a})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(ba),e},t}(),Uu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:bp});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ap(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Vu(n,e))return n;n=n.parentElement}return null}function Vu(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function Tp(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:Ap,matches:Vu,estimateScrollWidth:Tp});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Bn,On,He={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Bn={},Bn[""+He.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Bn[""+He.LIST_ITEM_CLASS]="mdc-list-item",Bn[""+He.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Bn[""+He.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Bn[""+He.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Bn[""+He.ROOT]="mdc-list";var Ni=(On={},On[""+He.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",On[""+He.LIST_ITEM_CLASS]="mdc-deprecated-list-item",On[""+He.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",On[""+He.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",On[""+He.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",On[""+He.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",On[""+He.ROOT]="mdc-deprecated-list",On),Hn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+He.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` a,
    .`+Ni[He.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ni[He.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+He.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` a,
    .`+He.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ni[He.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ni[He.LIST_ITEM_CLASS]+` a,
    .`+Ni[He.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ni[He.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Mt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var je={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Jt=new Set;Jt.add(je.BACKSPACE);Jt.add(je.ENTER);Jt.add(je.SPACEBAR);Jt.add(je.PAGE_UP);Jt.add(je.PAGE_DOWN);Jt.add(je.END);Jt.add(je.HOME);Jt.add(je.ARROW_LEFT);Jt.add(je.ARROW_UP);Jt.add(je.ARROW_RIGHT);Jt.add(je.ARROW_DOWN);Jt.add(je.DELETE);Jt.add(je.ESCAPE);Jt.add(je.TAB);var tn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Zt=new Map;Zt.set(tn.BACKSPACE,je.BACKSPACE);Zt.set(tn.ENTER,je.ENTER);Zt.set(tn.SPACEBAR,je.SPACEBAR);Zt.set(tn.PAGE_UP,je.PAGE_UP);Zt.set(tn.PAGE_DOWN,je.PAGE_DOWN);Zt.set(tn.END,je.END);Zt.set(tn.HOME,je.HOME);Zt.set(tn.ARROW_LEFT,je.ARROW_LEFT);Zt.set(tn.ARROW_UP,je.ARROW_UP);Zt.set(tn.ARROW_RIGHT,je.ARROW_RIGHT);Zt.set(tn.ARROW_DOWN,je.ARROW_DOWN);Zt.set(tn.DELETE,je.DELETE);Zt.set(tn.ESCAPE,je.ESCAPE);Zt.set(tn.TAB,je.TAB);var jn=new Set;jn.add(je.PAGE_UP);jn.add(je.PAGE_DOWN);jn.add(je.END);jn.add(je.HOME);jn.add(je.ARROW_LEFT);jn.add(je.ARROW_UP);jn.add(je.ARROW_RIGHT);jn.add(je.ARROW_DOWN);function Ct(t){var e=t.key;if(Jt.has(e))return e;var n=Zt.get(t.keyCode);return n||je.UNKNOWN}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Sp=["input","button","textarea","select"],ai=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();Sp.indexOf(n)===-1&&t.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Cp(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function Lp(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(a){a.sort(function(o,l){return o.index-l.index})}),n}function Aa(t,e){var n=t.nextChar,i=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,r=t.focusedItemIndex,a=t.skipFocus,o=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Hu(e)},Mt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=Op(s,r,o,e):l=wp(s,o,e),l!==-1&&!a&&i(l),l}function Op(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var a=r[i.sortedIndexCursor].index;if(!n(a))return a}i.currentFirstChar=s;var o=-1,l;for(l=0;l<r.length;l++)if(!n(r[l].index)){o=l;break}for(;l<r.length;l++)if(r[l].index>e&&!n(r[l].index)){o=l;break}return o!==-1?(i.sortedIndexCursor=o,r[i.sortedIndexCursor].index):-1}function wp(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(r.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(n.sortedIndexCursor+1)%s.length,o=-1;a!==n.sortedIndexCursor;){var l=s[a],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){o=a;break}a=(a+1)%s.length}return o!==-1?(n.sortedIndexCursor=o,s[n.sortedIndexCursor].index):-1}function Bu(t){return t.typeaheadBuffer.length>0}function Hu(t){t.typeaheadBuffer=""}function ju(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,o=t.isItemAtIndexDisabled,l=Ct(n)==="ArrowLeft",c=Ct(n)==="ArrowUp",u=Ct(n)==="ArrowRight",d=Ct(n)==="ArrowDown",f=Ct(n)==="Home",h=Ct(n)==="End",m=Ct(n)==="Enter",g=Ct(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||d||f||h||m)return-1;var p=!g&&n.key.length===1;if(p){ai(n);var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return Aa(E,e)}if(!g)return-1;i&&ai(n);var b=i&&Bu(e);if(b){var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return Aa(E,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Rp(t){return t instanceof Array}var kp=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Mt.UNSET_INDEX,i.focusedItemIndex=Mt.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=Cp(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Hn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Mt.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,He.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Mt.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,He.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(s,He.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||a)){n=s;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Bu(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:r}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,s){var r=this,a=Ct(n)==="ArrowLeft",o=Ct(n)==="ArrowUp",l=Ct(n)==="ArrowRight",c=Ct(n)==="ArrowDown",u=Ct(n)==="Home",d=Ct(n)==="End",f=Ct(n)==="Enter",h=Ct(n)==="Spacebar",m=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(o||d?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(b){r.focusItemAtIndex(b)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(b){return r.adapter.listItemAtIndexHasClass(b,He.LIST_ITEM_DISABLED_CLASS)}};ju(g,this.typeaheadState)}return}var p=this.adapter.getFocusedElementIndex();if(!(p===-1&&(p=s,p<0))){if(this.isVertical&&c||!this.isVertical&&l)ai(n),this.focusNextElement(p);else if(this.isVertical&&o||!this.isVertical&&a)ai(n),this.focusPrevElement(p);else if(u)ai(n),this.focusFirstElement();else if(d)ai(n),this.focusLastElement();else if(m&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Mt.UNSET_INDEX?[]:this.selectedIndex);else if((f||h)&&i){var E=n.target;if(E&&E.tagName==="A"&&f||(ai(n),this.adapter.listItemAtIndexHasClass(p,He.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(p),this.adapter.notifyAction(p))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,He.LIST_ITEM_DISABLED_CLASS)}};ju(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Mt.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,He.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),s=n+1;if(s>=i)if(this.wrapFocus)s=0;else return n;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Hn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Hn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===n&&!r)){var a=He.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=He.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Mt.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,a),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Mt.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Hn.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?Hn.ARIA_CURRENT:Hn.ARIA_SELECTED;if(this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),n!==Mt.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Hn.ARIA_SELECTED:Hn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;n.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Mt.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Mt.UNSET_INDEX?this.selectedIndex:Rp(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(s){return i.isIndexInRange(s)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Mt.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(n);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r)),this.adapter.setAttributeForElementIndex(n,s,r?"true":"false");var a=this.selectedIndex===Mt.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(n):a=a.filter(function(o){return o!==n}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,He.LIST_ITEM_DISABLED_CLASS)||n.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(n,i,s){var r=this;s===void 0&&(s=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,He.LIST_ITEM_DISABLED_CLASS)}};return Aa(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Lp(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Hu(this.typeaheadState)},e}(Qt);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Dp={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qu=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return Dp},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return nn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(nn.OPEN),this.adapter.addClass(nn.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(nn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(nn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(nn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(nn.OPENING)||this.adapter.hasClass(nn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(nn.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=nn.OPENING,s=nn.CLOSING,r=nn.OPEN,a=nn.ANIMATE,o=nn.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,o);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mp=function(t){Dt(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(qu);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Np(t){return t===void 0&&(t=window),Pp(t)?{passive:!0}:!1}function Pp(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var zu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:Np});function ee(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function $e(t,e,n,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(a),a.defaultPrevented&&r.preventDefault()}return r}}function qn(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],a=r.indexOf("$");a!==-1&&e.indexOf(r.substring(0,a+1))!==-1||e.indexOf(r)===-1&&(i[r]=t[r])}return i}const Gu=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Fp=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function qe(t){let e,n=[];t.$on=(s,r)=>{let a=s,o=()=>{};return e?o=e(a,r):n.push([a,r]),a.match(Gu)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),(...c)=>{o()}};function i(s){ri(t,s)}return s=>{const r=[],a={};e=(o,l)=>{let c=o,u=l,d=!1;const f=c.match(Gu),h=c.match(Fp),m=f||h;if(c.match(/^SMUI:\w+:/)){const E=c.split(":");let b="";for(let S=0;S<E.length;S++)b+=S===E.length-1?":"+E[S]:E[S].split("-").map(O=>O.slice(0,1).toUpperCase()+O.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${b.split("$")[0]}.`),c=b}if(m){const E=c.split(f?":":"$");c=E[0];const b=Object.fromEntries(E.slice(1).map(S=>[S,!0]));b.passive&&(d=d||{},d.passive=!0),b.nonpassive&&(d=d||{},d.passive=!1),b.capture&&(d=d||{},d.capture=!0),b.once&&(d=d||{},d.once=!0),b.preventDefault&&(u=dp(u)),b.stopPropagation&&(u=fp(u))}const g=Te(s,c,u,d),p=()=>{g();const E=r.indexOf(p);E>-1&&r.splice(E,1)};return r.push(p),c in a||(a[c]=Te(s,c,i)),p};for(let o=0;o<n.length;o++)e(n[o][0],n[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(a))o[1]()}}}}function Me(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function Ze(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=n[s];if(r&&r.update){const a=i[s];Array.isArray(a)&&a.length>1?r.update(a[1]):r.update()}}},destroy(){for(let i=0;i<n.length;i++){const s=n[i];s&&s.destroy&&s.destroy()}}}}function Up(t){let e,n,i,s,r,a;const o=t[15].default,l=de(o,t,t[14],null);let c=[{class:n=ee(We({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("aside"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[16](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[7].call(null,e)),Te(e,"keydown",t[17]),Te(e,"transitionend",t[18])],r=!0)},p(d,[f]){l&&l.p&&(!s||f&16384)&&he(l,o,d,d[14],s?fe(o,d[14],f,null):me(d[14]),null),Z(e,u=ae(c,[(!s||f&78&&n!==(n=ee(We({[d[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":d[2]==="dismissible","mdc-drawer--modal":d[2]==="modal","smui-drawer__absolute":d[2]==="modal"&&!d[3]},d[6]))))&&{class:n},f&256&&d[8]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(w(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[16](null),r=!1,Xe(a)}}}function Vp(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const{FocusTrap:o}=Uu,l=qe(Se());let{use:c=[]}=e,{class:u=""}=e,{variant:d=void 0}=e,{open:f=!1}=e,{fixed:h=!0}=e,m,g,p={},E=null,b,S=!1;et("SMUI:list:nav",!0),et("SMUI:list:item:nav",!0),et("SMUI:list:wrapFocus",!0);let O=d;Bt(()=>{b=new o(m,{skipInitialFocus:!0}),n(4,g=R()),g&&g.init()}),hn(()=>{g&&g.destroy(),S&&S.removeEventListener("SMUIDrawerScrim:click",M)});function R(){var W,G;S&&S.removeEventListener("SMUIDrawerScrim:click",M),d==="modal"&&(S=(G=(W=m.parentNode)===null||W===void 0?void 0:W.querySelector(".mdc-drawer-scrim"))!==null&&G!==void 0?G:!1,S&&S.addEventListener("SMUIDrawerScrim:click",M));const J=d==="dismissible"?qu:d==="modal"?Mp:void 0;return J?new J({addClass:y,removeClass:T,hasClass:k,elementHasClass:(be,re)=>be.classList.contains(re),saveFocus:()=>E=document.activeElement,restoreFocus:()=>{E&&"focus"in E&&m.contains(document.activeElement)&&E.focus()},focusActiveNavigationItem:()=>{const be=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");be&&be.focus()},notifyClose:()=>{n(9,f=!1),$e(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,f=!0),$e(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>b.trapFocus(),releaseFocus:()=>b.releaseFocus()}):void 0}function k(W){return W in p?p[W]:j().classList.contains(W)}function y(W){p[W]||n(6,p[W]=!0,p)}function T(W){(!(W in p)||p[W])&&n(6,p[W]=!1,p)}function M(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function v(W){n(9,f=W)}function I(){return f}function j(){return m}function A(W){ie[W?"unshift":"push"](()=>{m=W,n(5,m)})}const V=W=>g&&g.handleKeydown(W),F=W=>g&&g.handleTransitionEnd(W);return t.$$set=W=>{e=D(D({},e),Re(W)),n(8,s=Q(e,i)),"use"in W&&n(0,c=W.use),"class"in W&&n(1,u=W.class),"variant"in W&&n(2,d=W.variant),"open"in W&&n(9,f=W.open),"fixed"in W&&n(3,h=W.fixed),"$$scope"in W&&n(14,a=W.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&O!==d&&(n(13,O=d),g&&g.destroy(),n(6,p={}),n(4,g=R()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==f&&(f?g.open():g.close())},[c,u,d,h,g,m,p,l,s,f,v,I,j,O,a,r,A,V,F]}class VT extends De{constructor(e){super();ke(this,e,Vp,Up,Oe,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Bp(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("div"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function Hp(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Wu extends De{constructor(e){super();ke(this,e,Hp,Bp,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function jp(t){let e;const n=t[10].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function qp(t){let e,n,i;const s=[{use:[t[7],...t[0]]},{class:ee(We({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var r=t[2];function a(o){let l={$$slots:{default:[jp]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[11](e)),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&499?ae(s,[l&129&&{use:[o[7],...o[0]]},l&50&&{class:ee(We({[o[1]]:!0,[o[5]]:!0},o[4]))},l&64&&ze(o[6]),l&256&&ze(o[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[2])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[11](e),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[11](null),o&&X(n),e&&Be(e,o)}}}const zn={component:Wu,class:"",classMap:{},contexts:{},props:{}};function zp(t,e,n){const i=["use","class","component","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:l=""}=e,c;const u=zn.class,d={},f=[],h=zn.contexts,m=zn.props;let{component:g=zn.component}=e;Object.entries(zn.classMap).forEach(([S,O])=>{const R=gt(O);R&&"subscribe"in R&&f.push(R.subscribe(k=>{n(4,d[S]=k,d)}))});const p=qe(Se());for(let S in h)h.hasOwnProperty(S)&&et(S,h[S]);hn(()=>{for(const S of f)S()});function E(){return c.getElement()}function b(S){ie[S?"unshift":"push"](()=>{c=S,n(3,c)})}return t.$$set=S=>{e=D(D({},e),Re(S)),n(8,s=Q(e,i)),"use"in S&&n(0,o=S.use),"class"in S&&n(1,l=S.class),"component"in S&&n(2,g=S.component),"$$scope"in S&&n(12,a=S.$$scope)},[o,l,g,c,d,u,m,p,s,E,r,b,a]}class Gp extends De{constructor(e){super();ke(this,e,zp,qp,Oe,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Ku=Object.assign({},zn);function vt(t){return new Proxy(Gp,{construct:function(e,n){return Object.assign(zn,Ku,t),new e(...n)},get:function(e,n){return Object.assign(zn,Ku,t),e[n]}})}function Wp(t){let e,n,i,s,r;const a=t[7].default,o=de(a,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("a"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[8](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[3].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&64)&&he(o,a,u,u[6],i?fe(a,u[6],d,null):me(u[6]),null),Z(e,c=ae(l,[(!i||d&2)&&{href:u[1]},d&16&&u[4]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[8](null),s=!1,Xe(r)}}}function Kp(t,e,n){const i=["use","href","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{href:l="javascript:void(0);"}=e;const c=qe(Se());let u;function d(){return u}function f(h){ie[h?"unshift":"push"](()=>{u=h,n(2,u)})}return t.$$set=h=>{e=D(D({},e),Re(h)),n(4,s=Q(e,i)),"use"in h&&n(0,o=h.use),"href"in h&&n(1,l=h.href),"$$scope"in h&&n(6,a=h.$$scope)},[o,l,u,c,s,d,a,r,f]}class Xp extends De{constructor(e){super();ke(this,e,Kp,Wp,Oe,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function Yp(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("button"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function Qp(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Jp extends De{constructor(e){super();ke(this,e,Qp,Yp,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Zp(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h1"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function xp(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class $p extends De{constructor(e){super();ke(this,e,xp,Zp,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function eg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h2"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function tg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class ng extends De{constructor(e){super();ke(this,e,tg,eg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function ig(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h3"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function sg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class rg extends De{constructor(e){super();ke(this,e,sg,ig,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function og(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h5"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function ag(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class lg extends De{constructor(e){super();ke(this,e,ag,og,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function ug(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h6"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function cg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class dg extends De{constructor(e){super();ke(this,e,cg,ug,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function fg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("i"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function hg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class mg extends De{constructor(e){super();ke(this,e,hg,fg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function pg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("li"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function gg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class _g extends De{constructor(e){super();ke(this,e,gg,pg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function yg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("nav"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function vg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Ig extends De{constructor(e){super();ke(this,e,vg,yg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Eg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("span"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function bg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Xu extends De{constructor(e){super();ke(this,e,bg,Eg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Ag(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=lr("svg"),o&&o.c(),Ru(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Ru(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function Tg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Yu extends De{constructor(e){super();ke(this,e,Tg,Ag,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Sg(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("ul"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(w(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function Cg(t,e,n){const i=["use","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),Re(f)),n(3,s=Q(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Lg extends De{constructor(e){super();ke(this,e,Cg,Sg,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const mr=Xp,Ta=Jp,mn=Wu,Og=$p,Qu=ng,wg=rg,Rg=lg,kg=dg,Dg=_g,Mg=Ig,Gn=Xu,Ng=Lg;var BT=vt({class:"mdc-drawer-app-content",component:mn}),HT=vt({class:"mdc-drawer__content",component:mn}),jT=vt({class:"mdc-drawer__header",component:mn}),qT=vt({class:"mdc-drawer__title",component:Og}),zT=vt({class:"mdc-drawer__subtitle",component:Qu});function Pg(t){let e;const n=t[8].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Fg(t){let e,n,i;const s=[{use:[t[6],...t[0]]},{class:ee({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},t[7]];var r=t[3];function a(o){let l={$$slots:{default:[Pg]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[9](e),e.$on("click",t[10])),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&199?ae(s,[l&65&&{use:[o[6],...o[0]]},l&6&&{class:ee({[o[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!o[2]})},l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[3])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[9](e),e.$on("click",o[10]),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[9](null),o&&X(n),e&&Be(e,o)}}}function Ug(t,e,n){const i=["use","class","fixed","component","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{fixed:u=!0}=e,d,{component:f=mn}=e;function h(){return d.getElement()}function m(p){ie[p?"unshift":"push"](()=>{d=p,n(5,d)})}const g=p=>$e(h(),"SMUIDrawerScrim:click",p);return t.$$set=p=>{e=D(D({},e),Re(p)),n(7,s=Q(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"fixed"in p&&n(2,u=p.fixed),"component"in p&&n(3,f=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,u,f,h,d,o,s,r,m,g,a]}class Vg extends De{constructor(e){super();ke(this,e,Ug,Fg,Oe,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}}const GT=Vg;function Bg(t){let e;const n=t[37].default,i=de(n,t,t[43],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&he(i,n,s,s[43],e?fe(n,s[43],r,null):me(s[43]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Hg(t){let e,n,i;const s=[{use:[t[17],...t[0]]},{class:ee({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var r=t[12];function a(o){let l={$$slots:{default:[Bg]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&8818687?ae(s,[l[0]&131073&&{use:[o[17],...o[0]]},l[0]&266238&&{class:ee({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[18],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},l[0]&32768&&{role:o[15]},l[0]&8388608&&ze(o[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[12])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[38](e),e.$on("keydown",o[39]),e.$on("focusin",o[40]),e.$on("focusout",o[41]),e.$on("click",o[42]),e.$on("SMUIListItem:mount",o[19]),e.$on("SMUIListItem:unmount",o[20]),e.$on("SMUI:action",o[21]),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[38](null),o&&X(n),e&&Be(e,o)}}}function jg(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;var o;const{closest:l,matches:c}=hr,u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{nonInteractive:h=!1}=e,{dense:m=!1}=e,{textualList:g=!1}=e,{avatarList:p=!1}=e,{iconList:E=!1}=e,{imageList:b=!1}=e,{thumbnailList:S=!1}=e,{videoList:O=!1}=e,{twoLine:R=!1}=e,{threeLine:k=!1}=e,{vertical:y=!0}=e,{wrapFocus:T=(o=gt("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:M=!1}=e,{selectedIndex:v=-1}=e,{radioList:I=!1}=e,{checkList:j=!1}=e,{hasTypeahead:A=!1}=e,V,F,W=[],G=gt("SMUI:list:role"),J=gt("SMUI:list:nav");const be=new WeakMap;let re=gt("SMUI:dialog:selection"),Fe=gt("SMUI:addLayoutListener"),ge,{component:st=J?Mg:Ng}=e;et("SMUI:list:nonInteractive",h),et("SMUI:separator:context","list"),G||(M?(G="listbox",et("SMUI:list:item:role","option")):I?(G="radiogroup",et("SMUI:list:item:role","radio")):j?(G="group",et("SMUI:list:item:role","checkbox")):(G="list",et("SMUI:list:item:role",void 0))),Fe&&(ge=Fe(Ye)),Bt(()=>{n(13,F=new kp({addClassForElementIndex:Ee,focusItemAtIndex:q,getAttributeForElementIndex:(ue,ce)=>{var ut,yn;return(yn=(ut=le()[ue])===null||ut===void 0?void 0:ut.getAttr(ce))!==null&&yn!==void 0?yn:null},getFocusedElementIndex:()=>document.activeElement?le().map(ue=>ue.element).indexOf(document.activeElement):-1,getListItemCount:()=>W.length,getPrimaryTextAtIndex:Ke,hasCheckboxAtIndex:ue=>{var ce,ut;return(ut=(ce=le()[ue])===null||ce===void 0?void 0:ce.hasCheckbox)!==null&&ut!==void 0?ut:!1},hasRadioAtIndex:ue=>{var ce,ut;return(ut=(ce=le()[ue])===null||ce===void 0?void 0:ce.hasRadio)!==null&&ut!==void 0?ut:!1},isCheckboxCheckedAtIndex:ue=>{var ce;const ut=le()[ue];return(ce=(ut==null?void 0:ut.hasCheckbox)&&ut.checked)!==null&&ce!==void 0?ce:!1},isFocusInsideList:()=>V!=null&&ve()!==document.activeElement&&ve().contains(document.activeElement),isRootFocused:()=>V!=null&&document.activeElement===ve(),listItemAtIndexHasClass:U,notifyAction:ue=>{n(24,v=ue),V!=null&&$e(ve(),"SMUIList:action",{index:ue},void 0,!0)},removeClassForElementIndex:lt,setAttributeForElementIndex:Rt,setCheckedCheckboxOrRadioAtIndex:(ue,ce)=>{le()[ue].checked=ce},setTabIndexForListItemChildren:(ue,ce)=>{const ut=le()[ue],yn="button:not(:disabled), a";Array.prototype.forEach.call(ut.element.querySelectorAll(yn),ls=>{ls.setAttribute("tabindex",ce)})}}));const B={get element(){return ve()},get items(){return W},get typeaheadInProgress(){return F.isTypeaheadInProgress()},typeaheadMatchItem(ue,ce){return F.typeaheadMatchItem(ue,ce,!0)},getOrderedList:le,focusItemAtIndex:q,addClassForElementIndex:Ee,removeClassForElementIndex:lt,setAttributeForElementIndex:Rt,removeAttributeForElementIndex:z,getAttributeFromElementIndex:pe,getPrimaryTextAtIndex:Ke};return $e(ve(),"SMUIList:mount",B),F.init(),()=>{F.destroy()}}),hn(()=>{ge&&ge()});function x(B){W.push(B.detail),be.set(B.detail.element,B.detail),M&&B.detail.selected&&n(24,v=it(B.detail.element)),B.stopPropagation()}function H(B){var ue;const ce=(ue=B.detail&&W.indexOf(B.detail))!==null&&ue!==void 0?ue:-1;ce!==-1&&(W.splice(ce,1),W=W,be.delete(B.detail.element)),B.stopPropagation()}function Ae(B){if(I||j){const ue=it(B.target);if(ue!==-1){const ce=le()[ue];ce&&(I&&!ce.checked||j)&&(ce.checked=!ce.checked,ce.activateRipple(),window.requestAnimationFrame(()=>{ce.deactivateRipple()}))}}}function le(){return V==null?[]:[...ve().children].map(B=>be.get(B)).filter(B=>B&&B._smui_list_item_accessor)}function q(B){const ue=le()[B];ue&&"focus"in ue.element&&ue.element.focus()}function U(B,ue){var ce;const ut=le()[B];return(ce=ut&&ut.hasClass(ue))!==null&&ce!==void 0?ce:!1}function Ee(B,ue){const ce=le()[B];ce&&ce.addClass(ue)}function lt(B,ue){const ce=le()[B];ce&&ce.removeClass(ue)}function Rt(B,ue,ce){const ut=le()[B];ut&&ut.addAttr(ue,ce)}function z(B,ue){const ce=le()[B];ce&&ce.removeAttr(ue)}function pe(B,ue){const ce=le()[B];return ce?ce.getAttr(ue):null}function Ke(B){var ue;const ce=le()[B];return(ue=ce&&ce.getPrimaryText())!==null&&ue!==void 0?ue:""}function it(B){const ue=l(B,".mdc-deprecated-list-item, .mdc-deprecated-list");return ue&&c(ue,".mdc-deprecated-list-item")?le().map(ce=>ce==null?void 0:ce.element).indexOf(ue):-1}function Ye(){return F.layout()}function Vt(B,ue){return F.setEnabled(B,ue)}function an(){return F.isTypeaheadInProgress()}function At(){return F.getSelectedIndex()}function te(){return F.getFocusedItemIndex()}function ve(){return V.getElement()}function _t(B){ie[B?"unshift":"push"](()=>{V=B,n(14,V)})}const dt=B=>F&&F.handleKeydown(B,B.target.classList.contains("mdc-deprecated-list-item"),it(B.target)),xe=B=>F&&F.handleFocusIn(it(B.target)),P=B=>F&&F.handleFocusOut(it(B.target)),oe=B=>F&&F.handleClick(it(B.target),!c(B.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=B=>{e=D(D({},e),Re(B)),n(23,s=Q(e,i)),"use"in B&&n(0,d=B.use),"class"in B&&n(1,f=B.class),"nonInteractive"in B&&n(2,h=B.nonInteractive),"dense"in B&&n(3,m=B.dense),"textualList"in B&&n(4,g=B.textualList),"avatarList"in B&&n(5,p=B.avatarList),"iconList"in B&&n(6,E=B.iconList),"imageList"in B&&n(7,b=B.imageList),"thumbnailList"in B&&n(8,S=B.thumbnailList),"videoList"in B&&n(9,O=B.videoList),"twoLine"in B&&n(10,R=B.twoLine),"threeLine"in B&&n(11,k=B.threeLine),"vertical"in B&&n(25,y=B.vertical),"wrapFocus"in B&&n(26,T=B.wrapFocus),"singleSelection"in B&&n(27,M=B.singleSelection),"selectedIndex"in B&&n(24,v=B.selectedIndex),"radioList"in B&&n(28,I=B.radioList),"checkList"in B&&n(29,j=B.checkList),"hasTypeahead"in B&&n(30,A=B.hasTypeahead),"component"in B&&n(12,st=B.component),"$$scope"in B&&n(43,a=B.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&F&&F.setVerticalOrientation(y),t.$$.dirty[0]&67117056&&F&&F.setWrapFocus(T),t.$$.dirty[0]&1073750016&&F&&F.setHasTypeahead(A),t.$$.dirty[0]&134225920&&F&&F.setSingleSelection(M),t.$$.dirty[0]&151003136&&F&&M&&At()!==v&&F.setSelectedIndex(v)},[d,f,h,m,g,p,E,b,S,O,R,k,st,F,V,G,c,u,re,x,H,Ae,it,s,v,y,T,M,I,j,A,Ye,Vt,an,At,te,ve,r,_t,dt,xe,P,oe,a]}class qg extends De{constructor(e){super();ke(this,e,jg,Hg,Oe,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}var pr;function zg(t,e){e===void 0&&(e=!1);var n=t.CSS,i=pr;if(typeof pr=="boolean"&&!e)return pr;var s=n&&typeof n.supports=="function";if(!s)return!1;var r=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||a,e||(pr=i),i}function Gg(t,e,n){if(!t)return{x:0,y:0};var i=e.x,s=e.y,r=i+n.left,a=s+n.top,o,l;if(t.type==="touchstart"){var c=t;o=c.changedTouches[0].pageX-r,l=c.changedTouches[0].pageY-a}else{var u=t;o=u.pageX-r,l=u.pageY-a}return{x:o,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wg={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Kg={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Ju={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zu=["touchstart","pointerdown","mousedown","keydown"],xu=["touchend","pointerup","mouseup","contextmenu"],gr=[],Xg=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Wg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Kg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ju},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,a=s.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(a),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(s),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,s;if(n){try{for(var r=Ln(Zu),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,s;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=Ln(xu),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var s=Ln(Zu),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=Ln(xu),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,a=r&&n!==void 0&&r.type!==n.type;if(!a){s.isActivated=!0,s.isProgrammatic=n===void 0,s.activationEvent=n,s.wasActivatedByPointer=s.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var o=n!==void 0&&gr.length>0&&gr.some(function(l){return i.adapter.containsEventTarget(l)});if(o){this.resetActivationState();return}n!==void 0&&(gr.push(n.target),this.registerDeactivationHandlers(n)),s.wasElementMadeActive=this.checkElementMadeActive(n),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){gr=[],!s.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(n),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,l=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,m=f.endPoint;u=h.x+"px, "+h.y+"px",d=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,u),this.adapter.updateCssVariable(r,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,s=n.wasActivatedByPointer,r;s?r=Gg(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,a=s.isActivated,o=r||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Ju.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var s=nt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(s),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,s=n.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var a=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,s=n.VAR_LEFT,r=n.VAR_TOP,a=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Qt);const{applyPassive:_r}=zu,{matches:Yg}=hr;function pn(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u=m=>t.classList.add(m),removeClass:d=m=>t.classList.remove(m),addStyle:f=(m,g)=>t.style.setProperty(m,g),initPromise:h=Promise.resolve()}={}){let m,g=gt("SMUI:addLayoutListener"),p,E=a,b=l,S=c;function O(){n&&(u("mdc-ripple-surface"),r==="primary"?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):r==="secondary"?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))),m&&E!==a&&(E=a,a?m.activate():a===!1&&m.deactivate()),e&&!m?(m=new Xg({addClass:u,browserSupportsCssVars:()=>zg(window),computeBoundingRect:()=>(o||t).getBoundingClientRect(),containsEventTarget:k=>t.contains(k),deregisterDocumentInteractionHandler:(k,y)=>document.documentElement.removeEventListener(k,y,_r()),deregisterInteractionHandler:(k,y)=>(l||t).removeEventListener(k,y,_r()),deregisterResizeHandler:k=>window.removeEventListener("resize",k),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>a==null?Yg(c||t,":active"):a,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(k,y)=>document.documentElement.addEventListener(k,y,_r()),registerInteractionHandler:(k,y)=>(l||t).addEventListener(k,y,_r()),registerResizeHandler:k=>window.addEventListener("resize",k),removeClass:d,updateCssVariable:f}),h.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&h.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(b!==l||S!==c)&&(b=l,S=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}O(),g&&(p=g(R));function R(){m&&m.layout()}return{update(k){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u,removeClass:d,addStyle:f,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>t.classList.add(y),removeClass:y=>t.classList.remove(y),addStyle:(y,T)=>t.style.setProperty(y,T),initPromise:Promise.resolve()},k)),O()},destroy(){m&&(m.destroy(),m=void 0,d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),p&&p()}}}function $u(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function Qg(t){let e,n,i=t[6]&&$u();const s=t[32].default,r=de(s,t,t[35],null);return{c(){i&&i.c(),e=kt(),r&&r.c()},m(a,o){i&&i.m(a,o),Y(a,e,o),r&&r.m(a,o),n=!0},p(a,o){a[6]?i||(i=$u(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||o[1]&16)&&he(r,s,a,a[35],n?fe(s,a[35],o,null):me(a[35]),null)},i(a){n||(w(r,a),n=!0)},o(a){N(r,a),n=!1},d(a){i&&i.d(a),a&&X(e),r&&r.d(a)}}}function Jg(t){let e,n,i;const s=[{use:[...t[5]?[]:[[pn,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:ee(We({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(ec).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var r=t[12];function a(o){let l={$$slots:{default:[Qg]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&150974399?ae(s,[l[0]&15213235&&{use:[...o[5]?[]:[[pn,{ripple:!o[13],unbounded:!1,color:(o[7]||o[0])&&o[4]==null?"primary":o[4],disabled:o[9],addClass:o[21],removeClass:o[22],addStyle:o[23]}]],o[19],...o[1]]},l[0]&1082277&&{class:ee(We({[o[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":o[7],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[9],"mdc-menu-item--selected":!o[20]&&o[8]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[5]},o[15]))},l[0]&65544&&{style:Object.entries(o[16]).map(ec).concat([o[3]]).join(" ")},l[0]&1048704&&ze(o[20]&&o[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ze(o[20]?{}:{role:o[8]}),l[0]&1048833&&ze(!o[20]&&o[8]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),l[0]&1057024&&ze(!o[20]&&(o[8]==="radio"||o[8]==="checkbox")?{"aria-checked":o[13]&&o[13].checked?"true":"false"}:{}),l[0]&1049088&&ze(o[20]?{}:{"aria-disabled":o[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":o[10]||void 0},l[0]&262144&&{tabindex:o[18]},l[0]&2048&&{href:o[11]},l[0]&131072&&ze(o[17]),l[0]&134217728&&ze(o[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[12])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[33](e),e.$on("click",o[24]),e.$on("keydown",o[25]),e.$on("SMUIGenericInput:mount",o[26]),e.$on("SMUIGenericInput:unmount",o[34]),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[33](null),o&&X(n),e&&Be(e,o)}}}let Zg=0;const ec=([t,e])=>`${t}: ${e};`;function xg(t,e,n){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=Q(e,s),{$$slots:a={},$$scope:o}=e;var l;const c=qe(Se());let u=()=>{};function d(z){return z===u}let{use:f=[]}=e,{class:h=""}=e,{style:m=""}=e,{color:g=void 0}=e,{nonInteractive:p=(l=gt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;et("SMUI:list:nonInteractive",void 0);let{ripple:E=!p}=e,{activated:b=!1}=e,{role:S=gt("SMUI:list:item:role")}=e;et("SMUI:list:item:role",void 0);let{selected:O=!1}=e,{disabled:R=!1}=e,{skipRestoreFocus:k=!1}=e,{tabindex:y=u}=e,{inputId:T="SMUI-form-field-list-"+Zg++}=e,{href:M=void 0}=e,v,I={},j={},A={},V,F,W=gt("SMUI:list:item:nav"),{component:G=W?M?mr:Gn:Dg}=e;et("SMUI:generic:input:props",{id:T}),et("SMUI:separator:context",void 0),Bt(()=>{if(!O&&!p){let pe=!0,Ke=v;for(;Ke.previousSibling;)if(Ke=Ke.previousSibling,Ke.nodeType===1&&Ke.classList.contains("mdc-deprecated-list-item")&&!Ke.classList.contains("mdc-deprecated-list-item--disabled")){pe=!1;break}pe&&(F=window.requestAnimationFrame(H))}const z={_smui_list_item_accessor:!0,get element(){return Ee()},get selected(){return O},set selected(pe){n(0,O=pe)},hasClass:J,addClass:be,removeClass:re,getAttr:ge,addAttr:st,removeAttr:x,getPrimaryText:U,get checked(){var pe;return(pe=V&&V.checked)!==null&&pe!==void 0?pe:!1},set checked(pe){V&&n(13,V.checked=!!pe,V)},get hasCheckbox(){return!!(V&&"_smui_checkbox_accessor"in V)},get hasRadio(){return!!(V&&"_smui_radio_accessor"in V)},activateRipple(){V&&V.activateRipple()},deactivateRipple(){V&&V.deactivateRipple()},getValue(){return r.value}};return $e(Ee(),"SMUIListItem:mount",z),()=>{$e(Ee(),"SMUIListItem:unmount",z)}}),hn(()=>{F&&window.cancelAnimationFrame(F)});function J(z){return z in I?I[z]:Ee().classList.contains(z)}function be(z){I[z]||n(15,I[z]=!0,I)}function re(z){(!(z in I)||I[z])&&n(15,I[z]=!1,I)}function Fe(z,pe){j[z]!=pe&&(pe===""||pe==null?(delete j[z],n(16,j)):n(16,j[z]=pe,j))}function ge(z){var pe;return z in A?(pe=A[z])!==null&&pe!==void 0?pe:null:Ee().getAttribute(z)}function st(z,pe){A[z]!==pe&&n(17,A[z]=pe,A)}function x(z){(!(z in A)||A[z]!=null)&&n(17,A[z]=void 0,A)}function H(){let z=!0,pe=v.getElement();for(;pe.nextElementSibling;)if(pe=pe.nextElementSibling,pe.nodeType===1&&pe.classList.contains("mdc-deprecated-list-item")){const Ke=pe.attributes.getNamedItem("tabindex");if(Ke&&Ke.value==="0"){z=!1;break}}z&&n(18,i=0)}function Ae(z){R||$e(Ee(),"SMUI:action",z)}function le(z){const pe=z.key==="Enter",Ke=z.key==="Space";(pe||Ke)&&Ae(z)}function q(z){("_smui_checkbox_accessor"in z.detail||"_smui_radio_accessor"in z.detail)&&n(13,V=z.detail)}function U(){var z,pe,Ke;const it=Ee(),Ye=it.querySelector(".mdc-deprecated-list-item__primary-text");if(Ye)return(z=Ye.textContent)!==null&&z!==void 0?z:"";const Vt=it.querySelector(".mdc-deprecated-list-item__text");return Vt?(pe=Vt.textContent)!==null&&pe!==void 0?pe:"":(Ke=it.textContent)!==null&&Ke!==void 0?Ke:""}function Ee(){return v.getElement()}function lt(z){ie[z?"unshift":"push"](()=>{v=z,n(14,v)})}const Rt=()=>n(13,V=void 0);return t.$$set=z=>{e=D(D({},e),Re(z)),n(27,r=Q(e,s)),"use"in z&&n(1,f=z.use),"class"in z&&n(2,h=z.class),"style"in z&&n(3,m=z.style),"color"in z&&n(4,g=z.color),"nonInteractive"in z&&n(5,p=z.nonInteractive),"ripple"in z&&n(6,E=z.ripple),"activated"in z&&n(7,b=z.activated),"role"in z&&n(8,S=z.role),"selected"in z&&n(0,O=z.selected),"disabled"in z&&n(9,R=z.disabled),"skipRestoreFocus"in z&&n(10,k=z.skipRestoreFocus),"tabindex"in z&&n(28,y=z.tabindex),"inputId"in z&&n(29,T=z.inputId),"href"in z&&n(11,M=z.href),"component"in z&&n(12,G=z.component),"$$scope"in z&&n(35,o=z.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=d(y)?!p&&!R&&(O||V&&V.checked)?0:-1:y)},[O,f,h,m,g,p,E,b,S,R,k,M,G,V,v,I,j,A,i,c,W,be,re,Fe,Ae,le,q,r,y,T,U,Ee,a,lt,Rt,o]}class $g extends De{constructor(e){super();ke(this,e,xg,Jg,Oe,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}var WT=vt({class:"mdc-deprecated-list-item__text",component:Gn});vt({class:"mdc-deprecated-list-item__primary-text",component:Gn});vt({class:"mdc-deprecated-list-item__secondary-text",component:Gn});function e_(t){let e,n,i,s,r,a;const o=t[8].default,l=de(o,t,t[7],null);let c=[{class:n=ee({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("span"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[9](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[3].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&128)&&he(l,o,d,d[7],s?fe(o,d[7],f,null):me(d[7]),null),Z(e,u=ae(c,[(!s||f&2&&n!==(n=ee({[d[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":d[4]})))&&{class:n},f&32&&d[5]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(w(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[9](null),r=!1,Xe(a)}}}function t_(t,e,n){const i=["use","class","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,u,d=gt("SMUI:list:graphic:menu-selection-group");function f(){return u}function h(m){ie[m?"unshift":"push"](()=>{u=m,n(2,u)})}return t.$$set=m=>{e=D(D({},e),Re(m)),n(5,s=Q(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"$$scope"in m&&n(7,a=m.$$scope)},[l,c,u,o,d,s,f,a,r,h]}class n_ extends De{constructor(e){super();ke(this,e,t_,e_,Oe,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}vt({class:"mdc-deprecated-list-item__meta",component:Gn});vt({class:"mdc-deprecated-list-group",component:mn});vt({class:"mdc-deprecated-list-group__subheader",component:wg});const i_=$g,s_=n_;function r_(t){let e,n,i,s,r,a;const o=t[12].default,l=de(o,t,t[11],null);let c=[{class:n=ee({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":t[2]==="raised","smui-paper--unelevated":t[2]==="unelevated","smui-paper--outlined":t[2]==="outlined",["smui-paper--elevation-z"+t[5]]:t[5]!==0&&t[2]==="raised","smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:t[4]!=="default","smui-paper-transition":t[6]})},t[9]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("div"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[13](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[8].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&2048)&&he(l,o,d,d[11],s?fe(o,d[11],f,null):me(d[11]),null),Z(e,u=ae(c,[(!s||f&126&&n!==(n=ee({[d[1]]:!0,"smui-paper":!0,"smui-paper--raised":d[2]==="raised","smui-paper--unelevated":d[2]==="unelevated","smui-paper--outlined":d[2]==="outlined",["smui-paper--elevation-z"+d[5]]:d[5]!==0&&d[2]==="raised","smui-paper--rounded":!d[3],["smui-paper--color-"+d[4]]:d[4]!=="default","smui-paper-transition":d[6]})))&&{class:n},f&512&&d[9]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(w(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[13](null),r=!1,Xe(a)}}}function o_(t,e,n){const i=["use","class","variant","square","color","elevation","transition","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{square:d=!1}=e,{color:f="default"}=e,{elevation:h=1}=e,{transition:m=!1}=e,g;function p(){return g}function E(b){ie[b?"unshift":"push"](()=>{g=b,n(7,g)})}return t.$$set=b=>{e=D(D({},e),Re(b)),n(9,s=Q(e,i)),"use"in b&&n(0,l=b.use),"class"in b&&n(1,c=b.class),"variant"in b&&n(2,u=b.variant),"square"in b&&n(3,d=b.square),"color"in b&&n(4,f=b.color),"elevation"in b&&n(5,h=b.elevation),"transition"in b&&n(6,m=b.transition),"$$scope"in b&&n(11,a=b.$$scope)},[l,c,u,d,f,h,m,g,o,s,p,a,r,E]}class KT extends De{constructor(e){super();ke(this,e,o_,r_,Oe,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}var XT=vt({class:"smui-paper__content",component:mn}),YT=vt({class:"smui-paper__title",component:Rg}),QT=vt({class:"smui-paper__subtitle",component:kg});function tc(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-fab__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function a_(t){let e,n,i,s;const r=t[20].default,a=de(r,t,t[22],null);let o=t[8]&&tc();return{c(){e=ye("div"),n=Je(),a&&a.c(),o&&o.c(),i=kt(),rt(e,"class","mdc-fab__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c&4194304)&&he(a,r,l,l[22],s?fe(r,l[22],c,null):me(l[22]),null),l[8]?o||(o=tc(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(w(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function l_(t){let e,n,i;const s=[{use:[[pn,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[18].disabled,addClass:t[15],removeClass:t[16],addStyle:t[17]}],t[14],...t[0]]},{class:ee(We({[t[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":t[5],"mdc-fab--exited":t[6],"mdc-fab--extended":t[7],"smui-fab--color-primary":t[4]==="primary","mdc-fab--touch":t[8]},t[12]))},{style:Object.entries(t[13]).map(nc).concat([t[2]]).join(" ")},{href:t[9]},t[18]];var r=t[10];function a(o){let l={$$slots:{default:[a_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[21](e)),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&521215?ae(s,[l&507929&&{use:[[pn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[18].disabled,addClass:o[15],removeClass:o[16],addStyle:o[17]}],o[14],...o[0]]},l&4594&&{class:ee(We({[o[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":o[5],"mdc-fab--exited":o[6],"mdc-fab--extended":o[7],"smui-fab--color-primary":o[4]==="primary","mdc-fab--touch":o[8]},o[12]))},l&8196&&{style:Object.entries(o[13]).map(nc).concat([o[2]]).join(" ")},l&512&&{href:o[9]},l&262144&&ze(o[18])]):{};if(l&4194560&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[10])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[21](e),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[21](null),o&&X(n),e&&Be(e,o)}}}const nc=([t,e])=>`${t}: ${e};`;function u_(t,e,n){const i=["use","class","style","ripple","color","mini","exited","extended","touch","href","component","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{ripple:d=!0}=e,{color:f="secondary"}=e,{mini:h=!1}=e,{exited:m=!1}=e,{extended:g=!1}=e,{touch:p=!1}=e,{href:E=void 0}=e,b,S={},O={},{component:R=E==null?Ta:mr}=e;et("SMUI:label:context","fab"),et("SMUI:icon:context","fab");function k(I){S[I]||n(12,S[I]=!0,S)}function y(I){(!(I in S)||S[I])&&n(12,S[I]=!1,S)}function T(I,j){O[I]!=j&&(j===""||j==null?(delete O[I],n(13,O)):n(13,O[I]=j,O))}function M(){return b.getElement()}function v(I){ie[I?"unshift":"push"](()=>{b=I,n(11,b)})}return t.$$set=I=>{e=D(D({},e),Re(I)),n(18,s=Q(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,c=I.class),"style"in I&&n(2,u=I.style),"ripple"in I&&n(3,d=I.ripple),"color"in I&&n(4,f=I.color),"mini"in I&&n(5,h=I.mini),"exited"in I&&n(6,m=I.exited),"extended"in I&&n(7,g=I.extended),"touch"in I&&n(8,p=I.touch),"href"in I&&n(9,E=I.href),"component"in I&&n(10,R=I.component),"$$scope"in I&&n(22,a=I.$$scope)},[l,c,u,d,f,h,m,g,p,E,R,b,S,O,o,k,y,T,s,M,r,v,a]}class JT extends De{constructor(e){super();ke(this,e,u_,l_,Oe,{use:0,class:1,style:2,ripple:3,color:4,mini:5,exited:6,extended:7,touch:8,href:9,component:10,getElement:19})}get getElement(){return this.$$.ctx[19]}}function c_(t){let e;const n=t[9].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function d_(t){let e,n,i;const s=[{use:[t[4],...t[0]]},{class:ee({[t[1]]:!0,"mdc-button__label":t[5]==="button","mdc-fab__label":t[5]==="fab","mdc-tab__text-label":t[5]==="tab","mdc-image-list__label":t[5]==="image-list","mdc-snackbar__label":t[5]==="snackbar","mdc-banner__text":t[5]==="banner","mdc-segmented-button__label":t[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":t[5]==="data-table:pagination","mdc-data-table__header-cell-label":t[5]==="data-table:sortable-header-cell"})},t[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:t[6]},t[7]];var r=t[2];function a(o){let l={$$slots:{default:[c_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[10](e)),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&243?ae(s,[l&17&&{use:[o[4],...o[0]]},l&34&&{class:ee({[o[1]]:!0,"mdc-button__label":o[5]==="button","mdc-fab__label":o[5]==="fab","mdc-tab__text-label":o[5]==="tab","mdc-image-list__label":o[5]==="image-list","mdc-snackbar__label":o[5]==="snackbar","mdc-banner__text":o[5]==="banner","mdc-segmented-button__label":o[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":o[5]==="data-table:pagination","mdc-data-table__header-cell-label":o[5]==="data-table:sortable-header-cell"})},l&32&&ze(o[5]==="snackbar"?{"aria-atomic":"false"}:{}),l&64&&{tabindex:o[6]},l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[2])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[10](e),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[10](null),o&&X(n),e&&Be(e,o)}}}function f_(t,e,n){const i=["use","class","component","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,u,{component:d=Xu}=e;const f=gt("SMUI:label:context"),h=gt("SMUI:label:tabindex");function m(){return u.getElement()}function g(p){ie[p?"unshift":"push"](()=>{u=p,n(3,u)})}return t.$$set=p=>{e=D(D({},e),Re(p)),n(7,s=Q(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"component"in p&&n(2,d=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,d,u,o,f,h,s,m,r,g,a]}class h_ extends De{constructor(e){super();ke(this,e,f_,d_,Oe,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function m_(t){let e;const n=t[9].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function p_(t){let e,n,i;const s=[{use:[t[5],...t[0]]},{class:ee({[t[1]]:!0,"mdc-button__icon":t[6]==="button","mdc-fab__icon":t[6]==="fab","mdc-icon-button__icon":t[6]==="icon-button","mdc-icon-button__icon--on":t[6]==="icon-button"&&t[2],"mdc-tab__icon":t[6]==="tab","mdc-banner__icon":t[6]==="banner","mdc-segmented-button__icon":t[6]==="segmented-button"})},{"aria-hidden":"true"},t[3]===Yu?{focusable:"false",tabindex:"-1"}:{},t[7]];var r=t[3];function a(o){let l={$$slots:{default:[m_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[10](e)),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&239?ae(s,[l&33&&{use:[o[5],...o[0]]},l&70&&{class:ee({[o[1]]:!0,"mdc-button__icon":o[6]==="button","mdc-fab__icon":o[6]==="fab","mdc-icon-button__icon":o[6]==="icon-button","mdc-icon-button__icon--on":o[6]==="icon-button"&&o[2],"mdc-tab__icon":o[6]==="tab","mdc-banner__icon":o[6]==="banner","mdc-segmented-button__icon":o[6]==="segmented-button"})},s[2],l&8&&ze(o[3]===Yu?{focusable:"false",tabindex:"-1"}:{}),l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[3])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[10](e),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[10](null),o&&X(n),e&&Be(e,o)}}}function g_(t,e,n){const i=["use","class","on","component","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{on:u=!1}=e,d,{component:f=mg}=e;const h=gt("SMUI:icon:context");function m(){return d.getElement()}function g(p){ie[p?"unshift":"push"](()=>{d=p,n(4,d)})}return t.$$set=p=>{e=D(D({},e),Re(p)),n(7,s=Q(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"on"in p&&n(2,u=p.on),"component"in p&&n(3,f=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,u,f,d,o,h,s,m,r,g,a]}class __ extends De{constructor(e){super();ke(this,e,g_,p_,Oe,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}}function y_(t){let e;const n=t[4].default,i=de(n,t,t[3],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&he(i,n,s,s[3],e?fe(n,s[3],r,null):me(s[3]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function v_(t,e,n){let i,{$$slots:s={},$$scope:r}=e,{key:a}=e,{value:o}=e;const l=Mi(o);return si(t,l,c=>n(5,i=c)),et(a,l),hn(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,a=c.key),"value"in c&&n(2,o=c.value),"$$scope"in c&&n(3,r=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&Un(l,i=o,i)},[l,a,o,r,s]}class yr extends De{constructor(e){super();ke(this,e,v_,y_,Oe,{key:1,value:2})}}const ZT=h_,xT=__;/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function I_(t){return t?t.scrollHeight>t.offsetHeight:!1}function E_(t){return t?t.scrollTop===0:!1}function b_(t){return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1}function A_(t){var e=new Set;return[].forEach.call(t,function(n){return e.add(n.offsetTop)}),e.size>1}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T_=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(e,n){var i=this;this.cancel(e);var s=requestAnimationFrame(function(r){i.rafIDs.delete(e),n(r)});this.rafIDs.set(e,s)},t.prototype.cancel=function(e){var n=this.rafIDs.get(e);n&&(cancelAnimationFrame(n),this.rafIDs.delete(e))},t.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(n,i){e.cancel(i)})},t.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(n,i){e.push(i)}),e},t}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var mt={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},hs={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Sa={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vr;(function(t){t.POLL_SCROLL_POS="poll_scroll_position",t.POLL_LAYOUT_CHANGE="poll_layout_change"})(vr||(vr={}));var S_=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=hs.CLOSE_ACTION,i.scrimClickAction=hs.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=hs.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new T_,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return hs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Sa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(mt.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(mt.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(n){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(mt.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),n&&n.isAboveFullscreenDialog&&this.adapter.addClass(mt.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(mt.OPEN),i.adapter.addBodyClass(mt.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},Sa.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var i=this;n===void 0&&(n=""),!!this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(n),this.adapter.addClass(mt.CLOSING),this.adapter.removeClass(mt.OPEN),this.adapter.removeBodyClass(mt.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(n)},Sa.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var n=this;this.adapter.addClass(mt.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){n.adapter.addClass(mt.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(mt.SURFACE_SCRIM_SHOWN),this.adapter.addClass(mt.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(mt.SURFACE_SCRIM_HIDING),this.adapter.removeClass(mt.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(n){this.escapeKeyAction=n},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(n){this.scrimClickAction=n},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(n){this.autoStackButtons=n},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(n){this.suppressDefaultPressSelector=n},e.prototype.layout=function(){var n=this;this.animFrame.request(vr.POLL_LAYOUT_CHANGE,function(){n.layoutInternal()})},e.prototype.handleClick=function(n){var i=this.adapter.eventTargetMatches(n.target,hs.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var s=this.adapter.getActionFromEvent(n);s&&this.close(s)}},e.prototype.handleKeydown=function(n){var i=n.key==="Enter"||n.keyCode===13;if(!!i){var s=this.adapter.getActionFromEvent(n);if(!s){var r=n.composedPath?n.composedPath()[0]:n.target,a=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;i&&a&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(n){var i=n.key==="Escape"||n.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var n=this;this.animFrame.request(vr.POLL_SCROLL_POS,function(){n.toggleScrollDividerHeader(),n.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(mt.OPENING),this.adapter.removeClass(mt.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(mt.STACKED);var n=this.adapter.areButtonsStacked();n&&this.adapter.addClass(mt.STACKED),n!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=n)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(mt.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(mt.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(mt.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(mt.SCROLL_DIVIDER_HEADER):this.adapter.addClass(mt.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(mt.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(mt.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(mt.SCROLL_DIVIDER_FOOTER)},e}(Qt);const{document:C_,window:ic}=_a,L_=t=>({}),sc=t=>({});function rc(t){let e,n,i;return{c(){e=ye("div"),rt(e,"class","mdc-dialog__surface-scrim")},m(s,r){Y(s,e,r),n||(i=Te(e,"transitionend",t[31]),n=!0)},p:Nt,d(s){s&&X(e),n=!1,i()}}}function O_(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g;const p=t[27].default,E=de(p,t,t[26],null);let b=t[5]&&rc(t),S=[{class:a=ee({[t[7]]:!0,"mdc-dialog__surface":!0})},{role:"alertdialog"},{"aria-modal":"true"},Me(t[17],"surface$")],O={};for(let I=0;I<S.length;I+=1)O=D(O,S[I]);let R=[{class:o=ee({[t[6]]:!0,"mdc-dialog__container":!0})},Me(t[17],"container$")],k={};for(let I=0;I<R.length;I+=1)k=D(k,R[I]);let y=[{class:u=ee(We({[t[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!t[4],"mdc-dialog--fullscreen":t[5],"smui-dialog--selection":t[3]},t[10]))},{role:"alertdialog"},{"aria-modal":"true"},qn(t[17],["container$","surface$"])],T={};for(let I=0;I<y.length;I+=1)T=D(T,y[I]);const M=t[27].over,v=de(M,t,t[26],sc);return{c(){e=Je(),n=ye("div"),i=ye("div"),s=ye("div"),E&&E.c(),r=Je(),b&&b.c(),l=Je(),c=ye("div"),f=Je(),v&&v.c(),Z(s,O),Z(i,k),rt(c,"class","mdc-dialog__scrim"),Z(n,T)},m(I,j){Y(I,e,j),Y(I,n,j),Qe(n,i),Qe(i,s),E&&E.m(s,null),Qe(s,r),b&&b.m(s,null),Qe(n,l),Qe(n,c),t[32](n),Y(I,f,j),v&&v.m(I,j),h=!0,m||(g=[Te(ic,"resize",t[28]),Te(ic,"orientationchange",t[29]),Te(C_.body,"keydown",t[30]),$(d=Ze.call(null,n,t[1])),$(t[11].call(null,n)),Te(n,"SMUIDialog:opening",t[14]),Te(n,"SMUIDialog:opened",t[15]),Te(n,"SMUIDialog:closed",t[16]),Te(n,"click",t[33]),Te(n,"keydown",t[34])],m=!0)},p(I,j){E&&E.p&&(!h||j[0]&67108864)&&he(E,p,I,I[26],h?fe(p,I[26],j,null):me(I[26]),null),I[5]?b?b.p(I,j):(b=rc(I),b.c(),b.m(s,null)):b&&(b.d(1),b=null),Z(s,O=ae(S,[(!h||j[0]&128&&a!==(a=ee({[I[7]]:!0,"mdc-dialog__surface":!0})))&&{class:a},{role:"alertdialog"},{"aria-modal":"true"},j[0]&131072&&Me(I[17],"surface$")])),Z(i,k=ae(R,[(!h||j[0]&64&&o!==(o=ee({[I[6]]:!0,"mdc-dialog__container":!0})))&&{class:o},j[0]&131072&&Me(I[17],"container$")])),Z(n,T=ae(y,[(!h||j[0]&1084&&u!==(u=ee(We({[I[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!I[4],"mdc-dialog--fullscreen":I[5],"smui-dialog--selection":I[3]},I[10]))))&&{class:u},{role:"alertdialog"},{"aria-modal":"true"},j[0]&131072&&qn(I[17],["container$","surface$"])])),d&&Ue(d.update)&&j[0]&2&&d.update.call(null,I[1]),v&&v.p&&(!h||j[0]&67108864)&&he(v,M,I,I[26],h?fe(M,I[26],j,L_):me(I[26]),sc)},i(I){h||(w(E,I),w(v,I),h=!0)},o(I){N(E,I),N(v,I),h=!1},d(I){I&&X(e),I&&X(n),E&&E.d(I),b&&b.d(),t[32](null),I&&X(f),v&&v.d(I),m=!1,Xe(g)}}}function w_(t,e,n){const i=["use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"];let s=Q(e,i),r,a,{$$slots:o={},$$scope:l}=e;var c;const{FocusTrap:u}=Uu,{closest:d,matches:f}=hr,h=qe(Se());let{use:m=[]}=e,{class:g=""}=e,{open:p=!1}=e,{selection:E=!1}=e,{escapeKeyAction:b="close"}=e,{scrimClickAction:S="close"}=e,{autoStackButtons:O=!0}=e,{fullscreen:R=!1}=e,{container$class:k=""}=e,{surface$class:y=""}=e,T,M,v={},I,j=Mi(!1);si(t,j,te=>n(38,a=te));let A=gt("SMUI:dialog:aboveFullscreen"),V=(c=gt("SMUI:dialog:aboveFullscreenShown"))!==null&&c!==void 0?c:Mi(!1);si(t,V,te=>n(25,r=te));let F=gt("SMUI:addLayoutListener"),W,G=[],J=te=>(G.push(te),()=>{const ve=G.indexOf(te);ve>=0&&G.splice(ve,1)});et("SMUI:dialog:actions:reversed",j),et("SMUI:addLayoutListener",J),et("SMUI:dialog:selection",E),et("SMUI:dialog:aboveFullscreen",A||R),et("SMUI:dialog:aboveFullscreenShown",V),F&&(W=F(Rt));let be=r;Bt(()=>{var te;return I=new u(T,{initialFocusEl:(te=Ae())!==null&&te!==void 0?te:void 0}),n(8,M=new S_({addBodyClass:ve=>document.body.classList.add(ve),addClass:Fe,areButtonsStacked:()=>A_(st()),clickDefaultButton:()=>{const ve=x();ve&&ve.click()},eventTargetMatches:(ve,_t)=>ve?f(ve,_t):!1,getActionFromEvent:ve=>{if(!ve.target)return"";const _t=d(ve.target,"[data-mdc-dialog-action]");return _t&&_t.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:Ae,hasClass:re,isContentScrollable:()=>I_(H()),notifyClosed:ve=>{n(0,p=!1),$e(z(),"SMUIDialog:closed",ve?{action:ve}:{},void 0,!0)},notifyClosing:ve=>$e(z(),"SMUIDialog:closing",ve?{action:ve}:{},void 0,!0),notifyOpened:()=>$e(z(),"SMUIDialog:opened",{},void 0,!0),notifyOpening:()=>$e(z(),"SMUIDialog:opening",{},void 0,!0),releaseFocus:()=>I.releaseFocus(),removeBodyClass:ve=>document.body.classList.remove(ve),removeClass:ge,reverseButtons:()=>{Un(j,a=!0,a)},trapFocus:()=>I.trapFocus(),registerContentEventHandler:(ve,_t)=>{const dt=H();dt instanceof HTMLElement&&dt.addEventListener(ve,_t)},deregisterContentEventHandler:(ve,_t)=>{const dt=H();dt instanceof HTMLElement&&dt.removeEventListener(ve,_t)},isScrollableContentAtTop:()=>E_(H()),isScrollableContentAtBottom:()=>b_(H()),registerWindowEventHandler:(ve,_t)=>{window.addEventListener(ve,_t)},deregisterWindowEventHandler:(ve,_t)=>{window.removeEventListener(ve,_t)}})),M.init(),()=>{M.destroy()}}),hn(()=>{W&&W()});function re(te){return te in v?v[te]:z().classList.contains(te)}function Fe(te){v[te]||n(10,v[te]=!0,v)}function ge(te){(!(te in v)||v[te])&&n(10,v[te]=!1,v)}function st(){return[].slice.call(T.querySelectorAll(".mdc-dialog__button"))}function x(){return T.querySelector("[data-mdc-dialog-button-default")}function H(){return T.querySelector(".mdc-dialog__content")}function Ae(){return T.querySelector("[data-mdc-dialog-initial-focus]")}function le(){A&&Un(V,r=!0,r),requestAnimationFrame(()=>{G.forEach(te=>te())})}function q(){G.forEach(te=>te())}function U(){A&&Un(V,r=!1,r)}function Ee(){return p}function lt(te){n(0,p=te)}function Rt(){return M.layout()}function z(){return T}const pe=()=>p&&M&&M.layout(),Ke=()=>p&&M&&M.layout(),it=te=>p&&M&&M.handleDocumentKeydown(te),Ye=()=>M&&M.handleSurfaceScrimTransitionEnd();function Vt(te){ie[te?"unshift":"push"](()=>{T=te,n(9,T)})}const an=te=>M&&M.handleClick(te),At=te=>M&&M.handleKeydown(te);return t.$$set=te=>{e=D(D({},e),Re(te)),n(17,s=Q(e,i)),"use"in te&&n(1,m=te.use),"class"in te&&n(2,g=te.class),"open"in te&&n(0,p=te.open),"selection"in te&&n(3,E=te.selection),"escapeKeyAction"in te&&n(18,b=te.escapeKeyAction),"scrimClickAction"in te&&n(19,S=te.scrimClickAction),"autoStackButtons"in te&&n(4,O=te.autoStackButtons),"fullscreen"in te&&n(5,R=te.fullscreen),"container$class"in te&&n(6,k=te.container$class),"surface$class"in te&&n(7,y=te.surface$class),"$$scope"in te&&n(26,l=te.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&262400&&M&&M.getEscapeKeyAction()!==b&&M.setEscapeKeyAction(b),t.$$.dirty[0]&524544&&M&&M.getScrimClickAction()!==S&&M.setScrimClickAction(S),t.$$.dirty[0]&272&&M&&M.getAutoStackButtons()!==O&&M.setAutoStackButtons(O),t.$$.dirty[0]&16&&(O||Un(j,a=!0,a)),t.$$.dirty[0]&257&&M&&M.isOpen()!==p&&(p?M.open({isAboveFullscreenDialog:!!A}):M.close()),t.$$.dirty[0]&50331936&&R&&M&&be!==r&&(n(24,be=r),r?M.showSurfaceScrim():M.hideSurfaceScrim())},[p,m,g,E,O,R,k,y,M,T,v,h,j,V,le,q,U,s,b,S,Ee,lt,Rt,z,be,r,l,o,pe,Ke,it,Ye,Vt,an,At]}class $T extends De{constructor(e){super();ke(this,e,w_,O_,Oe,{use:1,class:2,open:0,selection:3,escapeKeyAction:18,scrimClickAction:19,autoStackButtons:4,fullscreen:5,container$class:6,surface$class:7,isOpen:20,setOpen:21,layout:22,getElement:23},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get layout(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}vt({class:"mdc-dialog__header",component:mn,contexts:{"SMUI:icon-button:context":"dialog:header"}});var eS=vt({class:"mdc-dialog__title",component:Qu}),tS=vt({class:"mdc-dialog__content",component:mn}),nS=vt({class:"mdc-dialog__actions",component:mn,classMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},contexts:{"SMUI:button:context":"dialog:action"}});function oc(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-button__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function R_(t){let e,n,i,s;const r=t[26].default,a=de(r,t,t[28],null);let o=t[6]&&oc();return{c(){e=ye("div"),n=Je(),a&&a.c(),o&&o.c(),i=kt(),rt(e,"class","mdc-button__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c&268435456)&&he(a,r,l,l[28],s?fe(r,l[28],c,null):me(l[28]),null),l[6]?o||(o=oc(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(w(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function k_(t){let e,n,i;const s=[{use:[[pn,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:ee(We({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(ac).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var r=t[9];function a(o){let l={$$slots:{default:[R_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[27](e),e.$on("click",t[21])),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&6289919?ae(s,[l&6094873&&{use:[[pn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[22].disabled,addClass:o[18],removeClass:o[19],addStyle:o[20]}],o[16],...o[0]]},l&133490&&{class:ee(We({[o[1]]:!0,"mdc-button":!0,"mdc-button--raised":o[5]==="raised","mdc-button--unelevated":o[5]==="unelevated","mdc-button--outlined":o[5]==="outlined","smui-button--color-secondary":o[4]==="secondary","mdc-button--touch":o[6],"mdc-card__action":o[17]==="card:action","mdc-card__action--button":o[17]==="card:action","mdc-dialog__button":o[17]==="dialog:action","mdc-top-app-bar__navigation-icon":o[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[17]==="top-app-bar:action","mdc-snackbar__action":o[17]==="snackbar:actions","mdc-banner__secondary-action":o[17]==="banner"&&o[8],"mdc-banner__primary-action":o[17]==="banner"&&!o[8],"mdc-tooltip__action":o[17]==="tooltip:rich-actions"},o[11]))},l&4100&&{style:Object.entries(o[12]).map(ac).concat([o[2]]).join(" ")},l&32768&&ze(o[15]),l&16384&&ze(o[14]),l&8192&&ze(o[13]),l&128&&{href:o[7]},l&4194304&&ze(o[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[9])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[27](e),e.$on("click",o[21]),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[27](null),o&&X(n),e&&Be(e,o)}}}const ac=([t,e])=>`${t}: ${e};`;function D_(t,e,n){let i,s,r;const a=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let o=Q(e,a),{$$slots:l={},$$scope:c}=e;const u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{ripple:m=!0}=e,{color:g="primary"}=e,{variant:p="text"}=e,{touch:E=!1}=e,{href:b=void 0}=e,{action:S="close"}=e,{defaultAction:O=!1}=e,{secondary:R=!1}=e,k,y={},T={},M=gt("SMUI:button:context"),{component:v=b==null?Ta:mr}=e;et("SMUI:label:context","button"),et("SMUI:icon:context","button");function I(G){y[G]||n(11,y[G]=!0,y)}function j(G){(!(G in y)||y[G])&&n(11,y[G]=!1,y)}function A(G,J){T[G]!=J&&(J===""||J==null?(delete T[G],n(12,T)):n(12,T[G]=J,T))}function V(){M==="banner"&&$e(F(),R?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function F(){return k.getElement()}function W(G){ie[G?"unshift":"push"](()=>{k=G,n(10,k)})}return t.$$set=G=>{n(29,e=D(D({},e),Re(G))),n(22,o=Q(e,a)),"use"in G&&n(0,d=G.use),"class"in G&&n(1,f=G.class),"style"in G&&n(2,h=G.style),"ripple"in G&&n(3,m=G.ripple),"color"in G&&n(4,g=G.color),"variant"in G&&n(5,p=G.variant),"touch"in G&&n(6,E=G.touch),"href"in G&&n(7,b=G.href),"action"in G&&n(23,S=G.action),"defaultAction"in G&&n(24,O=G.defaultAction),"secondary"in G&&n(8,R=G.secondary),"component"in G&&n(9,v=G.component),"$$scope"in G&&n(28,c=G.$$scope)},t.$$.update=()=>{n(15,i=M==="dialog:action"&&S!=null?{"data-mdc-dialog-action":S}:{action:e.action}),n(14,s=M==="dialog:action"&&O?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,r=M==="banner"?{}:{secondary:e.secondary})},e=Re(e),[d,f,h,m,g,p,E,b,R,v,k,y,T,r,s,i,u,M,I,j,A,V,o,S,O,F,l,W,c]}class iS extends De{constructor(e){super();ke(this,e,D_,k_,Oe,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var M_={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var N_=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return M_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;n?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var li={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var P_=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return li},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(li.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(li.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(li.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(li.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(li.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(li.LINE_RIPPLE_DEACTIVATING))},e}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F_={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},lc={NOTCH_ELEMENT_PADDING:8},U_={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var V_=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return F_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return U_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return lc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=lc.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Qt);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ca={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},B_={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},uc={LABEL_SCALE:.75},H_=["pattern","min","max","required","step","minlength","maxlength"],j_=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cc=["mousedown","touchstart"],dc=["click","keydown"],q_=function(t){Dt(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return B_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ca},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return uc},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return j_.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=Ln(cc),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}try{for(var c=Ln(dc),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){s={error:d}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=Ln(cc),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}try{for(var c=Ln(dc),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){s={error:d}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(s){return H_.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*uc.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,s=i?i[0]:n,r=s.target.getBoundingClientRect(),a=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(a)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),a=this.helperText.getId();r&&a?this.adapter.setInputAttr(Ca.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(Ca.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;n?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Qt);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var En={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},wn={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+En.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var z_=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return En},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(wn.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(En.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(En.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(En.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(En.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(En.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(En.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(wn.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(En.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(En.HELPER_TEXT_VALIDATION_MSG),r=s&&!n;r?(this.showToScreenReader(),this.adapter.getAttr(wn.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(wn.ROLE,"alert")):this.adapter.removeAttr(wn.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(wn.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(wn.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(wn.ROLE,"alert")})},e}(Qt);function G_(t){let e,n,i,s,r,a,o,l;const c=t[22].default,u=de(c,t,t[21],null);let d=[{class:n=ee(We({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(hc).concat([t[4]]).join(" ")},{for:s=t[5]||(t[11]?t[11].id:void 0)},t[12]],f={};for(let h=0;h<d.length;h+=1)f=D(f,d[h]);return{c(){e=ye("label"),u&&u.c(),Z(e,f)},m(h,m){Y(h,e,m),u&&u.m(e,null),t[24](e),a=!0,o||(l=[$(r=Ze.call(null,e,t[2])),$(t[10].call(null,e))],o=!0)},p(h,m){u&&u.p&&(!a||m&2097152)&&he(u,c,h,h[21],a?fe(c,h[21],m,null):me(h[21]),null),Z(e,f=ae(d,[(!a||m&267&&n!==(n=ee(We({[h[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":h[0],"mdc-floating-label--required":h[1]},h[8]))))&&{class:n},(!a||m&528&&i!==(i=Object.entries(h[9]).map(hc).concat([h[4]]).join(" ")))&&{style:i},(!a||m&32&&s!==(s=h[5]||(h[11]?h[11].id:void 0)))&&{for:s},m&4096&&h[12]])),r&&Ue(r.update)&&m&4&&r.update.call(null,h[2])},i(h){a||(w(u,h),a=!0)},o(h){N(u,h),a=!1},d(h){h&&X(e),u&&u.d(h),t[24](null),o=!1,Xe(l)}}}function W_(t){let e,n,i,s,r,a,o;const l=t[22].default,c=de(l,t,t[21],null);let u=[{class:n=ee(We({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(fc).concat([t[4]]).join(" ")},t[12]],d={};for(let f=0;f<u.length;f+=1)d=D(d,u[f]);return{c(){e=ye("span"),c&&c.c(),Z(e,d)},m(f,h){Y(f,e,h),c&&c.m(e,null),t[23](e),r=!0,a||(o=[$(s=Ze.call(null,e,t[2])),$(t[10].call(null,e))],a=!0)},p(f,h){c&&c.p&&(!r||h&2097152)&&he(c,l,f,f[21],r?fe(l,f[21],h,null):me(f[21]),null),Z(e,d=ae(u,[(!r||h&267&&n!==(n=ee(We({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!r||h&528&&i!==(i=Object.entries(f[9]).map(fc).concat([f[4]]).join(" ")))&&{style:i},h&4096&&f[12]])),s&&Ue(s.update)&&h&4&&s.update.call(null,f[2])},i(f){r||(w(c,f),r=!0)},o(f){N(c,f),r=!1},d(f){f&&X(e),c&&c.d(f),t[23](null),a=!1,Xe(o)}}}function K_(t){let e,n,i,s;const r=[W_,G_],a=[];function o(l,c){return l[6]?0:1}return e=o(t),n=a[e]=r[e](t),{c(){n.c(),i=kt()},m(l,c){a[e].m(l,c),Y(l,i,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ft(),N(a[u],1,1,()=>{a[u]=null}),ht(),n=a[e],n?n.p(l,c):(n=a[e]=r[e](l),n.c()),w(n,1),n.m(i.parentNode,i))},i(l){s||(w(n),s=!0)},o(l){N(n),s=!1},d(l){a[e].d(l),l&&X(i)}}}const fc=([t,e])=>`${t}: ${e};`,hc=([t,e])=>`${t}: ${e};`;function X_(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;var o;const l=qe(Se());let{use:c=[]}=e,{class:u=""}=e,{style:d=""}=e,{for:f=void 0}=e,{floatAbove:h=!1}=e,{required:m=!1}=e,{wrapped:g=!1}=e,p,E,b={},S={},O=(o=gt("SMUI:generic:input:props"))!==null&&o!==void 0?o:{},R=h,k=m;Bt(()=>{n(18,E=new N_({addClass:y,removeClass:T,getWidth:()=>{var be,re;const Fe=F(),ge=Fe.cloneNode(!0);(be=Fe.parentNode)===null||be===void 0||be.appendChild(ge),ge.classList.add("smui-floating-label--remove-transition"),ge.classList.add("smui-floating-label--force-size"),ge.classList.remove("mdc-floating-label--float-above");const st=ge.scrollWidth;return(re=Fe.parentNode)===null||re===void 0||re.removeChild(ge),st},registerInteractionHandler:(be,re)=>F().addEventListener(be,re),deregisterInteractionHandler:(be,re)=>F().removeEventListener(be,re)}));const J={get element(){return F()},addStyle:M,removeStyle:v};return $e(p,"SMUIFloatingLabel:mount",J),E.init(),()=>{$e(p,"SMUIFloatingLabel:unmount",J),E.destroy()}});function y(J){b[J]||n(8,b[J]=!0,b)}function T(J){(!(J in b)||b[J])&&n(8,b[J]=!1,b)}function M(J,be){S[J]!=be&&(be===""||be==null?(delete S[J],n(9,S)):n(9,S[J]=be,S))}function v(J){J in S&&(delete S[J],n(9,S))}function I(J){E.shake(J)}function j(J){n(0,h=J)}function A(J){n(1,m=J)}function V(){return E.getWidth()}function F(){return p}function W(J){ie[J?"unshift":"push"](()=>{p=J,n(7,p)})}function G(J){ie[J?"unshift":"push"](()=>{p=J,n(7,p)})}return t.$$set=J=>{e=D(D({},e),Re(J)),n(12,s=Q(e,i)),"use"in J&&n(2,c=J.use),"class"in J&&n(3,u=J.class),"style"in J&&n(4,d=J.style),"for"in J&&n(5,f=J.for),"floatAbove"in J&&n(0,h=J.floatAbove),"required"in J&&n(1,m=J.required),"wrapped"in J&&n(6,g=J.wrapped),"$$scope"in J&&n(21,a=J.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&E&&R!==h&&(n(19,R=h),E.float(h)),t.$$.dirty&1310722&&E&&k!==m&&(n(20,k=m),E.setRequired(m))},[h,m,c,u,d,f,g,p,b,S,l,O,s,I,j,A,V,F,E,R,k,a,r,W,G]}class Ir extends De{constructor(e){super();ke(this,e,X_,K_,Oe,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function Y_(t){let e,n,i,s,r,a,o=[{class:n=ee(We({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(mc).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<o.length;c+=1)l=D(l,o[c]);return{c(){e=ye("div"),Z(e,l)},m(c,u){Y(c,e,u),t[13](e),r||(a=[$(s=Ze.call(null,e,t[0])),$(t[7].call(null,e))],r=!0)},p(c,[u]){Z(e,l=ae(o,[u&42&&n!==(n=ee(We({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(mc).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),s&&Ue(s.update)&&u&1&&s.update.call(null,c[0])},i:Nt,o:Nt,d(c){c&&X(e),t[13](null),r=!1,Xe(a)}}}const mc=([t,e])=>`${t}: ${e};`;function Q_(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=Q(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{style:l=""}=e,{active:c=!1}=e,u,d,f={},h={};Bt(()=>(d=new P_({addClass:g,removeClass:p,hasClass:m,setStyle:E,registerEventHandler:(y,T)=>R().addEventListener(y,T),deregisterEventHandler:(y,T)=>R().removeEventListener(y,T)}),d.init(),()=>{d.destroy()}));function m(y){return y in f?f[y]:R().classList.contains(y)}function g(y){f[y]||n(5,f[y]=!0,f)}function p(y){(!(y in f)||f[y])&&n(5,f[y]=!1,f)}function E(y,T){h[y]!=T&&(T===""||T==null?(delete h[y],n(6,h)):n(6,h[y]=T,h))}function b(){d.activate()}function S(){d.deactivate()}function O(y){d.setRippleCenter(y)}function R(){return u}function k(y){ie[y?"unshift":"push"](()=>{u=y,n(4,u)})}return t.$$set=y=>{e=D(D({},e),Re(y)),n(8,s=Q(e,i)),"use"in y&&n(0,a=y.use),"class"in y&&n(1,o=y.class),"style"in y&&n(2,l=y.style),"active"in y&&n(3,c=y.active)},[a,o,l,c,u,f,h,r,s,b,S,O,R,k]}class pc extends De{constructor(e){super();ke(this,e,Q_,Y_,Oe,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function gc(t){let e,n,i;const s=t[14].default,r=de(s,t,t[13],null);return{c(){e=ye("div"),r&&r.c(),rt(e,"class","mdc-notched-outline__notch"),rt(e,"style",n=Object.entries(t[7]).map(_c).join(" "))},m(a,o){Y(a,e,o),r&&r.m(e,null),i=!0},p(a,o){r&&r.p&&(!i||o&8192)&&he(r,s,a,a[13],i?fe(s,a[13],o,null):me(a[13]),null),(!i||o&128&&n!==(n=Object.entries(a[7]).map(_c).join(" ")))&&rt(e,"style",n)},i(a){i||(w(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(e),r&&r.d(a)}}}function J_(t){let e,n,i,s,r,a,o,l,c,u,d=!t[3]&&gc(t),f=[{class:a=ee(We({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],h={};for(let m=0;m<f.length;m+=1)h=D(h,f[m]);return{c(){e=ye("div"),n=ye("div"),i=Je(),d&&d.c(),s=Je(),r=ye("div"),rt(n,"class","mdc-notched-outline__leading"),rt(r,"class","mdc-notched-outline__trailing"),Z(e,h)},m(m,g){Y(m,e,g),Qe(e,n),Qe(e,i),d&&d.m(e,null),Qe(e,s),Qe(e,r),t[15](e),l=!0,c||(u=[$(o=Ze.call(null,e,t[0])),$(t[8].call(null,e)),Te(e,"SMUIFloatingLabel:mount",t[16]),Te(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(m,[g]){m[3]?d&&(ft(),N(d,1,1,()=>{d=null}),ht()):d?(d.p(m,g),g&8&&w(d,1)):(d=gc(m),d.c(),w(d,1),d.m(e,s)),Z(e,h=ae(f,[(!l||g&78&&a!==(a=ee(We({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:a},g&512&&m[9]])),o&&Ue(o.update)&&g&1&&o.update.call(null,m[0])},i(m){l||(w(d),l=!0)},o(m){N(d),l=!1},d(m){m&&X(e),d&&d.d(),t[15](null),c=!1,Xe(u)}}}const _c=([t,e])=>`${t}: ${e};`;function Z_(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:d=!1}=e,f,h,m,g={},p={};Bt(()=>(h=new V_({addClass:E,removeClass:b,setNotchWidthProperty:I=>S("width",I+"px"),removeNotchWidthProperty:()=>O("width")}),h.init(),()=>{h.destroy()}));function E(I){g[I]||n(6,g[I]=!0,g)}function b(I){(!(I in g)||g[I])&&n(6,g[I]=!1,g)}function S(I,j){p[I]!=j&&(j===""||j==null?(delete p[I],n(7,p)):n(7,p[I]=j,p))}function O(I){I in p&&(delete p[I],n(7,p))}function R(I){h.notch(I)}function k(){h.closeNotch()}function y(){return f}function T(I){ie[I?"unshift":"push"](()=>{f=I,n(5,f)})}const M=I=>n(4,m=I.detail),v=()=>n(4,m=void 0);return t.$$set=I=>{e=D(D({},e),Re(I)),n(9,s=Q(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,c=I.class),"notched"in I&&n(2,u=I.notched),"noLabel"in I&&n(3,d=I.noLabel),"$$scope"in I&&n(13,a=I.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),E("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):b("mdc-notched-outline--upgraded"))},[l,c,u,d,m,f,g,p,o,s,R,k,y,a,r,T,M,v]}class yc extends De{constructor(e){super();ke(this,e,Z_,J_,Oe,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var x_=vt({class:"mdc-text-field-helper-line",component:mn}),$_=vt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Gn}),ey=vt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Gn});function ty(t){let e,n,i,s,r,a=[{class:n=ee({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],o={};for(let l=0;l<a.length;l+=1)o=D(o,a[l]);return{c(){e=ye("input"),Z(e,o)},m(l,c){Y(l,e,c),e.autofocus&&e.focus(),t[25](e),s||(r=[$(i=Ze.call(null,e,t[0])),$(t[7].call(null,e)),Te(e,"input",t[26]),Te(e,"change",t[9]),Te(e,"blur",t[23]),Te(e,"focus",t[24])],s=!0)},p(l,[c]){Z(e,o=ae(a,[c&2&&n!==(n=ee({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&Ue(i.update)&&c&1&&i.update.call(null,l[0])},i:Nt,o:Nt,d(l){l&&X(e),t[25](null),s=!1,Xe(r)}}}function ny(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function iy(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=Q(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:d=null}=e,{dirty:f=!1}=e,{invalid:h=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:p=u===void 0}=e,E,b={},S={};Bt(()=>{m&&n(14,h=E.matches(":invalid"))});function O(F){if(l==="file"){n(12,d=F.currentTarget.files);return}if(F.currentTarget.value===""&&g){n(11,u=null);return}if(F.currentTarget.value===""&&p){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=ny(F.currentTarget.value));break;default:n(11,u=F.currentTarget.value);break}}function R(F){(l==="file"||l==="range")&&O(F),n(13,f=!0),m&&n(14,h=E.matches(":invalid"))}function k(F){var W;return F in b?(W=b[F])!==null&&W!==void 0?W:null:v().getAttribute(F)}function y(F,W){b[F]!==W&&n(6,b[F]=W,b)}function T(F){(!(F in b)||b[F]!=null)&&n(6,b[F]=void 0,b)}function M(){v().focus()}function v(){return E}function I(F){ri.call(this,t,F)}function j(F){ri.call(this,t,F)}function A(F){ie[F?"unshift":"push"](()=>{E=F,n(5,E)})}const V=F=>l!=="file"&&O(F);return t.$$set=F=>{e=D(D({},e),Re(F)),n(10,s=Q(e,i)),"use"in F&&n(0,a=F.use),"class"in F&&n(1,o=F.class),"type"in F&&n(2,l=F.type),"placeholder"in F&&n(3,c=F.placeholder),"value"in F&&n(11,u=F.value),"files"in F&&n(12,d=F.files),"dirty"in F&&n(13,f=F.dirty),"invalid"in F&&n(14,h=F.invalid),"updateInvalid"in F&&n(15,m=F.updateInvalid),"emptyValueNull"in F&&n(16,g=F.emptyValueNull),"emptyValueUndefined"in F&&n(17,p=F.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete S.value,n(4,S),n(2,l),n(11,u)):n(4,S.value=u==null?"":u,S))},[a,o,l,c,S,E,b,r,O,R,s,u,d,f,h,m,g,p,k,y,T,M,v,I,j,A,V]}class sy extends De{constructor(e){super();ke(this,e,iy,ty,Oe,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function ry(t){let e,n,i,s,r,a,o=[{class:n=ee({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<o.length;c+=1)l=D(l,o[c]);return{c(){e=ye("textarea"),Z(e,l)},m(c,u){Y(c,e,u),e.autofocus&&e.focus(),t[20](e),ku(e,t[0]),r||(a=[$(s=Ze.call(null,e,t[1])),$(t[7].call(null,e)),Te(e,"change",t[8]),Te(e,"blur",t[18]),Te(e,"focus",t[19]),Te(e,"input",t[21])],r=!0)},p(c,[u]){Z(e,l=ae(o,[u&4&&n!==(n=ee({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),s&&Ue(s.update)&&u&2&&s.update.call(null,c[1]),u&1&&ku(e,c[0])},i:Nt,o:Nt,d(c){c&&X(e),t[20](null),r=!1,Xe(a)}}}function oy(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=Q(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:d=!1}=e,{updateInvalid:f=!0}=e,{resizable:h=!0}=e,m,g={};Bt(()=>{f&&n(11,d=m.matches(":invalid"))});function p(){n(10,u=!0),f&&n(11,d=m.matches(":invalid"))}function E(v){var I;return v in g?(I=g[v])!==null&&I!==void 0?I:null:R().getAttribute(v)}function b(v,I){g[v]!==I&&n(6,g[v]=I,g)}function S(v){(!(v in g)||g[v]!=null)&&n(6,g[v]=void 0,g)}function O(){R().focus()}function R(){return m}function k(v){ri.call(this,t,v)}function y(v){ri.call(this,t,v)}function T(v){ie[v?"unshift":"push"](()=>{m=v,n(5,m)})}function M(){c=this.value,n(0,c)}return t.$$set=v=>{e=D(D({},e),Re(v)),n(9,s=Q(e,i)),"use"in v&&n(1,a=v.use),"class"in v&&n(2,o=v.class),"style"in v&&n(3,l=v.style),"value"in v&&n(0,c=v.value),"dirty"in v&&n(10,u=v.dirty),"invalid"in v&&n(11,d=v.invalid),"updateInvalid"in v&&n(12,f=v.updateInvalid),"resizable"in v&&n(4,h=v.resizable)},[c,a,o,l,h,m,g,r,p,s,u,d,f,E,b,S,O,R,k,y,T,M]}class ay extends De{constructor(e){super();ke(this,e,oy,ry,Oe,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const ly=t=>({}),vc=t=>({}),uy=t=>({}),Ic=t=>({}),cy=t=>({}),Ec=t=>({}),dy=t=>({}),bc=t=>({}),fy=t=>({}),Ac=t=>({}),hy=t=>({}),Tc=t=>({}),my=t=>({}),Sc=t=>({}),py=t=>({}),Cc=t=>({}),gy=t=>({}),Lc=t=>({}),_y=t=>({}),Oc=t=>({}),yy=t=>({}),wc=t=>({}),vy=t=>({}),Rc=t=>({});function Iy(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m;const g=t[50].label,p=de(g,t,t[89],Ac);i=new yr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[by]},$$scope:{ctx:t}}});const E=t[50].default,b=de(E,t,t[89],null);a=new yr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Ay]},$$scope:{ctx:t}}});const S=t[50].ripple,O=de(S,t,t[89],Ic);let R=[{class:l=ee(We({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(jc).concat([t[10]]).join(" ")},qn(t[42],["input$","label$","ripple$","outline$","helperLine$"])],k={};for(let y=0;y<R.length;y+=1)k=D(k,R[y]);return{c(){e=ye("div"),p&&p.c(),n=Je(),Ge(i.$$.fragment),s=Je(),b&&b.c(),r=Je(),Ge(a.$$.fragment),o=Je(),O&&O.c(),Z(e,k)},m(y,T){Y(y,e,T),p&&p.m(e,null),Qe(e,n),Ve(i,e,null),Qe(e,s),b&&b.m(e,null),Qe(e,r),Ve(a,e,null),Qe(e,o),O&&O.m(e,null),t[79](e),f=!0,h||(m=[$(u=pn.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),$(d=Ze.call(null,e,t[8])),$(t[34].call(null,e)),Te(e,"SMUITextfieldLeadingIcon:mount",t[80]),Te(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Te(e,"SMUITextfieldTrailingIcon:mount",t[82]),Te(e,"SMUITextfieldTrailingIcon:unmount",t[83])],h=!0)},p(y,T){p&&p.p&&(!f||T[2]&134217728)&&he(p,g,y,y[89],f?fe(g,y[89],T,fy):me(y[89]),Ac);const M={};T[2]&134217728&&(M.$$scope={dirty:T,ctx:y}),i.$set(M),b&&b.p&&(!f||T[2]&134217728)&&he(b,E,y,y[89],f?fe(E,y[89],T,null):me(y[89]),null);const v={};T[2]&134217728&&(v.$$scope={dirty:T,ctx:y}),a.$set(v),O&&O.p&&(!f||T[2]&134217728)&&he(O,S,y,y[89],f?fe(S,y[89],T,uy):me(y[89]),Ic),Z(e,k=ae(R,[(!f||T[0]&33673730|T[1]&1024&&l!==(l=ee(We({[y[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":y[12],"mdc-text-field--textarea":y[14],"mdc-text-field--filled":y[15]==="filled","mdc-text-field--outlined":y[15]==="outlined","smui-text-field--standard":y[15]==="standard"&&!y[14],"mdc-text-field--no-label":y[16]||!y[41].label,"mdc-text-field--with-leading-icon":y[41].leadingIcon,"mdc-text-field--with-trailing-icon":y[41].trailingIcon,"mdc-text-field--invalid":y[1]},y[25]))))&&{class:l},(!f||T[0]&67109888&&c!==(c=Object.entries(y[26]).map(jc).concat([y[10]]).join(" ")))&&{style:c},T[1]&2048&&qn(y[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&Ue(u.update)&&T[0]&2048&&u.update.call(null,{ripple:y[11],unbounded:!1,addClass:y[38],removeClass:y[39],addStyle:y[40]}),d&&Ue(d.update)&&T[0]&256&&d.update.call(null,y[8])},i(y){f||(w(p,y),w(i.$$.fragment,y),w(b,y),w(a.$$.fragment,y),w(O,y),f=!0)},o(y){N(p,y),N(i.$$.fragment,y),N(b,y),N(a.$$.fragment,y),N(O,y),f=!1},d(y){y&&X(e),p&&p.d(y),Be(i),b&&b.d(y),Be(a),O&&O.d(y),t[79](null),h=!1,Xe(m)}}}function Ey(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g,p,E,b,S=!t[14]&&t[15]!=="outlined"&&kc(t),O=(t[14]||t[15]==="outlined")&&Nc(t);s=new yr({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[Ly]},$$scope:{ctx:t}}});const R=t[50].default,k=de(R,t,t[89],null),y=[wy,Oy],T=[];function M(A,V){return A[14]&&typeof A[0]=="string"?0:1}o=M(t),l=T[o]=y[o](t),u=new yr({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Dy]},$$scope:{ctx:t}}});let v=!t[14]&&t[15]!=="outlined"&&t[11]&&Vc(t),I=[{class:f=ee(We({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:h=Object.entries(t[26]).map(Hc).concat([t[10]]).join(" ")},{for:void 0},qn(t[42],["input$","label$","ripple$","outline$","helperLine$"])],j={};for(let A=0;A<I.length;A+=1)j=D(j,I[A]);return{c(){e=ye("label"),S&&S.c(),n=Je(),O&&O.c(),i=Je(),Ge(s.$$.fragment),r=Je(),k&&k.c(),a=Je(),l.c(),c=Je(),Ge(u.$$.fragment),d=Je(),v&&v.c(),Z(e,j)},m(A,V){Y(A,e,V),S&&S.m(e,null),Qe(e,n),O&&O.m(e,null),Qe(e,i),Ve(s,e,null),Qe(e,r),k&&k.m(e,null),Qe(e,a),T[o].m(e,null),Qe(e,c),Ve(u,e,null),Qe(e,d),v&&v.m(e,null),t[72](e),p=!0,E||(b=[$(m=pn.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),$(g=Ze.call(null,e,t[8])),$(t[34].call(null,e)),Te(e,"SMUITextfieldLeadingIcon:mount",t[73]),Te(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Te(e,"SMUITextfieldTrailingIcon:mount",t[75]),Te(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Te(e,"SMUITextfieldCharacterCounter:mount",t[77]),Te(e,"SMUITextfieldCharacterCounter:unmount",t[78])],E=!0)},p(A,V){!A[14]&&A[15]!=="outlined"?S?(S.p(A,V),V[0]&49152&&w(S,1)):(S=kc(A),S.c(),w(S,1),S.m(e,n)):S&&(ft(),N(S,1,1,()=>{S=null}),ht()),A[14]||A[15]==="outlined"?O?(O.p(A,V),V[0]&49152&&w(O,1)):(O=Nc(A),O.c(),w(O,1),O.m(e,i)):O&&(ft(),N(O,1,1,()=>{O=null}),ht());const F={};V[2]&134217728&&(F.$$scope={dirty:V,ctx:A}),s.$set(F),k&&k.p&&(!p||V[2]&134217728)&&he(k,R,A,A[89],p?fe(R,A[89],V,null):me(A[89]),null);let W=o;o=M(A),o===W?T[o].p(A,V):(ft(),N(T[W],1,1,()=>{T[W]=null}),ht(),l=T[o],l?l.p(A,V):(l=T[o]=y[o](A),l.c()),w(l,1),l.m(e,c));const G={};V[2]&134217728&&(G.$$scope={dirty:V,ctx:A}),u.$set(G),!A[14]&&A[15]!=="outlined"&&A[11]?v?(v.p(A,V),V[0]&51200&&w(v,1)):(v=Vc(A),v.c(),w(v,1),v.m(e,null)):v&&(ft(),N(v,1,1,()=>{v=null}),ht()),Z(e,j=ae(I,[(!p||V[0]&314823171|V[1]&1024&&f!==(f=ee(We({[A[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":A[12],"mdc-text-field--textarea":A[14],"mdc-text-field--filled":A[15]==="filled","mdc-text-field--outlined":A[15]==="outlined","smui-text-field--standard":A[15]==="standard"&&!A[14],"mdc-text-field--no-label":A[16]||A[17]==null&&!A[41].label,"mdc-text-field--label-floating":A[28]||A[0]!=null&&A[0]!=="","mdc-text-field--with-leading-icon":A[35](A[22])?A[41].leadingIcon:A[22],"mdc-text-field--with-trailing-icon":A[35](A[23])?A[41].trailingIcon:A[23],"mdc-text-field--with-internal-counter":A[14]&&A[41].internalCounter,"mdc-text-field--invalid":A[1]},A[25]))))&&{class:f},(!p||V[0]&67109888&&h!==(h=Object.entries(A[26]).map(Hc).concat([A[10]]).join(" ")))&&{style:h},{for:void 0},V[1]&2048&&qn(A[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Ue(m.update)&&V[0]&49152|V[1]&4&&m.update.call(null,{ripple:!A[14]&&A[15]==="filled",unbounded:!1,addClass:A[38],removeClass:A[39],addStyle:A[40],eventTarget:A[33],activeTarget:A[33],initPromise:A[37]}),g&&Ue(g.update)&&V[0]&256&&g.update.call(null,A[8])},i(A){p||(w(S),w(O),w(s.$$.fragment,A),w(k,A),w(l),w(u.$$.fragment,A),w(v),p=!0)},o(A){N(S),N(O),N(s.$$.fragment,A),N(k,A),N(l),N(u.$$.fragment,A),N(v),p=!1},d(A){A&&X(e),S&&S.d(),O&&O.d(),Be(s),k&&k.d(A),T[o].d(),Be(u),v&&v.d(),t[72](null),E=!1,Xe(b)}}}function by(t){let e;const n=t[50].leadingIcon,i=de(n,t,t[89],bc);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,dy):me(s[89]),bc)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Ay(t){let e;const n=t[50].trailingIcon,i=de(n,t,t[89],Ec);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,cy):me(s[89]),Ec)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function kc(t){let e,n,i,s=t[15]==="filled"&&Dc(),r=!t[16]&&(t[17]!=null||t[41].label)&&Mc(t);return{c(){s&&s.c(),e=Je(),r&&r.c(),n=kt()},m(a,o){s&&s.m(a,o),Y(a,e,o),r&&r.m(a,o),Y(a,n,o),i=!0},p(a,o){a[15]==="filled"?s||(s=Dc(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!a[16]&&(a[17]!=null||a[41].label)?r?(r.p(a,o),o[0]&196608|o[1]&1024&&w(r,1)):(r=Mc(a),r.c(),w(r,1),r.m(n.parentNode,n)):r&&(ft(),N(r,1,1,()=>{r=null}),ht())},i(a){i||(w(r),i=!0)},o(a){N(r),i=!1},d(a){s&&s.d(a),a&&X(e),r&&r.d(a),a&&X(n)}}}function Dc(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-text-field__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function Mc(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Me(t[42],"label$")];let s={$$slots:{default:[Ty]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Ir({props:s}),t[51](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&268443649|a[1]&2048?ae(i,[a[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},a[0]&8192&&{required:r[13]},i[2],a[1]&2048&&ze(Me(r[42],"label$"))]):{};a[0]&131072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[51](null),Be(e,r)}}}function Ty(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=de(s,t,t[89],Rc);return{c(){n=fn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&131072)&&e!==(e=(a[17]==null?"":a[17])+"")&&Cn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,vy):me(a[89]),Rc)},i(a){i||(w(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function Nc(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Me(t[42],"outline$")];let s={$$slots:{default:[Cy]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new yc({props:s}),t[53](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&196608|a[1]&3072?ae(i,[a[0]&196608|a[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},a[1]&2048&&ze(Me(r[42],"outline$"))]):{};a[0]&268640289|a[1]&3072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[53](null),Be(e,r)}}}function Pc(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Me(t[42],"label$")];let s={$$slots:{default:[Sy]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Ir({props:s}),t[52](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&268443649|a[1]&2048?ae(i,[a[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},a[0]&8192&&{required:r[13]},i[2],a[1]&2048&&ze(Me(r[42],"label$"))]):{};a[0]&131072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[52](null),Be(e,r)}}}function Sy(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=de(s,t,t[89],wc);return{c(){n=fn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&131072)&&e!==(e=(a[17]==null?"":a[17])+"")&&Cn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,yy):me(a[89]),wc)},i(a){i||(w(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function Cy(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&Pc(t);return{c(){i&&i.c(),e=kt()},m(s,r){i&&i.m(s,r),Y(s,e,r),n=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&w(i,1)):(i=Pc(s),i.c(),w(i,1),i.m(e.parentNode,e)):i&&(ft(),N(i,1,1,()=>{i=null}),ht())},i(s){n||(w(i),n=!0)},o(s){N(i),n=!1},d(s){i&&i.d(s),s&&X(e)}}}function Ly(t){let e;const n=t[50].leadingIcon,i=de(n,t,t[89],Oc);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,_y):me(s[89]),Oc)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Oy(t){let e,n,i,s,r,a,o,l,c,u;const d=t[50].prefix,f=de(d,t,t[89],Cc);let h=t[20]!=null&&Fc(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Me(t[42],"input$")];function g(y){t[63](y)}function p(y){t[64](y)}function E(y){t[65](y)}function b(y){t[66](y)}let S={};for(let y=0;y<m.length;y+=1)S=D(S,m[y]);t[0]!==void 0&&(S.value=t[0]),t[3]!==void 0&&(S.files=t[3]),t[4]!==void 0&&(S.dirty=t[4]),t[1]!==void 0&&(S.invalid=t[1]),i=new sy({props:S}),t[62](i),ie.push(()=>In(i,"value",g)),ie.push(()=>In(i,"files",p)),ie.push(()=>In(i,"dirty",E)),ie.push(()=>In(i,"invalid",b)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let O=t[21]!=null&&Uc(t);const R=t[50].suffix,k=de(R,t,t[89],Sc);return{c(){f&&f.c(),e=Je(),h&&h.c(),n=Je(),Ge(i.$$.fragment),l=Je(),O&&O.c(),c=Je(),k&&k.c()},m(y,T){f&&f.m(y,T),Y(y,e,T),h&&h.m(y,T),Y(y,n,T),Ve(i,y,T),Y(y,l,T),O&&O.m(y,T),Y(y,c,T),k&&k.m(y,T),u=!0},p(y,T){f&&f.p&&(!u||T[2]&134217728)&&he(f,d,y,y[89],u?fe(d,y[89],T,py):me(y[89]),Cc),y[20]!=null?h?(h.p(y,T),T[0]&1048576&&w(h,1)):(h=Fc(y),h.c(),w(h,1),h.m(n.parentNode,n)):h&&(ft(),N(h,1,1,()=>{h=null}),ht());const M=T[0]&135213056|T[1]&2048?ae(m,[T[0]&262144&&{type:y[18]},T[0]&4096&&{disabled:y[12]},T[0]&8192&&{required:y[13]},T[0]&524288&&{updateInvalid:y[19]},T[0]&134217728&&{"aria-controls":y[27]},T[0]&134217728&&{"aria-describedby":y[27]},T[0]&196608&&ze(y[16]&&y[17]!=null?{placeholder:y[17]}:{}),T[1]&2048&&ze(Me(y[42],"input$"))]):{};!s&&T[0]&1&&(s=!0,M.value=y[0],vn(()=>s=!1)),!r&&T[0]&8&&(r=!0,M.files=y[3],vn(()=>r=!1)),!a&&T[0]&16&&(a=!0,M.dirty=y[4],vn(()=>a=!1)),!o&&T[0]&2&&(o=!0,M.invalid=y[1],vn(()=>o=!1)),i.$set(M),y[21]!=null?O?(O.p(y,T),T[0]&2097152&&w(O,1)):(O=Uc(y),O.c(),w(O,1),O.m(c.parentNode,c)):O&&(ft(),N(O,1,1,()=>{O=null}),ht()),k&&k.p&&(!u||T[2]&134217728)&&he(k,R,y,y[89],u?fe(R,y[89],T,my):me(y[89]),Sc)},i(y){u||(w(f,y),w(h),w(i.$$.fragment,y),w(O),w(k,y),u=!0)},o(y){N(f,y),N(h),N(i.$$.fragment,y),N(O),N(k,y),u=!1},d(y){f&&f.d(y),y&&X(e),h&&h.d(y),y&&X(n),t[62](null),Be(i,y),y&&X(l),O&&O.d(y),y&&X(c),k&&k.d(y)}}}function wy(t){let e,n,i,s,r,a,o,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Me(t[42],"input$")];function u(p){t[55](p)}function d(p){t[56](p)}function f(p){t[57](p)}let h={};for(let p=0;p<c.length;p+=1)h=D(h,c[p]);t[0]!==void 0&&(h.value=t[0]),t[4]!==void 0&&(h.dirty=t[4]),t[1]!==void 0&&(h.invalid=t[1]),n=new ay({props:h}),t[54](n),ie.push(()=>In(n,"value",u)),ie.push(()=>In(n,"dirty",d)),ie.push(()=>In(n,"invalid",f)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const m=t[50].internalCounter,g=de(m,t,t[89],Lc);return{c(){e=ye("span"),Ge(n.$$.fragment),a=Je(),g&&g.c(),rt(e,"class",o=ee({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(p,E){Y(p,e,E),Ve(n,e,null),Qe(e,a),g&&g.m(e,null),l=!0},p(p,E){const b=E[0]&134754304|E[1]&2048?ae(c,[E[0]&4096&&{disabled:p[12]},E[0]&8192&&{required:p[13]},E[0]&524288&&{updateInvalid:p[19]},E[0]&134217728&&{"aria-controls":p[27]},E[0]&134217728&&{"aria-describedby":p[27]},E[1]&2048&&ze(Me(p[42],"input$"))]):{};!i&&E[0]&1&&(i=!0,b.value=p[0],vn(()=>i=!1)),!s&&E[0]&16&&(s=!0,b.dirty=p[4],vn(()=>s=!1)),!r&&E[0]&2&&(r=!0,b.invalid=p[1],vn(()=>r=!1)),n.$set(b),g&&g.p&&(!l||E[2]&134217728)&&he(g,m,p,p[89],l?fe(m,p[89],E,gy):me(p[89]),Lc),(!l||E[1]&2048&&o!==(o=ee({"mdc-text-field__resizer":!("input$resizable"in p[42])||p[42].input$resizable})))&&rt(e,"class",o)},i(p){l||(w(n.$$.fragment,p),w(g,p),l=!0)},o(p){N(n.$$.fragment,p),N(g,p),l=!1},d(p){p&&X(e),t[54](null),Be(n),g&&g.d(p)}}}function Fc(t){let e,n;return e=new $_({props:{$$slots:{default:[Ry]},$$scope:{ctx:t}}}),{c(){Ge(e.$$.fragment)},m(i,s){Ve(e,i,s),n=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){N(e.$$.fragment,i),n=!1},d(i){Be(e,i)}}}function Ry(t){let e;return{c(){e=fn(t[20])},m(n,i){Y(n,e,i)},p(n,i){i[0]&1048576&&Cn(e,n[20])},d(n){n&&X(e)}}}function Uc(t){let e,n;return e=new ey({props:{$$slots:{default:[ky]},$$scope:{ctx:t}}}),{c(){Ge(e.$$.fragment)},m(i,s){Ve(e,i,s),n=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){N(e.$$.fragment,i),n=!1},d(i){Be(e,i)}}}function ky(t){let e;return{c(){e=fn(t[21])},m(n,i){Y(n,e,i)},p(n,i){i[0]&2097152&&Cn(e,n[21])},d(n){n&&X(e)}}}function Dy(t){let e;const n=t[50].trailingIcon,i=de(n,t,t[89],Tc);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,hy):me(s[89]),Tc)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Vc(t){let e,n;const i=[Me(t[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new pc({props:s}),t[71](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&2048?ae(i,[ze(Me(r[42],"ripple$"))]):{};e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[71](null),Be(e,r)}}}function Bc(t){let e,n;const i=[Me(t[42],"helperLine$")];let s={$$slots:{default:[My]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new x_({props:s}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&2048?ae(i,[ze(Me(r[42],"helperLine$"))]):{};a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){Be(e,r)}}}function My(t){let e;const n=t[50].helper,i=de(n,t,t[89],vc);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,ly):me(s[89]),vc)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Ny(t){let e,n,i,s,r;const a=[Ey,Iy],o=[];function l(u,d){return u[36]?0:1}e=l(t),n=o[e]=a[e](t);let c=t[41].helper&&Bc(t);return{c(){n.c(),i=Je(),c&&c.c(),s=kt()},m(u,d){o[e].m(u,d),Y(u,i,d),c&&c.m(u,d),Y(u,s,d),r=!0},p(u,d){n.p(u,d),u[41].helper?c?(c.p(u,d),d[1]&1024&&w(c,1)):(c=Bc(u),c.c(),w(c,1),c.m(s.parentNode,s)):c&&(ft(),N(c,1,1,()=>{c=null}),ht())},i(u){r||(w(n),w(c),r=!0)},o(u){N(n),N(c),r=!1},d(u){o[e].d(u),u&&X(i),c&&c.d(u),u&&X(s)}}}const Hc=([t,e])=>`${t}: ${e};`,jc=([t,e])=>`${t}: ${e};`;function Py(t,e,n){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=Q(e,s),{$$slots:a={},$$scope:o}=e;const l=wu(a),{applyPassive:c}=zu,u=qe(Se());let d=()=>{};function f(C){return C===d}let{use:h=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:p=!0}=e,{disabled:E=!1}=e,{required:b=!1}=e,{textarea:S=!1}=e,{variant:O=S?"outlined":"standard"}=e,{noLabel:R=!1}=e,{label:k=void 0}=e,{type:y="text"}=e,{value:T=d}=e,{files:M=d}=e;const v=!f(T)||!f(M);f(T)&&(T=void 0),f(M)&&(M=null);let{invalid:I=d}=e,{updateInvalid:j=f(I)}=e;f(I)&&(I=!1);let{dirty:A=!1}=e,{prefix:V=void 0}=e,{suffix:F=void 0}=e,{validateOnValueChange:W=j}=e,{useNativeValidation:G=j}=e,{withLeadingIcon:J=d}=e,{withTrailingIcon:be=d}=e,{input:re=void 0}=e,{floatingLabel:Fe=void 0}=e,{lineRipple:ge=void 0}=e,{notchedOutline:st=void 0}=e,x,H,Ae={},le={},q,U=!1,Ee=gt("SMUI:addLayoutListener"),lt,Rt,z=new Promise(C=>Rt=C),pe,Ke,it,Ye,Vt=T;Ee&&(lt=Ee(dt)),Bt(()=>{if(n(48,H=new q_({addClass:At,removeClass:te,hasClass:an,registerTextFieldInteractionHandler:(C,Tt)=>xe().addEventListener(C,Tt),deregisterTextFieldInteractionHandler:(C,Tt)=>xe().removeEventListener(C,Tt),registerValidationAttributeChangeHandler:C=>{const Tt=us=>us.map(cs=>cs.attributeName).filter(cs=>cs),ar=new MutationObserver(us=>{G&&C(Tt(us))}),ca={attributes:!0};return re&&ar.observe(re.getElement(),ca),ar},deregisterValidationAttributeChangeHandler:C=>{C.disconnect()},getNativeInput:()=>{var C;return(C=re==null?void 0:re.getElement())!==null&&C!==void 0?C:null},setInputAttr:(C,Tt)=>{re==null||re.addAttr(C,Tt)},removeInputAttr:C=>{re==null||re.removeAttr(C)},isFocused:()=>document.activeElement===(re==null?void 0:re.getElement()),registerInputInteractionHandler:(C,Tt)=>{re==null||re.getElement().addEventListener(C,Tt,c())},deregisterInputInteractionHandler:(C,Tt)=>{re==null||re.getElement().removeEventListener(C,Tt,c())},floatLabel:C=>Fe&&Fe.float(C),getLabelWidth:()=>Fe?Fe.getWidth():0,hasLabel:()=>!!Fe,shakeLabel:C=>Fe&&Fe.shake(C),setLabelRequired:C=>Fe&&Fe.setRequired(C),activateLineRipple:()=>ge&&ge.activate(),deactivateLineRipple:()=>ge&&ge.deactivate(),setLineRippleTransformOrigin:C=>ge&&ge.setRippleCenter(C),closeOutline:()=>st&&st.closeNotch(),hasOutline:()=>!!st,notchOutline:C=>st&&st.notch(C)},{get helperText(){return it},get characterCounter(){return Ye},get leadingIcon(){return pe},get trailingIcon(){return Ke}})),v){if(re==null)throw new Error("SMUI Textfield initialized without Input component.");H.init()}else mp().then(()=>{if(re==null)throw new Error("SMUI Textfield initialized without Input component.");H.init()});return Rt(),()=>{H.destroy()}}),hn(()=>{lt&&lt()});function an(C){var Tt;return C in Ae?(Tt=Ae[C])!==null&&Tt!==void 0?Tt:null:xe().classList.contains(C)}function At(C){Ae[C]||n(25,Ae[C]=!0,Ae)}function te(C){(!(C in Ae)||Ae[C])&&n(25,Ae[C]=!1,Ae)}function ve(C,Tt){le[C]!=Tt&&(Tt===""||Tt==null?(delete le[C],n(26,le)):n(26,le[C]=Tt,le))}function _t(){re==null||re.focus()}function dt(){if(H){const C=H.shouldFloat;H.notchOutline(C)}}function xe(){return x}function P(C){ie[C?"unshift":"push"](()=>{Fe=C,n(5,Fe)})}function oe(C){ie[C?"unshift":"push"](()=>{Fe=C,n(5,Fe)})}function B(C){ie[C?"unshift":"push"](()=>{st=C,n(7,st)})}function ue(C){ie[C?"unshift":"push"](()=>{re=C,n(2,re)})}function ce(C){T=C,n(0,T)}function ut(C){A=C,n(4,A)}function yn(C){I=C,n(1,I),n(48,H),n(19,j)}const ls=()=>n(28,U=!1),Vo=()=>n(28,U=!0),Bo=C=>$e(x,"blur",C),Ho=C=>$e(x,"focus",C);function jo(C){ie[C?"unshift":"push"](()=>{re=C,n(2,re)})}function qo(C){T=C,n(0,T)}function Ri(C){M=C,n(3,M)}function zo(C){A=C,n(4,A)}function rr(C){I=C,n(1,I),n(48,H),n(19,j)}const Go=()=>n(28,U=!1),or=()=>n(28,U=!0),ki=C=>$e(x,"blur",C),Wo=C=>$e(x,"focus",C);function Ko(C){ie[C?"unshift":"push"](()=>{ge=C,n(6,ge)})}function Xo(C){ie[C?"unshift":"push"](()=>{x=C,n(24,x)})}const Yo=C=>n(29,pe=C.detail),Qo=()=>n(29,pe=void 0),Jo=C=>n(30,Ke=C.detail),Zo=()=>n(30,Ke=void 0),xo=C=>n(32,Ye=C.detail),$o=()=>n(32,Ye=void 0);function ea(C){ie[C?"unshift":"push"](()=>{x=C,n(24,x)})}const ta=C=>n(29,pe=C.detail),na=()=>n(29,pe=void 0),ia=C=>n(30,Ke=C.detail),sa=()=>n(30,Ke=void 0),ra=C=>n(27,q=C.detail),oa=C=>n(31,it=C.detail),aa=()=>{n(27,q=void 0),n(31,it=void 0)},la=C=>n(32,Ye=C.detail),ua=()=>n(32,Ye=void 0);return t.$$set=C=>{e=D(D({},e),Re(C)),n(42,r=Q(e,s)),"use"in C&&n(8,h=C.use),"class"in C&&n(9,m=C.class),"style"in C&&n(10,g=C.style),"ripple"in C&&n(11,p=C.ripple),"disabled"in C&&n(12,E=C.disabled),"required"in C&&n(13,b=C.required),"textarea"in C&&n(14,S=C.textarea),"variant"in C&&n(15,O=C.variant),"noLabel"in C&&n(16,R=C.noLabel),"label"in C&&n(17,k=C.label),"type"in C&&n(18,y=C.type),"value"in C&&n(0,T=C.value),"files"in C&&n(3,M=C.files),"invalid"in C&&n(1,I=C.invalid),"updateInvalid"in C&&n(19,j=C.updateInvalid),"dirty"in C&&n(4,A=C.dirty),"prefix"in C&&n(20,V=C.prefix),"suffix"in C&&n(21,F=C.suffix),"validateOnValueChange"in C&&n(43,W=C.validateOnValueChange),"useNativeValidation"in C&&n(44,G=C.useNativeValidation),"withLeadingIcon"in C&&n(22,J=C.withLeadingIcon),"withTrailingIcon"in C&&n(23,be=C.withTrailingIcon),"input"in C&&n(2,re=C.input),"floatingLabel"in C&&n(5,Fe=C.floatingLabel),"lineRipple"in C&&n(6,ge=C.lineRipple),"notchedOutline"in C&&n(7,st=C.notchedOutline),"$$scope"in C&&n(89,o=C.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=re&&re.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&H&&H.isValid()!==!I&&(j?n(1,I=!H.isValid()):H.setValid(!I)),t.$$.dirty[1]&135168&&H&&H.getValidateOnValueChange()!==W&&H.setValidateOnValueChange(f(W)?!1:W),t.$$.dirty[1]&139264&&H&&H.setUseNativeValidation(f(G)?!0:G),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&H&&H.setDisabled(E),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&H&&v&&Vt!==T){n(49,Vt=T);const C=`${T}`;H.getValue()!==C&&H.setValue(C)}},[T,I,re,M,A,Fe,ge,st,h,m,g,p,E,b,S,O,R,k,y,j,V,F,J,be,x,Ae,le,q,U,pe,Ke,it,Ye,i,u,f,v,z,At,te,ve,l,r,W,G,_t,dt,xe,H,Vt,a,P,oe,B,ue,ce,ut,yn,ls,Vo,Bo,Ho,jo,qo,Ri,zo,rr,Go,or,ki,Wo,Ko,Xo,Yo,Qo,Jo,Zo,xo,$o,ea,ta,na,ia,sa,ra,oa,aa,la,ua,o]}class sS extends De{constructor(e){super();ke(this,e,Py,Ny,Oe,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fy={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Uy={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},ms={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},St;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(St||(St={}));var ui;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(ui||(ui={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qc=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=ui.TOP_START,i.originCorner=ui.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Fy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Uy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ms},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return ui},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,s=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^St.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},ms.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},ms.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,St.BOTTOM)?"bottom":"top",a=this.hasBit(i,St.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,d=c.surfaceSize,f=(n={},n[a]=o,n[r]=l,n);u.width/d.width>ms.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(f),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,St.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:s.width-n.right,bottom:s.height-n.bottom,left:n.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,a=i.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,St.BOTTOM),c,u;l?(c=s.top-o+this.anchorMargin.bottom,u=s.bottom-o-this.anchorMargin.bottom):(c=s.top-o+this.anchorMargin.top,u=s.bottom-o+r.height-this.anchorMargin.top);var d=u-a.height>0;!d&&c>u&&(n=this.setBit(n,St.BOTTOM));var f=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,St.FLIP_RTL),m=this.hasBit(this.anchorCorner,St.RIGHT)||this.hasBit(n,St.RIGHT),g=!1;f&&h?g=!m:g=m;var p,E;g?(p=s.left+r.width+this.anchorMargin.right,E=s.right-this.anchorMargin.right):(p=s.left+this.anchorMargin.left,E=s.right+r.width-this.anchorMargin.left);var b=p-a.width>0,S=E-a.width>0,O=this.hasBit(n,St.FLIP_RTL)&&this.hasBit(n,St.RIGHT);return S&&O&&f||!b&&O?n=this.unsetBit(n,St.RIGHT):(b&&g&&f||b&&!g&&m||!S&&p>=E)&&(n=this.setBit(n,St.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(n,St.BOTTOM),a=this.hasBit(this.anchorCorner,St.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-o,a||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,a&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,St.RIGHT),r=this.hasBit(this.anchorCorner,St.RIGHT);if(s){var a=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,St.BOTTOM),r=this.hasBit(this.anchorCorner,St.BOTTOM),a=0;return s?a=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(n){var i,s,r=this.measurements,a=r.windowScroll,o=r.viewportDistance,l=r.surfaceSize,c=r.viewportSize,u=Object.keys(n);try{for(var d=Ln(u),f=d.next();!f.done;f=d.next()){var h=f.value,m=n[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){n[h]=(c.width-l.width)/2;continue}m+=o[h],this.isFixedPosition||(h==="top"?m+=a.y:h==="bottom"?m-=a.y:h==="left"?m+=a.x:m-=a.x),n[h]=m}}catch(g){i={error:g}}finally{try{f&&!f.done&&(s=d.return)&&s.call(d)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){n.adapter.restoreFocus()},ms.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(Qt);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zc={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function Vy(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function By(t,e){if(Vy(t)&&e in zc){var n=t.document.createElement("div"),i=zc[e],s=i.standard,r=i.prefixed,a=s in n.style;return a?s:r}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pi={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Fi={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Hy={FOCUS_ROOT_INDEX:-1},Ui;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Ui||(Ui={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jy=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Ui.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Pi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Fi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Hy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,s=n.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,s=this.adapter.getElementIndex(n);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,Fi.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=i.adapter.getElementIndex(n);a>=0&&i.adapter.isSelectableItemAtIndex(a)&&i.setSelectedIndex(a)},qc.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ui.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ui.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ui.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Fi.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Pi.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,Pi.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,Fi.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Fi.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Fi.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),s=n>=0&&n<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Qt);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Et={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},La={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},ci={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qy=function(t){Dt(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return s.disabled=!1,s.isMenuOpen=!1,s.useDefaultValidation=!0,s.customValidity=!0,s.lastSelectedIndex=ci.UNSET_INDEX,s.clickDebounceTimeout=0,s.recentlyClicked=!1,s.leadingIcon=i.leadingIcon,s.helperText=i.helperText,s}return Object.defineProperty(e,"cssClasses",{get:function(){return Et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ci},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return La},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(n,i,s){i===void 0&&(i=!1),s===void 0&&(s=!1),!(n>=this.adapter.getMenuItemCount())&&(n===ci.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()),this.adapter.setSelectedIndex(n),i&&this.adapter.closeMenu(),!s&&this.lastSelectedIndex!==n&&this.handleChange(),this.lastSelectedIndex=n)},e.prototype.setValue=function(n,i){i===void 0&&(i=!1);var s=this.adapter.getMenuItemValues().indexOf(n);this.setSelectedIndex(s,!1,i)},e.prototype.getValue=function(){var n=this.adapter.getSelectedIndex(),i=this.adapter.getMenuItemValues();return n!==ci.UNSET_INDEX?i[n]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(n){this.disabled=n,this.disabled?(this.adapter.addClass(Et.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(Et.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(Et.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var n=this.getValue().length>0,i=this.adapter.hasClass(Et.FOCUSED),s=n||i,r=this.adapter.hasClass(Et.REQUIRED);this.notchOutline(s),this.adapter.floatLabel(s),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var n=this.adapter.getMenuItemValues(),i=n.indexOf(this.getValue());this.setSelectedIndex(i,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var n=this.getSelectedIndex(),i=n>=0?n:0;this.adapter.focusMenuItemAtIndex(i)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(Et.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var n=this.adapter.hasClass(Et.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(n){this.setSelectedIndex(n,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(Et.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(n){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(n),this.openMenu()}},e.prototype.handleKeydown=function(n){if(!(this.isMenuOpen||!this.adapter.hasClass(Et.FOCUSED))){var i=Ct(n)===je.ENTER,s=Ct(n)===je.SPACEBAR,r=Ct(n)===je.ARROW_UP,a=Ct(n)===je.ARROW_DOWN,o=n.ctrlKey||n.metaKey;if(!o&&(!s&&n.key&&n.key.length===1||s&&this.adapter.isTypeaheadInProgress())){var l=s?" ":n.key,c=this.adapter.typeaheadMatchItem(l,this.getSelectedIndex());c>=0&&this.setSelectedIndex(c),n.preventDefault();return}!i&&!s&&!r&&!a||(r&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):a&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),n.preventDefault())}},e.prototype.notchOutline=function(n){if(!!this.adapter.hasOutline()){var i=this.adapter.hasClass(Et.FOCUSED);if(n){var s=ci.LABEL_SCALE,r=this.adapter.getLabelWidth()*s;this.adapter.notchOutline(r)}else i||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(n){this.useDefaultValidation=n},e.prototype.setValid=function(n){this.useDefaultValidation||(this.customValidity=n),this.adapter.setSelectAnchorAttr("aria-invalid",(!n).toString()),n?(this.adapter.removeClass(Et.INVALID),this.adapter.removeMenuClass(Et.MENU_INVALID)):(this.adapter.addClass(Et.INVALID),this.adapter.addMenuClass(Et.MENU_INVALID)),this.syncHelperTextValidity(n)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(Et.REQUIRED)&&!this.adapter.hasClass(Et.DISABLED)?this.getSelectedIndex()!==ci.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},e.prototype.setRequired=function(n){n?this.adapter.addClass(Et.REQUIRED):this.adapter.removeClass(Et.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",n.toString()),this.adapter.setLabelRequired(n)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var n=this.adapter.getAnchorElement();n&&(this.adapter.setMenuAnchorElement(n),this.adapter.setMenuAnchorCorner(ui.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(Et.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(Et.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(Et.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var n=this.adapter.hasClass(Et.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(n){if(!!this.helperText){this.helperText.setValidity(n);var i=this.helperText.isVisible(),s=this.helperText.getId();i&&s?this.adapter.setSelectAnchorAttr(La.ARIA_DESCRIBEDBY,s):this.adapter.removeSelectAnchorAttr(La.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var n=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){n.recentlyClicked=!1},ci.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var di={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},fi={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zy=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return fi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(di.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.setValidation=function(n){n?this.adapter.addClass(fi.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(fi.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(n){n?this.adapter.addClass(fi.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(fi.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(fi.HELPER_TEXT_VALIDATION_MSG);if(!!i){var s=this.adapter.hasClass(fi.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!n||s;if(r){this.showToScreenReader(),n?this.adapter.removeAttr(di.ROLE):this.adapter.setAttr(di.ROLE,"alert");return}this.adapter.removeAttr(di.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(di.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(di.ARIA_HIDDEN,"true")},e}(Qt);const{document:Gy}=_a;function Wy(t){let e,n,i,s,r,a,o,l;const c=t[30].default,u=de(c,t,t[29],null);let d=[{class:i=ee(We({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:s=Object.entries(t[10]).map(Gc).concat([t[3]]).join(" ")},t[12]],f={};for(let h=0;h<d.length;h+=1)f=D(f,d[h]);return{c(){e=Je(),n=ye("div"),u&&u.c(),Z(n,f)},m(h,m){Y(h,e,m),Y(h,n,m),u&&u.m(n,null),t[32](n),a=!0,o||(l=[Te(Gy.body,"click",t[31],!0),$(r=Ze.call(null,n,t[1])),$(t[11].call(null,n)),Te(n,"keydown",t[33])],o=!0)},p(h,m){u&&u.p&&(!a||m[0]&536870912)&&he(u,c,h,h[29],a?fe(c,h[29],m,null):me(h[29]),null),Z(n,f=ae(d,[(!a||m[0]&628&&i!==(i=ee(We({[h[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":h[5],"mdc-menu-surface--open":h[4],"smui-menu-surface--static":h[4],"mdc-menu-surface--fullwidth":h[6]},h[9]))))&&{class:i},(!a||m[0]&1032&&s!==(s=Object.entries(h[10]).map(Gc).concat([h[3]]).join(" ")))&&{style:s},m[0]&4096&&h[12]])),r&&Ue(r.update)&&m[0]&2&&r.update.call(null,h[1])},i(h){a||(w(u,h),a=!0)},o(h){N(u,h),a=!1},d(h){h&&X(e),h&&X(n),u&&u.d(h),t[32](null),o=!1,Xe(l)}}}const Gc=([t,e])=>`${t}: ${e};`;function Ky(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;var o,l,c;const u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{static:m=!1}=e,{anchor:g=!0}=e,{fixed:p=!1}=e,{open:E=m}=e,{fullWidth:b=!1}=e,{quickOpen:S=!1}=e,{anchorElement:O=void 0}=e,{anchorCorner:R=void 0}=e,{anchorMargin:k={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:y=0}=e,{horizontallyCenteredOnViewport:T=!1}=e,M,v,I={},j={},A;et("SMUI:list:role","menu"),et("SMUI:list:item:role","menuitem");const V=ui;Bt(()=>(n(8,v=new qc({addClass:W,removeClass:G,hasClass:F,hasAnchor:()=>!!O,notifyClose:()=>{n(0,E=m),E||$e(M,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,E=m),E||$e(M,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,E=!0),$e(M,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:U=>M.contains(U),isRtl:()=>getComputedStyle(M).getPropertyValue("direction")==="rtl",setTransformOrigin:U=>{const Ee=`${By(window,"transform")}-origin`;n(10,j[Ee]=U,j)},isFocused:()=>document.activeElement===M,saveFocus:()=>{var U;A=(U=document.activeElement)!==null&&U!==void 0?U:void 0},restoreFocus:()=>{M.contains(document.activeElement)&&A&&"focus"in A&&A.focus()},getInnerDimensions:()=>({width:M.offsetWidth,height:M.offsetHeight}),getAnchorDimensions:()=>O?O.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:U=>{n(10,j.left="left"in U?`${U.left}px`:"",j),n(10,j.right="right"in U?`${U.right}px`:"",j),n(10,j.top="top"in U?`${U.top}px`:"",j),n(10,j.bottom="bottom"in U?`${U.bottom}px`:"",j)},setMaxHeight:U=>{n(10,j.maxHeight=U,j)}})),$e(M,"SMUIMenuSurface:mount",{get open(){return E},set open(U){n(0,E=U)},closeProgrammatic:J}),v.init(),()=>{var U;const Ee=v.isHoistedElement;v.destroy(),Ee&&((U=M.parentNode)===null||U===void 0||U.removeChild(M))})),hn(()=>{var q;g&&M&&((q=M.parentElement)===null||q===void 0||q.classList.remove("mdc-menu-surface--anchor"))});function F(q){return q in I?I[q]:x().classList.contains(q)}function W(q){I[q]||n(9,I[q]=!0,I)}function G(q){(!(q in I)||I[q])&&n(9,I[q]=!1,I)}function J(q){v.close(q),n(0,E=!1)}function be(){return E}function re(q){n(0,E=q)}function Fe(q,U){return v.setAbsolutePosition(q,U)}function ge(q){return v.setIsHoisted(q)}function st(){return v.isFixed()}function x(){return M}const H=q=>v&&E&&v.handleBodyClick(q);function Ae(q){ie[q?"unshift":"push"](()=>{M=q,n(7,M)})}const le=q=>v&&v.handleKeydown(q);return t.$$set=q=>{e=D(D({},e),Re(q)),n(12,s=Q(e,i)),"use"in q&&n(1,d=q.use),"class"in q&&n(2,f=q.class),"style"in q&&n(3,h=q.style),"static"in q&&n(4,m=q.static),"anchor"in q&&n(14,g=q.anchor),"fixed"in q&&n(5,p=q.fixed),"open"in q&&n(0,E=q.open),"fullWidth"in q&&n(6,b=q.fullWidth),"quickOpen"in q&&n(15,S=q.quickOpen),"anchorElement"in q&&n(13,O=q.anchorElement),"anchorCorner"in q&&n(16,R=q.anchorCorner),"anchorMargin"in q&&n(17,k=q.anchorMargin),"maxHeight"in q&&n(18,y=q.maxHeight),"horizontallyCenteredOnViewport"in q&&n(19,T=q.horizontallyCenteredOnViewport),"$$scope"in q&&n(29,a=q.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&M&&g&&!(n(26,o=M.parentElement)===null||o===void 0?void 0:o.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=M.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,O=n(28,c=M.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&v&&v.isOpen()!==E&&(E?v.open():v.close()),t.$$.dirty[0]&33024&&v&&v.setQuickOpen(S),t.$$.dirty[0]&288&&v&&v.setFixedPosition(p),t.$$.dirty[0]&262400&&v&&y>0&&v.setMaxHeight(y),t.$$.dirty[0]&524544&&v&&v.setIsHorizontallyCenteredOnViewport(T),t.$$.dirty[0]&65792&&v&&R!=null&&(typeof R=="string"?v.setAnchorCorner(V[R]):v.setAnchorCorner(R)),t.$$.dirty[0]&131328&&v&&v.setAnchorMargin(k)},[E,d,f,h,m,p,b,M,v,I,j,u,s,O,g,S,R,k,y,T,be,re,Fe,ge,st,x,o,l,c,a,r,H,Ae,le]}class Xy extends De{constructor(e){super();ke(this,e,Ky,Wy,Oe,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function Yy(t,{addClass:e=i=>t.classList.add(i),removeClass:n=i=>t.classList.remove(i)}={}){return e("mdc-menu-surface--anchor"),{destroy(){n("mdc-menu-surface--anchor")}}}function Qy(t){let e;const n=t[16].default,i=de(n,t,t[21],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&he(i,n,s,s[21],e?fe(n,s[21],r,null):me(s[21]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Jy(t){let e,n,i;const s=[{use:t[5]},{class:ee({[t[1]]:!0,"mdc-menu":!0})},t[9]];function r(o){t[18](o)}let a={$$slots:{default:[Qy]},$$scope:{ctx:t}};for(let o=0;o<s.length;o+=1)a=D(a,s[o]);return t[0]!==void 0&&(a.open=t[0]),e=new Xy({props:a}),t[17](e),ie.push(()=>In(e,"open",r)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){Ge(e.$$.fragment)},m(o,l){Ve(e,o,l),i=!0},p(o,[l]){const c=l&546?ae(s,[l&32&&{use:o[5]},l&2&&{class:ee({[o[1]]:!0,"mdc-menu":!0})},l&512&&ze(o[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.open=o[0],vn(()=>n=!1)),e.$set(c)},i(o){i||(w(e.$$.fragment,o),i=!0)},o(o){N(e.$$.fragment,o),i=!1},d(o){t[17](null),Be(e,o)}}}function Zy(t,e,n){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=Q(e,s),{$$slots:a={},$$scope:o}=e;const{closest:l}=hr,c=qe(Se());let{use:u=[]}=e,{class:d=""}=e,{open:f=!1}=e,h,m,g,p;Bt(()=>(n(3,m=new jy({addClassToElementAtIndex:(A,V)=>{p.addClassForElementIndex(A,V)},removeClassFromElementAtIndex:(A,V)=>{p.removeClassForElementIndex(A,V)},addAttributeToElementAtIndex:(A,V,F)=>{p.setAttributeForElementIndex(A,V,F)},removeAttributeFromElementAtIndex:(A,V)=>{p.removeAttributeForElementIndex(A,V)},getAttributeFromElementAtIndex:(A,V)=>p.getAttributeFromElementIndex(A,V),elementContainsClass:(A,V)=>A.classList.contains(V),closeSurface:A=>g.closeProgrammatic(A),getElementIndex:A=>p.getOrderedList().map(V=>V.element).indexOf(A),notifySelected:A=>$e(T(),"SMUIMenu:selected",{index:A.index,item:p.getOrderedList()[A.index].element},void 0,!0),getMenuItemCount:()=>p.items.length,focusItemAtIndex:A=>p.focusItemAtIndex(A),focusListRoot:()=>"focus"in p.element&&p.element.focus(),isSelectableItemAtIndex:A=>!!l(p.getOrderedList()[A].element,`.${Pi.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:A=>{const V=p.getOrderedList(),F=l(V[A].element,`.${Pi.MENU_SELECTION_GROUP}`),W=F==null?void 0:F.querySelector(`.${Pi.MENU_SELECTED_LIST_ITEM}`);return W?V.map(G=>G.element).indexOf(W):-1}})),$e(T(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function E(A){m&&m.handleKeydown(A)}function b(A){g||(g=A.detail)}function S(A){p||n(4,p=A.detail)}function O(){return f}function R(A){n(0,f=A)}function k(A){m.setDefaultFocusState(A)}function y(){return m.getSelectedIndex()}function T(){return h.getElement()}function M(A){ie[A?"unshift":"push"](()=>{h=A,n(2,h)})}function v(A){f=A,n(0,f)}const I=()=>m&&m.handleMenuSurfaceOpened(),j=A=>m&&m.handleItemAction(p.getOrderedList()[A.detail.index].element);return t.$$set=A=>{e=D(D({},e),Re(A)),n(9,r=Q(e,s)),"use"in A&&n(10,u=A.use),"class"in A&&n(1,d=A.class),"open"in A&&n(0,f=A.open),"$$scope"in A&&n(21,o=A.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[f,d,h,m,p,i,E,b,S,r,u,O,R,k,y,T,a,M,v,I,j,o]}class xy extends De{constructor(e){super();ke(this,e,Zy,Jy,Oe,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}vt({class:"mdc-menu__selection-group-icon",component:s_});function $y(t){let e;return{c(){e=fn(t[8])},m(n,i){Y(n,e,i)},p(n,i){i&256&&Cn(e,n[8])},i:Nt,o:Nt,d(n){n&&X(e)}}}function ev(t){let e;const n=t[13].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function tv(t){let e,n,i,s,r,a,o,l,c;const u=[ev,$y],d=[];function f(g,p){return g[8]==null?0:1}n=f(t),i=d[n]=u[n](t);let h=[{class:s=ee(We({[t[1]]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":t[4],"mdc-select-helper-text--validation-msg-persistent":t[3]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let g=0;g<h.length;g+=1)m=D(m,h[g]);return{c(){e=ye("div"),i.c(),Z(e,m)},m(g,p){Y(g,e,p),d[n].m(e,null),t[14](e),o=!0,l||(c=[$(a=Ze.call(null,e,t[0])),$(t[9].call(null,e))],l=!0)},p(g,[p]){let E=n;n=f(g),n===E?d[n].p(g,p):(ft(),N(d[E],1,1,()=>{d[E]=null}),ht(),i=d[n],i?i.p(g,p):(i=d[n]=u[n](g),i.c()),w(i,1),i.m(e,null)),Z(e,m=ae(h,[(!o||p&90&&s!==(s=ee(We({[g[1]]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":g[4],"mdc-select-helper-text--validation-msg-persistent":g[3]},g[6]))))&&{class:s},(!o||p&8&&r!==(r=g[3]?void 0:"true"))&&{"aria-hidden":r},(!o||p&4)&&{id:g[2]},p&128&&g[7],p&1024&&g[10]])),a&&Ue(a.update)&&p&1&&a.update.call(null,g[0])},i(g){o||(w(i),o=!0)},o(g){N(i),o=!1},d(g){g&&X(e),d[n].d(),t[14](null),l=!1,Xe(c)}}}let nv=0;function iv(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-select-helper-text-"+nv++}=e,{persistent:d=!1}=e,{validationMsg:f=!1}=e,h,m,g={},p={},E;Bt(()=>(m=new zy({addClass:S,removeClass:O,hasClass:b,getAttr:R,setAttr:k,removeAttr:y,setContent:v=>{n(8,E=v)}}),u.startsWith("SMUI-select-helper-text-")&&$e(T(),"SMUISelectHelperText:id",u),$e(T(),"SMUISelectHelperText:mount",m),m.init(),()=>{$e(T(),"SMUISelectHelperText:unmount",m),m.destroy()}));function b(v){return v in g?g[v]:T().classList.contains(v)}function S(v){g[v]||n(6,g[v]=!0,g)}function O(v){(!(v in g)||g[v])&&n(6,g[v]=!1,g)}function R(v){var I;return v in p?(I=p[v])!==null&&I!==void 0?I:null:T().getAttribute(v)}function k(v,I){p[v]!==I&&n(7,p[v]=I,p)}function y(v){(!(v in p)||p[v]!=null)&&n(7,p[v]=void 0,p)}function T(){return h}function M(v){ie[v?"unshift":"push"](()=>{h=v,n(5,h)})}return t.$$set=v=>{e=D(D({},e),Re(v)),n(10,s=Q(e,i)),"use"in v&&n(0,l=v.use),"class"in v&&n(1,c=v.class),"id"in v&&n(2,u=v.id),"persistent"in v&&n(3,d=v.persistent),"validationMsg"in v&&n(4,f=v.validationMsg),"$$scope"in v&&n(12,a=v.$$scope)},[l,c,u,d,f,h,g,p,E,o,s,T,a,r,M]}class sv extends De{constructor(e){super();ke(this,e,iv,tv,Oe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}const rv=t=>({}),Wc=t=>({}),ov=t=>({}),Kc=t=>({}),av=t=>({}),Xc=t=>({}),lv=t=>({}),Yc=t=>({});function Qc(t){let e,n=[{type:"hidden"},{required:t[10]},{disabled:t[6]},{value:t[0]},Me(t[53],"input$")],i={};for(let s=0;s<n.length;s+=1)i=D(i,n[s]);return{c(){e=ye("input"),Z(e,i)},m(s,r){Y(s,e,r),e.autofocus&&e.focus()},p(s,r){Z(e,i=ae(n,[{type:"hidden"},r[0]&1024&&{required:s[10]},r[0]&64&&{disabled:s[6]},r[0]&1&&{value:s[0]},r[1]&4194304&&Me(s[53],"input$")]))},d(s){s&&X(e)}}}function Jc(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-select__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function Zc(t){let e,n;const i=[{id:t[11]+"-smui-label"},{floatAbove:t[43]!==""},{required:t[10]},Me(t[53],"label$")];let s={$$slots:{default:[uv]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Ir({props:s}),t[66](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&3072|a[1]&4198400?ae(i,[a[0]&2048&&{id:r[11]+"-smui-label"},a[1]&4096&&{floatAbove:r[43]!==""},a[0]&1024&&{required:r[10]},a[1]&4194304&&ze(Me(r[53],"label$"))]):{};a[0]&512|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[66](null),Be(e,r)}}}function uv(t){let e=(t[9]==null?"":t[9])+"",n,i;const s=t[63].label,r=de(s,t,t[89],Yc);return{c(){n=fn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&512)&&e!==(e=(a[9]==null?"":a[9])+"")&&Cn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,lv):me(a[89]),Yc)},i(a){i||(w(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function xc(t){let e,n;const i=[{noLabel:t[8]||t[9]==null&&!t[52].label},Me(t[53],"outline$")];let s={$$slots:{default:[dv]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new yc({props:s}),t[68](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&768|a[1]&6291456?ae(i,[a[0]&768|a[1]&2097152&&{noLabel:r[8]||r[9]==null&&!r[52].label},a[1]&4194304&&ze(Me(r[53],"outline$"))]):{};a[0]&3840|a[1]&6296064|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[68](null),Be(e,r)}}}function $c(t){let e,n;const i=[{id:t[11]+"-smui-label"},{floatAbove:t[43]!==""},{required:t[10]},Me(t[53],"label$")];let s={$$slots:{default:[cv]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Ir({props:s}),t[67](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&3072|a[1]&4198400?ae(i,[a[0]&2048&&{id:r[11]+"-smui-label"},a[1]&4096&&{floatAbove:r[43]!==""},a[0]&1024&&{required:r[10]},a[1]&4194304&&ze(Me(r[53],"label$"))]):{};a[0]&512|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[67](null),Be(e,r)}}}function cv(t){let e=(t[9]==null?"":t[9])+"",n,i;const s=t[63].label,r=de(s,t,t[89],Xc);return{c(){n=fn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&512)&&e!==(e=(a[9]==null?"":a[9])+"")&&Cn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,av):me(a[89]),Xc)},i(a){i||(w(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function dv(t){let e,n,i=!t[8]&&(t[9]!=null||t[52].label)&&$c(t);return{c(){i&&i.c(),e=kt()},m(s,r){i&&i.m(s,r),Y(s,e,r),n=!0},p(s,r){!s[8]&&(s[9]!=null||s[52].label)?i?(i.p(s,r),r[0]&768|r[1]&2097152&&w(i,1)):(i=$c(s),i.c(),w(i,1),i.m(e.parentNode,e)):i&&(ft(),N(i,1,1,()=>{i=null}),ht())},i(s){n||(w(i),n=!0)},o(s){N(i),n=!1},d(s){i&&i.d(s),s&&X(e)}}}function ed(t){let e,n;const i=[Me(t[53],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new pc({props:s}),t[70](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&4194304?ae(i,[ze(Me(r[53],"ripple$"))]):{};e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[70](null),Be(e,r)}}}function fv(t){let e;const n=t[63].default,i=de(n,t,t[89],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,null):me(s[89]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function hv(t){let e,n,i;const s=[{role:"listbox"},{wrapFocus:t[36]},Me(t[53],"list$")];function r(o){t[76](o)}let a={$$slots:{default:[fv]},$$scope:{ctx:t}};for(let o=0;o<s.length;o+=1)a=D(a,s[o]);return t[24]!==void 0&&(a.selectedIndex=t[24]),e=new qg({props:a}),ie.push(()=>In(e,"selectedIndex",r)),e.$on("SMUIList:mount",t[77]),{c(){Ge(e.$$.fragment)},m(o,l){Ve(e,o,l),i=!0},p(o,l){const c=l[1]&4194336?ae(s,[s[0],l[1]&32&&{wrapFocus:o[36]},l[1]&4194304&&ze(Me(o[53],"list$"))]):{};l[2]&134217728&&(c.$$scope={dirty:l,ctx:o}),!n&&l[0]&16777216&&(n=!0,c.selectedIndex=o[24],vn(()=>n=!1)),e.$set(c)},i(o){i||(w(e.$$.fragment,o),i=!0)},o(o){N(e.$$.fragment,o),i=!1},d(o){Be(e,o)}}}function td(t){let e,n;const i=[Me(t[53],"helperText$")];let s={$$slots:{default:[mv]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new sv({props:s}),e.$on("SMUISelectHelperText:id",t[86]),e.$on("SMUISelectHelperText:mount",t[87]),e.$on("SMUISelectHelperText:unmount",t[88]),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&4194304?ae(i,[ze(Me(r[53],"helperText$"))]):{};a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){Be(e,r)}}}function mv(t){let e;const n=t[63].helperText,i=de(n,t,t[89],Wc);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,rv):me(s[89]),Wc)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function pv(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g,p,E,b,S,O,R,k,y,T,M,v,I,j,A,V,F,W,G,J,be,re,Fe,ge,st,x,H=t[12]&&Qc(t),Ae=t[7]==="filled"&&Jc(),le=t[7]!=="outlined"&&!t[8]&&(t[9]!=null||t[52].label)&&Zc(t),q=t[7]==="outlined"&&xc(t);const U=t[63].leadingIcon,Ee=de(U,t,t[89],Kc);let lt=[{id:d=t[11]+"-smui-selected-text"},{class:f=ee({[t[19]]:!0,"mdc-select__selected-text":!0})},{role:"button"},{"aria-haspopup":"listbox"},{"aria-labelledby":h=t[11]+"-smui-label"},Me(t[53],"selectedText$")],Rt={};for(let P=0;P<lt.length;P+=1)Rt=D(Rt,lt[P]);let z=[{class:g=ee({[t[17]]:!0,"mdc-select__selected-text-container":!0})},Me(t[53],"selectedTextContainer$")],pe={};for(let P=0;P<z.length;P+=1)pe=D(pe,z[P]);let Ke=[{class:k=ee({[t[21]]:!0,"mdc-select__dropdown-icon":!0})},Me(t[53],"dropdownIcon$")],it={};for(let P=0;P<Ke.length;P+=1)it=D(it,Ke[P]);let Ye=t[7]!=="outlined"&&t[5]&&ed(t),Vt=[{class:M=ee({[t[15]]:!0,"mdc-select__anchor":!0})},{"aria-required":v=t[10]?"true":void 0},{"aria-disabled":I=t[6]?"true":void 0},{"aria-controls":t[31]},{"aria-describedby":t[31]},t[29],Me(t[53],"anchor$")],an={};for(let P=0;P<Vt.length;P+=1)an=D(an,Vt[P]);const At=[{class:ee(We({[t[22]]:!0,"mdc-select__menu":!0},t[33]))},{fullWidth:!0},{anchor:!1},{anchorElement:t[34]},{anchorCorner:t[35]},Me(t[53],"menu$")];function te(P){t[78](P)}let ve={$$slots:{default:[hv]},$$scope:{ctx:t}};for(let P=0;P<At.length;P+=1)ve=D(ve,At[P]);t[32]!==void 0&&(ve.open=t[32]),V=new xy({props:ve}),ie.push(()=>In(V,"open",te)),V.$on("SMUIMenu:selected",t[79]),V.$on("SMUIMenuSurface:closing",t[80]),V.$on("SMUIMenuSurface:closed",t[81]),V.$on("SMUIMenuSurface:opened",t[82]);let _t=[{class:W=ee(We({[t[3]]:!0,"mdc-select":!0,"mdc-select--required":t[10],"mdc-select--disabled":t[6],"mdc-select--filled":t[7]==="filled","mdc-select--outlined":t[7]==="outlined","smui-select--standard":t[7]==="standard","mdc-select--with-leading-icon":t[45](t[13])?t[52].leadingIcon:t[13],"mdc-select--no-label":t[8]||t[9]==null&&!t[52].label,"mdc-select--invalid":t[1],"mdc-select--activated":t[32],"mdc-data-table__pagination-rows-per-page-select":t[46]==="data-table:pagination"},t[26]))},{style:G=Object.entries(t[27]).map(nd).concat([t[4]]).join(" ")},qn(t[53],["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"])],dt={};for(let P=0;P<_t.length;P+=1)dt=D(dt,_t[P]);let xe=t[52].helperText&&td(t);return{c(){e=ye("div"),H&&H.c(),n=Je(),i=ye("div"),Ae&&Ae.c(),s=Je(),le&&le.c(),r=Je(),q&&q.c(),a=Je(),Ee&&Ee.c(),o=Je(),l=ye("span"),c=ye("span"),u=fn(t[43]),E=Je(),b=ye("span"),S=lr("svg"),O=lr("polygon"),R=lr("polygon"),T=Je(),Ye&&Ye.c(),A=Je(),Ge(V.$$.fragment),re=Je(),xe&&xe.c(),Fe=kt(),Z(c,Rt),Z(l,pe),rt(O,"class","mdc-select__dropdown-icon-inactive"),rt(O,"stroke","none"),rt(O,"fill-rule","evenodd"),rt(O,"points","7 10 12 15 17 10"),rt(R,"class","mdc-select__dropdown-icon-active"),rt(R,"stroke","none"),rt(R,"fill-rule","evenodd"),rt(R,"points","7 15 12 10 17 15"),rt(S,"class","mdc-select__dropdown-icon-graphic"),rt(S,"viewBox","7 10 10 5"),rt(S,"focusable","false"),Z(b,it),Z(i,an),Z(e,dt)},m(P,oe){Y(P,e,oe),H&&H.m(e,null),Qe(e,n),Qe(e,i),Ae&&Ae.m(i,null),Qe(i,s),le&&le.m(i,null),Qe(i,r),q&&q.m(i,null),Qe(i,a),Ee&&Ee.m(i,null),Qe(i,o),Qe(i,l),Qe(l,c),Qe(c,u),t[69](c),Qe(i,E),Qe(i,b),Qe(b,S),Qe(S,O),Qe(S,R),Qe(i,T),Ye&&Ye.m(i,null),t[71](i),Qe(e,A),Ve(V,e,null),t[83](e),Y(P,re,oe),xe&&xe.m(P,oe),Y(P,Fe,oe),ge=!0,st||(x=[$(m=Ze.call(null,c,t[18])),$(p=Ze.call(null,l,t[16])),$(y=Ze.call(null,b,t[20])),$(j=Ze.call(null,i,t[14])),Te(i,"focus",t[72]),Te(i,"blur",t[73]),Te(i,"click",t[74]),Te(i,"keydown",t[75]),Te(i,"focus",t[64]),Te(i,"blur",t[65]),$(J=pn.call(null,e,{ripple:t[7]==="filled",unbounded:!1,addClass:t[49],removeClass:t[50],addStyle:t[51]})),$(Yy.call(null,e,{addClass:t[49],removeClass:t[50]})),$(be=Ze.call(null,e,t[2])),$(t[44].call(null,e)),Te(e,"SMUISelectLeadingIcon:mount",t[84]),Te(e,"SMUISelectLeadingIcon:unmount",t[85])],st=!0)},p(P,oe){P[12]?H?H.p(P,oe):(H=Qc(P),H.c(),H.m(e,n)):H&&(H.d(1),H=null),P[7]==="filled"?Ae||(Ae=Jc(),Ae.c(),Ae.m(i,s)):Ae&&(Ae.d(1),Ae=null),P[7]!=="outlined"&&!P[8]&&(P[9]!=null||P[52].label)?le?(le.p(P,oe),oe[0]&896|oe[1]&2097152&&w(le,1)):(le=Zc(P),le.c(),w(le,1),le.m(i,r)):le&&(ft(),N(le,1,1,()=>{le=null}),ht()),P[7]==="outlined"?q?(q.p(P,oe),oe[0]&128&&w(q,1)):(q=xc(P),q.c(),w(q,1),q.m(i,a)):q&&(ft(),N(q,1,1,()=>{q=null}),ht()),Ee&&Ee.p&&(!ge||oe[2]&134217728)&&he(Ee,U,P,P[89],ge?fe(U,P[89],oe,ov):me(P[89]),Kc),(!ge||oe[1]&4096)&&Cn(u,P[43]),Z(c,Rt=ae(lt,[(!ge||oe[0]&2048&&d!==(d=P[11]+"-smui-selected-text"))&&{id:d},(!ge||oe[0]&524288&&f!==(f=ee({[P[19]]:!0,"mdc-select__selected-text":!0})))&&{class:f},{role:"button"},{"aria-haspopup":"listbox"},(!ge||oe[0]&2048&&h!==(h=P[11]+"-smui-label"))&&{"aria-labelledby":h},oe[1]&4194304&&Me(P[53],"selectedText$")])),m&&Ue(m.update)&&oe[0]&262144&&m.update.call(null,P[18]),Z(l,pe=ae(z,[(!ge||oe[0]&131072&&g!==(g=ee({[P[17]]:!0,"mdc-select__selected-text-container":!0})))&&{class:g},oe[1]&4194304&&Me(P[53],"selectedTextContainer$")])),p&&Ue(p.update)&&oe[0]&65536&&p.update.call(null,P[16]),Z(b,it=ae(Ke,[(!ge||oe[0]&2097152&&k!==(k=ee({[P[21]]:!0,"mdc-select__dropdown-icon":!0})))&&{class:k},oe[1]&4194304&&Me(P[53],"dropdownIcon$")])),y&&Ue(y.update)&&oe[0]&1048576&&y.update.call(null,P[20]),P[7]!=="outlined"&&P[5]?Ye?(Ye.p(P,oe),oe[0]&160&&w(Ye,1)):(Ye=ed(P),Ye.c(),w(Ye,1),Ye.m(i,null)):Ye&&(ft(),N(Ye,1,1,()=>{Ye=null}),ht()),Z(i,an=ae(Vt,[(!ge||oe[0]&32768&&M!==(M=ee({[P[15]]:!0,"mdc-select__anchor":!0})))&&{class:M},(!ge||oe[0]&1024&&v!==(v=P[10]?"true":void 0))&&{"aria-required":v},(!ge||oe[0]&64&&I!==(I=P[6]?"true":void 0))&&{"aria-disabled":I},(!ge||oe[1]&1)&&{"aria-controls":P[31]},(!ge||oe[1]&1)&&{"aria-describedby":P[31]},oe[0]&536870912&&P[29],oe[1]&4194304&&Me(P[53],"anchor$")])),j&&Ue(j.update)&&oe[0]&16384&&j.update.call(null,P[14]);const B=oe[0]&4194304|oe[1]&4194332?ae(At,[oe[0]&4194304|oe[1]&4&&{class:ee(We({[P[22]]:!0,"mdc-select__menu":!0},P[33]))},At[1],At[2],oe[1]&8&&{anchorElement:P[34]},oe[1]&16&&{anchorCorner:P[35]},oe[1]&4194304&&ze(Me(P[53],"menu$"))]):{};oe[0]&16777216|oe[1]&4194400|oe[2]&134217728&&(B.$$scope={dirty:oe,ctx:P}),!F&&oe[1]&2&&(F=!0,B.open=P[32],vn(()=>F=!1)),V.$set(B),Z(e,dt=ae(_t,[(!ge||oe[0]&67119050|oe[1]&2097154&&W!==(W=ee(We({[P[3]]:!0,"mdc-select":!0,"mdc-select--required":P[10],"mdc-select--disabled":P[6],"mdc-select--filled":P[7]==="filled","mdc-select--outlined":P[7]==="outlined","smui-select--standard":P[7]==="standard","mdc-select--with-leading-icon":P[45](P[13])?P[52].leadingIcon:P[13],"mdc-select--no-label":P[8]||P[9]==null&&!P[52].label,"mdc-select--invalid":P[1],"mdc-select--activated":P[32],"mdc-data-table__pagination-rows-per-page-select":P[46]==="data-table:pagination"},P[26]))))&&{class:W},(!ge||oe[0]&134217744&&G!==(G=Object.entries(P[27]).map(nd).concat([P[4]]).join(" ")))&&{style:G},oe[1]&4194304&&qn(P[53],["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"])])),J&&Ue(J.update)&&oe[0]&128&&J.update.call(null,{ripple:P[7]==="filled",unbounded:!1,addClass:P[49],removeClass:P[50],addStyle:P[51]}),be&&Ue(be.update)&&oe[0]&4&&be.update.call(null,P[2]),P[52].helperText?xe?(xe.p(P,oe),oe[1]&2097152&&w(xe,1)):(xe=td(P),xe.c(),w(xe,1),xe.m(Fe.parentNode,Fe)):xe&&(ft(),N(xe,1,1,()=>{xe=null}),ht())},i(P){ge||(w(le),w(q),w(Ee,P),w(Ye),w(V.$$.fragment,P),w(xe),ge=!0)},o(P){N(le),N(q),N(Ee,P),N(Ye),N(V.$$.fragment,P),N(xe),ge=!1},d(P){P&&X(e),H&&H.d(),Ae&&Ae.d(),le&&le.d(),q&&q.d(),Ee&&Ee.d(P),t[69](null),Ye&&Ye.d(),t[71](null),Be(V),t[83](null),P&&X(re),xe&&xe.d(P),P&&X(Fe),st=!1,Xe(x)}}}let gv=0;function _v(t){const e=t.currentTarget.getBoundingClientRect();return(yv(t)?t.touches[0].clientX:t.clientX)-e.left}function yv(t){return"touches"in t}const nd=([t,e])=>`${t}: ${e};`;function vv(t,e,n){const i=["use","class","style","ripple","disabled","variant","noLabel","label","value","key","dirty","invalid","updateInvalid","required","inputId","hiddenInput","withLeadingIcon","anchor$use","anchor$class","selectedTextContainer$use","selectedTextContainer$class","selectedText$use","selectedText$class","dropdownIcon$use","dropdownIcon$class","menu$class","getUseDefaultValidation","setUseDefaultValidation","focus","layout","getElement"];let s=Q(e,i),r,a,{$$slots:o={},$$scope:l}=e;const c=wu(o),u=qe(Se());let d=()=>{};function f(L){return L===d}let{use:h=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:p=!0}=e,{disabled:E=!1}=e,{variant:b="standard"}=e,{noLabel:S=!1}=e,{label:O=void 0}=e,{value:R=""}=e,{key:k=L=>L}=e,{dirty:y=!1}=e,{invalid:T=d}=e,{updateInvalid:M=f(T)}=e;const v=f(T);f(T)&&(T=!1);let{required:I=!1}=e,{inputId:j="SMUI-select-"+gv++}=e,{hiddenInput:A=!1}=e,{withLeadingIcon:V=d}=e,{anchor$use:F=[]}=e,{anchor$class:W=""}=e,{selectedTextContainer$use:G=[]}=e,{selectedTextContainer$class:J=""}=e,{selectedText$use:be=[]}=e,{selectedText$class:re=""}=e,{dropdownIcon$use:Fe=[]}=e,{dropdownIcon$class:ge=""}=e,{menu$class:st=""}=e,x,H,Ae={},le={},q,U={},Ee,lt=-1,Rt,z=gt("SMUI:addLayoutListener"),pe,Ke=!1,it={},Ye,Vt,an=!1,At,te=gt("SMUI:select:context"),ve,_t,dt,xe,P;et("SMUI:list:role",""),et("SMUI:list:nav",!1);const oe=Mi("");si(t,oe,L=>n(43,r=L)),et("SMUI:select:selectedText",oe);const B=Mi(R);si(t,B,L=>n(91,a=L)),et("SMUI:select:value",B);let ue=lt;z&&(pe=z(or)),Bt(()=>(n(23,H=new qy({setSelectedText:L=>{Un(oe,r=L,r)},isSelectAnchorFocused:()=>document.activeElement===q,getSelectAnchorAttr:Ho,setSelectAnchorAttr:jo,removeSelectAnchorAttr:qo,addMenuClass:Vo,removeMenuClass:Bo,openMenu:()=>{n(32,Ke=!0)},closeMenu:()=>{n(32,Ke=!1)},getAnchorElement:()=>q,setMenuAnchorElement:L=>{n(34,Ye=L)},setMenuAnchorCorner:L=>{n(35,Vt=L)},setMenuWrapFocus:L=>{n(36,an=L)},getSelectedIndex:()=>lt,setSelectedIndex:L=>{n(62,ue=L),n(24,lt=L),n(0,R=Ri()[lt])},focusMenuItemAtIndex:L=>{At.focusItemAtIndex(L)},getMenuItemCount:()=>At.items.length,getMenuItemValues:()=>Ri().map(k),getMenuItemTextAtIndex:L=>At.getPrimaryTextAtIndex(L),isTypeaheadInProgress:()=>At.typeaheadInProgress,typeaheadMatchItem:(L,ln)=>At.typeaheadMatchItem(L,ln),addClass:ut,removeClass:yn,hasClass:ce,setRippleCenter:L=>xe&&xe.setRippleCenter(L),activateBottomLine:()=>xe&&xe.activate(),deactivateBottomLine:()=>xe&&xe.deactivate(),notifyChange:L=>{n(54,y=!0),M&&n(1,T=!H.isValid()),$e(ki(),"SMUISelect:change",{value:R,index:lt},void 0,!0)},hasOutline:()=>!!P,notchOutline:L=>P&&P.notch(L),closeOutline:()=>P&&P.closeNotch(),hasLabel:()=>!!dt,floatLabel:L=>dt&&dt.float(L),getLabelWidth:()=>dt?dt.getWidth():0,setLabelRequired:L=>dt&&dt.setRequired(L)},{get helperText(){return _t},get leadingIcon(){return ve}})),n(24,lt=Ri().indexOf(R)),H.init(),rr(v),()=>{H.destroy()})),hn(()=>{pe&&pe()});function ce(L){return L in Ae?Ae[L]:ki().classList.contains(L)}function ut(L){Ae[L]||n(26,Ae[L]=!0,Ae)}function yn(L){(!(L in Ae)||Ae[L])&&n(26,Ae[L]=!1,Ae)}function ls(L,ln){le[L]!=ln&&(ln===""||ln==null?(delete le[L],n(27,le)):n(27,le[L]=ln,le))}function Vo(L){it[L]||n(33,it[L]=!0,it)}function Bo(L){(!(L in it)||it[L])&&n(33,it[L]=!1,it)}function Ho(L){var ln;return L in U?(ln=U[L])!==null&&ln!==void 0?ln:null:ki().getAttribute(L)}function jo(L,ln){U[L]!==ln&&n(29,U[L]=ln,U)}function qo(L){(!(L in U)||U[L]!=null)&&n(29,U[L]=void 0,U)}function Ri(){return At.getOrderedList().map(L=>L.getValue())}function zo(){return H.getUseDefaultValidation()}function rr(L){H.setUseDefaultValidation(L)}function Go(){q.focus()}function or(){H.layout()}function ki(){return x}function Wo(L){ri.call(this,t,L)}function Ko(L){ri.call(this,t,L)}function Xo(L){ie[L?"unshift":"push"](()=>{dt=L,n(40,dt)})}function Yo(L){ie[L?"unshift":"push"](()=>{dt=L,n(40,dt)})}function Qo(L){ie[L?"unshift":"push"](()=>{P=L,n(42,P)})}function Jo(L){ie[L?"unshift":"push"](()=>{Ee=L,n(30,Ee)})}function Zo(L){ie[L?"unshift":"push"](()=>{xe=L,n(41,xe)})}function xo(L){ie[L?"unshift":"push"](()=>{q=L,n(28,q)})}const $o=()=>H&&H.handleFocus(),ea=()=>H&&H.handleBlur(),ta=L=>{q.focus(),H&&H.handleClick(_v(L))},na=L=>H&&H.handleKeydown(L);function ia(L){lt=L,n(24,lt)}const sa=L=>n(37,At=L.detail);function ra(L){Ke=L,n(32,Ke)}const oa=L=>H&&H.handleMenuItemAction(L.detail.index),aa=()=>H&&H.handleMenuClosing(),la=()=>H&&H.handleMenuClosed(),ua=()=>H&&H.handleMenuOpened();function C(L){ie[L?"unshift":"push"](()=>{x=L,n(25,x)})}const Tt=L=>n(38,ve=L.detail),ar=()=>n(38,ve=void 0),ca=L=>n(31,Rt=L.detail),us=L=>n(39,_t=L.detail),cs=()=>{n(31,Rt=void 0),n(39,_t=void 0)};return t.$$set=L=>{e=D(D({},e),Re(L)),n(53,s=Q(e,i)),"use"in L&&n(2,h=L.use),"class"in L&&n(3,m=L.class),"style"in L&&n(4,g=L.style),"ripple"in L&&n(5,p=L.ripple),"disabled"in L&&n(6,E=L.disabled),"variant"in L&&n(7,b=L.variant),"noLabel"in L&&n(8,S=L.noLabel),"label"in L&&n(9,O=L.label),"value"in L&&n(0,R=L.value),"key"in L&&n(55,k=L.key),"dirty"in L&&n(54,y=L.dirty),"invalid"in L&&n(1,T=L.invalid),"updateInvalid"in L&&n(56,M=L.updateInvalid),"required"in L&&n(10,I=L.required),"inputId"in L&&n(11,j=L.inputId),"hiddenInput"in L&&n(12,A=L.hiddenInput),"withLeadingIcon"in L&&n(13,V=L.withLeadingIcon),"anchor$use"in L&&n(14,F=L.anchor$use),"anchor$class"in L&&n(15,W=L.anchor$class),"selectedTextContainer$use"in L&&n(16,G=L.selectedTextContainer$use),"selectedTextContainer$class"in L&&n(17,J=L.selectedTextContainer$class),"selectedText$use"in L&&n(18,be=L.selectedText$use),"selectedText$class"in L&&n(19,re=L.selectedText$class),"dropdownIcon$use"in L&&n(20,Fe=L.dropdownIcon$use),"dropdownIcon$class"in L&&n(21,ge=L.dropdownIcon$class),"menu$class"in L&&n(22,st=L.menu$class),"$$scope"in L&&n(89,l=L.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&25165825|t.$$.dirty[2]&1&&ue!==lt)if(n(62,ue=lt),H)H.setSelectedIndex(lt,!1,!0);else{const L=Ri();R!==L[lt]&&n(0,R=L[lt])}t.$$.dirty[0]&1&&Un(B,a=R,a),t.$$.dirty[0]&8388609|t.$$.dirty[1]&16777216&&H&&H.getValue()!==k(R)&&H.setValue(k(R)),t.$$.dirty[0]&8388672&&H&&H.getDisabled()!==E&&H.setDisabled(E),t.$$.dirty[0]&8388610|t.$$.dirty[1]&41943040&&H&&y&&H.isValid()!==!T&&(M?n(1,T=!H.isValid()):H.setValid(!T)),t.$$.dirty[0]&8389632&&H&&H.getRequired()!==I&&H.setRequired(I)},[R,T,h,m,g,p,E,b,S,O,I,j,A,V,F,W,G,J,be,re,Fe,ge,st,H,lt,x,Ae,le,q,U,Ee,Rt,Ke,it,Ye,Vt,an,At,ve,_t,dt,xe,P,r,u,f,te,oe,B,ut,yn,ls,c,s,y,k,M,zo,rr,Go,or,ki,ue,o,Wo,Ko,Xo,Yo,Qo,Jo,Zo,xo,$o,ea,ta,na,ia,sa,ra,oa,aa,la,ua,C,Tt,ar,ca,us,cs,l]}class rS extends De{constructor(e){super();ke(this,e,vv,pv,Oe,{use:2,class:3,style:4,ripple:5,disabled:6,variant:7,noLabel:8,label:9,value:0,key:55,dirty:54,invalid:1,updateInvalid:56,required:10,inputId:11,hiddenInput:12,withLeadingIcon:13,anchor$use:14,anchor$class:15,selectedTextContainer$use:16,selectedTextContainer$class:17,selectedText$use:18,selectedText$class:19,dropdownIcon$use:20,dropdownIcon$class:21,menu$class:22,getUseDefaultValidation:57,setUseDefaultValidation:58,focus:59,layout:60,getElement:61},null,[-1,-1,-1,-1])}get getUseDefaultValidation(){return this.$$.ctx[57]}get setUseDefaultValidation(){return this.$$.ctx[58]}get focus(){return this.$$.ctx[59]}get layout(){return this.$$.ctx[60]}get getElement(){return this.$$.ctx[61]}}function Iv(t){let e;const n=t[11].default,i=de(n,t,t[13],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&8192)&&he(i,n,s,s[13],e?fe(n,s[13],r,null):me(s[13]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Ev(t){let e,n;const i=[{use:t[3]},{"data-value":t[0]},{value:t[0]},{selected:t[2]},t[6]];let s={$$slots:{default:[Iv]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new i_({props:s}),t[12](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,[a]){const o=a&77?ae(i,[a&8&&{use:r[3]},a&1&&{"data-value":r[0]},a&1&&{value:r[0]},a&4&&{selected:r[2]},a&64&&ze(r[6])]):{};a&8192&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[12](null),Be(e,r)}}}function bv(t,e,n){let i,s;const r=["use","class","value","getElement"];let a=Q(e,r),o,l,{$$slots:c={},$$scope:u}=e;const d=qe(Se());let{use:f=[]}=e;const h="";let{value:m=""}=e,g;const p=gt("SMUI:select:selectedText");si(t,p,R=>n(14,o=R));const E=gt("SMUI:select:value");si(t,E,R=>n(10,l=R)),et("SMUI:list:item:role","option"),Bt(b),hn(b);function b(){s&&g&&Un(p,o=g.getPrimaryText(),o)}function S(){return g.getElement()}function O(R){ie[R?"unshift":"push"](()=>{g=R,n(1,g)})}return t.$$set=R=>{e=D(D({},e),Re(R)),n(6,a=Q(e,r)),"use"in R&&n(7,f=R.use),"value"in R&&n(0,m=R.value),"$$scope"in R&&n(13,u=R.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(3,i=[d,...f]),t.$$.dirty&1025&&n(2,s=m!=null&&m!==""&&l===m)},[m,g,s,i,p,E,a,f,h,S,l,c,O,u]}class Av extends De{constructor(e){super();ke(this,e,bv,Ev,Oe,{use:7,class:8,value:0,getElement:9})}get class(){return this.$$.ctx[8]}get getElement(){return this.$$.ctx[9]}}const oS=Av;function Tv(t){let e;return{c(){e=fn(t[8])},m(n,i){Y(n,e,i)},p(n,i){i&256&&Cn(e,n[8])},i:Nt,o:Nt,d(n){n&&X(e)}}}function Sv(t){let e;const n=t[13].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(w(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Cv(t){let e,n,i,s,r,a,o,l,c;const u=[Sv,Tv],d=[];function f(g,p){return g[8]==null?0:1}n=f(t),i=d[n]=u[n](t);let h=[{class:s=ee(We({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let g=0;g<h.length;g+=1)m=D(m,h[g]);return{c(){e=ye("div"),i.c(),Z(e,m)},m(g,p){Y(g,e,p),d[n].m(e,null),t[14](e),o=!0,l||(c=[$(a=Ze.call(null,e,t[0])),$(t[9].call(null,e))],l=!0)},p(g,[p]){let E=n;n=f(g),n===E?d[n].p(g,p):(ft(),N(d[E],1,1,()=>{d[E]=null}),ht(),i=d[n],i?i.p(g,p):(i=d[n]=u[n](g),i.c()),w(i,1),i.m(e,null)),Z(e,m=ae(h,[(!o||p&90&&s!==(s=ee(We({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:s},(!o||p&8&&r!==(r=g[3]?void 0:"true"))&&{"aria-hidden":r},(!o||p&4)&&{id:g[2]},p&128&&g[7],p&1024&&g[10]])),a&&Ue(a.update)&&p&1&&a.update.call(null,g[0])},i(g){o||(w(i),o=!0)},o(g){N(i),o=!1},d(g){g&&X(e),d[n].d(),t[14](null),l=!1,Xe(c)}}}let Lv=0;function Ov(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+Lv++}=e,{persistent:d=!1}=e,{validationMsg:f=!1}=e,h,m,g={},p={},E;Bt(()=>(m=new z_({addClass:S,removeClass:O,hasClass:b,getAttr:R,setAttr:k,removeAttr:y,setContent:v=>{n(8,E=v)}}),u.startsWith("SMUI-textfield-helper-text-")&&$e(T(),"SMUITextfieldHelperText:id",u),$e(T(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{$e(T(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function b(v){return v in g?g[v]:T().classList.contains(v)}function S(v){g[v]||n(6,g[v]=!0,g)}function O(v){(!(v in g)||g[v])&&n(6,g[v]=!1,g)}function R(v){var I;return v in p?(I=p[v])!==null&&I!==void 0?I:null:T().getAttribute(v)}function k(v,I){p[v]!==I&&n(7,p[v]=I,p)}function y(v){(!(v in p)||p[v]!=null)&&n(7,p[v]=void 0,p)}function T(){return h}function M(v){ie[v?"unshift":"push"](()=>{h=v,n(5,h)})}return t.$$set=v=>{e=D(D({},e),Re(v)),n(10,s=Q(e,i)),"use"in v&&n(0,l=v.use),"class"in v&&n(1,c=v.class),"id"in v&&n(2,u=v.id),"persistent"in v&&n(3,d=v.persistent),"validationMsg"in v&&n(4,f=v.validationMsg),"$$scope"in v&&n(12,a=v.$$scope)},[l,c,u,d,f,h,g,p,E,o,s,T,a,r,M]}class aS extends De{constructor(e){super();ke(this,e,Ov,Cv,Oe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}var wv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},id={exports:{}};(function(t){(function(e){let n;function i(c,u){const d=c.charCodeAt(u);if(isNaN(d))throw new RangeError("Index "+u+' out of range for string "'+c+'"; please open an issue at https://github.com/Trott/slug/issues/new');if(d<55296||d>57343)return[c.charAt(u),u];if(d>=55296&&d<=56319){if(c.length<=u+1)return[" ",u];const h=c.charCodeAt(u+1);return h<56320||h>57343?[" ",u]:[c.charAt(u)+c.charAt(u+1),u+1]}if(u===0)return[" ",u];const f=c.charCodeAt(u-1);if(f<55296||f>56319)return[" ",u];throw new Error('String "'+c+'" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')}typeof window!="undefined"?window.btoa?n=function(c){return btoa(unescape(encodeURIComponent(c)))}:n=function(c){const u=unescape(encodeURIComponent(c+""));let d="";for(let f,h,m=0,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";u.charAt(m|0)||(g="=",m%1);d+=g.charAt(63&f>>8-m%1*8)){if(h=u.charCodeAt(m+=3/4),h>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|h}return d}:n=function(c){return Buffer.from(c).toString("base64")},typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(u,d){if(u==null)throw new TypeError("Cannot convert undefined or null to object");const f=Object(u);for(let m=1;m<arguments.length;m++){const g=arguments[m];if(g!=null)for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(f[h]=g[h])}return f},writable:!0,configurable:!0});function s(c,u){let d=a(c,u);if(d===""){let f="";for(let h=0;h<c.length;h++){const m=i(c,h);h=m[1],f+=m[0]}d=a(n(f),u)}return d}const r={bg:{\u0419:"Y",\u0439:"y",X:"H",x:"h",\u0426:"Ts",\u0446:"ts",\u0429:"Sht",\u0449:"sht",\u042A:"A",\u044A:"a",\u042C:"Y",\u044C:"y"},de:{\u00C4:"AE",\u00E4:"ae",\u00D6:"OE",\u00F6:"oe",\u00DC:"UE",\u00FC:"ue"},sr:{\u0111:"dj",\u0110:"DJ"},uk:{\u0418:"Y",\u0438:"y",\u0419:"Y",\u0439:"y",\u0426:"Ts",\u0446:"ts",\u0425:"Kh",\u0445:"kh",\u0429:"Shch",\u0449:"shch",\u0413:"H",\u0433:"h"}};function a(c,u){if(typeof c!="string")throw new Error("slug() requires a string argument, received "+typeof c);typeof u=="string"&&(u={replacement:u}),u=u?Object.assign({},u):{},u.mode=u.mode||s.defaults.mode;const d=s.defaults.modes[u.mode],f=["replacement","multicharmap","charmap","remove","lower","trim"];for(let E,b=0,S=f.length;b<S;b++)E=f[b],u[E]=E in u?u[E]:d[E];const h=r[u.locale]||{};let m=[];for(let E in u.multicharmap){if(!Object.prototype.hasOwnProperty.call(u.multicharmap,E))continue;const b=E.length;m.indexOf(b)===-1&&m.push(b)}m=m.sort(function(E,b){return b-E});const g=u.mode==="rfc3986"?/[^\w\s\-.~]/:/[^A-Za-z0-9\s]/;let p="";for(let E,b=0,S=c.length;b<S;b++){E=c[b];let O=!1;for(let R=0;R<m.length;R++){const k=m[R],y=c.substr(b,k);if(u.multicharmap[y]){b+=k-1,E=u.multicharmap[y],O=!0;break}}O||(h[E]?E=h[E]:u.charmap[E]?E=u.charmap[E]:E.includes(u.replacement)?E=E.replace(u.replacement," "):E=E.replace(g,"")),p+=E}return u.remove&&(p=p.replace(u.remove,"")),u.trim&&(p=p.trim()),p=p.replace(/\s+/g,u.replacement),u.lower&&(p=p.toLowerCase()),p}const o={\u092B\u093C:"Fi",\u0917\u093C:"Ghi",\u0916\u093C:"Khi",\u0915\u093C:"Qi",\u0921\u093C:"ugDha",\u0922\u093C:"ugDhha",\u092F\u093C:"Yi",\u091C\u093C:"Za",\u05D1\u05B4\u05D9:"i",\u05D1\u05B5:"e",\u05D1\u05B5\u05D9:"e",\u05D1\u05B6:"e",\u05D1\u05B7:"a",\u05D1\u05B8:"a",\u05D1\u05B9:"o",\u05D5\u05B9:"o",\u05D1\u05BB:"u",\u05D5\u05BC:"u",\u05D1\u05BC:"b",\u05DB\u05BC:"k",\u05DA\u05BC:"k",\u05E4\u05BC:"p",\u05E9\u05C1:"sh",\u05E9\u05C2:"s",\u05D1\u05B0:"e",\u05D7\u05B1:"e",\u05D7\u05B2:"a",\u05D7\u05B3:"o",\u05D1\u05B4:"i"},l={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00C6:"AE",\u00C7:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u0150:"O",\u00D8:"O",\u014C:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u0170:"U",\u00DD:"Y",\u00DE:"TH",\u00DF:"ss",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00E6:"ae",\u00E7:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u0151:"o",\u00F8:"o",\u014D:"o",\u0152:"OE",\u0153:"oe",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u0171:"u",\u00FD:"y",\u00FE:"th",\u00FF:"y","\u1E9E":"SS",\u03B1:"a",\u03B2:"b",\u03B3:"g",\u03B4:"d",\u03B5:"e",\u03B6:"z",\u03B7:"h",\u03B8:"8",\u03B9:"i",\u03BA:"k",\u03BB:"l",\u03BC:"m",\u03BD:"n",\u03BE:"3",\u03BF:"o",\u03C0:"p",\u03C1:"r",\u03C3:"s",\u03C4:"t",\u03C5:"y",\u03C6:"f",\u03C7:"x",\u03C8:"ps",\u03C9:"w",\u03AC:"a",\u03AD:"e",\u03AF:"i",\u03CC:"o",\u03CD:"y",\u03AE:"h",\u03CE:"w",\u03C2:"s",\u03CA:"i",\u03B0:"y",\u03CB:"y",\u0390:"i",\u0391:"A",\u0392:"B",\u0393:"G",\u0394:"D",\u0395:"E",\u0396:"Z",\u0397:"H",\u0398:"8",\u0399:"I",\u039A:"K",\u039B:"L",\u039C:"M",\u039D:"N",\u039E:"3",\u039F:"O",\u03A0:"P",\u03A1:"R",\u03A3:"S",\u03A4:"T",\u03A5:"Y",\u03A6:"F",\u03A7:"X",\u03A8:"PS",\u03A9:"W",\u0386:"A",\u0388:"E",\u038A:"I",\u038C:"O",\u038E:"Y",\u0389:"H",\u038F:"W",\u03AA:"I",\u03AB:"Y",\u015F:"s",\u015E:"S",\u0131:"i",\u0130:"I",\u011F:"g",\u011E:"G",\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"yo",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"j",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"c",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"u",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u0410:"A",\u0411:"B",\u0412:"V",\u0413:"G",\u0414:"D",\u0415:"E",\u0401:"Yo",\u0416:"Zh",\u0417:"Z",\u0418:"I",\u0419:"J",\u041A:"K",\u041B:"L",\u041C:"M",\u041D:"N",\u041E:"O",\u041F:"P",\u0420:"R",\u0421:"S",\u0422:"T",\u0423:"U",\u0424:"F",\u0425:"H",\u0426:"C",\u0427:"Ch",\u0428:"Sh",\u0429:"Sh",\u042A:"U",\u042B:"Y",\u042C:"",\u042D:"E",\u042E:"Yu",\u042F:"Ya",\u0404:"Ye",\u0406:"I",\u0407:"Yi",\u0490:"G",\u0454:"ye",\u0456:"i",\u0457:"yi",\u0491:"g",\u010D:"c",\u010F:"d",\u011B:"e",\u0148:"n",\u0159:"r",\u0161:"s",\u0165:"t",\u016F:"u",\u017E:"z",\u010C:"C",\u010E:"D",\u011A:"E",\u0147:"N",\u0158:"R",\u0160:"S",\u0164:"T",\u016E:"U",\u017D:"Z",\u013E:"l",\u013A:"l",\u0155:"r",\u013D:"L",\u0139:"L",\u0154:"R",\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u015B:"s",\u017A:"z",\u017C:"z",\u0104:"A",\u0106:"C",\u0118:"E",\u0141:"L",\u0143:"N",\u015A:"S",\u0179:"Z",\u017B:"Z",\u0101:"a",\u0113:"e",\u0123:"g",\u012B:"i",\u0137:"k",\u013C:"l",\u0146:"n",\u016B:"u",\u0100:"A",\u0112:"E",\u0122:"G",\u012A:"I",\u0136:"K",\u013B:"L",\u0145:"N",\u016A:"U",\u0623:"a",\u0625:"i",\u0628:"b",\u062A:"t",\u062B:"th",\u062C:"g",\u062D:"h",\u062E:"kh",\u062F:"d",\u0630:"th",\u0631:"r",\u0632:"z",\u0633:"s",\u0634:"sh",\u0635:"s",\u0636:"d",\u0637:"t",\u0638:"th",\u0639:"aa",\u063A:"gh",\u0641:"f",\u0642:"k",\u0643:"k",\u0644:"l",\u0645:"m",\u0646:"n",\u0647:"h",\u0648:"o",\u064A:"y",\u0621:"aa",\u0629:"a",\u0622:"a",\u0627:"a",\u067E:"p",\u0698:"zh",\u06AF:"g",\u0686:"ch",\u06A9:"k",\u06CC:"i",\u0117:"e",\u012F:"i",\u0173:"u",\u0116:"E",\u012E:"I",\u0172:"U",\u021B:"t",\u021A:"T",\u0163:"t",\u0162:"T",\u0219:"s",\u0218:"S",\u0103:"a",\u0102:"A",\u1EA0:"A",\u1EA2:"A",\u1EA6:"A",\u1EA4:"A",\u1EAC:"A",\u1EA8:"A",\u1EAA:"A",\u1EB0:"A",\u1EAE:"A",\u1EB6:"A",\u1EB2:"A",\u1EB4:"A",\u1EB8:"E",\u1EBA:"E",\u1EBC:"E",\u1EC0:"E",\u1EBE:"E",\u1EC6:"E",\u1EC2:"E",\u1EC4:"E",\u1ECA:"I",\u1EC8:"I",\u0128:"I",\u1ECC:"O",\u1ECE:"O",\u1ED2:"O",\u1ED0:"O",\u1ED8:"O",\u1ED4:"O",\u1ED6:"O",\u01A0:"O",\u1EDC:"O",\u1EDA:"O",\u1EE2:"O",\u1EDE:"O",\u1EE0:"O",\u1EE4:"U",\u1EE6:"U",\u0168:"U",\u01AF:"U",\u1EEA:"U",\u1EE8:"U",\u1EF0:"U",\u1EEC:"U",\u1EEE:"U",\u1EF2:"Y",\u1EF4:"Y",\u1EF6:"Y",\u1EF8:"Y",\u0110:"D",\u1EA1:"a",\u1EA3:"a",\u1EA7:"a",\u1EA5:"a",\u1EAD:"a",\u1EA9:"a",\u1EAB:"a",\u1EB1:"a",\u1EAF:"a",\u1EB7:"a",\u1EB3:"a",\u1EB5:"a",\u1EB9:"e",\u1EBB:"e",\u1EBD:"e",\u1EC1:"e",\u1EBF:"e",\u1EC7:"e",\u1EC3:"e",\u1EC5:"e",\u1ECB:"i",\u1EC9:"i",\u0129:"i",\u1ECD:"o",\u1ECF:"o",\u1ED3:"o",\u1ED1:"o",\u1ED9:"o",\u1ED5:"o",\u1ED7:"o",\u01A1:"o",\u1EDD:"o",\u1EDB:"o",\u1EE3:"o",\u1EDF:"o",\u1EE1:"o",\u1EE5:"u",\u1EE7:"u",\u0169:"u",\u01B0:"u",\u1EEB:"u",\u1EE9:"u",\u1EF1:"u",\u1EED:"u",\u1EEF:"u",\u1EF3:"y",\u1EF5:"y",\u1EF7:"y",\u1EF9:"y",\u0111:"d",\u04D8:"AE",\u04D9:"ae",\u0492:"GH",\u0493:"gh",\u049A:"KH",\u049B:"kh",\u04A2:"NG",\u04A3:"ng",\u04AE:"UE",\u04AF:"ue",\u04B0:"U",\u04B1:"u",\u04BA:"H",\u04BB:"h",\u04E8:"OE",\u04E9:"oe",\u0452:"dj",\u0458:"j",\u0459:"lj",\u045A:"nj",\u045B:"c",\u045F:"dz",\u0402:"Dj",\u0408:"j",\u0409:"Lj",\u040A:"Nj",\u040B:"C",\u040F:"Dz",\u01CC:"nj",\u01C9:"lj",\u01CB:"NJ",\u01C8:"LJ",\u0905:"a",\u0906:"aa",\u090F:"e",\u0908:"ii",\u090D:"ei",\u090E:"ae",\u0910:"ai",\u0907:"i",\u0913:"o",\u0911:"oi",\u0912:"oii",\u090A:"uu",\u0914:"ou",\u0909:"u",\u092C:"B",\u092D:"Bha",\u091A:"Ca",\u091B:"Chha",\u0921:"Da",\u0922:"Dha",\u092B:"Fa",\u0917:"Ga",\u0918:"Gha",\u0917\u093C:"Ghi",\u0939:"Ha",\u091C:"Ja",\u091D:"Jha",\u0915:"Ka",\u0916:"Kha",\u0916\u093C:"Khi",\u0932:"L",\u0933:"Li",\u090C:"Li",\u0934:"Lii",\u0961:"Lii",\u092E:"Ma",\u0928:"Na",\u0919:"Na",\u091E:"Nia",\u0923:"Nae",\u0929:"Ni",\u0950:"oms",\u092A:"Pa",\u0915\u093C:"Qi",\u0930:"Ra",\u090B:"Ri",\u0960:"Ri",\u0931:"Ri",\u0938:"Sa",\u0936:"Sha",\u0937:"Shha",\u091F:"Ta",\u0924:"Ta",\u0920:"Tha",\u0926:"Tha",\u0925:"Tha",\u0927:"Thha",\u0921\u093C:"ugDha",\u0922\u093C:"ugDhha",\u0935:"Va",\u092F:"Ya",\u092F\u093C:"Yi",\u091C\u093C:"Za",\u0259:"e",\u018F:"E",\u10D0:"a",\u10D1:"b",\u10D2:"g",\u10D3:"d",\u10D4:"e",\u10D5:"v",\u10D6:"z",\u10D7:"t",\u10D8:"i",\u10D9:"k",\u10DA:"l",\u10DB:"m",\u10DC:"n",\u10DD:"o",\u10DE:"p",\u10DF:"zh",\u10E0:"r",\u10E1:"s",\u10E2:"t",\u10E3:"u",\u10E4:"p",\u10E5:"k",\u10E6:"gh",\u10E7:"q",\u10E8:"sh",\u10E9:"ch",\u10EA:"ts",\u10EB:"dz",\u10EC:"ts",\u10ED:"ch",\u10EE:"kh",\u10EF:"j",\u10F0:"h",\u05D1:"v",\u05D2\u05BC:"g",\u05D2:"g",\u05D3:"d",\u05D3\u05BC:"d",\u05D4:"h",\u05D5:"v",\u05D6:"z",\u05D7:"h",\u05D8:"t",\u05D9:"y",\u05DB:"kh",\u05DA:"kh",\u05DC:"l",\u05DE:"m",\u05DD:"m",\u05E0:"n",\u05DF:"n",\u05E1:"s",\u05E4:"f",\u05E3:"f",\u05E5:"ts",\u05E6:"ts",\u05E7:"k",\u05E8:"r",\u05EA\u05BC:"t",\u05EA:"t"};s.charmap=Object.assign({},l),s.multicharmap=Object.assign({},o),s.defaults={charmap:s.charmap,mode:"pretty",modes:{rfc3986:{replacement:"-",remove:null,lower:!0,charmap:s.charmap,multicharmap:s.multicharmap,trim:!0},pretty:{replacement:"-",remove:null,lower:!0,charmap:s.charmap,multicharmap:s.multicharmap,trim:!0}},multicharmap:s.multicharmap},s.reset=function(){s.defaults.modes.rfc3986.charmap=s.defaults.modes.pretty.charmap=s.charmap=s.defaults.charmap=Object.assign({},l),s.defaults.modes.rfc3986.multicharmap=s.defaults.modes.pretty.multicharmap=s.multicharmap=s.defaults.multicharmap=Object.assign({},o)},s.extend=function(c){const u=Object.keys(c),d={},f={};for(let h=0;h<u.length;h++)u[h].length>1?d[u[h]]=c[u[h]]:f[u[h]]=c[u[h]];Object.assign(s.charmap,f),Object.assign(s.multicharmap,d)},t.exports?t.exports=s:e.slug=s})(wv)})(id);var lS=id.exports;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Er={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Rn={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rv=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.hasToggledAriaLabel=!1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this.adapter.getAttr(Rn.DATA_ARIA_LABEL_ON),i=this.adapter.getAttr(Rn.DATA_ARIA_LABEL_OFF);if(n&&i){if(this.adapter.getAttr(Rn.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Rn.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Er.ICON_BUTTON_ON)},e.prototype.toggle=function(n){if(n===void 0&&(n=!this.isOn()),n?this.adapter.addClass(Er.ICON_BUTTON_ON):this.adapter.removeClass(Er.ICON_BUTTON_ON),this.hasToggledAriaLabel){var i=n?this.adapter.getAttr(Rn.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Rn.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Rn.ARIA_LABEL,i||"")}else this.adapter.setAttr(Rn.ARIA_PRESSED,""+n)},e}(Qt);function sd(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-icon-button__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function kv(t){let e,n,i,s;const r=t[31].default,a=de(r,t,t[35],null);let o=t[8]&&sd();return{c(){e=ye("div"),n=Je(),a&&a.c(),o&&o.c(),i=kt(),rt(e,"class","mdc-icon-button__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c[1]&16)&&he(a,r,l,l[35],s?fe(r,l[35],c,null):me(l[35]),null),l[8]?o||(o=sd(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(w(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function Dv(t){let e,n,i;const s=[{use:[[pn,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[28].disabled,addClass:t[25],removeClass:t[26],addStyle:t[27]}],t[21],...t[1]]},{class:ee(We({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[22](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[23]==="card:action","mdc-card__action--icon":t[23]==="card:action","mdc-top-app-bar__navigation-icon":t[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[23]==="top-app-bar:action","mdc-snackbar__dismiss":t[23]==="snackbar:actions","mdc-data-table__pagination-button":t[23]==="data-table:pagination","mdc-data-table__sort-icon-button":t[23]==="data-table:sortable-header-cell","mdc-dialog__close":t[23]==="dialog:header"&&t[12]==="close"},t[17]))},{style:Object.entries(t[18]).map(rd).concat([t[3]]).join(" ")},{"aria-pressed":t[22](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[24]},{href:t[11]},t[20],t[19],t[28]];var r=t[13];function a(o){let l={$$slots:{default:[kv]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[32](e),e.$on("click",t[33]),e.$on("click",t[34])),{c(){e&&Ge(e.$$.fragment),n=kt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&536748031?ae(s,[l[0]&505413682&&{use:[[pn,{ripple:o[4],unbounded:!0,color:o[5],disabled:!!o[28].disabled,addClass:o[25],removeClass:o[26],addStyle:o[27]}],o[21],...o[1]]},l[0]&12719877&&{class:ee(We({[o[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!o[22](o[0])&&o[0],"mdc-icon-button--touch":o[8],"mdc-icon-button--display-flex":o[9],"smui-icon-button--size-button":o[10]==="button","mdc-icon-button--reduced-size":o[10]==="mini"||o[10]==="button","mdc-card__action":o[23]==="card:action","mdc-card__action--icon":o[23]==="card:action","mdc-top-app-bar__navigation-icon":o[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[23]==="top-app-bar:action","mdc-snackbar__dismiss":o[23]==="snackbar:actions","mdc-data-table__pagination-button":o[23]==="data-table:pagination","mdc-data-table__sort-icon-button":o[23]==="data-table:sortable-header-cell","mdc-dialog__close":o[23]==="dialog:header"&&o[12]==="close"},o[17]))},l[0]&262152&&{style:Object.entries(o[18]).map(rd).concat([o[3]]).join(" ")},l[0]&4194305&&{"aria-pressed":o[22](o[0])?null:o[0]?"true":"false"},l[0]&193&&{"aria-label":o[0]?o[6]:o[7]},l[0]&64&&{"data-aria-label-on":o[6]},l[0]&128&&{"data-aria-label-off":o[7]},l[0]&16777216&&{"aria-describedby":o[24]},l[0]&2048&&{href:o[11]},l[0]&1048576&&ze(o[20]),l[0]&524288&&ze(o[19]),l[0]&268435456&&ze(o[28])]):{};if(l[0]&256|l[1]&16&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[13])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[32](e),e.$on("click",o[33]),e.$on("click",o[34]),Ge(e.$$.fragment),w(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&w(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[32](null),o&&X(n),e&&Be(e,o)}}}const rd=([t,e])=>`${t}: ${e};`;function Mv(t,e,n){let i;const s=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","getElement"];let r=Q(e,s),{$$slots:a={},$$scope:o}=e;const l=qe(Se());let c=()=>{};function u(U){return U===c}let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{ripple:m=!0}=e,{color:g=void 0}=e,{toggle:p=!1}=e,{pressed:E=c}=e,{ariaLabelOn:b=void 0}=e,{ariaLabelOff:S=void 0}=e,{touch:O=!1}=e,{displayFlex:R=!0}=e,{size:k="normal"}=e,{href:y=void 0}=e,{action:T=void 0}=e,M,v,I={},j={},A={},V=gt("SMUI:icon-button:context"),F=gt("SMUI:icon-button:aria-describedby"),{component:W=y==null?Ta:mr}=e;et("SMUI:icon:context","icon-button");let G=null;hn(()=>{v&&v.destroy()});function J(U){return U in I?I[U]:H().classList.contains(U)}function be(U){I[U]||n(17,I[U]=!0,I)}function re(U){(!(U in I)||I[U])&&n(17,I[U]=!1,I)}function Fe(U,Ee){j[U]!=Ee&&(Ee===""||Ee==null?(delete j[U],n(18,j)):n(18,j[U]=Ee,j))}function ge(U){var Ee;return U in A?(Ee=A[U])!==null&&Ee!==void 0?Ee:null:H().getAttribute(U)}function st(U,Ee){A[U]!==Ee&&n(19,A[U]=Ee,A)}function x(U){n(0,E=U.isOn)}function H(){return M.getElement()}function Ae(U){ie[U?"unshift":"push"](()=>{M=U,n(15,M)})}const le=()=>v&&v.handleClick(),q=()=>V==="top-app-bar:navigation"&&$e(H(),"SMUITopAppBarIconButton:nav");return t.$$set=U=>{e=D(D({},e),Re(U)),n(28,r=Q(e,s)),"use"in U&&n(1,d=U.use),"class"in U&&n(2,f=U.class),"style"in U&&n(3,h=U.style),"ripple"in U&&n(4,m=U.ripple),"color"in U&&n(5,g=U.color),"toggle"in U&&n(29,p=U.toggle),"pressed"in U&&n(0,E=U.pressed),"ariaLabelOn"in U&&n(6,b=U.ariaLabelOn),"ariaLabelOff"in U&&n(7,S=U.ariaLabelOff),"touch"in U&&n(8,O=U.touch),"displayFlex"in U&&n(9,R=U.displayFlex),"size"in U&&n(10,k=U.size),"href"in U&&n(11,y=U.href),"action"in U&&n(12,T=U.action),"component"in U&&n(13,W=U.component),"$$scope"in U&&n(35,o=U.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&4096&&n(20,i=(()=>{if(V==="data-table:pagination")switch(T){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return V==="dialog:header"?{"data-mdc-dialog-action":T}:{action:T}})()),t.$$.dirty[0]&1610711040&&M&&H()&&p!==G&&(p&&!v?(n(16,v=new Rv({addClass:be,hasClass:J,notifyChange:U=>{x(U),$e(H(),"SMUIIconButtonToggle:change",U,void 0,!0)},removeClass:re,getAttr:ge,setAttr:st})),v.init()):!p&&v&&(v.destroy(),n(16,v=void 0),n(17,I={}),n(19,A={})),n(30,G=p)),t.$$.dirty[0]&65537&&v&&!u(E)&&v.isOn()!==E&&v.toggle(E)},[E,d,f,h,m,g,b,S,O,R,k,y,T,W,H,M,v,I,j,A,i,l,u,V,F,be,re,Fe,r,p,G,a,Ae,le,q,o]}class uS extends De{constructor(e){super();ke(this,e,Mv,Dv,Oe,{use:1,class:2,style:3,ripple:4,color:5,toggle:29,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,getElement:14},null,[-1,-1])}get getElement(){return this.$$.ctx[14]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],a=t[n++],o=t[n++],l=((s&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],a=s+1<t.length,o=a?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|o>>4;let f=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(f=64)),i.push(n[u],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||o==null||c==null||d==null)throw Error();const f=r<<2|o>>4;if(i.push(f),c!==64){const h=o<<4&240|c>>2;if(i.push(h),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Uv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function ad(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){return Pt().indexOf("Electron/")>=0}function ud(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hv(){return Pt().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="FirebaseError";class Vi extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=jv,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?qv(r,i):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new Vi(s,o,i)}}function qv(t,e){return t.replace(zv,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const zv=/\{\$([^}]+)}/g;function Gv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],a=e[s];if(cd(r)&&cd(a)){if(!br(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function cd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wv(t,e){const n=new Kv(t,e);return n.subscribe.bind(n)}class Kv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Oa),s.error===void 0&&(s.error=Oa),s.complete===void 0&&(s.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return t&&t._delegate?t._delegate:t}class Bi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jv(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);i===o&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qv(t){return t===hi?void 0:t}function Jv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ot||(ot={}));const xv={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},$v=ot.INFO,eI={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},tI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=eI[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=$v,this._logHandler=tI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...e),this._logHandler(this,ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...e),this._logHandler(this,ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...e),this._logHandler(this,ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...e),this._logHandler(this,ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...e),this._logHandler(this,ot.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iI(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function iI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ra="@firebase/app",dd="0.7.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new wa("@firebase/app"),sI="@firebase/app-compat",rI="@firebase/analytics-compat",oI="@firebase/analytics",aI="@firebase/app-check-compat",lI="@firebase/app-check",uI="@firebase/auth",cI="@firebase/auth-compat",dI="@firebase/database",fI="@firebase/database-compat",hI="@firebase/functions",mI="@firebase/functions-compat",pI="@firebase/installations",gI="@firebase/installations-compat",_I="@firebase/messaging",yI="@firebase/messaging-compat",vI="@firebase/performance",II="@firebase/performance-compat",EI="@firebase/remote-config",bI="@firebase/remote-config-compat",AI="@firebase/storage",TI="@firebase/storage-compat",SI="@firebase/firestore",CI="@firebase/firestore-compat",LI="firebase",OI="9.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="[DEFAULT]",wI={[Ra]:"fire-core",[sI]:"fire-core-compat",[oI]:"fire-analytics",[rI]:"fire-analytics-compat",[lI]:"fire-app-check",[aI]:"fire-app-check-compat",[uI]:"fire-auth",[cI]:"fire-auth-compat",[dI]:"fire-rtdb",[fI]:"fire-rtdb-compat",[hI]:"fire-fn",[mI]:"fire-fn-compat",[pI]:"fire-iid",[gI]:"fire-iid-compat",[_I]:"fire-fcm",[yI]:"fire-fcm-compat",[vI]:"fire-perf",[II]:"fire-perf-compat",[EI]:"fire-rc",[bI]:"fire-rc-compat",[AI]:"fire-gcs",[TI]:"fire-gcs-compat",[SI]:"fire-fst",[CI]:"fire-fst-compat","fire-js":"fire-js",[LI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Da=new Map;function RI(t,e){try{t.container.addComponent(e)}catch(n){ka.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Da.has(e))return ka.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,t);for(const n of Ar.values())RI(n,t);return!0}function Ma(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Tr=new ps("app","Firebase",kI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=OI;function cS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});const s=Ar.get(i);if(s){if(br(t,s.options)&&br(n,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const r=new Zv(i);for(const o of Da.values())r.addComponent(o);const a=new DI(t,n,r);return Ar.set(i,a),a}function hd(t=fd){const e=Ar.get(t);if(!e)throw Tr.create("no-app",{appName:t});return e}function Wn(t,e,n){var i;let s=(i=wI[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ka.warn(o.join(" "));return}_s(new Bi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){_s(new Bi("platform-logger",e=>new nI(e),"PRIVATE")),Wn(Ra,dd,t),Wn(Ra,dd,"esm2017"),Wn("fire-js","")}MI("");var NI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},se,Na=Na||{},Ce=NI||self;function Sr(){}function Pa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PI(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++FI)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),FI=0;function UI(t,e,n){return t.call.apply(t.bind,arguments)}function VI(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ht=UI:Ht=VI,Ht.apply(null,arguments)}function Cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function jt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[s].apply(i,a)}}function Kn(){this.s=this.s,this.o=this.o}var BI=0,HI={};Kn.prototype.s=!1;Kn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),BI!=0)){var t=PI(this);delete HI[t]}};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const md=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},pd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function jI(t){e:{var e=DE;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function gd(t){return Array.prototype.concat.apply([],arguments)}function Ua(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Lr(t){return/^[\s\xa0]*$/.test(t)}var _d=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xt(t,e){return t.indexOf(e)!=-1}function Va(t,e){return t<e?-1:t>e?1:0}var $t;e:{var yd=Ce.navigator;if(yd){var vd=yd.userAgent;if(vd){$t=vd;break e}}$t=""}function Ba(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Id(t){const e={};for(const n in t)e[n]=t[n];return e}var Ed="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bd(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Ed.length;r++)n=Ed[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ha(t){return Ha[" "](t),t}Ha[" "]=Sr;function qI(t){var e=WI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zI=xt($t,"Opera"),Hi=xt($t,"Trident")||xt($t,"MSIE"),Ad=xt($t,"Edge"),ja=Ad||Hi,Td=xt($t,"Gecko")&&!(xt($t.toLowerCase(),"webkit")&&!xt($t,"Edge"))&&!(xt($t,"Trident")||xt($t,"MSIE"))&&!xt($t,"Edge"),GI=xt($t.toLowerCase(),"webkit")&&!xt($t,"Edge");function Sd(){var t=Ce.document;return t?t.documentMode:void 0}var Or;e:{var qa="",za=function(){var t=$t;if(Td)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ad)return/Edge\/([\d\.]+)/.exec(t);if(Hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GI)return/WebKit\/(\S+)/.exec(t);if(zI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(za&&(qa=za?za[1]:""),Hi){var Ga=Sd();if(Ga!=null&&Ga>parseFloat(qa)){Or=String(Ga);break e}}Or=qa}var WI={};function KI(){return qI(function(){let t=0;const e=_d(String(Or)).split("."),n=_d("9").split("."),i=Math.max(e.length,n.length);for(let a=0;t==0&&a<i;a++){var s=e[a]||"",r=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Va(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Va(s[2].length==0,r[2].length==0)||Va(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Wa;if(Ce.document&&Hi){var Cd=Sd();Wa=Cd||parseInt(Or,10)||void 0}else Wa=void 0;var XI=Wa,YI=function(){if(!Ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ce.addEventListener("test",Sr,e),Ce.removeEventListener("test",Sr,e)}catch{}return t}();function Wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Wt.prototype.h=function(){this.defaultPrevented=!0};function Is(t,e){if(Wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Td){e:{try{Ha(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Is.Z.h.call(this)}}jt(Is,Wt);var QI={2:"touch",3:"pen",4:"mouse"};Is.prototype.h=function(){Is.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),JI=0;function ZI(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++JI,this.ca=this.fa=!1}function wr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Rr(t){this.src=t,this.g={},this.h=0}Rr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var a=Xa(t,e,i,s);return-1<a?(e=t[a],n||(e.fa=!1)):(e=new ZI(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Ka(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=md(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(wr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xa(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var Ya="closure_lm_"+(1e6*Math.random()|0),Qa={};function Ld(t,e,n,i,s){if(i&&i.once)return wd(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ld(t,e[r],n,i,s);return null}return n=$a(n),t&&t[Es]?t.N(e,n,vs(i)?!!i.capture:!!i,s):Od(t,e,n,!1,i,s)}function Od(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var a=vs(s)?!!s.capture:!!s,o=Za(t);if(o||(t[Ya]=o=new Rr(t)),n=o.add(e,n,i,a,r),n.proxy)return n;if(i=xI(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)YI||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(kd(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xI(){function t(n){return e.call(t.src,t.listener,n)}var e=$I;return t}function wd(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)wd(t,e[r],n,i,s);return null}return n=$a(n),t&&t[Es]?t.O(e,n,vs(i)?!!i.capture:!!i,s):Od(t,e,n,!0,i,s)}function Rd(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Rd(t,e[r],n,i,s);else i=vs(i)?!!i.capture:!!i,n=$a(n),t&&t[Es]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Xa(r,n,i,s),-1<n&&(wr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Za(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xa(e,n,i,s)),(n=-1<t?e[t]:null)&&Ja(n))}function Ja(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Es])Ka(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(kd(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Za(e))?(Ka(n,t),n.h==0&&(n.src=null,e[Ya]=null)):wr(t)}}}function kd(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function $I(t,e){if(t.ca)t=!0;else{e=new Is(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Ja(t),t=n.call(i,e)}return t}function Za(t){return t=t[Ya],t instanceof Rr?t:null}var xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function $a(t){return typeof t=="function"?t:(t[xa]||(t[xa]=function(e){return t.handleEvent(e)}),t[xa])}function Ft(){Kn.call(this),this.i=new Rr(this),this.P=this,this.I=null}jt(Ft,Kn);Ft.prototype[Es]=!0;Ft.prototype.removeEventListener=function(t,e,n,i){Rd(this,t,e,n,i)};function qt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Wt(e,t);else if(e instanceof Wt)e.target=e.target||t;else{var s=e;e=new Wt(i,t),bd(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var a=e.g=n[r];s=kr(a,i,!0,e)&&s}if(a=e.g=t,s=kr(a,i,!0,e)&&s,s=kr(a,i,!1,e)&&s,n)for(r=0;r<n.length;r++)a=e.g=n[r],s=kr(a,i,!1,e)&&s}Ft.prototype.M=function(){if(Ft.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)wr(n[i]);delete t.g[e],t.h--}}this.I=null};Ft.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ft.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function kr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ca&&a.capture==n){var o=a.listener,l=a.ia||a.src;a.fa&&Ka(t.i,a),s=o.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var el=Ce.JSON.stringify;function eE(){var t=Md;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tE{constructor(){this.h=this.g=null}add(e,n){const i=Dd.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Dd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nE,t=>t.reset());class nE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iE(t){Ce.setTimeout(()=>{throw t},0)}function tl(t,e){nl||sE(),il||(nl(),il=!0),Md.add(t,e)}var nl;function sE(){var t=Ce.Promise.resolve(void 0);nl=function(){t.then(rE)}}var il=!1,Md=new tE;function rE(){for(var t;t=eE();){try{t.h.call(t.g)}catch(n){iE(n)}var e=Dd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1}function Dr(t,e){Ft.call(this),this.h=t||1,this.g=e||Ce,this.j=Ht(this.kb,this),this.l=Date.now()}jt(Dr,Ft);se=Dr.prototype;se.da=!1;se.S=null;se.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qt(this,"tick"),this.da&&(sl(this),this.start()))}};se.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}se.M=function(){Dr.Z.M.call(this),sl(this),delete this.g};function rl(t,e,n){if(typeof t=="function")n&&(t=Ht(t,n));else if(t&&typeof t.handleEvent=="function")t=Ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ce.setTimeout(t,e||0)}function Nd(t){t.g=rl(()=>{t.g=null,t.i&&(t.i=!1,Nd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oE extends Kn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nd(this)}M(){super.M(),this.g&&(Ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){Kn.call(this),this.h=t,this.g={}}jt(bs,Kn);var Pd=[];function Fd(t,e,n,i){Array.isArray(n)||(n&&(Pd[0]=n.toString()),n=Pd);for(var s=0;s<n.length;s++){var r=Ld(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ud(t){Ba(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ja(e)},t),t.g={}}bs.prototype.M=function(){bs.Z.M.call(this),Ud(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mr(){this.g=!0}Mr.prototype.Aa=function(){this.g=!1};function aE(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var a="",o=r.split("&"),l=0;l<o.length;l++){var c=o[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");a=2<=d.length&&d[1]=="type"?a+(u+"="+c+"&"):a+(u+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+a})}function lE(t,e,n,i,s,r,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+a})}function ji(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cE(t,n)+(i?" "+i:"")})}function uE(t,e){t.info(function(){return"TIMEOUT: "+e})}Mr.prototype.info=function(){};function cE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return el(n)}catch{return e}}var mi={},Vd=null;function Nr(){return Vd=Vd||new Ft}mi.Ma="serverreachability";function Bd(t){Wt.call(this,mi.Ma,t)}jt(Bd,Wt);function As(t){const e=Nr();qt(e,new Bd(e,t))}mi.STAT_EVENT="statevent";function Hd(t,e){Wt.call(this,mi.STAT_EVENT,t),this.stat=e}jt(Hd,Wt);function en(t){const e=Nr();qt(e,new Hd(e,t))}mi.Na="timingevent";function jd(t,e){Wt.call(this,mi.Na,t),this.size=e}jt(jd,Wt);function Ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ce.setTimeout(function(){t()},e)}var Pr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ol(){}ol.prototype.h=null;function zd(t){return t.h||(t.h=t.i())}function Gd(){}var Ss={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function al(){Wt.call(this,"d")}jt(al,Wt);function ll(){Wt.call(this,"c")}jt(ll,Wt);var ul;function Fr(){}jt(Fr,ol);Fr.prototype.g=function(){return new XMLHttpRequest};Fr.prototype.i=function(){return{}};ul=new Fr;function Cs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new bs(this),this.P=dE,t=ja?125:void 0,this.W=new Dr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wd}function Wd(){this.i=null,this.g="",this.h=!1}var dE=45e3,cl={},Ur={};se=Cs.prototype;se.setTimeout=function(t){this.P=t};function dl(t,e,n){t.K=1,t.v=qr(kn(e)),t.s=n,t.U=!0,Kd(t,null)}function Kd(t,e){t.F=Date.now(),Ls(t),t.A=kn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),tf(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Wd,t.g=Sf(t.l,n?e:null,!t.s),0<t.O&&(t.L=new oE(Ht(t.Ia,t,t.g),t.O)),Fd(t.V,t.g,"readystatechange",t.gb),e=t.H?Id(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),As(1),aE(t.j,t.u,t.A,t.m,t.X,t.s)}se.gb=function(t){t=t.target;const e=this.L;e&&Dn(t)==3?e.l():this.Ia(t)};se.Ia=function(t){try{if(t==this.g)e:{const u=Dn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||ja||this.g&&(this.h.h||this.g.ga()||mf(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?As(3):As(2)),Vr(this);var n=this.g.ba();this.N=n;t:if(Xd(this)){var i=mf(this.g);t="";var s=i.length,r=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){pi(this),Os(this);var a="";break t}this.h.i=new Ce.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=n==200,lE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lr(o)){var c=o;break t}}c=null}if(n=c)ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fl(this,n);else{this.i=!1,this.o=3,en(12),pi(this),Os(this);break e}}this.U?(Yd(this,u,a),ja&&this.i&&u==3&&(Fd(this.V,this.W,"tick",this.fb),this.W.start())):(ji(this.j,this.m,a,null),fl(this,a)),u==4&&pi(this),this.i&&!this.I&&(u==4?Ef(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,en(12)):(this.o=0,en(13)),pi(this),Os(this)}}}catch{}finally{}};function Xd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Yd(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=fE(t,n),s==Ur){e==4&&(t.o=4,en(14),i=!1),ji(t.j,t.m,null,"[Incomplete Response]");break}else if(s==cl){t.o=4,en(15),ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ji(t.j,t.m,s,null),fl(t,s);Xd(t)&&s!=Ur&&s!=cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,en(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Al(e),e.L=!0,en(11))):(ji(t.j,t.m,n,"[Invalid Chunked Response]"),pi(t),Os(t))}se.fb=function(){if(this.g){var t=Dn(this.g),e=this.g.ga();this.C<e.length&&(Vr(this),Yd(this,t,e),this.i&&t!=4&&Ls(this))}};function fE(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ur:(n=Number(e.substring(n,i)),isNaN(n)?cl:(i+=1,i+n>e.length?Ur:(e=e.substr(i,n),t.C=i+n,e)))}se.cancel=function(){this.I=!0,pi(this)};function Ls(t){t.Y=Date.now()+t.P,Qd(t,t.P)}function Qd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ts(Ht(t.eb,t),e)}function Vr(t){t.B&&(Ce.clearTimeout(t.B),t.B=null)}se.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uE(this.j,this.A),this.K!=2&&(As(3),en(17)),pi(this),this.o=2,Os(this)):Qd(this,this.Y-t)};function Os(t){t.l.G==0||t.I||Ef(t.l,t)}function pi(t){Vr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sl(t.W),Ud(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||pl(n.i,t))){if(n.I=t.N,!t.J&&pl(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yr(n),Kr(n);else break e;bl(n),en(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ts(Ht(n.ab,n),6e3));if(1>=rf(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else yi(n,11)}else if((t.J||n.g==t)&&Yr(n),!Lr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const m=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(xt(m,"spdy")||xt(m,"quic")||xt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(gl(r,r.h),r.h=null))}if(i.D){const g=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,It(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var a=t;if(i.oa=Tf(i,i.H?i.la:null,i.W),a.J){of(i.i,a);var o=a,l=i.K;l&&o.setTimeout(l),o.B&&(Vr(o),Ls(o)),i.g=a}else vf(i);0<n.l.length&&Xr(n)}else c[0]!="stop"&&c[0]!="close"||yi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?yi(n,7):Il(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}As(4)}catch{}}function hE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Pa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function hl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pa(t)||typeof t=="string")pd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Pa(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=hE(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function qi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof qi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}se=qi.prototype;se.R=function(){ml(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};se.T=function(){return ml(this),this.g.concat()};function ml(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];gi(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],gi(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}se.get=function(t,e){return gi(this.h,t)?this.h[t]:e};se.set=function(t,e){gi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};se.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function gi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Jd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function mE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _i(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _i){this.g=e!==void 0?e:t.g,Br(this,t.j),this.s=t.s,Hr(this,t.i),jr(this,t.m),this.l=t.l,e=t.h;var n=new ks;n.i=e.i,e.g&&(n.g=new qi(e.g),n.h=e.h),Zd(this,n),this.o=t.o}else t&&(n=String(t).match(Jd))?(this.g=!!e,Br(this,n[1]||"",!0),this.s=ws(n[2]||""),Hr(this,n[3]||"",!0),jr(this,n[4]),this.l=ws(n[5]||"",!0),Zd(this,n[6]||"",!0),this.o=ws(n[7]||"")):(this.g=!!e,this.h=new ks(null,this.g))}_i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,xd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,xd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?vE:yE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,EE)),t.join("")};function kn(t){return new _i(t)}function Br(t,e,n){t.j=n?ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hr(t,e,n){t.i=n?ws(e,!0):e}function jr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zd(t,e,n){e instanceof ks?(t.h=e,bE(t.h,t.g)):(n||(e=Rs(e,IE)),t.h=new ks(e,t.g))}function It(t,e,n){t.h.set(e,n)}function qr(t){return It(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pE(t){return t instanceof _i?kn(t):new _i(t,void 0)}function gE(t,e,n,i){var s=new _i(null,void 0);return t&&Br(s,t),e&&Hr(s,e),n&&jr(s,n),i&&(s.l=i),s}function ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_E),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _E(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xd=/[#\/\?@]/g,yE=/[#\?:]/g,vE=/[#\?]/g,IE=/[#\?@]/g,EE=/#/g;function ks(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new qi,t.h=0,t.i&&mE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}se=ks.prototype;se.add=function(t,e){Xn(this),this.i=null,t=zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $d(t,e){Xn(t),e=zi(t,e),gi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,gi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ml(t)))}function ef(t,e){return Xn(t),e=zi(t,e),gi(t.g.h,e)}se.forEach=function(t,e){Xn(this),this.g.forEach(function(n,i){pd(n,function(s){t.call(e,s,i,this)},this)},this)};se.T=function(){Xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};se.R=function(t){Xn(this);var e=[];if(typeof t=="string")ef(this,t)&&(e=gd(e,this.g.get(zi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=gd(e,t[n])}return e};se.set=function(t,e){return Xn(this),this.i=null,t=zi(this,t),ef(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};se.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function tf(t,e,n){$d(t,e),0<n.length&&(t.i=null,t.g.set(zi(t,e),Ua(n)),t.h+=n.length)}se.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var a=s;i[r]!==""&&(a+="="+encodeURIComponent(String(i[r]))),t.push(a)}}return this.i=t.join("&")};function zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bE(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&($d(this,i),tf(this,s,n))},t)),t.j=e}var AE=class{constructor(t,e){this.h=t,this.g=e}};function nf(t){this.l=t||TE,Ce.PerformanceNavigationTiming?(t=Ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ce.g&&Ce.g.Ea&&Ce.g.Ea()&&Ce.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TE=10;function sf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rf(t){return t.h?1:t.g?t.g.size:0}function pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gl(t,e){t.g?t.g.add(e):t.h=e}function of(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nf.prototype.cancel=function(){if(this.i=af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function af(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ua(t.i)}function _l(){}_l.prototype.stringify=function(t){return Ce.JSON.stringify(t,void 0)};_l.prototype.parse=function(t){return Ce.JSON.parse(t,void 0)};function SE(){this.g=new _l}function CE(t,e,n){const i=n||"";try{hl(t,function(s,r){let a=s;vs(s)&&(a=el(s)),e.push(i+r+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function LE(t,e){const n=new Mr;if(Ce.Image){const i=new Image;i.onload=Cr(zr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Cr(zr,n,i,"TestLoadImage: error",!1,e),i.onabort=Cr(zr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Cr(zr,n,i,"TestLoadImage: timeout",!1,e),Ce.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function zr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ds(t){this.l=t.$b||null,this.j=t.ib||!1}jt(Ds,ol);Ds.prototype.g=function(){return new Gr(this.l,this.j)};Ds.prototype.i=function(t){return function(){return t}}({});function Gr(t,e){Ft.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=yl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}jt(Gr,Ft);var yl=0;se=Gr.prototype;se.open=function(t,e){if(this.readyState!=yl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ns(this)};se.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ce).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};se.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=yl};se.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Ce.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lf(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function lf(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}se.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ms(this):Ns(this),this.readyState==3&&lf(this)}};se.Ua=function(t){this.g&&(this.response=this.responseText=t,Ms(this))};se.Ta=function(t){this.g&&(this.response=t,Ms(this))};se.ha=function(){this.g&&Ms(this)};function Ms(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ns(t)}se.setRequestHeader=function(t,e){this.v.append(t,e)};se.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};se.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OE=Ce.JSON.parse;function Lt(t){Ft.call(this),this.headers=new qi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=uf,this.K=this.L=!1}jt(Lt,Ft);var uf="",wE=/^https?$/i,RE=["POST","PUT"];se=Lt.prototype;se.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ul.g(),this.C=this.u?zd(this.u):zd(ul),this.g.onreadystatechange=Ht(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){cf(this,r);return}t=n||"";const s=new qi(this.headers);i&&hl(i,function(r,a){s.set(a,r)}),i=jI(s.T()),n=Ce.FormData&&t instanceof Ce.FormData,!(0<=md(RE,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,a){this.g.setRequestHeader(a,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hf(this),0<this.B&&((this.K=kE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ht(this.pa,this)):this.A=rl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){cf(this,r)}};function kE(t){return Hi&&KI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function DE(t){return t.toLowerCase()=="content-type"}se.pa=function(){typeof Na!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qt(this,"timeout"),this.abort(8))};function cf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,df(t),Wr(t)}function df(t){t.D||(t.D=!0,qt(t,"complete"),qt(t,"error"))}se.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qt(this,"complete"),qt(this,"abort"),Wr(this))};se.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wr(this,!0)),Lt.Z.M.call(this)};se.Fa=function(){this.s||(this.F||this.v||this.l?ff(this):this.cb())};se.cb=function(){ff(this)};function ff(t){if(t.h&&typeof Na!="undefined"&&(!t.C[1]||Dn(t)!=4||t.ba()!=2)){if(t.v&&Dn(t)==4)rl(t.Fa,0,t);else if(qt(t,"readystatechange"),Dn(t)==4){t.h=!1;try{const o=t.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.H).match(Jd)[1]||null;if(!s&&Ce.self&&Ce.self.location){var r=Ce.self.location.protocol;s=r.substr(0,r.length-1)}i=!wE.test(s?s.toLowerCase():"")}n=i}if(n)qt(t,"complete"),qt(t,"success");else{t.m=6;try{var a=2<Dn(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.ba()+"]",df(t)}}finally{Wr(t)}}}}function Wr(t,e){if(t.g){hf(t);const n=t.g,i=t.C[0]?Sr:null;t.g=null,t.C=null,e||qt(t,"ready");try{n.onreadystatechange=i}catch{}}}function hf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ce.clearTimeout(t.A),t.A=null)}function Dn(t){return t.g?t.g.readyState:0}se.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}};se.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};se.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OE(e)}};function mf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case uf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}se.Da=function(){return this.m};se.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ME(t){let e="";return Ba(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function vl(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ME(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):It(t,e,n))}function Ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pf(t){this.za=0,this.l=[],this.h=new Mr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ps("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ps("baseRetryDelayMs",5e3,t),this.$a=Ps("retryDelaySeedMs",1e4,t),this.Ya=Ps("forwardChannelMaxRetries",2,t),this.ra=Ps("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new nf(t&&t.concurrentRequestLimit),this.Ca=new SE,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}se=pf.prototype;se.ma=8;se.G=1;function Il(t){if(gf(t),t.G==3){var e=t.V++,n=kn(t.F);It(n,"SID",t.J),It(n,"RID",e),It(n,"TYPE","terminate"),Fs(t,n),e=new Cs(t,t.h,e,void 0),e.K=2,e.v=qr(kn(n)),n=!1,Ce.navigator&&Ce.navigator.sendBeacon&&(n=Ce.navigator.sendBeacon(e.v.toString(),"")),!n&&Ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sf(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ls(e)}Af(t)}se.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Kr(t){t.g&&(Al(t),t.g.cancel(),t.g=null)}function gf(t){Kr(t),t.u&&(Ce.clearTimeout(t.u),t.u=null),Yr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Ce.clearTimeout(t.m),t.m=null)}function El(t,e){t.l.push(new AE(t.Za++,e)),t.G==3&&Xr(t)}function Xr(t){sf(t.i)||t.m||(t.m=!0,tl(t.Ha,t),t.C=0)}function NE(t,e){return rf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ts(Ht(t.Ha,t,e),bf(t,t.C)),t.C++,!0)}se.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Cs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Id(r),bd(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yf(this,s,e),n=kn(this.F),It(n,"RID",t),It(n,"CVER",22),this.D&&It(n,"X-HTTP-Session-Id",this.D),Fs(this,n),this.o&&r&&vl(n,this.o,r),gl(this.i,s),this.Ra&&It(n,"TYPE","init"),this.ja?(It(n,"$req",e),It(n,"SID","null"),s.$=!0,dl(s,n,null)):dl(s,n,e),this.G=2}}else this.G==3&&(t?_f(this,t):this.l.length==0||sf(this.i)||_f(this))};function _f(t,e){var n;e?n=e.m:n=t.V++;const i=kn(t.F);It(i,"SID",t.J),It(i,"RID",n),It(i,"AID",t.U),Fs(t,i),t.o&&t.s&&vl(i,t.o,t.s),n=new Cs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=yf(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),gl(t.i,n),dl(n,i,e)}function Fs(t,e){t.j&&hl({},function(n,i){It(e,i,n)})}function yf(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Ht(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const a=["count="+n];r==-1?0<n?(r=s[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let o=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),o=!1;else try{CE(u,a,"req"+c+"_")}catch{i&&i(u)}}if(o){i=a.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function vf(t){t.g||t.u||(t.Y=1,tl(t.Ga,t),t.A=0)}function bl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ts(Ht(t.Ga,t),bf(t,t.A)),t.A++,!0)}se.Ga=function(){if(this.u=null,If(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ts(Ht(this.bb,this),t)}};se.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,en(10),Kr(this),If(this))};function Al(t){t.B!=null&&(Ce.clearTimeout(t.B),t.B=null)}function If(t){t.g=new Cs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=kn(t.oa);It(e,"RID","rpc"),It(e,"SID",t.J),It(e,"CI",t.N?"0":"1"),It(e,"AID",t.U),Fs(t,e),It(e,"TYPE","xmlhttp"),t.o&&t.s&&vl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=qr(kn(e)),n.s=null,n.U=!0,Kd(n,t)}se.ab=function(){this.v!=null&&(this.v=null,Kr(this),bl(this),en(19))};function Yr(t){t.v!=null&&(Ce.clearTimeout(t.v),t.v=null)}function Ef(t,e){var n=null;if(t.g==e){Yr(t),Al(t),t.g=null;var i=2}else if(pl(t.i,e))n=e.D,of(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Nr(),qt(i,new jd(i,n,e,s)),Xr(t)}else vf(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&NE(t,e)||i==2&&bl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}}function bf(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Ht(t.jb,t);n||(n=new _i("//www.google.com/images/cleardot.gif"),Ce.location&&Ce.location.protocol=="http"||Br(n,"https"),qr(n)),LE(n.toString(),i)}else en(2);t.G=0,t.j&&t.j.va(e),Af(t),gf(t)}se.jb=function(t){t?(this.h.info("Successfully pinged google.com"),en(2)):(this.h.info("Failed to ping google.com"),en(1))};function Af(t){t.G=0,t.I=-1,t.j&&((af(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ua(t.l),t.l.length=0),t.j.ua())}function Tf(t,e,n){let i=pE(n);if(i.i!="")e&&Hr(i,e+"."+i.i),jr(i,i.m);else{const s=Ce.location;i=gE(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Ba(t.aa,function(s,r){It(i,r,s)}),e=t.D,n=t.sa,e&&n&&It(i,e,n),It(i,"VER",t.ma),Fs(t,i),i}function Sf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Lt(new Ds({ib:!0})):new Lt(t.qa),e.L=t.H,e}function Cf(){}se=Cf.prototype;se.xa=function(){};se.wa=function(){};se.va=function(){};se.ua=function(){};se.Oa=function(){};function Qr(){if(Hi&&!(10<=Number(XI)))throw Error("Environmental error: no available transport.")}Qr.prototype.g=function(t,e){return new un(t,e)};function un(t,e){Ft.call(this),this.g=new pf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Lr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gi(this)}jt(un,Ft);un.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),tl(Ht(t.hb,t,e))),en(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Tf(t,null,t.W),Xr(t)};un.prototype.close=function(){Il(this.g)};un.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,El(this.g,e)}else this.v?(e={},e.__data__=el(t),El(this.g,e)):El(this.g,t)};un.prototype.M=function(){this.g.j=null,delete this.j,Il(this.g),delete this.g,un.Z.M.call(this)};function Lf(t){al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}jt(Lf,al);function Of(){ll.call(this),this.status=1}jt(Of,ll);function Gi(t){this.g=t}jt(Gi,Cf);Gi.prototype.xa=function(){qt(this.g,"a")};Gi.prototype.wa=function(t){qt(this.g,new Lf(t))};Gi.prototype.va=function(t){qt(this.g,new Of(t))};Gi.prototype.ua=function(){qt(this.g,"b")};Qr.prototype.createWebChannel=Qr.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;Pr.NO_ERROR=0;Pr.TIMEOUT=8;Pr.HTTP_ERROR=6;qd.COMPLETE="complete";Gd.EventType=Ss;Ss.OPEN="a";Ss.CLOSE="b";Ss.ERROR="c";Ss.MESSAGE="d";Ft.prototype.listen=Ft.prototype.N;Lt.prototype.listenOnce=Lt.prototype.O;Lt.prototype.getLastError=Lt.prototype.La;Lt.prototype.getLastErrorCode=Lt.prototype.Da;Lt.prototype.getStatus=Lt.prototype.ba;Lt.prototype.getResponseJson=Lt.prototype.Qa;Lt.prototype.getResponseText=Lt.prototype.ga;Lt.prototype.send=Lt.prototype.ea;var PE=function(){return new Qr},FE=function(){return Nr()},Tl=Pr,UE=qd,VE=mi,wf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},BE=Ds,Jr=Gd,HE=Lt;const Rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="9.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new wa("@firebase/firestore");function kf(){return vi.logLevel}function _e(t,...e){if(vi.logLevel<=ot.DEBUG){const n=e.map(Sl);vi.debug(`Firestore (${Wi}): ${t}`,...n)}}function Yn(t,...e){if(vi.logLevel<=ot.ERROR){const n=e.map(Sl);vi.error(`Firestore (${Wi}): ${t}`,...n)}}function Df(t,...e){if(vi.logLevel<=ot.WARN){const n=e.map(Sl);vi.warn(`Firestore (${Wi}): ${t}`,...n)}}function Sl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function pt(t,e){t||Ne()}function Pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(sn.UNAUTHENTICATED))}shutdown(){}}class zE{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},o=l=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pt(typeof i.accessToken=="string"),new jE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string"),new sn(e)}}class GE{constructor(e,n,i){this.type="FirstParty",this.user=sn.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class WE{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new GE(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XE{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(r=>(r.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),n(r.token)))(s))};const i=s=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pt(typeof n.token=="string"),new KE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.p(i),this.T=i=>n.writeSequenceNumber(i))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cl.I=-1;class Mf{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=YE(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ct(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ie(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ie(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Ie(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ie(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return cn.fromMillis(Date.now())}static fromDate(e){return cn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new cn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ct(this.nanoseconds,e.nanoseconds):ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.timestamp=e}static fromTimestamp(e){return new at(e)}static min(){return new at(new cn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ne(),i===void 0?i=e.length-n:i>e.length-n&&Ne(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),a=n.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class bt extends Us{construct(e,n,i){return new bt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ie(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const QE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Us{construct(e,n,i){return new rn(e,n,i)}static isValidIdentifier(e){return QE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rn(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Ie(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new Ie(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ie(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(i+=o,s++):(r(),s++)}if(r(),a)throw new Ie(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(n)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.fields=e,e.sort(rn.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Kt(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const JE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(pt(!!t),typeof t=="string"){let e=0;const n=JE.exec(t);if(pt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ot(t.seconds),nanos:Ot(t.nanos)}}function Ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uf(t){const e=t.mapValue.fields.__previous_value__;return Ff(e)?Uf(e):e}function Vs(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new cn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return t==null}function Zr(t){return t===0&&1/t==-1/0}function ZE(t){return typeof t=="number"&&Number.isInteger(t)&&!Zr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.path=e}static fromPath(e){return new Le(bt.fromString(e))}static fromName(e){return new Le(bt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Le(new bt(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ff(t)?4:10:Ne()}function bn(t,e){const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vs(t).isEqual(Vs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Jn(i.timestampValue),a=Jn(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ot(i.geoPointValue.latitude)===Ot(s.geoPointValue.latitude)&&Ot(i.geoPointValue.longitude)===Ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ot(i.integerValue)===Ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ot(i.doubleValue),a=Ot(s.doubleValue);return r===a?Zr(r)===Zr(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(i,s){const r=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Nf(r)!==Nf(a))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(a[o]===void 0||!bn(r[o],a[o])))return!1;return!0}(t,e);default:return Ne()}}function Bs(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ji(t,e){const n=Ii(t),i=Ii(e);if(n!==i)return ct(n,i);switch(n){case 0:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(s,r){const a=Ot(s.integerValue||s.doubleValue),o=Ot(r.integerValue||r.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(t,e);case 3:return Vf(t.timestampValue,e.timestampValue);case 4:return Vf(Vs(t),Vs(e));case 5:return ct(t.stringValue,e.stringValue);case 6:return function(s,r){const a=Yi(s),o=Yi(r);return a.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const a=s.split("/"),o=r.split("/");for(let l=0;l<a.length&&l<o.length;l++){const c=ct(a[l],o[l]);if(c!==0)return c}return ct(a.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const a=ct(Ot(s.latitude),Ot(r.latitude));return a!==0?a:ct(Ot(s.longitude),Ot(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const a=s.values||[],o=r.values||[];for(let l=0;l<a.length&&l<o.length;++l){const c=Ji(a[l],o[l]);if(c)return c}return ct(a.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const a=s.fields||{},o=Object.keys(a),l=r.fields||{},c=Object.keys(l);o.sort(),c.sort();for(let u=0;u<o.length&&u<c.length;++u){const d=ct(o[u],c[u]);if(d!==0)return d;const f=Ji(a[o[u]],l[c[u]]);if(f!==0)return f}return ct(o.length,c.length)}(t.mapValue,e.mapValue);default:throw Ne()}}function Vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ct(t,e);const n=Jn(t),i=Jn(e),s=ct(n.seconds,i.seconds);return s!==0?s:ct(n.nanos,i.nanos)}function Ol(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Jn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Le.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const a of i.values||[])r?r=!1:s+=",",s+=wl(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${wl(i.fields[o])}`;return r+"}"}(t.mapValue):Ne();var e,n}function Rl(t){return!!t&&"integerValue"in t}function kl(t){return!!t&&"arrayValue"in t}function Bf(t){return!!t&&"nullValue"in t}function Hf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xr(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Hs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!xr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=rn.emptyPath(),i={},s=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=o.popLast()}a?i[o.lastSegment()]=Hs(a):s.push(o.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());xr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];xr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Xi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new _n(Hs(this.value))}}function jf(t){const e=[];return Xi(t.fields,(n,i)=>{const s=new rn([n]);if(xr(i)){const r=jf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)}),new Ll(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Xt(e,0,at.min(),_n.empty(),0)}static newFoundDocument(e,n,i){return new Xt(e,1,n,i,0)}static newNoDocument(e,n){return new Xt(e,2,n,_n.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,_n.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Xt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n=null,i=[],s=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=o,this.R=null}}function qf(t,e=null,n=[],i=[],s=null,r=null,a=null){return new xE(t,e,n,i,s,r,a)}function Dl(t){const e=Pe(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>eb(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Qi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=$r(e.startAt)),e.endAt&&(n+="|ub:",n+=$r(e.endAt)),e.R=n}return e.R}function $E(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ol(i.value)}`;var i}).join(", ")}]`),Qi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+$r(t.startAt)),t.endAt&&(e+=", endAt: "+$r(t.endAt)),`Target(${e})`}function Ml(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!lb(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!bn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wf(t.startAt,e.startAt)&&Wf(t.endAt,e.endAt)}function Nl(t){return Le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class on extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,i):new tb(e,n,i):n==="array-contains"?new sb(e,i):n==="in"?new rb(e,i):n==="not-in"?new ob(e,i):n==="array-contains-any"?new ab(e,i):new on(e,n,i)}static P(e,n,i){return n==="in"?new nb(e,i):new ib(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ji(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.v(Ji(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function eb(t){return t.field.canonicalString()+t.op.toString()+Ol(t.value)}class tb extends on{constructor(e,n,i){super(e,n,i),this.key=Le.fromName(i.referenceValue)}matches(e){const n=Le.comparator(e.key,this.key);return this.v(n)}}class nb extends on{constructor(e,n){super(e,"in",n),this.keys=zf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ib extends on{constructor(e,n){super(e,"not-in",n),this.keys=zf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Le.fromName(i.referenceValue))}class sb extends on{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kl(n)&&Bs(n.arrayValue,this.value)}}class rb extends on{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bs(this.value.arrayValue,n)}}class ob extends on{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bs(this.value.arrayValue,n)}}class ab extends on{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Bs(this.value.arrayValue,i))}}class Pl{constructor(e,n){this.position=e,this.before=n}}function $r(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ol(e)).join(",")}`}class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Gf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],a=t.position[s];if(r.field.isKeyField()?i=Le.comparator(Le.fromName(a.referenceValue),n.key):i=Ji(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function Wf(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n=null,i=[],s=[],r=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=l,this.S=null,this.D=null,this.startAt,this.endAt}}function ub(t,e,n,i,s,r,a,o){return new eo(t,e,n,i,s,r,a,o)}function Kf(t){return new eo(t)}function to(t){return!Qi(t.limit)&&t.limitType==="F"}function no(t){return!Qi(t.limit)&&t.limitType==="L"}function cb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function db(t){for(const e of t.filters)if(e.V())return e.field;return null}function fb(t){return t.collectionGroup!==null}function qs(t){const e=Pe(t);if(e.S===null){e.S=[];const n=db(e),i=cb(e);if(n!==null&&i===null)n.isKeyField()||e.S.push(new js(n)),e.S.push(new js(rn.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.S.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new js(rn.keyField(),r))}}}return e.S}function Ei(t){const e=Pe(t);if(!e.D)if(e.limitType==="F")e.D=qf(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of qs(e)){const a=r.dir==="desc"?"asc":"desc";n.push(new js(r.field,a))}const i=e.endAt?new Pl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Pl(e.startAt.position,!e.startAt.before):null;e.D=qf(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.D}function hb(t,e,n){return new eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function io(t,e){return Ml(Ei(t),Ei(e))&&t.limitType===e.limitType}function Xf(t){return`${Dl(Ei(t))}|lt:${t.limitType}`}function Fl(t){return`Query(target=${$E(Ei(t))}; limitType=${t.limitType})`}function so(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Le.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!Gf(n.startAt,qs(n),i)||n.endAt&&Gf(n.endAt,qs(n),i))}(t,e)}function Yf(t){return(e,n)=>{let i=!1;for(const s of qs(t)){const r=mb(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function mb(t,e,n){const i=t.field.isKeyField()?Le.comparator(e.key,n.key):function(s,r,a){const o=r.data.field(s),l=a.data.field(s);return o!==null&&l!==null?Ji(o,l):Ne()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(e)?"-0":e}}function Jf(t){return{integerValue:""+t}}function pb(t,e){return ZE(e)?Jf(e):Qf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this._=void 0}}function gb(t,e,n){return t instanceof oo?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof zs?xf(t,e):t instanceof Gs?$f(t,e):function(i,s){const r=Zf(i,s),a=eh(r)+eh(i.N);return Rl(r)&&Rl(i.N)?Jf(a):Qf(i.k,a)}(t,e)}function _b(t,e,n){return t instanceof zs?xf(t,e):t instanceof Gs?$f(t,e):n}function Zf(t,e){return t instanceof ao?Rl(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class oo extends ro{}class zs extends ro{constructor(e){super(),this.elements=e}}function xf(t,e){const n=th(e);for(const i of t.elements)n.some(s=>bn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Gs extends ro{constructor(e){super(),this.elements=e}}function $f(t,e){let n=th(e);for(const i of t.elements)n=n.filter(s=>!bn(s,i));return{arrayValue:{values:n}}}class ao extends ro{constructor(e,n){super(),this.k=e,this.N=n}}function eh(t){return Ot(t.integerValue||t.doubleValue)}function th(t){return kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yb(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof zs&&i instanceof zs||n instanceof Gs&&i instanceof Gs?Ki(n.elements,i.elements,bn):n instanceof ao&&i instanceof ao?bn(n.N,i.N):n instanceof oo&&i instanceof oo}(t.transform,e.transform)}class vb{constructor(e,n){this.version=e,this.transformResults=n}}class bi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bi}static exists(e){return new bi(void 0,e)}static updateTime(e){return new bi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uo{}function Ib(t,e,n){t instanceof co?function(i,s,r){const a=i.value.clone(),o=rh(i.fieldTransforms,s,r.transformResults);a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zi?function(i,s,r){if(!lo(i.precondition,s))return void s.convertToUnknownDocument(r.version);const a=rh(i.fieldTransforms,s,r.transformResults),o=s.data;o.setAll(sh(i)),o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Ul(t,e,n){t instanceof co?function(i,s,r){if(!lo(i.precondition,s))return;const a=i.value.clone(),o=oh(i.fieldTransforms,r,s);a.setAll(o),s.convertToFoundDocument(ih(s),a).setHasLocalMutations()}(t,e,n):t instanceof Zi?function(i,s,r){if(!lo(i.precondition,s))return;const a=oh(i.fieldTransforms,r,s),o=s.data;o.setAll(sh(i)),o.setAll(a),s.convertToFoundDocument(ih(s),o).setHasLocalMutations()}(t,e,n):function(i,s){lo(i.precondition,s)&&s.convertToNoDocument(at.min())}(t,e)}function Eb(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Zf(i.transform,s||null);r!=null&&(n==null&&(n=_n.empty()),n.set(i.field,r))}return n||null}function nh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ki(n,i,(s,r)=>yb(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ih(t){return t.isFoundDocument()?t.version:at.min()}class co extends uo{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Zi extends uo{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function sh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function rh(t,e,n){const i=new Map;pt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],a=r.transform,o=e.data.field(r.field);i.set(r.field,_b(a,o,n[s]))}return i}function oh(t,e,n){const i=new Map;for(const s of t){const r=s.transform,a=n.data.field(s.field);i.set(s.field,gb(r,a,e))}return i}class ah extends uo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class bb extends uo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,tt;function Tb(t){switch(t){default:return Ne();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function lh(t){if(t===void 0)return Yn("GRPC error has no .code"),K.UNKNOWN;switch(t){case wt.OK:return K.OK;case wt.CANCELLED:return K.CANCELLED;case wt.UNKNOWN:return K.UNKNOWN;case wt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case wt.INTERNAL:return K.INTERNAL;case wt.UNAVAILABLE:return K.UNAVAILABLE;case wt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case wt.NOT_FOUND:return K.NOT_FOUND;case wt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case wt.ABORTED:return K.ABORTED;case wt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case wt.DATA_LOSS:return K.DATA_LOSS;default:return Ne()}}(tt=wt||(wt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.comparator=e,this.root=n||zt.EMPTY}insert(e,n){return new Yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new Yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:zt.RED,this.left=s!=null?s:zt.EMPTY,this.right=r!=null?r:zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new zt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(t,e,n,i,s){return this}insert(t,e,n){return new zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uh(this.data.getIterator())}getIteratorFrom(e){return new uh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Gt(this.comparator);return n.data=e,n}}class uh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new Yt(Le.comparator);function Ai(){return Sb}const Cb=new Yt(Le.comparator);function Vl(){return Cb}const Lb=new Yt(Le.comparator);function Ob(){return Lb}const wb=new Gt(Le.comparator);function yt(...t){let e=wb;for(const n of t)e=e.add(n);return e}const Rb=new Gt(ct);function ch(){return Rb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Ws.createSynthesizedTargetChangeForCurrentChange(e,n)),new ho(at.min(),i,ch(),Ai(),yt())}}class Ws{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ws(Kt.EMPTY_BYTE_STRING,n,yt(),yt(),yt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i,s){this.$=e,this.removedTargetIds=n,this.key=i,this.F=s}}class dh{constructor(e,n){this.targetId=e,this.O=n}}class fh{constructor(e,n,i=Kt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class hh{constructor(){this.M=0,this.L=ph(),this.B=Kt.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=yt(),n=yt(),i=yt();return this.L.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Ne()}}),new Ws(this.B,this.U,e,n,i)}H(){this.q=!1,this.L=ph()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class kb{constructor(e){this.et=e,this.nt=new Map,this.st=Ai(),this.it=mh(),this.rt=new Gt(ct)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const i=this.ht(n);switch(e.state){case 0:this.lt(n)&&i.W(e.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(e.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(n);break;case 3:this.lt(n)&&(i.tt(),i.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),i.W(e.resumeToken));break;default:Ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((i,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,i=e.O.count,s=this.wt(n);if(s){const r=s.target;if(Nl(r))if(i===0){const a=new Le(r.path);this.ct(n,a,Xt.newNoDocument(a,at.min()))}else pt(i===1);else this._t(n)!==i&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((r,a)=>{const o=this.wt(a);if(o){if(r.current&&Nl(o.target)){const l=new Le(o.target.path);this.st.get(l)!==null||this.yt(a,l)||this.ct(a,l,Xt.newNoDocument(l,e))}r.j&&(n.set(a,r.G()),r.H())}});let i=yt();this.it.forEach((r,a)=>{let o=!0;a.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(o=!1,!1)}),o&&(i=i.add(r))});const s=new ho(e,n,this.rt,this.st,i);return this.st=Ai(),this.it=mh(),this.rt=new Gt(ct),s}at(e,n){if(!this.lt(e))return;const i=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,i),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,i){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),i&&(this.st=this.st.insert(n,i))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new hh,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Gt(ct),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new hh),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function mh(){return new Yt(Le.comparator)}function ph(){return new Yt(Le.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Nb{constructor(e,n){this.databaseId=e,this.C=n}}function po(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gh(t,e){return t.C?e.toBase64():e.toUint8Array()}function Pb(t,e){return po(t,e.toTimestamp())}function Mn(t){return pt(!!t),at.fromTimestamp(function(e){const n=Jn(e);return new cn(n.seconds,n.nanos)}(t))}function Bl(t,e){return function(n){return new bt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _h(t){const e=bt.fromString(t);return pt(Ah(e)),e}function Hl(t,e){return Bl(t.databaseId,e.path)}function jl(t,e){const n=_h(e);if(n.get(1)!==t.databaseId.projectId)throw new Ie(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ie(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Le(yh(n))}function ql(t,e){return Bl(t.databaseId,e)}function Fb(t){const e=_h(t);return e.length===4?bt.emptyPath():yh(e)}function zl(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yh(t){return pt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vh(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function Ub(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.C?(pt(c===void 0||typeof c=="string"),Kt.fromBase64String(c||"")):(pt(c===void 0||c instanceof Uint8Array),Kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(l){const c=l.code===void 0?K.UNKNOWN:lh(l.code);return new Ie(c,l.message||"")}(a);n=new fh(i,s,r,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=jl(t,i.document.name),r=Mn(i.document.updateTime),a=new _n({mapValue:{fields:i.document.fields}}),o=Xt.newFoundDocument(s,r,a),l=i.targetIds||[],c=i.removedTargetIds||[];n=new mo(l,c,o.key,o)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=jl(t,i.document),r=i.readTime?Mn(i.readTime):at.min(),a=Xt.newNoDocument(s,r),o=i.removedTargetIds||[];n=new mo([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=jl(t,i.document),r=i.removedTargetIds||[];n=new mo([],r,s,null)}else{if(!("filter"in e))return Ne();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Ab(s),a=i.targetId;n=new dh(a,r)}}return n}function Vb(t,e){let n;if(e instanceof co)n={update:vh(t,e.key,e.value)};else if(e instanceof ah)n={delete:Hl(t,e.key)};else if(e instanceof Zi)n={update:vh(t,e.key,e.data),updateMask:Yb(e.fieldMask)};else{if(!(e instanceof bb))return Ne();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const a=r.transform;if(a instanceof oo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ao)return{fieldPath:r.field.canonicalString(),increment:a.N};throw Ne()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Pb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ne()}(t,e.precondition)),n}function Bb(t,e){return t&&t.length>0?(pt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Mn(i.updateTime):Mn(s);return r.isEqual(at.min())&&(r=Mn(s)),new vb(r,i.transformResults||[])}(n,e))):[]}function Hb(t,e){return{documents:[ql(t,e.path)]}}function jb(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=ql(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ql(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(o){if(o.length===0)return;const l=o.map(c=>function(u){if(u.op==="=="){if(Hf(u.value))return{unaryFilter:{field:xi(u.field),op:"IS_NAN"}};if(Bf(u.value))return{unaryFilter:{field:xi(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Hf(u.value))return{unaryFilter:{field:xi(u.field),op:"IS_NOT_NAN"}};if(Bf(u.value))return{unaryFilter:{field:xi(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(u.field),op:Wb(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(o){if(o.length!==0)return o.map(l=>function(c){return{field:xi(c.field),direction:Gb(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=function(o,l){return o.C||Qi(l)?l:{value:l}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=Eh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Eh(e.endAt)),n}function qb(t){let e=Fb(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){pt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=Ih(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(u=>function(d){return new js($i(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let o=null;n.limit&&(o=function(u){let d;return d=typeof u=="object"?u.value:u,Qi(d)?null:d}(n.limit));let l=null;n.startAt&&(l=bh(n.startAt));let c=null;return n.endAt&&(c=bh(n.endAt)),ub(e,s,a,r,o,"F",l,c)}function zb(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ih(t){return t?t.unaryFilter!==void 0?[Xb(t)]:t.fieldFilter!==void 0?[Kb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ih(e)).reduce((e,n)=>e.concat(n)):Ne():[]}function Eh(t){return{before:t.before,values:t.position}}function bh(t){const e=!!t.before,n=t.values||[];return new Pl(n,e)}function Gb(t){return Db[t]}function Wb(t){return Mb[t]}function xi(t){return{fieldPath:t.canonicalString()}}function $i(t){return rn.fromServerFormat(t.fieldPath)}function Kb(t){return on.create($i(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$i(t.unaryFilter.field);return on.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$i(t.unaryFilter.field);return on.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$i(t.unaryFilter.field);return on.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$i(t.unaryFilter.field);return on.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}function Yb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ah(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,i)=>{n(e)})}static reject(e){return new ne((n,i)=>{i(e)})}static waitFor(e){return new ne((n,i)=>{let s=0,r=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++r,a&&r===s&&n()},l=>i(l))}),a=!0,r===s&&n()})}static or(e){let n=ne.resolve(!1);for(const i of e)n=n.next(s=>s?ne.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ib(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ul(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ul(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(at.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),yt())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,i)=>nh(n,i))&&Ki(this.baseMutations,e.baseMutations,(n,i)=>nh(n,i))}}class Gl{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){pt(e.mutations.length===i.length);let s=Ob();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new Gl(e,n,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,i,s,r=at.min(),a=at.min(),o=Kt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.Gt=e}}function $b(t){const e=qb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hb(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.zt=new t1}addToCollectionParentIndex(e,n){return this.zt.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.zt.getEntries(n))}}class t1{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Gt(bt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Gt(bt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new es(0)}static re(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==Qb)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){Xi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Pf(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:at.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Xt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ne.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,i){this.Je=e,this.An=n,this.Jt=i}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Pn(e,n,i))}Pn(e,n,i){return this.Je.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(i=>this.Vn(e,i).next(()=>i))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return Le.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):fb(n)?this.Dn(e,n,i):this.Cn(e,n,i)}Sn(e,n){return this.Rn(e,new Le(n)).next(i=>{let s=Vl();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Dn(e,n,i){const s=n.collectionGroup;let r=Vl();return this.Jt.getCollectionParents(e,s).next(a=>ne.forEach(a,o=>{const l=function(c,u){return new eo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,o.child(s));return this.Cn(e,l,i).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}Cn(e,n,i){let s,r;return this.Je.getDocumentsMatchingQuery(e,n,i).next(a=>(s=a,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(a=>(r=a,this.Nn(e,r,s).next(o=>{s=o;for(const l of r)for(const c of l.mutations){const u=c.key;let d=s.get(u);d==null&&(d=Xt.newInvalidDocument(u),s=s.insert(u,d)),Ul(c,d,l.localWriteTime),d.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((a,o)=>{so(n,o)||(s=s.remove(a))}),s))}Nn(e,n,i){let s=yt();for(const a of n)for(const o of a.mutations)o instanceof Zi&&i.get(o.key)===null&&(s=s.add(o.key));let r=i;return this.Je.getEntries(e,s).next(a=>(a.forEach((o,l)=>{l.isFoundDocument()&&(r=r.insert(o,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.kn=i,this.xn=s}static $n(e,n){let i=yt(),s=yt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Wl(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(at.min())?this.Mn(e,n):this.On.vn(e,s).next(r=>{const a=this.Ln(n,r);return(to(n)||no(n))&&this.Bn(n.limitType,a,s,i)?this.Mn(e,n):(kf()<=ot.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fl(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(o=>(a.forEach(l=>{o=o.insert(l.key,l)}),o)))})}Ln(e,n){let i=new Gt(Yf(e));return n.forEach((s,r)=>{so(e,r)&&(i=i.add(r))}),i}Bn(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mn(e,n){return kf()<=ot.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Fl(n)),this.On.getDocumentsMatchingQuery(e,n,at.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,i,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new Yt(ct),this.Kn=new Ys(r=>Dl(r),Ml),this.jn=at.min(),this.An=e.getMutationQueue(i),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Th(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function r1(t,e,n,i){return new s1(t,e,n,i)}async function Sh(t,e){const n=Pe(t);let i=n.An,s=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.An.getAllMutationBatches(a).next(l=>(o=l,i=n.persistence.getMutationQueue(e),s=new Th(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(a))).next(l=>{const c=[],u=[];let d=yt();for(const f of o){c.push(f.batchId);for(const h of f.mutations)d=d.add(h.key)}for(const f of l){u.push(f.batchId);for(const h of f.mutations)d=d.add(h.key)}return s.vn(a,d).next(f=>({Gn:f,removedBatchIds:c,addedBatchIds:u}))})});return n.An=i,n.Wn=s,n.Un.Fn(n.Wn),r}function o1(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(a,o,l,c){const u=l.batch,d=u.keys();let f=ne.resolve();return d.forEach(h=>{f=f.next(()=>c.getEntry(o,h)).next(m=>{const g=l.docVersions.get(h);pt(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&c.addEntry(m,l.commitVersion))})}),f.next(()=>a.An.removeMutationBatch(o,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.An.performConsistencyCheck(i)).next(()=>n.Wn.vn(i,s))})}function Ch(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function a1(t,e){const n=Pe(t),i=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];e.targetChanges.forEach((c,u)=>{const d=s.get(u);if(!d)return;o.push(n.He.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.He.addMatchingKeys(r,c.addedDocuments,u)));const f=c.resumeToken;if(f.approximateByteSize()>0){const h=d.withResumeToken(f,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,h),function(m,g,p){return pt(g.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,h,c)&&o.push(n.He.updateTargetData(r,h))}});let l=Ai();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),o.push(l1(r,a,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(at.min())){const c=n.He.getLastRemoteSnapshotVersion(r).next(u=>n.He.setTargetsMetadata(r,r.currentSequenceNumber,i));o.push(c)}return ne.waitFor(o).next(()=>a.apply(r)).next(()=>n.Wn.Vn(r,l)).next(()=>l)}).then(r=>(n.qn=s,r))}function l1(t,e,n,i,s){let r=yt();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let o=Ai();return n.forEach((l,c)=>{const u=a.get(l),d=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(at.min())?(e.removeEntry(l,d),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,d),o=o.insert(l,c)):_e("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),o})}function u1(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(i,e)))}function c1(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.He.getTargetData(i,e).next(r=>r?(s=r,ne.resolve(s)):n.He.allocateTargetId(i).next(a=>(s=new Ti(e,a,0,i.currentSequenceNumber),n.He.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.qn.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(i.targetId,i),n.Kn.set(e,i.targetId)),i})}async function Kl(t,e,n){const i=Pe(t),s=i.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ks(a))throw a;_e("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.qn=i.qn.remove(e),i.Kn.delete(s.target)}function Lh(t,e,n){const i=Pe(t);let s=at.min(),r=yt();return i.persistence.runTransaction("Execute query","readonly",a=>function(o,l,c){const u=Pe(o),d=u.Kn.get(c);return d!==void 0?ne.resolve(u.qn.get(d)):u.He.getTargetData(l,c)}(i,a,Ei(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(a,o.targetId).next(l=>{r=l})}).next(()=>i.Un.getDocumentsMatchingQuery(a,e,n?s:at.min(),n?r:yt())).next(o=>({documents:o,zn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return ne.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var i;return this.Xn.set(n.id,{id:(i=n).id,version:i.version,createTime:Mn(i.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(i){return{name:i.name,query:$b(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),ne.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.ts=new Gt(Ut.es),this.ns=new Gt(Ut.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const i=new Ut(e,n);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.os(new Ut(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new Le(new bt([])),i=new Ut(n,e),s=new Ut(n,e+1),r=[];return this.ns.forEachInRange([i,s],a=>{this.os(a),r.push(a.key)}),r}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new Le(new bt([])),i=new Ut(n,e),s=new Ut(n,e+1);let r=yt();return this.ns.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const n=new Ut(e,0),i=this.ts.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ut{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return Le.comparator(e.key,n.key)||ct(e.fs,n.fs)}static ss(e,n){return ct(e.fs,n.fs)||Le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Gt(Ut.es)}checkEmpty(e){return ne.resolve(this.An.length===0)}addMutationBatch(e,n,i,s){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const a=new Zb(r,n,i,s);this.An.push(a);for(const o of s)this.ws=this.ws.add(new Ut(o.key,r)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return ne.resolve(a)}lookupMutationBatch(e,n){return ne.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.gs(i),r=s<0?0:s;return ne.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return ne.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ut(n,0),s=new Ut(n,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([i,s],a=>{const o=this._s(a.fs);r.push(o)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Gt(ct);return n.forEach(s=>{const r=new Ut(s,0),a=new Ut(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,a],o=>{i=i.add(o.fs)})}),ne.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Le.isDocumentKey(r)||(r=r.child(""));const a=new Ut(new Le(r),0);let o=new Gt(ct);return this.ws.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(o=o.add(l.fs)),!0)},a),ne.resolve(this.ys(o))}ys(e){const n=[];return e.forEach(i=>{const s=this._s(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pt(this.ps(n.batchId,"removed")===0),this.An.shift();let i=this.ws;return ne.forEach(n.mutations,s=>{const r=new Ut(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=i})}ee(e){}containsKey(e,n){const i=new Ut(n,0),s=this.ws.firstAfterOrEqual(i);return ne.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,ne.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Yt(Le.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),a=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:o,readTime:i}),this.size+=o-a,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ne.resolve(i?i.document.clone():Xt.newInvalidDocument(n))}getEntries(e,n){let i=Ai();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Xt.newInvalidDocument(s))}),ne.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=Ai();const r=new Le(n.path.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:o,value:{document:l,readTime:c}}=a.getNext();if(!n.path.isPrefixOf(o.path))break;c.compareTo(i)<=0||so(n,l)&&(s=s.insert(l.key,l.clone()))}return ne.resolve(s)}Es(e,n){return ne.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new m1(this)}getSize(e){return ne.resolve(this.size)}}class m1 extends n1{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(i))):this.De.removeEntry(i)}),ne.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.persistence=e,this.Is=new Ys(n=>Dl(n),Ml),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.As=0,this.Rs=new Xl,this.targetCount=0,this.Ps=es.ie()}forEachTarget(e,n){return this.Is.forEach((i,s)=>n(s)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.As&&(this.As=n),ne.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new es(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.ce(n),ne.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Is.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Is.delete(a),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),ne.waitFor(r).next(()=>s)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const i=this.Is.get(n)||null;return ne.resolve(i)}addMatchingKeys(e,n,i){return this.Rs.rs(n,i),ne.resolve()}removeMatchingKeys(e,n,i){this.Rs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Rs.ls(n);return ne.resolve(i)}containsKey(e,n){return ne.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.bs={},this.Be=new Cl(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new p1(this),this.Jt=new e1,this.Je=function(i,s){return new h1(i,s)}(this.Jt,i=>this.referenceDelegate.vs(i)),this.k=new xb(n),this.Ye=new d1(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new f1(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,i){_e("MemoryPersistence","Starting transaction:",e);const s=new _1(this.Be.next());return this.referenceDelegate.Vs(),i(s).next(r=>this.referenceDelegate.Ss(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ds(e,n){return ne.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class _1 extends Jb{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Cs=new Xl,this.Ns=null}static ks(e){return new Yl(e)}get xs(){if(this.Ns)return this.Ns;throw Ne()}addReference(e,n,i){return this.Cs.addReference(i,n),this.xs.delete(i.toString()),ne.resolve()}removeReference(e,n,i){return this.Cs.removeReference(i,n),this.xs.add(i.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.xs,i=>{const s=Le.fromPath(i);return this.$s(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return ne.or([()=>ne.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class Oh{constructor(){this.activeTargetIds=ch()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y1{constructor(){this.pi=new Oh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,i){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Oh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){_e("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){_e("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,i,s,r){const a=this.Ui(e,n);_e("RestConnection","Sending: ",a,i);const o={};return this.qi(o,s,r),this.Ki(e,a,o,i).then(l=>(_e("RestConnection","Received: ",l),l),l=>{throw Df("RestConnection",`${e} failed with error: `,l,"url: ",a,"request:",i),l})}ji(e,n,i,s,r){return this.Bi(e,n,i,s,r)}qi(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}Ui(e,n){const i=I1[e];return`${this.Mi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,i,s){return new Promise((r,a)=>{const o=new HE;o.listenOnce(UE.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Tl.NO_ERROR:const c=o.getResponseJson();_e("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Tl.TIMEOUT:_e("Connection",'RPC "'+e+'" timed out'),a(new Ie(K.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const u=o.getStatus();if(_e("Connection",'RPC "'+e+'" failed with status:',u,"response text:",o.getResponseText()),u>0){const d=o.getResponseJson().error;if(d&&d.status&&d.message){const f=function(h){const m=h.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(m)>=0?m:K.UNKNOWN}(d.status);a(new Ie(f,d.message))}else a(new Ie(K.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Ie(K.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{_e("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);o.send(n,"POST",l,i,15)})}Qi(e,n,i){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=PE(),a=FE(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new BE({})),this.qi(o.initMessageHeaders,n,i),od()||ld()||Bv()||ud()||Hv()||ad()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");_e("Connection","Creating WebChannel: "+l,o);const c=r.createWebChannel(l,o);let u=!1,d=!1;const f=new E1({Vi:m=>{d?_e("Connection","Not sending because WebChannel is closed:",m):(u||(_e("Connection","Opening WebChannel transport."),c.open(),u=!0),_e("Connection","WebChannel sending:",m),c.send(m))},Si:()=>c.close()}),h=(m,g,p)=>{m.listen(g,E=>{try{p(E)}catch(b){setTimeout(()=>{throw b},0)}})};return h(c,Jr.EventType.OPEN,()=>{d||_e("Connection","WebChannel transport opened.")}),h(c,Jr.EventType.CLOSE,()=>{d||(d=!0,_e("Connection","WebChannel transport closed"),f.Fi())}),h(c,Jr.EventType.ERROR,m=>{d||(d=!0,Df("Connection","WebChannel transport errored:",m),f.Fi(new Ie(K.UNAVAILABLE,"The operation could not be completed")))}),h(c,Jr.EventType.MESSAGE,m=>{var g;if(!d){const p=m.data[0];pt(!!p);const E=p,b=E.error||((g=E[0])===null||g===void 0?void 0:g.error);if(b){_e("Connection","WebChannel received error:",b);const S=b.status;let O=function(k){const y=wt[k];if(y!==void 0)return lh(y)}(S),R=b.message;O===void 0&&(O=K.INTERNAL,R="Unknown error status: "+S+" with message "+b.message),d=!0,f.Fi(new Ie(O,R)),c.close()}else _e("Connection","WebChannel received:",p),f.Oi(p)}}),h(a,VE.STAT_EVENT,m=>{m.stat===wf.PROXY?_e("Connection","Detected buffering proxy"):m.stat===wf.NOPROXY&&_e("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Ql(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){return new Nb(t,!0)}class Rh{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Wi=i,this.Gi=s,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-i);s>0&&_e("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,i,s,r,a,o,l){this.Oe=e,this.nr=i,this.sr=s,this.ir=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Rh(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.rr===n&&this.Ir(i,s)},i=>{e(()=>{const s=new Ie(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ar(s)})})}Ir(e,n){const i=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{i(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{i(()=>this.Ar(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return _e("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(_e("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A1 extends kh{constructor(e,n,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.k=r}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=Ub(this.k,e),i=function(s){if(!("targetChange"in s))return at.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?at.min():r.readTime?Mn(r.readTime):at.min()}(e);return this.listener.Pr(n,i)}br(e){const n={};n.database=zl(this.k),n.addTarget=function(s,r){let a;const o=r.target;return a=Nl(o)?{documents:Hb(s,o)}:{query:jb(s,o)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=gh(s,r.resumeToken):r.snapshotVersion.compareTo(at.min())>0&&(a.readTime=po(s,r.snapshotVersion.toTimestamp())),a}(this.k,e);const i=zb(this.k,e);i&&(n.labels=i),this.gr(n)}vr(e){const n={};n.database=zl(this.k),n.removeTarget=e,this.gr(n)}}class T1 extends kh{constructor(e,n,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(pt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=Bb(e.writeResults,e.commitTime),i=Mn(e.commitTime);return this.listener.Cr(i,n)}return pt(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=zl(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Vb(this.k,i))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=i,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new Ie(K.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.Bi(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ie(K.UNKNOWN,s.toString())})}ji(e,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.ji(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ie(K.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class C1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Yn(n),this.Lr=!1):_e("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(a=>{i.enqueueAndForget(async()=>{Si(this)&&(_e("RemoteStore","Restarting streams for network reachability change."),await async function(o){const l=Pe(o);l.Gr.add(4),await Qs(l),l.Jr.set("Unknown"),l.Gr.delete(4),await _o(l)}(this))})}),this.Jr=new C1(i,s)}}async function _o(t){if(Si(t))for(const e of t.zr)await e(!0)}async function Qs(t){for(const e of t.zr)await e(!1)}function Dh(t,e){const n=Pe(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),xl(n)?Zl(n):ts(n).lr()&&Jl(n,e))}function Mh(t,e){const n=Pe(t),i=ts(n);n.Wr.delete(e),i.lr()&&Nh(n,e),n.Wr.size===0&&(i.lr()?i._r():Si(n)&&n.Jr.set("Unknown"))}function Jl(t,e){t.Yr.X(e.targetId),ts(t).br(e)}function Nh(t,e){t.Yr.X(e),ts(t).vr(e)}function Zl(t){t.Yr=new kb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ts(t).start(),t.Jr.Br()}function xl(t){return Si(t)&&!ts(t).hr()&&t.Wr.size>0}function Si(t){return Pe(t).Gr.size===0}function Ph(t){t.Yr=void 0}async function O1(t){t.Wr.forEach((e,n)=>{Jl(t,e)})}async function w1(t,e){Ph(t),xl(t)?(t.Jr.Kr(e),Zl(t)):t.Jr.set("Unknown")}async function R1(t,e,n){if(t.Jr.set("Online"),e instanceof fh&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const a of s.targetIds)i.Wr.has(a)&&(await i.remoteSyncer.rejectListen(a,r),i.Wr.delete(a),i.Yr.removeTarget(a))}(t,e)}catch(i){_e("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await yo(t,i)}else if(e instanceof mo?t.Yr.ot(e):e instanceof dh?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(at.min()))try{const i=await Ch(t.localStore);n.compareTo(i)>=0&&await function(s,r){const a=s.Yr.gt(r);return a.targetChanges.forEach((o,l)=>{if(o.resumeToken.approximateByteSize()>0){const c=s.Wr.get(l);c&&s.Wr.set(l,c.withResumeToken(o.resumeToken,r))}}),a.targetMismatches.forEach(o=>{const l=s.Wr.get(o);if(!l)return;s.Wr.set(o,l.withResumeToken(Kt.EMPTY_BYTE_STRING,l.snapshotVersion)),Nh(s,o);const c=new Ti(l.target,o,1,l.sequenceNumber);Jl(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){_e("RemoteStore","Failed to raise snapshot:",i),await yo(t,i)}}async function yo(t,e,n){if(!Ks(e))throw e;t.Gr.add(1),await Qs(t),t.Jr.set("Offline"),n||(n=()=>Ch(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await _o(t)})}function Fh(t,e){return e().catch(n=>yo(t,n,e))}async function vo(t){const e=Pe(t),n=Zn(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;k1(e);)try{const s=await u1(e.localStore,i);if(s===null){e.Qr.length===0&&n._r();break}i=s.batchId,D1(e,s)}catch(s){await yo(e,s)}Uh(e)&&Vh(e)}function k1(t){return Si(t)&&t.Qr.length<10}function D1(t,e){t.Qr.push(e);const n=Zn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Uh(t){return Si(t)&&!Zn(t).hr()&&t.Qr.length>0}function Vh(t){Zn(t).start()}async function M1(t){Zn(t).kr()}async function N1(t){const e=Zn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function P1(t,e,n){const i=t.Qr.shift(),s=Gl.from(i,e,n);await Fh(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vo(t)}async function F1(t,e){e&&Zn(t).Sr&&await async function(n,i){if(s=i.code,Tb(s)&&s!==K.ABORTED){const r=n.Qr.shift();Zn(n).wr(),await Fh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await vo(n)}var s}(t,e),Uh(t)&&Vh(t)}async function U1(t,e){const n=Pe(t);e?(n.Gr.delete(2),await _o(n)):e||(n.Gr.add(2),await Qs(n),n.Jr.set("Unknown"))}function ts(t){return t.Xr||(t.Xr=function(e,n,i){const s=Pe(e);return s.Fr(),new A1(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(t.datastore,t.asyncQueue,{Di:O1.bind(null,t),Ni:w1.bind(null,t),Pr:R1.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),xl(t)?Zl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ph(t))})),t.Xr}function Zn(t){return t.Zr||(t.Zr=function(e,n,i){const s=Pe(e);return s.Fr(),new T1(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(t.datastore,t.asyncQueue,{Di:M1.bind(null,t),Ni:F1.bind(null,t),Nr:N1.bind(null,t),Cr:P1.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await vo(t)):(await t.Zr.stop(),t.Qr.length>0&&(_e("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,i,s,r){const a=Date.now()+i,o=new $l(e,n,a,s,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ks(t))return new Ie(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(n,i)=>e(n,i)||Le.comparator(n.key,i.key):(n,i)=>Le.comparator(n.key,i.key),this.keyedMap=Vl(),this.sortedSet=new Yt(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ns;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.eo=new Yt(Le.comparator)}track(e){const n=e.doc.key,i=this.eo.get(n);i?e.type!==0&&i.type===3?this.eo=this.eo.insert(n,e):e.type===3&&i.type!==1?this.eo=this.eo.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.eo=this.eo.remove(n):e.type===1&&i.type===2?this.eo=this.eo.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):Ne():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,i)=>{e.push(i)}),e}}class is{constructor(e,n,i,s,r,a,o,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(a=>{r.push({type:0,doc:a})}),new is(e,n,ns.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.so=void 0,this.listeners=[]}}class B1{constructor(){this.queries=new Ys(e=>Xf(e),io),this.onlineState="Unknown",this.io=new Set}}async function H1(t,e){const n=Pe(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new V1),s)try{r.so=await n.onListen(i)}catch(a){const o=eu(a,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(o)}n.queries.set(i,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&tu(n)}async function j1(t,e){const n=Pe(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function q1(t,e){const n=Pe(t);let i=!1;for(const s of e){const r=s.query,a=n.queries.get(r);if(a){for(const o of a.listeners)o.oo(s)&&(i=!0);a.so=s}}i&&tu(n)}function z1(t,e,n){const i=Pe(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function tu(t){t.io.forEach(e=>{e.next()})}class G1{constructor(e,n,i){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new is(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.wo||!i)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.key=e}}class jh{constructor(e){this.key=e}}class W1{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=yt(),this.mutatedKeys=yt(),this.Ao=Yf(e),this.Ro=new ns(this.Ao)}get Po(){return this.To}bo(e,n){const i=n?n.vo:new Bh,s=n?n.Ro:this.Ro;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,o=!1;const l=to(this.query)&&s.size===this.query.limit?s.last():null,c=no(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const f=s.get(u),h=so(this.query,d)?d:null,m=!!f&&this.mutatedKeys.has(f.key),g=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let p=!1;f&&h?f.data.isEqual(h.data)?m!==g&&(i.track({type:3,doc:h}),p=!0):this.Vo(f,h)||(i.track({type:2,doc:h}),p=!0,(l&&this.Ao(h,l)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!f&&h?(i.track({type:0,doc:h}),p=!0):f&&!h&&(i.track({type:1,doc:f}),p=!0,(l||c)&&(o=!0)),p&&(h?(a=a.add(h),r=g?r.add(u):r.delete(u)):(a=a.delete(u),r=r.delete(u)))}),to(this.query)||no(this.query))for(;a.size>this.query.limit;){const u=to(this.query)?a.last():a.first();a=a.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Ro:a,vo:i,Bn:o,mutatedKeys:r}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const r=e.vo.no();r.sort((c,u)=>function(d,f){const h=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne()}};return h(d)-h(f)}(c.type,u.type)||this.Ao(c.doc,u.doc)),this.So(i);const a=n?this.Do():[],o=this.Io.size===0&&this.current?1:0,l=o!==this.Eo;return this.Eo=o,r.length!==0||l?{snapshot:new is(this.query,e.Ro,s,r,e.mutatedKeys,o===0,l,!1),Co:a}:{Co:a}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Bh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=yt(),this.Ro.forEach(i=>{this.No(i.key)&&(this.Io=this.Io.add(i.key))});const n=[];return e.forEach(i=>{this.Io.has(i)||n.push(new jh(i))}),this.Io.forEach(i=>{e.has(i)||n.push(new Hh(i))}),n}ko(e){this.To=e.zn,this.Io=yt();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return is.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class K1{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class X1{constructor(e){this.key=e,this.$o=!1}}class Y1{constructor(e,n,i,s,r,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Fo={},this.Oo=new Ys(o=>Xf(o),io),this.Mo=new Map,this.Lo=new Set,this.Bo=new Yt(Le.comparator),this.Uo=new Map,this.qo=new Xl,this.Ko={},this.jo=new Map,this.Qo=es.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Q1(t,e){const n=r0(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const a=await c1(n.localStore,Ei(e)),o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await J1(n,e,i,o==="current"),n.isPrimaryClient&&Dh(n.remoteStore,a)}return s}async function J1(t,e,n,i){t.Go=(u,d,f)=>async function(h,m,g,p){let E=m.view.bo(g);E.Bn&&(E=await Lh(h.localStore,m.query,!1).then(({documents:O})=>m.view.bo(O,E)));const b=p&&p.targetChanges.get(m.targetId),S=m.view.applyChanges(E,h.isPrimaryClient,b);return Xh(h,m.targetId,S.Co),S.snapshot}(t,u,d,f);const s=await Lh(t.localStore,e,!0),r=new W1(e,s.zn),a=r.bo(s.documents),o=Ws.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(a,t.isPrimaryClient,o);Xh(t,n,l.Co);const c=new K1(e,n,r);return t.Oo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),l.snapshot}async function Z1(t,e){const n=Pe(t),i=n.Oo.get(e),s=n.Mo.get(i.targetId);if(s.length>1)return n.Mo.set(i.targetId,s.filter(r=>!io(r,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Kl(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Mh(n.remoteStore,i.targetId),nu(n,i.targetId)}).catch(Xs)):(nu(n,i.targetId),await Kl(n.localStore,i.targetId,!0))}async function x1(t,e,n){const i=o0(t);try{const s=await function(r,a){const o=Pe(r),l=cn.now(),c=a.reduce((d,f)=>d.add(f.key),yt());let u;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>o.Wn.vn(d,c).next(f=>{u=f;const h=[];for(const m of a){const g=Eb(m,u.get(m.key));g!=null&&h.push(new Zi(m.key,g,jf(g.value.mapValue),bi.exists(!0)))}return o.An.addMutationBatch(d,l,h,a)})).then(d=>(d.applyToLocalDocumentSet(u),{batchId:d.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,a,o){let l=r.Ko[r.currentUser.toKey()];l||(l=new Yt(ct)),l=l.insert(a,o),r.Ko[r.currentUser.toKey()]=l}(i,s.batchId,n),await Js(i,s.changes),await vo(i.remoteStore)}catch(s){const r=eu(s,"Failed to persist write");n.reject(r)}}async function qh(t,e){const n=Pe(t);try{const i=await a1(n.localStore,e);e.targetChanges.forEach((s,r)=>{const a=n.Uo.get(r);a&&(pt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.$o=!0:s.modifiedDocuments.size>0?pt(a.$o):s.removedDocuments.size>0&&(pt(a.$o),a.$o=!1))}),await Js(n,i,e)}catch(i){await Xs(i)}}function zh(t,e,n){const i=Pe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,a)=>{const o=a.view.ro(e);o.snapshot&&s.push(o.snapshot)}),function(r,a){const o=Pe(r);o.onlineState=a;let l=!1;o.queries.forEach((c,u)=>{for(const d of u.listeners)d.ro(a)&&(l=!0)}),l&&tu(o)}(i.eventManager,e),s.length&&i.Fo.Pr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $1(t,e,n){const i=Pe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Uo.get(e),r=s&&s.key;if(r){let a=new Yt(Le.comparator);a=a.insert(r,Xt.newNoDocument(r,at.min()));const o=yt().add(r),l=new ho(at.min(),new Map,new Gt(ct),a,o);await qh(i,l),i.Bo=i.Bo.remove(r),i.Uo.delete(e),iu(i)}else await Kl(i.localStore,e,!1).then(()=>nu(i,e,n)).catch(Xs)}async function e0(t,e){const n=Pe(t),i=e.batch.batchId;try{const s=await o1(n.localStore,e);Wh(n,i,null),Gh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Js(n,s)}catch(s){await Xs(s)}}async function t0(t,e,n){const i=Pe(t);try{const s=await function(r,a){const o=Pe(r);return o.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return o.An.lookupMutationBatch(l,a).next(u=>(pt(u!==null),c=u.keys(),o.An.removeMutationBatch(l,u))).next(()=>o.An.performConsistencyCheck(l)).next(()=>o.Wn.vn(l,c))})}(i.localStore,e);Wh(i,e,n),Gh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Js(i,s)}catch(s){await Xs(s)}}function Gh(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Wh(t,e,n){const i=Pe(t);let s=i.Ko[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Ko[i.currentUser.toKey()]=s}}function nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Mo.get(e))t.Oo.delete(i),n&&t.Fo.zo(i,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(i=>{t.qo.containsKey(i)||Kh(t,i)})}function Kh(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Mh(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),iu(t))}function Xh(t,e,n){for(const i of n)i instanceof Hh?(t.qo.addReference(i.key,e),n0(t,i)):i instanceof jh?(_e("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Kh(t,i.key)):Ne()}function n0(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(_e("SyncEngine","New document in limbo: "+n),t.Lo.add(i),iu(t))}function iu(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Le(bt.fromString(e)),i=t.Qo.next();t.Uo.set(i,new X1(n)),t.Bo=t.Bo.insert(n,i),Dh(t.remoteStore,new Ti(Ei(Kf(n.path)),i,2,Cl.I))}}async function Js(t,e,n){const i=Pe(t),s=[],r=[],a=[];i.Oo.isEmpty()||(i.Oo.forEach((o,l)=>{a.push(i.Go(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Wl.$n(l.targetId,c);r.push(u)}}))}),await Promise.all(a),i.Fo.Pr(s),await async function(o,l){const c=Pe(o);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>ne.forEach(l,d=>ne.forEach(d.kn,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>ne.forEach(d.xn,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Ks(u))throw u;_e("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.qn.get(d),h=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(h);c.qn=c.qn.insert(d,m)}}}(i.localStore,r))}async function i0(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){_e("SyncEngine","User change. New user:",e.toKey());const i=await Sh(n.localStore,e);n.currentUser=e,function(s,r){s.jo.forEach(a=>{a.forEach(o=>{o.reject(new Ie(K.CANCELLED,r))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Js(n,i.Gn)}}function s0(t,e){const n=Pe(t),i=n.Uo.get(e);if(i&&i.$o)return yt().add(i.key);{let s=yt();const r=n.Mo.get(e);if(!r)return s;for(const a of r){const o=n.Oo.get(a);s=s.unionWith(o.view.Po)}return s}}function r0(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$1.bind(null,e),e.Fo.Pr=q1.bind(null,e.eventManager),e.Fo.zo=z1.bind(null,e.eventManager),e}function o0(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t0.bind(null,e),e}class a0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=go(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return r1(this.persistence,new i1,e.initialUser,this.k)}Yo(e){return new g1(Yl.ks,this.k)}Jo(e){return new y1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class l0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=i0.bind(null,this.syncEngine),await U1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new B1}createDatastore(e){const n=go(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new b1(s));var s;return function(r,a,o,l){return new S1(r,a,o,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=o=>zh(this.syncEngine,o,0),a=wh.bt()?new wh:new v1,new L1(n,i,s,r,a);var n,i,s,r,a}createSyncEngine(e,n){return function(i,s,r,a,o,l,c){const u=new Y1(i,s,r,a,o,l);return c&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Pe(e);_e("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Qs(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=sn.UNAUTHENTICATED,this.clientId=Mf.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{_e("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ie(K.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=eu(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function d0(t,e){t.asyncQueue.verifyOperationInProgress(),_e("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Sh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function f0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h0(t);_e("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,a){const o=Pe(r);o.asyncQueue.verifyOperationInProgress(),_e("RemoteStore","RemoteStore received new credentials");const l=Si(o);o.Gr.add(3),await Qs(o),l&&o.Jr.set("Unknown"),await o.remoteSyncer.handleCredentialChange(a),o.Gr.delete(3),await _o(o)}(e.remoteStore,s)),t.onlineComponents=e}async function h0(t){return t.offlineComponents||(_e("FirestoreClient","Using default OfflineComponentProvider"),await d0(t,new a0)),t.offlineComponents}async function Yh(t){return t.onlineComponents||(_e("FirestoreClient","Using default OnlineComponentProvider"),await f0(t,new l0)),t.onlineComponents}function m0(t){return Yh(t).then(e=>e.syncEngine)}async function p0(t){const e=await Yh(t),n=e.eventManager;return n.onListen=Q1.bind(null,e.syncEngine),n.onUnlisten=Z1.bind(null,e.syncEngine),n}function g0(t,e,n={}){const i=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,l){const c=new u0({next:d=>{r.enqueueAndForget(()=>j1(s,u)),d.fromCache&&o.source==="server"?l.reject(new Ie(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new G1(a,c,{includeMetadataChanges:!0,wo:!0});return H1(s,u)}(await p0(t),t.asyncQueue,e,n,i)),i.promise}class _0{constructor(e,n,i,s,r,a,o,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=l}}class Zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e,n){if(!n)throw new Ie(K.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function y0(t,e,n,i){if(e===!0&&i===!0)throw new Ie(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zh(t){if(!Le.isDocumentKey(t))throw new Ie(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xh(t){if(Le.isDocumentKey(t))throw new Ie(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ne()}function xs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ie(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new Ie(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Ie(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ie(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,y0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $h({}),this._settingsFrozen=!1,e instanceof Zs?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Ie(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(s.options.projectId)}(e))}get app(){if(!this._app)throw new Ie(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ie(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $h(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qE;switch(n.type){case"gapi":const i=n.client;return pt(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new WE(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Ie(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qh.get(e);n&&(_e("ComponentProvider","Removing Datastore"),Qh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Io{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class xn extends Io{constructor(e,n,i){super(e,n,Kf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new Le(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function dS(t,e,...n){if(t=gn(t),Jh("collection","path",e),t instanceof ru){const i=bt.fromString(e,...n);return xh(i),new xn(t,null,i)}{if(!(t instanceof dn||t instanceof xn))throw new Ie(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return xh(i),new xn(t.firestore,null,i)}}function fS(t,e,...n){if(t=gn(t),arguments.length===1&&(e=Mf.A()),Jh("doc","path",e),t instanceof ru){const i=bt.fromString(e,...n);return Zh(i),new dn(t,null,new Le(i))}{if(!(t instanceof dn||t instanceof xn))throw new Ie(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Zh(i),new dn(t.firestore,t instanceof xn?t.converter:null,new Le(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Rh(this,"async_queue_retry"),this.Ra=()=>{const n=Ql();n&&_e("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new Qn;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Ks(e))throw e;_e("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(i=>{this.Ta=i,this.Ea=!1;const s=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(i);throw Yn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ea=!1,i))));return this.ma=n,n}enqueueAfterDelay(e,n,i){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const s=$l.createAndSchedule(this,e,n,i,r=>this.Va(r));return this.pa.push(s),s}Pa(){this.Ta&&Ne()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}class Eo extends ru{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new v0,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||tm(this),this._firestoreClient.terminate()}}function hS(t=hd()){return Ma(t,"firestore").getImmediate()}function em(t){return t._firestoreClient||tm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tm(t){var e;const n=t._freezeSettings(),i=function(s,r,a,o){return new _0(s,r,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new c0(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ie(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(Kt.fromBase64String(e))}catch(n){throw new Ie(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ss(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ie(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ie(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ct(this._lat,e._lat)||ct(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=/^__.*__$/;class E0{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}function im(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class lu{constructor(e,n,i,s,r,a){this.settings=e,this.databaseId=n,this.k=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:i,Oa:!1});return s.Ma(e),s}La(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:i,Oa:!1});return s.ka(),s}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return bo(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(im(this.xa)&&I0.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class b0{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=i||go(e)}ja(e,n,i,s=!1){return new lu({xa:e,methodName:n,Ka:i,path:rn.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function A0(t){const e=t._freezeSettings(),n=go(t._databaseId);return new b0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T0(t,e,n,i,s,r={}){const a=t.ja(r.merge||r.mergeFields?2:0,e,n,s);am("Data must be an object, but it was:",a,i);const o=rm(i,a);let l,c;if(r.merge)l=new Ll(a.fieldMask),c=a.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const f=S0(e,d,n);if(!a.contains(f))throw new Ie(K.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);L0(u,f)||u.push(f)}l=new Ll(u),c=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=a.fieldTransforms;return new E0(new _n(o),l,c)}function sm(t,e){if(om(t=gn(t)))return am("Unsupported field value:",e,t),rm(t,e);if(t instanceof nm)return function(n,i){if(!im(i.xa))throw i.Ua(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ua(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const a of n){let o=sm(a,i.Ba(r));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pb(i.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=cn.fromDate(n);return{timestampValue:po(i.k,s)}}if(n instanceof cn){const s=new cn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:po(i.k,s)}}if(n instanceof au)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ss)return{bytesValue:gh(i.k,n._byteString)};if(n instanceof dn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bl(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ua(`Unsupported field value: ${su(n)}`)}(t,e)}function rm(t,e){const n={};return Pf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(i,s)=>{const r=sm(s,e.Fa(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function om(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof cn||t instanceof au||t instanceof ss||t instanceof dn||t instanceof nm)}function am(t,e,n){if(!om(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=su(n);throw i==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+i)}}function S0(t,e,n){if((e=gn(e))instanceof ou)return e._internalPath;if(typeof e=="string")return lm(t,e);throw bo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const C0=new RegExp("[~\\*/\\[\\]]");function lm(t,e,n){if(e.search(C0)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${i}`),a&&(l+=` in document ${s}`),l+=")"),new Ie(K.INVALID_ARGUMENT,o+t+l)}function L0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O0 extends um{data(){return super.data()}}function cm(t,e){return typeof e=="string"?lm(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w0 extends um{constructor(e,n,i,s,r,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(cm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class To extends w0{data(e={}){return super.data(e)}}class R0{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ao(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new To(this._firestore,this._userDataWriter,i.key,i,new Ao(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ie(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new To(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ao(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const o=new To(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ao(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),c=r.indexOf(a.doc.key)),{type:k0(a.type),doc:o,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){if(no(t)&&t.explicitOrderBy.length===0)throw new Ie(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ne()}}convertObject(e,n){const i={};return Xi(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new au(Ot(e.latitude),Ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Uf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new cn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=bt.fromString(e);pt(Ah(i));const s=new Zs(i.get(1),i.get(3)),r=new Le(i.popFirst(5));return s.isEqual(n)||Yn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class P0 extends M0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dn(this.firestore,null,n)}}function mS(t){t=xs(t,Io);const e=xs(t.firestore,Eo),n=em(e),i=new P0(e);return D0(t._query),g0(n,t._query).then(s=>new R0(e,i,t,s))}function pS(t,e,n){t=xs(t,dn);const i=xs(t.firestore,Eo),s=N0(t.converter,e,n);return dm(i,[T0(A0(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bi.none())])}function gS(t){return dm(xs(t.firestore,Eo),[new ah(t._key,bi.none())])}function dm(t,e){return function(n,i){const s=new Qn;return n.asyncQueue.enqueueAndForget(async()=>x1(await m0(n),i,s)),s.promise}(em(t),e)}(function(t,e=!0){(function(n){Wi=n})(ys),_s(new Bi("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new Eo(s,new zE(n.getProvider("auth-internal")),new XE(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Wn(Rf,"3.4.1",t),Wn(Rf,"3.4.1","esm2017")})();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ci={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},So={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},F0={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var uu=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return F0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ci},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return So},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Co=0,fm=function(t){Dt(e,t);function e(n){var i=t.call(this,n)||this;return i.wasDocked=!0,i.isDockedShowing=!0,i.currentAppBarOffsetTop=0,i.isCurrentlyBeingResized=!1,i.resizeThrottleId=Co,i.resizeDebounceId=Co,i.lastScrollPosition=i.adapter.getViewportScrollY(),i.topAppBarHeight=i.adapter.getTopAppBarHeight(),i}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var n=Math.max(this.adapter.getViewportScrollY(),0),i=n-this.lastScrollPosition;this.lastScrollPosition=n,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=i,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var n=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){n.resizeThrottleId=Co,n.throttledResizeHandler()},So.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){n.handleTargetScroll(),n.isCurrentlyBeingResized=!1,n.resizeDebounceId=Co},So.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var n=-this.topAppBarHeight,i=this.currentAppBarOffsetTop<0,s=this.currentAppBarOffsetTop>n,r=i&&s;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==s)return this.isDockedShowing=s,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var n=this.currentAppBarOffsetTop;Math.abs(n)>=this.topAppBarHeight&&(n=-So.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",n+"px")}},e.prototype.throttledResizeHandler=function(){var n=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==n&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-n,this.topAppBarHeight=n),this.handleTargetScroll()},e}(uu);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U0=function(t){Dt(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.wasScrolled=!1,n}return e.prototype.handleTargetScroll=function(){var n=this.adapter.getViewportScrollY();n<=0?this.wasScrolled&&(this.adapter.removeClass(Ci.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Ci.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(fm);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var V0=function(t){Dt(e,t);function e(n){var i=t.call(this,n)||this;return i.collapsed=!1,i.isAlwaysCollapsed=!1,i}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Ci.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Ci.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(n){this.isAlwaysCollapsed=!!n,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var n=this.adapter.getViewportScrollY();n<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(Ci.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Ci.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(uu);const{window:hm}=_a;function B0(t){let e,n,i,s,r,a,o;const l=t[22].default,c=de(l,t,t[21],null);let u=[{class:n=ee(We({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":t[4]==="short","mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":t[4]==="fixed","smui-top-app-bar--static":t[4]==="static","smui-top-app-bar--color-secondary":t[5]==="secondary","mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7]},t[11]))},{style:i=Object.entries(t[12]).map(mm).concat([t[3]]).join(" ")},t[15]],d={};for(let f=0;f<u.length;f+=1)d=D(d,u[f]);return{c(){e=ye("header"),c&&c.c(),Z(e,d)},m(f,h){Y(f,e,h),c&&c.m(e,null),t[25](e),r=!0,a||(o=[Te(hm,"resize",t[23]),Te(hm,"scroll",t[24]),$(s=Ze.call(null,e,t[1])),$(t[13].call(null,e)),Te(e,"SMUITopAppBarIconButton:nav",t[26])],a=!0)},p(f,h){c&&c.p&&(!r||h[0]&2097152)&&he(c,l,f,f[21],r?fe(l,f[21],h,null):me(f[21]),null),Z(e,d=ae(u,[(!r||h[0]&2293&&n!==(n=ee(We({[f[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":f[4]==="short","mdc-top-app-bar--short-collapsed":f[0],"mdc-top-app-bar--fixed":f[4]==="fixed","smui-top-app-bar--static":f[4]==="static","smui-top-app-bar--color-secondary":f[5]==="secondary","mdc-top-app-bar--prominent":f[6],"mdc-top-app-bar--dense":f[7]},f[11]))))&&{class:n},(!r||h[0]&4104&&i!==(i=Object.entries(f[12]).map(mm).concat([f[3]]).join(" ")))&&{style:i},h[0]&32768&&f[15]])),s&&Ue(s.update)&&h[0]&2&&s.update.call(null,f[1])},i(f){r||(w(c,f),r=!0)},o(f){N(c,f),r=!1},d(f){f&&X(e),c&&c.d(f),t[25](null),a=!1,Xe(o)}}}const mm=([t,e])=>`${t}: ${e};`;function H0(t,e,n){const i=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let l=()=>{};function c(x){return x===l}let{use:u=[]}=e,{class:d=""}=e,{style:f=""}=e,{variant:h="standard"}=e,{color:m="primary"}=e,{collapsed:g=l}=e;const p=!c(g)&&!!g;c(g)&&(g=!1);let{prominent:E=!1}=e,{dense:b=!1}=e,{scrollTarget:S=void 0}=e,O,R,k={},y={},T,M=_p({variant:h,prominent:E,dense:b},x=>{n(18,T=x)}),v,I=h;Bt(()=>(n(9,R=j()),R.init(),()=>{R.destroy()}));function j(){const x={static:uu,short:V0,fixed:U0}[h]||fm;return new x({hasClass:A,addClass:V,removeClass:F,setStyle:W,getTopAppBarHeight:()=>O.clientHeight,notifyNavigationIconClicked:()=>$e(O,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>O.querySelectorAll(".mdc-top-app-bar__action-item").length})}function A(x){return x in k?k[x]:be().classList.contains(x)}function V(x){k[x]||n(11,k[x]=!0,k)}function F(x){(!(x in k)||k[x])&&n(11,k[x]=!1,k)}function W(x,H){y[x]!=H&&(H===""||H==null?(delete y[x],n(12,y),n(20,I),n(4,h),n(9,R)):n(12,y[x]=H,y))}function G(){R&&(R.handleTargetScroll(),h==="short"&&n(0,g="isCollapsed"in R&&R.isCollapsed))}function J(){return M}function be(){return O}const re=()=>h!=="short"&&h!=="fixed"&&R&&R.handleWindowResize(),Fe=()=>S==null&&G();function ge(x){ie[x?"unshift":"push"](()=>{O=x,n(10,O)})}const st=()=>R&&R.handleNavigationClick();return t.$$set=x=>{e=D(D({},e),Re(x)),n(15,s=Q(e,i)),"use"in x&&n(1,u=x.use),"class"in x&&n(2,d=x.class),"style"in x&&n(3,f=x.style),"variant"in x&&n(4,h=x.variant),"color"in x&&n(5,m=x.color),"collapsed"in x&&n(0,g=x.collapsed),"prominent"in x&&n(6,E=x.prominent),"dense"in x&&n(7,b=x.dense),"scrollTarget"in x&&n(8,S=x.scrollTarget),"$$scope"in x&&n(21,a=x.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&262352&&T&&T({variant:h,prominent:E,dense:b}),t.$$.dirty[0]&1049104&&I!==h&&R&&(n(20,I=h),R.destroy(),n(11,k={}),n(12,y={}),n(9,R=j()),R.init()),t.$$.dirty[0]&528&&R&&h==="short"&&"setAlwaysCollapsed"in R&&R.setAlwaysCollapsed(p),t.$$.dirty[0]&524544&&v!==S&&(v&&v.removeEventListener("scroll",G),S&&S.addEventListener("scroll",G),n(19,v=S))},[g,u,d,f,h,m,E,b,S,R,O,k,y,o,G,s,J,be,T,v,I,a,r,re,Fe,ge,st]}class _S extends De{constructor(e){super();ke(this,e,H0,B0,Oe,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var yS=vt({class:"mdc-top-app-bar__row",component:mn});function j0(t){let e,n,i,s,r,a;const o=t[9].default,l=de(o,t,t[8],null);let c=[{class:n=ee({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":t[2]==="start","mdc-top-app-bar__section--align-end":t[2]==="end"})},t[3]?{role:"toolbar"}:{},t[6]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("section"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[10](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[5].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&256)&&he(l,o,d,d[8],s?fe(o,d[8],f,null):me(d[8]),null),Z(e,u=ae(c,[(!s||f&6&&n!==(n=ee({[d[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":d[2]==="start","mdc-top-app-bar__section--align-end":d[2]==="end"})))&&{class:n},f&8&&(d[3]?{role:"toolbar"}:{}),f&64&&d[6]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(w(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[10](null),r=!1,Xe(a)}}}function q0(t,e,n){const i=["use","class","align","toolbar","getElement"];let s=Q(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{align:u="start"}=e,{toolbar:d=!1}=e,f;et("SMUI:icon-button:context",d?"top-app-bar:action":"top-app-bar:navigation"),et("SMUI:button:context",d?"top-app-bar:action":"top-app-bar:navigation");function h(){return f}function m(g){ie[g?"unshift":"push"](()=>{f=g,n(4,f)})}return t.$$set=g=>{e=D(D({},e),Re(g)),n(6,s=Q(e,i)),"use"in g&&n(0,l=g.use),"class"in g&&n(1,c=g.class),"align"in g&&n(2,u=g.align),"toolbar"in g&&n(3,d=g.toolbar),"$$scope"in g&&n(8,a=g.$$scope)},[l,c,u,d,f,o,s,h,a,r,m]}class z0 extends De{constructor(e){super();ke(this,e,q0,j0,Oe,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var vS=vt({class:"mdc-top-app-bar__title",component:Gn});const IS=z0;function pm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G0=pm,gm=new ps("auth","Firebase",pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new wa("@firebase/auth");function Lo(t,...e){_m.logLevel<=ot.ERROR&&_m.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw cu(t,...e)}function Tn(t,...e){return cu(t,...e)}function ym(t,e,n){const i=Object.assign(Object.assign({},G0()),{[e]:n});return new ps("auth","Firebase",i).create(e,{appName:t.name})}function W0(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(t,"argument-error"),ym(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return gm.create(t,...e)}function we(t,e,...n){if(!t)throw cu(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function Pn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Map;function Fn(t){Pn(t instanceof Function,"Expected a class definition");let e=vm.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(br(r,e!=null?e:{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function X0(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y0(){return Im()==="http:"||Im()==="https:"}function Im(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y0()||ad()||"connection"in navigator)?navigator.onLine:!0}function J0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||ld()}get(){return Q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=new $s(3e4,6e4);function $0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oo(t,e,n,i,s={}){return bm(t,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=gs(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Em.fetch()(Am(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function bm(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Z0),e);try{const s=new tA(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw hu(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",a);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ym(t,u,c);An(t,u)}}catch(s){if(s instanceof Vi)throw s;An(t,"network-request-failed")}}async function eA(t,e,n,i,s={}){const r=await Oo(t,e,n,i,s);return"mfaPendingCredential"in r&&An(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Am(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?fu(t.config,s):`${t.config.apiScheme}://${s}`}class tA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Tn(this.auth,"timeout")),x0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Tn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e){return Oo(t,"POST","/v1/accounts:delete",e)}async function iA(t,e){return Oo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sA(t,e=!1){const n=gn(t),i=await n.getIdToken(e),s=pu(i);we(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:er(mu(s.auth_time)),issuedAtTime:er(mu(s.iat)),expirationTime:er(mu(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function mu(t){return Number(t)*1e3}function pu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uv(n);return s?JSON.parse(s):(Lo("Failed to decode base64 JWT payload"),null)}catch(s){return Lo("Caught error parsing JWT payload as JSON",s),null}}function rA(t){const e=pu(t);return we(e,"internal-error"),we(typeof e.exp!="undefined","internal-error"),we(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Vi&&oA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function oA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){var e;const n=t.auth,i=await t.getIdToken(),s=await tr(t,iA(n,{idToken:i}));we(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?cA(r.providerUserInfo):[],o=uA(t.providerData,a),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o==null?void 0:o.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Tm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function lA(t){const e=gn(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function cA(t){return t.map(e=>{var{providerId:n}=e,i=Ea(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e){const n=await bm(t,{},async()=>{const i=gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,a=Am(t,s,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken!="undefined","internal-error"),we(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):rA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await dA(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new nr;return i&&(we(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(we(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(we(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){we(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Li{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Ea(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new aA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Tm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sA(this,e)}reload(){return lA(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,nA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,a,o,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(o=n.tenantId)!==null&&o!==void 0?o:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:O,isAnonymous:R,providerData:k,stsTokenManager:y}=n;we(S&&y,e,"internal-error");const T=nr.fromJSON(this.name,y);we(typeof S=="string",e,"internal-error"),$n(d,e.name),$n(f,e.name),we(typeof O=="boolean",e,"internal-error"),we(typeof R=="boolean",e,"internal-error"),$n(h,e.name),$n(m,e.name),$n(g,e.name),$n(p,e.name),$n(E,e.name),$n(b,e.name);const M=new Li({uid:S,auth:e,email:f,emailVerified:O,displayName:d,isAnonymous:R,photoURL:m,phoneNumber:h,tenantId:g,stsTokenManager:T,createdAt:E,lastLoginAt:b});return k&&Array.isArray(k)&&(M.providerData=k.map(v=>Object.assign({},v))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,n,i=!1){const s=new nr;s.updateFromServerResponse(n);const r=new Li({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await wo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sm.type="NONE";const Cm=Sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ro(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ro("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new rs(Fn(Cm),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Fn(Cm);const a=Ro(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const d=Li._fromJSON(e,u);c!==r&&(o=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new rs(r,e,i):(r=l[0],o&&await r._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new rs(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Mm(e))return"Webos";if(gu(e))return"Safari";if((e.includes("chrome/")||wm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Om(t=Pt()){return/firefox\//i.test(t)}function gu(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wm(t=Pt()){return/crios\//i.test(t)}function Rm(t=Pt()){return/iemobile/i.test(t)}function km(t=Pt()){return/android/i.test(t)}function Dm(t=Pt()){return/blackberry/i.test(t)}function Mm(t=Pt()){return/webos/i.test(t)}function ko(t=Pt()){return/iphone|ipad|ipod/i.test(t)}function fA(t=Pt()){var e;return ko(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function hA(){return ud()&&document.documentMode===10}function Nm(t=Pt()){return ko(t)||km(t)||Mm(t)||Dm(t)||/windows phone/i.test(t)||Rm(t)}function mA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e=[]){let n;switch(t){case"Browser":n=Lm(Pt());break;case"Worker":n=`${Lm(Pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===r)&&(a==null?void 0:a.user)&&(i=a.user)}return i?i._redirectEventId?(we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return we(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function _u(t){return gn(t)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wv(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return eA(t,"POST","/v1/accounts:signInWithIdp",$0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="http://localhost";class Oi extends Um{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Ea(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Oi(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,os(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:gA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends yu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ir{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ir{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ti.credential(n,i)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ir{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ir{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ii.credential(n,i)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Li._fromIdTokenResponse(e,i,s),a=Vm(i);return new as({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Vm(i);return new as({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Vm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Vi{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Do(e,n,i,s)}}function Bm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(t,r,e,i):r})}async function _A(t,e,n=!1){const i=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await tr(t,Bm(i,s,e,t),n);we(r.idToken,i,"internal-error");const a=pu(r.idToken);we(a,i,"internal-error");const{sub:o}=a;return we(t.uid===o,i,"user-mismatch"),as._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&An(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e,n=!1){const i="signIn",s=await Bm(t,i,e),r=await as._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function ES(t,e,n,i){return gn(t).onAuthStateChanged(e,n,i)}function bS(t){return gn(t).signOut()}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(){const t=Pt();return gu(t)||ko(t)}const EA=1e3,bA=10;class jm extends Hm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IA()&&mA(),this.fallbackToPolling=Nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);hA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},EA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jm.type="LOCAL";const AA=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qm.type="SESSION";const zm=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new No(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a==null?void 0:a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async c=>c(n.origin,r)),l=await TA(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,l)=>{const c=vu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function CA(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){return typeof Sn().WorkerGlobalScope!="undefined"&&typeof Sn().importScripts=="function"}async function LA(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return Gm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firebaseLocalStorageDb",RA=1,Po="firebaseLocalStorage",Km="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function kA(){const t=indexedDB.deleteDatabase(Wm);return new sr(t).toPromise()}function Iu(){const t=indexedDB.open(Wm,RA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Po,{keyPath:Km})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Po)?e(i):(i.close(),await kA(),e(await Iu()))})})}async function Xm(t,e,n){const i=Fo(t,!0).put({[Km]:e,value:n});return new sr(i).toPromise()}async function DA(t,e){const n=Fo(t,!1).get(e),i=await new sr(n).toPromise();return i===void 0?null:i.value}function Ym(t,e){const n=Fo(t,!0).delete(e);return new sr(n).toPromise()}const MA=800,NA=3;class Qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>NA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new SA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Xm(e,Mo,"1"),await Ym(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Xm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>DA(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ym(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Fo(s,!1).getAll();return new sr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qm.type="LOCAL";const PA=Qm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UA(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Tn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",FA().appendChild(i)})}function VA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e){return e?Fn(e):(we(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Um{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BA(t){return vA(t.auth,new Eu(t),t.bypassAuthState)}function HA(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),yA(n,new Eu(t),t.bypassAuthState)}async function jA(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),_A(n,new Eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BA;case"linkViaPopup":case"linkViaRedirect":return jA;case"reauthViaPopup":case"reauthViaRedirect":return HA;default:An(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new $s(2e3,1e4);async function AS(t,e,n){const i=_u(t);W0(t,e,yu);const s=Jm(i,n);return new wi(i,"signInViaPopup",e,s).executeNotNull()}class wi extends Zm{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="pendingRedirect",bu=new Map;class GA extends Zm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const i=await WA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WA(t,e){const n=XA(e),i=KA(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function KA(t){return Fn(t._redirectPersistence)}function XA(t){return Ro(zA,t.config.apiKey,t.name)}async function YA(t,e,n=!1){const i=_u(t),s=Jm(i,e),a=await new GA(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=10*60*1e3;class JA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!$m(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QA&&this.cachedEventUids.clear(),this.cachedEventUids.has(xm(e))}saveEventToCache(e){this.cachedEventUids.add(xm(e)),this.lastProcessedEventTime=Date.now()}}function xm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $m({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $m(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e={}){return Oo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eT=/^https?/;async function tT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xA(t);for(const n of e)try{if(nT(n))return}catch{}An(t,"unauthorized-domain")}function nT(t){const e=du(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!eT.test(n))return!1;if($A.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new $s(3e4,6e4);function ep(){const t=Sn().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sT(t){return new Promise((e,n)=>{var i,s,r;function a(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(Tn(t,"network-request-failed"))},timeout:iT.get()})}if((s=(i=Sn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=Sn().gapi)===null||r===void 0?void 0:r.load)a();else{const o=VA("iframefcb");return Sn()[o]=()=>{gapi.load?a():n(Tn(t,"network-request-failed"))},UA(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function rT(t){return Uo=Uo||sT(t),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new $s(5e3,15e3),aT="__/auth/iframe",lT="emulator/auth/iframe",uT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dT(t){const e=t.config;we(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,lT):`https://${t.config.authDomain}/${aT}`,i={apiKey:e.apiKey,appName:t.name,v:ys},s=cT.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${gs(i).slice(1)}`}async function fT(t){const e=await rT(t),n=Sn().gapi;return we(n,t,"internal-error"),e.open({where:document.body,url:dT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Tn(t,"network-request-failed"),o=Sn().setTimeout(()=>{r(a)},oT.get());function l(){Sn().clearTimeout(o),s(i)}i.ping(l).then(l,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mT=500,pT=600,gT="_blank",_T="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yT(t,e,n,i=mT,s=pT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},hT),{width:i.toString(),height:s.toString(),top:r,left:a}),c=Pt().toLowerCase();n&&(o=wm(c)?gT:n),Om(c)&&(e=e||_T,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(fA(c)&&o!=="_self")return vT(e||"",o),new tp(null);const d=window.open(e||"",o,u);we(d,t,"popup-blocked");try{d.focus()}catch{}return new tp(d)}function vT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="__/auth/handler",ET="emulator/auth/handler";function np(t,e,n,i,s,r){we(t.config.authDomain,t,"auth-domain-config-required"),we(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ys,eventId:s};if(e instanceof yu){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Gv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))a[l]=c}if(e instanceof ir){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];return`${bT(t)}?${gs(o).slice(1)}`}function bT({config:t}){return t.emulator?fu(t,ET):`https://${t.authDomain}/${IT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="webStorageSupport";class AT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zm,this._completeRedirectFn=YA}async _openPopup(e,n,i,s){var r;Pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=np(e,n,i,du(),s);return yT(e,a,vu())}async _openRedirect(e,n,i,s){return await this._originValidation(e),CA(np(e,n,i,du(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await fT(e),i=new JA(e);return n.register("authEvent",s=>(we(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Au,{type:Au},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Au];a!==void 0&&n(!!a),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nm()||gu()||ko()}}const TT=AT;var ip="@firebase/auth",sp="0.19.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LT(t){_s(new Bi("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(a=>{we(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),we(!(r==null?void 0:r.includes(":")),"argument-error",{appName:a.name});const o={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pm(t)},l=new pA(a,o);return X0(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_s(new Bi("auth-internal",e=>{const n=_u(e.getProvider("auth").getImmediate());return(i=>new ST(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(ip,sp,CT(t)),Wn(ip,sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t=hd()){const e=Ma(t,"auth");return e.isInitialized()?e.getImmediate():K0(t,{popupRedirectResolver:TT,persistence:[PA,AA,zm]})}LT("Browser");var OT="firebase",wT="9.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(OT,wT,"app");export{uS as $,nS as A,ht as B,tS as C,$T as D,iS as E,DT as F,Cn as G,sS as H,rS as I,aS as J,kT as K,ZT as L,MT as M,NT as N,oS as O,mS as P,pS as Q,fS as R,De as S,eS as T,gS as U,dS as V,JT as W,FT as X,KT as Y,xT as Z,PT as _,Je as a,Ue as a0,YT as a1,QT as a2,XT as a3,VT as a4,jT as a5,HT as a6,qT as a7,zT as a8,qg as a9,i_ as aa,s_ as ab,WT as ac,_S as ad,yS as ae,IS as af,vS as ag,AS as ah,cS as ai,ti as aj,TS as ak,hS as al,ES as am,bS as an,GT as ao,BT as ap,rt as b,Y as c,Qe as d,ye as e,Nt as f,X as g,si as h,ke as i,ie as j,In as k,Te as l,Ge as m,Nu as n,Ve as o,vn as p,w as q,N as r,Oe as s,fn as t,Be as u,UT as v,Mi as w,lS as x,kt as y,ft as z};
