import cx from 'classnames'
import { TextareaHTMLAttributes } from 'react'
import { LabelTitle } from '../utils/label'
import { HelpText } from '../utils/help'

interface ICheckbox extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  name?: string
  label?: string
  help?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const TextArea = ({ name, className, label, help, ...rest }: ICheckbox) => {
  return (
    <div className={cx('text-area_container', className)}>
      <LabelTitle name={name} label={label} className={className} />
      <textarea id={name} className={cx('text-area_container__text', className)} {...rest} />
      <HelpText className={className} help={help} />
    </div>
  )
}
