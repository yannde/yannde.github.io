"use strict";var precacheConfig=[["/index.html","cabcefc8e8d939ef26a140353cc77620"],["/static/css/main.2040640f.css","0eca7b47276e2088cf6d4de426ab6590"],["/static/js/main.9742ca9b.js","9d0aa0a5a8a88939632810656f1adc09"],["/static/media/00.bef3aabb.svg","bef3aabba1d2bf71eded84320d9d7df5"],["/static/media/01.dabcdaa2.svg","dabcdaa294004a1e59704d4837497446"],["/static/media/02.333fa0cb.svg","333fa0cb9582b80cdb755d2fc3f302d1"],["/static/media/03.038dbd32.svg","038dbd32d31ac61f875c7a8abf453e6c"],["/static/media/04.93ef09bc.svg","93ef09bc7c0695fa9171505df5edc68b"],["/static/media/05.fcfc134f.svg","fcfc134f176b4964023a2c9895a3323b"],["/static/media/06.8547ceae.svg","8547ceae0d543a17c0ca6f55ff13e606"],["/static/media/07.cd63945d.svg","cd63945d4dd703b4d0670126009a2a1d"],["/static/media/background.385d4702.jpg","385d47025295b8e173b73662c196575b"],["/static/media/bkg_0.68b0d442.jpg","68b0d442330cb59c7b8b4423773cc716"],["/static/media/bkg_1.4b998fd5.jpg","4b998fd5831daffa99f80e94e68127f8"],["/static/media/bkg_2.cca1b207.jpg","cca1b207af527e981e27898e51ceceec"],["/static/media/bkg_3.d5c78c4b.jpg","d5c78c4b9341756bd8ff674e87f2ebfb"],["/static/media/bkg_4.c495fec7.jpg","c495fec7c9a798683be27acea97f47ab"],["/static/media/bkg_5.ad16c84c.jpg","ad16c84c914d2913e222bb6872d77cb1"],["/static/media/bkg_6.70587b03.jpg","70587b03288341adc8e1b5ef24492eaa"],["/static/media/bkg_7.5424d0ef.jpg","5424d0ef0a11c3aa2491ec71d07633b7"],["/static/media/link.7064a987.svg","7064a987318e3c28a46a8cd150ee4719"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});