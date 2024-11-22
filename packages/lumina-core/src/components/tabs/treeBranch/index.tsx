import type { IDataComponent, IDataPage } from '@/models/data'
import { useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { ComponentTree } from '../components/componentTree'
import { IComponentTree } from '../components'
import { mapTreeElementIcon } from '@/utils/mapTreeElementIcon'
import { getComponentConfig } from '@/main'

type TProps = {
  data: IComponentTree | IDataPage
  childrens?: IComponentTree[]
  children: React.ReactNode
  expandable: boolean
}

export const TreeBranch = ({ data, childrens, children, expandable = true }: TProps) => {
  const componentConfig = getComponentConfig()
  const editorIcon = componentConfig[data.type || '']?.config?.editor?.iconType || ''

  const [showChildren, setShowChildren] = useState<boolean>()
  useEffect(() => {
    setShowChildren((data as IDataComponent).hasFilterChildren)
  }, [(data as IDataComponent).hasFilterChildren])

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren])

  const treeElementIcon = <span className={cx(mapTreeElementIcon(editorIcon), 'treeViewIcon')} />

  const renderIcons = () => {
    if (data.children?.length && expandable) {
      return (
        <div className={cx('treeViewIcons')}>
          <span
            className={cx(
              'treeViewIcon',
              showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down',
              'treeViewPointer'
            )}
            onClick={handleTreeHeadClick}
          />
          {treeElementIcon}
        </div>
      )
    } else {
      return treeElementIcon
    }
  }

  return (
    <div className={cx('branch_container', { branch_container__filter: data.isMatch })}>
      <div className={cx('branch_row')}>
        {renderIcons()}
        <div className='tree_head-item'>{children}</div>
      </div>
      {(childrens?.length && showChildren && expandable && (
        <div className='branch_children'>
          <ComponentTree data={childrens} />
        </div>
      )) ||
        null}
    </div>
  )
}
