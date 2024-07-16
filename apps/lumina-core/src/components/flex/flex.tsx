import styles from '@/components/flex/flex.module.css'
import { LuminaShowEdit } from '../lumina-showEdit/lumina-showEdit'

type Props = {
  id: string
  children: React.ReactNode
  style: string
}

export const Flex = ({ id, children, style }: Props) => {
  const type = "flex"
  return (
    <>
      <div className={styles.flex + (style ? ' ' + styles[style] : '')}>
        {children}
      </div>
      <LuminaShowEdit id={id} componentType={type} componentProps={{ style }} />
    </>
  )
}