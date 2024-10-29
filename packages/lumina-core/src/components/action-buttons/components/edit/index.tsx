import { Button } from '@/components/button/index.js'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { useToggleMenuContext } from '@/context/toggleMenuContextProvider.js'
import type { IComponentProps } from '@/models/data.js'
import type { TConfig } from '@/models/editor-buttonModel.js'
import {
  EDITCOMPONENT,
  TToggleModalEditComponentProps,
} from '@/components/modals/editComponentModal/index.js'

type TProps = {
  componentId: string
  componentProps?: IComponentProps
  onUpdate?: (data: IComponentProps) => void
  config: TConfig
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * Enables to create the Edit Component button easily with fewer props
 * @param param0
 * @returns
 */
export const EditComponentButton = ({
  componentId,
  componentProps,
  onUpdate,
  config,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TProps) => {
  const { handleOpenModal } = useToggleModalContext<TToggleModalEditComponentProps>()
  const { handleToggleMenu } = useToggleMenuContext()

  const handleToggleEditModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleOpenModal({
      id: componentId,
      componentProps,
      config,
      modalType: EDITCOMPONENT,
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
