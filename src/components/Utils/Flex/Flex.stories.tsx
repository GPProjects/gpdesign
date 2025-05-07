import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";
import { Row, Column } from "./FlexContainers";
import { COLORS, SPACING } from "../../../constants/const";

const meta: Meta<typeof Flex> = {
  title: "Utils/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description:
        "Contenuto interno del componente. Può essere un nodo React o un altro componente Flex.",
    },
    className: {
      control: "text",
      description: "Classe CSS aggiuntiva personalizzata.",
    },
    debugMode: {
      control: "boolean",
      description: "Se attivo, stampa le props in console per debug.",
    },
    id: {
      control: "text",
      description: "ID univoco per il contenitore.",
    },
    tag: {
      control: "text",
      description:
        "Specifica il tag HTML usato per il container (es. `div`, `section`, `article`).",
    },
    pointer: {
      control: "boolean",
      description: "Imposta il cursore su `pointer` al passaggio del mouse.",
    },
    gap: {
      control: "text",
      description: "Gap tra gli elementi figli.",
    },
    flex: {
      control: "number",
      description: "Imposta la regola `flex` (numeri da 1 a 10).",
    },
    direction: {
      control: "select",
      options: ["row", "column"],
      description:
        "Direzione degli elementi: orizzontale (`row`) o verticale (`column`).",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "space-between"],
      description: "Allineamento orizzontale degli elementi nel container.",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
      description: "Allineamento verticale degli elementi nel container.",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap"],
      description: "Se gli elementi devono andare a capo o no.",
    },
    radius: {
      control: "select",
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "max"],
      description: "Applica un border-radius predefinito.",
    },
    shadow: {
      control: "select",
      options: ["sm", "normal", "md", "lg", "xl", "2xl", "3xl", "focus"],
      description: "Applica un'ombra al contenitore.",
    },
    border: {
      control: "select",
      options: [
        "100",
        "200",
        "300",
        "default",
        "muted",
        "danger",
        "success",
        "warning",
        "info",
      ],
      description: "Applica un bordo con uno stile predefinito.",
    },
    w: {
      control: "select",
      options: ["full", "100", "auto", "fit-content"],
      description: "Larghezza del container.",
    },
    h: {
      control: "select",
      options: ["full", "100", "auto", "fit-content"],
      description: "Altezza del container.",
    },
    bg: {
      control: "text",
      description: "Colore di sfondo (es. `accent100`, `bg1`).",
    },
    position: {
      control: "select",
      options: ["relative", "sticky", "absolute", "fixed"],
      description: "Posizionamento CSS del container.",
    },
    s: {
      control: "object",
      description: "Oggetto con stili personalizzati per dispositivi ≥576px.",
    },
    m: {
      control: "object",
      description: "Oggetto con stili personalizzati per dispositivi ≥960px.",
    },
    l: {
      control: "object",
      description: "Oggetto con stili personalizzati per dispositivi ≥1024px.",
    },
    xl: {
      control: "object",
      description: "Oggetto con stili personalizzati per dispositivi ≥1280px.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente \`Flex\` è un wrapper flessibile basato su \`display: flex\`, utile per strutturare layout dinamici e responsivi.

---

## 📌 Esempio base

\`\`\`jsx
<Flex gap="20" direction="row" wrap="wrap">Contenuto</Flex>
\`\`\`

---

## 🧱 Props principali

- **children** *(ReactNode)*: Contenuto del componente.
- **className** *(string)*: Classi aggiuntive personalizzate.
- **debugMode** *(boolean)*: Mostra i props nella console.
- **id** *(string)*: ID univoco.
- **tag** *(string)*: Tag HTML usato. Default: \`div\`.
- **gap** *(string)*: Spaziatura tra figli.
- **wrap** *(string)*: Avvolgimento: \`wrap\` | \`nowrap\`.
- **direction** *(string)*: Direzione: \`row\` | \`column\`.
- **justify** *(string)*: Allineamento orizzontale.
- **align** *(string)*: Allineamento verticale.
- **flex** *(1-10)*: Valore flex.
- **radius** *(string)*: Border-radius.
- **shadow** *(string)*: Ombra.
- **border** *(string)*: Tipo di bordo.
- **w / h** *(string)*: Larghezza e altezza.
- **position** *(string)*: Posizionamento.
- **bg** *(string)*: Colore sfondo.
- **s / m / l / xl** *(object)*: Stili responsive.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: "Contenuto di default con padding e sfondo",
    bg: COLORS.bgDisabled,
    className: "gp-p-16",
  },
};

export const Responsive: Story = {
  args: {
    children: (
      <>
        <Flex className="gp-p-16 gp-l-p-8 ">Resposive Item 1</Flex>
        <Flex className="gp-p-40 gp-l-p-8">Resposive Item 2</Flex>
      </>
    ),
    gap: "20",
    direction: "column",
    bg: "accent100",
    radius: "sm",
    shadow: "sm",
    pointer: true,
    border: "200",
    l: {
      border: "warning",
      shadow: "xl",
      radius: "xl",
      gap: "48",
      direction: "row",
      wrap: "wrap",
      bg: "accent300",
    },
  },
};

export const RowContainer: Story = {
  render: (args) => (
    <Row border="100" gap={SPACING.SP_20} {...args}>
      <Flex border="200">Primo figlio</Flex>
      <Flex border="200">Secondo figlio</Flex>
    </Row>
  ),
};

export const ColumnContainer: Story = {
  render: (args) => (
    <Column border="100" gap={SPACING.SP_20} {...args}>
      <Flex border="200">Primo figlio</Flex>
      <Flex border="200">Secondo figlio</Flex>
    </Column>
  ),
};
