import staticComponentsPath from "@/staticComponentsPath"
import { IComponentData } from "@/data/data"

const DynamicComponent = (type: string) => {
  if (!staticComponentsPath[type]) return null
  return staticComponentsPath[type]
}

export const renderData = (data: IComponentData[]) => {
  return data.map(
    (component, index) => {
      const LoadedComponent = DynamicComponent(component.type)
      if (!LoadedComponent) return null
      return <LoadedComponent key={index} {...component.props} id={component.id}>{renderData(component.children || [])}</LoadedComponent>
    }
  )
}