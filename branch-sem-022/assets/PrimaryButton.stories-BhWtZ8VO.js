import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as x}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const k="_display_1ijpj_1",C="_primary_1ijpj_17",R="_secondary_1ijpj_21",T="_tertiary_1ijpj_25",q="_active_1ijpj_32",w="_disable_1ijpj_38",a={display:k,primary:C,secondary:R,tertiary:T,active:q,disable:w};function f(D){const{children:A,variant:r,onClick:M}=D,o=r==="Disable",N=x(a.display,{[a.primary]:r==="Small",[a.secondary]:r==="Medium",[a.tertiary]:r==="Big",[a.active]:r==="Active",[a.disable]:o});return c.jsx("button",{className:N,onClick:o?void 0:M,disabled:o,children:c.jsx("span",{className:"variable-button__text",children:A})})}f.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable' | 'Normal'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"},{name:"literal",value:"'Normal'"}]},description:""}}};const z={title:"ui/components/atoms/PrimaryButton",component:f,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},e={args:{children:"Primary button",variant:"Small"}},i={args:{children:"Primary button",variant:"Medium"}},t={args:{children:"Primary button",variant:"Big"}},s={args:{children:"Primary button",variant:"Active"}},n={args:{children:"Primary button",variant:"Disable"}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Small'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Medium'
  }
}`,...(y=(p=i.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var v,g,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Big'
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var _,j,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Active'
  }
}`,...(h=(j=s.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var P,S,B;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Disable'
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const F=["Small","Medium","Big","Active","Disable"];export{s as Active,t as Big,n as Disable,i as Medium,e as Small,F as __namedExportsOrder,z as default};
