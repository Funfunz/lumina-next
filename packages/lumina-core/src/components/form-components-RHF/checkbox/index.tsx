import { InputHTMLAttributes } from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/label'
import { HelpText } from '../utils/help'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
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
export const CheckBox = ({ name, className, label, help, checkboxText, ...rest }: ICheckbox) => {
  return (
    <>
      <div className={cx('checkbox_container', className)}>
        <LabelTitle name={name} label={label} className={className} />
        <div className='checkbox_container__wrapper'>
          <input
            type='checkbox'
            id={name}
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
