import React from "react";
import { Meta } from "@storybook/react";
import { SIZES, STATUS, THEME, SPACING } from "../../constants/const";
import Flex from "../Utils/Flex/Flex";
import { Body, HeadingSmall } from "./Typography/Typography";

const meta: Meta = {
  title: "Foundations/Constants",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
#### Le costanti riportate qui sono quelle utilizzate all'interno della libreria.
Le costanti sono divise in due categorie, quelle **generali** e quelle **specifiche** per i componenti.
<br>
Le costanti **generali** sono quelle che possono essere utilizzate in **qualsiasi parte della libreria**, come i colori, le dimensioni e gli spazi.
<br>
Le costanti **specifiche** per i componenti sono semplicemente costanti che non prevedono un valore specifico, ma vengono declinate
all'interno del **singolo componente** in cui sono utilizzate.
<br><br>
Le potete trovare elencate in questa pagina e riportate nella documentazione del componente che le utilizza e sono:
- **SIZES**: sono le costanti utilizzate per le dimensioni all'interno della libreria. Queste costanti possono essere utilizzate per definire le dimensioni dei componenti, come larghezza, altezza e dimensioni del font.
- **STATUS**: sono le costanti utilizzate per gli stati all'interno della libreria. Queste costanti possono essere utilizzate per definire gli stati dei componenti, come i pulsanti, i testi o i tag.
- **THEME**: sono le costanti utilizzate per le priorità all'interno della libreria. Queste costanti possono essere utilizzate per definire le priorità dei componenti, come i pulsanti.

#### Cliccando sul singolo elemento nell'elenco della documentazione sottostante, si può copiare il nome della variabile da inserire nel codice.

Le costanti generali sono:
- **SPACING**: sono le costanti utilizzate per gli spazi all'interno della libreria. Queste costanti sono espresse in rem e possono essere utilizzate per definire spaziatura nei componenti,
come gap o font-size. Le potete trovare documentate [qui](?path=/docs/foundations-spacing--docs). 
- **COLORS**: sono le costanti utilizzate per i colori all'interno della libreria. Queste costanti possono essere utilizzate per definire i colori di sfondo, il colore del testo e altri aspetti visivi dei componenti.   
Le potete quindi trovare documentate [qui](?path=/docs/foundations-colors--docs).
- **SHADOWS**: sono le costanti utilizzate per le ombre all'interno della libreria. Queste costanti possono essere utilizzate per definire le ombre dei componenti, come i pulsanti e le schede.
Le potete trovare documentate [qui](?path=/docs/foundations-shadows--docs).
- **RADIUS**: sono le costanti utilizzate per i raggi degli angoli all'interno della libreria. Queste costanti possono essere utilizzate per definire il raggio degli angoli dei componenti, come i pulsanti e le schede.
Le potete trovare documentate [qui](?path=/docs/foundations-radius--docs).
  

  `,
      },
    },
  },
};

export default meta;

export const Spacing = () => {
  const SIZES_ARRAY = Object.entries(SIZES).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboardSizes = (text: string) => {
    navigator.clipboard.writeText(`SIZES.${text}`);
  };
  const STATUS_ARRAY = Object.entries(STATUS).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboardStatus = (text: string) => {
    navigator.clipboard.writeText(`STATUS.${text}`);
  };
  const THEME_ARRAY = Object.entries(THEME).map(([name, value]) => ({
    name,
    value,
  }));
  const copyToClipboardTheme = (text: string) => {
    navigator.clipboard.writeText(`THEME.${text}`);
  };

  return (
    <Flex gap={SPACING.SP_20} direction="column">
      <HeadingSmall>SIZES</HeadingSmall>
      <Flex gap={SPACING.SP_20} className="gp-pb-20">
        {SIZES_ARRAY.map((el) => (
          <Flex
            gap={SPACING.SP_10}
            align="center"
            onClick={() => copyToClipboardSizes(el.name)}
            style={{
              cursor: "pointer",
            }}
            key={el.name}
            border="100"
            className="gp-p-10"
          >
            <Body>SIZES.{el.name}</Body>
          </Flex>
        ))}
      </Flex>
      <HeadingSmall>STATUS</HeadingSmall>
      <Flex gap={SPACING.SP_20} className="gp-pb-20">
        {STATUS_ARRAY.map((el) => (
          <Flex
            gap={SPACING.SP_10}
            align="center"
            onClick={() => copyToClipboardStatus(el.name)}
            style={{
              cursor: "pointer",
            }}
            key={el.name}
            border="100"
            className="gp-p-10"
          >
            <Body>STATUS.{el.name}</Body>
          </Flex>
        ))}
      </Flex>
      <HeadingSmall>THEME</HeadingSmall>
      <Flex gap={SPACING.SP_20} className="gp-pb-20">
          {THEME_ARRAY.map((el) => (
            <Flex
              gap={SPACING.SP_10}
              align="center"
              onClick={() => copyToClipboardTheme(el.name)}
            style={{
              cursor: "pointer",
            }}
            key={el.name}
            border="100"
            className="gp-p-10"
          >
              <Body>THEME.{el.name}</Body>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
