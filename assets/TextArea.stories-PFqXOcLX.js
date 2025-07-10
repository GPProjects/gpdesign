import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-D4lIrffr.js";import{a as H,b as V}from"./Typography-CTIxwUAP.js";import{C as P,a as e}from"./const-CDvcHHnW.js";import{H as k}from"./Hint-DWY4xZoH.js";import"./Text-BwXo1EDq.js";import"./Icon-UUnYs5kp.js";const J="_text-area-wrapper_hzfeg_1",K="_text-area-container_hzfeg_12",Q="_danger_hzfeg_29",X="_warning_hzfeg_35",Y="_success_hzfeg_41",Z="_info_hzfeg_47",ee="_disabled_hzfeg_56",r={"text-area-wrapper":"_text-area-wrapper_hzfeg_1",textAreaWrapper:J,"text-area-container":"_text-area-container_hzfeg_12",textAreaContainer:K,danger:Q,warning:X,success:Y,info:Z,disabled:ee},h=b=>{const{caption:s,className:p,debugMode:U,disabled:i,error:n,handleChange:x,hint:u,hintShowIcon:L,hintStatus:G,id:a,label:m,placeholder:f,status:g,value:S="",...W}=b;U&&console.log(`Text area ${a}`,b);const[M,T]=A.useState("");A.useEffect(()=>{T(S)},[S]);const O=F=>{const v=F.target.value;T(v),x&&x(v)},$=["gp-text-area-wrapper",r["text-area-wrapper"],i&&r.disabled,p].filter(Boolean).join(" "),B=["gp-text-area-container",r["text-area-container"],i&&r.disabled,(g||n)&&(n?r.danger:g&&r[g]),p].filter(Boolean).join(" ");return o.jsxs("div",{className:$,children:[o.jsxs("div",{children:[m&&o.jsx(H,{className:`text-area-label ${p}`,htmlFor:a,weight:"600",tag:typeof m=="string"?"p":"div",children:m}),s&&o.jsx(V,{tag:typeof s=="string"?"p":"div",id:`caption-${a}`,color:P.textMuted,children:s})]}),o.jsx("textarea",{className:B,id:a,"data-testid":a,"aria-label":f,"aria-invalid":n,"aria-disabled":i,placeholder:f,value:M,onChange:O,disabled:i,"aria-labelledby":s?`caption-${a}`:void 0,"aria-describedby":u?`hint-${a}`:void 0,...W}),u&&o.jsx(k,{id:`hint-${a}`,status:n?e.DANGER:G,showIcon:L,children:u})]})};h.displayName="TextArea";h.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},hint:{required:!1,tsType:{name:"string"},description:""},hintShowIcon:{required:!1,tsType:{name:"boolean"},description:""},hintStatus:{required:!1,tsType:{name:"STATUS"},description:""},id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"STATUS"},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Base Components/TextArea",component:h,tags:["autodocs"],argTypes:{caption:{control:"text",description:"Testo secondario mostrato sotto la label, se presente."},className:{control:"text",description:"Classe CSS personalizzata."},debugMode:{control:"boolean",description:"Se `true`, logga i props nel console log."},disabled:{control:"boolean",description:"Se `true`, disabilita la textarea."},error:{control:"boolean",description:"Se `true`, applica lo stato di errore."},handleChange:{action:"changed",description:"Callback invocata al cambio di valore."},hint:{control:"text",description:"Testo di hint mostrato sotto la textarea."},hintShowIcon:{control:"boolean",description:"Nasconte l'icona del componente Hint."},hintStatus:{control:"select",options:[e.DANGER,e.SUCCESS,e.WARNING,e.INFO],description:"Stato personalizzato del messaggio di hint."},id:{control:"text",description:"Identificatore univoco della textarea."},label:{control:"text",description:"La label associata alla textarea."},placeholder:{control:"text",description:"Testo segnaposto mostrato nella textarea."},status:{control:"select",options:[e.DANGER,e.SUCCESS,e.WARNING,e.INFO],description:"Stato visivo della textarea."},value:{control:"text",description:"Valore corrente della textarea."}},parameters:{docs:{description:{component:`
Il componente **TextArea** è un campo di input multilinea che supporta label, caption, placeholder, stato e hint.

➡️ **Le prop \`id\` e \`placeholder\` sono obbligatorie.**

## ♿️ Accessibilità
- \`htmlFor\` associato al wrapper della label
- \`aria-label\` impostata con il placeholder
- \`aria-invalid\` se \`error\` è attivo
- \`aria-disabled\` se \`disabled\` è attivo
- \`aria-describedby\` e \`aria-labelledby\` se sono presenti hint/caption


## 📌 Esempio
\`\`\`jsx
<TextArea id="textarea" placeholder="Inserisci il tuo testo" handleChange={(value) => console.log(value)} />
\`\`\`

## 🔧 Proprietà
- **caption** *(string, opzionale)*: Testo descrittivo sotto la label.
- **className** *(string, opzionale)*: Classe CSS custom.
- **debugMode** *(boolean, opzionale)*: Log dei props in console.
- **disabled** *(boolean, opzionale)*: Disabilita la textarea.
- **error** *(boolean, opzionale)*: Mostra lo stato errore.
- **handleChange** *(function, opzionale)*: Callback al cambio valore. Riceve il valore come argomento.
- **hint** *(string, opzionale)*: Testo secondario mostrato sotto.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato visivo del messaggio di hint.
- **id** *(string, richiesto)*: Identificatore della textarea.
- **label** *(string | ReactNode, opzionale)*: Label della textarea.
- **placeholder** *(string, richiesto)*: Testo segnaposto.
- **status** *(string, opzionale)*: Stato visivo della TextArea.
Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **value** *(string, opzionale)*: Valore attuale.
        `}}}},t={args:{id:"textarea",placeholder:"Inserisci il tuo testo"}},l={args:{...t.args,disabled:!0}},c={args:{...t.args,label:"Text Area",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},d={args:{...t.args,error:!0,hint:"Errore di validazione"}};var _,N,y;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "textarea",
    placeholder: "Inserisci il tuo testo"
  }
}`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var z,C,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,R,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Text Area",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var q,D,j;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    hint: "Errore di validazione"
  }
}`,...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const ce=["Default","Disabled","WithLabelAndCaption","ErrorAndHint"];export{t as Default,l as Disabled,d as ErrorAndHint,c as WithLabelAndCaption,ce as __namedExportsOrder,le as default};
