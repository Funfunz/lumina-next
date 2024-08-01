'use client'

// does not support server side render

import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({ id, title, description, href, color = 'black' }: TProps) => {

  if (!title || !description || !href) return null
  return (
    <a
      href={href}
      className='card'
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButtonsContainer id={id} config={config} data={{ title, description, href, color }} />
      <h2 style={{ color }}>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  )
}
