import styles from '@/client-components/grid/grid.module.css'
import { EditorButton } from '../../components/editor-button/editor-button'
import { config } from './config'

type Props = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({children, style, id}: Props) => {
  return (
    <div className={styles.grid + (style ?  ' ' + styles[style] : '')}>
      {children}
      <EditorButton id={id} config={config} data={{style}}/>
    </div>
  )
}
