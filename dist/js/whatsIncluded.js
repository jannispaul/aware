import{o as m,a as y}from"./onAllPages.js";function p(){const i=Array.from(document.querySelectorAll("[data-element='nest-target']")),a=Array.from(document.querySelectorAll("[data-identifier]")),n=[...new Set(a.map(o=>o.dataset.identifier))],r=document.querySelectorAll("[data-element='nest-source']");n.length>1?r.forEach(o=>{i[1].closest(`[data-identifier=${o.dataset.identifier}]`);let d=i.filter(t=>t.closest(`[data-identifier=${o.dataset.identifier}]`));c(o,d)}):c(r[0],Array.from(i));function c(o,d){o.querySelectorAll("[data-category]").forEach(l=>{let e=l.dataset.category,s=d.filter(f=>f.dataset.category===e)[0];(s==null?void 0:s.dataset.element)==="nest-target"&&s.appendChild(l)}),d.forEach(l=>{let e=l.parentNode.parentNode.querySelector("[data-element='list-count']");if(!e)return;l.children.length>0?e.innerText=l.children.length:e.remove()})}r.forEach(o=>o.parentNode.remove())}function g(i){const a=document.querySelectorAll('[fs-modal-element="open"]');a.forEach(t=>{t.removeAttribute("fs-modal-element"),t.setAttribute("fs-modal-element","tooltip")});let n;function r(){window.fsAttributes=window.fsAttributes||[],window.fsAttributes.modal.destroy(),window.fsAttributes.modal.init()}function c(t){r();const l=t.getBoundingClientRect();let e=t.cloneNode(!0);e.style.display="block",e.style.transform="translateY(0)";const s=l.left+window.scrollX,f=l.top+window.scrollY+4;e.style.left=s+"px",e.style.top=f+"px",document.body.appendChild(e),n=e}function o(t){let e=t.target.parentNode.querySelector('[data-element="tooltip"]');e&&(e.style.display="block",c(e),e.style.display="none")}function d(t){n==null||n.remove()}a.forEach(t=>t.addEventListener("mouseenter",o)),a.forEach(t=>t.addEventListener("mouseleave",d))}function h(){const i=Array.from(document.querySelectorAll("[data-element='tab-count']"));i&&i.forEach(a=>{let n=a.getAttribute("data-category");if(!n)return;let r=document.querySelector(`[data-category="${n}"][data-identifier="addons"][data-element="nest-target"]`).childNodes;r&&(a.querySelector("[data-element='list-count']").innerText=r.length)})}function A(i){const a=document.querySelectorAll('[fs-modal-element="open"]'),n=document.querySelectorAll('[data-element="marker-info"]'),r=document.querySelector('[data-element="modal-body"]');a.forEach(function(c,o){c.addEventListener("click",function(){const d=n[o];d&&(r.innerHTML="",r.appendChild(d.cloneNode(!0)))})})}function u(){m(),p(),h(),A(),!y()&&g()}document.readyState=="loading"?document.addEventListener("DOMContentLoaded",u):u();
