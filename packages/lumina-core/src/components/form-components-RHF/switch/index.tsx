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
      <div className={cx('switch_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('', className)}>
            {label}
          </label>
        )}
        <div className='switch_container-toggler'>
          <label id='switch_toggler' role='switch'>
            <input
              id='switch_toggler'
              type='checkbox'
              className={cx('switch_container-toggler__input', className)}
              {...rest}
            />
          </label>
          <span className='switch_container-toggler__label'>{switchText}</span>
        </div>
        {help && <p className={cx('switch_container-toggler__help', className)}>{help}</p>}
      </div>
    </>
  )
}
