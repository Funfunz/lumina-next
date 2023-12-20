'use client'

import styles from '@/components/treeView/treeView.module.scss'
import { useAppContext } from '@/context/contextProvider'
import { IComponentData, IComponentProps } from '@/data/data'
import { useCallback, useState } from 'react'
import { ShowEdit } from '../showEdit/showEdit'
import { configs } from '@/staticComponentsPath'

const TreeBranch = ({data}: {data: IComponentData}) => {
  const [showChildren, setShowChildren] = useState(false)

  const handleTreeHeadClick = useCallback(
    () => {
      setShowChildren(!showChildren)
    }, [showChildren]
  )

  return (
    <div className={styles.treeContainer}>
      <div className={`${styles.treeHead}${data.children?.length && ' ' + styles.pointer || ''}`} onClick={handleTreeHeadClick}>
        {data.type} - {data.id} <ShowEdit id={data.id} inline={true} config={configs[data.type]} data={data.props as IComponentProps}/>
      </div>
      {data.children?.length && showChildren &&(
        <div className={styles.treeChildren}>
          <ComponentTree data={data.children}/>
        </div>
      ) || null}
      
    </div>
  )
}

const ComponentTree = ({data}: {data: IComponentData[]}) => {
  if (!data) return null
  return <>
     {data.map(
      (dataItem) => (
        <TreeBranch key={dataItem.id} data={dataItem}/>
      )
    )}
  </>
}

export const TreeView = () => {
  const { state: { builderDataContext }, dispatch } = useAppContext()
  const handleAddClick = useCallback(
    () => {
      dispatch({type: 'createPage', data: {name: 'testPage', friendlyName: 'Test Page'}})
    }, [dispatch]
  )
  console.log({context: builderDataContext.builderData[builderDataContext.selectedPage]})
  return (
    <>
      {Object.keys(builderDataContext.builderData).length && (
        <div>
          <h3 className={styles.treeHead}>Pages</h3>
            {Object.keys(builderDataContext.builderData).map(
              (page) => (
                <div className={styles.treeHead}key={page}>{page}</div>
              )
            )}
          <button onClick={handleAddClick}>Add</button>
        </div>
      ) || null }
      <div>
        <h3 className={styles.treeHead}>Components</h3>
        <ComponentTree data={builderDataContext.builderData[builderDataContext.selectedPage].children}/>
      </div>
    </>
  )
}