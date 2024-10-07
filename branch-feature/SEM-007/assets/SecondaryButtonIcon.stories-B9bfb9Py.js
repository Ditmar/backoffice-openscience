import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{c as y}from"./index-Dejnh_W_.js";function u({size:o="medium",disabled:n=!1,onClick:p}){const[b,r]=x.useState(!1),f=y("btn-main",{[`btn--${o}`]:o,"btn--disabled":n}),g=()=>{r(!0)},v=()=>{r(!1)};return e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{className:f,onClick:p,onMouseEnter:g,onMouseLeave:v,disabled:n,"aria-label":"add-icon",tabIndex:0,children:e.jsx("span",{className:"btn-icon",children:"+"})}),b&&!n&&e.jsx("div",{className:"tooltip",children:"Add"})]})}u.__docgenInfo={description:"",methods:[],displayName:"SecondaryButtonIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"ui/components/atoms/secondary-button-icon",component:u,argTypes:{onClick:{action:"clicked"},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"}}},a={args:{size:"medium",disabled:!1}},s={args:{size:"medium",disabled:!0}};var t,i,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: true
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const z=["Enabled","Disabled"];export{s as Disabled,a as Enabled,z as __namedExportsOrder,N as default};
