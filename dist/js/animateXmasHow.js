import{g as t,S as h}from"./onAllPages.js";function S(){t.registerPlugin(h);const e=document.querySelector("[animate='how-section']"),n=document.querySelector("[animate='container']"),i=e==null?void 0:e.querySelector("[animate='step-wrapper']"),r=Array.from(i==null?void 0:i.children),s=e.querySelector("[animate='image-wrapper']"),o=Array.from(s==null?void 0:s.children),c=getComputedStyle(document.documentElement).getPropertyValue("--neutrals--900"),l=getComputedStyle(document.documentElement).getPropertyValue("--neutrals--300"),p=e==null?void 0:e.querySelectorAll("[data-link]");p==null||p.forEach(a=>{a.addEventListener("click",()=>{e==null||e.querySelector(a.dataset.link).scrollIntoView({behavior:"smooth"})})});const m=0;function u(){var y;const a=t.getProperty((y=n==null?void 0:n.parentNode)==null?void 0:y.parentNode,"padding-top");let d=window.innerHeight-m-a*2;t.set(n,{minHeight:d})}t.timeline({paused:!0,scrollTrigger:{trigger:e,start:"top "+m,end:"bottom bottom",scrub:1}}).set(r.slice(1),{flex:"0 1 0%"}).set("[animate='step-1']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},0).to(o[0],{opacity:1},"<").to("[animate='step-1'] [animate='number']",{color:c,duration:1},"<").to("[animate='step-1'] h3, [animate='step-1'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-1'] h3, [animate='step-1'] p",{display:"none",opacity:0,duration:1},"<2").to("[animate='step-1'] [animate='number']",{color:l,duration:1},"<").to("[animate='step-1']",{flex:"0 1 0%",duration:1,delay:1,ease:"power1.inOut"},"<").to(o[0],{opacity:0,duration:1},"<").to("[animate='step-2']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},"<").to(o[1],{opacity:1},"<").to("[animate='step-2'] [animate='number']",{color:c,duration:1},"<").to("[animate='step-2'] h3, [animate='step-2'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-2'] h3, [animate='step-2'] p",{display:"none",opacity:0,duration:1},"<2").to("[animate='step-2'] [animate='number']",{color:l,duration:1},"<").to("[animate='step-2']",{flex:"0 1 0%",duration:1,delay:1,ease:"power1.inOut"},"<").to(o[1],{opacity:0,duration:1},"<").to("[animate='step-3']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},"<").to(o[2],{opacity:1},"<").to("[animate='step-3'] [animate='number']",{color:c,duration:1},"<").to("[animate='step-3'] h3, [animate='step-3'] p",{display:"block",opacity:1,duration:1,delay:1},"<");function g(){t.set(o.slice(1),{opacity:0}),r.slice(1).forEach((a,d)=>{t.set(a,{flex:"0 1 0%"}),t.set(a.querySelector("[animate='heading']"),{display:"none",opacity:0}),t.set(a.querySelector("[animate='copy']"),{display:"none",opacity:0}),t.set(a.querySelector("[animate='number']"),{color:l})}),t.set(r[0],{flex:"1 0 10%"}),u()}g(),window.onresize=u}export{S as a};
