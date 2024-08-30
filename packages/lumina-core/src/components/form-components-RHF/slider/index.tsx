import { InputHTMLAttributes, useState } from 'react'
import cx from 'classnames'
import { HelpText } from '../utils/utility-components/help'
import { LabelTitle } from '../utils/utility-components/label'
interface ISlider extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
  label?: string
  disabled?: boolean
  suffix?: string
  help?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @suffix Can take the following values '€' | 'km' | 'm' (for now)
 * @returns
 */
export const Slider = ({ name, className, label, suffix, help, ...rest }: ISlider) => {
  const [rangeValue, setRangeValue] = useState(0)

  return (
    <>
      <div className={cx('slider_container', className)}>
        <LabelTitle name={name} label={label} className={className} />
        <input
          type='range'
          id={name}
          className={cx('', className)}
          value={rangeValue}
          onChange={e => setRangeValue(Number(e.target.value))}
          {...rest}
        />
        <div className='slider_container__value'>
          {rangeValue > 0 ? `${rangeValue} ${suffix}` : rangeValue}
        </div>
        <HelpText className={className} help={help} />
      </div>
    </>
  )
}
