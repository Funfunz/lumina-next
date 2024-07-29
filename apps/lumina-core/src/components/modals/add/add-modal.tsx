import { Button } from "@/components/button/button"
import ReactModal from "react-modal"
import styles from "../modals.module.scss"
import Select from "react-select"
import { configs } from "@/staticComponentsPath"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { TSelectedOption } from "@/models/editor-buttonModel"
import { ADDMODAL, useToggleModalContext } from "@/context/toggleModalContext"
import { useLuminaContext } from "@/context/contextProvider"

export const AddModal = () => {
  const { handleCloseModal, modalState } = useToggleModalContext()
  const { dispatch } = useLuminaContext()
  const [newComponentFriendlyName, setNewComponentFriendlyName] = useState("")
  const initialSelectedOption: TSelectedOption = {
    value: "",
    label: ""
  }

  const { id, isOpen, modalType } = modalState
  const [selectedOption, setSelectedOption] = useState<TSelectedOption>(initialSelectedOption);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const options = Object.keys(configs).map((opt) => {
    return {
      value: opt,
      label: configs[opt].name,
    };
  });

  useEffect(() => {
    setIsModalOpen(isOpen && modalType === ADDMODAL)
  }, [modalType, isOpen])

  const handleAddComponent = useCallback(() => {
    if (!selectedOption) return
    handleCloseModal()
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
    [dispatch, id, newComponentFriendlyName, selectedOption, handleCloseModal]
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
    <ReactModal
      ariaHideApp={false}
      isOpen={isModalOpen}
      contentLabel="Modal for Adding Children Components"
      className={styles.modalEdit}
      overlayClassName={styles.modalOverlay}
      role={"dialog"}
    >
      <Select
        id={`addComponent_dropdown_${id}`}
        value={selectedOption}
        options={options}
        placeholder="Select a component..."
        onChange={handleSelectChange}
      />
      <label htmlFor={`addComponent_friendlyName_${id}`}>Friendly name</label>
      <input id={`addComponent_friendlyName_${id}`}
        type="text"
        value={newComponentFriendlyName}
        onChange={handleOnChangeNewComponentFriendlyName} />
      <div className={styles.inlineButtons}>
        <Button
          buttonType="button"
          text="Add Component"
          style="primary"
          onClick={handleAddComponent}
        />
        <Button
          buttonType="button"
          text="Close Modal"
          style="primary"
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
