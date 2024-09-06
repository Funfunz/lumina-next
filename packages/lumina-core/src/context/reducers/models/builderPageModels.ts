export interface ICreatePageAction {
  type: 'createPage'
  data: {
    id: string
    pageName: string
    friendlyName: string
    dateModified: string
    status: boolean
    description: string
    urlParams: string[]
  }
}

export interface IUpdatePageAction {
  type: 'updatePage'
  data: {
    id: string
    newData: Partial<{
      pageName: string
      friendlyName: string
      dateModified: string
      status: boolean
      description: string
      urlParams: string[]
    }>
  }
}

export interface IDeletePageAction {
  type: 'deletePage'
  data: {
    id: string
  }
}
