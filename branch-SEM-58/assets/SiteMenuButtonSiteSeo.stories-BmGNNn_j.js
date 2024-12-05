import{j as s}from"./jsx-runtime-DEdD30eg.js";import{c as v}from"./index-Dejnh_W_.js";import{I as f}from"./icons-BNj8Zi1j.js";import"./index-RYns6xqu.js";import"./iframe-B9wnqh-r.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const x="_icon_1ykva_103",k="_secondary_1ykva_146",b="_collapsed_1ykva_153",e={"text-paragraph":"_text-paragraph_1ykva_36","text-short-paragraph":"_text-short-paragraph_1ykva_42","text-long-paragraph":"_text-long-paragraph_1ykva_49","text-small-paragraph":"_text-small-paragraph_1ykva_56","text-large-paragraph":"_text-large-paragraph_1ykva_63","side-menu-buttons":"_side-menu-buttons_1ykva_77",icon:x,"side-menu-button-site-seo":"_side-menu-button-site-seo_1ykva_112",secondary:k,collapsed:b};function u({children:l,icon:y,color:a,variant:n="primary",path:g,basePath:_,onClick:h}){const S=v(e["side-menu-button-site-seo"],{[e["side-menu-button--primary"]]:n==="primary",[e["side-menu-button--secondary"]]:n==="secondary",[e.active]:_===g},a&&e[a]);return s.jsxs("button",{"data-testid":"side-menu-button-styles",className:S,onClick:h,children:[s.jsx(f,{src:y,size:"24px",className:e.icon}),l]})}u.__docgenInfo={description:"",methods:[],displayName:"SideMenuButtonSiteSeo",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},path:{required:!0,tsType:{name:"string"},description:""},basePath:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"ui/components/atoms/Side-Menu-Button-Site-Seo",component:u,argTypes:{onClick:{action:"click"}}},r={args:{children:"Site Configuration",color:"primary",icon:"site-configuration",variant:"secondary"}},t={args:{children:"SEO Settings",icon:"seo-settings",color:"primary",variant:"secondary"}};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Site Configuration',
    color: 'primary',
    icon: 'site-configuration',
    variant: 'secondary'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'SEO Settings',
    icon: 'seo-settings',
    color: 'primary',
    variant: 'secondary'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const B=["Site","Seo"];export{t as Seo,r as Site,B as __namedExportsOrder,w as default};
