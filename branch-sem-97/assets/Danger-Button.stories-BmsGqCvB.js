import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as C}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const R="_display_d90r6_1",j="_primary_d90r6_17",T="_secondary_d90r6_21",q="_tertiary_d90r6_25",w="_active_d90r6_32",E="_disable_d90r6_38",a={display:R,primary:j,secondary:T,tertiary:q,active:w,disable:E};function A(M){const{children:N,variant:e,onClick:x}=M,o=e==="Disable",k=C(a.display,{[a.primary]:e==="Small",[a.secondary]:e==="Medium",[a.tertiary]:e==="Big",[a.active]:e==="Active",[a.disable]:o});return c.jsx("button",{className:k,onClick:o?void 0:x,disabled:o,children:c.jsx("span",{className:"variable-button__text",children:N})})}A.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable' | 'Normal'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"},{name:"literal",value:"'Normal'"}]},description:""}}};const F={title:"ui/components/atoms/Danger-Button",component:A,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},r={args:{children:"Danger button",variant:"Small"}},n={args:{children:"Danger button",variant:"Medium"}},t={args:{children:"Danger button",variant:"Big"}},s={args:{children:"Danger button",variant:"Active"}},i={args:{children:"Danger button",variant:"Disable"}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Small'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Medium'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Big'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,D,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Active'
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var S,B,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Disable'
  }
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const G=["Small","Medium","Big","Active","Disable"];export{s as Active,t as Big,i as Disable,n as Medium,r as Small,G as __namedExportsOrder,F as default};
