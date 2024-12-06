import{j as u}from"./jsx-runtime-DEdD30eg.js";import{T as d}from"./Tooltip-C8PznfVR.js";import"./index-RYns6xqu.js";import"./index-Dejnh_W_.js";const h={title:"ui/components/atoms/Tooltip",component:d,argTypes:{text:{control:"text",description:"Text that will be displayed to the user for interaction."},toolTipText:{control:"text",description:"Text that will appear in the tooltip."},variant:{control:{type:"select",options:["small","medium","large"]},description:"Determines the size of the tooltip."}}},a={render:r=>u.jsx(d,{text:r.text,toolTipText:r.toolTipText,variant:r.variant})},t={...a,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"small"},storyName:"Small Tooltip"},e={...a,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"medium"},storyName:"Medium Tooltip"},o={...a,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"large"},storyName:"Large Tooltip"};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'small'
  },
  storyName: 'Small Tooltip'
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'medium'
  },
  storyName: 'Medium Tooltip'
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,T,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'large'
  },
  storyName: 'Large Tooltip'
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const H=["Small","Medium","Large"];export{o as Large,e as Medium,t as Small,H as __namedExportsOrder,h as default};
