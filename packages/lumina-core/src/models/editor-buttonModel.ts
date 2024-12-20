export type TConfigItem = TConfigItemValue | TConfigItemSelect

interface TConfigItemBase {
  name: string
  label: string
}

export type TIconType =
  | 'title'
  | 'button'
  | 'image'
  | 'video'
  | 'text'
  | 'container'
  | 'link'
  | 'grid'
  | 'custom'

export type TEditorConfig = {
  children: boolean
  editable: boolean
  delete: boolean
  iconType?: TIconType
}

export interface TConfigItemValue extends TConfigItemBase {
  type: 'string' | 'number' | 'boolean'
}

export interface TConfigItemSelect<T = string> extends TConfigItemBase {
  type: 'singleSelect' | 'multiSelect'
  arrayValues: T[]
}

export type TConfig = {
  name: string
  type: string
  props?: (TConfigItemValue | TConfigItemSelect)[]
  editor: TEditorConfig
}

export type TElementConfig = (TConfigItemValue | TConfigItemSelect)[]

export type TSelectedOption = {
  label: string
  value: string
}
