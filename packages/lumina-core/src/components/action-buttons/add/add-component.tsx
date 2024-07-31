import { Button } from "@/components/button/button"
import { AddModal } from "@/components/modals/add/add-modal";
import { ADDMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";

type TProps = {
  id?: string
  text?: string
}

export const AddComponentButton = ({ id, text }: TProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const handleButtonClick = () => {
    handleOpenModal({ id: id, modalType: ADDMODAL })
    handleToggleMenu(id!)
  }

  return (
    <>
      <Button
        buttonType="button"
        onClick={handleButtonClick}
        text={text}
      />
    </>
  )
}
