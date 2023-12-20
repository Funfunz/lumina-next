"use client"
import staticComponentsPath from "@/staticComponentsPath"
import { useAppContext } from "@/context/contextProvider"
import { IComponentData } from "@/data/data"

const DynamicComponent = (type: string) => {
  if (!staticComponentsPath[type]) return null
  return staticComponentsPath[type]
}

interface IProps {
  elements?: IComponentData[]
}

export const Render = ({ elements }: IProps) => {
  const { state: { builderDataContext } } = useAppContext()
  let data: IComponentData[] = []
  if (elements) {
    data = elements
  }
  if (
    builderDataContext.builderData
    && builderDataContext.selectedPage
    && builderDataContext.builderData[builderDataContext.selectedPage].children
    && !elements
  ) {
    data = builderDataContext.builderData[builderDataContext.selectedPage].children
  }
  return (
    <>
      {data.map(
        (component, index) => {
          const LoadedComponent = DynamicComponent(component.type)
          if (!LoadedComponent) return null
          return <LoadedComponent key={index} {...component.props} id={component.id}><Render elements={component.children}/></LoadedComponent>
        }
      )}
    </>
  )
    
  return null
}