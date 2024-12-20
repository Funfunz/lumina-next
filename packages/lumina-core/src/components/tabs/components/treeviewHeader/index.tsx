import { MobileViewButton } from '../../../action-buttons/components/mobile-view'
import { Button } from '../../../button'
import cx from 'classnames'
import { useCallback } from 'react'
import './styles.scss'

export const TreeviewHeader = () => {
  const handleOnClickLive = useCallback(() => {
    window.open(window.location.href.split('/').slice(0, -1).join('/'), '_blank')
  }, [])
  return (
    <div className='treeviewHeaderContainer'>
      <span className={cx('treeviewHeaderIcon', 'lum-icon-page')}></span>
      <p className='treeviewTitle'>Home</p>
      <p className='treeviewSubTitle'>Home Page for Lumina PageBuilder</p>
      <div className='treeviewNavIconsContainer'>
        <Button buttonType='button' iconLeft='lum-icon-info-fill' />
        <Button buttonType='button' iconLeft='lum-icon-history' />
        <MobileViewButton />
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
