'use client'

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
  const [cmpsData, setCmpsData] = useState<IComponentData[]>()

  useEffect(() => {
    if (
      builderDataContext.builderData &&
      builderDataContext.selectedPage &&
      builderDataContext.builderData[builderDataContext.selectedPage].children
    ) {
      setCmpsData(builderDataContext.builderData[builderDataContext.selectedPage].children)
    }
  }, [])

  if (!cmpsData) return null

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
          data={cmpsData}
        />
      </div>
    </ToggleMenuContextProvider>
  )
}
