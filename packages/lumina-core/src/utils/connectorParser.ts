import { IComponentData, IConnectorData, IData } from '@/models/data'

const addComponentsToData = (
  components: IComponentData[],
  parentId: string,
  parsedData: IData
): IData => {
  components.forEach(component => {
    if (parsedData.components[component.id]) {
      console.log('Duplicated componentId', component.id)
      return
    }
    parsedData.components[component.id] = {
      ...component,
      parentId,
      children: component.children?.map(component => {
        return component.id
      }),
    }
    if (component.children) {
      addComponentsToData(component.children, component.id, parsedData)
    }
  })
  return parsedData
}

export const builderDataParser = (builderData: IConnectorData): IData => {
  const parsedData: IData = {
    pages: {},
    components: {},
  }
  Object.keys(builderData).forEach(pageId => {
    parsedData.pages[pageId] = {
      ...builderData[pageId],
      children: builderData[pageId].children?.map(component => {
        return component.id
      }),
    }

    if (builderData[pageId].children?.length) {
      addComponentsToData(builderData[pageId].children, pageId, parsedData)
    }
  })

  return parsedData
}
