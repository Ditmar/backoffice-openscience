import{j as s}from"./jsx-runtime-DEdD30eg.js";import{c as o}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const T="_tag_oaxh3_1",N="_tag__label_oaxh3_8",j="_tag__button_oaxh3_14",R="_secondary_oaxh3_29",S="_tertiary_oaxh3_36",a={tag:T,tag__label:N,tag__button:j,secondary:R,tertiary:S};function g(h){const{children:b,variant:n,onClick:v}=h,x=o(a.tag,{[a.primary]:n==="primary",[a.secondary]:n==="secondary",[a.tertiary]:n==="tertiary"}),C=o(a.tag__label),f=o(a.tag__button);return s.jsxs("div",{className:x,children:[s.jsx("span",{className:C,children:b}),s.jsx("button",{className:f,onClick:v,children:"x"})]})}g.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Enabled' | 'Disabled'",elements:[{name:"literal",value:"'Enabled'"},{name:"literal",value:"'Disabled'"}]},description:""}}};const w={title:"ui/components/atoms/tag",component:g,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{children:"Component",variant:"primary"}},e={args:{children:"Component",variant:"secondary"}},t={args:{children:"Component",variant:"tertiary"}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'primary'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'secondary'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var _,y,u;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'tertiary'
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const D=["Primary","Secondary","Tertiary"];export{r as Primary,e as Secondary,t as Tertiary,D as __namedExportsOrder,w as default};
