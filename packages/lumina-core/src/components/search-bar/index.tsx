import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button } from '../button'
import cx from 'classnames'

type TProps = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  onClickSearch: () => void
}

export const SearchBar = ({ searchValue, setSearchValue, onClickSearch }: TProps) => {
  return (
    <div className='search-bar'>
      <span className={cx('search-bar__icon', 'lum-icon-search')}></span>
      <input
        className='search-bar__text'
        type='text'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
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
