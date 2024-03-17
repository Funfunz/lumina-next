"use client";

import styles from "@/components/editor/editor.module.scss";
import { useCallback, useState } from "react";
import { TreeView } from "../treeView/treeView";

export type TEditorConfig = {
  create: boolean;
  update: boolean;
  delete: boolean;
};

type Props = {
  children: React.ReactNode;
};

export const Editor = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div
      className={`${styles.editorContainer}${isOpen ? " " + styles.open : ""}`}
    >
      <div className={styles.editorBar}>
        <input
          type="checkbox"
          className={styles.editorToggler}
          onChange={handleMenuToggler}
        />
        <div className={styles.editorHamburger}>
            <div></div>
          </div>
        <div className={styles.editorBarContent}>
          {isOpen && <TreeView />}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
