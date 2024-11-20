import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Main Container',
  type: 'container',
  editor: {
    children: true,
    editable: false,
    delete: true,
    iconType: 'container',
  },
}
