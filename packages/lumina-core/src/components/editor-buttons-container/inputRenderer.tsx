'use client'

import { ChangeEvent, ChangeEventHandler, PropsWithChildren, useCallback } from 'react'
import type { TConfigItem, TConfigItemSelect } from '@/models/editor-buttonModel'
import { Input } from '../form-components/input'

type TProps = {
  config: TConfigItem
  value: string | number | undefined
  /* eslint-disable no-unused-vars */
  handleOnChangeInput: (key: string, value: string | number) => void
}

export const Form: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <table className='formTable'>
      <tbody>{children}</tbody>
    </table>
  )
}

function isSelect(config: TConfigItem): config is TConfigItemSelect {
  return config.type === 'singleSelect' || config.type === 'multiSelect'
}

export const LuminaInputRenderer = ({ config, value, handleOnChangeInput }: TProps) => {
  const handleOnChangeInputElement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(config.name, event.target.value)
    },
    [handleOnChangeInput, config.name]
  )

  const handleOnChangeSelectElement: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      handleOnChangeInput(config.name, event.target.selectedOptions[0].value)
    },
    [handleOnChangeInput, config.name]
  )

  return (
    <tr>
      <td className='formTableCell formTableLabel'>
        <label htmlFor={config.name}>{config.label}</label>
      </td>
      <td className='formTableCell' style={{ width: '100%' }}>
        {(isSelect(config) && (
          <select
            onChange={handleOnChangeSelectElement}
            value={value}
            id={(config as TConfigItemSelect).name}
          >
            {(config as TConfigItemSelect).arrayValues.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )) || (
          <Input
            className='inputField'
            type={config.type}
            value={value}
            id={config.name}
            name={config.name}
            onChange={handleOnChangeInputElement}
          ></Input>
        )}
      </td>
    </tr>
  )
}
