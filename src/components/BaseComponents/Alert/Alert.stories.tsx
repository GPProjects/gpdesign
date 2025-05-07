import React from "react";
import { Meta } from "@storybook/react";
import Alert from "./Alert";
import { STATUS } from "../../../constants/const";
import { AlertProps } from "./AlertTypes";

const meta: Meta<typeof Alert> = {
  title: "Base Components/Alert",
  component: Alert,
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
      description: "Imposta l'ID del messaggio di alert.",
    },
    closeIcon: {
      control: "boolean",
      description:
        "Se `true`, mostra l'icona X di chiusura, associata all'evento `onClose`.",
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
Il componente **Alert** è un messaggio di supporto composto da un testo e un'icona, il cui stile varia in base allo \`status\`.

## ♿️ Accessibilità
- \`role="status"\` e \`role="alert"\` impostato di default al div del messaggio a seconda dello status del messaggio
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default all'icona
- \`role="button"\`, \`tabIndex={0}\` e \`aria-label="Close Icon"\` impostato di default all'icona di chiusura
- \`onKeyDown\` impostato di default all'icona di chiusura per gestire l'evento di chiusura al tasto "Enter" o "Space"

## 📌 Esempio
\`\`\`jsx
<Alert>Alert message</Alert>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, obbligatorio)*: Il contenuto del messaggio.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del messaggio di alert.
- **closeIcon** *(boolean, opzionale)*: Se \`true\`, mostra l'icona X di chiusura, associata all'evento \`onClose\`.
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

export const Default = ({ ...args }: AlertProps) => <Alert {...args} />;

Default.args = {
  children: "Alert message",
};

export const ErrorStatus = ({ ...args }: AlertProps) => <Alert {...args} />;

ErrorStatus.args = {
  children: "Error message",
  status: STATUS.DANGER,
};

export const InfoStatusNoIcon = ({ ...args }: AlertProps) => (
  <Alert {...args} />
);

InfoStatusNoIcon.args = {
  children: "Info message",
  status: STATUS.INFO,
  showIcon: false,
};

export const WithCaption = ({ ...args }: AlertProps) => <Alert {...args} />;

WithCaption.args = {
  children: "Alert message",
  caption: "Caption message",
};

export const NoBackground = ({ ...args }: AlertProps) => <Alert {...args} />;

NoBackground.args = {
  children: "Alert message",
  showBackground: false,
};
