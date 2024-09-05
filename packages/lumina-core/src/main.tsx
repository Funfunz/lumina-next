/* eslint-disable no-unused-vars */

import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import { Render } from './components/render'
import type { IData, IPageData } from './models/data'
import { useEffect, useState } from 'react'
import type { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/toggleModalContextProvider'
import { EditorModal } from './components/modals'
import { routerParser } from './utils/routerParser'

export type TComponentConfig = {
  [key: string]: {
    component: (data: any) => React.JSX.Element | null
    config: TConfig
  }
}

type TProps = {
  router: {
    location: {
      hash: string
      key: string
      pathname: string
      search: string
    }
    base: string
  }
  getData: () => Promise<IData>
  components: TComponentConfig
}

const defaultValues: TProps = {
  router: {
    location: {
      hash: '',
      key: '',
      pathname: '',
      search: '',
    },
    base: '/',
  },
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

export default function Lumina({ router, getData, components }: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({})

  useEffect(() => {
    async function fetchData() {
      setBuilderData(await getData())
    }
    fetchData()
  }, [getData])

  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])

  const { selectedPage, isEditor, params } = routerParser(router.location.pathname, builderData)

  if (!builderData[selectedPage]) return null
  return (
    <ContextProvider
      data={{
        appContext: { isEditor, selectedPage, params },
        builderDataContext: {
          builderData,
          selectedPage: selectedPage,
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
export { useAppContext } from '@/context/contextProvider'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData }
