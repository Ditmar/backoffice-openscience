import{j as N}from"./jsx-runtime-DEdD30eg.js";import{c as D}from"./index-Dejnh_W_.js";import"./index-RYns6xqu.js";const M="_tablabel_1g0kk_84",w="_active_1g0kk_96",A="_selected_1g0kk_102",C="_disabled_1g0kk_109",I="_small_1g0kk_125",O="_medium_1g0kk_130",R="_large_1g0kk_135",e={"text-paragraph":"_text-paragraph_1g0kk_43","text-short-paragraph":"_text-short-paragraph_1g0kk_49","text-long-paragraph":"_text-long-paragraph_1g0kk_56","text-small-paragraph":"_text-small-paragraph_1g0kk_63","text-large-paragraph":"_text-large-paragraph_1g0kk_70",tablabel:M,active:w,selected:A,disabled:C,"focus-enabled":"_focus-enabled_1g0kk_114","focus-selected":"_focus-selected_1g0kk_121",small:I,medium:O,large:R};function h(f){const{text:S,variant:n,isEnable:i,isSelect:y}=f,q=y??!1,j=D(e.tablabel,{[e.small]:n==="small",[e.medium]:n==="medium",[e.large]:n==="large",[e.disabled]:!i,[e.active]:i,[e.selected]:q});return N.jsx("div",{className:j,children:S})}h.__docgenInfo={description:"",methods:[],displayName:"TabLabel2",props:{text:{required:!0,tsType:{name:"string"},description:""},isEnable:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}]},description:""},isSelect:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"ui/components/atoms/TabLabel2",component:h,argTypes:{text:{control:"text",type:{name:"string",required:!0}},isEnable:{control:"boolean",type:{name:"boolean",required:!0}}}},a={args:{text:"TabLabel2",isEnable:!0,variant:"large"}},t={args:{text:"TabLabel2",isEnable:!0,variant:"medium"}},r={args:{text:"TabLabel2",isEnable:!0,variant:"small"}},s={args:{text:"TabLabel2",isEnable:!0,variant:"selected",isSelect:!0}},l={args:{text:"TabLabel2",isEnable:!1,variant:"disabled"}};var o,c,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'large'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,b,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'medium'
  }
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,g,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'small'
  }
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var x,k,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel2',
    isEnable: true,
    variant: 'selected',
    isSelect: true
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,E,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'TabLabel2',
    isEnable: false,
    variant: 'disabled'
  }
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const H=["Large","Medium","Small","Selected","Disabled"];export{l as Disabled,a as Large,t as Medium,s as Selected,r as Small,H as __namedExportsOrder,G as default};
