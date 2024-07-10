import styles from "./lumina-button.module.scss"
import { ButtonContent } from "./lumina-buttonContent/lumina-buttonContent"
import { TLumButtonProps } from "./lumina-button-models"
import Link from "next/link"
import cx from "classnames"


/**
 * 
 * @param buttonType defines the type of button to be rendered (ex: 'button' | 'link' | 'externalLink' | 'menutButton')
 * @param style 
 * @param classNames 
 * @returns 
 */
export const LuminaButton = (props: TLumButtonProps) => {
  const { classNames, style, buttonType, text, iconLeft, iconRight } = props
  const allClassNames = `${style ? styles[style] : ''} ${classNames ? classNames : ''}`


  if (buttonType === "button") {
    const { onClick, disabled, isMenuButton } = props
    return (
      <button
        className={cx(styles.button, allClassNames, { [styles.menuButton]: isMenuButton })}
        onClick={onClick}
        disabled={disabled}
      >
        <ButtonContent
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
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

