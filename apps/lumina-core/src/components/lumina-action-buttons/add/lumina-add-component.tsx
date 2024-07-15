import { LuminaButton } from "@/components/lumina-button/lumina-button"
import { LuminaAddModal } from "@/components/lumina-modals/add/lumina-add-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { TSelectedOption } from "@/models/showEditModel";
import { ChangeEvent, useCallback, useState } from "react";

type TProps = {
  id: string
  text?: string
}

export const LuminaAddComponentButton = ({ id, text }: TProps) => {
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
  const handleSelectChange = (option: TSelectedOption) => {
    setSelectedOption(option)
  }

  // Handler for on Change from dropdown - BM
  const handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComponentFriendlyName(event.target.value)
  }

  return (
    <>
      <LuminaButton
        buttonType="button"
        onClick={handleToggleAddModal}
        text={text}
        iconLeft="lum-icon-plus-fill"
      />
      {showModalAdd &&
        <LuminaAddModal showModalAdd={showModalAdd}
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
