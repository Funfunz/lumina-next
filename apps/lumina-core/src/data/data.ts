export interface IComponentProps  {
  [key: string]: string | number | undefined
}

export interface IComponentData {
  type: string,
  id: string,
  friendlyName: string,
  order: number,
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