import { Button } from '@/components/button'
import cx from 'classnames'

type TProps = {
  pageName: string
  pageExtendedName: string
}

export const TreeviewHeader = ({ pageName, pageExtendedName }: TProps) => {
  return (
    <div className='treeview_header__items'>
      <span className={cx('treeview_header__headerIcon', 'lum-icon-page')}></span>
      <p className='treeview_header__title' content={pageName}>
        {pageName}
      </p>
      <p className='treeview_header__subTitle' content={pageExtendedName}>
        {pageExtendedName}
      </p>
      <div className='treeview_header__navIconsContainer'>
        <Button buttonType='button' iconLeft='lum-icon-info-fill' />
        <Button buttonType='button' iconLeft='lum-icon-history' />
        <Button buttonType='button' iconLeft='lum-icon-mobile' />
        <Button buttonType='button' text='Live' style='live' iconLeft='lum-icon-visible' />
      </div>
    </div>
  )
}
