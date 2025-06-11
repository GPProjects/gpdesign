import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import { SIZES } from "../../../constants/const";
import { DialogProps } from "./DialogTypes";
import Button from "../Button/Button";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "Base Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description:
        "Titolo della modale. Può essere una stringa o un nodo React.",
    },
    isOpen: {
      control: "boolean",
      description: "Stato di apertura della modale.",
    },
    onClose: {
      action: "closed",
      description: "Callback eseguita alla chiusura del dialog.",
    },
    onSubmit: {
      action: "submitted",
      description: "Callback eseguita alla conferma nel footer.",
      table: {
        category: "Footer",
      },
    },
    cancelText: {
      control: "text",
      description: "Testo del pulsante di annullamento.",
      table: {
        category: "Footer",
      },
    },
    submitText: {
      control: "text",
      description: "Testo del pulsante di conferma.",
      table: {
        category: "Footer",
      },
    },
    footer: {
      control: "boolean",
      description: "Se `true`, mostra il footer con i pulsanti di azione.",
    },
    size: {
      control: "select",
      options: [SIZES.S, SIZES.M, SIZES.L],
      description: "Dimensione della modale.",
    },
    className: {
      control: "text",
      description: "Classi CSS aggiuntive.",
    },
    debugMode: {
      control: "boolean",
      description: "Attiva log props per debugging.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### 📌 Descrizione

Il componente \`Dialog\` rappresenta una modale accessibile e semantica basata su \`<dialog>\`.

Può essere utilizzata per conferme, avvisi, o contenuti più strutturati. Supporta opzionalmente un **footer con azioni** (submit/cancel) e dimensioni variabili.

---

### ♿️ Accessibilità

Il componente segue le linee guida WAI-ARIA e WCAG:

- Usa l'elemento **nativo** \`<dialog>\` che fornisce focus trap e chiusura via tastiera (\`ESC\`).
- Il **titolo** è fornito tramite un \`<h2>\` (o altro nodo semantico).
- L'icona di chiusura è una \`button-like\` con \`role="button"\`, \`tabIndex=0\` e gestione di \`Enter\` e \`Space\`.
- Quando il \`Dialog\` è chiuso, il focus può essere riportato al trigger esterno (opzionalmente gestito esternamente).
- Supporta screen reader e tastiera out of the box.

---

### 🔧 Esempio d'uso

\`\`\`jsx
<Dialog
  isOpen={open}
  title="Conferma eliminazione"
  onClose={() => setOpen(true)}
  footer
  cancelText="Annulla"
  submitText="Conferma"
  onSubmit={() => {}}
/>
\`\`\`

`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<DialogProps>;

export const Default: Story = {
  render: (args) => {
    function DialogStoryWrapper() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Apri Dialog</Button>
          <Dialog {...args} isOpen={open} onClose={() => setOpen(false)}>
            <p>Questa azione è irreversibile. Sei sicuro di voler procedere?</p>
          </Dialog>
        </>
      );
    }
    return <DialogStoryWrapper />;
  },
  args: {
    title: "Elimina elemento",
    footer: true,
    cancelText: "Annulla",
    submitText: "Elimina",
    size: SIZES.M,
  },
};
