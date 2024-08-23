import { InputHTMLAttributes } from 'react'
import cx from 'classnames'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
  label?: string
  help?: string
  checkboxText?: string
}

export const CheckBox = ({ name, className, label, help, checkboxText, ...rest }: ICheckbox) => {
  return (
    <>
      <div className={cx('checkbox_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('checkbox_container__label', className)}>
            {label}
          </label>
        )}
        <div className='checkbox_container__wrapper'>
          <input
            type='checkbox'
            id={name}
            className={cx('checkbox_container__wrapper__check', className)}
            {...rest}
          />
          <span className='checkbox_container__wrapper__text'>{checkboxText}</span>
        </div>
        {help && <p className={cx('checkbox_container__help', className)}>{help}</p>}
      </div>
    </>
  )
}
