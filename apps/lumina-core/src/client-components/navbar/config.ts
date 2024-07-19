import { TConfig } from '@/models/editor-buttonModel'

export const config: TConfig = {
  name: 'Navbar',
  props: [
    {
      type: 'string',
      name: 'brandName',
      label: 'Brand Name',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
