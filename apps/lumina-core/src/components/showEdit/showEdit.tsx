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

type ShowEditProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config?: TConfig;
  inline?: boolean;
  noUp?: boolean
  noDown?: boolean
  lookUp?: boolean;
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
  lookUp,
  menu,
}: ShowEditProps) => {
  const {
    state: {
      appContext: { editor },
    },
    dispatch,
  } = useLuminaContext();

  if (!editor) return null;
  return (
    <div
      className={cx(styles.showEdit, inline ? styles.showEditContainerInline : styles.showEditContainer)}
    >
      {config?.props && config.editor.editable &&
        <EditComponentButton id={id} dispatch={dispatch} onUpdate={onUpdate} data={data} config={config} />}

      {config?.editor.children &&

        <AddComponentButton dispatch={dispatch} id={id} />}

      {config?.editor.delete &&
        <DeleteComponentButton dispatch={dispatch} id={id} />}

      {inline && !noUp &&
        <MoveComponentButton moveDirection="up" dispatch={dispatch} id={id} />}

      {inline && !noDown &&
        <MoveComponentButton moveDirection="down" dispatch={dispatch} id={id} />}
    </div >
  );
};
export type { TConfig };

