import styles from '@/client-components/grid/grid.module.css'
import { EditorButton } from '../../components/editor-button/editor-button'
import { config } from './config'

type TProps = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({children, style, id}: TProps) => {
  return (
    <div className={styles.grid + (style ?  ' ' + styles[style] : '')}>
      {children}
      <EditorButton id={id} config={config} data={{style}}/>
    </div>
  )
}
