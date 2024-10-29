import { Button } from '@/components/button/index.js'
import { useLuminaContext } from '@/context/contextProvider.js'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { useCallback } from 'react'
import { CancelButton } from '../utils/cancelButton.js'
import { Modal } from '../utils/modal.js'

export const DELETEPAGE = 'DELETEPAGE'

export type TToggleModalDeletePageProps = {
  modalType: typeof DELETEPAGE
  id: string
}

export const DeletePageModal = () => {
  const {
    handleCloseModal,
    modalState: { id },
  } = useToggleModalContext<TToggleModalDeletePageProps>()
  const { dispatch } = useLuminaContext()

  /**
   * Adds a new page
   */
  const handleClickDeleteComponent = useCallback(() => {
    if (!id) return
    dispatch({
      type: 'deletePage',
      data: { id },
    })

    handleCloseModal()
  }, [dispatch, id])

  return (
    <Modal
      title='Delete Page'
      titleIcon='lum-icon-component'
      contentLabel='Delete a page Modal'
      content={
        <>
          <p>Are you sure you want to delete the Page {}?</p>
          <p>This action is irreversible.</p>
        </>
      }
      actions={
        <>
          <Button
            buttonType='button'
            text='Delete page'
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
