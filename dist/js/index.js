import{m as R}from"./moveImgInText.js";import{g as o,S as C,o as H,a as N}from"./onAllPages.js";import{a as I}from"./animateCardToFull.js";import{a as z}from"./animateImageScale.js";function F(){let l=document.querySelector("[animate='left-half']"),i=document.querySelector("[animate='right-half']"),s=l==null?void 0:l.querySelector("lottie-player"),e=i==null?void 0:i.querySelector("video");if(!l||!i)return;let u=o.timeline({paused:!0}).to(i.querySelector("h3"),{opacity:0,duration:.4,display:"none"}).to(l,{duration:.7,flex:"1.5 1 0%",ease:"power2.inOut"},0),c=o.timeline({paused:!0}).to(l.querySelector("h3"),{opacity:0,duration:.4,display:"none"}).to(i,{duration:.7,flex:"1.5 1 0%",ease:"power2.inOut"},0);l.addEventListener("mouseenter",()=>{u.play(),e==null||e.pause()}),l.addEventListener("mouseleave",()=>{u.reverse(),e==null||e.play()}),i.addEventListener("mouseenter",()=>{c.play(),s&&(s==null||s.pause())}),i.addEventListener("mouseleave",()=>{c.reverse(),s&&(s==null||s.play())})}function W(l){const i=document.querySelector("[data-element='quote-container']"),s=document.querySelector("[data-element='quote-list']");let e=Array.from(document.querySelectorAll("[data-element='quote']"));const u="16.5rem",c="12rem",p="23.75rem",f="33rem",y=e.length,w=3;let n=!1;function r(){[...e].reverse().forEach(t=>{let a=t.cloneNode(!0);s.prepend(a),o.set(a,{opacity:0,autoAlpha:0})})}r(),r(),e=Array.from(document.querySelectorAll("[data-element='quote']"));function d(t){const a=t.getBoundingClientRect(),m=t.parentNode.getBoundingClientRect(),h=new DOMMatrix(window.getComputedStyle(t).transform).a,q=(t.offsetWidth-a.width)/2;return m.right-a.right-h-q}function S(t){n=!0,setTimeout(()=>{n=!1},1e3),e.forEach(m=>m.ariaCurrent=!1),t.ariaCurrent=!0,o.to(t,{scale:1.05,opacity:1,duration:.3,ease:"power2.inOut"});let a=Array.from(t.parentElement.children).indexOf(t);E(a,1),v(a,1),O(a,1),x(a),a<e.length-y&&o.delayedCall(1.75,()=>{a=a+e.length/w,A(a)})}function A(t){e.forEach((a,m)=>{o.set(a,{clearProps:"transform,visibility,scale",width:m===t?p:c,height:m===t?f:u,opacity:m<e.length-y?0:1})}),E(t,0),v(t,0),O(t,0)}function v(t,a){let m=e.slice(t+1-y,t),g=a===0?0:.5;o.delayedCall(g,()=>{m.forEach(h=>{o.to(h,{opacity:1,duration:a,ease:"power1.inOut",autoAlpha:1})})})}function E(t,a){e.slice(t+1).forEach((g,h)=>{o.timeline().to(g,{translateX:"+="+200*(1+h/5),duration:a,ease:"power1.inOut"}).to(g,{opacity:0,ease:!1,duration:a},0).to(g,{autoAlpha:0})})}function O(t,a){const m=e.slice(0,t+1);let g=d(e[t]),h=a===0?0:.5;o.delayedCall(h,()=>{m.forEach((q,b)=>{o.timeline().to(q,{translateX:"+="+g,duration:a,ease:"power1.inOut"}).to(q,{width:b===m.length-1?p:c,height:b===m.length-1?f:u,duration:a,scale:1,ease:"power1.inOut"},0)})})}function x(t){o.to(i,{opacity:0,duration:.5,ease:!1}),o.delayedCall(1,()=>{const a=e[t].querySelector("[data-element='quote-body']");i.replaceChildren(...a.cloneNode(!0).children),o.timeline().fromTo(i,{xPercent:-80,translateX:0,opacity:0},{xPercent:0,duration:1,ease:"power1.out"}).to(i,{opacity:1,duration:1,ease:"power1.in"},0)})}function L(){O(e.length-1,0)}L();function M(t){t.ariaCurrent!=="true"&&o.timeline().to(t,{scale:.9,opacity:.8,ease:"power2.inOut",duration:.5})}function P(t){o.timeline().to(t,{scale:1,opacity:1,ease:"power2.inOut",duration:.5})}document.addEventListener("click",t=>{!t.target.closest("[data-element='quote']")||n||S(t.target.closest("[data-element='quote']"))}),e.forEach(t=>{t.addEventListener("mouseenter",a=>{M(a.target.closest("[data-element='quote']"))})}),e.forEach(t=>{t.addEventListener("mouseleave",a=>{P(a.target.closest("[data-element='quote']"))})})}function X(){o.registerPlugin(C);const l=document.querySelector("[animate='how-section']"),i=document.querySelector("[animate='container']"),s=l.querySelector("[animate='step-wrapper']"),e=Array.from(s==null?void 0:s.children),u=l.querySelector("[animate='image-wrapper']"),c=Array.from(u==null?void 0:u.children),p=getComputedStyle(document.documentElement).getPropertyValue("--neutrals--900"),f=getComputedStyle(document.documentElement).getPropertyValue("--neutrals--300"),y=0;function w(){var S;const r=o.getProperty((S=i==null?void 0:i.parentNode)==null?void 0:S.parentNode,"padding-top");let d=window.innerHeight-y-r*2;o.set(i,{minHeight:d})}o.timeline({paused:!0,scrollTrigger:{trigger:l,start:"top "+y,end:"bottom bottom",scrub:1}}).set(e.slice(1),{flex:"0 1 0%"}).set("[animate='step-1']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},0).to(c[0],{opacity:1},"<").to("[animate='step-1'] [animate='number']",{color:p,duration:1},"<").to("[animate='step-1'] h3, [animate='step-1'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-1'] h3, [animate='step-1'] p",{display:"none",opacity:0,duration:1},"<2").to("[animate='step-1'] [animate='number']",{color:f,duration:1},"<").to("[animate='step-1']",{flex:"0 1 0%",duration:1,delay:1,ease:"power1.inOut"},"<").to(c[0],{opacity:0,duration:1},"<").to("[animate='step-2']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},"<").to(c[1],{opacity:1},"<").to("[animate='step-2'] [animate='number']",{color:p,duration:1},"<").to("[animate='step-2'] h3, [animate='step-2'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-2'] h3, [animate='step-2'] p",{display:"none",opacity:0,duration:1},"<2").to("[animate='step-2'] [animate='number']",{color:f,duration:1},"<").to("[animate='step-2']",{flex:"0 1 0%",duration:1,delay:1,ease:"power1.inOut"},"<").to(c[1],{opacity:0,duration:1},"<").to("[animate='step-3']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},"<").to(c[2],{opacity:1},"<").to("[animate='step-3'] [animate='number']",{color:p,duration:1},"<").to("[animate='step-3'] h3, [animate='step-3'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-3'] h3, [animate='step-3'] p",{display:"none",opacity:0,duration:1},"<2").to("[animate='step-3'] [animate='number']",{color:f,duration:1},"<").to("[animate='step-3']",{flex:"0 1 0%",duration:1,delay:1,ease:"power1.inOut"},"<").to(c[2],{opacity:0,duration:1},"<").to("[animate='step-4']",{flex:"1 0 10%",duration:1,ease:"power1.inOut"},"<").to(c[3],{opacity:1},"<").to("[animate='step-4'] [animate='number']",{color:p,duration:1},"<").to("[animate='step-4'] h3, [animate='step-4'] p",{display:"block",opacity:1,duration:1,delay:1},"<").to("[animate='step-4']",{opacity:1},"<2");function n(){o.set(c.slice(1),{opacity:0}),e.slice(1).forEach((r,d)=>{o.set(r,{flex:"0 1 0%"}),o.set(r.querySelector("[animate='heading']"),{display:"none",opacity:0}),o.set(r.querySelector("[animate='copy']"),{display:"none",opacity:0}),o.set(r.querySelector("[animate='number']"),{color:f})}),o.set(e[0],{flex:"1 0 10%"}),console.log(e[0]),w()}n(),window.onresize=w}function B(l){o.registerPlugin(C);const i=document.querySelector("[animate='horizontal-scroll']");function s(e){e&&e.scroll({left:e.scrollWidth-e.clientWidth,behavior:"smooth"})}o.from(i,{ease:"power1.inOut",duration:1,scrollTrigger:{start:"top center",end:"bottom 80%",trigger:i,scrub:1,onUpdate:e=>{e.progress>.5&&s(i)},onLeave:function(e){e.scroll(e.start),e.disable(),e.animation.progress(1)}}})}function D(l){o.registerPlugin(C);let i=Array.from(document.querySelectorAll("[data-element='quote']"));o.set("[data-element='quote-body']",{opacity:0}),o.set("[data-element='quote'] img",{scale:.75,transformOrigin:"left"});const s={root:null,rootMargin:"0px 0px 0px 00px",threshold:.5};let e=!1,u="left";const c=new IntersectionObserver(function(n){n.forEach(r=>{r.boundingClientRect.left<0?u="left":u="right",r.isIntersecting?(u==="right"?p(r.target):y(r.target),e=!0):e&&(u==="left"?w(r.target):f(r.target),e=!1)})},s);function p(n){console.log("fadeinfromright",n);let r=n.querySelector("[data-element='quote-body']"),d=n.querySelector("img");o.timeline({ease:"power1.inOut"}).fromTo(r,{opacity:0},{opacity:1,duration:.5}).fromTo(d,{scale:.75,transformOrigin:"left"},{scale:1,duration:.5,transformOrigin:"left"},0)}function f(n){console.log("fadeOuttoRight",n);let r=n.querySelector("[data-element='quote-body']"),d=n.querySelector("img");o.timeline({ease:"power1.inOut"}).fromTo(r,{opacity:1},{opacity:0,duration:1}).fromTo(d,{scale:1,transformOrigin:"left"},{scale:.75,duration:.5,transformOrigin:"left"},"0")}function y(n){console.log("fadeInFromLeft",n);let r=n.querySelector("[data-element='quote-body']"),d=n.querySelector("img");o.timeline({ease:"power1.inOut"}).fromTo(r,{opacity:0},{opacity:1,duration:1}).fromTo(d,{scale:.75,duration:1,transformOrigin:"right"},{scale:1,duration:.5,transformOrigin:"right"},0)}function w(n){console.log("fadeouttoLeft",n);let r=n.querySelector("[data-element='quote-body']"),d=n.querySelector("img");o.timeline({ease:"power1.inOut"}).fromTo(r,{opacity:1,duration:1},{opacity:0,duration:1},0).fromTo(d,{scale:1,duration:1},{scale:.75,duration:.5,transformOrigin:"right"},"<")}i.forEach(n=>c.observe(n))}function T(){H(),R(),z(),I();let l=N();l&&(B(),D()),l||(F(),W(),X())}document.readyState=="loading"?document.addEventListener("DOMContentLoaded",T):T();
