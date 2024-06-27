
import { Button } from "@/components/button/buttons";
import styles from "./treeviewHeader.module.scss"

export const TreeviewHeader = () => {

  return (
    <div className={styles.treeviewHeaderContainer}>
      <div className={styles.treeviewHeaderIcon}><span className="lumina-page"></span></div>
        <h5 className={styles.treeviewTitle}>Home</h5>
        <h6 className={styles.treeviewSubTitle}>Home Page for Lumina PageBuilder</h6>
      <div className={styles.treeviewNavIconsContainer}>
        <div className={styles.treeviewNavIcon}><span className="lumina-help"></span></div>
        <div className={styles.treeviewNavIcon}><span className="lumina-grid"></span></div>
        <div className={styles.treeviewNavIcon}><span className="lumina-clone"></span></div>
      </div>
      <Button text="Live" iconLeft="lumina-visible"/>
    </div>
  )
}
