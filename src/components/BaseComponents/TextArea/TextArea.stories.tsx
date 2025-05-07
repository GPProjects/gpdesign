import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import { STATUS } from "../../../constants/const";

const meta: Meta<typeof TextArea> = {
  title: "Base Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    caption: {
      control: "text",
      description: "Testo secondario mostrato sotto la label, se presente.",
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
      description: "Se `true`, disabilita la textarea.",
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
      description: "Testo di hint mostrato sotto la textarea.",
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
      description: "Identificatore univoco della textarea.",
    },
    label: {
      control: "text",
      description: "La label associata alla textarea.",
    },
    placeholder: {
      control: "text",
      description: "Testo segnaposto mostrato nella textarea.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Stato visivo della textarea.",
    },
    value: {
      control: "text",
      description: "Valore corrente della textarea.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **TextArea** è un campo di input multilinea che supporta label, caption, placeholder, stato e hint.

➡️ **Le prop \`id\` e \`placeholder\` sono obbligatorie.**

## ♿️ Accessibilità
- \`htmlFor\` associato al wrapper della label
- \`aria-label\` impostata con il placeholder
- \`aria-invalid\` se \`error\` è attivo
- \`aria-disabled\` se \`disabled\` è attivo
- \`aria-describedby\` e \`aria-labelledby\` se sono presenti hint/caption


## 📌 Esempio
\`\`\`jsx
<TextArea id="textarea" placeholder="Inserisci il tuo testo" handleChange={(value) => console.log(value)} />
\`\`\`

## 🔧 Proprietà
- **caption** *(string, opzionale)*: Testo descrittivo sotto la label.
- **className** *(string, opzionale)*: Classe CSS custom.
- **debugMode** *(boolean, opzionale)*: Log dei props in console.
- **disabled** *(boolean, opzionale)*: Disabilita la textarea.
- **error** *(boolean, opzionale)*: Mostra lo stato errore.
- **handleChange** *(function, opzionale)*: Callback al cambio valore. Riceve il valore come argomento.
- **hint** *(string, opzionale)*: Testo secondario mostrato sotto.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato visivo del messaggio di hint.
- **id** *(string, richiesto)*: Identificatore della textarea.
- **label** *(string | ReactNode, opzionale)*: Label della textarea.
- **placeholder** *(string, richiesto)*: Testo segnaposto.
- **status** *(string, opzionale)*: Stato visivo della TextArea.
Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    id: "textarea",
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
    label: "Text Area",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};

export const ErrorAndHint: Story = {
  args: {
    ...Default.args,
    error: true,
    hint: "Errore di validazione",
  },
};
