import { useCallback, useState } from 'react'
import { SearchBar } from '../search-bar'
import { Title } from '../title'
import cx from 'classnames'
import './styles.scss'

type TProps = {
  titleText: string
  actions: React.ReactNode

  onSearch: (text: string) => void
}

export const TabHeader = ({ titleText, actions, onSearch }: TProps) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSetSearchValue = useCallback((text: string) => {
    setSearchValue(text)
    onSearch(text)
  }, [])

  return (
    <div className='tabHeader'>
      <Title content={titleText} classnames={cx('tabHeader-title')} />
      <span className='tabHeader-actions'>{actions}</span>
      <SearchBar searchValue={searchValue} setSearchValue={handleSetSearchValue} />
    </div>
  )
}
