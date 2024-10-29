/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from '@/components/button/index.js'
import { useLuminaContext } from '@/context/contextProvider.js'
import { useCallback, useState } from 'react'

type TProps = {
  id: string
  hidden: boolean
}

export const VisibleComponentButton = ({ id, hidden }: TProps) => {
  const { dispatch } = useLuminaContext()

  const handleOnClickVisibility = useCallback(() => {
    dispatch({
      type: 'visibilityComponent',
      data: { id, hidden },
    })
  }, [dispatch, id])

  return (
    <Button
      buttonType='button'
      iconLeft={hidden ? 'lum-icon-hidden' : 'lum-icon-visible'}
      onClick={handleOnClickVisibility}
    />
  )
}
