import { LuminaShowEdit } from '@/components/lumina-showEdit/lumina-showEdit'
import { config } from './config'
import styles from '@/components/titleText/titleText.module.scss'

interface IProps {
  id: string
  title: string
  text: string
}

export const TitleText = ({id, title, text}: IProps) => {
  return (
    <div className={styles.titleText}>
      <h1>{title}</h1>
      <p>{text}</p>
      <LuminaShowEdit id={id} config={config} data={{title, text}}/>
    </div>
  )
}
