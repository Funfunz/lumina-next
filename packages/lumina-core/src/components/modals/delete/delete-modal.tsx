import { Button } from "@/components/button/button"
import ReactModal from "react-modal"

type TProps = {
  showModalDelete: boolean
  handleOnClickDelete: () => void
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
      className='modalEdit'
      overlayClassName='modalOverlay'
      role={"dialog"}
    >
      <p>Are you sure you want to delete the Component?</p>
      <p>This action is irreversible.</p>
      <div className='inlineButtons'>
        <Button
          buttonType="button"
          text="Yes"
          style="danger"
          onClick={handleOnClickDelete}
        />
        <Button
          buttonType="button"
          text="Cancel"
          style="primary"
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
