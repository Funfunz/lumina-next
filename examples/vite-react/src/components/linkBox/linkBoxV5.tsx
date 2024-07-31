// does not support server side render

import { config } from './config'
<<<<<<< HEAD:apps/lumina-core/src/client-components/linkBox/linkBoxV5.tsx
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'
=======
import { EditorButton } from '@lumina/core'
>>>>>>> master:examples/vite-react/src/components/linkBox/linkBoxV5.tsx

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({ id, title, description, href, color = 'black' }: TProps) => {
  if (!id || !title || !description || !href) return null
  return (
    <a
      href={href}
      className='card'
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButtonsContainer id={id} config={config} data={{ id, title, description, href, color }} />
      <h2 style={{ color }}>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  )
}
