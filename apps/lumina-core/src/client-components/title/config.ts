import { TConfig } from '@/models/editor-buttonModel'

export const config: TConfig = {
  name: 'Title',
  props: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
