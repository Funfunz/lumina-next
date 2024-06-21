'use client'

import { ChangeEvent, ChangeEventHandler, useCallback } from 'react'
import { TConfigItem, TConfigItemSelect } from './showEdit';
import styles from "./showEdit.module.scss";

type TProps = {
  config: TConfigItem
  value: string | number
  handleOnChangeInput: (key: string, value: string | number) => void
}

function isSelect(config: TConfigItem): config is TConfigItemSelect {
  return config.type === 'singleSelect' || config.type === 'multiSelect'
}

export const InputRenderer = ({config, value, handleOnChangeInput}: TProps) => {

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
      <td className={`${styles.formTableCell} ${styles.formTableLabel}`}>
          <label htmlFor={config.name}>{config.label}</label>
      </td>
      <td className={styles.formTableCell} style={{width: "100%"}}>
        {isSelect(config) && (
          <select onChange={handleOnChangeSelectElement} value={value} id={(config as TConfigItemSelect).name}>
            {(config as TConfigItemSelect).arrayValues.map(
              (item) => (
                <option key={item} value={item}>{item}</option>
              )
            )}
          </select>
        ) || (
          <input className={styles.inputField} type={config.type} value={value} id={config.name} name={config.name} onChange={handleOnChangeInputElement} />
        )}
      </td>
    </tr>
  )
}