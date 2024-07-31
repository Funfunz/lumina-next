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
<<<<<<< HEAD:apps/lumina-core/src/components/button/buttonContent/buttonContent.tsx
      <span className={styles.buttonContainer}>
=======
      <span className='buttonContent'>
>>>>>>> master:packages/lumina-core/src/components/button/buttonContent/buttonContent.tsx
        {
          iconLeft && (
            <span className={cx('icon', iconLeft)}/>
          )
        }
        {text && (<span className={styles.buttonText}>{text}</span>)}
        {
          iconRight && (
            <span className={cx('icon', iconRight)}/>
          )
        }
      </span>
    </>
  )
}

