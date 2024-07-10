import { LuminaButton } from "@/components/lumina-button/lumina-button"
import ReactModal from "react-modal"
import styles from "../lumina-modals.module.scss"

type TProps = {
  showModalDelete: boolean
  handleOnClickDelete: () => void
  handleCloseModal: () => void
}

export const LuminaDeleteModal = (
  { showModalDelete,
    handleCloseModal,
    handleOnClickDelete
  }: TProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showModalDelete}
      contentLabel="Component Deletion"
      className={styles.modalEdit}
      overlayClassName={styles.modalOverlay}
      role={"dialog"}
    >
      <p>Are you sure you want to delete the Component?</p>
      <p>This action is irreversible.</p>
      <div className={styles.inlineButtons}>
        <LuminaButton
          buttonType="button"
          text="Yes"
          style="danger"
          onClick={handleOnClickDelete}
        />
        <LuminaButton
          buttonType="button"
          text="Cancel"
          style="primary"
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
