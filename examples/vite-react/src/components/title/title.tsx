import { EditorButton } from '@lumina/core'
import { config } from './config'
import styles from './title.module.scss'

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
