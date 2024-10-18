import type { Meta, StoryObj } from '@storybook/react/'

import { RadioButton } from '@lumina/core/src/components/form-components/radio-button/index.tsx'

const meta = {
  title: 'Lumina Development/Components Lumina/Forms/Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'The Radio component is a simple unique checker built from an `input` radio element. Contains all the other props that the usual `<input>` has. It can be called by typing `<RadioButton />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of the Radio Button',
    help: 'This is just a helper text',
    labelClassName: '',
    helpClassName: '',
    radioText: 'Switch text',
    radioClassName: '',
    disabled: false,
  },
}
