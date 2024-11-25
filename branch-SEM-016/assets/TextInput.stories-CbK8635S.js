import{j as s}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const k="_input__container_hk0fy_77",z="_input__label_hk0fy_83",F="_input__field_hk0fy_91",L="_small_hk0fy_123",P="_medium_hk0fy_128",q="_large_hk0fy_133",a={"text-paragraph":"_text-paragraph_hk0fy_36","text-short-paragraph":"_text-short-paragraph_hk0fy_42","text-long-paragraph":"_text-long-paragraph_hk0fy_49","text-small-paragraph":"_text-small-paragraph_hk0fy_56","text-large-paragraph":"_text-large-paragraph_hk0fy_63",input__container:k,input__label:z,input__field:F,small:L,medium:P,large:q};function T({label:e,placeholder:v,onChange:C,onFocus:E,value:I,size:b="medium"}){const o=e?`textInput-${e.replace(/\s+/g,"-").toLowerCase()}`:void 0;return s.jsxs("div",{className:a.input__container,children:[e&&s.jsx("label",{htmlFor:o,className:a.input__label,children:e}),s.jsx("input",{id:o,type:"text",placeholder:v,onChange:C,onFocus:E,value:I,className:`${a.input__field} ${a[b]}`})]})}T.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const M={title:"ui/components/atoms/TextInput",component:T,argTypes:{onChange:{action:"text-changed"},size:{control:{type:"radio"},options:["small","medium","large"]}}},t={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"medium"}},n={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"small"}},r={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"large"}},l={args:{label:"Title",placeholder:"Placeholder text",value:"Filled input",onChange:()=>{},size:"medium"}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    onChange: () => {},
    size: 'medium'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,c,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,f,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    value: 'Filled input',
    onChange: () => {},
    size: 'medium'
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const S=["Default","Small","Large","Filled"];export{t as Default,l as Filled,r as Large,n as Small,S as __namedExportsOrder,M as default};
