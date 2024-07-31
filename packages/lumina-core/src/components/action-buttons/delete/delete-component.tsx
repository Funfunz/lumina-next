import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { DeleteModal } from "@/components/modals/delete/delete-modal";
import { DELETEMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";

type TProps = TLumButtonAsButton & {
  id: string,
}

export const DeleteComponentButton = ({ id, text, iconLeft, iconRight, className, style, disabled }: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()
  const handleToggleDeleteModal = () => {
    handleOpenModal({
      id,
      modalType: DELETEMODAL
    })
    handleToggleMenu(id)
  }

  return (
    <Button
      buttonType="button"
      onClick={handleToggleDeleteModal}
      style={style}
      text={text}
      iconLeft={iconLeft}
      iconRight={iconRight}
      className={className}
      disabled={disabled}
    />
  )
}
