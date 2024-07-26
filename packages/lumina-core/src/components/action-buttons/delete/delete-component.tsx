import { Button } from "@/components/button/button";
import { TLumButtonAsButton } from "@/components/button/button-models";
import { DeleteModal } from "@/components/modals/delete/delete-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { useCallback, useState } from "react";

type TProps = TLumButtonAsButton &{
  id: string,
}
export const DeleteComponentButton = ({ id }: TProps) => {
  const { dispatch } = useLuminaContext()
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
    <>
      <Button
        buttonType="button"
        style="danger"
        onClick={handleToggleDeleteModal}
        iconLeft="lum-icon-cross"
      />
      {showModalDelete &&
        <DeleteModal showModalDelete={showModalDelete}
          handleCloseModal={handleToggleDeleteModal}
          handleOnClickDelete={handleOnClickDelete}
        />
      }
    </>
  )
}
