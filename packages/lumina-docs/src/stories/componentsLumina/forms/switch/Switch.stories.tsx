import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

type LumSwitchType = typeof Switch & { displayName?: string }
;(Switch as LumSwitchType).displayName = 'LumSwitch'

const meta = {
  title: 'Components Lumina/Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'A single Switch component, that can be rendered by calling <LumSwitch/>',
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    name: 'switch',
    label: 'Optional input label',
    text: 'Single switch that returns a boolean value',
    initialValue: false,
  },
  argTypes: {
    text: {
      description: 'Text near the single switch `ReactNode`',
    },
  },
}
