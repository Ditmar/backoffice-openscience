import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as h}from"./index-RYns6xqu.js";import{c as g}from"./index-Dejnh_W_.js";import{s as G}from"./share-BzsyOB66.js";import{I as H}from"./icons-C45oln94.js";import"./index-rNTiGNI1.js";const J="_tooltip_j6k2a_1",a={tooltip:J,"tooltip-content":"_tooltip-content_j6k2a_9","tooltip-text":"_tooltip-text_j6k2a_28","definition-tooltip":"_definition-tooltip_j6k2a_37","tooltip-icon":"_tooltip-icon_j6k2a_48","tooltip-small":"_tooltip-small_j6k2a_53","tooltip-top":"_tooltip-top_j6k2a_65","tooltip-bottom":"_tooltip-bottom_j6k2a_78","tooltip-left":"_tooltip-left_j6k2a_91","tooltip-right":"_tooltip-right_j6k2a_104","tooltip-medium":"_tooltip-medium_j6k2a_124","tooltip-large":"_tooltip-large_j6k2a_129"};function O({children:o,variant:d="bottom",text:A="default",size:u="medium"}){const F=g(a.tooltip,{[a[`tooltip-${d}`]]:d,[a[`tooltip-${u}`]]:u});return e.jsxs("div",{className:F,children:[h.isValidElement(o)?h.cloneElement(o,{className:g(o.props.className,a["tooltip-icon"])}):o,e.jsx("span",{className:a["tooltip-content"],children:A})]})}O.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ className?: string }>",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const Y={title:"ui/components/atoms/tooltip_II",component:O,argTypes:{variant:{control:{type:"select"},options:["top","bottom","left","right"]},size:{control:{type:"select"},options:["small","medium","large"]}}};function t(){return e.jsx(H,{src:G,size:"24px"})}const r={args:{text:"Share",variant:"top",size:"medium",children:e.jsx(t,{})}},s={args:{text:"Share",variant:"bottom",size:"medium",children:e.jsx(t,{})}},i={args:{text:"Share",variant:"left",size:"medium",children:e.jsx(t,{})}},n={args:{text:"Share",variant:"right",size:"medium",children:e.jsx(t,{})}},l={args:{text:"Share",variant:"bottom",size:"small",children:e.jsx(t,{})}},m={args:{text:"Share",variant:"bottom",size:"medium",children:e.jsx(t,{})}},c={args:{text:"Share",variant:"bottom",size:"large",children:e.jsx(t,{})}},p={args:{text:"Brief definition of the underlined word abode",variant:"bottom",size:"small",children:e.jsx("span",{className:"definition-tooltip",children:"Definition Tooltip"})}};var f,_,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'top',
    size: 'medium',
    children: <ShareIcon />
  }
}`,...(x=(_=r.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,v,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'medium',
    children: <ShareIcon />
  }
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,z,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'left',
    size: 'medium',
    children: <ShareIcon />
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,T,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'right',
    size: 'medium',
    children: <ShareIcon />
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var N,R,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'small',
    children: <ShareIcon />
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var E,q,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'medium',
    children: <ShareIcon />
  }
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var L,V,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'Share',
    variant: 'bottom',
    size: 'large',
    children: <ShareIcon />
  }
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var M,$,C;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Brief definition of the underlined word abode',
    variant: 'bottom',
    size: 'small',
    children: <span className="definition-tooltip">Definition Tooltip</span>
  }
}`,...(C=($=p.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const Z=["Top","Bottom","Left","Right","Small","Medium","Large","Text"];export{s as Bottom,c as Large,i as Left,m as Medium,n as Right,l as Small,p as Text,r as Top,Z as __namedExportsOrder,Y as default};
