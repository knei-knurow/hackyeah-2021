if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const o=e=>i(e,d),t={module:{uri:d},exports:c,require:o};s[d]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.30dc74b2.css",revision:null},{url:"assets/index.ead27fbc.js",revision:null},{url:"assets/vendor.d9ded13b.js",revision:null},{url:"firebase-messaging-sw.js",revision:"9fdac9710955edd9a770e0bfacd94b35"},{url:"index.html",revision:"b8965ecc8ee60b85adafb886dac3bc58"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"43145ce2b5e76e9410f11deffc80f3b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
