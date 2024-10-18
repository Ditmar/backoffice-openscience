import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as s}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const T="_tag_oaxh3_1",N="_tag__label_oaxh3_8",j="_tag__button_oaxh3_14",R="_secondary_oaxh3_29",S="_tertiary_oaxh3_36",a={tag:T,tag__label:N,tag__button:j,secondary:R,tertiary:S};function g(h){const{children:v,variant:n,onClick:x}=h,C=s(a.tag,{[a.primary]:n==="primary",[a.secondary]:n==="secondary",[a.tertiary]:n==="tertiary"}),b=s(a.tag__label),f=s(a.tag__button);return o.jsxs("div",{className:C,children:[o.jsx("span",{className:b,children:v}),o.jsx("button",{className:f,onClick:x,children:"x"})]})}g.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"ui/components/atoms/tag",component:g,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{children:"Component",variant:"primary"}},e={args:{children:"Component",variant:"secondary"}},t={args:{children:"Component",variant:"tertiary"}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'primary'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'secondary'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var y,_,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Component',
    variant: 'tertiary'
  }
}`,...(u=(_=t.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};const P=["Primary","Secondary","Tertiary"];export{r as Primary,e as Secondary,t as Tertiary,P as __namedExportsOrder,E as default};
