import{j as L}from"./jsx-runtime-DEdD30eg.js";import{c as f}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const h="_tablabel_e6uah_2",y="_active_e6uah_14",S="_selected_e6uah_20",q="_disabled_e6uah_24",j="_small_e6uah_29",N="_medium_e6uah_34",M="_large_e6uah_39",e={tablabel:h,active:y,selected:S,disabled:q,small:j,medium:N,large:M};function _(g){const{text:v,variant:r,isEnable:l,isSelect:x}=g,T=x??!1,E=f(e.tablabel,{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:T});return L.jsx("div",{className:E,children:v})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},s={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,b,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["Small","Medium","Large"];export{s as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
