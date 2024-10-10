import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as L}from"./index-RYns6xqu.js";import{c as y}from"./index-Dejnh_W_.js";const C="_links_1v3g8_1",N="_links__text_1v3g8_9",R="_small_1v3g8_14",T="_medium_1v3g8_22",j="_big_1v3g8_30",S="_active_1v3g8_43",q="_disabled_1v3g8_47",w="_enabled_1v3g8_53",A="_visited_1v3g8_62",a={links:C,links__text:N,small:R,medium:T,big:j,active:S,disabled:q,enabled:w,visited:A};function g(k){const{children:f,variant:e,onClick:t}=k,[h,r]=L.useState(!1),x=y(a.links,{[a.active]:h,[a.disabled]:e==="Disabled"}),D=E=>{if(e==="Disabled"){E.preventDefault();return}r(!0),t==null||t(),setTimeout(()=>{r(!1)},200)};return l.jsx("a",{className:x,href:e==="Disabled"?void 0:"url-a-navegar",onClick:D,tabIndex:e==="Disabled"?-1:0,"aria-disabled":e==="Disabled",children:l.jsx("span",{className:a.links__text,children:f})})}g.__docgenInfo={description:"",methods:[],displayName:"Links",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'Enabled' | 'Disabled' | 'Active'",elements:[{name:"literal",value:"'Enabled'"},{name:"literal",value:"'Disabled'"},{name:"literal",value:"'Active'"}]},description:""}}};const z={title:"ui/components/atoms/Links",component:g,argTypes:{variant:{control:{type:"select",options:["Enabled","Disabled"]}},children:{control:"text"},onClick:{action:"click"}}},n={args:{children:"Link action",variant:"Enabled"}},s={args:{children:"Link action",variant:"Disabled",onClick:void 0}},i={args:{children:"Link action",variant:"Enabled"}};var c,o,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Link action',
    variant: 'Enabled'
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,_,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Link action',
    variant: 'Disabled',
    onClick: undefined
  }
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Link action',
    variant: 'Enabled'
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const B=["Enabled","Disabled","Visited"];export{s as Disabled,n as Enabled,i as Visited,B as __namedExportsOrder,z as default};
