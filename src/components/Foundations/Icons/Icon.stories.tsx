import React from "react";
import { Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";
import { SIZES } from "../../../constants/const";

const videoFile = new URL(
  "../../../assets/tutorial/Icons-tutorial.mp4",
  import.meta.url
).href;

const meta: Meta = {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: "text",
      description:
        "Il nome dell'icona da visualizzare (es: faHome, faUser, faCircleUser).",
    },
    color: { control: "text", description: "Il colore dell'icona." },
    size: {
      control: "select",
      options: [SIZES.L, SIZES.M, SIZES.S],
      description: "Imposta la dimensione dell'icona.",
    },
    type: {
      control: "select",
      options: ["solid", "regular", "light", "thin", "duotone", "brands"],
      description:
        "Il tipo di icona (solid, regular, light, thin, duotone, brands).",
    },
    id: {
      control: "text",
      description: "Identificativo univoco per il componente (opzionale).",
    },
    className: {
      control: "text",
      description:
        "Classi CSS aggiuntive per personalizzare lo stile dell'icona.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, mostra nel log della console le proprietà passate al componente.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Le icone qui riportate sono le icone di FontAwesome.
Visitare [FontAwesome](https://fontawesome.com/search) per cercare le icone.

### Come utilizzare le icone:
1. Selezionare l'icona desiderata.
2. Verificare il tipo (solid, regular, brands) e inserirlo come prop \`type\`.
3. Cliccare sull'icona e selezionare il tab **"React"**.
4. Selezionare il tab **"Individual Import"**, copiare il nome e inserirlo come prop \`iconName\`.

<br><br>

## 📹 Video Tutorial
<br>
<video controls width="600" style="border: 1px solid black;">
  <source src="${videoFile}" type="video/mp4" />
  Il tuo browser non supporta il video.
</video>

## 🔧 Proprietà
- **iconName** *(string, richiesto)*: Il nome dell'icona da visualizzare (es: faHome, faUser, faCircleUser). Vedi video tutorial. ⬆️
- **color** *(string, opzionale)*: Il colore dell'icona. Se non specificato, viene usato \`COLORS.textDefault\`.
- **size** *(string, opzionale)*: La dimensione dell'icona. Default: \`SIZES.M\`. Può essere uno fra:
  - \`SIZES.S\`
  - \`SIZES.M\`
  - \`SIZES.L\`
- **type** *(string, opzionale)*: Il tipo di icona. Default: \`solid\`. accetta:
  - \`solid\`
  - \`regular\`
  - \`light\`
  - \`thin\`
  - \`duotone\`
  - \`brands\`
- **id** *(string, opzionale)*: Identificativo univoco per l'icona.
- **className** *(string, opzionale)*: Classi CSS aggiuntive per personalizzare lo stile dell'icona.
- **debugMode** *(boolean, opzionale)*: Se attivato, mostra le proprietà del componente nella console.
        `,
      },
    },
  },
};

export default meta;

export const Default = (args: IconProps) => <Icon {...args} />;
Default.args = {
  iconName: "faCircleUser",
};

export const Solid = (args: IconProps) => <Icon {...args} />;
Solid.args = {
  iconName: "faCircleUser",
  type: "solid",
};

export const Regular = (args: IconProps) => <Icon {...args} />;
Regular.args = {
  iconName: "faCircleUser",
  type: "regular",
};

export const Brand = (args: IconProps) => <Icon {...args} />;
Brand.args = {
  iconName: "faSlack",
  type: "brands",
};
