import { Button } from '@/components/button/index.js'
import { LuminaInputRenderer } from '@/components/editor-buttons-container/inputRenderer.js'
import { useLuminaContext } from '@/context/contextProvider.js'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { TConfig } from '@/main.js'
import { IComponentProps } from '@/models/data.js'
import { useState, useCallback } from 'react'
import { Form } from 'react-hook-form'
import { CancelButton } from '../utils/cancelButton.js'
import { Modal } from '../utils/modal.js'

export const EDITCOMPONENT = 'EDITCOMPONENT'

export type TToggleModalEditComponentProps = {
  modalType: typeof EDITCOMPONENT
  id: string
  config: TConfig
  componentProps?: IComponentProps
  onUpdate?: (data: IComponentProps) => void
}

export const EditComponentModal = () => {
  const {
    handleCloseModal,
    modalState: { id, config, componentProps },
  } = useToggleModalContext<TToggleModalEditComponentProps>()
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
