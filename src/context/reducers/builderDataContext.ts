import { IComponentData, IComponentProps, IData } from '@/data/data';

export interface IBuilderDataContext {
  builderData: IData,
  selectedPage: string,
  pages: string[]
}

export type TBuilderDataContextAction = ISetBuilderDataAction
  | ICreatePageAction
  | IRemovePageAction
  | IUpdatePageAction
  | IUpdateComponentAction

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

export interface IUpdateComponentAction {
  type: 'updateComponent'
  data: {
    id: string,
    newProps: IComponentProps
  }
}

export interface IRemovePageAction {
  type: 'removePage'
  data: string
}

export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: '',
  pages: []
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
    case 'removePage':
      const newState = {
        ...data,
        builderData: {
          ...data.builderData
        }
      }
      delete newState.builderData[action.data]
      return newState
    
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
      console.log({stateUpdateComponent})
      return stateUpdateComponent

    default:
      break;
  }
  return data
}