import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { EditModal } from "@/components/modals/edit/edit-modal";
import { EDITMODAL, useToggleModalContext } from "@/context/handleModalsContext";
import { useToggleMenuContext } from "@/context/toggleMenuContext";
import { IComponentProps } from "@/models/data";
import { TConfig } from "@/models/editor-buttonModel";

type TProps = TLumButtonAsButton & {
  id: string
  data: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config: TConfig
}

export const EditComponentButton = ({ id, data, onUpdate, config, iconLeft, iconRight, style, className, text, disabled }: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleEditModal = () => {
    handleOpenModal({
      id,
      data,
      config,
      modalType: EDITMODAL,
      onUpdate
    })
    handleToggleMenu(id)
  }

  return (
    <Button
      buttonType="button"
      onClick={handleToggleEditModal}
      text={text}
      style={style}
      className={className}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
    />
  )
}
