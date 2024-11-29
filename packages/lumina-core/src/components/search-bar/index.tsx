import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../button'
import cx from 'classnames'
import { Input } from '../form-components/input'
import { useDebounce } from 'use-debounce'
import './styles.scss'

type TProps = {
  searchValue: string

  setSearchValue: (text: string) => void
}

/**
 *
 * @debounce Used to give some delay on server request in miliseconds, ex: debounce={1000} will have a 1000 milisecond delay
 * @returns
 */
export const SearchBar = ({ searchValue, setSearchValue }: TProps) => {
  const [inputValue, setInputValue] = useState(searchValue)
  const [debouncedValue] = useDebounce(inputValue, 1000)

  useEffect(() => {
    setSearchValue(debouncedValue)
  }, [debouncedValue, setSearchValue])

  return (
    <div className='search-bar'>
      <span className={cx('search-bar__icon', 'lum-icon-search')}></span>
      <Input
        className='search-bar__text'
        type='search'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder='Search...'
        fullWidth={true}
      />
      <Button buttonType='button' iconRight='lum-icon-filter' style='filter' />
    </div>
  )
}
