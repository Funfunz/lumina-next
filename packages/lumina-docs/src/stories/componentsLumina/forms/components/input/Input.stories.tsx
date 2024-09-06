import type { Meta, StoryObj } from '@storybook/react/'

import { Input } from '@lumina/core/src/components/form-components/input/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'Input is a component for multiple type of inputs, depending on the type you choose, contains all the other props that the usual `<input>` has. It can be called by typing `<Input />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of Input',
    help: 'This is just a helper text',
    labelClassName: '',
    inputClassName: '',
    helpClassName: '',
    disabled: false,
    placeholder: 'Type Something',
    type: 'text',
  },
}
