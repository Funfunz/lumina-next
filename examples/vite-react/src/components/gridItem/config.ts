import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Grid Item',
  type: 'gridItem',
  props: [
    {
      type: 'number',
      name: 'size',
      label: 'size',
    },
    {
      type: 'singleSelect',
      name: 'wrap',
      label: 'Wrap',
      arrayValues: ['nowrap', 'wrap-reverse', 'wrap'],
    },
  ],
  editor: {
    children: true,
    editable: true,
    delete: true,
  },
}
