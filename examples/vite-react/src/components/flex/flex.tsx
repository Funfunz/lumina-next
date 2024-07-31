import styles from './flex.module.scss'

type Props = {
  children: React.ReactNode
  style: string
}

export const Flex = ({ children, style }: Props) => {
  return (
<<<<<<< HEAD:apps/lumina-core/src/client-components/flex/flex.tsx
    <div className={styles.flex + (style ? ' ' + styles[style] : '')}>
=======
    <div className={styles.flex + (style ?  ' ' + style : '')}>
>>>>>>> master:examples/vite-react/src/components/flex/flex.tsx
      {children}
    </div>
  )
}
