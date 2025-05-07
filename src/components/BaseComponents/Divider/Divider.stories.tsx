import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Base Components/Divider",
  component: Divider,
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
      description: "Imposta l'ID del divider.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Divider** è un semplice separatore visivo utilizzato per dividere sezioni o contenuti all'interno di un'interfaccia utente. Può essere personalizzato con classi CSS e ID.
## 📌 Esempio
\`\`\`jsx
<Divider />
\`\`\`

## 🔧 Proprietà

- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del divider.

        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    id: "divider",
  },
};
