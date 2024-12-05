import{j as t}from"./jsx-runtime-DEdD30eg.js";import{c as _}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const v="_display_119vr_1",e={display:v,false:"_false_119vr_26",true:"_true_119vr_30"};function u(p){const{children:m,variant:s,onClick:T}=p,y=_(e.display,{[e.false]:s==="False",[e.true]:s==="True"});return t.jsx("button",{className:y,onClick:T,children:t.jsx("span",{className:e["add-button__text"],children:m})})}u.__docgenInfo={description:"",methods:[],displayName:"TrueFalseButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'False' | 'True'",elements:[{name:"literal",value:"'False'"},{name:"literal",value:"'True'"}]},description:""},display:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"UI/Components/Atoms/True-False-Button",component:u,argTypes:{variant:{control:{type:"radio"},options:["True","False"]},onClick:{action:"clicked"}}},a={args:{children:"TRUE",variant:"True"}},r={args:{children:"FALSE",variant:"False"}};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'TRUE',
    variant: 'True'
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'FALSE',
    variant: 'False'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["True","False"];export{r as False,a as True,x as __namedExportsOrder,h as default};
