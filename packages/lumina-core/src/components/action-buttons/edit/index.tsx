/* eslint-disable no-unused-vars */
import { Button } from '@/components/button'
import { EDITMODAL, useToggleModalContext } from '@/context/handleModalsContext'
import { useToggleMenuContext } from '@/context/toggleMenuContext'
import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'

type TProps = {
  componentId: string
  data: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config: TConfig
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
  isHovered?: boolean
}

/**
 * Enables to create the Edit Component button easily with fewer props
 * @param param0
 * @returns
 */
export const EditComponentButton = ({
  componentId,
  data,
  onUpdate,
  config,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TProps) => {
  const { handleOpenModal } = useToggleModalContext()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleEditModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleOpenModal({
      id: componentId,
      data,
      config,
      modalType: EDITMODAL,
      onUpdate,
    })
    handleToggleMenu(componentId)
  }

  return (
    <Button
      buttonType='button'
      onClick={handleToggleEditModal}
      text={buttonLabel}
      style={isMenuButton ? 'menuButton' : 'secondary'}
      iconLeft='lum-icon-edit'
      disabled={isDisabled}
    />
  )
}
