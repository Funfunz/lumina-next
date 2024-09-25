export interface IComponentProps {
  [key: string]: string | number | boolean | undefined
}

export interface IPageProps {
  [key: string]: string | number | boolean | undefined
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

export interface IDataComponent {
  type: string
  id: string
  parentId: string
  friendlyName: string
  order: number
  children?: string[]
  props?: IComponentProps
  hidden?: boolean
  hasFilterChildren?: boolean
  isMatch?: boolean
}

export interface IDataPage {
  id: string
  friendlyName: string
  description: string
  dateModified: string
  status: string
  children?: string[]
  props?: IPageProps
  route: string
  isMatch?: boolean
}

export interface IConnectorData {
  [key: string]: IPageData
}

export interface IData {
  pages: {
    [id: string]: IDataPage
  }
  components: {
    [id: string]: IDataComponent
  }
}
