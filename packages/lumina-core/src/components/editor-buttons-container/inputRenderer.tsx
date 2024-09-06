'use client'

import { ChangeEvent, ChangeEventHandler, PropsWithChildren, useCallback } from 'react'
import type { TConfigItem, TConfigItemSelect, TConfigItemValue } from '@/models/editor-buttonModel'
import { Input } from '../form-components/input'
import { CheckBox } from '../form-components/checkbox'

type TProps = {
  config: TConfigItem
  value: string | number | boolean | undefined
  /* eslint-disable no-unused-vars */
  handleOnChangeInput: (key: string, value: string | number | boolean) => void
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

function isCheckbox(config: TConfigItem): config is TConfigItemValue {
  return config.type === 'boolean'
}

export const LuminaInputRenderer = ({ config, value, handleOnChangeInput }: TProps) => {
  const handleOnChangeInputElement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(
        config.name,
        config.type === 'number' ? Number(event.target.value) : event.target.value
      )
    },
    [handleOnChangeInput, config.name]
  )

  const handleOnChangeCheckboxElement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(config.name, event.currentTarget.checked)
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
            value={value as string}
            id={(config as TConfigItemSelect).name}
          >
            {(config as TConfigItemSelect).arrayValues.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )) ||
          (isCheckbox(config) && (
            <CheckBox
              className='inputField'
              type='checkbox'
              id={config.name}
              name={config.name}
              onChange={handleOnChangeCheckboxElement}
              checked={value as boolean}
            ></CheckBox>
          )) || (
            <Input
              className='inputField'
              type={config.type}
              value={value as string}
              id={config.name}
              name={config.name}
              onChange={handleOnChangeInputElement}
            ></Input>
          )}
      </td>
    </tr>
  )
}
