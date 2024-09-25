'use client'

import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import styles from './image.module.scss'

type TProps = {
  id: string
  srcMobile: string
  srcTablet: string
  srcDesktop: string
  alt: string
}

//block of buttons

export const Image = ({ srcMobile, srcTablet, srcDesktop, alt, id }: TProps) => {
  if (!srcDesktop) return null

  return (
    <div className={styles.imageContainer}>
      <picture>
        {(srcMobile && <source media='(max-width: 576px)' srcSet={srcMobile} />) || null}
        {(srcTablet && <source media='(max-width: 768px)' srcSet={srcTablet} />) || null}
        <img className={styles.image} src={srcDesktop} alt={alt} />
      </picture>
      <EditorButtonsContainer
        id={id}
        config={config}
        componentProps={{ srcMobile, srcTablet, srcDesktop, alt }}
      />
    </div>
  )
}
