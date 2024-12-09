import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as s}from"./Checklist-B8Eipq3u.js";import"./index-RYns6xqu.js";import"./index-Dejnh_W_.js";const d={title:"ui/components/atoms/Checklist",component:s,argTypes:{onCheck:{action:"clicked"},SelectCategory:{action:"clicked"}}},t={render:o=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("div",{children:e.jsx(s,{items:["Columns","Rows","Cells"],onCheck:o.onCheck,number:[],SelectCategory:()=>{}})}),e.jsx("div",{children:e.jsx(s,{items:[" 10"," 20"," 30"," 40"," 50"],SelectCategory:o.SelectCategory,onCheck:()=>{},number:[10,20,30,40,50]})})]})};var r,n,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex'
  }}>
      <div>
        <Checklist items={['Columns', 'Rows', 'Cells']} onCheck={args.onCheck} number={[]} SelectCategory={() => {}} />
      </div>
      <div>
        <Checklist items={[' 10', ' 20', ' 30', ' 40', ' 50']} SelectCategory={args.SelectCategory} onCheck={() => {}} number={[10, 20, 30, 40, 50]} />
      </div>
    </div>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,d as default};
