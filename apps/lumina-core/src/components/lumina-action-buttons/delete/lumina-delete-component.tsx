import { Button } from "@/components/button/buttons";
import { DeleteModal } from "@/components/lumina-modals/delete/delete-modal";
import { useCallback, useState } from "react";

type TProps = {
  id: string,
  dispatch: any
}
export const DeleteComponentButton = ({ id, dispatch }: TProps) => {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleToggleDeleteModal = () => {
    setShowModalDelete(!showModalDelete)
  }

  /**
 * Deletes a component based on the ID
 */
  const handleOnClickDelete = useCallback(() => {
    dispatch({
      type: "deleteComponent",
      data: {
        id,
      },
    })
    setShowModalDelete(false)
  },
    [dispatch, id]
  )

  return (
    <><Button
      color="danger"
      onClick={handleToggleDeleteModal}
      round
      iconLeft="lumina-delete"
    />
      <DeleteModal showModalDelete={showModalDelete}
        handleCloseModal={handleToggleDeleteModal}
        handleOnClickDelete={handleOnClickDelete}
      />
    </>
  )
}