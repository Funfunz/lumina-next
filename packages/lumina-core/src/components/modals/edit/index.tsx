
import { Form, LuminaInputRenderer } from "@/components/editor-buttons-container/inputRenderer"
import { useToggleModalContext } from "@/context/handleModalsContext"
import { IComponentProps } from "@/models/data"
import { Dispatch, SetStateAction, useCallback, useState } from "react"

type TProps = {
  formData: IComponentProps | undefined
  setFormData: Dispatch<SetStateAction<IComponentProps | undefined>>
}
export const EditModal = ({ formData, setFormData }: TProps) => {
  const { modalState } = useToggleModalContext()
  const { config } = modalState

  /**
   * 
   */
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
    <Form>
      {config?.props?.map((configItem, index) => (
        <LuminaInputRenderer
          key={index}
          config={configItem}
          value={formData![configItem.name] || ""}
          handleOnChangeInput={handleOnChangeInput}
        />
      ))}
    </Form>
  )
}