import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";

type TToggleMenuContext = {
  handleToggleMenu: (id: string) => void
  menuState: EditorExpandMenu
}

type EditorExpandMenu = {
  id: string
  isOpen: boolean
}

const INITIALSTATE: EditorExpandMenu = {
  id: "",
  isOpen: false
}

const ToggleMenuContext = createContext<TToggleMenuContext>({
  handleToggleMenu: (id: string) => null,
  menuState: INITIALSTATE
})

export const ToggleMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<EditorExpandMenu>(INITIALSTATE)

  let previousState = useRef<EditorExpandMenu>(INITIALSTATE)

  useEffect(() => {
    previousState.current = isMenuOpen
  }, [isMenuOpen])


  const handleToggleMenu = (id: string) => {
    if (previousState.current.id === id) {
      setIsMenuOpen(INITIALSTATE)
    } else {
      setIsMenuOpen({
        id: id,
        isOpen: true
      })
    }
  }

  return (
    <ToggleMenuContext.Provider value={{ handleToggleMenu, menuState: isMenuOpen }}>
      {children}
    </ToggleMenuContext.Provider >
  )
}

export const useToggleMenuContext = () => {
  return useContext(ToggleMenuContext)
}