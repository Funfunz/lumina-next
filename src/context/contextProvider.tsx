'use client'
 
import { createContext, useContext, useReducer } from 'react'
import { IInitialStateType, TAppContextDispatch, initialContext, mainReducer } from './contextProviderConfig'
import { IAppContext, initialAppContextState } from './reducers/appContext'
import { IBuilderDataContext, initialBuilderDataContextState } from './reducers/builderDataContext'

export interface IContext {
  state: IInitialStateType
  dispatch: TAppContextDispatch
}

const AppContext = createContext<IContext>({
  state: initialContext,
  dispatch: () => null,
})

export function ContextProvider({
  children,
  data
}: {
  children: React.ReactNode,
  data: {
    appContext: IAppContext
    builderDataContext: IBuilderDataContext
  }
}) {
  const [state, dispatch] = useReducer(
    mainReducer,
    {
      ...initialContext,
      appContext: {
        ...initialAppContextState,
        ...data.appContext
      },
      builderDataContext: {
        ...initialBuilderDataContextState,
        ...data.builderDataContext
      }
    }
  )

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
