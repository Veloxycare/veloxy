import{j as w}from"./jsx-runtime.Dhsgnf4I.js";import{r as E}from"./index.uubelm5h.js";import{Q as M,B as q}from"./react-toastify.esm.DZv44BnJ.js";/* empty css                       */import"./clsx.B-dksMZM.js";const g="data-astro-transition-persist";function B(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function $(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function W(e){for(const t of Array.from(document.head.children)){const n=G(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function U(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${g}]`)){const o=n.getAttribute(g),r=e.querySelector(`[${g}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&K(n)&&!Q(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const V=()=>{const e=document.activeElement;if(e?.closest(`[${g}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>x({activeElement:e,start:t,end:n})}return()=>x({activeElement:e})}else return()=>x({activeElement:null})},x=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},G=(e,t)=>{const n=e.getAttribute(g),o=n&&t.head.querySelector(`[${g}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},K=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},Q=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),z=e=>{B(e),$(e),W(e);const t=V();U(e.body,document.body),t()},J="astro:before-preparation",Z="astro:after-preparation",ee="astro:before-swap",te="astro:after-swap",ne=e=>document.dispatchEvent(new Event(e));class O extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,l,a,c,u,d){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=l,this.sourceElement=a,this.info=c,this.newDocument=u,this.signal=d,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class oe extends O{formData;loader;constructor(t,n,o,r,s,l,a,c,u,d){super(J,{cancelable:!0},t,n,o,r,s,l,a,c),this.formData=u,this.loader=d.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class re extends O{direction;viewTransition;swap;constructor(t,n){super(ee,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>z(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,n,o,r,s,l,a,c){const u=new oe(e,t,n,o,r,s,window.document,l,a,c);return document.dispatchEvent(u)&&(await u.loader(),u.defaultPrevented||(ne(Z),u.navigationType!=="traverse"&&P({scrollX,scrollY}))),u}function ie(e,t){const n=new re(e,t);return document.dispatchEvent(n),n.swap(),n}const ae=history.pushState.bind(history),v=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...e},""))},_=!!document.startViewTransition,R=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),F=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let m,b,k;const X=e=>document.dispatchEvent(new Event(e)),Y=()=>X("astro:page-load"),ce=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},D="data-astro-transition-persist",I="data-astro-transition",S="data-astro-transition-fallback";let N,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):R()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");async function le(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ue(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const H=(e,t,n,o,r)=>{const s=F(t,e),l=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;v({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else ae({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(document.title=l,k=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(v(c,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function de(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${D}="${n.getAttribute(D)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function L(e,t,n,o,r){async function s(c){function u(p){const f=p.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const d=document.getAnimations();document.documentElement.setAttribute(S,c);const h=document.getAnimations().filter(p=>!d.includes(p)&&!u(p));return Promise.allSettled(h.map(p=>p.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const l=document.title,a=ie(e,n.viewTransition);H(a.to,a.from,t,l,o),X(te),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function me(){return m?.controller.abort(),m={controller:new AbortController}}async function fe(e,t,n,o,r){const s=me();if(!R()||location.origin!==n.origin){s===m&&(m=void 0),location.href=n.href;return}const l=r?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&P({scrollX,scrollY}),F(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){H(n,t,o,document.title,r),s===m&&(m=void 0);return}const a=await se(t,n,e,l,o.sourceElement,o.info,s.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){s===m&&(m=void 0),a.signal.aborted||(location.href=n.href);return}async function c(i){const h=i.to.href,p={signal:i.signal};if(i.formData){p.method="POST";const y=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");p.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const f=await le(h,p);if(f===null){i.preventDefault();return}if(f.redirected){const y=new URL(f.redirected);if(y.origin!==i.to.origin){i.preventDefault();return}i.to=y}if(N??=new DOMParser,i.newDocument=N.parseFromString(f.html,f.mediaType),i.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const A=de(i.newDocument);A.length&&!i.signal.aborted&&await Promise.all(A)}async function u(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const d=await u();if(a.signal.aborted){s===m&&(m=void 0);return}if(document.documentElement.setAttribute(I,a.direction),_)d.viewTransition=document.startViewTransition(async()=>await L(a,o,d,r));else{const i=(async()=>{await Promise.resolve(),await L(a,o,d,r,j())})();d.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(h=>d.viewTransitionFinished=h),skipTransition:()=>{d.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}d.viewTransition?.updateCallbackDone.finally(async()=>{await ue(),Y(),ce()}),d.viewTransition?.finished.finally(()=>{d.viewTransition=void 0,d===b&&(b=void 0),s===m&&(m=void 0),document.documentElement.removeAttribute(I),document.documentElement.removeAttribute(S)});try{await d.viewTransition?.updateCallbackDone}catch(i){const h=i;console.log("[astro]",h.name,h.message,h.stack)}}function pe(e){if(!R()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,fe(o,k,new URL(location.href),{},t)}const C=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(_||j()!=="none")if(k=new URL(location.href),addEventListener("popstate",pe),addEventListener("load",Y),"onscrollend"in window)addEventListener("scrollend",C);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,C();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const Te=()=>{const[e,t]=E.useState(""),[n,o]=E.useState("");E.useEffect(()=>{if(window.google){const s=document.getElementById("pickup"),l=document.getElementById("destination"),a=new window.google.maps.places.Autocomplete(s),c=new window.google.maps.places.Autocomplete(l);a.addListener("place_changed",()=>{const u=a.getPlace();t(u.formatted_address||s.value)}),c.addListener("place_changed",()=>{const u=c.getPlace();o(u.formatted_address||l.value)})}},[]);const r=s=>{if(s.preventDefault(),e!==""&&n!==""){window.location.href="https://apps.apple.com/us/app/veloxy/id6504430463";return}q.error("Please fill in both Pickup and Destination fields.")};return w.jsxs("div",{className:"container",children:[w.jsx("h1",{className:"text-primary font-extrabold text-5xl mb-10",children:"Go anywhere with Veloxy CareRide"}),w.jsx("p",{className:"text-primary mb-10",children:"Request a ride, hop in, and go."}),w.jsx("input",{type:"text",id:"pickup",placeholder:"Enter Pickup Location",className:"w-full md:w-[80%] text-primary rounded-lg p-4 mb-10 border-2 h-14 outline-[#3C3E83]",onChange:s=>t(s.target.value)}),w.jsx("input",{type:"text",id:"destination",placeholder:"Enter Destination",className:"w-full md:w-[80%] text-primary rounded-lg p-4 mb-10 border-2 h-14 outline-[#3C3E83]",onChange:s=>o(s.target.value)}),w.jsx("br",{}),w.jsx("button",{onClick:r,className:"button px-8 py-4",children:"See Prices"}),w.jsx(M,{})]})};export{Te as default};