import styles from "./lumina-button.module.scss"
import cx from 'classnames'
import { ButtonContent } from "./lumina-buttonContent/lumina-buttonContent"

type TProps = {
  href?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  outline?: boolean
  round?: boolean
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'disabled' | 'filter'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const LuminaButton = ({
  href,
  text,
  iconLeft,
  iconRight,
  outline,
  round,
  color = 'primary',
  onClick
}: TProps) => {
  const mainClassNames = cx(
    styles[color],
    styles.button,
    {
      [styles.outline]: outline,
      [styles.round]: round,
    }
  )
  if (href) {
    return (
      <a href={href}>
        <ButtonContent
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </a>
    )
  }
  return (
    <button className={mainClassNames} onClick={onClick}>
      <ButtonContent
        text={text}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </button>
  )
}
