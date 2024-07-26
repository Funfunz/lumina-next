import { TConfig } from '@repo/lumina-core'

export const config: TConfig = {
  name: 'Title',
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
