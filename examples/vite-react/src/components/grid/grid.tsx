<<<<<<< HEAD:apps/lumina-core/src/client-components/grid/grid.tsx
import styles from '@/client-components/grid/grid.module.css'
=======
import { EditorButton } from '@lumina/core'
import styles from './grid.module.scss'
>>>>>>> master:examples/vite-react/src/components/grid/grid.tsx
import { config } from './config'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

type TProps = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({ children, style, id }: TProps) => {
  return (
<<<<<<< HEAD:apps/lumina-core/src/client-components/grid/grid.tsx
    <div className={styles.grid + (style ? ' ' + styles[style] : '')}>
=======
    <div className={styles.grid + (style ?  ' ' + style : '')}>
>>>>>>> master:examples/vite-react/src/components/grid/grid.tsx
      {children}
      <EditorButtonsContainer id={id} config={config} data={{ style }} />
    </div>
  )
}
