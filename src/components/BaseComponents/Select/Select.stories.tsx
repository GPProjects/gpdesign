import React from "react";
import { Meta } from "@storybook/react";
import Select from "./Select";
import { STATUS } from "../../../constants/const";
import { SelectProps } from "./SelectTypes";

const meta: Meta<typeof Select> = {
  title: "Base Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text",
      description: "Testo secondario mostrato sotto alla label.",
    },
    className: {
      control: "text",
      description: "Classe CSS personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description: "Se `true`, logga i props nel console log.",
    },
    disabled: {
      control: "boolean",
      description: "Se `true`, disabilita la select.",
    },
    error: {
      control: "boolean",
      description: "Se `true`, applica lo stato di errore.",
    },
    handleChange: {
      action: "changed",
      description: "Callback invocata al cambio di valore.",
    },
    hint: {
      control: "text",
      description:
        "Testo opzionale mostrato sotto la select come suggerimento.",
    },
    hintShowIcon: {
      control: "boolean",
      description: "Nasconte l'icona del componente Hint.",
    },
    hintStatus: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Stato personalizzato del messaggio di hint.",
    },
    id: {
      control: "text",
      description: "Identificatore univoco della select.",
    },
    label: {
      control: "text",
      description:
        "La label associata alla select, può essere stringa o nodo React.",
    },
    options: {
      control: "object",
      description: "Array di opzioni da visualizzare nella select.",
    },
    placeholder: {
      control: "text",
      description:
        "Testo segnaposto mostrato quando nessun valore è selezionato.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.INFO, STATUS.WARNING],
      description: "Stato visivo della select.",
    },
    value: {
      control: "text",
      description: "Valore attualmente selezionato.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Select** è una \`<select>\` customizzata che supporta label, caption, placeholder, gestione dello stato e messaggi di hint.
<br>⚠️  Il valore **vuoto** ({
      label: "",
      value: ""
    }) delle options è aggiunto internamente come valore di default iniziale, non è necessario passarlo esplicitamente.

➡️ **Le prop \`id\`, \`placeholder\` e \`options\` sono obbligatorie.**

## ♿️ Accessibilità
- Label visibile con \`htmlFor\` associato
- \`aria-label\` prende il suo valore da \`placeholder\`
- \`aria-describedby\` e \`aria-labelledby\` se sono presenti hint/caption
- \`aria-invalid\` impostato automaticamente se \`error=true\`
- \`aria-disabled\` prende in automatico il valore \`true\` o \`false\` della prop \`disabled\`

## 📌 Esempio
\`\`\`jsx
<Select id="select-1" placeholder="Scegli un'opzione" handleChange={(value) => console.log(value)}
options={[{ label: "Opzione 1", value: "opzione-1" }, { label: "Opzione 2", value: "opzione-2" }]}>
  Seleziona
</Select>
\`\`\`

## 🔧 Proprietà
- **caption** *(string, opzionale)*: Testo descrittivo sotto la label.
- **className** *(string, opzionale)*: Classe CSS custom.
- **debugMode** *(boolean, opzionale)*: Log in console dei props.
- **disabled** *(boolean, opzionale)*: Se true, disabilita la select.
- **error** *(boolean, opzionale)*: Mostra lo stato errore e setta \`aria-invalid\`.
- **handleChange** *(function, opzionale)*: Callback al cambio valore. Riceve il "value" della option come argomento.
- **hint** *(string, opzionale)*: Testo secondario mostrato sotto.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato personalizzato del messaggio di hint. 
- **id** *(string, richiesto)*: Identificatore della select.
- **label** *(ReactNode, opzionale)*: Label della select.
- **options** *(array, richiesto)*: Opzioni da visualizzare.
- **placeholder** *(string, richiesto)*: Testo mostrato se nessun valore è selezionato.
- **status** *(string, opzionale)*: Stato visivo della Select. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **value** *(string, opzionale)*: Valore attuale.
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: SelectProps) => <Select {...args} />;

Default.args = {
  id: "select-saluti",
  options: [
    { label: "Ciao", value: "ciao" },
    { label: "Buongiorno", value: "buongiorno" },
    { label: "Heilà!", value: "heila" },
  ],
  placeholder: "Seleziona il tuo saluto preferito",
};

export const Disabled = ({ ...args }: SelectProps) => <Select {...args} />;

Disabled.args = {
  id: "select-disabled",
  options: [],
  placeholder: "Seleziona la tua scelta",
  disabled: true,
};

export const ErrorHintLabelAndCaption = ({ ...args }: SelectProps) => (
  <Select {...args} />
);

ErrorHintLabelAndCaption.args = {
  id: "select-saluti-2",
  options: [
    { label: "Ciao", value: "ciao" },
    { label: "Buongiorno", value: "buongiorno" },
    { label: "Heilà!", value: "heila" },
  ],
  placeholder: "Seleziona il tuo saluto preferito",
  error: true,
  hint: "Scegli un saluto",
  label: "Saluti",
  caption: "Scegli un saluto tra le opzioni disponibili",
};
