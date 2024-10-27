import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as k}from"./index-RYns6xqu.js";const y="_container_6cga9_1",v="_label_6cga9_6",j="_toggle_6cga9_12",D="_checked_6cga9_26",E="_slider_6cga9_34",e={container:y,label:v,toggle:j,checked:D,slider:E};function c({label:r="",disabled:n=!1,onChange:d}){const[a,T]=k.useState(!1),x=()=>{n||(T(!a),d&&d(!a))};return s.jsxs("div",{className:`
    ${e.container} 
    ${n?e.disabled:""}
    `,children:[r&&s.jsxs("label",{htmlFor:"toggle-button",className:e.label,children:[" ",r]}),s.jsx("button",{id:"toggle-button",className:`
          ${e.toggle} 
          ${a?e.checked:""}
          `,onClick:x,disabled:n,"aria-pressed":a,"aria-label":r||"Toggle",children:s.jsx("span",{className:e.slider})})]})}c.defaultProps={label:"",disabled:!1,onChange:void 0};c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}}}};const $={title:"ui/components/atoms/Toggle",component:c,argTypes:{label:{control:"text"},disabled:{control:"boolean"}}},l={args:{label:"Toggle label",disabled:!1}},o={args:{label:"Toggle label ",disabled:!0}},t={args:{label:"",disabled:!1}};var i,g,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    disabled: false
  }
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label ',
    disabled: true
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,_,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '',
    disabled: false
  }
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const q=["DefaultEnabled","DefaultDisabled","WithoutLabel"];export{o as DefaultDisabled,l as DefaultEnabled,t as WithoutLabel,q as __namedExportsOrder,$ as default};
