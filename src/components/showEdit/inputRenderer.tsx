'use client';

import { ChangeEvent, useCallback } from 'react'

type TProps = {
  type: string,
  name: string,
  value: string | number,
  handleOnChangeInput: (key: string, value: string | number) => void
}

export const InputRenderer = ({type, name, value, handleOnChangeInput}: TProps) => {

  let handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(name, event.target.value)
    },
    [name, handleOnChangeInput, value]
  )

  return (
    <div>
      <input type={type} value={value} name={name} onChange={handleOnChange}></input>
    </div>
  )
}