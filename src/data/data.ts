export interface IComponentData {
  type: string,
  children?: IComponentData[],
  props?: Record<string, unknown>
}

export interface IPageData {
  children: IComponentData[]
}

export interface IData {
  [key: string]: IPageData
}