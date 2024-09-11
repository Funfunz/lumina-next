import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Grid Container',
  type: 'gridContainer',
  props: [
    {
      type: 'number',
      name: 'columns',
      label: 'Columns',
    },
    {
      type: 'number',
      name: 'columnSpacing',
      label: 'Column Spacing',
    },
    {
      type: 'number',
      name: 'rowSpacing',
      label: 'Row Spacing',
    },
    {
      type: 'number',
      name: 'spacing',
      label: 'Spacing',
    },
    {
      type: 'singleSelect',
      name: 'wrap',
      label: 'Wrap',
      arrayValues: ['nowrap', 'wrap-reverse', 'wrap'],
    },
    {
      type: 'singleSelect',
      name: 'direction',
      label: 'Direction',
      arrayValues: ['column-reverse', 'column', 'row-reverse', 'row'],
    },
  ],
  editor: {
    children: true,
    editable: true,
    delete: true,
  },
}
