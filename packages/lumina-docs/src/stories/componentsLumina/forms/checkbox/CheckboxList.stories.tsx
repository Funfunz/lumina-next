import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxList } from './Checkbox'

type LumCheckboxListType = typeof CheckboxList & { displayName?: string }
;(CheckboxList as LumCheckboxListType).displayName = 'LumCheckboxList'

const meta = {
  title: 'Components Lumina/Forms/Checkbox',
  component: CheckboxList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'An Input component that can be used as validation text as well.',
  },
} satisfies Meta<typeof CheckboxList>

export default meta
type Story = StoryObj<typeof meta>

export const Multiple: Story = {
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
    options: [
      { label: 'Option One as a test', value: 'Option One' },
      {
        label: 'Option Two as a test',
        value: 'Option two',
      },
    ],
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
