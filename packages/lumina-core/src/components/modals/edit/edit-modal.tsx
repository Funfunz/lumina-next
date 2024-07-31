/* eslint-disable no-unused-vars */
import { Title } from "@/components/title/title"
import { Form, LuminaInputRenderer } from "@/components/editor-buttons-container/inputRenderer"
import ReactModal from "react-modal"
import { Button } from "@/components/button/button"
import { EDITMODAL, useToggleModalContext } from "@/context/handleModalsContext"
import { useCallback, useEffect, useState } from "react"
import { useLuminaContext } from "@/context/contextProvider"

export const EditModal = () => {
  const { dispatch } = useLuminaContext()
  const { handleCloseModal, modalState } = useToggleModalContext()
  const { id, onUpdate, isOpen, config, modalType } = modalState
  const [formData, setFormData] = useState(modalState.data || {})

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  /**
   * 
   */
  useEffect(() => {
    setIsModalOpen(isOpen && modalType === EDITMODAL)
  }, [modalType, isOpen, modalState])

  /**
   * 
   */
  const handleOnClickSaveData = () => {
    handleCloseModal()
    onUpdate && onUpdate(formData)
    dispatch({
      type: "updateBackend",
      data: {
        props: formData,
        id: id!,
      },
    })
    dispatch({
      type: "updateComponent",
      data: {
        newProps: formData,
        id: id!,
      },
    })
  }

  /**
   * 
   */
  const handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value,
      })
    },
    [formData]
  )

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isModalOpen}
      contentLabel="Component editor"
      className="modalEdit"
      overlayClassName="modalOverlay"
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
      <div className="inlineButtons">
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