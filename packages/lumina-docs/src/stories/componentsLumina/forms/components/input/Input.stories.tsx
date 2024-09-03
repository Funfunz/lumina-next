// import type { Meta, StoryObj } from '@storybook/react'
// import { Input } from './Input'

// type LumInputType = typeof Input & { displayName?: string }
// ;(Input as LumInputType).displayName = 'LumInput'

// const meta = {
//   title: 'Components Lumina/Forms/Input',
//   component: Input,
//   tags: ['autodocs'],
//   parameters: {
//     layout: 'centered',
//     componentSubtitle: 'Example',
//     docs: {
//       description: {
//         component:
//           'A simple Input component that can be used as validation text as well, can be rendered by calling `<LumInput/>`.',
//       },
//     },
//   },
// } satisfies Meta<typeof Input>

// export default meta
// type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//   args: {
//     name: 'test', // This is the ID to be used on calling <Form fields={['']}>
//     mandatory: true,
//     placeholder: 'Type something',
//     label: 'Field Label',
//     type: 'text',
//     help: 'This is the optional help text for this field',
//     className: '',
//     disabled: false,
//     noBottomGutter: false,
//     inlineLabel: false,
//     min: 20,
//   },
//   argTypes: {
//     name: {
//       description: 'Unique field identifier for a Form `string`',
//     },
//     placeholder: {
//       description: 'Displayed when value is empty `string`',
//     },
//     prefix: {
//       description: 'Decorates left side of a field with symbol, unit etc. `ReactNode`',
//     },
//     suffix: {
//       description: 'Decorates right side of a field with symbol, unit etc. `ReactNode`',
//     },
//     type: {
//       description:
//         'Type of input `text` `email` `password` `url` `tel` `number` `search` `file` `date` `datetime-local` `month` `week` `time` `postcode` `password-novalidation`',
//       table: {
//         defaultValue: { summary: 'text' },
//       },
//     },
//     min: {
//       description: 'Minimal amount of input characters `number`',
//     },
//   },
// }

import type { Meta, StoryObj } from '@storybook/react/'

import { Input } from '@lumina/core/src/components/form-components/input/index.tsx'
// This could be imported from your own or external component library

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components Lumina/Forms/Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
}
