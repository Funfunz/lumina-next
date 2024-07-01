import { Button } from "@/components/button/buttons"
import ReactModal from "react-modal"
import styles from "../modals.module.scss"
import Select from "react-select"
import { configs } from "@/staticComponentsPath"
import { TSelectedOption } from "@/models/showEditModel"
import { ChangeEvent } from "react"

type TProps = {
  id: string
  showModalAdd: boolean
  handleCloseModal: () => void
  handleAddComponent: () => void
  selectedOption: TSelectedOption
  handleSelectChange: (options: any) => void
  newComponentFriendlyName: string
  handleOnChangeNewComponentFriendlyName: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AddModal = (
  { id,
    showModalAdd,
    handleCloseModal,
    handleAddComponent,
    selectedOption,
    handleSelectChange,
    newComponentFriendlyName,
    handleOnChangeNewComponentFriendlyName }: TProps) => {
  const options = Object.keys(configs).map((opt) => {
    return {
      value: opt,
      label: configs[opt].name,
    };
  });

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showModalAdd}
      contentLabel="Modal for Adding Children Components"
      className={styles.modalEdit}
      overlayClassName={styles.modalOverlay}
      role={"dialog"}
    >
      <Select
        id={`deleteComponent_dropdown_${id}`}
        value={selectedOption}
        options={options}
        placeholder="Select a component..."
        onChange={handleSelectChange}
      />
      <label htmlFor={`deleteComponent_friendlyName_${id}`}>Friendly name</label>
      <input id={`deleteComponent_friendlyName_${id}`}
        type="text"
        value={newComponentFriendlyName}
        onChange={handleOnChangeNewComponentFriendlyName} />
      <div className={styles.inlineButtons}>
        <Button
          text="Add Component"
          color="primary"
          onClick={handleAddComponent}
        />
        <Button
          text="Close Modal"
          color="secondary"
          outline
          onClick={handleCloseModal}
          iconRight="lumina-cross"
        />
      </div>
    </ReactModal>
  )
}