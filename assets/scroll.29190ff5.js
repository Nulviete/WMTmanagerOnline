import{z as s,o as r,v as a,V as c,k as d,W as f,X as l}from"./index.54b6f0d8.js";function h(){let t;const e=d();function o(){t=void 0}return s(o),r(o),{removeTick:o,registerTick(n){t=n,a(()=>{t===n&&(c(e)===!1&&t(),t=void 0)})}}}function v(){let t=null;const e=d();function o(){t!==null&&(clearTimeout(t),t=null)}return s(o),r(o),{removeTimeout:o,registerTimeout(n,u){o(),c(e)===!1&&(t=setTimeout(n,u))}}}let m=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,m=t.scrollLeft>=0,t.remove()}const w=[null,document,document.body,document.scrollingElement,document.documentElement];function g(t,e){let o=f(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return w.includes(o)?window:o}function y(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function b(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let i;function T(){if(i!==void 0)return i;const t=document.createElement("p"),e=document.createElement("div");l(t,{width:"100%",height:"200px"}),l(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let n=t.offsetWidth;return o===n&&(n=e.clientWidth),e.remove(),i=o-n,i}function x(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{v as a,y as b,b as c,T as d,g,x as h,m as r,h as u};
