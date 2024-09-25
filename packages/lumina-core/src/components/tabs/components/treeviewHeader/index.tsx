import { Button } from '@/components/button'
import cx from 'classnames'
import data from '../../../../../../../examples/vite-react/src/data/pageData'
import { useCallback } from 'react'

export const TreeviewHeader = () => {
  const handleOnClickLive = useCallback(() => {
    window.open(window.location.href.split('/').slice(0, -1).join('/'), '_blank')
  }, [])

  const friendlyName = data.page1.friendlyName

  return (
    <div className='treeviewHeaderContainer'>
      <span className={cx('treeviewHeaderIcon', 'lum-icon-page')}></span>
      <p className='treeviewTitle'>{friendlyName}</p>
      {/* <p className='treeviewSubTitle'>Home Page for Lumina PageBuilder</p> */}
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
