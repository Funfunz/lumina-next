export interface ICreatePageAction {
  type: 'createPage'
  data: {
    id: string
    friendlyName: string
    description: string
    urlParams: string[]
  }
}

export interface IUpdatePageAction {
  type: 'updatePage'
  data: {
    id: string
  } & Partial<{
    friendlyName: string
    description: string
    urlParams: string[]
  }>
}

export interface IDeletePageAction {
  type: 'deletePage'
  data: {
    id: string
  }
}
