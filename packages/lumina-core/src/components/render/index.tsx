import { useLuminaContext } from '@/context/contextProvider'

import { DynamicComponent } from './dynamicComponent'

interface IProps {
  componentIds?: string[]
}

export const Render = ({ componentIds }: IProps) => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  let data: string[] = []
  if (componentIds) {
    data = componentIds
  }
  if (
    builderDataContext.builderData &&
    builderDataContext.selectedPage &&
    builderDataContext.builderData.pages[builderDataContext.selectedPage]?.children &&
    !componentIds
  ) {
    data = builderDataContext.builderData.pages[builderDataContext.selectedPage].children!
  }

  return (
    <>
      {data
        .map(componentId => {
          return builderDataContext.builderData.components[componentId]
        })
        .sort((a, b) => {
          if (a.order > b.order) {
            return 1
          }
          if (a.order < b.order) {
            return -1
          }
          return 0
        })
        .map((component, index) => {
          if (component?.hidden) return
          const LoadedComponent = DynamicComponent(component.type)?.component
          if (!LoadedComponent) return null
          return (
            <LoadedComponent key={index} {...component.props} id={component.id}>
              <Render componentIds={component.children} />
            </LoadedComponent>
          )
        })}
    </>
  )
}
