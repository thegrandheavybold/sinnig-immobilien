!function(){"use strict";class e{constructor(e){this.domNode=e,this.buttonNode=e.querySelector("button"),this.menuNode=e.querySelector('[role="menu"]'),this.menuitemNodes=[],this.firstMenuitem=!1,this.lastMenuitem=!1,this.firstChars=[],this.buttonNode.addEventListener("keydown",this.onButtonKeydown.bind(this)),this.buttonNode.addEventListener("click",this.onButtonClick.bind(this));for(var t=e.querySelectorAll('[role="menuitem"]'),s=0;s<t.length;s++){var i=t[s];this.menuitemNodes.push(i),i.tabIndex=-1,this.firstChars.push(i.textContent.trim()[0].toLowerCase()),i.addEventListener("keydown",this.onMenuitemKeydown.bind(this)),i.addEventListener("mouseover",this.onMenuitemMouseover.bind(this)),this.firstMenuitem||(this.firstMenuitem=i),this.lastMenuitem=i}e.addEventListener("focusin",this.onFocusin.bind(this)),e.addEventListener("focusout",this.onFocusout.bind(this)),window.addEventListener("mousedown",this.onBackgroundMousedown.bind(this),!0)}setFocusToMenuitem(e){this.menuitemNodes.forEach((function(t){t===e?(t.tabIndex=0,e.focus()):t.tabIndex=-1}))}setFocusToFirstMenuitem(){this.setFocusToMenuitem(this.firstMenuitem)}setFocusToLastMenuitem(){this.setFocusToMenuitem(this.lastMenuitem)}setFocusToPreviousMenuitem(e){var t,s;return e===this.firstMenuitem?t=this.lastMenuitem:(s=this.menuitemNodes.indexOf(e),t=this.menuitemNodes[s-1]),this.setFocusToMenuitem(t),t}setFocusToNextMenuitem(e){var t,s;return e===this.lastMenuitem?t=this.firstMenuitem:(s=this.menuitemNodes.indexOf(e),t=this.menuitemNodes[s+1]),this.setFocusToMenuitem(t),t}setFocusByFirstCharacter(e,t){var s,i;t.length>1||(t=t.toLowerCase(),(s=this.menuitemNodes.indexOf(e)+1)>=this.menuitemNodes.length&&(s=0),-1===(i=this.firstChars.indexOf(t,s))&&(i=this.firstChars.indexOf(t,0)),i>-1&&this.setFocusToMenuitem(this.menuitemNodes[i]))}getIndexFirstChars(e,t){for(var s=e;s<this.firstChars.length;s++)if(t===this.firstChars[s])return s;return-1}openPopup(){this.buttonNode.setAttribute("aria-expanded","true")}closePopup(){this.isOpen()&&this.buttonNode.setAttribute("aria-expanded","false")}isOpen(){return"true"===this.buttonNode.getAttribute("aria-expanded")}onFocusin(){this.domNode.classList.add("focus")}onFocusout(){this.domNode.classList.remove("focus")}onButtonKeydown(e){var t=!1;switch(e.key){case" ":case"Enter":case"ArrowDown":case"Down":this.openPopup(),this.setFocusToFirstMenuitem(),t=!0;break;case"Esc":case"Escape":this.closePopup(),this.buttonNode.focus(),t=!0;break;case"Up":case"ArrowUp":this.openPopup(),this.setFocusToLastMenuitem(),t=!0}t&&(e.stopPropagation(),e.preventDefault())}onButtonClick(e){this.isOpen()?(this.closePopup(),this.buttonNode.focus()):(this.openPopup(),this.setFocusToFirstMenuitem()),e.stopPropagation(),e.preventDefault()}onMenuitemKeydown(e){var t=e.currentTarget,s=e.key,i=!1;function o(e){return 1===e.length&&e.match(/\S/)}if(!(e.ctrlKey||e.altKey||e.metaKey)){if(e.shiftKey)o(s)&&(this.setFocusByFirstCharacter(t,s),i=!0),"Tab"===e.key&&(this.buttonNode.focus(),this.closePopup(),i=!0);else switch(s){case" ":window.location.href=t.href;break;case"Esc":case"Escape":this.closePopup(),this.buttonNode.focus(),i=!0;break;case"Up":case"ArrowUp":this.setFocusToPreviousMenuitem(t),i=!0;break;case"ArrowDown":case"Down":this.setFocusToNextMenuitem(t),i=!0;break;case"Home":case"PageUp":this.setFocusToFirstMenuitem(),i=!0;break;case"End":case"PageDown":this.setFocusToLastMenuitem(),i=!0;break;case"Tab":this.closePopup();break;default:o(s)&&(this.setFocusByFirstCharacter(t,s),i=!0)}i&&(e.stopPropagation(),e.preventDefault())}}onMenuitemMouseover(e){e.currentTarget.focus()}onBackgroundMousedown(e){this.domNode.contains(e.target)||this.isOpen()&&(this.closePopup(),this.buttonNode.focus())}}window.addEventListener("load",(function(){var t=document.querySelectorAll(".menu-button-links");for(let s=0;s<t.length;s++)new e(t[s])})),window.addEventListener("scroll",(function(){const e=document.querySelector("header");var t=e.offsetTop+100;window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")})),window.addEventListener("scroll",(function(){const e=document.querySelector(".lax");var t=.35*window.pageYOffset;e&&(e.style.transform="translate3D(0px, "+t+"px, 0px)")}));const t=new IntersectionObserver((e=>{e.forEach((e=>{e.target.classList.toggle("is_inview",e.isIntersecting)}))})),s={threshold:1};document.querySelectorAll("[data]").forEach((e=>{t.observe(e,s)})),document.onload=function(){var e=document.querySelector("#mietverwaltungAnfrage"),t=document.querySelector(".mietverwaltung_form");e.onclick=function(){t.classList.toggle("anfrage")}},document.onload=function(){var e=document.querySelector("#vorteile_box"),t=document.querySelector("#vorteile_content"),s=t.querySelector(".allgemeine"),i=t.querySelector(".kaufmaennische"),o=t.querySelector(".technische"),n=e.querySelector(".allgemeineBtn"),r=e.querySelector(".kaufmaennischeBtn"),c=e.querySelector(".technischeBtn");n.onclick=function(){r.classList.remove("active"),c.classList.remove("active"),this.classList.add("active"),s.classList.add("active"),i.classList.remove("active"),o.classList.remove("active")},r.onclick=function(){n.classList.remove("active"),c.classList.remove("active"),this.classList.add("active"),i.classList.add("active"),s.classList.remove("active"),o.classList.remove("active")},c.onclick=function(){n.classList.remove("active"),r.classList.remove("active"),this.classList.add("active"),o.classList.add("active"),s.classList.remove("active"),i.classList.remove("active")}}}();