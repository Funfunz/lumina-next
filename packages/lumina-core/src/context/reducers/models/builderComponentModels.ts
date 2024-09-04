import { IComponentData, IComponentProps } from '@/models/data'

export interface ICreateComponentAction {
  type: 'createComponent'
  data: {
    parentId: string
    id: string
  } & Partial<IComponentData>
}

export interface IUpdateComponentAction {
  type: 'updateComponent'
  data: {
    id: string
    newProps: IComponentProps
  }
}

export interface IMoveUpComponentAction {
  type: 'moveUpComponent'
  data: {
    id: string
    currentPosition: number
  }
}

export interface IMoveDownComponentAction {
  type: 'moveDownComponent'
  data: {
    id: string
    currentPosition: number
  }
}

export interface IDeleteComponentAction {
  type: 'deleteComponent'
  data: {
    id: string
  }
}

export interface IVisibleComponentAction {
  type: 'visibilityComponent'
  data: {
    id: string
    hidden?: boolean
  }
}
