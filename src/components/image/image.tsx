'use client'

import styles from '@/components/image/image.module.css'
import { ShowEdit } from '@/components/showEdit/showEdit'
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
      <ShowEdit id={id} config={config} data={{ href, alt }} />
    </div>
  )
}
