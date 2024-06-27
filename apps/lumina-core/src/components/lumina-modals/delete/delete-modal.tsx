import { Button } from "@/components/button/buttons"
import ReactModal from "react-modal"
import styles from "../modals.module.scss"

type TProps = {
  showModalDelete: boolean
  handleOnClickDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleCloseModal: () => void
}

export const DeleteModal = (
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
        <Button
          text="Yes"
          color="danger"
          onClick={handleOnClickDelete}
        />
        <Button
          text="Cancel"
          color="secondary"
          outline
          onClick={handleCloseModal}
          iconRight="lumina-cross"
        />
      </div>
    </ReactModal>
  )
}