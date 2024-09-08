import { IPageData } from '@/models/data'
import { TreeBranch } from '../treeBranch'

type TProps = {
  data: IPageData[]
}

export const PageTree = ({ data }: TProps) => {
  if (data.length === 0) {
    return <p>No components were found.</p>
  }
  console.log({ data })
  return (
    <>
      {data
        .sort((a, b) => {
          if (a.route < b.route) {
            return -1
          } else if (a.route > b.route) {
            return 1
          }
          return 0
        })
        .map(dataItem => (
          <TreeBranch key={dataItem.id} data={dataItem} />
        ))}
    </>
  )
}
