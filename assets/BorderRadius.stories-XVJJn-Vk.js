import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as n}from"./const-CDvcHHnW.js";import{R as g,S as a}from"./constValues-C9OpX7_V.js";import{F as i}from"./Flex-B1ZRMfrz.js";import{B as l}from"./Typography-CTIxwUAP.js";import"./index-D4lIrffr.js";import"./Text-BwXo1EDq.js";const U={title:"Foundations/Border Radius",tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`
### Border Radius
Il **Border Radius** è una proprietà CSS che consente di arrotondare gli angoli degli elementi. È comunemente utilizzato per migliorare l'estetica e la leggibilità dei componenti dell'interfaccia utente.
### Utilizzo  
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`RADIUS.{VARIABILE}\` importando \`RADIUS\` all'interno del proprio progetto dalla libreria.


#### ⚠️ **NB:** Per importare invece i valori di SPACING da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`RADIUS_VALUES\`** dalla libreria.
  `}}}},r=()=>{const c=Object.entries(g).map(([e,t])=>({name:e,value:t})),p=e=>{navigator.clipboard.writeText(`RADIUS.${e}`)},S=e=>{const t=parseFloat(e),u=parseFloat(getComputedStyle(document.documentElement).fontSize);return t*u};return o.jsx(i,{gap:n.SP_20,children:c.map(e=>o.jsxs(i,{gap:n.SP_10,direction:"column",align:"center",justify:"center",onClick:()=>p(e.name),style:{cursor:"pointer",width:a.SP_128,height:a.SP_128,borderRadius:e.value},className:"gp-p-10",border:"100",children:[o.jsxs(l,{children:[e.name," - ",e.value]}),o.jsxs(l,{children:["Value in px: ",S(e.value)]})]},e.name))})};r.__docgenInfo={description:"",methods:[],displayName:"BorderRadius"};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const RADIUS_ARRAY = Object.entries(RADIUS_VALUES).map(([name, value]) => ({
    name,
    value
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(\`RADIUS.\${text}\`);
  };
  const remToPxString = (remString: string) => {
    const rem = parseFloat(remString);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * rootFontSize;
  };
  return <Flex gap={SPACING.SP_20}>
      {RADIUS_ARRAY.map(el => <Flex gap={SPACING.SP_10} direction="column" align="center" justify="center" onClick={() => copyToClipboard(el.name)} style={{
      cursor: "pointer",
      width: SPACING_VALUES.SP_128,
      height: SPACING_VALUES.SP_128,
      borderRadius: el.value
    }} key={el.name} className="gp-p-10" border="100">
          <BodyExtraSmall>
            {el.name} - {el.value}
          </BodyExtraSmall>
          <BodyExtraSmall>
            Value in px: {remToPxString(el.value)}
          </BodyExtraSmall>
        </Flex>)}
    </Flex>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["BorderRadius"];export{r as BorderRadius,b as __namedExportsOrder,U as default};
