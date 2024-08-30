import { InputHTMLAttributes } from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/label'
import { HelpText } from '../utils/help'
interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
  label?: string
  help?: string
  radioText?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @radioText The radio button option text
 * @returns
 */
export const RadioButton = ({ name, className, label, help, radioText, ...rest }: IRadioButton) => {
  return (
    <>
      <div className={cx('radio-button_container', className)}>
        <LabelTitle name={name} label={label} className={className} />
        <div className='radio-button_container__wrapper'>
          <input
            type='radio'
            id={name}
            className={cx('radio-button_container__wrapper__check', className)}
            {...rest}
          />
          <span className='radio-button_container__wrapper__text'>{radioText}</span>
        </div>
        <HelpText className={className} help={help} />
      </div>
    </>
  )
}
