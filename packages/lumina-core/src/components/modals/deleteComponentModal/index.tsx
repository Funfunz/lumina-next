import { useCallback } from 'react'
import { CancelButton } from '../utils/cancelButton'
import { Modal } from '../utils/modal'
import { Button } from '../../button'
import { useLuminaContext } from '../../../context/contextProvider'
import { useToggleModalContext } from '../../../context/toggleModalContextProvider'

export const DELETECOMPONENT = 'DELETECOMPONENT'

export type TToggleModalDeleteComponentProps = {
  modalType: typeof DELETECOMPONENT
  id: string
}

export const DeleteComponentModal = () => {
  const {
    handleCloseModal,
    modalState: { id },
  } = useToggleModalContext<TToggleModalDeleteComponentProps>()
  const { dispatch } = useLuminaContext()

  /**
   * Deletes a component based on the ID
   */

  const handleClickDeleteComponent = useCallback(() => {
    dispatch({
      type: 'deleteComponent',
      data: {
        id: id!,
      },
    })
    handleCloseModal()
  }, [dispatch, id])

  return (
    <Modal
      title='Delete Component'
      titleIcon='lum-icon-cross'
      contentLabel='Delete a component Modal'
      content={
        <>
          <p>Are you sure you want to delete the Component?</p>
          <p>This action is irreversible.</p>
        </>
      }
      actions={
        <>
          <Button
            buttonType='button'
            text='Yes, delete'
            style='primary'
            size='large'
            onClick={handleClickDeleteComponent}
          />
          <CancelButton />
        </>
      }
    />
  )
}
