/* empty css                      */import{a as u,S as f,i}from"./assets/vendor-COEJfE63.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="54673230-281fb694487da15dcd571070d",m="https://pixabay.com/api/";u.defaults.baseURL=m;async function y(n,o=1){return(await u.get("",{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const d=document.querySelector(".gallery");document.querySelector(".loader");const g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const o=n.map(t=>`
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
    `).join("");d.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){d.innerHTML=""}function L(){loaderText.classList.remove("hidden")}function w(){loaderText.classList.add("hidden")}const v=document.querySelector(".form");let c="",l=1;v.addEventListener("submit",function(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"bottomCenter"});return}c=o,l=1,b(),L(),y(c,l).then(function(t){if(t.hits.length===0){i.info({message:"We're sorry, we couldn't find any images.",position:"bottomCenter"});return}h(t.hits)}).catch(function(){i.error({message:"Error fetching images.",position:"bottomCenter"})}).finally(function(){w()})});
//# sourceMappingURL=index.js.map
