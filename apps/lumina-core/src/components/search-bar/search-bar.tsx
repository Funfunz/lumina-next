import styles from "@/components/search-bar/search-bar.module.scss";
import { Button } from "../button/button";
import cx from 'classnames';

export const SearchBar = () => {
  return (

    <div className={styles.searchBar}>
      <span className={cx(styles.searchIcon, "lum-icon-search")}></span>
      <input type="text" className={styles.searchText} placeholder="Search..." />
      <Button
        buttonType="button"
        iconRight="lum-icon-filter"
        style='filter'
        />
    </div>
  )
}
