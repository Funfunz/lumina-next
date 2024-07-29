import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { EditModal } from "@/components/modals/edit/edit-modal";
import { useToggleMenuContext } from "@/context/toggleMenuContext";
import { useToggleModalContext } from "@/context/toggleModalContext";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/editor-buttonModel";

type TProps = TLumButtonAsButton & {
  id: string
  data: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config?: TConfig
}

export const EditComponentButton = ({ id, data, onUpdate, config }: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleEditModal = () => {
    handleOpenModal({
      id,
      data,
      config,
      modalType: "EDIT",
      onUpdate
    })
    handleToggleMenu(id)
  }

  return (
    <>
      <Button
        buttonType="button"
        onClick={handleToggleEditModal}
        iconLeft="lum-icon-edit"
      />
      <EditModal />
    </>
  )
}
