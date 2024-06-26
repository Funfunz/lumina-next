
import { Button } from "@/components/button/buttons";
import styles from "./treeviewHeader.module.scss"
import cx  from "classnames";

export const TreeviewHeader = () => {

  return (
    <div className={styles.treeviewHeaderContainer}>
      <span className={cx(styles.treeviewHeaderIcon, "lumina-page")}></span>
        <p className={styles.treeviewTitle}>Home</p>
        <p className={styles.treeviewSubTitle}>Home Page for Lumina PageBuilder</p>
      <div className={styles.treeviewNavIconsContainer}>
      <span className={cx(styles.treeviewNavIcon, "lumina-info")}></span>
      <span className={cx(styles.treeviewNavIcon, "lumina-history")}></span>
      <span className={cx(styles.treeviewNavIcon, "lumina-mobile")}></span>
      </div>
      <Button text="Live" color="secondary" outline iconLeft="lumina-visible"/>
    </div>
  )
}
