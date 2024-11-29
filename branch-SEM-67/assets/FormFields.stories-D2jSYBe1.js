import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";function s({placeholder:t}){return e.jsx("div",{className:"form-fields",children:["Full name","InstitutionalAffiliation","ORCID","CopyrightRegistration","Articles","Email"].map(o=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:o.toLowerCase().replace(" ","-"),className:"form-label",children:o}),e.jsx("input",{type:"text",id:o.toLowerCase().replace(" ","-"),placeholder:t,className:"form-input"})]},o))})}s.__docgenInfo={description:"",methods:[],displayName:"FormFields",props:{placeholder:{required:!0,tsType:{name:"string"},description:""}}};const p={title:"Components/FormFields",component:s,argTypes:{placeholder:{control:"text",defaultValue:"Placeholder text"}}};function r({placeholder:t}){return e.jsx(s,{placeholder:t})}r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{placeholder:{required:!0,tsType:{name:"string"},description:""}}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`function Default({
  placeholder
}: {
  placeholder: string;
}) {
  return <FormFields placeholder={placeholder} />;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const c=["Default"];export{r as Default,c as __namedExportsOrder,p as default};
