import { Button } from '@/components/button/index.js'
import {
  TToggleModalDeletePageProps,
  DELETEPAGE,
} from '@/components/modals/deletePageModal/index.js'
import {
  TToggleModalUpdatePageProps,
  UPDATEPAGE,
} from '@/components/modals/updatePageModal/index.js'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { IDataPage } from '@/models/data.js'
import { useCallback } from 'react'
import { TreeBranch } from '../../treeBranch/index.js'

type TProps = {
  data: IDataPage[]
}

export const PageTree = ({ data }: TProps) => {
  const { handleOpenModal } = useToggleModalContext<
    TToggleModalUpdatePageProps | TToggleModalDeletePageProps
  >()

  if (data.length === 0) {
    return <p>No components were found.</p>
  }

  const handleOnClickEdit = useCallback(
    (dataItem: IDataPage) => () => {
      handleOpenModal({ modalType: UPDATEPAGE, ...dataItem })
    },
    []
  )

  const handleOnClickDelete = useCallback(
    (dataItem: IDataPage) => () => {
      const data: TToggleModalDeletePageProps = { modalType: DELETEPAGE, id: dataItem.id }
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
