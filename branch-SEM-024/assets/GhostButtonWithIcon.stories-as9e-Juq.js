import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as C}from"./index-Dejnh_W_.js";import{I as R}from"./icons-W3GiYB4Z.js";import r from"./add-BNW0LZHy.js";import"./index-RYns6xqu.js";import"./iframe-CsYnnMPx.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const w="_display_1kx2k_2",W="_primary_1kx2k_25",A="_secondary_1kx2k_29",D="_tertiary_1kx2k_32",a={display:w,primary:W,secondary:A,tertiary:D};function N(S){const{children:I,variant:e,onClick:T,display:j,icon:d}=S,q=C(a.display,{[a.primary]:e==="small",[a.secondary]:e==="medium",[a.tertiary]:e==="large",[a.active]:e==="active",[a.disabled]:e==="disabled"});return c.jsxs("button",{className:q,onClick:e!=="disabled"?T:void 0,disabled:e==="disabled",style:{display:j},children:[c.jsx("span",{className:a["add-button__text"],children:I}),d&&c.jsx(R,{"data-testid":"icon_add",src:d,className:`${a.icon_add}`})]})}N.__docgenInfo={description:"",methods:[],displayName:"GhostButtonWithIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'active' | 'disabled'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'active'"},{name:"literal",value:"'disabled'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},display:{required:!0,tsType:{name:"string"},description:""}}};const J={title:"ui/components/atoms/Ghost-Button-With-Icon",component:N,argTypes:{onClick:{action:"click"},variant:{option:["small","mediun","large","active","disabled"],control:{type:"select"}}}},t={args:{children:"Ghost Button",variant:"small",icon:r}},s={args:{children:"Ghost Button",variant:"medium",icon:r}},n={args:{children:"Ghost Button",variant:"large",icon:r}},i={args:{children:"Ghost Button",variant:"active",icon:r}},o={args:{children:"Ghost Button",variant:"disabled",icon:r}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'small',
    icon: add
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'medium',
    icon: add
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,y,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'large',
    icon: add
  }
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var b,k,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'active',
    icon: add
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,f,x;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'disabled',
    icon: add
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const K=["Small","Medium","Large","Active","Disabled"];export{i as Active,o as Disabled,n as Large,s as Medium,t as Small,K as __namedExportsOrder,J as default};
