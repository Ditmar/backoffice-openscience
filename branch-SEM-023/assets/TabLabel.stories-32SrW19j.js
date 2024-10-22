import{j as L}from"./jsx-runtime-DEdD30eg.js";import{c as f}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const h="_tablabel_1hmtp_8",y="_active_1hmtp_20",S="_selected_1hmtp_26",q="_disabled_1hmtp_30",j="_small_1hmtp_35",N="_medium_1hmtp_40",M="_large_1hmtp_45",e={tablabel:h,active:y,selected:S,disabled:q,small:j,medium:N,large:M};function _(g){const{text:v,variant:r,isEnable:l,isSelect:x}=g,T=x??!1,E=f(e.tablabel,{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:T});return L.jsx("div",{className:E,children:v})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},s={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,b,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["Small","Medium","Large"];export{s as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
