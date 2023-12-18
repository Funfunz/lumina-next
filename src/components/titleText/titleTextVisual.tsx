import { ShowEdit } from '@/components/showEdit/showEdit'
import { config } from './config'
import { IInitialStateType } from './titleTextContext'
import styles from '@/components/titleText/titleText.module.css'

export const TitleTextVisual = ({state, onUpdateCallback}: {state: IInitialStateType, onUpdateCallback: (state: IInitialStateType) => void}) => {  
  if (!state) return null
  return (
    <div className={styles.titleText}>
      <h1>{state.title}</h1>
      <p>{state.text}</p>
      <ShowEdit id={state.id} onUpdate={onUpdateCallback} config={config} data={state}/>
    </div>
  )
}
