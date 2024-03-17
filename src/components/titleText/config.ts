import { TEditorConfig } from "../editor/editor";
import { TConfig } from "../showEdit/showEdit";

export const config: TConfig = {
  name: "Title text",
  props: [
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
}

export const editorConfig: TEditorConfig = {
  create: true,
  update: true,
  delete: true
}
