import styles from "./lumina-button.module.scss"
import { ButtonContent } from "./lumina-buttonContent/lumina-buttonContent"
import { TLumButton } from "./lumina-button-models"
import { Link } from "react-router-dom"
import cx from "classnames"



export const LuminaButton = ({
  classNames = "",
  target='_blank',
  rel='noopener noreferrer',
  to = '/',
  href,
  text,
  iconLeft,
  iconRight,
  style = 'primary',
  disabled = false,
  buttonType,
  onClick
}: TLumButton) => {

  const allClassNames = `${style ? style : ''} ${classNames ? classNames: ''}`

  switch (buttonType){
    case "button":
    return (
      <button
        className={allClassNames}
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
    case "externalLink":
    return (
      <a className={allClassNames} href={href} target={target} rel={rel}>
          <ButtonContent
            text={text}
            iconLeft={iconLeft}
            iconRight={iconRight}
          />
        </a>
    )
    case "link":
    return (
      <Link className={allClassNames} to={to}>
          <ButtonContent
            text={text}
            iconLeft={iconLeft}
            iconRight={iconRight}
          />
      </Link>
    )
    case "menutButton":
    return (
      <button className={allClassNames} onClick={onClick} disabled={disabled}>
        <ButtonContent
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </button>
    )
    default:
    return null
    }
  }
