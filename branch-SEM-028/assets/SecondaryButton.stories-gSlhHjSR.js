import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as j}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const q="_display_12w71_1",B="_primary_12w71_23",A="_secondary_12w71_27",D="_tertiary_12w71_31",E="_active_12w71_38",L="_disabled_12w71_41",a={display:q,primary:B,secondary:A,tertiary:D,active:E,disabled:L};function x(N){const{children:k,variant:e,onClick:C,display:R}=N,T=j(a.display,{[a.primary]:e==="small",[a.secondary]:e==="medium",[a.tertiary]:e==="large",[a.active]:e==="active",[a.disabled]:e==="disabled"});return o.jsx("button",{className:T,onClick:e!=="disabled"?C:void 0,disabled:e==="disabled",style:{display:R},children:o.jsx("span",{className:a["add-button__text"],children:k})})}x.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'active' | 'disabled'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'active'"},{name:"literal",value:"'disabled'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},display:{required:!0,tsType:{name:"string"},description:""}}};const z={title:"ui/components/atoms/SecondaryButton",component:x,argTypes:{onClick:{action:"click"},variant:{options:["small","medium","large","active","disabled"],control:{type:"select"}}}},r={args:{children:"Secondary button",variant:"small"}},t={args:{children:"Secondary button",variant:"medium"}},s={args:{children:"Secondary button",variant:"large"}},n={args:{children:"Secondary button",variant:"active"}},i={args:{children:"Secondary button",variant:"disabled"}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: 'small'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: 'medium'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,v,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: 'large'
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,_,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: 'active'
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var h,f,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: 'disabled'
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const F=["Small","Medium","Large","Active","Disabled"];export{n as Active,i as Disabled,s as Large,t as Medium,r as Small,F as __namedExportsOrder,z as default};
