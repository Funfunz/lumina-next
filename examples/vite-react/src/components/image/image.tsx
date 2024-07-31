'use client'

import { config } from './config'
<<<<<<< HEAD:apps/lumina-core/src/client-components/image/image.tsx
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'
=======
import { EditorButton } from '@lumina/core'
import styles from './image.module.scss'
>>>>>>> master:examples/vite-react/src/components/image/image.tsx

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
