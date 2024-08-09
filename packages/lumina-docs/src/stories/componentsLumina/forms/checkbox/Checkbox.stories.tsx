import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

type LumCheckboxType = typeof Checkbox & { displayName?: string }
;(Checkbox as LumCheckboxType).displayName = 'LumCheckbox'

const meta = {
  title: 'Components Lumina/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'An Input component that can be used as validation text as well.',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    name: 'test',
    label: 'Field Label',
    help: 'This is the optional help text for this field',
    text: 'This is a Checkbox',
    initialValue: false,
    className: '',
    disabled: false,
    noBottomGutter: false,
    inlineLabel: false,
  },
  argTypes: {
    name: {
      description: 'Unique field identifier for a Form `string`',
    },
    text: {
      description: 'Text near the single checkbox `ReactNode`',
    },
    options: {
      description: 'Available options of multiple checkboxes `{ label, value }[]` or `string[]`',
    },
  },
}
