import React from "react";
import { SPACING } from "../../constants/const";
import { RADIUS_VALUES, SPACING_VALUES } from "../../constants/constValues";
import Flex from "../Utils/Flex/Flex";
import { Meta } from "@storybook/react";
import { BodyExtraSmall } from "./Typography/Typography";

const meta: Meta = {
  title: "Foundations/Border Radius",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
### Border Radius
Il **Border Radius** è una proprietà CSS che consente di arrotondare gli angoli degli elementi. È comunemente utilizzato per migliorare l'estetica e la leggibilità dei componenti dell'interfaccia utente.
### Utilizzo  
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`RADIUS.{VARIABILE}\` importando \`RADIUS\` all'interno del proprio progetto dalla libreria.


#### ⚠️ **NB:** Per importare invece i valori di SPACING da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`RADIUS_VALUES\`** dalla libreria.
  `,
      },
    },
  },
};

export default meta;

export const BorderRadius = () => {
  const RADIUS_ARRAY = Object.entries(RADIUS_VALUES).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`RADIUS.${text}`);
  };

  const remToPxString = (remString: string) => {
    const rem = parseFloat(remString);
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return rem * rootFontSize;
  };

  return (
    <Flex gap={SPACING.SP_20}>
      {RADIUS_ARRAY.map((el) => (
        <Flex
          gap={SPACING.SP_10}
          direction="column"
          align="center"
          justify="center"
          onClick={() => copyToClipboard(el.name)}
          style={{
            cursor: "pointer",
            width: SPACING_VALUES.SP_128,
            height: SPACING_VALUES.SP_128,
            borderRadius: el.value,
          }}
          key={el.name}
          className="gp-p-10"
          border="100"
        >
          <BodyExtraSmall>
            {el.name} - {el.value}
          </BodyExtraSmall>
          <BodyExtraSmall>
            Value in px: {remToPxString(el.value)}
          </BodyExtraSmall>
        </Flex>
      ))}
    </Flex>
  );
};
