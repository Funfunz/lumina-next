import { InputHTMLAttributes } from 'react'
import cx from 'classnames'
import { LabelTitle } from '../utils/utility-components/label/index.js'
import { HelpText } from '../utils/utility-components/help/index.js'

type TRadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  help?: string
  radioText?: string
  labelClassName?: string
  radioClassName?: string
  helpClassName?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @radioText The radio button option text
 * @returns
 */
export const RadioButton = ({
  className,
  label,
  help,
  radioText,
  labelClassName,
  radioClassName,
  helpClassName,
  ...rest
}: TRadioButtonProps) => {
  return (
    <>
      <div className={cx('radio-button_container', className)}>
        <LabelTitle label={label} className={labelClassName} />
        <div className='radio-button_container__wrapper'>
          <input
            type='radio'
            className={cx('radio-button_container__wrapper__check', radioClassName)}
            {...rest}
          />
          <span className='radio-button_container__wrapper__text'>{radioText}</span>
        </div>
        <HelpText className={helpClassName} help={help} />
      </div>
    </>
  )
}
