import{j as r}from"./jsx-runtime-DEdD30eg.js";import{c as v}from"./index-Dejnh_W_.js";import{I}from"./icons-CVn55A26.js";import E from"./circle-delete-dGW_9tAe.js";import"./index-RYns6xqu.js";import"./iframe-DCt9LHt1.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const T="_inputcontainer_1urlq_84",y="_input_1urlq_77",b="_error_1urlq_99",D="_small_1urlq_106",j="_medium_1urlq_111",N="_large_1urlq_116",P="_iconstyle_1urlq_121",W="_errormessage_1urlq_132",e={"text-paragraph":"_text-paragraph_1urlq_36","text-short-paragraph":"_text-short-paragraph_1urlq_42","text-long-paragraph":"_text-long-paragraph_1urlq_49","text-small-paragraph":"_text-small-paragraph_1urlq_56","text-large-paragraph":"_text-large-paragraph_1urlq_63","input-wrapper":"_input-wrapper_1urlq_77",inputcontainer:T,input:y,error:b,small:D,medium:j,large:N,iconstyle:P,errormessage:W};function x({variant:o="medium",errorMessage:l,isDisabled:n,placeholder:q,value:f}){return r.jsxs("div",{className:e.inputWrapper,children:[r.jsxs("div",{className:e.inputContainer,children:[r.jsx("input",{className:v(e.input,{[e.error]:l,[e.disabled]:n,[e[o]]:o}),disabled:n,placeholder:q,value:f}),r.jsx(I,{"data-testid":"icon-add",src:E,className:e.iconstyle})]}),l&&!n&&r.jsx("p",{className:e.errormessage,children:l})]})}x.__docgenInfo={description:"",methods:[],displayName:"TextInputErrorDisabled",props:{variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Components/Atoms/TextInputErrorDisabled.tsx",component:x},a={args:{placeholder:"Placeholder text",errorMessage:"Error message here",variant:"medium",isDisabled:!1,icon:""}},s={args:{placeholder:"User Input Text",errorMessage:"Error message here",value:"User Input Text",variant:"small"}},t={args:{isDisabled:!0,placeholder:"Placeholder text",variant:"small"}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text',
    errorMessage: 'Error message here',
    variant: 'medium',
    isDisabled: false,
    icon: ''
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'User Input Text',
    errorMessage: 'Error message here',
    value: 'User Input Text',
    variant: 'small'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var _,g,h;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Placeholder text',
    variant: 'small'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const k=["ErrorWithPlaceholder","ErrorWithInput","DisabledInput"];export{t as DisabledInput,s as ErrorWithInput,a as ErrorWithPlaceholder,k as __namedExportsOrder,V as default};
