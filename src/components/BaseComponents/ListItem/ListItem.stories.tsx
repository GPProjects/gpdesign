import React from "react";
import { Meta } from "@storybook/react";
import ListItem from "./ListItem";
import { STATUS } from "../../../constants/const";
import { ListItemProps } from "./ListItemTypes";

const meta: Meta<typeof ListItem> = {
  title: "Base Components/ListItem",
  component: ListItem,
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
      description: "Imposta l'ID del messaggio di list item.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.INFO, STATUS.WARNING],
      description:
        "Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente.",
    },
    icon: {
      control: "text",
      description:
        "Renderizza a sinistra dei children e della caption il componente `Icon`.",
    },
    iconType: {
      control: "text",
      description:
        "Tipo di stile del componente Icon. Questa prop si riferisce alla prop `IconName` del componente [Icon](?path=/docs/foundations-icons--docs).",
    },
    caption: {
      control: "text",
      description:
        "Testo di supporto che viene visualizzato sotto il messaggio principale.",
    },
    selected: {
      control: "boolean",
      description: "Se `true`, l'item viene visualizzato come selezionato.",
    },
    disabled: {
      control: "boolean",
      description: "Se `true`, l'item viene visualizzato come disabilitato.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **ListItem** è un messaggio di supporto composto da un testo e un'icona, il cui stile varia in base allo \`status\`.

➡️ **La prop \`id\` è obbligatoria e viene passata come secondo argomento alla funzione di \`onClick\`*. <br>

## ♿️ Accessibilità
-   \`aria-selected\` e \`aia-disabled\` sono impostati in base alle props \`selected\` e \`disabled\`.
-   Supporto per la selezione da tastiera con **Enter** e **Space**.
-   \`tabIndex\` è impostato su **0** per rendere il componente accessibile tramite tastiera.

⚠️ **NB:** \`role="menuitem"\` deve essere associato ai ListItem se inseriti all'interno di un menù di navigazione.
Potete trovare un esempio di utilizzo in [DropdownMenu](?path=/docs/utils-dropdownmenu--docs).

## 📌 Esempio
\`\`\`jsx
<ListItem id="list-item-1" onClick=((e, id) => console.log(id)>ListItem message</ListItem>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, obbligatorio)*: Il contenuto del list item.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, obbligatorio)*: Imposta l'ID del componente di list item. Viene passato come secondo argomento all'**onClick**.
- **status** *(string, opzionale)*: Definisce lo stato del messaggio e determina il suo stile e l'icona corrispondente. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **icon** *(string, opzionale)*: Renderizza a sinistra dei children e della caption il componente \`Icon\`
che potete trovare documentato [qui](?path=/docs/foundations-icons--docs). <br>Questa prop si riferisce alla prop \`IconName\` 
del componente [\`Icon\`](?path=/docs/foundations-icons--docs).
- **iconType** *(string, opzionale)*: Tipo di stile del componente Icon. 
- **caption** *(string, opzionale)*: Testo di supporto che viene visualizzato sotto il messaggio principale.
- **selected** *(boolean, opzionale)*: Se \`true\`, l'item viene visualizzato come selezionato.
- **disabled** *(boolean, opzionale)*: Se \`true\`, l'item viene visualizzato come disabilitato.
- **onClick** *(function, opzionale)*: Funzione da eseguire quando l'item viene cliccato. Accetta un oggetto evento come primo argomento e l'id del componente come secondo

        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: ListItemProps) => <ListItem {...args} />;

Default.args = {
  children: "Label",
  id: "list-item-1",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const ErrorStatus = ({ ...args }: ListItemProps) => (
  <ListItem {...args} />
);

ErrorStatus.args = {
  children: "Error message",
  status: STATUS.DANGER,
  id: "list-item-2",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const WithIcon = ({ ...args }: ListItemProps) => <ListItem {...args} />;

WithIcon.args = {
  children: "Label",
  icon: "faCircleHalfStroke",
  id: "list-item-3",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const WithCaption = ({ ...args }: ListItemProps) => (
  <ListItem {...args} />
);

WithCaption.args = {
  children: "Label",
  caption: "Caption",
  id: "list-item-4",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const Disabled = ({ ...args }: ListItemProps) => <ListItem {...args} />;

Disabled.args = {
  children: "Label",
  icon: "faCircleHalfStroke",
  disabled: true,
  id: "list-item-5",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const Selected = ({ ...args }: ListItemProps) => <ListItem {...args} />;

Selected.args = {
  children: "Label",
  icon: "faCircleHalfStroke",
  selected: true,
  id: "list-item-6",
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => console.log(id),
};

export const Link = ({ ...args }: ListItemProps) => <ListItem {...args} />;

Link.args = {
  children: "Link to google",
  id: "list-item-7",
  tag: "a",
  href: "https://www.google.com",
  target: "_blank",
};
