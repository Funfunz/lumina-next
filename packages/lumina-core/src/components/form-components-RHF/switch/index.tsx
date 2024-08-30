import cx from 'classnames'
import { HelpText } from '../utils/help'
import { LabelTitle } from '../utils/label'
interface ISwitch {
  className?: string
  name?: string
  label?: string
  help?: string
  switchText?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @switchText The switch button option text
 * @returns
 */
export const Switch = ({ name, className, label, help, switchText, ...rest }: ISwitch) => {
  return (
    <>
      <div className={cx('switch_container', className)}>
        <LabelTitle name={name} label={label} className={className} />
        <div className='switch_container-toggler'>
          <label id='switch_toggler' role='switch'>
            <input
              id='switch_toggler'
              type='checkbox'
              className={cx('switch_container-toggler__input', className)}
              {...rest}
            />
          </label>
          <span className='switch_container-toggler__label'>{switchText}</span>
        </div>
        <HelpText className={className} help={help} />
      </div>
    </>
  )
}
