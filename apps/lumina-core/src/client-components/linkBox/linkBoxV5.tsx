// does not support server side render

import styles from '@/client-components/linkBox/linkBox.module.css'
import { config } from './config'
import { EditorButton } from '@/components/editor-button/editor-button'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({id, title, description, href, color = 'black'}: TProps) => {
  if (!id || !title || !description || !href) return null
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButton id={id}config={config} data={{id, title, description, href, color}}/>
      <h2 style={{color}}>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  )
}
