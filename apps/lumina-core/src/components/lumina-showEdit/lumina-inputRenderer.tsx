'use client'

import { ChangeEvent, ChangeEventHandler, PropsWithChildren, useCallback } from 'react'
import { TConfigItem, TConfigItemSelect } from '@/lumina-models/lumina-showEditModel';
import styles from "./lumina-showEdit.module.scss";

type TProps = {
  config: TConfigItem
  value: string | number
  handleOnChangeInput: (key: string, value: string | number) => void
}

export const Form: React.FC<PropsWithChildren> = ({ children }) => {
  return <table className={styles.formTable}><tbody>{children}</tbody></table>
}

function isSelect(config: TConfigItem): config is TConfigItemSelect {
  return config.type === 'singleSelect' || config.type === 'multiSelect'
}

export const LuminaInputRenderer = ({ config, value, handleOnChangeInput }: TProps) => {

  let handleOnChangeInputElement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleOnChangeInput(config.name, event.target.value)
    },
    [handleOnChangeInput, config.name]
  )

  let handleOnChangeSelectElement: ChangeEventHandler<HTMLSelectElement> = useCallback(
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
      <td className={styles.formTableCell} style={{ width: "100%" }}>
        {isSelect(config) && (
          <select onChange={handleOnChangeSelectElement} value={value} id={(config as TConfigItemSelect).name}>
            {(config as TConfigItemSelect).arrayValues.map(
              (item) => (
                <option key={item} value={item}>{item}</option>
              )
            )}
          </select>
        ) || (
            <input className={styles.inputField} type={config.type} value={value} id={config.name} name={config.name} onChange={handleOnChangeInputElement}></input>
          )}
      </td>
    </tr>
  )
}
