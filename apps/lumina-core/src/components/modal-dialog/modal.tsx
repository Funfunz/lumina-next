import { Title } from "../title/title"
import { Button } from "../button/button"
import styles from "./modal.module.scss"
import { useState } from "react"
import { AddComponentButton } from "../action-buttons/add/add-component"

export const Modal = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);

  const handleOpenModal = () =>{
    setShowModalAdd(!showModalAdd)
  }

  const handleOpenAddComponentModal = () => {
    setShowModalAdd(false);
    setShowAddComponentModal(true);
  }

  return(
    <>
    <Button buttonType="button" text="Open" style="primary" onClick={handleOpenModal}/>
    {showModalAdd && <dialog className={styles.modalContainer}>
      <Title content="Modal Test"></Title>
      <form method="dialog" className={styles.modalForm}>
      <AddComponentButton
        buttonType="button"
        style="menuButton"
        text="Add Children"
        iconLeft="lum-icon-plus"
        onClick={handleOpenAddComponentModal}
        />
      </form>
    </dialog>}
    {showAddComponentModal && <dialog className={styles.modalContainer}>
    <AddComponentButton
        buttonType="button"
        style="menuButton"
        text="Add Children"
        iconLeft="lum-icon-plus"
        />
    </dialog>}
    </>
  )

}
