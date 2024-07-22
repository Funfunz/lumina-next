import { TConfig } from '@/models/editor-buttonModel'

export const config: TConfig = {
  name: 'Text',
  props: [
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}