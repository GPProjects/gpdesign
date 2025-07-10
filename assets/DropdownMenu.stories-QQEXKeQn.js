import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import{B as O}from"./Button-BjaLCak2.js";import{L as f}from"./ListItem-EFi1ywG-.js";import{D as L}from"./Divider-3oRGvcgd.js";import{a as A}from"./const-CDvcHHnW.js";import"./Icon-UUnYs5kp.js";import"./Typography-CTIxwUAP.js";import"./Text-BwXo1EDq.js";import"./FlexContainers-DNoJS9Qw.js";import"./Flex-B1ZRMfrz.js";const B="_dropdown-menu-container_1vala_1",P="_dropdown_1vala_1",U="_position-bottom_1vala_31",K="_position-top_1vala_36",F="_position-right_1vala_41",G="_position-left_1vala_46",Q="_open_1vala_59",$="_animation_1vala_1",h={"dropdown-menu-container":"_dropdown-menu-container_1vala_1",dropdownMenuContainer:B,dropdown:P,"position-bottom":"_position-bottom_1vala_31",positionBottom:U,"position-top":"_position-top_1vala_36",positionTop:K,"position-right":"_position-right_1vala_41",positionRight:F,"position-left":"_position-left_1vala_46",positionLeft:G,open:Q,animation:$},V=(s,l,d)=>{p.useEffect(()=>{if(!d)return;const t=r=>{s.current&&!s.current.contains(r.target)&&l()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[s,d,l])},v=s=>{const{className:l,children:d,id:t,debugMode:r,isOpen:e,onClose:w,automaticClose:q=!0,header:z,position:b="bottom",...S}=s;r&&console.log(`DropdownMenu ${t}`,s);const[g,C]=p.useState(e);p.useEffect(()=>{C(e)},[e]);const _=()=>{C(!1),w&&w()},u=p.useRef(null);p.useEffect(()=>{var o;if(g)setTimeout(()=>{var a;const i=(a=u.current)==null?void 0:a.querySelector('[role="menuitem"]');i==null||i.focus()},0);else{const i=(o=u.current)==null?void 0:o.querySelector('[aria-haspopup="menu"]');i==null||i.focus()}},[g]);const k=o=>{var x,D,R;const i=(x=u.current)==null?void 0:x.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])');if(!i||i.length===0)return;const a=Array.from(i),E=document.activeElement,y=a.findIndex(m=>m===E);if(o.key==="ArrowDown"||o.key==="Tab"&&!o.shiftKey){o.preventDefault();const m=(y+1)%a.length;(D=a[m])==null||D.focus()}if(o.key==="ArrowUp"||o.key==="Tab"&&o.shiftKey){o.preventDefault();const m=(y-1+a.length)%a.length;(R=a[m])==null||R.focus()}o.key==="Escape"&&(o.preventDefault(),_())};V(u,_,q);const M=["gp-dropdown-menu-container",h["dropdown-menu-container"],l].filter(Boolean).join(" "),j=["gp-dropdown",h.dropdown,b&&h[`position-${b}`],g&&h.open,l].filter(Boolean).join(" ");return n.jsxs("div",{className:M,id:t,"data-testid":t,onKeyDown:k,ref:u,...S,children:[z(),g&&n.jsx("div",{role:"menu",className:j,children:d})]})};v.displayName="DropdownMenu";v.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},automaticClose:{required:!1,tsType:{name:"boolean"},description:""},header:{required:!0,tsType:{name:"signature",type:"function",raw:"() => React.ReactNode",signature:{arguments:[],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom" | "right" | "left" | "top"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'}]},description:""}}};const re={title:"Utils/DropdownMenu",component:v,tags:["autodocs"],argTypes:{children:{control:!1,description:"Il contenuto del menu a tendina (nodi React o stringhe)."},className:{control:"text",description:"Classe CSS personalizzata per il contenitore."},debugMode:{control:"boolean",description:"Se `true`, logga in console le proprietà ricevute dal componente."},id:{control:"text",description:"ID univoco del menu a tendina."},automaticClose:{control:"boolean",description:"Se `true`, chiude il dropdown cliccando fuori.",defaultValue:!0},header:{control:!1,description:"Renderizza il trigger (es. bottone) che apre il menu."},isOpen:{control:!1,description:"Stato di apertura del dropdown (gestito internamente)."},onClose:{control:!1,description:"Callback chiamata alla chiusura del dropdown."},position:{control:"select",options:["bottom","right","left","top"],description:"Posizione del menu a tendina rispetto al trigger (es. bottone)."}},parameters:{docs:{description:{component:`
Il componente **DropdownMenu** mostra un menu a tendina personalizzabile.

➡️ **La prop \`header\` è obbligatoria per gestire l'apertura del menu. Deve possedere le prop \`aria-haspopup="menu"\` e \`aria-expanded={open}\`. (vedi accessibilità)*. <br>

## ♿️ Accessibilità
- \`role="menu\` associato al wrapper dei del menu.
- Supporto per la selezione da tastiera con **Frecce/Esc** dei figli con il ruolo di **menuitem**.
- Quando il menu viene aperto, il primo elemento con il ruolo di **menuitem** riceve il focus.
- Quando il menu viene chiuso, il focus torna al trigger. (elemento con \`aria-haspopup="menu"\`).
- Per chiudere il menu, l'utente può premere **Esc**,  o cliccare al di fuori del menu se \`automaticClose\` è \`true\`).

⚠️ **NB:** \`aria-haspopup="menu"\` e \`aria-expanded={open}\` devono essere impostati sul trigger dell'apertura
nella header. I figli del menu devono avere il ruolo di **menuitem**.


## 📌 Esempio base:
\`\`\`jsx
<DropdownMenu header={() => <Button aria-haspopup="menu" aria-expanded={open} onClick={()=> setOpen(prev => !prev)}>Apri</Button>}>
  <div role="menuitem">Contenuto menu</div>
</DropdownMenu>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, opzionale)*: Il contenuto del menu a tendina (nodi React o stringhe).
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del componente.
- **automaticClose** *(boolean, opzionale)*: Se \`true\`, chiude il dropdown quando si clicca al di fuori di esso. Default: \`true\`.
- **header** *(function, obbligatoria)*: Funzione che renderizza il trigger (es. bottone) per aprire il menu.
- **isOpen** *(boolean, opzionale)*: Stato di apertura del dropdown (gestito internamente).
- **onClose** *(function, opzionale)*: Callback chiamata quando il dropdown viene chiuso.
- **position** *(string, opzionale)*: Posizione del menu a tendina rispetto al trigger/header (es. bottone). Default: \`bottom\`. Opzioni: 
 - \`bottom\`
 - \`right\`
 - \`left\`
 - \`top\`. 


        `}}}},c=({...s})=>{const[l,d]=p.useState(!1),t=()=>d(!1);return n.jsx("div",{style:{height:"500px"},children:n.jsx(v,{isOpen:l,onClose:t,...s,header:()=>n.jsx(O,{"aria-haspopup":"menu","aria-expanded":l,onClick:()=>d(r=>!r),children:"Open Dropdown menu"}),children:n.jsxs("div",{children:[n.jsx(f,{id:"1",caption:"Caption",role:"menuitem",onClick:(r,e)=>{console.log("id",e),t()},children:"List item 1"}),n.jsx(L,{}),n.jsx(f,{id:"2",icon:"faCircleUser",role:"menuitem",onClick:(r,e)=>{console.log("id",e)},children:"List item 2 più lungo"}),n.jsx(L,{}),n.jsx(f,{id:"3",role:"menuitem",onClick:(r,e)=>{console.log("id",e)},children:"List item 3"}),n.jsx(f,{id:"4",disabled:!0,role:"menuitem",onClick:(r,e)=>{console.log("id",e)},children:"List item 4"}),n.jsx(f,{id:"5",status:A.DANGER,role:"menuitem",onClick:(r,e)=>{console.log("id",e)},children:"List item 5"})]})})})};c.args={children:"DropdownMenu message"};c.__docgenInfo={description:"",methods:[],displayName:"Default",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},automaticClose:{required:!1,tsType:{name:"boolean"},description:""},header:{required:!0,tsType:{name:"signature",type:"function",raw:"() => React.ReactNode",signature:{arguments:[],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom" | "right" | "left" | "top"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'}]},description:""}}};var T,N,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return <div style={{
    height: "500px"
  }}>
      <DropdownMenu isOpen={open} onClose={onClose} {...args} header={() => <Button aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(prev => !prev)}>
            Open Dropdown menu
          </Button>}>
        <div>
          <ListItem id="1" caption="Caption" role="menuitem" onClick={(e, id) => {
          console.log("id", id);
          onClose();
        }}>
            List item 1
          </ListItem>
          <Divider />
          <ListItem id="2" icon="faCircleUser" role="menuitem" onClick={(e, id) => {
          console.log("id", id);
        }}>
            List item 2 più lungo
          </ListItem>
          <Divider />
          <ListItem id="3" role="menuitem" onClick={(e, id) => {
          console.log("id", id);
        }}>
            List item 3
          </ListItem>
          <ListItem id="4" disabled role="menuitem" onClick={(e, id) => {
          console.log("id", id);
        }}>
            List item 4
          </ListItem>
          <ListItem id="5" status={STATUS.DANGER} role="menuitem" onClick={(e, id) => {
          console.log("id", id);
        }}>
            List item 5
          </ListItem>
        </div>
      </DropdownMenu>
    </div>;
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const ae=["Default"];export{c as Default,ae as __namedExportsOrder,re as default};
