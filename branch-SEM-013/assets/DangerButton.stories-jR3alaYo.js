import{j as s}from"./jsx-runtime-DEdD30eg.js";import{c as S}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const r={"button-danger":"_button-danger_a2ovf_1","button-variant-danger":"_button-variant-danger_a2ovf_13","button-danger--danger-primary":"_button-danger--danger-primary_a2ovf_32","button-danger--danger-secondary":"_button-danger--danger-secondary_a2ovf_35","button-danger--danger-tertiary":"_button-danger--danger-tertiary_a2ovf_38"};function f({children:h,variant:a="danger-primary",onClick:x}){const N=S(r["button-danger"],{[r["button-danger--danger-primary"]]:a==="danger-primary",[r["button-danger--danger-secondary"]]:a==="danger-secondary",[r["button-danger--danger-tertiary"]]:a==="danger-tertiary",[r["button-danger--danger-disabled"]]:a==="danger-disabled"});return s.jsx("button",{className:N,onClick:x,children:s.jsx("span",{className:r["button-variant-danger"],children:h})})}f.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'danger-primary' | 'danger-secondary' | 'danger-tertiary' | 'danger-disabled'",elements:[{name:"literal",value:"'danger-primary'"},{name:"literal",value:"'danger-secondary'"},{name:"literal",value:"'danger-tertiary'"},{name:"literal",value:"'danger-disabled'"}]},description:"",defaultValue:{value:"'danger-primary'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={title:"ui/components/danger-button",component:f,argTypes:{onClick:{action:"clicked"},variant:["danger-primary","danger-secondary","danger-tertiary","danger-disabled"]}},e={args:{children:"+",variant:"danger-primary"}},n={args:{children:"+",variant:"danger-secondary"}},t={args:{children:"+",variant:"danger-tertiary"}},d={args:{children:"+",variant:"danger-disabled"}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-primary'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-secondary'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,p,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-tertiary'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var b,v,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-disabled'
  }
}`,...(_=(v=d.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const k=["Primary","Secondary","Tertiary","Disabled"];export{d as Disabled,e as Primary,n as Secondary,t as Tertiary,k as __namedExportsOrder,D as default};
