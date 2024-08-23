import { InputHTMLAttributes } from 'react'
import cx from 'classnames'
interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
  label?: string
  help?: string
  disabled?: boolean
  radioText?: string
}

export const RadioButton = ({ name, className, label, help, radioText, ...rest }: IRadioButton) => {
  return (
    <>
      <div className={cx('radio-button_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('radio-button_container__label', className)}>
            {label}
          </label>
        )}
        <div className='radio-button_container__wrapper'>
          <input
            type='radio'
            id={name}
            className={cx('radio-button_container__wrapper__check', className)}
            {...rest}
          />
          <span className='radio-button_container__wrapper__text'>{radioText}</span>
        </div>
        {help && <p className={cx('radio-button_container__help', className)}>{help}</p>}
      </div>
    </>
  )
}
