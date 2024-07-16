import { TConfig } from "@/models/showEditModel";
import { LuminaAddComponentButton } from "../lumina-action-buttons/add/lumina-add-component";
import { LuminaButton } from "../lumina-button/lumina-button";
import styles from "./lumina-editMenu.module.scss";
import { IComponentProps } from "@/data/data";

type Tprops = {
  config: TConfig
  data: IComponentProps
}

export const LuminaEditMenu = ({ config, data }: Tprops) => {
  return (
    <div className={styles.editMenuContainer}>
      {config.editor.children && <LuminaAddComponentButton buttonType="button" style="menuButton" text="Add" iconLeft="lum-icon-plus" />}
      <LuminaButton buttonType="button" style="menuButton" text="Edit" iconLeft="lum-icon-edit" />
      <LuminaButton buttonType="button" style="menuButton" text="Cut" iconLeft="lum-icon-cut" />
      <LuminaButton buttonType="button" style="menuButton" text="Copy" iconLeft="lum-icon-clone" />
      <LuminaButton buttonType="button" style="menuButton" text="Paste" iconLeft="lum-icon-paste" />
      <LuminaButton buttonType="button" style="menuButton" text="Delete" iconLeft="lum-icon-cross" />
    </div>
  )
}
