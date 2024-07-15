import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { LuminaDeleteModal } from "@/components/lumina-modals/delete/lumina-delete-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { useCallback, useState } from "react";

type TProps = {
  id: string,
}
export const LuminaDeleteComponentButton = ({ id }: TProps) => {
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
      <LuminaButton
        buttonType="button"
        style="danger"
        onClick={handleToggleDeleteModal}
        iconLeft="lum-icon-cross"
      />
      {showModalDelete &&
        <LuminaDeleteModal showModalDelete={showModalDelete}
          handleCloseModal={handleToggleDeleteModal}
          handleOnClickDelete={handleOnClickDelete}
        />
      }
    </>
  )
}
