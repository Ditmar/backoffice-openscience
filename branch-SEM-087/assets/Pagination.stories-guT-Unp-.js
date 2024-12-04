import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as v}from"./index-RYns6xqu.js";import{P as C}from"./Page-Label-Cs7ClHmy.js";import{C as m}from"./Chevron-Button-BGcSNQLF.js";import N from"./angle-left-B1hLc53Q.js";import k from"./angle-right-DAeQ8TvP.js";import"./icons-CcHz9ql4.js";import"./iframe-BKex0GKY.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const S="_pagination_cafj2_1",T={pagination:S};function j({currentPage:_=1,totalPages:i,onClick:r}){const[e,c]=v.useState(_),b=()=>{if(e>1){const a=e-1;c(a),r&&r(a)}},h=()=>{if(e<i){const a=e+1;c(a),r&&r(a)}};return t.jsxs("div",{className:`${T.pagination}`,children:[t.jsx(m,{icon:N,onClick:b}),t.jsx(C,{currentPage:e,totalPages:i}),t.jsx(m,{icon:k,onClick:h})]})}j.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalPages:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageNumber: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageNumber"}],return:{name:"void"}}},description:""}}};const V={title:"ui/components/molecules/Pagination",component:j,argTypes:{onClick:{action:"clicked"}}},n={args:{currentPage:1,totalPages:5}},s={args:{currentPage:3,totalPages:5}},o={args:{currentPage:5,totalPages:5}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,l,P;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5
  }
}`,...(P=(l=s.parameters)==null?void 0:l.docs)==null?void 0:P.source}}};var f,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const $=["Default","MiddlePage","LastPage"];export{n as Default,o as LastPage,s as MiddlePage,$ as __namedExportsOrder,V as default};
