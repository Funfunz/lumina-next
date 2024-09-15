import { Button } from '@/components/button'
import { useCallback } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useLuminaContext } from '@/context/contextProvider'

import { Modal } from '../utils/modal'
import { CancelButton } from '../utils/cancelButton'

export const DeleteComponentModal = () => {
  const {
    handleCloseModal,
    modalState: { id },
  } = useToggleModalContext()
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
        <div>
          <p>Are you sure you want to delete the Component?</p>
          <p>This action is irreversible.</p>
        </div>
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
