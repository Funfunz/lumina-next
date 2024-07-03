import { LuminaTitle } from "@/components/lumina-title/lumina-title"
import { Form, InputRenderer } from "@/components/showEdit/inputRenderer"
import ReactModal from "react-modal"
import styles from "../lumina-modals.module.scss"
import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { TConfig } from "@/models/showEditModel";
import { IComponentProps } from "@/data/data";
import cx from "classnames"

type TProps = {
  showModalEdit: boolean
  handleCloseModal: () => void
  handleOnClickSaveData: () => void
  handleOnChangeInput: (key: string, value: string | number) => void
  config: TConfig
  formData: IComponentProps
}

export const LuminaEditModal = (
  { showModalEdit,
    handleCloseModal,
    handleOnClickSaveData,
    handleOnChangeInput,
    config,
    formData }: TProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showModalEdit}
      contentLabel="Component editor"
      className={cx(styles.modalEdit)}
      overlayClassName={styles.modalOverlay}
    >
      <LuminaTitle title={config.name} />
      <Form>
        {config.props!.map((configItem, index) => (
          <InputRenderer
            key={index}
            config={configItem}
            value={formData[configItem.name] || ""}
            handleOnChangeInput={handleOnChangeInput}
          />
        ))}
      </Form>
      <div className={styles.inlineButtons}>
        <LuminaButton
          text="Save data"
          color="primary"
          outline
          onClick={handleOnClickSaveData}
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
