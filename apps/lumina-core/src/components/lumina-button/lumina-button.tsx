import styles from "./lumina-button.module.scss"
import { ButtonContent } from "./lumina-buttonContent/lumina-buttonContent"
import Link from "next/link"
import cx from "classnames"
import { TLumButton } from "./lumina-button-models"

/**
 *
 * @param buttonType defines the type of button to be rendered (ex: 'button' | 'link' | 'externalLink')
 * @param style defines the CSS type for the button (ex: 'primary' | 'secondary' | 'warning' | 'danger' | 'filter' | 'live')
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

export const LuminaButton = (props: TLumButton) => {
  const { className, style, buttonType, text, iconLeft, iconRight, size } = props
  const allClassNames = `${style ? styles[style] : ''} ${className ? className : ''} ${size ? styles[size] : '' }`

  if (buttonType === "button") {
    const { onClick, disabled, isMenuButton } = props
    return (
      <button
        className={cx(styles.button, allClassNames, { [styles.menuButton]: isMenuButton }, { [styles[`${style}-disabled`]]: disabled })}
        onClick={onClick}
      >
        <ButtonContent
          text={text}
          iconLeft={iconLeft ? `${iconLeft} ${disabled ? 'icon-disabled' : ''}` : ''}
          iconRight={iconRight ? `${iconRight} ${disabled ? 'icon-disabled' : ''}` : ''}
        />
      </button>
    )
  } else if (buttonType === "externalLink") {
    const { href, target } = props
    return (
      <a className={allClassNames} href={href} target={target}>
        <ButtonContent
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </a>
    )
  } else if (buttonType === "link") {
    const { href } = props
    return (
      <Link className={allClassNames} href={href}>
        <ButtonContent
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </Link>
    )
  }
}

