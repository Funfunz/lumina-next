"use client";

import { useLinkBoxContext, IInitialStateType } from './titleTextContext'
import { TitleTextVisual } from './titleTextVisual'

export const TitleTextComponent = () => {  
  const {state, dispatch} = useLinkBoxContext()

  const onUpdateCallback = (data: IInitialStateType) => {
    dispatch({type: 'update', data})
  }

  if (!state) return null
  return (
    <TitleTextVisual state={state} onUpdateCallback={onUpdateCallback}/>
  )
}