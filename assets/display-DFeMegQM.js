import{j as c}from"./jsx-runtime-DEdD30eg.js";import{g as l}from"./index-RYns6xqu.js";var y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var i={}.hasOwnProperty;function e(){for(var r="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(r=p(r,o(s)))}return r}function o(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return e.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var t="";for(var s in r)i.call(r,s)&&r[s]&&(t=p(t,s));return t}function p(r,t){return t?r?r+" "+t:r+t:r}a.exports?(e.default=e,a.exports=e):window.classNames=e})()})(y);var u=y.exports;const m=l(u),d="_display_1p3v5_1",f="_primary_1p3v5_23",v="_secondary_1p3v5_27",_="_tertiary_1p3v5_31",n={display:d,primary:f,secondary:v,tertiary:_};function x(a){const{display:i,variant:e}=a,o=m(n.display,{[n.primary]:e==="primary",[n.secondary]:e==="secondary",[n.tertiary]:e==="tertiary"});return c.jsx("div",{role:"status",className:o,children:i})}x.__docgenInfo={description:"",methods:[],displayName:"Display",props:{display:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""}}};export{x as D};