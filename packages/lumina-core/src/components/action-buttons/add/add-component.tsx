import { Button } from "@/components/button/button"
import { TLumButtonAsButton } from "@/components/button/button-models";
import { AddModal } from "@/components/modals/add/add-modal";
import { ADDMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";

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
export const AddComponentButton = ({ componentId, buttonLabel, isDisabled, isMenuButton }: TProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const handleButtonClick = () => {
    handleOpenModal({ id: componentId, modalType: ADDMODAL })
    handleToggleMenu(componentId!)
  }

  return (
    <Button
      buttonType="button"
      onClick={handleButtonClick}
      text={buttonLabel}
      disabled={isDisabled}
      style={isMenuButton ? "menuButton" : ""}
      iconLeft="lum-icon-plus"
    />
  )
}
