import styles from '@/components/linkBox/linkBox.module.css'
import { LuminaShowEdit } from '@/components/lumina-showEdit/lumina-showEdit'
import { config } from './config'
import { IInitialStateType } from './LinkboxContextV2'

export const LinkBoxInternalNested = ({ state, onUpdateCallback }: { state: IInitialStateType, onUpdateCallback: (state: IInitialStateType) => void }) => {
  if (!state) return null
  return (
    <a
      href={state.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LuminaShowEdit id={state.id} onUpdate={onUpdateCallback} config={config} data={state} />
      <h2 style={{ color: state.color }}>
        {state.title} <span>-&gt;</span>
      </h2>
      <p>{state.description}</p>
    </a>
  )
}
