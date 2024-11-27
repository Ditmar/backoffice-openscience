import{j as s}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const z="_input__container_4psnb_77",F="_input__label_4psnb_83",L="_input__field_4psnb_91",P="_small_4psnb_125",q="_medium_4psnb_130",w="_large_4psnb_135",a={"text-paragraph":"_text-paragraph_4psnb_36","text-short-paragraph":"_text-short-paragraph_4psnb_42","text-long-paragraph":"_text-long-paragraph_4psnb_49","text-small-paragraph":"_text-small-paragraph_4psnb_56","text-large-paragraph":"_text-large-paragraph_4psnb_63",input__container:z,input__label:F,input__field:L,small:P,medium:q,large:w};function b({label:e,placeholder:f,onChange:y,onFocus:C,value:E,size:I="medium"}){const o=e?`textInput-${e.replace(/\s+/g,"-").toLowerCase()}`:void 0;return s.jsxs("div",{className:a.input__container,children:[e&&s.jsx("label",{htmlFor:o,className:a.input__label,children:e}),s.jsx("input",{id:o,type:"text",placeholder:f,onChange:y,onFocus:C,value:E,className:`${a.input__field} ${a[I]}`})]})}b.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const S={title:"ui/components/atoms/TextInput",component:b,argTypes:{onChange:{action:"text-changed"},size:{control:{type:"radio"},options:["small","medium","large"]}}},t={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"medium"}},n={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"small"}},r={args:{label:"Title",placeholder:"Placeholder text",onChange:()=>{},size:"large"}},l={args:{label:"Title",placeholder:"Placeholder text",value:"Filled input",onChange:()=>{},size:"medium"}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,T,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    placeholder: 'Placeholder text',
    value: 'Filled input',
    onChange: () => {},
    size: 'medium'
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const j=["Default","Small","Large","Filled"];export{t as Default,l as Filled,r as Large,n as Small,j as __namedExportsOrder,S as default};
