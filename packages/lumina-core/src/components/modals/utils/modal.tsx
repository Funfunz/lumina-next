import { Button } from '@/components/button'
import ReactModal from 'react-modal'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { Title } from '@/components/title'
import cx from 'classnames'

export type TProps = {
  title: string
  titleIcon: string
  contentLabel: string
  content: React.ReactNode
  actions: React.ReactNode
}

export const Modal = ({ title, contentLabel, content, actions, titleIcon }: TProps) => {
  const {
    handleCloseModal,
    modalState: { isOpen },
  } = useToggleModalContext()

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel={contentLabel}
      className='lumina-modal'
      overlayClassName='modalOverlay'
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      role={'dialog'}
    >
      <div className='lumina-modal_content-header'>
        <span className={cx('title-icon', titleIcon)}></span>
        <Title classnames='lumina-modal_content-header__title' content={title} />
        <Button
          buttonType='button'
          iconLeft='lum-icon-cross'
          className='lumina-modal_close-button'
          onClick={handleCloseModal}
        />
      </div>

      <div className='lumina-modal_form-content'>{content}</div>

      <div className='lumina-modal_buttons-container'>{actions}</div>
    </ReactModal>
  )
}
