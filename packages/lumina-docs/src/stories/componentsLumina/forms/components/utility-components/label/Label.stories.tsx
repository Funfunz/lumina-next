import type { Meta, StoryObj } from '@storybook/react/'

import { LabelTitle } from '@lumina/core/src/components/form-components/utils/utility-components/label/index.tsx'

const meta = {
  title: 'Components Lumina/Forms/Components/Utility Components/LabelTitle',
  component: LabelTitle,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Description',
    docs: {
      description: {
        component:
          '`LabelTitle` is a utility component and serves as an optional `Title` text for the other `form` components, contains all the other props that the usual `<label>` has. It can be called by typing `<LabelTitle />`',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    label: 'This is just a Title',
  },
}
