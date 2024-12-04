import{j as r}from"./jsx-runtime-DEdD30eg.js";import{c as z}from"./index-Dejnh_W_.js";import{I}from"./icons-Boum-Ek7.js";import E from"./circle-delete-dGW_9tAe.js";import"./index-RYns6xqu.js";import"./iframe-2k7dtZ8B.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const T="_inputcontainer_mlzn8_91",y="_input_mlzn8_84",b="_error_mlzn8_106",D="_small_mlzn8_113",j="_medium_mlzn8_118",N="_large_mlzn8_123",q="_iconstyle_mlzn8_128",P="_errormessage_mlzn8_139",e={"text-paragraph":"_text-paragraph_mlzn8_43","text-short-paragraph":"_text-short-paragraph_mlzn8_49","text-long-paragraph":"_text-long-paragraph_mlzn8_56","text-small-paragraph":"_text-small-paragraph_mlzn8_63","text-large-paragraph":"_text-large-paragraph_mlzn8_70","input-wrapper":"_input-wrapper_mlzn8_84",inputcontainer:T,input:y,error:b,small:D,medium:j,large:N,iconstyle:q,errormessage:P};function x({variant:o="medium",errorMessage:n,isDisabled:l,placeholder:f,value:v}){return r.jsxs("div",{className:e.inputWrapper,children:[r.jsxs("div",{className:e.inputContainer,children:[r.jsx("input",{className:z(e.input,{[e.error]:n,[e.disabled]:l,[e[o]]:o}),disabled:l,placeholder:f,value:v}),r.jsx(I,{"data-testid":"icon-add",src:E,className:e.iconstyle})]}),n&&!l&&r.jsx("p",{className:e.errormessage,children:n})]})}x.__docgenInfo={description:"",methods:[],displayName:"TextInputErrorDisabled",props:{variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Atoms/TextInputErrorDisabled.tsx",component:x},a={args:{placeholder:"Placeholder text",errorMessage:"Error message here",variant:"medium",isDisabled:!1,icon:""}},s={args:{placeholder:"User Input Text",errorMessage:"Error message here",value:"User Input Text",variant:"small"}},t={args:{isDisabled:!0,placeholder:"Placeholder text",variant:"small"}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text',
    errorMessage: 'Error message here',
    variant: 'medium',
    isDisabled: false,
    icon: ''
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'User Input Text',
    errorMessage: 'Error message here',
    value: 'User Input Text',
    variant: 'small'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var _,g,h;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Placeholder text',
    variant: 'small'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const V=["ErrorWithPlaceholder","ErrorWithInput","DisabledInput"];export{t as DisabledInput,s as ErrorWithInput,a as ErrorWithPlaceholder,V as __namedExportsOrder,R as default};
