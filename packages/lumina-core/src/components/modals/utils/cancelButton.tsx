import { useToggleModalContext } from '../../../context/toggleModalContextProvider'
import { Button } from '../../button'

export const CancelButton = () => {
  const { handleCloseModal } = useToggleModalContext()
  return (
    <Button
      buttonType='button'
      text='Cancel'
      style='secondary'
      size='large'
      onClick={handleCloseModal}
    />
  )
}
