'use client'

import styles from '@/components/editor/editor.module.scss'
import { IPageData } from '@/data/data'
import { useCallback, useState } from 'react'
import { TreeView } from '../treeView/treeView'

type Props = {
  children: React.ReactNode
}

export const Editor = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggler = useCallback(
    () => {
      setIsOpen(!isOpen)
    }, [isOpen]
  )

  return (
    <div className={`${styles.editorContainer}${isOpen ? ' ' + styles.open : ''}`}>
      <div className={styles.editorBar}>
        <input type="checkbox" className={styles.toggler} onChange={handleMenuToggler}/>
        <div className={styles.hamburger}><div></div></div>
        {isOpen && (
          <TreeView/>
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}