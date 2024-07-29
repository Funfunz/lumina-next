"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
<<<<<<<< HEAD:apps/lumina-core/src/components/editor-buttons-container/editor-buttons-container.tsx
import styles from "./styles.module.scss";
import { IComponentProps } from "@/data/data";
========
import { IComponentProps } from "@/models/data";
>>>>>>>> master:packages/lumina-core/src/components/editor-button/editor-button.tsx
import { TConfig } from "@/models/editor-buttonModel";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";
import { VisibleComponentButton } from "../action-buttons/visible/visible-component";
import { MoveComponentButton } from "../action-buttons/move/move-component";
import { MenuComponentButton } from "../action-buttons/menu/menu-component";

type TProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config: TConfig;
  inline?: boolean;
  noUp?: boolean
  noDown?: boolean
  visible?: boolean;
  menu?: boolean;
};

export const EditorButtonsContainer = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown,
  visible,
  menu,
}: TProps) => {
  const {
    state: {
      appContext: { editor },
    }
  } = useLuminaContext();

  if (!editor) return null;
  return (
    <div
      className={cx('showEdit', inline ? 'showEditContainerInline' : 'showEditContainer')}
    >
      {config.editor.editable && !inline &&
        <EditComponentButton buttonType="button" id={id} onUpdate={onUpdate} data={data} config={config} iconLeft="lum-icon-edit" />}

      {config.editor.children && !inline &&
        <AddComponentButton id={id} buttonType="button" iconLeft="lum-icon-plus-fill" />}


      {config.editor.delete && !inline &&
        <DeleteComponentButton buttonType="button" id={id} iconLeft="lum-icon-cross" />}

      {inline && !visible &&
        <VisibleComponentButton />}

      {inline && !noUp &&
        <MoveComponentButton moveDirection="up" id={id} />}

      {inline && !noDown &&
        <MoveComponentButton moveDirection="down" id={id} />}

      {inline && !menu &&
        <MenuComponentButton id={id} config={config} data={data} />}
    </div >
  );
};


