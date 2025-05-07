import type { Preview } from "@storybook/react";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduzione", "Foundations", "Base Components", "Utils"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
