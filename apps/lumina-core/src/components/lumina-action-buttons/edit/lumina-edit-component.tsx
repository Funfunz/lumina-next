import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { LuminaEditModal } from "@/components/lumina-modals/edit/lumina-edit-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/showEditModel";
import { useCallback, useState } from "react";

type TProps = {
  id: string
  data: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config: TConfig
}

export const LuminaEditComponentButton = ({ id, data, onUpdate, config }: TProps) => {
  const { dispatch } = useLuminaContext()
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [formData, setFormData] = useState(data || {});

  const handleToggleEditModal = () => {
    setShowModalEdit(true)
  }

  const handleOnClickSaveData = useCallback(() => {
    setShowModalEdit(false);
    onUpdate && onUpdate(formData);
    dispatch({
      type: "updateBackend",
      data: {
        props: formData,
        id,
      },
    })
    dispatch({
      type: "updateComponent",
      data: {
        newProps: formData,
        id,
      },
    })
  },
    [dispatch, formData, id, onUpdate]
  )

  const handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value,
      })
    },
    [formData]
  )

  return (
    <>
      <LuminaButton
        onClick={handleToggleEditModal}
        round
        iconLeft="lumina-edit"
      />

      <LuminaEditModal showModalEdit={showModalEdit}
        handleCloseModal={handleToggleEditModal}
        handleOnClickSaveData={handleOnClickSaveData}
        handleOnChangeInput={handleOnChangeInput}
        config={config}
        formData={formData}
      />
    </>
  )
}
