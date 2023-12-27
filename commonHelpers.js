import{S as c,i as a}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=new c(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.getElementById("loader");function p(){l.style.display="block"}function u(){l.style.display="none"}const m=document.getElementById("imageGallery");function f(s){const r=`https://pixabay.com/api/?key=41282731-c9c58555d497b62011b46ee39&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(n=>n.json())}document.getElementById("searchForm").addEventListener("submit",function(s){s.preventDefault();const o=document.getElementById("searchInput").value.trim();if(!o){a.error({title:"Error",message:"Sorry, the text input field is empty. Please try again.",position:"topCenter"});return}f(o).then(r=>{if(u(),r.hits.length>0){const n=r.hits.map(e=>`
                    <a href="${e.largeImageURL}" data-lightbox="image-gallery" class="image-card">
                        <img src="${e.webformatURL}" alt="${e.tags}">
                        <div class="image-details">
                            <p><strong>Likes:</strong> ${e.likes}</p>
                            <p><strong>Views:</strong> ${e.views}</p>
                            <p><strong>Comments:</strong> ${e.comments}</p>
                            <p><strong>Downloads:</strong> ${e.downloads}</p>
                        </div>
                    </a>
                `).join("");m.innerHTML=n,d.refresh()}else a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"})}).catch(r=>{console.error("error",r)}),p()});
//# sourceMappingURL=commonHelpers.js.map
