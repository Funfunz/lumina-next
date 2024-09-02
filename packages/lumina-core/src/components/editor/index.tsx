'use client'

import { Button } from '../button'
import cx from 'classnames'
import { useCallback, useState } from 'react'
import { SidebarEditor } from '@/components/sidebar'

type Props = {
  children: React.ReactNode
}

export const Editor = ({ children }: Props) => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const handleMenuToggler = useCallback(() => {
    setIsBarOpen(!isBarOpen)
  }, [isBarOpen])

  const enableDebugStyles = () =>
    [].forEach.call(document.querySelectorAll('div.rendererSection *'), function (a: any) {
      a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
    })

  return (
    <div className={cx('editorContainer', { open: isBarOpen })}>
      <SidebarEditor handleToggler={handleMenuToggler} isBarOpen={isBarOpen} />
      <div className='rendererSection'>
        {children}
        <Button
          variant='default'
          className='debugStylesCta'
          onClick={() => enableDebugStyles()}
          text='Debug'
        />
      </div>
    </div>
  )
}
