import { FieldValues } from 'react-hook-form'
import cx from 'classnames'

interface ICheckbox extends FieldValues {
  className?: string
  name?: string
  label?: string
  help?: string
}

export const CheckBox = ({ name, className, label, help }: ICheckbox) => {
  return (
    <>
      <div className={cx('checkboxn_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('', className)}>
            {label}
          </label>
        )}
        <input type='checkbox' id={name} className={cx('', className)} />
        {help && <p className={cx('', className)}>{help}</p>}
      </div>
    </>
  )
}
