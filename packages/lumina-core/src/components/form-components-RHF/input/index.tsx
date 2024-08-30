import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  createRef,
  useEffect,
  useState,
} from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/label'
import { HelpText } from '../utils/help'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  className?: string
  label?: string
  help?: string
  activateEnterPress?: boolean
  clearOnEnterPress?: boolean
  onEnterPress?: () => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @activateEnterPress A boolean prop that if called, activates button press do submit
 * @clearOnEnterPress Clears the input field after submiting with activateEnterPress
 * @onEnterPress Used alongside 'activateEnterPress' in case there needs to be passed a function on 'activateEnterPress'
 * @returns
 */
export const Input: React.FC<IInputProps> = ({
  name,
  label,
  help,
  activateEnterPress,
  clearOnEnterPress,
  onEnterPress,
  className,
  onChange,
  value,
  ...rest
}) => {
  const inputRef = createRef<HTMLInputElement>()
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    if (onChange) {
      const event = {
        target: { value: inputValue },
      } as ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }, [inputValue, onChange])

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
      <LabelTitle name={name} label={label} className={className} />
      <input
        id={name}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className={cx('input-container__text', className)}
        {...rest}
      />
      <HelpText className={className} help={help} />
    </div>
  )
}
