import { IComponentData } from '@/models/data'
import { useState, useEffect, useCallback } from 'react'
import cx from 'classnames'
import { ComponentTree } from '../componentTree'
import { EditorButtonsContainer } from '@/components/editor-buttons-container'
import { DynamicComponent } from '@/components/render/dynamicComponent'

type TProps = {
  data: IComponentData
  noDown: boolean
  noUp: boolean
}

export const TreeBranch = ({ data, noDown, noUp }: TProps) => {
  const [showChildren, setShowChildren] = useState<boolean>()

  useEffect(() => {
    setShowChildren(data.hasFilterChildren)
  }, [data.hasFilterChildren])

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren])

  const iconChange = () => {
    if (data.children?.length) {
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

  // TODO temporary workaround for missing config
  const component = DynamicComponent(data.type)
  if (!component) return null //TODO data should return true always but if not an error should be returned here
  return (
    <div className={cx('branch_container', data.isMatch ? 'branch_container__filter' : '')}>
      {iconChange()}
      <div
        className={cx('tree_head-item', {
          pointerTreeView: data.children?.length,
        })}
      >
        {data.type} - {data.friendlyName || data.id}
        <EditorButtonsContainer
          id={data.id}
          inline={true}
          componentProps={data.props}
          currentPosition={data.order}
          visible={false}
          noUp={noUp}
          noDown={noDown}
          menu={false}
          config={component.config}
          hidden={data.hidden}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className='branch_children'>
          <ComponentTree data={data.children} />
        </div>
      )) ||
        null}
    </div>
  )
}
