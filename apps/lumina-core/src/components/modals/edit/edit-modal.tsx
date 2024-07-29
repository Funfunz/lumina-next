import { Title } from "@/components/title/title"
import { Form, LuminaInputRenderer } from "@/components/editor-button/inputRenderer"
import ReactModal from "react-modal"
import styles from "../modals.module.scss"
import { Button } from "@/components/button/button";
import cx from "classnames"
import { EDITMODAL, useToggleModalContext } from "@/context/toggleModalContext";
import { useCallback, useEffect, useState } from "react";
import { useLuminaContext } from "@/context/contextProvider";

export const EditModal = () => {
  const { dispatch } = useLuminaContext()
  const { handleCloseModal, modalState } = useToggleModalContext()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState(modalState.data || {});
  const { id, onUpdate, isOpen, config, modalType } = modalState

  useEffect(() => {
    setIsModalOpen(isOpen && modalType === EDITMODAL)
  }, [isOpen, modalType])

  const handleOnClickSaveData = () => {
    handleCloseModal()
    onUpdate && onUpdate(formData);
    dispatch({
      type: "updateBackend",
      data: {
        props: formData,
        id,
      },
    })
    dispatch({
      type: "updateComponent",
      data: {
        newProps: formData,
        id,
      },
    })
  }

  const handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value,
      })
    },
    [formData]
  )

  console.log("isOpen", isModalOpen)
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isModalOpen}
      contentLabel="Component editor"
      className={cx(styles.modalEdit)}
      overlayClassName={styles.modalOverlay}
    >
      <Title content={config?.name} />
      <Form>
        {config?.props?.map((configItem, index) => (
          <LuminaInputRenderer
            key={index}
            config={configItem}
            value={formData[configItem.name] || ""}
            handleOnChangeInput={handleOnChangeInput}
          />
        ))}
      </Form>
      <div className={styles.inlineButtons}>
        <Button
          buttonType="button"
          text="Save data"
          style="primary"
          onClick={handleOnClickSaveData}
        />
        <Button
          buttonType="button"
          text="Close Modal"
          style="primary"
          onClick={handleCloseModal}
        />
      </div>
    </ReactModal>
  )
}
