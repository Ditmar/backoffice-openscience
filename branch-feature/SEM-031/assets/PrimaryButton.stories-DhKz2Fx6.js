import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as T}from"./index-Dejnh_W_.js";import{I as j,a as e}from"./add-C22hhRSc.js";import"./index-RYns6xqu.js";import"./index-rNTiGNI1.js";const R="_display_hx2qp_1",k="_primary_hx2qp_24",C="_secondary_hx2qp_28",w="_tertiary_hx2qp_32",I="_active_hx2qp_39",E="_disable_hx2qp_42",a={display:R,primary:k,secondary:C,tertiary:w,active:I,disable:E};function B(A){const{children:D,variant:r,onClick:M,icon:d}=A,N=T(a.display,{[a.primary]:r==="Small",[a.secondary]:r==="Medium",[a.tertiary]:r==="Big",[a.active]:r==="Active",[a.disable]:r==="Disable"});return c.jsxs("button",{className:N,onClick:M,children:[c.jsx("span",{className:a["add-button__text"],children:D}),d&&c.jsx(j,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}B.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Big' | 'Active' | 'Disable'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Big'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disable'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!0,tsType:{name:"string"},description:""}}};const H={title:"ui/components/atoms/Primary-Button",component:B,argTypes:{onClick:{action:"click"},variant:["Small","Medium","Big","Active","Disable"]}},i={args:{children:"Primary button",variant:"Small",icon:e}},n={args:{children:"Primary button",variant:"Medium",icon:e}},t={args:{children:"Primary button",variant:"Big",icon:e}},s={args:{children:"Primary button",variant:"Active",icon:e}},o={args:{children:"Primary button",variant:"Disable",icon:e}};var m,l,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Small',
    icon: add
  }
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,f,q;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'Disable',
    icon: add
  }
}`,...(q=(f=o.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const J=["Small","Medium","Big","Active","Disable"];export{s as Active,t as Big,o as Disable,n as Medium,i as Small,J as __namedExportsOrder,H as default};
