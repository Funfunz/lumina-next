import cx from 'classnames'
import { TextareaHTMLAttributes } from 'react'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

interface ICheckbox extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  help?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const TextArea = ({ className, label, help, ...rest }: ICheckbox) => {
  return (
    <div className={cx('text-area_container', className)}>
      <LabelTitle label={label} className={className} />
      <textarea className={cx('text-area_container__text', className)} {...rest} />
      <HelpText className={className} help={help} />
    </div>
  )
}
