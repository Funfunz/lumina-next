import styles from '@/components/flex/flex.module.css'

type Props = {
  children: React.ReactNode
  style: string
}

export const Flex = ({ children, style }: Props) => {
  return (
    <div className={styles.flex + (style ? ' ' + styles[style] : '')}>
      {children}
    </div>
  )
}
