import { IPageData } from '@/models/data'
import { TreeBranch } from '../../treeBranch'
import { Button } from '@/components/button'
import { useCallback } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { UPDATEPAGE, type TToggleModalUpdatePageProps } from '@/components/modals/updatePageModal'
import { TToggleModalDeletePageProps } from '@/components/modals/deletePageModal'
import { DELETEPAGE } from '@/components/modals/deletePageModal'

type TProps = {
  data: IPageData[]
}

export const PageTree = ({ data }: TProps) => {
  const { handleOpenModal } = useToggleModalContext<
    TToggleModalUpdatePageProps | TToggleModalDeletePageProps
  >()

  if (data.length === 0) {
    return <p>No components were found.</p>
  }

  const handleOnClickEdit = useCallback(
    (dataItem: IPageData) => () => {
      handleOpenModal({ modalType: UPDATEPAGE, ...dataItem })
    },
    []
  )

  const handleOnClickDelete = useCallback(
    (dataItem: IPageData) => () => {
      const data: TToggleModalDeletePageProps = { modalType: DELETEPAGE, route: dataItem.route }
      handleOpenModal(data)
    },
    [handleOpenModal]
  )
  return (
    <>
      {data
        .sort((a, b) => {
          if (a.route < b.route) {
            return -1
          } else if (a.route > b.route) {
            return 1
          }
          return 0
        })
        .map(dataItem => (
          <TreeBranch key={dataItem.id} data={dataItem} expandable={false}>
            {dataItem.friendlyName} - {dataItem.route}
            <div className='branch_container_actions'>
              <Button
                buttonType='button'
                iconLeft='lum-icon-edit'
                onClick={handleOnClickEdit(dataItem)}
              />
              <Button
                buttonType='button'
                iconLeft='lum-icon-cross'
                onClick={handleOnClickDelete(dataItem)}
              />
            </div>
          </TreeBranch>
        ))}
    </>
  )
}
