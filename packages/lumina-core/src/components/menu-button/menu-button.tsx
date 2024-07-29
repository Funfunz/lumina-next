import { TConfig } from "@/models/editor-buttonModel";
import { IComponentProps } from "@/models/data";
import { Button } from "../button/button";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";
<<<<<<<< HEAD:apps/lumina-core/src/components/expandable-editor-menu/index.tsx
import styles from "./styles.module.scss";
========
>>>>>>>> master:packages/lumina-core/src/components/menu-button/menu-button.tsx

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
}

export const ExpandableEditorMenu = ({ id, config, data }: TMenuProps) => {

<<<<<<<< HEAD:apps/lumina-core/src/components/expandable-editor-menu/index.tsx
  return (
    <div className={styles.editMenuContainer}>
========
    return (
    <div className='editMenuContainer'>
>>>>>>>> master:packages/lumina-core/src/components/menu-button/menu-button.tsx
      <AddComponentButton
        buttonType="button"
        style="menuButton"
        text="Add Children"
        iconLeft="lum-icon-plus"
        disabled={!config.editor.children}
      />
      <EditComponentButton
        buttonType="button"
        style="menuButton"
        text="Edit"
        iconLeft="lum-icon-edit"
        id={id}
        config={config}
        data={data}
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Cut"
        iconLeft="lum-icon-cut"
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Copy"
        iconLeft="lum-icon-clone"
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Paste"
        iconLeft="lum-icon-paste"
      />
      <DeleteComponentButton
        buttonType="button"
        style="menuButton"
        text="Delete"
        iconLeft="lum-icon-cross"
        id={id}
      />
    </div>
  );
}
