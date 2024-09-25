import { ContextProvider, useAppContext } from './context/contextProvider'
import { Editor } from './components/editor'
import CreateAccount from './components/login/createAccount'
import RecoverAccount from './components/login/recoverAccount'
import { Render } from './components/render'
import type { IConnectorData, IData, IPageData } from './models/data'
import { useEffect, useState } from 'react'
import type { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/toggleModalContextProvider'
import { EditorModal } from './components/modals'
import { routerParser } from './utils/routerParser'
import { builderDataParser } from './utils/connectorParser'
import Login from './components/login'

export type TComponentConfig = {
  [key: string]: {
    component: (data: any) => React.JSX.Element | null
    config: TConfig
  }
}

type TRouter = {
  location: {
    hash: string
    key: string
    pathname: string
    search: string
    host: string
    protocol: string
  }
  base: string
}

type TProps = {
  router: TRouter
  getData: () => Promise<IConnectorData>
  components: TComponentConfig
  navigate?: (url: string) => void
  config: { mobileView: string }
}

const defaultValues: TProps = {
  router: {
    location: {
      hash: '',
      key: '',
      pathname: '',
      search: '',
      host: '',
      protocol: '',
    },
    base: '/',
  },
  getData: async () => ({}),
  components: {},
  config: { mobileView: 'iframe' },
}

let componentConfig: TComponentConfig = {}

export function getComponentConfig() {
  return componentConfig
}

function setComponentConfig(newComponentConfig: TComponentConfig) {
  componentConfig = newComponentConfig
  return componentConfig
}

type TInitialRenderProps = {
  isEditor: boolean
  isLoggedIn: boolean
  router: TRouter
  config: { mobileView: string }
}

const InitialRender = ({ isEditor, isLoggedIn, router, config }: TInitialRenderProps) => {
  const appContext = useAppContext()
  const isCreateAccount = router.location.pathname.includes('/createAccount')
  const isRecoverAccount = router.location.pathname.includes('/recoverAccount')
  let iframePath = ''
  if (appContext.isMobile) {
    const params = new URLSearchParams(router.location.search)
    params.delete('editor')
    iframePath = `${router.location.protocol}//${router.location.host}${router.location.pathname}${params.size > 0 ? '?' + params.toString() : ''}`
  }

  if (!isLoggedIn && isEditor) {
    return isCreateAccount ? <CreateAccount /> : isRecoverAccount ? <RecoverAccount /> : <Login />
  }

  return isEditor ? (
    <ToggleModalContextProvider>
      <Editor>
        <EditorModal />
        {!appContext.isMobile ? (
          <Render />
        ) : config.mobileView === 'container' ? (
          <Render />
        ) : (
          <iframe className='lum-iframe' src={iframePath}></iframe>
        )}
      </Editor>
    </ToggleModalContextProvider>
  ) : (
    <Render />
  )
}

export default function Lumina({
  router,
  getData,
  components,
  navigate,
  config,
}: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({ pages: {}, components: {} })
  const [isLoggedIn] = useState<boolean>(!!sessionStorage.getItem('user'))

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
        appContext: { isEditor, params, pathComponents, selectedPage, isMobile: false },
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData.pages),
        },
      }}
      navigate={navigate}
    >
      <InitialRender isEditor={isEditor} isLoggedIn={isLoggedIn} router={router} config={config} />
    </ContextProvider>
  )
}

export { EditorButtonsContainer } from './components/editor-buttons-container'
export { useAppContext } from '@/context/contextProvider'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData, IConnectorData }
