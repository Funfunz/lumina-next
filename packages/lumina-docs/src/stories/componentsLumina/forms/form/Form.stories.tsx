import type { Meta, StoryObj } from '@storybook/react'
import Form from 'react-form-component'

const meta = {
  title: 'Components Lumina/Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Example',
    docs: {
      description: {
        component:
          'This component doesnt provide a display, but is necessary to wrap the form components, can be called by typing `<Form>{ Insert Form components here. }</Form>.`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    fields: ['test'],
    mandatory: ['test'],
    allMandatory: true,
    className: '',
    children: '',
  },
}
