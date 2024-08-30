import { Button } from '@/components/button'
import { DELETEMODAL, useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useToggleMenuContext } from '@/context/toggleMenuContextProvider'

type TProps = {
  componentId: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * Enables calling the delete button easily by providing fewer props
 * @param param0
 * @returns
 */
export const DeleteComponentButton = ({
  componentId,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleDeleteModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleOpenModal({
      id: componentId,
      modalType: DELETEMODAL,
    })
    handleToggleMenu(componentId)
  }

  return (
    <Button
      buttonType='button'
      onClick={handleToggleDeleteModal}
      style={isMenuButton ? 'menuButton' : 'danger'}
      text={buttonLabel}
      iconLeft='lum-icon-cross'
      disabled={isDisabled}
    />
  )
}
