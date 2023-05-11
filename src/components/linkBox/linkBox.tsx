'use client';

import styles from '@/app/page.module.css'
import { ShowEdit } from '@/components/showEdit/showEdit';
import { useEffect, useState } from 'react';
import { config } from './config';

type Props = {
  id: string
  href: string
  title: string
  description: string
}

export const LinkBox = ({href, title, description, id}: Props) => {
  const [data, setData] = useState<Props>()
  useEffect(
    () => {
      setData({href, title, description, id})
    }, []
  )
  const onUpdateCallback = (data: Props) => {
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
      <ShowEdit id={data.id} onUpdate={onUpdateCallback} config={config}/>
      <h2>
        {data.title} <span>-&gt;</span>
      </h2>
      <p>{data.description}</p>
    </a>
  )
}