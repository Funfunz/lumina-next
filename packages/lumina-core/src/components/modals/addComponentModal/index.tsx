import { Button } from '@/components/button'
import { ChangeEvent, useCallback, useState } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useLuminaContext } from '@/context/contextProvider'
import type { IComponentProps } from '@/models/data'
import { Form, LuminaInputRenderer } from '@/components/editor-buttons-container/inputRenderer'
import { Input } from '@/components/form-components/input'
import { getComponentConfig, TConfig } from '@/main'
import { TSelectedOption } from '@/models/editor-buttonModel'
import Select, { type SingleValue } from 'react-select'
import { Modal } from '../utils/modal'
import { CancelButton } from '../utils/cancelButton'
import { generateId } from '../utils'

export const AddComponentModal = () => {
  const {
    handleCloseModal,
    modalState: { id },
  } = useToggleModalContext()
  const { dispatch } = useLuminaContext()
  const [selectedConfig, setSelectedConfig] = useState<TConfig>()
  const [selectedOption, setSelectedOption] = useState<TSelectedOption>()
  const [friendlyName, setFriendlyName] = useState('')
  const componentConfig = getComponentConfig()

  const options = Object.entries(componentConfig).map(([, opt]) => {
    return {
      value: opt.config.type,
      label: opt.config.name,
    }
  })

  const [formData, setFormData] = useState<IComponentProps>({})

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
   * Adds a new component
   * If the Id is undefined the component is added to the root of the page,
   * if Id exists it's added to the parent matching the Id provided
   */
  const handleClickAddComponent = useCallback(() => {
    if (!selectedOption?.value) return
    dispatch({
      type: 'createComponent',
      data: {
        parentId: id || '',
        id: selectedOption.value + '_' + generateId(),
        type: selectedOption.value,
        friendlyName: friendlyName,
        children: [],
        props: formData,
      },
    })

    handleCloseModal()
  }, [dispatch, id, handleCloseModal, friendlyName, formData])

  const handleSelectedOptionChange = useCallback((option: SingleValue<TSelectedOption>) => {
    if (option) {
      setSelectedOption(option)
      setFormData({})
      setSelectedConfig(componentConfig[option.value].config)
    }
  }, [])

  // Handler for on Change from dropdown - BM
  const handleOnChangeFriendlyName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFriendlyName(event.target.value)
  }, [])

  return (
    <Modal
      title='Add Component'
      titleIcon='lum-icon-component'
      contentLabel='Add a component Modal'
      content={
        <div className='add-modal-content'>
          <Select
            id={`addComponent_dropdown_${id}`}
            value={selectedOption}
            options={options}
            placeholder='Select a component...'
            onChange={handleSelectedOptionChange}
          />
          <div className='add-modal-content__cmp-name'>
            <label htmlFor={`addComponent_friendlyName_${id}`}>Friendly name</label>
            <Input
              id={`addComponent_friendlyName_${id}`}
              type='text'
              value={friendlyName}
              onChange={handleOnChangeFriendlyName}
            />
          </div>
          {selectedConfig && (
            <div className='add-modal-content__cmp-config'>
              <Form>
                {selectedConfig?.props?.map((configItem, index) => (
                  <LuminaInputRenderer
                    key={index}
                    config={configItem}
                    value={formData[configItem.name] || ''}
                    handleOnChangeInput={handleOnChangeProps}
                  />
                ))}
              </Form>
            </div>
          )}
        </div>
      }
      actions={
        <>
          <Button
            buttonType='button'
            text='Add component'
            style='primary'
            size='large'
            onClick={handleClickAddComponent}
          />
          <CancelButton />
        </>
      }
    />
  )
}
