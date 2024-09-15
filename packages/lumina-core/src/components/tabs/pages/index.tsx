import { useLuminaContext } from '@/context/contextProvider'
import { ToggleMenuContextProvider } from '@/context/toggleMenuContextProvider'
import { useCallback, useEffect, useState } from 'react'
import { IPageData } from '@/models/data'
import { TabHeader } from '@/components/tab-header'
import { Button } from '@/components/button'
import { PageTree } from './pageTree'
import { ADDPAGE, useToggleModalContext } from '@/context/toggleModalContextProvider'

export const PagesTab = () => {
  const {
    state: { builderDataContext },
    dispatch,
  } = useLuminaContext()
  const { handleOpenModal } = useToggleModalContext()

  const builderData = builderDataContext.builderData
  const [searchValue, setSearchValue] = useState<string>('')
  const [data, setData] = useState<IPageData[]>(Object.values(builderData))
  useEffect(() => {
    searchData()
  }, [builderData, searchValue])

  const searchData = () => {
    const resetData = Object.values(builderData)
    if (!searchValue || searchValue.trim().length < 3) {
      setData(resetData)
    } else if (searchValue.length >= 3) {
      const filteredData = filterData(resetData)
      setData(filteredData)
    }
  }

  const filterData = useCallback(
    (data: IPageData[]): IPageData[] => {
      const searchValLower = searchValue.toLowerCase().trim()
      return data.reduce<IPageData[]>((acc, el) => {
        const friendlyNameLower = el.friendlyName.toLowerCase()

        // Check if the current element matches the search criteria
        //perfect match
        if (friendlyNameLower.includes(searchValLower)) {
          acc.push({
            ...el, // Create a copy of the current element
          })
        }

        return acc
      }, [])
    },
    [searchValue, data]
  )

  const handleAddPageClick = useCallback(() => {
    handleOpenModal({ modalType: ADDPAGE })
  }, [dispatch])

  return (
    <ToggleMenuContextProvider>
      <TabHeader
        titleText='Pages'
        onSearch={setSearchValue}
        actions={
          <Button
            buttonType='button'
            text='Add'
            onClick={handleAddPageClick}
            iconLeft='lum-icon-plus-fill'
          />
        }
      />
      <PageTree data={data} />
    </ToggleMenuContextProvider>
  )
}
