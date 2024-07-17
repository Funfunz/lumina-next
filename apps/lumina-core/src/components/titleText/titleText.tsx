import { LuminaShowEdit } from '@/components/lumina-showEdit/lumina-showEdit'
import styles from '@/components/titleText/titleText.module.scss'

interface IProps {
  id: string
  title: string
  text: string
}

export const TitleText = ({ id, title, text }: IProps) => {
  const type = "titleText"
  return (
    <div className={styles.titleText}>
      <h1>{title}</h1>
      <p>{text}</p>
      <LuminaShowEdit id={id} componentType={type} componentProps={{ title, text }} />
    </div>
  )
}
