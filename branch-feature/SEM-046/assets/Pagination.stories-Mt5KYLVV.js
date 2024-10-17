import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as _}from"./index-RYns6xqu.js";import{P as C}from"./Page-Label-BNnF-2vF.js";import{C as c}from"./Chevron-Button-CcVf0zPD.js";import{a as T,b as q}from"./angle-right-CAkqMfmj.js";import"./index-rNTiGNI1.js";const k="_pagination_cafj2_1",L={pagination:k};function v({currentPage:y=1,totalPages:o,onClick:a}){const[e,i]=_.useState(y),h=()=>{e>1&&(i(e-1),a&&a(e-1))},j=()=>{e<o&&(i(e+1),a&&a(e+1))};return r.jsxs("div",{className:`${L.pagination}`,children:[r.jsx(c,{icon:T,onClick:h}),r.jsx(C,{currentPage:e,totalPages:o}),r.jsx(c,{icon:q,onClick:j})]})}v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Left' | 'Right'",elements:[{name:"literal",value:"'Left'"},{name:"literal",value:"'Right'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalPages:{required:!0,tsType:{name:"number"},description:""}}};const D={title:"ui/components/molecules/Pagination",component:v,argTypes:{onClick:{action:"clicked"}}},t={args:{currentPage:1,totalPages:5}},n={args:{currentPage:3,totalPages:5}},s={args:{currentPage:5,totalPages:5}};var u,g,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,P,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5
  }
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const I=["Default","MiddlePage","LastPage"];export{t as Default,s as LastPage,n as MiddlePage,I as __namedExportsOrder,D as default};
