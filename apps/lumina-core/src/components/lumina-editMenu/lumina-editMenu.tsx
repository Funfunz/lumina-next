import { TConfig } from "@/models/showEditModel";
import { LuminaAddComponentButton } from "../lumina-action-buttons/add/lumina-add-component";
import { LuminaDeleteComponentButton } from "../lumina-action-buttons/delete/lumina-delete-component";
import { LuminaEditComponentButton } from "../lumina-action-buttons/edit/lumina-edit-component";
import { LuminaButton } from "../lumina-button/lumina-button";
import styles from "./lumina-editMenu.module.scss";
import { IComponentProps } from "@/data/data";

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
}

export const LuminaEditMenu = ({id, config, data}:TMenuProps) => {

    return (
    <div className={styles.editMenuContainer}>
      <LuminaAddComponentButton
        buttonType="button"
        style="menuButton"
        text="Add Children"
        iconLeft="lum-icon-plus"
        disabled={!config.editor.children}
        />
      <LuminaEditComponentButton
        buttonType="button"
        style="menuButton"
        text="Edit"
        iconLeft="lum-icon-edit"
        id={id}
        config={config}
        data={data}
        />
      <LuminaButton
        buttonType="button"
        style="menuButton"
        text="Cut"
        iconLeft="lum-icon-cut"
        />
      <LuminaButton
        buttonType="button"
        style="menuButton"
        text="Copy"
        iconLeft="lum-icon-clone"
        />
      <LuminaButton
        buttonType="button"
        style="menuButton"
        text="Paste"
        iconLeft="lum-icon-paste"
        />
      <LuminaDeleteComponentButton
        buttonType="button"
        style="menuButton"
        text="Delete"
        iconLeft="lum-icon-cross"
        id={id}
        />
    </div>
  );
}
