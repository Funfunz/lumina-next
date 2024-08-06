'use client'

import { useLuminaContext } from '@/context/contextProvider'
import { TreeviewHeader } from './treeviewHeader'
import { AddComponentButton } from '@/components/action-buttons/add'
import { SearchBar } from '@/components/search-bar'
import { ComponentTree } from './componentTree'
import { ToggleMenuContextProvider } from '@/context/toggleMenuContext'
import { Title } from '@/components/title'

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()

  const cmpData = builderDataContext.builderData[builderDataContext.selectedPage].children!

  if (!cmpData) return null //TODO return an error message
  return (
    <ToggleMenuContextProvider>
      <div className='treeview_container'>
        <div className='treeview_header'>
          <Title content='Components' classnames='treeview_title' />
          <span className='treeAddButton'>
            <AddComponentButton buttonLabel='Add' />
          </span>
          <SearchBar />
        </div>
        <TreeviewHeader />
        <ComponentTree data={cmpData} />
      </div>
    </ToggleMenuContextProvider>
  )
}
