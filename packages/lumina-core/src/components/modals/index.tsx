import { Button } from '@/components/button'
import ReactModal from 'react-modal'
import { useCallback, useEffect, useState } from 'react'
import { TSelectedOption } from '@/models/editor-buttonModel'
import {
  ADDMODAL,
  DELETEMODAL,
  EDITMODAL,
  useToggleModalContext,
} from '@/context/handleModalsContext'
import { useLuminaContext } from '@/context/contextProvider'
import { Title } from '@/components/title'
import { IComponentProps } from '@/models/data'
import { AddModal } from './add'
import { EditModal } from './edit'
import { DeleteModal } from './delete'

export type TAddModalProps = {
  selectedOption: TSelectedOption | undefined
  cmpName: string
}

export const EditorModal = () => {
  const { handleCloseModal, modalState } = useToggleModalContext()
  const { dispatch } = useLuminaContext()
  const { id, isOpen, modalType, onUpdate, data } = modalState

  const initialModalData = {
    modalName: '',
    modalAriaLabel: '',
    modalOkButtonLabel: '',
    modalClickHandler: () => {},
  }
  const [modalData, setModalData] = useState(initialModalData)

  // Add modal props
  const initialAddState: TAddModalProps = {
    selectedOption: undefined,
    cmpName: '',
  }
  const [addModalProps, setAddModalProps] = useState<TAddModalProps>(initialAddState)

  // Edit modal props
  const [formData, setFormData] = useState<IComponentProps>()
  useEffect(() => {
    if (data) setFormData(data)
  }, [data])

  /**
   * Adds a new component
   * If the Id is undefined the component is added to the root of the page,
   * if Id exists it's added to the parent matching the Id provided
   */
  const handleAddComponent = useCallback(() => {
    if (!addModalProps.selectedOption?.value) return
    dispatch({
      type: 'createComponent',
      data: {
        parentId: id || '',
        id: (Math.floor(Math.random() * 100) + 1).toString(),
        type: addModalProps.selectedOption?.value,
        friendlyName: addModalProps.cmpName,
        children: [],
        props: {},
      },
    })
    // TODO: not implemented
    // dispatch({
    //   type: "createComponentBackend",
    //   data: {
    //     props: {},
    //     id,
    //   },
    // });
    setAddModalProps(initialAddState)
    handleCloseModal()
  }, [dispatch, id, handleCloseModal, addModalProps])

  /**
   * Edits the component data
   */
  const handleSaveData = useCallback(() => {
    if (formData) {
      onUpdate && onUpdate(formData)
      dispatch({
        type: 'updateBackend',
        data: {
          props: formData,
          id: id!,
        },
      })
      dispatch({
        type: 'updateComponent',
        data: {
          newProps: formData,
          id: id!,
        },
      })
      handleCloseModal()
    } else
      (error: any) => {
        throw error
      }
  }, [formData, onUpdate, id, dispatch])

  /**
   * Deletes a component based on the ID
   */
  const handleDeleteComponent = useCallback(() => {
    dispatch({
      type: 'deleteComponent',
      data: {
        id: id!,
      },
    })
    handleCloseModal()
  }, [dispatch, id])

  /**
   * Set the modal labels and click handler
   */
  useEffect(() => {
    switch (modalType) {
      case ADDMODAL:
        setModalData({
          modalName: 'Add Component',
          modalAriaLabel: 'Add a component Modal',
          modalOkButtonLabel: 'Add component',
          modalClickHandler: () => handleAddComponent(),
        })
        break
      case EDITMODAL:
        setModalData({
          modalName: 'Edit Component',
          modalAriaLabel: 'Edit a component Modal',
          modalOkButtonLabel: 'Save changes',
          modalClickHandler: () => handleSaveData(),
        })
        break
      case DELETEMODAL:
        setModalData({
          modalName: 'Delete Component',
          modalAriaLabel: 'Delete a component Modal',
          modalOkButtonLabel: 'Yes, delete',
          modalClickHandler: () => handleDeleteComponent(),
        })
        break
      default:
        null
    }
  }, [modalType, isOpen, handleAddComponent, handleDeleteComponent, handleSaveData])

  /**
   * Renders the content for the type of modal
   * @returns the content for the modal
   */
  const renderModalType = () => {
    switch (modalType) {
      case ADDMODAL:
        return <AddModal handleModalProps={setAddModalProps} modalProps={addModalProps!} />
      case EDITMODAL:
        return <EditModal formData={formData} setFormData={setFormData} />
      case DELETEMODAL:
        return <DeleteModal />
      default:
        return null
    }
  }

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel={modalData.modalAriaLabel}
      className="editor-modal"
      overlayClassName="modalOverlay"
      role={'dialog'}
    >
      <div className="editor-modal_content-header">
        <Title content={modalData.modalName} />
        <Button
          buttonType="button"
          iconLeft="lum-icon-cross"
          className="editor-modal_close-button"
          onClick={handleCloseModal}
          style="primary"
        />
      </div>

      <div className="editor-modal_form-content">{renderModalType()}</div>

      <div className="editor-modal_buttons-container">
        <Button
          buttonType="button"
          text={modalData.modalOkButtonLabel}
          style="primary"
          onClick={modalData.modalClickHandler}
        />
        <Button buttonType="button" text="Cancel" style="secondary" onClick={handleCloseModal} />
      </div>
    </ReactModal>
  )
}