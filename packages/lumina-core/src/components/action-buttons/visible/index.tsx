/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback, useState } from 'react'

type TProps = {
  id: string
  isVisibleContext?: boolean
}

export const VisibleComponentButton = ({ id, isVisibleContext }: TProps) => {
  const { dispatch } = useLuminaContext()
  console.log('visible:', isVisibleContext)

  const handleOnClickVisibility = useCallback(() => {
    dispatch({
      type: 'visibilityComponent',
      data: { id },
    })
  }, [dispatch, id])

  return (
    <Button
      buttonType='button'
      iconLeft={isVisibleContext ? 'lum-icon-visible' : 'lum-icon-hidden'}
      onClick={handleOnClickVisibility}
    />
  )
}
