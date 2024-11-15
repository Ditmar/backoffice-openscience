import{j as i}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";function N(x){const{children:y,variant:s="Normal",onClick:A,disabled:M}=x;return i.jsx("button",{className:`variable-button variable-button--${s}`,onClick:A,disabled:M??s==="Disable",children:i.jsx("span",{className:"variable-button__text",children:y})})}N.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable' | 'Normal'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"},{name:"literal",value:"'Normal'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const T={title:"ui/components/atoms/Danger-Button",component:N,argTypes:{variant:{control:"select",options:["Small","Medium","Big","Active","Disable","Normal"],defaultValue:"Normal"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},e={args:{children:"Danger button",variant:"Small"}},a={args:{children:"Danger button",variant:"Medium"}},r={args:{children:"Danger button",variant:"Big"}},n={args:{children:"Danger button",variant:"Active"}},t={args:{children:"Danger button",variant:"Disable",disabled:!0}};var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Small'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Medium'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Big'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,D,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Active'
  }
}`,...(h=(D=n.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var S,f,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Disable',
    disabled: true
  }
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const j=["Small","Medium","Big","Active","Disable"];export{n as Active,r as Big,t as Disable,a as Medium,e as Small,j as __namedExportsOrder,T as default};
