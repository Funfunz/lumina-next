import { Button } from '@/components/button/index.js'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'

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
