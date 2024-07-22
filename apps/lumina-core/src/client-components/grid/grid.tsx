import styles from '@/client-components/grid/grid.module.css'
import { config } from './config'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

type TProps = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({ children, style, id }: TProps) => {
  return (
    <div className={styles.grid + (style ? ' ' + styles[style] : '')}>
      {children}
      <EditorButtonsContainer id={id} config={config} data={{ style }} />
    </div>
  )
}
