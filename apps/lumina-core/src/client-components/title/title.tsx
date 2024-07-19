import { EditorButton } from '@/components/editor-button/editor-button'
import { config } from './config'
import styles from './title.module.scss'

interface IProps {
  id: string
  title: string
}

export const Title = ({id, title}: IProps) => {
  return (
    <div className={styles.titleText}>
      <h1>{title}</h1>
      <EditorButton id={id} config={config} data={{title}}/>
    </div>
  )
}
