'use client';

import { useAppContext } from '@/context/contextProvider'
import styles from './showEdit.module.css'
import { ChangeEvent, useCallback, useState } from 'react'
import ReactModal from 'react-modal'
import { IComponentProps } from '@/data/data';

type Props = {
  id: string,
  onUpdate: (data: any) => void,
  config: {
    [key: string]: string
  }
  data: IComponentProps
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

const renderInput = (type: string, name: string, value: string | number, handleOnChangeInput: (event: ChangeEvent<HTMLInputElement>) => void) => {
  let element = <input type={type} value={value} name={name} onChange={handleOnChangeInput}></input>
  return element
}

export const ShowEdit = ({id, onUpdate, config, data}: Props) => {
  let { state: { appContext: { editor } }, dispatch } = useAppContext()
  let  [showModal, setShowModal] = useState(false)
  let  [formData, setFormData] = useState(data)
  
  let handleOnClickEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(true)
    },
    [id]
  )

  let handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      alert('Delete button clicked from ' + id)
    },
    [id]
  )

  let handleCloseModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(false)
    },
    [id]
  )
  
  let handleOnChangeInput = useCallback(
    (inputKey: string) => {
      return (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [inputKey]: event.target.value
        })
      }
    },
    [id, formData]
  )

  let handleOnClickSaveData = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setShowModal(false)
      onUpdate(formData)
      dispatch({
        type: 'updateBackend',
        data: {
          props: formData,
          id,
        }
      })
    },
    [formData, onUpdate]
  )

  if (!editor) return null

  return (
    <>
      <ReactModal 
          ariaHideApp={false}
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
      >
        {Object.entries(config).map(
          ([configKey, configValue], index) =>  (
            <div key={index}>
              {renderInput(configValue, configKey, formData[configKey] || '', handleOnChangeInput(configKey))}
            </div>
          )
        )}
        <button onClick={handleOnClickSaveData}>Save data</button>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
      <div className={styles.showEditContainer}>
        <button className={styles.button} onClick={handleOnClickEdit}>
          Edit
        </button>
        <button className={styles.button} onClick={handleOnClickDelete}>
          Delete
        </button>
      </div>
    </>
  )
}