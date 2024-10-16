import{j as m}from"./jsx-runtime-DEdD30eg.js";import{r as q}from"./index-RYns6xqu.js";import{c as A}from"./index-Dejnh_W_.js";import{I as x}from"./icons-C45oln94.js";import{a as M,b as N}from"./author-management-M8QCXWcl.js";import"./index-rNTiGNI1.js";const T="_active_earqr_54",I="_primary_earqr_60",R="_secondary_earqr_67",S="_icon_earqr_74",e={"side-menu-buttons":"_side-menu-buttons_earqr_2","side-menu-button":"_side-menu-button_earqr_2",active:T,primary:I,secondary:R,icon:S};function g({children:t,icon:f,color:n,variant:s="primary",onClick:o}){const[i,v]=q.useState(!1),b=()=>{v(!i),o&&o()},c=f??(t==="Article Management"?M:N),h=A(e["side-menu-button"],{[e["side-menu-button--primary"]]:s==="primary",[e["side-menu-button--secondary"]]:s==="secondary",[e.active]:i},n&&e[n]);return m.jsxs("button",{"data-testid":"side-menu-button-styles",className:h,onClick:b,children:[c&&m.jsx(x,{src:c,size:"24px",className:e.icon}),t]})}g.__docgenInfo={description:"",methods:[],displayName:"SideMenuButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"ui/components/atoms/side-menu-button",component:g,argTypes:{onClick:{action:"click"}}},r={args:{children:"Article Management",color:"primary",variant:"secondary"}},a={args:{children:"Author Management",color:"primary",variant:"secondary"}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Article Management',
    color: 'primary',
    variant: 'secondary'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,y,_;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Author Management',
    color: 'primary',
    variant: 'secondary'
  }
}`,...(_=(y=a.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const O=["Article","Author"];export{r as Article,a as Author,O as __namedExportsOrder,z as default};
