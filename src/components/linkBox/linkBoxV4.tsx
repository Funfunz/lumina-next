"use client";

/* supports server side render
*  do not use useEffect, it makes the component render on the frontend
*/

import { useState } from 'react'
import { LinkBoxInternalNested } from './linkBoxInternalNested'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({id, title, description, href, color = 'black'}: TProps) => {  
  const [data, setData] = useState({id, title, description, href, color})

  const onUpdateCallback = (data: any) => {
    setData(data)
  }

  if (!data) return null
  return (
    <LinkBoxInternalNested state={data} onUpdateCallback={onUpdateCallback}/>
  )
}