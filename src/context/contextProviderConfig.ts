'use client'
 
import { Dispatch } from 'react'
import { IAppContext, IAppContextAction, contextReducer, initialAppContextState } from './reducers/appContext'

export type TAppContextDispatch = Dispatch<IAppContextAction> 

export interface IInitialStateType {
  appContext: IAppContext
}

export const initialContext = {
  appContext: initialAppContextState
}

export const mainReducer = (
  {
    appContext
  }: IInitialStateType,
  action: IAppContextAction
) => ({
  appContext: contextReducer(appContext, action),
})

