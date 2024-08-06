import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Linkbox',
  value: 'linkbox',
  props: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
    },
    {
      type: 'string',
      name: 'href',
      label: 'Href',
    },
    {
      type: 'singleSelect',
      name: 'color',
      label: 'Text color',
      arrayValues: ['black', 'white', 'green', 'yellow'],
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
