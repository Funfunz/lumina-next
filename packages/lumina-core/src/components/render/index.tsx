'use client'

import { useLuminaContext } from '@/context/contextProvider'
import { IComponentData } from '@/models/data'
import { DynamicComponent } from './dynamicComponent'
import { useEffect, useState } from 'react'

interface IProps {
  elements?: IComponentData[]
}

export const Render = ({ elements }: IProps) => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  const [pageCmps, setPageCmps] = useState<IComponentData[]>()

  useEffect(() => {
    if (elements) {
      setPageCmps(elements)
    }
    if (
      builderDataContext.builderData &&
      builderDataContext.selectedPage &&
      builderDataContext.builderData[builderDataContext.selectedPage].children &&
      !elements
    ) {
      setPageCmps(builderDataContext.builderData[builderDataContext.selectedPage].children!)
    }
  }, [elements])

  if (!pageCmps) return null

  return (
    <>
      {pageCmps.map((component, index) => {
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
