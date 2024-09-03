import { Form, LuminaInputRenderer } from '@/components/editor-buttons-container/inputRenderer'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import type { IComponentProps } from '@/models/data'
import { Dispatch, SetStateAction } from 'react'

type TProps = {
  formData: IComponentProps | undefined
  setFormData: Dispatch<SetStateAction<IComponentProps | undefined>>
  /* eslint-disable no-unused-vars */
  handleOnChangeInput: (key: string, value: string | number) => void
}
export const EditModal = ({ formData, handleOnChangeInput }: TProps) => {
  const { modalState } = useToggleModalContext()
  const { config } = modalState

  return (
    <Form>
      {config?.props?.map((configItem, index) => (
        <LuminaInputRenderer
          key={index}
          config={configItem}
          value={formData![configItem.name] || ''}
          handleOnChangeInput={handleOnChangeInput}
        />
      ))}
    </Form>
  )
}
