import type { TSelectedOption } from '@/models/editor-buttonModel'
import {
  ADDMODAL,
  DELETEMODAL,
  EDITMODAL,
  useToggleModalContext,
} from '@/context/toggleModalContextProvider'
import type { IComponentProps } from '@/models/data'
import { AddComponentModal } from './addComponentModal'
import { EditComponentModal } from './editComponentModal'
import { DeleteComponentModal } from './deleteComponentModal'

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
    case ADDMODAL:
      return <AddComponentModal />
    case EDITMODAL:
      return <EditComponentModal />
    case DELETEMODAL:
      return <DeleteComponentModal />
    default:
      return null
  }
}
