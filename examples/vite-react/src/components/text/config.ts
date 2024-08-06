import { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Text',
  value: 'text',
  props: [
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
