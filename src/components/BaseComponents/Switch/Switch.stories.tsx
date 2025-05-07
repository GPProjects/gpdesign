import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Base Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    "aria-label": {
      control: "text",
      description: "Etichetta accessibile per lo switch (obbligatoria).",
    },
    checked: {
      control: "boolean",
      description: "Stato attivo dello switch. Imposta anche aria-checked.",
    },
    className: {
      control: "text",
      description: "Classe CSS personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description: "Se `true`, logga i props nel console log.",
    },
    disabled: {
      control: "boolean",
      description:
        "Se `true`, disabilita lo switch. Imposta anche aria-disabled.",
    },
    handleChange: {
      action: "changed",
      description: "Callback chiamata al cambio di stato (true/false).",
    },
    id: {
      control: "text",
      description: "Identificatore univoco dello switch.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Switch** è un interruttore (toggle) personalizzato, semanticamente corretto grazie all'attributo \`role="switch"\`.

➡️ **La prop \`aria-label\` è obbligatoria per l'accessibilità**.

## ♿️ Accessibilità
- \`role="switch"\` su elemento \`button\`
- \`aria-checked\` riflette lo stato attivo
- \`aria-disabled\` viene gestito in base alla prop \`disabled\`
- \`aria-label\` è richiesta per una corretta etichettatura dello switch

## 📌 Esempio
\`\`\`jsx
<Switch checked={true} handleChange={(val) => console.log(val)} aria-label="Dark mode toggle" />
\`\`\`

## 🔧 Proprietà
- **aria-label** *(string, richiesto)*: Etichetta testuale per accessibilità.
- **checked** *(boolean, opzionale)*: Stato dello switch.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Log dei props in console.
- **disabled** *(boolean, opzionale)*: Disabilita lo switch.
- **handleChange** *(function, opzionale)*: Callback al cambio valore.
- **id** *(string, opzionale)*: Identificatore dello switch.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    "aria-label": "Dark mode toggle",
  },
};
