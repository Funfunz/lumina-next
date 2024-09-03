// import type { Meta, StoryObj } from '@storybook/react/'

// import { useActivateOnEnter } from '@lumina/core/src/components/form-components/utils/hooks/useActivateOnEnter/index.tsx'
// // This could be imported from your own or external component library

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Components Lumina/Forms/Hooks/useOnEnterPress',
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {},
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: {},
// } satisfies Meta<typeof useActivateOnEnter>

// export default meta
// type Story = StoryObj<typeof meta>

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {},
// }

import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useActivateOnEnter } from '@lumina/core/src/components/form-components/utils/hooks/useActivateOnEnter/index.tsx'
import { Input } from '@lumina/core/src/components/form-components/input/index.js'

export default {
  title: 'Components Lumina/Forms/Components/Hooks/useActivateOnEnter',
  component: () => <div />, // Placeholder component
} as Meta

// eslint-disable-next-line no-unused-vars
const Template: StoryFn = (args: {
  activateEnterPress?: boolean
  clearOnEnterPress?: boolean
  onEnterPress?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}) => {
  const { value, setValue, inputRef, handleKeyDown } = useActivateOnEnter(args)

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  activateEnterPress: true,
  clearOnEnterPress: false,
  onEnterPress: () => console.log('Enter pressed'),
  onChange: (e: { target: { value: any } }) => console.log(e.target.value),
  value: '',
}
