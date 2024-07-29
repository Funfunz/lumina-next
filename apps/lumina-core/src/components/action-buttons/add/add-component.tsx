import { Button } from "@/components/button/button"
import { TLumButtonAsButton } from "@/components/button/button-models";
import { AddModal } from "@/components/modals/add/add-modal";
import { useToggleMenuContext } from "@/context/toggleMenuContext";
import { useToggleModalContext } from "@/context/toggleModalContext";

type TProps = TLumButtonAsButton & {
  id: string
  text?: string
}

export const AddComponentButton = ({ id, text, disabled }: TProps) => {
  const { handleToggleMenu } = useToggleMenuContext()
  const { handleOpenModal } = useToggleModalContext()

  const _handleOpenModal = () => {
    handleOpenModal({ id: id, modalType: "ADD" })
    handleToggleMenu(id)
  }

  return (
    <>
      <Button
        buttonType="button"
        onClick={_handleOpenModal}
        text={text}
        iconLeft="lum-icon-plus-fill"
        disabled={disabled}
      />
      <AddModal />
    </>
  )
}
