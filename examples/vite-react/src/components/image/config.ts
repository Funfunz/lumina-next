import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Image',
  value: 'image',
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
