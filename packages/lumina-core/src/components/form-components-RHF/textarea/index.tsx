import cx from 'classnames'
import { TextareaHTMLAttributes } from 'react'

interface ICheckbox extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  name?: string
  label?: string
  help?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const TextArea = ({ name, className, label, help, ...rest }: ICheckbox) => {
  return (
    <div className={cx('text-area_container', className)}>
      {label && (
        <label htmlFor={name} className={cx('text-area_container__label', className)}>
          {label}
        </label>
      )}
      <textarea id={name} className={cx('text-area_container__text', className)} {...rest} />
      {help && <p className={cx('text-area_container__helper-text', className)}>{help}</p>}
    </div>
  )
}
