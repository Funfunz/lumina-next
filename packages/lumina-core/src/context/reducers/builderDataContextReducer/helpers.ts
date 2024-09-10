import { IPageData } from '@/main'
import { IComponentData, IComponentProps } from '@/models/data'
import { ICreateComponentAction } from './actions/componentActions'

export function newComponentFactory(
  componentData: ICreateComponentAction['data'],
  order: number,
  hidden: boolean
): IComponentData {
  const { type, friendlyName, id, ...rest } = componentData
  return {
    id,
    type: type as string,
    friendlyName: friendlyName as string,
    children: [],
    order,
    hidden,
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
export function createElementAt(
  component: IPageData | IComponentData,
  data: ICreateComponentAction['data']
): IPageData | IComponentData {
  // Ensure the component has a children array
  if (!component.children) [(component.children = [])]

  // Check if the component is the parent or if no parentId is specified
  if (!data.parentId || (instanceOfIComponentData(component) && component.id === data.parentId)) {
    if (!component.children.find(children => children.id === data.id))
      // Add the new component with the highest order
      component.children = [
        ...component.children,
        newComponentFactory(
          data,
          Math.max(0, ...component.children.map(element => element.order)) + 1,
          false
        ),
      ]

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

export function updateElement(
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

export function deleteElement(components: IComponentData[], targetId: string): IComponentData[] {
  return components
    .map(element => {
      if (element.id === targetId) {
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

export function toggleVisibilityElement(
  components: IComponentData[],
  targetId: string
): IComponentData[] {
  return components.map(element => {
    if (element.id === targetId) {
      return {
        ...element,
        hidden: !element.hidden,
      }
    }

    if (element.children) {
      const newChildren = toggleVisibilityElement(element.children, targetId)
      return {
        ...element,
        children: newChildren,
      }
    }

    return element
  })
}

export function moveUpElement(
  components: IComponentData[],
  { id, currentPosition }: { id: string; currentPosition: number }
) {
  let componentToReplace: IComponentData | undefined
  let oldOrder = 0
  const newComponents = components.map(element => {
    if (element.id === id && currentPosition === element.order) {
      oldOrder = element.order
      componentToReplace = upOrderElement(element, components)
      if (componentToReplace) {
        element.order = componentToReplace?.order
      } else {
        element.order = 0
      }
    }
    if (element.children && !componentToReplace) {
      element.children = [...moveUpElement(element.children, { id, currentPosition })]
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

export function moveDownElement(
  components: IComponentData[],
  { id, currentPosition }: { id: string; currentPosition: number }
) {
  let componentToReplace: IComponentData | undefined
  let oldOrder = 0
  const newComponents = components.map(element => {
    if (element.id === id && currentPosition === element.order) {
      oldOrder = element.order
      componentToReplace = downOrderElement(element, components)
      if (componentToReplace) {
        element.order = componentToReplace?.order
      } else {
        element.order = 0
      }
    }
    if (element.children && !componentToReplace) {
      element.children = [...moveDownElement(element.children, { id, currentPosition })]
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
