const CACHE='bingo-1794246645090';const ASSETS=["./apple-touch-icon.png","./arbol-navidad.png","./bingo.css","./bingo.js","./bola-nieve.MP4","./bombo-giro.mp4","./bombo.png","./duende-animado.png","./duende-baile.MP4","./duende-musica.wav","./duende-nadala.mp3","./globo.png","./guirnalda.png","./icon-bombo-192.png","./icon-bombo.png","./icon-duende.png","./index.html","./manifest.webmanifest","./navidad.mp3","./pruna.mp4"];const refreshed=new Set();
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('bingo-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith((async()=>{try{const response=await fetch(e.request);if(response.ok){if(!e.request.headers.has('range')){const copy=response.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}else if(!refreshed.has(e.request.url)){refreshed.add(e.request.url);e.waitUntil(fetch(e.request.url).then(async full=>{if(full.status===200)(await caches.open(CACHE)).put(e.request.url,full)}).catch(()=>{}))}}return response}catch{
const cached=await caches.match(e.request.url);if(!cached)return e.request.mode==='navigate'?(await caches.match('./index.html')||Response.error()):Response.error();
const range=e.request.headers.get('range');if(!range)return cached;
const data=await cached.arrayBuffer(),m=/bytes=(\d*)-(\d*)/.exec(range);if(!m)return cached;
const start=m[1]?Number(m[1]):Math.max(0,data.byteLength-Number(m[2])),end=m[1]&&m[2]?Math.min(Number(m[2]),data.byteLength-1):data.byteLength-1;
if(start>end||start>=data.byteLength)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+data.byteLength}});
return new Response(data.slice(start,end+1),{status:206,headers:{'Content-Type':cached.headers.get('Content-Type')||'application/octet-stream','Content-Range':'bytes '+start+'-'+end+'/'+data.byteLength,'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
}})())});