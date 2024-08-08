import Select from 'react-select'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useToggleModalContext } from '@/context/handleModalsContext'
import { TConfig, getComponentConfig } from '@/main'
import { TAddModalProps } from '..'
import { Form, LuminaInputRenderer } from '@/components/editor-buttons-container/inputRenderer'

type TProps = {
  setAddModalProps: Dispatch<SetStateAction<TAddModalProps>>
  modalProps: TAddModalProps
  /* eslint-disable no-unused-vars */
  handleOnChangeInput: (key: string, value: string | number) => void
}

export const AddModal = ({ setAddModalProps, modalProps, handleOnChangeInput }: TProps) => {
  const { modalState } = useToggleModalContext()
  const componentConfig = getComponentConfig()
  const { id } = modalState
  const [selectedConfig, setSelectedConfig] = useState<TConfig>()

  useEffect(() => {
    if (modalProps.selectedOption) {
      setSelectedConfig(componentConfig[modalProps.selectedOption.value].config)
    }
  }, [modalProps.selectedOption, componentConfig])

  const options = Object.entries(componentConfig).map(([, opt]) => {
    return {
      value: opt.config.type,
      label: opt.config.name,
    }
  })

  // Handler for on Change from dropdown - BM
  const handleSelectChange = (options: any) => {
    setAddModalProps({ ...modalProps, selectedOption: options, formData: {} })
  }

  // Handler for on Change from dropdown - BM
  const handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setAddModalProps({ ...modalProps, cmpName: event.target.value })
  }

  return (
    <div className='add-modal-content'>
      <Select
        id={`addComponent_dropdown_${id}`}
        value={modalProps.selectedOption}
        options={options}
        placeholder='Select a component...'
        onChange={handleSelectChange}
      />
      <div className='add-modal-content__cmp-name'>
        <label htmlFor={`addComponent_friendlyName_${id}`}>Friendly name</label>
        <input
          id={`addComponent_friendlyName_${id}`}
          type='text'
          value={modalProps.cmpName}
          onChange={handleOnChangeNewComponentFriendlyName}
        />
      </div>
      {selectedConfig && (
        <div className='add-modal-content__cmp-config'>
          <Form>
            {selectedConfig?.props?.map((configItem, index) => (
              <LuminaInputRenderer
                key={index}
                config={configItem}
                value={modalProps.formData ? modalProps.formData[configItem.name] : ''}
                handleOnChangeInput={handleOnChangeInput}
              />
            ))}
          </Form>
        </div>
      )}
    </div>
  )
}
