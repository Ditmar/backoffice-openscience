import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as k}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const C="_display_prqug_1",R="_primary_prqug_17",j="_secondary_prqug_21",T="_tertiary_prqug_25",w="_active_prqug_32",E="_disable_prqug_38",e={display:C,primary:R,secondary:j,tertiary:T,active:w,disable:E};function q(A){const{children:M,variant:a,onClick:x}=A,o=a==="Disable",N=k(e.display,{[e.primary]:a==="Small",[e.secondary]:a==="Medium",[e.tertiary]:a==="Big",[e.active]:a==="Active",[e.disable]:o});return c.jsx("button",{className:N,onClick:o?void 0:x,disabled:o,children:c.jsx("span",{className:"variable-button__text",children:M})})}q.__docgenInfo={description:"",methods:[],displayName:"DangerButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""}}};const F={title:"ui/components/atoms/Danger-Button",component:q,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},r={args:{children:"Danger button",variant:"Small"}},n={args:{children:"Danger button",variant:"Medium"}},t={args:{children:"Danger button",variant:"Big"}},s={args:{children:"Danger button",variant:"Active"}},i={args:{children:"Danger button",variant:"Disable"}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
