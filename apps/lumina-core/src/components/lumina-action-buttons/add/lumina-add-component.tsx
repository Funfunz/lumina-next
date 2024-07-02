import { Button } from "@/components/button/buttons"
import { AddModal } from "@/components/lumina-modals/add/add-modal";
import { TSelectedOption } from "@/models/showEditModel";
import { ChangeEvent, useCallback, useState } from "react";

type TProps = {
  id?: string
  dispatch: any
  text?: string
}

export const AddComponentButton = ({ id, dispatch, text }: TProps) => {
  const initialSelectedOption: TSelectedOption = {
    value: "",
    label: ""
  }
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [newComponentFriendlyName, setNewComponentFriendlyName] = useState("") //friendly name - new component
  const [selectedOption, setSelectedOption] = useState<TSelectedOption>(initialSelectedOption); //dropdown - new component

  const handleToggleAddModal = () => {
    setShowModalAdd(!showModalAdd)
  }

  const handleAddComponent = useCallback(() => {
    if (!selectedOption) return
    setShowModalAdd(false)
    dispatch({
      type: "createComponent",
      data: {
        parentId: id,
        type: selectedOption.value,
        friendlyName: newComponentFriendlyName,
        children: [],
        props: {}
      }
    })
    // TODO: not implemented
    // dispatch({
    //   type: "createComponentBackend",
    //   data: {
    //     props: {},
    //     id,
    //   },
    // });
  },
    [dispatch, id, newComponentFriendlyName, selectedOption]
  )

  // Handler for on Change from dropdown - BM
  const handleSelectChange = (options: any) => {
    setSelectedOption(options)
  }

  // Handler for on Change from dropdown - BM
  const handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComponentFriendlyName(event.target.value)
  }

  return (
    <>
      <Button
        color="secondary"
        onClick={handleToggleAddModal}
        text={text}
        iconLeft="lumina-item-add"
      />

      <AddModal showModalAdd={showModalAdd}
        handleCloseModal={handleToggleAddModal}
        handleAddComponent={handleAddComponent}
        selectedOption={selectedOption}
        handleSelectChange={handleSelectChange}
        handleOnChangeNewComponentFriendlyName={handleOnChangeNewComponentFriendlyName}
        newComponentFriendlyName={newComponentFriendlyName}
        id={id}
      />
    </>
  )
}
