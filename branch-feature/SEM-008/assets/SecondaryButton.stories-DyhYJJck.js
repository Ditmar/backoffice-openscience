import{j as i}from"./jsx-runtime-DEdD30eg.js";import{c as _}from"./index-Dejnh_W_.js";import{r as e}from"./index-RYns6xqu.js";function H({size:k="Enabled",disabled:n=!1,onClick:x,active:t=!1,focused:C=!1,hovered:A=!1}){const[D,d]=e.useState(A),[B,c]=e.useState(C),N=_("btn-enabled",`btn--${k}`,{"btn--disabled":n,"btn--active":t,"btn--hovered":D,"btn--focused":B}),R=e.useCallback(()=>{d(!0)},[]),V=e.useCallback(()=>{d(!1)},[]),j=e.useCallback(()=>{c(!0)},[]),M=e.useCallback(()=>{c(!1)},[]);return i.jsx("button",{className:N,onClick:x,onMouseEnter:R,onMouseLeave:V,onFocus:j,onBlur:M,disabled:n,"aria-pressed":t,children:i.jsx("span",{children:"Secondary button"})})}H.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'Enabled' | 'Focus' | 'Hover' | 'Active' | 'Disabled'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'Enabled'"},{name:"literal",value:"'Focus'"},{name:"literal",value:"'Hover'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disabled'"}]},description:"",defaultValue:{value:"'Enabled'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},enabled:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hovered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O={title:"ui/components/atoms/SecondaryButton",component:H,argTypes:{onClick:{action:"clicked"},enabled:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},focused:{control:"boolean"},hovered:{control:"boolean"}}},a={args:{size:"Enabled",disabled:!1,active:!1,focused:!1,hovered:!1}},s={args:{size:"Hover",disabled:!1,active:!1,focused:!1,hovered:!0}},o={args:{size:"Active",disabled:!1,active:!0,focused:!1,hovered:!1}},r={args:{size:"Focus",disabled:!1,focused:!0,active:!1,hovered:!1}},l={args:{size:"Disabled",disabled:!0,active:!1,focused:!1,hovered:!1}};var u,f,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'Enabled',
    disabled: false,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var p,v,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'Hover',
    disabled: false,
    active: false,
    focused: false,
    hovered: true
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'Active',
    disabled: false,
    active: true,
    focused: false,
    hovered: false
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var E,z,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'Focus',
    disabled: false,
    focused: true,
    active: false,
    hovered: false
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var F,T,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'Disabled',
    disabled: true,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const $=["Enabled","Hover","Active","Focus","Disabled"];export{o as Active,l as Disabled,a as Enabled,r as Focus,s as Hover,$ as __namedExportsOrder,O as default};
