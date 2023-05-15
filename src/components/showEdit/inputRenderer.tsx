'use client'

import { ChangeEvent, ChangeEventHandler, useCallback } from 'react'
import { TConfigItem, TConfigItemSelect } from './showEdit';

type TProps = {
  config: TConfigItem
  value: string | number
  handleOnChangeInput: (key: string, value: string | number) => void
}

function isSelect(config: TConfigItem): config is TConfigItemSelect {
  return config.type === 'singleSelect' || config.type === 'multiSelect'
}

export const InputRenderer = ({config, value, handleOnChangeInput}: TProps) => {

  let handleOnChangeInputElement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(config.name, event.target.value)
    },
    [name, handleOnChangeInput, value]
  )

  let handleOnChangeSelectElement: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      handleOnChangeInput(config.name, event.target.selectedOptions[0].value)
    },
    [name, handleOnChangeInput, value]
  )


  if (isSelect(config)) {
    return (
      <div>
        <label htmlFor={config.name}>{config.label}</label>
        <select onChange={handleOnChangeSelectElement} id={config.name}>
          {config.arrayValues.map(
            (item) => (
              <option selected={value===item} value={item}>{item}</option>
            )
          )}
        </select>
      </div>
    )
  }

  return (
    <div>
      <label htmlFor={config.name}>{config.label}</label>
      <input type={config.type} value={value} id={config.name} name={config.name} onChange={handleOnChangeInputElement}></input>
    </div>
  )
}