import cx from 'classnames'
import { forwardRef, HTMLAttributes } from 'react'

type THelpTextProps = HTMLAttributes<HTMLParagraphElement> & {
  className?: string
  help?: string
}

export const HelpText = forwardRef<HTMLParagraphElement, THelpTextProps>(
  ({ className, help, ...rest }, ref) => {
    return (
      <p className={cx('help_text', className)} ref={ref} {...rest}>
        {help}
      </p>
    )
  }
)

HelpText.displayName = 'HelpText'
