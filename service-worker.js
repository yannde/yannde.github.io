"use strict";var precacheConfig=[["/index.html","8f5f7190a0b6f3670bfd0f35c5771c03"],["/static/css/main.625063e4.css","17391dfafa9965529577e35bd9476777"],["/static/js/main.7edb6bed.js","3533c359b4ca14f669eb061ae0a8ba39"],["/static/media/00.1523a596.svg","1523a596d515d2cceee4f0457481f4ff"],["/static/media/01.b8e35f35.svg","b8e35f350005fa7c93deac9061033515"],["/static/media/02.c041f1be.svg","c041f1be74bf44f4cd194b2f21db6199"],["/static/media/03.10f19164.svg","10f191645d17f6ca5912b044fd237a2b"],["/static/media/04.c9bcdd00.svg","c9bcdd0084c5be65242ec5d7a12a02b5"],["/static/media/05.8a355956.svg","8a3559569d7c9424903053a97da0b5cf"],["/static/media/06.8547ceae.svg","8547ceae0d543a17c0ca6f55ff13e606"],["/static/media/07.cd63945d.svg","cd63945d4dd703b4d0670126009a2a1d"],["/static/media/background.b83ffb5a.png","b83ffb5a6b74b5ef38c6ce2a640ee956"],["/static/media/bkg_0.eabd45ba.jpg","eabd45baeb85636f7b16647449da105b"],["/static/media/bkg_1.22c042b6.jpg","22c042b6a40db0e21823f1d82f959b31"],["/static/media/bkg_2.cca1b207.jpg","cca1b207af527e981e27898e51ceceec"],["/static/media/bkg_3.d5c78c4b.jpg","d5c78c4b9341756bd8ff674e87f2ebfb"],["/static/media/bkg_4.f77bc002.jpg","f77bc002ef67350651924ae07d786739"],["/static/media/bkg_5.edc193c1.jpg","edc193c12bdf6ece2f637b8f17b3acb9"],["/static/media/bkg_6.70587b03.jpg","70587b03288341adc8e1b5ef24492eaa"],["/static/media/bkg_7.5424d0ef.jpg","5424d0ef0a11c3aa2491ec71d07633b7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});