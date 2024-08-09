import { useLuminaContext } from '@/context/contextProvider'
import { IComponentData } from '@/models/data'
import { DynamicComponent } from './dynamicComponent'

interface IProps {
  elements?: IComponentData[]
}

export const Render = ({ elements }: IProps) => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  let data: IComponentData[] = []
  if (elements) {
    data = elements
  }
  if (
    builderDataContext.builderData &&
    builderDataContext.selectedPage &&
    builderDataContext.builderData[builderDataContext.selectedPage].children &&
    !elements
  ) {
    data = builderDataContext.builderData[builderDataContext.selectedPage].children!
  }

  return (
    <>
      {data.map((component, index) => {
        if (component.hidden) return
        const LoadedComponent = DynamicComponent(component.type)?.component
        if (!LoadedComponent) return null
        return (
          <LoadedComponent key={index} {...component.props} id={component.id}>
            <Render elements={component.children} />
          </LoadedComponent>
        )
      })}
    </>
  )
}
