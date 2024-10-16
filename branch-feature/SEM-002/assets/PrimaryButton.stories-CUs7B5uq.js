import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as j}from"./index-Dejnh_W_.js";import{I as q,a as e}from"./add-DA_j7q3A.js";import"./index-RYns6xqu.js";import"./index-rNTiGNI1.js";const R="_display_18vgx_1",k="_primary_18vgx_24",C="_secondary_18vgx_28",w="_tertiary_18vgx_32",I="_active_18vgx_39",E="_disable_18vgx_42",a={display:R,primary:k,secondary:C,tertiary:w,active:I,disable:E};function A(D){const{children:M,variant:r,onClick:N,icon:d}=D,T=j(a.display,{[a.primary]:r==="Small",[a.secondary]:r==="Medium",[a.tertiary]:r==="Big",[a.active]:r==="Active",[a.disable]:r==="Disable"});return c.jsxs("button",{className:T,onClick:N,children:[c.jsx("span",{className:a["add-button__text"],children:M}),d&&c.jsx(q,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}A.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!0,tsType:{name:"string"},description:""}}};const H={title:"ui/components/atoms/Primary-Button",component:A,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},i={args:{children:"Primary button",variant:"Small",icon:e}},n={args:{children:"Primary button",variant:"Medium",icon:e}},t={args:{children:"Primary button",variant:"Big",icon:e}},s={args:{children:"Primary button",variant:"Active",icon:e}},o={args:{children:"Primary button",variant:"Disable",icon:e}};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Small',
    icon: add
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,y,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Medium',
    icon: add
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,_,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Big',
    icon: add
  }
}`,...(b=(_=t.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,x,P;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Active',
    icon: add
  }
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,f,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Disable',
    icon: add
  }
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const J=["Small","Medium","Big","Active","Disable"];export{s as Active,t as Big,o as Disable,n as Medium,i as Small,J as __namedExportsOrder,H as default};
