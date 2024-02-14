'use client';

import { useAppContext } from '@/context/contextProvider'
import styles from './showEdit.module.scss'
import { useCallback, useState } from 'react'
import ReactModal from 'react-modal'
import { IComponentProps } from '@/data/data';
import { InputRenderer } from './inputRenderer';

export type TConfigItem = TConfigItemValue | TConfigItemSelect

interface TConfigItemBase {
  name: string
  label: string
}

export interface TConfigItemValue extends TConfigItemBase {
  type: 'string' | 'number'
}

export interface TConfigItemSelect<T = string> extends TConfigItemBase {
  type: 'singleSelect' | 'multiSelect'
  arrayValues: T[]
}

export type TElementConfig = (TConfigItemValue | TConfigItemSelect)[]

type Props = {
  id: string,
  onUpdate?: (data: any) => void,
  data: IComponentProps
  config?: TConfigItem[]
  inline?: boolean
}

const customStyles = {
  overlay: {
    zIndex: 1000
  },
  content: {
    color: 'black',
    top: '15%',
    left: '15%',
    right: '15%',
    bottom: '15%',
  }
}

export const ShowEdit = ({id, onUpdate, config, data, inline}: Props) => {
  let { state: { appContext: { editor } }, dispatch } = useAppContext()
  let  [showModal, setShowModal] = useState(false)
  let  [formData, setFormData] = useState(data)
  
  let handleOnClickEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(true)
    },
    []
  )

  let handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      alert('Delete button clicked from ' + id)
      dispatch({
        type: 'deleteComponent',
        data: {
          id,
        }
      })
    },
    [dispatch, id]
  )

  let handleCloseModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(false)
    },
    []
  )
  
  let handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value
      })
    },
    [formData]
  )

  let handleOnClickSaveData = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(false)
      onUpdate && onUpdate(formData)
      dispatch({
        type: 'updateBackend',
        data: {
          props: formData,
          id,
        }
      })
      dispatch({
        type: 'updateComponent',
        data: {
          newProps: formData,
          id,
        }
      })
    },
    [dispatch, formData, id, onUpdate]
  )

  if (!editor) return null

  return (
    <>
      {config && (
        <ReactModal 
          ariaHideApp={false}
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          {config.map(
            (configItem, index) =>  (
              <InputRenderer
                key={index}
                config={configItem}
                value={formData[configItem.name] || ''}

                handleOnChangeInput={handleOnChangeInput}
              />
            )
          )}
          <button onClick={handleOnClickSaveData}>Save data</button>
          <button onClick={handleCloseModal}>Close Modal</button>
        </ReactModal>
      ) || null}
      
      <div className={`${styles.showEdit} ${inline ? styles.showEditContainerInline : styles.showEditContainer}`}>
        {config && (
          <button className={styles.button} onClick={handleOnClickEdit}>
            Edit
          </button>
        ) || null}
        <button className={styles.button} onClick={handleOnClickDelete}>
          Delete
        </button>
      </div>
    </>
  )
}