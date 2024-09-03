import cx from 'classnames'
import { forwardRef, HTMLAttributes } from 'react'

interface IHelpTextProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
  help?: string
}

export const HelpText = forwardRef<HTMLParagraphElement, IHelpTextProps>(
  ({ className, help, ...rest }, ref) => {
    return (
      <p className={cx('help_text', className)} ref={ref} {...rest}>
        {help}
      </p>
    )
  }
)

HelpText.displayName = 'HelpText'
