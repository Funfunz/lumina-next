"use client";

import styles from "@/components/editor/editor.module.scss";
import cx from "classnames";
import { SidebarEditor } from "../sidebar/sidebar";
import { useCallback, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Editor = ({ children }: Props) => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const handleMenuToggler = useCallback(() => {
    setIsBarOpen(!isBarOpen);
  }, [isBarOpen]);

  return (
    <div
    className={cx(styles.editorContainer, { [String(styles.open)]: isBarOpen, })}>
      <SidebarEditor handleToggler={handleMenuToggler} isBarOpen={isBarOpen}/>
      <div>{children}</div>
    </div>
  );
};
