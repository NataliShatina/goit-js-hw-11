import{a as f,S as p,i as n}from"./assets/vendor-BezXTN6Z.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="56296156-8452051e0cb934f68c3ddeebb",y="https://pixabay.com/api/";function g(o){return f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(o){const i=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${r}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${t}</p>
        <p><b>Views</b> ${s}</p>
        <p><b>Comments</b> ${u}</p>
        <p><b>Downloads</b> ${d}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",i),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const i=o.target["search-text"].value.trim();L(),v(),g(i).then(r=>{if(r.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.data.hits)}).catch(r=>{n.error({message:r.message,position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
