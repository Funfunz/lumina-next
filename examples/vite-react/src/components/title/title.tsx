<<<<<<< HEAD:apps/lumina-core/src/client-components/title/title.tsx
import { config } from './config'
import styles from './title.module.css'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'
=======
import { EditorButton } from '@lumina/core'
import { config } from './config'
import styles from './title.module.scss'
>>>>>>> master:examples/vite-react/src/components/title/title.tsx

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
