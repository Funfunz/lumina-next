import type { IDataComponent, IDataPage } from '@/models/data'
import { useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { ComponentTree } from '../components/componentTree'
import { IComponentTree } from '../components'

type TProps = {
  data: IComponentTree | IDataPage
  childrens?: IComponentTree[]
  children: React.ReactNode
  expandable: boolean
}

export const TreeBranch = ({ data, childrens, children, expandable = true }: TProps) => {
  const [showChildren, setShowChildren] = useState<boolean>()

  useEffect(() => {
    setShowChildren((data as IDataComponent).hasFilterChildren)
  }, [(data as IDataComponent).hasFilterChildren])

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren])

  const iconChange = () => {
    if (data.children?.length && expandable) {
      return (
        <span
          className={cx(
            'treeViewIcon',
            showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down',
            'treeViewPointer'
          )}
          onClick={handleTreeHeadClick}
        ></span>
      )
    } else {
      return <span className={cx('treeViewIcon', 'lum-icon-component')}></span>
    }
  }

  return (
    <div className={cx('branch_container', { branch_container__filter: data.isMatch })}>
      {iconChange()}
      <div className='tree_head-item'>{children}</div>
      {(childrens?.length && showChildren && expandable && (
        <div className='branch_children'>
          <ComponentTree data={childrens} />
        </div>
      )) ||
        null}
    </div>
  )
}
