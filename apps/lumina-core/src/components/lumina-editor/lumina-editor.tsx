"use client";

import styles from "@/components/lumina-editor/lumina-editor.module.scss";
import cx from "classnames";
import { LuminaSidebarEditor } from "../lumina-sidebar/lumina-sidebar";
import { useCallback, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const LuminaEditor = ({ children }: Props) => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const handleMenuToggler = useCallback(() => {
    setIsBarOpen(!isBarOpen);
  }, [isBarOpen]);

  return (
    <div
    className={cx(styles.editorContainer, { [String(styles.open)]: isBarOpen, })}>
      <LuminaSidebarEditor handleToggler={handleMenuToggler} isBarOpen={isBarOpen}/>
      <div>{children}</div>
    </div>
  );
};
