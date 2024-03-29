export interface IComponentProps  {
  [key: string]: string | number
}

export interface IComponentData {
  type: string,
  id: string,
  friendlyName: string,
  children?: IComponentData[],
  props?: IComponentProps
}

export interface IPageData {
  friendlyName: string
  name: string
  children: IComponentData[]
}

export interface IData {
  [key: string]: IPageData
}