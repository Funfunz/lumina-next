import { InputHTMLAttributes } from 'react'
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
  value?: number
}

export const Slider = ({
  name,
  className,
  label,
  help,
  step,
  min = 0,
  max,
  value,
  ...rest
}: ISlider) => {
  return (
    <>
      <div className={cx('slider_container', className)}>
        {label && (
          <label htmlFor={name} className={cx('slider_container__label', className)}>
            {label}
          </label>
        )}
        <div className=''>
          <input
            type='range'
            id={name}
            className={cx('', className)}
            min={min}
            step={step}
            max={max}
            {...rest}
          />
          <div>{value}</div>
        </div>
        {help && <p className={cx('slider_container__help', className)}>{help}</p>}
      </div>
    </>
  )
}
