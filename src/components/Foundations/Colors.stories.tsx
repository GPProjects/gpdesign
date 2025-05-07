import React from "react";
import { Meta } from "@storybook/react";
import { COLORS, SPACING } from "../../constants/const";
import { COLORS_VALUES } from "../../constants/constValues";
import Flex from "../Utils/Flex/Flex";
import Text from "./Typography/Text";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
### Color Palette
La **Color Palette** è una raccolta di colori utilizzati in un progetto per garantire coerenza e armonia visiva. Essa comprende colori primari, secondari, di sfondo, di testo e di stato (successo, errore, avviso, ecc.).
### Utilizzo
  Cliccando sul singolo colore nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice come:
\`COLORS.{VARIABILE}\` importando \`COLORS\` all'interno del proprio progetto dalla libreria.

#### ⚠️ **NB:** Per importare invece i valori di SHADOWS da poter inserire ad esempio direttamente in un elemento style, è necessario importare **\`COLORS_VALUES\`** dalla libreria.

  `,
      },
    },
  },
};

export default meta;

export const Colors = () => {
  const COLORS_ARRAY = Object.entries(COLORS_VALUES).map(([name, value]) => ({
    name,
    value,
  }));

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`COLORS.${text}`);
  };
  return (
    <Flex direction="column">
      <Flex wrap="wrap" gap={SPACING.SP_20} className="gp-pb-24 gp-pt-24">
        {COLORS_ARRAY.map((el) => (
          <Flex
            onClick={() => copyToClipboard(el.name)}
            style={{
              width: "260px",
              cursor: "pointer",
              backgroundColor: el.value,
            }}
            key={el.name}
            className="gp-p-10"
          >
            <Text
              color={
                el.name === "textDefault" ||
                el.name === "textMuted" ||
                el.name === "black"
                  ? COLORS.white
                  : COLORS.textDefault
              }
            >
              {el.name} - {el.value}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
