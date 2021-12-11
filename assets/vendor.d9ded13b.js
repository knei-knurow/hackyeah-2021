var Ag=Object.defineProperty;var lc=Object.getOwnPropertySymbols;var Tg=Object.prototype.hasOwnProperty,Sg=Object.prototype.propertyIsEnumerable;var uc=(t,e,n)=>e in t?Ag(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ke=(t,e)=>{for(var n in e||(e={}))Tg.call(e,n)&&uc(t,n,e[n]);if(lc)for(var n of lc(e))Sg.call(e,n)&&uc(t,n,e[n]);return t};function Nt(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function Cg(t){return t&&typeof t=="object"&&typeof t.then=="function"}function cc(t){return t()}function dc(){return Object.create(null)}function Xe(t){t.forEach(cc)}function Ue(t){return typeof t=="function"}function Oe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function wg(t){return Object.keys(t).length===0}function Og(t,...e){if(t==null)return Nt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ui(t,e,n){t.$$.on_destroy.push(Og(e,n))}function de(t,e,n,i){if(t){const s=fc(t,e,n,i);return t[0](s)}}function fc(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function fe(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function he(t,e,n,i,s,r){if(s){const a=fc(e,n,i,r);t.p(a,s)}}function me(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function J(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function hc(t){const e={};for(const n in t)e[n]=!0;return e}function zn(t,e,n){return t.set(n),e}function $(t){return t&&Ue(t.destroy)?t.destroy:Nt}function Je(t,e){t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function Tw(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ye(t){return document.createElement(t)}function br(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function pn(t){return document.createTextNode(t)}function Qe(){return pn(" ")}function Rt(){return pn("")}function Te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Lg(t){return function(e){return e.preventDefault(),t.call(this,e)}}function kg(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:rt(t,i,e[i])}function mc(t,e){for(const n in e)rt(t,n,e[n])}function Rg(t){return Array.from(t.childNodes)}function kn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pc(t,e){t.value=e==null?"":e}function Sw(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}let Er;function Gn(t){Er=t}function Se(){if(!Er)throw new Error("Function called outside component initialization");return Er}function Bt(t){Se().$$.on_mount.push(t)}function gn(t){Se().$$.on_destroy.push(t)}function et(t,e){Se().$$.context.set(t,e)}function gt(t){return Se().$$.context.get(t)}function ci(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const As=[],ie=[],Ar=[],Ra=[],gc=Promise.resolve();let Da=!1;function _c(){Da||(Da=!0,gc.then(Fa))}function Dg(){return _c(),gc}function Ma(t){Ar.push(t)}function bn(t){Ra.push(t)}let Na=!1;const Pa=new Set;function Fa(){if(!Na){Na=!0;do{for(let t=0;t<As.length;t+=1){const e=As[t];Gn(e),Mg(e.$$)}for(Gn(null),As.length=0;ie.length;)ie.pop()();for(let t=0;t<Ar.length;t+=1){const e=Ar[t];Pa.has(e)||(Pa.add(e),e())}Ar.length=0}while(As.length);for(;Ra.length;)Ra.pop()();Da=!1,Na=!1,Pa.clear()}}function Mg(t){if(t.fragment!==null){t.update(),Xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ma)}}const Tr=new Set;let di;function ft(){di={r:0,c:[],p:di}}function ht(){di.r||Xe(di.c),di=di.p}function L(t,e){t&&t.i&&(Tr.delete(t),t.i(e))}function N(t,e,n,i){if(t&&t.o){if(Tr.has(t))return;Tr.add(t),di.c.push(()=>{Tr.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Cw(t,e){const n=e.token={};function i(s,r,a,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=s&&(e.current=s)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((d,f)=>{f!==r&&d&&(ft(),N(d,1,1,()=>{e.blocks[f]===d&&(e.blocks[f]=null)}),ht())}):e.block.d(1),c.c(),L(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&Fa()}if(Cg(t)){const s=Se();if(t.then(r=>{Gn(s),i(e.then,1,e.value,r),Gn(null)},r=>{if(Gn(s),i(e.catch,2,e.error,r),Gn(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ww(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Ua=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ow(t,e){N(t,1,1,()=>{e.delete(t.key)})}function Lw(t,e,n,i,s,r,a,o,l,c,u,d){let f=t.length,h=r.length,m=f;const g={};for(;m--;)g[t[m].key]=m;const p=[],b=new Map,E=new Map;for(m=h;m--;){const R=d(s,r,m),y=n(R);let T=a.get(y);T?i&&T.p(R,e):(T=c(y,R),T.c()),b.set(y,p[m]=T),y in g&&E.set(y,Math.abs(m-g[y]))}const S=new Set,O=new Set;function k(R){L(R,1),R.m(o,u),a.set(R.key,R),u=R.first,h--}for(;f&&h;){const R=p[h-1],y=t[f-1],T=R.key,M=y.key;R===y?(u=R.first,f--,h--):b.has(M)?!a.has(T)||S.has(T)?k(R):O.has(M)?f--:E.get(T)>E.get(M)?(O.add(T),k(R)):(S.add(M),f--):(l(y,a),f--)}for(;f--;){const R=t[f];b.has(R.key)||l(R,a)}for(;h;)k(p[h-1]);return p}function ae(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const a=t[r],o=e[r];if(o){for(const l in a)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[r]=o}else for(const l in a)s[l]=1}for(const a in i)a in n||(n[a]=void 0);return n}function ze(t){return typeof t=="object"&&t!==null?t:{}}function En(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ge(t){t&&t.c()}function Ve(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:o}=t.$$;s&&s.m(e,n),i||Ma(()=>{const l=r.map(cc).filter(Ue);a?a.push(...l):Xe(l),t.$$.on_mount=[]}),o.forEach(Ma)}function Be(t,e){const n=t.$$;n.fragment!==null&&(Xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ng(t,e){t.$$.dirty[0]===-1&&(As.push(t),_c(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,s,r,a,o=[-1]){const l=Er;Gn(t);const c=t.$$={fragment:null,ctx:null,props:r,update:Nt,not_equal:s,bound:dc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:dc(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,f,...h)=>{const m=h.length?h[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=m)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](m),u&&Ng(t,d)),f}):[],c.update(),u=!0,Xe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const d=Rg(e.target);c.fragment&&c.fragment.l(d),d.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&L(t.$$.fragment),Ve(t,e.target,e.anchor,e.customElement),Fa()}Gn(l)}class De{$destroy(){Be(this,1),this.$destroy=Nt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gi=[];function Pg(t,e){return{subscribe:Ki(t,e).subscribe}}function Ki(t,e=Nt){let n;const i=new Set;function s(o){if(Oe(t,o)&&(t=o,n)){const l=!Gi.length;for(const c of i)c[1](),Gi.push(c,t);if(l){for(let c=0;c<Gi.length;c+=2)Gi[c][0](Gi[c+1]);Gi.length=0}}}function r(o){s(o(t))}function a(o,l=Nt){const c=[o,l];return i.add(c),i.size===1&&(n=e(s)||Nt),o(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:a}}try{self["workbox:window:6.4.1"]&&_()}catch{}function yc(t,e){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[i.port2])})}function Fg(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ic(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ug(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,r){if(s){if(typeof s=="string")return Ic(s,r);var a=Object.prototype.toString.call(s).slice(8,-1);return a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set"?Array.from(s):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ic(s,r):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.4.1"]&&_()}catch{}var Va=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Ba(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Ts=function(t,e){this.type=t,Object.assign(this,e)};function Sr(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Vg(){}var Bg={type:"SKIP_WAITING"};function vc(t,e){if(!e)return t&&t.then?t.then(Vg):Promise.resolve()}var kw=function(t){var e,n;function i(o,l){var c,u;return l===void 0&&(l={}),(c=t.call(this)||this).nn={},c.tn=0,c.rn=new Va,c.en=new Va,c.on=new Va,c.un=0,c.an=new Set,c.cn=function(){var d=c.fn,f=d.installing;c.tn>0||!Ba(f.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=f,d.removeEventListener("updatefound",c.cn)):(c.hn=f,c.an.add(f),c.rn.resolve(f)),++c.tn,f.addEventListener("statechange",c.ln)},c.ln=function(d){var f=c.fn,h=d.target,m=h.state,g=h===c.vn,p={sw:h,isExternal:g,originalEvent:d};!g&&c.mn&&(p.isUpdate=!0),c.dispatchEvent(new Ts(m,p)),m==="installed"?c.wn=self.setTimeout(function(){m==="installed"&&f.waiting===h&&c.dispatchEvent(new Ts("waiting",p))},200):m==="activating"&&(clearTimeout(c.wn),g||c.en.resolve(h))},c.dn=function(d){var f=c.hn,h=f!==navigator.serviceWorker.controller;c.dispatchEvent(new Ts("controlling",{isExternal:h,originalEvent:d,sw:f,isUpdate:c.mn})),h||c.on.resolve(f)},c.gn=(u=function(d){var f=d.data,h=d.ports,m=d.source;return Sr(c.getSW(),function(){c.an.has(m)&&c.dispatchEvent(new Ts("message",{data:f,originalEvent:d,ports:h,sw:m}))})},function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];try{return Promise.resolve(u.apply(this,d))}catch(h){return Promise.reject(h)}}),c.sn=o,c.nn=l,navigator.serviceWorker.addEventListener("message",c.gn),c}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,r,a=i.prototype;return a.register=function(o){var l=(o===void 0?{}:o).immediate,c=l!==void 0&&l;try{var u=this;return function(d,f){var h=d();return h&&h.then?h.then(f):f(h)}(function(){if(!c&&document.readyState!=="complete")return vc(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),Sr(u.bn(),function(d){u.fn=d,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var f=u.fn.waiting;return f&&Ba(f.scriptURL,u.sn.toString())&&(u.hn=f,Promise.resolve().then(function(){u.dispatchEvent(new Ts("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(d){return Promise.reject(d)}},a.update=function(){try{return this.fn?vc(this.fn.update()):void 0}catch(o){return Promise.reject(o)}},a.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},a.messageSW=function(o){try{return Sr(this.getSW(),function(l){return yc(l,o)})}catch(l){return Promise.reject(l)}},a.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&yc(this.fn.waiting,Bg)},a.pn=function(){var o=navigator.serviceWorker.controller;return o&&Ba(o.scriptURL,this.sn.toString())?o:void 0},a.bn=function(){try{var o=this;return function(l,c){try{var u=l()}catch(d){return c(d)}return u&&u.then?u.then(void 0,c):u}(function(){return Sr(navigator.serviceWorker.register(o.sn,o.nn),function(l){return o.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},s=i,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Fg(s.prototype,r),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,i){this.Sn(n).add(i)},e.removeEventListener=function(n,i){this.Sn(n).delete(i)},e.dispatchEvent=function(n){n.target=this;for(var i,s=Ug(this.Sn(n.type));!(i=s()).done;)(0,i.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());/*! *****************************************************************************
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
***************************************************************************** */var Ha=function(t,e){return Ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Ha(t,e)};function Dt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ha(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var nt=function(){return nt=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nt.apply(this,arguments)};function ja(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Rn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
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
 */var qa="mdc-dom-focus-sentinel",Hg=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+qa)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(qa)&&!s,a=!1;if(r){var o=getComputedStyle(i);a=o.display==="none"||o.visibility==="hidden"}return r&&!a})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(qa),e},t}(),bc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:Hg});/**
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
 */function jg(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Ec(n,e))return n;n=n.parentElement}return null}function Ec(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function qg(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var Cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:jg,matches:Ec,estimateScrollWidth:qg});/**
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
 */var Kn,Dn,He={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Kn={},Kn[""+He.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Kn[""+He.LIST_ITEM_CLASS]="mdc-list-item",Kn[""+He.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Kn[""+He.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Kn[""+He.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Kn[""+He.ROOT]="mdc-list";var Wi=(Dn={},Dn[""+He.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",Dn[""+He.LIST_ITEM_CLASS]="mdc-deprecated-list-item",Dn[""+He.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",Dn[""+He.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",Dn[""+He.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",Dn[""+He.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",Dn[""+He.ROOT]="mdc-deprecated-list",Dn),Wn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+He.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` a,
    .`+Wi[He.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Wi[He.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+He.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` a,
    .`+He.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+He.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Wi[He.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Wi[He.LIST_ITEM_CLASS]+` a,
    .`+Wi[He.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Wi[He.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
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
 */var je={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Zt=new Set;Zt.add(je.BACKSPACE);Zt.add(je.ENTER);Zt.add(je.SPACEBAR);Zt.add(je.PAGE_UP);Zt.add(je.PAGE_DOWN);Zt.add(je.END);Zt.add(je.HOME);Zt.add(je.ARROW_LEFT);Zt.add(je.ARROW_UP);Zt.add(je.ARROW_RIGHT);Zt.add(je.ARROW_DOWN);Zt.add(je.DELETE);Zt.add(je.ESCAPE);Zt.add(je.TAB);var nn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},xt=new Map;xt.set(nn.BACKSPACE,je.BACKSPACE);xt.set(nn.ENTER,je.ENTER);xt.set(nn.SPACEBAR,je.SPACEBAR);xt.set(nn.PAGE_UP,je.PAGE_UP);xt.set(nn.PAGE_DOWN,je.PAGE_DOWN);xt.set(nn.END,je.END);xt.set(nn.HOME,je.HOME);xt.set(nn.ARROW_LEFT,je.ARROW_LEFT);xt.set(nn.ARROW_UP,je.ARROW_UP);xt.set(nn.ARROW_RIGHT,je.ARROW_RIGHT);xt.set(nn.ARROW_DOWN,je.ARROW_DOWN);xt.set(nn.DELETE,je.DELETE);xt.set(nn.ESCAPE,je.ESCAPE);xt.set(nn.TAB,je.TAB);var Xn=new Set;Xn.add(je.PAGE_UP);Xn.add(je.PAGE_DOWN);Xn.add(je.END);Xn.add(je.HOME);Xn.add(je.ARROW_LEFT);Xn.add(je.ARROW_UP);Xn.add(je.ARROW_RIGHT);Xn.add(je.ARROW_DOWN);function Ct(t){var e=t.key;if(Zt.has(e))return e;var n=xt.get(t.keyCode);return n||je.UNKNOWN}/**
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
 */var zg=["input","button","textarea","select"],fi=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();zg.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function Gg(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function Kg(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(a){a.sort(function(o,l){return o.index-l.index})}),n}function za(t,e){var n=t.nextChar,i=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,r=t.focusedItemIndex,a=t.skipFocus,o=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Tc(e)},Mt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=Wg(s,r,o,e):l=Xg(s,o,e),l!==-1&&!a&&i(l),l}function Wg(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var a=r[i.sortedIndexCursor].index;if(!n(a))return a}i.currentFirstChar=s;var o=-1,l;for(l=0;l<r.length;l++)if(!n(r[l].index)){o=l;break}for(;l<r.length;l++)if(r[l].index>e&&!n(r[l].index)){o=l;break}return o!==-1?(i.sortedIndexCursor=o,r[i.sortedIndexCursor].index):-1}function Xg(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(r.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(n.sortedIndexCursor+1)%s.length,o=-1;a!==n.sortedIndexCursor;){var l=s[a],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){o=a;break}a=(a+1)%s.length}return o!==-1?(n.sortedIndexCursor=o,s[n.sortedIndexCursor].index):-1}function Ac(t){return t.typeaheadBuffer.length>0}function Tc(t){t.typeaheadBuffer=""}function Sc(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,o=t.isItemAtIndexDisabled,l=Ct(n)==="ArrowLeft",c=Ct(n)==="ArrowUp",u=Ct(n)==="ArrowRight",d=Ct(n)==="ArrowDown",f=Ct(n)==="Home",h=Ct(n)==="End",m=Ct(n)==="Enter",g=Ct(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||d||f||h||m)return-1;var p=!g&&n.key.length===1;if(p){fi(n);var b={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return za(b,e)}if(!g)return-1;i&&fi(n);var E=i&&Ac(e);if(E){var b={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return za(b,e)}return-1}/**
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
 */function Yg(t){return t instanceof Array}var Jg=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Mt.UNSET_INDEX,i.focusedItemIndex=Mt.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=Gg(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Mt.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,He.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Mt.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,He.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(s,He.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||a)){n=s;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Ac(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:r}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,s){var r=this,a=Ct(n)==="ArrowLeft",o=Ct(n)==="ArrowUp",l=Ct(n)==="ArrowRight",c=Ct(n)==="ArrowDown",u=Ct(n)==="Home",d=Ct(n)==="End",f=Ct(n)==="Enter",h=Ct(n)==="Spacebar",m=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(o||d?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(E){r.focusItemAtIndex(E)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(E){return r.adapter.listItemAtIndexHasClass(E,He.LIST_ITEM_DISABLED_CLASS)}};Sc(g,this.typeaheadState)}return}var p=this.adapter.getFocusedElementIndex();if(!(p===-1&&(p=s,p<0))){if(this.isVertical&&c||!this.isVertical&&l)fi(n),this.focusNextElement(p);else if(this.isVertical&&o||!this.isVertical&&a)fi(n),this.focusPrevElement(p);else if(u)fi(n),this.focusFirstElement();else if(d)fi(n),this.focusLastElement();else if(m&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Mt.UNSET_INDEX?[]:this.selectedIndex);else if((f||h)&&i){var b=n.target;if(b&&b.tagName==="A"&&f||(fi(n),this.adapter.listItemAtIndexHasClass(p,He.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(p),this.adapter.notifyAction(p))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,He.LIST_ITEM_DISABLED_CLASS)}};Sc(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Mt.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,He.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),s=n+1;if(s>=i)if(this.wrapFocus)s=0;else return n;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===n&&!r)){var a=He.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=He.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Mt.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,a),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Mt.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Wn.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?Wn.ARIA_CURRENT:Wn.ARIA_SELECTED;if(this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),n!==Mt.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Wn.ARIA_SELECTED:Wn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;n.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Mt.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Mt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Mt.UNSET_INDEX?this.selectedIndex:Yg(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(s){return i.isIndexInRange(s)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Mt.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(n);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r)),this.adapter.setAttributeForElementIndex(n,s,r?"true":"false");var a=this.selectedIndex===Mt.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(n):a=a.filter(function(o){return o!==n}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,He.LIST_ITEM_DISABLED_CLASS)||n.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(n,i,s){var r=this;s===void 0&&(s=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,He.LIST_ITEM_DISABLED_CLASS)}};return za(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Kg(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Tc(this.typeaheadState)},e}(Qt);/**
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
 */var sn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Qg={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Cc=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return Qg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(sn.OPEN),this.adapter.addClass(sn.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(sn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(sn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(sn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(sn.OPENING)||this.adapter.hasClass(sn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(sn.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=sn.OPENING,s=sn.CLOSING,r=sn.OPEN,a=sn.ANIMATE,o=sn.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,o);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(Qt);/**
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
 */var Zg=function(t){Dt(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Cc);/**
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
 */function xg(t){return t===void 0&&(t=window),$g(t)?{passive:!0}:!1}function $g(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var wc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:xg});function ee(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function $e(t,e,n,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(a),a.defaultPrevented&&r.preventDefault()}return r}}function Yn(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],a=r.indexOf("$");a!==-1&&e.indexOf(r.substring(0,a+1))!==-1||e.indexOf(r)===-1&&(i[r]=t[r])}return i}const Oc=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,e_=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function qe(t){let e,n=[];t.$on=(s,r)=>{let a=s,o=()=>{};return e?o=e(a,r):n.push([a,r]),a.match(Oc)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),(...c)=>{o()}};function i(s){ci(t,s)}return s=>{const r=[],a={};e=(o,l)=>{let c=o,u=l,d=!1;const f=c.match(Oc),h=c.match(e_),m=f||h;if(c.match(/^SMUI:\w+:/)){const b=c.split(":");let E="";for(let S=0;S<b.length;S++)E+=S===b.length-1?":"+b[S]:b[S].split("-").map(O=>O.slice(0,1).toUpperCase()+O.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${E.split("$")[0]}.`),c=E}if(m){const b=c.split(f?":":"$");c=b[0];const E=Object.fromEntries(b.slice(1).map(S=>[S,!0]));E.passive&&(d=d||{},d.passive=!0),E.nonpassive&&(d=d||{},d.passive=!1),E.capture&&(d=d||{},d.capture=!0),E.once&&(d=d||{},d.once=!0),E.preventDefault&&(u=Lg(u)),E.stopPropagation&&(u=kg(u))}const g=Te(s,c,u,d),p=()=>{g();const b=r.indexOf(p);b>-1&&r.splice(b,1)};return r.push(p),c in a||(a[c]=Te(s,c,i)),p};for(let o=0;o<n.length;o++)e(n[o][0],n[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(a))o[1]()}}}}function Me(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function Ze(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=n[s];if(r&&r.update){const a=i[s];Array.isArray(a)&&a.length>1?r.update(a[1]):r.update()}}},destroy(){for(let i=0;i<n.length;i++){const s=n[i];s&&s.destroy&&s.destroy()}}}}function t_(t){let e,n,i,s,r,a;const o=t[15].default,l=de(o,t,t[14],null);let c=[{class:n=ee(Ke({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("aside"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[16](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[7].call(null,e)),Te(e,"keydown",t[17]),Te(e,"transitionend",t[18])],r=!0)},p(d,[f]){l&&l.p&&(!s||f&16384)&&he(l,o,d,d[14],s?fe(o,d[14],f,null):me(d[14]),null),Z(e,u=ae(c,[(!s||f&78&&n!==(n=ee(Ke({[d[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":d[2]==="dismissible","mdc-drawer--modal":d[2]==="modal","smui-drawer__absolute":d[2]==="modal"&&!d[3]},d[6]))))&&{class:n},f&256&&d[8]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(L(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[16](null),r=!1,Xe(a)}}}function n_(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const{FocusTrap:o}=bc,l=qe(Se());let{use:c=[]}=e,{class:u=""}=e,{variant:d=void 0}=e,{open:f=!1}=e,{fixed:h=!0}=e,m,g,p={},b=null,E,S=!1;et("SMUI:list:nav",!0),et("SMUI:list:item:nav",!0),et("SMUI:list:wrapFocus",!0);let O=d;Bt(()=>{E=new o(m,{skipInitialFocus:!0}),n(4,g=k()),g&&g.init()}),gn(()=>{g&&g.destroy(),S&&S.removeEventListener("SMUIDrawerScrim:click",M)});function k(){var K,G;S&&S.removeEventListener("SMUIDrawerScrim:click",M),d==="modal"&&(S=(G=(K=m.parentNode)===null||K===void 0?void 0:K.querySelector(".mdc-drawer-scrim"))!==null&&G!==void 0?G:!1,S&&S.addEventListener("SMUIDrawerScrim:click",M));const Q=d==="dismissible"?Cc:d==="modal"?Zg:void 0;return Q?new Q({addClass:y,removeClass:T,hasClass:R,elementHasClass:(Ee,re)=>Ee.classList.contains(re),saveFocus:()=>b=document.activeElement,restoreFocus:()=>{b&&"focus"in b&&m.contains(document.activeElement)&&b.focus()},focusActiveNavigationItem:()=>{const Ee=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");Ee&&Ee.focus()},notifyClose:()=>{n(9,f=!1),$e(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,f=!0),$e(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>E.trapFocus(),releaseFocus:()=>E.releaseFocus()}):void 0}function R(K){return K in p?p[K]:j().classList.contains(K)}function y(K){p[K]||n(6,p[K]=!0,p)}function T(K){(!(K in p)||p[K])&&n(6,p[K]=!1,p)}function M(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function I(K){n(9,f=K)}function v(){return f}function j(){return m}function A(K){ie[K?"unshift":"push"](()=>{m=K,n(5,m)})}const V=K=>g&&g.handleKeydown(K),F=K=>g&&g.handleTransitionEnd(K);return t.$$set=K=>{e=D(D({},e),ke(K)),n(8,s=J(e,i)),"use"in K&&n(0,c=K.use),"class"in K&&n(1,u=K.class),"variant"in K&&n(2,d=K.variant),"open"in K&&n(9,f=K.open),"fixed"in K&&n(3,h=K.fixed),"$$scope"in K&&n(14,a=K.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&O!==d&&(n(13,O=d),g&&g.destroy(),n(6,p={}),n(4,g=k()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==f&&(f?g.open():g.close())},[c,u,d,h,g,m,p,l,s,f,I,v,j,O,a,r,A,V,F]}class Rw extends De{constructor(e){super();Re(this,e,n_,t_,Oe,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function i_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("div"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function s_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Lc extends De{constructor(e){super();Re(this,e,s_,i_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function r_(t){let e;const n=t[10].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function o_(t){let e,n,i;const s=[{use:[t[7],...t[0]]},{class:ee(Ke({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var r=t[2];function a(o){let l={$$slots:{default:[r_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[11](e)),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&499?ae(s,[l&129&&{use:[o[7],...o[0]]},l&50&&{class:ee(Ke({[o[1]]:!0,[o[5]]:!0},o[4]))},l&64&&ze(o[6]),l&256&&ze(o[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[2])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[11](e),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[11](null),o&&X(n),e&&Be(e,o)}}}const Jn={component:Lc,class:"",classMap:{},contexts:{},props:{}};function a_(t,e,n){const i=["use","class","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:l=""}=e,c;const u=Jn.class,d={},f=[],h=Jn.contexts,m=Jn.props;let{component:g=Jn.component}=e;Object.entries(Jn.classMap).forEach(([S,O])=>{const k=gt(O);k&&"subscribe"in k&&f.push(k.subscribe(R=>{n(4,d[S]=R,d)}))});const p=qe(Se());for(let S in h)h.hasOwnProperty(S)&&et(S,h[S]);gn(()=>{for(const S of f)S()});function b(){return c.getElement()}function E(S){ie[S?"unshift":"push"](()=>{c=S,n(3,c)})}return t.$$set=S=>{e=D(D({},e),ke(S)),n(8,s=J(e,i)),"use"in S&&n(0,o=S.use),"class"in S&&n(1,l=S.class),"component"in S&&n(2,g=S.component),"$$scope"in S&&n(12,a=S.$$scope)},[o,l,g,c,d,u,m,p,s,b,r,E,a]}class l_ extends De{constructor(e){super();Re(this,e,a_,o_,Oe,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const kc=Object.assign({},Jn);function It(t){return new Proxy(l_,{construct:function(e,n){return Object.assign(Jn,kc,t),new e(...n)},get:function(e,n){return Object.assign(Jn,kc,t),e[n]}})}function u_(t){let e,n,i,s,r;const a=t[7].default,o=de(a,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("a"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[8](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[3].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&64)&&he(o,a,u,u[6],i?fe(a,u[6],d,null):me(u[6]),null),Z(e,c=ae(l,[(!i||d&2)&&{href:u[1]},d&16&&u[4]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[8](null),s=!1,Xe(r)}}}function c_(t,e,n){const i=["use","href","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{href:l="javascript:void(0);"}=e;const c=qe(Se());let u;function d(){return u}function f(h){ie[h?"unshift":"push"](()=>{u=h,n(2,u)})}return t.$$set=h=>{e=D(D({},e),ke(h)),n(4,s=J(e,i)),"use"in h&&n(0,o=h.use),"href"in h&&n(1,l=h.href),"$$scope"in h&&n(6,a=h.$$scope)},[o,l,u,c,s,d,a,r,f]}class d_ extends De{constructor(e){super();Re(this,e,c_,u_,Oe,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function f_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("button"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function h_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class m_ extends De{constructor(e){super();Re(this,e,h_,f_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function p_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h1"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function g_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class __ extends De{constructor(e){super();Re(this,e,g_,p_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function y_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h2"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function I_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class v_ extends De{constructor(e){super();Re(this,e,I_,y_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function b_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h3"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function E_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class A_ extends De{constructor(e){super();Re(this,e,E_,b_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function T_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h5"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function S_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class C_ extends De{constructor(e){super();Re(this,e,S_,T_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function w_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("h6"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function O_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class L_ extends De{constructor(e){super();Re(this,e,O_,w_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function k_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("i"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function R_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class D_ extends De{constructor(e){super();Re(this,e,R_,k_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function M_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("li"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function N_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class P_ extends De{constructor(e){super();Re(this,e,N_,M_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function F_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("nav"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function U_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class V_ extends De{constructor(e){super();Re(this,e,U_,F_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function B_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("span"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function H_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Rc extends De{constructor(e){super();Re(this,e,H_,B_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function j_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=br("svg"),o&&o.c(),mc(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),mc(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function q_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class Dc extends De{constructor(e){super();Re(this,e,q_,j_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function z_(t){let e,n,i,s,r;const a=t[6].default,o=de(a,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=D(c,l[u]);return{c(){e=ye("ul"),o&&o.c(),Z(e,c)},m(u,d){Y(u,e,d),o&&o.m(e,null),t[7](e),i=!0,s||(r=[$(n=Ze.call(null,e,t[0])),$(t[2].call(null,e))],s=!0)},p(u,[d]){o&&o.p&&(!i||d&32)&&he(o,a,u,u[5],i?fe(a,u[5],d,null):me(u[5]),null),Z(e,c=ae(l,[d&8&&u[3]])),n&&Ue(n.update)&&d&1&&n.update.call(null,u[0])},i(u){i||(L(o,u),i=!0)},o(u){N(o,u),i=!1},d(u){u&&X(e),o&&o.d(u),t[7](null),s=!1,Xe(r)}}}function G_(t,e,n){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const l=qe(Se());let c;function u(){return c}function d(f){ie[f?"unshift":"push"](()=>{c=f,n(1,c)})}return t.$$set=f=>{e=D(D({},e),ke(f)),n(3,s=J(e,i)),"use"in f&&n(0,o=f.use),"$$scope"in f&&n(5,a=f.$$scope)},[o,c,l,s,u,a,r,d]}class K_ extends De{constructor(e){super();Re(this,e,G_,z_,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const wr=d_,Ga=m_,_n=Lc,W_=__,Mc=v_,X_=A_,Y_=C_,J_=L_,Q_=P_,Z_=V_,Qn=Rc,x_=K_;var Dw=It({class:"mdc-drawer-app-content",component:_n}),Mw=It({class:"mdc-drawer__content",component:_n}),Nw=It({class:"mdc-drawer__header",component:_n}),Pw=It({class:"mdc-drawer__title",component:W_}),Fw=It({class:"mdc-drawer__subtitle",component:Mc});function $_(t){let e;const n=t[8].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function ey(t){let e,n,i;const s=[{use:[t[6],...t[0]]},{class:ee({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},t[7]];var r=t[3];function a(o){let l={$$slots:{default:[$_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[9](e),e.$on("click",t[10])),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&199?ae(s,[l&65&&{use:[o[6],...o[0]]},l&6&&{class:ee({[o[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!o[2]})},l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[3])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[9](e),e.$on("click",o[10]),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[9](null),o&&X(n),e&&Be(e,o)}}}function ty(t,e,n){const i=["use","class","fixed","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{fixed:u=!0}=e,d,{component:f=_n}=e;function h(){return d.getElement()}function m(p){ie[p?"unshift":"push"](()=>{d=p,n(5,d)})}const g=p=>$e(h(),"SMUIDrawerScrim:click",p);return t.$$set=p=>{e=D(D({},e),ke(p)),n(7,s=J(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"fixed"in p&&n(2,u=p.fixed),"component"in p&&n(3,f=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,u,f,h,d,o,s,r,m,g,a]}class ny extends De{constructor(e){super();Re(this,e,ty,ey,Oe,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Uw=ny;function iy(t){let e;const n=t[37].default,i=de(n,t,t[43],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&he(i,n,s,s[43],e?fe(n,s[43],r,null):me(s[43]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function sy(t){let e,n,i;const s=[{use:[t[17],...t[0]]},{class:ee({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var r=t[12];function a(o){let l={$$slots:{default:[iy]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&8818687?ae(s,[l[0]&131073&&{use:[o[17],...o[0]]},l[0]&266238&&{class:ee({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[18],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},l[0]&32768&&{role:o[15]},l[0]&8388608&&ze(o[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[12])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[38](e),e.$on("keydown",o[39]),e.$on("focusin",o[40]),e.$on("focusout",o[41]),e.$on("click",o[42]),e.$on("SMUIListItem:mount",o[19]),e.$on("SMUIListItem:unmount",o[20]),e.$on("SMUI:action",o[21]),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[38](null),o&&X(n),e&&Be(e,o)}}}function ry(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;var o;const{closest:l,matches:c}=Cr,u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{nonInteractive:h=!1}=e,{dense:m=!1}=e,{textualList:g=!1}=e,{avatarList:p=!1}=e,{iconList:b=!1}=e,{imageList:E=!1}=e,{thumbnailList:S=!1}=e,{videoList:O=!1}=e,{twoLine:k=!1}=e,{threeLine:R=!1}=e,{vertical:y=!0}=e,{wrapFocus:T=(o=gt("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:M=!1}=e,{selectedIndex:I=-1}=e,{radioList:v=!1}=e,{checkList:j=!1}=e,{hasTypeahead:A=!1}=e,V,F,K=[],G=gt("SMUI:list:role"),Q=gt("SMUI:list:nav");const Ee=new WeakMap;let re=gt("SMUI:dialog:selection"),Fe=gt("SMUI:addLayoutListener"),ge,{component:st=Q?Z_:x_}=e;et("SMUI:list:nonInteractive",h),et("SMUI:separator:context","list"),G||(M?(G="listbox",et("SMUI:list:item:role","option")):v?(G="radiogroup",et("SMUI:list:item:role","radio")):j?(G="group",et("SMUI:list:item:role","checkbox")):(G="list",et("SMUI:list:item:role",void 0))),Fe&&(ge=Fe(Ye)),Bt(()=>{n(13,F=new Jg({addClassForElementIndex:be,focusItemAtIndex:q,getAttributeForElementIndex:(ue,ce)=>{var ut,vn;return(vn=(ut=le()[ue])===null||ut===void 0?void 0:ut.getAttr(ce))!==null&&vn!==void 0?vn:null},getFocusedElementIndex:()=>document.activeElement?le().map(ue=>ue.element).indexOf(document.activeElement):-1,getListItemCount:()=>K.length,getPrimaryTextAtIndex:We,hasCheckboxAtIndex:ue=>{var ce,ut;return(ut=(ce=le()[ue])===null||ce===void 0?void 0:ce.hasCheckbox)!==null&&ut!==void 0?ut:!1},hasRadioAtIndex:ue=>{var ce,ut;return(ut=(ce=le()[ue])===null||ce===void 0?void 0:ce.hasRadio)!==null&&ut!==void 0?ut:!1},isCheckboxCheckedAtIndex:ue=>{var ce;const ut=le()[ue];return(ce=(ut==null?void 0:ut.hasCheckbox)&&ut.checked)!==null&&ce!==void 0?ce:!1},isFocusInsideList:()=>V!=null&&Ie()!==document.activeElement&&Ie().contains(document.activeElement),isRootFocused:()=>V!=null&&document.activeElement===Ie(),listItemAtIndexHasClass:U,notifyAction:ue=>{n(24,I=ue),V!=null&&$e(Ie(),"SMUIList:action",{index:ue},void 0,!0)},removeClassForElementIndex:lt,setAttributeForElementIndex:kt,setCheckedCheckboxOrRadioAtIndex:(ue,ce)=>{le()[ue].checked=ce},setTabIndexForListItemChildren:(ue,ce)=>{const ut=le()[ue],vn="button:not(:disabled), a";Array.prototype.forEach.call(ut.element.querySelectorAll(vn),vs=>{vs.setAttribute("tabindex",ce)})}}));const B={get element(){return Ie()},get items(){return K},get typeaheadInProgress(){return F.isTypeaheadInProgress()},typeaheadMatchItem(ue,ce){return F.typeaheadMatchItem(ue,ce,!0)},getOrderedList:le,focusItemAtIndex:q,addClassForElementIndex:be,removeClassForElementIndex:lt,setAttributeForElementIndex:kt,removeAttributeForElementIndex:z,getAttributeFromElementIndex:pe,getPrimaryTextAtIndex:We};return $e(Ie(),"SMUIList:mount",B),F.init(),()=>{F.destroy()}}),gn(()=>{ge&&ge()});function x(B){K.push(B.detail),Ee.set(B.detail.element,B.detail),M&&B.detail.selected&&n(24,I=it(B.detail.element)),B.stopPropagation()}function H(B){var ue;const ce=(ue=B.detail&&K.indexOf(B.detail))!==null&&ue!==void 0?ue:-1;ce!==-1&&(K.splice(ce,1),K=K,Ee.delete(B.detail.element)),B.stopPropagation()}function Ae(B){if(v||j){const ue=it(B.target);if(ue!==-1){const ce=le()[ue];ce&&(v&&!ce.checked||j)&&(ce.checked=!ce.checked,ce.activateRipple(),window.requestAnimationFrame(()=>{ce.deactivateRipple()}))}}}function le(){return V==null?[]:[...Ie().children].map(B=>Ee.get(B)).filter(B=>B&&B._smui_list_item_accessor)}function q(B){const ue=le()[B];ue&&"focus"in ue.element&&ue.element.focus()}function U(B,ue){var ce;const ut=le()[B];return(ce=ut&&ut.hasClass(ue))!==null&&ce!==void 0?ce:!1}function be(B,ue){const ce=le()[B];ce&&ce.addClass(ue)}function lt(B,ue){const ce=le()[B];ce&&ce.removeClass(ue)}function kt(B,ue,ce){const ut=le()[B];ut&&ut.addAttr(ue,ce)}function z(B,ue){const ce=le()[B];ce&&ce.removeAttr(ue)}function pe(B,ue){const ce=le()[B];return ce?ce.getAttr(ue):null}function We(B){var ue;const ce=le()[B];return(ue=ce&&ce.getPrimaryText())!==null&&ue!==void 0?ue:""}function it(B){const ue=l(B,".mdc-deprecated-list-item, .mdc-deprecated-list");return ue&&c(ue,".mdc-deprecated-list-item")?le().map(ce=>ce==null?void 0:ce.element).indexOf(ue):-1}function Ye(){return F.layout()}function Vt(B,ue){return F.setEnabled(B,ue)}function un(){return F.isTypeaheadInProgress()}function At(){return F.getSelectedIndex()}function te(){return F.getFocusedItemIndex()}function Ie(){return V.getElement()}function _t(B){ie[B?"unshift":"push"](()=>{V=B,n(14,V)})}const dt=B=>F&&F.handleKeydown(B,B.target.classList.contains("mdc-deprecated-list-item"),it(B.target)),xe=B=>F&&F.handleFocusIn(it(B.target)),P=B=>F&&F.handleFocusOut(it(B.target)),oe=B=>F&&F.handleClick(it(B.target),!c(B.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=B=>{e=D(D({},e),ke(B)),n(23,s=J(e,i)),"use"in B&&n(0,d=B.use),"class"in B&&n(1,f=B.class),"nonInteractive"in B&&n(2,h=B.nonInteractive),"dense"in B&&n(3,m=B.dense),"textualList"in B&&n(4,g=B.textualList),"avatarList"in B&&n(5,p=B.avatarList),"iconList"in B&&n(6,b=B.iconList),"imageList"in B&&n(7,E=B.imageList),"thumbnailList"in B&&n(8,S=B.thumbnailList),"videoList"in B&&n(9,O=B.videoList),"twoLine"in B&&n(10,k=B.twoLine),"threeLine"in B&&n(11,R=B.threeLine),"vertical"in B&&n(25,y=B.vertical),"wrapFocus"in B&&n(26,T=B.wrapFocus),"singleSelection"in B&&n(27,M=B.singleSelection),"selectedIndex"in B&&n(24,I=B.selectedIndex),"radioList"in B&&n(28,v=B.radioList),"checkList"in B&&n(29,j=B.checkList),"hasTypeahead"in B&&n(30,A=B.hasTypeahead),"component"in B&&n(12,st=B.component),"$$scope"in B&&n(43,a=B.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&F&&F.setVerticalOrientation(y),t.$$.dirty[0]&67117056&&F&&F.setWrapFocus(T),t.$$.dirty[0]&1073750016&&F&&F.setHasTypeahead(A),t.$$.dirty[0]&134225920&&F&&F.setSingleSelection(M),t.$$.dirty[0]&151003136&&F&&M&&At()!==I&&F.setSelectedIndex(I)},[d,f,h,m,g,p,b,E,S,O,k,R,st,F,V,G,c,u,re,x,H,Ae,it,s,I,y,T,M,v,j,A,Ye,Vt,un,At,te,Ie,r,_t,dt,xe,P,oe,a]}class oy extends De{constructor(e){super();Re(this,e,ry,sy,Oe,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}var Or;function ay(t,e){e===void 0&&(e=!1);var n=t.CSS,i=Or;if(typeof Or=="boolean"&&!e)return Or;var s=n&&typeof n.supports=="function";if(!s)return!1;var r=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||a,e||(Or=i),i}function ly(t,e,n){if(!t)return{x:0,y:0};var i=e.x,s=e.y,r=i+n.left,a=s+n.top,o,l;if(t.type==="touchstart"){var c=t;o=c.changedTouches[0].pageX-r,l=c.changedTouches[0].pageY-a}else{var u=t;o=u.pageX-r,l=u.pageY-a}return{x:o,y:l}}/**
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
 */var uy={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},cy={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Nc={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Pc=["touchstart","pointerdown","mousedown","keydown"],Fc=["touchend","pointerup","mouseup","contextmenu"],Lr=[],dy=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return uy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return cy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Nc},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,a=s.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(a),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(s),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,s;if(n){try{for(var r=Rn(Pc),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,s;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=Rn(Fc),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var s=Rn(Pc),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=Rn(Fc),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,a=r&&n!==void 0&&r.type!==n.type;if(!a){s.isActivated=!0,s.isProgrammatic=n===void 0,s.activationEvent=n,s.wasActivatedByPointer=s.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var o=n!==void 0&&Lr.length>0&&Lr.some(function(l){return i.adapter.containsEventTarget(l)});if(o){this.resetActivationState();return}n!==void 0&&(Lr.push(n.target),this.registerDeactivationHandlers(n)),s.wasElementMadeActive=this.checkElementMadeActive(n),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Lr=[],!s.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(n),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,l=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,m=f.endPoint;u=h.x+"px, "+h.y+"px",d=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,u),this.adapter.updateCssVariable(r,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,s=n.wasActivatedByPointer,r;s?r=ly(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,a=s.isActivated,o=r||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Nc.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var s=nt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(s),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,s=n.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var a=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,s=n.VAR_LEFT,r=n.VAR_TOP,a=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Qt);const{applyPassive:kr}=wc,{matches:fy}=Cr;function yn(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u=m=>t.classList.add(m),removeClass:d=m=>t.classList.remove(m),addStyle:f=(m,g)=>t.style.setProperty(m,g),initPromise:h=Promise.resolve()}={}){let m,g=gt("SMUI:addLayoutListener"),p,b=a,E=l,S=c;function O(){n&&(u("mdc-ripple-surface"),r==="primary"?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):r==="secondary"?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))),m&&b!==a&&(b=a,a?m.activate():a===!1&&m.deactivate()),e&&!m?(m=new dy({addClass:u,browserSupportsCssVars:()=>ay(window),computeBoundingRect:()=>(o||t).getBoundingClientRect(),containsEventTarget:R=>t.contains(R),deregisterDocumentInteractionHandler:(R,y)=>document.documentElement.removeEventListener(R,y,kr()),deregisterInteractionHandler:(R,y)=>(l||t).removeEventListener(R,y,kr()),deregisterResizeHandler:R=>window.removeEventListener("resize",R),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>a==null?fy(c||t,":active"):a,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(R,y)=>document.documentElement.addEventListener(R,y,kr()),registerInteractionHandler:(R,y)=>(l||t).addEventListener(R,y,kr()),registerResizeHandler:R=>window.addEventListener("resize",R),removeClass:d,updateCssVariable:f}),h.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&h.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(E!==l||S!==c)&&(E=l,S=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}O(),g&&(p=g(k));function k(){m&&m.layout()}return{update(R){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u,removeClass:d,addStyle:f,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>t.classList.add(y),removeClass:y=>t.classList.remove(y),addStyle:(y,T)=>t.style.setProperty(y,T),initPromise:Promise.resolve()},R)),O()},destroy(){m&&(m.destroy(),m=void 0,d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),p&&p()}}}function Uc(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function hy(t){let e,n,i=t[6]&&Uc();const s=t[32].default,r=de(s,t,t[35],null);return{c(){i&&i.c(),e=Rt(),r&&r.c()},m(a,o){i&&i.m(a,o),Y(a,e,o),r&&r.m(a,o),n=!0},p(a,o){a[6]?i||(i=Uc(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||o[1]&16)&&he(r,s,a,a[35],n?fe(s,a[35],o,null):me(a[35]),null)},i(a){n||(L(r,a),n=!0)},o(a){N(r,a),n=!1},d(a){i&&i.d(a),a&&X(e),r&&r.d(a)}}}function my(t){let e,n,i;const s=[{use:[...t[5]?[]:[[yn,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:ee(Ke({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(Vc).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var r=t[12];function a(o){let l={$$slots:{default:[hy]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&150974399?ae(s,[l[0]&15213235&&{use:[...o[5]?[]:[[yn,{ripple:!o[13],unbounded:!1,color:(o[7]||o[0])&&o[4]==null?"primary":o[4],disabled:o[9],addClass:o[21],removeClass:o[22],addStyle:o[23]}]],o[19],...o[1]]},l[0]&1082277&&{class:ee(Ke({[o[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":o[7],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[9],"mdc-menu-item--selected":!o[20]&&o[8]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[5]},o[15]))},l[0]&65544&&{style:Object.entries(o[16]).map(Vc).concat([o[3]]).join(" ")},l[0]&1048704&&ze(o[20]&&o[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ze(o[20]?{}:{role:o[8]}),l[0]&1048833&&ze(!o[20]&&o[8]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),l[0]&1057024&&ze(!o[20]&&(o[8]==="radio"||o[8]==="checkbox")?{"aria-checked":o[13]&&o[13].checked?"true":"false"}:{}),l[0]&1049088&&ze(o[20]?{}:{"aria-disabled":o[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":o[10]||void 0},l[0]&262144&&{tabindex:o[18]},l[0]&2048&&{href:o[11]},l[0]&131072&&ze(o[17]),l[0]&134217728&&ze(o[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[12])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[33](e),e.$on("click",o[24]),e.$on("keydown",o[25]),e.$on("SMUIGenericInput:mount",o[26]),e.$on("SMUIGenericInput:unmount",o[34]),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[33](null),o&&X(n),e&&Be(e,o)}}}let py=0;const Vc=([t,e])=>`${t}: ${e};`;function gy(t,e,n){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=J(e,s),{$$slots:a={},$$scope:o}=e;var l;const c=qe(Se());let u=()=>{};function d(z){return z===u}let{use:f=[]}=e,{class:h=""}=e,{style:m=""}=e,{color:g=void 0}=e,{nonInteractive:p=(l=gt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;et("SMUI:list:nonInteractive",void 0);let{ripple:b=!p}=e,{activated:E=!1}=e,{role:S=gt("SMUI:list:item:role")}=e;et("SMUI:list:item:role",void 0);let{selected:O=!1}=e,{disabled:k=!1}=e,{skipRestoreFocus:R=!1}=e,{tabindex:y=u}=e,{inputId:T="SMUI-form-field-list-"+py++}=e,{href:M=void 0}=e,I,v={},j={},A={},V,F,K=gt("SMUI:list:item:nav"),{component:G=K?M?wr:Qn:Q_}=e;et("SMUI:generic:input:props",{id:T}),et("SMUI:separator:context",void 0),Bt(()=>{if(!O&&!p){let pe=!0,We=I;for(;We.previousSibling;)if(We=We.previousSibling,We.nodeType===1&&We.classList.contains("mdc-deprecated-list-item")&&!We.classList.contains("mdc-deprecated-list-item--disabled")){pe=!1;break}pe&&(F=window.requestAnimationFrame(H))}const z={_smui_list_item_accessor:!0,get element(){return be()},get selected(){return O},set selected(pe){n(0,O=pe)},hasClass:Q,addClass:Ee,removeClass:re,getAttr:ge,addAttr:st,removeAttr:x,getPrimaryText:U,get checked(){var pe;return(pe=V&&V.checked)!==null&&pe!==void 0?pe:!1},set checked(pe){V&&n(13,V.checked=!!pe,V)},get hasCheckbox(){return!!(V&&"_smui_checkbox_accessor"in V)},get hasRadio(){return!!(V&&"_smui_radio_accessor"in V)},activateRipple(){V&&V.activateRipple()},deactivateRipple(){V&&V.deactivateRipple()},getValue(){return r.value}};return $e(be(),"SMUIListItem:mount",z),()=>{$e(be(),"SMUIListItem:unmount",z)}}),gn(()=>{F&&window.cancelAnimationFrame(F)});function Q(z){return z in v?v[z]:be().classList.contains(z)}function Ee(z){v[z]||n(15,v[z]=!0,v)}function re(z){(!(z in v)||v[z])&&n(15,v[z]=!1,v)}function Fe(z,pe){j[z]!=pe&&(pe===""||pe==null?(delete j[z],n(16,j)):n(16,j[z]=pe,j))}function ge(z){var pe;return z in A?(pe=A[z])!==null&&pe!==void 0?pe:null:be().getAttribute(z)}function st(z,pe){A[z]!==pe&&n(17,A[z]=pe,A)}function x(z){(!(z in A)||A[z]!=null)&&n(17,A[z]=void 0,A)}function H(){let z=!0,pe=I.getElement();for(;pe.nextElementSibling;)if(pe=pe.nextElementSibling,pe.nodeType===1&&pe.classList.contains("mdc-deprecated-list-item")){const We=pe.attributes.getNamedItem("tabindex");if(We&&We.value==="0"){z=!1;break}}z&&n(18,i=0)}function Ae(z){k||$e(be(),"SMUI:action",z)}function le(z){const pe=z.key==="Enter",We=z.key==="Space";(pe||We)&&Ae(z)}function q(z){("_smui_checkbox_accessor"in z.detail||"_smui_radio_accessor"in z.detail)&&n(13,V=z.detail)}function U(){var z,pe,We;const it=be(),Ye=it.querySelector(".mdc-deprecated-list-item__primary-text");if(Ye)return(z=Ye.textContent)!==null&&z!==void 0?z:"";const Vt=it.querySelector(".mdc-deprecated-list-item__text");return Vt?(pe=Vt.textContent)!==null&&pe!==void 0?pe:"":(We=it.textContent)!==null&&We!==void 0?We:""}function be(){return I.getElement()}function lt(z){ie[z?"unshift":"push"](()=>{I=z,n(14,I)})}const kt=()=>n(13,V=void 0);return t.$$set=z=>{e=D(D({},e),ke(z)),n(27,r=J(e,s)),"use"in z&&n(1,f=z.use),"class"in z&&n(2,h=z.class),"style"in z&&n(3,m=z.style),"color"in z&&n(4,g=z.color),"nonInteractive"in z&&n(5,p=z.nonInteractive),"ripple"in z&&n(6,b=z.ripple),"activated"in z&&n(7,E=z.activated),"role"in z&&n(8,S=z.role),"selected"in z&&n(0,O=z.selected),"disabled"in z&&n(9,k=z.disabled),"skipRestoreFocus"in z&&n(10,R=z.skipRestoreFocus),"tabindex"in z&&n(28,y=z.tabindex),"inputId"in z&&n(29,T=z.inputId),"href"in z&&n(11,M=z.href),"component"in z&&n(12,G=z.component),"$$scope"in z&&n(35,o=z.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=d(y)?!p&&!k&&(O||V&&V.checked)?0:-1:y)},[O,f,h,m,g,p,b,E,S,k,R,M,G,V,I,v,j,A,i,c,K,Ee,re,Fe,Ae,le,q,r,y,T,U,be,a,lt,kt,o]}class _y extends De{constructor(e){super();Re(this,e,gy,my,Oe,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}var Vw=It({class:"mdc-deprecated-list-item__text",component:Qn});It({class:"mdc-deprecated-list-item__primary-text",component:Qn});It({class:"mdc-deprecated-list-item__secondary-text",component:Qn});function yy(t){let e,n,i,s,r,a;const o=t[8].default,l=de(o,t,t[7],null);let c=[{class:n=ee({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("span"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[9](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[3].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&128)&&he(l,o,d,d[7],s?fe(o,d[7],f,null):me(d[7]),null),Z(e,u=ae(c,[(!s||f&2&&n!==(n=ee({[d[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":d[4]})))&&{class:n},f&32&&d[5]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(L(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[9](null),r=!1,Xe(a)}}}function Iy(t,e,n){const i=["use","class","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,u,d=gt("SMUI:list:graphic:menu-selection-group");function f(){return u}function h(m){ie[m?"unshift":"push"](()=>{u=m,n(2,u)})}return t.$$set=m=>{e=D(D({},e),ke(m)),n(5,s=J(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"$$scope"in m&&n(7,a=m.$$scope)},[l,c,u,o,d,s,f,a,r,h]}class vy extends De{constructor(e){super();Re(this,e,Iy,yy,Oe,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}It({class:"mdc-deprecated-list-item__meta",component:Qn});It({class:"mdc-deprecated-list-group",component:_n});It({class:"mdc-deprecated-list-group__subheader",component:X_});const by=_y,Ey=vy;function Ay(t){let e,n,i,s,r,a;const o=t[12].default,l=de(o,t,t[11],null);let c=[{class:n=ee({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":t[2]==="raised","smui-paper--unelevated":t[2]==="unelevated","smui-paper--outlined":t[2]==="outlined",["smui-paper--elevation-z"+t[5]]:t[5]!==0&&t[2]==="raised","smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:t[4]!=="default","smui-paper-transition":t[6]})},t[9]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("div"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[13](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[8].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&2048)&&he(l,o,d,d[11],s?fe(o,d[11],f,null):me(d[11]),null),Z(e,u=ae(c,[(!s||f&126&&n!==(n=ee({[d[1]]:!0,"smui-paper":!0,"smui-paper--raised":d[2]==="raised","smui-paper--unelevated":d[2]==="unelevated","smui-paper--outlined":d[2]==="outlined",["smui-paper--elevation-z"+d[5]]:d[5]!==0&&d[2]==="raised","smui-paper--rounded":!d[3],["smui-paper--color-"+d[4]]:d[4]!=="default","smui-paper-transition":d[6]})))&&{class:n},f&512&&d[9]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(L(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[13](null),r=!1,Xe(a)}}}function Ty(t,e,n){const i=["use","class","variant","square","color","elevation","transition","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{square:d=!1}=e,{color:f="default"}=e,{elevation:h=1}=e,{transition:m=!1}=e,g;function p(){return g}function b(E){ie[E?"unshift":"push"](()=>{g=E,n(7,g)})}return t.$$set=E=>{e=D(D({},e),ke(E)),n(9,s=J(e,i)),"use"in E&&n(0,l=E.use),"class"in E&&n(1,c=E.class),"variant"in E&&n(2,u=E.variant),"square"in E&&n(3,d=E.square),"color"in E&&n(4,f=E.color),"elevation"in E&&n(5,h=E.elevation),"transition"in E&&n(6,m=E.transition),"$$scope"in E&&n(11,a=E.$$scope)},[l,c,u,d,f,h,m,g,o,s,p,a,r,b]}class Bw extends De{constructor(e){super();Re(this,e,Ty,Ay,Oe,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}var Hw=It({class:"smui-paper__content",component:_n}),jw=It({class:"smui-paper__title",component:Y_}),qw=It({class:"smui-paper__subtitle",component:J_});/**
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
 */const Sy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cy=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],a=t[n++],o=t[n++],l=((s&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],a=s+1<t.length,o=a?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|o>>4;let f=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(f=64)),i.push(n[u],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||o==null||c==null||d==null)throw Error();const f=r<<2|o>>4;if(i.push(f),c!==64){const h=o<<4&240|c>>2;if(i.push(h),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Oy=function(t){try{return wy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ly{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Pt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Hc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ky(){return Pt().indexOf("Electron/")>=0}function qc(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ry(){return Pt().indexOf("MSAppHost/")>=0}function Dy(){return typeof indexedDB=="object"}function My(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Ny(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Py="FirebaseError";class hi extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Py,Object.setPrototypeOf(this,hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Fy(r,i):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new hi(s,o,i)}}function Fy(t,e){return t.replace(Uy,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Uy=/\{\$([^}]+)}/g;function Vy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],a=e[s];if(zc(r)&&zc(a)){if(!Rr(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function zc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ss(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function By(t,e){const n=new Hy(t,e);return n.subscribe.bind(n)}class Hy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");jy(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ka),s.error===void 0&&(s.error=Ka),s.complete===void 0&&(s.complete=Ka);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class qy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ly;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gy(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);i===o&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zy(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zy(t){return t===pi?void 0:t}function Gy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ky{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ot;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ot||(ot={}));const Wy={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},Xy=ot.INFO,Yy={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},Jy=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Yy[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=Xy,this._logHandler=Jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...e),this._logHandler(this,ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...e),this._logHandler(this,ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...e),this._logHandler(this,ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...e),this._logHandler(this,ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...e),this._logHandler(this,ot.ERROR,...e)}}/**
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
 */class Qy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zy(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Zy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Gc="0.7.11";/**
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
 */const Ya=new Wa("@firebase/app"),xy="@firebase/app-compat",$y="@firebase/analytics-compat",eI="@firebase/analytics",tI="@firebase/app-check-compat",nI="@firebase/app-check",iI="@firebase/auth",sI="@firebase/auth-compat",rI="@firebase/database",oI="@firebase/database-compat",aI="@firebase/functions",lI="@firebase/functions-compat",uI="@firebase/installations",cI="@firebase/installations-compat",dI="@firebase/messaging",fI="@firebase/messaging-compat",hI="@firebase/performance",mI="@firebase/performance-compat",pI="@firebase/remote-config",gI="@firebase/remote-config-compat",_I="@firebase/storage",yI="@firebase/storage-compat",II="@firebase/firestore",vI="@firebase/firestore-compat",bI="firebase",EI="9.6.1";/**
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
 */const Kc="[DEFAULT]",AI={[Xa]:"fire-core",[xy]:"fire-core-compat",[eI]:"fire-analytics",[$y]:"fire-analytics-compat",[nI]:"fire-app-check",[tI]:"fire-app-check-compat",[iI]:"fire-auth",[sI]:"fire-auth-compat",[rI]:"fire-rtdb",[oI]:"fire-rtdb-compat",[aI]:"fire-fn",[lI]:"fire-fn-compat",[uI]:"fire-iid",[cI]:"fire-iid-compat",[dI]:"fire-fcm",[fI]:"fire-fcm-compat",[hI]:"fire-perf",[mI]:"fire-perf-compat",[pI]:"fire-rc",[gI]:"fire-rc-compat",[_I]:"fire-gcs",[yI]:"fire-gcs-compat",[II]:"fire-fst",[vI]:"fire-fst-compat","fire-js":"fire-js",[bI]:"fire-js-all"};/**
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
 */const Dr=new Map,Ja=new Map;function TI(t,e){try{t.container.addComponent(e)}catch(n){Ya.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Ja.has(e))return Ya.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,t);for(const n of Dr.values())TI(n,t);return!0}function Xi(t,e){return t.container.getProvider(e)}/**
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
 */const SI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Mr=new mi("app","Firebase",SI);/**
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
 */class CI{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=EI;function zw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});const s=Dr.get(i);if(s){if(Rr(t,s.options)&&Rr(n,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const r=new Ky(i);for(const o of Ja.values())r.addComponent(o);const a=new CI(t,n,r);return Dr.set(i,a),a}function Qa(t=Kc){const e=Dr.get(t);if(!e)throw Mr.create("no-app",{appName:t});return e}function hn(t,e,n){var i;let s=(i=AI[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ya.warn(o.join(" "));return}Mn(new An(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function wI(t){Mn(new An("platform-logger",e=>new Qy(e),"PRIVATE")),hn(Xa,Gc,t),hn(Xa,Gc,"esm2017"),hn("fire-js","")}wI("");var OI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},se,Za=Za||{},Ce=OI||self;function Nr(){}function xa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LI(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++kI)}var $a="closure_uid_"+(1e9*Math.random()>>>0),kI=0;function RI(t,e,n){return t.call.apply(t.bind,arguments)}function DI(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ht=RI:Ht=DI,Ht.apply(null,arguments)}function Pr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function jt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[s].apply(i,a)}}function Zn(){this.s=this.s,this.o=this.o}var MI=0,NI={};Zn.prototype.s=!1;Zn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),MI!=0)){var t=LI(this);delete NI[t]}};Zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Xc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function PI(t){e:{var e=Cv;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Yc(t){return Array.prototype.concat.apply([],arguments)}function el(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Fr(t){return/^[\s\xa0]*$/.test(t)}var Jc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $t(t,e){return t.indexOf(e)!=-1}function tl(t,e){return t<e?-1:t>e?1:0}var en;e:{var Qc=Ce.navigator;if(Qc){var Zc=Qc.userAgent;if(Zc){en=Zc;break e}}en=""}function nl(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function xc(t){const e={};for(const n in t)e[n]=t[n];return e}var $c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ed(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<$c.length;r++)n=$c[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function il(t){return il[" "](t),t}il[" "]=Nr;function FI(t){var e=BI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var UI=$t(en,"Opera"),Yi=$t(en,"Trident")||$t(en,"MSIE"),td=$t(en,"Edge"),sl=td||Yi,nd=$t(en,"Gecko")&&!($t(en.toLowerCase(),"webkit")&&!$t(en,"Edge"))&&!($t(en,"Trident")||$t(en,"MSIE"))&&!$t(en,"Edge"),VI=$t(en.toLowerCase(),"webkit")&&!$t(en,"Edge");function id(){var t=Ce.document;return t?t.documentMode:void 0}var Ur;e:{var rl="",ol=function(){var t=en;if(nd)return/rv:([^\);]+)(\)|;)/.exec(t);if(td)return/Edge\/([\d\.]+)/.exec(t);if(Yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VI)return/WebKit\/(\S+)/.exec(t);if(UI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ol&&(rl=ol?ol[1]:""),Yi){var al=id();if(al!=null&&al>parseFloat(rl)){Ur=String(al);break e}}Ur=rl}var BI={};function HI(){return FI(function(){let t=0;const e=Jc(String(Ur)).split("."),n=Jc("9").split("."),i=Math.max(e.length,n.length);for(let a=0;t==0&&a<i;a++){var s=e[a]||"",r=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=tl(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||tl(s[2].length==0,r[2].length==0)||tl(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var ll;if(Ce.document&&Yi){var sd=id();ll=sd||parseInt(Ur,10)||void 0}else ll=void 0;var jI=ll,qI=function(){if(!Ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ce.addEventListener("test",Nr,e),Ce.removeEventListener("test",Nr,e)}catch{}return t}();function Kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};function Os(t,e){if(Kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nd){e:{try{il(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Os.Z.h.call(this)}}jt(Os,Kt);var zI={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),GI=0;function KI(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++GI,this.ca=this.fa=!1}function Vr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Br(t){this.src=t,this.g={},this.h=0}Br.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var a=cl(t,e,i,s);return-1<a?(e=t[a],n||(e.fa=!1)):(e=new KI(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function ul(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Wc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Vr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cl(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var dl="closure_lm_"+(1e6*Math.random()|0),fl={};function rd(t,e,n,i,s){if(i&&i.once)return ad(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)rd(t,e[r],n,i,s);return null}return n=gl(n),t&&t[Ls]?t.N(e,n,ws(i)?!!i.capture:!!i,s):od(t,e,n,!1,i,s)}function od(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var a=ws(s)?!!s.capture:!!s,o=ml(t);if(o||(t[dl]=o=new Br(t)),n=o.add(e,n,i,a,r),n.proxy)return n;if(i=WI(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)qI||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(ud(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WI(){function t(n){return e.call(t.src,t.listener,n)}var e=XI;return t}function ad(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ad(t,e[r],n,i,s);return null}return n=gl(n),t&&t[Ls]?t.O(e,n,ws(i)?!!i.capture:!!i,s):od(t,e,n,!0,i,s)}function ld(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ld(t,e[r],n,i,s);else i=ws(i)?!!i.capture:!!i,n=gl(n),t&&t[Ls]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=cl(r,n,i,s),-1<n&&(Vr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ml(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cl(e,n,i,s)),(n=-1<t?e[t]:null)&&hl(n))}function hl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ls])ul(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ud(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ml(e))?(ul(n,t),n.h==0&&(n.src=null,e[dl]=null)):Vr(t)}}}function ud(t){return t in fl?fl[t]:fl[t]="on"+t}function XI(t,e){if(t.ca)t=!0;else{e=new Os(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&hl(t),t=n.call(i,e)}return t}function ml(t){return t=t[dl],t instanceof Br?t:null}var pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function gl(t){return typeof t=="function"?t:(t[pl]||(t[pl]=function(e){return t.handleEvent(e)}),t[pl])}function Ft(){Zn.call(this),this.i=new Br(this),this.P=this,this.I=null}jt(Ft,Zn);Ft.prototype[Ls]=!0;Ft.prototype.removeEventListener=function(t,e,n,i){ld(this,t,e,n,i)};function qt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Kt(e,t);else if(e instanceof Kt)e.target=e.target||t;else{var s=e;e=new Kt(i,t),ed(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var a=e.g=n[r];s=Hr(a,i,!0,e)&&s}if(a=e.g=t,s=Hr(a,i,!0,e)&&s,s=Hr(a,i,!1,e)&&s,n)for(r=0;r<n.length;r++)a=e.g=n[r],s=Hr(a,i,!1,e)&&s}Ft.prototype.M=function(){if(Ft.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Vr(n[i]);delete t.g[e],t.h--}}this.I=null};Ft.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ft.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Hr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ca&&a.capture==n){var o=a.listener,l=a.ia||a.src;a.fa&&ul(t.i,a),s=o.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var _l=Ce.JSON.stringify;function YI(){var t=dd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JI{constructor(){this.h=this.g=null}add(e,n){const i=cd.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var cd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QI,t=>t.reset());class QI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZI(t){Ce.setTimeout(()=>{throw t},0)}function yl(t,e){Il||xI(),vl||(Il(),vl=!0),dd.add(t,e)}var Il;function xI(){var t=Ce.Promise.resolve(void 0);Il=function(){t.then($I)}}var vl=!1,dd=new JI;function $I(){for(var t;t=YI();){try{t.h.call(t.g)}catch(n){ZI(n)}var e=cd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vl=!1}function jr(t,e){Ft.call(this),this.h=t||1,this.g=e||Ce,this.j=Ht(this.kb,this),this.l=Date.now()}jt(jr,Ft);se=jr.prototype;se.da=!1;se.S=null;se.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qt(this,"tick"),this.da&&(bl(this),this.start()))}};se.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}se.M=function(){jr.Z.M.call(this),bl(this),delete this.g};function El(t,e,n){if(typeof t=="function")n&&(t=Ht(t,n));else if(t&&typeof t.handleEvent=="function")t=Ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ce.setTimeout(t,e||0)}function fd(t){t.g=El(()=>{t.g=null,t.i&&(t.i=!1,fd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ev extends Zn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fd(this)}M(){super.M(),this.g&&(Ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Zn.call(this),this.h=t,this.g={}}jt(ks,Zn);var hd=[];function md(t,e,n,i){Array.isArray(n)||(n&&(hd[0]=n.toString()),n=hd);for(var s=0;s<n.length;s++){var r=rd(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function pd(t){nl(t.g,function(e,n){this.g.hasOwnProperty(n)&&hl(e)},t),t.g={}}ks.prototype.M=function(){ks.Z.M.call(this),pd(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qr(){this.g=!0}qr.prototype.Aa=function(){this.g=!1};function tv(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var a="",o=r.split("&"),l=0;l<o.length;l++){var c=o[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");a=2<=d.length&&d[1]=="type"?a+(u+"="+c+"&"):a+(u+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+a})}function nv(t,e,n,i,s,r,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+a})}function Ji(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sv(t,n)+(i?" "+i:"")})}function iv(t,e){t.info(function(){return"TIMEOUT: "+e})}qr.prototype.info=function(){};function sv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return _l(n)}catch{return e}}var gi={},gd=null;function zr(){return gd=gd||new Ft}gi.Ma="serverreachability";function _d(t){Kt.call(this,gi.Ma,t)}jt(_d,Kt);function Rs(t){const e=zr();qt(e,new _d(e,t))}gi.STAT_EVENT="statevent";function yd(t,e){Kt.call(this,gi.STAT_EVENT,t),this.stat=e}jt(yd,Kt);function tn(t){const e=zr();qt(e,new yd(e,t))}gi.Na="timingevent";function Id(t,e){Kt.call(this,gi.Na,t),this.size=e}jt(Id,Kt);function Ds(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ce.setTimeout(function(){t()},e)}var Gr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Al(){}Al.prototype.h=null;function bd(t){return t.h||(t.h=t.i())}function Ed(){}var Ms={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tl(){Kt.call(this,"d")}jt(Tl,Kt);function Sl(){Kt.call(this,"c")}jt(Sl,Kt);var Cl;function Kr(){}jt(Kr,Al);Kr.prototype.g=function(){return new XMLHttpRequest};Kr.prototype.i=function(){return{}};Cl=new Kr;function Ns(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ks(this),this.P=rv,t=sl?125:void 0,this.W=new jr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var rv=45e3,wl={},Wr={};se=Ns.prototype;se.setTimeout=function(t){this.P=t};function Ol(t,e,n){t.K=1,t.v=Zr(Nn(e)),t.s=n,t.U=!0,Td(t,null)}function Td(t,e){t.F=Date.now(),Ps(t),t.A=Nn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Md(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ad,t.g=nf(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ev(Ht(t.Ia,t,t.g),t.O)),md(t.V,t.g,"readystatechange",t.gb),e=t.H?xc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Rs(1),tv(t.j,t.u,t.A,t.m,t.X,t.s)}se.gb=function(t){t=t.target;const e=this.L;e&&Pn(t)==3?e.l():this.Ia(t)};se.Ia=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||sl||this.g&&(this.h.h||this.g.ga()||Kd(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Rs(3):Rs(2)),Xr(this);var n=this.g.ba();this.N=n;t:if(Sd(this)){var i=Kd(this.g);t="";var s=i.length,r=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){_i(this),Fs(this);var a="";break t}this.h.i=new Ce.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=n==200,nv(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(o)){var c=o;break t}}c=null}if(n=c)Ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ll(this,n);else{this.i=!1,this.o=3,tn(12),_i(this),Fs(this);break e}}this.U?(Cd(this,u,a),sl&&this.i&&u==3&&(md(this.V,this.W,"tick",this.fb),this.W.start())):(Ji(this.j,this.m,a,null),Ll(this,a)),u==4&&_i(this),this.i&&!this.I&&(u==4?xd(this.l,this):(this.i=!1,Ps(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),_i(this),Fs(this)}}}catch{}finally{}};function Sd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Cd(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ov(t,n),s==Wr){e==4&&(t.o=4,tn(14),i=!1),Ji(t.j,t.m,null,"[Incomplete Response]");break}else if(s==wl){t.o=4,tn(15),Ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ji(t.j,t.m,s,null),Ll(t,s);Sd(t)&&s!=Wr&&s!=wl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hl(e),e.L=!0,tn(11))):(Ji(t.j,t.m,n,"[Invalid Chunked Response]"),_i(t),Fs(t))}se.fb=function(){if(this.g){var t=Pn(this.g),e=this.g.ga();this.C<e.length&&(Xr(this),Cd(this,t,e),this.i&&t!=4&&Ps(this))}};function ov(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Wr:(n=Number(e.substring(n,i)),isNaN(n)?wl:(i+=1,i+n>e.length?Wr:(e=e.substr(i,n),t.C=i+n,e)))}se.cancel=function(){this.I=!0,_i(this)};function Ps(t){t.Y=Date.now()+t.P,wd(t,t.P)}function wd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ds(Ht(t.eb,t),e)}function Xr(t){t.B&&(Ce.clearTimeout(t.B),t.B=null)}se.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(iv(this.j,this.A),this.K!=2&&(Rs(3),tn(17)),_i(this),this.o=2,Fs(this)):wd(this,this.Y-t)};function Fs(t){t.l.G==0||t.I||xd(t.l,t)}function _i(t){Xr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bl(t.W),pd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ll(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Dl(n.i,t))){if(n.I=t.N,!t.J&&Dl(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)io(n),to(n);else break e;Bl(n),tn(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ds(Ht(n.ab,n),6e3));if(1>=Fd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else vi(n,11)}else if((t.J||n.g==t)&&io(n),!Fr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const m=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&($t(m,"spdy")||$t(m,"quic")||$t(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ml(r,r.h),r.h=null))}if(i.D){const g=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,vt(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var a=t;if(i.oa=tf(i,i.H?i.la:null,i.W),a.J){Ud(i.i,a);var o=a,l=i.K;l&&o.setTimeout(l),o.B&&(Xr(o),Ps(o)),i.g=a}else Qd(i);0<n.l.length&&no(n)}else c[0]!="stop"&&c[0]!="close"||vi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?vi(n,7):Ul(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Rs(4)}catch{}}function av(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(xa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function kl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xa(t)||typeof t=="string")Xc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(xa(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=av(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Qi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Qi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}se=Qi.prototype;se.R=function(){Rl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};se.T=function(){return Rl(this),this.g.concat()};function Rl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];yi(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],yi(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}se.get=function(t,e){return yi(this.h,t)?this.h[t]:e};se.set=function(t,e){yi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};se.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function yi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Od=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ii(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ii){this.g=e!==void 0?e:t.g,Yr(this,t.j),this.s=t.s,Jr(this,t.i),Qr(this,t.m),this.l=t.l,e=t.h;var n=new Bs;n.i=e.i,e.g&&(n.g=new Qi(e.g),n.h=e.h),Ld(this,n),this.o=t.o}else t&&(n=String(t).match(Od))?(this.g=!!e,Yr(this,n[1]||"",!0),this.s=Us(n[2]||""),Jr(this,n[3]||"",!0),Qr(this,n[4]),this.l=Us(n[5]||"",!0),Ld(this,n[6]||"",!0),this.o=Us(n[7]||"")):(this.g=!!e,this.h=new Bs(null,this.g))}Ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,kd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,kd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?hv:fv,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,pv)),t.join("")};function Nn(t){return new Ii(t)}function Yr(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jr(t,e,n){t.i=n?Us(e,!0):e}function Qr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ld(t,e,n){e instanceof Bs?(t.h=e,gv(t.h,t.g)):(n||(e=Vs(e,mv)),t.h=new Bs(e,t.g))}function vt(t,e,n){t.h.set(e,n)}function Zr(t){return vt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function uv(t){return t instanceof Ii?Nn(t):new Ii(t,void 0)}function cv(t,e,n,i){var s=new Ii(null,void 0);return t&&Yr(s,t),e&&Jr(s,e),n&&Qr(s,n),i&&(s.l=i),s}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kd=/[#\/\?@]/g,fv=/[#\?:]/g,hv=/[#\?]/g,mv=/[#\?@]/g,pv=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Qi,t.h=0,t.i&&lv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}se=Bs.prototype;se.add=function(t,e){xn(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rd(t,e){xn(t),e=Zi(t,e),yi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,yi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Rl(t)))}function Dd(t,e){return xn(t),e=Zi(t,e),yi(t.g.h,e)}se.forEach=function(t,e){xn(this),this.g.forEach(function(n,i){Xc(n,function(s){t.call(e,s,i,this)},this)},this)};se.T=function(){xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};se.R=function(t){xn(this);var e=[];if(typeof t=="string")Dd(this,t)&&(e=Yc(e,this.g.get(Zi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Yc(e,t[n])}return e};se.set=function(t,e){return xn(this),this.i=null,t=Zi(this,t),Dd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};se.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Md(t,e,n){Rd(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),el(n)),t.h+=n.length)}se.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var a=s;i[r]!==""&&(a+="="+encodeURIComponent(String(i[r]))),t.push(a)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gv(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Rd(this,i),Md(this,s,n))},t)),t.j=e}var _v=class{constructor(t,e){this.h=t,this.g=e}};function Nd(t){this.l=t||yv,Ce.PerformanceNavigationTiming?(t=Ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ce.g&&Ce.g.Ea&&Ce.g.Ea()&&Ce.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yv=10;function Pd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fd(t){return t.h?1:t.g?t.g.size:0}function Dl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ml(t,e){t.g?t.g.add(e):t.h=e}function Ud(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nd.prototype.cancel=function(){if(this.i=Vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Vd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return el(t.i)}function Nl(){}Nl.prototype.stringify=function(t){return Ce.JSON.stringify(t,void 0)};Nl.prototype.parse=function(t){return Ce.JSON.parse(t,void 0)};function Iv(){this.g=new Nl}function vv(t,e,n){const i=n||"";try{kl(t,function(s,r){let a=s;ws(s)&&(a=_l(s)),e.push(i+r+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function bv(t,e){const n=new qr;if(Ce.Image){const i=new Image;i.onload=Pr(xr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Pr(xr,n,i,"TestLoadImage: error",!1,e),i.onabort=Pr(xr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Pr(xr,n,i,"TestLoadImage: timeout",!1,e),Ce.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function xr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Hs(t){this.l=t.$b||null,this.j=t.ib||!1}jt(Hs,Al);Hs.prototype.g=function(){return new $r(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function $r(t,e){Ft.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}jt($r,Ft);var Pl=0;se=$r.prototype;se.open=function(t,e){if(this.readyState!=Pl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)};se.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ce).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};se.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=Pl};se.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Ce.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Bd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}se.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):qs(this),this.readyState==3&&Bd(this)}};se.Ua=function(t){this.g&&(this.response=this.responseText=t,js(this))};se.Ta=function(t){this.g&&(this.response=t,js(this))};se.ha=function(){this.g&&js(this)};function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}se.setRequestHeader=function(t,e){this.v.append(t,e)};se.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};se.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ev=Ce.JSON.parse;function wt(t){Ft.call(this),this.headers=new Qi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hd,this.K=this.L=!1}jt(wt,Ft);var Hd="",Av=/^https?$/i,Tv=["POST","PUT"];se=wt.prototype;se.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cl.g(),this.C=this.u?bd(this.u):bd(Cl),this.g.onreadystatechange=Ht(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){jd(this,r);return}t=n||"";const s=new Qi(this.headers);i&&kl(i,function(r,a){s.set(a,r)}),i=PI(s.T()),n=Ce.FormData&&t instanceof Ce.FormData,!(0<=Wc(Tv,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,a){this.g.setRequestHeader(a,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gd(this),0<this.B&&((this.K=Sv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ht(this.pa,this)):this.A=El(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){jd(this,r)}};function Sv(t){return Yi&&HI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Cv(t){return t.toLowerCase()=="content-type"}se.pa=function(){typeof Za!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qt(this,"timeout"),this.abort(8))};function jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qd(t),eo(t)}function qd(t){t.D||(t.D=!0,qt(t,"complete"),qt(t,"error"))}se.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qt(this,"complete"),qt(this,"abort"),eo(this))};se.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eo(this,!0)),wt.Z.M.call(this)};se.Fa=function(){this.s||(this.F||this.v||this.l?zd(this):this.cb())};se.cb=function(){zd(this)};function zd(t){if(t.h&&typeof Za!="undefined"&&(!t.C[1]||Pn(t)!=4||t.ba()!=2)){if(t.v&&Pn(t)==4)El(t.Fa,0,t);else if(qt(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.H).match(Od)[1]||null;if(!s&&Ce.self&&Ce.self.location){var r=Ce.self.location.protocol;s=r.substr(0,r.length-1)}i=!Av.test(s?s.toLowerCase():"")}n=i}if(n)qt(t,"complete"),qt(t,"success");else{t.m=6;try{var a=2<Pn(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.ba()+"]",qd(t)}}finally{eo(t)}}}}function eo(t,e){if(t.g){Gd(t);const n=t.g,i=t.C[0]?Nr:null;t.g=null,t.C=null,e||qt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Gd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ce.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}se.ba=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};se.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};se.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ev(e)}};function Kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}se.Da=function(){return this.m};se.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function wv(t){let e="";return nl(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Fl(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=wv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):vt(t,e,n))}function zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wd(t){this.za=0,this.l=[],this.h=new qr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=zs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=zs("baseRetryDelayMs",5e3,t),this.$a=zs("retryDelaySeedMs",1e4,t),this.Ya=zs("forwardChannelMaxRetries",2,t),this.ra=zs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Nd(t&&t.concurrentRequestLimit),this.Ca=new Iv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}se=Wd.prototype;se.ma=8;se.G=1;function Ul(t){if(Xd(t),t.G==3){var e=t.V++,n=Nn(t.F);vt(n,"SID",t.J),vt(n,"RID",e),vt(n,"TYPE","terminate"),Gs(t,n),e=new Ns(t,t.h,e,void 0),e.K=2,e.v=Zr(Nn(n)),n=!1,Ce.navigator&&Ce.navigator.sendBeacon&&(n=Ce.navigator.sendBeacon(e.v.toString(),"")),!n&&Ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=nf(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ps(e)}ef(t)}se.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function to(t){t.g&&(Hl(t),t.g.cancel(),t.g=null)}function Xd(t){to(t),t.u&&(Ce.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Ce.clearTimeout(t.m),t.m=null)}function Vl(t,e){t.l.push(new _v(t.Za++,e)),t.G==3&&no(t)}function no(t){Pd(t.i)||t.m||(t.m=!0,yl(t.Ha,t),t.C=0)}function Ov(t,e){return Fd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ds(Ht(t.Ha,t,e),$d(t,t.C)),t.C++,!0)}se.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ns(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=xc(r),ed(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jd(this,s,e),n=Nn(this.F),vt(n,"RID",t),vt(n,"CVER",22),this.D&&vt(n,"X-HTTP-Session-Id",this.D),Gs(this,n),this.o&&r&&Fl(n,this.o,r),Ml(this.i,s),this.Ra&&vt(n,"TYPE","init"),this.ja?(vt(n,"$req",e),vt(n,"SID","null"),s.$=!0,Ol(s,n,null)):Ol(s,n,e),this.G=2}}else this.G==3&&(t?Yd(this,t):this.l.length==0||Pd(this.i)||Yd(this))};function Yd(t,e){var n;e?n=e.m:n=t.V++;const i=Nn(t.F);vt(i,"SID",t.J),vt(i,"RID",n),vt(i,"AID",t.U),Gs(t,i),t.o&&t.s&&Fl(i,t.o,t.s),n=new Ns(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Jd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ml(t.i,n),Ol(n,i,e)}function Gs(t,e){t.j&&kl({},function(n,i){vt(e,i,n)})}function Jd(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Ht(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const a=["count="+n];r==-1?0<n?(r=s[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let o=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),o=!1;else try{vv(u,a,"req"+c+"_")}catch{i&&i(u)}}if(o){i=a.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Qd(t){t.g||t.u||(t.Y=1,yl(t.Ga,t),t.A=0)}function Bl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ds(Ht(t.Ga,t),$d(t,t.A)),t.A++,!0)}se.Ga=function(){if(this.u=null,Zd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ds(Ht(this.bb,this),t)}};se.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tn(10),to(this),Zd(this))};function Hl(t){t.B!=null&&(Ce.clearTimeout(t.B),t.B=null)}function Zd(t){t.g=new Ns(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Nn(t.oa);vt(e,"RID","rpc"),vt(e,"SID",t.J),vt(e,"CI",t.N?"0":"1"),vt(e,"AID",t.U),Gs(t,e),vt(e,"TYPE","xmlhttp"),t.o&&t.s&&Fl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Zr(Nn(e)),n.s=null,n.U=!0,Td(n,t)}se.ab=function(){this.v!=null&&(this.v=null,to(this),Bl(this),tn(19))};function io(t){t.v!=null&&(Ce.clearTimeout(t.v),t.v=null)}function xd(t,e){var n=null;if(t.g==e){io(t),Hl(t),t.g=null;var i=2}else if(Dl(t.i,e))n=e.D,Ud(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=zr(),qt(i,new Id(i,n,e,s)),no(t)}else Qd(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&Ov(t,e)||i==2&&Bl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function $d(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function vi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Ht(t.jb,t);n||(n=new Ii("//www.google.com/images/cleardot.gif"),Ce.location&&Ce.location.protocol=="http"||Yr(n,"https"),Zr(n)),bv(n.toString(),i)}else tn(2);t.G=0,t.j&&t.j.va(e),ef(t),Xd(t)}se.jb=function(t){t?(this.h.info("Successfully pinged google.com"),tn(2)):(this.h.info("Failed to ping google.com"),tn(1))};function ef(t){t.G=0,t.I=-1,t.j&&((Vd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,el(t.l),t.l.length=0),t.j.ua())}function tf(t,e,n){let i=uv(n);if(i.i!="")e&&Jr(i,e+"."+i.i),Qr(i,i.m);else{const s=Ce.location;i=cv(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&nl(t.aa,function(s,r){vt(i,r,s)}),e=t.D,n=t.sa,e&&n&&vt(i,e,n),vt(i,"VER",t.ma),Gs(t,i),i}function nf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new wt(new Hs({ib:!0})):new wt(t.qa),e.L=t.H,e}function sf(){}se=sf.prototype;se.xa=function(){};se.wa=function(){};se.va=function(){};se.ua=function(){};se.Oa=function(){};function so(){if(Yi&&!(10<=Number(jI)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(t,e){return new dn(t,e)};function dn(t,e){Ft.call(this),this.g=new Wd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xi(this)}jt(dn,Ft);dn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),yl(Ht(t.hb,t,e))),tn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=tf(t,null,t.W),no(t)};dn.prototype.close=function(){Ul(this.g)};dn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Vl(this.g,e)}else this.v?(e={},e.__data__=_l(t),Vl(this.g,e)):Vl(this.g,t)};dn.prototype.M=function(){this.g.j=null,delete this.j,Ul(this.g),delete this.g,dn.Z.M.call(this)};function rf(t){Tl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}jt(rf,Tl);function of(){Sl.call(this),this.status=1}jt(of,Sl);function xi(t){this.g=t}jt(xi,sf);xi.prototype.xa=function(){qt(this.g,"a")};xi.prototype.wa=function(t){qt(this.g,new rf(t))};xi.prototype.va=function(t){qt(this.g,new of(t))};xi.prototype.ua=function(){qt(this.g,"b")};so.prototype.createWebChannel=so.prototype.g;dn.prototype.send=dn.prototype.u;dn.prototype.open=dn.prototype.m;dn.prototype.close=dn.prototype.close;Gr.NO_ERROR=0;Gr.TIMEOUT=8;Gr.HTTP_ERROR=6;vd.COMPLETE="complete";Ed.EventType=Ms;Ms.OPEN="a";Ms.CLOSE="b";Ms.ERROR="c";Ms.MESSAGE="d";Ft.prototype.listen=Ft.prototype.N;wt.prototype.listenOnce=wt.prototype.O;wt.prototype.getLastError=wt.prototype.La;wt.prototype.getLastErrorCode=wt.prototype.Da;wt.prototype.getStatus=wt.prototype.ba;wt.prototype.getResponseJson=wt.prototype.Qa;wt.prototype.getResponseText=wt.prototype.ga;wt.prototype.send=wt.prototype.ea;var Lv=function(){return new so},kv=function(){return zr()},jl=Gr,Rv=vd,Dv=gi,af={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mv=Hs,ro=Ed,Nv=wt;const lf="@firebase/firestore";/**
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
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
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
 */let $i="9.6.1";/**
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
 */const bi=new Wa("@firebase/firestore");function uf(){return bi.logLevel}function _e(t,...e){if(bi.logLevel<=ot.DEBUG){const n=e.map(ql);bi.debug(`Firestore (${$i}): ${t}`,...n)}}function $n(t,...e){if(bi.logLevel<=ot.ERROR){const n=e.map(ql);bi.error(`Firestore (${$i}): ${t}`,...n)}}function cf(t,...e){if(bi.logLevel<=ot.WARN){const n=e.map(ql);bi.warn(`Firestore (${$i}): ${t}`,...n)}}function ql(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ne(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function pt(t,e){t||Ne()}function Pe(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Pv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(on.UNAUTHENTICATED))}shutdown(){}}class Uv{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ei,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},o=l=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ei)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pt(typeof i.accessToken=="string"),new Pv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string"),new on(e)}}class Vv{constructor(e,n,i){this.type="FirstParty",this.user=on.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Bv{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Vv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jv{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(r=>(r.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),n(r.token)))(s))};const i=s=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pt(typeof n.token=="string"),new Hv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class zl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.p(i),this.T=i=>n.writeSequenceNumber(i))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function qv(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */zl.I=-1;class df{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=qv(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ct(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class fn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ve(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ve(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ve(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fn.fromMillis(Date.now())}static fromDate(e){return fn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new fn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ct(this.nanoseconds,e.nanoseconds):ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class at{constructor(e){this.timestamp=e}static fromTimestamp(e){return new at(e)}static min(){return new at(new fn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ks{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ne(),i===void 0?i=e.length-n:i>e.length-n&&Ne(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),a=n.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class bt extends Ks{construct(e,n,i){return new bt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const zv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Ks{construct(e,n,i){return new an(e,n,i)}static isValidIdentifier(e){return zv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new an(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ve(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new ve(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ve(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(i+=o,s++):(r(),s++)}if(r(),a)throw new ve(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(n)}static emptyPath(){return new an([])}}/**
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
 */class Gl{constructor(e){this.fields=e,e.sort(an.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Wt(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const Gv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(pt(!!t),typeof t=="string"){let e=0;const n=Gv.exec(t);if(pt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ot(t.seconds),nanos:Ot(t.nanos)}}function Ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
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
 */function mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pf(t){const e=t.mapValue.fields.__previous_value__;return mf(e)?pf(e):e}function Ws(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new fn(e.seconds,e.nanos)}/**
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
 */function is(t){return t==null}function oo(t){return t===0&&1/t==-1/0}function Kv(t){return typeof t=="number"&&Number.isInteger(t)&&!oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(bt.fromString(e))}static fromName(e){return new we(bt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new bt(e.slice()))}}/**
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
 */function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mf(t)?4:10:Ne()}function Tn(t,e){const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=ti(i.timestampValue),a=ti(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ns(i.bytesValue).isEqual(ns(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ot(i.geoPointValue.latitude)===Ot(s.geoPointValue.latitude)&&Ot(i.geoPointValue.longitude)===Ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ot(i.integerValue)===Ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ot(i.doubleValue),a=Ot(s.doubleValue);return r===a?oo(r)===oo(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(i,s){const r=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ff(r)!==ff(a))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(a[o]===void 0||!Tn(r[o],a[o])))return!1;return!0}(t,e);default:return Ne()}}function Xs(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function ss(t,e){const n=Ei(t),i=Ei(e);if(n!==i)return ct(n,i);switch(n){case 0:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(s,r){const a=Ot(s.integerValue||s.doubleValue),o=Ot(r.integerValue||r.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(Ws(t),Ws(e));case 5:return ct(t.stringValue,e.stringValue);case 6:return function(s,r){const a=ns(s),o=ns(r);return a.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const a=s.split("/"),o=r.split("/");for(let l=0;l<a.length&&l<o.length;l++){const c=ct(a[l],o[l]);if(c!==0)return c}return ct(a.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const a=ct(Ot(s.latitude),Ot(r.latitude));return a!==0?a:ct(Ot(s.longitude),Ot(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const a=s.values||[],o=r.values||[];for(let l=0;l<a.length&&l<o.length;++l){const c=ss(a[l],o[l]);if(c)return c}return ct(a.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const a=s.fields||{},o=Object.keys(a),l=r.fields||{},c=Object.keys(l);o.sort(),c.sort();for(let u=0;u<o.length&&u<c.length;++u){const d=ct(o[u],c[u]);if(d!==0)return d;const f=ss(a[o[u]],l[c[u]]);if(f!==0)return f}return ct(o.length,c.length)}(t.mapValue,e.mapValue);default:throw Ne()}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ct(t,e);const n=ti(t),i=ti(e),s=ct(n.seconds,i.seconds);return s!==0?s:ct(n.nanos,i.nanos)}function Kl(t){return Wl(t)}function Wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=ti(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,we.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const a of i.values||[])r?r=!1:s+=",",s+=Wl(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${Wl(i.fields[o])}`;return r+"}"}(t.mapValue):Ne();var e,n}function Xl(t){return!!t&&"integerValue"in t}function Yl(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ys(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=an.emptyPath(),i={},s=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=o.popLast()}a?i[o.lastSegment()]=Ys(a):s.push(o.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ts(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new In(Ys(this.value))}}function If(t){const e=[];return ts(t.fields,(n,i)=>{const s=new an([n]);if(ao(i)){const r=If(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)}),new Gl(e)}/**
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
 */class Xt{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Xt(e,0,at.min(),In.empty(),0)}static newFoundDocument(e,n,i){return new Xt(e,1,n,i,0)}static newNoDocument(e,n){return new Xt(e,2,n,In.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,In.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Xt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wv{constructor(e,n=null,i=[],s=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=o,this.R=null}}function vf(t,e=null,n=[],i=[],s=null,r=null,a=null){return new Wv(t,e,n,i,s,r,a)}function Jl(t){const e=Pe(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Yv(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),is(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=lo(e.startAt)),e.endAt&&(n+="|ub:",n+=lo(e.endAt)),e.R=n}return e.R}function Xv(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Kl(i.value)}`;var i}).join(", ")}]`),is(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+lo(t.startAt)),t.endAt&&(e+=", endAt: "+lo(t.endAt)),`Target(${e})`}function Ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!nb(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Tn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Af(t.startAt,e.startAt)&&Af(t.endAt,e.endAt)}function Zl(t){return we.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ln extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,i):new Jv(e,n,i):n==="array-contains"?new xv(e,i):n==="in"?new $v(e,i):n==="not-in"?new eb(e,i):n==="array-contains-any"?new tb(e,i):new ln(e,n,i)}static P(e,n,i){return n==="in"?new Qv(e,i):new Zv(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ss(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.v(ss(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Yv(t){return t.field.canonicalString()+t.op.toString()+Kl(t.value)}class Jv extends ln{constructor(e,n,i){super(e,n,i),this.key=we.fromName(i.referenceValue)}matches(e){const n=we.comparator(e.key,this.key);return this.v(n)}}class Qv extends ln{constructor(e,n){super(e,"in",n),this.keys=bf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zv extends ln{constructor(e,n){super(e,"not-in",n),this.keys=bf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>we.fromName(i.referenceValue))}class xv extends ln{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yl(n)&&Xs(n.arrayValue,this.value)}}class $v extends ln{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class eb extends ln{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class tb extends ln{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Xs(this.value.arrayValue,i))}}class xl{constructor(e,n){this.position=e,this.before=n}}function lo(t){return`${t.before?"b":"a"}:${t.position.map(e=>Kl(e)).join(",")}`}class Js{constructor(e,n="asc"){this.field=e,this.dir=n}}function nb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ef(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],a=t.position[s];if(r.field.isKeyField()?i=we.comparator(we.fromName(a.referenceValue),n.key):i=ss(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function Af(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uo{constructor(e,n=null,i=[],s=[],r=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=l,this.S=null,this.D=null,this.startAt,this.endAt}}function ib(t,e,n,i,s,r,a,o){return new uo(t,e,n,i,s,r,a,o)}function Tf(t){return new uo(t)}function co(t){return!is(t.limit)&&t.limitType==="F"}function fo(t){return!is(t.limit)&&t.limitType==="L"}function sb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rb(t){for(const e of t.filters)if(e.V())return e.field;return null}function ob(t){return t.collectionGroup!==null}function Qs(t){const e=Pe(t);if(e.S===null){e.S=[];const n=rb(e),i=sb(e);if(n!==null&&i===null)n.isKeyField()||e.S.push(new Js(n)),e.S.push(new Js(an.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.S.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Js(an.keyField(),r))}}}return e.S}function Ai(t){const e=Pe(t);if(!e.D)if(e.limitType==="F")e.D=vf(e.path,e.collectionGroup,Qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Qs(e)){const a=r.dir==="desc"?"asc":"desc";n.push(new Js(r.field,a))}const i=e.endAt?new xl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new xl(e.startAt.position,!e.startAt.before):null;e.D=vf(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.D}function ab(t,e,n){return new uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ho(t,e){return Ql(Ai(t),Ai(e))&&t.limitType===e.limitType}function Sf(t){return`${Jl(Ai(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${Xv(Ai(t))}; limitType=${t.limitType})`}function mo(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):we.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!Ef(n.startAt,Qs(n),i)||n.endAt&&Ef(n.endAt,Qs(n),i))}(t,e)}function Cf(t){return(e,n)=>{let i=!1;for(const s of Qs(t)){const r=lb(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function lb(t,e,n){const i=t.field.isKeyField()?we.comparator(e.key,n.key):function(s,r,a){const o=r.data.field(s),l=a.data.field(s);return o!==null&&l!==null?ss(o,l):Ne()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ne()}}/**
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
 */function wf(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function Of(t){return{integerValue:""+t}}function ub(t,e){return Kv(e)?Of(e):wf(t,e)}/**
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
 */class po{constructor(){this._=void 0}}function cb(t,e,n){return t instanceof go?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Zs?kf(t,e):t instanceof xs?Rf(t,e):function(i,s){const r=Lf(i,s),a=Df(r)+Df(i.N);return Xl(r)&&Xl(i.N)?Of(a):wf(i.k,a)}(t,e)}function db(t,e,n){return t instanceof Zs?kf(t,e):t instanceof xs?Rf(t,e):n}function Lf(t,e){return t instanceof _o?Xl(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class go extends po{}class Zs extends po{constructor(e){super(),this.elements=e}}function kf(t,e){const n=Mf(e);for(const i of t.elements)n.some(s=>Tn(s,i))||n.push(i);return{arrayValue:{values:n}}}class xs extends po{constructor(e){super(),this.elements=e}}function Rf(t,e){let n=Mf(e);for(const i of t.elements)n=n.filter(s=>!Tn(s,i));return{arrayValue:{values:n}}}class _o extends po{constructor(e,n){super(),this.k=e,this.N=n}}function Df(t){return Ot(t.integerValue||t.doubleValue)}function Mf(t){return Yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fb(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Zs&&i instanceof Zs||n instanceof xs&&i instanceof xs?es(n.elements,i.elements,Tn):n instanceof _o&&i instanceof _o?Tn(n.N,i.N):n instanceof go&&i instanceof go}(t.transform,e.transform)}class hb{constructor(e,n){this.version=e,this.transformResults=n}}class Ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ti}static exists(e){return new Ti(void 0,e)}static updateTime(e){return new Ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Io{}function mb(t,e,n){t instanceof vo?function(i,s,r){const a=i.value.clone(),o=Uf(i.fieldTransforms,s,r.transformResults);a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(i,s,r){if(!yo(i.precondition,s))return void s.convertToUnknownDocument(r.version);const a=Uf(i.fieldTransforms,s,r.transformResults),o=s.data;o.setAll(Ff(i)),o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function eu(t,e,n){t instanceof vo?function(i,s,r){if(!yo(i.precondition,s))return;const a=i.value.clone(),o=Vf(i.fieldTransforms,r,s);a.setAll(o),s.convertToFoundDocument(Pf(s),a).setHasLocalMutations()}(t,e,n):t instanceof rs?function(i,s,r){if(!yo(i.precondition,s))return;const a=Vf(i.fieldTransforms,r,s),o=s.data;o.setAll(Ff(i)),o.setAll(a),s.convertToFoundDocument(Pf(s),o).setHasLocalMutations()}(t,e,n):function(i,s){yo(i.precondition,s)&&s.convertToNoDocument(at.min())}(t,e)}function pb(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Lf(i.transform,s||null);r!=null&&(n==null&&(n=In.empty()),n.set(i.field,r))}return n||null}function Nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&es(n,i,(s,r)=>fb(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Pf(t){return t.isFoundDocument()?t.version:at.min()}class vo extends Io{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class rs extends Io{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Ff(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Uf(t,e,n){const i=new Map;pt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],a=r.transform,o=e.data.field(r.field);i.set(r.field,db(a,o,n[s]))}return i}function Vf(t,e,n){const i=new Map;for(const s of t){const r=s.transform,a=n.data.field(s.field);i.set(s.field,cb(r,a,e))}return i}class Bf extends Io{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class gb extends Io{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class _b{constructor(e){this.count=e}}/**
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
 */var Lt,tt;function yb(t){switch(t){default:return Ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Hf(t){if(t===void 0)return $n("GRPC error has no .code"),W.UNKNOWN;switch(t){case Lt.OK:return W.OK;case Lt.CANCELLED:return W.CANCELLED;case Lt.UNKNOWN:return W.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return W.INTERNAL;case Lt.UNAVAILABLE:return W.UNAVAILABLE;case Lt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Lt.NOT_FOUND:return W.NOT_FOUND;case Lt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Lt.ABORTED:return W.ABORTED;case Lt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Lt.DATA_LOSS:return W.DATA_LOSS;default:return Ne()}}(tt=Lt||(Lt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yt{constructor(e,n){this.comparator=e,this.root=n||zt.EMPTY}insert(e,n){return new Yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new Yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:zt.RED,this.left=s!=null?s:zt.EMPTY,this.right=r!=null?r:zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new zt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(t,e,n,i,s){return this}insert(t,e,n){return new zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Gt{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Gt(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Ib=new Yt(we.comparator);function Si(){return Ib}const vb=new Yt(we.comparator);function tu(){return vb}const bb=new Yt(we.comparator);function Eb(){return bb}const Ab=new Gt(we.comparator);function yt(...t){let e=Ab;for(const n of t)e=e.add(n);return e}const Tb=new Gt(ct);function qf(){return Tb}/**
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
 */class Eo{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,n)),new Eo(at.min(),i,qf(),Si(),yt())}}class $s{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new $s(Wt.EMPTY_BYTE_STRING,n,yt(),yt(),yt())}}/**
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
 */class Ao{constructor(e,n,i,s){this.$=e,this.removedTargetIds=n,this.key=i,this.F=s}}class zf{constructor(e,n){this.targetId=e,this.O=n}}class Gf{constructor(e,n,i=Wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Kf{constructor(){this.M=0,this.L=Xf(),this.B=Wt.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=yt(),n=yt(),i=yt();return this.L.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Ne()}}),new $s(this.B,this.U,e,n,i)}H(){this.q=!1,this.L=Xf()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Sb{constructor(e){this.et=e,this.nt=new Map,this.st=Si(),this.it=Wf(),this.rt=new Gt(ct)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const i=this.ht(n);switch(e.state){case 0:this.lt(n)&&i.W(e.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(e.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(n);break;case 3:this.lt(n)&&(i.tt(),i.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),i.W(e.resumeToken));break;default:Ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((i,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,i=e.O.count,s=this.wt(n);if(s){const r=s.target;if(Zl(r))if(i===0){const a=new we(r.path);this.ct(n,a,Xt.newNoDocument(a,at.min()))}else pt(i===1);else this._t(n)!==i&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((r,a)=>{const o=this.wt(a);if(o){if(r.current&&Zl(o.target)){const l=new we(o.target.path);this.st.get(l)!==null||this.yt(a,l)||this.ct(a,l,Xt.newNoDocument(l,e))}r.j&&(n.set(a,r.G()),r.H())}});let i=yt();this.it.forEach((r,a)=>{let o=!0;a.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(o=!1,!1)}),o&&(i=i.add(r))});const s=new Eo(e,n,this.rt,this.st,i);return this.st=Si(),this.it=Wf(),this.rt=new Gt(ct),s}at(e,n){if(!this.lt(e))return;const i=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,i),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,i){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),i&&(this.st=this.st.insert(n,i))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Kf,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Gt(ct),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Kf),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Wf(){return new Yt(we.comparator)}function Xf(){return new Yt(we.comparator)}/**
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
 */const Cb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ob{constructor(e,n){this.databaseId=e,this.C=n}}function To(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yf(t,e){return t.C?e.toBase64():e.toUint8Array()}function Lb(t,e){return To(t,e.toTimestamp())}function Fn(t){return pt(!!t),at.fromTimestamp(function(e){const n=ti(e);return new fn(n.seconds,n.nanos)}(t))}function nu(t,e){return function(n){return new bt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jf(t){const e=bt.fromString(t);return pt(th(e)),e}function iu(t,e){return nu(t.databaseId,e.path)}function su(t,e){const n=Jf(e);if(n.get(1)!==t.databaseId.projectId)throw new ve(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ve(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new we(Qf(n))}function ru(t,e){return nu(t.databaseId,e)}function kb(t){const e=Jf(t);return e.length===4?bt.emptyPath():Qf(e)}function ou(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qf(t){return pt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zf(t,e,n){return{name:iu(t,e),fields:n.value.mapValue.fields}}function Rb(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.C?(pt(c===void 0||typeof c=="string"),Wt.fromBase64String(c||"")):(pt(c===void 0||c instanceof Uint8Array),Wt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(l){const c=l.code===void 0?W.UNKNOWN:Hf(l.code);return new ve(c,l.message||"")}(a);n=new Gf(i,s,r,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=su(t,i.document.name),r=Fn(i.document.updateTime),a=new In({mapValue:{fields:i.document.fields}}),o=Xt.newFoundDocument(s,r,a),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Ao(l,c,o.key,o)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=su(t,i.document),r=i.readTime?Fn(i.readTime):at.min(),a=Xt.newNoDocument(s,r),o=i.removedTargetIds||[];n=new Ao([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=su(t,i.document),r=i.removedTargetIds||[];n=new Ao([],r,s,null)}else{if(!("filter"in e))return Ne();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new _b(s),a=i.targetId;n=new zf(a,r)}}return n}function Db(t,e){let n;if(e instanceof vo)n={update:Zf(t,e.key,e.value)};else if(e instanceof Bf)n={delete:iu(t,e.key)};else if(e instanceof rs)n={update:Zf(t,e.key,e.data),updateMask:qb(e.fieldMask)};else{if(!(e instanceof gb))return Ne();n={verify:iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const a=r.transform;if(a instanceof go)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _o)return{fieldPath:r.field.canonicalString(),increment:a.N};throw Ne()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Lb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ne()}(t,e.precondition)),n}function Mb(t,e){return t&&t.length>0?(pt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Fn(i.updateTime):Fn(s);return r.isEqual(at.min())&&(r=Fn(s)),new hb(r,i.transformResults||[])}(n,e))):[]}function Nb(t,e){return{documents:[ru(t,e.path)]}}function Pb(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=ru(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ru(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(o){if(o.length===0)return;const l=o.map(c=>function(u){if(u.op==="=="){if(yf(u.value))return{unaryFilter:{field:os(u.field),op:"IS_NAN"}};if(_f(u.value))return{unaryFilter:{field:os(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(yf(u.value))return{unaryFilter:{field:os(u.field),op:"IS_NOT_NAN"}};if(_f(u.value))return{unaryFilter:{field:os(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(u.field),op:Bb(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(o){if(o.length!==0)return o.map(l=>function(c){return{field:os(c.field),direction:Vb(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=function(o,l){return o.C||is(l)?l:{value:l}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=$f(e.startAt)),e.endAt&&(n.structuredQuery.endAt=$f(e.endAt)),n}function Fb(t){let e=kb(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){pt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=xf(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(u=>function(d){return new Js(as(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let o=null;n.limit&&(o=function(u){let d;return d=typeof u=="object"?u.value:u,is(d)?null:d}(n.limit));let l=null;n.startAt&&(l=eh(n.startAt));let c=null;return n.endAt&&(c=eh(n.endAt)),ib(e,s,a,r,o,"F",l,c)}function Ub(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xf(t){return t?t.unaryFilter!==void 0?[jb(t)]:t.fieldFilter!==void 0?[Hb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>xf(e)).reduce((e,n)=>e.concat(n)):Ne():[]}function $f(t){return{before:t.before,values:t.position}}function eh(t){const e=!!t.before,n=t.values||[];return new xl(n,e)}function Vb(t){return Cb[t]}function Bb(t){return wb[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return an.fromServerFormat(t.fieldPath)}function Hb(t){return ln.create(as(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function jb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=as(t.unaryFilter.field);return ln.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=as(t.unaryFilter.field);return ln.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(t.unaryFilter.field);return ln.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=as(t.unaryFilter.field);return ln.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}function qb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function th(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,i)=>{n(e)})}static reject(e){return new ne((n,i)=>{i(e)})}static waitFor(e){return new ne((n,i)=>{let s=0,r=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++r,a&&r===s&&n()},l=>i(l))}),a=!0,r===s&&n()})}static or(e){let n=ne.resolve(!1);for(const i of e)n=n.next(s=>s?ne.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function er(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kb{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&mb(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&eu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&eu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(at.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),yt())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,i)=>Nf(n,i))&&es(this.baseMutations,e.baseMutations,(n,i)=>Nf(n,i))}}class au{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){pt(e.mutations.length===i.length);let s=Eb();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new au(e,n,i,s)}}/**
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
 */class Ci{constructor(e,n,i,s,r=at.min(),a=at.min(),o=Wt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new Ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Wb{constructor(e){this.Gt=e}}function Xb(t){const e=Fb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ab(e,e.limit,"L"):e}/**
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
 */class Yb{constructor(){this.zt=new Jb}addToCollectionParentIndex(e,n){return this.zt.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.zt.getEntries(n))}}class Jb{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Gt(bt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Gt(bt.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new ls(0)}static re(){return new ls(-1)}}/**
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
 */async function tr(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==zb)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){ts(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return hf(this.inner)}}/**
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
 */class Qb{constructor(){this.changes=new nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:at.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Xt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ne.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nh{constructor(e,n,i){this.Je=e,this.An=n,this.Jt=i}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Pn(e,n,i))}Pn(e,n,i){return this.Je.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(i=>this.Vn(e,i).next(()=>i))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return we.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):ob(n)?this.Dn(e,n,i):this.Cn(e,n,i)}Sn(e,n){return this.Rn(e,new we(n)).next(i=>{let s=tu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Dn(e,n,i){const s=n.collectionGroup;let r=tu();return this.Jt.getCollectionParents(e,s).next(a=>ne.forEach(a,o=>{const l=function(c,u){return new uo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,o.child(s));return this.Cn(e,l,i).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}Cn(e,n,i){let s,r;return this.Je.getDocumentsMatchingQuery(e,n,i).next(a=>(s=a,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(a=>(r=a,this.Nn(e,r,s).next(o=>{s=o;for(const l of r)for(const c of l.mutations){const u=c.key;let d=s.get(u);d==null&&(d=Xt.newInvalidDocument(u),s=s.insert(u,d)),eu(c,d,l.localWriteTime),d.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((a,o)=>{mo(n,o)||(s=s.remove(a))}),s))}Nn(e,n,i){let s=yt();for(const a of n)for(const o of a.mutations)o instanceof rs&&i.get(o.key)===null&&(s=s.add(o.key));let r=i;return this.Je.getEntries(e,s).next(a=>(a.forEach((o,l)=>{l.isFoundDocument()&&(r=r.insert(o,l))}),r))}}/**
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
 */class lu{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.kn=i,this.xn=s}static $n(e,n){let i=yt(),s=yt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new lu(e,n.fromCache,i,s)}}/**
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
 */class Zb{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(at.min())?this.Mn(e,n):this.On.vn(e,s).next(r=>{const a=this.Ln(n,r);return(co(n)||fo(n))&&this.Bn(n.limitType,a,s,i)?this.Mn(e,n):(uf()<=ot.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$l(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(o=>(a.forEach(l=>{o=o.insert(l.key,l)}),o)))})}Ln(e,n){let i=new Gt(Cf(e));return n.forEach((s,r)=>{mo(e,r)&&(i=i.add(r))}),i}Bn(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mn(e,n){return uf()<=ot.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",$l(n)),this.On.getDocumentsMatchingQuery(e,n,at.min())}}/**
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
 */class xb{constructor(e,n,i,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new Yt(ct),this.Kn=new nr(r=>Jl(r),Ql),this.jn=at.min(),this.An=e.getMutationQueue(i),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new nh(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function $b(t,e,n,i){return new xb(t,e,n,i)}async function ih(t,e){const n=Pe(t);let i=n.An,s=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.An.getAllMutationBatches(a).next(l=>(o=l,i=n.persistence.getMutationQueue(e),s=new nh(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(a))).next(l=>{const c=[],u=[];let d=yt();for(const f of o){c.push(f.batchId);for(const h of f.mutations)d=d.add(h.key)}for(const f of l){u.push(f.batchId);for(const h of f.mutations)d=d.add(h.key)}return s.vn(a,d).next(f=>({Gn:f,removedBatchIds:c,addedBatchIds:u}))})});return n.An=i,n.Wn=s,n.Un.Fn(n.Wn),r}function eE(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(a,o,l,c){const u=l.batch,d=u.keys();let f=ne.resolve();return d.forEach(h=>{f=f.next(()=>c.getEntry(o,h)).next(m=>{const g=l.docVersions.get(h);pt(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&c.addEntry(m,l.commitVersion))})}),f.next(()=>a.An.removeMutationBatch(o,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.An.performConsistencyCheck(i)).next(()=>n.Wn.vn(i,s))})}function sh(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function tE(t,e){const n=Pe(t),i=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];e.targetChanges.forEach((c,u)=>{const d=s.get(u);if(!d)return;o.push(n.He.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.He.addMatchingKeys(r,c.addedDocuments,u)));const f=c.resumeToken;if(f.approximateByteSize()>0){const h=d.withResumeToken(f,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,h),function(m,g,p){return pt(g.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,h,c)&&o.push(n.He.updateTargetData(r,h))}});let l=Si();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),o.push(nE(r,a,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(at.min())){const c=n.He.getLastRemoteSnapshotVersion(r).next(u=>n.He.setTargetsMetadata(r,r.currentSequenceNumber,i));o.push(c)}return ne.waitFor(o).next(()=>a.apply(r)).next(()=>n.Wn.Vn(r,l)).next(()=>l)}).then(r=>(n.qn=s,r))}function nE(t,e,n,i,s){let r=yt();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let o=Si();return n.forEach((l,c)=>{const u=a.get(l),d=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(at.min())?(e.removeEntry(l,d),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,d),o=o.insert(l,c)):_e("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),o})}function iE(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(i,e)))}function sE(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.He.getTargetData(i,e).next(r=>r?(s=r,ne.resolve(s)):n.He.allocateTargetId(i).next(a=>(s=new Ci(e,a,0,i.currentSequenceNumber),n.He.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.qn.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(i.targetId,i),n.Kn.set(e,i.targetId)),i})}async function uu(t,e,n){const i=Pe(t),s=i.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!er(a))throw a;_e("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.qn=i.qn.remove(e),i.Kn.delete(s.target)}function rh(t,e,n){const i=Pe(t);let s=at.min(),r=yt();return i.persistence.runTransaction("Execute query","readonly",a=>function(o,l,c){const u=Pe(o),d=u.Kn.get(c);return d!==void 0?ne.resolve(u.qn.get(d)):u.He.getTargetData(l,c)}(i,a,Ai(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(a,o.targetId).next(l=>{r=l})}).next(()=>i.Un.getDocumentsMatchingQuery(a,e,n?s:at.min(),n?r:yt())).next(o=>({documents:o,zn:r})))}/**
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
 */class rE{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return ne.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var i;return this.Xn.set(n.id,{id:(i=n).id,version:i.version,createTime:Fn(i.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(i){return{name:i.name,query:Xb(i.bundledQuery),readTime:Fn(i.readTime)}}(n)),ne.resolve()}}/**
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
 */class cu{constructor(){this.ts=new Gt(Ut.es),this.ns=new Gt(Ut.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const i=new Ut(e,n);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.os(new Ut(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new we(new bt([])),i=new Ut(n,e),s=new Ut(n,e+1),r=[];return this.ns.forEachInRange([i,s],a=>{this.os(a),r.push(a.key)}),r}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new we(new bt([])),i=new Ut(n,e),s=new Ut(n,e+1);let r=yt();return this.ns.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const n=new Ut(e,0),i=this.ts.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ut{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return we.comparator(e.key,n.key)||ct(e.fs,n.fs)}static ss(e,n){return ct(e.fs,n.fs)||we.comparator(e.key,n.key)}}/**
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
 */class oE{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Gt(Ut.es)}checkEmpty(e){return ne.resolve(this.An.length===0)}addMutationBatch(e,n,i,s){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const a=new Kb(r,n,i,s);this.An.push(a);for(const o of s)this.ws=this.ws.add(new Ut(o.key,r)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return ne.resolve(a)}lookupMutationBatch(e,n){return ne.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.gs(i),r=s<0?0:s;return ne.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return ne.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ut(n,0),s=new Ut(n,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([i,s],a=>{const o=this._s(a.fs);r.push(o)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Gt(ct);return n.forEach(s=>{const r=new Ut(s,0),a=new Ut(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,a],o=>{i=i.add(o.fs)})}),ne.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;we.isDocumentKey(r)||(r=r.child(""));const a=new Ut(new we(r),0);let o=new Gt(ct);return this.ws.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(o=o.add(l.fs)),!0)},a),ne.resolve(this.ys(o))}ys(e){const n=[];return e.forEach(i=>{const s=this._s(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pt(this.ps(n.batchId,"removed")===0),this.An.shift();let i=this.ws;return ne.forEach(n.mutations,s=>{const r=new Ut(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=i})}ee(e){}containsKey(e,n){const i=new Ut(n,0),s=this.ws.firstAfterOrEqual(i);return ne.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,ne.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class aE{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Yt(we.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),a=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:o,readTime:i}),this.size+=o-a,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ne.resolve(i?i.document.clone():Xt.newInvalidDocument(n))}getEntries(e,n){let i=Si();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Xt.newInvalidDocument(s))}),ne.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=Si();const r=new we(n.path.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:o,value:{document:l,readTime:c}}=a.getNext();if(!n.path.isPrefixOf(o.path))break;c.compareTo(i)<=0||mo(n,l)&&(s=s.insert(l.key,l.clone()))}return ne.resolve(s)}Es(e,n){return ne.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new lE(this)}getSize(e){return ne.resolve(this.size)}}class lE extends Qb{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(i))):this.De.removeEntry(i)}),ne.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class uE{constructor(e){this.persistence=e,this.Is=new nr(n=>Jl(n),Ql),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.As=0,this.Rs=new cu,this.targetCount=0,this.Ps=ls.ie()}forEachTarget(e,n){return this.Is.forEach((i,s)=>n(s)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.As&&(this.As=n),ne.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.ce(n),ne.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Is.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Is.delete(a),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),ne.waitFor(r).next(()=>s)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const i=this.Is.get(n)||null;return ne.resolve(i)}addMatchingKeys(e,n,i){return this.Rs.rs(n,i),ne.resolve()}removeMatchingKeys(e,n,i){this.Rs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Rs.ls(n);return ne.resolve(i)}containsKey(e,n){return ne.resolve(this.Rs.containsKey(n))}}/**
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
 */class cE{constructor(e,n){this.bs={},this.Be=new zl(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new uE(this),this.Jt=new Yb,this.Je=function(i,s){return new aE(i,s)}(this.Jt,i=>this.referenceDelegate.vs(i)),this.k=new Wb(n),this.Ye=new rE(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new oE(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,i){_e("MemoryPersistence","Starting transaction:",e);const s=new dE(this.Be.next());return this.referenceDelegate.Vs(),i(s).next(r=>this.referenceDelegate.Ss(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ds(e,n){return ne.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class dE extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class du{constructor(e){this.persistence=e,this.Cs=new cu,this.Ns=null}static ks(e){return new du(e)}get xs(){if(this.Ns)return this.Ns;throw Ne()}addReference(e,n,i){return this.Cs.addReference(i,n),this.xs.delete(i.toString()),ne.resolve()}removeReference(e,n,i){return this.Cs.removeReference(i,n),this.xs.add(i.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.xs,i=>{const s=we.fromPath(i);return this.$s(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return ne.or([()=>ne.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class oh{constructor(){this.activeTargetIds=qf()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fE{constructor(){this.pi=new oh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,i){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new oh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class hE{Ei(e){}shutdown(){}}/**
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
 */class ah{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){_e("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){_e("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class pE{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
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
 */class gE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,i,s,r){const a=this.Ui(e,n);_e("RestConnection","Sending: ",a,i);const o={};return this.qi(o,s,r),this.Ki(e,a,o,i).then(l=>(_e("RestConnection","Received: ",l),l),l=>{throw cf("RestConnection",`${e} failed with error: `,l,"url: ",a,"request:",i),l})}ji(e,n,i,s,r){return this.Bi(e,n,i,s,r)}qi(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+$i,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}Ui(e,n){const i=mE[e];return`${this.Mi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,i,s){return new Promise((r,a)=>{const o=new Nv;o.listenOnce(Rv.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case jl.NO_ERROR:const c=o.getResponseJson();_e("Connection","XHR received:",JSON.stringify(c)),r(c);break;case jl.TIMEOUT:_e("Connection",'RPC "'+e+'" timed out'),a(new ve(W.DEADLINE_EXCEEDED,"Request time out"));break;case jl.HTTP_ERROR:const u=o.getStatus();if(_e("Connection",'RPC "'+e+'" failed with status:',u,"response text:",o.getResponseText()),u>0){const d=o.getResponseJson().error;if(d&&d.status&&d.message){const f=function(h){const m=h.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(m)>=0?m:W.UNKNOWN}(d.status);a(new ve(f,d.message))}else a(new ve(W.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ve(W.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{_e("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);o.send(n,"POST",l,i,15)})}Qi(e,n,i){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Lv(),a=kv(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mv({})),this.qi(o.initMessageHeaders,n,i),Bc()||jc()||ky()||qc()||Ry()||Hc()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");_e("Connection","Creating WebChannel: "+l,o);const c=r.createWebChannel(l,o);let u=!1,d=!1;const f=new pE({Vi:m=>{d?_e("Connection","Not sending because WebChannel is closed:",m):(u||(_e("Connection","Opening WebChannel transport."),c.open(),u=!0),_e("Connection","WebChannel sending:",m),c.send(m))},Si:()=>c.close()}),h=(m,g,p)=>{m.listen(g,b=>{try{p(b)}catch(E){setTimeout(()=>{throw E},0)}})};return h(c,ro.EventType.OPEN,()=>{d||_e("Connection","WebChannel transport opened.")}),h(c,ro.EventType.CLOSE,()=>{d||(d=!0,_e("Connection","WebChannel transport closed"),f.Fi())}),h(c,ro.EventType.ERROR,m=>{d||(d=!0,cf("Connection","WebChannel transport errored:",m),f.Fi(new ve(W.UNAVAILABLE,"The operation could not be completed")))}),h(c,ro.EventType.MESSAGE,m=>{var g;if(!d){const p=m.data[0];pt(!!p);const b=p,E=b.error||((g=b[0])===null||g===void 0?void 0:g.error);if(E){_e("Connection","WebChannel received error:",E);const S=E.status;let O=function(R){const y=Lt[R];if(y!==void 0)return Hf(y)}(S),k=E.message;O===void 0&&(O=W.INTERNAL,k="Unknown error status: "+S+" with message "+E.message),d=!0,f.Fi(new ve(O,k)),c.close()}else _e("Connection","WebChannel received:",p),f.Oi(p)}}),h(a,Dv.STAT_EVENT,m=>{m.stat===af.PROXY?_e("Connection","Detected buffering proxy"):m.stat===af.NOPROXY&&_e("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function fu(){return typeof document!="undefined"?document:null}/**
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
 */function So(t){return new Ob(t,!0)}class lh{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Wi=i,this.Gi=s,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-i);s>0&&_e("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class uh{constructor(e,n,i,s,r,a,o,l){this.Oe=e,this.nr=i,this.sr=s,this.ir=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new lh(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===W.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.rr===n&&this.Ir(i,s)},i=>{e(()=>{const s=new ve(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ar(s)})})}Ir(e,n){const i=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{i(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{i(()=>this.Ar(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return _e("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(_e("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _E extends uh{constructor(e,n,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.k=r}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=Rb(this.k,e),i=function(s){if(!("targetChange"in s))return at.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?at.min():r.readTime?Fn(r.readTime):at.min()}(e);return this.listener.Pr(n,i)}br(e){const n={};n.database=ou(this.k),n.addTarget=function(s,r){let a;const o=r.target;return a=Zl(o)?{documents:Nb(s,o)}:{query:Pb(s,o)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=Yf(s,r.resumeToken):r.snapshotVersion.compareTo(at.min())>0&&(a.readTime=To(s,r.snapshotVersion.toTimestamp())),a}(this.k,e);const i=Ub(this.k,e);i&&(n.labels=i),this.gr(n)}vr(e){const n={};n.database=ou(this.k),n.removeTarget=e,this.gr(n)}}class yE extends uh{constructor(e,n,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(pt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=Mb(e.writeResults,e.commitTime),i=Fn(e.commitTime);return this.listener.Cr(i,n)}return pt(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=ou(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Db(this.k,i))};this.gr(n)}}/**
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
 */class IE extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=i,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new ve(W.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.Bi(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ve(W.UNKNOWN,s.toString())})}ji(e,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.ji(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ve(W.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class vE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?($n(n),this.Lr=!1):_e("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
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
 */class bE{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(a=>{i.enqueueAndForget(async()=>{wi(this)&&(_e("RemoteStore","Restarting streams for network reachability change."),await async function(o){const l=Pe(o);l.Gr.add(4),await ir(l),l.Jr.set("Unknown"),l.Gr.delete(4),await Co(l)}(this))})}),this.Jr=new vE(i,s)}}async function Co(t){if(wi(t))for(const e of t.zr)await e(!0)}async function ir(t){for(const e of t.zr)await e(!1)}function ch(t,e){const n=Pe(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),pu(n)?mu(n):us(n).lr()&&hu(n,e))}function dh(t,e){const n=Pe(t),i=us(n);n.Wr.delete(e),i.lr()&&fh(n,e),n.Wr.size===0&&(i.lr()?i._r():wi(n)&&n.Jr.set("Unknown"))}function hu(t,e){t.Yr.X(e.targetId),us(t).br(e)}function fh(t,e){t.Yr.X(e),us(t).vr(e)}function mu(t){t.Yr=new Sb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),us(t).start(),t.Jr.Br()}function pu(t){return wi(t)&&!us(t).hr()&&t.Wr.size>0}function wi(t){return Pe(t).Gr.size===0}function hh(t){t.Yr=void 0}async function EE(t){t.Wr.forEach((e,n)=>{hu(t,e)})}async function AE(t,e){hh(t),pu(t)?(t.Jr.Kr(e),mu(t)):t.Jr.set("Unknown")}async function TE(t,e,n){if(t.Jr.set("Online"),e instanceof Gf&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const a of s.targetIds)i.Wr.has(a)&&(await i.remoteSyncer.rejectListen(a,r),i.Wr.delete(a),i.Yr.removeTarget(a))}(t,e)}catch(i){_e("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wo(t,i)}else if(e instanceof Ao?t.Yr.ot(e):e instanceof zf?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(at.min()))try{const i=await sh(t.localStore);n.compareTo(i)>=0&&await function(s,r){const a=s.Yr.gt(r);return a.targetChanges.forEach((o,l)=>{if(o.resumeToken.approximateByteSize()>0){const c=s.Wr.get(l);c&&s.Wr.set(l,c.withResumeToken(o.resumeToken,r))}}),a.targetMismatches.forEach(o=>{const l=s.Wr.get(o);if(!l)return;s.Wr.set(o,l.withResumeToken(Wt.EMPTY_BYTE_STRING,l.snapshotVersion)),fh(s,o);const c=new Ci(l.target,o,1,l.sequenceNumber);hu(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){_e("RemoteStore","Failed to raise snapshot:",i),await wo(t,i)}}async function wo(t,e,n){if(!er(e))throw e;t.Gr.add(1),await ir(t),t.Jr.set("Offline"),n||(n=()=>sh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Co(t)})}function mh(t,e){return e().catch(n=>wo(t,n,e))}async function Oo(t){const e=Pe(t),n=ni(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;SE(e);)try{const s=await iE(e.localStore,i);if(s===null){e.Qr.length===0&&n._r();break}i=s.batchId,CE(e,s)}catch(s){await wo(e,s)}ph(e)&&gh(e)}function SE(t){return wi(t)&&t.Qr.length<10}function CE(t,e){t.Qr.push(e);const n=ni(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function ph(t){return wi(t)&&!ni(t).hr()&&t.Qr.length>0}function gh(t){ni(t).start()}async function wE(t){ni(t).kr()}async function OE(t){const e=ni(t);for(const n of t.Qr)e.Dr(n.mutations)}async function LE(t,e,n){const i=t.Qr.shift(),s=au.from(i,e,n);await mh(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Oo(t)}async function kE(t,e){e&&ni(t).Sr&&await async function(n,i){if(s=i.code,yb(s)&&s!==W.ABORTED){const r=n.Qr.shift();ni(n).wr(),await mh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Oo(n)}var s}(t,e),ph(t)&&gh(t)}async function RE(t,e){const n=Pe(t);e?(n.Gr.delete(2),await Co(n)):e||(n.Gr.add(2),await ir(n),n.Jr.set("Unknown"))}function us(t){return t.Xr||(t.Xr=function(e,n,i){const s=Pe(e);return s.Fr(),new _E(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(t.datastore,t.asyncQueue,{Di:EE.bind(null,t),Ni:AE.bind(null,t),Pr:TE.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),pu(t)?mu(t):t.Jr.set("Unknown")):(await t.Xr.stop(),hh(t))})),t.Xr}function ni(t){return t.Zr||(t.Zr=function(e,n,i){const s=Pe(e);return s.Fr(),new yE(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(t.datastore,t.asyncQueue,{Di:wE.bind(null,t),Ni:kE.bind(null,t),Nr:OE.bind(null,t),Cr:LE.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Oo(t)):(await t.Zr.stop(),t.Qr.length>0&&(_e("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class gu{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,i,s,r){const a=Date.now()+i,o=new gu(e,n,a,s,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(t,e){if($n("AsyncQueue",`${e}: ${t}`),er(t))return new ve(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{constructor(e){this.comparator=e?(n,i)=>e(n,i)||we.comparator(n.key,i.key):(n,i)=>we.comparator(n.key,i.key),this.keyedMap=tu(),this.sortedSet=new Yt(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new cs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class _h{constructor(){this.eo=new Yt(we.comparator)}track(e){const n=e.doc.key,i=this.eo.get(n);i?e.type!==0&&i.type===3?this.eo=this.eo.insert(n,e):e.type===3&&i.type!==1?this.eo=this.eo.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.eo=this.eo.remove(n):e.type===1&&i.type===2?this.eo=this.eo.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):Ne():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,i)=>{e.push(i)}),e}}class ds{constructor(e,n,i,s,r,a,o,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(a=>{r.push({type:0,doc:a})}),new ds(e,n,cs.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class DE{constructor(){this.so=void 0,this.listeners=[]}}class ME{constructor(){this.queries=new nr(e=>Sf(e),ho),this.onlineState="Unknown",this.io=new Set}}async function NE(t,e){const n=Pe(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new DE),s)try{r.so=await n.onListen(i)}catch(a){const o=_u(a,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(o)}n.queries.set(i,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&yu(n)}async function PE(t,e){const n=Pe(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function FE(t,e){const n=Pe(t);let i=!1;for(const s of e){const r=s.query,a=n.queries.get(r);if(a){for(const o of a.listeners)o.oo(s)&&(i=!0);a.so=s}}i&&yu(n)}function UE(t,e,n){const i=Pe(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function yu(t){t.io.forEach(e=>{e.next()})}class VE{constructor(e,n,i){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ds(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.wo||!i)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
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
 */class yh{constructor(e){this.key=e}}class Ih{constructor(e){this.key=e}}class BE{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=yt(),this.mutatedKeys=yt(),this.Ao=Cf(e),this.Ro=new cs(this.Ao)}get Po(){return this.To}bo(e,n){const i=n?n.vo:new _h,s=n?n.Ro:this.Ro;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,o=!1;const l=co(this.query)&&s.size===this.query.limit?s.last():null,c=fo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const f=s.get(u),h=mo(this.query,d)?d:null,m=!!f&&this.mutatedKeys.has(f.key),g=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let p=!1;f&&h?f.data.isEqual(h.data)?m!==g&&(i.track({type:3,doc:h}),p=!0):this.Vo(f,h)||(i.track({type:2,doc:h}),p=!0,(l&&this.Ao(h,l)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!f&&h?(i.track({type:0,doc:h}),p=!0):f&&!h&&(i.track({type:1,doc:f}),p=!0,(l||c)&&(o=!0)),p&&(h?(a=a.add(h),r=g?r.add(u):r.delete(u)):(a=a.delete(u),r=r.delete(u)))}),co(this.query)||fo(this.query))for(;a.size>this.query.limit;){const u=co(this.query)?a.last():a.first();a=a.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Ro:a,vo:i,Bn:o,mutatedKeys:r}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const r=e.vo.no();r.sort((c,u)=>function(d,f){const h=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne()}};return h(d)-h(f)}(c.type,u.type)||this.Ao(c.doc,u.doc)),this.So(i);const a=n?this.Do():[],o=this.Io.size===0&&this.current?1:0,l=o!==this.Eo;return this.Eo=o,r.length!==0||l?{snapshot:new ds(this.query,e.Ro,s,r,e.mutatedKeys,o===0,l,!1),Co:a}:{Co:a}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new _h,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=yt(),this.Ro.forEach(i=>{this.No(i.key)&&(this.Io=this.Io.add(i.key))});const n=[];return e.forEach(i=>{this.Io.has(i)||n.push(new Ih(i))}),this.Io.forEach(i=>{e.has(i)||n.push(new yh(i))}),n}ko(e){this.To=e.zn,this.Io=yt();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return ds.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class HE{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class jE{constructor(e){this.key=e,this.$o=!1}}class qE{constructor(e,n,i,s,r,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Fo={},this.Oo=new nr(o=>Sf(o),ho),this.Mo=new Map,this.Lo=new Set,this.Bo=new Yt(we.comparator),this.Uo=new Map,this.qo=new cu,this.Ko={},this.jo=new Map,this.Qo=ls.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function zE(t,e){const n=$E(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const a=await sE(n.localStore,Ai(e)),o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await GE(n,e,i,o==="current"),n.isPrimaryClient&&ch(n.remoteStore,a)}return s}async function GE(t,e,n,i){t.Go=(u,d,f)=>async function(h,m,g,p){let b=m.view.bo(g);b.Bn&&(b=await rh(h.localStore,m.query,!1).then(({documents:O})=>m.view.bo(O,b)));const E=p&&p.targetChanges.get(m.targetId),S=m.view.applyChanges(b,h.isPrimaryClient,E);return Sh(h,m.targetId,S.Co),S.snapshot}(t,u,d,f);const s=await rh(t.localStore,e,!0),r=new BE(e,s.zn),a=r.bo(s.documents),o=$s.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(a,t.isPrimaryClient,o);Sh(t,n,l.Co);const c=new HE(e,n,r);return t.Oo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),l.snapshot}async function KE(t,e){const n=Pe(t),i=n.Oo.get(e),s=n.Mo.get(i.targetId);if(s.length>1)return n.Mo.set(i.targetId,s.filter(r=>!ho(r,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await uu(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),dh(n.remoteStore,i.targetId),Iu(n,i.targetId)}).catch(tr)):(Iu(n,i.targetId),await uu(n.localStore,i.targetId,!0))}async function WE(t,e,n){const i=e1(t);try{const s=await function(r,a){const o=Pe(r),l=fn.now(),c=a.reduce((d,f)=>d.add(f.key),yt());let u;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>o.Wn.vn(d,c).next(f=>{u=f;const h=[];for(const m of a){const g=pb(m,u.get(m.key));g!=null&&h.push(new rs(m.key,g,If(g.value.mapValue),Ti.exists(!0)))}return o.An.addMutationBatch(d,l,h,a)})).then(d=>(d.applyToLocalDocumentSet(u),{batchId:d.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,a,o){let l=r.Ko[r.currentUser.toKey()];l||(l=new Yt(ct)),l=l.insert(a,o),r.Ko[r.currentUser.toKey()]=l}(i,s.batchId,n),await sr(i,s.changes),await Oo(i.remoteStore)}catch(s){const r=_u(s,"Failed to persist write");n.reject(r)}}async function vh(t,e){const n=Pe(t);try{const i=await tE(n.localStore,e);e.targetChanges.forEach((s,r)=>{const a=n.Uo.get(r);a&&(pt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.$o=!0:s.modifiedDocuments.size>0?pt(a.$o):s.removedDocuments.size>0&&(pt(a.$o),a.$o=!1))}),await sr(n,i,e)}catch(i){await tr(i)}}function bh(t,e,n){const i=Pe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,a)=>{const o=a.view.ro(e);o.snapshot&&s.push(o.snapshot)}),function(r,a){const o=Pe(r);o.onlineState=a;let l=!1;o.queries.forEach((c,u)=>{for(const d of u.listeners)d.ro(a)&&(l=!0)}),l&&yu(o)}(i.eventManager,e),s.length&&i.Fo.Pr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function XE(t,e,n){const i=Pe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Uo.get(e),r=s&&s.key;if(r){let a=new Yt(we.comparator);a=a.insert(r,Xt.newNoDocument(r,at.min()));const o=yt().add(r),l=new Eo(at.min(),new Map,new Gt(ct),a,o);await vh(i,l),i.Bo=i.Bo.remove(r),i.Uo.delete(e),vu(i)}else await uu(i.localStore,e,!1).then(()=>Iu(i,e,n)).catch(tr)}async function YE(t,e){const n=Pe(t),i=e.batch.batchId;try{const s=await eE(n.localStore,e);Ah(n,i,null),Eh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await sr(n,s)}catch(s){await tr(s)}}async function JE(t,e,n){const i=Pe(t);try{const s=await function(r,a){const o=Pe(r);return o.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return o.An.lookupMutationBatch(l,a).next(u=>(pt(u!==null),c=u.keys(),o.An.removeMutationBatch(l,u))).next(()=>o.An.performConsistencyCheck(l)).next(()=>o.Wn.vn(l,c))})}(i.localStore,e);Ah(i,e,n),Eh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await sr(i,s)}catch(s){await tr(s)}}function Eh(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Ah(t,e,n){const i=Pe(t);let s=i.Ko[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Ko[i.currentUser.toKey()]=s}}function Iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Mo.get(e))t.Oo.delete(i),n&&t.Fo.zo(i,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(i=>{t.qo.containsKey(i)||Th(t,i)})}function Th(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(dh(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),vu(t))}function Sh(t,e,n){for(const i of n)i instanceof yh?(t.qo.addReference(i.key,e),QE(t,i)):i instanceof Ih?(_e("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Th(t,i.key)):Ne()}function QE(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(_e("SyncEngine","New document in limbo: "+n),t.Lo.add(i),vu(t))}function vu(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new we(bt.fromString(e)),i=t.Qo.next();t.Uo.set(i,new jE(n)),t.Bo=t.Bo.insert(n,i),ch(t.remoteStore,new Ci(Ai(Tf(n.path)),i,2,zl.I))}}async function sr(t,e,n){const i=Pe(t),s=[],r=[],a=[];i.Oo.isEmpty()||(i.Oo.forEach((o,l)=>{a.push(i.Go(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=lu.$n(l.targetId,c);r.push(u)}}))}),await Promise.all(a),i.Fo.Pr(s),await async function(o,l){const c=Pe(o);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>ne.forEach(l,d=>ne.forEach(d.kn,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>ne.forEach(d.xn,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!er(u))throw u;_e("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.qn.get(d),h=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(h);c.qn=c.qn.insert(d,m)}}}(i.localStore,r))}async function ZE(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){_e("SyncEngine","User change. New user:",e.toKey());const i=await ih(n.localStore,e);n.currentUser=e,function(s,r){s.jo.forEach(a=>{a.forEach(o=>{o.reject(new ve(W.CANCELLED,r))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await sr(n,i.Gn)}}function xE(t,e){const n=Pe(t),i=n.Uo.get(e);if(i&&i.$o)return yt().add(i.key);{let s=yt();const r=n.Mo.get(e);if(!r)return s;for(const a of r){const o=n.Oo.get(a);s=s.unionWith(o.view.Po)}return s}}function $E(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XE.bind(null,e),e.Fo.Pr=FE.bind(null,e.eventManager),e.Fo.zo=UE.bind(null,e.eventManager),e}function e1(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JE.bind(null,e),e}class t1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=So(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return $b(this.persistence,new Zb,e.initialUser,this.k)}Yo(e){return new cE(du.ks,this.k)}Jo(e){return new fE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class n1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZE.bind(null,this.syncEngine),await RE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ME}createDatastore(e){const n=So(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new gE(s));var s;return function(r,a,o,l){return new IE(r,a,o,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=o=>bh(this.syncEngine,o,0),a=ah.bt()?new ah:new hE,new bE(n,i,s,r,a);var n,i,s,r,a}createSyncEngine(e,n){return function(i,s,r,a,o,l,c){const u=new qE(i,s,r,a,o,l);return c&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Pe(e);_e("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await ir(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class i1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class s1{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=on.UNAUTHENTICATED,this.clientId=df.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{_e("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ve(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=_u(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function r1(t,e){t.asyncQueue.verifyOperationInProgress(),_e("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await ih(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function o1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await a1(t);_e("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,a){const o=Pe(r);o.asyncQueue.verifyOperationInProgress(),_e("RemoteStore","RemoteStore received new credentials");const l=wi(o);o.Gr.add(3),await ir(o),l&&o.Jr.set("Unknown"),await o.remoteSyncer.handleCredentialChange(a),o.Gr.delete(3),await Co(o)}(e.remoteStore,s)),t.onlineComponents=e}async function a1(t){return t.offlineComponents||(_e("FirestoreClient","Using default OfflineComponentProvider"),await r1(t,new t1)),t.offlineComponents}async function Ch(t){return t.onlineComponents||(_e("FirestoreClient","Using default OnlineComponentProvider"),await o1(t,new n1)),t.onlineComponents}function l1(t){return Ch(t).then(e=>e.syncEngine)}async function u1(t){const e=await Ch(t),n=e.eventManager;return n.onListen=zE.bind(null,e.syncEngine),n.onUnlisten=KE.bind(null,e.syncEngine),n}function c1(t,e,n={}){const i=new ei;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,l){const c=new i1({next:d=>{r.enqueueAndForget(()=>PE(s,u)),d.fromCache&&o.source==="server"?l.reject(new ve(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new VE(a,c,{includeMetadataChanges:!0,wo:!0});return NE(s,u)}(await u1(t),t.asyncQueue,e,n,i)),i.promise}class d1{constructor(e,n,i,s,r,a,o,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=l}}class rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wh=new Map;/**
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
 */function Oh(t,e,n){if(!n)throw new ve(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f1(t,e,n,i){if(e===!0&&i===!0)throw new ve(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lh(t){if(!we.isDocumentKey(t))throw new ve(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kh(t){if(we.isDocumentKey(t))throw new ve(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ne()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ve(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bu(t);throw new ve(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Rh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,f1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Eu{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rh({}),this._settingsFrozen=!1,e instanceof rr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ve(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(s.options.projectId)}(e))}get app(){if(!this._app)throw new ve(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ve(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fv;switch(n.type){case"gapi":const i=n.client;return pt(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Bv(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ve(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wh.get(e);n&&(_e("ComponentProvider","Removing Datastore"),wh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Lo{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class ii extends Lo{constructor(e,n,i){super(e,n,Tf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new we(e))}withConverter(e){return new ii(this.firestore,e,this._path)}}function Gw(t,e,...n){if(t=rn(t),Oh("collection","path",e),t instanceof Eu){const i=bt.fromString(e,...n);return kh(i),new ii(t,null,i)}{if(!(t instanceof mn||t instanceof ii))throw new ve(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return kh(i),new ii(t.firestore,null,i)}}function Kw(t,e,...n){if(t=rn(t),arguments.length===1&&(e=df.A()),Oh("doc","path",e),t instanceof Eu){const i=bt.fromString(e,...n);return Lh(i),new mn(t,null,new we(i))}{if(!(t instanceof mn||t instanceof ii))throw new ve(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Lh(i),new mn(t.firestore,t instanceof ii?t.converter:null,new we(i))}}/**
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
 */class h1{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new lh(this,"async_queue_retry"),this.Ra=()=>{const n=fu();n&&_e("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=fu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new ei;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!er(e))throw e;_e("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(i=>{this.Ta=i,this.Ea=!1;const s=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(i);throw $n("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ea=!1,i))));return this.ma=n,n}enqueueAfterDelay(e,n,i){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const s=gu.createAndSchedule(this,e,n,i,r=>this.Va(r));return this.pa.push(s),s}Pa(){this.Ta&&Ne()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}class ko extends Eu{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new h1,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Mh(this),this._firestoreClient.terminate()}}function Ww(t=Qa()){return Xi(t,"firestore").getImmediate()}function Dh(t){return t._firestoreClient||Mh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mh(t){var e;const n=t._freezeSettings(),i=function(s,r,a,o){return new d1(s,r,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new s1(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
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
 */class Au{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ve(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(Wt.fromBase64String(e))}catch(n){throw new ve(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nh{constructor(e){this._methodName=e}}/**
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
 */class Tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ve(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ve(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ct(this._lat,e._lat)||ct(this._long,e._long)}}/**
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
 */const m1=/^__.*__$/;class p1{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}function Ph(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class Su{constructor(e,n,i,s,r,a){this.settings=e,this.databaseId=n,this.k=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:i,Oa:!1});return s.Ma(e),s}La(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$a({path:i,Oa:!1});return s.ka(),s}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Ro(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(Ph(this.xa)&&m1.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class g1{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=i||So(e)}ja(e,n,i,s=!1){return new Su({xa:e,methodName:n,Ka:i,path:an.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function _1(t){const e=t._freezeSettings(),n=So(t._databaseId);return new g1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function y1(t,e,n,i,s,r={}){const a=t.ja(r.merge||r.mergeFields?2:0,e,n,s);Bh("Data must be an object, but it was:",a,i);const o=Uh(i,a);let l,c;if(r.merge)l=new Gl(a.fieldMask),c=a.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const f=I1(e,d,n);if(!a.contains(f))throw new ve(W.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);b1(u,f)||u.push(f)}l=new Gl(u),c=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=a.fieldTransforms;return new p1(new In(o),l,c)}function Fh(t,e){if(Vh(t=rn(t)))return Bh("Unsupported field value:",e,t),Uh(t,e);if(t instanceof Nh)return function(n,i){if(!Ph(i.xa))throw i.Ua(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ua(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const a of n){let o=Fh(a,i.Ba(r));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=rn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ub(i.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=fn.fromDate(n);return{timestampValue:To(i.k,s)}}if(n instanceof fn){const s=new fn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:To(i.k,s)}}if(n instanceof Tu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fs)return{bytesValue:Yf(i.k,n._byteString)};if(n instanceof mn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nu(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ua(`Unsupported field value: ${bu(n)}`)}(t,e)}function Uh(t,e){const n={};return hf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(i,s)=>{const r=Fh(s,e.Fa(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Vh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fn||t instanceof Tu||t instanceof fs||t instanceof mn||t instanceof Nh)}function Bh(t,e,n){if(!Vh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=bu(n);throw i==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+i)}}function I1(t,e,n){if((e=rn(e))instanceof Au)return e._internalPath;if(typeof e=="string")return Hh(t,e);throw Ro("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const v1=new RegExp("[~\\*/\\[\\]]");function Hh(t,e,n){if(e.search(v1)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Au(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${i}`),a&&(l+=` in document ${s}`),l+=")"),new ve(W.INVALID_ARGUMENT,o+t+l)}function b1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jh{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class E1 extends jh{data(){return super.data()}}function qh(t,e){return typeof e=="string"?Hh(t,e):e instanceof Au?e._internalPath:e._delegate._internalPath}/**
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
 */class Do{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class A1 extends jh{constructor(e,n,i,s,r,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(qh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Mo extends A1{data(e={}){return super.data(e)}}class T1{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Do(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Mo(this._firestore,this._userDataWriter,i.key,i,new Do(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ve(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new Mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const o=new Mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Do(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),c=r.indexOf(a.doc.key)),{type:S1(a.type),doc:o,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function S1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne()}}/**
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
 */function C1(t){if(fo(t)&&t.explicitOrderBy.length===0)throw new ve(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class w1{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ne()}}convertObject(e,n){const i={};return ts(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Tu(Ot(e.latitude),Ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=pf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const n=ti(e);return new fn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=bt.fromString(e);pt(th(i));const s=new rr(i.get(1),i.get(3)),r=new we(i.popFirst(5));return s.isEqual(n)||$n(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function O1(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class L1 extends w1{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function Xw(t){t=or(t,Lo);const e=or(t.firestore,ko),n=Dh(e),i=new L1(e);return C1(t._query),c1(n,t._query).then(s=>new T1(e,i,t,s))}function Yw(t,e,n){t=or(t,mn);const i=or(t.firestore,ko),s=O1(t.converter,e,n);return zh(i,[y1(_1(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ti.none())])}function Jw(t){return zh(or(t.firestore,ko),[new Bf(t._key,Ti.none())])}function zh(t,e){return function(n,i){const s=new ei;return n.asyncQueue.enqueueAndForget(async()=>WE(await l1(n),i,s)),s.promise}(Dh(t),e)}(function(t,e=!0){(function(n){$i=n})(Cs),Mn(new An("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new ko(s,new Uv(n.getProvider("auth-internal")),new jv(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),hn(lf,"3.4.1",t),hn(lf,"3.4.1","esm2017")})();function Gh(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-fab__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function k1(t){let e,n,i,s;const r=t[20].default,a=de(r,t,t[22],null);let o=t[8]&&Gh();return{c(){e=ye("div"),n=Qe(),a&&a.c(),o&&o.c(),i=Rt(),rt(e,"class","mdc-fab__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c&4194304)&&he(a,r,l,l[22],s?fe(r,l[22],c,null):me(l[22]),null),l[8]?o||(o=Gh(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(L(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function R1(t){let e,n,i;const s=[{use:[[yn,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[18].disabled,addClass:t[15],removeClass:t[16],addStyle:t[17]}],t[14],...t[0]]},{class:ee(Ke({[t[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":t[5],"mdc-fab--exited":t[6],"mdc-fab--extended":t[7],"smui-fab--color-primary":t[4]==="primary","mdc-fab--touch":t[8]},t[12]))},{style:Object.entries(t[13]).map(Kh).concat([t[2]]).join(" ")},{href:t[9]},t[18]];var r=t[10];function a(o){let l={$$slots:{default:[k1]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[21](e)),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&521215?ae(s,[l&507929&&{use:[[yn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[18].disabled,addClass:o[15],removeClass:o[16],addStyle:o[17]}],o[14],...o[0]]},l&4594&&{class:ee(Ke({[o[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":o[5],"mdc-fab--exited":o[6],"mdc-fab--extended":o[7],"smui-fab--color-primary":o[4]==="primary","mdc-fab--touch":o[8]},o[12]))},l&8196&&{style:Object.entries(o[13]).map(Kh).concat([o[2]]).join(" ")},l&512&&{href:o[9]},l&262144&&ze(o[18])]):{};if(l&4194560&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[10])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[21](e),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[21](null),o&&X(n),e&&Be(e,o)}}}const Kh=([t,e])=>`${t}: ${e};`;function D1(t,e,n){const i=["use","class","style","ripple","color","mini","exited","extended","touch","href","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{ripple:d=!0}=e,{color:f="secondary"}=e,{mini:h=!1}=e,{exited:m=!1}=e,{extended:g=!1}=e,{touch:p=!1}=e,{href:b=void 0}=e,E,S={},O={},{component:k=b==null?Ga:wr}=e;et("SMUI:label:context","fab"),et("SMUI:icon:context","fab");function R(v){S[v]||n(12,S[v]=!0,S)}function y(v){(!(v in S)||S[v])&&n(12,S[v]=!1,S)}function T(v,j){O[v]!=j&&(j===""||j==null?(delete O[v],n(13,O)):n(13,O[v]=j,O))}function M(){return E.getElement()}function I(v){ie[v?"unshift":"push"](()=>{E=v,n(11,E)})}return t.$$set=v=>{e=D(D({},e),ke(v)),n(18,s=J(e,i)),"use"in v&&n(0,l=v.use),"class"in v&&n(1,c=v.class),"style"in v&&n(2,u=v.style),"ripple"in v&&n(3,d=v.ripple),"color"in v&&n(4,f=v.color),"mini"in v&&n(5,h=v.mini),"exited"in v&&n(6,m=v.exited),"extended"in v&&n(7,g=v.extended),"touch"in v&&n(8,p=v.touch),"href"in v&&n(9,b=v.href),"component"in v&&n(10,k=v.component),"$$scope"in v&&n(22,a=v.$$scope)},[l,c,u,d,f,h,m,g,p,b,k,E,S,O,o,R,y,T,s,M,r,I,a]}class Qw extends De{constructor(e){super();Re(this,e,D1,R1,Oe,{use:0,class:1,style:2,ripple:3,color:4,mini:5,exited:6,extended:7,touch:8,href:9,component:10,getElement:19})}get getElement(){return this.$$.ctx[19]}}function M1(t){let e;const n=t[9].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function N1(t){let e,n,i;const s=[{use:[t[4],...t[0]]},{class:ee({[t[1]]:!0,"mdc-button__label":t[5]==="button","mdc-fab__label":t[5]==="fab","mdc-tab__text-label":t[5]==="tab","mdc-image-list__label":t[5]==="image-list","mdc-snackbar__label":t[5]==="snackbar","mdc-banner__text":t[5]==="banner","mdc-segmented-button__label":t[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":t[5]==="data-table:pagination","mdc-data-table__header-cell-label":t[5]==="data-table:sortable-header-cell"})},t[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:t[6]},t[7]];var r=t[2];function a(o){let l={$$slots:{default:[M1]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[10](e)),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&243?ae(s,[l&17&&{use:[o[4],...o[0]]},l&34&&{class:ee({[o[1]]:!0,"mdc-button__label":o[5]==="button","mdc-fab__label":o[5]==="fab","mdc-tab__text-label":o[5]==="tab","mdc-image-list__label":o[5]==="image-list","mdc-snackbar__label":o[5]==="snackbar","mdc-banner__text":o[5]==="banner","mdc-segmented-button__label":o[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":o[5]==="data-table:pagination","mdc-data-table__header-cell-label":o[5]==="data-table:sortable-header-cell"})},l&32&&ze(o[5]==="snackbar"?{"aria-atomic":"false"}:{}),l&64&&{tabindex:o[6]},l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[2])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[10](e),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[10](null),o&&X(n),e&&Be(e,o)}}}function P1(t,e,n){const i=["use","class","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,u,{component:d=Rc}=e;const f=gt("SMUI:label:context"),h=gt("SMUI:label:tabindex");function m(){return u.getElement()}function g(p){ie[p?"unshift":"push"](()=>{u=p,n(3,u)})}return t.$$set=p=>{e=D(D({},e),ke(p)),n(7,s=J(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"component"in p&&n(2,d=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,d,u,o,f,h,s,m,r,g,a]}class F1 extends De{constructor(e){super();Re(this,e,P1,N1,Oe,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function U1(t){let e;const n=t[9].default,i=de(n,t,t[11],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2048)&&he(i,n,s,s[11],e?fe(n,s[11],r,null):me(s[11]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function V1(t){let e,n,i;const s=[{use:[t[5],...t[0]]},{class:ee({[t[1]]:!0,"mdc-button__icon":t[6]==="button","mdc-fab__icon":t[6]==="fab","mdc-icon-button__icon":t[6]==="icon-button","mdc-icon-button__icon--on":t[6]==="icon-button"&&t[2],"mdc-tab__icon":t[6]==="tab","mdc-banner__icon":t[6]==="banner","mdc-segmented-button__icon":t[6]==="segmented-button"})},{"aria-hidden":"true"},t[3]===Dc?{focusable:"false",tabindex:"-1"}:{},t[7]];var r=t[3];function a(o){let l={$$slots:{default:[U1]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[10](e)),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&239?ae(s,[l&33&&{use:[o[5],...o[0]]},l&70&&{class:ee({[o[1]]:!0,"mdc-button__icon":o[6]==="button","mdc-fab__icon":o[6]==="fab","mdc-icon-button__icon":o[6]==="icon-button","mdc-icon-button__icon--on":o[6]==="icon-button"&&o[2],"mdc-tab__icon":o[6]==="tab","mdc-banner__icon":o[6]==="banner","mdc-segmented-button__icon":o[6]==="segmented-button"})},s[2],l&8&&ze(o[3]===Dc?{focusable:"false",tabindex:"-1"}:{}),l&128&&ze(o[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[3])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[10](e),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[10](null),o&&X(n),e&&Be(e,o)}}}function B1(t,e,n){const i=["use","class","on","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{on:u=!1}=e,d,{component:f=D_}=e;const h=gt("SMUI:icon:context");function m(){return d.getElement()}function g(p){ie[p?"unshift":"push"](()=>{d=p,n(4,d)})}return t.$$set=p=>{e=D(D({},e),ke(p)),n(7,s=J(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"on"in p&&n(2,u=p.on),"component"in p&&n(3,f=p.component),"$$scope"in p&&n(11,a=p.$$scope)},[l,c,u,f,d,o,h,s,m,r,g,a]}class H1 extends De{constructor(e){super();Re(this,e,B1,V1,Oe,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}}function j1(t){let e;const n=t[4].default,i=de(n,t,t[3],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&he(i,n,s,s[3],e?fe(n,s[3],r,null):me(s[3]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function q1(t,e,n){let i,{$$slots:s={},$$scope:r}=e,{key:a}=e,{value:o}=e;const l=Ki(o);return ui(t,l,c=>n(5,i=c)),et(a,l),gn(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,a=c.key),"value"in c&&n(2,o=c.value),"$$scope"in c&&n(3,r=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&zn(l,i=o,i)},[l,a,o,r,s]}class No extends De{constructor(e){super();Re(this,e,q1,j1,Oe,{key:1,value:2})}}const Zw=F1,xw=H1;/**
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
 */function z1(t){return t?t.scrollHeight>t.offsetHeight:!1}function G1(t){return t?t.scrollTop===0:!1}function K1(t){return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1}function W1(t){var e=new Set;return[].forEach.call(t,function(n){return e.add(n.offsetTop)}),e.size>1}/**
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
 */var X1=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(e,n){var i=this;this.cancel(e);var s=requestAnimationFrame(function(r){i.rafIDs.delete(e),n(r)});this.rafIDs.set(e,s)},t.prototype.cancel=function(e){var n=this.rafIDs.get(e);n&&(cancelAnimationFrame(n),this.rafIDs.delete(e))},t.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(n,i){e.cancel(i)})},t.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(n,i){e.push(i)}),e},t}();/**
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
 */var mt={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},ar={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Cu={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
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
 */var Po;(function(t){t.POLL_SCROLL_POS="poll_scroll_position",t.POLL_LAYOUT_CHANGE="poll_layout_change"})(Po||(Po={}));var Y1=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=ar.CLOSE_ACTION,i.scrimClickAction=ar.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=ar.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new X1,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ar},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Cu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(mt.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(mt.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(n){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(mt.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),n&&n.isAboveFullscreenDialog&&this.adapter.addClass(mt.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(mt.OPEN),i.adapter.addBodyClass(mt.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},Cu.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var i=this;n===void 0&&(n=""),!!this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(n),this.adapter.addClass(mt.CLOSING),this.adapter.removeClass(mt.OPEN),this.adapter.removeBodyClass(mt.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(n)},Cu.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var n=this;this.adapter.addClass(mt.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){n.adapter.addClass(mt.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(mt.SURFACE_SCRIM_SHOWN),this.adapter.addClass(mt.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(mt.SURFACE_SCRIM_HIDING),this.adapter.removeClass(mt.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(n){this.escapeKeyAction=n},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(n){this.scrimClickAction=n},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(n){this.autoStackButtons=n},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(n){this.suppressDefaultPressSelector=n},e.prototype.layout=function(){var n=this;this.animFrame.request(Po.POLL_LAYOUT_CHANGE,function(){n.layoutInternal()})},e.prototype.handleClick=function(n){var i=this.adapter.eventTargetMatches(n.target,ar.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var s=this.adapter.getActionFromEvent(n);s&&this.close(s)}},e.prototype.handleKeydown=function(n){var i=n.key==="Enter"||n.keyCode===13;if(!!i){var s=this.adapter.getActionFromEvent(n);if(!s){var r=n.composedPath?n.composedPath()[0]:n.target,a=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;i&&a&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(n){var i=n.key==="Escape"||n.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var n=this;this.animFrame.request(Po.POLL_SCROLL_POS,function(){n.toggleScrollDividerHeader(),n.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(mt.OPENING),this.adapter.removeClass(mt.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(mt.STACKED);var n=this.adapter.areButtonsStacked();n&&this.adapter.addClass(mt.STACKED),n!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=n)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(mt.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(mt.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(mt.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(mt.SCROLL_DIVIDER_HEADER):this.adapter.addClass(mt.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(mt.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(mt.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(mt.SCROLL_DIVIDER_FOOTER)},e}(Qt);const{document:J1,window:Wh}=Ua,Q1=t=>({}),Xh=t=>({});function Yh(t){let e,n,i;return{c(){e=ye("div"),rt(e,"class","mdc-dialog__surface-scrim")},m(s,r){Y(s,e,r),n||(i=Te(e,"transitionend",t[31]),n=!0)},p:Nt,d(s){s&&X(e),n=!1,i()}}}function Z1(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g;const p=t[27].default,b=de(p,t,t[26],null);let E=t[5]&&Yh(t),S=[{class:a=ee({[t[7]]:!0,"mdc-dialog__surface":!0})},{role:"alertdialog"},{"aria-modal":"true"},Me(t[17],"surface$")],O={};for(let v=0;v<S.length;v+=1)O=D(O,S[v]);let k=[{class:o=ee({[t[6]]:!0,"mdc-dialog__container":!0})},Me(t[17],"container$")],R={};for(let v=0;v<k.length;v+=1)R=D(R,k[v]);let y=[{class:u=ee(Ke({[t[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!t[4],"mdc-dialog--fullscreen":t[5],"smui-dialog--selection":t[3]},t[10]))},{role:"alertdialog"},{"aria-modal":"true"},Yn(t[17],["container$","surface$"])],T={};for(let v=0;v<y.length;v+=1)T=D(T,y[v]);const M=t[27].over,I=de(M,t,t[26],Xh);return{c(){e=Qe(),n=ye("div"),i=ye("div"),s=ye("div"),b&&b.c(),r=Qe(),E&&E.c(),l=Qe(),c=ye("div"),f=Qe(),I&&I.c(),Z(s,O),Z(i,R),rt(c,"class","mdc-dialog__scrim"),Z(n,T)},m(v,j){Y(v,e,j),Y(v,n,j),Je(n,i),Je(i,s),b&&b.m(s,null),Je(s,r),E&&E.m(s,null),Je(n,l),Je(n,c),t[32](n),Y(v,f,j),I&&I.m(v,j),h=!0,m||(g=[Te(Wh,"resize",t[28]),Te(Wh,"orientationchange",t[29]),Te(J1.body,"keydown",t[30]),$(d=Ze.call(null,n,t[1])),$(t[11].call(null,n)),Te(n,"SMUIDialog:opening",t[14]),Te(n,"SMUIDialog:opened",t[15]),Te(n,"SMUIDialog:closed",t[16]),Te(n,"click",t[33]),Te(n,"keydown",t[34])],m=!0)},p(v,j){b&&b.p&&(!h||j[0]&67108864)&&he(b,p,v,v[26],h?fe(p,v[26],j,null):me(v[26]),null),v[5]?E?E.p(v,j):(E=Yh(v),E.c(),E.m(s,null)):E&&(E.d(1),E=null),Z(s,O=ae(S,[(!h||j[0]&128&&a!==(a=ee({[v[7]]:!0,"mdc-dialog__surface":!0})))&&{class:a},{role:"alertdialog"},{"aria-modal":"true"},j[0]&131072&&Me(v[17],"surface$")])),Z(i,R=ae(k,[(!h||j[0]&64&&o!==(o=ee({[v[6]]:!0,"mdc-dialog__container":!0})))&&{class:o},j[0]&131072&&Me(v[17],"container$")])),Z(n,T=ae(y,[(!h||j[0]&1084&&u!==(u=ee(Ke({[v[2]]:!0,"mdc-dialog":!0,"mdc-dialog--stacked":!v[4],"mdc-dialog--fullscreen":v[5],"smui-dialog--selection":v[3]},v[10]))))&&{class:u},{role:"alertdialog"},{"aria-modal":"true"},j[0]&131072&&Yn(v[17],["container$","surface$"])])),d&&Ue(d.update)&&j[0]&2&&d.update.call(null,v[1]),I&&I.p&&(!h||j[0]&67108864)&&he(I,M,v,v[26],h?fe(M,v[26],j,Q1):me(v[26]),Xh)},i(v){h||(L(b,v),L(I,v),h=!0)},o(v){N(b,v),N(I,v),h=!1},d(v){v&&X(e),v&&X(n),b&&b.d(v),E&&E.d(),t[32](null),v&&X(f),I&&I.d(v),m=!1,Xe(g)}}}function x1(t,e,n){const i=["use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"];let s=J(e,i),r,a,{$$slots:o={},$$scope:l}=e;var c;const{FocusTrap:u}=bc,{closest:d,matches:f}=Cr,h=qe(Se());let{use:m=[]}=e,{class:g=""}=e,{open:p=!1}=e,{selection:b=!1}=e,{escapeKeyAction:E="close"}=e,{scrimClickAction:S="close"}=e,{autoStackButtons:O=!0}=e,{fullscreen:k=!1}=e,{container$class:R=""}=e,{surface$class:y=""}=e,T,M,I={},v,j=Ki(!1);ui(t,j,te=>n(38,a=te));let A=gt("SMUI:dialog:aboveFullscreen"),V=(c=gt("SMUI:dialog:aboveFullscreenShown"))!==null&&c!==void 0?c:Ki(!1);ui(t,V,te=>n(25,r=te));let F=gt("SMUI:addLayoutListener"),K,G=[],Q=te=>(G.push(te),()=>{const Ie=G.indexOf(te);Ie>=0&&G.splice(Ie,1)});et("SMUI:dialog:actions:reversed",j),et("SMUI:addLayoutListener",Q),et("SMUI:dialog:selection",b),et("SMUI:dialog:aboveFullscreen",A||k),et("SMUI:dialog:aboveFullscreenShown",V),F&&(K=F(kt));let Ee=r;Bt(()=>{var te;return v=new u(T,{initialFocusEl:(te=Ae())!==null&&te!==void 0?te:void 0}),n(8,M=new Y1({addBodyClass:Ie=>document.body.classList.add(Ie),addClass:Fe,areButtonsStacked:()=>W1(st()),clickDefaultButton:()=>{const Ie=x();Ie&&Ie.click()},eventTargetMatches:(Ie,_t)=>Ie?f(Ie,_t):!1,getActionFromEvent:Ie=>{if(!Ie.target)return"";const _t=d(Ie.target,"[data-mdc-dialog-action]");return _t&&_t.getAttribute("data-mdc-dialog-action")},getInitialFocusEl:Ae,hasClass:re,isContentScrollable:()=>z1(H()),notifyClosed:Ie=>{n(0,p=!1),$e(z(),"SMUIDialog:closed",Ie?{action:Ie}:{},void 0,!0)},notifyClosing:Ie=>$e(z(),"SMUIDialog:closing",Ie?{action:Ie}:{},void 0,!0),notifyOpened:()=>$e(z(),"SMUIDialog:opened",{},void 0,!0),notifyOpening:()=>$e(z(),"SMUIDialog:opening",{},void 0,!0),releaseFocus:()=>v.releaseFocus(),removeBodyClass:Ie=>document.body.classList.remove(Ie),removeClass:ge,reverseButtons:()=>{zn(j,a=!0,a)},trapFocus:()=>v.trapFocus(),registerContentEventHandler:(Ie,_t)=>{const dt=H();dt instanceof HTMLElement&&dt.addEventListener(Ie,_t)},deregisterContentEventHandler:(Ie,_t)=>{const dt=H();dt instanceof HTMLElement&&dt.removeEventListener(Ie,_t)},isScrollableContentAtTop:()=>G1(H()),isScrollableContentAtBottom:()=>K1(H()),registerWindowEventHandler:(Ie,_t)=>{window.addEventListener(Ie,_t)},deregisterWindowEventHandler:(Ie,_t)=>{window.removeEventListener(Ie,_t)}})),M.init(),()=>{M.destroy()}}),gn(()=>{K&&K()});function re(te){return te in I?I[te]:z().classList.contains(te)}function Fe(te){I[te]||n(10,I[te]=!0,I)}function ge(te){(!(te in I)||I[te])&&n(10,I[te]=!1,I)}function st(){return[].slice.call(T.querySelectorAll(".mdc-dialog__button"))}function x(){return T.querySelector("[data-mdc-dialog-button-default")}function H(){return T.querySelector(".mdc-dialog__content")}function Ae(){return T.querySelector("[data-mdc-dialog-initial-focus]")}function le(){A&&zn(V,r=!0,r),requestAnimationFrame(()=>{G.forEach(te=>te())})}function q(){G.forEach(te=>te())}function U(){A&&zn(V,r=!1,r)}function be(){return p}function lt(te){n(0,p=te)}function kt(){return M.layout()}function z(){return T}const pe=()=>p&&M&&M.layout(),We=()=>p&&M&&M.layout(),it=te=>p&&M&&M.handleDocumentKeydown(te),Ye=()=>M&&M.handleSurfaceScrimTransitionEnd();function Vt(te){ie[te?"unshift":"push"](()=>{T=te,n(9,T)})}const un=te=>M&&M.handleClick(te),At=te=>M&&M.handleKeydown(te);return t.$$set=te=>{e=D(D({},e),ke(te)),n(17,s=J(e,i)),"use"in te&&n(1,m=te.use),"class"in te&&n(2,g=te.class),"open"in te&&n(0,p=te.open),"selection"in te&&n(3,b=te.selection),"escapeKeyAction"in te&&n(18,E=te.escapeKeyAction),"scrimClickAction"in te&&n(19,S=te.scrimClickAction),"autoStackButtons"in te&&n(4,O=te.autoStackButtons),"fullscreen"in te&&n(5,k=te.fullscreen),"container$class"in te&&n(6,R=te.container$class),"surface$class"in te&&n(7,y=te.surface$class),"$$scope"in te&&n(26,l=te.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&262400&&M&&M.getEscapeKeyAction()!==E&&M.setEscapeKeyAction(E),t.$$.dirty[0]&524544&&M&&M.getScrimClickAction()!==S&&M.setScrimClickAction(S),t.$$.dirty[0]&272&&M&&M.getAutoStackButtons()!==O&&M.setAutoStackButtons(O),t.$$.dirty[0]&16&&(O||zn(j,a=!0,a)),t.$$.dirty[0]&257&&M&&M.isOpen()!==p&&(p?M.open({isAboveFullscreenDialog:!!A}):M.close()),t.$$.dirty[0]&50331936&&k&&M&&Ee!==r&&(n(24,Ee=r),r?M.showSurfaceScrim():M.hideSurfaceScrim())},[p,m,g,b,O,k,R,y,M,T,I,h,j,V,le,q,U,s,E,S,be,lt,kt,z,Ee,r,l,o,pe,We,it,Ye,Vt,un,At]}class $w extends De{constructor(e){super();Re(this,e,x1,Z1,Oe,{use:1,class:2,open:0,selection:3,escapeKeyAction:18,scrimClickAction:19,autoStackButtons:4,fullscreen:5,container$class:6,surface$class:7,isOpen:20,setOpen:21,layout:22,getElement:23},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get layout(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}It({class:"mdc-dialog__header",component:_n,contexts:{"SMUI:icon-button:context":"dialog:header"}});var eO=It({class:"mdc-dialog__title",component:Mc}),tO=It({class:"mdc-dialog__content",component:_n}),nO=It({class:"mdc-dialog__actions",component:_n,classMap:{"smui-dialog__actions--reversed":"SMUI:dialog:actions:reversed"},contexts:{"SMUI:button:context":"dialog:action"}});function Jh(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-button__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function $1(t){let e,n,i,s;const r=t[26].default,a=de(r,t,t[28],null);let o=t[6]&&Jh();return{c(){e=ye("div"),n=Qe(),a&&a.c(),o&&o.c(),i=Rt(),rt(e,"class","mdc-button__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c&268435456)&&he(a,r,l,l[28],s?fe(r,l[28],c,null):me(l[28]),null),l[6]?o||(o=Jh(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(L(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function e0(t){let e,n,i;const s=[{use:[[yn,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:ee(Ke({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(Qh).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var r=t[9];function a(o){let l={$$slots:{default:[$1]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[27](e),e.$on("click",t[21])),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,[l]){const c=l&6289919?ae(s,[l&6094873&&{use:[[yn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[22].disabled,addClass:o[18],removeClass:o[19],addStyle:o[20]}],o[16],...o[0]]},l&133490&&{class:ee(Ke({[o[1]]:!0,"mdc-button":!0,"mdc-button--raised":o[5]==="raised","mdc-button--unelevated":o[5]==="unelevated","mdc-button--outlined":o[5]==="outlined","smui-button--color-secondary":o[4]==="secondary","mdc-button--touch":o[6],"mdc-card__action":o[17]==="card:action","mdc-card__action--button":o[17]==="card:action","mdc-dialog__button":o[17]==="dialog:action","mdc-top-app-bar__navigation-icon":o[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[17]==="top-app-bar:action","mdc-snackbar__action":o[17]==="snackbar:actions","mdc-banner__secondary-action":o[17]==="banner"&&o[8],"mdc-banner__primary-action":o[17]==="banner"&&!o[8],"mdc-tooltip__action":o[17]==="tooltip:rich-actions"},o[11]))},l&4100&&{style:Object.entries(o[12]).map(Qh).concat([o[2]]).join(" ")},l&32768&&ze(o[15]),l&16384&&ze(o[14]),l&8192&&ze(o[13]),l&128&&{href:o[7]},l&4194304&&ze(o[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[9])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[27](e),e.$on("click",o[21]),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[27](null),o&&X(n),e&&Be(e,o)}}}const Qh=([t,e])=>`${t}: ${e};`;function t0(t,e,n){let i,s,r;const a=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let o=J(e,a),{$$slots:l={},$$scope:c}=e;const u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{ripple:m=!0}=e,{color:g="primary"}=e,{variant:p="text"}=e,{touch:b=!1}=e,{href:E=void 0}=e,{action:S="close"}=e,{defaultAction:O=!1}=e,{secondary:k=!1}=e,R,y={},T={},M=gt("SMUI:button:context"),{component:I=E==null?Ga:wr}=e;et("SMUI:label:context","button"),et("SMUI:icon:context","button");function v(G){y[G]||n(11,y[G]=!0,y)}function j(G){(!(G in y)||y[G])&&n(11,y[G]=!1,y)}function A(G,Q){T[G]!=Q&&(Q===""||Q==null?(delete T[G],n(12,T)):n(12,T[G]=Q,T))}function V(){M==="banner"&&$e(F(),k?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function F(){return R.getElement()}function K(G){ie[G?"unshift":"push"](()=>{R=G,n(10,R)})}return t.$$set=G=>{n(29,e=D(D({},e),ke(G))),n(22,o=J(e,a)),"use"in G&&n(0,d=G.use),"class"in G&&n(1,f=G.class),"style"in G&&n(2,h=G.style),"ripple"in G&&n(3,m=G.ripple),"color"in G&&n(4,g=G.color),"variant"in G&&n(5,p=G.variant),"touch"in G&&n(6,b=G.touch),"href"in G&&n(7,E=G.href),"action"in G&&n(23,S=G.action),"defaultAction"in G&&n(24,O=G.defaultAction),"secondary"in G&&n(8,k=G.secondary),"component"in G&&n(9,I=G.component),"$$scope"in G&&n(28,c=G.$$scope)},t.$$.update=()=>{n(15,i=M==="dialog:action"&&S!=null?{"data-mdc-dialog-action":S}:{action:e.action}),n(14,s=M==="dialog:action"&&O?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,r=M==="banner"?{}:{secondary:e.secondary})},e=ke(e),[d,f,h,m,g,p,b,E,k,I,R,y,T,r,s,i,u,M,v,j,A,V,o,S,O,F,l,K,c]}class iO extends De{constructor(e){super();Re(this,e,t0,e0,Oe,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}/**
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
 */var n0={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var i0=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return n0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;n?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Qt);/**
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
 */var Oi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var s0=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Oi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Oi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Oi.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Oi.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(Oi.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(Oi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Oi.LINE_RIPPLE_DEACTIVATING))},e}(Qt);/**
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
 */var r0={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Zh={NOTCH_ELEMENT_PADDING:8},o0={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var a0=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return r0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Zh},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Zh.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Qt);/**
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
 */var wu={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},l0={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},xh={LABEL_SCALE:.75},u0=["pattern","min","max","required","step","minlength","maxlength"],c0=["color","date","datetime-local","month","range","time","week"];/**
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
 */var $h=["mousedown","touchstart"],em=["click","keydown"],d0=function(t){Dt(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return l0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return wu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xh},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return c0.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var a=Rn($h),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}try{for(var c=Rn(em),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){s={error:d}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var a=Rn($h),o=a.next();!o.done;o=a.next()){var l=o.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}try{for(var c=Rn(em),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(d){s={error:d}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(s){return u0.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*xh.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,s=i?i[0]:n,r=s.target.getBoundingClientRect(),a=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(a)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),a=this.helperText.getId();r&&a?this.adapter.setInputAttr(wu.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(wu.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;n?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Qt);/**
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
 */var Sn={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Un={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Sn.ROOT};/**
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
 */var f0=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Un},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Un.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(Sn.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(Sn.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(Sn.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(Sn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(Sn.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Sn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Un.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(Sn.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(Sn.HELPER_TEXT_VALIDATION_MSG),r=s&&!n;r?(this.showToScreenReader(),this.adapter.getAttr(Un.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Un.ROLE,"alert")):this.adapter.removeAttr(Un.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Un.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(Un.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(Un.ROLE,"alert")})},e}(Qt);function h0(t){let e,n,i,s,r,a,o,l;const c=t[22].default,u=de(c,t,t[21],null);let d=[{class:n=ee(Ke({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(nm).concat([t[4]]).join(" ")},{for:s=t[5]||(t[11]?t[11].id:void 0)},t[12]],f={};for(let h=0;h<d.length;h+=1)f=D(f,d[h]);return{c(){e=ye("label"),u&&u.c(),Z(e,f)},m(h,m){Y(h,e,m),u&&u.m(e,null),t[24](e),a=!0,o||(l=[$(r=Ze.call(null,e,t[2])),$(t[10].call(null,e))],o=!0)},p(h,m){u&&u.p&&(!a||m&2097152)&&he(u,c,h,h[21],a?fe(c,h[21],m,null):me(h[21]),null),Z(e,f=ae(d,[(!a||m&267&&n!==(n=ee(Ke({[h[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":h[0],"mdc-floating-label--required":h[1]},h[8]))))&&{class:n},(!a||m&528&&i!==(i=Object.entries(h[9]).map(nm).concat([h[4]]).join(" ")))&&{style:i},(!a||m&32&&s!==(s=h[5]||(h[11]?h[11].id:void 0)))&&{for:s},m&4096&&h[12]])),r&&Ue(r.update)&&m&4&&r.update.call(null,h[2])},i(h){a||(L(u,h),a=!0)},o(h){N(u,h),a=!1},d(h){h&&X(e),u&&u.d(h),t[24](null),o=!1,Xe(l)}}}function m0(t){let e,n,i,s,r,a,o;const l=t[22].default,c=de(l,t,t[21],null);let u=[{class:n=ee(Ke({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(tm).concat([t[4]]).join(" ")},t[12]],d={};for(let f=0;f<u.length;f+=1)d=D(d,u[f]);return{c(){e=ye("span"),c&&c.c(),Z(e,d)},m(f,h){Y(f,e,h),c&&c.m(e,null),t[23](e),r=!0,a||(o=[$(s=Ze.call(null,e,t[2])),$(t[10].call(null,e))],a=!0)},p(f,h){c&&c.p&&(!r||h&2097152)&&he(c,l,f,f[21],r?fe(l,f[21],h,null):me(f[21]),null),Z(e,d=ae(u,[(!r||h&267&&n!==(n=ee(Ke({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!r||h&528&&i!==(i=Object.entries(f[9]).map(tm).concat([f[4]]).join(" ")))&&{style:i},h&4096&&f[12]])),s&&Ue(s.update)&&h&4&&s.update.call(null,f[2])},i(f){r||(L(c,f),r=!0)},o(f){N(c,f),r=!1},d(f){f&&X(e),c&&c.d(f),t[23](null),a=!1,Xe(o)}}}function p0(t){let e,n,i,s;const r=[m0,h0],a=[];function o(l,c){return l[6]?0:1}return e=o(t),n=a[e]=r[e](t),{c(){n.c(),i=Rt()},m(l,c){a[e].m(l,c),Y(l,i,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ft(),N(a[u],1,1,()=>{a[u]=null}),ht(),n=a[e],n?n.p(l,c):(n=a[e]=r[e](l),n.c()),L(n,1),n.m(i.parentNode,i))},i(l){s||(L(n),s=!0)},o(l){N(n),s=!1},d(l){a[e].d(l),l&&X(i)}}}const tm=([t,e])=>`${t}: ${e};`,nm=([t,e])=>`${t}: ${e};`;function g0(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;var o;const l=qe(Se());let{use:c=[]}=e,{class:u=""}=e,{style:d=""}=e,{for:f=void 0}=e,{floatAbove:h=!1}=e,{required:m=!1}=e,{wrapped:g=!1}=e,p,b,E={},S={},O=(o=gt("SMUI:generic:input:props"))!==null&&o!==void 0?o:{},k=h,R=m;Bt(()=>{n(18,b=new i0({addClass:y,removeClass:T,getWidth:()=>{var Ee,re;const Fe=F(),ge=Fe.cloneNode(!0);(Ee=Fe.parentNode)===null||Ee===void 0||Ee.appendChild(ge),ge.classList.add("smui-floating-label--remove-transition"),ge.classList.add("smui-floating-label--force-size"),ge.classList.remove("mdc-floating-label--float-above");const st=ge.scrollWidth;return(re=Fe.parentNode)===null||re===void 0||re.removeChild(ge),st},registerInteractionHandler:(Ee,re)=>F().addEventListener(Ee,re),deregisterInteractionHandler:(Ee,re)=>F().removeEventListener(Ee,re)}));const Q={get element(){return F()},addStyle:M,removeStyle:I};return $e(p,"SMUIFloatingLabel:mount",Q),b.init(),()=>{$e(p,"SMUIFloatingLabel:unmount",Q),b.destroy()}});function y(Q){E[Q]||n(8,E[Q]=!0,E)}function T(Q){(!(Q in E)||E[Q])&&n(8,E[Q]=!1,E)}function M(Q,Ee){S[Q]!=Ee&&(Ee===""||Ee==null?(delete S[Q],n(9,S)):n(9,S[Q]=Ee,S))}function I(Q){Q in S&&(delete S[Q],n(9,S))}function v(Q){b.shake(Q)}function j(Q){n(0,h=Q)}function A(Q){n(1,m=Q)}function V(){return b.getWidth()}function F(){return p}function K(Q){ie[Q?"unshift":"push"](()=>{p=Q,n(7,p)})}function G(Q){ie[Q?"unshift":"push"](()=>{p=Q,n(7,p)})}return t.$$set=Q=>{e=D(D({},e),ke(Q)),n(12,s=J(e,i)),"use"in Q&&n(2,c=Q.use),"class"in Q&&n(3,u=Q.class),"style"in Q&&n(4,d=Q.style),"for"in Q&&n(5,f=Q.for),"floatAbove"in Q&&n(0,h=Q.floatAbove),"required"in Q&&n(1,m=Q.required),"wrapped"in Q&&n(6,g=Q.wrapped),"$$scope"in Q&&n(21,a=Q.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&b&&k!==h&&(n(19,k=h),b.float(h)),t.$$.dirty&1310722&&b&&R!==m&&(n(20,R=m),b.setRequired(m))},[h,m,c,u,d,f,g,p,E,S,l,O,s,v,j,A,V,F,b,k,R,a,r,K,G]}class Fo extends De{constructor(e){super();Re(this,e,g0,p0,Oe,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function _0(t){let e,n,i,s,r,a,o=[{class:n=ee(Ke({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(im).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<o.length;c+=1)l=D(l,o[c]);return{c(){e=ye("div"),Z(e,l)},m(c,u){Y(c,e,u),t[13](e),r||(a=[$(s=Ze.call(null,e,t[0])),$(t[7].call(null,e))],r=!0)},p(c,[u]){Z(e,l=ae(o,[u&42&&n!==(n=ee(Ke({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(im).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),s&&Ue(s.update)&&u&1&&s.update.call(null,c[0])},i:Nt,o:Nt,d(c){c&&X(e),t[13](null),r=!1,Xe(a)}}}const im=([t,e])=>`${t}: ${e};`;function y0(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=J(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{style:l=""}=e,{active:c=!1}=e,u,d,f={},h={};Bt(()=>(d=new s0({addClass:g,removeClass:p,hasClass:m,setStyle:b,registerEventHandler:(y,T)=>k().addEventListener(y,T),deregisterEventHandler:(y,T)=>k().removeEventListener(y,T)}),d.init(),()=>{d.destroy()}));function m(y){return y in f?f[y]:k().classList.contains(y)}function g(y){f[y]||n(5,f[y]=!0,f)}function p(y){(!(y in f)||f[y])&&n(5,f[y]=!1,f)}function b(y,T){h[y]!=T&&(T===""||T==null?(delete h[y],n(6,h)):n(6,h[y]=T,h))}function E(){d.activate()}function S(){d.deactivate()}function O(y){d.setRippleCenter(y)}function k(){return u}function R(y){ie[y?"unshift":"push"](()=>{u=y,n(4,u)})}return t.$$set=y=>{e=D(D({},e),ke(y)),n(8,s=J(e,i)),"use"in y&&n(0,a=y.use),"class"in y&&n(1,o=y.class),"style"in y&&n(2,l=y.style),"active"in y&&n(3,c=y.active)},[a,o,l,c,u,f,h,r,s,E,S,O,k,R]}class sm extends De{constructor(e){super();Re(this,e,y0,_0,Oe,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function rm(t){let e,n,i;const s=t[14].default,r=de(s,t,t[13],null);return{c(){e=ye("div"),r&&r.c(),rt(e,"class","mdc-notched-outline__notch"),rt(e,"style",n=Object.entries(t[7]).map(om).join(" "))},m(a,o){Y(a,e,o),r&&r.m(e,null),i=!0},p(a,o){r&&r.p&&(!i||o&8192)&&he(r,s,a,a[13],i?fe(s,a[13],o,null):me(a[13]),null),(!i||o&128&&n!==(n=Object.entries(a[7]).map(om).join(" ")))&&rt(e,"style",n)},i(a){i||(L(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(e),r&&r.d(a)}}}function I0(t){let e,n,i,s,r,a,o,l,c,u,d=!t[3]&&rm(t),f=[{class:a=ee(Ke({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],h={};for(let m=0;m<f.length;m+=1)h=D(h,f[m]);return{c(){e=ye("div"),n=ye("div"),i=Qe(),d&&d.c(),s=Qe(),r=ye("div"),rt(n,"class","mdc-notched-outline__leading"),rt(r,"class","mdc-notched-outline__trailing"),Z(e,h)},m(m,g){Y(m,e,g),Je(e,n),Je(e,i),d&&d.m(e,null),Je(e,s),Je(e,r),t[15](e),l=!0,c||(u=[$(o=Ze.call(null,e,t[0])),$(t[8].call(null,e)),Te(e,"SMUIFloatingLabel:mount",t[16]),Te(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(m,[g]){m[3]?d&&(ft(),N(d,1,1,()=>{d=null}),ht()):d?(d.p(m,g),g&8&&L(d,1)):(d=rm(m),d.c(),L(d,1),d.m(e,s)),Z(e,h=ae(f,[(!l||g&78&&a!==(a=ee(Ke({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:a},g&512&&m[9]])),o&&Ue(o.update)&&g&1&&o.update.call(null,m[0])},i(m){l||(L(d),l=!0)},o(m){N(d),l=!1},d(m){m&&X(e),d&&d.d(),t[15](null),c=!1,Xe(u)}}}const om=([t,e])=>`${t}: ${e};`;function v0(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:d=!1}=e,f,h,m,g={},p={};Bt(()=>(h=new a0({addClass:b,removeClass:E,setNotchWidthProperty:v=>S("width",v+"px"),removeNotchWidthProperty:()=>O("width")}),h.init(),()=>{h.destroy()}));function b(v){g[v]||n(6,g[v]=!0,g)}function E(v){(!(v in g)||g[v])&&n(6,g[v]=!1,g)}function S(v,j){p[v]!=j&&(j===""||j==null?(delete p[v],n(7,p)):n(7,p[v]=j,p))}function O(v){v in p&&(delete p[v],n(7,p))}function k(v){h.notch(v)}function R(){h.closeNotch()}function y(){return f}function T(v){ie[v?"unshift":"push"](()=>{f=v,n(5,f)})}const M=v=>n(4,m=v.detail),I=()=>n(4,m=void 0);return t.$$set=v=>{e=D(D({},e),ke(v)),n(9,s=J(e,i)),"use"in v&&n(0,l=v.use),"class"in v&&n(1,c=v.class),"notched"in v&&n(2,u=v.notched),"noLabel"in v&&n(3,d=v.noLabel),"$$scope"in v&&n(13,a=v.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),b("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):E("mdc-notched-outline--upgraded"))},[l,c,u,d,m,f,g,p,o,s,k,R,y,a,r,T,M,I]}class am extends De{constructor(e){super();Re(this,e,v0,I0,Oe,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var b0=It({class:"mdc-text-field-helper-line",component:_n}),E0=It({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Qn}),A0=It({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Qn});function T0(t){let e,n,i,s,r,a=[{class:n=ee({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],o={};for(let l=0;l<a.length;l+=1)o=D(o,a[l]);return{c(){e=ye("input"),Z(e,o)},m(l,c){Y(l,e,c),e.autofocus&&e.focus(),t[25](e),s||(r=[$(i=Ze.call(null,e,t[0])),$(t[7].call(null,e)),Te(e,"input",t[26]),Te(e,"change",t[9]),Te(e,"blur",t[23]),Te(e,"focus",t[24])],s=!0)},p(l,[c]){Z(e,o=ae(a,[c&2&&n!==(n=ee({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&Ue(i.update)&&c&1&&i.update.call(null,l[0])},i:Nt,o:Nt,d(l){l&&X(e),t[25](null),s=!1,Xe(r)}}}function S0(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function C0(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=J(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:d=null}=e,{dirty:f=!1}=e,{invalid:h=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:p=u===void 0}=e,b,E={},S={};Bt(()=>{m&&n(14,h=b.matches(":invalid"))});function O(F){if(l==="file"){n(12,d=F.currentTarget.files);return}if(F.currentTarget.value===""&&g){n(11,u=null);return}if(F.currentTarget.value===""&&p){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=S0(F.currentTarget.value));break;default:n(11,u=F.currentTarget.value);break}}function k(F){(l==="file"||l==="range")&&O(F),n(13,f=!0),m&&n(14,h=b.matches(":invalid"))}function R(F){var K;return F in E?(K=E[F])!==null&&K!==void 0?K:null:I().getAttribute(F)}function y(F,K){E[F]!==K&&n(6,E[F]=K,E)}function T(F){(!(F in E)||E[F]!=null)&&n(6,E[F]=void 0,E)}function M(){I().focus()}function I(){return b}function v(F){ci.call(this,t,F)}function j(F){ci.call(this,t,F)}function A(F){ie[F?"unshift":"push"](()=>{b=F,n(5,b)})}const V=F=>l!=="file"&&O(F);return t.$$set=F=>{e=D(D({},e),ke(F)),n(10,s=J(e,i)),"use"in F&&n(0,a=F.use),"class"in F&&n(1,o=F.class),"type"in F&&n(2,l=F.type),"placeholder"in F&&n(3,c=F.placeholder),"value"in F&&n(11,u=F.value),"files"in F&&n(12,d=F.files),"dirty"in F&&n(13,f=F.dirty),"invalid"in F&&n(14,h=F.invalid),"updateInvalid"in F&&n(15,m=F.updateInvalid),"emptyValueNull"in F&&n(16,g=F.emptyValueNull),"emptyValueUndefined"in F&&n(17,p=F.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete S.value,n(4,S),n(2,l),n(11,u)):n(4,S.value=u==null?"":u,S))},[a,o,l,c,S,b,E,r,O,k,s,u,d,f,h,m,g,p,R,y,T,M,I,v,j,A,V]}class w0 extends De{constructor(e){super();Re(this,e,C0,T0,Oe,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function O0(t){let e,n,i,s,r,a,o=[{class:n=ee({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<o.length;c+=1)l=D(l,o[c]);return{c(){e=ye("textarea"),Z(e,l)},m(c,u){Y(c,e,u),e.autofocus&&e.focus(),t[20](e),pc(e,t[0]),r||(a=[$(s=Ze.call(null,e,t[1])),$(t[7].call(null,e)),Te(e,"change",t[8]),Te(e,"blur",t[18]),Te(e,"focus",t[19]),Te(e,"input",t[21])],r=!0)},p(c,[u]){Z(e,l=ae(o,[u&4&&n!==(n=ee({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),s&&Ue(s.update)&&u&2&&s.update.call(null,c[1]),u&1&&pc(e,c[0])},i:Nt,o:Nt,d(c){c&&X(e),t[20](null),r=!1,Xe(a)}}}function L0(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=J(e,i);const r=qe(Se());let{use:a=[]}=e,{class:o=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:d=!1}=e,{updateInvalid:f=!0}=e,{resizable:h=!0}=e,m,g={};Bt(()=>{f&&n(11,d=m.matches(":invalid"))});function p(){n(10,u=!0),f&&n(11,d=m.matches(":invalid"))}function b(I){var v;return I in g?(v=g[I])!==null&&v!==void 0?v:null:k().getAttribute(I)}function E(I,v){g[I]!==v&&n(6,g[I]=v,g)}function S(I){(!(I in g)||g[I]!=null)&&n(6,g[I]=void 0,g)}function O(){k().focus()}function k(){return m}function R(I){ci.call(this,t,I)}function y(I){ci.call(this,t,I)}function T(I){ie[I?"unshift":"push"](()=>{m=I,n(5,m)})}function M(){c=this.value,n(0,c)}return t.$$set=I=>{e=D(D({},e),ke(I)),n(9,s=J(e,i)),"use"in I&&n(1,a=I.use),"class"in I&&n(2,o=I.class),"style"in I&&n(3,l=I.style),"value"in I&&n(0,c=I.value),"dirty"in I&&n(10,u=I.dirty),"invalid"in I&&n(11,d=I.invalid),"updateInvalid"in I&&n(12,f=I.updateInvalid),"resizable"in I&&n(4,h=I.resizable)},[c,a,o,l,h,m,g,r,p,s,u,d,f,b,E,S,O,k,R,y,T,M]}class k0 extends De{constructor(e){super();Re(this,e,L0,O0,Oe,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const R0=t=>({}),lm=t=>({}),D0=t=>({}),um=t=>({}),M0=t=>({}),cm=t=>({}),N0=t=>({}),dm=t=>({}),P0=t=>({}),fm=t=>({}),F0=t=>({}),hm=t=>({}),U0=t=>({}),mm=t=>({}),V0=t=>({}),pm=t=>({}),B0=t=>({}),gm=t=>({}),H0=t=>({}),_m=t=>({}),j0=t=>({}),ym=t=>({}),q0=t=>({}),Im=t=>({});function z0(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m;const g=t[50].label,p=de(g,t,t[89],fm);i=new No({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[K0]},$$scope:{ctx:t}}});const b=t[50].default,E=de(b,t,t[89],null);a=new No({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[W0]},$$scope:{ctx:t}}});const S=t[50].ripple,O=de(S,t,t[89],um);let k=[{class:l=ee(Ke({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(km).concat([t[10]]).join(" ")},Yn(t[42],["input$","label$","ripple$","outline$","helperLine$"])],R={};for(let y=0;y<k.length;y+=1)R=D(R,k[y]);return{c(){e=ye("div"),p&&p.c(),n=Qe(),Ge(i.$$.fragment),s=Qe(),E&&E.c(),r=Qe(),Ge(a.$$.fragment),o=Qe(),O&&O.c(),Z(e,R)},m(y,T){Y(y,e,T),p&&p.m(e,null),Je(e,n),Ve(i,e,null),Je(e,s),E&&E.m(e,null),Je(e,r),Ve(a,e,null),Je(e,o),O&&O.m(e,null),t[79](e),f=!0,h||(m=[$(u=yn.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),$(d=Ze.call(null,e,t[8])),$(t[34].call(null,e)),Te(e,"SMUITextfieldLeadingIcon:mount",t[80]),Te(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Te(e,"SMUITextfieldTrailingIcon:mount",t[82]),Te(e,"SMUITextfieldTrailingIcon:unmount",t[83])],h=!0)},p(y,T){p&&p.p&&(!f||T[2]&134217728)&&he(p,g,y,y[89],f?fe(g,y[89],T,P0):me(y[89]),fm);const M={};T[2]&134217728&&(M.$$scope={dirty:T,ctx:y}),i.$set(M),E&&E.p&&(!f||T[2]&134217728)&&he(E,b,y,y[89],f?fe(b,y[89],T,null):me(y[89]),null);const I={};T[2]&134217728&&(I.$$scope={dirty:T,ctx:y}),a.$set(I),O&&O.p&&(!f||T[2]&134217728)&&he(O,S,y,y[89],f?fe(S,y[89],T,D0):me(y[89]),um),Z(e,R=ae(k,[(!f||T[0]&33673730|T[1]&1024&&l!==(l=ee(Ke({[y[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":y[12],"mdc-text-field--textarea":y[14],"mdc-text-field--filled":y[15]==="filled","mdc-text-field--outlined":y[15]==="outlined","smui-text-field--standard":y[15]==="standard"&&!y[14],"mdc-text-field--no-label":y[16]||!y[41].label,"mdc-text-field--with-leading-icon":y[41].leadingIcon,"mdc-text-field--with-trailing-icon":y[41].trailingIcon,"mdc-text-field--invalid":y[1]},y[25]))))&&{class:l},(!f||T[0]&67109888&&c!==(c=Object.entries(y[26]).map(km).concat([y[10]]).join(" ")))&&{style:c},T[1]&2048&&Yn(y[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&Ue(u.update)&&T[0]&2048&&u.update.call(null,{ripple:y[11],unbounded:!1,addClass:y[38],removeClass:y[39],addStyle:y[40]}),d&&Ue(d.update)&&T[0]&256&&d.update.call(null,y[8])},i(y){f||(L(p,y),L(i.$$.fragment,y),L(E,y),L(a.$$.fragment,y),L(O,y),f=!0)},o(y){N(p,y),N(i.$$.fragment,y),N(E,y),N(a.$$.fragment,y),N(O,y),f=!1},d(y){y&&X(e),p&&p.d(y),Be(i),E&&E.d(y),Be(a),O&&O.d(y),t[79](null),h=!1,Xe(m)}}}function G0(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g,p,b,E,S=!t[14]&&t[15]!=="outlined"&&vm(t),O=(t[14]||t[15]==="outlined")&&Am(t);s=new No({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[Q0]},$$scope:{ctx:t}}});const k=t[50].default,R=de(k,t,t[89],null),y=[x0,Z0],T=[];function M(A,V){return A[14]&&typeof A[0]=="string"?0:1}o=M(t),l=T[o]=y[o](t),u=new No({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[tA]},$$scope:{ctx:t}}});let I=!t[14]&&t[15]!=="outlined"&&t[11]&&wm(t),v=[{class:f=ee(Ke({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:h=Object.entries(t[26]).map(Lm).concat([t[10]]).join(" ")},{for:void 0},Yn(t[42],["input$","label$","ripple$","outline$","helperLine$"])],j={};for(let A=0;A<v.length;A+=1)j=D(j,v[A]);return{c(){e=ye("label"),S&&S.c(),n=Qe(),O&&O.c(),i=Qe(),Ge(s.$$.fragment),r=Qe(),R&&R.c(),a=Qe(),l.c(),c=Qe(),Ge(u.$$.fragment),d=Qe(),I&&I.c(),Z(e,j)},m(A,V){Y(A,e,V),S&&S.m(e,null),Je(e,n),O&&O.m(e,null),Je(e,i),Ve(s,e,null),Je(e,r),R&&R.m(e,null),Je(e,a),T[o].m(e,null),Je(e,c),Ve(u,e,null),Je(e,d),I&&I.m(e,null),t[72](e),p=!0,b||(E=[$(m=yn.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),$(g=Ze.call(null,e,t[8])),$(t[34].call(null,e)),Te(e,"SMUITextfieldLeadingIcon:mount",t[73]),Te(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Te(e,"SMUITextfieldTrailingIcon:mount",t[75]),Te(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Te(e,"SMUITextfieldCharacterCounter:mount",t[77]),Te(e,"SMUITextfieldCharacterCounter:unmount",t[78])],b=!0)},p(A,V){!A[14]&&A[15]!=="outlined"?S?(S.p(A,V),V[0]&49152&&L(S,1)):(S=vm(A),S.c(),L(S,1),S.m(e,n)):S&&(ft(),N(S,1,1,()=>{S=null}),ht()),A[14]||A[15]==="outlined"?O?(O.p(A,V),V[0]&49152&&L(O,1)):(O=Am(A),O.c(),L(O,1),O.m(e,i)):O&&(ft(),N(O,1,1,()=>{O=null}),ht());const F={};V[2]&134217728&&(F.$$scope={dirty:V,ctx:A}),s.$set(F),R&&R.p&&(!p||V[2]&134217728)&&he(R,k,A,A[89],p?fe(k,A[89],V,null):me(A[89]),null);let K=o;o=M(A),o===K?T[o].p(A,V):(ft(),N(T[K],1,1,()=>{T[K]=null}),ht(),l=T[o],l?l.p(A,V):(l=T[o]=y[o](A),l.c()),L(l,1),l.m(e,c));const G={};V[2]&134217728&&(G.$$scope={dirty:V,ctx:A}),u.$set(G),!A[14]&&A[15]!=="outlined"&&A[11]?I?(I.p(A,V),V[0]&51200&&L(I,1)):(I=wm(A),I.c(),L(I,1),I.m(e,null)):I&&(ft(),N(I,1,1,()=>{I=null}),ht()),Z(e,j=ae(v,[(!p||V[0]&314823171|V[1]&1024&&f!==(f=ee(Ke({[A[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":A[12],"mdc-text-field--textarea":A[14],"mdc-text-field--filled":A[15]==="filled","mdc-text-field--outlined":A[15]==="outlined","smui-text-field--standard":A[15]==="standard"&&!A[14],"mdc-text-field--no-label":A[16]||A[17]==null&&!A[41].label,"mdc-text-field--label-floating":A[28]||A[0]!=null&&A[0]!=="","mdc-text-field--with-leading-icon":A[35](A[22])?A[41].leadingIcon:A[22],"mdc-text-field--with-trailing-icon":A[35](A[23])?A[41].trailingIcon:A[23],"mdc-text-field--with-internal-counter":A[14]&&A[41].internalCounter,"mdc-text-field--invalid":A[1]},A[25]))))&&{class:f},(!p||V[0]&67109888&&h!==(h=Object.entries(A[26]).map(Lm).concat([A[10]]).join(" ")))&&{style:h},{for:void 0},V[1]&2048&&Yn(A[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Ue(m.update)&&V[0]&49152|V[1]&4&&m.update.call(null,{ripple:!A[14]&&A[15]==="filled",unbounded:!1,addClass:A[38],removeClass:A[39],addStyle:A[40],eventTarget:A[33],activeTarget:A[33],initPromise:A[37]}),g&&Ue(g.update)&&V[0]&256&&g.update.call(null,A[8])},i(A){p||(L(S),L(O),L(s.$$.fragment,A),L(R,A),L(l),L(u.$$.fragment,A),L(I),p=!0)},o(A){N(S),N(O),N(s.$$.fragment,A),N(R,A),N(l),N(u.$$.fragment,A),N(I),p=!1},d(A){A&&X(e),S&&S.d(),O&&O.d(),Be(s),R&&R.d(A),T[o].d(),Be(u),I&&I.d(),t[72](null),b=!1,Xe(E)}}}function K0(t){let e;const n=t[50].leadingIcon,i=de(n,t,t[89],dm);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,N0):me(s[89]),dm)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function W0(t){let e;const n=t[50].trailingIcon,i=de(n,t,t[89],cm);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,M0):me(s[89]),cm)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function vm(t){let e,n,i,s=t[15]==="filled"&&bm(),r=!t[16]&&(t[17]!=null||t[41].label)&&Em(t);return{c(){s&&s.c(),e=Qe(),r&&r.c(),n=Rt()},m(a,o){s&&s.m(a,o),Y(a,e,o),r&&r.m(a,o),Y(a,n,o),i=!0},p(a,o){a[15]==="filled"?s||(s=bm(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!a[16]&&(a[17]!=null||a[41].label)?r?(r.p(a,o),o[0]&196608|o[1]&1024&&L(r,1)):(r=Em(a),r.c(),L(r,1),r.m(n.parentNode,n)):r&&(ft(),N(r,1,1,()=>{r=null}),ht())},i(a){i||(L(r),i=!0)},o(a){N(r),i=!1},d(a){s&&s.d(a),a&&X(e),r&&r.d(a),a&&X(n)}}}function bm(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-text-field__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function Em(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Me(t[42],"label$")];let s={$$slots:{default:[X0]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Fo({props:s}),t[51](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&268443649|a[1]&2048?ae(i,[a[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},a[0]&8192&&{required:r[13]},i[2],a[1]&2048&&ze(Me(r[42],"label$"))]):{};a[0]&131072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[51](null),Be(e,r)}}}function X0(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=de(s,t,t[89],Im);return{c(){n=pn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&131072)&&e!==(e=(a[17]==null?"":a[17])+"")&&kn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,q0):me(a[89]),Im)},i(a){i||(L(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function Am(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Me(t[42],"outline$")];let s={$$slots:{default:[J0]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new am({props:s}),t[53](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&196608|a[1]&3072?ae(i,[a[0]&196608|a[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},a[1]&2048&&ze(Me(r[42],"outline$"))]):{};a[0]&268640289|a[1]&3072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[53](null),Be(e,r)}}}function Tm(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Me(t[42],"label$")];let s={$$slots:{default:[Y0]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Fo({props:s}),t[52](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&268443649|a[1]&2048?ae(i,[a[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},a[0]&8192&&{required:r[13]},i[2],a[1]&2048&&ze(Me(r[42],"label$"))]):{};a[0]&131072|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[52](null),Be(e,r)}}}function Y0(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=de(s,t,t[89],ym);return{c(){n=pn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&131072)&&e!==(e=(a[17]==null?"":a[17])+"")&&kn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,j0):me(a[89]),ym)},i(a){i||(L(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function J0(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&Tm(t);return{c(){i&&i.c(),e=Rt()},m(s,r){i&&i.m(s,r),Y(s,e,r),n=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&L(i,1)):(i=Tm(s),i.c(),L(i,1),i.m(e.parentNode,e)):i&&(ft(),N(i,1,1,()=>{i=null}),ht())},i(s){n||(L(i),n=!0)},o(s){N(i),n=!1},d(s){i&&i.d(s),s&&X(e)}}}function Q0(t){let e;const n=t[50].leadingIcon,i=de(n,t,t[89],_m);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,H0):me(s[89]),_m)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function Z0(t){let e,n,i,s,r,a,o,l,c,u;const d=t[50].prefix,f=de(d,t,t[89],pm);let h=t[20]!=null&&Sm(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Me(t[42],"input$")];function g(y){t[63](y)}function p(y){t[64](y)}function b(y){t[65](y)}function E(y){t[66](y)}let S={};for(let y=0;y<m.length;y+=1)S=D(S,m[y]);t[0]!==void 0&&(S.value=t[0]),t[3]!==void 0&&(S.files=t[3]),t[4]!==void 0&&(S.dirty=t[4]),t[1]!==void 0&&(S.invalid=t[1]),i=new w0({props:S}),t[62](i),ie.push(()=>En(i,"value",g)),ie.push(()=>En(i,"files",p)),ie.push(()=>En(i,"dirty",b)),ie.push(()=>En(i,"invalid",E)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let O=t[21]!=null&&Cm(t);const k=t[50].suffix,R=de(k,t,t[89],mm);return{c(){f&&f.c(),e=Qe(),h&&h.c(),n=Qe(),Ge(i.$$.fragment),l=Qe(),O&&O.c(),c=Qe(),R&&R.c()},m(y,T){f&&f.m(y,T),Y(y,e,T),h&&h.m(y,T),Y(y,n,T),Ve(i,y,T),Y(y,l,T),O&&O.m(y,T),Y(y,c,T),R&&R.m(y,T),u=!0},p(y,T){f&&f.p&&(!u||T[2]&134217728)&&he(f,d,y,y[89],u?fe(d,y[89],T,V0):me(y[89]),pm),y[20]!=null?h?(h.p(y,T),T[0]&1048576&&L(h,1)):(h=Sm(y),h.c(),L(h,1),h.m(n.parentNode,n)):h&&(ft(),N(h,1,1,()=>{h=null}),ht());const M=T[0]&135213056|T[1]&2048?ae(m,[T[0]&262144&&{type:y[18]},T[0]&4096&&{disabled:y[12]},T[0]&8192&&{required:y[13]},T[0]&524288&&{updateInvalid:y[19]},T[0]&134217728&&{"aria-controls":y[27]},T[0]&134217728&&{"aria-describedby":y[27]},T[0]&196608&&ze(y[16]&&y[17]!=null?{placeholder:y[17]}:{}),T[1]&2048&&ze(Me(y[42],"input$"))]):{};!s&&T[0]&1&&(s=!0,M.value=y[0],bn(()=>s=!1)),!r&&T[0]&8&&(r=!0,M.files=y[3],bn(()=>r=!1)),!a&&T[0]&16&&(a=!0,M.dirty=y[4],bn(()=>a=!1)),!o&&T[0]&2&&(o=!0,M.invalid=y[1],bn(()=>o=!1)),i.$set(M),y[21]!=null?O?(O.p(y,T),T[0]&2097152&&L(O,1)):(O=Cm(y),O.c(),L(O,1),O.m(c.parentNode,c)):O&&(ft(),N(O,1,1,()=>{O=null}),ht()),R&&R.p&&(!u||T[2]&134217728)&&he(R,k,y,y[89],u?fe(k,y[89],T,U0):me(y[89]),mm)},i(y){u||(L(f,y),L(h),L(i.$$.fragment,y),L(O),L(R,y),u=!0)},o(y){N(f,y),N(h),N(i.$$.fragment,y),N(O),N(R,y),u=!1},d(y){f&&f.d(y),y&&X(e),h&&h.d(y),y&&X(n),t[62](null),Be(i,y),y&&X(l),O&&O.d(y),y&&X(c),R&&R.d(y)}}}function x0(t){let e,n,i,s,r,a,o,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Me(t[42],"input$")];function u(p){t[55](p)}function d(p){t[56](p)}function f(p){t[57](p)}let h={};for(let p=0;p<c.length;p+=1)h=D(h,c[p]);t[0]!==void 0&&(h.value=t[0]),t[4]!==void 0&&(h.dirty=t[4]),t[1]!==void 0&&(h.invalid=t[1]),n=new k0({props:h}),t[54](n),ie.push(()=>En(n,"value",u)),ie.push(()=>En(n,"dirty",d)),ie.push(()=>En(n,"invalid",f)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const m=t[50].internalCounter,g=de(m,t,t[89],gm);return{c(){e=ye("span"),Ge(n.$$.fragment),a=Qe(),g&&g.c(),rt(e,"class",o=ee({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(p,b){Y(p,e,b),Ve(n,e,null),Je(e,a),g&&g.m(e,null),l=!0},p(p,b){const E=b[0]&134754304|b[1]&2048?ae(c,[b[0]&4096&&{disabled:p[12]},b[0]&8192&&{required:p[13]},b[0]&524288&&{updateInvalid:p[19]},b[0]&134217728&&{"aria-controls":p[27]},b[0]&134217728&&{"aria-describedby":p[27]},b[1]&2048&&ze(Me(p[42],"input$"))]):{};!i&&b[0]&1&&(i=!0,E.value=p[0],bn(()=>i=!1)),!s&&b[0]&16&&(s=!0,E.dirty=p[4],bn(()=>s=!1)),!r&&b[0]&2&&(r=!0,E.invalid=p[1],bn(()=>r=!1)),n.$set(E),g&&g.p&&(!l||b[2]&134217728)&&he(g,m,p,p[89],l?fe(m,p[89],b,B0):me(p[89]),gm),(!l||b[1]&2048&&o!==(o=ee({"mdc-text-field__resizer":!("input$resizable"in p[42])||p[42].input$resizable})))&&rt(e,"class",o)},i(p){l||(L(n.$$.fragment,p),L(g,p),l=!0)},o(p){N(n.$$.fragment,p),N(g,p),l=!1},d(p){p&&X(e),t[54](null),Be(n),g&&g.d(p)}}}function Sm(t){let e,n;return e=new E0({props:{$$slots:{default:[$0]},$$scope:{ctx:t}}}),{c(){Ge(e.$$.fragment)},m(i,s){Ve(e,i,s),n=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(L(e.$$.fragment,i),n=!0)},o(i){N(e.$$.fragment,i),n=!1},d(i){Be(e,i)}}}function $0(t){let e;return{c(){e=pn(t[20])},m(n,i){Y(n,e,i)},p(n,i){i[0]&1048576&&kn(e,n[20])},d(n){n&&X(e)}}}function Cm(t){let e,n;return e=new A0({props:{$$slots:{default:[eA]},$$scope:{ctx:t}}}),{c(){Ge(e.$$.fragment)},m(i,s){Ve(e,i,s),n=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(L(e.$$.fragment,i),n=!0)},o(i){N(e.$$.fragment,i),n=!1},d(i){Be(e,i)}}}function eA(t){let e;return{c(){e=pn(t[21])},m(n,i){Y(n,e,i)},p(n,i){i[0]&2097152&&kn(e,n[21])},d(n){n&&X(e)}}}function tA(t){let e;const n=t[50].trailingIcon,i=de(n,t,t[89],hm);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,F0):me(s[89]),hm)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function wm(t){let e,n;const i=[Me(t[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new sm({props:s}),t[71](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&2048?ae(i,[ze(Me(r[42],"ripple$"))]):{};e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[71](null),Be(e,r)}}}function Om(t){let e,n;const i=[Me(t[42],"helperLine$")];let s={$$slots:{default:[nA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new b0({props:s}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&2048?ae(i,[ze(Me(r[42],"helperLine$"))]):{};a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){Be(e,r)}}}function nA(t){let e;const n=t[50].helper,i=de(n,t,t[89],lm);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,R0):me(s[89]),lm)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function iA(t){let e,n,i,s,r;const a=[G0,z0],o=[];function l(u,d){return u[36]?0:1}e=l(t),n=o[e]=a[e](t);let c=t[41].helper&&Om(t);return{c(){n.c(),i=Qe(),c&&c.c(),s=Rt()},m(u,d){o[e].m(u,d),Y(u,i,d),c&&c.m(u,d),Y(u,s,d),r=!0},p(u,d){n.p(u,d),u[41].helper?c?(c.p(u,d),d[1]&1024&&L(c,1)):(c=Om(u),c.c(),L(c,1),c.m(s.parentNode,s)):c&&(ft(),N(c,1,1,()=>{c=null}),ht())},i(u){r||(L(n),L(c),r=!0)},o(u){N(n),N(c),r=!1},d(u){o[e].d(u),u&&X(i),c&&c.d(u),u&&X(s)}}}const Lm=([t,e])=>`${t}: ${e};`,km=([t,e])=>`${t}: ${e};`;function sA(t,e,n){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=J(e,s),{$$slots:a={},$$scope:o}=e;const l=hc(a),{applyPassive:c}=wc,u=qe(Se());let d=()=>{};function f(C){return C===d}let{use:h=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:p=!0}=e,{disabled:b=!1}=e,{required:E=!1}=e,{textarea:S=!1}=e,{variant:O=S?"outlined":"standard"}=e,{noLabel:k=!1}=e,{label:R=void 0}=e,{type:y="text"}=e,{value:T=d}=e,{files:M=d}=e;const I=!f(T)||!f(M);f(T)&&(T=void 0),f(M)&&(M=null);let{invalid:v=d}=e,{updateInvalid:j=f(v)}=e;f(v)&&(v=!1);let{dirty:A=!1}=e,{prefix:V=void 0}=e,{suffix:F=void 0}=e,{validateOnValueChange:K=j}=e,{useNativeValidation:G=j}=e,{withLeadingIcon:Q=d}=e,{withTrailingIcon:Ee=d}=e,{input:re=void 0}=e,{floatingLabel:Fe=void 0}=e,{lineRipple:ge=void 0}=e,{notchedOutline:st=void 0}=e,x,H,Ae={},le={},q,U=!1,be=gt("SMUI:addLayoutListener"),lt,kt,z=new Promise(C=>kt=C),pe,We,it,Ye,Vt=T;be&&(lt=be(dt)),Bt(()=>{if(n(48,H=new d0({addClass:At,removeClass:te,hasClass:un,registerTextFieldInteractionHandler:(C,Tt)=>xe().addEventListener(C,Tt),deregisterTextFieldInteractionHandler:(C,Tt)=>xe().removeEventListener(C,Tt),registerValidationAttributeChangeHandler:C=>{const Tt=bs=>bs.map(Es=>Es.attributeName).filter(Es=>Es),vr=new MutationObserver(bs=>{G&&C(Tt(bs))}),ka={attributes:!0};return re&&vr.observe(re.getElement(),ka),vr},deregisterValidationAttributeChangeHandler:C=>{C.disconnect()},getNativeInput:()=>{var C;return(C=re==null?void 0:re.getElement())!==null&&C!==void 0?C:null},setInputAttr:(C,Tt)=>{re==null||re.addAttr(C,Tt)},removeInputAttr:C=>{re==null||re.removeAttr(C)},isFocused:()=>document.activeElement===(re==null?void 0:re.getElement()),registerInputInteractionHandler:(C,Tt)=>{re==null||re.getElement().addEventListener(C,Tt,c())},deregisterInputInteractionHandler:(C,Tt)=>{re==null||re.getElement().removeEventListener(C,Tt,c())},floatLabel:C=>Fe&&Fe.float(C),getLabelWidth:()=>Fe?Fe.getWidth():0,hasLabel:()=>!!Fe,shakeLabel:C=>Fe&&Fe.shake(C),setLabelRequired:C=>Fe&&Fe.setRequired(C),activateLineRipple:()=>ge&&ge.activate(),deactivateLineRipple:()=>ge&&ge.deactivate(),setLineRippleTransformOrigin:C=>ge&&ge.setRippleCenter(C),closeOutline:()=>st&&st.closeNotch(),hasOutline:()=>!!st,notchOutline:C=>st&&st.notch(C)},{get helperText(){return it},get characterCounter(){return Ye},get leadingIcon(){return pe},get trailingIcon(){return We}})),I){if(re==null)throw new Error("SMUI Textfield initialized without Input component.");H.init()}else Dg().then(()=>{if(re==null)throw new Error("SMUI Textfield initialized without Input component.");H.init()});return kt(),()=>{H.destroy()}}),gn(()=>{lt&&lt()});function un(C){var Tt;return C in Ae?(Tt=Ae[C])!==null&&Tt!==void 0?Tt:null:xe().classList.contains(C)}function At(C){Ae[C]||n(25,Ae[C]=!0,Ae)}function te(C){(!(C in Ae)||Ae[C])&&n(25,Ae[C]=!1,Ae)}function Ie(C,Tt){le[C]!=Tt&&(Tt===""||Tt==null?(delete le[C],n(26,le)):n(26,le[C]=Tt,le))}function _t(){re==null||re.focus()}function dt(){if(H){const C=H.shouldFloat;H.notchOutline(C)}}function xe(){return x}function P(C){ie[C?"unshift":"push"](()=>{Fe=C,n(5,Fe)})}function oe(C){ie[C?"unshift":"push"](()=>{Fe=C,n(5,Fe)})}function B(C){ie[C?"unshift":"push"](()=>{st=C,n(7,st)})}function ue(C){ie[C?"unshift":"push"](()=>{re=C,n(2,re)})}function ce(C){T=C,n(0,T)}function ut(C){A=C,n(4,A)}function vn(C){v=C,n(1,v),n(48,H),n(19,j)}const vs=()=>n(28,U=!1),sa=()=>n(28,U=!0),ra=C=>$e(x,"blur",C),oa=C=>$e(x,"focus",C);function aa(C){ie[C?"unshift":"push"](()=>{re=C,n(2,re)})}function la(C){T=C,n(0,T)}function qi(C){M=C,n(3,M)}function ua(C){A=C,n(4,A)}function yr(C){v=C,n(1,v),n(48,H),n(19,j)}const ca=()=>n(28,U=!1),Ir=()=>n(28,U=!0),zi=C=>$e(x,"blur",C),da=C=>$e(x,"focus",C);function fa(C){ie[C?"unshift":"push"](()=>{ge=C,n(6,ge)})}function ha(C){ie[C?"unshift":"push"](()=>{x=C,n(24,x)})}const ma=C=>n(29,pe=C.detail),pa=()=>n(29,pe=void 0),ga=C=>n(30,We=C.detail),_a=()=>n(30,We=void 0),ya=C=>n(32,Ye=C.detail),Ia=()=>n(32,Ye=void 0);function va(C){ie[C?"unshift":"push"](()=>{x=C,n(24,x)})}const ba=C=>n(29,pe=C.detail),Ea=()=>n(29,pe=void 0),Aa=C=>n(30,We=C.detail),Ta=()=>n(30,We=void 0),Sa=C=>n(27,q=C.detail),Ca=C=>n(31,it=C.detail),wa=()=>{n(27,q=void 0),n(31,it=void 0)},Oa=C=>n(32,Ye=C.detail),La=()=>n(32,Ye=void 0);return t.$$set=C=>{e=D(D({},e),ke(C)),n(42,r=J(e,s)),"use"in C&&n(8,h=C.use),"class"in C&&n(9,m=C.class),"style"in C&&n(10,g=C.style),"ripple"in C&&n(11,p=C.ripple),"disabled"in C&&n(12,b=C.disabled),"required"in C&&n(13,E=C.required),"textarea"in C&&n(14,S=C.textarea),"variant"in C&&n(15,O=C.variant),"noLabel"in C&&n(16,k=C.noLabel),"label"in C&&n(17,R=C.label),"type"in C&&n(18,y=C.type),"value"in C&&n(0,T=C.value),"files"in C&&n(3,M=C.files),"invalid"in C&&n(1,v=C.invalid),"updateInvalid"in C&&n(19,j=C.updateInvalid),"dirty"in C&&n(4,A=C.dirty),"prefix"in C&&n(20,V=C.prefix),"suffix"in C&&n(21,F=C.suffix),"validateOnValueChange"in C&&n(43,K=C.validateOnValueChange),"useNativeValidation"in C&&n(44,G=C.useNativeValidation),"withLeadingIcon"in C&&n(22,Q=C.withLeadingIcon),"withTrailingIcon"in C&&n(23,Ee=C.withTrailingIcon),"input"in C&&n(2,re=C.input),"floatingLabel"in C&&n(5,Fe=C.floatingLabel),"lineRipple"in C&&n(6,ge=C.lineRipple),"notchedOutline"in C&&n(7,st=C.notchedOutline),"$$scope"in C&&n(89,o=C.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=re&&re.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&H&&H.isValid()!==!v&&(j?n(1,v=!H.isValid()):H.setValid(!v)),t.$$.dirty[1]&135168&&H&&H.getValidateOnValueChange()!==K&&H.setValidateOnValueChange(f(K)?!1:K),t.$$.dirty[1]&139264&&H&&H.setUseNativeValidation(f(G)?!0:G),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&H&&H.setDisabled(b),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&H&&I&&Vt!==T){n(49,Vt=T);const C=`${T}`;H.getValue()!==C&&H.setValue(C)}},[T,v,re,M,A,Fe,ge,st,h,m,g,p,b,E,S,O,k,R,y,j,V,F,Q,Ee,x,Ae,le,q,U,pe,We,it,Ye,i,u,f,I,z,At,te,Ie,l,r,K,G,_t,dt,xe,H,Vt,a,P,oe,B,ue,ce,ut,vn,vs,sa,ra,oa,aa,la,qi,ua,yr,ca,Ir,zi,da,fa,ha,ma,pa,ga,_a,ya,Ia,va,ba,Ea,Aa,Ta,Sa,Ca,wa,Oa,La,o]}class sO extends De{constructor(e){super();Re(this,e,sA,iA,Oe,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
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
 */var rA={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},oA={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},lr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},St;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(St||(St={}));var Li;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(Li||(Li={}));/**
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
 */var Rm=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=Li.TOP_START,i.originCorner=Li.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return rA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return oA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return lr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Li},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,s=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^St.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},lr.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},lr.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,St.BOTTOM)?"bottom":"top",a=this.hasBit(i,St.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,d=c.surfaceSize,f=(n={},n[a]=o,n[r]=l,n);u.width/d.width>lr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(f),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,St.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:s.width-n.right,bottom:s.height-n.bottom,left:n.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,a=i.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,St.BOTTOM),c,u;l?(c=s.top-o+this.anchorMargin.bottom,u=s.bottom-o-this.anchorMargin.bottom):(c=s.top-o+this.anchorMargin.top,u=s.bottom-o+r.height-this.anchorMargin.top);var d=u-a.height>0;!d&&c>u&&(n=this.setBit(n,St.BOTTOM));var f=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,St.FLIP_RTL),m=this.hasBit(this.anchorCorner,St.RIGHT)||this.hasBit(n,St.RIGHT),g=!1;f&&h?g=!m:g=m;var p,b;g?(p=s.left+r.width+this.anchorMargin.right,b=s.right-this.anchorMargin.right):(p=s.left+this.anchorMargin.left,b=s.right+r.width-this.anchorMargin.left);var E=p-a.width>0,S=b-a.width>0,O=this.hasBit(n,St.FLIP_RTL)&&this.hasBit(n,St.RIGHT);return S&&O&&f||!E&&O?n=this.unsetBit(n,St.RIGHT):(E&&g&&f||E&&!g&&m||!S&&p>=b)&&(n=this.setBit(n,St.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(n,St.BOTTOM),a=this.hasBit(this.anchorCorner,St.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-o,a||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,a&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,St.RIGHT),r=this.hasBit(this.anchorCorner,St.RIGHT);if(s){var a=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,St.BOTTOM),r=this.hasBit(this.anchorCorner,St.BOTTOM),a=0;return s?a=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(n){var i,s,r=this.measurements,a=r.windowScroll,o=r.viewportDistance,l=r.surfaceSize,c=r.viewportSize,u=Object.keys(n);try{for(var d=Rn(u),f=d.next();!f.done;f=d.next()){var h=f.value,m=n[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){n[h]=(c.width-l.width)/2;continue}m+=o[h],this.isFixedPosition||(h==="top"?m+=a.y:h==="bottom"?m-=a.y:h==="left"?m+=a.x:m-=a.x),n[h]=m}}catch(g){i={error:g}}finally{try{f&&!f.done&&(s=d.return)&&s.call(d)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){n.adapter.restoreFocus()},lr.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(Qt);/**
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
 */var Dm={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function aA(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function lA(t,e){if(aA(t)&&e in Dm){var n=t.document.createElement("div"),i=Dm[e],s=i.standard,r=i.prefixed,a=s in n.style;return a?s:r}return e}/**
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
 */var hs={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},ms={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},uA={FOCUS_ROOT_INDEX:-1},ps;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(ps||(ps={}));/**
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
 */var cA=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=ps.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return hs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ms},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return uA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,s=n.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,s=this.adapter.getElementIndex(n);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,ms.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=i.adapter.getElementIndex(n);a>=0&&i.adapter.isSelectableItemAtIndex(a)&&i.setSelectedIndex(a)},Rm.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case ps.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case ps.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case ps.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,ms.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,hs.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,hs.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,ms.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ms.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,He.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ms.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),s=n>=0&&n<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Qt);/**
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
 */var Et={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},Ou={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},ki={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var dA=function(t){Dt(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return s.disabled=!1,s.isMenuOpen=!1,s.useDefaultValidation=!0,s.customValidity=!0,s.lastSelectedIndex=ki.UNSET_INDEX,s.clickDebounceTimeout=0,s.recentlyClicked=!1,s.leadingIcon=i.leadingIcon,s.helperText=i.helperText,s}return Object.defineProperty(e,"cssClasses",{get:function(){return Et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ki},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ou},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(n,i,s){i===void 0&&(i=!1),s===void 0&&(s=!1),!(n>=this.adapter.getMenuItemCount())&&(n===ki.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()),this.adapter.setSelectedIndex(n),i&&this.adapter.closeMenu(),!s&&this.lastSelectedIndex!==n&&this.handleChange(),this.lastSelectedIndex=n)},e.prototype.setValue=function(n,i){i===void 0&&(i=!1);var s=this.adapter.getMenuItemValues().indexOf(n);this.setSelectedIndex(s,!1,i)},e.prototype.getValue=function(){var n=this.adapter.getSelectedIndex(),i=this.adapter.getMenuItemValues();return n!==ki.UNSET_INDEX?i[n]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(n){this.disabled=n,this.disabled?(this.adapter.addClass(Et.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(Et.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(Et.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var n=this.getValue().length>0,i=this.adapter.hasClass(Et.FOCUSED),s=n||i,r=this.adapter.hasClass(Et.REQUIRED);this.notchOutline(s),this.adapter.floatLabel(s),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var n=this.adapter.getMenuItemValues(),i=n.indexOf(this.getValue());this.setSelectedIndex(i,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var n=this.getSelectedIndex(),i=n>=0?n:0;this.adapter.focusMenuItemAtIndex(i)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(Et.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var n=this.adapter.hasClass(Et.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(n){this.setSelectedIndex(n,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(Et.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(n){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(n),this.openMenu()}},e.prototype.handleKeydown=function(n){if(!(this.isMenuOpen||!this.adapter.hasClass(Et.FOCUSED))){var i=Ct(n)===je.ENTER,s=Ct(n)===je.SPACEBAR,r=Ct(n)===je.ARROW_UP,a=Ct(n)===je.ARROW_DOWN,o=n.ctrlKey||n.metaKey;if(!o&&(!s&&n.key&&n.key.length===1||s&&this.adapter.isTypeaheadInProgress())){var l=s?" ":n.key,c=this.adapter.typeaheadMatchItem(l,this.getSelectedIndex());c>=0&&this.setSelectedIndex(c),n.preventDefault();return}!i&&!s&&!r&&!a||(r&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):a&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),n.preventDefault())}},e.prototype.notchOutline=function(n){if(!!this.adapter.hasOutline()){var i=this.adapter.hasClass(Et.FOCUSED);if(n){var s=ki.LABEL_SCALE,r=this.adapter.getLabelWidth()*s;this.adapter.notchOutline(r)}else i||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(n){this.useDefaultValidation=n},e.prototype.setValid=function(n){this.useDefaultValidation||(this.customValidity=n),this.adapter.setSelectAnchorAttr("aria-invalid",(!n).toString()),n?(this.adapter.removeClass(Et.INVALID),this.adapter.removeMenuClass(Et.MENU_INVALID)):(this.adapter.addClass(Et.INVALID),this.adapter.addMenuClass(Et.MENU_INVALID)),this.syncHelperTextValidity(n)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(Et.REQUIRED)&&!this.adapter.hasClass(Et.DISABLED)?this.getSelectedIndex()!==ki.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},e.prototype.setRequired=function(n){n?this.adapter.addClass(Et.REQUIRED):this.adapter.removeClass(Et.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",n.toString()),this.adapter.setLabelRequired(n)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var n=this.adapter.getAnchorElement();n&&(this.adapter.setMenuAnchorElement(n),this.adapter.setMenuAnchorCorner(Li.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(Et.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(Et.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(Et.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var n=this.adapter.hasClass(Et.REQUIRED);n&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(n){if(!!this.helperText){this.helperText.setValidity(n);var i=this.helperText.isVisible(),s=this.helperText.getId();i&&s?this.adapter.setSelectAnchorAttr(Ou.ARIA_DESCRIBEDBY,s):this.adapter.removeSelectAnchorAttr(Ou.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var n=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){n.recentlyClicked=!1},ki.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(Qt);/**
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
 */var Ri={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Di={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var fA=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ri},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Ri.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.setValidation=function(n){n?this.adapter.addClass(Di.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Di.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(n){n?this.adapter.addClass(Di.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Di.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(Di.HELPER_TEXT_VALIDATION_MSG);if(!!i){var s=this.adapter.hasClass(Di.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!n||s;if(r){this.showToScreenReader(),n?this.adapter.removeAttr(Ri.ROLE):this.adapter.setAttr(Ri.ROLE,"alert");return}this.adapter.removeAttr(Ri.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Ri.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(Ri.ARIA_HIDDEN,"true")},e}(Qt);const{document:hA}=Ua;function mA(t){let e,n,i,s,r,a,o,l;const c=t[30].default,u=de(c,t,t[29],null);let d=[{class:i=ee(Ke({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:s=Object.entries(t[10]).map(Mm).concat([t[3]]).join(" ")},t[12]],f={};for(let h=0;h<d.length;h+=1)f=D(f,d[h]);return{c(){e=Qe(),n=ye("div"),u&&u.c(),Z(n,f)},m(h,m){Y(h,e,m),Y(h,n,m),u&&u.m(n,null),t[32](n),a=!0,o||(l=[Te(hA.body,"click",t[31],!0),$(r=Ze.call(null,n,t[1])),$(t[11].call(null,n)),Te(n,"keydown",t[33])],o=!0)},p(h,m){u&&u.p&&(!a||m[0]&536870912)&&he(u,c,h,h[29],a?fe(c,h[29],m,null):me(h[29]),null),Z(n,f=ae(d,[(!a||m[0]&628&&i!==(i=ee(Ke({[h[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":h[5],"mdc-menu-surface--open":h[4],"smui-menu-surface--static":h[4],"mdc-menu-surface--fullwidth":h[6]},h[9]))))&&{class:i},(!a||m[0]&1032&&s!==(s=Object.entries(h[10]).map(Mm).concat([h[3]]).join(" ")))&&{style:s},m[0]&4096&&h[12]])),r&&Ue(r.update)&&m[0]&2&&r.update.call(null,h[1])},i(h){a||(L(u,h),a=!0)},o(h){N(u,h),a=!1},d(h){h&&X(e),h&&X(n),u&&u.d(h),t[32](null),o=!1,Xe(l)}}}const Mm=([t,e])=>`${t}: ${e};`;function pA(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;var o,l,c;const u=qe(Se());let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{static:m=!1}=e,{anchor:g=!0}=e,{fixed:p=!1}=e,{open:b=m}=e,{fullWidth:E=!1}=e,{quickOpen:S=!1}=e,{anchorElement:O=void 0}=e,{anchorCorner:k=void 0}=e,{anchorMargin:R={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:y=0}=e,{horizontallyCenteredOnViewport:T=!1}=e,M,I,v={},j={},A;et("SMUI:list:role","menu"),et("SMUI:list:item:role","menuitem");const V=Li;Bt(()=>(n(8,I=new Rm({addClass:K,removeClass:G,hasClass:F,hasAnchor:()=>!!O,notifyClose:()=>{n(0,b=m),b||$e(M,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,b=m),b||$e(M,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,b=!0),$e(M,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:U=>M.contains(U),isRtl:()=>getComputedStyle(M).getPropertyValue("direction")==="rtl",setTransformOrigin:U=>{const be=`${lA(window,"transform")}-origin`;n(10,j[be]=U,j)},isFocused:()=>document.activeElement===M,saveFocus:()=>{var U;A=(U=document.activeElement)!==null&&U!==void 0?U:void 0},restoreFocus:()=>{M.contains(document.activeElement)&&A&&"focus"in A&&A.focus()},getInnerDimensions:()=>({width:M.offsetWidth,height:M.offsetHeight}),getAnchorDimensions:()=>O?O.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:U=>{n(10,j.left="left"in U?`${U.left}px`:"",j),n(10,j.right="right"in U?`${U.right}px`:"",j),n(10,j.top="top"in U?`${U.top}px`:"",j),n(10,j.bottom="bottom"in U?`${U.bottom}px`:"",j)},setMaxHeight:U=>{n(10,j.maxHeight=U,j)}})),$e(M,"SMUIMenuSurface:mount",{get open(){return b},set open(U){n(0,b=U)},closeProgrammatic:Q}),I.init(),()=>{var U;const be=I.isHoistedElement;I.destroy(),be&&((U=M.parentNode)===null||U===void 0||U.removeChild(M))})),gn(()=>{var q;g&&M&&((q=M.parentElement)===null||q===void 0||q.classList.remove("mdc-menu-surface--anchor"))});function F(q){return q in v?v[q]:x().classList.contains(q)}function K(q){v[q]||n(9,v[q]=!0,v)}function G(q){(!(q in v)||v[q])&&n(9,v[q]=!1,v)}function Q(q){I.close(q),n(0,b=!1)}function Ee(){return b}function re(q){n(0,b=q)}function Fe(q,U){return I.setAbsolutePosition(q,U)}function ge(q){return I.setIsHoisted(q)}function st(){return I.isFixed()}function x(){return M}const H=q=>I&&b&&I.handleBodyClick(q);function Ae(q){ie[q?"unshift":"push"](()=>{M=q,n(7,M)})}const le=q=>I&&I.handleKeydown(q);return t.$$set=q=>{e=D(D({},e),ke(q)),n(12,s=J(e,i)),"use"in q&&n(1,d=q.use),"class"in q&&n(2,f=q.class),"style"in q&&n(3,h=q.style),"static"in q&&n(4,m=q.static),"anchor"in q&&n(14,g=q.anchor),"fixed"in q&&n(5,p=q.fixed),"open"in q&&n(0,b=q.open),"fullWidth"in q&&n(6,E=q.fullWidth),"quickOpen"in q&&n(15,S=q.quickOpen),"anchorElement"in q&&n(13,O=q.anchorElement),"anchorCorner"in q&&n(16,k=q.anchorCorner),"anchorMargin"in q&&n(17,R=q.anchorMargin),"maxHeight"in q&&n(18,y=q.maxHeight),"horizontallyCenteredOnViewport"in q&&n(19,T=q.horizontallyCenteredOnViewport),"$$scope"in q&&n(29,a=q.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&M&&g&&!(n(26,o=M.parentElement)===null||o===void 0?void 0:o.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=M.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,O=n(28,c=M.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&I&&I.isOpen()!==b&&(b?I.open():I.close()),t.$$.dirty[0]&33024&&I&&I.setQuickOpen(S),t.$$.dirty[0]&288&&I&&I.setFixedPosition(p),t.$$.dirty[0]&262400&&I&&y>0&&I.setMaxHeight(y),t.$$.dirty[0]&524544&&I&&I.setIsHorizontallyCenteredOnViewport(T),t.$$.dirty[0]&65792&&I&&k!=null&&(typeof k=="string"?I.setAnchorCorner(V[k]):I.setAnchorCorner(k)),t.$$.dirty[0]&131328&&I&&I.setAnchorMargin(R)},[b,d,f,h,m,p,E,M,I,v,j,u,s,O,g,S,k,R,y,T,Ee,re,Fe,ge,st,x,o,l,c,a,r,H,Ae,le]}class gA extends De{constructor(e){super();Re(this,e,pA,mA,Oe,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function _A(t,{addClass:e=i=>t.classList.add(i),removeClass:n=i=>t.classList.remove(i)}={}){return e("mdc-menu-surface--anchor"),{destroy(){n("mdc-menu-surface--anchor")}}}function yA(t){let e;const n=t[16].default,i=de(n,t,t[21],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&he(i,n,s,s[21],e?fe(n,s[21],r,null):me(s[21]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function IA(t){let e,n,i;const s=[{use:t[5]},{class:ee({[t[1]]:!0,"mdc-menu":!0})},t[9]];function r(o){t[18](o)}let a={$$slots:{default:[yA]},$$scope:{ctx:t}};for(let o=0;o<s.length;o+=1)a=D(a,s[o]);return t[0]!==void 0&&(a.open=t[0]),e=new gA({props:a}),t[17](e),ie.push(()=>En(e,"open",r)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){Ge(e.$$.fragment)},m(o,l){Ve(e,o,l),i=!0},p(o,[l]){const c=l&546?ae(s,[l&32&&{use:o[5]},l&2&&{class:ee({[o[1]]:!0,"mdc-menu":!0})},l&512&&ze(o[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.open=o[0],bn(()=>n=!1)),e.$set(c)},i(o){i||(L(e.$$.fragment,o),i=!0)},o(o){N(e.$$.fragment,o),i=!1},d(o){t[17](null),Be(e,o)}}}function vA(t,e,n){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=J(e,s),{$$slots:a={},$$scope:o}=e;const{closest:l}=Cr,c=qe(Se());let{use:u=[]}=e,{class:d=""}=e,{open:f=!1}=e,h,m,g,p;Bt(()=>(n(3,m=new cA({addClassToElementAtIndex:(A,V)=>{p.addClassForElementIndex(A,V)},removeClassFromElementAtIndex:(A,V)=>{p.removeClassForElementIndex(A,V)},addAttributeToElementAtIndex:(A,V,F)=>{p.setAttributeForElementIndex(A,V,F)},removeAttributeFromElementAtIndex:(A,V)=>{p.removeAttributeForElementIndex(A,V)},getAttributeFromElementAtIndex:(A,V)=>p.getAttributeFromElementIndex(A,V),elementContainsClass:(A,V)=>A.classList.contains(V),closeSurface:A=>g.closeProgrammatic(A),getElementIndex:A=>p.getOrderedList().map(V=>V.element).indexOf(A),notifySelected:A=>$e(T(),"SMUIMenu:selected",{index:A.index,item:p.getOrderedList()[A.index].element},void 0,!0),getMenuItemCount:()=>p.items.length,focusItemAtIndex:A=>p.focusItemAtIndex(A),focusListRoot:()=>"focus"in p.element&&p.element.focus(),isSelectableItemAtIndex:A=>!!l(p.getOrderedList()[A].element,`.${hs.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:A=>{const V=p.getOrderedList(),F=l(V[A].element,`.${hs.MENU_SELECTION_GROUP}`),K=F==null?void 0:F.querySelector(`.${hs.MENU_SELECTED_LIST_ITEM}`);return K?V.map(G=>G.element).indexOf(K):-1}})),$e(T(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function b(A){m&&m.handleKeydown(A)}function E(A){g||(g=A.detail)}function S(A){p||n(4,p=A.detail)}function O(){return f}function k(A){n(0,f=A)}function R(A){m.setDefaultFocusState(A)}function y(){return m.getSelectedIndex()}function T(){return h.getElement()}function M(A){ie[A?"unshift":"push"](()=>{h=A,n(2,h)})}function I(A){f=A,n(0,f)}const v=()=>m&&m.handleMenuSurfaceOpened(),j=A=>m&&m.handleItemAction(p.getOrderedList()[A.detail.index].element);return t.$$set=A=>{e=D(D({},e),ke(A)),n(9,r=J(e,s)),"use"in A&&n(10,u=A.use),"class"in A&&n(1,d=A.class),"open"in A&&n(0,f=A.open),"$$scope"in A&&n(21,o=A.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[f,d,h,m,p,i,b,E,S,r,u,O,k,R,y,T,a,M,I,v,j,o]}class bA extends De{constructor(e){super();Re(this,e,vA,IA,Oe,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}It({class:"mdc-menu__selection-group-icon",component:Ey});function EA(t){let e;return{c(){e=pn(t[8])},m(n,i){Y(n,e,i)},p(n,i){i&256&&kn(e,n[8])},i:Nt,o:Nt,d(n){n&&X(e)}}}function AA(t){let e;const n=t[13].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function TA(t){let e,n,i,s,r,a,o,l,c;const u=[AA,EA],d=[];function f(g,p){return g[8]==null?0:1}n=f(t),i=d[n]=u[n](t);let h=[{class:s=ee(Ke({[t[1]]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":t[4],"mdc-select-helper-text--validation-msg-persistent":t[3]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let g=0;g<h.length;g+=1)m=D(m,h[g]);return{c(){e=ye("div"),i.c(),Z(e,m)},m(g,p){Y(g,e,p),d[n].m(e,null),t[14](e),o=!0,l||(c=[$(a=Ze.call(null,e,t[0])),$(t[9].call(null,e))],l=!0)},p(g,[p]){let b=n;n=f(g),n===b?d[n].p(g,p):(ft(),N(d[b],1,1,()=>{d[b]=null}),ht(),i=d[n],i?i.p(g,p):(i=d[n]=u[n](g),i.c()),L(i,1),i.m(e,null)),Z(e,m=ae(h,[(!o||p&90&&s!==(s=ee(Ke({[g[1]]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":g[4],"mdc-select-helper-text--validation-msg-persistent":g[3]},g[6]))))&&{class:s},(!o||p&8&&r!==(r=g[3]?void 0:"true"))&&{"aria-hidden":r},(!o||p&4)&&{id:g[2]},p&128&&g[7],p&1024&&g[10]])),a&&Ue(a.update)&&p&1&&a.update.call(null,g[0])},i(g){o||(L(i),o=!0)},o(g){N(i),o=!1},d(g){g&&X(e),d[n].d(),t[14](null),l=!1,Xe(c)}}}let SA=0;function CA(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-select-helper-text-"+SA++}=e,{persistent:d=!1}=e,{validationMsg:f=!1}=e,h,m,g={},p={},b;Bt(()=>(m=new fA({addClass:S,removeClass:O,hasClass:E,getAttr:k,setAttr:R,removeAttr:y,setContent:I=>{n(8,b=I)}}),u.startsWith("SMUI-select-helper-text-")&&$e(T(),"SMUISelectHelperText:id",u),$e(T(),"SMUISelectHelperText:mount",m),m.init(),()=>{$e(T(),"SMUISelectHelperText:unmount",m),m.destroy()}));function E(I){return I in g?g[I]:T().classList.contains(I)}function S(I){g[I]||n(6,g[I]=!0,g)}function O(I){(!(I in g)||g[I])&&n(6,g[I]=!1,g)}function k(I){var v;return I in p?(v=p[I])!==null&&v!==void 0?v:null:T().getAttribute(I)}function R(I,v){p[I]!==v&&n(7,p[I]=v,p)}function y(I){(!(I in p)||p[I]!=null)&&n(7,p[I]=void 0,p)}function T(){return h}function M(I){ie[I?"unshift":"push"](()=>{h=I,n(5,h)})}return t.$$set=I=>{e=D(D({},e),ke(I)),n(10,s=J(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,c=I.class),"id"in I&&n(2,u=I.id),"persistent"in I&&n(3,d=I.persistent),"validationMsg"in I&&n(4,f=I.validationMsg),"$$scope"in I&&n(12,a=I.$$scope)},[l,c,u,d,f,h,g,p,b,o,s,T,a,r,M]}class wA extends De{constructor(e){super();Re(this,e,CA,TA,Oe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}const OA=t=>({}),Nm=t=>({}),LA=t=>({}),Pm=t=>({}),kA=t=>({}),Fm=t=>({}),RA=t=>({}),Um=t=>({});function Vm(t){let e,n=[{type:"hidden"},{required:t[10]},{disabled:t[6]},{value:t[0]},Me(t[53],"input$")],i={};for(let s=0;s<n.length;s+=1)i=D(i,n[s]);return{c(){e=ye("input"),Z(e,i)},m(s,r){Y(s,e,r),e.autofocus&&e.focus()},p(s,r){Z(e,i=ae(n,[{type:"hidden"},r[0]&1024&&{required:s[10]},r[0]&64&&{disabled:s[6]},r[0]&1&&{value:s[0]},r[1]&4194304&&Me(s[53],"input$")]))},d(s){s&&X(e)}}}function Bm(t){let e;return{c(){e=ye("span"),rt(e,"class","mdc-select__ripple")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function Hm(t){let e,n;const i=[{id:t[11]+"-smui-label"},{floatAbove:t[43]!==""},{required:t[10]},Me(t[53],"label$")];let s={$$slots:{default:[DA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Fo({props:s}),t[66](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&3072|a[1]&4198400?ae(i,[a[0]&2048&&{id:r[11]+"-smui-label"},a[1]&4096&&{floatAbove:r[43]!==""},a[0]&1024&&{required:r[10]},a[1]&4194304&&ze(Me(r[53],"label$"))]):{};a[0]&512|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[66](null),Be(e,r)}}}function DA(t){let e=(t[9]==null?"":t[9])+"",n,i;const s=t[63].label,r=de(s,t,t[89],Um);return{c(){n=pn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&512)&&e!==(e=(a[9]==null?"":a[9])+"")&&kn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,RA):me(a[89]),Um)},i(a){i||(L(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function jm(t){let e,n;const i=[{noLabel:t[8]||t[9]==null&&!t[52].label},Me(t[53],"outline$")];let s={$$slots:{default:[NA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new am({props:s}),t[68](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&768|a[1]&6291456?ae(i,[a[0]&768|a[1]&2097152&&{noLabel:r[8]||r[9]==null&&!r[52].label},a[1]&4194304&&ze(Me(r[53],"outline$"))]):{};a[0]&3840|a[1]&6296064|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[68](null),Be(e,r)}}}function qm(t){let e,n;const i=[{id:t[11]+"-smui-label"},{floatAbove:t[43]!==""},{required:t[10]},Me(t[53],"label$")];let s={$$slots:{default:[MA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new Fo({props:s}),t[67](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[0]&3072|a[1]&4198400?ae(i,[a[0]&2048&&{id:r[11]+"-smui-label"},a[1]&4096&&{floatAbove:r[43]!==""},a[0]&1024&&{required:r[10]},a[1]&4194304&&ze(Me(r[53],"label$"))]):{};a[0]&512|a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[67](null),Be(e,r)}}}function MA(t){let e=(t[9]==null?"":t[9])+"",n,i;const s=t[63].label,r=de(s,t,t[89],Fm);return{c(){n=pn(e),r&&r.c()},m(a,o){Y(a,n,o),r&&r.m(a,o),i=!0},p(a,o){(!i||o[0]&512)&&e!==(e=(a[9]==null?"":a[9])+"")&&kn(n,e),r&&r.p&&(!i||o[2]&134217728)&&he(r,s,a,a[89],i?fe(s,a[89],o,kA):me(a[89]),Fm)},i(a){i||(L(r,a),i=!0)},o(a){N(r,a),i=!1},d(a){a&&X(n),r&&r.d(a)}}}function NA(t){let e,n,i=!t[8]&&(t[9]!=null||t[52].label)&&qm(t);return{c(){i&&i.c(),e=Rt()},m(s,r){i&&i.m(s,r),Y(s,e,r),n=!0},p(s,r){!s[8]&&(s[9]!=null||s[52].label)?i?(i.p(s,r),r[0]&768|r[1]&2097152&&L(i,1)):(i=qm(s),i.c(),L(i,1),i.m(e.parentNode,e)):i&&(ft(),N(i,1,1,()=>{i=null}),ht())},i(s){n||(L(i),n=!0)},o(s){N(i),n=!1},d(s){i&&i.d(s),s&&X(e)}}}function zm(t){let e,n;const i=[Me(t[53],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new sm({props:s}),t[70](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&4194304?ae(i,[ze(Me(r[53],"ripple$"))]):{};e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[70](null),Be(e,r)}}}function PA(t){let e;const n=t[63].default,i=de(n,t,t[89],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,null):me(s[89]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function FA(t){let e,n,i;const s=[{role:"listbox"},{wrapFocus:t[36]},Me(t[53],"list$")];function r(o){t[76](o)}let a={$$slots:{default:[PA]},$$scope:{ctx:t}};for(let o=0;o<s.length;o+=1)a=D(a,s[o]);return t[24]!==void 0&&(a.selectedIndex=t[24]),e=new oy({props:a}),ie.push(()=>En(e,"selectedIndex",r)),e.$on("SMUIList:mount",t[77]),{c(){Ge(e.$$.fragment)},m(o,l){Ve(e,o,l),i=!0},p(o,l){const c=l[1]&4194336?ae(s,[s[0],l[1]&32&&{wrapFocus:o[36]},l[1]&4194304&&ze(Me(o[53],"list$"))]):{};l[2]&134217728&&(c.$$scope={dirty:l,ctx:o}),!n&&l[0]&16777216&&(n=!0,c.selectedIndex=o[24],bn(()=>n=!1)),e.$set(c)},i(o){i||(L(e.$$.fragment,o),i=!0)},o(o){N(e.$$.fragment,o),i=!1},d(o){Be(e,o)}}}function Gm(t){let e,n;const i=[Me(t[53],"helperText$")];let s={$$slots:{default:[UA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new wA({props:s}),e.$on("SMUISelectHelperText:id",t[86]),e.$on("SMUISelectHelperText:mount",t[87]),e.$on("SMUISelectHelperText:unmount",t[88]),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,a){const o=a[1]&4194304?ae(i,[ze(Me(r[53],"helperText$"))]):{};a[2]&134217728&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){Be(e,r)}}}function UA(t){let e;const n=t[63].helperText,i=de(n,t,t[89],Nm);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?fe(n,s[89],r,OA):me(s[89]),Nm)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function VA(t){let e,n,i,s,r,a,o,l,c,u,d,f,h,m,g,p,b,E,S,O,k,R,y,T,M,I,v,j,A,V,F,K,G,Q,Ee,re,Fe,ge,st,x,H=t[12]&&Vm(t),Ae=t[7]==="filled"&&Bm(),le=t[7]!=="outlined"&&!t[8]&&(t[9]!=null||t[52].label)&&Hm(t),q=t[7]==="outlined"&&jm(t);const U=t[63].leadingIcon,be=de(U,t,t[89],Pm);let lt=[{id:d=t[11]+"-smui-selected-text"},{class:f=ee({[t[19]]:!0,"mdc-select__selected-text":!0})},{role:"button"},{"aria-haspopup":"listbox"},{"aria-labelledby":h=t[11]+"-smui-label"},Me(t[53],"selectedText$")],kt={};for(let P=0;P<lt.length;P+=1)kt=D(kt,lt[P]);let z=[{class:g=ee({[t[17]]:!0,"mdc-select__selected-text-container":!0})},Me(t[53],"selectedTextContainer$")],pe={};for(let P=0;P<z.length;P+=1)pe=D(pe,z[P]);let We=[{class:R=ee({[t[21]]:!0,"mdc-select__dropdown-icon":!0})},Me(t[53],"dropdownIcon$")],it={};for(let P=0;P<We.length;P+=1)it=D(it,We[P]);let Ye=t[7]!=="outlined"&&t[5]&&zm(t),Vt=[{class:M=ee({[t[15]]:!0,"mdc-select__anchor":!0})},{"aria-required":I=t[10]?"true":void 0},{"aria-disabled":v=t[6]?"true":void 0},{"aria-controls":t[31]},{"aria-describedby":t[31]},t[29],Me(t[53],"anchor$")],un={};for(let P=0;P<Vt.length;P+=1)un=D(un,Vt[P]);const At=[{class:ee(Ke({[t[22]]:!0,"mdc-select__menu":!0},t[33]))},{fullWidth:!0},{anchor:!1},{anchorElement:t[34]},{anchorCorner:t[35]},Me(t[53],"menu$")];function te(P){t[78](P)}let Ie={$$slots:{default:[FA]},$$scope:{ctx:t}};for(let P=0;P<At.length;P+=1)Ie=D(Ie,At[P]);t[32]!==void 0&&(Ie.open=t[32]),V=new bA({props:Ie}),ie.push(()=>En(V,"open",te)),V.$on("SMUIMenu:selected",t[79]),V.$on("SMUIMenuSurface:closing",t[80]),V.$on("SMUIMenuSurface:closed",t[81]),V.$on("SMUIMenuSurface:opened",t[82]);let _t=[{class:K=ee(Ke({[t[3]]:!0,"mdc-select":!0,"mdc-select--required":t[10],"mdc-select--disabled":t[6],"mdc-select--filled":t[7]==="filled","mdc-select--outlined":t[7]==="outlined","smui-select--standard":t[7]==="standard","mdc-select--with-leading-icon":t[45](t[13])?t[52].leadingIcon:t[13],"mdc-select--no-label":t[8]||t[9]==null&&!t[52].label,"mdc-select--invalid":t[1],"mdc-select--activated":t[32],"mdc-data-table__pagination-rows-per-page-select":t[46]==="data-table:pagination"},t[26]))},{style:G=Object.entries(t[27]).map(Km).concat([t[4]]).join(" ")},Yn(t[53],["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"])],dt={};for(let P=0;P<_t.length;P+=1)dt=D(dt,_t[P]);let xe=t[52].helperText&&Gm(t);return{c(){e=ye("div"),H&&H.c(),n=Qe(),i=ye("div"),Ae&&Ae.c(),s=Qe(),le&&le.c(),r=Qe(),q&&q.c(),a=Qe(),be&&be.c(),o=Qe(),l=ye("span"),c=ye("span"),u=pn(t[43]),b=Qe(),E=ye("span"),S=br("svg"),O=br("polygon"),k=br("polygon"),T=Qe(),Ye&&Ye.c(),A=Qe(),Ge(V.$$.fragment),re=Qe(),xe&&xe.c(),Fe=Rt(),Z(c,kt),Z(l,pe),rt(O,"class","mdc-select__dropdown-icon-inactive"),rt(O,"stroke","none"),rt(O,"fill-rule","evenodd"),rt(O,"points","7 10 12 15 17 10"),rt(k,"class","mdc-select__dropdown-icon-active"),rt(k,"stroke","none"),rt(k,"fill-rule","evenodd"),rt(k,"points","7 15 12 10 17 15"),rt(S,"class","mdc-select__dropdown-icon-graphic"),rt(S,"viewBox","7 10 10 5"),rt(S,"focusable","false"),Z(E,it),Z(i,un),Z(e,dt)},m(P,oe){Y(P,e,oe),H&&H.m(e,null),Je(e,n),Je(e,i),Ae&&Ae.m(i,null),Je(i,s),le&&le.m(i,null),Je(i,r),q&&q.m(i,null),Je(i,a),be&&be.m(i,null),Je(i,o),Je(i,l),Je(l,c),Je(c,u),t[69](c),Je(i,b),Je(i,E),Je(E,S),Je(S,O),Je(S,k),Je(i,T),Ye&&Ye.m(i,null),t[71](i),Je(e,A),Ve(V,e,null),t[83](e),Y(P,re,oe),xe&&xe.m(P,oe),Y(P,Fe,oe),ge=!0,st||(x=[$(m=Ze.call(null,c,t[18])),$(p=Ze.call(null,l,t[16])),$(y=Ze.call(null,E,t[20])),$(j=Ze.call(null,i,t[14])),Te(i,"focus",t[72]),Te(i,"blur",t[73]),Te(i,"click",t[74]),Te(i,"keydown",t[75]),Te(i,"focus",t[64]),Te(i,"blur",t[65]),$(Q=yn.call(null,e,{ripple:t[7]==="filled",unbounded:!1,addClass:t[49],removeClass:t[50],addStyle:t[51]})),$(_A.call(null,e,{addClass:t[49],removeClass:t[50]})),$(Ee=Ze.call(null,e,t[2])),$(t[44].call(null,e)),Te(e,"SMUISelectLeadingIcon:mount",t[84]),Te(e,"SMUISelectLeadingIcon:unmount",t[85])],st=!0)},p(P,oe){P[12]?H?H.p(P,oe):(H=Vm(P),H.c(),H.m(e,n)):H&&(H.d(1),H=null),P[7]==="filled"?Ae||(Ae=Bm(),Ae.c(),Ae.m(i,s)):Ae&&(Ae.d(1),Ae=null),P[7]!=="outlined"&&!P[8]&&(P[9]!=null||P[52].label)?le?(le.p(P,oe),oe[0]&896|oe[1]&2097152&&L(le,1)):(le=Hm(P),le.c(),L(le,1),le.m(i,r)):le&&(ft(),N(le,1,1,()=>{le=null}),ht()),P[7]==="outlined"?q?(q.p(P,oe),oe[0]&128&&L(q,1)):(q=jm(P),q.c(),L(q,1),q.m(i,a)):q&&(ft(),N(q,1,1,()=>{q=null}),ht()),be&&be.p&&(!ge||oe[2]&134217728)&&he(be,U,P,P[89],ge?fe(U,P[89],oe,LA):me(P[89]),Pm),(!ge||oe[1]&4096)&&kn(u,P[43]),Z(c,kt=ae(lt,[(!ge||oe[0]&2048&&d!==(d=P[11]+"-smui-selected-text"))&&{id:d},(!ge||oe[0]&524288&&f!==(f=ee({[P[19]]:!0,"mdc-select__selected-text":!0})))&&{class:f},{role:"button"},{"aria-haspopup":"listbox"},(!ge||oe[0]&2048&&h!==(h=P[11]+"-smui-label"))&&{"aria-labelledby":h},oe[1]&4194304&&Me(P[53],"selectedText$")])),m&&Ue(m.update)&&oe[0]&262144&&m.update.call(null,P[18]),Z(l,pe=ae(z,[(!ge||oe[0]&131072&&g!==(g=ee({[P[17]]:!0,"mdc-select__selected-text-container":!0})))&&{class:g},oe[1]&4194304&&Me(P[53],"selectedTextContainer$")])),p&&Ue(p.update)&&oe[0]&65536&&p.update.call(null,P[16]),Z(E,it=ae(We,[(!ge||oe[0]&2097152&&R!==(R=ee({[P[21]]:!0,"mdc-select__dropdown-icon":!0})))&&{class:R},oe[1]&4194304&&Me(P[53],"dropdownIcon$")])),y&&Ue(y.update)&&oe[0]&1048576&&y.update.call(null,P[20]),P[7]!=="outlined"&&P[5]?Ye?(Ye.p(P,oe),oe[0]&160&&L(Ye,1)):(Ye=zm(P),Ye.c(),L(Ye,1),Ye.m(i,null)):Ye&&(ft(),N(Ye,1,1,()=>{Ye=null}),ht()),Z(i,un=ae(Vt,[(!ge||oe[0]&32768&&M!==(M=ee({[P[15]]:!0,"mdc-select__anchor":!0})))&&{class:M},(!ge||oe[0]&1024&&I!==(I=P[10]?"true":void 0))&&{"aria-required":I},(!ge||oe[0]&64&&v!==(v=P[6]?"true":void 0))&&{"aria-disabled":v},(!ge||oe[1]&1)&&{"aria-controls":P[31]},(!ge||oe[1]&1)&&{"aria-describedby":P[31]},oe[0]&536870912&&P[29],oe[1]&4194304&&Me(P[53],"anchor$")])),j&&Ue(j.update)&&oe[0]&16384&&j.update.call(null,P[14]);const B=oe[0]&4194304|oe[1]&4194332?ae(At,[oe[0]&4194304|oe[1]&4&&{class:ee(Ke({[P[22]]:!0,"mdc-select__menu":!0},P[33]))},At[1],At[2],oe[1]&8&&{anchorElement:P[34]},oe[1]&16&&{anchorCorner:P[35]},oe[1]&4194304&&ze(Me(P[53],"menu$"))]):{};oe[0]&16777216|oe[1]&4194400|oe[2]&134217728&&(B.$$scope={dirty:oe,ctx:P}),!F&&oe[1]&2&&(F=!0,B.open=P[32],bn(()=>F=!1)),V.$set(B),Z(e,dt=ae(_t,[(!ge||oe[0]&67119050|oe[1]&2097154&&K!==(K=ee(Ke({[P[3]]:!0,"mdc-select":!0,"mdc-select--required":P[10],"mdc-select--disabled":P[6],"mdc-select--filled":P[7]==="filled","mdc-select--outlined":P[7]==="outlined","smui-select--standard":P[7]==="standard","mdc-select--with-leading-icon":P[45](P[13])?P[52].leadingIcon:P[13],"mdc-select--no-label":P[8]||P[9]==null&&!P[52].label,"mdc-select--invalid":P[1],"mdc-select--activated":P[32],"mdc-data-table__pagination-rows-per-page-select":P[46]==="data-table:pagination"},P[26]))))&&{class:K},(!ge||oe[0]&134217744&&G!==(G=Object.entries(P[27]).map(Km).concat([P[4]]).join(" ")))&&{style:G},oe[1]&4194304&&Yn(P[53],["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"])])),Q&&Ue(Q.update)&&oe[0]&128&&Q.update.call(null,{ripple:P[7]==="filled",unbounded:!1,addClass:P[49],removeClass:P[50],addStyle:P[51]}),Ee&&Ue(Ee.update)&&oe[0]&4&&Ee.update.call(null,P[2]),P[52].helperText?xe?(xe.p(P,oe),oe[1]&2097152&&L(xe,1)):(xe=Gm(P),xe.c(),L(xe,1),xe.m(Fe.parentNode,Fe)):xe&&(ft(),N(xe,1,1,()=>{xe=null}),ht())},i(P){ge||(L(le),L(q),L(be,P),L(Ye),L(V.$$.fragment,P),L(xe),ge=!0)},o(P){N(le),N(q),N(be,P),N(Ye),N(V.$$.fragment,P),N(xe),ge=!1},d(P){P&&X(e),H&&H.d(),Ae&&Ae.d(),le&&le.d(),q&&q.d(),be&&be.d(P),t[69](null),Ye&&Ye.d(),t[71](null),Be(V),t[83](null),P&&X(re),xe&&xe.d(P),P&&X(Fe),st=!1,Xe(x)}}}let BA=0;function HA(t){const e=t.currentTarget.getBoundingClientRect();return(jA(t)?t.touches[0].clientX:t.clientX)-e.left}function jA(t){return"touches"in t}const Km=([t,e])=>`${t}: ${e};`;function qA(t,e,n){const i=["use","class","style","ripple","disabled","variant","noLabel","label","value","key","dirty","invalid","updateInvalid","required","inputId","hiddenInput","withLeadingIcon","anchor$use","anchor$class","selectedTextContainer$use","selectedTextContainer$class","selectedText$use","selectedText$class","dropdownIcon$use","dropdownIcon$class","menu$class","getUseDefaultValidation","setUseDefaultValidation","focus","layout","getElement"];let s=J(e,i),r,a,{$$slots:o={},$$scope:l}=e;const c=hc(o),u=qe(Se());let d=()=>{};function f(w){return w===d}let{use:h=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:p=!0}=e,{disabled:b=!1}=e,{variant:E="standard"}=e,{noLabel:S=!1}=e,{label:O=void 0}=e,{value:k=""}=e,{key:R=w=>w}=e,{dirty:y=!1}=e,{invalid:T=d}=e,{updateInvalid:M=f(T)}=e;const I=f(T);f(T)&&(T=!1);let{required:v=!1}=e,{inputId:j="SMUI-select-"+BA++}=e,{hiddenInput:A=!1}=e,{withLeadingIcon:V=d}=e,{anchor$use:F=[]}=e,{anchor$class:K=""}=e,{selectedTextContainer$use:G=[]}=e,{selectedTextContainer$class:Q=""}=e,{selectedText$use:Ee=[]}=e,{selectedText$class:re=""}=e,{dropdownIcon$use:Fe=[]}=e,{dropdownIcon$class:ge=""}=e,{menu$class:st=""}=e,x,H,Ae={},le={},q,U={},be,lt=-1,kt,z=gt("SMUI:addLayoutListener"),pe,We=!1,it={},Ye,Vt,un=!1,At,te=gt("SMUI:select:context"),Ie,_t,dt,xe,P;et("SMUI:list:role",""),et("SMUI:list:nav",!1);const oe=Ki("");ui(t,oe,w=>n(43,r=w)),et("SMUI:select:selectedText",oe);const B=Ki(k);ui(t,B,w=>n(91,a=w)),et("SMUI:select:value",B);let ue=lt;z&&(pe=z(Ir)),Bt(()=>(n(23,H=new dA({setSelectedText:w=>{zn(oe,r=w,r)},isSelectAnchorFocused:()=>document.activeElement===q,getSelectAnchorAttr:oa,setSelectAnchorAttr:aa,removeSelectAnchorAttr:la,addMenuClass:sa,removeMenuClass:ra,openMenu:()=>{n(32,We=!0)},closeMenu:()=>{n(32,We=!1)},getAnchorElement:()=>q,setMenuAnchorElement:w=>{n(34,Ye=w)},setMenuAnchorCorner:w=>{n(35,Vt=w)},setMenuWrapFocus:w=>{n(36,un=w)},getSelectedIndex:()=>lt,setSelectedIndex:w=>{n(62,ue=w),n(24,lt=w),n(0,k=qi()[lt])},focusMenuItemAtIndex:w=>{At.focusItemAtIndex(w)},getMenuItemCount:()=>At.items.length,getMenuItemValues:()=>qi().map(R),getMenuItemTextAtIndex:w=>At.getPrimaryTextAtIndex(w),isTypeaheadInProgress:()=>At.typeaheadInProgress,typeaheadMatchItem:(w,cn)=>At.typeaheadMatchItem(w,cn),addClass:ut,removeClass:vn,hasClass:ce,setRippleCenter:w=>xe&&xe.setRippleCenter(w),activateBottomLine:()=>xe&&xe.activate(),deactivateBottomLine:()=>xe&&xe.deactivate(),notifyChange:w=>{n(54,y=!0),M&&n(1,T=!H.isValid()),$e(zi(),"SMUISelect:change",{value:k,index:lt},void 0,!0)},hasOutline:()=>!!P,notchOutline:w=>P&&P.notch(w),closeOutline:()=>P&&P.closeNotch(),hasLabel:()=>!!dt,floatLabel:w=>dt&&dt.float(w),getLabelWidth:()=>dt?dt.getWidth():0,setLabelRequired:w=>dt&&dt.setRequired(w)},{get helperText(){return _t},get leadingIcon(){return Ie}})),n(24,lt=qi().indexOf(k)),H.init(),yr(I),()=>{H.destroy()})),gn(()=>{pe&&pe()});function ce(w){return w in Ae?Ae[w]:zi().classList.contains(w)}function ut(w){Ae[w]||n(26,Ae[w]=!0,Ae)}function vn(w){(!(w in Ae)||Ae[w])&&n(26,Ae[w]=!1,Ae)}function vs(w,cn){le[w]!=cn&&(cn===""||cn==null?(delete le[w],n(27,le)):n(27,le[w]=cn,le))}function sa(w){it[w]||n(33,it[w]=!0,it)}function ra(w){(!(w in it)||it[w])&&n(33,it[w]=!1,it)}function oa(w){var cn;return w in U?(cn=U[w])!==null&&cn!==void 0?cn:null:zi().getAttribute(w)}function aa(w,cn){U[w]!==cn&&n(29,U[w]=cn,U)}function la(w){(!(w in U)||U[w]!=null)&&n(29,U[w]=void 0,U)}function qi(){return At.getOrderedList().map(w=>w.getValue())}function ua(){return H.getUseDefaultValidation()}function yr(w){H.setUseDefaultValidation(w)}function ca(){q.focus()}function Ir(){H.layout()}function zi(){return x}function da(w){ci.call(this,t,w)}function fa(w){ci.call(this,t,w)}function ha(w){ie[w?"unshift":"push"](()=>{dt=w,n(40,dt)})}function ma(w){ie[w?"unshift":"push"](()=>{dt=w,n(40,dt)})}function pa(w){ie[w?"unshift":"push"](()=>{P=w,n(42,P)})}function ga(w){ie[w?"unshift":"push"](()=>{be=w,n(30,be)})}function _a(w){ie[w?"unshift":"push"](()=>{xe=w,n(41,xe)})}function ya(w){ie[w?"unshift":"push"](()=>{q=w,n(28,q)})}const Ia=()=>H&&H.handleFocus(),va=()=>H&&H.handleBlur(),ba=w=>{q.focus(),H&&H.handleClick(HA(w))},Ea=w=>H&&H.handleKeydown(w);function Aa(w){lt=w,n(24,lt)}const Ta=w=>n(37,At=w.detail);function Sa(w){We=w,n(32,We)}const Ca=w=>H&&H.handleMenuItemAction(w.detail.index),wa=()=>H&&H.handleMenuClosing(),Oa=()=>H&&H.handleMenuClosed(),La=()=>H&&H.handleMenuOpened();function C(w){ie[w?"unshift":"push"](()=>{x=w,n(25,x)})}const Tt=w=>n(38,Ie=w.detail),vr=()=>n(38,Ie=void 0),ka=w=>n(31,kt=w.detail),bs=w=>n(39,_t=w.detail),Es=()=>{n(31,kt=void 0),n(39,_t=void 0)};return t.$$set=w=>{e=D(D({},e),ke(w)),n(53,s=J(e,i)),"use"in w&&n(2,h=w.use),"class"in w&&n(3,m=w.class),"style"in w&&n(4,g=w.style),"ripple"in w&&n(5,p=w.ripple),"disabled"in w&&n(6,b=w.disabled),"variant"in w&&n(7,E=w.variant),"noLabel"in w&&n(8,S=w.noLabel),"label"in w&&n(9,O=w.label),"value"in w&&n(0,k=w.value),"key"in w&&n(55,R=w.key),"dirty"in w&&n(54,y=w.dirty),"invalid"in w&&n(1,T=w.invalid),"updateInvalid"in w&&n(56,M=w.updateInvalid),"required"in w&&n(10,v=w.required),"inputId"in w&&n(11,j=w.inputId),"hiddenInput"in w&&n(12,A=w.hiddenInput),"withLeadingIcon"in w&&n(13,V=w.withLeadingIcon),"anchor$use"in w&&n(14,F=w.anchor$use),"anchor$class"in w&&n(15,K=w.anchor$class),"selectedTextContainer$use"in w&&n(16,G=w.selectedTextContainer$use),"selectedTextContainer$class"in w&&n(17,Q=w.selectedTextContainer$class),"selectedText$use"in w&&n(18,Ee=w.selectedText$use),"selectedText$class"in w&&n(19,re=w.selectedText$class),"dropdownIcon$use"in w&&n(20,Fe=w.dropdownIcon$use),"dropdownIcon$class"in w&&n(21,ge=w.dropdownIcon$class),"menu$class"in w&&n(22,st=w.menu$class),"$$scope"in w&&n(89,l=w.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&25165825|t.$$.dirty[2]&1&&ue!==lt)if(n(62,ue=lt),H)H.setSelectedIndex(lt,!1,!0);else{const w=qi();k!==w[lt]&&n(0,k=w[lt])}t.$$.dirty[0]&1&&zn(B,a=k,a),t.$$.dirty[0]&8388609|t.$$.dirty[1]&16777216&&H&&H.getValue()!==R(k)&&H.setValue(R(k)),t.$$.dirty[0]&8388672&&H&&H.getDisabled()!==b&&H.setDisabled(b),t.$$.dirty[0]&8388610|t.$$.dirty[1]&41943040&&H&&y&&H.isValid()!==!T&&(M?n(1,T=!H.isValid()):H.setValid(!T)),t.$$.dirty[0]&8389632&&H&&H.getRequired()!==v&&H.setRequired(v)},[k,T,h,m,g,p,b,E,S,O,v,j,A,V,F,K,G,Q,Ee,re,Fe,ge,st,H,lt,x,Ae,le,q,U,be,kt,We,it,Ye,Vt,un,At,Ie,_t,dt,xe,P,r,u,f,te,oe,B,ut,vn,vs,c,s,y,R,M,ua,yr,ca,Ir,zi,ue,o,da,fa,ha,ma,pa,ga,_a,ya,Ia,va,ba,Ea,Aa,Ta,Sa,Ca,wa,Oa,La,C,Tt,vr,ka,bs,Es,l]}class rO extends De{constructor(e){super();Re(this,e,qA,VA,Oe,{use:2,class:3,style:4,ripple:5,disabled:6,variant:7,noLabel:8,label:9,value:0,key:55,dirty:54,invalid:1,updateInvalid:56,required:10,inputId:11,hiddenInput:12,withLeadingIcon:13,anchor$use:14,anchor$class:15,selectedTextContainer$use:16,selectedTextContainer$class:17,selectedText$use:18,selectedText$class:19,dropdownIcon$use:20,dropdownIcon$class:21,menu$class:22,getUseDefaultValidation:57,setUseDefaultValidation:58,focus:59,layout:60,getElement:61},null,[-1,-1,-1,-1])}get getUseDefaultValidation(){return this.$$.ctx[57]}get setUseDefaultValidation(){return this.$$.ctx[58]}get focus(){return this.$$.ctx[59]}get layout(){return this.$$.ctx[60]}get getElement(){return this.$$.ctx[61]}}function zA(t){let e;const n=t[11].default,i=de(n,t,t[13],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&8192)&&he(i,n,s,s[13],e?fe(n,s[13],r,null):me(s[13]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function GA(t){let e,n;const i=[{use:t[3]},{"data-value":t[0]},{value:t[0]},{selected:t[2]},t[6]];let s={$$slots:{default:[zA]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=D(s,i[r]);return e=new by({props:s}),t[12](e),{c(){Ge(e.$$.fragment)},m(r,a){Ve(e,r,a),n=!0},p(r,[a]){const o=a&77?ae(i,[a&8&&{use:r[3]},a&1&&{"data-value":r[0]},a&1&&{value:r[0]},a&4&&{selected:r[2]},a&64&&ze(r[6])]):{};a&8192&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){t[12](null),Be(e,r)}}}function KA(t,e,n){let i,s;const r=["use","class","value","getElement"];let a=J(e,r),o,l,{$$slots:c={},$$scope:u}=e;const d=qe(Se());let{use:f=[]}=e;const h="";let{value:m=""}=e,g;const p=gt("SMUI:select:selectedText");ui(t,p,k=>n(14,o=k));const b=gt("SMUI:select:value");ui(t,b,k=>n(10,l=k)),et("SMUI:list:item:role","option"),Bt(E),gn(E);function E(){s&&g&&zn(p,o=g.getPrimaryText(),o)}function S(){return g.getElement()}function O(k){ie[k?"unshift":"push"](()=>{g=k,n(1,g)})}return t.$$set=k=>{e=D(D({},e),ke(k)),n(6,a=J(e,r)),"use"in k&&n(7,f=k.use),"value"in k&&n(0,m=k.value),"$$scope"in k&&n(13,u=k.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(3,i=[d,...f]),t.$$.dirty&1025&&n(2,s=m!=null&&m!==""&&l===m)},[m,g,s,i,p,b,a,f,h,S,l,c,O,u]}class WA extends De{constructor(e){super();Re(this,e,KA,GA,Oe,{use:7,class:8,value:0,getElement:9})}get class(){return this.$$.ctx[8]}get getElement(){return this.$$.ctx[9]}}const oO=WA;function XA(t){let e;return{c(){e=pn(t[8])},m(n,i){Y(n,e,i)},p(n,i){i&256&&kn(e,n[8])},i:Nt,o:Nt,d(n){n&&X(e)}}}function YA(t){let e;const n=t[13].default,i=de(n,t,t[12],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?fe(n,s[12],r,null):me(s[12]),null)},i(s){e||(L(i,s),e=!0)},o(s){N(i,s),e=!1},d(s){i&&i.d(s)}}}function JA(t){let e,n,i,s,r,a,o,l,c;const u=[YA,XA],d=[];function f(g,p){return g[8]==null?0:1}n=f(t),i=d[n]=u[n](t);let h=[{class:s=ee(Ke({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let g=0;g<h.length;g+=1)m=D(m,h[g]);return{c(){e=ye("div"),i.c(),Z(e,m)},m(g,p){Y(g,e,p),d[n].m(e,null),t[14](e),o=!0,l||(c=[$(a=Ze.call(null,e,t[0])),$(t[9].call(null,e))],l=!0)},p(g,[p]){let b=n;n=f(g),n===b?d[n].p(g,p):(ft(),N(d[b],1,1,()=>{d[b]=null}),ht(),i=d[n],i?i.p(g,p):(i=d[n]=u[n](g),i.c()),L(i,1),i.m(e,null)),Z(e,m=ae(h,[(!o||p&90&&s!==(s=ee(Ke({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:s},(!o||p&8&&r!==(r=g[3]?void 0:"true"))&&{"aria-hidden":r},(!o||p&4)&&{id:g[2]},p&128&&g[7],p&1024&&g[10]])),a&&Ue(a.update)&&p&1&&a.update.call(null,g[0])},i(g){o||(L(i),o=!0)},o(g){N(i),o=!1},d(g){g&&X(e),d[n].d(),t[14](null),l=!1,Xe(c)}}}let QA=0;function ZA(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+QA++}=e,{persistent:d=!1}=e,{validationMsg:f=!1}=e,h,m,g={},p={},b;Bt(()=>(m=new f0({addClass:S,removeClass:O,hasClass:E,getAttr:k,setAttr:R,removeAttr:y,setContent:I=>{n(8,b=I)}}),u.startsWith("SMUI-textfield-helper-text-")&&$e(T(),"SMUITextfieldHelperText:id",u),$e(T(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{$e(T(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function E(I){return I in g?g[I]:T().classList.contains(I)}function S(I){g[I]||n(6,g[I]=!0,g)}function O(I){(!(I in g)||g[I])&&n(6,g[I]=!1,g)}function k(I){var v;return I in p?(v=p[I])!==null&&v!==void 0?v:null:T().getAttribute(I)}function R(I,v){p[I]!==v&&n(7,p[I]=v,p)}function y(I){(!(I in p)||p[I]!=null)&&n(7,p[I]=void 0,p)}function T(){return h}function M(I){ie[I?"unshift":"push"](()=>{h=I,n(5,h)})}return t.$$set=I=>{e=D(D({},e),ke(I)),n(10,s=J(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,c=I.class),"id"in I&&n(2,u=I.id),"persistent"in I&&n(3,d=I.persistent),"validationMsg"in I&&n(4,f=I.validationMsg),"$$scope"in I&&n(12,a=I.$$scope)},[l,c,u,d,f,h,g,p,b,o,s,T,a,r,M]}class aO extends De{constructor(e){super();Re(this,e,ZA,JA,Oe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}var xA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Wm={exports:{}};(function(t){(function(e){let n;function i(c,u){const d=c.charCodeAt(u);if(isNaN(d))throw new RangeError("Index "+u+' out of range for string "'+c+'"; please open an issue at https://github.com/Trott/slug/issues/new');if(d<55296||d>57343)return[c.charAt(u),u];if(d>=55296&&d<=56319){if(c.length<=u+1)return[" ",u];const h=c.charCodeAt(u+1);return h<56320||h>57343?[" ",u]:[c.charAt(u)+c.charAt(u+1),u+1]}if(u===0)return[" ",u];const f=c.charCodeAt(u-1);if(f<55296||f>56319)return[" ",u];throw new Error('String "'+c+'" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')}typeof window!="undefined"?window.btoa?n=function(c){return btoa(unescape(encodeURIComponent(c)))}:n=function(c){const u=unescape(encodeURIComponent(c+""));let d="";for(let f,h,m=0,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";u.charAt(m|0)||(g="=",m%1);d+=g.charAt(63&f>>8-m%1*8)){if(h=u.charCodeAt(m+=3/4),h>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|h}return d}:n=function(c){return Buffer.from(c).toString("base64")},typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(u,d){if(u==null)throw new TypeError("Cannot convert undefined or null to object");const f=Object(u);for(let m=1;m<arguments.length;m++){const g=arguments[m];if(g!=null)for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(f[h]=g[h])}return f},writable:!0,configurable:!0});function s(c,u){let d=a(c,u);if(d===""){let f="";for(let h=0;h<c.length;h++){const m=i(c,h);h=m[1],f+=m[0]}d=a(n(f),u)}return d}const r={bg:{\u0419:"Y",\u0439:"y",X:"H",x:"h",\u0426:"Ts",\u0446:"ts",\u0429:"Sht",\u0449:"sht",\u042A:"A",\u044A:"a",\u042C:"Y",\u044C:"y"},de:{\u00C4:"AE",\u00E4:"ae",\u00D6:"OE",\u00F6:"oe",\u00DC:"UE",\u00FC:"ue"},sr:{\u0111:"dj",\u0110:"DJ"},uk:{\u0418:"Y",\u0438:"y",\u0419:"Y",\u0439:"y",\u0426:"Ts",\u0446:"ts",\u0425:"Kh",\u0445:"kh",\u0429:"Shch",\u0449:"shch",\u0413:"H",\u0433:"h"}};function a(c,u){if(typeof c!="string")throw new Error("slug() requires a string argument, received "+typeof c);typeof u=="string"&&(u={replacement:u}),u=u?Object.assign({},u):{},u.mode=u.mode||s.defaults.mode;const d=s.defaults.modes[u.mode],f=["replacement","multicharmap","charmap","remove","lower","trim"];for(let b,E=0,S=f.length;E<S;E++)b=f[E],u[b]=b in u?u[b]:d[b];const h=r[u.locale]||{};let m=[];for(let b in u.multicharmap){if(!Object.prototype.hasOwnProperty.call(u.multicharmap,b))continue;const E=b.length;m.indexOf(E)===-1&&m.push(E)}m=m.sort(function(b,E){return E-b});const g=u.mode==="rfc3986"?/[^\w\s\-.~]/:/[^A-Za-z0-9\s]/;let p="";for(let b,E=0,S=c.length;E<S;E++){b=c[E];let O=!1;for(let k=0;k<m.length;k++){const R=m[k],y=c.substr(E,R);if(u.multicharmap[y]){E+=R-1,b=u.multicharmap[y],O=!0;break}}O||(h[b]?b=h[b]:u.charmap[b]?b=u.charmap[b]:b.includes(u.replacement)?b=b.replace(u.replacement," "):b=b.replace(g,"")),p+=b}return u.remove&&(p=p.replace(u.remove,"")),u.trim&&(p=p.trim()),p=p.replace(/\s+/g,u.replacement),u.lower&&(p=p.toLowerCase()),p}const o={\u092B\u093C:"Fi",\u0917\u093C:"Ghi",\u0916\u093C:"Khi",\u0915\u093C:"Qi",\u0921\u093C:"ugDha",\u0922\u093C:"ugDhha",\u092F\u093C:"Yi",\u091C\u093C:"Za",\u05D1\u05B4\u05D9:"i",\u05D1\u05B5:"e",\u05D1\u05B5\u05D9:"e",\u05D1\u05B6:"e",\u05D1\u05B7:"a",\u05D1\u05B8:"a",\u05D1\u05B9:"o",\u05D5\u05B9:"o",\u05D1\u05BB:"u",\u05D5\u05BC:"u",\u05D1\u05BC:"b",\u05DB\u05BC:"k",\u05DA\u05BC:"k",\u05E4\u05BC:"p",\u05E9\u05C1:"sh",\u05E9\u05C2:"s",\u05D1\u05B0:"e",\u05D7\u05B1:"e",\u05D7\u05B2:"a",\u05D7\u05B3:"o",\u05D1\u05B4:"i"},l={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00C6:"AE",\u00C7:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u0150:"O",\u00D8:"O",\u014C:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u0170:"U",\u00DD:"Y",\u00DE:"TH",\u00DF:"ss",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00E6:"ae",\u00E7:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u0151:"o",\u00F8:"o",\u014D:"o",\u0152:"OE",\u0153:"oe",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u0171:"u",\u00FD:"y",\u00FE:"th",\u00FF:"y","\u1E9E":"SS",\u03B1:"a",\u03B2:"b",\u03B3:"g",\u03B4:"d",\u03B5:"e",\u03B6:"z",\u03B7:"h",\u03B8:"8",\u03B9:"i",\u03BA:"k",\u03BB:"l",\u03BC:"m",\u03BD:"n",\u03BE:"3",\u03BF:"o",\u03C0:"p",\u03C1:"r",\u03C3:"s",\u03C4:"t",\u03C5:"y",\u03C6:"f",\u03C7:"x",\u03C8:"ps",\u03C9:"w",\u03AC:"a",\u03AD:"e",\u03AF:"i",\u03CC:"o",\u03CD:"y",\u03AE:"h",\u03CE:"w",\u03C2:"s",\u03CA:"i",\u03B0:"y",\u03CB:"y",\u0390:"i",\u0391:"A",\u0392:"B",\u0393:"G",\u0394:"D",\u0395:"E",\u0396:"Z",\u0397:"H",\u0398:"8",\u0399:"I",\u039A:"K",\u039B:"L",\u039C:"M",\u039D:"N",\u039E:"3",\u039F:"O",\u03A0:"P",\u03A1:"R",\u03A3:"S",\u03A4:"T",\u03A5:"Y",\u03A6:"F",\u03A7:"X",\u03A8:"PS",\u03A9:"W",\u0386:"A",\u0388:"E",\u038A:"I",\u038C:"O",\u038E:"Y",\u0389:"H",\u038F:"W",\u03AA:"I",\u03AB:"Y",\u015F:"s",\u015E:"S",\u0131:"i",\u0130:"I",\u011F:"g",\u011E:"G",\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"yo",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"j",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"c",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"u",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u0410:"A",\u0411:"B",\u0412:"V",\u0413:"G",\u0414:"D",\u0415:"E",\u0401:"Yo",\u0416:"Zh",\u0417:"Z",\u0418:"I",\u0419:"J",\u041A:"K",\u041B:"L",\u041C:"M",\u041D:"N",\u041E:"O",\u041F:"P",\u0420:"R",\u0421:"S",\u0422:"T",\u0423:"U",\u0424:"F",\u0425:"H",\u0426:"C",\u0427:"Ch",\u0428:"Sh",\u0429:"Sh",\u042A:"U",\u042B:"Y",\u042C:"",\u042D:"E",\u042E:"Yu",\u042F:"Ya",\u0404:"Ye",\u0406:"I",\u0407:"Yi",\u0490:"G",\u0454:"ye",\u0456:"i",\u0457:"yi",\u0491:"g",\u010D:"c",\u010F:"d",\u011B:"e",\u0148:"n",\u0159:"r",\u0161:"s",\u0165:"t",\u016F:"u",\u017E:"z",\u010C:"C",\u010E:"D",\u011A:"E",\u0147:"N",\u0158:"R",\u0160:"S",\u0164:"T",\u016E:"U",\u017D:"Z",\u013E:"l",\u013A:"l",\u0155:"r",\u013D:"L",\u0139:"L",\u0154:"R",\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u015B:"s",\u017A:"z",\u017C:"z",\u0104:"A",\u0106:"C",\u0118:"E",\u0141:"L",\u0143:"N",\u015A:"S",\u0179:"Z",\u017B:"Z",\u0101:"a",\u0113:"e",\u0123:"g",\u012B:"i",\u0137:"k",\u013C:"l",\u0146:"n",\u016B:"u",\u0100:"A",\u0112:"E",\u0122:"G",\u012A:"I",\u0136:"K",\u013B:"L",\u0145:"N",\u016A:"U",\u0623:"a",\u0625:"i",\u0628:"b",\u062A:"t",\u062B:"th",\u062C:"g",\u062D:"h",\u062E:"kh",\u062F:"d",\u0630:"th",\u0631:"r",\u0632:"z",\u0633:"s",\u0634:"sh",\u0635:"s",\u0636:"d",\u0637:"t",\u0638:"th",\u0639:"aa",\u063A:"gh",\u0641:"f",\u0642:"k",\u0643:"k",\u0644:"l",\u0645:"m",\u0646:"n",\u0647:"h",\u0648:"o",\u064A:"y",\u0621:"aa",\u0629:"a",\u0622:"a",\u0627:"a",\u067E:"p",\u0698:"zh",\u06AF:"g",\u0686:"ch",\u06A9:"k",\u06CC:"i",\u0117:"e",\u012F:"i",\u0173:"u",\u0116:"E",\u012E:"I",\u0172:"U",\u021B:"t",\u021A:"T",\u0163:"t",\u0162:"T",\u0219:"s",\u0218:"S",\u0103:"a",\u0102:"A",\u1EA0:"A",\u1EA2:"A",\u1EA6:"A",\u1EA4:"A",\u1EAC:"A",\u1EA8:"A",\u1EAA:"A",\u1EB0:"A",\u1EAE:"A",\u1EB6:"A",\u1EB2:"A",\u1EB4:"A",\u1EB8:"E",\u1EBA:"E",\u1EBC:"E",\u1EC0:"E",\u1EBE:"E",\u1EC6:"E",\u1EC2:"E",\u1EC4:"E",\u1ECA:"I",\u1EC8:"I",\u0128:"I",\u1ECC:"O",\u1ECE:"O",\u1ED2:"O",\u1ED0:"O",\u1ED8:"O",\u1ED4:"O",\u1ED6:"O",\u01A0:"O",\u1EDC:"O",\u1EDA:"O",\u1EE2:"O",\u1EDE:"O",\u1EE0:"O",\u1EE4:"U",\u1EE6:"U",\u0168:"U",\u01AF:"U",\u1EEA:"U",\u1EE8:"U",\u1EF0:"U",\u1EEC:"U",\u1EEE:"U",\u1EF2:"Y",\u1EF4:"Y",\u1EF6:"Y",\u1EF8:"Y",\u0110:"D",\u1EA1:"a",\u1EA3:"a",\u1EA7:"a",\u1EA5:"a",\u1EAD:"a",\u1EA9:"a",\u1EAB:"a",\u1EB1:"a",\u1EAF:"a",\u1EB7:"a",\u1EB3:"a",\u1EB5:"a",\u1EB9:"e",\u1EBB:"e",\u1EBD:"e",\u1EC1:"e",\u1EBF:"e",\u1EC7:"e",\u1EC3:"e",\u1EC5:"e",\u1ECB:"i",\u1EC9:"i",\u0129:"i",\u1ECD:"o",\u1ECF:"o",\u1ED3:"o",\u1ED1:"o",\u1ED9:"o",\u1ED5:"o",\u1ED7:"o",\u01A1:"o",\u1EDD:"o",\u1EDB:"o",\u1EE3:"o",\u1EDF:"o",\u1EE1:"o",\u1EE5:"u",\u1EE7:"u",\u0169:"u",\u01B0:"u",\u1EEB:"u",\u1EE9:"u",\u1EF1:"u",\u1EED:"u",\u1EEF:"u",\u1EF3:"y",\u1EF5:"y",\u1EF7:"y",\u1EF9:"y",\u0111:"d",\u04D8:"AE",\u04D9:"ae",\u0492:"GH",\u0493:"gh",\u049A:"KH",\u049B:"kh",\u04A2:"NG",\u04A3:"ng",\u04AE:"UE",\u04AF:"ue",\u04B0:"U",\u04B1:"u",\u04BA:"H",\u04BB:"h",\u04E8:"OE",\u04E9:"oe",\u0452:"dj",\u0458:"j",\u0459:"lj",\u045A:"nj",\u045B:"c",\u045F:"dz",\u0402:"Dj",\u0408:"j",\u0409:"Lj",\u040A:"Nj",\u040B:"C",\u040F:"Dz",\u01CC:"nj",\u01C9:"lj",\u01CB:"NJ",\u01C8:"LJ",\u0905:"a",\u0906:"aa",\u090F:"e",\u0908:"ii",\u090D:"ei",\u090E:"ae",\u0910:"ai",\u0907:"i",\u0913:"o",\u0911:"oi",\u0912:"oii",\u090A:"uu",\u0914:"ou",\u0909:"u",\u092C:"B",\u092D:"Bha",\u091A:"Ca",\u091B:"Chha",\u0921:"Da",\u0922:"Dha",\u092B:"Fa",\u0917:"Ga",\u0918:"Gha",\u0917\u093C:"Ghi",\u0939:"Ha",\u091C:"Ja",\u091D:"Jha",\u0915:"Ka",\u0916:"Kha",\u0916\u093C:"Khi",\u0932:"L",\u0933:"Li",\u090C:"Li",\u0934:"Lii",\u0961:"Lii",\u092E:"Ma",\u0928:"Na",\u0919:"Na",\u091E:"Nia",\u0923:"Nae",\u0929:"Ni",\u0950:"oms",\u092A:"Pa",\u0915\u093C:"Qi",\u0930:"Ra",\u090B:"Ri",\u0960:"Ri",\u0931:"Ri",\u0938:"Sa",\u0936:"Sha",\u0937:"Shha",\u091F:"Ta",\u0924:"Ta",\u0920:"Tha",\u0926:"Tha",\u0925:"Tha",\u0927:"Thha",\u0921\u093C:"ugDha",\u0922\u093C:"ugDhha",\u0935:"Va",\u092F:"Ya",\u092F\u093C:"Yi",\u091C\u093C:"Za",\u0259:"e",\u018F:"E",\u10D0:"a",\u10D1:"b",\u10D2:"g",\u10D3:"d",\u10D4:"e",\u10D5:"v",\u10D6:"z",\u10D7:"t",\u10D8:"i",\u10D9:"k",\u10DA:"l",\u10DB:"m",\u10DC:"n",\u10DD:"o",\u10DE:"p",\u10DF:"zh",\u10E0:"r",\u10E1:"s",\u10E2:"t",\u10E3:"u",\u10E4:"p",\u10E5:"k",\u10E6:"gh",\u10E7:"q",\u10E8:"sh",\u10E9:"ch",\u10EA:"ts",\u10EB:"dz",\u10EC:"ts",\u10ED:"ch",\u10EE:"kh",\u10EF:"j",\u10F0:"h",\u05D1:"v",\u05D2\u05BC:"g",\u05D2:"g",\u05D3:"d",\u05D3\u05BC:"d",\u05D4:"h",\u05D5:"v",\u05D6:"z",\u05D7:"h",\u05D8:"t",\u05D9:"y",\u05DB:"kh",\u05DA:"kh",\u05DC:"l",\u05DE:"m",\u05DD:"m",\u05E0:"n",\u05DF:"n",\u05E1:"s",\u05E4:"f",\u05E3:"f",\u05E5:"ts",\u05E6:"ts",\u05E7:"k",\u05E8:"r",\u05EA\u05BC:"t",\u05EA:"t"};s.charmap=Object.assign({},l),s.multicharmap=Object.assign({},o),s.defaults={charmap:s.charmap,mode:"pretty",modes:{rfc3986:{replacement:"-",remove:null,lower:!0,charmap:s.charmap,multicharmap:s.multicharmap,trim:!0},pretty:{replacement:"-",remove:null,lower:!0,charmap:s.charmap,multicharmap:s.multicharmap,trim:!0}},multicharmap:s.multicharmap},s.reset=function(){s.defaults.modes.rfc3986.charmap=s.defaults.modes.pretty.charmap=s.charmap=s.defaults.charmap=Object.assign({},l),s.defaults.modes.rfc3986.multicharmap=s.defaults.modes.pretty.multicharmap=s.multicharmap=s.defaults.multicharmap=Object.assign({},o)},s.extend=function(c){const u=Object.keys(c),d={},f={};for(let h=0;h<u.length;h++)u[h].length>1?d[u[h]]=c[u[h]]:f[u[h]]=c[u[h]];Object.assign(s.charmap,f),Object.assign(s.multicharmap,d)},t.exports?t.exports=s:e.slug=s})(xA)})(Wm);var lO=Wm.exports;/**
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
 */var Uo={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Vn={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var $A=function(t){Dt(e,t);function e(n){var i=t.call(this,nt(nt({},e.defaultAdapter),n))||this;return i.hasToggledAriaLabel=!1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Uo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Vn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this.adapter.getAttr(Vn.DATA_ARIA_LABEL_ON),i=this.adapter.getAttr(Vn.DATA_ARIA_LABEL_OFF);if(n&&i){if(this.adapter.getAttr(Vn.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Vn.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Uo.ICON_BUTTON_ON)},e.prototype.toggle=function(n){if(n===void 0&&(n=!this.isOn()),n?this.adapter.addClass(Uo.ICON_BUTTON_ON):this.adapter.removeClass(Uo.ICON_BUTTON_ON),this.hasToggledAriaLabel){var i=n?this.adapter.getAttr(Vn.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Vn.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Vn.ARIA_LABEL,i||"")}else this.adapter.setAttr(Vn.ARIA_PRESSED,""+n)},e}(Qt);function Xm(t){let e;return{c(){e=ye("div"),rt(e,"class","mdc-icon-button__touch")},m(n,i){Y(n,e,i)},d(n){n&&X(e)}}}function eT(t){let e,n,i,s;const r=t[31].default,a=de(r,t,t[35],null);let o=t[8]&&Xm();return{c(){e=ye("div"),n=Qe(),a&&a.c(),o&&o.c(),i=Rt(),rt(e,"class","mdc-icon-button__ripple")},m(l,c){Y(l,e,c),Y(l,n,c),a&&a.m(l,c),o&&o.m(l,c),Y(l,i,c),s=!0},p(l,c){a&&a.p&&(!s||c[1]&16)&&he(a,r,l,l[35],s?fe(r,l[35],c,null):me(l[35]),null),l[8]?o||(o=Xm(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){s||(L(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&X(e),l&&X(n),a&&a.d(l),o&&o.d(l),l&&X(i)}}}function tT(t){let e,n,i;const s=[{use:[[yn,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[28].disabled,addClass:t[25],removeClass:t[26],addStyle:t[27]}],t[21],...t[1]]},{class:ee(Ke({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[22](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[23]==="card:action","mdc-card__action--icon":t[23]==="card:action","mdc-top-app-bar__navigation-icon":t[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[23]==="top-app-bar:action","mdc-snackbar__dismiss":t[23]==="snackbar:actions","mdc-data-table__pagination-button":t[23]==="data-table:pagination","mdc-data-table__sort-icon-button":t[23]==="data-table:sortable-header-cell","mdc-dialog__close":t[23]==="dialog:header"&&t[12]==="close"},t[17]))},{style:Object.entries(t[18]).map(Ym).concat([t[3]]).join(" ")},{"aria-pressed":t[22](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[24]},{href:t[11]},t[20],t[19],t[28]];var r=t[13];function a(o){let l={$$slots:{default:[eT]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)l=D(l,s[c]);return{props:l}}return r&&(e=new r(a(t)),t[32](e),e.$on("click",t[33]),e.$on("click",t[34])),{c(){e&&Ge(e.$$.fragment),n=Rt()},m(o,l){e&&Ve(e,o,l),Y(o,n,l),i=!0},p(o,l){const c=l[0]&536748031?ae(s,[l[0]&505413682&&{use:[[yn,{ripple:o[4],unbounded:!0,color:o[5],disabled:!!o[28].disabled,addClass:o[25],removeClass:o[26],addStyle:o[27]}],o[21],...o[1]]},l[0]&12719877&&{class:ee(Ke({[o[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!o[22](o[0])&&o[0],"mdc-icon-button--touch":o[8],"mdc-icon-button--display-flex":o[9],"smui-icon-button--size-button":o[10]==="button","mdc-icon-button--reduced-size":o[10]==="mini"||o[10]==="button","mdc-card__action":o[23]==="card:action","mdc-card__action--icon":o[23]==="card:action","mdc-top-app-bar__navigation-icon":o[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[23]==="top-app-bar:action","mdc-snackbar__dismiss":o[23]==="snackbar:actions","mdc-data-table__pagination-button":o[23]==="data-table:pagination","mdc-data-table__sort-icon-button":o[23]==="data-table:sortable-header-cell","mdc-dialog__close":o[23]==="dialog:header"&&o[12]==="close"},o[17]))},l[0]&262152&&{style:Object.entries(o[18]).map(Ym).concat([o[3]]).join(" ")},l[0]&4194305&&{"aria-pressed":o[22](o[0])?null:o[0]?"true":"false"},l[0]&193&&{"aria-label":o[0]?o[6]:o[7]},l[0]&64&&{"data-aria-label-on":o[6]},l[0]&128&&{"data-aria-label-off":o[7]},l[0]&16777216&&{"aria-describedby":o[24]},l[0]&2048&&{href:o[11]},l[0]&1048576&&ze(o[20]),l[0]&524288&&ze(o[19]),l[0]&268435456&&ze(o[28])]):{};if(l[0]&256|l[1]&16&&(c.$$scope={dirty:l,ctx:o}),r!==(r=o[13])){if(e){ft();const u=e;N(u.$$.fragment,1,0,()=>{Be(u,1)}),ht()}r?(e=new r(a(o)),o[32](e),e.$on("click",o[33]),e.$on("click",o[34]),Ge(e.$$.fragment),L(e.$$.fragment,1),Ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){t[32](null),o&&X(n),e&&Be(e,o)}}}const Ym=([t,e])=>`${t}: ${e};`;function nT(t,e,n){let i;const s=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","getElement"];let r=J(e,s),{$$slots:a={},$$scope:o}=e;const l=qe(Se());let c=()=>{};function u(U){return U===c}let{use:d=[]}=e,{class:f=""}=e,{style:h=""}=e,{ripple:m=!0}=e,{color:g=void 0}=e,{toggle:p=!1}=e,{pressed:b=c}=e,{ariaLabelOn:E=void 0}=e,{ariaLabelOff:S=void 0}=e,{touch:O=!1}=e,{displayFlex:k=!0}=e,{size:R="normal"}=e,{href:y=void 0}=e,{action:T=void 0}=e,M,I,v={},j={},A={},V=gt("SMUI:icon-button:context"),F=gt("SMUI:icon-button:aria-describedby"),{component:K=y==null?Ga:wr}=e;et("SMUI:icon:context","icon-button");let G=null;gn(()=>{I&&I.destroy()});function Q(U){return U in v?v[U]:H().classList.contains(U)}function Ee(U){v[U]||n(17,v[U]=!0,v)}function re(U){(!(U in v)||v[U])&&n(17,v[U]=!1,v)}function Fe(U,be){j[U]!=be&&(be===""||be==null?(delete j[U],n(18,j)):n(18,j[U]=be,j))}function ge(U){var be;return U in A?(be=A[U])!==null&&be!==void 0?be:null:H().getAttribute(U)}function st(U,be){A[U]!==be&&n(19,A[U]=be,A)}function x(U){n(0,b=U.isOn)}function H(){return M.getElement()}function Ae(U){ie[U?"unshift":"push"](()=>{M=U,n(15,M)})}const le=()=>I&&I.handleClick(),q=()=>V==="top-app-bar:navigation"&&$e(H(),"SMUITopAppBarIconButton:nav");return t.$$set=U=>{e=D(D({},e),ke(U)),n(28,r=J(e,s)),"use"in U&&n(1,d=U.use),"class"in U&&n(2,f=U.class),"style"in U&&n(3,h=U.style),"ripple"in U&&n(4,m=U.ripple),"color"in U&&n(5,g=U.color),"toggle"in U&&n(29,p=U.toggle),"pressed"in U&&n(0,b=U.pressed),"ariaLabelOn"in U&&n(6,E=U.ariaLabelOn),"ariaLabelOff"in U&&n(7,S=U.ariaLabelOff),"touch"in U&&n(8,O=U.touch),"displayFlex"in U&&n(9,k=U.displayFlex),"size"in U&&n(10,R=U.size),"href"in U&&n(11,y=U.href),"action"in U&&n(12,T=U.action),"component"in U&&n(13,K=U.component),"$$scope"in U&&n(35,o=U.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&4096&&n(20,i=(()=>{if(V==="data-table:pagination")switch(T){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return V==="dialog:header"?{"data-mdc-dialog-action":T}:{action:T}})()),t.$$.dirty[0]&1610711040&&M&&H()&&p!==G&&(p&&!I?(n(16,I=new $A({addClass:Ee,hasClass:Q,notifyChange:U=>{x(U),$e(H(),"SMUIIconButtonToggle:change",U,void 0,!0)},removeClass:re,getAttr:ge,setAttr:st})),I.init()):!p&&I&&(I.destroy(),n(16,I=void 0),n(17,v={}),n(19,A={})),n(30,G=p)),t.$$.dirty[0]&65537&&I&&!u(b)&&I.isOn()!==b&&I.toggle(b)},[b,d,f,h,m,g,E,S,O,k,R,y,T,K,H,M,I,v,j,A,i,l,u,V,F,Ee,re,Fe,r,p,G,a,Ae,le,q,o]}class uO extends De{constructor(e){super();Re(this,e,nT,tT,Oe,{use:1,class:2,style:3,ripple:4,color:5,toggle:29,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,getElement:14},null,[-1,-1])}get getElement(){return this.$$.ctx[14]}}/**
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
 */var Mi={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Vo={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},iT={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var Lu=function(t){Dt(e,t);function e(n){return t.call(this,nt(nt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return iT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Vo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(Qt);/**
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
 */var Bo=0,Jm=function(t){Dt(e,t);function e(n){var i=t.call(this,n)||this;return i.wasDocked=!0,i.isDockedShowing=!0,i.currentAppBarOffsetTop=0,i.isCurrentlyBeingResized=!1,i.resizeThrottleId=Bo,i.resizeDebounceId=Bo,i.lastScrollPosition=i.adapter.getViewportScrollY(),i.topAppBarHeight=i.adapter.getTopAppBarHeight(),i}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var n=Math.max(this.adapter.getViewportScrollY(),0),i=n-this.lastScrollPosition;this.lastScrollPosition=n,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=i,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var n=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){n.resizeThrottleId=Bo,n.throttledResizeHandler()},Vo.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){n.handleTargetScroll(),n.isCurrentlyBeingResized=!1,n.resizeDebounceId=Bo},Vo.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var n=-this.topAppBarHeight,i=this.currentAppBarOffsetTop<0,s=this.currentAppBarOffsetTop>n,r=i&&s;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==s)return this.isDockedShowing=s,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var n=this.currentAppBarOffsetTop;Math.abs(n)>=this.topAppBarHeight&&(n=-Vo.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",n+"px")}},e.prototype.throttledResizeHandler=function(){var n=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==n&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-n,this.topAppBarHeight=n),this.handleTargetScroll()},e}(Lu);/**
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
 */var sT=function(t){Dt(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.wasScrolled=!1,n}return e.prototype.handleTargetScroll=function(){var n=this.adapter.getViewportScrollY();n<=0?this.wasScrolled&&(this.adapter.removeClass(Mi.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Mi.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(Jm);/**
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
 */var rT=function(t){Dt(e,t);function e(n){var i=t.call(this,n)||this;return i.collapsed=!1,i.isAlwaysCollapsed=!1,i}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Mi.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Mi.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(n){this.isAlwaysCollapsed=!!n,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var n=this.adapter.getViewportScrollY();n<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(Mi.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Mi.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(Lu);const{window:Qm}=Ua;function oT(t){let e,n,i,s,r,a,o;const l=t[22].default,c=de(l,t,t[21],null);let u=[{class:n=ee(Ke({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":t[4]==="short","mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":t[4]==="fixed","smui-top-app-bar--static":t[4]==="static","smui-top-app-bar--color-secondary":t[5]==="secondary","mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7]},t[11]))},{style:i=Object.entries(t[12]).map(Zm).concat([t[3]]).join(" ")},t[15]],d={};for(let f=0;f<u.length;f+=1)d=D(d,u[f]);return{c(){e=ye("header"),c&&c.c(),Z(e,d)},m(f,h){Y(f,e,h),c&&c.m(e,null),t[25](e),r=!0,a||(o=[Te(Qm,"resize",t[23]),Te(Qm,"scroll",t[24]),$(s=Ze.call(null,e,t[1])),$(t[13].call(null,e)),Te(e,"SMUITopAppBarIconButton:nav",t[26])],a=!0)},p(f,h){c&&c.p&&(!r||h[0]&2097152)&&he(c,l,f,f[21],r?fe(l,f[21],h,null):me(f[21]),null),Z(e,d=ae(u,[(!r||h[0]&2293&&n!==(n=ee(Ke({[f[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":f[4]==="short","mdc-top-app-bar--short-collapsed":f[0],"mdc-top-app-bar--fixed":f[4]==="fixed","smui-top-app-bar--static":f[4]==="static","smui-top-app-bar--color-secondary":f[5]==="secondary","mdc-top-app-bar--prominent":f[6],"mdc-top-app-bar--dense":f[7]},f[11]))))&&{class:n},(!r||h[0]&4104&&i!==(i=Object.entries(f[12]).map(Zm).concat([f[3]]).join(" ")))&&{style:i},h[0]&32768&&f[15]])),s&&Ue(s.update)&&h[0]&2&&s.update.call(null,f[1])},i(f){r||(L(c,f),r=!0)},o(f){N(c,f),r=!1},d(f){f&&X(e),c&&c.d(f),t[25](null),a=!1,Xe(o)}}}const Zm=([t,e])=>`${t}: ${e};`;function aT(t,e,n){const i=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let l=()=>{};function c(x){return x===l}let{use:u=[]}=e,{class:d=""}=e,{style:f=""}=e,{variant:h="standard"}=e,{color:m="primary"}=e,{collapsed:g=l}=e;const p=!c(g)&&!!g;c(g)&&(g=!1);let{prominent:b=!1}=e,{dense:E=!1}=e,{scrollTarget:S=void 0}=e,O,k,R={},y={},T,M=Pg({variant:h,prominent:b,dense:E},x=>{n(18,T=x)}),I,v=h;Bt(()=>(n(9,k=j()),k.init(),()=>{k.destroy()}));function j(){const x={static:Lu,short:rT,fixed:sT}[h]||Jm;return new x({hasClass:A,addClass:V,removeClass:F,setStyle:K,getTopAppBarHeight:()=>O.clientHeight,notifyNavigationIconClicked:()=>$e(O,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>O.querySelectorAll(".mdc-top-app-bar__action-item").length})}function A(x){return x in R?R[x]:Ee().classList.contains(x)}function V(x){R[x]||n(11,R[x]=!0,R)}function F(x){(!(x in R)||R[x])&&n(11,R[x]=!1,R)}function K(x,H){y[x]!=H&&(H===""||H==null?(delete y[x],n(12,y),n(20,v),n(4,h),n(9,k)):n(12,y[x]=H,y))}function G(){k&&(k.handleTargetScroll(),h==="short"&&n(0,g="isCollapsed"in k&&k.isCollapsed))}function Q(){return M}function Ee(){return O}const re=()=>h!=="short"&&h!=="fixed"&&k&&k.handleWindowResize(),Fe=()=>S==null&&G();function ge(x){ie[x?"unshift":"push"](()=>{O=x,n(10,O)})}const st=()=>k&&k.handleNavigationClick();return t.$$set=x=>{e=D(D({},e),ke(x)),n(15,s=J(e,i)),"use"in x&&n(1,u=x.use),"class"in x&&n(2,d=x.class),"style"in x&&n(3,f=x.style),"variant"in x&&n(4,h=x.variant),"color"in x&&n(5,m=x.color),"collapsed"in x&&n(0,g=x.collapsed),"prominent"in x&&n(6,b=x.prominent),"dense"in x&&n(7,E=x.dense),"scrollTarget"in x&&n(8,S=x.scrollTarget),"$$scope"in x&&n(21,a=x.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&262352&&T&&T({variant:h,prominent:b,dense:E}),t.$$.dirty[0]&1049104&&v!==h&&k&&(n(20,v=h),k.destroy(),n(11,R={}),n(12,y={}),n(9,k=j()),k.init()),t.$$.dirty[0]&528&&k&&h==="short"&&"setAlwaysCollapsed"in k&&k.setAlwaysCollapsed(p),t.$$.dirty[0]&524544&&I!==S&&(I&&I.removeEventListener("scroll",G),S&&S.addEventListener("scroll",G),n(19,I=S))},[g,u,d,f,h,m,b,E,S,k,O,R,y,o,G,s,Q,Ee,T,I,v,a,r,re,Fe,ge,st]}class cO extends De{constructor(e){super();Re(this,e,aT,oT,Oe,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var dO=It({class:"mdc-top-app-bar__row",component:_n});function lT(t){let e,n,i,s,r,a;const o=t[9].default,l=de(o,t,t[8],null);let c=[{class:n=ee({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":t[2]==="start","mdc-top-app-bar__section--align-end":t[2]==="end"})},t[3]?{role:"toolbar"}:{},t[6]],u={};for(let d=0;d<c.length;d+=1)u=D(u,c[d]);return{c(){e=ye("section"),l&&l.c(),Z(e,u)},m(d,f){Y(d,e,f),l&&l.m(e,null),t[10](e),s=!0,r||(a=[$(i=Ze.call(null,e,t[0])),$(t[5].call(null,e))],r=!0)},p(d,[f]){l&&l.p&&(!s||f&256)&&he(l,o,d,d[8],s?fe(o,d[8],f,null):me(d[8]),null),Z(e,u=ae(c,[(!s||f&6&&n!==(n=ee({[d[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":d[2]==="start","mdc-top-app-bar__section--align-end":d[2]==="end"})))&&{class:n},f&8&&(d[3]?{role:"toolbar"}:{}),f&64&&d[6]])),i&&Ue(i.update)&&f&1&&i.update.call(null,d[0])},i(d){s||(L(l,d),s=!0)},o(d){N(l,d),s=!1},d(d){d&&X(e),l&&l.d(d),t[10](null),r=!1,Xe(a)}}}function uT(t,e,n){const i=["use","class","align","toolbar","getElement"];let s=J(e,i),{$$slots:r={},$$scope:a}=e;const o=qe(Se());let{use:l=[]}=e,{class:c=""}=e,{align:u="start"}=e,{toolbar:d=!1}=e,f;et("SMUI:icon-button:context",d?"top-app-bar:action":"top-app-bar:navigation"),et("SMUI:button:context",d?"top-app-bar:action":"top-app-bar:navigation");function h(){return f}function m(g){ie[g?"unshift":"push"](()=>{f=g,n(4,f)})}return t.$$set=g=>{e=D(D({},e),ke(g)),n(6,s=J(e,i)),"use"in g&&n(0,l=g.use),"class"in g&&n(1,c=g.class),"align"in g&&n(2,u=g.align),"toolbar"in g&&n(3,d=g.toolbar),"$$scope"in g&&n(8,a=g.$$scope)},[l,c,u,d,f,o,s,h,a,r,m]}class cT extends De{constructor(e){super();Re(this,e,uT,lT,Oe,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var fO=It({class:"mdc-top-app-bar__title",component:Qn});const hO=cT;function xm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dT=xm,$m=new mi("auth","Firebase",xm());/**
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
 */const ep=new Wa("@firebase/auth");function Ho(t,...e){ep.logLevel<=ot.ERROR&&ep.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw ku(t,...e)}function wn(t,...e){return ku(t,...e)}function tp(t,e,n){const i=Object.assign(Object.assign({},dT()),{[e]:n});return new mi("auth","Firebase",i).create(e,{appName:t.name})}function fT(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Cn(t,"argument-error"),tp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ku(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return $m.create(t,...e)}function Le(t,e,...n){if(!t)throw ku(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function Hn(t,e){t||Bn(e)}/**
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
 */const np=new Map;function jn(t){Hn(t instanceof Function,"Expected a class definition");let e=np.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,np.set(t,e),e)}/**
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
 */function hT(t,e){const n=Xi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Rr(r,e!=null?e:{}))return s;Cn(s,"already-initialized")}return n.initialize({options:e})}function mT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ru(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return ip()==="http:"||ip()==="https:"}function ip(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pT()||Hc()||"connection"in navigator)?navigator.onLine:!0}function _T(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bc()||jc()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Du(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const IT=new ur(3e4,6e4);function vT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jo(t,e,n,i,s={}){return rp(t,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=Ss(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(op(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yT),e);try{const s=new ET(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Mu(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Mu(t,"email-already-in-use",a);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tp(t,u,c);Cn(t,u)}}catch(s){if(s instanceof hi)throw s;Cn(t,"network-request-failed")}}async function bT(t,e,n,i,s={}){const r=await jo(t,e,n,i,s);return"mfaPendingCredential"in r&&Cn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function op(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Du(t.config,s):`${t.config.apiScheme}://${s}`}class ET{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(wn(this.auth,"timeout")),IT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mu(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=wn(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function AT(t,e){return jo(t,"POST","/v1/accounts:delete",e)}async function TT(t,e){return jo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ST(t,e=!1){const n=rn(t),i=await n.getIdToken(e),s=Pu(i);Le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:cr(Nu(s.auth_time)),issuedAtTime:cr(Nu(s.iat)),expirationTime:cr(Nu(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Nu(t){return Number(t)*1e3}function Pu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oy(n);return s?JSON.parse(s):(Ho("Failed to decode base64 JWT payload"),null)}catch(s){return Ho("Caught error parsing JWT payload as JSON",s),null}}function CT(t){const e=Pu(t);return Le(e,"internal-error"),Le(typeof e.exp!="undefined","internal-error"),Le(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof hi&&wT(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function wT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qo(t){var e;const n=t.auth,i=await t.getIdToken(),s=await dr(t,TT(n,{idToken:i}));Le(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?RT(r.providerUserInfo):[],o=kT(t.providerData,a),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o==null?void 0:o.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ap(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function LT(t){const e=rn(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kT(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function RT(t){return t.map(e=>{var{providerId:n}=e,i=ja(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function DT(t,e){const n=await rp(t,{},async()=>{const i=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,a=op(t,s,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Le(e.idToken,"internal-error"),Le(typeof e.idToken!="undefined","internal-error"),Le(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):CT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await DT(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new fr;return i&&(Le(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(Le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(Le(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
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
 */function si(t,e){Le(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ni{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new OT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new ap(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return Le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ST(this,e)}reload(){return LT(this)}_assign(e){this!==e&&(Le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,AT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,a,o,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(o=n.tenantId)!==null&&o!==void 0?o:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:O,isAnonymous:k,providerData:R,stsTokenManager:y}=n;Le(S&&y,e,"internal-error");const T=fr.fromJSON(this.name,y);Le(typeof S=="string",e,"internal-error"),si(d,e.name),si(f,e.name),Le(typeof O=="boolean",e,"internal-error"),Le(typeof k=="boolean",e,"internal-error"),si(h,e.name),si(m,e.name),si(g,e.name),si(p,e.name),si(b,e.name),si(E,e.name);const M=new Ni({uid:S,auth:e,email:f,emailVerified:O,displayName:d,isAnonymous:k,photoURL:m,phoneNumber:h,tenantId:g,stsTokenManager:T,createdAt:b,lastLoginAt:E});return R&&Array.isArray(R)&&(M.providerData=R.map(I=>Object.assign({},I))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,n,i=!1){const s=new fr;s.updateFromServerResponse(n);const r=new Ni({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await qo(r),r}}/**
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
 */class lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lp.type="NONE";const up=lp;/**
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
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,r),this.fullPersistenceKey=zo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gs(jn(up),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||jn(up);const a=zo(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const d=Ni._fromJSON(e,u);c!==r&&(o=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gs(r,e,i):(r=l[0],o&&await r._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new gs(r,e,i))}}/**
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
 */function cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pp(e))return"Blackberry";if(gp(e))return"Webos";if(Fu(e))return"Safari";if((e.includes("chrome/")||fp(e))&&!e.includes("edge/"))return"Chrome";if(mp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function dp(t=Pt()){return/firefox\//i.test(t)}function Fu(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fp(t=Pt()){return/crios\//i.test(t)}function hp(t=Pt()){return/iemobile/i.test(t)}function mp(t=Pt()){return/android/i.test(t)}function pp(t=Pt()){return/blackberry/i.test(t)}function gp(t=Pt()){return/webos/i.test(t)}function Go(t=Pt()){return/iphone|ipad|ipod/i.test(t)}function MT(t=Pt()){var e;return Go(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function NT(){return qc()&&document.documentMode===10}function _p(t=Pt()){return Go(t)||mp(t)||gp(t)||pp(t)||/windows phone/i.test(t)||hp(t)}function PT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function yp(t,e=[]){let n;switch(t){case"Browser":n=cp(Pt());break;case"Worker":n=`${cp(Pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${i}`}/**
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
 */class FT{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===r)&&(a==null?void 0:a.user)&&(i=a.user)}return i?i._redirectEventId?(Le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rn(e):null;return n&&Le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;Le(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Le(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Uu(t){return rn(t)}class Ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=By(n=>this.observer=n)}get next(){return Le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
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
 */async function _s(t,e){return bT(t,"POST","/v1/accounts:signInWithIdp",vT(t,e))}/**
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
 */const UT="http://localhost";class Pi extends vp{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ja(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Pi(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,_s(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:UT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
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
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hr extends Vu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends hr{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class oi extends hr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return oi.credential(n,i)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
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
 */class ai extends hr{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
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
 */class li extends hr{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return li.credential(n,i)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ni._fromIdTokenResponse(e,i,s),a=bp(i);return new ys({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=bp(i);return new ys({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function bp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ko extends hi{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ko(e,n,i,s)}}function Ep(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,r,e,i):r})}async function VT(t,e,n=!1){const i=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",i)}/**
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
 */async function BT(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await dr(t,Ep(i,s,e,t),n);Le(r.idToken,i,"internal-error");const a=Pu(r.idToken);Le(a,i,"internal-error");const{sub:o}=a;return Le(t.uid===o,i,"user-mismatch"),ys._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Cn(i,"user-mismatch"),r}}/**
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
 */async function HT(t,e,n=!1){const i="signIn",s=await Ep(t,i,e),r=await ys._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function mO(t,e,n,i){return rn(t).onAuthStateChanged(e,n,i)}function pO(t){return rn(t).signOut()}const Wo="__sak";/**
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
 */class Ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jT(){const t=Pt();return Fu(t)||Go(t)}const qT=1e3,zT=10;class Tp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jT()&&PT(),this.fallbackToPolling=_p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);NT()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zT):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tp.type="LOCAL";const GT=Tp;/**
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
 */class Sp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sp.type="SESSION";const Cp=Sp;/**
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
 */function KT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Xo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a==null?void 0:a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async c=>c(n.origin,r)),l=await KT(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function Bu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,l)=>{const c=Bu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function On(){return window}function XT(t){On().location.href=t}/**
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
 */function wp(){return typeof On().WorkerGlobalScope!="undefined"&&typeof On().importScripts=="function"}async function YT(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QT(){return wp()?self:null}/**
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
 */const Op="firebaseLocalStorageDb",ZT=1,Yo="firebaseLocalStorage",Lp="fbase_key";class mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function xT(){const t=indexedDB.deleteDatabase(Op);return new mr(t).toPromise()}function Hu(){const t=indexedDB.open(Op,ZT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Yo,{keyPath:Lp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Yo)?e(i):(i.close(),await xT(),e(await Hu()))})})}async function kp(t,e,n){const i=Jo(t,!0).put({[Lp]:e,value:n});return new mr(i).toPromise()}async function $T(t,e){const n=Jo(t,!1).get(e),i=await new mr(n).toPromise();return i===void 0?null:i.value}function Rp(t,e){const n=Jo(t,!0).delete(e);return new mr(n).toPromise()}const eS=800,tS=3;class Dp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>tS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await kp(e,Wo,"1"),await Rp(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>kp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>$T(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Jo(s,!1).getAll();return new mr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dp.type="LOCAL";const nS=Dp;/**
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
 */function iS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=wn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",iS().appendChild(i)})}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ur(3e4,6e4);/**
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
 */function Mp(t,e){return e?jn(e):(Le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ju extends vp{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oS(t){return HT(t.auth,new ju(t),t.bypassAuthState)}function aS(t){const{auth:e,user:n}=t;return Le(n,e,"internal-error"),BT(n,new ju(t),t.bypassAuthState)}async function lS(t){const{auth:e,user:n}=t;return Le(n,e,"internal-error"),VT(n,new ju(t),t.bypassAuthState)}/**
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
 */class Np{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return aS;default:Cn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uS=new ur(2e3,1e4);async function gO(t,e,n){const i=Uu(t);fT(t,e,Vu);const s=Mp(i,n);return new Fi(i,"signInViaPopup",e,s).executeNotNull()}class Fi extends Np{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Le(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uS.get())};e()}}Fi.currentPopupAction=null;/**
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
 */const cS="pendingRedirect",qu=new Map;class dS extends Np{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const i=await fS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fS(t,e){const n=mS(e),i=hS(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function hS(t){return jn(t._redirectPersistence)}function mS(t){return zo(cS,t.config.apiKey,t.name)}async function pS(t,e,n=!1){const i=Uu(t),s=Mp(i,e),a=await new dS(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const gS=10*60*1e3;class _S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Fp(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(t);default:return!1}}/**
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
 */async function IS(t,e={}){return jo(t,"GET","/v1/projects",e)}/**
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
 */const vS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bS=/^https?/;async function ES(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IS(t);for(const n of e)try{if(AS(n))return}catch{}Cn(t,"unauthorized-domain")}function AS(t){const e=Ru(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!bS.test(n))return!1;if(vS.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const TS=new ur(3e4,6e4);function Up(){const t=On().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var i,s,r;function a(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(wn(t,"network-request-failed"))},timeout:TS.get()})}if((s=(i=On().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=On().gapi)===null||r===void 0?void 0:r.load)a();else{const o=rS("iframefcb");return On()[o]=()=>{gapi.load?a():n(wn(t,"network-request-failed"))},sS(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function CS(t){return Qo=Qo||SS(t),Qo}/**
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
 */const wS=new ur(5e3,15e3),OS="__/auth/iframe",LS="emulator/auth/iframe",kS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DS(t){const e=t.config;Le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Du(e,LS):`https://${t.config.authDomain}/${OS}`,i={apiKey:e.apiKey,appName:t.name,v:Cs},s=RS.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ss(i).slice(1)}`}async function MS(t){const e=await CS(t),n=On().gapi;return Le(n,t,"internal-error"),e.open({where:document.body,url:DS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=wn(t,"network-request-failed"),o=On().setTimeout(()=>{r(a)},wS.get());function l(){On().clearTimeout(o),s(i)}i.ping(l).then(l,()=>{r(a)})}))}/**
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
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PS=500,FS=600,US="_blank",VS="http://localhost";class Vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BS(t,e,n,i=PS,s=FS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},NS),{width:i.toString(),height:s.toString(),top:r,left:a}),c=Pt().toLowerCase();n&&(o=fp(c)?US:n),dp(c)&&(e=e||VS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(MT(c)&&o!=="_self")return HS(e||"",o),new Vp(null);const d=window.open(e||"",o,u);Le(d,t,"popup-blocked");try{d.focus()}catch{}return new Vp(d)}function HS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const jS="__/auth/handler",qS="emulator/auth/handler";function Bp(t,e,n,i,s,r){Le(t.config.authDomain,t,"auth-domain-config-required"),Le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Cs,eventId:s};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Vy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))a[l]=c}if(e instanceof hr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];return`${zS(t)}?${Ss(o).slice(1)}`}function zS({config:t}){return t.emulator?Du(t,qS):`https://${t.authDomain}/${jS}`}/**
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
 */const zu="webStorageSupport";class GS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=pS}async _openPopup(e,n,i,s){var r;Hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=Bp(e,n,i,Ru(),s);return BS(e,a,Bu())}async _openRedirect(e,n,i,s){return await this._originValidation(e),XT(Bp(e,n,i,Ru(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await MS(e),i=new _S(e);return n.register("authEvent",s=>(Le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zu,{type:zu},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[zu];a!==void 0&&n(!!a),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ES(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _p()||Fu()||Go()}}const KS=GS;var Hp="@firebase/auth",jp="0.19.4";/**
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
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YS(t){Mn(new An("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(a=>{Le(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Le(!(r==null?void 0:r.includes(":")),"argument-error",{appName:a.name});const o={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yp(t)},l=new FT(a,o);return mT(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Mn(new An("auth-internal",e=>{const n=Uu(e.getProvider("auth").getImmediate());return(i=>new WS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Hp,jp,XS(t)),hn(Hp,jp,"esm2017")}/**
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
 */function _O(t=Qa()){const e=Xi(t,"auth");return e.isInitialized()?e.getImmediate():hT(t,{popupRedirectResolver:KS,persistence:[nS,GT,Cp]})}YS("Browser");var JS="firebase",QS="9.6.1";/**
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
 */hn(JS,QS,"app");function ZS(t){return Array.prototype.slice.call(t)}function qp(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Zo(t,e,n){var i,s=new Promise(function(r,a){i=t[e].apply(t,n),qp(i).then(r,a)});return s.request=i,s}function xS(t,e,n){var i=Zo(t,e,n);return i.then(function(s){if(!!s)return new pr(s,i.request)})}function Is(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function Gu(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Zo(this[e],s,arguments)})})}function xo(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function zp(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return xS(this[e],s,arguments)})})}function Ui(t){this._index=t}Is(Ui,"_index",["name","keyPath","multiEntry","unique"]);Gu(Ui,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);zp(Ui,"_index",IDBIndex,["openCursor","openKeyCursor"]);function pr(t,e){this._cursor=t,this._request=e}Is(pr,"_cursor",["direction","key","primaryKey","value"]);Gu(pr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(pr.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),qp(e._request).then(function(i){if(!!i)return new pr(i,e._request)})})})});function Ln(t){this._store=t}Ln.prototype.createIndex=function(){return new Ui(this._store.createIndex.apply(this._store,arguments))};Ln.prototype.index=function(){return new Ui(this._store.index.apply(this._store,arguments))};Is(Ln,"_store",["name","keyPath","indexNames","autoIncrement"]);Gu(Ln,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);zp(Ln,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);xo(Ln,"_store",IDBObjectStore,["deleteIndex"]);function gr(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}gr.prototype.objectStore=function(){return new Ln(this._tx.objectStore.apply(this._tx,arguments))};Is(gr,"_tx",["objectStoreNames","mode"]);xo(gr,"_tx",IDBTransaction,["abort"]);function $o(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new gr(n)}$o.prototype.createObjectStore=function(){return new Ln(this._db.createObjectStore.apply(this._db,arguments))};Is($o,"_db",["name","version","objectStoreNames"]);xo($o,"_db",IDBDatabase,["deleteObjectStore","close"]);function ea(t){this._db=t}ea.prototype.transaction=function(){return new gr(this._db.transaction.apply(this._db,arguments))};Is(ea,"_db",["name","version","objectStoreNames"]);xo(ea,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Ln,Ui].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=ZS(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Ui,Ln].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(a){if(!a){r(s);return}if(s.push(a.value),n!==void 0&&s.length==n){r(s);return}a.continue()})})})});function Ku(t,e,n){var i=Zo(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new $o(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new ea(r)})}function Wu(t){return Zo(indexedDB,"deleteDatabase",[t])}const Gp="@firebase/installations",Xu="0.5.4";/**
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
 */const Kp=1e4,Wp=`w:${Xu}`,Xp="FIS_v2",$S="https://firebaseinstallations.googleapis.com/v1",eC=60*60*1e3,tC="installations",nC="Installations";/**
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
 */const iC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Vi=new mi(tC,nC,iC);function Yp(t){return t instanceof hi&&t.code.includes("request-failed")}/**
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
 */function Jp({projectId:t}){return`${$S}/projects/${t}/installations`}function Qp(t){return{token:t.token,requestStatus:2,expiresIn:rC(t.expiresIn),creationTime:Date.now()}}async function Zp(t,e){const i=(await e.json()).error;return Vi.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function xp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function sC(t,{refreshToken:e}){const n=xp(t);return n.append("Authorization",oC(e)),n}async function $p(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rC(t){return Number(t.replace("s","000"))}function oC(t){return`${Xp} ${t}`}/**
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
 */async function aC(t,{fid:e}){const n=Jp(t),i=xp(t),s={fid:e,authVersion:Xp,appId:t.appId,sdkVersion:Wp},r={method:"POST",headers:i,body:JSON.stringify(s)},a=await $p(()=>fetch(n,r));if(a.ok){const o=await a.json();return{fid:o.fid||e,registrationStatus:2,refreshToken:o.refreshToken,authToken:Qp(o.authToken)}}else throw await Zp("Create Installation",a)}/**
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
 */function eg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function lC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uC=/^[cdef][\w-]{21}$/,Yu="";function cC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dC(t);return uC.test(n)?n:Yu}catch{return Yu}}function dC(t){return lC(t).substr(0,22)}/**
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
 */function ta(t){return`${t.appName}!${t.appId}`}/**
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
 */const tg=new Map;function ng(t,e){const n=ta(t);ig(n,e),fC(n,e)}function ig(t,e){const n=tg.get(t);if(!!n)for(const i of n)i(e)}function fC(t,e){const n=hC();n&&n.postMessage({key:t,fid:e}),mC()}let Bi=null;function hC(){return!Bi&&"BroadcastChannel"in self&&(Bi=new BroadcastChannel("[Firebase] FID Change"),Bi.onmessage=t=>{ig(t.data.key,t.data.fid)}),Bi}function mC(){tg.size===0&&Bi&&(Bi.close(),Bi=null)}/**
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
 */const pC="firebase-installations-database",gC=1,Hi="firebase-installations-store";let Ju=null;function Qu(){return Ju||(Ju=Ku(pC,gC,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Hi)}})),Ju}async function na(t,e){const n=ta(t),s=(await Qu()).transaction(Hi,"readwrite"),r=s.objectStore(Hi),a=await r.get(n);return await r.put(e,n),await s.complete,(!a||a.fid!==e.fid)&&ng(t,e.fid),e}async function sg(t){const e=ta(t),i=(await Qu()).transaction(Hi,"readwrite");await i.objectStore(Hi).delete(e),await i.complete}async function ia(t,e){const n=ta(t),s=(await Qu()).transaction(Hi,"readwrite"),r=s.objectStore(Hi),a=await r.get(n),o=e(a);return o===void 0?await r.delete(n):await r.put(o,n),await s.complete,o&&(!a||a.fid!==o.fid)&&ng(t,o.fid),o}/**
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
 */async function Zu(t){let e;const n=await ia(t,i=>{const s=_C(i),r=yC(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Yu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _C(t){const e=t||{fid:cC(),registrationStatus:0};return og(e)}function yC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Vi.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IC(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vC(t)}:{installationEntry:e}}async function IC(t,e){try{const n=await aC(t,e);return na(t,n)}catch(n){throw Yp(n)&&n.customData.serverCode===409?await sg(t):await na(t,{fid:e.fid,registrationStatus:0}),n}}async function vC(t){let e=await rg(t);for(;e.registrationStatus===1;)await eg(100),e=await rg(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Zu(t);return i||n}return e}function rg(t){return ia(t,e=>{if(!e)throw Vi.create("installation-not-found");return og(e)})}function og(t){return bC(t)?{fid:t.fid,registrationStatus:0}:t}function bC(t){return t.registrationStatus===1&&t.registrationTime+Kp<Date.now()}/**
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
 */async function EC({appConfig:t,platformLoggerProvider:e},n){const i=AC(t,n),s=sC(t,n),r=e.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const a={installation:{sdkVersion:Wp}},o={method:"POST",headers:s,body:JSON.stringify(a)},l=await $p(()=>fetch(i,o));if(l.ok){const c=await l.json();return Qp(c)}else throw await Zp("Generate Auth Token",l)}function AC(t,{fid:e}){return`${Jp(t)}/${e}/authTokens:generate`}/**
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
 */async function xu(t,e=!1){let n;const i=await ia(t.appConfig,r=>{if(!lg(r))throw Vi.create("not-registered");const a=r.authToken;if(!e&&CC(a))return r;if(a.requestStatus===1)return n=TC(t,e),r;{if(!navigator.onLine)throw Vi.create("app-offline");const o=OC(r);return n=SC(t,o),o}});return n?await n:i.authToken}async function TC(t,e){let n=await ag(t.appConfig);for(;n.authToken.requestStatus===1;)await eg(100),n=await ag(t.appConfig);const i=n.authToken;return i.requestStatus===0?xu(t,e):i}function ag(t){return ia(t,e=>{if(!lg(e))throw Vi.create("not-registered");const n=e.authToken;return LC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SC(t,e){try{const n=await EC(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await na(t.appConfig,i),n}catch(n){if(Yp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sg(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await na(t.appConfig,i)}throw n}}function lg(t){return t!==void 0&&t.registrationStatus===2}function CC(t){return t.requestStatus===2&&!wC(t)}function wC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+eC}function OC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function LC(t){return t.requestStatus===1&&t.requestTime+Kp<Date.now()}/**
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
 */async function kC(t){const e=t,{installationEntry:n,registrationPromise:i}=await Zu(e.appConfig);return i?i.catch(console.error):xu(e).catch(console.error),n.fid}/**
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
 */async function RC(t,e=!1){const n=t;return await DC(n.appConfig),(await xu(n,e)).token}async function DC(t){const{registrationPromise:e}=await Zu(t);e&&await e}/**
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
 */function MC(t){if(!t||!t.options)throw $u("App Configuration");if(!t.name)throw $u("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $u(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $u(t){return Vi.create("missing-app-config-values",{valueName:t})}/**
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
 */const ug="installations",NC="installations-internal",PC=t=>{const e=t.getProvider("app").getImmediate(),n=MC(e),i=Xi(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},FC=t=>{const e=t.getProvider("app").getImmediate(),n=Xi(e,ug).getImmediate();return{getId:()=>kC(n),getToken:s=>RC(n,s)}};function UC(){Mn(new An(ug,PC,"PUBLIC")),Mn(new An(NC,FC,"PRIVATE"))}UC();hn(Gp,Xu);hn(Gp,Xu,"esm2017");/**
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
 */const VC="/firebase-messaging-sw.js",BC="/firebase-cloud-messaging-push-scope",cg="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",HC="https://fcmregistrations.googleapis.com/v1",dg="google.c.a.c_id",jC="google.c.a.c_l",qC="google.c.a.ts",zC="google.c.a.e";var fg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fg||(fg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var _r;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(_r||(_r={}));/**
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
 */function qn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function GC(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),s=new Uint8Array(i.length);for(let r=0;r<i.length;++r)s[r]=i.charCodeAt(r);return s}/**
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
 */const ec="fcm_token_details_db",KC=5,hg="fcm_token_object_Store";async function WC(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(ec))return null;let e=null;return(await Ku(ec,KC,async i=>{var s;if(i.oldVersion<2||!i.objectStoreNames.contains(hg))return;const r=i.transaction.objectStore(hg),a=await r.index("fcmSenderId").get(t);if(await r.clear(),!!a){if(i.oldVersion===2){const o=a;if(!o.auth||!o.p256dh||!o.endpoint)return;e={token:o.fcmToken,createTime:(s=o.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:typeof o.vapidKey=="string"?o.vapidKey:qn(o.vapidKey)}}}else if(i.oldVersion===3){const o=a;e={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:qn(o.auth),p256dh:qn(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:qn(o.vapidKey)}}}else if(i.oldVersion===4){const o=a;e={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:qn(o.auth),p256dh:qn(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:qn(o.vapidKey)}}}}})).close(),await Wu(ec),await Wu("fcm_vapid_details_db"),await Wu("undefined"),XC(e)?e:null}function XC(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const YC="firebase-messaging-database",JC=1,ji="firebase-messaging-store";let tc=null;function nc(){return tc||(tc=Ku(YC,JC,t=>{switch(t.oldVersion){case 0:t.createObjectStore(ji)}})),tc}async function mg(t){const e=sc(t),i=await(await nc()).transaction(ji).objectStore(ji).get(e);if(i)return i;{const s=await WC(t.appConfig.senderId);if(s)return await ic(t,s),s}}async function ic(t,e){const n=sc(t),s=(await nc()).transaction(ji,"readwrite");return await s.objectStore(ji).put(e,n),await s.complete,e}async function QC(t){const e=sc(t),i=(await nc()).transaction(ji,"readwrite");await i.objectStore(ji).delete(e),await i.complete}function sc({appConfig:t}){return t.appId}/**
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
 */const ZC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Jt=new mi("messaging","Messaging",ZC);/**
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
 */async function xC(t,e){const n=await oc(t),i=gg(e),s={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(rc(t.appConfig),s)).json()}catch(a){throw Jt.create("token-subscribe-failed",{errorInfo:a})}if(r.error){const a=r.error.message;throw Jt.create("token-subscribe-failed",{errorInfo:a})}if(!r.token)throw Jt.create("token-subscribe-no-token");return r.token}async function $C(t,e){const n=await oc(t),i=gg(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(`${rc(t.appConfig)}/${e.token}`,s)).json()}catch(a){throw Jt.create("token-update-failed",{errorInfo:a})}if(r.error){const a=r.error.message;throw Jt.create("token-update-failed",{errorInfo:a})}if(!r.token)throw Jt.create("token-update-no-token");return r.token}async function pg(t,e){const n=await oc(t),i={method:"DELETE",headers:n};try{const r=await(await fetch(`${rc(t.appConfig)}/${e}`,i)).json();if(r.error){const a=r.error.message;throw Jt.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Jt.create("token-unsubscribe-failed",{errorInfo:s})}}function rc({projectId:t}){return`${HC}/projects/${t}/registrations`}async function oc({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gg({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const s={web:{endpoint:n,auth:e,p256dh:t}};return i!==cg&&(s.web.applicationPubKey=i),s}/**
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
 */const ew=7*24*60*60*1e3;async function tw(t){const e=await sw(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:qn(e.getKey("auth")),p256dh:qn(e.getKey("p256dh"))},i=await mg(t.firebaseDependencies);if(i){if(rw(i.subscriptionOptions,n))return Date.now()>=i.createTime+ew?iw(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await pg(t.firebaseDependencies,i.token)}catch(s){console.warn(s)}return _g(t.firebaseDependencies,n)}else return _g(t.firebaseDependencies,n)}async function nw(t){const e=await mg(t.firebaseDependencies);e&&(await pg(t.firebaseDependencies,e.token),await QC(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function iw(t,e){try{const n=await $C(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await ic(t.firebaseDependencies,i),n}catch(n){throw await nw(t),n}}async function _g(t,e){const i={token:await xC(t,e),createTime:Date.now(),subscriptionOptions:e};return await ic(t,i),i.token}async function sw(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:GC(e)})}function rw(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,s=e.auth===t.auth,r=e.p256dh===t.p256dh;return n&&i&&s&&r}/**
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
 */function yg(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcm_message_id};return ow(e,t),aw(e,t),lw(e,t),e}function ow(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const s=e.notification.image;s&&(t.notification.image=s)}function aw(t,e){!e.data||(t.data=e.data)}function lw(t,e){if(!e.fcmOptions)return;t.fcmOptions={};const n=e.fcmOptions.link;n&&(t.fcmOptions.link=n);const i=e.fcmOptions.analytics_label;i&&(t.fcmOptions.analyticsLabel=i)}/**
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
 */function uw(t){return typeof t=="object"&&!!t&&dg in t}/**
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
 */Ig("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ig("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ig(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}/**
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
 */function cw(t){if(!t||!t.options)throw ac("App Configuration Object");if(!t.name)throw ac("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw ac(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ac(t){return Jt.create("missing-app-config-values",{valueName:t})}/**
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
 */class dw{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=cw(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function fw(t){try{t.swRegistration=await navigator.serviceWorker.register(VC,{scope:BC}),t.swRegistration.update().catch(()=>{})}catch(e){throw Jt.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}/**
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
 */async function hw(t,e){if(!e&&!t.swRegistration&&await fw(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Jt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function mw(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=cg)}/**
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
 */async function vg(t,e){if(!navigator)throw Jt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Jt.create("permission-blocked");return await mw(t,e==null?void 0:e.vapidKey),await hw(t,e==null?void 0:e.serviceWorkerRegistration),tw(t)}/**
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
 */async function pw(t,e,n){const i=gw(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[dg],message_name:n[jC],message_time:n[qC],message_device_time:Math.floor(Date.now()/1e3)})}function gw(t){switch(t){case _r.NOTIFICATION_CLICKED:return"notification_open";case _r.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function _w(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===_r.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(yg(n)):t.onMessageHandler.next(yg(n)));const i=n.data;uw(i)&&i[zC]==="1"&&await pw(t,n.messageType,i)}const bg="@firebase/messaging",Eg="0.9.4";/**
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
 */const yw=t=>{const e=new dw(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>_w(e,n)),e},Iw=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>vg(e,i)}};function vw(){Mn(new An("messaging",yw,"PUBLIC")),Mn(new An("messaging-internal",Iw,"PRIVATE")),hn(bg,Eg),hn(bg,Eg,"esm2017")}/**
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
 */async function bw(){return typeof window!="undefined"&&Dy()&&await My()&&Ny()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ew(t,e){if(!navigator)throw Jt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function yO(t=Qa()){return bw().then(e=>{if(!e)throw Jt.create("unsupported-browser")},e=>{throw Jt.create("indexed-db-unsupported")}),Xi(rn(t),"messaging").getImmediate()}async function IO(t,e){return t=rn(t),vg(t,e)}function vO(t,e){return t=rn(t),Ew(t,e)}vw();export{xw as $,Tw as A,pn as B,Hw as C,$w as D,ie as E,En as F,bn as G,lO as H,eO as I,tO as J,nO as K,iO as L,Zw as M,kn as N,sO as O,Bw as P,rO as Q,aO as R,De as S,jw as T,oO as U,Gw as V,Yw as W,Kw as X,Jw as Y,Qw as Z,Lw as _,Qe as a,Ow as a0,uO as a1,Ue as a2,qw as a3,Rw as a4,Nw as a5,Mw as a6,Pw as a7,Fw as a8,oy as a9,by as aa,Ey as ab,Vw as ac,cO as ad,dO as ae,hO as af,fO as ag,gO as ah,zw as ai,oi as aj,_O as ak,Ww as al,yO as am,mO as an,vO as ao,IO as ap,pO as aq,Uw as ar,Dw as as,rt as b,Y as c,Je as d,ye as e,Nt as f,X as g,ui as h,Re as i,Cw as j,Rt as k,Te as l,N as m,yc as n,Xw as o,Ge as p,Ve as q,Be as r,Oe as s,L as t,ww as u,kw as v,Ki as w,Sw as x,ft as y,ht as z};
