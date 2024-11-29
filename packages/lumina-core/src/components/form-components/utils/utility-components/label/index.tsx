import cx from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import './styles.scss'

type TLabelProps = InputHTMLAttributes<HTMLLabelElement> & {
  className?: string
  label?: string
}

export const LabelTitle = forwardRef<HTMLLabelElement, TLabelProps>(
  ({ className, label, ...rest }, ref) => {
    if (!label) {
      return null
    }
    return (
      <label className={cx('label-title', className)} ref={ref} {...rest}>
        {label}
      </label>
    )
  }
)

LabelTitle.displayName = 'LabelTitle'
