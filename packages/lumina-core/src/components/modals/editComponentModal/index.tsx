import { Button } from '@/components/button'
import { useCallback, useState } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useLuminaContext } from '@/context/contextProvider'
import type { IComponentProps } from '@/models/data'
import { Form, LuminaInputRenderer } from '@/components/editor-buttons-container/inputRenderer'

import { Modal } from '../utils/modal'
import { CancelButton } from '../utils/cancelButton'

export const EditComponentModal = () => {
  const {
    handleCloseModal,
    modalState: { id, config, componentProps },
  } = useToggleModalContext()
  const { dispatch } = useLuminaContext()

  const [formData, setFormData] = useState<IComponentProps>(componentProps || {})

  /**
   * Updates a value of a property of a component
   * Used in both edit and add modal
   * @param key defines the name of the property, this is given by the configuration of the component
   * @param value
   */
  const handleOnChangeProps = useCallback(
    (key: string, value: string | number | boolean) => {
      console.log({
        ...formData,
        [key]: value,
      })
      setFormData({
        ...formData,
        [key]: value,
      })
    },
    [formData]
  )

  /**
   * Edits the component data
   */
  const handleClickSaveComponent = useCallback(() => {
    if (formData) {
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
  }, [formData, id, dispatch])

  return (
    <Modal
      title='Edit Component'
      titleIcon='lum-icon-edit'
      contentLabel='Edit a component Modal'
      content={
        <div className='edit-modal-content'>
          <Form>
            {config?.props?.map((configItem, index) => (
              <LuminaInputRenderer
                key={index}
                config={configItem}
                value={formData[configItem.name] || ''}
                handleOnChangeInput={handleOnChangeProps}
              />
            ))}
          </Form>
        </div>
      }
      actions={
        <>
          <Button
            buttonType='button'
            text='Save component'
            style='primary'
            size='large'
            onClick={handleClickSaveComponent}
          />
          <CancelButton />
        </>
      }
    />
  )
}
