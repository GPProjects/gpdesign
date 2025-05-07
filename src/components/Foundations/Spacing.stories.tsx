import React from "react";
import { Meta } from "@storybook/react";
import { SPACING } from "../../constants/const";
import Flex from "../Utils/Flex/Flex";
import { COLORS_VALUES, SPACING_VALUES } from "../../constants/constValues";
import { Body, BodyExtraSmall } from "./Typography/Typography";

const meta: Meta = {
  title: "Foundations/Spacing",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
#### Spacing
Il **Spacing** è una proprietà CSS che consente di definire lo spazio tra gli elementi. È comunemente utilizzato per migliorare la leggibilità e l'estetica dei componenti dell'interfaccia utente.
### Utilizzo
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`SPACING.{VARIABILE}\` importando \`SPACING\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SPACING da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`SPACING_VALUES\`** dalla libreria.
  `,
      },
    },
  },
};

export default meta;

export const Spacing = () => {
  const SPACING_ARRAY = Object.entries(SPACING_VALUES).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`SPACING.${text}`);
  };

  const remToPxString = (remString: string) => {
    const rem = parseFloat(remString);
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return rem * rootFontSize;
  };
  return (
    <Flex direction="column" gap={SPACING.SP_20}>
      {SPACING_ARRAY.map((el) => (
        <Flex
          gap={SPACING.SP_10}
          align="center"
          onClick={() => copyToClipboard(el.name)}
          style={{
            cursor: "pointer",
          }}
          key={el.name}
        >
          <Flex
            style={{
              width: el.value,
              height: el.value,
              backgroundColor: COLORS_VALUES.accent100,
            }}
            border="100"
          ></Flex>{" "}
          <Body>
            {el.name} - {el.value}
          </Body>
          <BodyExtraSmall>
            Value in px: {remToPxString(el.value)}
          </BodyExtraSmall>
        </Flex>
      ))}
    </Flex>
  );
};
