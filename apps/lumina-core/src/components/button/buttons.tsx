import styles from "./buttons.module.scss"
import classnames from 'classnames'

type TProps = {
  href?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  outline?: boolean
  round?: boolean
  color?: 'primary' | 'secondary' | 'warning' | 'danger'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
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
            <span className={classnames(styles.icon, iconLeft)} />
          )
        }
        {text && (<span>{text}</span>)}
        {
          iconRight && (
            <span className={classnames(styles.icon, iconRight)} />
          )
        }
      </span>
    </>
  )
}

export const Button = ({
  href,
  text,
  iconLeft,
  iconRight,
  outline,
  round,
  color = 'primary',
  onClick
}: TProps) => {
  const mainClassNames = classnames(
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
