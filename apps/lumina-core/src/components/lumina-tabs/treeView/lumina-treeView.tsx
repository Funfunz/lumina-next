"use client";

import styles from "./lumina-treeView.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { LuminaSearchBar } from "../../lumina-search/lumina-search";
import { LuminaTreeviewHeader } from "./treeviewHeader/lumina-treeViewHeader";
import { LuminaAddComponentButton } from "@/components/lumina-action-buttons/add/lumina-add-component";
import { LuminaComponentTree } from "./componentTree/lumina-componentTree";

export const LuminaTreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext();
  return (
    <div className={styles.treeviewContainer}>
      <div className={styles.treeHead}>
        <h3 className={styles.treeTitle}>Components</h3>
        <span className={styles.treeAddButton}>
          <LuminaAddComponentButton id={""} text="Add" />
        </span>
      </div>
      <LuminaSearchBar />
      <LuminaTreeviewHeader />
      <div className={styles.treeScroll}>
        <LuminaComponentTree
          // Confirmar se a data é undefined ou não
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children!
          }
        />
      </div>
    </div>
  );
};
