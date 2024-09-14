import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Image',
  type: 'image',
  props: [
    {
      type: 'string',
      name: 'srcDesktop',
      label: 'Desktop',
    },
    {
      type: 'string',
      name: 'srcTablet',
      label: 'Tablet',
    },
    {
      type: 'string',
      name: 'srcMobile',
      label: 'Mobile',
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
