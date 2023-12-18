"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

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

export const LinkBoxContext = createContext({
  state: initialContext,
  dispatch: (() => null) as Dispatch<SetStateAction<Partial<IInitialStateType>>>,
})

export function ContextProvider({
  children,
  data
}: {
  children: React.ReactNode,
  data: IInitialStateType
}) {

  const [state, dispatch] = useState<IInitialStateType>({
    ...initialContext,
    ...data
  })

  
  return (
    <LinkBoxContext.Provider value={{state, dispatch: (newData) => {
      return dispatch(
        (data) => {
          return {...data, ...newData}
        }
      )
    }}}>
      {children}
    </LinkBoxContext.Provider>
  )
}
