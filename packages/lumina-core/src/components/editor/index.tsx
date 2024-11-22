'use client'
import cx from 'classnames'
import { useCallback, useState } from 'react'
import { SidebarEditor } from '../sidebar'

type Props = {
  children: React.ReactNode
}

export const Editor = ({ children }: Props) => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const handleMenuToggler = useCallback(() => {
    setIsBarOpen(!isBarOpen)
  }, [isBarOpen])

  return (
    <div className={cx('editorContainer', { open: isBarOpen })}>
      <SidebarEditor handleToggler={handleMenuToggler} isBarOpen={isBarOpen} />
      <div className='rendererSection'>{children}</div>
    </div>
  )
}
