import { Button } from '@/components/button'
import { useCallback } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useLuminaContext } from '@/context/contextProvider'
import { Modal } from '../utils/modal'
import { CancelButton } from '../utils/cancelButton'

export const DELETEPAGE = 'DELETEPAGE'

export type TToggleModalDeletePageProps = {
  modalType: typeof DELETEPAGE
  route: string
}

export const DeletePageModal = () => {
  const {
    handleCloseModal,
    modalState: { route },
  } = useToggleModalContext<TToggleModalDeletePageProps>()
  const { dispatch } = useLuminaContext()

  /**
   * Adds a new page
   */
  const handleClickDeleteComponent = useCallback(() => {
    if (!route) return
    console.log({ route })
    dispatch({
      type: 'deletePage',
      data: { route },
    })

    handleCloseModal()
  }, [dispatch, route])

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
