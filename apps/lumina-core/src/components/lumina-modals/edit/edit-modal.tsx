import { LuminaTitle } from "@/components/lumina-title/lumina-title"
import { Form, InputRenderer } from "@/components/showEdit/inputRenderer"
import { useCallback, useState } from "react";
import ReactModal from "react-modal"
import styles from "../modals.module.scss"
import { Button } from "@/components/button/buttons";
import { TConfig } from "@/models/showEditModel";
import { IComponentProps } from "@/data/data";

type TProps = {
  showModalEdit: boolean
  handleCloseModal: () => void
  handleOnClickSaveData: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleOnChangeInput: (key: string, value: string | number) => void
  config: TConfig
  formData: IComponentProps
}

export const EditModal = (
  { showModalEdit,
    handleCloseModal,
    handleOnClickSaveData,
    handleOnChangeInput,
    config,
    formData }: TProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showModalEdit}
      contentLabel="Component editor"
      className={styles.modalEdit}
      overlayClassName={styles.modalOverlay}
    >
      <LuminaTitle title={config.name} />
      <Form>
        {config.props!.map((configItem, index) => (
          <InputRenderer
            key={index}
            config={configItem}
            value={formData[configItem.name] || ""}
            handleOnChangeInput={handleOnChangeInput}
          />
        ))}
      </Form>
      <div className={styles.inlineButtons}>
        <Button
          text="Save data"
          color="primary"
          onClick={handleOnClickSaveData}
        />
        <Button
          text="Close Modal"
          color="secondary"
          outline
          onClick={handleCloseModal}
          iconRight="lumina-cross"
        />
      </div>
    </ReactModal>
  )
}