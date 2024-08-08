/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback, useState } from 'react'

type TProps = {
  id: string
  isVisibleP?: boolean
}

export const VisibleComponentButton = ({ id, isVisibleP }: TProps) => {
  // const { dispatch } = useLuminaContext()
  const [isVisible, setIsVisible] = useState(true)

  const handleOnClickVisibility = () => {
    setIsVisible(!isVisible)
    console.log('visibility:', isVisible, id)
  }

  // useCallback(() => {
  //   dispatch({
  //     type: 'visibility',
  //     data: {
  //       id,
  //     },
  //   })
  // }, [dispatch, id])

  return (
    <Button
      buttonType='button'
      iconLeft={isVisible ? 'lum-icon-visible' : 'lum-icon-hidden'}
      onClick={handleOnClickVisibility}
    />
  )
}
