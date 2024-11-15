import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as _}from"./index-RYns6xqu.js";import{P as C}from"./Page-Label-C8mkB9cX.js";import{C as c}from"./Chevron-Button-BigETqlS.js";import T from"./angle-left-B1hLc53Q.js";import q from"./angle-right-DAeQ8TvP.js";import"./icons-DVOQf7hN.js";import"./iframe-NIVr9c5J.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const b="_pagination_cafj2_1",k={pagination:b};function y({currentPage:v=1,totalPages:o,onClick:a}){const[e,i]=_.useState(v),h=()=>{e>1&&(i(e-1),a&&a(e-1))},j=()=>{e<o&&(i(e+1),a&&a(e+1))};return r.jsxs("div",{className:`${k.pagination}`,children:[r.jsx(c,{icon:T,onClick:h}),r.jsx(C,{currentPage:e,totalPages:o}),r.jsx(c,{icon:q,onClick:j})]})}y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(page?: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Left' | 'Right'",elements:[{name:"literal",value:"'Left'"},{name:"literal",value:"'Right'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalPages:{required:!0,tsType:{name:"number"},description:""}}};const O={title:"ui/components/molecules/Pagination",component:y,argTypes:{onClick:{action:"clicked"}}},t={args:{currentPage:1,totalPages:5}},n={args:{currentPage:3,totalPages:5}},s={args:{currentPage:5,totalPages:5}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,l,d;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var f,P,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5
  }
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const V=["Default","MiddlePage","LastPage"];export{t as Default,s as LastPage,n as MiddlePage,V as __namedExportsOrder,O as default};
