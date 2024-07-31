/* eslint-disable react-refresh/only-export-components */
"use client";

import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react'

const initialContext = {
  id: '',
  title: '',
  description: '',
  href: '',
  color: 'white'
}

export type IInitialStateType = {
  id: string
  title: string
  description: string
  href: string
  color: string
}

export interface ILinkBoxContextAction {
  type: string
  data: IUpdateDataAction
}

export interface IUpdateDataAction extends Partial<IInitialStateType> {}

const mainReducer = (
  linkBoxContext: IInitialStateType,
  action: ILinkBoxContextAction
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
  dispatch: Dispatch<ILinkBoxContextAction>
}

const LinkBoxContext = createContext<IContext>({
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

  useEffect(
    () => {
      dispatch(
        {
          type: 'update',
          data
        }
      )
    }, [data]
  )

  return (
    <LinkBoxContext.Provider value={{state, dispatch}}>
      {children}
    </LinkBoxContext.Provider>
  )
}

export const useLinkBoxContext = () => {
  return useContext(LinkBoxContext)
}
