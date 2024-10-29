import { InputHTMLAttributes, useState } from 'react'
import cx from 'classnames'
import { HelpText } from '../utils/utility-components/help/index.js'
import { LabelTitle } from '../utils/utility-components/label/index.js'

type TSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  disabled?: boolean
  suffix?: string
  help?: string
  labelClassName?: string
  sliderClassName?: string
  helpClassName?: string
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @suffix Can take any value
 * @returns
 */
export const Slider = ({
  className,
  label,
  suffix = '',
  help,
  labelClassName,
  sliderClassName,
  helpClassName,
  ...rest
}: TSliderProps) => {
  const [rangeValue, setRangeValue] = useState(0)

  return (
    <>
      <div className={cx('slider_container', className)}>
        <LabelTitle label={label} className={labelClassName} />
        <input
          type='range'
          className={cx('', sliderClassName)}
          value={rangeValue}
          onChange={e => setRangeValue(Number(e.target.value))}
          {...rest}
        />
        <div className='slider_container__value'>
          {rangeValue > 0 ? `${rangeValue} ${suffix}` : rangeValue}
        </div>
        <HelpText className={helpClassName} help={help} />
      </div>
    </>
  )
}
