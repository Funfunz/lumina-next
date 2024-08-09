import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback } from 'react'

type TProps = {
  id: string
  moveDirection: 'up' | 'down'
  active: boolean
}

export const MoveComponentButton = ({ id, moveDirection, active }: TProps) => {
  const { dispatch } = useLuminaContext()
  const direction = moveDirection === 'up' // more user friendly to use string and transform to boolean

  const handleOnClickMoveUp = useCallback(() => {
    dispatch({
      type: 'moveUpComponent',
      data: {
        id,
      },
    })
  }, [dispatch, id])

  const handleOnClickMoveDown = useCallback(() => {
    dispatch({
      type: 'moveDownComponent',
      data: {
        id,
      },
    })
  }, [dispatch, id])

  console.log({ active })

  return (
    <Button
      disabled={active}
      buttonType='button'
      onClick={direction ? handleOnClickMoveUp : handleOnClickMoveDown}
      iconLeft={direction ? 'lum-icon-arrow-up' : 'lum-icon-arrow-down'}
    />
  )
}
