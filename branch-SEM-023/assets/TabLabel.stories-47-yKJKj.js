import{j as L}from"./jsx-runtime-DEdD30eg.js";import{c as f}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const h="_tablabel_1thiw_8",y="_active_1thiw_20",S="_selected_1thiw_26",w="_disabled_1thiw_30",q="_small_1thiw_35",j="_medium_1thiw_40",N="_large_1thiw_45",e={tablabel:h,active:y,selected:S,disabled:w,small:q,medium:j,large:N};function _(g){const{text:v,variant:r,isEnable:l,isSelect:x}=g,T=x??!1,E=f(e.tablabel,{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large",[e.disabled]:!l,[e.active]:l,[e.selected]:T});return L.jsx("div",{className:E,children:v})}_.__docgenInfo={description:"",methods:[],displayName:"TabLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"ui/components/atoms/TabLabel",component:_,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel",isEnable:!1,variant:"small"}},t={args:{text:"TabLabel",isEnable:!0,variant:"medium",isSelect:!0}},s={args:{text:"TabLabel",isEnable:!0,variant:"large"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,b,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel',
    isEnable: true,
    variant: 'large'
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["Small","Medium","Large"];export{s as Large,t as Medium,a as Small,O as __namedExportsOrder,I as default};
