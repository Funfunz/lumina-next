'use client'

// does not support server side render

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

export const LinkBox = ({id, title, description, href, color = 'black'}: TProps) => {

  if (!title || !description || !href) return null
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShowEdit id={id} config={config} data={{ title, description, href, color}}/>
      <h2 style={{color}}>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  )
}
