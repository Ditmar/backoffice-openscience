import{j as r}from"./jsx-runtime-DEdD30eg.js";import{c as B}from"./index-Dejnh_W_.js";import{I as h}from"./icons-BNj8Zi1j.js";import o from"./rectangle-B8kjrKZR.js";import"./index-RYns6xqu.js";import"./iframe-B9wnqh-r.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const e={"configure-view-button":"_configure-view-button_19y62_2","configure-view-button__icon":"_configure-view-button__icon_19y62_15","configure-view-button__burger-menu":"_configure-view-button__burger-menu_19y62_23","configure-view-button__burger-icon1":"_configure-view-button__burger-icon1_19y62_31","configure-view-button__burger-icon2":"_configure-view-button__burger-icon2_19y62_32","configure-view-button__burger-icon3":"_configure-view-button__burger-icon3_19y62_33","configure-view-button__text":"_configure-view-button__text_19y62_47","configure-view-button--small":"_configure-view-button--small_19y62_51","configure-view-button--medium":"_configure-view-button--medium_19y62_70","configure-view-button--large":"_configure-view-button--large_19y62_90","configure-view-button--primary":"_configure-view-button--primary_19y62_110","configure-view-button--secondary":"_configure-view-button--secondary_19y62_120"};function b({icon:u=void 0,text:w,onClick:y,variant:a,size:s,isBurger:x=!1}){const C=B(e["configure-view-button"],{[e[`configure-view-button--${a}`]]:a,[e[`configure-view-button--${s}`]]:s});return r.jsxs("button",{className:C,onClick:y,children:[x?r.jsxs("div",{className:e["configure-view-button__burger-menu"],"data-testid":"burger-menu",children:[r.jsx("div",{className:e["configure-view-button__burger-icon1"]}),r.jsx("div",{className:e["configure-view-button__burger-icon2"]}),r.jsx("div",{className:e["configure-view-button__burger-icon3"]})]}):u&&r.jsx(h,{src:u,className:e["configure-view-button__icon"]}),r.jsx("span",{className:e["configure-view-button__text"],children:w})]})}b.__docgenInfo={description:"",methods:[],displayName:"ConfigureViewButton",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isBurger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const I={title:"ui/components/atoms/configure-view-button",component:b,argTypes:{variant:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["small","medium","large"]},onClick:{action:"onClick"},icon:{control:"select",options:[o]},isBurger:{control:"boolean",defaultValue:!0}}},n={args:{variant:"primary",size:"medium",text:"Configure the view",onClick:()=>{},icon:o,isBurger:!0}},i={args:{variant:"secondary",size:"medium",text:"Configure the view",onClick:()=>{},icon:o,isBurger:!0}},t={args:{variant:"primary",size:"medium",text:"Configure the view",onClick:()=>{},isBurger:!0}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    icon: rectangle,
    isBurger: true
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,_,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    icon: rectangle,
    isBurger: true
  }
}`,...(d=(_=i.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var f,v,p;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Configure the view',
    onClick: () => {},
    isBurger: true
  }
}`,...(p=(v=t.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const E=["Primary","Secondary","BurgerMenu"];export{t as BurgerMenu,n as Primary,i as Secondary,E as __namedExportsOrder,I as default};
