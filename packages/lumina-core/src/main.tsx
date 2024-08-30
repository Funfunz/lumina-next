/* eslint-disable no-unused-vars */

import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import { Render } from './components/render'
import type { IData, IPageData } from './models/data'
import { useEffect, useState } from 'react'
import type { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/toggleModalContextProvider'
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
  isEditor?: boolean
}

const defaultValues: TProps = {
  selectedPage: 'home',
  getData: async () => ({}),
  components: {},
  isEditor: false,
}

let componentConfig: TComponentConfig = {}

export function getComponentConfig() {
  return componentConfig
}

function setComponentConfig(newComponentConfig: TComponentConfig) {
  componentConfig = newComponentConfig
  return componentConfig
}

export default function Lumina({
  selectedPage,
  getData,
  components,
  isEditor = false,
}: TProps = defaultValues) {
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

  if (!builderData[selectedPage]) return null

  return (
    <ContextProvider
      data={{
        appContext: { editor: isEditor },
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData),
        },
      }}
    >
      {isEditor ? (
        <ToggleModalContextProvider>
          <Editor>
            <EditorModal />
            <Render />
          </Editor>
        </ToggleModalContextProvider>
      ) : (
        <Render />
      )}
    </ContextProvider>
  )
}

export { EditorButtonsContainer } from './components/editor-buttons-container'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData }
