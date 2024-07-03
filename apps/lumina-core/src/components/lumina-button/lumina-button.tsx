import styles from "./lumina-button.module.scss"
import cx from 'classnames'

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

const Content = ({
  text,
  iconLeft,
  iconRight,
}: {
  text?: string
  iconLeft?: string
  iconRight?: string
}) => {
  return (
    <>
      <span className={styles.buttonContent}>
        {
          iconLeft && (
            <span className={cx(styles.icon, iconLeft)}/>
          )
        }
        {text && (<span>{text}</span>)}
        {
          iconRight && (
            <span className={cx(styles.icon, iconRight)}/>
          )
        }
      </span>
    </>
  )
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
        <Content
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      </a>
    )
  }
  return (
    <button className={mainClassNames} onClick={onClick}>
      <Content
        text={text}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </button>
  )
}
