import styles from '@/components/grid/grid.module.css'
import { LuminaShowEdit } from '../lumina-showEdit/lumina-showEdit'
import { config } from './config'

type Props = {
  children: React.ReactNode
  style?: "column"
  id: string
}

export const Grid = ({ children, style, id }: Props) => {
  return (
    <div className={styles.grid + (style ? ' ' + styles[style] : '')}>
      {children}
      <LuminaShowEdit id={id} config={config} componentProps={{ style }} />
    </div>
  )
}
