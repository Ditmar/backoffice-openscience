import{j as u}from"./jsx-runtime-DEdD30eg.js";import{c as w}from"./index-Dejnh_W_.js";import{r as e}from"./index-RYns6xqu.js";const a={"btn-container":"_btn-container_bre67_1","btn-enabled":"_btn-enabled_bre67_6","btn--active":"_btn--active_bre67_21","btn--hovered":"_btn--hovered_bre67_31","btn--focused":"_btn--focused_bre67_41","btn--disabled":"_btn--disabled_bre67_51","btn--small":"_btn--small_bre67_62","btn--medium":"_btn--medium_bre67_67","btn--large":"_btn--large_bre67_72"};function H({size:k="Enabled",disabled:t=!1,onClick:x,active:d=!1,focused:C=!1,hovered:A=!1}){const[D,c]=e.useState(A),[B,i]=e.useState(C),N=w(a["btn-enabled"],a[`btn--${k}`],{[a["btn--disabled"]]:t,[a["btn--active"]]:d,[a["btn--hovered"]]:D,[a["btn--focused"]]:B}),R=e.useCallback(()=>{c(!0)},[]),V=e.useCallback(()=>{c(!1)},[]),j=e.useCallback(()=>{i(!0)},[]),M=e.useCallback(()=>{i(!1)},[]);return u.jsx("button",{className:N,onClick:x,onMouseEnter:R,onMouseLeave:V,onFocus:j,onBlur:M,disabled:t,"aria-pressed":d,children:u.jsx("span",{children:"Secondary button"})})}H.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'Enabled' | 'Focus' | 'Hover' | 'Active' | 'Disabled'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'Enabled'"},{name:"literal",value:"'Focus'"},{name:"literal",value:"'Hover'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Disabled'"}]},description:"",defaultValue:{value:"'Enabled'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},enabled:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hovered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $={title:"ui/components/atoms/SecondaryButton",component:H,argTypes:{onClick:{action:"clicked"},enabled:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},focused:{control:"boolean"},hovered:{control:"boolean"}}},s={args:{size:"Enabled",disabled:!1,active:!1,focused:!1,hovered:!1}},r={args:{size:"Hover",disabled:!1,active:!1,focused:!1,hovered:!0}},o={args:{size:"Active",disabled:!1,active:!0,focused:!1,hovered:!1}},n={args:{size:"Focus",disabled:!1,focused:!0,active:!1,hovered:!1}},l={args:{size:"Disabled",disabled:!0,active:!1,focused:!1,hovered:!1}};var b,f,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'Enabled',
    disabled: false,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var v,p,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'Hover',
    disabled: false,
    active: false,
    focused: false,
    hovered: true
  }
}`,...(_=(p=r.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'Active',
    disabled: false,
    active: true,
    focused: false,
    hovered: false
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var E,z,S;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'Focus',
    disabled: false,
    focused: true,
    active: false,
    hovered: false
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var F,T,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'Disabled',
    disabled: true,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const G=["Enabled","Hover","Active","Focus","Disabled"];export{o as Active,l as Disabled,s as Enabled,n as Focus,r as Hover,G as __namedExportsOrder,$ as default};
