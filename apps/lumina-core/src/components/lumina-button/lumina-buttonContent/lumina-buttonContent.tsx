import styles from "./lumina-buttonContent.module.scss";
import cx from 'classnames';

export const ButtonContent = ({
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

