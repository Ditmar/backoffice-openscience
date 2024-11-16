import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as T}from"./index-Dejnh_W_.js";import{I as q}from"./icons-j3Mwy2py.js";import r from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-CEBu-Qoa.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const R="_display_1cmjm_1",k="_primary_1cmjm_24",C="_secondary_1cmjm_28",w="_tertiary_1cmjm_32",W="_active_1cmjm_39",E="_disable_1cmjm_42",a={display:R,primary:k,secondary:C,tertiary:w,active:W,disable:E};function x(A){const{children:M,variant:e,onClick:N,icon:d}=A,I=T(a.display,{[a.primary]:e==="Small",[a.secondary]:e==="Medium",[a.tertiary]:e==="Big",[a.active]:e==="Active",[a.disable]:e==="Disable"});return c.jsxs("button",{className:I,onClick:N,children:[c.jsx("span",{className:a["add-button__text"],children:M}),d&&c.jsx(q,{"data-testid":"icon_add",src:d,className:a.icon_add})]})}x.__docgenInfo={description:"",methods:[],displayName:"DangerButtonWithIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"ui/components/atoms/Danger-Button-With-Icon",component:x,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},n={args:{children:"Danger button",variant:"Small",icon:r}},t={args:{children:"Danger button",variant:"Medium",icon:r}},i={args:{children:"Danger button",variant:"Big",icon:r}},s={args:{children:"Danger button",variant:"Active",icon:r}},o={args:{children:"Danger button",variant:"Disable",icon:r}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Small',
    icon: add
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Medium',
    icon: add
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,_,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Big',
    icon: add
  }
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var D,h,f;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Active',
    icon: add
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,j,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Disable',
    icon: add
  }
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Q=["Small","Medium","Big","Active","Disable"];export{s as Active,i as Big,o as Disable,t as Medium,n as Small,Q as __namedExportsOrder,P as default};
