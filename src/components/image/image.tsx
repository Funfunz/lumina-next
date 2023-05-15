'use client'

import styles from '@/components/image/image.module.css'
import { ShowEdit } from '@/components/showEdit/showEdit'
import { useEffect, useState } from 'react'
import { config } from './config'

type TProps = {
  id: string
  href: string
  alt: string
}

type TData =  {
  href: string
  alt: string
}

export const Image = ({href, alt, id}: TProps) => {
  const [data, setData] = useState<TData>()
  useEffect(
    () => {
      setData({href, alt})
    }, []
  )
  const onUpdateCallback = (data: TData) => {
    setData(data)
  }

  if (!data) return null
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={data.href}
        alt={data.alt}
      />
      <ShowEdit id={id} onUpdate={onUpdateCallback} config={config} data={data}/>
    </div>
  )
}