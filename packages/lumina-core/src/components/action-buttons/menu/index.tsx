/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { useToggleMenuContext } from '@/context/toggleMenuContext'
import { Button } from '@/components/button'
import { ExpandableEditorMenu } from '@/components/expandable-editor-menu'
import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'

type TProps = {
  id: string
  data: IComponentProps
  config: TConfig
  ref: MutableRefObject<HTMLDivElement | null>
}

export const ExpandMenuButton = ({ id, data, config }: TProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()
  const [isOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    console.log('Event triggered:', e) // Check if the event is triggered

    if (!menuRef.current) {
      console.log('menuRef is null')
      return
    }

    if (!menuRef.current.contains(e.target as Node)) {
      console.log('Clicked outside menu, closing it')
      setIsMenuOpen(false)
    } else {
      console.log('Clicked inside menu, nothing happens')
    }
  }

  useEffect(() => {
    setIsMenuOpen(menuState.id === id && menuState.isOpen)
  }, [menuState.isOpen, menuState.id, id])

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
        iconLeft={'lum-icon-menu'}
        onClick={() => setIsMenuOpen(!isOpen)}
      />
      {isOpen && <ExpandableEditorMenu id={id} config={config} data={data} ref={menuRef} />}
    </>
  )
}
