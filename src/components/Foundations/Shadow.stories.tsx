import React from "react";
import { Meta } from "@storybook/react";
import { SPACING } from "../../constants/const";
import Flex from "../Utils/Flex/Flex";
import Text from "./Typography/Text";
import { SHADOWS_VALUES } from "../../constants/constValues";

const meta: Meta = {
  title: "Foundations/Shadows",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
### Shadows
Il **box-shadow** è una proprietà CSS che consente di creare effetti di ombra sugli elementi. È comunemente utilizzato per migliorare la profondità e la gerarchia visiva dei componenti dell'interfaccia utente.
### Utilizzo
  Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`SHADOWS.{VARIABILE}\` importando il \`SHADOWS\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SHADOWS da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`SHADOWS_VALUES\`** dalla libreria.
  `,
      },
    },
  },
};

export default meta;

export const Shadow = () => {
  const SHADOW_ARRAY = Object.entries(SHADOWS_VALUES).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`SHADOWS.${text}`);
  };
  return (
    <Flex direction="column" gap={SPACING.SP_24}>
      {SHADOW_ARRAY.map((el) => (
        <Flex
          onClick={() => copyToClipboard(el.name)}
          style={{
            cursor: "pointer",
            boxShadow: el.value,
          }}
          key={el.name}
          className="gp-p-10"
        >
          <Text>{el.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
