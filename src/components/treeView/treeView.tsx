'use client'

import styles from '@/components/treeView/treeView.module.scss'
import { IComponentData } from '@/data/data'
import { MouseEvent, useCallback, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const TreeBranch = ({data}: {data: IComponentData}) => {
  const [showChildren, setShowChildren] = useState(false)

  const handleTreeHeadClick = useCallback(
    () => {
      setShowChildren(!showChildren)
    }, [showChildren]
  )

  const handleRemoveClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      alert('remove')
    }, []
  )

  return (
    <div className={styles.treeContainer}>
      <div className={`${styles.treeHead}${data.children?.length && ' ' + styles.pointer || ''}`} onClick={handleTreeHeadClick}>
        {data.type} - {data.id} <span onClick={handleRemoveClick}>Remove</span>
      </div>
      {data.children?.length && showChildren &&(
        <div className={styles.treeChildren}>
          <TreeView data={data.children}/>
        </div>
      ) || null}
      
    </div>
  )
}

export const TreeView = ({
  data
}: {
  data: IComponentData[]
}) => {
  return (
    <>
      {data.map(
        (dataItem) => (
          <TreeBranch data={dataItem}/>
        )
      )}
    </>
    
  )
}