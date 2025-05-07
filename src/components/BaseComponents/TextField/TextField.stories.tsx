import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { STATUS } from "../../../constants/const";

const meta: Meta<typeof TextField> = {
  title: "Base Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    autoComplete: {
      control: "boolean",
      description: "Se `true`, abilita l'autocompletamento del browser.",
    },
    caption: {
      control: "text",
      description: "Testo secondario mostrato sotto la label.",
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
      description: "Se `true`, disabilita l'input.",
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
      description: "Testo opzionale mostrato sotto l'input come suggerimento.",
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
      description: "Identificatore univoco dell'input.",
    },
    label: {
      control: "text",
      description: "Label associata all'input, visibile sopra il campo.",
    },
    placeholder: {
      control: "text",
      description: "Testo segnaposto mostrato all'interno dell'input.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Stato visivo dell'input.",
    },
    type: {
      control: "text",
      description: "Tipo di input HTML. Default: 'text'.",
    },
    value: {
      control: "text",
      description: "Valore attuale dell'input.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **TextField** è un campo di input testuale che supporta label, placeholder, caption, stato e messaggi di hint.

➡️ **Le prop \`id\` e \`placeholder\` sono obbligatorie.**

## ♿️ Accessibilità
- \`htmlFor\` associato al wrapper della label
- \`aria-label\` impostata con il placeholder
- \`aria-invalid\` se \`error\` è attivo
- \`aria-disabled\` se \`disabled\` è attivo
- \`aria-describedby\` e \`aria-labelledby\` se sono presenti hint/caption


## 📌 Esempio
\`\`\`jsx
<TextField id="textfield" placeholder="Inserisci il tuo testo" handleChange={(val) => console.log(val)} />
\`\`\`

## 🔧 Proprietà
- **autoComplete** *(boolean, opzionale)*: Abilita l'autocompletamento del browser.
- **caption** *(string, opzionale)*: Testo mostrato sotto la label.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Log dei props in console.
- **disabled** *(boolean, opzionale)*: Disabilita l'input.
- **error** *(boolean, opzionale)*: Stato di errore.
- **handleChange** *(function, opzionale)*:  Callback al cambio valore. Riceve il valore come argomento.
- **hint** *(string, opzionale)*: Messaggio di supporto sotto l'input.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato visivo del messaggio di hint.
- **id** *(string, richiesto)*: Identificatore dell'input.
- **label** *(string | ReactNode, opzionale)*: Etichetta del campo.
- **placeholder** *(string, richiesto)*: Testo segnaposto.
- **status** *(string, opzionale)*: Stato visivo dell'Input.
Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **type** *(string, opzionale)*: Tipo di input HTML. Default: "text".
- **value** *(string, opzionale)*: Valore attuale.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    id: "textfield",
    placeholder: "Inserisci il tuo testo",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithLabelAndCaption: Story = {
  args: {
    ...Default.args,
    label: "Text Field Disabled",
    caption: "This is a disabled text field.",
  },
};

export const ErrorAndHint: Story = {
  args: {
    ...Default.args,
    error: true,
    hint: "Errore di validazione",
  },
};
