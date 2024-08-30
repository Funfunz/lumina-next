import cx from 'classnames'
import { InputHTMLAttributes } from 'react'

interface ILabelProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name?: string
}

export const LabelTitle = ({ className, name, label }: ILabelProps) => {
  return (
    <label htmlFor={name} className={cx('label-title', className)}>
      {label}
    </label>
  )
}
