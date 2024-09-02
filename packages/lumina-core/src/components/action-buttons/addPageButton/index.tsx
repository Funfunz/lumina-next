import { Button } from '@/components/button'
import { ADDMODAL, useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useToggleMenuContext } from '@/context/toggleMenuContextProvider'

type TAddPageProps = {
  pageID?: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * @param componentId the ID of the parent component if exists
 * @param buttonlabel
 * @param isDisabled allows to disable the button from interactions
 * @param isMenuButton allows to style the button to be inside the expandable editor menu
 * @returns
 */
export const AddPageButton = ({ pageID, buttonLabel, isDisabled, isMenuButton }: TAddPageProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleOpenModal({ id: pageID, modalType: ADDMODAL })
    handleToggleMenu(pageID!)
  }

  return (
    <Button
      buttonType='button'
      onClick={handleButtonClick}
      text={buttonLabel}
      disabled={isDisabled}
      iconLeft='lum-icon-plus'
      style={isMenuButton ? 'menuButton' : 'secondary'}
    />
  )
}
