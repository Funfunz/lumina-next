import { LuminaButton } from "../lumina-button/lumina-button";
import styles from "./lumina-dropdown.module.scss";

export const LuminaDropdown = () => {
  return(
  <div className={styles.dropdownContainer}>
  <LuminaButton buttonType="button" style="menuButton" text="Add child" iconLeft="lum-icon-plus" />
  <LuminaButton buttonType="button" style="menuButton" text="Edit" iconLeft="lum-icon-edit" />
  <LuminaButton buttonType="button" style="menuButton" text="Cut" iconLeft="lum-icon-cut" />
  <LuminaButton buttonType="button" style="menuButton" text="Copy" iconLeft="lum-icon-clone" />
  <LuminaButton buttonType="button" style="menuButton" text="Paste" iconLeft="lum-icon-paste" />
  <LuminaButton buttonType="button" style="menuButton" text="Delete" iconLeft="lum-icon-cross" />
  </div>
)
}
