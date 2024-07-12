import styles from "@/components/lumina-search/lumina-search.module.scss";
import { LuminaButton } from "../lumina-button/lumina-button";
import cx from 'classnames';

export const LuminaSearchBar = () => {
  return (

    <div className={styles.searchBar}>
      <span className={cx(styles.searchIcon, "lum-icon-search")}></span>
      <input type="text" className={styles.searchText} placeholder="Search..." />
      <LuminaButton
        buttonType="button"
        iconRight="lum-icon-filter"
        style='filter'
        />
    </div>
  )
}
