import { FieldValues } from 'react-hook-form'
import cx from 'classnames'

interface IRadioButton extends FieldValues {
  className?: string
  name?: string
  label?: string
  help?: string
}

export const RadioButton = ({ name, className, label, help }: IRadioButton) => {
  return (
    <>
      <div className={cx('radio-button_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('', className)}>
            {label}
          </label>
        )}
        <input type='radio' id={name} className={cx('', className)} />
        {help && <p className={cx('', className)}>{help}</p>}
      </div>
    </>
  )
}
