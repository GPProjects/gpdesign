import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b as m}from"./const-CDvcHHnW.js";import{F as r}from"./Flex-B1ZRMfrz.js";import{T as p}from"./Text-BwXo1EDq.js";import{a as d}from"./constValues-C9OpX7_V.js";import"./index-D4lIrffr.js";const h={title:"Foundations/Shadows",tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`
### Shadows
Il **box-shadow** è una proprietà CSS che consente di creare effetti di ombra sugli elementi. È comunemente utilizzato per migliorare la profondità e la gerarchia visiva dei componenti dell'interfaccia utente.
### Utilizzo
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`SHADOWS.{VARIABILE}\` importando il \`SHADOWS\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SHADOWS da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`SHADOWS_VALUES\`** dalla libreria.
  `}}}},o=()=>{const l=Object.entries(d).map(([e,c])=>({name:e,value:c})),s=e=>{navigator.clipboard.writeText(`SHADOWS.${e}`)};return a.jsx(r,{direction:"column",gap:m.SP_24,children:l.map(e=>a.jsx(r,{onClick:()=>s(e.name),style:{cursor:"pointer",boxShadow:e.value},className:"gp-p-10",children:a.jsx(p,{children:e.name})},e.name))})};o.__docgenInfo={description:"",methods:[],displayName:"Shadow"};var n,t,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const SHADOW_ARRAY = Object.entries(SHADOWS_VALUES).map(([name, value]) => ({
    name,
    value
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(\`SHADOWS.\${text}\`);
  };
  return <Flex direction="column" gap={SPACING.SP_24}>
      {SHADOW_ARRAY.map(el => <Flex onClick={() => copyToClipboard(el.name)} style={{
      cursor: "pointer",
      boxShadow: el.value
    }} key={el.name} className="gp-p-10">
          <Text>{el.name}</Text>
        </Flex>)}
    </Flex>;
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const O=["Shadow"];export{o as Shadow,O as __namedExportsOrder,h as default};
