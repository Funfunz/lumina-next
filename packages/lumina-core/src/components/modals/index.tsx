import type { TSelectedOption } from '@/models/editor-buttonModel'
import {
  ADDCOMPONENT,
  EDITCOMPONENT,
  DELETECOMPONENT,
  ADDPAGE,
  useToggleModalContext,
} from '@/context/toggleModalContextProvider'
import type { IComponentProps } from '@/models/data'
import { AddComponentModal } from './addComponentModal'
import { EditComponentModal } from './editComponentModal'
import { DeleteComponentModal } from './deleteComponentModal'
import { AddPageModal } from './addPageModal'

export type TAddModalProps = {
  selectedOption: TSelectedOption | undefined
  cmpName: string
  formData: IComponentProps | undefined
}

export const EditorModal = () => {
  const {
    modalState: { modalType },
  } = useToggleModalContext()

  switch (modalType) {
    case ADDCOMPONENT:
      return <AddComponentModal />
    case EDITCOMPONENT:
      return <EditComponentModal />
    case DELETECOMPONENT:
      return <DeleteComponentModal />
    case ADDPAGE:
      return <AddPageModal />
    default:
      return null
  }
}
