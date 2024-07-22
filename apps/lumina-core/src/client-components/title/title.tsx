import { config } from './config'
import styles from './title.module.css'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

interface IProps {
  id: string
  title: string
}

export const Title = ({ id, title = "This is a title" }: IProps) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <EditorButtonsContainer id={id} config={config} data={{ title }} />
    </div>
  )
}
