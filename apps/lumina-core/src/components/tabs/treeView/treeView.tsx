"use client";

import styles from "./treeView.module.scss";
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
    <div className={styles.treeviewContainer}>
      <div className={styles.treeHead}>
        <h3 className={styles.treeTitle}>Components</h3>
        <span className={styles.treeAddButton}>
          <AddComponentButton buttonType="button" id={""} text="Add" />
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
  );
};
