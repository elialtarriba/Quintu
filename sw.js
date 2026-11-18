const CACHE='bingo-v27-seguro';
// V27: al instalar solo se guardan los archivos imprescindibles (rápido con datos móviles).
// Vídeos, música e imágenes grandes se guardan solos la primera vez que se usan.
const CORE=["./","./index.html","./bingo.js","./bingo.css","./manifest.webmanifest","./apple-touch-icon.png","./icon-bombo-192.png","./icon-bombo.png","./arbol-navidad.png"];
const refreshed=new Set();
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(CORE.map(u=>c.add(u)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('bingo-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith((async()=>{try{const response=await fetch(e.request);if(response.ok){if(!e.request.headers.has('range')){const copy=response.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}else if(!refreshed.has(e.request.url)){refreshed.add(e.request.url);e.waitUntil(fetch(e.request.url).then(async full=>{if(full.status===200)(await caches.open(CACHE)).put(e.request.url,full)}).catch(()=>{}))}}return response}catch{
const cached=await caches.match(e.request.url);if(!cached)return e.request.mode==='navigate'?(await caches.match('./index.html')||Response.error()):Response.error();
const range=e.request.headers.get('range');if(!range)return cached;
const data=await cached.arrayBuffer(),m=/bytes=(\d*)-(\d*)/.exec(range);if(!m)return cached;
const start=m[1]?Number(m[1]):Math.max(0,data.byteLength-Number(m[2])),end=m[1]&&m[2]?Math.min(Number(m[2]),data.byteLength-1):data.byteLength-1;
if(start>end||start>=data.byteLength)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+data.byteLength}});
return new Response(data.slice(start,end+1),{status:206,headers:{'Content-Type':cached.headers.get('Content-Type')||'application/octet-stream','Content-Range':'bytes '+start+'-'+end+'/'+data.byteLength,'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
}})())});