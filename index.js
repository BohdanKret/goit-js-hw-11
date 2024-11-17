import{i as m,S as f}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="47077986-634596916a6757457166893bd",h="https://pixabay.com/api/";function p(i){const o=new URLSearchParams({key:d,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:u})=>`
            <li class="gallery-item">
                <div class="gallery-item-imgblock imgblock">
                    <a class="img-link" href="${r}">
		                <img 
			                class="gallery-image" 
			                src="${o}" 
			                alt="${s}" 
			            />
	                </a>
                </div>
                <ul class="gallery-info info-list">
                    <li class="info-item">
                        <h6>Likes</h6>
                        <p>${e}</p>
                    </li>
                    <li class="info-item">
                        <h6>Views</h6>
                        <p>${t}</p>
                    </li>
                    <li class="info-item">
                        <h6>Comments</h6>
                        <p>${n}</p>
                    </li>
                    <li class="info-item">
                        <h6>Downloads</h6>
                        <p>${u}</p>
                    </li>
                </ul>
            </li>
        `).join("")}const c=document.querySelector(".form"),l=document.querySelector("#loader"),a=document.querySelector(".gallery");c.addEventListener("submit",y);function y(i){i.preventDefault(),a.innerHTML="",l.classList.remove("visually-hidden");const o=i.currentTarget.elements.search.value.trim();if(o==="")return alert("Please fill out the search form!");p(o).then(r=>{l.classList.add("visually-hidden"),r.hits.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB",iconUrl:"../img/svg/x-icon.svg",iconColor:"#FAFAFB"}),a.innerHTML=g(r.hits),new f(".imgblock a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}).catch(r=>console.log(r)),c.reset()}
//# sourceMappingURL=index.js.map
