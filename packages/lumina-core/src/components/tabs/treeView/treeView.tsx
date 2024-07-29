"use client";

import { useLuminaContext } from "@/context/contextProvider";
import { TreeviewHeader } from "./treeviewHeader/treeViewHeader";
import { AddComponentButton } from "@/components/action-buttons/add/add-component";
import { SearchBar } from "@/components/search-bar/search-bar";
import { ComponentTree } from "./componentTree/componentTree";

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext();
  return (
    <div className='treeviewContainer'>
      <div className='treeHead'>
        <h3 className='treeTitle'>Components</h3>
        <span className='treeAddButton'>
          <AddComponentButton id={""} text="Add" />
        </span>
      </div>
      <SearchBar />
      <TreeviewHeader />
      <div className='treeScroll'>
        <ComponentTree
          // Confirmar se a data é undefined ou não
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children!
          }
        />
      </div>
    </div>
  );
};
