import{m as c}from"./moveImgInText.js";import{c as s}from"./createSlider.js";import{a as m}from"./animateImageScale.js";import{g as t}from"./index.js";import{S as i}from"./ScrollTrigger.js";function l(){t.registerPlugin(i);let e=document.querySelector("[animate='scale']");t.timeline({paused:!0,scrollTrigger:{start:"top bottom",end:"bottom top",trigger:e,scrub:1}}).set(e,{scale:.85,borderRadius:"1.25rem"}).to(e,{scale:1,borderRadius:"0"}).to(e,{scale:.85,borderRadius:"1.25rem",ease:"power1.in"},"+=0.25")}function d(){t.registerPlugin(i);let e=document.querySelector("[animate='born-section']"),a=document.querySelector("[animate='born-inner']"),r=document.querySelector("[animate='heading-1']"),o=document.querySelector("[animate='heading-2']");t.set(r,{opacity:0,yPercent:100}),t.set(o,{opacity:0,yPercent:100}),t.registerPlugin(i),t.timeline({scrollTrigger:{trigger:e,start:"top top",scrub:!0,pin:a,end:"bottom"}}).to(r,{opacity:1,yPercent:0}).to(r,{opacity:0,yPercent:-100}).fromTo(o,{opacity:0,yPercent:0},{opacity:1,yPercent:-100},"25%").to(o,{opacity:1})}function n(){c(),s({container:".team_cms-list",items:3,slideBy:1,autoplay:!1,prevButton:".team_slider-arrow.is-prev",nextButton:".team_slider-arrow.is-next"}),l(),m(),d()}document.readyState=="loading"?document.addEventListener("DOMContentLoaded",n):n();
