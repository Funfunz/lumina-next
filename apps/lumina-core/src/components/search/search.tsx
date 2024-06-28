import styles from "@/components/search/search.module.scss";
import { Button } from "../button/buttons";

export const SearchBar = () => {
  return (

    <div className={styles.searchBar}>
        <div className={styles.searchIcon}><span className="lumina-search"></span></div>
        <input type="text" className={styles.searchText} placeholder="Search..." />
        <Button text="" color="secondary" iconRight="lumina-filter" />
    </div>
  )
}
