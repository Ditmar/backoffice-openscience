import{j as T}from"./jsx-runtime-DEdD30eg.js";import{c as E}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const L="_tablabel_1vyyo_84",f="_active_1vyyo_96",S="_selected_1vyyo_102",q="_disabled_1vyyo_106",j="_small_1vyyo_111",N="_medium_1vyyo_116",M="_large_1vyyo_121",e={"text-paragraph":"_text-paragraph_1vyyo_43","text-short-paragraph":"_text-short-paragraph_1vyyo_49","text-long-paragraph":"_text-long-paragraph_1vyyo_56","text-small-paragraph":"_text-small-paragraph_1vyyo_63","text-large-paragraph":"_text-large-paragraph_1vyyo_70",tablabel:L,active:f,selected:S,disabled:q,small:j,medium:N,large:M};function _(g){const{text:y,variant:s,isEnable:l,isSelect:v}=g,x=v??!1,h=E(e.tablabel,{[e.small]:s==="small",[e.medium]:s==="medium",[e.large]:s==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:x});return T.jsx("div",{className:h,children:y})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},r={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const O=["Small","Medium","Large"];export{r as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
