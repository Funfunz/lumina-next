import type { Meta, StoryObj } from '@storybook/react/'

import { Slider } from '@lumina/core/src/components/form-components/slider/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          'The Switch component is a simple toggler built from an `input` checkbox element. Contains all the other props that the usual `<input>` has. It can be called by typing `<Switch />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is the title of the Slider',
    help: 'This is just a helper text',
    labelClassName: '',
    suffix: '€',
    helpClassName: '',
    disabled: false,
    max: 25,
    step: 5,
    min: 0,
  },
}
