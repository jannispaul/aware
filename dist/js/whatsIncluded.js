import{o as u,a as y}from"./onAllPages.js";function p(){const i=Array.from(document.querySelectorAll("[data-element='nest-target']")),l=Array.from(document.querySelectorAll("[data-identifier]")),a=[...new Set(l.map(o=>o.dataset.identifier))],n=document.querySelectorAll("[data-element='nest-source']");a.length>1?n.forEach(o=>{i[1].closest(`[data-identifier=${o.dataset.identifier}]`);let s=i.filter(t=>t.closest(`[data-identifier=${o.dataset.identifier}]`));d(o,s)}):d(n[0],Array.from(i));function d(o,s){o.querySelectorAll("[data-category]").forEach(r=>{let e=r.dataset.category,c=s.filter(f=>f.dataset.category===e)[0];(c==null?void 0:c.dataset.element)==="nest-target"&&c.appendChild(r)}),s.forEach(r=>{let e=r.parentNode.parentNode.querySelector("[data-element='list-count']");if(!e)return;r.children.length>0?e.innerText=r.children.length>1?r.children.length.toString()+" biomarkers":r.children.length.toString()+" biomarker":e.remove()})}n.forEach(o=>o.parentNode.remove())}function g(i){const l=document.querySelectorAll('[fs-modal-element="open-2"]');l.forEach(t=>{t.removeAttribute("fs-modal-element"),t.setAttribute("fs-modal-element","tooltip")});let a;function n(){window.fsAttributes=window.fsAttributes||[],window.fsAttributes.modal.destroy(),window.fsAttributes.modal.init()}function d(t){n();const r=t.getBoundingClientRect();let e=t.cloneNode(!0);e.style.display="block",e.style.transform="translateY(0)";const c=r.left+window.scrollX,f=r.top+window.scrollY+4;e.style.left=c+"px",e.style.top=f+"px",document.body.appendChild(e),a=e}function o(t){let e=t.target.parentNode.querySelector('[data-element="tooltip"]');e&&(e.style.display="block",d(e),e.style.display="none")}function s(t){a==null||a.remove()}l.forEach(t=>t.addEventListener("mouseenter",o)),l.forEach(t=>t.addEventListener("mouseleave",s))}function h(){const i=Array.from(document.querySelectorAll("[data-tabs='tab-count']"));i&&i.forEach(l=>{let a=l.getAttribute("data-category");if(!a)return;let n=document.querySelector(`[data-category="${a}"][data-identifier="addons"][data-element="nest-target"]`).childNodes,d=l.querySelector("[data-element='list-count']");d&&(d.innerText=n.length>1?n.length.toString()+" biomarkers":n.length.toString()+" biomarker")})}function b(i){const l=document.querySelectorAll('[fs-modal-element="open-2"]'),a=document.querySelectorAll('[data-element="marker-info"]'),n=document.querySelector('[data-element="modal-body"]');l.forEach(function(d,o){d.addEventListener("click",function(){const s=a[o];s&&(n.innerHTML="",n.appendChild(s.cloneNode(!0)))})})}function m(){u(),p(),h(),b(),!y()&&g()}document.readyState=="loading"?document.addEventListener("DOMContentLoaded",m):m();
