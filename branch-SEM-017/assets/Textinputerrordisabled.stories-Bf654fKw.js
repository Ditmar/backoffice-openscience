import{j as r}from"./jsx-runtime-DEdD30eg.js";import{G as E}from"./iconBase-DPnZGaMX.js";import"./index-RYns6xqu.js";function T(o){return E({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-.05a21.74 21.74 0 1 1 43.44 0z"},child:[]}]})(o)}const b="_input_1lc9m_1",j="_error_1lc9m_21",y="_icon_1lc9m_28",e={"input-wrapper":"_input-wrapper_1lc9m_1","input-container":"_input-container_1lc9m_8",input:b,error:j,icon:y,"error-message":"_error-message_1lc9m_39"};function x({variant:o="medium",errorMessage:a,isDisabled:i,placeholder:v,value:I}){const f=`${e.input} ${a?e.error:""} ${i?e.disabled:""} ${e[o]}`;return r.jsxs("div",{className:e.inputWrapper,children:[r.jsxs("span",{className:e.inputContainer,children:[r.jsx("input",{className:f,disabled:i,placeholder:v,value:I}),a&&r.jsx(T,{className:e.icon})]}),a&&!i&&r.jsx("p",{className:e.errorMessage,children:a})]})}x.__docgenInfo={description:"",methods:[],displayName:"TextInputErrorDisabled",props:{variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};const C={title:"Components/Atoms/Textinputerrordisabled",component:x},s={args:{placeholder:"Placeholder text",errorMessage:"Error message here",variant:"medium"}},t={args:{placeholder:"User Input Text",errorMessage:"Error message here",value:"User Input Text",variant:"medium"}},n={args:{isDisabled:!0,placeholder:"Placeholder text",variant:"medium"}};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text',
    errorMessage: 'Error message here',
    variant: 'medium'
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'User Input Text',
    errorMessage: 'Error message here',
    value: 'User Input Text',
    variant: 'medium'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    placeholder: 'Placeholder text',
    variant: 'medium'
  }
}`,...(_=(g=n.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const D=["ErrorWithPlaceholder","ErrorWithInput","DisabledInput"];export{n as DisabledInput,t as ErrorWithInput,s as ErrorWithPlaceholder,D as __namedExportsOrder,C as default};
