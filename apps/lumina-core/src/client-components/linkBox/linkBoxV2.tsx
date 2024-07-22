// does not support server side render

import styles from '@/client-components/linkBox/linkBox.module.css'
import { config } from './config'
import { useData, useDataUpdated } from './data'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

type TData = {
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({ id, title, description, href, color = 'black' }: TProps) => {
  const [data, setData] = useData<TData>({ href, title, description, color })
  useDataUpdated(setData, { href, title, description, color })
  const onUpdateCallback = (data: TData) => {
    setData(data)
  }

  if (!data) return null
  return (
    <a
      href={data.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EditorButtonsContainer id={id} onUpdate={onUpdateCallback} config={config} data={data} />
      <h2 style={{ color: data.color }}>
        {data.title} <span>-&gt;</span>
      </h2>
      <p>{data.description}</p>
    </a>
  )
}
