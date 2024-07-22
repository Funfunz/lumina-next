import styles from "../button.module.scss";
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
      <span className={styles.buttonContainer}>
        {
          iconLeft && (
            <span className={cx(styles.icon, iconLeft)}/>
          )
        }
        {text && (<span className={styles.buttonText}>{text}</span>)}
        {
          iconRight && (
            <span className={cx(styles.icon, iconRight)}/>
          )
        }
      </span>
    </>
  )
}

