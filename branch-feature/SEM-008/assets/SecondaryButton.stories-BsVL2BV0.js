import{j as c}from"./jsx-runtime-DEdD30eg.js";import{c as A}from"./index-Dejnh_W_.js";import{r as e}from"./index-RYns6xqu.js";function x({size:C="medium",disabled:n=!1,onClick:E,active:l=!1,focused:F=!1,hovered:V=!1}){const[j,d]=e.useState(V),[H,u]=e.useState(F),M=A("btn-secondary",`btn--${C}`,{"btn--disabled":n,"btn--active":l,"btn--hovered":j,"btn--focused":H}),_=e.useCallback(()=>{d(!0)},[]),I=e.useCallback(()=>{d(!1)},[]),N=e.useCallback(()=>{u(!0)},[]),w=e.useCallback(()=>{u(!1)},[]);return c.jsx("button",{className:M,onClick:E,onMouseEnter:_,onMouseLeave:I,onFocus:N,onBlur:w,disabled:n,"aria-pressed":l,children:c.jsx("span",{children:"Secondary button"})})}x.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hovered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const R={title:"ui/components/atoms/SecondaryButton",component:x,argTypes:{onClick:{action:"clicked"},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"},active:{control:"boolean"},focused:{control:"boolean"},hovered:{control:"boolean"}}},s={args:{size:"medium",disabled:!1,active:!1,focused:!1,hovered:!1}},a={args:{size:"medium",disabled:!1,active:!1,focused:!1,hovered:!0}},o={args:{size:"medium",disabled:!1,active:!0,focused:!1,hovered:!1}},r={args:{size:"medium",disabled:!1,focused:!0,active:!1,hovered:!1}},t={args:{size:"medium",disabled:!0,active:!1,focused:!1,hovered:!1}};var i,m,f;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,v,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false,
    active: false,
    focused: false,
    hovered: true
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false,
    active: true,
    focused: false,
    hovered: false
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,z,S;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false,
    focused: true,
    active: false,
    hovered: false
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var T,k,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: true,
    active: false,
    focused: false,
    hovered: false
  }
}`,...(q=(k=t.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const $=["EnabledButton","HoverButton","ActiveButton","FocusedButton","DisabledButton"];export{o as ActiveButton,t as DisabledButton,s as EnabledButton,r as FocusedButton,a as HoverButton,$ as __namedExportsOrder,R as default};
