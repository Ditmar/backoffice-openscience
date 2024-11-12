import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as j}from"./index-Dejnh_W_.js";import{I as q}from"./icons-DXqwFBWd.js";import e from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-CzkFR8jy.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const R="_display_18vgx_1",k="_primary_18vgx_24",C="_secondary_18vgx_28",w="_tertiary_18vgx_32",I="_active_18vgx_39",E="_disable_18vgx_42",a={display:R,primary:k,secondary:C,tertiary:w,active:I,disable:E};function A(D){const{children:M,variant:r,onClick:N,icon:d}=D,T=j(a.display,{[a.primary]:r==="Small",[a.secondary]:r==="Medium",[a.tertiary]:r==="Big",[a.active]:r==="Active",[a.disable]:r==="Disable"});return c.jsxs("button",{className:T,onClick:N,children:[c.jsx("span",{className:a["add-button__text"],children:M}),d&&c.jsx(q,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}A.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"ui/components/atoms/Primary-Button",component:A,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},i={args:{children:"Primary button",variant:"Small",icon:e}},t={args:{children:"Primary button",variant:"Medium",icon:e}},n={args:{children:"Primary button",variant:"Big",icon:e}},s={args:{children:"Primary button",variant:"Active",icon:e}},o={args:{children:"Primary button",variant:"Disable",icon:e}};var m,l,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Small',
    icon: add
  }
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Medium',
    icon: add
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,_,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Big',
    icon: add
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,x,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Active',
    icon: add
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var P,S,B;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Disable',
    icon: add
  }
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const Q=["Small","Medium","Big","Active","Disable"];export{s as Active,n as Big,o as Disable,t as Medium,i as Small,Q as __namedExportsOrder,L as default};
