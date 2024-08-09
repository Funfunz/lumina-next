import { IComponentData, IComponentProps } from '@/models/data'
import { useState, useCallback } from 'react'
import cx from 'classnames'
import { ComponentTree } from '../componentTree'
import { EditorButtonsContainer } from '@/components/editor-buttons-container'
import { DynamicComponent } from '@/components/render/dynamicComponent'

export const TreeBranch = ({ data }: { data: IComponentData; noUp: boolean; noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false)

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
    <div className='branch_container'>
      {iconChange()}
      <div
        className={cx('treeHeadItem', {
          pointerTreeView: data.children?.length,
        })}
      >
        {data.type} - {data.friendlyName || data.id}
        <EditorButtonsContainer
          id={data.id}
          inline={true}
          data={data.props as IComponentProps}
          visible={false}
          noUp={false}
          noDown={false}
          menu={false}
          config={component.config}
          hidden={false}
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
