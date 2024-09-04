import type { Meta, StoryObj } from '@storybook/react/'

import { Switch } from '@lumina/core/src/components/form-components/switch/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'The Switch component is a simple toggler built from an `input` checkbox element. Contains all the other props that the usual `<input>` has. It can be called by typing `<Switch />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of the Switch',
    help: 'This is just a helper text',
    labelClassName: '',
    switchText: 'Switch text',
    switchClassName: '',
    helpClassName: '',
    disabled: false,
  },
}
