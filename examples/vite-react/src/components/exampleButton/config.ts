import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Buttons',
  type: 'exampleButton',
  //tem de ser igual ao config.ts lumina
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
