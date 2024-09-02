import { Button } from '@/components/button'
import cx from 'classnames'

export const TreeviewHeader = () => {
  return (
    <div className='treeviewHeaderContainer'>
      <span className={cx('treeviewHeaderIcon', 'lum-icon-page')}></span>
      <p className='treeviewTitle'>Home</p>
      <p className='treeviewSubTitle'>Home Page for Lumina PageBuilder</p>
      <div className='treeviewNavIconsContainer'>
        <Button variant='default' iconLeft='lum-icon-info-fill' />
        <Button variant='default' iconLeft='lum-icon-history' />
        <Button variant='default' iconLeft='lum-icon-mobile' />
      </div>
      <Button
        variant='default'
        text='Live'
        className='treeviewHeaderContainer__button'
        iconLeft='lum-icon-visible'
      />
    </div>
  )
}
