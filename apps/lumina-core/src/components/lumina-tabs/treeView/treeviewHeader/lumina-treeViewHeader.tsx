
import { LuminaButton } from "@/components/lumina-button/lumina-button";
import styles from "./lumina-treeViewHeader.module.scss"
import cx from "classnames";

export const LuminaTreeviewHeader = () => {

  return (
    <div className={styles.treeviewHeaderContainer}>
      <span className={cx(styles.treeviewHeaderIcon, "lum-icon-page")}></span>
      <p className={styles.treeviewTitle}>Home</p>
      <p className={styles.treeviewSubTitle}>Home Page for Lumina PageBuilder</p>
      <div className={styles.treeviewNavIconsContainer}>
        <LuminaButton buttonType="button" iconLeft="lum-icon-info-fill"/>
        <LuminaButton buttonType="button" iconLeft="lum-icon-history"/>
        <LuminaButton buttonType="button" iconLeft="lum-icon-mobile"/>
      </div>
      <LuminaButton buttonType="button" text="Live" style='live' iconLeft="lum-icon-visible" />
    </div>
  )
}
