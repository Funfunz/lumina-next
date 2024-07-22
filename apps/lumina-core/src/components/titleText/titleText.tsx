import { LuminaShowEdit } from '@/components/lumina-showEdit/lumina-showEdit'
import styles from '@/components/titleText/titleText.module.scss'
import { config } from "./config"

interface IProps {
  id: string
  title: string
  text: string
}

export const TitleText = ({ id, title, text }: IProps) => {
  return (
    <div className={styles.titleText}>
      <h1>{title}</h1>
      <p>{text}</p>
      <LuminaShowEdit id={id} config={config} componentProps={{ title, text }} />
    </div>
  )
}
