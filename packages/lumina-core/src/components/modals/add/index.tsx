/* eslint-disable no-unused-vars */
import Select from "react-select"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { TSelectedOption } from "@/models/editor-buttonModel"
import { useToggleModalContext } from "@/context/handleModalsContext"
import { getComponentConfig } from "@/main"
import { TAddModalProps } from ".."

type TProps = {
  handleModalProps: Dispatch<SetStateAction<TAddModalProps>>
  modalProps: TAddModalProps
}

export const AddModal = ({ handleModalProps, modalProps }: TProps) => {
  const { modalState } = useToggleModalContext()
  const componentConfig = getComponentConfig()
  const { id } = modalState

  const options = Object.entries(componentConfig).map(([label, opt]) => {
    return {
      value: opt.config.name,
      label: opt.config.name,
    };
  });


  // Handler for on Change from dropdown - BM
  const handleSelectChange = (options: any) => {
    handleModalProps({ ...modalProps, selectedOption: options })
  }

  // Handler for on Change from dropdown - BM
  const handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    handleModalProps({ ...modalProps, cmpName: event.target.value })
  }

  return (
    <>
      <Select
        id={`addComponent_dropdown_${id}`}
        value={modalProps.selectedOption}
        options={options}
        placeholder="Select a component..."
        onChange={handleSelectChange}
      />
      <label htmlFor={`addComponent_friendlyName_${id}`}>Friendly name</label>
      <input id={`addComponent_friendlyName_${id}`}
        type="text"
        value={modalProps.cmpName}
        onChange={handleOnChangeNewComponentFriendlyName} />
    </>
  )
}