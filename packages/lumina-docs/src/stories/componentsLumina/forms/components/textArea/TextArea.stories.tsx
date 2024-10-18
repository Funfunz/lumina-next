import type { Meta, StoryObj } from '@storybook/react/'

import { TextArea } from '@lumina/core/src/components/form-components/textarea/index.tsx'

const meta = {
  title: 'Lumina Development/Components Lumina/Forms/Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'TextArea is a component for longer texts, has a fixed width and contains all the other props that the usual `<textarea>` has. It can be called by typing `<TextArea />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of TextArea',
    help: 'This is just a helper text',
    labelClassName: '',
    textAreaClassName: '',
    helpClassName: '',
    disabled: false,
    placeholder: 'Type Something',
  },
}
