import{j as a}from"./jsx-runtime-DEdD30eg.js";import{c as f}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const I="_container_sl8r2_84",b="_inputwrapper_sl8r2_89",y="_input_sl8r2_89",D="_error_sl8r2_106",w="_small_sl8r2_113",j="_medium_sl8r2_118",q="_large_sl8r2_123",C="_icon_sl8r2_128",M="_errormessage_sl8r2_139",e={"text-paragraph":"_text-paragraph_sl8r2_43","text-short-paragraph":"_text-short-paragraph_sl8r2_49","text-long-paragraph":"_text-long-paragraph_sl8r2_56","text-small-paragraph":"_text-small-paragraph_sl8r2_63","text-large-paragraph":"_text-large-paragraph_sl8r2_70",container:I,inputwrapper:b,input:y,error:D,small:w,medium:j,large:q,icon:C,errormessage:M};function x({variant:o="medium",errorMessage:r,isDisabled:l,placeholder:v,value:E,onChange:T}){return a.jsxs("div",{className:e.inputwrapper,children:[a.jsx("div",{className:e.inputcontainer,children:a.jsx("input",{className:f(e.input,{[e.error]:r,[e.disabled]:l,[e[o]]:o}),"aria-invalid":!!r,disabled:l,placeholder:v,value:E,onChange:T})}),r&&!l&&a.jsx("p",{className:e.errormessage,role:"alert","aria-live":"assertive",children:r})]})}x.__docgenInfo={description:"",methods:[],displayName:"TextInputErrorDisabled",props:{variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const U={title:"Components/Atoms/TextInputErrorDisabled",component:x,argTypes:{variant:{control:"select",options:["small","medium","large"]},errorMessage:{control:"text"},isDisabled:{control:"boolean"},placeholder:{control:"text"},value:{control:"text"},onChange:{action:"changed"}}},s={args:{placeholder:"Placeholder text",errorMessage:"Error message here",variant:"medium",isDisabled:!1}},t={args:{placeholder:"User Input Text",errorMessage:"Error message here",value:"User Input Text",variant:"small"}},n={args:{isDisabled:!0,placeholder:"Placeholder text",variant:"small"}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text',
    errorMessage: 'Error message here',
    variant: 'medium',
    isDisabled: false
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'User Input Text',
    errorMessage: 'Error message here',
    value: 'User Input Text',
    variant: 'small'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,_,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Placeholder text',
    variant: 'small'
  }
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const W=["ErrorWithPlaceholder","ErrorWithInput","DisabledInput"];export{n as DisabledInput,t as ErrorWithInput,s as ErrorWithPlaceholder,W as __namedExportsOrder,U as default};
