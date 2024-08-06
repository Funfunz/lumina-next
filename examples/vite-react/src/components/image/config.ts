import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Image',
  type: 'image',
  props: [
    {
      type: 'string',
      name: 'href',
      label: 'Href',
    },
    {
      type: 'string',
      name: 'alt',
      label: 'Alt',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
