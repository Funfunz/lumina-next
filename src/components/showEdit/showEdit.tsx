'use client';

import { useAppContext } from '@/context/contextProvider'
import styles from './showEdit.module.css'
import { useCallback, useState } from 'react'
import ReactModal from 'react-modal'
import { IComponentProps } from '@/data/data';
import { InputRenderer } from './inputRenderer';

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
            <InputRenderer key={index} type={configValue} name={configKey} value={formData[configKey] || ''} handleOnChangeInput={handleOnChangeInput}/>
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