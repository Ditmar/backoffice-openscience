import{j as n}from"./jsx-runtime-DEdD30eg.js";import{c as g}from"./index-Dejnh_W_.js";import{I as x}from"./icons-DJMiYHAf.js";import"./index-RYns6xqu.js";import"./iframe-C9O3tUT6.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const e={"edit-model-button":"_edit-model-button_155du_2","edit-model-button--primary":"_edit-model-button--primary_155du_14","edit-model-button__icon":"_edit-model-button__icon_155du_18","edit-model-button__text":"_edit-model-button__text_155du_21","edit-model-button--secondary":"_edit-model-button--secondary_155du_24","edit-model-button--small":"_edit-model-button--small_155du_37","edit-model-button--medium":"_edit-model-button--medium_155du_53","edit-model-button--large":"_edit-model-button--large_155du_69"};function p({icon:i,text:_,onClick:y,variant:r,size:a}){const b=g(e["edit-model-button"],{[e[`edit-model-button--${r}`]]:r,[e[`edit-model-button--${a}`]]:a});return n.jsxs("button",{className:b,onClick:y,children:[i&&n.jsx(x,{src:i,className:e["edit-model-button__icon"]}),n.jsx("span",{className:e["edit-model-button__text"],children:_})]})}p.__docgenInfo={description:"",methods:[],displayName:"EditModelButton",props:{text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"ui/components/atoms/edit-model-button",component:p,argTypes:{variant:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["small","medium","large"]},onClick:{action:"onClick"},icon:{control:"text",defaultValue:"pencil"},text:{control:"text",defaultValue:"Edit the model"}}},t={args:{variant:"primary",size:"medium",text:"Edit the model",onClick:()=>{},icon:"pencil"}},o={args:{variant:"secondary",size:"medium",text:"Edit the model",onClick:()=>{},icon:"pencil"}};var d,m,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Edit the model',
    onClick: () => {},
    icon: 'pencil'
  }
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Edit the model',
    onClick: () => {},
    icon: 'pencil'
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const q=["Primary","Secondary"];export{t as Primary,o as Secondary,q as __namedExportsOrder,j as default};
