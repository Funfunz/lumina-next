import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { TLumButtonAsButton } from "@/components/lumina-button/lumina-button-models";
import { LuminaEditModal } from "@/components/lumina-modals/edit/lumina-edit-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/showEditModel";
import { useCallback, useState } from "react";

type TEditProps = TLumButtonAsButton & {
  id: string
  data: IComponentProps
  config: TConfig
}

export const LuminaEditComponentButton = ({ id, data, config, style, className, iconLeft, iconRight, text}: TEditProps) => {
  const { dispatch } = useLuminaContext()
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [formData, setFormData] = useState(data || {});

  const handleToggleEditModal = () => {
    setShowModalEdit(!showModalEdit)
  }

  const handleOnClickSaveData = useCallback(() => {
    setShowModalEdit(false);
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
    [dispatch, formData, id]
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
        buttonType="button"
        onClick={handleToggleEditModal}
        style={style}
        text={text}
        iconLeft={iconLeft}
        iconRight={iconRight}
        className={className}
      />
      {showModalEdit &&
        <LuminaEditModal showModalEdit={showModalEdit}
          handleCloseModal={handleToggleEditModal}
          handleOnClickSaveData={handleOnClickSaveData}
          handleOnChangeInput={handleOnChangeInput}
          config={config}
          formData={formData}
        />
      }
    </>
  )
}
