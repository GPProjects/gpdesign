import React, { useState } from "react";
import { Meta } from "@storybook/react";
import DropdownMenu from "./DropdownMenu";
import { DropdownMenuProps } from "./DropdownMenuTypes";
import Button from "../../BaseComponents/Button/Button";
import ListItem from "../../BaseComponents/ListItem/ListItem";
import Divider from "../../BaseComponents/Divider/Divider";
import { STATUS } from "../../../constants/const";

const meta: Meta<typeof DropdownMenu> = {
  title: "Utils/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "Il contenuto del menu a tendina (nodi React o stringhe).",
    },
    className: {
      control: "text",
      description: "Classe CSS personalizzata per il contenitore.",
    },
    debugMode: {
      control: "boolean",
      description:
        "Se `true`, logga in console le proprietà ricevute dal componente.",
    },
    id: {
      control: "text",
      description: "ID univoco del menu a tendina.",
    },
    automaticClose: {
      control: "boolean",
      description: "Se `true`, chiude il dropdown cliccando fuori.",
      defaultValue: true,
    },
    header: {
      control: false,
      description: "Renderizza il trigger (es. bottone) che apre il menu.",
    },
    isOpen: {
      control: false,
      description: "Stato di apertura del dropdown (gestito internamente).",
    },
    onClose: {
      control: false,
      description: "Callback chiamata alla chiusura del dropdown.",
    },
    position: {
      control: "select",
      options: ["bottom", "right", "left", "top"],
      description:
        "Posizione del menu a tendina rispetto al trigger (es. bottone).",
    },
  },

  parameters: {
    docs: {
      description: {
        component: `
Il componente **DropdownMenu** mostra un menu a tendina personalizzabile.

➡️ **La prop \`header\` è obbligatoria per gestire l'apertura del menu. Deve possedere la prop le prop \`aria-haspopup="menu"\` e \`aria-expanded={open}\`. (vedi accessibilità)*. <br>

## ♿️ Accessibilità
- \`role="menu\` associato al wrapper dei del menu.
- Supporto per la selezione da tastiera con **Frecce/Esc** dei figli con il ruolo di **menuitem**.
- Quando il menu viene aperto, il primo elemento con il ruolo di **menuitem** riceve il focus.
- Quando il menu viene chiuso, il focus torna al trigger. (elemento con \`aria-haspopup="menu"\`).
- Per chiudere il menu, l'utente può premere **Esc**,  o cliccare al di fuori del menu se \`automaticClose\` è \`true\`).

⚠️ **NB:** \`aria-haspopup="menu"\` e \`aria-expanded={open}\` devono essere impostati sul trigger dell'apertura
nella header. I figli del menu devono avere il ruolo di **menuitem**.


## 📌 Esempio base:
\`\`\`jsx
<DropdownMenu header={() => <Button aria-haspopup="menu" aria-expanded={open} onClick={()=> setOpen(prev => !prev)}>Apri</Button>}>
  <div role="menuitem">Contenuto menu</div>
</DropdownMenu>
\`\`\`

## 🔧 Proprietà

- **children** *(ReactNode, opzionale)*: Il contenuto del menu a tendina (nodi React o stringhe).
- **className** *(string, opzionale)*: Imposta una classe CSS personalizzata.
- **debugMode** *(boolean, opzionale)*: Se \`true\`, mostra nel log della console le proprietà passate al componente.
- **id** *(string, opzionale)*: Imposta l'ID del componente.
- **automaticClose** *(boolean, opzionale)*: Se \`true\`, chiude il dropdown quando si clicca al di fuori di esso. Default: \`true\`.
- **header** *(function, obbligatoria)*: Funzione che renderizza il trigger (es. bottone) per aprire il menu.
- **isOpen** *(boolean, opzionale)*: Stato di apertura del dropdown (gestito internamente).
- **onClose** *(function, opzionale)*: Callback chiamata quando il dropdown viene chiuso.
- **position** *(string, opzionale)*: Posizione del menu a tendina rispetto al trigger/header (es. bottone). Default: \`bottom\`. Opzioni: 
 - \`bottom\`
 - \`right\`
 - \`left\`
 - \`top\`. 


        `,
      },
    },
  },
};

export default meta;

export const Default = ({ ...args }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <div style={{ height: "500px" }}>
      <DropdownMenu
        isOpen={open}
        onClose={onClose}
        {...args}
        header={() => (
          <Button
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            Open Dropdown menu
          </Button>
        )}
      >
        <div>
          <ListItem
            id="1"
            caption="Caption"
            role="menuitem"
            onClick={(e, id) => {
              console.log("id", id);
              onClose();
            }}
          >
            List item 1
          </ListItem>
          <Divider />
          <ListItem
            id="2"
            icon="faCircleUser"
            role="menuitem"
            onClick={(e, id) => {
              console.log("id", id);
            }}
          >
            List item 2 più lungo
          </ListItem>
          <Divider />
          <ListItem
            id="3"
            role="menuitem"
            onClick={(e, id) => {
              console.log("id", id);
            }}
          >
            List item 3
          </ListItem>
          <ListItem
            id="4"
            disabled
            role="menuitem"
            onClick={(e, id) => {
              console.log("id", id);
            }}
          >
            List item 4
          </ListItem>
          <ListItem
            id="5"
            status={STATUS.DANGER}
            role="menuitem"
            onClick={(e, id) => {
              console.log("id", id);
            }}
          >
            List item 5
          </ListItem>
        </div>
      </DropdownMenu>
    </div>
  );
};

Default.args = {
  children: "DropdownMenu message",
};
