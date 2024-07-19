import { TConfig } from '@/models/editor-buttonModel'

export const config: TConfig = {
  name: 'Button',
  props: [
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
    {
      type: 'singleSelect',
      name: 'size',
      label: 'Size',
      arrayValues: ['small', 'medium', 'large'],
    },
    {
      type: 'singleSelect',
      name: 'style',
      label: 'Style',
      arrayValues: ['outlined', 'rounded'],
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
