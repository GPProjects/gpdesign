import { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";
import { OverlayProps } from "./OverlayTypes";
import React, { useState } from "react";
import Button from "../../BaseComponents/Button/Button";
import "./custom-story-style.css";

const meta: Meta<typeof Overlay> = {
  title: "Utils/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description:
        "Il contenuto dell'overlay, che può essere un nodo React o una stringa.",
    },
    className: {
      control: "text",
      description: "Classi CSS personalizzate da applicare al wrapper dei tab.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, stampa in console i log relativi alle proprietà ricevute.",
    },

    id: {
      control: "text",
      description: "ID univoco per il contenitore del gruppo tab.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### 📌 Descrizione

Il componente \`Overlay\` 

### ♿️ Accessibilità



⚠️ **NB:** \`role="tabpanel"\` e \`aria-labelledby\ devono essere assegnati al contenuto della pagina gesito dai tab.

### 🔧 Proprietà principali




        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<OverlayProps>;

export const Default: Story = {
  args: {
    children: "ciao",
  },
};

export const ExternalOpen = ({ ...args }: OverlayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{}}>
      <Button onClick={() => setOpen(true)}>Trigger for open Overlay</Button>
      <Overlay {...args} isOpen={open} />
    </div>
  );
};

ExternalOpen.args = {
  children: "Overlay",
};
