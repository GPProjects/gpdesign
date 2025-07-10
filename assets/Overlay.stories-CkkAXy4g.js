import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-D4lIrffr.js";import{B as R}from"./Button-BjaLCak2.js";import"./const-CDvcHHnW.js";import"./Icon-UUnYs5kp.js";const _="_overlay_1pnk3_1",S="_open_1pnk3_16",m={overlay:_,open:S},a=s=>{const{className:n,children:i,id:l,debugMode:h,isOpen:c=!1,...x}=s;h&&console.log(`Overlay ${l}`,s);const[p,N]=e.useState(c),[d,u]=e.useState(!0);e.useEffect(()=>{N(c)},[c]),e.useEffect(()=>{p?document.body.classList.contains("overlay-open")?u(!1):(document.body.classList.add("overlay-open"),u(!0)):d&&document.body.classList.remove("overlay-open")},[p]),e.useEffect(()=>{if(d)return()=>{document.body.classList.remove("overlay-open")}},[]);const T=["sv-overlay",m.overlay,p&&m.open,n].filter(Boolean).join(" ");return t.jsx("div",{className:T,id:l,"data-testid":l,...x,children:i})};a.displayName="Overlay";a.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"Utils/Overlay",component:a,tags:["autodocs"],argTypes:{children:{control:"text",description:"Il contenuto dell'overlay, che può essere un nodo React o una stringa."},className:{control:"text",description:"Classi CSS personalizzate da applicare al wrapper dei tab."},debugMode:{control:"boolean",description:"Se `true`, stampa in console i log relativi alle proprietà ricevute."},id:{control:"text",description:"ID univoco per il contenitore del gruppo tab."}},parameters:{docs:{description:{component:`
### 📌 Descrizione

Il componente \`Overlay\` 

### ♿️ Accessibilità



⚠️ **NB:** \`role="tabpanel"\` e \`aria-labelledby devono essere assegnati al contenuto della pagina gesito dai tab.

### 🔧 Proprietà principali




        `}}}},r={args:{children:"ciao"}},o=({...s})=>{const[n,i]=e.useState(!1);return t.jsxs("div",{style:{},children:[t.jsx(R,{onClick:()=>i(!0),children:"Trigger for open Overlay"}),t.jsx(a,{...s,isOpen:n})]})};o.args={children:"Overlay"};o.__docgenInfo={description:"",methods:[],displayName:"ExternalOpen",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""}}};var y,f,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "ciao"
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,O,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}: OverlayProps) => {
  const [open, setOpen] = useState(false);
  return <div style={{}}>
      <Button onClick={() => setOpen(true)}>Trigger for open Overlay</Button>
      <Overlay {...args} isOpen={open} />
    </div>;
}`,...(b=(O=o.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const w=["Default","ExternalOpen"];export{r as Default,o as ExternalOpen,w as __namedExportsOrder,I as default};
