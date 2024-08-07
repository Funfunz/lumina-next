import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Button',
  type: 'button',
  props: [
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
    {
      type: 'singleSelect',
      name: 'size',
      label: 'Size',
      arrayValues: ['small', 'medium', 'large'],
    },
    {
      type: 'singleSelect',
      name: 'style',
      label: 'Style',
      arrayValues: ['outlined', 'rounded'],
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
