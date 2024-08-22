import { IComponentData } from '@/models/data'
import { TreeBranch } from '../treeBranch'

type TProps = {
  data: IComponentData[]
}

export const ComponentTree = ({ data }: TProps) => {
  if (data.length === 0) {
    return <p>No components were found.</p>
  }
  return (
    <div className='tree-root'>
      <span className='lum-icon-page tree-branch__icon'></span>
      <div className='tree-root__content'>
        <span>root</span>
      </div>
      {data
        .sort((a, b) => {
          if (a.order < b.order) {
            return -1
          } else if (a.order > b.order) {
            return 1
          }
          return 0
        })
        .map((dataItem, index) => (
          <TreeBranch
            key={dataItem.id}
            data={dataItem}
            noUp={index === 0}
            noDown={index === data.length - 1}
          />
        ))}
    </div>
  )
}
