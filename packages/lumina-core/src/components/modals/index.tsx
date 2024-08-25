import { Button } from '@/components/button'
import ReactModal from 'react-modal'
import { useCallback, useEffect, useState } from 'react'
import type { TSelectedOption } from '@/models/editor-buttonModel'
import {
  ADDMODAL,
  DELETEMODAL,
  EDITMODAL,
  useToggleModalContext,
} from '@/context/handleModalsContext'
import { useLuminaContext } from '@/context/contextProvider'
import { Title } from '@/components/title'
import type { IComponentProps } from '@/models/data'
import { AddModal } from './add'
import { EditModal } from './edit'
import { DeleteModal } from './delete'
import cx from 'classnames'

export type TAddModalProps = {
  selectedOption: TSelectedOption | undefined
  cmpName: string
  formData: IComponentProps | undefined
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
    titleIcon: '',
  }
  const [modalData, setModalData] = useState(initialModalData)
  const [formData, setFormData] = useState<IComponentProps>()

  // Add modal props
  const initialAddState: TAddModalProps = {
    selectedOption: undefined,
    cmpName: '',
    formData: {},
  }
  const [addModalProps, setAddModalProps] = useState<TAddModalProps>(initialAddState)

  /**
   * Updates a value of a property of a component
   * Used in both edit and add modal
   * @param key defines the name of the property, this is given by the configuration of the component
   * @param value
   */
  const handleOnChangeInput = (key: string, value: string | number) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  /**
   * ADD MODE
   * addModalProps = reset when !isOpen
   * set data when isOpen
   * EDIT MODE
   * formData = data coming from context
   */
  useEffect(() => {
    if (isOpen) {
      setAddModalProps({
        ...addModalProps,
        formData,
      })
    } else {
      setAddModalProps(initialAddState)
    }
  }, [formData, isOpen])

  useEffect(() => {
    if (data) setFormData(data)
  }, [data])

  const generateId = (): string => {
    const randomString = Math.random()
      .toString(36)
      .slice(2, 10 + 2)
    return randomString
  }

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
        id: addModalProps.selectedOption.value + '_' + generateId(),
        type: addModalProps.selectedOption.value,
        friendlyName: addModalProps.cmpName,
        children: [],
        props: formData,
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
   * Set the modal's labels and click handler
   */
  useEffect(() => {
    switch (modalType) {
      case ADDMODAL:
        setModalData({
          modalName: 'Add Component',
          modalAriaLabel: 'Add a component Modal',
          modalOkButtonLabel: 'Add component',
          modalClickHandler: () => handleAddComponent(),
          titleIcon: 'lum-icon-component',
        })
        break
      case EDITMODAL:
        setModalData({
          modalName: 'Edit Component',
          modalAriaLabel: 'Edit a component Modal',
          modalOkButtonLabel: 'Save changes',
          modalClickHandler: () => handleSaveData(),
          titleIcon: 'lum-icon-edit',
        })
        break
      case DELETEMODAL:
        setModalData({
          modalName: 'Delete Component',
          modalAriaLabel: 'Delete a component Modal',
          modalOkButtonLabel: 'Yes, delete',
          modalClickHandler: () => handleDeleteComponent(),
          titleIcon: 'lum-icon-cross',
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
        return (
          <AddModal
            setAddModalProps={setAddModalProps}
            modalProps={addModalProps!}
            handleOnChangeInput={handleOnChangeInput}
          />
        )
      case EDITMODAL:
        return (
          <EditModal
            formData={formData}
            setFormData={setFormData}
            handleOnChangeInput={handleOnChangeInput}
          />
        )
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
      className='editor-modal'
      overlayClassName='modalOverlay'
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      role={'dialog'}
    >
      <div className='editor-modal_content-header'>
        <span className={cx('title-icon', modalData.titleIcon)}></span>
        <Title classnames='editor-modal_content-header__title' content={modalData.modalName} />
        <Button
          buttonType='button'
          iconLeft='lum-icon-cross'
          className='editor-modal_close-button'
          onClick={handleCloseModal}
        />
      </div>

      <div className='editor-modal_form-content'>{renderModalType()}</div>

      <div className='editor-modal_buttons-container'>
        <Button
          buttonType='button'
          text={modalData.modalOkButtonLabel}
          style='primary'
          size='large'
          onClick={modalData.modalClickHandler}
        />
        <Button
          buttonType='button'
          text='Cancel'
          style='secondary'
          size='large'
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
