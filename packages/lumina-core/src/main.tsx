/* eslint-disable no-unused-vars */

import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import { Render } from './components/render'
import type { IData, IPageData } from './models/data'
import { useEffect, useState } from 'react'
import { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/handleModalsContext'
import { EditorModal } from './components/modals'

export type TComponentConfig = {
  [key: string]: {
    component: (data: any) => React.JSX.Element | null
    config: TConfig
  }
}

type TProps = {
  selectedPage: string
  getData: () => Promise<IData>
  components: TComponentConfig
}

const defaultValues: TProps = {
  selectedPage: 'home',
  getData: async () => ({}),
  components: {},
}

let componentConfig: TComponentConfig = {}

export function getComponentConfig() {
  return componentConfig
}

function setComponentConfig(newComponentConfig: TComponentConfig) {
  componentConfig = newComponentConfig
  return componentConfig
}

export default function Lumina({ selectedPage, getData, components }: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({})
  useEffect(() => {
    async function fetchData() {
      setBuilderData(await getData())
    }
    fetchData()
  }, [getData])
  useEffect(() => {
    async function fetchData() {
      setBuilderData(await getData())
    }
    fetchData()
  }, [getData])

  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])
  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])

  if (!builderData[selectedPage]) return null
  return (
    <ContextProvider
      data={{
        appContext: { editor: true },
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData),
        },
      }}
    >
      <ToggleModalContextProvider>
        <Editor>
          <EditorModal />
          <Render />
        </Editor>
      </ToggleModalContextProvider>
    </ContextProvider>
  )
}

export { EditorButtonsContainer } from './components/editor-buttons-container'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData }
