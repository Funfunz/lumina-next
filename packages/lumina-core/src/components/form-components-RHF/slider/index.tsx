import { InputHTMLAttributes, useState } from 'react'
import cx from 'classnames'
interface ISlider extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name?: string
  label?: string
  help?: string
  disabled?: boolean
  step?: number
  min?: number
  max?: number
  suffix?: '€' | 'km' | 'm'
}

/**
 * @label A text that is positioned on top of the input range
 * @help  A helper text position below the slider
 * @suffix Can take the following values '€' | 'km' | 'm' (for now)
 * @returns
 */
export const Slider = ({
  name,
  className,
  label,
  help,
  step,
  min = 0,
  max,
  suffix = '€',
  ...rest
}: ISlider) => {
  const [rangeValue, setRangeValue] = useState(0)

  return (
    <>
      <div className={cx('slider_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('slider_container__label', className)}>
            {label}
          </label>
        )}
        <input
          type='range'
          id={name}
          className={cx('', className)}
          min={min}
          step={step}
          max={max}
          value={rangeValue}
          onChange={e => setRangeValue(Number(e.target.value))}
          {...rest}
        />
        <div className='slider_container__value'>
          {cx(rangeValue > 0 ? cx(rangeValue, suffix) : rangeValue)}
        </div>
        {help && <p className={cx('slider_container__help', className)}>{help}</p>}
      </div>
    </>
  )
}
