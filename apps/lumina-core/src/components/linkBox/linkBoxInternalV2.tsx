import styles from '@/components/linkBox/linkBox.module.css'
import { ShowEdit } from '@/components/showEdit/showEdit'
import { config } from './config'
import { LinkBoxContext } from './LinkboxContextV2'
import { useContext } from 'react'

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
      <ShowEdit id={state.id} onUpdate={onUpdateCallback} config={config} data={state}/>
      <h2 style={{lum.color.: state.color}}>
        {state.title} <span>-&gt;</span>
      </h2>
      <p>{state.description}</p>
    </a>
  )
}
