import{j as k}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const e={"ghost-button":"_ghost-button_113y3_1","ghost-button--primary":"_ghost-button--primary_113y3_14","ghost-button--disabled":"_ghost-button--disabled_113y3_17","ghost-button--small":"_ghost-button--small_113y3_31","ghost-button--medium":"_ghost-button--medium_113y3_36","ghost-button--large":"_ghost-button--large_113y3_41"};function z({ghostbutton:S,variant:x,size:T="medium",disabled:t=!1,onClick:q}){const j=[e["ghost-button"],e[`ghost-button--${x}`],e[`ghost-button--${T}`],t?e["ghost-button--disabled"]:""].join(" ");return k.jsx("button",{"data-testid":"ghost-button",className:j,onClick:t?void 0:q,disabled:t,tabIndex:t?-1:0,children:S})}z.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{ghostbutton:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const G={title:"ui/components/atoms/GhostButton",component:z,argTypes:{onClick:{action:"click"},variant:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:["small","medium","large"]}},disabled:{control:"boolean"},ghostbutton:{control:"text"}},args:{variant:"primary",size:"medium",disabled:!1,ghostbutton:"Ghost Button"}},a={args:{ghostbutton:"Primary Button",variant:"primary",size:"medium",disabled:!1}},s={args:{ghostbutton:"Secondary Button",variant:"secondary",size:"medium",disabled:!1}},r={args:{ghostbutton:"Small Button",variant:"primary",size:"small",disabled:!1}},o={args:{ghostbutton:"Large Button",variant:"primary",size:"large",disabled:!1}},n={args:{ghostbutton:"Disabled Button",variant:"primary",size:"medium",disabled:!0}};var i,l,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,p,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,_,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const L=["Primary","Secondary","Small","Large","Disabled"];export{n as Disabled,o as Large,a as Primary,s as Secondary,r as Small,L as __namedExportsOrder,G as default};
