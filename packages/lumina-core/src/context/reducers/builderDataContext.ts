import { IComponentData, IComponentProps, IPageData } from '@/models/data'
import { ICreatePageAction, IDeletePageAction, IUpdatePageAction } from './models/builderPageModels'
import { IBuilderDataContext, ISetBuilderDataAction } from './models/builderDataModels'
import {
  ICreateComponentAction,
  IDeleteComponentAction,
  IMoveDownComponentAction,
  IMoveUpComponentAction,
  IUpdateComponentAction,
} from './models/builderComponentModels'

export type TBuilderDataContextAction =
  | ISetBuilderDataAction
  | ICreatePageAction
  | IUpdatePageAction
  | IDeletePageAction
  | ICreateComponentAction
  | IUpdateComponentAction
  | IDeleteComponentAction
  | IMoveUpComponentAction
  | IMoveDownComponentAction

export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: '',
  pages: [],
}

function newComponentFactory(
  componentData: ICreateComponentAction['data'],
  order: number
): IComponentData {
  const { type, friendlyName, id, ...rest } = componentData
  return {
    id,
    type: type as string,
    friendlyName: friendlyName as string,
    children: [],
    order,
    props: { ...rest.props },
  }
}

const instanceOfIComponentData = (object: any): object is IComponentData => {
  return object.id
}

/**
 * Parameter "data" contains info from the parent component
 * If no parentId is given the create should happen in the root of the page
 * If parentId is present the component is created inside the element matching the parentId
 * @param component
 * @param data
 * @returns
 */
function createElementAt(
  component: IPageData | IComponentData,
  data: ICreateComponentAction['data']
): IPageData | IComponentData {
  // Ensure the component has a children array
  if (!component.children) [(component.children = [])]

  // Check if the component is the parent or if no parentId is specified
  if (!data.parentId || (instanceOfIComponentData(component) && component.id === data.parentId)) {
    if (!component.children.find(children => children.id === data.id))
      // Add the new component with the highest order
      component.children?.push(
        newComponentFactory(
          data,
          Math.max(0, ...component.children.map(element => element.order)) + 1
        )
      )

    // Return the updated component
    return component
  }

  // If not the parent, recursively search for the parent in the children
  component.children = component.children.map(element => {
    return createElementAt(element, data) as IComponentData
  })

  // Return the updated component
  return component
}

function updateElement(
  components: IComponentData[],
  targetId: string,
  newProps: IComponentProps
): IComponentData[] {
  return components.map(element => {
    if (element.id === targetId) {
      element.props = {
        ...element.props,
        ...newProps,
      }
    }
    if (element.children) {
      element.children = [...updateElement(element.children, targetId, newProps)]
      return element
    }
    return element
  })
}

function deleteElement(components: IComponentData[], targetId: string): IComponentData[] {
  return components
    .map(element => {
      if (element.id === targetId) {
        return undefined
        return undefined
      }
      if (element.children) {
        element.children = [...deleteElement(element.children, targetId)]
        return element
      }
      return element
    })
    .filter(e => e) as IComponentData[]
}

function upOrderElement(
  element: IComponentData,
  components: IComponentData[]
): IComponentData | undefined {
  let componentToReplace: IComponentData | undefined = undefined
  components.forEach(currentElement => {
    if (currentElement.order < element.order) {
      if (!componentToReplace) {
        componentToReplace = { ...currentElement }
      }
      if (componentToReplace && currentElement.order > componentToReplace.order) {
        componentToReplace = { ...currentElement }
      }
    }
  })

  return componentToReplace
}

function downOrderElement(
  element: IComponentData,
  components: IComponentData[]
): IComponentData | undefined {
  let componentToReplace: IComponentData | undefined = undefined
  components.forEach(currentElement => {
    if (currentElement.order > element.order) {
      if (!componentToReplace) {
        componentToReplace = { ...currentElement }
      }
      if (componentToReplace && currentElement.order < componentToReplace.order) {
        componentToReplace = { ...currentElement }
      }
    }
  })

  return componentToReplace
}

function moveUpElement(components: IComponentData[], targetId: string) {
  let componentToReplace: IComponentData | undefined
  let oldOrder = 0
  const newComponents = components.map(element => {
    if (element.id === targetId) {
      oldOrder = element.order
      componentToReplace = upOrderElement(element, components)
      if (componentToReplace) {
        element.order = componentToReplace?.order
      } else {
        element.order = 0
      }
    }
    if (element.children && !componentToReplace) {
      element.children = [...moveUpElement(element.children, targetId)]
    }
    return element
  })

  if (componentToReplace) {
    return newComponents.map(element => {
      if (element.id === componentToReplace?.id) {
        element.order = oldOrder
      }
      return element
    })
  }

  return newComponents
}

function moveDownElement(components: IComponentData[], targetId: string) {
  let componentToReplace: IComponentData | undefined
  let oldOrder = 0
  const newComponents = components.map(element => {
    if (element.id === targetId) {
      oldOrder = element.order
      componentToReplace = downOrderElement(element, components)
      if (componentToReplace) {
        element.order = componentToReplace?.order
      } else {
        element.order = 0
      }
    }
    if (element.children && !componentToReplace) {
      element.children = [...moveDownElement(element.children, targetId)]
    }

    return element
  })

  if (componentToReplace) {
    return newComponents.map(element => {
      if (element.id === componentToReplace?.id) {
        element.order = oldOrder
      }
      return element
    })
  }

  return newComponents
}

export const builderDataContextReducer = (
  data: IBuilderDataContext,
  action: TBuilderDataContextAction
) => {
  switch (action.type) {
    case 'setBuilderData':
      return JSON.parse(JSON.stringify(action.data))

    case 'createPage':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [action.data.pageName]: {
            name: action.data.pageName,
            friendyName: action.data.friendlyName,
            children: [],
          },
        },
      }

    case 'updatePage':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [action.data.pageName]: {
            ...data.builderData[action.data.pageName],
            ...action.data.newData,
          },
        },
      }

    case 'deletePage':
      const newState = {
        ...data,
        builderData: {
          ...data.builderData,
        },
      }
      delete newState.builderData[action.data]
      return newState

    case 'createComponent':
      console.log('create cmp: ', data)
      const stateCreateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            ...createElementAt(data.builderData[data.selectedPage], action.data),
          },
        },
      }
      return stateCreateComponent

    case 'updateComponent':
      console.log('edit cmp:', data)
      const stateUpdateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...updateElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id,
                action.data.newProps
              ),
            ],
          },
        },
      }
      return stateUpdateComponent

    case 'deleteComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...deleteElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id
              ),
            ],
          },
        },
      }

    case 'moveUpComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveUpElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id
              ),
            ],
          },
        },
      }

    case 'moveDownComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveDownElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id
              ),
            ],
          },
        },
      }

    default:
      break
  }

  return data
}
export type { IBuilderDataContext }
