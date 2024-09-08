import { IPageData } from '@/models/data'
import cx from 'classnames'

type TProps = {
  data: IPageData
}

export const TreeBranch = ({ data }: TProps) => {
  return (
    <div className={'branch_container'}>
      <span className={'treeViewIcon lum-icon-component'}></span>
      <div
        className={cx('tree_head-item', {
          pointerTreeView: data.children?.length,
        })}
      >
        {data.friendlyName} - {data.route}
      </div>
    </div>
  )
}
