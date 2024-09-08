import { SearchBar } from '@/components/search-bar'
import { Title } from '@/components/title'
import { useCallback, useState } from 'react'

type TProps = {
  titleText: string
  actions: React.ReactNode
  // eslint-disable-next-line no-unused-vars
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
      <Title content={titleText} />
      <span className='tabHeader-actions'>{actions}</span>
      <SearchBar searchValue={searchValue} setSearchValue={handleSetSearchValue} />
    </div>
  )
}
