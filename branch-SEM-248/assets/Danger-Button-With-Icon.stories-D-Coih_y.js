import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as j}from"./index-Dejnh_W_.js";import{I as q}from"./icons-DUdG5i3T.js";import r from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-DqHolT1I.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const R="_display_f49df_1",k="_primary_f49df_24",C="_secondary_f49df_28",w="_tertiary_f49df_32",W="_active_f49df_39",E="_disable_f49df_42",a={display:R,primary:k,secondary:C,tertiary:w,active:W,disable:E};function A(M){const{children:N,variant:e,onClick:I,icon:d}=M,T=j(a.display,{[a.primary]:e==="Small",[a.secondary]:e==="Medium",[a.tertiary]:e==="Big",[a.active]:e==="Active",[a.disable]:e==="Disable"});return c.jsxs("button",{className:T,onClick:I,children:[c.jsx("span",{className:a["add-button__text"],children:N}),d&&c.jsx(q,{"data-testid":"icon_add",src:d,className:a.icon_add})]})}A.__docgenInfo={description:"",methods:[],displayName:"DangerButtonWithIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"ui/components/atoms/Danger-Button-With-Icon",component:A,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},n={args:{children:"Danger button",variant:"Small",icon:r}},t={args:{children:"Danger button",variant:"Medium",icon:r}},i={args:{children:"Danger button",variant:"Big",icon:r}},s={args:{children:"Danger button",variant:"Active",icon:r}},o={args:{children:"Danger button",variant:"Disable",icon:r}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Small',
    icon: add
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Medium',
    icon: add
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,_,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Big',
    icon: add
  }
}`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var b,D,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Active',
    icon: add
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var S,B,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger button',
    variant: 'Disable',
    icon: add
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const Q=["Small","Medium","Big","Active","Disable"];export{s as Active,i as Big,o as Disable,t as Medium,n as Small,Q as __namedExportsOrder,P as default};
