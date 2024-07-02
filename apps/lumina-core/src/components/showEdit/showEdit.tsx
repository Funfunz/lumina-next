"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
import styles from "./showEdit.module.scss";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/showEditModel";
import { AddComponentButton } from "../lumina-action-buttons/add/lumina-add-component";
import { DeleteComponentButton } from "../lumina-action-buttons/delete/lumina-delete-component";
import { EditComponentButton } from "../lumina-action-buttons/edit/lumina-edit-component";
import { MoveComponentButton } from "../lumina-action-buttons/move/lumina-move-component";
import { VisibleComponentButton } from "../lumina-action-buttons/visible/lumina-visible-component";
import { MenuComponentButton } from "../lumina-action-buttons/menu/lumina-menu-component";

type ShowEditProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config?: TConfig;
  inline?: boolean;
  noUp?: boolean
  noDown?: boolean
  visible?: boolean;
  menu?: boolean;
};

export const ShowEdit = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown,
  visible,
  menu,
}: ShowEditProps) => {
  const {
    state: {
      appContext: { editor },
    }
  } = useLuminaContext();

  if (!editor) return null;
  return (
    <div
      className={cx(styles.showEdit, inline ? styles.showEditContainerInline : styles.showEditContainer)}
    >
      {config?.editor.editable &&
        <EditComponentButton id={id} onUpdate={onUpdate} data={data} config={config} />}

      {config?.editor.children &&
        <AddComponentButton id={id} />}

      {config?.editor.delete &&
        <DeleteComponentButton id={id} />}

      {inline && !visible &&
        <VisibleComponentButton />}

      {inline && !noUp &&
        <MoveComponentButton moveDirection="up" id={id} />}

      {inline && !noDown &&
        <MoveComponentButton moveDirection="down" id={id} />}

      {inline && !menu &&
        <MenuComponentButton />}
    </div >
  );
};
export type { TConfig };

