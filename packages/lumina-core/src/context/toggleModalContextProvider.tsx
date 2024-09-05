/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useContext, useState } from 'react'
import type { IComponentProps, IPageProps } from '../models/data'
import type { TConfig } from '@/models/editor-buttonModel'

export const ADDMODAL = 'ADD'
export const EDITMODAL = 'EDIT'
export const DELETEMODAL = 'DELETE'

type TModalComponentProps = TModalBaseProps & {
  componentProps?: IComponentProps
  onUpdate?: (data: IComponentProps) => void
}

type TModalState = TModalComponentProps &
  TModalPageProps &
  TModalBaseProps & {
    isOpen: boolean
  }

type TModalBaseProps = {
  config?: TConfig
  id?: string
  modalType: typeof ADDMODAL | typeof EDITMODAL | typeof DELETEMODAL | null
}

type TModalPageProps = TModalBaseProps & {
  pageProps?: IPageProps
  onUpdate?: (data: IPageProps) => void
}

type TToggleModalProps = TModalComponentProps | TModalPageProps

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
  handleOpenModal: (props: TToggleModalProps) => void
  handleCloseModal: () => void
  modalState: TModalState
}

const ToggleModalContext = createContext<TToggleModalContext>({
  handleCloseModal: () => null,
  handleOpenModal: () => null,
  modalState: initialModalState,
})

function isModalComponentProps(props: TToggleModalProps): props is TModalComponentProps {
  return !!(props as TModalComponentProps).componentProps
}

function isModalPageProps(props: TToggleModalProps): props is TModalPageProps {
  return !!(props as TModalPageProps).pageProps
}

export const ToggleModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<TModalState>(initialModalState)

  const handleOpenModal = (props: TToggleModalProps) => {
    if (isModalComponentProps(props)) {
      setModalState({
        componentProps: props.componentProps,
        config: props.config,
        id: props.id,
        isOpen: true,
        modalType: props.modalType,
      })
    } else if (isModalPageProps(props)) {
      setModalState({
        pageProps: props.pageProps,
        config: props.config,
        id: props.id,
        isOpen: true,
        modalType: props.modalType,
      })
    }
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
