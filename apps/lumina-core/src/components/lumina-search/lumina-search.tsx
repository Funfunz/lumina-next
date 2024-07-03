import styles from "@/components/lumina-search/lumina-search.module.scss";
import { LuminaButton } from "../lumina-button/lumina-button";

export const LuminaSearchBar = () => {
  return (

    <div className={styles.searchBar}>
        <div className={styles.searchIcon}><span className="lumina-search"></span></div>
        <input type="text" className={styles.searchText} placeholder="Search..." />
        <LuminaButton text="" color="filter" iconRight="lumina-filter" />
    </div>
  )
}
