import {
  InputHTMLAttributes,
} from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  className?: string
  label?: string
  help?: string
  value?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const Input: React.FC<IInputProps> = ({
  name,
  label,
  help,
  className,
  ...rest
}) => {

  return (
    <div className={cx('input-container', className)}>
      <LabelTitle name={name} label={label} className={className} />
      <input
        id={name}
        className={cx('input-container__text', className)}
        {...rest}
      />
      <HelpText className={className} help={help} />
    </div>
  )
}
