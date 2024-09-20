import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import CreateAccount from './components/login/createAccount'
import RecoverAccount from './components/login/recoverAccount'
import { Render } from './components/render'
import Login from './components/login'
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

type TRouter = {
  location: {
    hash: string
    key: string
    pathname: string
    search: string
  }
  base: string
}

type TProps = {
  router: TRouter
  getData: () => Promise<IData>
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

type TInitialRenderProps = {
  isEditor: boolean
  isLoggedIn: boolean
  router: TRouter
}

const InitialRender = ({ isEditor, isLoggedIn, router }: TInitialRenderProps) => {
  const isCreateAccount = router.location.pathname.includes('/createAccount')
  const isRecoverAccount = router.location.pathname.includes('/recoverAccount')
  if (!isLoggedIn && isEditor) {
    return isCreateAccount ? <CreateAccount /> : isRecoverAccount ? <RecoverAccount /> : <Login />
  }

  return isEditor ? (
    <ToggleModalContextProvider>
      <Editor>
        <EditorModal />
        <Render />
      </Editor>
    </ToggleModalContextProvider>
  ) : (
    <Render />
  )
}

export default function Lumina({ router, getData, components, navigate }: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({})
  const [isLoggedIn] = useState<boolean>(!!sessionStorage.getItem('user'))

  useEffect(() => {
    async function fetchData() {
      setBuilderData(await getData())
    }
    fetchData()
  }, [getData])

  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])

  const { selectedPage, isEditor, params, pathComponents } = routerParser(
    router.location.pathname,
    builderData
  )

  if (!builderData[selectedPage]) return null

  return (
    <ContextProvider
      router={router}
      data={{
        appContext: { isEditor, params, pathComponents, selectedPage },
        builderDataContext: {
          builderData,
          selectedPage: selectedPage,
          pages: Object.keys(builderData),
        },
      }}
      navigate={navigate}
    >
      <InitialRender isEditor={isEditor} isLoggedIn={isLoggedIn} router={router} />
    </ContextProvider>
  )
}

export { EditorButtonsContainer } from './components/editor-buttons-container'
export { useAppContext } from '@/context/contextProvider'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData }
