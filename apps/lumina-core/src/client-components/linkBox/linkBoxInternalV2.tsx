import styles from '@/client-components/linkBox/linkBox.module.css'
import { config } from './config'
import { LinkBoxContext } from './LinkboxContextV2'
import { useContext } from 'react'
import { EditorButton } from '@/components/editor-button/editor-button'

type TData =  {
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBoxInternal = () => {
  const {state, dispatch} = useContext(LinkBoxContext)

  const onUpdateCallback = (data: TData) => {
    dispatch(data)
  }

  if (!state) return null
  return (
    <a
      href={state.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButton id={state.id} onUpdate={onUpdateCallback} config={config} data={state}/>
      <h2 style={{color: state.color}}>
        {state.title} <span>-&gt;</span>
      </h2>
      <p>{state.description}</p>
    </a>
  )
}
