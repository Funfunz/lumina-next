import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Spacer',
  type: 'spacer',
  props: [
    {
      type: 'number',
      name: 'size',
      label: 'Size',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
