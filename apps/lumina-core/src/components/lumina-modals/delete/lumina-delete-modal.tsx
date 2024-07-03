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
          text="Yes"
          color="danger"
          outline
          onClick={handleOnClickDelete}
        />
        <LuminaButton
          text="Cancel"
          color="secondary"
          outline
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
