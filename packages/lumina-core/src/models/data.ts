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
}

export interface IPageData {
  id: string
  pageName: string
  friendlyName: string
  extendedName: string
  dateModified: string
  status: string
  children?: IComponentData[]
  props?: IPageProps
  route: string
}

export interface IData {
  [key: string]: IPageData
}
