!function(){"use strict";const e=["client/client.de635990.js","client/index.7fc46641.js","client/uikit.96a56050.js","client/client.fbce3bf7.js"].concat(["service-worker-index.html","CNAME","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","manifest.json","transparent-background.gif"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590387041267").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590387041267"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590387041267").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
