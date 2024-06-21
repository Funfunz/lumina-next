import styles from '@/components/grid/grid.module.css'
import { ShowEdit } from '../showEdit/showEdit'
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
      <ShowEdit id={id} config={config} data={{ style }} />
    </div>
  )
}
