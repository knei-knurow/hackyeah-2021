if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let o={};const t=e=>i(e,d),l={module:{uri:d},exports:o,require:t};s[d]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.4336b040.css",revision:null},{url:"assets/index.5182cb33.js",revision:null},{url:"assets/vendor.d9ded13b.js",revision:null},{url:"firebase-messaging-sw.js",revision:"9fdac9710955edd9a770e0bfacd94b35"},{url:"index.html",revision:"285e9101369d35978a143348a4b9355b"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"b0f6187ca5753eae19f43e05d8463f71"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
