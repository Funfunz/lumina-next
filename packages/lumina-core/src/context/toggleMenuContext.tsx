import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";

type TToggleMenuContext = {
  handleToggleMenu: (id: string) => void
  menuState: EditorExpandMenu
}

type EditorExpandMenu = {
  id: string
  isOpen: boolean
}

const initialMenuState: EditorExpandMenu = {
  id: "",
  isOpen: false
}

const ToggleMenuContext = createContext<TToggleMenuContext>({
  handleToggleMenu: (id: string) => null,
  menuState: initialMenuState
})

export const ToggleMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState<EditorExpandMenu>(initialMenuState)

  let previousState = useRef<EditorExpandMenu>(initialMenuState)

  useEffect(() => {
    previousState.current = menuState
  }, [menuState])


  const handleToggleMenu = (id: string) => {
    if (previousState.current.id === id) {
      setMenuState(initialMenuState)
    } else {
      setMenuState({
        id: id,
        isOpen: true
      })
    }
  }

  return (
    <ToggleMenuContext.Provider value={{ handleToggleMenu, menuState }}>
      {children}
    </ToggleMenuContext.Provider >
  )
}

export const useToggleMenuContext = () => {
  return useContext(ToggleMenuContext)
}