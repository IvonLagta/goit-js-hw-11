/* empty css                      */import{a as u,S as p,i}from"./assets/vendor-COEJfE63.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="54673230-281fb694487da15dcd571070d",y="https://pixabay.com/api/";u.defaults.baseURL=y;async function g(s,o=1){return(await u.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p><b>Likes</b>${t.likes}</p>
          <p><b>Views</b>${t.views}</p>
          <p><b>Comments</b>${t.comments}</p>
          <p><b>Downloads</b>${t.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){f.innerHTML=""}function w(){d.classList.add("is-visible")}function v(){d.classList.remove("is-visible")}const q=document.querySelector(".form");let c="",l=1;q.addEventListener("submit",function(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"bottomCenter"});return}c=o,l=1,L(),w(),g(c,l).then(function(t){if(t.hits.length===0){i.info({message:"We're sorry, we couldn't find any images.",position:"bottomCenter"});return}b(t.hits)}).catch(function(){i.error({message:"Error fetching images.",position:"bottomCenter"})}).finally(function(){v()})});
//# sourceMappingURL=index.js.map
