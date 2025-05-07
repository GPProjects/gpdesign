import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { SIZES, THEME } from "../../../constants/const";

const meta: Meta<typeof Button> = {
  title: "Base Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Il contenuto interno del pulsante.",
    },
    className: {
      control: "text",
      description: "Classi CSS aggiuntive per personalizzare lo stile.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, mostra nel log della console le proprietà passate al componente.",
    },
    disabled: {
      control: "boolean",
      description: "Se `true`, disabilita il pulsante.",
    },
    iconLeft: {
      control: "text",
      description: "Nome dell'icona da posizionare a sinistra del testo.",
    },
    iconRight: {
      control: "text",
      description: "Nome dell'icona da posizionare a destra del testo.",
    },
    iconLeftType: {
      control: "text",
      description: "Tipo del componente Icon - Icon Left.",
    },
    iconRightType: {
      control: "text",
      description: "Tipo del componente Icon - Icon Right.",
    },
    id: {
      control: "text",
      description: "Identificativo univoco per il pulsante.",
    },
    isLoading: {
      control: "boolean",
      description: "Se `true`, mostra il testo di caricamento.",
    },
    loadingText: {
      control: "text",
      description: "Testo da mostrare durante il caricamento.",
    },
    onClick: {
      action: "clicked",
      description: "Gestore dell'evento `onClick`.",
    },
    theme: {
      control: "select",
      options: [THEME.PRIMARY, THEME.SECONDARY, THEME.TERTIARY],
      description: "Imposta lo stile del pulsante.",
    },
    size: {
      control: "select",
      options: [SIZES.L, SIZES.M, SIZES.S],
      description: "Imposta la dimensione del pulsante.",
    },
    tag: {
      control: "select",
      options: ["a", "button"],
      description: "Imposta il tag HTML del pulsante.",
    },
    underline: {
      control: "boolean",
      description: "Imposta l'underline sul bottone",
    },
    uppercase: {
      control: "boolean",
      description: "Imposta l'uppercase sul testo del bottone",
    },
    status: {
      control: "select",
      options: ["success", "warning", "danger", "info"],
      description: "Imposta lo stato del pulsante.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Button** rappresenta un pulsante cliccabile con diverse varianti e stili.

## ♿️ Accessibilità
- Il componente è un tag \`button\` a livello html oppure un tag \`a\`
- La prop \`aria-disabled\` prende in automatico il valore \`true\` o \`false\` della prop \`disabled\`

## 📌 Esempio
\`\`\`jsx
<Button onClick={(event) => { console.log(event) }}>Button</Button>
\`\`\`

## 🔧 Proprietà
- **children** *(ReactNode, richiesto. Se non presente, il componente richiede richiede un' \`aria-label\` e un'\`iconLeft\` o \`iconRight\`)*: Il contenuto del pulsante (testo o elementi React).
- **className** *(string, opzionale)*: Classi CSS personalizzate.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, stampa i log delle proprietà in console.
- **disabled** *(boolean, opzionale)*: Se \`true\`, disabilita il pulsante e automaticamente associa il valore
all'attributo \`aria-disabled\`.
- **iconLeft** *(string, opzionale)*: Renderizza a sinistra dei children il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconRight** *(string, opzionale)*: Renderizza a destra dei children il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconLeftType** *(string, opzionale)*: Tipo di stile del componente Icon. 
- **iconRightType** *(string, opzionale)*:  Tipo di stile del componente Icon. 
- **id** *(string, opzionale)*: Identificativo univoco.
- **isLoading** *(boolean, opzionale)*: Se \`true\`, mostra il testo di caricamento.
- **loadingText** *(string, opzionale)*: Testo da mostrare durante il caricamento.
- **onClick** *(function, opzionale)*: Evento \`onClick\`.
- **theme** *(string, opzionale)*: Imposta lo stile del pulsante. I valori sono documentati [qui](?path=/docs/foundations-constants--docs). Può essere:
  - \`THEME.PRIMARY\`
  - \`THEME.SECONDARY\`
  - \`THEME.TERTIARY\`
- **size** *(string, opzionale)*: Imposta la dimensione del pulsante. I valori sono documentati [qui](?path=/docs/foundations-constants--docs). Può essere:
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
- **tag** *(string, opzionale)*: Specifica il tag HTML del pulsante (\`button\` o \`a\`).
- **underline** *(boolean, opzionale)*: Imposta l'underline sul bottone.
- **uppercase** *(boolean, opzionale)*: Imposta l'uppercase sul testo del bottone.
- **status** *(string, opzionale)*: Imposta lo stato del pulsante. I valori sono documentati [qui](?path=/docs/foundations-constants--docs). Può essere:
  - \`STATUS.SUCCESS\`
  - \`STATUS.WARNING\`
  - \`STATUS.DANGER\`
  - \`STATUS.INFO\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    theme: THEME.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    theme: THEME.SECONDARY,
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    theme: THEME.TERTIARY,
  },
};

export const isOnlyIcon: Story = {
  args: {
    iconRight: "faAngleDown",
  },
};

isOnlyIcon.parameters = {
  docs: {
    description: {
      story:
        "Il bottone senza `children` richiede un' `aria-label` e un'`iconLeft` o `iconRight`",
    },
  },
};

export const Loading: Story = {
  args: {
    children: "Is Loading Button",
    isLoading: true,
  },
};
