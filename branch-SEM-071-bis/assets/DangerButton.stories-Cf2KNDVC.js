import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as S}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const r={"button-danger":"_button-danger_ydrnp_1","button-variant-danger":"_button-variant-danger_ydrnp_13","button-danger--danger-primary":"_button-danger--danger-primary_ydrnp_36","button-danger--danger-secondary":"_button-danger--danger-secondary_ydrnp_42","button-danger--danger-tertiary":"_button-danger--danger-tertiary_ydrnp_48","button-danger--danger-disabled":"_button-danger--danger-disabled_ydrnp_54"};function f({children:x,variant:a="danger-primary",onClick:D}){const s=a==="danger-disabled",N=S(r["button-danger"],{[r["button-danger--danger-primary"]]:a==="danger-primary",[r["button-danger--danger-secondary"]]:a==="danger-secondary",[r["button-danger--danger-tertiary"]]:a==="danger-tertiary",[r["button-danger--danger-disabled"]]:s});return o.jsx("button",{className:N,onClick:s?void 0:D,disabled:s,children:o.jsx("span",{className:r["button-variant-danger"],children:x})})}f.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'danger-primary' | 'danger-secondary' | 'danger-tertiary' | 'danger-disabled'",elements:[{name:"literal",value:"'danger-primary'"},{name:"literal",value:"'danger-secondary'"},{name:"literal",value:"'danger-tertiary'"},{name:"literal",value:"'danger-disabled'"}]},description:"",defaultValue:{value:"'danger-primary'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"ui/components/atoms/DangerButton",component:f,argTypes:{onClick:{action:"clicked"},variant:["danger-primary","danger-secondary","danger-tertiary","danger-disabled"]}},e={args:{children:"+",variant:"danger-primary"}},n={args:{children:"+",variant:"danger-secondary"}},t={args:{children:"+",variant:"danger-tertiary"}},d={args:{children:"+",variant:"danger-disabled"}};var i,c,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-primary'
  }
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-secondary'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,y,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-tertiary'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var _,v,h;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'danger-disabled'
  }
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const C=["Primary","Secondary","Tertiary","Disabled"];export{d as Disabled,e as Primary,n as Secondary,t as Tertiary,C as __namedExportsOrder,k as default};
