import { EditorButtonsContainer } from '@lumina/core'
import { config } from './config'
import styles from './title.module.scss'

interface IProps {
  id: string
  title: string
}

export const Title = ({ id, title }: IProps) => {
  if (!title) return null
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <EditorButtonsContainer id={id} config={config} componentProps={{ title }} />
    </div>
  )
}
