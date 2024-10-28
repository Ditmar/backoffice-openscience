import{j as L}from"./jsx-runtime-DEdD30eg.js";import{c as h}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const f="_tablabel_l327t_53",y="_active_l327t_65",S="_selected_l327t_71",q="_disabled_l327t_75",j="_small_l327t_80",N="_medium_l327t_85",M="_large_l327t_90",e={"text-paragraph":"_text-paragraph_l327t_26","text-short-paragraph":"_text-short-paragraph_l327t_32","text-long-paragraph":"_text-long-paragraph_l327t_39",tablabel:f,active:y,selected:S,disabled:q,small:j,medium:N,large:M};function _(g){const{text:x,variant:s,isEnable:l,isSelect:v}=g,T=v??!1,E=h(e.tablabel,{[e.small]:s==="small",[e.medium]:s==="medium",[e.large]:s==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:T});return L.jsx("div",{className:E,children:x})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},r={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const O=["Small","Medium","Large"];export{r as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
