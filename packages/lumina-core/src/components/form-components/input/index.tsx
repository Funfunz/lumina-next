import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label/index.js'
import { HelpText } from '../utils/utility-components/help/index.js'
import { CSSProperties, forwardRef } from 'react'

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  help?: string
  labelClassName?: string
  inputClassName?: string
  helpClassName?: string
  fullWidth?: boolean
  styleContainer?: CSSProperties
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label,
      help,
      className,
      labelClassName,
      inputClassName,
      helpClassName,
      fullWidth,
      styleContainer,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={cx('input-container', className, { ['input-container--full-width']: fullWidth })}
        style={styleContainer}
      >
        <LabelTitle label={label} className={cx('label-title', labelClassName)} />
        <input ref={ref} className={cx('input-container__text', inputClassName)} {...rest} />
        <HelpText className={cx('help-text', helpClassName)} help={help} />
      </div>
    )
  }
)

Input.displayName = 'Input'
