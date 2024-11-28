import{j as s}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const I="_input__container_jtfwd_84",b="_input__label_jtfwd_90",z="_input__field_jtfwd_98",F="_small_jtfwd_132",L="_medium_jtfwd_137",P="_large_jtfwd_142",a={"text-paragraph":"_text-paragraph_jtfwd_43","text-short-paragraph":"_text-short-paragraph_jtfwd_49","text-long-paragraph":"_text-long-paragraph_jtfwd_56","text-small-paragraph":"_text-small-paragraph_jtfwd_63","text-large-paragraph":"_text-large-paragraph_jtfwd_70",input__container:I,input__label:b,input__field:z,small:F,medium:L,large:P};function v({label:e,placeholder:w,onChange:j,onFocus:y,value:C,size:E="medium"}){const o=e?`textInput-${e.replace(/\s+/g,"-").toLowerCase()}`:void 0;return s.jsxs("div",{className:a.input__container,children:[e&&s.jsx("label",{htmlFor:o,className:a.input__label,children:e}),s.jsx("input",{id:o,type:"text",placeholder:w,onChange:j,onFocus:y,value:C,className:`${a.input__field} ${a[E]}`})]})}v.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const M={title:"ui/components/atoms/TextInput",component:v,argTypes:{onChange:{action:"text-changed"},size:{control:{type:"radio"},options:["small","medium","large"]}}},t={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"medium"}},n={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"small"}},r={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"large"}},l={args:{label:"Title",placeholder:"Placeholder text",value:"Filled input",onChange:()=>{},size:"medium"}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'medium'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'small'
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,_,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'large'
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,f,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    value: 'Filled input',
    onChange: () => {},
    size: 'medium'
  }
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const S=["Default","Small","Large","Filled"];export{t as Default,l as Filled,r as Large,n as Small,S as __namedExportsOrder,M as default};
