import { ButtonContent } from '../buttonContent'
import cx from 'classnames'
import { TLumButtonAsButton, TLumButtonExternalLink, TLumButtonLink } from '../buttonTypes'
import { forwardRef } from 'react'

export const ButtonAsButton = forwardRef<HTMLButtonElement, TLumButtonAsButton>((props, ref) => {
  const {
    className,
    style,
    text,
    iconLeft,
    iconRight,
    size,
    type,
    onClick,
    disabled,
    isFullWidth,
  } = props
  const allClassNames = `${style ? style : ''} ${className ? className : ''} ${size ? size : ''}`

  return (
    <button
      ref={ref}
      className={cx('lum-button', allClassNames, { fullWidth: isFullWidth })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
    </button>
  )
})
ButtonAsButton.displayName = 'ButtonAsButton'

export const ButtonAsExternalLink = forwardRef<HTMLAnchorElement, TLumButtonExternalLink>(
  (props, ref) => {
    const { className, style, text, iconLeft, iconRight, size, href, target } = props
    const allClassNames = `${style ? style : ''} ${className ? className : ''} ${size ? size : ''}`

    return (
      <a ref={ref} className={allClassNames} href={href} target={target}>
        <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
      </a>
    )
  }
)
ButtonAsExternalLink.displayName = 'ButtonAsExternalLink'

export const ButtonAsLink = forwardRef<HTMLAnchorElement, TLumButtonLink>((props, ref) => {
  const { className, style, text, iconLeft, iconRight, size, href } = props
  const allClassNames = `${style ? style : ''} ${className ? className : ''} ${size ? size : ''}`

  return (
    <a ref={ref} className={allClassNames} href={href}>
      <ButtonContent text={text} iconLeft={iconLeft} iconRight={iconRight} />
    </a>
  )
})
ButtonAsLink.displayName = 'ButtonAsLink'
