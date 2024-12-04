import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{B as u}from"./Button-C3gt9t9Z.js";import{T as f}from"./Toggle-Bmcm0BfL.js";import"./index-Dejnh_W_.js";const j="_table__component_go7ml_84",T="_table__component__table_go7ml_89",y="_table__component__body_go7ml_99",v="_table__component__fila_go7ml_102",n={"text-paragraph":"_text-paragraph_go7ml_43","text-short-paragraph":"_text-short-paragraph_go7ml_49","text-long-paragraph":"_text-long-paragraph_go7ml_56","text-small-paragraph":"_text-small-paragraph_go7ml_63","text-large-paragraph":"_text-large-paragraph_go7ml_70",table__component:j,table__component__table:T,table__component__body:y,table__component__fila:v};function c({data:o}){const[p,m]=i.useState(!1),[b,h]=i.useState(!1);function g(t){const a=o.find(s=>s.id===t);a&&(a.visible=!a.visible,m(!p))}function x(t){const a=o.find(s=>s.id===t);console.log(`Protected data: ${a==null?void 0:a.title}`),h(!b)}return e.jsx("div",{className:n.table__component,children:e.jsxs("table",{className:n.table__component__table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Visible"}),e.jsx("th",{children:"Protected"}),e.jsx("th",{children:"Updated"})]})}),e.jsx("tbody",{className:n.table__component__body,children:o.map(t=>e.jsxs("tr",{className:n.table__component__fila,children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.title}),e.jsx("td",{children:e.jsx(u,{onClick:()=>{g(t.id)},variant:t.visible?"secondary":"primary","aria-label":`Change visibility for ${t.title}`,children:t.visible?"Yes":"No"})}),e.jsx("td",{children:e.jsx(f,{onChange:()=>{x(t.id)},"aria-label":`Toggle protection for ${t.title}`})}),e.jsx("td",{children:t.updated})]},t.id))})]})})}c.__docgenInfo={description:"",methods:[],displayName:"TableComponent",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TableRow"}],raw:"TableRow[]"},description:""}}};const R={title:"ui/components/atoms/TableComponent",component:c,argTypes:{}},l={args:{data:[{id:1,title:"Test Title 1",visible:!0,protected:!1,updated:"2024-11-27"},{id:2,title:"Test Title 2",visible:!1,protected:!0,updated:"2024-11-28"}]}};var r,_,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: [{
      id: 1,
      title: 'Test Title 1',
      visible: true,
      protected: false,
      updated: '2024-11-27'
    }, {
      id: 2,
      title: 'Test Title 2',
      visible: false,
      protected: true,
      updated: '2024-11-28'
    }]
  }
}`,...(d=(_=l.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,R as default};
