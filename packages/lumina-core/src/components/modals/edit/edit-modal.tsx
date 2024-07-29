import { Title } from "@/components/title/title"
import { Form, LuminaInputRenderer } from "@/components/editor-buttons-container/inputRenderer"
import ReactModal from "react-modal"
import { Button } from "@/components/button/button";
import { IComponentProps } from "@/models/data";
import cx from "classnames"
import { TConfig } from "@/models/editor-buttonModel";

type TProps = {
  showModalEdit: boolean
  handleCloseModal: () => void
  handleOnClickSaveData: () => void
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
      className='modalEdit'
      overlayClassName='modalOverlay'
    >
      <Title content={config.name} />
      <Form>
        {config.props!.map((configItem, index) => (
          <LuminaInputRenderer
            key={index}
            config={configItem}
            value={formData[configItem.name] || ""}
            handleOnChangeInput={handleOnChangeInput}
          />
        ))}
      </Form>
      <div className='inlineButtons'>
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
