import { Button } from '@/components/button'
import cx from 'classnames'
// import data from '@data/*'
// import data from '../../../../../../../examples/vite-react/src/data/pageData'
import { useCallback } from 'react'
import { useLuminaContext } from '@/context/contextProvider'

export const TreeviewHeader = () => {
  const handleOnClickLive = useCallback(() => {
    window.open(window.location.href.split('/').slice(0, -1).join('/'), '_blank')
  }, [])
  const { state } = useLuminaContext()
  const selectedPage = state.builderDataContext.selectedPage
  const pageData = state.builderDataContext.builderData.pages[selectedPage]
  const friendlyName = pageData.friendlyName
  const description = pageData.description
  return (
    <div className='treeviewHeaderContainer'>
      <span className={cx('treeviewHeaderIcon', 'lum-icon-page')}></span>
      <p className='treeviewTitle'>{friendlyName}</p>
      <p className='treeviewSubTitle'>{description}</p>
      <div className='treeviewNavIconsContainer'>
        <Button buttonType='button' iconLeft='lum-icon-info-fill' />
        <Button buttonType='button' iconLeft='lum-icon-history' />
        <Button buttonType='button' iconLeft='lum-icon-mobile' />
      </div>
      <Button
        buttonType='button'
        onClick={handleOnClickLive}
        text='Live'
        style='live'
        iconLeft='lum-icon-visible'
      />
    </div>
  )
}
