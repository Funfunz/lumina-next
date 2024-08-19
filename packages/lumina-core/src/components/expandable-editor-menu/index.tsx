/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'
import { AddComponentButton } from '../action-buttons/add'
import { EditComponentButton } from '../action-buttons/edit'
import { Button } from '../button'
import { DeleteComponentButton } from '../action-buttons/delete'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useToggleMenuContext } from '@/context/toggleMenuContext'

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
  ref: MutableRefObject<HTMLDivElement | null>
}

/**
 * Expandable editor menu for the treeview
 * @param id the component id to be edited
 * @param config the component's config for the lumina editor
 * @param data the editable data from the component
 * @returns
 */
export const ExpandableEditorMenu = ({ id, config, data }: TMenuProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()
  const [isOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    console.log('Event triggered:', e)

    if (!menuRef.current) {
      console.log('menuRef is null') //Getting this log when click outside
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
      console.log('Menu is open, adding event listener', isOpen)
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      console.log('Menu is closed, removing event listener', isOpen)
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      console.log('Cleaning up event listener', isOpen)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className='expandable_editor_menu' ref={menuRef}>
      <AddComponentButton
        componentId={id}
        buttonLabel='Add Children'
        isDisabled={!config.editor.children}
        isMenuButton
      />
      <EditComponentButton
        buttonLabel='Edit'
        componentId={id}
        config={config}
        data={data}
        isDisabled={!config.editor.editable}
        isMenuButton
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Cut'
        iconLeft='lum-icon-cut'
        disabled={true}
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Copy'
        iconLeft='lum-icon-clone'
        disabled={true}
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Paste'
        iconLeft='lum-icon-paste'
        disabled={true}
      />
      <DeleteComponentButton
        buttonLabel='Delete'
        componentId={id}
        isDisabled={!config.editor.delete}
        isMenuButton
      />
    </div>
  )
}
