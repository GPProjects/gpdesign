import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{H as r}from"./Hint-DWY4xZoH.js";import{a as e}from"./const-CDvcHHnW.js";import"./Typography-CTIxwUAP.js";import"./index-D4lIrffr.js";import"./Text-BwXo1EDq.js";import"./Icon-UUnYs5kp.js";const R={title:"Base Components/Hint",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"Il contenuto del messaggio, che può essere un nodo React o una stringa."},className:{control:"text",description:"Imposta una classe CSS personalizzata."},debugMode:{control:"boolean",description:"Se `true`, mostra nel log della console le proprietà passate al componente."},id:{control:"text",description:"Imposta l'ID del messaggio di hint."},showIcon:{control:"boolean",description:"Se `false`, nasconde l'icona."},status:{control:"select",options:[e.DANGER,e.SUCCESS,e.INFO,e.WARNING],description:"Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente."}},parameters:{docs:{description:{component:`
Il componente **Hint** è un messaggio di supporto composto da un testo e un'icona, il cui stile varia in base allo \`status\`.

## ♿️ Accessibilità
- \`role="status"\` impostato di default al div del messaggio
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default all'icona


## 📌 Esempio
\`\`\`jsx
<Hint>Hint message</Hint>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, obbligatorio)*: Il contenuto del messaggio.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del messaggio di hint.
- **showIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona.
- **status** *(string, opzionale)*: Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
        `}}}},s=({...t})=>i.jsx(r,{...t});s.args={children:"Hint message"};const o=({...t})=>i.jsx(r,{...t});o.args={children:"Error message",status:e.DANGER};const a=({...t})=>i.jsx(r,{...t});a.args={children:"Info message",status:e.INFO,showIcon:!1};s.__docgenInfo={description:"",methods:[],displayName:"Default",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"STATUS"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ErrorStatus",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"STATUS"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"InfoStatusNoIcon",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"STATUS"},description:""}}};var n,c,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}: HintProps) => <Hint {...args} />`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`({
  ...args
}: HintProps) => <Hint {...args} />`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...args
}: HintProps) => <Hint {...args} />`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Default","ErrorStatus","InfoStatusNoIcon"];export{s as Default,o as ErrorStatus,a as InfoStatusNoIcon,q as __namedExportsOrder,R as default};
