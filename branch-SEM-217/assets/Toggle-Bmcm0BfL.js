import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";const i="_container_6cga9_1",g="_label_6cga9_6",u="_toggle_6cga9_12",p="_checked_6cga9_26",m="_slider_6cga9_34",e={container:i,label:g,toggle:u,checked:p,slider:m};function n({label:t="",disabled:l=!1,onChange:o}){const[a,c]=d.useState(!1),r=()=>{l||(c(!a),o&&o(!a))};return s.jsxs("div",{className:`
    ${e.container} 
    ${l?e.disabled:""}
    `,children:[t&&s.jsxs("label",{htmlFor:"toggle-button",className:e.label,children:[" ",t]}),s.jsx("button",{id:"toggle-button",className:`
          ${e.toggle} 
          ${a?e.checked:""}
          `,onClick:r,disabled:l,"aria-pressed":a,"aria-label":t||"Toggle",children:s.jsx("span",{className:e.slider})})]})}n.defaultProps={label:"",disabled:!1,onChange:void 0};n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}}}};export{n as T};
