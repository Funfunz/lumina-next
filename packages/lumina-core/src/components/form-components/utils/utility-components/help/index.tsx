import cx from 'classnames'
import { forwardRef, HTMLAttributes } from 'react'
import './styles.scss'

type THelpTextProps = HTMLAttributes<HTMLParagraphElement> & {
  className?: string
  help?: string
}

export const HelpText = forwardRef<HTMLParagraphElement, THelpTextProps>(
  ({ className, help, ...rest }, ref) => {
    if (!help) {
      return null
    }
    return (
      <p className={cx('help_text', className)} ref={ref} {...rest}>
        {help}
      </p>
    )
  }
)

HelpText.displayName = 'HelpText'
