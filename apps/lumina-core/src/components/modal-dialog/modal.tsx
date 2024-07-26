//some ideas taken from here https://www.youtube.com/watch?v=m-c5pd3pp5I

import { Title } from "../title/title"
import { Button } from "../button/button"
import styles from "./modal.module.scss"
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react"
import { AddComponentButton } from "../action-buttons/add/add-component"
import Select from "react-select"
import { configs } from "@/staticComponentsPath"
import { TSelectedOption } from "@/models/editor-buttonModel"
import cx from "classnames"

type TProps = {
  id?: string
  selectedOption?: TSelectedOption
  handleSelectChange?: (options: any) => void
  newComponentFriendlyName?: string
  handleOnChangeNewComponentFriendlyName?: (event: ChangeEvent<HTMLInputElement>) => void
  openModal: boolean
  setOpenModal: (open: boolean) => void
}

export const Modal = ({
  id,
  selectedOption,
  handleSelectChange,
  newComponentFriendlyName,
  handleOnChangeNewComponentFriendlyName,
  openModal, setOpenModal}:TProps) => {

    const ref = useRef<HTMLDialogElement>(null);

    useLayoutEffect(() => {
      if (openModal && !ref.current?.open){
        ref.current?.showModal();
        setOpenModal(true)
      }else if(!openModal && ref.current?.open){
        ref.current?.close();
        setOpenModal(false)
      }
    }, [openModal, setOpenModal])

    const options = Object.keys(configs).map((opt) => {
      return {
        value: opt,
        label: configs[opt].name,
      };
    });

  return(
    <>
      <dialog ref={ref} className={styles.modal} onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close();
        }
      }}>
      <i className={cx("lum-icon-component", styles.modalIcon)}><Title classnames={styles.modalTitle} content="Add Component"></Title></i>
      <form method="dialog" className={styles.modalForm}>
      <label>Select the Component</label>
      <Select
        id={`deleteComponent_dropdown_${id}`}
        value={selectedOption}
        options={options}
        placeholder="Select a component..."
        onChange={handleSelectChange}
        className={styles.modalDrop}
      />
      <label>Type a Friendly Name</label>
      <input className={styles.inputFriendly} id={`deleteComponent_friendlyName_${id}`}
        type="text"
        value={newComponentFriendlyName}
        onChange={handleOnChangeNewComponentFriendlyName}
        placeholder="Input Text"/>
      <div className={styles.btnContainer}><AddComponentButton
        buttonType="button"
        text="Add"
        className="ModalBtn"
        style="secondary"
        size="large"
        />
        <Button className={styles.modalBtn}
        buttonType="button"
        text="Close"
        onClick={() => setOpenModal(false)}
        />
        </div>
        </form>
      </dialog>
    </>
  )
  }


