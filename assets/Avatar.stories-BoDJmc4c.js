import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{S as a,R as h}from"./const-CDvcHHnW.js";import{F as j}from"./Flex-B1ZRMfrz.js";import"./index-D4lIrffr.js";const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABICAYAAABhlHJbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMdSURBVHgB7ZxLaxRBFIWP0SCKjkhiEsHgKDiiG0UQcePfd6EILlXQhS4MOmAiJvhArMN0oUhe9bjndnfqg0tCSOj0l1uvW1UBGo1Go9FoNBonkVPoD8sh1kOshpiEONd9jfwMsRdiO8Q8xFb3NXf6IPB8iGmITfwVdhzeh3gTYheOeAqkrFmIGyjjdRcueAlk1j3GopnWgM37KRyy8TT0sH97hHryCLN5A4v+8TuEqAUy82rLi1DiGsQDjFrgE9jIi8RM5ADzGwKUAjlgbMAeSlwK8QkClqCBTXcGHTe7Z5qjEngLeqYQoBDIJrUJPXzmGRijELgOH/iHuwpjFAJX4If5sxUCL8GPizBGIdBy3ncU5iOxahDxwvzZqmnMaFEI9Cx8mj9bIXAPfpiXtxQCt+HHVxijEDiHH59hjEKg5wbQRxijGkQ+QA+f+QvGqKYxb6HnFQSoCqrMBE5qL0MDd+m2IEA5keZLKXbNdiHc5lSW9LlHwU6dZX2rJRblcXvTvO+LqDeV+GKc1lxBfYmU9zzENwjx2Bfmvm3tTIyZJ5VHPAQSZuK77vPSoidH+BchfsCBPhwuYr3wdohrCT8T55aU57nW7tXxNm4AsVkfdrxtB4vlGbsA2UDRaDQajUajj3hMYzhxnvzzcRn5K5I4veFKhFOcOcQVcJVAyuIZmdST+DlQKOeKXOnswBhrgRQ3g9/5GGbjSxiW0awE1rrCUAuzOyUWAplt9+F7JmY/2LSfoXKzrl2NYcY9gO95mIPg73Qdi4HnCypRUyCb7B30n7XuY5XRupZAZt4Q5EXYzVTJxBoCOZd7iOHBTGQWFtUTS3fleIBxiPIiHOyKDqKXZuBd+J6BLqX4Uk5JBjL7PK4v1IaXcrKToETgPYyH7FtUuQJ58n7ITfd/VpD5PrkCpxgfWReCcgWuYnxk9ec5ApnqfVvn1oAjcnIzzhU4ViaJ358lMPkhA0KSgZKLzE4k3+vLETjG/i+SvKzLEdjHWl8tkt+t3ZUrJEeg58UZa5JvVeUIdPs/VQKS3y2nnBXP6V0IcRbjIG5/Jpe1/gCUS3IvurAreAAAAABJRU5ErkJggg==",_="_avatar-container_je0cd_1",b="_size-xs_je0cd_6",T="_size-s_je0cd_10",y="_size-m_je0cd_14",E="_size-l_je0cd_18",q="_size-xl_je0cd_22",l={"avatar-container":"_avatar-container_je0cd_1",avatarContainer:_,"size-xs":"_size-xs_je0cd_6",sizeXs:b,"size-s":"_size-s_je0cd_10",sizeS:T,"size-m":"_size-m_je0cd_14",sizeM:y,"size-l":"_size-l_je0cd_18",sizeL:E,"size-xl":"_size-xl_je0cd_22",sizeXl:q},i=e=>{const{className:g="",debugMode:z,id:t,size:n=a.M,src:S,placeholder:I=x,...f}=e;z&&console.log(`Avatar ${t}`,e);const v=["gp-avatar-container",l["avatar-container"],n&&l[`size-${n}`],g].filter(Boolean).join(" ");return o.jsx(j,{"data-testid":t,id:t,className:v,radius:h.MAX,border:"100",style:{backgroundImage:`url(${S||I})`},role:"img",...f})};i.displayName="Avatar";i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{"aria-label":{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"SIZES"},description:""},src:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Base Components/Avatar",component:i,tags:["autodocs"],argTypes:{className:{control:"text",description:"Imposta una classe CSS personalizzata."},debugMode:{control:"boolean",description:"Se `true`, mostra nel log della console le proprietà passate al componente."},id:{control:"text",description:"Imposta l'ID del componente."},placeholder:{control:"text",description:"L'url dell'immagine del placeholder. Se non presente, viene mostrato un placeholder di default."},src:{control:"text",description:"L'url dell'immagine dell'avatar."},size:{control:"select",options:[a.XS,a.S,a.M,a.L,a.XL],description:"Definisce la size del componente"}},parameters:{docs:{description:{component:`
Il componente **Avatar** è un componente che mostra la foto dell'utente, se presente, oppure un placeholder e prevede una \`size\`.

## ♿️ Accessibilità
- \`aria-label\` obbligatoria
- \`role="img"\` impostato di default al div dell'Avatar

## 📌 Esempio
\`\`\`jsx
<Avatar src="https://placehold.co/48x48" />
\`\`\`

## 🔧 Proprietà


- **aria-label** *(string, richiesta)*: Imposta una \`aria-label\`. Tipicamente dovrebbe contenere il nome dell'utente rappresentato.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID dell'Avatar.
- **placeholder** *(string, opzionale)*: L'url dell'immagine del placeholder. Se non presente, viene mostrato un placeholder di default.
- **size** *(string, opzionale)*: La dimensione dell'avatar. Può assumere uno dei seguenti valori, documentati [qui](?path=/docs/foundations-constants--docs):
  - \`SIZES.XS\` 
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
  - \`SIZES.XL\`
- **src** *(string, opzionale)*: L'immagine da mostrare come avatar. Se non presente, viene mostrato un placeholder.

        `}}}},s=({...e})=>o.jsx(i,{...e});s.args={"aria-label":"Default image"};const r=({...e})=>o.jsx(i,{...e});r.args={"aria-label":"48x48 image",src:"https://placehold.co/48x48"};s.__docgenInfo={description:"",methods:[],displayName:"Default",props:{"aria-label":{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"SIZES"},description:""},src:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"WithImage",props:{"aria-label":{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},debugMode:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"SIZES"},description:""},src:{required:!1,tsType:{name:"string"},description:""}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}: AvatarProps) => <Avatar {...args} />`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,A,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}: AvatarProps) => <Avatar {...args} />`,...(u=(A=r.parameters)==null?void 0:A.docs)==null?void 0:u.source}}};const M=["Default","WithImage"];export{s as Default,r as WithImage,M as __namedExportsOrder,C as default};
