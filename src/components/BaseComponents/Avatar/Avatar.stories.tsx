import React from "react";
import { Meta } from "@storybook/react";
import Avatar from "./Avatar";
import { SIZES } from "../../../constants/const";
import { AvatarProps } from "./AvatarTypes";

const meta: Meta<typeof Avatar> = {
  title: "Base Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
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
      description: "Imposta l'ID del componente.",
    },
    placeholder: {
      control: "text",
      description:
        "L'url dell'immagine del placeholder. Se non presente, viene mostrato un placeholder di default.",
    },
    src: {
      control: "text",
      description: "L'url dell'immagine dell'avatar.",
    },
    size: {
      control: "select",
      options: [SIZES.XS, SIZES.S, SIZES.M, SIZES.L, SIZES.XL],
      description: "Definisce la size del componente",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Avatar** è un componente che mostra la foto dell'utente, se presente, oppure un placeholder e prevede una \`size\`.

## ♿️ Accessibilità
- \`aria-label\` obbligatoria
- \`role="img"\` impostato di default al div dell'Avatar

## 📌 Esempio
\`\`\`jsx
<Avatar src="https://placehold.co/48x48" />
\`\`\`

## 🔧 Proprietà


- **aria-label** *(string, richiesta)*: Imposta una \`aria-label\`. Tipicamente dovrebbe contenere il nome dell'utente rappresentato.
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID dell'Avatar.
- **placeholder** *(string, opzionale)*: L'url dell'immagine del placeholder. Se non presente, viene mostrato un placeholder di default.
- **size** *(string, opzionale)*: La dimensione dell'avatar. Può assumere uno dei seguenti valori, documentati [qui](?path=/docs/foundations-constants--docs):
  - \`SIZES.XS\` 
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
  - \`SIZES.XL\`
- **src** *(string, opzionale)*: L'immagine da mostrare come avatar. Se non presente, viene mostrato un placeholder.

        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: AvatarProps) => <Avatar {...args} />;

Default.args = {
  "aria-label": "Default image",
};

export const WithImage = ({ ...args }: AvatarProps) => <Avatar {...args} />;

WithImage.args = {
  "aria-label": "48x48 image",
  src: "https://placehold.co/48x48",
};
