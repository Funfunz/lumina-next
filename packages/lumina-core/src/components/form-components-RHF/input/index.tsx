import * as React from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  help?: string
  labelClassName?: string
  inputClassName?: string
  helpClassName?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, help, className, labelClassName, inputClassName, helpClassName, ...rest }, ref) => {
    return (
      <div className={cx('input-container', className)}>
        <LabelTitle label={label} className={cx('label-title', labelClassName)} />
        <input ref={ref} className={cx('input-container__text', inputClassName)} {...rest} />
        <HelpText className={cx('help-text', helpClassName)} help={help} />
      </div>
    )
  }
)

Input.displayName = 'Input'
