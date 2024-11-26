import{j as n}from"./jsx-runtime-DEdD30eg.js";import{c as S}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const t={"ghost-button-icon":"_ghost-button-icon_15s6c_1","button-variant-ghost":"_button-variant-ghost_15s6c_14","ghost-button-icon--ghost-primary":"_ghost-button-icon--ghost-primary_15s6c_22","ghost-button-icon--ghost-secondary":"_ghost-button-icon--ghost-secondary_15s6c_31","ghost-button-icon--ghost-tertiary":"_ghost-button-icon--ghost-tertiary_15s6c_41","ghost-button-icon--ghost-disabled":"_ghost-button-icon--ghost-disabled_15s6c_54"};function v({children:f,variant:o="ghost-primary",onClick:x}){const N=S(t["ghost-button-icon"],{[t["ghost-button-icon--ghost-primary"]]:o==="ghost-primary",[t["ghost-button-icon--ghost-secondary"]]:o==="ghost-secondary",[t["ghost-button-icon--ghost-tertiary"]]:o==="ghost-tertiary",[t["ghost-button-icon--ghost-disabled"]]:o==="ghost-disabled"});return n.jsx("button",{className:N,onClick:x,disabled:o==="ghost-disabled",children:n.jsx("span",{className:t["button-variant-ghost"],children:f})})}v.__docgenInfo={description:"",methods:[],displayName:"GhostButtonIcon",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'ghost-disabled'",elements:[{name:"literal",value:"'ghost-primary'"},{name:"literal",value:"'ghost-secondary'"},{name:"literal",value:"'ghost-tertiary'"},{name:"literal",value:"'ghost-disabled'"}]},description:"",defaultValue:{value:"'ghost-primary'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"ui/components/atoms/ghost-button-icon",component:v,argTypes:{onClick:{action:"clicked"},variant:["ghost-primary","ghost-secondary","ghost-tertiary","ghost-disabled"]}},s={args:{children:"+",variant:"ghost-primary"}},r={args:{children:"+",variant:"ghost-secondary"}},a={args:{children:"+",variant:"ghost-tertiary"}},e={args:{children:"+",variant:"ghost-disabled"}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'ghost-primary'
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,h,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'ghost-secondary'
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'ghost-tertiary'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,b,_;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: '+',
    variant: 'ghost-disabled'
  }
}`,...(_=(b=e.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const q=["Primary","Secondary","Tertiary","Disabled"];export{e as Disabled,s as Primary,r as Secondary,a as Tertiary,q as __namedExportsOrder,k as default};
