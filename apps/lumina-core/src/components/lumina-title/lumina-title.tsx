import styles from "./lumina-title.module.scss"

type TProps = {
  title: string
}

export const LuminaTitle = ({ title }: TProps) => {
  return (
    <h3 className={styles.luminaTitle}>{title}</h3>
  )
}