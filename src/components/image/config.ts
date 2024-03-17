import { TConfig, TConfigItemSelect, TConfigItemValue } from "../showEdit/showEdit";
import { TEditorConfig } from "../editor/editor"

export const config: TConfig = {
  name: 'Image',
  props: [
    {
      type: 'string',
      name: 'href',
      label: 'Href'
    },
    {
      type: 'string',
      name: 'alt',
      label: 'Alt'
    }
  ]
}

export const editorConfig: TEditorConfig = {
  create: false,
  update: true,
  delete: true
}
