import cx from 'classnames'
import { TextareaHTMLAttributes } from 'react'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

type TTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  label?: string
  help?: string
  labelClassName?: string
  textAreaClassName?: string
  helpClassName?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @returns
 */
export const TextArea = ({
  className,
  label,
  help,
  labelClassName,
  textAreaClassName,
  helpClassName,
  ...rest
}: TTextAreaProps) => {
  return (
    <div className={cx('text-area_container', className)}>
      <LabelTitle label={label} className={labelClassName} />
      <textarea className={cx('text-area_container__text', textAreaClassName)} {...rest} />
      <HelpText className={helpClassName} help={help} />
    </div>
  )
}
