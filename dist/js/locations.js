import{g as e,S as o,o as a}from"./onAllPages.js";import{a as n}from"./animateFooter.js";import{c as i}from"./createSlider.js";function s(){e.registerPlugin(o);let t=document.querySelectorAll("[animate='banner-track']");e.from(t[0],{x:"-20%",ease:"none",duration:1,scrollTrigger:{start:"top bottom",end:"bottom top",trigger:t[0],scrub:1}}),e.to(t[1],{x:"-20%",ease:"none",duration:1,scrollTrigger:{start:"top bottom",end:"bottom top",trigger:t[1],scrub:1}})}function r(){a(),s(),n(),i({container:".team_cms-list",items:3,slideBy:1,autoplay:!1,prevButton:".team_slider-arrow.is-prev",nextButton:".team_slider-arrow.is-next"})}document.readyState=="loading"?document.addEventListener("DOMContentLoaded",r):r();