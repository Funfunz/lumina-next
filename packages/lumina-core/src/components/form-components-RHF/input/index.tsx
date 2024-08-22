import { FC, InputHTMLAttributes, KeyboardEvent, createRef } from 'react'
import cx from 'classnames'
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  className?: string
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'file' | 'date'
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
  const defaultClass = 'input__container'
  const classNames = cx(defaultClass, className)
  const inputRef = createRef<HTMLInputElement>()
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
    <div className={classNames}>
      {label && (
        <label htmlFor={name} className='input__label'>
          {label}
        </label>
      )}
      <br />
      <input
        id={name}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className={cx(className, 'input__text')}
        {...rest}
      />
      {help && <p className='input__helper-text'>{help}</p>}
    </div>
  )
}
