import{S as c,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const l=document.getElementById("loader");function u(){l.style.display="block"}function p(){l.style.display="none"}function m(){const s=document.getElementById("searchInput").value,r=document.getElementById("imageGallery");function i(){r.innerHTML=""}const t=`https://pixabay.com/api/?key=41282731-c9c58555d497b62011b46ee39&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;i(),fetch(t).then(e=>e.json()).then(e=>{if(p(),e.hits.length>0){const n=e.hits.map(o=>`
                    <a href="${o.largeImageURL}" data-lightbox="image-gallery" class="image-card">
                        <img src="${o.webformatURL}" alt="${o.tags}">
                        <div class="image-details">
                            <p><strong>Likes:</strong> ${o.likes}</p>
                            <p><strong>Views:</strong> ${o.views}</p>
                            <p><strong>Comments:</strong> ${o.comments}</p>
                            <p><strong>Downloads:</strong> ${o.downloads}</p>
                        </div>
                    </a>
                `).join("");r.innerHTML=n,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}else d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"})}).catch(e=>{console.error("error",e)})}document.getElementById("searchForm").addEventListener("submit",function(s){s.preventDefault(),u(),m()});
//# sourceMappingURL=commonHelpers.js.map
