import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { SIZES } from "../../../constants/const";
import { TabsItem, TabsProps } from "./Tabs.types";

const meta: Meta<typeof Tabs> = {
  title: "Base Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    arrayChildren: {
      control: "object",
      description: "Array di oggetti che definiscono ciascun tab.",
    },
    className: {
      control: "text",
      description: "Classi CSS personalizzate da applicare al wrapper dei tab.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, stampa in console i log relativi alle proprietà ricevute.",
    },
    disabled: {
      control: "boolean",
      description: "Disabilita l'intero gruppo di tab e i singoli tab.",
    },
    fullWidth: {
      control: "boolean",
      description: "Se `true`, ciascun tab occupa larghezza piena disponibile.",
    },
    id: {
      control: "text",
      description: "ID univoco per il contenitore del gruppo tab.",
    },
    onClick: {
      action: "tabClicked",
      description:
        "Callback invocata al click su un tab. Riceve un oggetto `{ index, item }`.",
    },
    selectedElement: {
      control: "number",
      description:
        "Indice numerico del tab attivo. Se non specificato, sarà selezionato il primo tab.",
    },
    size: {
      control: "select",
      options: [SIZES.S, SIZES.M],
      description: "Dimensione del tab. Valori disponibili: `S`, `M`",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### 📌 Descrizione

Il componente \`Tabs\` permette di gestire interfacce con contenuti suddivisi in pannelli, attivabili tramite etichette cliccabili.

### ♿️ Accessibilità

- Il wrapper principale ha \`role="tablist"\`.
- Ogni tab ha \`role="tab"\`, \`aria-selected\` e \`tabIndex\` dinamico.
- Il pannello attivo può essere implementato separatamente con \`role="tabpanel"\` e \`aria-labelledby\`.
- Navigazione con tastiera supportata:
  - Frecce **destra/sinistra** per cambiare focus tra i tab.
  - \`Home\` sposta il focus sul primo tab.
  - \`End\` sposta il focus sull'ultimo tab.
- \`Tab\` sposta il focus fuori dal componente (evitando una navigazione scomoda da tastiera con molti tab come da direttive WAI-ARIA).
- \`aria-controls\` è usato per associare il tab al suo pannello.
- \`aria-disabled\` è usato per disabilitare i tab disabilitati e anche per segnalare il wrapper disabilitato.

⚠️ **NB:** \`role="tabpanel"\` e \`aria-labelledby\ devono essere assegnati al contenuto della pagina gesito dai tab.

### 🔧 Proprietà principali

- **arrayChildren** *(Array di oggetti, obbligatorio)*: Array di oggetti che definiscono ciascun tab. Richiede almeno \`text\` e \`id\`.
- **className** *(string, opzionale)*: Classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Abilita il debug log in console.
- **id** *(string, opzionale)*: ID univoco per il componente.
- **fullWidth** *(boolean, opzionale)*: Se \`true\` rende ogni tab largo 100%.
- **onClick** *(function, opzionale)*: Evento \`onClick\`. Riceve come paramentri, oltre all'evento di onClick anche \`index\` e \`item\`.
- **selectedElement** *(number, opzionale)*: Permette il controllo esterno del tab attivo. Se non specificato, sarà selezionato il primo tab. Rappresenta l'index del tab attivo.
- **size** *(string, opzionale)*: Dimensione del tab. Valori disponibili: \`S\`, \`M\`.
- **disabled** *(boolean, opzionale)*: Se \`true\`, disabilita l'intero gruppo di tab, non permettendo la navigazione.


        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    arrayChildren: [
      {
        id: "tab-1",
        text: "Tab Uno",
        number: 5,
      },
      {
        id: "tab-2",
        text: "Tab Due",
        number: 12,
      },
      {
        id: "tab-3",
        text: "Tab Disabilitato",
        disabled: true,
        number: 3,
      },
      {
        id: "tab-4",
        text: "Tab senza numero",
      },
    ],
    size: SIZES.M,
    fullWidth: false,
    selectedElement: 0,
    debugMode: false,
  },
};
