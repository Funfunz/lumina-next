import styles from './grid.module.scss'
import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'

type TProps = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({ children, style, id }: TProps) => {
  return (
    <div className={styles.grid + (style ? ' ' + style : '')}>
      {children}
      <EditorButtonsContainer id={id} config={config} data={{ style }} />
    </div>
  )
}
