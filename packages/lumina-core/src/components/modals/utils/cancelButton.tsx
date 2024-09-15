import { Button } from '@/components/button'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'

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
