/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback, useState } from 'react'

type TProps = {
  id: string
  hidden: boolean
}

export const VisibleComponentButton = ({ id, hidden }: TProps) => {
  const { dispatch } = useLuminaContext()
  console.log('data:', id)
  console.log('hidden:', hidden)
  console.log()

  const handleOnClickVisibility = useCallback(() => {
    dispatch({
      type: 'visibilityComponent',
      data: { id, hidden },
    })
  }, [dispatch, id])

  return (
    <Button
      buttonType='button'
      iconLeft={hidden! ? 'lum-icon-visible' : 'lum-icon-hidden'}
      onClick={handleOnClickVisibility}
    />
  )
}
