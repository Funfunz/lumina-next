import type { Preview } from '@storybook/react'
import '@lumina/core/style.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        expanded: true,
      },
    },
    options: {
      storySort: {
        order: [
          'Configure your project', // NOTE: to be removed soon...
          'Introduction',
          ['Overview', 'Getting Started', ''],
          'Docs',
          'Components',
          'Pages',
        ],
      },
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
}

export default preview
