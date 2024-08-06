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
        <ComponentTree
          // Confirmar se a data é undefined ou não
          data={builderDataContext.builderData[builderDataContext.selectedPage].children!}
        />
      </div>
    </ToggleMenuContextProvider>
  )
}
