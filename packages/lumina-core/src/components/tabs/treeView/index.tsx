import { useLuminaContext } from '@/context/contextProvider'
import { TreeviewHeader } from './treeviewHeader'
import { AddComponentButton } from '@/components/action-buttons/add'
import { SearchBar } from '@/components/search-bar'
import { ComponentTree } from './componentTree'
import { ToggleMenuContextProvider } from '@/context/toggleMenuContext'
import { Title } from '@/components/title'
import { useEffect, useState } from 'react'
import { IComponentData } from '@/models/data'

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  const [searchValue, setSearchValue] = useState<string>('')
  const [data, setData] = useState<IComponentData[]>()
  const [cringeData, setCringeData] = useState<IComponentData[]>()

  useEffect(() => {
    setData(builderDataContext.builderData[builderDataContext.selectedPage].children!)
    searchData()
  }, [builderDataContext, searchValue])

  const searchData = () => {
    if (data) {
      const resetData = data.map((el: IComponentData) => ({
        ...el,
        hasFilterChildren: false,
        isMatch: false,
      }))
      if (searchValue.length >= 3) {
        const filteredData = filterData(resetData)
        setCringeData(filteredData)
      } else {
        if (searchValue.length === 0 || searchValue.trim().length === 0) {
          setCringeData(resetData)
        }
      }
    }
  }

  const filterData = (data: IComponentData[]): IComponentData[] => {
    const searchValLower = searchValue.toLowerCase().trim()
    return data.reduce<IComponentData[]>((acc, el) => {
      const friendlyNameLower = el.friendlyName.toLowerCase()
      let matches = false

      // Check if the current element matches the search criteria
      //perfect match
      if (friendlyNameLower === searchValLower) matches = true
      // name starts with
      else if (searchValLower.length >= 3 && friendlyNameLower.startsWith(searchValLower))
        matches = true
      // name contains part of the search
      else if (searchValLower.length >= 5 && friendlyNameLower.includes(searchValLower))
        matches = true

      // boolean check to signal the filtered elements
      if (matches) el.isMatch = true

      let filteredChildren: IComponentData[] = []

      // If the current element has children, recursively filter the children
      if (el.children && el.children.length > 0) {
        filteredChildren = filterData(el.children)

        // If any child matches, include the current element with the filtered children
        if (filteredChildren.length > 0) matches = true
      }

      // If the element or its children match, include it in the results
      if (matches) {
        acc.push({
          ...el, // Create a copy of the current element
          children: filteredChildren.length > 0 ? filteredChildren : el.children, // Only update children if filtered
          hasFilterChildren: filteredChildren.length > 0,
        })
      }

      return acc
    }, [])
  }

  return (
    <ToggleMenuContextProvider>
      <div className='treeview_container'>
        <div className='treeview_header'>
          <Title content='Components' classnames='treeview_title' />
          <span className='treeAddButton'>
            <AddComponentButton buttonLabel='Add' />
          </span>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <TreeviewHeader />
        <ComponentTree data={cringeData || data || []} />
      </div>
    </ToggleMenuContextProvider>
  )
}
