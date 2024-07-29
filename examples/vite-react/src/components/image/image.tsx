'use client'

import { config } from './config'
import { EditorButtonsContainer } from '@repo/lumina-core'
import styles from './image.module.scss'

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
        className='image'
        src={href}
        alt={alt}
      />
      <EditorButtonsContainer id={id} config={config} data={{ href, alt }} />
    </div>
  )
}
