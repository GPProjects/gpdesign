import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b as m,C as t}from"./const-CDvcHHnW.js";import{C as d}from"./constValues-C9OpX7_V.js";import{F as r}from"./Flex-B1ZRMfrz.js";import{T as u}from"./Text-BwXo1EDq.js";import"./index-D4lIrffr.js";const L={title:"Foundations/Colors",tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:`
### Color Palette
La **Color Palette** è una raccolta di colori utilizzati in un progetto per garantire coerenza e armonia visiva. Essa comprende colori primari, secondari, di sfondo, di testo e di stato (successo, errore, avviso, ecc.).
### Utilizzo
  Cliccando sul singolo colore nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`COLORS.{VARIABILE}\` importando \`COLORS\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SHADOWS da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`COLORS_VALUES\`** dalla libreria.

  `}}}},o=()=>{const s=Object.entries(d).map(([e,p])=>({name:e,value:p})),c=e=>{navigator.clipboard.writeText(`COLORS.${e}`)};return a.jsx(r,{direction:"column",children:a.jsx(r,{wrap:"wrap",gap:m.SP_20,className:"gp-pb-24 gp-pt-24",children:s.map(e=>a.jsx(r,{onClick:()=>c(e.name),style:{width:"260px",cursor:"pointer",backgroundColor:e.value},className:"gp-p-10",children:a.jsxs(u,{color:e.name==="textDefault"||e.name==="textMuted"||e.name==="black"?t.white:t.textDefault,children:[e.name," - ",e.value]})},e.name))})})};o.__docgenInfo={description:"",methods:[],displayName:"Colors"};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const COLORS_ARRAY = Object.entries(COLORS_VALUES).map(([name, value]) => ({
    name,
    value
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(\`COLORS.\${text}\`);
  };
  return <Flex direction="column">
      <Flex wrap="wrap" gap={SPACING.SP_20} className="gp-pb-24 gp-pt-24">
        {COLORS_ARRAY.map(el => <Flex onClick={() => copyToClipboard(el.name)} style={{
        width: "260px",
        cursor: "pointer",
        backgroundColor: el.value
      }} key={el.name} className="gp-p-10">
            <Text color={el.name === "textDefault" || el.name === "textMuted" || el.name === "black" ? COLORS.white : COLORS.textDefault}>
              {el.name} - {el.value}
            </Text>
          </Flex>)}
      </Flex>
    </Flex>;
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Colors"];export{o as Colors,b as __namedExportsOrder,L as default};
