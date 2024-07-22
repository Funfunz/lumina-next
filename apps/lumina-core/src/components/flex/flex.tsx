import styles from '@/components/flex/flex.module.css'
import { LuminaShowEdit } from '../lumina-showEdit/lumina-showEdit'
import { config } from "./config"

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
      <LuminaShowEdit id={id} config={config} componentProps={{ style }} />
    </>
  )
}