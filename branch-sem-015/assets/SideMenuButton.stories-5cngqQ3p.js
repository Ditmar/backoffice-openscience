import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";import{c as j}from"./index-Dejnh_W_.js";import{I as A}from"./icons-DjdCnBfM.js";import"./iframe-BMvUL7B1.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const T="_active_1rjlv_129",q="_primary_1rjlv_135",M="_secondary_1rjlv_142",N="_icon_1rjlv_149",e={"text-paragraph":"_text-paragraph_1rjlv_36","text-short-paragraph":"_text-short-paragraph_1rjlv_42","text-long-paragraph":"_text-long-paragraph_1rjlv_49","text-small-paragraph":"_text-small-paragraph_1rjlv_56","text-large-paragraph":"_text-large-paragraph_1rjlv_63","side-menu-buttons":"_side-menu-buttons_1rjlv_77","side-menu-button":"_side-menu-button_1rjlv_77",active:T,primary:q,secondary:M,icon:N};function u({children:_,icon:y,color:n,variant:s="primary",path:t,basePath:g}){const[h,v]=b.useState(!1),x=()=>{v(!h),t&&(window.location.href=t)},f=j(e["side-menu-button"],{[e["side-menu-button--primary"]]:s==="primary",[e["side-menu-button--secondary"]]:s==="secondary",[e.active]:g===t},n&&e[n]);return o.jsxs("button",{"data-testid":"side-menu-button-styles",className:f,onClick:x,children:[o.jsx(A,{src:y,size:"24px",className:e.icon}),_]})}u.__docgenInfo={description:"",methods:[],displayName:"SideMenuButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},path:{required:!0,tsType:{name:"string"},description:""},basePath:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"ui/components/atoms/Side-Menu-Button",component:u,argTypes:{onClick:{action:"click"}}},r={args:{children:"Article Management",color:"primary",icon:"chat",variant:"secondary"}},a={args:{children:"Author Management",icon:"bibliographines",color:"primary",variant:"secondary"}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Article Management',
    color: 'primary',
    icon: 'chat',
    variant: 'secondary'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Author Management',
    icon: 'bibliographines',
    color: 'primary',
    variant: 'secondary'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const z=["Article","Author"];export{r as Article,a as Author,z as __namedExportsOrder,E as default};
