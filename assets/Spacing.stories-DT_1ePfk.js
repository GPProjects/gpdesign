import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{b as a}from"./const-CDvcHHnW.js";import{F as r}from"./Flex-B1ZRMfrz.js";import{S,C as u}from"./constValues-C9OpX7_V.js";import{a as g,B as x}from"./Typography-CTIxwUAP.js";import"./index-D4lIrffr.js";import"./Text-BwXo1EDq.js";const N={title:"Foundations/Spacing",tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`
#### Spacing
Il **Spacing** è una proprietà CSS che consente di definire lo spazio tra gli elementi. È comunemente utilizzato per migliorare la leggibilità e l'estetica dei componenti dell'interfaccia utente.
### Utilizzo
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`SPACING.{VARIABILE}\` importando \`SPACING\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SPACING da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`SPACING_VALUES\`** dalla libreria.
  `}}}},o=()=>{const s=Object.entries(S).map(([e,t])=>({name:e,value:t})),m=e=>{navigator.clipboard.writeText(`SPACING.${e}`)},p=e=>{const t=parseFloat(e),d=parseFloat(getComputedStyle(document.documentElement).fontSize);return t*d};return n.jsx(r,{direction:"column",gap:a.SP_20,children:s.map(e=>n.jsxs(r,{gap:a.SP_10,align:"center",onClick:()=>m(e.name),style:{cursor:"pointer"},children:[n.jsx(r,{style:{width:e.value,height:e.value,backgroundColor:u.accent100},border:"100"})," ",n.jsxs(g,{children:[e.name," - ",e.value]}),n.jsxs(x,{children:["Value in px: ",p(e.value)]})]},e.name))})};o.__docgenInfo={description:"",methods:[],displayName:"Spacing"};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const SPACING_ARRAY = Object.entries(SPACING_VALUES).map(([name, value]) => ({
    name,
    value
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(\`SPACING.\${text}\`);
  };
  const remToPxString = (remString: string) => {
    const rem = parseFloat(remString);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * rootFontSize;
  };
  return <Flex direction="column" gap={SPACING.SP_20}>
      {SPACING_ARRAY.map(el => <Flex gap={SPACING.SP_10} align="center" onClick={() => copyToClipboard(el.name)} style={{
      cursor: "pointer"
    }} key={el.name}>
          <Flex style={{
        width: el.value,
        height: el.value,
        backgroundColor: COLORS_VALUES.accent100
      }} border="100"></Flex>{" "}
          <Body>
            {el.name} - {el.value}
          </Body>
          <BodyExtraSmall>
            Value in px: {remToPxString(el.value)}
          </BodyExtraSmall>
        </Flex>)}
    </Flex>;
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _=["Spacing"];export{o as Spacing,_ as __namedExportsOrder,N as default};
