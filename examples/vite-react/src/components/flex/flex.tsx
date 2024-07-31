import styles from './flex.module.scss'

type Props = {
  children: React.ReactNode
  style: string
}

export const Flex = ({ children, style }: Props) => {
  return (
    <div className={styles.flex + (style ? ' ' + style : '')}>
      {children}
    </div>
  )
}
