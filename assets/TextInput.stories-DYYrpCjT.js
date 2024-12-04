import{j as s}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const z="_input__container_e1uuy_84",F="_input__label_e1uuy_90",L="_input__field_e1uuy_98",P="_small_e1uuy_129",q="_medium_e1uuy_135",w="_large_e1uuy_141",a={"text-paragraph":"_text-paragraph_e1uuy_43","text-short-paragraph":"_text-short-paragraph_e1uuy_49","text-long-paragraph":"_text-long-paragraph_e1uuy_56","text-small-paragraph":"_text-small-paragraph_e1uuy_63","text-large-paragraph":"_text-large-paragraph_e1uuy_70",input__container:z,input__label:F,input__field:L,small:P,medium:q,large:w};function v({label:e,placeholder:f,onChange:C,onFocus:E,value:I,size:b="medium"}){const o=e?`textInput-${e.replace(/\s+/g,"-").toLowerCase()}`:void 0;return s.jsxs("div",{className:a.input__container,children:[e&&s.jsx("label",{htmlFor:o,className:a.input__label,children:e}),s.jsx("input",{id:o,type:"text",placeholder:f,onChange:C,onFocus:E,value:I,className:`${a.input__field} ${a[b]}`})]})}v.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const S={title:"ui/components/atoms/TextInput",component:v,argTypes:{onChange:{action:"text-changed"},size:{control:{type:"radio"},options:["small","medium","large"]}}},t={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"medium"}},n={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"small"}},r={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"large"}},l={args:{label:"Title",placeholder:"Placeholder text",value:"Filled input",onChange:()=>{},size:"medium"}};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'medium'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'small'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,_,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'large'
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,y,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    value: 'Filled input',
    onChange: () => {},
    size: 'medium'
  }
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const j=["Default","Small","Large","Filled"];export{t as Default,l as Filled,r as Large,n as Small,j as __namedExportsOrder,S as default};
