import { ButtonContent } from './buttonContent/index.js'
import cx from 'classnames'
import { TLumButton } from './button-models.js'
import { forwardRef } from 'react'

export type { TLumButton }

/**
 *
 * @param buttonType defines the type of button to be rendered (ex: 'button' | 'link' | 'externalLink')
 * @param style defines the CSS type for the button (ex: 'primary' | 'secondary' | 'warning' | 'danger' | 'filter' | 'live' | 'menuButton')
 * @param size defines the size of the button ('small' | 'large')
 * @param className allows you to use multiple classes inside
 * @param text allows you to put a text in the button
 * @param iconLeft positions the icon on left side of the text
 * @param iconRight positions the icon on right side of the text
 * @param onClick allows you to use functions inside the onClick prop
 * @param href only useable on 'externalLink' and 'link'
 * @param disabled disables the button, no need to ={true} as when it's being called it's already "true"
 * @param target sets the target page, only useable on 'externalLink' and 'link'
 * @returns
 */

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, TLumButton>(
  (props, ref) => {
    const { className, style, buttonType, text, iconLeft, iconRight, size, type } = props
    const allClassNames = `${style ? style : ''} ${className ? className : ''} ${size ? size : ''}`

    if (buttonType === 'button') {
      const { onClick, disabled, isFullWidth } = props
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cx('lum-button', allClassNames, { fullWidth: isFullWidth })}
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
        </button>
      )
    } else if (buttonType === 'externalLink') {
      const { href, target } = props
      return (
        <a className={allClassNames} href={href} target={target}>
          <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
        </a>
      )
    } else if (buttonType === 'link') {
      const { href } = props
      return (
        <a className={allClassNames} href={href}>
          <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
        </a>
      )
    }
  }
)

Button.displayName = 'Button'
