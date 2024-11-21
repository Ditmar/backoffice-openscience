import{j as i}from"./jsx-runtime-DEdD30eg.js";import{c as z}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const r={"button-label--container":"_button-label--container_nfz5c_1","button-label--primary":"_button-label--primary_nfz5c_10","button-label--secondary":"_button-label--secondary_nfz5c_13","button-label--tertiary":"_button-label--tertiary_nfz5c_16","button-label--quaternary":"_button-label--quaternary_nfz5c_19","button-label--quinary":"_button-label--quinary_nfz5c_22"};function S({children:Y,variant:a}){const x=z(r["button-label--container"],{[r["button-label--primary"]]:a==="primary",[r["button-label--secondary"]]:a==="secondary",[r["button-label--tertiary"]]:a==="tertiary",[r["button-label--quaternary"]]:a==="quaternary",[r["button-label--quinary"]]:a==="quinary"});return i.jsx("button",{className:x,"data-testid":"button-styles",children:i.jsx("span",{children:Y})})}S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'quaternary'"},{name:"literal",value:"'quinary'"}]},description:""}}};const Q={title:"ui/components/atoms/buttonYesNo/Button",component:S,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary","quaternary","quinary"]}}},e={args:{children:"No",variant:"primary"}},t={args:{children:"Yes",variant:"secondary"}},n={args:{children:"Yes",variant:"tertiary"}},o={args:{children:"No",variant:"quaternary"}},s={args:{children:"Yes",variant:"quinary"}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var q,g,f;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'No',
    variant: 'quaternary'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Yes',
    variant: 'quinary'
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const B=["Primary","Secondary","Tertiary","Quaternary","Quinary"];export{e as Primary,o as Quaternary,s as Quinary,t as Secondary,n as Tertiary,B as __namedExportsOrder,Q as default};
