import React from "react";
import { Meta } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./TextTypes";

const meta: Meta<typeof Text> = {
  title: "Foundations/Typography",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description:
        "Imposta l'allineamento del testo. Può essere: `left`, `center`, `right`.",
    },
    children: {
      control: "text",
      description:
        "Il contenuto interno, che può essere un nodo React o una stringa.",
    },
    className: {
      control: "text",
      description: "Imposta una classe CSS personalizzata.",
    },
    color: {
      control: "select",
      options: [
        "accent100",
        "accent200",
        "accent300",
        "border100",
        "border200",
        "border300",
        "danger100",
        "danger200",
        "danger300",
        "info100",
        "info200",
        "info300",
        "success100",
        "success200",
        "success300",
        "warning100",
        "warning200",
        "warning300",
        "white",
        "text-default",
        "text-muted",
        "bg-disabled",
        "bg-white",
        "bg-hover",
        "disabled",
        "black",
      ],
      description: "Imposta il colore del testo.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, mostra nel log della console le proprietà passate al componente.",
    },
    id: { control: "text", description: "Imposta l'ID del contenitore." },
    italic: {
      control: "boolean",
      description: "Imposta lo stile `italic` del testo.",
    },
    tag: {
      control: "text",
      description: "Imposta il tag HTML del testo. Di default è `p`.",
    },
    type: {
      control: "select",
      options: [
        "display-large",
        "display-small",
        "heading-large",
        "heading-medium",
        "heading-small",
        "body",
        "body-small",
        "body-extra-small",
      ],
      description: "Imposta lo stile del testo.",
    },
    underline: {
      control: "boolean",
      description: "Imposta lo stile `underline` del testo.",
    },

    weight: {
      control: "select",
      options: ["700", "600", "500", "400", "300"],
      description: "Imposta il peso del testo.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Il componente \`Text\` rappresenta un componente di testo che di default è un tag \`p\`.  

Sono esportate dalla libreria anche specifiche customizzazioni dell'elemento di testo.
---

## 📌 Esempio di utilizzo
\`\`\`jsx
<Text>Testo di default</Text>
\`\`\`

---

## 🔧 Proprietà
- **align** *(string, opzionale)*: L'allineamento del testo. Di default è \`left\`. Può essere: 
  - \`left\`
  - \`center\`
  - \`right\`
- **children** *(ReactNode, richiesto)*: Il contenuto del componente (testo o elementi React).
- **className** *(string, opzionale)*: Classi CSS aggiuntive per personalizzare lo stile.
- **color** *(string, opzionale)*: Colore del testo. Default: \`text-default\`.
Può essere uno fra le variabili di \`COLORS\` che si trovano [qui](?path=/docs/foundations-colors--docs)
- **debugMode** *(boolean, opzionale)*: Se attivato, mostra le proprietà del componente nella console.
- **id** *(string, opzionale)*: Identificativo univoco per il testo.
- **italic** *(boolean, opzionale)*: Imposta lo stile "italic" del testo.
- **tag** *(string, opzionale)*: Specifica il tag HTML da usare (es: \`h1\`, \`span\`, \`div\`). Default: \`p\`.
- **type** *(string, opzionale)*: Assegna lo stile di testo. Onguno di questi stili è esportato direttamente anche come
componente.
Può essere uno fra:
 - \`display-large\`
 - \`display-small\`
 - \`heading-large\`
 - \`heading-medium\`
 - \`heading-small\`
 - \`body\`
 - \`body-small\`
 - \`body-extra-small\`
- **underline** *(boolean, opzionale)*: Imposta l'underline nel testo.
- **weight** *(string, opzioanle)*: Imposta il peso del testo. Di default è \`regular\`. Può essere uno fra:
  - \`700\`
  - \`600\`
  - \`400\`
  - \`500\`
  - \`300\`

        `,
      },
    },
  },
};

export default meta;

export const Default = (args: TextProps) => <Text {...args} />;
Default.args = {
  className: "gp-p-20",
  children: "Testo di Default",
};

export const Link = (args: TextProps) => <Text {...args} />;
Link.args = {
  children: "Testo con tag a",
  tag: "a",
};

export const DisplayLarge = (args: TextProps) => <Text {...args} />;
DisplayLarge.args = {
  children: "Display Large",
  type: "display-large",
};
DisplayLarge.parameters = {
  docs: {
    description: {
      story:
        "Il testo `DisplayLarge` viene utilizzato come **Hero section title**.",
    },
  },
};

export const DisplaySmall = (args: TextProps) => <Text {...args} />;
DisplaySmall.args = {
  children: "Display Small",
  type: "display-small",
};

export const HeadingLarge = (args: TextProps) => <Text {...args} />;
HeadingLarge.args = {
  children: "Heading Large",
  type: "heading-large",
};

export const HeadingMedium = (args: TextProps) => <Text {...args} />;
HeadingMedium.args = {
  children: "Heading Medium",
  type: "heading-medium",
};

export const HeadingSmall = (args: TextProps) => <Text {...args} />;
HeadingSmall.args = {
  children: "Heading Small",
  type: "heading-small",
};

export const Body = (args: TextProps) => <Text {...args} />;
Body.args = {
  children: "Body",
  type: "body",
};

export const BodySmall = (args: TextProps) => <Text {...args} />;
BodySmall.args = {
  children: "Body Small",
  type: "body-small",
};

export const BodyExtraSmall = (args: TextProps) => <Text {...args} />;
BodyExtraSmall.args = {
  children: "Body Extra Small",
  type: "body-extra-small",
};
