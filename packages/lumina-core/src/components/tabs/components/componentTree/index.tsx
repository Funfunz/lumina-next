import { TreeBranch } from '../../treeBranch'
import { EditorButtonsContainer } from '@/components/editor-buttons-container'
import { DynamicComponent } from '@/components/render/dynamicComponent'
import { IComponentTree } from '..'

type TProps = {
  data: IComponentTree[]
}

export const ComponentTree = ({ data }: TProps) => {
  if (data.length === 0) {
    return <p>No components were found.</p>
  }
  return (
    <>
      {data
        .sort((a, b) => {
          if (a.order < b.order) {
            return -1
          } else if (a.order > b.order) {
            return 1
          }
          return 0
        })
        .map((dataItem, index) => {
          const component = DynamicComponent(dataItem.type)
          if (!component) return null //TODO data should return true always but if not an error should be returned here
          return (
            <TreeBranch
              key={dataItem.id}
              data={dataItem}
              expandable={true}
              childrens={dataItem.childrenTree}
            >
              {dataItem.type} - {dataItem.friendlyName || dataItem.id}
              <EditorButtonsContainer
                id={dataItem.id}
                inline={true}
                componentProps={dataItem.props}
                currentPosition={dataItem.order}
                visible={false}
                noUp={index === 0}
                noDown={index === data.length - 1}
                menu={false}
                config={component.config}
                hidden={dataItem.hidden}
              />
            </TreeBranch>
          )
        })}
    </>
  )
}
