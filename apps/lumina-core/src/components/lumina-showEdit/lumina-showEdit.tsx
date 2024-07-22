"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
import styles from "./lumina-showEdit.module.scss";
import { IComponentProps } from "@/data/data";
import { LuminaAddComponentButton } from "../lumina-action-buttons/add/lumina-add-component";
import { LuminaDeleteComponentButton } from "../lumina-action-buttons/delete/lumina-delete-component";
import { LuminaEditComponentButton } from "../lumina-action-buttons/edit/lumina-edit-component";
import { LuminaMoveComponentButton } from "../lumina-action-buttons/move/lumina-move-component";
import { LuminaVisibleComponentButton } from "../lumina-action-buttons/visible/lumina-visible-component";
import { LuminaMenuComponentButton } from "../lumina-action-buttons/menu/lumina-menu-component";
import { TConfig } from "@/models/showEditModel";

type ShowEditProps = {
  id: string
  componentProps: IComponentProps
  config: TConfig
  inline?: boolean
  noUp?: boolean
  noDown?: boolean
  visible?: boolean
  menu?: boolean
}

export const LuminaShowEdit = ({
  id,
  componentProps,
  config,
  inline,
  noUp,
  noDown,
  visible,
  menu,
}: ShowEditProps) => {
  const {
    state: {
      appContext: { editor }
    }
  } = useLuminaContext()

  if (!editor) return null;
  return (
    <div
      className={cx(styles.showEdit, inline ? styles.showEditContainerInline : styles.showEditContainer)}
    >
      {config.editor.editable && !inline &&
        <LuminaEditComponentButton id={id} buttonType="button" data={componentProps} config={config} />}

      {config.editor.children && !inline &&
        <LuminaAddComponentButton id={id} buttonType="button" iconLeft="lum-icon-plus-fill" />}

      {config.editor.delete && !inline &&
        <LuminaDeleteComponentButton id={id} buttonType="button" />}

      {inline && !visible &&
        <LuminaVisibleComponentButton />}

      {inline && !noUp &&
        <LuminaMoveComponentButton moveDirection="up" id={id} />}

      {inline && !noDown &&
        <LuminaMoveComponentButton moveDirection="down" id={id} />}

      {inline && !menu &&
        <LuminaMenuComponentButton id={id} config={config} data={componentProps} />}
    </div >
  );
};


