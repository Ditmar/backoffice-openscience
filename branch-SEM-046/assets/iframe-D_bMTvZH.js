const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Chevron-Button.stories-DMQG1wQ7.js","./Chevron-Button-B5w0PP27.js","./jsx-runtime-DEdD30eg.js","./index-RYns6xqu.js","./icons-C45oln94.js","./index-rNTiGNI1.js","./Chevron-Button-D9QtqyJZ.css","./angle-right-BJRyCfEj.js","./Button.stories-D-jJyhCz.js","./index-Dejnh_W_.js","./Button-LBytHqlv.css","./Danger-Button.stories-BQ2R-rYT.js","./Danger-Button-D8Hlcq7X.css","./ghost-button.stories-CmKDogqs.js","./ghost-button-B55FMxQH.css","./Page-Label.stories-Btn3noMC.js","./Page-Label-BNnF-2vF.js","./Page-Label-Duwig9gP.css","./PrimaryButton.stories-BpbB55-e.js","./add-XJnha86c.js","./PrimaryButton-C0K0dd4R.css","./SecondaryButton.stories-gSlhHjSR.js","./SecondaryButton-DV1lAEpu.css","./Tooltip.stories-qpLSR7vv.js","./Tooltip-CGZ1QThB.css","./DangerButton.stories-bTT6xdHX.js","./DangerButton-CGQ7MkfB.css","./Tag.stories-eyRfPvrU.js","./Tag-4iNgxJ-k.css","./display.stories-DN3AtyMP.js","./display-vko4vQJ3.js","./display-BEkPLcdF.css","./caculator.stories-CURzWaOk.js","./caculator-1z0h655F.css","./Pagination.stories-BJ8xQIm6.js","./Pagination-D193Qp2a.css","./icons-grid.stories-DLJA6POH.js","./web-D8GZd4QU.js","./icons-grid-Caeajdst.css","./icons.stories-BGMV8_Zv.js","./entry-preview-BaNL7GuY.js","./react-18-DQPsn1g0.js","./entry-preview-docs-Pyc01qTr.js","./isArray-AquwOF00.js","./index-DrFu-skq.js","./preview-BJPLiuSt.js","./index-D-8MO0q_.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f="modulepreload",T=function(o,_){return new URL(o,_).href},O={},t=function(_,a,u){let e=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.allSettled(a.map(n=>{if(n=T(n,u),n in O)return;O[n]=!0;const m=n.endsWith(".css"),R=m?'[rel="stylesheet"]':"";if(!!u)for(let l=i.length-1;l>=0;l--){const p=i[l];if(p.href===n&&(!m||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${R}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":f,m||(c.as="script"),c.crossOrigin="",c.href=n,d&&c.setAttribute("nonce",d),document.head.appendChild(c),m)return new Promise((l,p)=>{c.addEventListener("load",l),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return e.then(i=>{for(const s of i||[])s.status==="rejected"&&r(s.reason);return _().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});P.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const y={"./src/ui/components/atoms/ButtonChevron/Chevron-Button.stories.tsx":async()=>t(()=>import("./Chevron-Button.stories-DMQG1wQ7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/ui/components/atoms/ButtonYesNo/Button.stories.tsx":async()=>t(()=>import("./Button.stories-D-jJyhCz.js"),__vite__mapDeps([8,2,3,9,10]),import.meta.url),"./src/ui/components/atoms/DangerButton/Danger-Button.stories.tsx":async()=>t(()=>import("./Danger-Button.stories-BQ2R-rYT.js"),__vite__mapDeps([11,2,3,12]),import.meta.url),"./src/ui/components/atoms/Ghost-Button/ghost-button.stories.tsx":async()=>t(()=>import("./ghost-button.stories-CmKDogqs.js"),__vite__mapDeps([13,2,3,9,14]),import.meta.url),"./src/ui/components/atoms/Label-Page/Page-Label.stories.tsx":async()=>t(()=>import("./Page-Label.stories-Btn3noMC.js"),__vite__mapDeps([15,16,2,3,17]),import.meta.url),"./src/ui/components/atoms/Primary-Button/PrimaryButton.stories.tsx":async()=>t(()=>import("./PrimaryButton.stories-BpbB55-e.js"),__vite__mapDeps([18,2,3,9,4,5,19,20]),import.meta.url),"./src/ui/components/atoms/SecondaryButton/SecondaryButton.stories.tsx":async()=>t(()=>import("./SecondaryButton.stories-gSlhHjSR.js"),__vite__mapDeps([21,2,3,9,22]),import.meta.url),"./src/ui/components/atoms/Tooltip/Tooltip.stories.tsx":async()=>t(()=>import("./Tooltip.stories-qpLSR7vv.js"),__vite__mapDeps([23,2,3,9,24]),import.meta.url),"./src/ui/components/atoms/danger-button/DangerButton.stories.tsx":async()=>t(()=>import("./DangerButton.stories-bTT6xdHX.js"),__vite__mapDeps([25,2,3,9,26]),import.meta.url),"./src/ui/components/atoms/tag/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-eyRfPvrU.js"),__vite__mapDeps([27,2,3,9,28]),import.meta.url),"./src/ui/components/demo/calculator/atoms/display.stories.tsx":async()=>t(()=>import("./display.stories-DN3AtyMP.js"),__vite__mapDeps([29,30,2,3,9,31]),import.meta.url),"./src/ui/components/demo/calculator/caculator.stories.tsx":async()=>t(()=>import("./caculator.stories-CURzWaOk.js"),__vite__mapDeps([32,2,3,30,9,31,33]),import.meta.url),"./src/ui/components/molecules/Pagination/Pagination.stories.tsx":async()=>t(()=>import("./Pagination.stories-BJ8xQIm6.js"),__vite__mapDeps([34,2,3,16,17,1,4,5,6,7,35]),import.meta.url),"./src/ui/components/utils/svg-icons/icons-grid.stories.tsx":async()=>t(()=>import("./icons-grid.stories-DLJA6POH.js"),__vite__mapDeps([36,2,3,4,5,37,19,7,38]),import.meta.url),"./src/ui/components/utils/svg-icons/icons.stories.tsx":async()=>t(()=>import("./icons.stories-BGMV8_Zv.js"),__vite__mapDeps([39,4,2,3,5,37,19,7]),import.meta.url)};async function D(o){return y[o]()}const{composeConfigs:I,PreviewWeb:v,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(o=[])=>{const _=await Promise.all([o.at(0)??t(()=>import("./entry-preview-BaNL7GuY.js"),__vite__mapDeps([40,3,41]),import.meta.url),o.at(1)??t(()=>import("./entry-preview-docs-Pyc01qTr.js"),__vite__mapDeps([42,43,3,5,44]),import.meta.url),o.at(2)??t(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([45,46]),import.meta.url),o.at(3)??t(()=>import("./preview-DYAuNTNU.js"),[],import.meta.url),o.at(4)??t(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),o.at(5)??t(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([47,44]),import.meta.url),o.at(6)??t(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),o.at(7)??t(()=>import("./preview-Cdum89jS.js"),[],import.meta.url),o.at(8)??t(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([48,44]),import.meta.url),o.at(9)??t(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),o.at(10)??t(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return I(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(D,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};