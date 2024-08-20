import { useEffect, useRef } from 'react'
import { useToggleMenuContext } from '@/context/toggleMenuContext'
import { Button } from '@/components/button'
import { ExpandableEditorMenu } from '@/components/expandable-editor-menu'
import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'

// type TProps = {
//   id: string
//   data: IComponentProps
//   config: TConfig
// }

// export const ExpandMenuButton = ({ id, data, config }: TProps) => {
//   const { handleToggleMenu, menuState } = useToggleMenuContext()
//   const menuRef = useRef<HTMLDivElement | null>(null)

//   // const handleClickOutside = (e: MouseEvent) => {
//   //   if (!menuRef.current) {
//   //     console.log('menuRef is null') //Reviewing ref not = null
//   //     return
//   //   }

//   //   if (!menuRef.current.contains(e.target as Node)) {
//   //     console.log('Clicked outside menu, closing it')
//   //     console.log('menuState: ', menuState)
//   //     console.log('isOpen: ', isOpen)
//   //     handleToggleMenu(id)
//   //     setIsMenuOpen(menuState.id === id && menuState.isOpen)
//   //     // setIsMenuOpen(menuState.id === id && menuState.isOpen) //usar handleToggle para fechar
//   //     //This line removed -> does not close outside, close 2nd click button. Line Present -> close outside,does not close with button
//   //   } else {
//   //     // handleToggleMenu(id) //Line present -> does not close outside, close 2nd click
//   //     console.log('Clicked inside menu, nothing happens')
//   //   }
//   // }
//   const handleClickOutside = (e: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//       console.log('Clicked outside menu, closing it')
//       console.log('menuState: ', menuState)
//       handleToggleMenu('') // Close the menu by setting the id to an empty string
//       console.log('After "" menuState: ', menuState)
//     }
//   }

//   const handleButtonClick = () => {
//     if (menuState.id === id && menuState.isOpen) {
//       console.log('Menu is open, clicking will close it')
//       console.log('menuState: ', menuState)
//       handleToggleMenu('') // Close the menu
//       console.log('After "" menuState: ', menuState)
//     } else {
//       console.log('Menu is closed, clicking will open it')
//       console.log('menuState: ', menuState)
//       handleToggleMenu(id) // Open the menu
//       console.log('After id menuState: ', menuState)
//     }
//   }
//   useEffect(() => {
//     if (menuState.id === id && menuState.isOpen) {
//       console.log('Menu is open, adding event listener')
//       console.log('menuState: ', menuState)
//       document.addEventListener('mousedown', handleClickOutside)
//     } else {
//       console.log('Menu is closed, removing event listener')
//       console.log('menuState: ', menuState)
//       document.removeEventListener('mousedown', handleClickOutside)
//     }

//     return () => {
//       console.log('cleaning menuState: ', menuState)
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [menuState.isOpen, menuState.id, id])

//   // useEffect(() => {
//   //   setIsMenuOpen(menuState.id === id && menuState.isOpen)
//   // }, [menuState.isOpen, menuState.id, id])

//   // useEffect(() => {
//   //   if (menuState.id === id && menuState.isOpen) {
//   //     console.log('Menu is open, adding event listener', isOpen)
//   //     console.log('menuState: ', menuState)
//   //     console.log('isOpen: ', isOpen)
//   //     document.addEventListener('mousedown', handleClickOutside)
//   //   } else {
//   //     console.log('Menu is closed, removing event listener', isOpen)
//   //     console.log('menuState: ', menuState)
//   //     console.log('isOpen: ', isOpen)
//   //     document.removeEventListener('mousedown', handleClickOutside)
//   //   }

//   //   return () => {
//   //     console.log('Cleaning up event listener', isOpen)
//   //     console.log('menuState: ', menuState)
//   //     console.log('isOpen: ', isOpen)
//   //     document.removeEventListener('mousedown', handleClickOutside)
//   //   }
//   // }, [menuState.isOpen, menuState.id, id])

//   return (
//     <>
//       <Button buttonType='button' iconLeft={'lum-icon-menu'} onClick={handleButtonClick} />
//       {menuState.id === id && menuState.isOpen && (
//         <ExpandableEditorMenu id={id} config={config} data={data} menuRef={menuRef} />
//       )}
//     </>
//   )
// }

type TProps = {
  id: string
  data: IComponentProps
  config: TConfig
}

export const ExpandMenuButton = ({ id, data, config }: TProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()
  const isOpen = menuState.id === id && menuState.isOpen
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    console.log('Handling click outside event...')
    console.log('Event target:', e.target)
    console.log('Menu ref:', menuRef.current)
    console.log('Button ref:', buttonRef.current)

    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      console.log('Clicked outside menu, closing it')
      handleToggleMenu('') // Close the menu
    }
  }

  const handleButtonClick = () => {
    console.log(
      isOpen ? 'Menu is open, clicking will close it' : 'Menu is closed, clicking will open it'
    )
    handleToggleMenu(isOpen ? '' : id)
  }

  useEffect(() => {
    if (isOpen) {
      console.log('Menu is open, adding event listener')
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      console.log('Menu is closed, removing event listener')
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      console.log('Cleaning up event listener')
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <Button
        buttonType='button'
        iconLeft='lum-icon-menu'
        onClick={handleButtonClick}
        ref={buttonRef}
      />
      {isOpen && <ExpandableEditorMenu id={id} config={config} data={data} menuRef={menuRef} />}
    </>
  )
}
