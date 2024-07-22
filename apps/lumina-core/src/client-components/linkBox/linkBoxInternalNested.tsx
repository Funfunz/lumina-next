import styles from '@/client-components/linkBox/linkBox.module.css'
import { config } from './config'
import { IInitialStateType } from './LinkboxContextV2'
import { EditorButton } from '@/components/editor-button/editor-button'

export const LinkBoxInternalNested = ({ state, onUpdateCallback }: { state: IInitialStateType, onUpdateCallback: (state: IInitialStateType) => void }) => {
  if (!state) return null
  return (
    <a
      href={state.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButton id={state.id} onUpdate={onUpdateCallback} config={config} data={state} />
      <h2 style={{ color: state.color }}>
        {state.title} <span>-&gt;</span>
      </h2>
      <p>{state.description}</p>
    </a>
  )
}
