import type { TSelectedOption } from '@/models/editor-buttonModel'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import type { IComponentProps } from '@/models/data'
import { ADDCOMPONENT, AddComponentModal } from './addComponentModal'
import { EDITCOMPONENT, EditComponentModal } from './editComponentModal'
import { DELETECOMPONENT, DeleteComponentModal } from './deleteComponentModal'
import { ADDPAGE, AddPageModal } from './addPageModal'
import { DELETEPAGE, DeletePageModal } from './deletePageModal'

export type TAddModalProps = {
  selectedOption: TSelectedOption | undefined
  cmpName: string
  formData: IComponentProps | undefined
}

export const EditorModal = () => {
  const {
    modalState: { modalType },
  } = useToggleModalContext<{ modalType: string }>()

  switch (modalType) {
    case ADDCOMPONENT:
      return <AddComponentModal />
    case EDITCOMPONENT:
      return <EditComponentModal />
    case DELETECOMPONENT:
      return <DeleteComponentModal />
    case ADDPAGE:
      return <AddPageModal />
    case DELETEPAGE:
      return <DeletePageModal />
    default:
      return null
  }
}
