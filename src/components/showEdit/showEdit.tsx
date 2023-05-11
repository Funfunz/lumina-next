'use client';

import { Context } from '@/context/context-provider'
import styles from './showEdit.module.css'
import { useCallback, useContext, useState } from 'react'
import ReactModal from 'react-modal'

type Props = {
  id: string,
  onUpdate: (data: any) => void,
  config: {
    [key: string]: string
  }
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

export const ShowEdit = ({id, onUpdate, config}: Props) => {
  let { editor } = useContext(Context)
  let  [showModal, setShowModal] = useState(false)
  
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
      const newData = {
        href: 'testhref',
        title: 'testtitle',
        description: 'testdescription',

      }
      onUpdate(newData)
    },
    [id]
  )

  if (!editor) return null

  return (
    <>
      <ReactModal 
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
      >
        {Object.entries(config).map(
          ([configKey, configValue], index) =>  (
            <p key={index}>{configKey}: {configValue}</p>
          )
        )}
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