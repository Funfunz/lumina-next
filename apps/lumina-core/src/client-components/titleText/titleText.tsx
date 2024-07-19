import { EditorButton } from '@/components/editor-button/editor-button'
import { config } from './config'
import styles from './titleText.module.scss'

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
      <EditorButton id={id} config={config} data={{title, text}}/>
    </div>
  )
}
