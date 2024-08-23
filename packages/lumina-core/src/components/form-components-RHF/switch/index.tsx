import cx from 'classnames'
interface ISwitch {
  className?: string
  name?: string
  label?: string
  help?: string
  disabled?: boolean
  switchText?: string
}

export const Switch = ({ name, className, label, help, switchText, ...rest }: ISwitch) => {
  return (
    <>
      <div className={cx('', className)}>
        {label && (
          <label htmlFor={name} className={cx('', className)}>
            {label}
          </label>
        )}
        <div className=''>
          <input type='' id={name} className={cx('', className)} {...rest} />
          <span className=''>{switchText}</span>
        </div>
        {help && <p className={cx('', className)}>{help}</p>}
      </div>
    </>
  )
}
