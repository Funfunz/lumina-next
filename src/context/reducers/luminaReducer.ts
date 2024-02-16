'use client'
 
import { Dispatch } from 'react'
import { IAppContext, TAppContextAction, contextReducer, initialAppContextState } from './appContext'
import { IBuilderDataContext, builderDataContextReducer, TBuilderDataContextAction, initialBuilderDataContextState } from './builderDataContext'

export type TAppContextDispatch = Dispatch<TAppContextAction | TBuilderDataContextAction> 

export interface IInitialStateType {
  appContext: IAppContext
  builderDataContext: IBuilderDataContext
}

export const initialContext = {
  appContext: initialAppContextState,
  builderDataContext: initialBuilderDataContextState
}

export const mainReducer = (
  {
    appContext,
    builderDataContext
  }: IInitialStateType,
  action: TAppContextAction | TBuilderDataContextAction
) => ({
  appContext: contextReducer(appContext, action as TAppContextAction),
  builderDataContext: builderDataContextReducer(builderDataContext, action as TBuilderDataContextAction)
})

