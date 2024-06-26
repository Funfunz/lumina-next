
import { Button } from "@/components/button/buttons";
import styles from "../pages/pageLabel.module.scss";

export const PageLabel = () => {

  return (
  <>
    <div className={styles.pageTitleContainer}>
    <div className={styles.pageIcon}><span className="lumina-page"></span></div>
    <h1 className={styles.pageTitle}>Home</h1>
    <h2 className={styles.pageSubTitle}>Home Page for Lumina PageBuilder</h2>
    <div className={styles.pageNavIcon}><span className="lumina-help"></span></div>
    <div className={styles.pageNavIcon}><span className="lumina-grid"></span></div>
    <div className={styles.pageNavIcon}><span className="lumina-clone"></span></div>
    <Button text="Live" iconLeft="lumina-visible"/>
    </div>
  </>
  )
}
