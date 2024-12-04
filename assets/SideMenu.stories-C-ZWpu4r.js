import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{S as p}from"./SideMenuButton-Qq_K9lEh.js";import h from"./circle-left-BwFh-sbA.js";import b from"./lines-D7O0aiOL.js";import"./index-Dejnh_W_.js";import"./icons-z4OqhzVY.js";import"./iframe-Cg-cFZf3.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const _="_collapsed_11m41_113",M="_icon_11m41_158",n={"text-paragraph":"_text-paragraph_11m41_43","text-short-paragraph":"_text-short-paragraph_11m41_49","text-long-paragraph":"_text-long-paragraph_11m41_56","text-small-paragraph":"_text-small-paragraph_11m41_63","text-large-paragraph":"_text-large-paragraph_11m41_70","side-menu":"_side-menu_11m41_84",collapsed:_,"menu-header":"_menu-header_11m41_137","hide-menu-button":"_hide-menu-button_11m41_145",icon:M,"menu-list":"_menu-list_11m41_174","side-menu-button":"_side-menu-button_11m41_179"};function o({menuItems:l,onClick:g}){const[a,u]=d.useState(!1),c=()=>{u(e=>!e)};return t.jsxs("aside",{"data-testid":"side-menu",className:`${n["side-menu"]} ${a?n.collapsed:""}`,children:[t.jsx("div",{className:n["menu-header"],children:t.jsxs("button",{className:n["hide-menu-button"],onClick:c,children:[t.jsx("span",{className:n.icon,dangerouslySetInnerHTML:{__html:a?b:h}}),!a&&"HIDE MENU"]})}),t.jsx("nav",{className:n["menu-list"],children:l.map(e=>t.jsx(p,{icon:e.icon,path:e.path,basePath:e.basePath,className:a?n.collapsed:"",onClick:g,children:a?null:e.title},e.id))})]})}o.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | string;
  title: string;
  icon: string;
  path: string;
  basePath: string;
  name?: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}},{key:"basePath",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!1}}]}}],raw:`{
  id: number | string;
  title: string;
  icon: string;
  path: string;
  basePath: string;
  name?: string;
}[]`},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"ui/components/molecules/SideMenu",component:o,argTypes:{onClick:{action:"click"}}},i={args:{menuItems:[{id:"1",title:"Content Management",icon:"content-management",path:"/Content-Management",basePath:"/"},{id:"2",title:"Article Management",icon:"article-management",path:"/Article-Management",basePath:"/"},{id:"3",title:"Author Management",icon:"author-management",path:"/Author-Management",basePath:"/"},{id:"4",title:"Bibliographines",icon:"bibliographines",path:"/Bibliographines",basePath:"/"},{id:"5",title:"Image Galley",icon:"image-gallery",path:"/Image-Galley",basePath:"/"},{id:"6",title:"Index Builder",icon:"index-builder",path:"/Index-Builder",basePath:"/"},{id:"7",title:"Volume Management",icon:"volume-management",path:"/Volume-Management",basePath:"/"},{id:"8",title:"Site Configuration",icon:"site-configuration",path:"/Site-Configuration",basePath:"/"},{id:"9",title:"SEO Settings",icon:"seo-settings",path:"/SEO-Settings",basePath:"/"},{id:"10",title:"Dynamic Banner Management",icon:"dinamicBannerManagement",path:"/Dynamic-Banner-Management",basePath:"/"},{id:"11",title:"User Management",icon:"user-management",path:"/User-Management",basePath:"/"}]}};var r,s,m;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    menuItems: [{
      id: '1',
      title: 'Content Management',
      icon: 'content-management',
      path: '/Content-Management',
      basePath: '/'
    }, {
      id: '2',
      title: 'Article Management',
      icon: 'article-management',
      path: '/Article-Management',
      basePath: '/'
    }, {
      id: '3',
      title: 'Author Management',
      icon: 'author-management',
      path: '/Author-Management',
      basePath: '/'
    }, {
      id: '4',
      title: 'Bibliographines',
      icon: 'bibliographines',
      path: '/Bibliographines',
      basePath: '/'
    }, {
      id: '5',
      title: 'Image Galley',
      icon: 'image-gallery',
      path: '/Image-Galley',
      basePath: '/'
    }, {
      id: '6',
      title: 'Index Builder',
      icon: 'index-builder',
      path: '/Index-Builder',
      basePath: '/'
    }, {
      id: '7',
      title: 'Volume Management',
      icon: 'volume-management',
      path: '/Volume-Management',
      basePath: '/'
    }, {
      id: '8',
      title: 'Site Configuration',
      icon: 'site-configuration',
      path: '/Site-Configuration',
      basePath: '/'
    }, {
      id: '9',
      title: 'SEO Settings',
      icon: 'seo-settings',
      path: '/SEO-Settings',
      basePath: '/'
    }, {
      id: '10',
      title: 'Dynamic Banner Management',
      icon: 'dinamicBannerManagement',
      path: '/Dynamic-Banner-Management',
      basePath: '/'
    }, {
      id: '11',
      title: 'User Management',
      icon: 'user-management',
      path: '/User-Management',
      basePath: '/'
    }]
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const A=["Default"];export{i as Default,A as __namedExportsOrder,j as default};
