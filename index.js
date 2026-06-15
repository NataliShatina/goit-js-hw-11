import{a as d,S as p,i as n}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="56296156-8452051e0cb934f68c3ddeebb",g="https://pixabay.com/api/";function y(i){return d.get(g,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${t}</p>
        <p><b>Views</b> ${s}</p>
        <p><b>Comments</b> ${u}</p>
        <p><b>Downloads</b> ${f}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("visible")}function q(){l.classList.remove("visible")}const S=document.querySelector(".form");S.addEventListener("submit",i=>{i.preventDefault();const r=i.target["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),v(),y(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{n.error({message:o.message,position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
