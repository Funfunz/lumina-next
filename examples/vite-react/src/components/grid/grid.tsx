import { EditorButton } from '@lumina/core'
import styles from './grid.module.scss'
import { config } from './config'

type TProps = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({children, style, id}: TProps) => {
  return (
    <div className={styles.grid + (style ?  ' ' + style : '')}>
      {children}
      <EditorButton id={id} config={config} data={{style}}/>
    </div>
  )
}
