'use client'

import { useLinkBoxContext, IInitialStateType } from './LinkboxContext'
import { LinkBoxInternalNested } from './linkBoxInternalNested'

export const LinkBoxInternal = () => {
  const { state, dispatch } = useLinkBoxContext()

  const onUpdateCallback = (data: IInitialStateType) => {
    dispatch({ type: 'update', data })
  }

  if (!state) return null
  return <LinkBoxInternalNested state={state} onUpdateCallback={onUpdateCallback} />
}
