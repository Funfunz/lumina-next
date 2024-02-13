import styles from '@/components/grid/grid.module.css'

type Props = {
  children: React.ReactNode
  style: string
}

export const Grid = ({children, style}: Props) => {
  return (
    <div className={styles.grid + (style ?  ' ' + styles[style] : '')}>
      {children}
    </div>
  )
}
