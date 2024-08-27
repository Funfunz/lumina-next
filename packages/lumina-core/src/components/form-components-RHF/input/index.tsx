import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  createRef,
  useEffect,
  useState,
} from 'react'
import cx from 'classnames'
import { useDebounce } from 'use-debounce'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  className?: string
  label?: string
  help?: string
  inlineLabel?: boolean
  activateEnterPress?: boolean
  clearOnEnterPress?: boolean
  onEnterPress?: () => void
  debounce?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input: React.FC<IInputProps> = ({
  name,
  label,
  help,
  activateEnterPress,
  clearOnEnterPress,
  onEnterPress,
  debounce = 300,
  className,
  onChange,
  value,
  ...rest
}) => {
  const inputRef = createRef<HTMLInputElement>()
  const [inputValue, setInputValue] = useState(value)
  const [debouncedValue] = useDebounce(inputValue, debounce)

  useEffect(() => {
    if (onChange) {
      const event = {
        target: { value: debouncedValue },
      } as ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }, [debouncedValue, onChange])

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (activateEnterPress) {
        if (onEnterPress) {
          onEnterPress()
        } else {
          event.currentTarget.form?.submit()
        }
      }
      if (clearOnEnterPress && inputRef.current) {
        inputRef.current.value = ''
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
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className={cx('input-container__text', className)}
        {...rest}
      />
      {help && <p className={cx('input-container__help', className)}>{help}</p>}
    </div>
  )
}
