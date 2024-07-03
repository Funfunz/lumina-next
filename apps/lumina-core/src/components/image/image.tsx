'use client'

import styles from '@/components/image/image.module.css'
import { LuminaShowEdit } from '@/components/lumina-showEdit/lumina-showEdit'
import { config } from './config'

type TProps = {
  id: string
  href: string
  alt: string
}

export const Image = ({ href, alt, id }: TProps) => {

  if (!href) return null
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={href}
        alt={alt}
      />
      <LuminaShowEdit id={id} config={config} data={{ href, alt }} />
    </div>
  )
}
