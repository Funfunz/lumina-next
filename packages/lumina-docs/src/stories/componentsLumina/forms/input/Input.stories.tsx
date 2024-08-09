import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

type LumInputType = typeof Input & { displayName?: string }
;(Input as LumInputType).displayName = 'LumInput'

const meta = {
  title: 'Components Lumina/Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle:
      'A simple Input component that can be used as validation text as well, can be rendered by calling <LumInput/>.',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'test', // This is the ID to be used on calling <Form fields={['']}>
    mandatory: true,
    placeholder: 'Type something',
    label: 'Field Label',
    type: 'text',
    help: 'This is the optional help text for this field',
    className: '',
    disabled: false,
    noBottomGutter: false,
    inlineLabel: false,
    min: 20,
  },
  argTypes: {
    name: {
      description: 'Unique field identifier for a Form `string`',
    },
    placeholder: {
      description: 'Displayed when value is empty `string`',
    },
    prefix: {
      description: 'Decorates left side of a field with symbol, unit etc. `ReactNode`',
    },
    suffix: {
      description: 'Decorates right side of a field with symbol, unit etc. `ReactNode`',
    },
    type: {
      description:
        'Type of input `text` `email` `password` `url` `tel` `number` `search` `file` `date` `datetime-local` `month` `week` `time` `postcode` `password-novalidation`',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    min: {
      description: 'Minimal amount of input characters `number`',
    },
  },
}
