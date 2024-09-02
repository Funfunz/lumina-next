import * as React from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  help?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, help, className, ...rest }, ref) => {
    return (
      <div className={cx('input-container', className)}>
        <LabelTitle label={label} className={className} />
        <input ref={ref} className={cx('input-container__text', className)} {...rest} />
        <HelpText className={className} help={help} />
      </div>
    )
  }
)

Input.displayName = 'Input'
