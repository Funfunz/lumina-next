'use client'

import styles from '@/client-components/image/image.module.css'
import { config } from './config'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

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
      <EditorButtonsContainer id={id} config={config} data={{ href, alt }} />
    </div>
  )
}
