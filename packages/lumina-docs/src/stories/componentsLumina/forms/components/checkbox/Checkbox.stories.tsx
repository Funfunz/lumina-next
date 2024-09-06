import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '@lumina/core/src/components/form-components/checkbox/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'The Checkbox component is a simple check built from an `input` checkbox element. Contains all the other props that the usual `<input>` has. It can be called by typing `<CheckBox />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of the Checkbox',
    help: 'This is just a helper text',
    labelClassName: '',
    helpClassName: '',
    checkboxText: 'Checkbox text',
    checkboxClassName: '',
    disabled: false,
  },
}
