import { useLuminaContext } from '@/context/contextProvider'
import { TreeviewHeader } from './treeviewHeader'
import { AddComponentButton } from '@/components/action-buttons/add'
import { SearchBar } from '@/components/search-bar'
import { ComponentTree } from './componentTree'
import { ToggleMenuContextProvider } from '@/context/toggleMenuContext'
import { Title } from '@/components/title'
import { useCallback, useState } from 'react'
import { IComponentData } from '@/models/data'

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  const cmpData = builderDataContext.builderData[builderDataContext.selectedPage].children!
  const [searchValue, setSearchValue] = useState<string>('')
  const [data, setData] = useState<IComponentData[]>(cmpData)

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

      // If the current element has children, recursively filter the children
      if (el.children && el.children.length > 0) {
        const filteredChildren = filterData(el.children)

        // If any child matches, include the current element with the filtered children
        if (filteredChildren.length > 0) {
          matches = true
          el = { ...el, children: filteredChildren, hasFilterChildren: true }
        }
      }

      // If the element or its children match, include it in the results
      if (matches) {
        acc.push(el)
      }

      return acc
    }, [])
  }

  const searchData = useCallback(() => {
    if (searchValue.trim().length === 0) {
      setData(cmpData)
      return
    }

    const filteredData = filterData(cmpData)
    setData(filteredData)
  }, [searchValue, cmpData])

  return (
    <ToggleMenuContextProvider>
      <div className='treeview_container'>
        <div className='treeview_header'>
          <Title content='Components' classnames='treeview_title' />
          <span className='treeAddButton'>
            <AddComponentButton buttonLabel='Add' />
          </span>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onClickSearch={searchData}
          />
        </div>
        <TreeviewHeader />
        <ComponentTree data={data} />
      </div>
    </ToggleMenuContextProvider>
  )
}
