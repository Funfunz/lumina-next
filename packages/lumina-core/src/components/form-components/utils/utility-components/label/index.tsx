import cx from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

type TLabelProps = InputHTMLAttributes<HTMLLabelElement> & {
  className?: string
  label?: string
}

export const LabelTitle = forwardRef<HTMLLabelElement, TLabelProps>(
  ({ className, label, ...rest }, ref) => {
    return (
      <label className={cx('label-title', className)} ref={ref} {...rest}>
        {label}
      </label>
    )
  }
)

LabelTitle.displayName = 'LabelTitle'
