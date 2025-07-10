import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-D4lIrffr.js";import{R as _}from"./FlexContainers-DNoJS9Qw.js";import{H as E}from"./Typography-CTIxwUAP.js";import{I as v}from"./Icon-UUnYs5kp.js";import{S as s,b as y,T}from"./const-CDvcHHnW.js";import{B as g}from"./Button-BjaLCak2.js";import"./Flex-B1ZRMfrz.js";import"./Text-BwXo1EDq.js";const I="_dialog-container_eigql_1",A="_icon-close_eigql_7",N="_size-s_eigql_10",O="_size-m_eigql_13",k="_size-l_eigql_16",p={"dialog-container":"_dialog-container_eigql_1",dialogContainer:I,"icon-close":"_icon-close_eigql_7",iconClose:A,"size-s":"_size-s_eigql_10",sizeS:N,"size-m":"_size-m_eigql_13",sizeM:O,"size-l":"_size-l_eigql_16",sizeL:k};function q(t){return t.footer===!0}const f=t=>{const{className:c,children:u,id:a,debugMode:C,isOpen:d=!1,onClose:r,size:b=s.M,title:x,...D}=t;C&&console.log(`Dialog ${a}`,t);const i=m.useRef(null);m.useEffect(()=>{const e=i.current;if(!e)return;const n=()=>r==null?void 0:r();return d&&!e.open?e.showModal():!d&&e.open&&e.close(),e.addEventListener("close",n),()=>{e.removeEventListener("close",n)}},[d,r]);const j=["gp-dialog-container",p["dialog-container"],b&&p[`size-${b}`],c].filter(Boolean).join(" ");return o.jsxs("dialog",{ref:i,className:j,...D,children:[o.jsxs(_,{justify:"space-between",className:"gp-p-16",children:[o.jsx(E,{tag:typeof x=="string"?"h2":"div",style:{lineHeight:1},children:x}),o.jsx(v,{iconName:"faXmark",onClick:()=>{var e;return(e=i.current)==null?void 0:e.close()},className:p["icon-close"],role:"button",tabIndex:0,"aria-label":"Close Icon",onKeyDown:e=>{var n;(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),(n=i.current)==null||n.close())}})]}),o.jsx("div",{className:"gp-p-16 dialog-content",children:u}),q(t)&&o.jsxs(_,{justify:"end",className:"gp-p-16",gap:y.SP_8,children:[o.jsx(g,{onClick:()=>{var e;return(e=i.current)==null?void 0:e.close()},theme:T.SECONDARY,children:t.cancelText}),o.jsx(g,{onClick:t.onSubmit,children:t.submitText})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const Q={title:"Base Components/Dialog",component:f,tags:["autodocs"],argTypes:{title:{control:"text",description:"Titolo della modale. Può essere una stringa o un nodo React."},isOpen:{control:"boolean",description:"Stato di apertura della modale."},onClose:{action:"closed",description:"Callback eseguita alla chiusura del dialog."},onSubmit:{action:"submitted",description:"Callback eseguita alla conferma nel footer.",table:{category:"Footer"}},cancelText:{control:"text",description:"Testo del pulsante di annullamento.",table:{category:"Footer"}},submitText:{control:"text",description:"Testo del pulsante di conferma.",table:{category:"Footer"}},footer:{control:"boolean",description:"Se `true`, mostra il footer con i pulsanti di azione."},size:{control:"select",options:[s.S,s.M,s.L],description:"Dimensione della modale."},className:{control:"text",description:"Classi CSS aggiuntive."},debugMode:{control:"boolean",description:"Attiva log props per debugging."}},parameters:{docs:{description:{component:`
### 📌 Descrizione

Il componente \`Dialog\` rappresenta una modale accessibile e semantica basata su \`<dialog>\`.

Può essere utilizzata per conferme, avvisi, o contenuti più strutturati. Supporta opzionalmente un **footer con azioni** (submit/cancel) e dimensioni variabili.

---

### ♿️ Accessibilità

Il componente segue le linee guida WAI-ARIA e WCAG:

- Usa l'elemento **nativo** \`<dialog>\` che fornisce focus trap e chiusura via tastiera (\`ESC\`).
- Il **titolo** è fornito tramite un \`<h2>\` (o altro nodo semantico).
- L'icona di chiusura è una \`button-like\` con \`role="button"\`, \`tabIndex=0\` e gestione di \`Enter\` e \`Space\`.
- Quando il \`Dialog\` è chiuso, il focus può essere riportato al trigger esterno (opzionalmente gestito esternamente).
- Supporta screen reader e tastiera out of the box.

---

### 🔧 Esempio d'uso

\`\`\`jsx
<Dialog
  isOpen={open}
  title="Conferma eliminazione"
  onClose={() => setOpen(true)}
  footer
  cancelText="Annulla"
  submitText="Conferma"
  onSubmit={() => {}}
/>
\`\`\`

`}}}},l={render:t=>{function c(){const[u,a]=m.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>a(!0),children:"Apri Dialog"}),o.jsx(f,{...t,isOpen:u,onClose:()=>a(!1),children:o.jsx("p",{children:"Questa azione è irreversibile. Sei sicuro di voler procedere?"})})]})}return o.jsx(c,{})},args:{title:"Elimina elemento",footer:!0,cancelText:"Annulla",submitText:"Elimina",size:s.M}};var S,z,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    function DialogStoryWrapper() {
      const [open, setOpen] = useState(false);
      return <>
          <Button onClick={() => setOpen(true)}>Apri Dialog</Button>
          <Dialog {...args} isOpen={open} onClose={() => setOpen(false)}>
            <p>Questa azione è irreversibile. Sei sicuro di voler procedere?</p>
          </Dialog>
        </>;
    }
    return <DialogStoryWrapper />;
  },
  args: {
    title: "Elimina elemento",
    footer: true,
    cancelText: "Annulla",
    submitText: "Elimina",
    size: SIZES.M
  }
}`,...(h=(z=l.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};const G=["Default"];export{l as Default,G as __namedExportsOrder,Q as default};
