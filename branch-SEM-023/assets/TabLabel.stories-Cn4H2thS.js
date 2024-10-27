import{j as E}from"./jsx-runtime-DEdD30eg.js";import{c as L}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const f="_tablabel_cbjj6_8",y="_active_cbjj6_20",S="_selected_cbjj6_26",q="_disabled_cbjj6_30",N="_small_cbjj6_35",h="_medium_cbjj6_40",M="_large_cbjj6_45",e={tablabel:f,active:y,selected:S,disabled:q,small:N,medium:h,large:M};function _(g){const{text:j,variant:r,isEnable:l,isSelect:v}=g,x=v??!1,T=L(e.tablabel,{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:x});return E.jsx("div",{className:T,children:j})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},s={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const O=["Small","Medium","Large"];export{s as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
