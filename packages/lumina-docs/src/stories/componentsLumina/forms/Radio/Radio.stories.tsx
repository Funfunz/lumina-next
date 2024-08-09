import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

type LumRadioType = typeof Radio & { displayName?: string }
;(Radio as LumRadioType).displayName = 'LumRadio'

const meta = {
  title: 'Components Lumina/Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Example',
    docs: {
      description: {
        component: 'A Radio button component that can be rendered by calling `<LumRadio/>`.',
      },
    },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'test',
    label: 'Radio',
    options: [
      { label: 'Radio Test 1', value: '1' },
      { label: 'Radio Test 2', value: '2' },
      { label: 'Radio Test 3', value: '3' },
    ],
    small: false,
    inline: false,
  },
  argTypes: {
    options: {
      description: 'Available options `{ label, value }[]` or `string[]`',
    },
    small: {
      description: 'Decrease radio text size `bool`',
    },
    inline: {
      description: 'Displays all options in one row `bool`',
    },
  },
}
