import{j as C}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{c as D}from"./index-Dejnh_W_.js";const e={"ghost-button":"_ghost-button_113y3_1","ghost-button--primary":"_ghost-button--primary_113y3_14","ghost-button--disabled":"_ghost-button--disabled_113y3_17","ghost-button--small":"_ghost-button--small_113y3_31","ghost-button--medium":"_ghost-button--medium_113y3_36","ghost-button--large":"_ghost-button--large_113y3_41"};function x({ghostbutton:T,variant:l="primary",size:i="medium",disabled:a=!1,onClick:q}){const k=D(e["ghost-button"],{[e.primary]:l==="primary",[e.secondary]:l==="secondary"},{[e.small]:i==="small",[e.medium]:i==="medium",[e.large]:i==="large"},{[e["ghost-button--disabled"]]:a});return C.jsx("button",{"data-testid":"ghost-button",className:k,onClick:a?void 0:q,disabled:a,tabIndex:a?-1:0,children:T})}x.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{ghostbutton:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"ui/components/atoms/GhostButton",component:x,argTypes:{onClick:{action:"click"},variant:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:["small","medium","large"]}},disabled:{control:"boolean"},ghostbutton:{control:"text"}},args:{variant:"primary",size:"medium",disabled:!1,ghostbutton:"Ghost Button"}},t={args:{ghostbutton:"Primary Button",variant:"primary",size:"medium",disabled:!1}},r={args:{ghostbutton:"Secondary Button",variant:"secondary",size:"medium",disabled:!1}},s={args:{ghostbutton:"Small Button",variant:"primary",size:"small",disabled:!1}},o={args:{ghostbutton:"Large Button",variant:"primary",size:"large",disabled:!1}},n={args:{ghostbutton:"Disabled Button",variant:"primary",size:"medium",disabled:!0}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,y,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,v,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false
  }
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var B,S,z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const w=["Primary","Secondary","Small","Large","Disabled"];export{n as Disabled,o as Large,t as Primary,r as Secondary,s as Small,w as __namedExportsOrder,j as default};
