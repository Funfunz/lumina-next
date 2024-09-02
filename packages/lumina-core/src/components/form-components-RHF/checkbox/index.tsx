import { InputHTMLAttributes } from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label'
import { HelpText } from '../utils/utility-components/help'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  help?: string
  checkboxText?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @checkboxText The checkbox option text
 * @returns
 */
export const CheckBox = ({ className, label, help, checkboxText, ...rest }: ICheckbox) => {
  return (
    <>
      <div className={cx('checkbox_container', className)}>
        <LabelTitle label={label} className={className} />
        <div className='checkbox_container__wrapper'>
          <input
            type='checkbox'
            className={cx('checkbox_container__wrapper__check', className)}
            {...rest}
          />
          <span className='checkbox_container__wrapper__text'>{checkboxText}</span>
        </div>
        <HelpText className={className} help={help} />
      </div>
    </>
  )
}
