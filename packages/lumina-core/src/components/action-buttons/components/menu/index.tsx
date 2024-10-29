import { useEffect, useRef } from 'react'
import { useToggleMenuContext } from '@/context/toggleMenuContextProvider.js'
import { Button } from '@/components/button/index.js'
import { ExpandableEditorMenu } from '@/components/expandable-editor-menu/index.js'
import type { IComponentProps } from '@/models/data.js'
import type { TConfig } from '@/models/editor-buttonModel.js'

type TProps = {
  id: string
  componentProps?: IComponentProps
  config: TConfig
}

export const ExpandMenuButton = ({ id, componentProps, config }: TProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()
  const isOpen = menuState.id === id && menuState.isOpen
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    const hasMenuTarget = menuRef?.current?.contains(e.target as Node)
    const hasButtonTarget = buttonRef?.current?.contains(e.target as Node)

    if (!hasMenuTarget && !hasButtonTarget) {
      handleToggleMenu('')
    }
  }

  const handleButtonClick = () => {
    handleToggleMenu(isOpen ? '' : id)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
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
      {isOpen && (
        <ExpandableEditorMenu
          id={id}
          config={config}
          componentProps={componentProps}
          menuRef={menuRef}
        />
      )}
    </>
  )
}
