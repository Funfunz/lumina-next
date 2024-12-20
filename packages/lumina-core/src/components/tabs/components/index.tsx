import { AddComponentButton } from '../../action-buttons/components/add'
import { TabHeader } from '../../tab-header'
import { useLuminaContext } from '../../../context/contextProvider'
import { ToggleMenuContextProvider } from '../../../context/toggleMenuContextProvider'
import { IData } from '../../../main'
import { IDataComponent } from '../../../models/data'
import { useState, useEffect, useCallback } from 'react'
import { ComponentTree } from './componentTree'
import { TreeviewHeader } from './treeviewHeader'
import './styles.scss'

const resetData = (components: IComponentTree[]): IComponentTree[] => {
  return components.map(component => {
    const resetedComponent = {
      ...component,
      hasFilterChildren: false,
      isMatch: false,
    }
    if (component.childrenTree) {
      resetedComponent.childrenTree = resetData(component.childrenTree)
    }
    return resetedComponent
  })
}

export type IComponentTree = {
  childrenTree?: IComponentTree[]
  hasFilterChildren?: boolean
  isMatch?: boolean
} & IDataComponent

const buildTree = (
  componentIds: string[],
  componentsList: IData['components']
): IComponentTree[] => {
  return componentIds.map(id => {
    const componentTreeItem: IComponentTree = {
      ...componentsList[id],
    }

    if (componentsList[id].children?.length) {
      componentTreeItem.childrenTree = [...buildTree(componentsList[id].children, componentsList)]
    }
    return componentTreeItem
  })
}

export const ComponentsTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()

  const [searchValue, setSearchValue] = useState<string>('')
  const [components, setComponents] = useState<IComponentTree[]>()

  useEffect(() => {
    const newComponents = buildTree(
      builderDataContext.builderData.pages[builderDataContext.selectedPage].children || [],
      builderDataContext.builderData.components
    )
    if (searchValue) {
      searchData(newComponents)
    } else {
      setComponents(newComponents)
    }
  }, [searchValue, builderDataContext])

  const searchData = (newComponents?: IComponentTree[]) => {
    if (!newComponents) return
    const resetedData = resetData(newComponents as IComponentTree[])

    if (!searchValue || searchValue.trim().length < 3) {
      setComponents(resetedData)
    } else if (searchValue.length >= 3) {
      const filteredData = filterData(resetedData)
      setComponents(filteredData)
    }
  }

  const filterData = useCallback(
    (data: IComponentTree[]): IComponentTree[] => {
      const searchValLower = searchValue.toLowerCase().trim()
      return data.reduce<IComponentTree[]>((acc, el) => {
        const friendlyNameLower = el.friendlyName.toLowerCase()

        // Check if the current element matches the search criteria
        //perfect match
        if (friendlyNameLower.includes(searchValLower)) el.isMatch = true

        let filteredChildren: IComponentTree[] = []

        // If the current element has children, recursively filter the children
        if (el.childrenTree && el.childrenTree.length > 0) {
          filteredChildren = filterData(el.childrenTree)
        }

        // If the element or its children match, include it in the results
        if (el.isMatch || filteredChildren.length) {
          acc.push({
            ...el, // Create a copy of the current element
            childrenTree: filteredChildren.length > 0 ? filteredChildren : el.childrenTree, // Only update children if filtered
            hasFilterChildren: filteredChildren.length > 0,
          })
        }

        return acc
      }, [])
    },
    [searchValue, components]
  )

  return (
    <ToggleMenuContextProvider>
      <TabHeader
        titleText='Components'
        onSearch={setSearchValue}
        actions={<AddComponentButton buttonLabel='Add' />}
      />
      <TreeviewHeader />
      {(components?.length && <ComponentTree data={components} />) || null}
    </ToggleMenuContextProvider>
  )
}
