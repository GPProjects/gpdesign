import React from "react";
import { Meta } from "@storybook/react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./CheckboxTypes";
import { COLORS, STATUS } from "../../../constants/const";
import Icon from "../../Foundations/Icons/Icon";
import { Body } from "../../Foundations/Typography/Typography";
import Flex from "../../Utils/Flex/Flex";

const meta: Meta<typeof Checkbox> = {
  title: "Base Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    before: {
      control: "boolean",
      description:
        "Se `true`, posiziona la label prima della checkbox invece che dopo.",
    },
    checked: {
      control: "boolean",
      description: "Stato della checkbox: selezionata o no.",
    },
    children: {
      control: "text",
      description: "La label associata alla checkbox.",
    },
    className: {
      control: "text",
      description: "Imposta una classe CSS personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description: "Se `true`, logga i props nel console log.",
    },
    disabled: {
      control: "boolean",
      description:
        "Se `true`, disabilita la checkbox e la rende non interattiva.",
    },
    error: {
      control: "boolean",
      description: "Se `true`, applica lo stato di errore alla checkbox.",
    },
    handleChange: {
      action: "changed",
      description: "Callback chiamata al cambio di stato della checkbox.",
    },
    hint: {
      control: "text",
      description: "Testo opzionale mostrato sotto l'input come suggerimento.",
    },
    hintShowIcon: {
      control: "boolean",
      description: "Nasconte l'icona del componente Hint.",
    },
    hintStatus: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description: "Stato personalizzato del messaggio di hint, se presente.",
    },
    id: {
      control: "text",
      description: "Identificatore univoco dell'input checkbox.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description:
        "Definisce lo stato della checkbox, influenzando il suo stile.",
    },
    vertical: {
      control: "boolean",
      description:
        "Se `true`, allinea verticalmente la checkbox con la sua label.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Checkbox** è un'input di tipo checkbox personalizzato, che supporta label, stato, messaggi di hint e layout verticale.

➡️ **La prop \`id\` è obbligatoria per gestire correttamente l'handleChange dall'esterno**. <br>
➡️ Le prop \`handleChange\` e \`checked\` sono necessarie per settare i valori della checkbox gestendo il value esternamente.

## ♿️ Accessibilità
- \`htmlFor=id\` associato al wrapper dei children
- La prop \`aria-disabled\` prende in automatico il valore \`true\` o \`false\` della prop \`disabled\`
- Input di tipo \`checkbox\` HTML
- Se presente, l'\`Hint\` è collegato con \`aria-describedby\`
- Supporto per la selezione da tastiera con **Enter/Invio**
- Se non ha \`children\`, deve avere un' \`aria-label\`

⚠️ **NB:** Raggruppare le checkbox con \`<fieldset>\` e \`<legend>\` per fornire contesto.

## 📌 Esempio
\`\`\`jsx
<Checkbox id="checkbox-1" checked={valueChecked}
  handleChange={(idValue: string, value: boolean) => setValueChecked(value)}>
  Checkbox
</Checkbox>
\`\`\`

## 🔧 Proprietà
- **before** *(boolean, opzionale)*: Se \`true\`, posiziona la label prima della checkbox.
- **checked** *(boolean, opzionale)*: Stato della checkbox.
- **children** *(ReactNode, opzionale)*: La label associata alla checkbox.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, logga i props nel console log.
- **disabled** *(boolean, opzionale)*: Se \`true\`, disabilita la checkbox.
- **error** *(boolean, opzionale)*: Se \`true\`, applica lo stato di errore alla checkbox.
- **handleChange** *(function, opzionale)*: Callback chiamata al cambio di stato. Riceve l'id e il valore dell'input come argomento.
- **hint** *(string, opzionale)*: Testo opzionale mostrato sotto l'input.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato personalizzato del messaggio di hint. 
- **id** *(string, richiesto)*: Identificatore univoco dell'input. 
- **status** *(string, opzionale)*: Stato della checkbox. Può assumere uno dei seguenti valori, documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **vertical** *(boolean, opzionale)*: Se \`true\`, allinea verticalmente la checkbox.
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: CheckboxProps) => <Checkbox {...args} />;

Default.args = {
  children: "Checkbox",
  id: "checkbox-1",
};

export const Disabled = ({ ...args }: CheckboxProps) => <Checkbox {...args} />;

Disabled.args = {
  children: "Checkbox disabled",
  disabled: true,
  id: "checkbox-2",
};

export const OnlyCheckbox = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
);

OnlyCheckbox.args = {
  "aria-label": "checkbox senza children",
  id: "checkbox-3",
};

OnlyCheckbox.parameters = {
  docs: {
    description: {
      story: "⚠️ La checkbox senza `children` richiede un' `aria-label`",
    },
  },
};

export const WithErrorAndHint = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
);

WithErrorAndHint.args = {
  children: "Checkbox",
  hint: "Hint Message",
  error: true,
  id: "checkbox-4",
};

export const WithCustomChildren = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
);

WithCustomChildren.args = {
  children: (
    <Flex gap="8" align="center">
      <Body color={COLORS.textMuted}>Custom Children</Body>
      <Icon iconName="faComment" color={COLORS.textMuted} />
    </Flex>
  ),
  id: "checkbox-5",
};
