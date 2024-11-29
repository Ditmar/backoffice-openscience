import{j as y}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{c as E}from"./index-Dejnh_W_.js";const T="_link_1spwa_1",e={link:T,"link--small":"_link--small_1spwa_7","link--medium":"_link--medium_1spwa_10","link--large":"_link--large_1spwa_13","link--focus":"_link--focus_1spwa_29","link--disabled":"_link--disabled_1spwa_38"};function b({size:n="medium",disabled:i=!1,isFocused:g=!1,onClick:r,href:h="#"}){const v=E(e.link,{[e["link--small"]]:n==="small",[e["link--medium"]]:n==="medium",[e["link--large"]]:n==="large",[e["link--disabled"]]:i,[e["link--focus"]]:g}),w=o=>{if(i){o.preventDefault();return}r==null||r(o)};return y.jsx("a",{className:v,onClick:w,href:h,children:"Links action"})}b.__docgenInfo={description:"",methods:[],displayName:"Links",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}}}};const x={title:"ui/components/atoms/Links",component:b,argTypes:{onClick:{action:"click"},disabled:{control:"boolean"},isFocused:{control:"boolean"}}},s={args:{disabled:!1,href:"#",size:"medium"}},a={args:{disabled:!1,isFocused:!0,href:"#",size:"medium"}},l={args:{disabled:!0,size:"medium"}};var d,t,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    href: '#',
    size: 'medium'
  }
}`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: false,
    isFocused: true,
    href: '#',
    size: 'medium'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,k,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    size: 'medium'
  }
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const z=["Enabled","Focused","Disabled"];export{l as Disabled,s as Enabled,a as Focused,z as __namedExportsOrder,x as default};
