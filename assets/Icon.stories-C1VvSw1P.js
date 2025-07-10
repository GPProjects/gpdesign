import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./Icon-UUnYs5kp.js";import{S as t}from"./const-CDvcHHnW.js";import"./index-D4lIrffr.js";const b=new URL(""+new URL("Icons-tutorial-CdioScuS.mp4",import.meta.url).href,import.meta.url).href,x={title:"Foundations/Icons",tags:["autodocs"],argTypes:{iconName:{control:"text",description:"Il nome dell'icona da visualizzare (es: faHome, faUser, faCircleUser)."},color:{control:"text",description:"Il colore dell'icona."},size:{control:"select",options:[t.L,t.M,t.S],description:"Imposta la dimensione dell'icona."},type:{control:"select",options:["solid","regular","light","thin","duotone","brands"],description:"Il tipo di icona (solid, regular, light, thin, duotone, brands)."},id:{control:"text",description:"Identificativo univoco per il componente (opzionale)."},className:{control:"text",description:"Classi CSS aggiuntive per personalizzare lo stile dell'icona."},debugMode:{control:"boolean",description:"Se `true`, mostra nel log della console le proprietà passate al componente."}},parameters:{docs:{description:{component:`
### Le icone qui riportate sono le icone di FontAwesome.
Visitare [FontAwesome](https://fontawesome.com/search) per cercare le icone.

### Come utilizzare le icone:
1. Selezionare l'icona desiderata.
2. Verificare il tipo (solid, regular, brands) e inserirlo come prop \`type\`.
3. Cliccare sull'icona e selezionare il tab **"React"**.
4. Selezionare il tab **"Individual Import"**, copiare il nome e inserirlo come prop \`iconName\`.

<br><br>

## 📹 Video Tutorial
<br>
<video controls width="600" style="border: 1px solid black;">
  <source src="${b}" type="video/mp4" />
  Il tuo browser non supporta il video.
</video>

## 🔧 Proprietà
- **iconName** *(string, richiesto)*: Il nome dell'icona da visualizzare (es: faHome, faUser, faCircleUser). Vedi video tutorial. ⬆️
- **color** *(string, opzionale)*: Il colore dell'icona. Se non specificato, viene usato \`COLORS.textDefault\`.
- **size** *(string, opzionale)*: La dimensione dell'icona. Default: \`SIZES.M\`. Può essere uno fra:
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
- **type** *(string, opzionale)*: Il tipo di icona. Default: \`solid\`. accetta:
  - \`solid\`
  - \`regular\`
  - \`light\`
  - \`thin\`
  - \`duotone\`
  - \`brands\`
- **id** *(string, opzionale)*: Identificativo univoco per l'icona.
- **className** *(string, opzionale)*: Classi CSS aggiuntive per personalizzare lo stile dell'icona.
- **debugMode** *(boolean, opzionale)*: Se attivato, mostra le proprietà del componente nella console.
        `}}}},r=e=>s.jsx(n,{...e});r.args={iconName:"faCircleUser"};const a=e=>s.jsx(n,{...e});a.args={iconName:"faCircleUser",type:"solid"};const i=e=>s.jsx(n,{...e});i.args={iconName:"faCircleUser",type:"regular"};const o=e=>s.jsx(n,{...e});o.args={iconName:"faSlack",type:"brands"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},iconName:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"Extract",elements:[{name:"SIZES"},{name:"union",raw:'"l" | "m" | "s"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]}],raw:'Extract<SIZES, "l" | "m" | "s">'},description:""},type:{required:!1,tsType:{name:"union",raw:'"solid" | "regular" | "brands"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"brands"'}]},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Solid",props:{color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},iconName:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"Extract",elements:[{name:"SIZES"},{name:"union",raw:'"l" | "m" | "s"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]}],raw:'Extract<SIZES, "l" | "m" | "s">'},description:""},type:{required:!1,tsType:{name:"union",raw:'"solid" | "regular" | "brands"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"brands"'}]},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"Regular",props:{color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},iconName:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"Extract",elements:[{name:"SIZES"},{name:"union",raw:'"l" | "m" | "s"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]}],raw:'Extract<SIZES, "l" | "m" | "s">'},description:""},type:{required:!1,tsType:{name:"union",raw:'"solid" | "regular" | "brands"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"brands"'}]},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"Brand",props:{color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},iconName:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"Extract",elements:[{name:"SIZES"},{name:"union",raw:'"l" | "m" | "s"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]}],raw:'Extract<SIZES, "l" | "m" | "s">'},description:""},type:{required:!1,tsType:{name:"union",raw:'"solid" | "regular" | "brands"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"brands"'}]},description:""}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"(args: IconProps) => <Icon {...args} />",...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"(args: IconProps) => <Icon {...args} />",...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"(args: IconProps) => <Icon {...args} />",...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,v,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"(args: IconProps) => <Icon {...args} />",...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const N=["Default","Solid","Regular","Brand"];export{o as Brand,r as Default,i as Regular,a as Solid,N as __namedExportsOrder,x as default};
