import{g as r,S as t}from"./onAllPages.js";function a(){r.registerPlugin(t),r.from("footer",{y:"-80%",ease:"none",duration:1,scrollTrigger:{start:"top bottom",end:"bottom 90%",trigger:"footer",scrub:!0}})}function s(){r.registerPlugin(t);let e=document.querySelector("[animate='scale']");r.timeline({paused:!0,scrollTrigger:{start:"top bottom",end:"bottom top",trigger:e,scrub:1}}).set(e,{scale:.85,borderRadius:"1.25rem"}).to(e,{scale:1,borderRadius:"0"}).to(e,{scale:.85,borderRadius:"1.25rem",ease:"power1.in"},"+=0.25")}export{s as a,a as b};
