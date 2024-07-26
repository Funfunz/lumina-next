import { Button } from "@/components/button/button"
import { TLumButtonAsButton } from "@/components/button/button-models";
import { AddModal } from "@/components/modals/add/add-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { TSelectedOption } from "@/models/editor-buttonModel";
import { ChangeEvent, useCallback, useState } from "react";

type TProps = TLumButtonAsButton & {
  id?: string
  text?: string
}

export const AddComponentButton = ({ id, text }: TProps) => {
  const { dispatch } = useLuminaContext()
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
        parentId: id || '',
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
        buttonType="button"
        onClick={handleToggleAddModal}
        text={text}
        iconLeft="lum-icon-plus-fill"
      />
      {showModalAdd &&
        <AddModal showModalAdd={showModalAdd}
          handleCloseModal={handleToggleAddModal}
          handleAddComponent={handleAddComponent}
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
          handleOnChangeNewComponentFriendlyName={handleOnChangeNewComponentFriendlyName}
          newComponentFriendlyName={newComponentFriendlyName}
          id={id}
        />
      }
    </>
  )
}