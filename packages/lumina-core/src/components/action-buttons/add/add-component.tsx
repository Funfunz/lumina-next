import { Button } from "@/components/button/button"
import { TLumButtonAsButton } from "@/components/button/button-models";
import { AddModal } from "@/components/modals/add/add-modal";
import { ADDMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";

type TProps = TLumButtonAsButton & {
  id?: string
  text?: string
}

export const AddComponentButton = ({ id, text, disabled, style }: TProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const handleButtonClick = () => {
    handleOpenModal({ id: id, modalType: ADDMODAL })
    handleToggleMenu(id!)
  }

  return (
    <Button
      buttonType="button"
      onClick={handleButtonClick}
      text={text}
      disabled={disabled}
      style={style}
    />
  )
}
