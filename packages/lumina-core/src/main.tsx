import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import { Render } from './components/render'
import type { IConnectorData, IData, IPageData } from './models/data'
import { useEffect, useState } from 'react'
import type { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/toggleModalContextProvider'
import { EditorModal } from './components/modals'
import { routerParser } from './utils/routerParser'
import { builderDataParser } from './utils/connectorParser'

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
  getData: () => Promise<IConnectorData>
  components: TComponentConfig
  navigate?: (url: string) => void
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

export default function Lumina({ router, getData, components, navigate }: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({ pages: {}, components: {} })

  useEffect(() => {
    async function fetchData() {
      const data = await getData()
      setBuilderData(builderDataParser(data))
    }
    fetchData()
  }, [getData])

  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])

  if (!Object.keys(builderData.pages).length) return null

  const { selectedPage, isEditor, params, pathComponents } = routerParser(
    router.location.pathname,
    builderData
  )

  if (!builderData.pages[selectedPage]) return null
  return (
    <ContextProvider
      router={router}
      data={{
        appContext: { isEditor, params, pathComponents, selectedPage },
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData.pages),
        },
      }}
      navigate={navigate}
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

export type { IData, IPageData, IConnectorData }
