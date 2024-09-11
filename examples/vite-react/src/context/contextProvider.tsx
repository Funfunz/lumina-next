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
import { ICartContext, initialCartContextState } from './reducers/cartContextReducer'

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
  data = {},
}: {
  children: React.ReactNode
  data?: {
    cartContext?: ICartContext
  }
}) {
  const initialState = {
    ...initialContext,
    cartContext: {
      ...initialCartContextState,
      ...(data.cartContext || {}),
    },
  }
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
