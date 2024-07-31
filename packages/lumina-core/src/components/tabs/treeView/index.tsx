"use client"

import { useLuminaContext } from "@/context/contextProvider"
import { TreeviewHeader } from "./treeviewHeader"
import { AddComponentButton } from "@/components/action-buttons/add"
import { SearchBar } from "@/components/search-bar"
import { ComponentTree } from "./componentTree"
import { ToggleMenuContextProvider } from "@/context/toggleMenuContext"

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  return (
    <ToggleMenuContextProvider>
      <div className='treeviewContainer'>
        <div className='treeHead'>
          <h3 className='treeTitle'>Components</h3>
          <span className='treeAddButton'>
            <AddComponentButton buttonLabel="Add" />
          </span>
        </div>
        <SearchBar />
        <TreeviewHeader />
        <div>
          <ComponentTree
            // Confirmar se a data é undefined ou não
            data={
              builderDataContext.builderData[builderDataContext.selectedPage].children!
            }
          />
        </div>
      </div>
    </ToggleMenuContextProvider>
  )
}
