import { LuminaButton } from "@/components/lumina-button/lumina-button"
import ReactModal from "react-modal"
import styles from "../lumina-modals.module.scss"
import { configs } from "@/staticComponentsPath"
import { ChangeEvent } from "react"
import { TSelectedOption } from "@/models/showEditModel"
import { LuminaTextInput } from "@/components/lumina-form-components/text-input/text-input"
import { LuminaDropdownSelect } from "@/components/lumina-form-components/dropdown-select/dropdown-select"
import { LuminaTitle } from "@/components/lumina-title/lumina-title"

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

export const LuminaAddModal = (
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
      <LuminaTitle
        content="Add Component" />
      <LuminaDropdownSelect
        id={id}
        selectedOption={selectedOption}
        options={options}
        placeholder="Select a component..."
        onChange={handleSelectChange}
        label="Choose a component"
        helperText="this is just an helper string"
      />
      <LuminaTextInput
        id={id}
        value={newComponentFriendlyName}
        onChange={handleOnChangeNewComponentFriendlyName}
        label="Component's Name"
      />
      <div className={styles.inlineButtons}>
        <LuminaButton
          text="Add Component"
          color="secondary"
          outline
          onClick={handleAddComponent}
        />
        <LuminaButton
          text="Close Modal"
          color="secondary"
          outline
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
