import { Button } from "../button";
import cx from 'classnames';

export const SearchBar = () => {
  return (

    <div className='searchBar'>
      <span className={cx('searchIcon', "lum-icon-search")}></span>
      <input type="text" className='searchText' placeholder="Search..." />
      <Button
        buttonType="button"
        iconRight="lum-icon-filter"
        style='filter'
      />
    </div>
  )
}
