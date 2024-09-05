import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Product',
  type: 'product',
  props: [
    {
      type: 'string',
      name: 'productId',
      label: 'Product ID',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
