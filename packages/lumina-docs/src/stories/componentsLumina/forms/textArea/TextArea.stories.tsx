import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta = {
  title: 'Components Lumina/Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'An Input component that can be used as validation text as well.',
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'example',
    label: 'Select',
    rows: 5,
    placeholder: 'Placeholder text',
    prefix: '',
    suffix: '',
    min: 5,
    narrow: false,
    large: false,
    initialValue: '',
  },
  argTypes: {
    rows: {
      description: 'Initial amount of rows `number`',
      table: {
        defaultValue: { summary: '5' },
      },
    },
    prefix: {
      description: 'Decorates left side of a field with symbol, unit etc.',
    },
    suffix: {
      description: 'Decorates right side of a field with symbol, unit etc.',
    },
    narrow: {
      description: 'Decreases input width',
    },
    large: {
      description: 'Increases input height',
    },
    min: {
      description: 'Minimal amount of input characters',
    },
    placeholder: {
      description: 'Text displayed when value is empty',
    },
  },
}
