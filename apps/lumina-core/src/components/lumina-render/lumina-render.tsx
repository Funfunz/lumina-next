"use client"

import { useLuminaContext } from "@/context/contextProvider"
import { IComponentData } from "@/data/data"
import { LuminaDynamicComponent } from "./lumina-dynamicComponent"

interface IProps {
  elements?: IComponentData[]
}

export const LuminaRender = ({ elements }: IProps) => {
  const { state: { builderDataContext } } = useLuminaContext()
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
    data = builderDataContext.builderData[builderDataContext.selectedPage].children!
  }
  return (
    <>
      {data.map(
        (component, index) => {
          const LuminaLoadedComponent = LuminaDynamicComponent(component.type)
          if (!LuminaLoadedComponent) return null
          return <LuminaLoadedComponent key={index} {...component.props} id={component.id}><LuminaRender elements={component.children}/></LuminaLoadedComponent>
        }
      )}
    </>
  )
}
