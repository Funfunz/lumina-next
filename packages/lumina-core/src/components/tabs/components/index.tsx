import { useLuminaContext } from '@/context/contextProvider'
import { TreeviewHeader } from './treeviewHeader'
import { AddComponentButton } from '@/components/action-buttons/add'
import { ComponentTree } from './componentTree'
import { ToggleMenuContextProvider } from '@/context/toggleMenuContextProvider'
import { useCallback, useEffect, useState } from 'react'
import { IComponentData } from '@/models/data'
import { TabHeader } from '@/components/tab-header'

export const ComponentsTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  const contextData = builderDataContext.builderData[builderDataContext.selectedPage].children!
  const [searchValue, setSearchValue] = useState<string>('')
  const [data, setData] = useState<IComponentData[]>(contextData)
  useEffect(() => {
    searchData()
  }, [contextData, searchValue])

  const searchData = () => {
    const resetData = contextData.map((el: IComponentData) => ({
      ...el,
      hasFilterChildren: false,
      isMatch: false,
    }))
    if (!searchValue || searchValue.trim().length < 3) {
      setData(resetData)
    } else if (searchValue.length >= 3) {
      const filteredData = filterData(resetData)
      setData(filteredData)
    }
  }

  const filterData = useCallback(
    (data: IComponentData[]): IComponentData[] => {
      const searchValLower = searchValue.toLowerCase().trim()
      return data.reduce<IComponentData[]>((acc, el) => {
        const friendlyNameLower = el.friendlyName.toLowerCase()

        // Check if the current element matches the search criteria
        //perfect match
        if (friendlyNameLower.includes(searchValLower)) el.isMatch = true

        let filteredChildren: IComponentData[] = []

        // If the current element has children, recursively filter the children
        if (el.children && el.children.length > 0) {
          filteredChildren = filterData(el.children)
        }

        // If the element or its children match, include it in the results
        if (el.isMatch || filteredChildren.length) {
          acc.push({
            ...el, // Create a copy of the current element
            children: filteredChildren.length > 0 ? filteredChildren : el.children, // Only update children if filtered
            hasFilterChildren: filteredChildren.length > 0,
          })
        }

        return acc
      }, [])
    },
    [searchValue, data]
  )

  return (
    <ToggleMenuContextProvider>
      <TabHeader
        titleText='Components'
        onSearch={setSearchValue}
        actions={<AddComponentButton buttonLabel='Add' />}
      />
      <TreeviewHeader />
      <ComponentTree data={data} />
    </ToggleMenuContextProvider>
  )
}
