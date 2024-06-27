"use client";

import styles from "@/components/editor/editor.module.scss";
import cx from "classnames";
import { useCallback, useState } from "react";
import { PagesTab } from "@/components/tabs/pages/page";
import { TreeViewTab } from "../tabs/treeView/treeView";

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
      className={cx(styles.editorContainer, { [String(styles.open)]: isOpen, })}>
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
          {isOpen && <TreeViewTab />}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
