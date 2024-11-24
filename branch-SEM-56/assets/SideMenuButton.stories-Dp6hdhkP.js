import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as v}from"./index-RYns6xqu.js";import{c as I}from"./index-Dejnh_W_.js";import{I as T}from"./icons-5vBRGic2.js";import q from"./bibliographines-3v8wxzAf.js";import B from"./image-gallery-D7nLqPw8.js";import"./iframe-uFe4LS-N.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const N="_active_1t5bs_117",k="_primary_1t5bs_124",w="_secondary_1t5bs_134",C="_icon_1t5bs_144",e={"text-paragraph":"_text-paragraph_1t5bs_36","text-short-paragraph":"_text-short-paragraph_1t5bs_42","text-long-paragraph":"_text-long-paragraph_1t5bs_49","text-small-paragraph":"_text-small-paragraph_1t5bs_56","text-large-paragraph":"_text-large-paragraph_1t5bs_63","side-menu-button":"_side-menu-button_1t5bs_77",active:N,primary:k,secondary:w,icon:C};function u({children:y,icon:g,color:s,variant:n="primary",path:t,basePath:_}){const[b,h]=v.useState(!1),f=()=>{h(!b),t&&(window.location.href=t)},x=I(e["side-menu-button"],{[e["side-menu-button--primary"]]:n==="primary",[e["side-menu-button--secondary"]]:n==="secondary",[e.active]:_===t},s&&e[s]);return o.jsxs("button",{"data-testid":"side-menu-button-styles",className:x,onClick:f,children:[o.jsx(T,{src:g,size:"24px",className:e.icon}),y]})}u.__docgenInfo={description:"",methods:[],displayName:"SideMenuButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},path:{required:!0,tsType:{name:"string"},description:""},basePath:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P={title:"ui/components/atoms/sideMenu-button",component:u,argTypes:{onClick:{action:"click"}}},r={args:{children:"Bibliography",color:"primary",variant:"secondary",icon:q}},a={args:{children:"Image Gallery",color:"primary",variant:"secondary",icon:B}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Bibliography',
    color: 'primary',
    variant: 'secondary',
    icon: bibliography
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Image Gallery',
    color: 'primary',
    variant: 'secondary',
    icon: gallery
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["Bibliography","ImageGallery"];export{r as Bibliography,a as ImageGallery,V as __namedExportsOrder,P as default};
