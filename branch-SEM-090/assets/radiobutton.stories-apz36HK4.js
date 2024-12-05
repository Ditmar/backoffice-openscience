import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";const F="_radiobutton_1p957_84",I="_radiobutton__input_1p957_88",N="_radiobutton__label_1p957_137",s={"text-paragraph":"_text-paragraph_1p957_43","text-short-paragraph":"_text-short-paragraph_1p957_49","text-long-paragraph":"_text-long-paragraph_1p957_56","text-small-paragraph":"_text-small-paragraph_1p957_63","text-large-paragraph":"_text-large-paragraph_1p957_70",radiobutton:F,radiobutton__input:I,radiobutton__label:N};function q({label:i,checked:C,disabled:l=!1,onChange:u,autoFocus:d=!1,id:p}){const o=c.useRef(null);c.useEffect(()=>{d&&o.current&&o.current.focus()},[d]);const S=j=>{!l&&u&&u(j)};return n.jsxs("div",{className:s.radiobutton,children:[n.jsx("input",{type:"radio",className:s.radiobutton__input,id:p,ref:o,checked:C,disabled:l,onChange:S}),i&&n.jsx("label",{className:s.radiobutton__label,htmlFor:p,children:i})]})}q.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"ui/components/atoms/radiobutton",component:q,argTypes:{onChange:{action:"changed"},size:{control:{type:"select"}}}},e={args:{label:"Radio button item",disabled:!1}},a={args:{label:"Radio button item",autoFocus:!0}},t={args:{label:"Radio button item",checked:!0}},r={args:{label:"Radio button item",disabled:!0}};var m,b,_;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    disabled: false
  }
}`,...(_=(b=e.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    autoFocus: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,R,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    checked: true
  }
}`,...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var y,v,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    disabled: true
  }
}`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const M=["Enabled","FocusEnabled","Selected","Disabled"];export{r as Disabled,e as Enabled,a as FocusEnabled,t as Selected,M as __namedExportsOrder,L as default};
