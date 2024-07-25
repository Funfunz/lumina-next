import { Button } from "@/components/button/button"
import ReactModal from "react-modal"
import styles from "../modals.module.scss"
import Select from "react-select"
import { configs } from "@/staticComponentsPath"
import { ChangeEvent } from "react"
import { TSelectedOption } from "@/models/editor-buttonModel"

type TProps = {
  id?: string
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

  console.log("show modal:", showModalAdd)

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
