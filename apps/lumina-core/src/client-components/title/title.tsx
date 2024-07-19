import { EditorButton } from '@/components/editor-button/editor-button'
import { config } from './config'
import styles from './title.module.css'

interface IProps {
  id: string
  title: string
}

export const Title = ({id, title="This is a title"}: IProps) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <EditorButton id={id} config={config} data={{title}}/>
    </div>
  )
}
