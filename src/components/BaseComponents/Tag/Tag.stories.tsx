import React from "react";
import { Meta } from "@storybook/react";
import Tag from "./Tag";
import { THEME, SIZES, STATUS } from "../../../constants/const";
import { TagProps } from "./TagTypes";

const meta: Meta<typeof Tag> = {
  title: "Base Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Contenuto del Tag",
    },
    className: {
      control: "text",
      description: "Imposta una classe CSS personalizzata.",
    },
    customColor: {
      control: "boolean",
      description: "Imposta il colore personalizzato del tag settato nel tema.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, mostra nel log della console le proprietà passate al componente.",
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
      description: "Imposta l'ID del componente.",
    },
    theme: {
      control: "select",
      options: [THEME.PRIMARY, THEME.SECONDARY],
      description: "Imposta lo stile del tag.",
    },
    size: {
      control: "select",
      options: [SIZES.XS, SIZES.S, SIZES.M, SIZES.L],
      description: "Definisce la size del componente",
    },
    status: {
      control: "select",
      options: [STATUS.SUCCESS, STATUS.DANGER, STATUS.WARNING, STATUS.INFO],
      description: "Imposta lo stato del tag.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Tag** è un componente che permette di visualizzare un tag con un testo personalizzato.

## ♿️ Accessibilità
- \`aria-hidden="true"\` e \`focusable="false"\` impostati di default alle icone

➡️ **INFO:** **\`role="status"\`** sarebbe da aggiungere per migliorare l'accessibilità del componente quando
viene utilizzato in un contesto di notifica o avviso. <br>


## 📌 Esempio
\`\`\`jsx
<Tag>Tag</Tag>
\`\`\`

## 🔧 Proprietà


- **children** *(React.ReactNode, obbligatorio)*: Contenuto del Tag.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **customColor** *(boolean, opzionale)*: Se true, imposta il colore personalizzato scritto nel tema come \`--tag-custom-bg-color-primary\`, \`--tag-custom-border-color-primary\`, \`--tag-custom-border-color-secondary\`.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **iconLeft** *(string, opzionale)*: Renderizza a sinistra dei children il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconRight** *(string, opzionale)*: Renderizza a destra dei children il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconLeftType** *(string, opzionale)*: Tipo di stile del componente Icon. 
- **iconRightType** *(string, opzionale)*:  Tipo di stile del componente Icon. 
- **id** *(string, opzionale)*: Imposta l'ID del tag.
- **theme** *(string, opzionale)*: Imposta lo stile del tag. Può essere una delle seguenti opzioni documentate [qui](?path=/docs/foundations-constants--docs):
  - \`PRIORITY.PRIMARY\`
  - \`PRIORITY.SECONDARY\`
- **size** *(string, opzionale)*: La dimensione del tag. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`SIZES.XS\`
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
- **status** *(string, opzionale)*: Imposta lo stato del tag. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
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

export const Default = ({ ...args }: TagProps) => <Tag {...args} />;

Default.args = {
  children: "Tag",
};
