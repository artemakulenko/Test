(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const o=document.querySelector("form"),y=Array.from(o.querySelectorAll(".step")),A=o.querySelector(".next-btn"),b=o.querySelector(".previous-btn"),v=o.querySelector("#username"),g=o.querySelector("#company-name"),d=o.querySelector("#email"),u=o.querySelector("#phone");o.querySelector("#promocode");const E=o.querySelector(".capcha"),S=o.querySelector("#capchaInput"),p=o.querySelector("#password"),f=o.querySelector("#password2"),L=o.querySelector("#policy"),k=document.querySelector(".stats"),I=document.querySelectorAll("img.disable-drag"),w=document.querySelector(".stats__remove");I.forEach(r=>r.ondragstart=()=>!1);function x(r){const s="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";let t="";for(let n=0;n<r;n++){t+=s[Math.round(Math.random()*(s.length-1))].toUpperCase();const e=`<div class='capcha__letter'>${t[n]}</div>`;E.insertAdjacentHTML("beforeend",e)}return t}const V=x(5),a=(r,s)=>{const t=r.parentElement,n=t.querySelector(".form__error");n.textContent=s,t.classList.add("error"),t.classList.remove("succes"),t.classList.remove("shake-horizontal"),t.offsetWidth,t.classList.add("shake-horizontal")},c=r=>{const s=r.parentElement,t=s.querySelector(".form__error");t.textContent="",s.classList.remove("error"),s.classList.add("success"),s.classList.remove("shake-horizontal")},C=r=>/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()),D=()=>{const r=v.value.trim(),s=g.value.trim(),t=d.value.trim(),n=u.value.trim();let e=!1;return r==""?a(v,"Заполните имя"):c(v),s==""?a(g,"Заполните название компании"):c(g),t===""?a(d,"Заполните email"):C(t)?c(d):a(d,"Введите валидный email"),n===""?a(u,"Введите телефон"):n.length<18?a(u,"Дополните телефон"):c(u),Array.from(o.querySelectorAll(".form__group.error")).length==0?e=!0:e=!1,e},M=()=>{const r=S.value.trim().toUpperCase(),s=p.value.trim(),t=f.value.trim(),n=L.checked;let e=!1;return s==""?a(p,"придумайте пароль"):s.length<8?a(p,"пароль должен состоять из не менее чем 8 символов"):c(p),t==""?a(f,"подтвердите пароль"):s!=t?a(f,"пароли не совпадают"):c(f),r!==V?a(S,"капча не совпадает"):c(S),n?c(L):a(L,"Согласитесь с условиями"),Array.from(o.querySelectorAll(".form__group.error")).length==0?e=!0:e=!1,e};function q(r){const s=o.querySelector(".active");let t=y.indexOf(s);y[t].classList.remove("active"),r==="next"?t++:t--,y[t].classList.add("active")}A.addEventListener("click",()=>D()?q("next"):!1);b.addEventListener("click",()=>{q("prev")});o.addEventListener("submit",r=>{if(r.preventDefault(),M()){const s=[];o.querySelectorAll("input.to-stats").forEach(t=>{const{name:n,value:e}=t;s.push({name:n,value:e})}),k.classList.remove("stats__disable"),console.table(s),o.reset()}else return!1});w.addEventListener("click",function(){this.parentElement.classList.add("stats__disable")});const z=r=>{function s(t){const n=" (___)-___ __ __",e="+7";let l="";const i=this.value.length>e.length;if(t.type==="blur"&&!i){this.value="";return}else t.type==="input"&&(l=t.data);let m=i?this.value.slice(0,e.length)===e?this.value.slice(e.length).replace(/\D/g,""):(l+this.value.slice(e.length+1)).replace(/\D/g,""):"",h=0;this.value=e+n.replace(/./g,function(_){return/[_\d]/.test(_)&&h<m.length?m.charAt(h++):h>=m.length?"":_})}r.addEventListener("input",s),r.addEventListener("focus",s),r.addEventListener("blur",s)};z(u);