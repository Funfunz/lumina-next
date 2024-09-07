import { EditorButtonsContainer } from '@lumina/core'
import { config } from './config'
import MUIButton, { type ButtonOwnProps } from '@mui/material/Button'
import { useAppContext } from '../../context/contextProvider'
import { useCallback } from 'react'

type TProps = {
  id: string
} & ButtonOwnProps

export const AddToCart = ({ id, ...rest }: TProps) => {
  const {
    state: {
      cartContext: { count },
    },
    dispatch,
  } = useAppContext()

  const handleAddToCartClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch({
      type: 'setCount',
      data: {
        count: count + 1,
      },
    })
  }, [count])
  return (
    <div style={{ position: 'relative' }}>
      <MUIButton {...rest} onClick={handleAddToCartClick}>
        Add to cart
      </MUIButton>
      <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest } as any} />
    </div>
  )
}
