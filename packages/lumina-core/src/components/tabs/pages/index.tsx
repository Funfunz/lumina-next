'use client'

import { AddPageButton } from '@/components/action-buttons/pages/add'
import { DeletePageButton } from '@/components/action-buttons/pages/delete'
import { EditPageButton } from '@/components/action-buttons/pages/edit'
import { Title } from '@/components/title'
import { useLuminaContext } from '@/context/contextProvider'

type TPageProps = {
  id: string
}
export const PagesTab = ({ id }: TPageProps) => {
  const {
    state: { builderDataContext },
  } = useLuminaContext()

  return (
    <div className='pageContainer'>
      <div className='pageHead'>
        <Title content='Pages' classnames='pages_title' />
        <span className='treeAddButton'>
          <AddPageButton buttonLabel='Add' />
          <DeletePageButton id={id} buttonLabel='Delete' />
          <EditPageButton id={id} buttonLabel='Edit' />
        </span>
      </div>
      {Object.keys(builderDataContext.builderData).map(page => (
        <div className='pageHead' key={page}>
          {page}
        </div>
      ))}
    </div>
  )
}
