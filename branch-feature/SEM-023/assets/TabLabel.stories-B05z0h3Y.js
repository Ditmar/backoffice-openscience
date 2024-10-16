import{j as E}from"./jsx-runtime-DEdD30eg.js";import{c as L}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const f="_tablabel_shx8y_94",h="_active_shx8y_106",S="_selected_shx8y_112",q="_disabled_shx8y_116",j="_small_shx8y_121",N="_medium_shx8y_126",M="_large_shx8y_131",e={tablabel:f,active:h,selected:S,disabled:q,small:j,medium:N,large:M};function _(g){const{text:x,variant:r,isEnable:l,isSelect:v}=g,y=v??!1,T=L(e.tablabel,{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:y});return E.jsx("div",{className:T,children:x})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},s={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},t={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: false,
    variant: 'small'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'medium',
    isSelect: true
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,b,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["Small","Medium","Large"];export{t as Large,s as Medium,a as Small,O as __namedExportsOrder,I as default};
