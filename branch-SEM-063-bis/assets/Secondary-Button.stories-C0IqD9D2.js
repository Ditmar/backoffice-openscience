import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as j}from"./index-Dejnh_W_.js";import{I as q}from"./icons-BU89v_fK.js";import r from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-Bq1uIsii.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const R="_display_1uyzn_1",k="_primary_1uyzn_24",C="_secondary_1uyzn_28",w="_tertiary_1uyzn_32",I="_active_1uyzn_39",E="_disable_1uyzn_42",a={display:R,primary:k,secondary:C,tertiary:w,active:I,disable:E};function D(M){const{children:N,variant:e,onClick:z,icon:d}=M,T=j(a.display,{[a.primary]:e==="Small",[a.secondary]:e==="Medium",[a.tertiary]:e==="Big",[a.active]:e==="Active",[a.disable]:e==="Disabled"});return o.jsxs("button",{className:T,onClick:z,children:[o.jsx("span",{className:a["add-button__text"],children:N}),d&&o.jsx(q,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}D.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disabled'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disabled'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"ui/components/atoms/secundary-button",component:D,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},n={args:{children:"Secundary button",variant:"Small",icon:r}},t={args:{children:"Secundary button",variant:"Medium",icon:r}},i={args:{children:"Secundary button",variant:"Big",icon:r}},s={args:{children:"Secundary button",variant:"Active",icon:r}},c={args:{children:"Primary button",variant:"Disabled",icon:r}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var S,h,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Secundary button',
    variant: 'Active',
    icon: add
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var B,x,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Disabled',
    icon: add
  }
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Q=["Small","Medium","Big","Active","Disable"];export{s as Active,i as Big,c as Disable,t as Medium,n as Small,Q as __namedExportsOrder,L as default};
