import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Grid',
  props: [
    {
      type: 'singleSelect',
      name: 'style',
      label: 'Direction',
      arrayValues: ['column', 'row'],
    },
  ],
  editor: {
    children: true,
    editable: true,
    delete: true,
  },
}
