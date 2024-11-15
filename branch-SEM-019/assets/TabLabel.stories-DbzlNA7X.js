import{j as h}from"./jsx-runtime-DEdD30eg.js";import{c as T}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const E="_tablabel_1dfnj_77",L="_active_1dfnj_89",y="_selected_1dfnj_95",S="_disabled_1dfnj_99",q="_small_1dfnj_104",N="_medium_1dfnj_109",M="_large_1dfnj_114",e={"text-paragraph":"_text-paragraph_1dfnj_36","text-short-paragraph":"_text-short-paragraph_1dfnj_42","text-long-paragraph":"_text-long-paragraph_1dfnj_49","text-small-paragraph":"_text-small-paragraph_1dfnj_56","text-large-paragraph":"_text-large-paragraph_1dfnj_63",tablabel:E,active:L,selected:y,disabled:S,small:q,medium:N,large:M};function _(g){const{text:x,variant:s,isEnable:l,isSelect:f}=g,v=f??!1,j=T(e.tablabel,{[e.small]:s==="small",[e.medium]:s==="medium",[e.large]:s==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:v});return h.jsx("div",{className:j,children:x})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},r={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const O=["Small","Medium","Large"];export{r as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
