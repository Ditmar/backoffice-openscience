import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";import{c as v}from"./index-Dejnh_W_.js";import{I as A}from"./icons-CZgRsnKg.js";import"./iframe-C1m4YTDz.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const T="_active_ijejm_136",q="_primary_ijejm_142",M="_secondary_ijejm_149",N="_icon_ijejm_156",e={"text-paragraph":"_text-paragraph_ijejm_43","text-short-paragraph":"_text-short-paragraph_ijejm_49","text-long-paragraph":"_text-long-paragraph_ijejm_56","text-small-paragraph":"_text-small-paragraph_ijejm_63","text-large-paragraph":"_text-large-paragraph_ijejm_70","side-menu-buttons":"_side-menu-buttons_ijejm_84","side-menu-button":"_side-menu-button_ijejm_84",active:T,primary:q,secondary:M,icon:N};function l({children:_,icon:y,color:n,variant:i="primary",path:t,basePath:g}){const[h,j]=b.useState(!1),x=()=>{j(!h),t&&(window.location.href=t)},f=v(e["side-menu-button"],{[e["side-menu-button--primary"]]:i==="primary",[e["side-menu-button--secondary"]]:i==="secondary",[e.active]:g===t},n&&e[n]);return s.jsxs("button",{"data-testid":"side-menu-button-styles",className:f,onClick:x,children:[s.jsx(A,{src:y,size:"24px",className:e.icon}),_]})}l.__docgenInfo={description:"",methods:[],displayName:"SideMenuButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},path:{required:!0,tsType:{name:"string"},description:""},basePath:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"ui/components/atoms/Side-Menu-Button",component:l,argTypes:{onClick:{action:"click"}}},r={args:{children:"Article Management",color:"primary",icon:"chat",variant:"secondary"}},a={args:{children:"Author Management",icon:"bibliographines",color:"primary",variant:"secondary"}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Article Management',
    color: 'primary',
    icon: 'chat',
    variant: 'secondary'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Author Management',
    icon: 'bibliographines',
    color: 'primary',
    variant: 'secondary'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Article","Author"];export{r as Article,a as Author,z as __namedExportsOrder,E as default};
