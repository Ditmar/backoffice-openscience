import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";const S="_radiobutton_86zwg_77",j="_radiobutton__input_86zwg_81",F="_radiobutton__label_86zwg_130",s={"text-paragraph":"_text-paragraph_86zwg_36","text-short-paragraph":"_text-short-paragraph_86zwg_42","text-long-paragraph":"_text-long-paragraph_86zwg_49","text-small-paragraph":"_text-small-paragraph_86zwg_56","text-large-paragraph":"_text-large-paragraph_86zwg_63",radiobutton:S,radiobutton__input:j,radiobutton__label:F};function T({label:i,checked:z,disabled:l=!1,onChange:u,autoFocus:d=!1,id:c}){const o=p.useRef(null);p.useEffect(()=>{d&&o.current&&o.current.focus()},[d]);const q=C=>{!l&&u&&u(C)};return n.jsxs("div",{className:s.radiobutton,children:[n.jsx("input",{type:"radio",className:s.radiobutton__input,id:c,ref:o,checked:z,disabled:l,onChange:q}),i&&n.jsx("label",{className:s.radiobutton__label,htmlFor:c,children:i})]})}T.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"ui/components/atoms/radiobutton",component:T,argTypes:{onChange:{action:"changed"},size:{control:{type:"select"}}}},e={args:{label:"Radio button item",disabled:!1}},a={args:{label:"Radio button item",autoFocus:!0}},t={args:{label:"Radio button item",checked:!0}},r={args:{label:"Radio button item",disabled:!0}};var m,g,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    disabled: false
  }
}`,...(b=(g=e.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var _,f,h;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    autoFocus: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,R,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    checked: true
  }
}`,...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var y,v,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Radio button item',
    disabled: true
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const H=["Enabled","FocusEnabled","Selected","Disabled"];export{r as Disabled,e as Enabled,a as FocusEnabled,t as Selected,H as __namedExportsOrder,k as default};
