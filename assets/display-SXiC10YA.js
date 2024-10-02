import{r as f,g as d}from"./index-RYns6xqu.js";var y={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=f,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,O=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function c(o,e,n){var s,a={},r=null,t=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(t=e.ref);for(s in e)x.call(e,s)&&!j.hasOwnProperty(s)&&(a[s]=e[s]);if(o&&o.defaultProps)for(s in e=o.defaultProps,e)a[s]===void 0&&(a[s]=e[s]);return{$$typeof:_,type:o,key:r,ref:t,props:a,_owner:O.current}}l.Fragment=v;l.jsx=c;l.jsxs=c;y.exports=l;var E=y.exports,u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var e={}.hasOwnProperty;function n(){for(var r="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(r=a(r,s(i)))}return r}function s(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var t="";for(var i in r)e.call(r,i)&&r[i]&&(t=a(t,i));return t}function a(r,t){return t?r?r+" "+t:r+t:r}o.exports?(n.default=n,o.exports=n):window.classNames=n})()})(u);var S=u.exports;const h=d(S),N="_display_1p3v5_1",R="_primary_1p3v5_23",b="_secondary_1p3v5_27",w="_tertiary_1p3v5_31",p={display:N,primary:R,secondary:b,tertiary:w};function D(o){const{display:e,variant:n}=o,s=h(p.display,{[p.primary]:n==="primary",[p.secondary]:n==="secondary",[p.tertiary]:n==="tertiary"});return E.jsx("div",{role:"status",className:s,children:e})}D.__docgenInfo={description:"",methods:[],displayName:"Display",props:{display:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""}}};export{D,E as j};
