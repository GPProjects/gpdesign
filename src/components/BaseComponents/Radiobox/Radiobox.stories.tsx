import React from "react";
import { Meta } from "@storybook/react";
import RadioBox from "./Radiobox";
import { RadioboxProps } from "./RadioboxTypes";
import { COLORS, SPACING, STATUS } from "../../../constants/const";
import Icon from "../../Foundations/Icons/Icon";
import { Body } from "../../Foundations/Typography/Typography";
import Flex from "../../Utils/Flex/Flex";

const meta: Meta<typeof RadioBox> = {
  title: "Base Components/Radiobox",
  component: RadioBox,
  tags: ["autodocs"],
  argTypes: {
    before: {
      control: "boolean",
      description:
        "Se `true`, posiziona la label prima della radiobox invece che dopo.",
    },
    checked: {
      control: "text",
      description: "Valore selezionato del radiobox.",
    },
    children: {
      control: "text",
      description: "La label associata alla radiobox.",
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
        "Se `true`, disabilita la radiobox e la rende non interattiva.",
    },
    error: {
      control: "boolean",
      description: "Se `true`, applica lo stato di errore alla radiobox.",
    },
    handleChange: {
      action: "changed",
      description: "Callback chiamata al cambio di stato della radiobox.",
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
      description: "Identificatore univoco dell'input radiobox.",
    },
    status: {
      control: "select",
      options: [STATUS.DANGER, STATUS.SUCCESS, STATUS.WARNING, STATUS.INFO],
      description:
        "Definisce lo stato della radiobox, influenzando il suo stile.",
    },
    vertical: {
      control: "boolean",
      description:
        "Se `true`, allinea verticalmente la radiobox con la sua label.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente **Radiobox** è un input di tipo radio personalizzato che supporta label, messaggi di hint, stato visivo ed allineamento verticale.

➡️ La prop id è obbligatoria perché setta il valore del radio.
➡️ Le prop handleChange e checked sono necessarie per settare i valori del radio gestendo il value esternamente.

## ♿️ Accessibilità
- \`htmlFor=id\` associato al wrapper dei children
- La prop \`aria-disabled\` prende in automatico il valore \`true\` o \`false\` della prop \`disabled\`
- Input di tipo \`radio\` HTML
- Se presente, l'\`Hint\` è collegato con \`aria-describedby\`
- Supporto per la selezione da tastiera con **Enter/Invio**
- Se non ha \`children\`, deve avere un' \`aria-label\`

⚠️ **NB:** Raggruppare i radiobox con \`<fieldset>\` e \`<legend>\` per fornire contesto.

## 📌 Esempio
\`\`\`jsx
<RadioBox id="radio-1" checked={selected}
  handleChange={(idValue: string) => setSelected(idValue)}>
  Radio
</RadioBox>
\`\`\`

## 🔧 Proprietà
- **before** *(boolean, opzionale)*: Se \`true\`, posiziona la label prima della radiobox.
- **checked** *(string, opzionale)*: Valore selezionato del radiobox.
- **children** *(ReactNode, opzionale)*: La label associata alla radiobox.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, logga i props nel console log.
- **disabled** *(boolean, opzionale)*: Se \`true\`, disabilita la radiobox.
- **error** *(boolean, opzionale)*: Se \`true\`, applica lo stato di errore alla radiobox.
- **handleChange** *(function, opzionale)*: Callback chiamata al cambio di stato. Riceve l'id dell'input come argomento.
- **hint** *(string, opzionale)*: Testo opzionale mostrato sotto l'input.
- **hintShowIcon** *(boolean, opzionale)*: Se \`false\`, nasconde l'icona dell'hint.
- **hintStatus** *(string, opzionale)*: Stato personalizzato del messaggio di hint. 
- **id** *(string, richiesto)*: Identificatore univoco dell'input.
- **status** *(string, opzionale)*: Stato della radiobox. Può assumere uno dei seguenti valori documentati [qui](?path=/docs/foundations-constants--docs):
  - \`STATUS.DANGER\`
  - \`STATUS.SUCCESS\`
  - \`STATUS.INFO\`
  - \`STATUS.WARNING\`
- **vertical** *(boolean, opzionale)*: Se \`true\`, allinea verticalmente la radiobox.
        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: RadioboxProps) => <RadioBox {...args} />;

Default.args = {
  children: "Radiobox",
  id: "radiobox-id",
};

export const Disabled = ({ ...args }: RadioboxProps) => <RadioBox {...args} />;

Disabled.args = {
  children: "Radiobox disabilitato",
  disabled: true,
  id: "radiobox-id-2",
};

export const OnlyRadio = ({ ...args }: RadioboxProps) => <RadioBox {...args} />;

OnlyRadio.args = {
  "aria-label": "radiobox senza children",
  id: "radiobox-id-3",
};

OnlyRadio.parameters = {
  docs: {
    description: {
      story: "⚠️ Il radiobox senza `children` richiede un' `aria-label`",
    },
  },
};

export const WithErrorAndHint = ({ ...args }: RadioboxProps) => (
  <RadioBox {...args} />
);

WithErrorAndHint.args = {
  children: "Radiobox",
  hint: "Hint Message",
  error: true,
  id: "radiobox-id-4",
};

export const WithCustomChildren = ({ ...args }: RadioboxProps) => (
  <RadioBox {...args} />
);

WithCustomChildren.args = {
  checked: "radiobox-id",
  children: (
    <Flex gap={SPACING.SP_8} align="center">
      <Body color={COLORS.textMuted}>Custom Children</Body>
      <Icon iconName="faComment" color={COLORS.textMuted} />
    </Flex>
  ),
};
