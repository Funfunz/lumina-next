import { TEditorConfig } from "../editor/editor"
import { TConfigItemSelect, TConfigItemValue } from "../showEdit/showEdit"

export type TConfig = (TConfigItemValue | TConfigItemSelect)[]

export const config: TConfig = [
  {
    type: 'string',
    name: 'title',
    label: 'Title'
  },
  {
    type: 'string',
    name: 'description',
    label: 'Description'
  },
  {
    type: 'string',
    name: 'href',
    label: 'Href'
  },
  {
    type: 'singleSelect',
    name: 'color',
    label: 'Text color',
    arrayValues: ['black', 'white', 'green', 'yellow']
  }
]

export const editorConfig: TEditorConfig = {
  create: false,
  update: true,
  delete: true
}