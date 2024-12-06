import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as i}from"./Chevron-Button-tjV82gpr.js";import{C as u}from"./Checklist-B8Eipq3u.js";import l from"./angle-left-B1hLc53Q.js";import x from"./angle-right-DAeQ8TvP.js";import"./index-RYns6xqu.js";import"./icons-CJJ0WUbO.js";import"./iframe-C-D3hga_.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";import"./index-Dejnh_W_.js";const I="_container_90xfh_84",_="_setbg_90xfh_103",t={"text-paragraph":"_text-paragraph_90xfh_43","text-short-paragraph":"_text-short-paragraph_90xfh_49","text-long-paragraph":"_text-long-paragraph_90xfh_56","text-small-paragraph":"_text-small-paragraph_90xfh_63","text-large-paragraph":"_text-large-paragraph_90xfh_70",container:I,setbg:_};function c({items:n,onCheck:s,onNext:g,onPrevious:d,page:h}){return e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.container,children:[e.jsx(u,{className:t.setbg,items:n,onCheck:s,SelectCategory:()=>{}}),e.jsx("p",{children:"Entries per page"})]}),e.jsxs("div",{className:t.container,children:[e.jsx(i,{onClick:d,icon:l,variant:"Left"}),e.jsx("p",{className:t.setbg,children:h}),e.jsx(i,{onClick:g,icon:x,variant:"Right"})]})]})}c.__docgenInfo={description:"",methods:[],displayName:"BibliographyActions",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},page:{required:!0,tsType:{name:"number"},description:""},onCheck:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: string) => void",signature:{arguments:[{type:{name:"string"},name:"item"}],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const S={title:"BibliographyActions",component:c,args:{items:[],onCheck:()=>{},onNext:()=>{},onPrevious:()=>{},page:1}};let a=1;const r={args:{items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10"],onCheck:n=>{new Set().add(n)},onNext:()=>{a+=1},page:a,onPrevious:()=>{a-=1}}};var o,m,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'],
    onCheck: (item: string) => {
      const checkedItems = new Set<string>();
      checkedItems.add(item);
    },
    onNext: () => {
      page += 1;
    },
    page,
    onPrevious: () => {
      page -= 1;
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["BibliographyActionsStory"];export{r as BibliographyActionsStory,q as __namedExportsOrder,S as default};
