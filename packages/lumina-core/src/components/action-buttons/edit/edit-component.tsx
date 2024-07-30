/* eslint-disable no-unused-vars */
import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { EditModal } from "@/components/modals/edit/edit-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentProps } from "@/models/data";
import { TConfig } from "@/models/editor-buttonModel";
import { useCallback, useState } from "react";

type TProps = TLumButtonAsButton &{
  id: string
  data: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config: TConfig
}

export const EditComponentButton = ({ id, data, onUpdate, config }: TProps) => {
  const { dispatch } = useLuminaContext()
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [formData, setFormData] = useState(data || {});

  const handleToggleEditModal = () => {
    setShowModalEdit(!showModalEdit)
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
      <Button
        buttonType="button"
        onClick={handleToggleEditModal}
        iconLeft="lum-icon-edit"
      />
      {showModalEdit &&
        <EditModal showModalEdit={showModalEdit}
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
