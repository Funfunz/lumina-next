"use client";

import { useLuminaContext } from "@/context/contextProvider";
import { TreeviewHeader } from "./treeviewHeader/treeViewHeader";
import { AddComponentButton } from "@/components/action-buttons/add/add-component";
import { SearchBar } from "@/components/search-bar/search-bar";
import { ComponentTree } from "./componentTree/componentTree";
import { ToggleMenuContextProvider } from "@/context/toggleMenuContext";
import { ToggleModalContextProvider } from "@/context/handleModalsContext";

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext();
  return (
    <ToggleMenuContextProvider>
      <ToggleModalContextProvider>
        <div className='treeviewContainer'>
          <div className='treeHead'>
            <h3 className='treeTitle'>Components</h3>
            <span className='treeAddButton'>
              <AddComponentButton text="Add" />
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
      </ToggleModalContextProvider>
    </ToggleMenuContextProvider>
  );
};
