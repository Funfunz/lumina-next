import { ReactNode, createContext, useContext, useState } from "react"
import { IComponentProps } from "../models/data"
import { TConfig } from "@/models/editor-buttonModel"

export const ADDMODAL = "ADD"
export const EDITMODAL = "EDIT"
export const DELETEMODAL = "DELETE"

type TToggleModalProps = {
  data?: IComponentProps
  config?: TConfig
  onUpdate?: ({ ...args }: IComponentProps) => void
  id?: string
  modalType: typeof ADDMODAL | typeof EDITMODAL | typeof DELETEMODAL | null
}

type TModalState = TToggleModalProps & {
  isOpen: boolean
}

const initialModalState: TModalState = {
  isOpen: false,
  data: {},
  config: {
    name: "",
    editor: {
      children: false,
      editable: false,
      delete: false
    }
  },
  id: "",
  modalType: null
}

type TToggleModalContext = {
  handleOpenModal: ({ ...args }: TToggleModalProps) => void
  handleCloseModal: () => void
  modalState: TModalState
}

const ToggleModalContext = createContext<TToggleModalContext>({
  handleCloseModal: () => null,
  handleOpenModal: () => null,
  modalState: initialModalState
})

export const ToggleModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<TModalState>(initialModalState)

  const handleOpenModal = ({ id, config, data, modalType }: TToggleModalProps) => {
    setModalState({
      data,
      config,
      id,
      isOpen: true,
      modalType
    })
  }

  const handleCloseModal = () => {
    setModalState({
      ...modalState,
      isOpen: false
    })
  }

  console.log("modalState:", modalState)

  return (
    <ToggleModalContext.Provider value={{ handleCloseModal, handleOpenModal, modalState }}>
      {children}
    </ToggleModalContext.Provider>
  )
}

export const useToggleModalContext = () => {
  return useContext(ToggleModalContext)
}