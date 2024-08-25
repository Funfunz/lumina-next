import { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Title',
  type: 'title',
  props: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
