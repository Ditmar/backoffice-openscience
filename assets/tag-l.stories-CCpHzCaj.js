import{j as k}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{c as q}from"./index-Dejnh_W_.js";const w="_tag_1608j_1",e={tag:w,"tag--small":"_tag--small_1608j_10","tag--medium":"_tag--medium_1608j_13","tag--large":"_tag--large_1608j_16","tag--primary":"_tag--primary_1608j_19","tag--secondary":"_tag--secondary_1608j_23","tag--tertiary":"_tag--tertiary_1608j_27","tag--disabled":"_tag--disabled_1608j_32"};function z(C){const{label:x,size:o="medium",variant:l="primary",disabled:a=!1,onClick:r}=C,h=q(e.tag,{[e["tag--primary"]]:l==="primary",[e["tag--secondary"]]:l==="secondary",[e["tag--tertiary"]]:l==="tertiary",[e["tag--disabled"]]:a,[e["tag--small"]]:o==="small",[e["tag--medium"]]:o==="medium",[e["tag--large"]]:o==="large"}),S=m=>{!a&&(m.key==="Enter"||m.key===" ")&&(r==null||r())};return k.jsx("span",{className:h,onClick:a?void 0:r,onKeyDown:S,role:"button",tabIndex:a?-1:0,children:x})}z.__docgenInfo={description:"",methods:[],displayName:"TagL",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'ghost' | 'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"ui/components/atoms/Tag-l",component:z,argTypes:{label:{control:"text",description:"Texto dentro del Tag"},size:{control:"radio",options:["small","medium","large"],description:"Tamaño del Tag"},variant:{control:"radio",options:["primary","secondary","tertiary"],description:"Estilo visual del Tag"},disabled:{control:"boolean",description:"Indica si el Tag está deshabilitado"},onClick:{action:"clicked"}}},t={args:{label:"Component",size:"medium",variant:"primary"}},s={args:{label:"Component",size:"medium",variant:"secondary"}},n={args:{label:"Component",size:"medium",variant:"tertiary"}},i={args:{label:"Component",size:"medium",variant:"default",disabled:!0}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'primary'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'secondary'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,b,v;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'tertiary'
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,f,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Component',
    size: 'medium',
    variant: 'default',
    disabled: true
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const P=["Primary","Secondary","Tertiary","Disabled"];export{i as Disabled,t as Primary,s as Secondary,n as Tertiary,P as __namedExportsOrder,N as default};
