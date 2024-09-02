import { Button } from '@/components/button'
import { ADDMODAL, useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useToggleMenuContext } from '@/context/toggleMenuContextProvider'

type TProps = {
  componentId?: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * React Component to create the Add Component button easily
 * @param componentId the ID of the parent component if exists
 * @param buttonlabel
 * @param isDisabled allows to disable the button from interactions
 * @param isMenuButton allows to style the button to be inside the expandable editor menu
 * @returns
 */
export const AddComponentButton = ({
  componentId,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleOpenModal({ id: componentId, modalType: ADDMODAL })
    handleToggleMenu(componentId!)
  }

  return (
    <Button
      variant='default'
      onClick={handleButtonClick}
      text={buttonLabel}
      disabled={isDisabled}
      style={isMenuButton ? 'menuButton' : 'secondary'}
      iconLeft='lum-icon-plus'
    />
  )
}
