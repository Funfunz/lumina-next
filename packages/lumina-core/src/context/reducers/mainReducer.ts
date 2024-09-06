'use client'

/**
 * Lumina main reducer
 * It turns all the reducers into a single one
 */
import { Dispatch } from 'react'
import {
  IAppContext,
  TAppContextAction,
  appContextReducer,
  initialAppContextState,
} from './appContextReducer'
import {
  IBuilderDataContext,
  builderDataContextReducer,
  TBuilderDataContextAction,
  initialBuilderDataContextState,
} from './builderDataContextReducer'

export type TAppContextDispatch = Dispatch<TAppContextAction | TBuilderDataContextAction>

export interface IInitialStateType {
  appContext: IAppContext
  builderDataContext: IBuilderDataContext
}

export const initialContext = {
  appContext: initialAppContextState,
  builderDataContext: initialBuilderDataContextState,
}

export const mainReducer = (
  { appContext, builderDataContext }: IInitialStateType,
  action: TAppContextAction | TBuilderDataContextAction
) => {
  const newContext = {
    appContext: appContextReducer(appContext, action as TAppContextAction),
    builderDataContext: builderDataContextReducer(
      builderDataContext,
      action as TBuilderDataContextAction
    ),
  }
  console.log({ newContext })
  return newContext
}
