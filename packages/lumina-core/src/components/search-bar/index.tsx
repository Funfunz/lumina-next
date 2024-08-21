import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Button } from '../button'
import cx from 'classnames'

type TProps = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  onClickSearch: () => void
}

export const SearchBar = ({ searchValue, setSearchValue, onClickSearch }: TProps) => {
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearch()
    }
  }

  return (
    <div className='search-bar'>
      <span className={cx('search-bar__icon', 'lum-icon-search')}></span>
      <input
        className='search-bar__text'
        type='text'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder='Search...'
        onKeyDown={handleKeyDown}
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
