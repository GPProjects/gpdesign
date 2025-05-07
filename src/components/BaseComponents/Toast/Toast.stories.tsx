import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Toast from "./Toast";
import { SIZES, STATUS } from "../../../constants/const";
import { ToastProps } from "./ToastTypes";
import Button from "../Button/Button";

const meta: Meta<typeof Toast> = {
  title: "Base Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    automaticClose: {
      control: "boolean",
      description:
        "Se `true`, il toast si chiuderà automaticamente dopo 5 secondi.",
    },
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
    fixedPosition: {
      control: "boolean",
      description:
        "Se `true`, il toast rimarrà in position fixed in alto a destra dello schermo.",
    },
    id: {
      control: "text",
      description: "Imposta l'ID del messaggio di toast.",
    },
    isOpen: {
      control: "boolean",
      description:
        "Indica se il toast è aperto o chiuso. Controllato dall'esterno.",
    },
    size: {
      control: "select",
      options: [SIZES.M, SIZES.S],
      description: "Imposta la dimensione del toast.",
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
Il componente **Toast** è un messaggio di supporto composto da un testo e un'icona, il cui stile varia in base allo \`status\`.

➡️ **La prop \`isOpen\` gestita esternamente è obbligatoria per gestire correttamente l'apertura e la chiusura del toast**. <br>
➡️ **La prop \`onClose\` è obbligatoria per settare correttamente l'apertura e la chiusura automatica del toast.**

####⚠️ **NB:** Di default la prop  \`fixedPosition\` è la props \`automaticClose\` sono **true**, ma è settata a false negli elementi delle storie per gestire meglio la documentazione.


## ♿️ Accessibilità
- \`role="status"\` e \`role="alert"\` impostato di default al div del messaggio a seconda dello status del messaggio
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default all'icona
- \`role="button"\`, \`tabIndex={0}\` e \`aria-label="Close Icon"\` impostato di default all'icona di chiusura
- \`onKeyDown\` impostato di default all'icona di chiusura per gestire l'evento di chiusura al tasto "Enter" o "Space"


## 📌 Esempio
\`\`\`jsx
<Toast isOpen={open} onClose={() => setOpen(false)}>Toast message</Toast>
\`\`\`

## 🔧 Proprietà

- **automaticClose** *(boolean, opzionale)*: Se \`true\`, il toast si chiuderà automaticamente dopo 5 secondi. Default: \`true\`.
- **children** *(ReactNode, obbligatorio)*: Il contenuto del messaggio.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **fixedPosition** *(boolean, opzionale)*: Se \`true\`, il toast rimarrà in position fixed in alto a destra dello schermo. Default: \`true\`.
- **id** *(string, opzionale)*: Imposta l'ID del messaggio di toast.
- **isOpen** *(boolean, obbligatorio)*: Indica se il toast è aperto o chiuso. Controllato dall'esterno.
- **onClose** *(function, obbligatorio)*: Funzione da chiamare quando il toast deve essere chiuso. Controllata dall'esterno.
- **size** *(string, opzionale)*: Imposta la dimensione del toast. Default: \`SIZES.S\`.  I valori sono documentati [qui](?path=/docs/foundations-constants--docs). Può essere:
  - \`SIZES.S\`
  - \`SIZES.M\`
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

export const Default = ({ ...args }: ToastProps) => (
  <Toast {...args} isOpen={true} fixedPosition={false} automaticClose={false} />
);

Default.args = {
  children: "Toast message",
};

export const ErrorStatus = ({ ...args }: ToastProps) => (
  <Toast {...args} isOpen={true} fixedPosition={false} automaticClose={false} />
);

ErrorStatus.args = {
  children: "Error message",
  status: STATUS.DANGER,
};

export const ExternalOpen = ({ ...args }: ToastProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Trigger for open Toast</Button>
      <Toast
        {...args}
        fixedPosition={false}
        isOpen={open}
        onClose={() => setOpen(false)}
        className="gp-mt-16"
      />
    </>
  );
};

ExternalOpen.args = {
  children: "Toast with an external open and an automatic close",
};
