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
    id: string,
  } & IComponentProps
}

export interface IUpdateComponentAction {
  type: 'updateComponent'
  data: {
    id: string,
    newProps: IComponentProps
  }
}


export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: '',
  pages: []
}

function newComponentFactory(componentData: ICreateComponentAction['data']) {
  const {id, parentId, ...rest} = componentData
  return {
    id: `${componentData.type}_${Math.random()}`,
    type: componentData.type,
    friendlyName: componentData.friendlyName,
    children: [],
    props: {...rest}
  }
}

function createElementAt (component: IPageData | IComponentData, props: ICreateComponentAction['data']): IPageData {
  if (!props.parentId) {
    component.children?.push(newComponentFactory(props))
  }
  
  if (!component.children) [
    component.children = []
  ]
  component.children.map(
    (element) => {
      return createElementAt(element, props)
    }
  )

  return component as IPageData
  
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
            children: [...createElementAt(data.builderData[data.selectedPage], action.data)]
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
      console.log({stateUpdateComponent})
      return stateUpdateComponent

    default:
      break;
  }
  return data
}