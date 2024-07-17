import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { TLumButtonAsButton } from "@/components/lumina-button/lumina-button-models";
import { LuminaDeleteModal } from "@/components/lumina-modals/delete/lumina-delete-modal";
import { useLuminaContext } from "@/context/contextProvider";
import { useCallback, useState } from "react";

type TDeleteProps = TLumButtonAsButton & {
  id: string,
}
export const LuminaDeleteComponentButton = ({ id, style, className, iconLeft, iconRight, text }: TDeleteProps) => {
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
        onClick={handleToggleDeleteModal}
        style={style}
        text={text}
        iconLeft={iconLeft}
        iconRight={iconRight}
        className={className}
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
