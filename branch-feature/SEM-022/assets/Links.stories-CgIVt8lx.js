import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{c as D}from"./index-Dejnh_W_.js";const h="_links_16rjt_1",j="_links__text_16rjt_9",E="_small_16rjt_14",y="_medium_16rjt_22",L="_big_16rjt_30",w="_active_16rjt_43",C="_disabled_16rjt_47",N="_enabled_16rjt_53",a={links:h,links__text:j,small:E,medium:y,big:L,active:w,disabled:C,enabled:N};function b(u){const{children:k,variant:e,onClick:t}=u,[i,r]=x.useState(!1),v=D(a.links,{[a.active]:i,[a.disabled]:e==="Disabled"}),f=g=>{if(e==="Disabled"){g.preventDefault();return}r(!i),setTimeout(()=>{r(!1)},1e3),t==null||t()};return l.jsx("a",{className:v,href:e==="Disabled"?void 0:"https://www.openai.com/",onClick:f,tabIndex:e==="Disabled"?-1:0,"aria-disabled":e==="Disabled",children:l.jsx("span",{className:a.links__text,children:k})})}b.__docgenInfo={description:"",methods:[],displayName:"Links",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Enabled' | 'Disabled'",elements:[{name:"literal",value:"'Enabled'"},{name:"literal",value:"'Disabled'"}]},description:""}}};const S={title:"ui/components/atoms/Links",component:b,argTypes:{variant:{control:{type:"select",options:["Enabled","Disabled"]}},children:{control:"text"},onClick:{action:"click"}}},n={args:{children:"Link action",variant:"Enabled"}},s={args:{children:"Link action",variant:"Disabled",onClick:void 0}};var o,c,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Link action',
    variant: 'Enabled'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,_,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Link action',
    variant: 'Disabled',
    onClick: undefined
  }
}`,...(p=(_=s.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};const I=["Enabled","Disabled"];export{s as Disabled,n as Enabled,I as __namedExportsOrder,S as default};
