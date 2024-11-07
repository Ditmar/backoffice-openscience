import{j as o}from"./jsx-runtime-DEdD30eg.js";import{c as N}from"./index-Dejnh_W_.js";import{G as w}from"./iconBase-DPnZGaMX.js";import"./index-RYns6xqu.js";function f(e){return w({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z"},child:[]}]})(e)}const j="_tooltip_on75w_1",S="_container_on75w_8",H="_icon_on75w_14",z="_text_on75w_19",M="_tips_on75w_23",L="_small_on75w_54",q="_medium_on75w_61",I="_large_on75w_68",t={tooltip:j,container:S,icon:H,text:z,tips:M,small:L,medium:q,large:I};function i(e){const{text:v,variant:r="medium",toolTipText:h}=e,y=N(t.tooltip,{[t.small]:r==="small",[t.medium]:r==="medium",[t.large]:r==="large"});return o.jsxs("div",{className:t.tooltip,children:[o.jsx("span",{className:t.text,children:v}),o.jsxs("span",{className:t.container,children:[o.jsx(f,{className:t.icon,"data-testid":"tooltip-icon"}),o.jsx("span",{className:`${y} ${t.tips}`,children:h})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},toolTipText:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""}}};const B={title:"ui/components/atoms/Tooltip",component:i,argTypes:{text:{control:"text",description:"Text that will be displayed to the user for interaction."},toolTipText:{control:"text",description:"Text that will appear in the tooltip."},variant:{control:{type:"select",options:["small","medium","large"]},description:"Determines the size of the tooltip."}}},l={render:e=>o.jsx(i,{text:e.text,toolTipText:e.toolTipText,variant:e.variant})},a={...l,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"small"},storyName:"Small Tooltip"},n={...l,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"medium"},storyName:"Medium Tooltip"},s={...l,args:{text:"Hover me!",toolTipText:"Tooltip content",variant:"large"},storyName:"Large Tooltip"};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'small'
  },
  storyName: 'Small Tooltip'
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,T,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'medium'
  },
  storyName: 'Medium Tooltip'
}`,...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var x,g,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Hover me!',
    toolTipText: 'Tooltip content',
    variant: 'large'
  },
  storyName: 'Large Tooltip'
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const C=["Small","Medium","Large"];export{s as Large,n as Medium,a as Small,C as __namedExportsOrder,B as default};
