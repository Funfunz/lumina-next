export interface IComponentProps {
  [key: string]: string | number | undefined
}

export interface IPageProps {
  [key: string]: string | number | undefined
}

export interface IComponentData {
  type: string
  id: string
  friendlyName: string
  order: number
  children?: IComponentData[]
  props?: IComponentProps
  hidden?: boolean
  hasFilterChildren?: boolean
  isMatch?: boolean
}

export interface IPageData {
  id: string
  friendlyName: string
  description: string
  dateModified: string
  status: string
  children?: IComponentData[]
  props?: IPageProps
  route: string
  isMatch?: boolean
}

export interface IData {
  [key: string]: IPageData
}
