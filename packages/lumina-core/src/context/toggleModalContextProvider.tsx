/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useContext, useState } from 'react'
import type { IComponentProps } from '../models/data'
import type { TConfig } from '@/models/editor-buttonModel'

export const ADDMODAL = 'ADD'
export const EDITMODAL = 'EDIT'
export const DELETEMODAL = 'DELETE'

type TToggleModalProps = {
  componentProps?: IComponentProps
  config?: TConfig
  onUpdate?: (data: IComponentProps) => void
  id?: string
  modalType: typeof ADDMODAL | typeof EDITMODAL | typeof DELETEMODAL | null
}

type TModalState = TToggleModalProps & {
  isOpen: boolean
}

const initialModalState: TModalState = {
  isOpen: false,
  componentProps: {},
  config: {
    name: '',
    type: '',
    editor: {
      children: false,
      editable: false,
      delete: false,
    },
  },
  id: '',
  modalType: null,
}

type TToggleModalContext = {
  handleOpenModal: ({ componentProps, config, id, modalType }: TToggleModalProps) => void
  handleCloseModal: () => void
  modalState: TModalState
}

const ToggleModalContext = createContext<TToggleModalContext>({
  handleCloseModal: () => null,
  handleOpenModal: () => null,
  modalState: initialModalState,
})

export const ToggleModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<TModalState>(initialModalState)

  const handleOpenModal = ({ id, config, componentProps, modalType }: TToggleModalProps) => {
    setModalState({
      componentProps: componentProps,
      config: config,
      id: id,
      isOpen: true,
      modalType: modalType,
    })
  }

  const handleCloseModal = () => {
    setModalState({
      ...initialModalState,
      isOpen: false,
    })
  }

  return (
    <ToggleModalContext.Provider value={{ handleCloseModal, handleOpenModal, modalState }}>
      {children}
    </ToggleModalContext.Provider>
  )
}

export const useToggleModalContext = () => {
  return useContext(ToggleModalContext)
}
