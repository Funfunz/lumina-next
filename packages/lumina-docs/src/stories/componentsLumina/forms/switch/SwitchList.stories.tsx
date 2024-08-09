import type { Meta, StoryObj } from '@storybook/react'
import { SwitchList } from './Switch'

type LumSwitchListType = typeof SwitchList & { displayName?: string }
;(SwitchList as LumSwitchListType).displayName = 'LumSwitchList'

const meta = {
  title: 'Components Lumina/Forms/Switch',
  component: SwitchList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Example',
    docs: {
      description: {
        component: 'A single Switch component, that can be rendered by calling `<LumSwitchList/>`.',
      },
    },
  },
} satisfies Meta<typeof SwitchList>

export default meta
type Story = StoryObj<typeof meta>

export const Multiple: Story = {
  args: {
    name: 'test',
    label: 'Multiple Switches test:',
    options: [
      { label: 'Switch Test 1', value: '1' },
      { label: 'Switch Test 2', value: '2' },
    ],
  },
  argTypes: {
    text: {
      description: 'Text near the single switch `ReactNode`',
    },
    options: {
      description: 'Available options of multiple switches `{ label, value }[]` or `string[]`',
    },
  },
}
