import { type ReactNode, createContext, useContext, useState } from 'react'

type TModalState = {
  isOpen: boolean
}

const initialModalState: TModalState = {
  isOpen: false,
}

type TToggleModalContext<T = Record<string, unknown>> = {
  handleOpenModal: (data: T) => void
  handleCloseModal: () => void
  modalState: T
}

const ToggleModalContext = createContext<TToggleModalContext>({
  handleCloseModal: () => null,
  handleOpenModal: () => null,
  modalState: initialModalState,
})

export const ToggleModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<TModalState>(initialModalState)

  const handleOpenModal = (props: Record<string, unknown>) => {
    setModalState({
      ...props,
      isOpen: true,
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

export function useToggleModalContext<T = TModalState>() {
  return useContext(ToggleModalContext) as TToggleModalContext<T>
}
