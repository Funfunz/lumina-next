
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
        <span className={cx(styles.treeviewNavIcon, "lum-icon-info-fill")}></span>
        <span className={cx(styles.treeviewNavIcon, "lum-icon-history")}></span>
        <span className={cx(styles.treeviewNavIcon, "lum-icon-mobile")}></span>
      </div>
      <LuminaButton buttonType="button" text="Live" iconLeft="lum-icon-visible" />
    </div>
  )
}
