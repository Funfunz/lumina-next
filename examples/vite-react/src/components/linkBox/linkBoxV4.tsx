'use client'

/* supports server side render
 *  do not use useEffect, it makes the component render on the frontend
 */

import { useState } from 'react'
import { IInitialStateType } from './LinkboxContextV2'
import { LinkBoxInternalNested } from './linkBoxInternalNested'

export const LinkBox = ({ id, title, description, href, color = 'black' }: IInitialStateType) => {
  const [data, setData] = useState({ id, title, description, href, color })

  const onUpdateCallback = (data: IInitialStateType) => {
    setData(data)
  }

  if (!data) return null
  return <LinkBoxInternalNested state={data} onUpdateCallback={onUpdateCallback} />
}
