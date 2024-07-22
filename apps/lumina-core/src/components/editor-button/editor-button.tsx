"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
import styles from "./editor-button.module.scss";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/editor-buttonModel";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";
import { VisibleComponentButton } from "../action-buttons/visible/visible-component";
import { MoveComponentButton } from "../action-buttons/move/move-component";
import { MenuComponentButton } from "../action-buttons/menu/menu-component";

type EditorButtonProps = {
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

export const EditorButton = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown,
  visible,
  menu,
}: EditorButtonProps) => {
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
        <EditComponentButton buttonType="button" id={id} onUpdate={onUpdate} data={data} config={config} />}

      {config?.editor.children &&
        <AddComponentButton buttonType="button" id={id} />}

      {config?.editor.delete &&
        <DeleteComponentButton buttonType="button" id={id} />}

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


