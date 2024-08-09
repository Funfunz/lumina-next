import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta = {
  title: 'Components Lumina/Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'A simple Range component, that can be rendered by calling <LumSlider/>',
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'test',
    label: 'Range',
    min: 0,
    max: 69,
    unit: 'km',
  },
  argTypes: {
    min: {
      description: 'Minimal value `number`',
    },
    max: {
      description: 'Maximal value `number`',
    },
    step: {
      description: 'Interval between available values `number`',
    },
    unit: {
      description: 'Display unit `string`',
    },
  },
}
