import { TConfig } from '@/models/editor-buttonModel'

export const config: TConfig = {
  name: 'Navbar',
  props: [
    {
      type: 'string',
      name: 'navbar',
      label: 'Navbar',
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true,
  },
}
