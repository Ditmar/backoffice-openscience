import{j as e}from"./jsx-runtime-DEdD30eg.js";import{H as c}from"./HeaderDraft-CMlZqpjR.js";import{E as f}from"./EditModelButton-DRrZ98pH.js";import{C as p}from"./ConfigureViewButton-Df8L4K4Y.js";import{P as t}from"./Placeholder-Bzf9ULqk.js";import"./index-RYns6xqu.js";import"./index-Dejnh_W_.js";import"./icons-Bzse2u5K.js";import"./iframe-BWnfuqKd.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const u="_form__site_3eqlj_1",g="_form__group_3eqlj_16",j="_form__field_3eqlj_37",x="_form__label_3eqlj_45",h="_form__submit_3eqlj_51",y="_container_3eqlj_65",v="_form__editing_3eqlj_70",a={form__site:u,form__group:g,form__field:j,form__label:x,form__submit:h,container:y,form__editing:v};function o({data:m,onChange:r}){return e.jsxs("form",{className:a.form__site,children:[e.jsxs("div",{className:a.form__group,children:[e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Site Title"}),e.jsx(t,{onChange:r,placeholder:"Enter your site title"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Language"}),e.jsx(t,{onChange:r,placeholder:"Enter your default language"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Author"}),e.jsx(t,{onChange:r,placeholder:"Enter your default author"})]})]}),e.jsxs("div",{className:a.form__group,children:[e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Email"}),e.jsx(t,{onChange:r,placeholder:"Enter your default email"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Taxonomy Types"}),e.jsx(t,{onChange:r,placeholder:"Enter your taxonomy types"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx(c,{variant:"primary",size:"large",text:"Editing draft version",icon:"period",headingLevel:"h2"}),e.jsxs("div",{className:a.form__editing,children:[e.jsx("div",{children:e.jsx("ul",{children:m.map(({data:d,label:_})=>e.jsxs("li",{children:[e.jsx("span",{children:_}),e.jsx("span",{children:d})]}))})}),e.jsxs("div",{children:[e.jsx(f,{variant:"primary",text:"Edit the model",icon:"pencil",size:"medium",onClick:()=>{console.log("Edit Model")}}),e.jsx(p,{onClick:()=>{console.log("Configure View")},variant:"primary",text:"Configure the view",isBurger:!0,size:"medium"})]})]})]})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"FormSiteConfig",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  data: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"data",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  data: string;
}[]`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const D={title:"ui/components/molecules/form-site-config",component:o,argTypes:{onChange:{action:"typed"}}},n={args:{data:[{label:"INFORMATION",data:"now"},{label:"Created",data:""},{label:"By",data:"now"},{label:"Last Uptade",data:""},{label:"By",data:""}]}};var s,l,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'INFORMATION',
      data: 'now'
    }, {
      label: 'Created',
      data: ''
    }, {
      label: 'By',
      data: 'now'
    }, {
      label: 'Last Uptade',
      data: ''
    }, {
      label: 'By',
      data: ''
    }]
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const H=["Default"];export{n as Default,H as __namedExportsOrder,D as default};
