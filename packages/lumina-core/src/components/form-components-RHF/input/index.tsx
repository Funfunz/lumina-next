import { FC, InputHTMLAttributes, KeyboardEvent, createRef } from 'react'
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
  ...rest
}) => {
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
    <>
      {label && (
        <label htmlFor={name} className='input-container__label'>
          {label}
        </label>
      )}
      <br />
      <input
        id={name}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className='input-container__text'
        {...rest}
      />
      {help && <p className='input-container__helper-text'>{help}</p>}
    </>
  )
}
