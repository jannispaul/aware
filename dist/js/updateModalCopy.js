function u(i){const n=document.querySelectorAll('[fs-modal-element="open-2"]');n.forEach(e=>{e.removeAttribute("fs-modal-element"),e.setAttribute("fs-modal-element","tooltip")});let o;function l(){window.fsAttributes=window.fsAttributes||[],window.fsAttributes.modal.destroy(),window.fsAttributes.modal.init()}function a(e){l();const d=e.getBoundingClientRect();let t=e.cloneNode(!0);t.style.display="block",t.style.transform="translateY(0)";const c=d.left+window.scrollX,f=d.top+window.scrollY+4;t.style.left=c+"px",t.style.top=f+"px",document.body.appendChild(t),o=t}function r(e){let t=e.target.parentNode.querySelector('[data-element="tooltip"]');t&&(t.style.display="block",a(t),t.style.display="none")}function s(e){o==null||o.remove()}n.forEach(e=>e.addEventListener("mouseenter",r)),n.forEach(e=>e.addEventListener("mouseleave",s))}function m(i){const n=document.querySelectorAll('[fs-modal-element="open-2"]'),o=document.querySelectorAll('[data-element="marker-info"]'),l=document.querySelector('[data-element="modal-body"]');n.forEach(function(a,r){a.addEventListener("click",function(){const s=o[r];s&&(l.innerHTML="",l.appendChild(s.cloneNode(!0)))})})}export{u as c,m as u};
