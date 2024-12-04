import { useCallback, useEffect, useState } from 'react'
import { PageTree } from './pageTree'
import { useLuminaContext } from '../../../context/contextProvider'
import { ToggleMenuContextProvider } from '../../../context/toggleMenuContextProvider'
import { useToggleModalContext } from '../../../context/toggleModalContextProvider'
import { IDataPage } from '../../../models/data'
import { Button } from '../../button'
import { TToggleModalAddPageProps, ADDPAGE } from '../../modals/addPageModal'
import { TabHeader } from '../../tab-header'
import './styles.scss'

export const PagesTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()
  const { handleOpenModal } = useToggleModalContext<TToggleModalAddPageProps>()

  const builderData = builderDataContext.builderData
  const [searchValue, setSearchValue] = useState<string>('')
  const [data, setData] = useState<IDataPage[]>(Object.values(builderData.pages))
  useEffect(() => {
    searchData()
  }, [builderData, searchValue])

  const searchData = () => {
    const resetData = Object.values(builderData.pages)
    if (!searchValue || searchValue.trim().length < 3) {
      setData(resetData)
    } else if (searchValue.length >= 3) {
      const filteredData = filterData(resetData)
      setData(filteredData)
    }
  }

  const filterData = useCallback(
    (data: IDataPage[]): IDataPage[] => {
      const searchValLower = searchValue.toLowerCase().trim()
      return data.reduce<IDataPage[]>((acc, el) => {
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
  }, [handleOpenModal])
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
