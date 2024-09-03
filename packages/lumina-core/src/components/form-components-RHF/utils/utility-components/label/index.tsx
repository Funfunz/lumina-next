import cx from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

interface ILabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  className?: string
  label?: string
}

export const LabelTitle = forwardRef<HTMLLabelElement, ILabelProps>(
  ({ className, label, ...rest }, ref) => {
    return (
      <label className={cx('label-title', className)} ref={ref} {...rest}>
        {label}
      </label>
    )
  }
)

LabelTitle.displayName = 'LabelTitle'
