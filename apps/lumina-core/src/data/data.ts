export interface IComponentProps {
  [key: string]: string | number | string[] | undefined
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
}

export interface IPageData {
  id: string
  pageName: string
  friendlyName: string
  extendedName: string
  dateModified: string
  status: boolean
  children?: IComponentData[]
  props?: IPageProps
  route: string
}

export interface IData {
  [key: string]: IPageData
}
