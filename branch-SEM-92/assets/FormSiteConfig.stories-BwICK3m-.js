import{j as e}from"./jsx-runtime-DEdD30eg.js";import{H as _}from"./HeaderDraft-BdBnbVci.js";import{E as c}from"./EditModelButton-BlRbtGTH.js";import{C as f}from"./ConfigureViewButton-ZR6goGrA.js";import{P as t}from"./Placeholder-Bzf9ULqk.js";import"./index-RYns6xqu.js";import"./index-Dejnh_W_.js";import"./icons-DAqTuV51.js";import"./iframe-Bu2fdkGj.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const p="_form__site_qdcwb_1",g="_form__group_qdcwb_8",x="_form__field_qdcwb_15",y="_form__label_qdcwb_24",h="_form__submit_qdcwb_30",j="_form__editing_qdcwb_38",a={form__site:p,form__group:g,form__field:x,form__label:y,form__submit:h,form__editing:j};function i({data:m,onChange:r}){return e.jsxs("form",{className:a.form__site,children:[e.jsxs("div",{className:a.form__group,children:[e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Site Title"}),e.jsx(t,{onChange:r,placeholder:"Enter your site title"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Language"}),e.jsx(t,{onChange:r,placeholder:"Enter your default language"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Author"}),e.jsx(t,{onChange:r,placeholder:"Enter your default author"})]})]}),e.jsxs("div",{className:a.form__group,children:[e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Default Email"}),e.jsx(t,{onChange:r,placeholder:"Enter your default email"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx("span",{className:a.form__label,children:"Taxonomy Types"}),e.jsx(t,{onChange:r,placeholder:"Enter your taxonomy types"})]}),e.jsxs("div",{className:a.form__field,children:[e.jsx(_,{variant:"primary",size:"large",text:"Editing draft version",icon:"period",headingLevel:"h2"}),e.jsxs("div",{className:a.form__editing,children:[e.jsx("div",{children:e.jsx("ul",{children:m.map(({data:d,label:u})=>e.jsxs("li",{children:[e.jsx("span",{children:u}),e.jsx("span",{children:d})]}))})}),e.jsxs("div",{children:[e.jsx(c,{variant:"primary",text:"Edit the model",icon:"pencil",size:"medium",onClick:()=>{console.log("Edit Model")}}),e.jsx(f,{onClick:()=>{console.log("Configure View")},variant:"primary",text:"Configure the view",isBurger:!0,size:"medium"})]})]})]})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"FormSiteConfig",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  data: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"data",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  data: string;
}[]`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const H={title:"ui/components/molecules/form-site-config",component:i,argTypes:{onChange:{action:"typed"}}},n={args:{data:[{label:"Site Title",data:"Enter your site title"},{label:"Default Language",data:"Enter your default language"},{label:"Default Author",data:"Enter your default author"},{label:"Default Email",data:"Enter your default email"},{label:"Taxonomy Types",data:"Enter your taxonomy types"}]}};var l,s,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'Site Title',
      data: 'Enter your site title'
    }, {
      label: 'Default Language',
      data: 'Enter your default language'
    }, {
      label: 'Default Author',
      data: 'Enter your default author'
    }, {
      label: 'Default Email',
      data: 'Enter your default email'
    }, {
      label: 'Taxonomy Types',
      data: 'Enter your taxonomy types'
    }]
  }
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,H as default};
