import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{S as p}from"./SideMenuButton-CEJQyIiX.js";import h from"./circle-left-BwFh-sbA.js";import b from"./lines-D7O0aiOL.js";import"./index-Dejnh_W_.js";import"./icons-BYBjJubX.js";import"./iframe-ChqNxQNG.js";import"../sb-preview/runtime.js";import"./index-rNTiGNI1.js";const _="_collapsed_1ktsw_86",M="_icon_1ktsw_112",n={"text-paragraph":"_text-paragraph_1ktsw_36","text-short-paragraph":"_text-short-paragraph_1ktsw_42","text-long-paragraph":"_text-long-paragraph_1ktsw_49","text-small-paragraph":"_text-small-paragraph_1ktsw_56","text-large-paragraph":"_text-large-paragraph_1ktsw_63","side-menu":"_side-menu_1ktsw_77",collapsed:_,"menu-header":"_menu-header_1ktsw_90","hide-menu-button":"_hide-menu-button_1ktsw_99",icon:M,"menu-list":"_menu-list_1ktsw_128","side-menu-button":"_side-menu-button_1ktsw_133"};function m({menuItems:l,onClick:g}){const[t,u]=d.useState(!1),c=()=>{u(e=>!e),console.log("isCollapsed:",!t)};return a.jsxs("aside",{"data-testid":"side-menu",className:`${n["side-menu"]} ${t?n.collapsed:""}`,children:[a.jsx("div",{className:n["menu-header"],children:a.jsxs("button",{className:n["hide-menu-button"],onClick:c,children:[a.jsx("span",{className:n.icon,dangerouslySetInnerHTML:{__html:t?b:h}}),!t&&"HIDE MENU"]})}),a.jsx("nav",{className:n["menu-list"],children:l.map(e=>a.jsx(p,{icon:e.icon,path:e.path,basePath:e.basePath,className:t?n.collapsed:"",onClick:g,children:t?null:e.title},e.id))})]})}m.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v={title:"ui/components/molecules/SideMenu",component:m,argTypes:{onClick:{action:"click"}}},i={args:{menuItems:[{id:"1",title:"Content Management",icon:"content-management",path:"/Content-Management",basePath:"/"},{id:"2",title:"Article Management",icon:"article-management",path:"/Article-Management",basePath:"/"},{id:"3",title:"Author Management",icon:"author-management",path:"/Author-Management",basePath:"/"},{id:"4",title:"Bibliographines",icon:"bibliographines",path:"/Bibliographines",basePath:"/"},{id:"5",title:"Image Galley",icon:"image-gallery",path:"/Image-Galley",basePath:"/"},{id:"6",title:"Index Builder",icon:"index-builder",path:"/Index-Builder",basePath:"/"},{id:"7",title:"Volume Management",icon:"volume-management",path:"/Volume-Management",basePath:"/"},{id:"8",title:"Site Configuration",icon:"site-configuration",path:"/Site-Configuration",basePath:"/"},{id:"9",title:"SEO Settings",icon:"seo-settings",path:"/SEO-Settings",basePath:"/"},{id:"10",title:"Dynamic Banner Management",icon:"dinamicBannerManagement",path:"/Dynamic-Banner-Management",basePath:"/"},{id:"11",title:"User Management",icon:"user-management",path:"/User-Management",basePath:"/"}]}};var s,r,o;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,v as default};
