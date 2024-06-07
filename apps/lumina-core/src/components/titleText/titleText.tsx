import { ShowEdit } from '@/components/showEdit/showEdit'
import { config } from './config'
import styles from '@/components/titleText/titleText.module.css'

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
      <ShowEdit id={id} config={config} data={{title, text}}/>
    </div>
  )
}