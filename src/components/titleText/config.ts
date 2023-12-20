import { TEditorConfig } from "../editor/editor";
import { TElementConfig } from "../showEdit/showEdit";

export const config: TElementConfig = [
  {
    type: 'string',
    name: 'title',
    label: 'Title'
  },
  {
    type: 'string',
    name: 'text',
    label: 'Text'
  },
]

export const editorConfig: TEditorConfig = {
  create: true,
  update: true,
  delete: true
}
