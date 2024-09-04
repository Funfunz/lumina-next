import type { Meta, StoryObj } from '@storybook/react/'

import { HelpText } from '@lumina/core/src/components/form-components/utils/utility-components/help/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/Utility Components/HelpText',
  component: HelpText,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          '`HelpText` is a utility component and serves as an optional helper text for the other `form` components, contains all the other props that the usual `<p>` has. It can be called by typing `<HelpText />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HelpText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    help: 'This is just a helper text',
  },
}
