import type { TConfig } from '@repo/lumina-core'

export const config: TConfig = {
  name: 'Image',
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
