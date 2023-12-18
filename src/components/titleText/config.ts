import { TConfigItemSelect, TConfigItemValue } from "../showEdit/showEdit";

export type TConfig = (TConfigItemValue | TConfigItemSelect)[]

export const config: TConfig = [
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
