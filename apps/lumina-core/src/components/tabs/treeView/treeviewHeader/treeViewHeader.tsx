import { Button } from "@/components/button/button";
import styles from "./treeViewHeader.module.scss"
import cx from "classnames";

export const TreeviewHeader = () => {

  return (
    <div className={styles.treeviewHeaderContainer}>
      <span className={cx(styles.treeviewHeaderIcon, "lum-icon-page")}></span>
      <p className={styles.treeviewTitle}>Home</p>
      <p className={styles.treeviewSubTitle}>Home Page for Lumina PageBuilder</p>
      <div className={styles.treeviewNavIconsContainer}>
        <Button buttonType="button" iconLeft="lum-icon-info-fill"/>
        <Button buttonType="button" iconLeft="lum-icon-history"/>
        <Button buttonType="button" iconLeft="lum-icon-mobile"/>
      </div>
      <Button buttonType="button" text="Live" style='live' iconLeft="lum-icon-visible" />
    </div>
  )
}
