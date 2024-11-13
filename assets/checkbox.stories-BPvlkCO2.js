import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";function I({label:i,size:N="medium",checked:m,disabled:u=!1,onChange:d,autoFocus:p=!1,id:b}){const[w,L]=l.useState(m??!1),o=l.useRef(null);l.useEffect(()=>{p&&o.current&&o.current.focus()},[p]);const M=V=>{u||(L(D=>!D),d&&d(V))};return c.jsxs("div",{className:`checkbox checkbox--${N}`,children:[c.jsx("input",{type:"checkbox",className:"checkbox__input",id:b,ref:o,checked:m??w,disabled:u,onChange:M}),i&&c.jsx("label",{className:"checkbox__label",htmlFor:b,children:i})]})}I.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"ui/components/demo/atoms/checkbox",component:I,argTypes:{onChange:{action:"changed"},size:{control:{type:"select",options:["small","medium","large"]}}}},e={args:{label:"Checkbox item",size:"medium",disabled:!1}},a={args:{label:"Checkbox item",size:"medium",disabled:!1}},s={args:{label:"Checkbox item",size:"medium",autoFocus:!0}},r={args:{label:"Checkbox item",size:"medium",checked:!0}},t={args:{label:"Checkbox item",size:"medium",checked:!0,autoFocus:!0}},n={args:{label:"Checkbox item",size:"medium",disabled:!0}};var h,f,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: false
  }
}`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,k,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: false
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,z,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    autoFocus: true
  }
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var y,S,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    checked: true
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var F,_,q;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    checked: true,
    autoFocus: true
  }
}`,...(q=(_=t.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var R,j,H;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox item',
    size: 'medium',
    disabled: true
  }
}`,...(H=(j=n.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const B=["Enabled","Hover","FocusEnabled","Selected","FocusSelected","Disabled"];export{n as Disabled,e as Enabled,s as FocusEnabled,t as FocusSelected,a as Hover,r as Selected,B as __namedExportsOrder,A as default};
