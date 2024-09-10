import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback } from 'react'

type TProps = {
  id: string
  moveDirection: 'up' | 'down'
  active: boolean
  currentPosition: number
}

export const MoveComponentButton = ({ id, moveDirection, active, currentPosition }: TProps) => {
  const { dispatch } = useLuminaContext()
  const direction = moveDirection === 'up' // more user friendly to use string and transform to boolean

  const handleOnClickMoveUp = useCallback(() => {
    dispatch({
      type: 'moveUpComponent',
      data: {
        id,
        currentPosition,
      },
    })
  }, [dispatch, id, currentPosition])

  const handleOnClickMoveDown = useCallback(() => {
    dispatch({
      type: 'moveDownComponent',
      data: {
        id,
        currentPosition,
      },
    })
  }, [dispatch, id, currentPosition])
  return (
    <Button
      disabled={active}
      buttonType='button'
      onClick={direction ? handleOnClickMoveUp : handleOnClickMoveDown}
      iconLeft={direction ? 'lum-icon-arrow-up' : 'lum-icon-arrow-down'}
    />
  )
}
