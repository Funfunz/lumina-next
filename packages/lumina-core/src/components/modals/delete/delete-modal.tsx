import { Button } from "@/components/button/button"
import { useLuminaContext } from "@/context/contextProvider"
import { DELETEMODAL, useToggleModalContext } from "@/context/handleModalsContext"
import { useCallback, useEffect, useState } from "react"
import ReactModal from "react-modal"

export const DeleteModal = () => {
  const { dispatch } = useLuminaContext()
  const { handleCloseModal, modalState } = useToggleModalContext()
  const { isOpen, id, modalType } = modalState

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  /** */
  useEffect(() => {
    setIsModalOpen(isOpen && modalType === DELETEMODAL)
  }, [modalType, isOpen])

  /**
   * Deletes a component based on the ID
   */
  const handleOnClickDelete = useCallback(() => {
    dispatch({
      type: "deleteComponent",
      data: {
        id: id!,
      },
    })
    handleCloseModal()
  },
    [dispatch, id]
  )

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isModalOpen}
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
