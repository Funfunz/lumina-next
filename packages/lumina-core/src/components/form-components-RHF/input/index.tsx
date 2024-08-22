import { FC, InputHTMLAttributes, KeyboardEvent, createRef } from 'react'
import cx from 'classnames'
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  className?: string
  label?: string
  help?: string
  inlineLabel?: boolean
  activateEnterPress?: boolean
  clearOnEnterPress?: boolean
  onEnterPress?: () => void
}

export const Input: FC<IInputProps> = ({
  name,
  label,
  help,
  activateEnterPress,
  clearOnEnterPress,
  onEnterPress,
  className,
  ...rest
}) => {
  const inputRef = createRef<HTMLInputElement>() // A ref to clear the field on submit (clearOnEnterPress prop)

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (activateEnterPress) {
        if (onEnterPress) {
          onEnterPress()
        } else {
          // Default action if no callback is provided
          event.currentTarget.form?.submit()
        }
      }
      if (clearOnEnterPress && inputRef.current) {
        inputRef.current.value = '' // Clear the input
      }
    }
  }

  return (
    <div className={cx('input-container', className)}>
      {label && (
        <label htmlFor={name} className={cx('input-container__label', className)}>
          {label}
        </label>
      )}
      <input
        id={name}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className={cx('input-container__text', className)}
        {...rest}
      />
      {help && <p className={cx('input-container__helper-text', className)}>{help}</p>}
    </div>
  )
}
