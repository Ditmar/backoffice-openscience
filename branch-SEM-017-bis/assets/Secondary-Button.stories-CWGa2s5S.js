import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as q}from"./index-Dejnh_W_.js";import{I as R}from"./icons-DeNjmB9d.js";import r from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-BsInzRq3.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const k="_display_10xj3_1",C="_primary_10xj3_24",w="_secondary_10xj3_28",I="_tertiary_10xj3_32",E="_active_10xj3_39",O="_disable_10xj3_42",a={display:k,primary:C,secondary:w,tertiary:I,active:E,disable:O};function A(D){const{children:M,variant:e,onClick:N,icon:d}=D,T=q(a.display,{[a.primary]:e==="Small",[a.secondary]:e==="Medium",[a.tertiary]:e==="Big",[a.active]:e==="Active",[a.disable]:e==="Disabled"});return o.jsxs("button",{className:T,onClick:N,children:[o.jsx("span",{className:a["add-button__text"],children:M}),d&&o.jsx(R,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}A.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disabled'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disabled'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"ui/components/atoms/secundary-button",component:A,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},n={args:{children:"Secundary button",variant:"Small",icon:r}},t={args:{children:"Secundary button",variant:"Medium",icon:r}},i={args:{children:"Secundary button",variant:"Big",icon:r}},s={args:{children:"Secundary button",variant:"Active",icon:r}},c={args:{children:"Secundary button",variant:"Disabled",icon:r}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Small',
    icon: add
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,y,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Medium',
    icon: add
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,_,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Big',
    icon: add
  }
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var S,h,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Active',
    icon: add
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,j,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Disabled',
    icon: add
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Q=["Small","Medium","Big","Active","Disable"];export{s as Active,i as Big,c as Disable,t as Medium,n as Small,Q as __namedExportsOrder,P as default};
