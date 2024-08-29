import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button } from '../button'
import cx from 'classnames'
import { Input } from '../form-components-RHF/input'

type TProps = {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({ searchValue, setSearchValue }: TProps) => {
  return (
    <div className='search-bar'>
      <span className={cx('search-bar__icon', 'lum-icon-search')}></span>
      <Input
        className='search-bar__text'
        type='search'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder='Search...'
        debounce={1000}
      />
      <Button buttonType='button' iconRight='lum-icon-filter' style='filter' />
    </div>
  )
}
