/**
 * this is the ContextProvider component
 * it contains all the page builder context
 * including the page structure and component data
 */

import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  IInitialStateType,
  TAppContextDispatch,
  initialContext,
  mainReducer,
} from './reducers/mainReducer.js'
import { IAppContext, initialAppContextState } from './reducers/appContextReducer.js'
import { initialBuilderDataContextState } from './reducers/builderDataContextReducer/builderDataContextReducer.js'
import { routerParser } from '@/utils/routerParser.js'
import { IData } from '@/models/data.js'

export interface IContext {
  state: IInitialStateType
  dispatch: TAppContextDispatch
  navigate?: (url: string) => void
}

const LuminaContext = createContext<IContext>({
  state: initialContext,
  dispatch: () => null,
})

export function ContextProvider({
  children,
  data = {},
  navigate,
  router,
}: {
  children: React.ReactNode
  data: {
    appContext?: IAppContext
    builderDataContext?: {
      builderData: IData
      selectedPage: string
      pages: string[]
    }
  }
  navigate?: (url: string) => void
  router: {
    location: {
      hash: string
      key: string
      pathname: string
      search: string
    }
    base: string
  }
}) {
  const initialState = {
    ...initialContext,
    appContext: {
      ...initialAppContextState,
      ...(data.appContext || {}),
    },
    builderDataContext: {
      ...initialBuilderDataContextState,
      ...(data.builderDataContext || {}),
    },
  }
  const [state, dispatch] = useReducer(mainReducer, initialState)

  useEffect(() => {
    if (state.builderDataContext.selectedPage !== data.builderDataContext?.selectedPage) {
      const { selectedPage, isEditor, params, pathComponents } = routerParser(
        router.location.pathname,
        state.builderDataContext.builderData
      )
      dispatch({
        type: 'resetAppContext',
        data: {
          isEditor,
          params,
          pathComponents,
          selectedPage,
        },
      })
      dispatch({
        type: 'setSelectedPage',
        data: selectedPage,
      })
    }
  }, [data.appContext])
  return (
    <LuminaContext.Provider value={{ state, dispatch, navigate }}>
      {children}
    </LuminaContext.Provider>
  )
}

export const useLuminaContext = () => {
  return useContext(LuminaContext)
}

export const useAppContext = () => {
  const {
    state: { appContext },
  } = useContext(LuminaContext)
  return appContext
}
