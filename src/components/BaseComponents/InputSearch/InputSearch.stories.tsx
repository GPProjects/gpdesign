import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputSearch from "./InputSearch";
import { STATUS } from "../../../constants/const";
import { InputSearchProps } from "./InputSearchTypes";

const meta: Meta<typeof InputSearch> = {
  title: "Base Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text",
      description: "Caption opzionale mostrata sopra l'input e sotto la Label.",
    },
    className: {
      control: "text",
      description: "Imposta una classe CSS personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description: "Se `true`, logga i props nel console log.",
    },
    error: {
      control: "boolean",
      description: "Se `true`, applica lo stato di errore all'input.",
    },
    handleChange: {
      action: "changed",
      description: "Callback chiamata quando il valore dell'input cambia.",
    },
    hint: {
      control: "text",
      description: "Testo opzionale mostrato sotto l'input come suggerimento.",
    },
    hintShowIcon: {
      control: "boolean",
      description: "Nasconte l'icona del componente Hint.",
    },
    hintStatus: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Stato personalizzato del messaggio di hint, se presente.",
    },
    label: {
      control: "text",
      description: "Label opzionale mostrata sopra l'input.",
    },
    id: {
      control: "text",
      description: "Identificatore univoco dell'input.",
    },
    onSubmit: {
      action: "submitted",
      description:
        "Callback chiamata quando viene inviato il valore dell'input.",
    },
    placeholder: {
      control: "text",
      description: "Testo segnaposto mostrato nell'input.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Definisce lo stato dell'input, influenzandone lo stile.",
    },
    value: {
      control: "text",
      description: "Valore corrente dell'input.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **InputSearch** è un'estensione del componente **TextField**, aggiungendo funzionalità di ricerca e pulsante di reset.
<br> Il \`TextField\` potete trovarlo documentato [qui](?path=/docs/base-components-textfield--docs).
  <br><br> ➡️ **Come per il \`TextField\`, le prop \`placeholder\` e \`id \` sono obbligatorie** e valgono le stesse regole di **accessibilità**.

## 📌 Esempio
\`\`\`jsx
<InputSearch id="search" placeholder="Cerca..." />
\`\`\`

## 🔧 Proprietà

- **caption** *(ReactNode, opzionale)*: Caption opzionale mostrata sopra l'input e sotto la label. Se presente, il suo valore
valorizza la prop \`aria-labelledby\`.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, logga i props nel console log.
- **error** *(boolean, opzionale)*: Se \`true\`, applica lo stato di errore all'input.
- **handleChange** *(function, opzionale)*: Callback al cambio valore. Riceve il valore come argomento.
- **hint** *(string, opzionale)*: Testo opzionale mostrato sotto l'input.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato personalizzato del messaggio di hint.
- **id** *(string, richiesto)*: Identificatore univoco dell'input.
- **label** *(ReactNode, opzionale)*: Label opzionale mostrata sopra l'input.
- **onSubmit** *(function, opzionale)*: Callback chiamata quando viene inviato il valore dell'input, quando viene premuto il pulsante **Enter**.
Riceve il valore come argomento.
- **placeholder** *(string, richiesto)*: Testo segnaposto mostrato nell'input.
- **status** *(string, opzionale)*: Definisce lo stato dell'input. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **value** *(string, opzionale)*: Valore corrente dell'input.
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: InputSearchProps) => (
  <InputSearch {...args} />
);

Default.args = {
  id: "search",
  placeholder: "Cerca...",
};

export const DisabledWithValue = ({ ...args }: InputSearchProps) => (
  <InputSearch {...args} />
);

DisabledWithValue.args = {
  id: "search",
  placeholder: "Cerca...",
  value: "Valore cercato",
  disabled: true,
};

export const WithCaptionAndLabel = ({ ...args }: InputSearchProps) => (
  <InputSearch {...args} />
);

WithCaptionAndLabel.args = {
  id: "search",
  placeholder: "Cerca...",
  label: "Label",
  caption: "Caption",
};
