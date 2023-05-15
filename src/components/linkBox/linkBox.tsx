'use client'

import styles from '@/components/linkBox/linkBox.module.css'
import { ShowEdit } from '@/components/showEdit/showEdit'
import { useEffect, useState } from 'react'
import { config } from './config'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

type TData =  {
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({id, title, description, href, color = 'white'}: TProps) => {
  const [data, setData] = useState<TData>()
  useEffect(
    () => {
      setData({href, title, description, color})
    }, []
  )
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
      <ShowEdit id={id} onUpdate={onUpdateCallback} config={config} data={data}/>
      <h2 style={{color: data.color}}>
        {data.title} <span>-&gt;</span>
      </h2>
      <p>{data.description}</p>
    </a>
  )
}