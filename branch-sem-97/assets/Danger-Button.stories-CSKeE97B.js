import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as x}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const k="_display_w2cqr_1",C="_primary_w2cqr_17",R="_secondary_w2cqr_21",T="_tertiary_w2cqr_25",j="_active_w2cqr_32",E="_disable_w2cqr_38",e={display:k,primary:C,secondary:R,tertiary:T,active:j,disable:E};function q(N){const{children:w,variant:a,onClick:A}=N,o=a==="Disable",M=x(e.display,{[e.primary]:a==="Small",[e.secondary]:a==="Medium",[e.tertiary]:a==="Big",[e.active]:a==="Active",[e.disable]:o});return c.jsx("button",{className:M,onClick:o?void 0:A,disabled:o,children:c.jsx("span",{className:"variable-button__text",children:w})})}q.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable' | 'Normal'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"},{name:"literal",value:"'Normal'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const z={title:"ui/components/atoms/Danger-Button",component:q,argTypes:{variant:{control:"select",options:["Small","Medium","Big","Active","Disable","Normal"],defaultValue:"Normal"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},r={args:{children:"Danger button",variant:"Small"}},t={args:{children:"Danger button",variant:"Medium"}},n={args:{children:"Danger button",variant:"Big"}},s={args:{children:"Danger button",variant:"Active"}},i={args:{children:"Danger button",variant:"Disable",disabled:!0}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Small'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Medium'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Big'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,D,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Active'
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var S,f,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Disable',
    disabled: true
  }
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const F=["Small","Medium","Big","Active","Disable"];export{s as Active,n as Big,i as Disable,t as Medium,r as Small,F as __namedExportsOrder,z as default};
