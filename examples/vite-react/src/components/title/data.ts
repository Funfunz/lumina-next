'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useData = <T>(props: T) => {
  const state = useState<T>(props)
  return state
}

export const useDataUpdated = <T>(setData: Dispatch<SetStateAction<T>>, data: T) => {
  useEffect(() => {
    setData(data)
  }, [setData, data])
}
