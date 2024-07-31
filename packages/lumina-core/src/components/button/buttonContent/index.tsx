import cx from 'classnames';

export const ButtonContent = ({
  text,
  iconLeft,
  iconRight,
}: {
  text?: string
  iconLeft?: string
  iconRight?: string
}) => {
  return (
    <>
      <span className='buttonContent'>
        {
          iconLeft && (
            <span className={cx('icon', iconLeft)} />
          )
        }
        {text && (<span>{text}</span>)}
        {
          iconRight && (
            <span className={cx('icon', iconRight)} />
          )
        }
      </span>
    </>
  )
}

