'use client'

import { AddPageButton } from '@/components/action-buttons/addPageButton'
import { Title } from '@/components/title'
import { useLuminaContext } from '@/context/contextProvider'
// import { useCallback } from 'react'

export const PagesTab = () => {
  const {
    state: { builderDataContext },
    // dispatch,
  } = useLuminaContext()

  // const handleAddPageClick = useCallback(() => {
  //   dispatch({
  //     type: 'createPage',
  //     data: {
  //       id: 'dadwadada',
  //       pageName: 'testPage',
  //       friendlyName: 'Test Page',
  //       extendedName: 'A Page for testing purposes',
  //       dateModified: Date.now.toString(),
  //       route: '/test',
  //       status: true,
  //     },
  //   })
  // }, [dispatch])

  return (
    <div className='pageContainer'>
      <div className='pageHead'>
        <Title content='Pages' classnames='pages_title' />
        <span className='treeAddButton'>
          <AddPageButton buttonLabel='Add' />
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
