import React from "react";
import { Meta } from "@storybook/react";
import Accordion from "./Accordion";
import { AccordionProps } from "./AccordionTypes";

const meta: Meta<typeof Accordion> = {
  title: "Base Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description:
        "Il contenuto mostrato quando l'accordion è espanso. Può essere un nodo React o una stringa.",
    },
    className: {
      control: "text",
      description: "Classe CSS personalizzata per lo stile dell'accordion.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, stampa nel log della console le proprietà passate al componente.",
    },
    id: {
      control: "text",
      description: "ID univoco per l'accordion.",
    },
    isOpen: {
      control: "boolean",
      description: "Se `true`, l'accordion è aperto di default.",
    },
    headerContent: {
      control: "text",
      description:
        "Il contenuto dell'intestazione dell'accordion (etichetta visibile).",
    },
    icon: {
      control: "text",
      description:
        "Nome dell'icona opzionale da mostrare accanto all'intestazione. Si riferisce alla prop `IconName` del componente Icon.",
    },
    iconType: {
      control: "text",
      description:
        "Tipo dell'icona (es: `solid`, `regular`, `light`). Si riferisce alla prop `type` del componente Icon.",
    },
    withSwitch: {
      control: "boolean",
      description:
        "Se `true`, mostra un interruttore (switch) al posto dell'icona della freccia.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Accordion** mostra o nasconde contenuto espandibile con un'intestazione cliccabile. Supporta icone, contenuti personalizzati e uno stile dinamico in base allo stato aperto/chiuso.

## ♿️ Accessibilità
- \`role="button"\` impostato di default alla div dell'intestazione
- \`aria-expanded={open}\` impostato di default alla div dell'intestazione
- \`aria-controls={id}-content\` impostato di default alla div dell'intestazione
- \`aria-disabled={disabled}\` impostato di default alla div dell'intestazione
- \`tabIndex={0}\` impostato di default alla div dell'intestazione
- \`onKeyDown\` impostato di default alla div dell'intestazione per gestire l'evento di apertura/chiusura al tasto "Enter" o "Space"
- \`aria-hidden={!open}\` impostato di default al div del contenuto
- \`role="region"\` e \`aria-labelledby={id}\` impostati di default al div del contenuto
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default all'icona
- \`aria-label={id} Accordion switch\` impostato di default allo switch
        

## 📌 Esempio
\`\`\`jsx
<Accordion headerContent="Clicca per espandere">Contenuto dell'accordion</Accordion>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, opzionale)*: Contenuto interno mostrato quando l'accordion è espanso.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Abilita il debug log in console.
- **id** *(string, opzionale)*: ID univoco per il componente.
- **isOpen** *(boolean, opzionale)*: Imposta lo stato iniziale aperto/chiuso.
- **headerContent** *(ReactNode | string, obbligatorio)*: Contenuto dell'intestazione cliccabile.
- **icon** *(string, opzionale)*: Renderizza a sinistra del headerContent il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconType** *(string, opzionale)*: Tipo di stile del componente Icon. 
- **withSwitch** *(boolean, opzionale)*: Se \`true\`, mostra un interruttore (switch) al posto dell'icona della freccia.
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: AccordionProps) => <Accordion {...args} />;

Default.args = {
  headerContent: "Clicca per espandere",
  children: "Questo è il contenuto dell'accordion.",
};

export const Disabled = ({ ...args }: AccordionProps) => (
  <Accordion {...args} />
);

Disabled.args = {
  headerContent: "Accordion disabilitato",
  disabled: true,
  children: "Questo è il contenuto dell'accordion.",
};

export const WithIcon = ({ ...args }: AccordionProps) => (
  <Accordion {...args} />
);

WithIcon.args = {
  headerContent: "Accordion con icona",
  icon: "faCircleHalfStroke",
  children: "Contenuto visibile quando espanso.",
};

export const withSwitch = ({ ...args }: AccordionProps) => (
  <Accordion {...args} />
);

withSwitch.args = {
  headerContent: "Accordion con switch",
  withSwitch: true,
  children: "Contenuto visibile quando espanso.",
};

export const OpenByDefault = ({ ...args }: AccordionProps) => (
  <Accordion {...args} />
);

OpenByDefault.args = {
  headerContent: "Aperto di default",
  isOpen: true,
  children: "Questo contenuto è visibile all'apertura.",
};
