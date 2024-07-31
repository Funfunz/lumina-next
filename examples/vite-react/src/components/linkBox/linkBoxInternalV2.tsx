import { config } from './config'
import { LinkBoxContext } from './LinkboxContextV2'
import { useContext } from 'react'
<<<<<<< HEAD:apps/lumina-core/src/client-components/linkBox/linkBoxInternalV2.tsx
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'
=======
import { EditorButton } from '@lumina/core'
>>>>>>> master:examples/vite-react/src/components/linkBox/linkBoxInternalV2.tsx

type TData = {
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBoxInternal = () => {
  const { state, dispatch } = useContext(LinkBoxContext)

  const onUpdateCallback = (data: TData) => {
    dispatch(data)
  }

  if (!state) return null
  return (
    <a
      href={state.href}
      className='card'
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButtonsContainer id={state.id} onUpdate={onUpdateCallback} config={config} data={state} />
      <h2 style={{ color: state.color }}>
        {state.title} <span>-&gt;</span>
      </h2>
      <p>{state.description}</p>
    </a>
  )
}
