'use client'

/**
 * Lumina main reducer
 * It turns all the reducers into a single one
 */
import { Dispatch } from 'react'
import {
  ICartContext,
  TCartContextAction,
  cartContextReducer,
  initialCartContextState,
} from './cartContextReducer'

export type TAppContextDispatch = Dispatch<TCartContextAction>

export interface IInitialStateType {
  cartContext: ICartContext
}

export const initialContext = {
  cartContext: initialCartContextState,
}

export const mainReducer = ({ cartContext }: IInitialStateType, action: TCartContextAction) => {
  const newContext = {
    cartContext: cartContextReducer(cartContext, action as TCartContextAction),
  }
  return newContext
}
