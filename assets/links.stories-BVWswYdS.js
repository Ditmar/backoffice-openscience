import{j as y}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{c as E}from"./index-Dejnh_W_.js";const T="_link_1dc6o_84",e={"text-paragraph":"_text-paragraph_1dc6o_43","text-short-paragraph":"_text-short-paragraph_1dc6o_49","text-long-paragraph":"_text-long-paragraph_1dc6o_56","text-small-paragraph":"_text-small-paragraph_1dc6o_63","text-large-paragraph":"_text-large-paragraph_1dc6o_70",link:T,"link--small":"_link--small_1dc6o_92","link--medium":"_link--medium_1dc6o_95","link--large":"_link--large_1dc6o_98","link--focus":"_link--focus_1dc6o_114","link--disabled":"_link--disabled_1dc6o_123"};function k({size:l="medium",disabled:t=!1,isFocused:h=!1,onClick:n,href:b="#"}){const x=E(e.link,{[e["link--small"]]:l==="small",[e["link--medium"]]:l==="medium",[e["link--large"]]:l==="large",[e["link--disabled"]]:t,[e["link--focus"]]:h}),v=i=>{if(t){i.preventDefault();return}n==null||n(i)};return y.jsx("a",{className:x,onClick:v,href:b,children:"Links action"})}k.__docgenInfo={description:"",methods:[],displayName:"Links",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}}}};const z={title:"ui/components/atoms/Links",component:k,argTypes:{onClick:{action:"click"},disabled:{control:"boolean"},isFocused:{control:"boolean"}}},a={args:{disabled:!1,href:"#",size:"medium"}},s={args:{disabled:!1,isFocused:!0,href:"#",size:"medium"}},r={args:{disabled:!0,size:"medium"}};var o,d,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false,
    href: '#',
    size: 'medium'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    isFocused: true,
    href: '#',
    size: 'medium'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var _,f,g;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    size: 'medium'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Enabled","Focused","Disabled"];export{r as Disabled,a as Enabled,s as Focused,H as __namedExportsOrder,z as default};
