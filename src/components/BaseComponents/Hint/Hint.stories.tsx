import React from "react";
import { Meta } from "@storybook/react";
import Hint from "./Hint";
import { STATUS } from "../../../constants/const";
import { HintProps } from "./HintTypes";

const meta: Meta<typeof Hint> = {
  title: "Base Components/Hint",
  component: Hint,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description:
        "Il contenuto del messaggio, che può essere un nodo React o una stringa.",
    },
    className: {
      control: "text",
      description: "Imposta una classe CSS personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, mostra nel log della console le proprietà passate al componente.",
    },
    id: {
      control: "text",
      description: "Imposta l'ID del messaggio di hint.",
    },
    showIcon: {
      control: "boolean",
      description: "Se `false`, nasconde l'icona.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.INFO, STATUS.WARNING],
      description:
        "Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Hint** è un messaggio di supporto composto da un testo e un'icona, il cui stile varia in base allo \`status\`.

## ♿️ Accessibilità
- \`role="status"\` impostato di default al div del messaggio
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default all'icona


## 📌 Esempio
\`\`\`jsx
<Hint>Hint message</Hint>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, obbligatorio)*: Il contenuto del messaggio.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del messaggio di hint.
- **showIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona.
- **status** *(string, opzionale)*: Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: HintProps) => <Hint {...args} />;

Default.args = {
  children: "Hint message",
};

export const ErrorStatus = ({ ...args }: HintProps) => <Hint {...args} />;

ErrorStatus.args = {
  children: "Error message",
  status: STATUS.DANGER,
};

export const InfoStatusNoIcon = ({ ...args }: HintProps) => <Hint {...args} />;

InfoStatusNoIcon.args = {
  children: "Info message",
  status: STATUS.INFO,
  showIcon: false,
};
