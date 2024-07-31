import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { DeleteModal } from "@/components/modals/delete/delete-modal";
import { DELETEMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";

type TProps = {
  componentId: string,
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * Enables calling the delete button easily by providing fewer props
 * @param param0 
 * @returns 
 */
export const DeleteComponentButton = ({ componentId, buttonLabel, isDisabled, isMenuButton }: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleDeleteModal = () => {
    handleOpenModal({
      id: componentId,
      modalType: DELETEMODAL
    })
    handleToggleMenu(componentId)
  }

  return (
    <Button
      buttonType="button"
      onClick={handleToggleDeleteModal}
      style={isMenuButton ? "menuButton" : ""}
      text={buttonLabel}
      iconLeft="lum-icon-cross"
      disabled={isDisabled}
    />
  )
}
