import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as h}from"./index-RYns6xqu.js";function u({onSubmit:n}){const[a,l]=h.useState({username:"",email:"",password:"",role:""}),r=t=>{const{name:p,value:c}=t.target;l(g=>({...g,[p]:c}))},d=t=>{t.preventDefault(),n(a)};return e.jsxs("form",{onSubmit:d,className:"user-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("span",{className:"input-label",children:"Username"}),e.jsx("input",{type:"text",id:"username",name:"username",value:a.username,placeholder:"Enter your username",minLength:6,onChange:r,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("span",{className:"input-label",children:"Username"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,placeholder:"Enter your email",onChange:r,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("span",{className:"input-label",children:"Username"}),e.jsx("input",{type:"password",id:"password",name:"password",value:a.password,placeholder:"Enter your password",minLength:6,onChange:r,required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("span",{className:"input-label",children:"Username"}),e.jsx("input",{type:"text",id:"role",name:"role",value:a.role,placeholder:"Enter your role",onChange:r,required:!0})]}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit"})]})}u.__docgenInfo={description:"",methods:[],displayName:"UserForm",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormData) => void",signature:{arguments:[{type:{name:"FormData"},name:"data"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"components/atoms/user-form",component:u,argTypes:{onClick:{action:"click"}}},s={args:{onSubmit:n=>{console.log("Form data submitted:",n)}}};var o,i,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    onSubmit: (data: {
      username: string;
      email: string;
      password: string;
      role: string;
    }) => {
      console.log('Form data submitted:', data);
    }
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,b as default};