import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as x}from"./Page-Label-BNnF-2vF.js";import{C as s}from"./Chevron-Button-CcVf0zPD.js";import{a as j,b as v}from"./angle-right-CAkqMfmj.js";import"./index-RYns6xqu.js";import"./index-rNTiGNI1.js";const _="_pagination_cafj2_1",h={pagination:_};function P({currentPage:f,totalPages:y,onClick:n}){return e.jsxs("div",{className:`${h.pagination}`,children:[e.jsx(s,{icon:j,onClick:n}),e.jsx(x,{currentPage:f,totalPages:y}),e.jsx(s,{icon:v,onClick:n})]})}P.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Left' | 'Right'",elements:[{name:"literal",value:"'Left'"},{name:"literal",value:"'Right'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""}}};const S={title:"ui/components/molecules/Pagination",component:P,argTypes:{onClick:{action:"clicked"}}},a={args:{currentPage:1,totalPages:5}},r={args:{currentPage:3,totalPages:5}},t={args:{currentPage:5,totalPages:5}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var g,m,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Default","MiddlePage","LastPage"];export{a as Default,t as LastPage,r as MiddlePage,k as __namedExportsOrder,S as default};
