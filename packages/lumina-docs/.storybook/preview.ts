import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      options: {
        storySort: {
          order: [
            'Configure your project', // NOTE: to be removed soon...
            'Quick-Start',
            'What-Is',
            'Components',
            'Pages',
            '*'
          ],
        },
      },
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;
