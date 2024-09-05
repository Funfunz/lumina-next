/**
 * this is the ContextProvider component
 * it contains all the page builder context
 * including the page structure and component data
 */

import { createContext, useContext, useReducer } from 'react'
import {
  IInitialStateType,
  TAppContextDispatch,
  initialContext,
  mainReducer,
} from './reducers/mainReducer'
import { IAppContext, initialAppContextState } from './reducers/appContextReducer'
import {
  IBuilderDataContext,
  initialBuilderDataContextState,
} from './reducers/builderDataContextReducer'

export interface IContext {
  state: IInitialStateType
  dispatch: TAppContextDispatch
}

const LuminaContext = createContext<IContext>({
  state: initialContext,
  dispatch: () => null,
})

export function ContextProvider({
  children,
  data = {},
}: {
  children: React.ReactNode
  data: {
    appContext?: IAppContext
    builderDataContext?: IBuilderDataContext
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

  return <LuminaContext.Provider value={{ state, dispatch }}>{children}</LuminaContext.Provider>
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
