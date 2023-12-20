import { IComponentData, IComponentProps, IData, IPageData } from '@/data/data';

export interface IBuilderDataContext {
  builderData: IData,
  selectedPage: string,
  pages: string[]
}

export type TBuilderDataContextAction = ISetBuilderDataAction
  | ICreatePageAction
  | IUpdatePageAction
  | IDeletePageAction
  | ICreateComponentAction
  | IUpdateComponentAction
  | IDeleteComponentAction

export interface ISetBuilderDataAction {
  type: 'setBuilderData'
  data: IBuilderDataContext
}

export interface ICreatePageAction {
  type: 'createPage'
  data: {
    name: string
    friendlyName: string
  }
}

export interface IUpdatePageAction {
  type: 'updatePage'
  data: {
    name: string,
    newData: Partial<{
      name: string
      friendlyName: string
    }>
  }
}

export interface IDeletePageAction {
  type: 'deletePage'
  data: string
}

export interface ICreateComponentAction {
  type: 'createComponent'
  data: {
    parentId: string,
  } & IComponentData
}

export interface IUpdateComponentAction {
  type: 'updateComponent'
  data: {
    id: string,
    newProps: IComponentProps
  }
}

export interface IDeleteComponentAction {
  type: 'deleteComponent'
  data: {
    id: string,
  }
}


export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: '',
  pages: []
}

function newComponentFactory(componentData: ICreateComponentAction['data']): IComponentData {
  const {type, ...rest} = componentData
  return {
    id: `${type}_${Math.random()}`,
    type: type,
    friendlyName: componentData.friendlyName,
    children: [],
    props: {...rest.props}
  }
}

const instanceOfIComponentData = (object: any): object is IComponentData => {
  return object.id
}

function createElementAt (component: IPageData | IComponentData, data: ICreateComponentAction['data']): IPageData | IComponentData {
  if (!component.children) [
    component.children = []
  ]
  if (!data.parentId || (instanceOfIComponentData(component) && component.id === data.parentId)) {
    component.children?.push(newComponentFactory(data))
    return component
  }

  component.children = component.children.map(
    (element) => {
      return createElementAt(element, data) as IComponentData
    }
  )
  return component
}

function updateElement (childrens: IComponentData[], targetId: string, newProps: IComponentProps): IComponentData[] {
  let found: IComponentData | undefined
  return childrens.map(
    (element) => {
      if (element.id === targetId) {
        element.props = {
          ...element.props,
          ...newProps
        }
      }
      if (element.children) {
        element.children = [ ...updateElement(element.children, targetId, newProps) ]
        return element
      }
      return element
    }
  )
}

function deleteElement (childrens: IComponentData[], targetId: string): IComponentData[] {
  return childrens.map(
    (element) => {
      if (element.id === targetId) {
        return undefined
      }
      if (element.children) {
        element.children = [ ...deleteElement(element.children, targetId) ]
        return element
      }
      return element
    }
  ).filter(e => e) as IComponentData[]
}

deleteElement

export const builderDataContextReducer = (data: IBuilderDataContext, action: TBuilderDataContextAction) => {
  switch (action.type) {
    case 'setBuilderData':
      return JSON.parse(JSON.stringify(action.data))

    case 'createPage':
        return {
          ...data,
          builderData: {
            ...data.builderData,
            [action.data.name]:  {
              name: action.data.name,
              friendyName: action.data.friendlyName,
              children: []
            }
          }
        }
    
    case 'updatePage':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [action.data.name]:  {
            ...data.builderData[action.data.name],
            ...action.data.newData
          }
        }
      }
    case 'deletePage':
      const newState = {
        ...data,
        builderData: {
          ...data.builderData
        }
      }
      delete newState.builderData[action.data]
      return newState
  
    case 'createComponent':
      const stateCreateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            ...createElementAt(data.builderData[data.selectedPage], action.data)
          }
        }
      }
      return stateCreateComponent

    case 'updateComponent':
      const stateUpdateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [...updateElement(data.builderData[data.selectedPage].children, action.data.id, action.data.newProps)]
          }
        }
      }
      return stateUpdateComponent
    case 'deleteComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [...deleteElement(data.builderData[data.selectedPage].children, action.data.id)]
          }
        }
      }

    default:
      break;
  }
  return data
}