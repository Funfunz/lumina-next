import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

type TFormHookProps = {
  activateEnterPress?: boolean
  clearOnEnterPress?: boolean
  onEnterPress?: () => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

/**
 * @activateEnterPress A boolean prop that if called, activates button press do submit
 * @clearOnEnterPress Clears the input field after submiting with activateEnterPress
 * @onEnterPress Used alongside 'activateEnterPress' in case there needs to be passed a function on 'activateEnterPress'
 * @returns
 */
export const useActivateOnEnter = ({
  activateEnterPress,
  clearOnEnterPress,
  onEnterPress,
  onChange,
  value: initialValue,
}: TFormHookProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue || '')

  useEffect(() => {
    if (onChange) {
      const event = {
        target: { value },
      } as ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }, [value, onChange])

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

  return {
    value,
    setValue,
    inputRef,
    handleKeyDown,
  }
}
