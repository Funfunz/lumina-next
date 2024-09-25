import { IComponentData, IComponentProps, IDataComponent } from '@/models/data'
import { ICreateComponentAction } from './actions/componentActions'

export function newComponentFactory(
  componentData: ICreateComponentAction['data'],
  order: number,
  hidden: boolean
): IDataComponent {
  const { type, friendlyName, id, parentId, ...rest } = componentData
  return {
    id,
    parentId,
    type: type as string,
    friendlyName: friendlyName as string,
    children: [],
    order,
    hidden,
    props: { ...rest.props },
  }
}

/*
const instanceOfIComponentData = (object: any): object is IComponentData => {
  return object.id
}
*/

/**
 * Parameter "data" contains info from the parent component
 * If no parentId is given the create should happen in the root of the page
 * If parentId is present the component is created inside the element matching the parentId
 * @param component
 * @param data
 * @returns

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
*/

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
  element: IDataComponent,
  components: IDataComponent[]
): IDataComponent | undefined {
  let componentToReplace: IDataComponent | undefined = undefined
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
  element: IDataComponent,
  components: IDataComponent[]
): IDataComponent | undefined {
  let componentToReplace: IDataComponent | undefined = undefined
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

/*
export function toggleVisibilityElement(
  components: IDataComponent[],
  targetId: string
): IDataComponent[] {
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
*/

export function moveUpElement(componentToUpdate: IDataComponent, components: IDataComponent[]) {
  const oldOrder = componentToUpdate.order

  const componentToReplace: IDataComponent | undefined = upOrderElement(
    componentToUpdate,
    components
  )
  if (componentToReplace) {
    componentToUpdate = {
      ...componentToUpdate,
      order: componentToReplace.order,
    }
  } else {
    componentToUpdate.order = 0
  }

  if (componentToReplace) {
    componentToReplace.order = oldOrder
  }
  return {
    componentToUpdate,
    componentToReplace,
  }
}

export function moveDownElement(componentToUpdate: IDataComponent, components: IDataComponent[]) {
  const oldOrder = componentToUpdate.order
  const componentToReplace: IDataComponent | undefined = downOrderElement(
    componentToUpdate,
    components
  )
  if (componentToReplace) {
    componentToUpdate = {
      ...componentToUpdate,
      order: componentToReplace.order,
    }
  } else {
    componentToUpdate.order = 0
  }

  if (componentToReplace) {
    componentToReplace.order = oldOrder
  }
  return {
    componentToUpdate,
    componentToReplace,
  }
}
