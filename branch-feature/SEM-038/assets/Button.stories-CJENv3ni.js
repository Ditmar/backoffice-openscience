import{j as i}from"./jsx-runtime-DEdD30eg.js";import{c as x}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const r={"button-label--container":"_button-label--container_17v1w_1","button-label--primary":"_button-label--primary_17v1w_9","button-label--secondary":"_button-label--secondary_17v1w_12","button-label--tertiary":"_button-label--tertiary_17v1w_15","button-label--quaternary":"_button-label--quaternary_17v1w_18","button-label--quinary":"_button-label--quinary_17v1w_21"};function N({children:f,variant:a}){const S=x(r["button-label--container"],{[r["button-label--primary"]]:a==="primary",[r["button-label--secondary"]]:a==="secondary",[r["button-label--tertiary"]]:a==="tertiary",[r["button-label--quaternary"]]:a==="quaternary",[r["button-label--quinary"]]:a==="quinary"});return i.jsx("button",{className:S,"data-testid":"button-styles",children:i.jsx("span",{children:f})})}N.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'quaternary'"},{name:"literal",value:"'quinary'"}]},description:""}}};const Q={title:"ui/components/atoms/buttonYesNo/Button",component:N,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary","quaternary","quinary"]}}},e={args:{children:"No",variant:"primary"}},t={args:{children:"Yes",variant:"secondary"}},n={args:{children:"Yes",variant:"tertiary"}},s={args:{children:"Yes",variant:"quaternary"}},o={args:{children:"Yes",variant:"quinary"}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'No',
    variant: 'primary'
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,d,m;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Yes',
    variant: 'secondary'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Yes',
    variant: 'tertiary'
  }
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var q,v,g;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Yes',
    variant: 'quaternary'
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,Y,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Yes',
    variant: 'quinary'
  }
}`,...(w=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};const B=["Primary","Secondary","Tertiary","Quaternary","Quinary"];export{e as Primary,s as Quaternary,o as Quinary,t as Secondary,n as Tertiary,B as __namedExportsOrder,Q as default};
