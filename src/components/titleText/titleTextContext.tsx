"use client";

import { Dispatch, createContext, useContext, useReducer } from 'react'

const initialContext = {
  id: '',
  title: '',
  text: '',
}

export type IInitialStateType = {
  id: string
  title: string
  text: string
}

export interface ITextBoxContextAction {
  type: string
  data: IUpdateDataAction
}

export interface IUpdateDataAction extends Partial<IInitialStateType> {}

const mainReducer = (
  linkBoxContext: IInitialStateType,
  action: ITextBoxContextAction
) => {
  switch (action.type) {
    case 'update':
      return {
        ...linkBoxContext,
        ...action.data
      }
    default:
      break;
  }
  return linkBoxContext
}

export interface IContext {
  state: IInitialStateType
  dispatch: Dispatch<ITextBoxContextAction> 
}

const TitleTextContext = createContext<IContext>({
  state: initialContext,
  dispatch: () => null,
})

export function ContextProvider({
  children,
  data
}: {
  children: React.ReactNode,
  data: IInitialStateType
}) {
  const [state, dispatch] = useReducer(
    mainReducer,
    {
      ...initialContext,
      ...data
    }
  )

  return (
    <TitleTextContext.Provider value={{state, dispatch}}>
      {children}
    </TitleTextContext.Provider>
  )
}

export const useLinkBoxContext = () => {
  return useContext(TitleTextContext)
}
