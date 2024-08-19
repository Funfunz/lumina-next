import { Dispatch, SetStateAction } from 'react'
import { Button } from '../button'
import cx from 'classnames'
import { LumInput } from '../form-components/input'

type TProps = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  onClickSearch: () => void
}

export const SearchBar = ({ searchValue, setSearchValue, onClickSearch }: TProps) => {
  return (
    <div className='searchBar'>
      <span className={cx('searchIcon', 'lum-icon-search')}></span>
      <LumInput
        name='componentTreeSearchInput'
        type='search'
        onChange={setSearchValue}
        value={searchValue}
        placeholder='Search...'
      />
      <Button
        buttonType='button'
        iconRight='lum-icon-filter'
        style='filter'
        onClick={onClickSearch}
      />
    </div>
  )
}
