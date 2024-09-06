import cx from 'classnames'
import { HelpText } from '../utils/utility-components/help'
import { LabelTitle } from '../utils/utility-components/label'
import { InputHTMLAttributes } from 'react'

type TSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  help?: string
  switchText?: string
  labelClassName?: string
  switchClassName?: string
  helpClassName?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @switchText The switch button option text
 * @returns
 */
export const Switch = ({
  className,
  label,
  help,
  switchText,
  labelClassName,
  switchClassName,
  helpClassName,
  ...rest
}: TSwitchProps) => {
  return (
    <>
      <div className={cx('switch_container', className)}>
        <LabelTitle label={label} className={labelClassName} />
        <div className='switch_container-toggler'>
          <label id='switch_toggler' role='switch'>
            <input
              id='switch_toggler'
              type='checkbox'
              className={cx('switch_container-toggler__input', switchClassName)}
              {...rest}
            />
          </label>
          <span className='switch_container-toggler__label'>{switchText}</span>
        </div>
        <HelpText className={helpClassName} help={help} />
      </div>
    </>
  )
}
