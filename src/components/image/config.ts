import { TConfigItemSelect, TConfigItemValue } from "../showEdit/showEdit";

export const config: (TConfigItemValue | TConfigItemSelect)[] = [
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
