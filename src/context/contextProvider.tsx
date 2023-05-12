'use client'
 
import { createContext, useContext, useReducer } from 'react'
import { IInitialStateType, TAppContextDispatch, initialContext, mainReducer } from './contextProviderConfig'
import { initialAppContextState } from './reducers/appContext'

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
    editor: boolean
  }
}) {
  const [state, dispatch] = useReducer(
    mainReducer,
    {
      ...initialContext,
      appContext: {
        ...initialAppContextState,
        ...data
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
