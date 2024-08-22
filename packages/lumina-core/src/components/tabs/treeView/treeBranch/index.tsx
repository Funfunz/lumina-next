import { IComponentData, IComponentProps } from '@/models/data'
import { useState, useEffect } from 'react'
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

  const handleTreeHeadClick = () => {
    setShowChildren(!showChildren)
  }

  const iconChange = () => {
    if (data.children?.length) {
      return (
        <span
          className={cx(
            'tree-branch__icon',
            'tree-branch__icon_pointer',
            showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down'
          )}
          onClick={handleTreeHeadClick}
        ></span>
      )
    } else {
      return <span className='tree-branch__icon lum-icon-component'></span>
    }
  }

  // TODO temporary workaround for missing config
  const component = DynamicComponent(data.type)
  if (!component) return null //TODO data should return true always but if not an error should be returned here

  return (
    <div className={cx('tree-branch', data.isMatch ? 'tree-branch_filter' : '')}>
      <div className='tree-branch__container'>
        {iconChange()}
        <div className='tree-branch__item'>
          <span>
            {data.type} - {data.friendlyName || data.id}
          </span>
          <EditorButtonsContainer
            id={data.id}
            inline={true}
            data={data.props as IComponentProps}
            visible={false}
            noUp={noUp}
            noDown={noDown}
            menu={false}
            config={component.config}
            hidden={data.hidden}
          />
        </div>
      </div>
      {(data.children?.length && showChildren && (
        <div className='tree-branch__children'>
          <ComponentTree data={data.children} />
        </div>
      )) ||
        null}
    </div>
  )
}
